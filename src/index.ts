import { projectsSeed } from './seed-data';
import { contentSeed } from './seed-content';
import fs from 'node:fs';
import path from 'node:path';

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

  for (const project of projectsSeed.en) {
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

  for (const project of projectsSeed.es) {
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
    if (process.env.NODE_ENV !== 'development') return;
    try {
      await seedLocales(strapi);
      await seedContent(strapi);
      await seedProjects(strapi);
    } catch (err) {
      strapi.log.warn(`[seed] skipped: ${(err as Error).message}`);
    }
  },
};
