// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 👈 enables @/ to mean ./src/
    },
  },
  server: {
    host: true, // This makes the server accessible externally
    hmr: {
      overlay: false, // This disables the HMR error overlay
    },
    allowedHosts: [
      '5173-iw3fupnqdsrw9hrg554lc-d88fce36.manusvm.computer' // Add the exposed host here
    ]
  },
});


