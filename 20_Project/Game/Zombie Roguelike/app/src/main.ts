// main.ts — Vite entry. Loads global styles and boots the legacy game bundle.
// The legacy bundle is a transitional single-module paste of the vanilla game
// script; it is wrapped in `bootLegacyGame()` so its top-level DOM queries
// (getElementById('game'), etc.) only fire once the body markup is parsed.
import '@fontsource/bangers/latin-400.css';
import '@fontsource/nunito/latin-700.css';
import '@fontsource/nunito/latin-800.css';
import '@fontsource/nunito/latin-900.css';
import '@fontsource/noto-sans-sc/chinese-simplified-700.css';
import '@fontsource/noto-sans-sc/chinese-simplified-800.css';
import '@fontsource/noto-sans-sc/chinese-simplified-900.css';
import '@fontsource/zcool-kuaile/chinese-simplified-400.css';
import './shell/styles.css';
import { bootLegacyGame } from './legacy/game';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => bootLegacyGame());
} else {
  bootLegacyGame();
}
