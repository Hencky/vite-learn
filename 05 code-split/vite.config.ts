import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       'react-lib': ['react', 'react-dom'],
    //       ui: ['antd'],
    //     },
    //   },
    // },
  },
});
