import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [viteSingleFile()],
  server: {
    host: true,
  },
  build: {
    target: 'es2022',
    assetsInlineLimit: 100_000_000,
  },
});
