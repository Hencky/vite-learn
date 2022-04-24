import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pluginDemo from './plugins/demo';
import { configHookPlugin } from './plugins';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginDemo(), configHookPlugin()],
});
