import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',   // 🔥 permet aux autres appareils (comme ton téléphone) d’y accéder
    port: 5175,
    strictPort: true,
    cors: true
  }
});
