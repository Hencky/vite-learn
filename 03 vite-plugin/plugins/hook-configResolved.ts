import { type Plugin, type ResolvedConfig } from 'vite';

export const hookConfigResolved: () => Plugin = () => {
  let config: ResolvedConfig;

  return {
    name: 'vite-plugin-hook-config-resolved',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    transform(code, id) {
      // 其他钩子可以拿到config
      // console.log(config);
    },
  };
};
