const uid = 'api::content.content' as any;

export default {
  find: async (ctx: any) => {
    const result = await strapi.documents(uid).findFirst(ctx.query);
    return { data: result };
  },
};
