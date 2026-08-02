export default {
  routes: [
    {
      method: 'GET',
      path: '/projects',
      handler: 'project.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/projects/:documentId',
      handler: 'project.findOne',
      config: {
        auth: false,
      },
    },
  ],
};
