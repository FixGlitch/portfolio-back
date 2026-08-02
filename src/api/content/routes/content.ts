export default {
  routes: [
    {
      method: 'GET',
      path: '/content',
      handler: 'content.find',
      config: {
        auth: false,
      },
    },
  ],
};
