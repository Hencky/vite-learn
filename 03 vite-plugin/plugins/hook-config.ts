import path from 'path';
import { type Plugin } from 'vite';

const configHookPlugin: () => Plugin = () => {
  return {
    name: 'vite-pluign-hook-config',
    config() {
      return {
        resolve: {
          alias: {
            '@': path.join(__dirname, '../src'),
          },
        },
      };
    },
  };
};

export { configHookPlugin };
