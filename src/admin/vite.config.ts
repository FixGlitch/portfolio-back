import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  return mergeConfig(config, {
    optimizeDeps: {
      include: [
        'fast-deep-equal',
        'hoist-non-react-statics',
        'stylis',
        'aria-hidden',
      ],
    },
  });
};
