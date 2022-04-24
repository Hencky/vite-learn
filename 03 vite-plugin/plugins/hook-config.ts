import path from 'path';
import { type Plugin } from 'vite';

export const hookConfig: () => Plugin = () => {
  return {
    name: 'vite-pluign-hook-config',
    config(config, { command, mode }) {
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
