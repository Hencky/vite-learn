import { type Plugin } from 'vite';

export const HookConfigureServer: () => Plugin = () => {
  return {
    name: 'vite-plugin-hook-configureServer',
    configureServer(server) {
      // 增加自定义server中间件,在vite内置中间件之前执行
      server.middlewares.use((req, res, next) => {
        // 自定义请求处理
      });

      // 在vite内置中间件之后执行
      return () => {
        server.middlewares.use((req, res, next) => {
          // 自定义请求处理
        });
      };
    },
  };
};
