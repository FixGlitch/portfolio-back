import { flagshipProjectsSeed } from './seed-flagship';

import { contentSeed } from './seed-content';
import fs from 'node:fs';
import path from 'node:path';

// Only the flagship projects are seeded. The old demo entries in seed-data.ts are left out.
const allProjectsSeed = flagshipProjectsSeed;

const contentUid = 'api::content.content';
const projectUid = 'api::project.project';

async function seedLocales(strapi: any) {
  const localesService = strapi.plugin('i18n').service('locales');
  for (const [code, name] of [
    ['en', 'English (en)'],
    ['es', 'Spanish (es)'],
  ]) {
    const existing = await localesService.findByCode(code);
    if (existing) continue;
    await localesService.create({ name, code });
    strapi.log.info(`[seed] locale created: ${code}`);
  }
}

async function seedContent(strapi: any) {
  const enExisting = await strapi.documents(contentUid).findFirst({ locale: 'en' });

  if (!enExisting) {
    const created = await strapi.documents(contentUid).create({
      data: { ...contentSeed.en },
      locale: 'en',
      status: 'published',
    });
    strapi.log.info(`[seed] content created (en)`);

    await strapi.documents(contentUid).create({
      data: { ...contentSeed.es },
      documentId: created.documentId,
      locale: 'es',
      status: 'published',
    });
    strapi.log.info(`[seed] content localized (es)`);
  } else {
    const esExisting = await strapi.documents(contentUid).findFirst({ locale: 'es' });
    if (!esExisting) {
      await strapi.documents(contentUid).create({
        data: { ...contentSeed.es },
        documentId: enExisting.documentId,
        locale: 'es',
        status: 'published',
      });
      strapi.log.info(`[seed] content localized (es)`);
    }
  }
}

// Adds keys that exist in the seed but are missing from the stored content.
// Existing values are never overwritten, so edits made in the admin are kept.
async function syncContentKeys(strapi: any) {
  for (const locale of ['en', 'es'] as const) {
    const seed = contentSeed[locale];
    const existing = await strapi.documents(contentUid).findFirst({ locale });
    if (!existing) continue;

    const data: Record<string, Record<string, unknown>> = {};
    for (const [section, values] of Object.entries(seed)) {
      if (!values || typeof values !== 'object' || Array.isArray(values)) continue;
      const current = (existing[section] ?? {}) as Record<string, unknown>;
      const missing = Object.keys(values).filter((key) => !(key in current));
      if (missing.length === 0) continue;
      data[section] = { ...current, ...Object.fromEntries(missing.map((key) => [key, (values as any)[key]])) };
    }

    const sections = Object.keys(data);
    if (sections.length === 0) continue;

    await strapi.documents(contentUid).update({ documentId: existing.documentId, locale, data });
    await strapi.documents(contentUid).publish({ documentId: existing.documentId, locale });
    strapi.log.info(`[seed] content keys synced (${locale}): ${sections.join(', ')}`);
  }
}

async function ensureImage(strapi: any, fileName: string | null): Promise<number | null> {
  if (!fileName) return null;
  const name = path.basename(fileName);
  const srcPath = path.join(process.cwd(), '..', 'portfolio-front', 'public', 'uploads', name);
  if (!fs.existsSync(srcPath)) {
    strapi.log.warn(`[seed] image not found, skipping: ${srcPath}`);
    return null;
  }

  const existing = await strapi.db.query('plugin::upload.file').findOne({
    where: { name },
  });
  if (existing) return existing.id;

  try {
    const uploaded = await strapi.plugin('upload').service('upload').upload({
      data: { fileInfo: { name, alternativeText: name } },
      files: {
        filepath: srcPath,
        path: srcPath,
        originalFilename: name,
        mimetype: 'image/jpeg',
        size: fs.statSync(srcPath).size,
      },
    });
    return uploaded[0]?.id ?? null;
  } catch (err) {
    strapi.log.warn(`[seed] upload failed for ${name}: ${(err as Error).message}`);
    return null;
  }
}

async function seedProjects(strapi: any) {
  const parentIds: Record<string, string> = {};

  for (const project of allProjectsSeed.en) {
    const existing = await strapi.documents(projectUid).findFirst({
      locale: 'en',
      filters: { slug: project.slug },
    });
    if (existing) {
      parentIds[project.slug] = existing.documentId;
      continue;
    }

    const imageId = await ensureImage(strapi, project.image);

    const created = await strapi.documents(projectUid).create({
      data: {
        title: project.title,
        slug: project.slug,
        subtitle: project.subtitle,
        summary: project.summary,
        metaDescription: project.metaDescription,
        tags: project.tags,
        content: project.content,
        image: imageId,
      },
      locale: 'en',
      status: 'published',
    });
    parentIds[project.slug] = created.documentId;
    strapi.log.info(`[seed] project created: ${project.slug} (en)`);
  }

  for (const project of allProjectsSeed.es) {
    const existing = await strapi.documents(projectUid).findFirst({
      locale: 'es',
      filters: { slug: project.slug },
    });
    if (existing) continue;

    const imageId = await ensureImage(strapi, project.image);

    await strapi.documents(projectUid).create({
      data: {
        title: project.title,
        slug: project.slug,
        subtitle: project.subtitle,
        summary: project.summary,
        metaDescription: project.metaDescription,
        tags: project.tags,
        content: project.content,
        image: imageId,
      },
      documentId: parentIds[project.slug],
      locale: 'es',
      status: 'published',
    });
    strapi.log.info(`[seed] project localized: ${project.slug} (es)`);
  }
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: any }) {
    try {
      // Locales, content and key sync are safe in every environment: they only create missing data.
      await seedLocales(strapi);
      await seedContent(strapi);
      await syncContentKeys(strapi);
      // Sample projects use images from the frontend repo, so they are only seeded in development.
      if (process.env.NODE_ENV === 'development') {
        await seedProjects(strapi);
      }
    } catch (err) {
      strapi.log.warn(`[seed] skipped: ${(err as Error).message}`);
    }
  },
};
