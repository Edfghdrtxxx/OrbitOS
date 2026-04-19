import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Zombie Roguelike',
        short_name: 'Zombies',
        description: 'Single-player top-down zombie roguelike.',
        theme_color: '#0b0d10',
        background_color: '#0b0d10',
        display: 'fullscreen',
        orientation: 'landscape',
        start_url: '/',
        scope: '/',
        icons: [],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest}'],
        navigateFallback: '/index.html',
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  server: {
    host: true,
  },
  build: {
    target: 'es2022',
  },
});
