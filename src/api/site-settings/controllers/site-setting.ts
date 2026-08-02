export default {
  find: async (ctx: any) => {
    const result = await strapi.documents('api::site-settings.site-setting').findFirst(ctx.query);
    return { data: result };
  },
};
