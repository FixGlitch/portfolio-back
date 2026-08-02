export default {
  find: async (ctx: any) => {
    const { locale, populate, ...query } = ctx.query || {};
    const results = await strapi.documents('api::project.project').findMany({
      ...query,
      populate: populate === '*' ? { image: true } : populate || { image: true },
      locale: locale || 'en',
      status: 'published',
    });
    return { data: results };
  },

  findOne: async (ctx: any) => {
    const { documentId } = ctx.params || {};
    const { populate } = ctx.query || {};
    const result = await strapi.documents('api::project.project').findOne({
      documentId,
      populate: populate === '*' ? { image: true } : populate || { image: true },
      status: 'published',
    });
    if (!result) {
      return ctx.notFound();
    }
    return { data: result };
  },
};
