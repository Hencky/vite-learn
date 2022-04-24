import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pluginDemo from './plugins/demo';
import pluginPrority from './plugins/priority';
import {
  hookConfig,
  hookConfigResolved,
  hookTransformIndexHtml,
} from './plugins';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginDemo(),
    hookConfig(),
    hookConfigResolved(),
    hookTransformIndexHtml(),
    pluginPrority(),
  ],
});
