import { settingsSeed, projectsSeed } from './seed-data';
import fs from 'node:fs';
import path from 'node:path';

const settingsUid = 'api::site-settings.site-setting';
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

async function seedSettings(strapi: any) {
  for (const locale of ['en', 'es'] as const) {
    const existing = await strapi.documents(settingsUid).findFirst({ locale });
    if (existing) continue;
    await strapi.documents(settingsUid).create({
      data: { ...settingsSeed[locale] },
      locale,
      status: 'published',
    });
    strapi.log.info(`[seed] settings created (${locale})`);
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

  const esRows = await strapi.documents(projectUid).findMany({ locale: 'es', status: 'published' });
  const enRows = await strapi.documents(projectUid).findMany({ locale: 'en', status: 'published' });
  console.log(`[dbg] en rows: ${enRows.length}, es rows: ${esRows.length}`);
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: any }) {
    if (process.env.NODE_ENV !== 'development') return;
    try {
      await seedLocales(strapi);
      await seedSettings(strapi);
      await seedProjects(strapi);
    } catch (err) {
      strapi.log.warn(`[seed] skipped: ${(err as Error).message}`);
    }
  },
};
