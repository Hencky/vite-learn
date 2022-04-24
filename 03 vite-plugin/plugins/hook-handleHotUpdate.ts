import { type Plugin } from 'vite';

export const hookHandleHotUpdate: () => Plugin = () => {
  return {
    name: 'vite-plugin-hook-handleHotUpdate',
    handleHotUpdate(ctx) {
      const { server } = ctx;

      // HMR事件
      server.ws.send({
        type: 'custom',
        event: 'custom-hot-update',
        data: {},
      });
    },
  };
};

// 前端代码中
// if (import.meta.hot) {
//   import.meta.hot.on('custom-hot-update', (data) => {
//     // 自定义更新逻辑
//   })
// }
