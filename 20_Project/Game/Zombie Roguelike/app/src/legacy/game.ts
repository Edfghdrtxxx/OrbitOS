// @ts-nocheck
// ============================================================================
// legacy/game.ts — transitional bundle
// ----------------------------------------------------------------------------
// This is the residual game script from zombie_roguelike.html after T3's pure-
// data extractions. Minimal edits only: imports added at the top; byte-identical
// constants/helpers removed (they are now provided by the modules below).
// Strict types will be layered in later refactor phases; for now @ts-nocheck
// keeps the transitional bundle compiling while the logic is untouched.
//
// Imports below resolve to:
//   ../types          -> shared TS interfaces
//   ../constants      -> TAU, WORLD_W/H, CANVAS_W/H, ROOMS_PER_FLOOR, COMBAT_ROOMS,
//                        BASIC_OBSTACLES, PLATFORM_LIFT, DIFFICULTY_TIER_INTERVAL,
//                        CHECKPOINT_KEY, CHECKPOINTS_KEY, CHECKPOINT_SLOTS,
//                        STORAGE_KEYS, SHAKE_SCALE
//   ../util/math      -> lerp, clamp, dist2, rand, randi, choice, lighten, lerpAngle
//   ../content/i18n   -> I18N, DIFFICULTY_TIERS_ZH
//   ../content/themes -> FLOORS, THEMES, THEME_ALIASES
//   ../content/zombies-> ZTYPES, BOSS_KINDS, isBossKind
//   ../content/upgrades  -> UPGRADES, UPG_BY_ID
//   ../content/superpowers -> SUPERPOWERS, SP_BY_ID
//   ../content/skins  -> SKINS, SKIN_BY_ID
//   ../content/difficulty -> DIFFICULTY_TIERS
//   ../content/crazyDave  -> CRAZY_DAVE_LINES
// ============================================================================
import {
  TAU,
  WORLD_W, WORLD_H,
  CANVAS_W, CANVAS_H,
  ROOMS_PER_FLOOR, COMBAT_ROOMS, BASIC_OBSTACLES,
  PLATFORM_LIFT,
  DIFFICULTY_TIER_INTERVAL,
  CHECKPOINT_KEY, CHECKPOINTS_KEY, CHECKPOINT_SLOTS,
  STORAGE_KEYS,
  SHAKE_SCALE,
} from '../constants';
import {
  lerp, clamp, dist2, rand, randi, choice,
  lighten, lerpAngle,
} from '../util/math';
import { I18N, DIFFICULTY_TIERS_ZH } from '../content/i18n';
import { FLOORS, THEMES, THEME_ALIASES } from '../content/themes';
import { ZTYPES, BOSS_KINDS, isBossKind } from '../content/zombies';
import { UPGRADES, UPG_BY_ID } from '../content/upgrades';
import { SUPERPOWERS, SP_BY_ID } from '../content/superpowers';
import { SKINS, SKIN_BY_ID } from '../content/skins';
import { DIFFICULTY_TIERS } from '../content/difficulty';
import { CRAZY_DAVE_LINES } from '../content/crazyDave';

export function bootLegacyGame() {

// =============================================================
// ZOMBIE ROGUE — roguelike top-down shooter
// =============================================================

const canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');
const mainCtx = ctx;
const W = canvas.width, H = canvas.height;

// ------------- UTIL --------------------------------------------

// ------------- AUDIO -------------------------------------------
let audioCtx = null;
function initAudio() { if (!audioCtx) { try { audioCtx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e) {} } }
function beep(freq, duration, type='square', vol=0.06, sweep=0) {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (sweep) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq+sweep), t+duration);
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t+duration);
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.start(t); osc.stop(t+duration+0.02);
}
function sfx(name) {
  if (!audioCtx) return;
  switch(name) {
    case 'shoot':   beep(880, 0.05, 'square', 0.04, -500); break;
    case 'hit':     beep(200, 0.07, 'sawtooth', 0.06, -100); break;
    case 'reload':  beep(400, 0.05, 'triangle', 0.04); setTimeout(()=>beep(600, 0.05, 'triangle', 0.04), 120); break;
    case 'die':     beep(150, 0.25, 'sawtooth', 0.08, -80); break;
    case 'hurt':    beep(120, 0.15, 'square', 0.09, -60); break;
    case 'pickup':  beep(600, 0.07, 'sine', 0.07); setTimeout(()=>beep(900, 0.08, 'sine', 0.07), 70); break;
    case 'wave':    beep(300, 0.12, 'sawtooth', 0.07); setTimeout(()=>beep(500, 0.18, 'square', 0.07), 120); break;
    case 'clear':   [523,659,784,1047].forEach((f,i)=>setTimeout(()=>beep(f,0.1,'triangle',0.08),i*80)); break;
    case 'levelup': [659,784,988,1319].forEach((f,i)=>setTimeout(()=>beep(f,0.09,'triangle',0.08),i*70)); break;
    case 'gameover':[400,300,200,100].forEach((f,i)=>setTimeout(()=>beep(f,0.22,'sawtooth',0.09),i*170)); break;
    case 'dash':    beep(500, 0.09, 'sine', 0.06, 400); break;
    case 'boom':    beep(80, 0.25, 'sawtooth', 0.1, -40); break;
    case 'spit':    beep(250, 0.12, 'sawtooth', 0.05, 100); break;
    case 'boss':    [110,130,150,170,200].forEach((f,i)=>setTimeout(()=>beep(f,0.18,'sawtooth',0.1),i*90)); break;
  }
}

// ------------- CRAZY DAVE VOICE --------------------------------
// Web Speech API chatter. Plays random lines on a loose timer plus discrete
// event triggers (boss spawn, room clear, level up). Settings toggle gates
// everything; localStorage persists the preference.
function speakCrazyDave() {
  if (!game.crazyDaveEnabled) return;
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  const line = CRAZY_DAVE_LINES[Math.floor(Math.random() * CRAZY_DAVE_LINES.length)];
  try {
    const u = new SpeechSynthesisUtterance(line);
    u.rate = 1.35; u.pitch = 1.6; u.volume = 0.9;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  } catch {}
}
function stopCrazyDave() {
  try { if ('speechSynthesis' in window) speechSynthesis.cancel(); } catch {}
}
// Event-driven line (boss spawn, room clear, level up). Cooldown prevents
// spam when several events chain.
function triggerCrazyDaveEvent() {
  if (!game.crazyDaveEnabled) return;
  if (game.crazyDaveEventCdT > 0) return;
  game.crazyDaveEventCdT = 60;
  speakCrazyDave();
}

// ------------- I18N --------------------------------------------

let currentLang = 'en';

function t(key, ...args) {
  const dict = I18N[currentLang] || I18N.en;
  const v = (key in dict) ? dict[key] : I18N.en[key];
  if (typeof v === 'function') return v(...args);
  return v != null ? v : key;
}
function tUpgradeName(id) {
  const d = I18N[currentLang] || I18N.en;
  return (d.upgradeNames && d.upgradeNames[id]) || I18N.en.upgradeNames[id] || id;
}
function tUpgradeDesc(id, level) {
  const d = I18N[currentLang] || I18N.en;
  const fn = (d.upgradeDescs && d.upgradeDescs[id]) || I18N.en.upgradeDescs[id];
  return fn ? fn(level) : '';
}
function tFloorName(zeroIdx) {
  const arr = (I18N[currentLang] && I18N[currentLang].floorNames) || I18N.en.floorNames;
  return arr[Math.max(0, Math.min(arr.length - 1, zeroIdx))];
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const html = el.getAttribute('data-i18n-html') === 'true';
    const text = t(key);
    if (typeof text !== 'string') return;
    if (html) el.innerHTML = text;
    else el.textContent = text;
  });
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  // Refresh dynamic UI parts
  if (typeof renderUpgradeStack === 'function') renderUpgradeStack();
  if (typeof updateHUD === 'function' && game && game.player) updateHUD();
  if (game && game.state === 'upgradeChoice' && typeof renderChoiceCards === 'function') {
    renderChoiceCards();
  }
  if (game && game.state === 'paused' && typeof renderStatsPanel === 'function') {
    renderStatsPanel();
  }
  refreshLangCardActive();
  if (typeof refreshSkinCardActive === 'function') refreshSkinCardActive();
  if (typeof renderSkinCards === 'function') renderSkinCards();
}

function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  try { localStorage.setItem('zr_lang', lang); } catch(e) {}
  applyTranslations();
}

function loadSavedLang() {
  try {
    const s = localStorage.getItem('zr_lang');
    if (s && I18N[s]) { currentLang = s; return true; }
  } catch(e) {}
  return false;
}

function loadSavedSkin() {
  try {
    const s = localStorage.getItem('zr_skin');
    if (s) return s;
  } catch(e) {}
  return null;
}

function setSkin(id) {
  // SKIN_BY_ID may not exist yet at first call — but it's defined right after
  // the UPGRADES table, so by the time wiring runs, it's available.
  if (typeof SKIN_BY_ID !== 'undefined' && !SKIN_BY_ID[id]) return;
  game.skinId = id;
  try { localStorage.setItem('zr_skin', id); } catch(e) {}
  refreshSkinCardActive();
}

function refreshLangCardActive() {
  document.querySelectorAll('.lang-card').forEach(c => {
    if (c.dataset.lang === currentLang) c.classList.add('active');
    else c.classList.remove('active');
  });
}

function refreshSkinCardActive() {
  document.querySelectorAll('.skin-card').forEach(c => {
    if (c.dataset.skin === game.skinId) c.classList.add('active');
    else c.classList.remove('active');
  });
}

// ------------- INPUT -------------------------------------------
const keys = Object.create(null);
const mouse = { x: W/2, y: H/2, worldX: 0, worldY: 0, down: false };
const touchAim = { active: false, angle: 0 };  // mobile right-stick override
// Reset all held inputs. Called at every gameplay-state transition that
// interrupts the `keydown`/`keyup` pairing (pause, level-up freeze, upgrade
// card, death, run start, window blur). Without this the browser never
// delivers a `keyup` while an overlay is open, so WASD/mouse stay "pressed"
// and the player ghosts forward the moment the overlay dismisses.
function clearInputs() {
  for (const k in keys) keys[k] = false;
  mouse.down = false;
  touchAim.active = false;
}
addEventListener('keydown', e => {
  // Upgrade-detail popup: topmost layer. ESC closes; all other keys swallowed
  // so they don't leak to gameplay / pause / level-up underneath.
  const detailOpen = !$('upgradeDetail').classList.contains('hidden');
  if (detailOpen) {
    if (e.key === 'Escape') { e.preventDefault(); hideUpgradeDetail(); return; }
    e.preventDefault();
    return;
  }
  // Stats page: layered above whatever spawned it (pause/upgradeChoice). ESC
  // closes it; all other keys swallow so they don't leak to the overlay below.
  const statsOpen = !$('statsPage').classList.contains('hidden');
  if (statsOpen) {
    if (e.key === 'Escape') { e.preventDefault(); hideStatsPage(); return; }
    // Block arrow/enter/digit from affecting the layer below while stats is up.
    e.preventDefault();
    return;
  }
  // Death replay playback — ESC closes, Space toggles play/pause, Enter restarts.
  if (game.state === 'deathReplay') {
    if (e.key === 'Escape') { e.preventDefault(); stopReplayPlayback(); return; }
    if (e.key === ' ')      { e.preventDefault(); toggleReplayPlayback(); return; }
    if (e.key === 'Enter')  { e.preventDefault(); restartReplayPlayback(); return; }
    e.preventDefault();
    return;
  }
  // Upgrade choice: arrows / 1-3 select, Enter confirms, swallow everything else
  if (game.state === 'upgradeChoice') {
    if (e.key === 'Enter') {
      e.preventDefault();
      confirmSelectedUpgrade();
      return;
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      changeSelection(-1);
      return;
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      changeSelection(1);
      return;
    }
    if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'r') {
      e.preventDefault();
      rerollChoices();
      return;
    }
    if (e.key >= '1' && e.key <= '9') {
      e.preventDefault();
      const idx = parseInt(e.key) - 1;
      if (idx < game.currentChoices.length && idx !== game.selectedChoice) {
        game.selectedChoice = idx;
        updateCardSelection();
        sfx('pickup');
      }
      return;
    }
    // Prevent space from scrolling etc.
    if (e.key === ' ' || e.key === 'Tab') e.preventDefault();
    return;
  }
  // Super power pick (boss bounty): arrows / 1-4 select, Enter confirms.
  // No reroll — the pick is final.
  if (game.state === 'superPowerChoice') {
    if (e.key === 'Enter') { e.preventDefault(); confirmSelectedSuperPower(); return; }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); changeSPSelection(-1); return; }
    if (e.key === 'ArrowRight') { e.preventDefault(); changeSPSelection(1);  return; }
    if (e.key >= '1' && e.key <= '9') {
      e.preventDefault();
      const idx = parseInt(e.key) - 1;
      if (idx < game.currentSPChoices.length && idx !== game.selectedSPChoice) {
        game.selectedSPChoice = idx;
        updateSPCardSelection();
        sfx('pickup');
      }
      return;
    }
    if (e.key === ' ' || e.key === 'Tab') e.preventDefault();
    return;
  }
  // During the 1s pre-pause freeze, ignore all gameplay input
  if (game.state === 'levelup_pending') {
    if (e.key === ' ' || e.key === 'Tab') e.preventDefault();
    return;
  }
  // Normal game key handling
  keys[e.key.toLowerCase()] = true;
  if (e.key.toLowerCase() === 'r') tryReload();
  // Space = Jump (new mechanic), Shift = Dash (rebound). Both keys are
  // swallowed via preventDefault so space/shift don't scroll or trigger
  // browser shortcuts. Shift-key detection uses e.key on keydown because
  // e.key.toLowerCase() yields 'shift' on the first press.
  if (e.key === ' ') { e.preventDefault(); tryJump(); }
  if (e.key === 'Shift') { e.preventDefault(); tryDash(); }
  if (e.key === 'Escape') togglePause();
});
addEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; });
// Alt-tabbing / minimizing / clicking to another window drops the `keyup`
// event for any keys currently held. Wipe the input state on blur so the
// player doesn't return to a window ghost-walking in the last-held direction.
addEventListener('blur', () => { clearInputs(); });
canvas.addEventListener('mousemove', e => {
  const r = canvas.getBoundingClientRect();
  mouse.x = (e.clientX - r.left) * (canvas.width / r.width);
  mouse.y = (e.clientY - r.top)  * (canvas.height / r.height);
});
canvas.addEventListener('mousedown', () => { mouse.down = true; initAudio(); });
canvas.addEventListener('mouseup',   () => { mouse.down = false; });
canvas.addEventListener('contextmenu', e => e.preventDefault());

// ------------- WORLD / CAMERA ----------------------------------
// Bumped to ~1.6x area for wider rooms and real negative-space for jumps/gaps.
// Spawn edges, camera clamp, minimap-free HUD, and all clamp() calls use
// world.w/world.h directly, so a single constant change here propagates.
const world = { w: 2880, h: 1760 };
const camera = { x: 0, y: 0, shake: 0 };
function cameraUpdate() {
  const tx = clamp(game.player.x - W/2, 0, world.w - W);
  const ty = clamp(game.player.y - H/2, 0, world.h - H);
  camera.x = lerp(camera.x, tx, 0.12);
  camera.y = lerp(camera.y, ty, 0.12);
  mouse.worldX = mouse.x + camera.x;
  mouse.worldY = mouse.y + camera.y;
  if (camera.shake > 0.01) camera.shake *= 0.86; else camera.shake = 0;
}
function shakeCam(amt) { camera.shake = Math.min(24 * SHAKE_SCALE, camera.shake + amt * SHAKE_SCALE); }

// ------------- FLOOR THEMES ------------------------------------

// ------------- THEMES (visual + obstacle layout) ----------------
// Player picks one at run start. Each theme provides a single flat background
// color and a shared obstacle pool used across every floor. Optional CSS
// overlay class is applied to #envOverlay.
// Legacy env ids ('default','neon','vhs','vapor') are preserved for localStorage compat.
// Legacy / alias mapping for migrations and safety.
function getTheme(id) {
  const key = THEME_ALIASES[id] || 'default';
  return THEMES[key] || THEMES.default;
}
function themeForFloor(_floor) {
  const theme = getTheme(game.environment);
  return { theme, bg: theme.bg, obstacles: theme.obstacles };
}

// --- Per-theme decorative background tiles ---------------------
// Build each theme's tile pattern once (offscreen canvas) and reuse it as a
// repeating fill. The result is cached in THEME_PATTERN_CACHE keyed by
// theme id.
const THEME_PATTERN_CACHE = Object.create(null);
function buildThemeTile(theme) {
  const spec = theme.tilePattern;
  if (!spec) return null;
  const size = Math.max(32, spec.spacing || 128);
  const cvs = (typeof OffscreenCanvas !== 'undefined')
    ? new OffscreenCanvas(size, size)
    : (() => { const c = document.createElement('canvas'); c.width = c.height = size; return c; })();
  const g = cvs.getContext('2d');
  if (!g) return null;
  g.clearRect(0, 0, size, size);
  const [c1, c2, c3] = spec.colors || ['#ffffff','#000000','#888888'];
  g.globalAlpha = 0.22;
  switch (spec.kind) {
    case 'hexGrid': {
      const r = 18;
      g.strokeStyle = c1; g.lineWidth = 1.2;
      for (let y = 0; y < size + r; y += r * 1.5) {
        for (let x = 0; x < size + r; x += r * Math.sqrt(3)) {
          const ox = (Math.round(y / (r * 1.5)) % 2) ? (r * Math.sqrt(3) / 2) : 0;
          g.beginPath();
          for (let k = 0; k < 6; k++) {
            const a = Math.PI / 3 * k + Math.PI / 6;
            const px = x + ox + Math.cos(a) * r;
            const py = y + Math.sin(a) * r;
            if (k === 0) g.moveTo(px, py); else g.lineTo(px, py);
          }
          g.closePath(); g.stroke();
        }
      }
      g.fillStyle = c2; g.globalAlpha = 0.35;
      for (let i = 0; i < 8; i++) {
        g.beginPath(); g.arc(Math.random()*size, Math.random()*size, 1.5, 0, Math.PI*2); g.fill();
      }
      break;
    }
    case 'scanlines': {
      g.globalAlpha = 0.10;
      g.fillStyle = c1;
      for (let y = 0; y < size; y += 3) g.fillRect(0, y, size, 1);
      g.globalAlpha = 0.06;
      g.fillStyle = c2;
      for (let y = 1; y < size; y += 3) g.fillRect(0, y, size, 1);
      break;
    }
    case 'sand': {
      for (let i = 0; i < 260; i++) {
        g.globalAlpha = 0.08 + Math.random() * 0.18;
        g.fillStyle = Math.random() < 0.5 ? c1 : c3;
        g.fillRect(Math.random()*size, Math.random()*size, 1.2, 1.2);
      }
      g.globalAlpha = 0.15;
      g.strokeStyle = c2; g.lineWidth = 0.6;
      for (let i = 0; i < 4; i++) {
        g.beginPath();
        g.moveTo(0, (i+1)*(size/5));
        for (let x = 0; x <= size; x += 8) g.lineTo(x, (i+1)*(size/5) + Math.sin(x*0.12 + i)*3);
        g.stroke();
      }
      break;
    }
    case 'cracks': {
      g.strokeStyle = c2; g.lineWidth = 1.1;
      g.globalAlpha = 0.28;
      for (let i = 0; i < 9; i++) {
        const x0 = Math.random()*size, y0 = Math.random()*size;
        let x = x0, y = y0;
        g.beginPath(); g.moveTo(x, y);
        const segs = 4 + Math.floor(Math.random()*4);
        for (let s = 0; s < segs; s++) {
          x += (Math.random()-0.5)*28;
          y += (Math.random()-0.5)*28;
          g.lineTo(x, y);
        }
        g.stroke();
      }
      g.globalAlpha = 0.18;
      g.fillStyle = c3;
      for (let i = 0; i < 18; i++) {
        g.beginPath(); g.arc(Math.random()*size, Math.random()*size, 1 + Math.random()*2, 0, Math.PI*2); g.fill();
      }
      break;
    }
    case 'circuit': {
      g.strokeStyle = c1; g.lineWidth = 1.0;
      g.globalAlpha = 0.30;
      const step = 16;
      for (let y = 0; y <= size; y += step) {
        g.beginPath();
        let x = 0;
        g.moveTo(x, y);
        while (x < size) {
          const nx = x + step;
          if (Math.random() < 0.35) { g.lineTo(x, y + step); g.lineTo(nx, y + step); g.lineTo(nx, y); }
          else g.lineTo(nx, y);
          x = nx;
        }
        g.stroke();
      }
      g.fillStyle = c2; g.globalAlpha = 0.4;
      for (let i = 0; i < 14; i++) { g.beginPath(); g.arc(Math.random()*size, Math.random()*size, 1.8, 0, Math.PI*2); g.fill(); }
      break;
    }
    case 'sakura': {
      g.globalAlpha = 0.35;
      for (let i = 0; i < 22; i++) {
        const x = Math.random()*size, y = Math.random()*size, r = 3 + Math.random()*3;
        g.fillStyle = Math.random() < 0.7 ? c1 : c2;
        for (let k = 0; k < 5; k++) {
          const a = (Math.PI*2/5) * k;
          g.beginPath(); g.ellipse(x + Math.cos(a)*r, y + Math.sin(a)*r, r*0.7, r*0.45, a, 0, Math.PI*2); g.fill();
        }
      }
      g.globalAlpha = 0.25;
      g.fillStyle = c3;
      for (let i = 0; i < 30; i++) { g.beginPath(); g.arc(Math.random()*size, Math.random()*size, 1, 0, Math.PI*2); g.fill(); }
      break;
    }
    case 'doomsday':
    default: {
      // Fallback = rubble + hazard stripes. Used by default and modern.
      g.globalAlpha = 0.22;
      g.fillStyle = c3;
      g.save();
      g.translate(size/2, size/2); g.rotate(-Math.PI/8);
      for (let x = -size; x < size; x += 22) g.fillRect(x, -size, 6, size*2);
      g.restore();
      g.globalAlpha = 0.28;
      g.strokeStyle = c2; g.lineWidth = 1.1;
      for (let i = 0; i < 7; i++) {
        let x = Math.random()*size, y = Math.random()*size;
        g.beginPath(); g.moveTo(x, y);
        const segs = 4 + Math.floor(Math.random()*3);
        for (let s = 0; s < segs; s++) {
          x += (Math.random()-0.5)*30;
          y += (Math.random()-0.5)*30;
          g.lineTo(x, y);
        }
        g.stroke();
      }
      g.globalAlpha = 0.18;
      g.fillStyle = c1;
      for (let i = 0; i < 14; i++) { g.beginPath(); g.arc(Math.random()*size, Math.random()*size, 1.5, 0, Math.PI*2); g.fill(); }
      break;
    }
  }
  g.globalAlpha = 1;
  return cvs;
}
function getThemePattern(theme) {
  if (!theme || !theme.tilePattern) return null;
  let entry = THEME_PATTERN_CACHE[theme.id];
  if (!entry) {
    const tile = buildThemeTile(theme);
    entry = { tile, pattern: null };
    THEME_PATTERN_CACHE[theme.id] = entry;
  }
  if (!entry.pattern && entry.tile) {
    try { entry.pattern = ctx.createPattern(entry.tile, 'repeat'); } catch { entry.pattern = null; }
  }
  return entry.pattern;
}

// ------------- ENEMY ARCHETYPES --------------------------------
// Base stats — floor scaling applies a multiplier. Elite doubles HP & 1.5x damage.
// All variant ids that should be treated as a "boss" (HP bar, room rules, sfx).
function enemyStats(type, floor, elite) {
  const base = ZTYPES[type];
  const isBoss = isBossKind(type);
  // Floor-2+ difficulty spike: flat 2x on HP, damage, and speed (applies to
  // bosses too). Floor 1 remains the intro floor; floor 2 is where the game
  // "turns on".
  const f2Mul = floor >= 2 ? 2 : 1;
  // Bosses get steeper scaling on top of the normal per-floor curve.
  // HP curve softened per review: both boss-path exponents dropped from
  // 1.22/1.25 -> 1.18 so the F5 cliff roughly halves (old ~5.4x, new ~3.0x
  // of the base multiplier) while F1-F3 stay close to tuned. Non-boss HP
  // scaling (1.25) is untouched.
  const bossHpBonus  = isBoss ? 1.8 * Math.pow(1.18, floor - 1) : 1;
  const bossDmgBonus = isBoss ? 1.1 * Math.pow(1.08, floor - 1) : 1;
  const bossSpdBonus = isBoss ? 1 + 0.06 * (floor - 1) : 1;
  const hpFloorMul = isBoss ? Math.pow(1.18, floor - 1) : Math.pow(1.25, floor - 1);
  // Per-room scaling inside the current floor: +8% HP, +5% dmg per room index.
  // Makes late rooms of a floor tangibly meaner without touching floor curves.
  const roomIdx = Math.max(0, (game && game.roomIdx) || 0);
  const roomHpMul  = Math.pow(1.08, roomIdx);
  const roomDmgMul = Math.pow(1.05, roomIdx);
  const hpMul  = hpFloorMul * roomHpMul  * (elite ? 4.0 : 1.0) * bossHpBonus * f2Mul;
  const dmgMul = Math.pow(1.15, floor - 1) * roomDmgMul * (elite ? 1.5 : 1.0) * bossDmgBonus * f2Mul;
  return {
    hp: Math.round(base.hp * hpMul),
    damage: Math.round(base.damage * dmgMul),
    speed: base.speed * bossSpdBonus * f2Mul,
    radius: base.radius * (elite ? 1.15 : 1.0),
    score: Math.round(base.score * (elite ? 2.5 : 1.0)),
    xp: Math.round(base.xp * (elite ? 3 : 1.0)),
  };
}
function enemyPool(floor) {
  const pool = [];
  // base weights — index = floor-1 (clamped to 4 = floor 5+)
  const weights = {
    walker:   [4, 4, 3, 3, 2],
    runner:   [2, 3, 3, 3, 3],
    spitter:  [0, 2, 2, 2, 2],
    exploder: [0, 0, 2, 2, 2],
    brute:    [0, 1, 1, 2, 2],
    // New tier-2s — additive, kept modest so they spice up rooms without
    // displacing the existing core enemies.
    howler:   [0, 1, 1, 2, 2],   // priority-target support unit, F2+
    stalker:  [0, 0, 1, 2, 2],   // ambush picker, F3+
    bloater:  [0, 0, 1, 1, 2],   // area denial on death, F3+
  };
  for (const [type, w] of Object.entries(weights)) {
    const weight = w[Math.min(4, floor-1)] || 0;
    for (let i = 0; i < weight; i++) pool.push(type);
  }
  return pool;
}

// ------------- UPGRADE CATALOG ---------------------------------
// Each upgrade: id, name, desc (can be function(level)), icon (emoji or text), color,
// maxLevel (null=infinite), apply function or direct stat references.
// cls: 'shared' | 'ranged' | 'melee'  — filters the level-up pool per class pick.

// ------------- SUPER POWERS (boss bounties) --------------------
// Pool of 12. After each boss clear (except the final-floor boss, which
// ends the run), the player picks 1 of 4 randomly drawn from the pool.
// Already-picked powers are excluded. NO reroll — the pick is final.
function hasSP(id) { return game.superpowers && game.superpowers.has(id); }
// Shared on-kill hook — fires from both Zombie.die() and Zombie.explode() so
// exploder deaths still count. Keeps SP logic out of the critical-path code.
function applySuperPowerOnKill(z) {
  const p = game.player;
  if (!p) return;
  if (hasSP('sp_bloodthirst')) {
    p.hp = Math.min(p.maxHp, p.hp + p.maxHp * 0.04);
  }
  if (hasSP('sp_overkill')) {
    game.explosions.push(new Explosion(z.x, z.y, 90, 80, true));
  }
}

// ------------- PLAYER SKINS ------------------------------------
// Each skin describes how the Player's draw() routine paints the survivor.
// Picked from the APPEARANCE overlay; stored in localStorage as 'zr_skin'.
function getSkin() { return SKIN_BY_ID[game.skinId] || SKINS[0]; }

// ------------- GAME STATE --------------------------------------
const game = {
  state: 'menu',
  floor: 1,
  roomIdx: 0,         // 0..3
  isBossRoom: false,
  obstacles: [],
  player: null,
  zombies: [],
  bullets: [],
  ezBullets: [],      // enemy projectiles
  explosions: [],
  particles: [],
  damageNums: [],
  powerups: [],
  poisonClouds: [],   // bloater death residue, slows + DOT player on contact
  pendingBooms: [],   // overload-affix delayed explosions with telegraph window
  spawnQueue: [],
  spawnTimer: 0,
  kills: 0,
  score: 0,
  upgrades: {},
  pendingLevelUps: 0,
  runStartT: 0,
  runTime: 0,
  roomState: 'active',   // active, cleared, transitioning
  // Time-based difficulty escalation (RoR1-style): counts elapsed seconds in
  // the current active room. Every 30s we bump difficultyTier up to 3 (HAHAHA)
  // and re-multiply the live zombies' damage. Reset on room enter.
  roomT: 0,
  difficultyTier: 0,    // 0 Easy, 1 Medium, 2 Hard, 3 HAHAHA
  transitionT: 0,
  transitionTarget: null,  // { floor, roomIdx } — advance to this room when timer hits 0
  levelupPauseT: 0,        // countdown for the 1s freeze before upgrade cards appear
  selectedChoice: 0,
  currentChoices: [],
  rerollAvailable: false,
  // Bonus reroll tokens granted at mid-floor checkpoints; spendable during any
  // future level-up choice when the per-level reroll has already been used.
  bonusRerolls: 0,
  // Saved progression state captured after each boss clear OR mid-floor
  // checkpoint. If the player dies later, the run-end screen offers a one-tap
  // revive that resumes at the saved floor/room with upgrades/level intact.
  checkpoint: null,
  checkpoints: [],  // ring of up to 3 slots mirrored from localStorage
  // Boss variants that have spawned earlier in this run. Each new boss layers
  // the ability casts (summon / raise / slam+quake / fan-shot) from every
  // earlier variant on top of its own kit — so the final boss effectively has
  // every prior boss's toolkit plus its own.
  bossVariantsSeen: [],
  lastUpgradePickId: null,
  skinId: 'default',
  playerClass: 'ranged',   // 'ranged' | 'melee' — picked at run start
  environment: 'default',  // visual overlay theme id — picked at run start
  autoFire: false,         // settings toggle — auto-fire/auto-swing at nearby enemies
  crazyDaveEnabled: true,  // settings toggle — Crazy Dave voice lines via Web Speech API
  crazyDaveRandomT: 30,    // seconds until the next random voice roll
  crazyDaveEventCdT: 0,    // cooldown before another event-triggered line can fire
  // Super powers — picked from the 12-power pool after each boss clear.
  // Stored as a Set of ids; consulted by Player getters and combat hooks.
  superpowers: new Set(),
  phoenixUsed: false,         // Phoenix revive is single-use per run
  pendingSuperPower: false,   // queued between floorClear banner and pick overlay
  pendingVictory: false,      // final-boss path: victory fires AFTER the pick
  currentSPChoices: [],
  selectedSPChoice: 0,
};

// ------------- DEATH REPLAY + EVENT LOG ------------------------
// Ring buffer of lightweight world snapshots taken every SNAPSHOT_STRIDE frames
// while the player is actively playing. On death, showRunEnd renders the last
// 5 hits + last 20 meaningful events; the ▶ WATCH REPLAY button replays the
// buffered snapshots on the main canvas. Reset at run start / checkpoint
// continue so each run starts fresh.
const REPLAY_DURATION_S = 8;
const SNAPSHOT_STRIDE = 2;           // snapshot every Nth frame (~30 fps replay at 60 fps game)
const SNAPSHOT_CAP = Math.ceil(REPLAY_DURATION_S * 60 / SNAPSHOT_STRIDE); // 240
const EVENT_LOG_CAP = 20;
const HIT_HISTORY_CAP = 5;

// Final-boss "checkout" mechanic: the killing blow on the last boss doesn't
// finalize until the player confirms the super-power pick (the checkout).
// Boss stays at 1 HP, stops attacking, and is immune to further damage; at
// checkout we roll for an ABNORMAL DEATH — its final breath catches the
// player. 15% chance so it's a real tension beat, not a frequent rug-pull.
const FINAL_BOSS_ABNORMAL_CHANCE = 0.15;
const replay = {
  snapshots: [],   // array of Snapshot {t, camera, player, zombies, bullets, ezBullets, explosions, powerups, poisonClouds, obstacles}
  events: [],      // array of {t, kind, ...}
  hits: [],        // array of {t, amount, source} — last HIT_HISTORY_CAP
  frameCounter: 0, // increments every loop; snapshot when % SNAPSHOT_STRIDE === 0
  playback: {
    active: false,
    paused: false,
    startWall: 0,    // performance.now() reference when playback started
    pausedAt: 0,     // accumulated paused time (subtract from now-startWall)
    pauseBegan: 0,   // performance.now() when pause began (0 if not paused)
    prevState: null, // game.state snapshot to restore on close
  },
};
function replayReset() {
  replay.snapshots.length = 0;
  replay.events.length = 0;
  replay.hits.length = 0;
  replay.frameCounter = 0;
  replay.playback.active = false;
  replay.playback.paused = false;
}
// Shallow-clone an entity's own properties so later mutations don't smear the
// snapshot. Preserve the prototype chain so drawWorld's `e.draw()` call still
// dispatches to Zombie.prototype.draw / Player.prototype.draw / etc. on the
// snapshot. `Object.assign({}, e)` would return a plain object with no .draw().
function cloneEntity(e) {
  return Object.assign(Object.create(Object.getPrototypeOf(e)), e);
}
function recordSnapshot(t) {
  const snap = {
    t,
    camera: { x: camera.x, y: camera.y, shake: camera.shake },
    player: game.player ? cloneEntity(game.player) : null,
    zombies: game.zombies.filter(z => z.hp > 0).map(cloneEntity),
    bullets: game.bullets.filter(b => !b.dead).map(cloneEntity),
    ezBullets: game.ezBullets.filter(b => !b.dead).map(cloneEntity),
    explosions: game.explosions.filter(e => !e.dead).map(cloneEntity),
    powerups: game.powerups.filter(p => !p.dead).map(cloneEntity),
    poisonClouds: game.poisonClouds.filter(c => !c.dead).map(cloneEntity),
    obstacles: game.obstacles, // static within a room; safe to share the reference
    floor: game.floor,
    roomIdx: game.roomIdx,
  };
  replay.snapshots.push(snap);
  if (replay.snapshots.length > SNAPSHOT_CAP) replay.snapshots.shift();
}
function recordEvent(ev) {
  replay.events.push(ev);
  if (replay.events.length > EVENT_LOG_CAP) replay.events.shift();
}
function recordHit(amount, source, t) {
  const hit = { t, amount, source: source || { kind: 'unknown' } };
  replay.hits.push(hit);
  if (replay.hits.length > HIT_HISTORY_CAP) replay.hits.shift();
  recordEvent({ t, kind: 'damage', amount, source: hit.source });
}

// ------------- COLLISION HELPERS -------------------------------
// opts: { airborne: bool, passGaps: bool } — airborne callers (player mid-jump)
// skip obstacles flagged walkOver:true (pits/gaps). passGaps is the same
// toggle for projectiles (bullets fly, so they always pass gaps — but not
// solid cover). A null/undefined opts behaves like the legacy call (no pass).
// Platforms are SOLID — they collide for every caller regardless of airborne
// state. Only `gap` obstacles carry walkOver:true under the current design.
function collidesObstacle(x, y, r, opts) {
  const airborne = opts && opts.airborne;
  const passGaps = opts && opts.passGaps;
  for (const o of game.obstacles) {
    // Gaps are the only walkOver obstacle that airborne/bullet callers pass
    // over. Platforms carry walkOver:true historically but we explicitly
    // gate this bypass to gap-type only so platforms stay solid to everyone.
    if ((airborne || passGaps) && o.walkOver && o.type === 'gap') continue;
    const cx = clamp(x, o.x, o.x + o.w);
    const cy = clamp(y, o.y, o.y + o.h);
    const dx = x - cx, dy = y - cy;
    if (dx*dx + dy*dy < r*r) return true;
  }
  return false;
}

// Nudge an entity out of any overlapping obstacle (platforms, walls). Used to
// guarantee spawn points never sit inside a platform — callers set (x,y,r)
// then call this to resolve any accidental overlap (e.g. summon/raise sites
// or random spawn points that happened to land on a platform).
function pushOutOfObstacles(ent, margin) {
  margin = margin || 0;
  let safety = 0;
  while (safety < 40 && collidesObstacle(ent.x, ent.y, ent.r + margin)) {
    // Find the worst-overlapping obstacle and push along its closest normal.
    let bestO = null, bestPen = -1, bestDx = 0, bestDy = 0;
    for (const o of game.obstacles) {
      if (o.walkOver && o.type === 'gap') continue;
      const cx = clamp(ent.x, o.x, o.x + o.w);
      const cy = clamp(ent.y, o.y, o.y + o.h);
      let dx = ent.x - cx, dy = ent.y - cy;
      const d = Math.hypot(dx, dy);
      const pen = (ent.r + margin) - d;
      if (pen > bestPen) {
        // Center-inside case: pick the shortest exit axis.
        if (d < 0.001) {
          const left = ent.x - o.x, right = (o.x + o.w) - ent.x;
          const top = ent.y - o.y, bot = (o.y + o.h) - ent.y;
          const m = Math.min(left, right, top, bot);
          if (m === left)       { dx = -1; dy =  0; }
          else if (m === right) { dx =  1; dy =  0; }
          else if (m === top)   { dx =  0; dy = -1; }
          else                  { dx =  0; dy =  1; }
        } else {
          dx /= d; dy /= d;
        }
        bestO = o; bestPen = pen; bestDx = dx; bestDy = dy;
      }
    }
    if (!bestO) break;
    const step = Math.max(1, bestPen + 0.5);
    ent.x += bestDx * step;
    ent.y += bestDy * step;
    ent.x = clamp(ent.x, ent.r, world.w - ent.r);
    ent.y = clamp(ent.y, ent.r, world.h - ent.r);
    safety++;
  }
}

// ------------- LAYER MODEL ------------------------------------
// Every combat entity (player + zombies) carries a `.layer` string:
//   'ground'          — on the ground plane
//   'platform:<id>'   — standing on the platform with that id
// Platforms get a stable id at generation time. An entity becomes a platform's
// occupant only by LANDING on its footprint mid-jump. Walking off the edge
// auto-drops back to ground (handled in the move-settle step).
// Returns the platform obstacle (with .id) whose AABB contains (x, y), or null.
// Cheap AABB check — called per-frame per entity, so no boxed returns.
function platformAt(x, y) {
  const obs = game.obstacles;
  for (let i = 0; i < obs.length; i++) {
    const o = obs[i];
    if (o.type !== 'platform') continue;
    if (x >= o.x && x <= o.x + o.w && y >= o.y && y <= o.y + o.h) return o;
  }
  return null;
}
// Landing-snap variant: accepts a "grace" margin so a landing that clips the
// platform edge with the entity's body (but not center) still counts as on-
// platform. Used on jump landing so the window isn't razor-thin. Returns the
// nearest platform whose expanded AABB covers (x,y), else null.
function platformAtWithGrace(x, y, grace) {
  const obs = game.obstacles;
  for (let i = 0; i < obs.length; i++) {
    const o = obs[i];
    if (o.type !== 'platform') continue;
    if (x >= o.x - grace && x <= o.x + o.w + grace &&
        y >= o.y - grace && y <= o.y + o.h + grace) return o;
  }
  return null;
}
// Same-layer test for combat filtering. Two entities "can interact" if they
// share a layer string. An airborne entity (z > 0 from a jump) is in transit
// between layers and temporarily unreachable by contact-style attacks — that's
// the existing i-frame contract; we keep it by treating airborne as a pseudo
// layer mismatch for contact paths. Projectiles/AoE bypass this (see callers).
function sameLayer(a, b) {
  if (!a || !b) return false;
  // Mid-jump entities are between layers — treat contact as mismatched until
  // they land and resolve.
  if ((a.z || 0) > 0 && a.jumpT > 0) return false;
  if ((b.z || 0) > 0 && b.jumpT > 0) return false;
  return (a.layer || 'ground') === (b.layer || 'ground');
}
// Coarse line-of-sight check: walk a fat ray in fixed steps and reject if any
// step lands inside an obstacle. Used by spitter AI to gate shots.
function hasLineOfSight(x1, y1, x2, y2, r=4) {
  const dx = x2 - x1, dy = y2 - y1;
  const dist = Math.hypot(dx, dy);
  if (dist < 1) return true;
  const steps = Math.min(40, Math.max(4, Math.ceil(dist / 18)));
  const sx = dx / steps, sy = dy / steps;
  for (let i = 1; i < steps; i++) {
    if (collidesObstacle(x1 + sx*i, y1 + sy*i, r)) return false;
  }
  return true;
}
function drawShadow(x, y, r) {
  ctx.fillStyle = 'rgba(15, 10, 26, 0.35)';
  ctx.beginPath(); ctx.ellipse(x, y + r*0.85, r*0.95, r*0.35, 0, 0, TAU); ctx.fill();
}
function drawHPBar(x, y, w, h, frac, color='#c73866') {
  ctx.fillStyle = '#0f0a1a';
  ctx.fillRect(x - 1, y - 1, w + 2, h + 2);
  ctx.fillStyle = '#2a0e1c';
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w * clamp(frac, 0, 1), h);
}

// ------------- PLAYER ------------------------------------------
class Player {
  constructor() {
    this.x = world.w/2;
    this.y = world.h/2;
    this.r = 18;
    this.angle = 0;
    // base stats
    this._baseSpeed = 158;
    this._baseMaxHp = 55;
    this._baseMaxAmmo = 6;
    this._baseFireRate = 0.28;
    this._baseDamage = 7;
    this._baseReload = 1.9;
    this._baseBulletSpeed = 700;
    this._baseBulletLife = 0.48;

    // level must be set before hp init — maxHp getter reads this.level
    this.level = 1;
    this.xp = 0;
    this.xpNeeded = 10;

    this.hp = this.maxHp;
    this.ammo = this.maxAmmo;
    this.reloading = false;
    this.reloadT = 0;
    this.fireCd = 0;
    this.walkPhase = 0;
    this.iFrames = 0;
    this.flashT = 0;
    // dash
    this.dashCd = 0;
    this.dashT = 0;       // remaining dash duration
    this.dashDx = 0;
    this.dashDy = 0;
    this.dashDuration = 0.16;
    this._baseDashCdMax = 2.9;
    this.dashSpeed = 480;
    this.blitzHitSet = null;  // set of zombie ids hit by current dash (for blitz)
    // jump (pseudo-3D elevation in a top-down game)
    // z = 0 grounded; during jump z rises sinusoidally to zPeak then back.
    // While z > 0 the player is airborne: new damage sources (contact,
    // projectile, cloud ticks) are blocked via iFrames-like gating. Already-
    // applied DoTs (burn/bleed) keep ticking since they were landed earlier.
    // Airborne player ignores gap obstacles (type='gap') so zombies can't
    // chase over them. Jump has a short cooldown to prevent spam immunity.
    this.z = 0;
    this.jumpT = 0;
    this.jumpDuration = 0.50;
    this.jumpPeak = 28;       // max apparent elevation in pixels (for shadow offset)
    this.jumpCd = 0;
    this.jumpCdMax = 1.2;
    // Layer: 'ground' or 'platform:<id>'. Resolved on landing; walking off a
    // platform edge auto-drops to 'ground' via the move-settle step below.
    this.layer = 'ground';
    // melee swing
    this.swingCd = 0;
    this._baseSwingCdMax = 0.55;
    this.swingT = 0;          // remaining visual duration
    this.swingDuration = 0.18;
    this._baseSwingArc = Math.PI / 3;     // 60°
    this._baseSwingReach = 72;
    this.swingAngle = 0;      // direction of current swing
    this.swingHitSet = null;  // zombies already hit this swing
    this.whirlT = 0;          // backstroke timer (whirlwind)
    this.whirlAngle = 0;
    // level fields initialized above (before hp init) so the maxHp getter sees this.level
    // regen
    this.regenAcc = 0;
    // velocity tracking (for AI target prediction)
    this.vx = 0;
    this.vy = 0;
    this._prevX = this.x;
    this._prevY = this.y;
    // poison/slow debuff (bloater clouds, plague-style sources). slowT counts
    // down each frame; while >0, base movement speed is multiplied by slowMul.
    // Dash speed is intentionally NOT slowed — dash stays a get-out-of-jail tool.
    this.slowT = 0;
    this.slowMul = 1;
  }
  u(id) { return game.upgrades[id] || 0; }
  get isMelee()      { return game.playerClass === 'melee'; }

  get speed() {
    let m = 1 + 0.09 * this.u('speed');
    if (hasSP('sp_marathon'))   m *= 1.35;
    if (hasSP('sp_juggernaut')) m *= 0.90;
    if (hasSP('sp_warlord'))    m *= 1.15;
    return this._baseSpeed * m * (this.slowT > 0 ? this.slowMul : 1);
  }
  get maxHp() {
    let base = (this._baseMaxHp + 2 * (this.level - 1)) * (1 + 0.15 * this.u('hp'));
    let m = 1;
    if (hasSP('sp_juggernaut'))  m *= 1.60;
    if (hasSP('sp_glasscannon')) m *= 0.70;
    if (hasSP('sp_warlord'))     m *= 1.20;
    return base * m;
  }
  get maxAmmo()      { return this._baseMaxAmmo + 5 * this.u('ammo'); }
  get fireRate() {
    let r = this._baseFireRate / (1 + 0.135 * this.u('rof'));
    if (hasSP('sp_quickdraw')) r /= 1.40;
    if (hasSP('sp_berserker') && this.hp > 0 && this.hp < this.maxHp * 0.5) r /= 1.30;
    return r;
  }
  // Base damage grows +0.2 per player level (additive to the pre-upgrade base),
  // then the 'dmg' upgrade multiplier stacks on top — same additive-before-
  // multiplier ordering that maxHp uses for its +2/level bonus.
  get damage() {
    let d = (this._baseDamage + 0.2 * (this.level - 1)) * (1 + 0.18 * this.u('dmg'));
    if (hasSP('sp_glasscannon')) d *= 1.70;
    if (hasSP('sp_warlord'))     d *= 1.25;
    if (hasSP('sp_berserker') && this.hp > 0 && this.hp < this.maxHp * 0.5) d *= 1.60;
    return d;
  }
  get reloadTime()   {
    // Linear reload scaling with clip capacity: bigger mags take longer.
    // Baseline 1.9s at clip 6, +0.15s per additional bullet. The reload
    // upgrade still multiplies (0.82^level) on top.
    const clip = this.maxAmmo;
    const linear = this._baseReload + 0.15 * (clip - this._baseMaxAmmo);
    return Math.max(0.1, linear * Math.pow(0.82, this.u('reload')));
  }
  get bulletSpeed()  { return this._baseBulletSpeed * (1 + 0.18 * this.u('eagle')); }
  get bulletLife()   { return this._baseBulletLife * (1 + 0.18 * this.u('eagle')); }
  get critChance() {
    let c = 0.09 * this.u('crit');
    if (hasSP('sp_sharpshot')) c += 0.25;
    return Math.min(1, c);
  }
  get critMul() { return hasSP('sp_sharpshot') ? 4.0 : 2.5; }
  get pierce()       { return 2 * this.u('pierce'); }
  // Explosive/doubleTap/whirlwind: previously max-1 booleans. Raised to max-5
  // so the getters now return stack counts instead of booleans, and consumers
  // use those counts to scale radius/damage/shots. `.active`-style checks
  // preserved via `> 0` comparisons at the call sites.
  get explosive()    { return this.u('explode'); }
  get doubleTap()    { return this.u('double'); }
  get xpMul()        { return 1 + 0.105 * this.u('scholar'); }
  get vampHeal()     { return 0.5 * this.u('vamp'); }
  get regenRate()    { return 0.75 * this.u('regen'); }
  get thornsDmg()    { return 7.5 * this.u('thorns'); }
  // DoT: new. Ignite capped at 100% so the extra stacks still help via
  // diminishing-returns feel (extra stacks over 7 make no gameplay change,
  // but we document the cap in the formula line on the stats panel).
  get igniteChance() { return Math.min(1, 0.15 * this.u('ignite')); }
  get bleedDps()     { return 9 * this.u('bleed'); }
  get plagueDps()    { return 6 * this.u('plague'); }
  // New
  get dashCdMax()    { return this._baseDashCdMax * Math.pow(0.775, this.u('swift')); }
  get swingCdMax() {
    let c = this._baseSwingCdMax * Math.pow(0.88, this.u('swift'));
    if (hasSP('sp_quickdraw')) c /= 1.40;
    if (hasSP('sp_berserker') && this.hp > 0 && this.hp < this.maxHp * 0.5) c /= 1.30;
    return c;
  }
  // Swing arc capped at ~288° (1.6π rad) so max-stacked cleaver can't loop
  // past a full circle — beyond that the swing wraps and hits nothing extra.
  get swingArcWidth(){ return Math.min(Math.PI * 1.6, this._baseSwingArc * (1 + 0.3 * this.u('cleaver'))); }
  get swingReach()   { return this._baseSwingReach; }
  get swingDmg()     { return this.damage * 1.4 * (1 + 0.375 * this.u('heavy')); }
  // Whirlwind: flag-then-scale. Backstroke damage = 0.5 + 0.1*(stacks-1) so
  // L1=0.5x (current), L5=0.9x of swing damage.
  get whirlwind()    { return this.u('whirl'); }
  get whirlDmgMul()  { const w = this.u('whirl'); return w > 0 ? 0.5 + 0.1 * (w - 1) : 0; }
  get knockback()    { return 60 + 67.5 * this.u('heavy'); }
  get blitzDmg()     { return 12 * this.u('blitz') * (1 + 0.15 * this.u('dmg')); }

  update(dt) {
    // Velocity (smoothed) — used by zombie AI for target leading
    if (dt > 0) {
      const ivx = (this.x - this._prevX) / dt;
      const ivy = (this.y - this._prevY) / dt;
      // light smoothing so a single-frame stutter doesn't throw off aim
      this.vx = this.vx * 0.5 + ivx * 0.5;
      this.vy = this.vy * 0.5 + ivy * 0.5;
    }
    this._prevX = this.x; this._prevY = this.y;

    // Slow/poison debuff tick down. updatePoisonClouds() refreshes this each
    // frame the player stands in a cloud, so naturally expires when they leave.
    this.slowT = Math.max(0, this.slowT - dt);

    // Jump tick: z rises sin(pi*t/dur)*peak for a clean up-down arc. CD ticks
    // only while grounded, so the 1.2s CD starts counting from takeoff (the
    // jumpDuration is part of the CD window; net downtime ≈ 0.7s grounded).
    if (this.jumpT > 0) {
      this.jumpT = Math.max(0, this.jumpT - dt);
      const frac = 1 - this.jumpT / this.jumpDuration;       // 0 -> 1
      this.z = Math.sin(frac * Math.PI) * this.jumpPeak;
      if (this.jumpT <= 0) {
        this.z = 0;
        // Platforms are solid walls — entities never land on them.
        this.layer = 'ground';
        // Landing puff so the touchdown reads.
        for (let i = 0; i < 12; i++) {
          const a = Math.random()*TAU, s = rand(60, 170);
          game.particles.push(new Particle(this.x, this.y, {
            vx: Math.cos(a)*s, vy: Math.sin(a)*s * 0.4 - 10,
            life: 0.3, r: rand(3,6), color:'#c9d9d0', fade:true
          }));
        }
      }
    } else {
      this.z = 0;
    }
    this.jumpCd = Math.max(0, this.jumpCd - dt);

    // Regen
    if (this.regenRate > 0 && this.hp < this.maxHp) {
      this.regenAcc += dt * this.regenRate;
      while (this.regenAcc >= 1) {
        this.hp = Math.min(this.maxHp, this.hp + 1);
        this.regenAcc -= 1;
      }
    }

    // Dash
    this.dashCd = Math.max(0, this.dashCd - dt);
    // airborne: jumping or dashing both let the player pass over gaps/platforms.
    const airborneOpts = { airborne: (this.z > 0 || this.dashT > 0) };
    if (this.dashT > 0) {
      this.dashT -= dt;
      const nx = this.x + this.dashDx * this.dashSpeed * dt;
      const ny = this.y + this.dashDy * this.dashSpeed * dt;
      if (!collidesObstacle(nx, this.y, this.r, airborneOpts)) this.x = nx;
      if (!collidesObstacle(this.x, ny, this.r, airborneOpts)) this.y = ny;
      this.x = clamp(this.x, this.r, world.w - this.r);
      this.y = clamp(this.y, this.r, world.h - this.r);
      // Blitz Dash: damage zombies passed through (once per dash each).
      // Same-layer gated — a ground-dash can't blitz zombies standing on a
      // platform overhead; physically you'd pass beneath them.
      if (this.blitzDmg > 0 && this.blitzHitSet) {
        for (const z of game.zombies) {
          if (z.hp <= 0 || this.blitzHitSet.has(z)) continue;
          if (!sameLayer(this, z)) continue;
          const d = Math.hypot(z.x - this.x, z.y - this.y);
          if (d < this.r + z.r + 6) {
            z.hurt(this.blitzDmg, this.x, this.y, true);
            this.blitzHitSet.add(z);
          }
        }
      }
      // dash trail
      if (Math.random() < 0.7) {
        game.particles.push(new Particle(this.x, this.y, {
          vx: rand(-30,30), vy: rand(-30,30),
          life: 0.25, r: rand(4,8), color:'#4ecdc4', fade:true
        }));
      }
    } else {
      let mx=0, my=0;
      if (keys['w']||keys['arrowup']) my -= 1;
      if (keys['s']||keys['arrowdown']) my += 1;
      if (keys['a']||keys['arrowleft']) mx -= 1;
      if (keys['d']||keys['arrowright']) mx += 1;
      const mag = Math.hypot(mx, my);
      if (mag > 0) {
        mx /= mag; my /= mag;
        const nx = this.x + mx * this.speed * dt;
        const ny = this.y + my * this.speed * dt;
        if (!collidesObstacle(nx, this.y, this.r, airborneOpts)) this.x = nx;
        if (!collidesObstacle(this.x, ny, this.r, airborneOpts)) this.y = ny;
        this.x = clamp(this.x, this.r, world.w - this.r);
        this.y = clamp(this.y, this.r, world.h - this.r);
        this.walkPhase += dt * 14;
      } else {
        this.walkPhase *= 0.92;
      }
    }

    // Aim: touch overrides everything; held mouse overrides auto-aim (player
    // intervention); else auto-aim picks nearest zombie when auto-fire is on;
    // else follow mouse. If auto-aim has no target, keep last angle (no snap).
    if (touchAim.active) {
      this.angle = touchAim.angle;
    } else if (game.autoFire && !mouse.down) {
      const target = nearestZombie(this, 700);
      if (target) {
        const desired = Math.atan2(target.y - this.y, target.x - this.x);
        // Smoothing: ~12 = responsive but not teleporty. Frame-rate independent.
        this.angle = lerpAngle(this.angle, desired, 1 - Math.exp(-12 * dt));
      }
      // else: keep this.angle as-is (no zombies => don't reset)
    } else {
      this.angle = Math.atan2(mouse.worldY - this.y, mouse.worldX - this.x);
    }

    // Combat cooldowns
    this.fireCd = Math.max(0, this.fireCd - dt);
    this.swingCd = Math.max(0, this.swingCd - dt);
    this.swingT = Math.max(0, this.swingT - dt);

    const wantAttack = mouse.down || (game.autoFire && anyZombieInRange(this));

    if (this.isMelee) {
      if (wantAttack && this.swingCd <= 0 && this.dashT <= 0) this.swing();
      // Whirlwind backstroke: queued after the primary swing
      if (this.whirlT > 0) {
        const prev = this.whirlT;
        this.whirlT = Math.max(0, this.whirlT - dt);
        if (prev > 0 && this.whirlT <= 0) {
          this._doSwingHit(this.whirlAngle, this.whirlDmgMul);
          this.swingAngle = this.whirlAngle;
          this.swingT = this.swingDuration;
        }
      }
    } else {
      if (wantAttack && !this.reloading && this.ammo > 0 && this.fireCd <= 0) this.shoot();
      if (this.ammo <= 0 && !this.reloading) this.startReload();
      if (this.reloading) {
        this.reloadT -= dt;
        if (this.reloadT <= 0) {
          this.reloading = false;
          this.ammo = this.maxAmmo;
        }
      }
    }
    this.iFrames = Math.max(0, this.iFrames - dt);
    this.flashT = Math.max(0, this.flashT - dt);

    // Walk-off-edge drop (end-of-update so it runs AFTER movement this frame).
    // Only drops if we're grounded (not mid-jump) and our center has exited
    // the specific platform we claim to be on. Strict center-out rule (no
    // grace) so players can toe the line safely; once the center crosses,
    // they fall to ground layer.
    if (this.jumpT <= 0 && this.layer && this.layer.startsWith('platform:')) {
      const id = +this.layer.slice(9);
      const p = platformAt(this.x, this.y);
      if (!p || p.id !== id) this.layer = 'ground';
    }
  }
  jump() {
    if (this.jumpT > 0 || this.jumpCd > 0) return;
    this.jumpT = this.jumpDuration;
    this.jumpCd = this.jumpCdMax;
    sfx('dash');
    // Dust puff at takeoff so the lift reads.
    for (let i = 0; i < 10; i++) {
      const a = Math.random()*TAU, s = rand(60, 160);
      game.particles.push(new Particle(this.x, this.y, {
        vx: Math.cos(a)*s, vy: Math.sin(a)*s * 0.3 + 20,
        life: 0.35, r: rand(3,6), color:'#c9d9d0', fade:true
      }));
    }
  }
  dash() {
    if (this.dashCd > 0 || this.dashT > 0) return;
    // direction from keys, fallback to facing
    let mx=0, my=0;
    if (keys['w']||keys['arrowup']) my -= 1;
    if (keys['s']||keys['arrowdown']) my += 1;
    if (keys['a']||keys['arrowleft']) mx -= 1;
    if (keys['d']||keys['arrowright']) mx += 1;
    const mag = Math.hypot(mx, my);
    if (mag > 0) { mx /= mag; my /= mag; }
    else { mx = Math.cos(this.angle); my = Math.sin(this.angle); }
    this.dashDx = mx; this.dashDy = my;
    this.dashT = this.dashDuration;
    this.dashCd = this.dashCdMax;
    this.iFrames = Math.max(this.iFrames, this.dashDuration + 0.05);
    this.blitzHitSet = this.blitzDmg > 0 ? new Set() : null;
    sfx('dash');
    for (let i = 0; i < 12; i++) {
      game.particles.push(new Particle(this.x, this.y, {
        vx: rand(-60,60), vy: rand(-60,60),
        life: 0.3, r: rand(3,6), color:'#4ecdc4', fade:true
      }));
    }
  }
  shoot() {
    this.fireCd = this.fireRate;
    this.ammo--;
    const muzX = this.x + Math.cos(this.angle) * 28;
    const muzY = this.y + Math.sin(this.angle) * 28;

    // Double Tap scales: total shots = 1 + u('double'). Per-shot damage
    // diminishes from 0.55 down to 0.31 across 1→5 stacks so total DPS still
    // grows but sublinearly (L1: 2×0.55=1.1x, L5: 6×0.31≈1.86x).
    const extraShots = this.doubleTap; // 0..5
    const shots = 1 + extraShots;
    const perShotMul = extraShots === 0 ? 1.0 : Math.max(0.25, 0.55 - 0.06 * (extraShots - 1));
    const spreadMag = extraShots === 0 ? 0.06 : 0.14 + 0.02 * (extraShots - 1);
    for (let i = 0; i < shots; i++) {
      const spread = (Math.random()-0.5) * spreadMag;
      const a = this.angle + spread;
      const isCrit = Math.random() < this.critChance;
      const dmg = this.damage * perShotMul * (isCrit ? this.critMul : 1.0);
      game.bullets.push(new Bullet(muzX, muzY, a, this.bulletSpeed, dmg, {
        pierce: this.pierce, explosive: this.explosive,
        life: this.bulletLife, crit: isCrit,
      }));
    }
    for (let i = 0; i < 5; i++) {
      game.particles.push(new Particle(muzX, muzY, {
        vx: Math.cos(this.angle)*rand(120,260) + rand(-40,40),
        vy: Math.sin(this.angle)*rand(120,260) + rand(-40,40),
        life: 0.1, r: rand(3,6),
        color: Math.random()<0.5 ? '#ffbd2e' : '#fff6c9', fade:true,
      }));
    }
    shakeCam(1.5);
    sfx('shoot');
  }
  startReload() {
    if (this.reloading || this.ammo === this.maxAmmo) return;
    this.reloading = true;
    this.reloadT = this.reloadTime;
    sfx('reload');
  }
  swing() {
    this.swingCd = this.swingCdMax;
    this.swingT = this.swingDuration;
    this.swingAngle = this.angle;
    this._doSwingHit(this.swingAngle, 1.0);
    if (this.whirlwind) {
      this.whirlT = 0.22;
      this.whirlAngle = this.swingAngle + Math.PI;
    }
    sfx('shoot');
    shakeCam(1.2);
  }
  _doSwingHit(centerAngle, dmgMul) {
    const reach = this.swingReach;
    const arcHalf = this.swingArcWidth / 2;
    for (const z of game.zombies) {
      if (z.hp <= 0) continue;
      // Melee swing is contact-layer only — can't cleave a zombie perched on
      // a platform from the ground below.
      if (!sameLayer(this, z)) continue;
      const dx = z.x - this.x, dy = z.y - this.y;
      const d = Math.hypot(dx, dy);
      if (d > reach + z.r) continue;
      let ang = Math.atan2(dy, dx) - centerAngle;
      while (ang > Math.PI)  ang -= Math.PI * 2;
      while (ang < -Math.PI) ang += Math.PI * 2;
      if (Math.abs(ang) > arcHalf) continue;
      const isCrit = Math.random() < this.critChance;
      const dmg = this.swingDmg * dmgMul * (isCrit ? this.critMul : 1.0);
      z.hurt(dmg, this.x + Math.cos(centerAngle) * (reach*0.6), this.y + Math.sin(centerAngle) * (reach*0.6), true);
      applyOnHitDoT(z, isCrit);
      // Knockback
      if (this.knockback > 0 && z.hp > 0) {
        const kb = this.knockback * dmgMul;
        z.x += Math.cos(centerAngle) * kb * 0.02;
        z.y += Math.sin(centerAngle) * kb * 0.02;
      }
    }
    // Slash particles
    for (let i = 0; i < 10; i++) {
      const t = rand(-arcHalf, arcHalf);
      const r = rand(reach * 0.45, reach);
      game.particles.push(new Particle(
        this.x + Math.cos(centerAngle + t) * r,
        this.y + Math.sin(centerAngle + t) * r,
        { vx: Math.cos(centerAngle + t) * rand(80, 180),
          vy: Math.sin(centerAngle + t) * rand(80, 180),
          life: 0.18, r: rand(2, 5),
          color: Math.random() < 0.5 ? '#ffd966' : '#ffbd2e', fade: true }
      ));
    }
  }
  hurt(dmg, sourceX, sourceY, source) {
    if (this.iFrames > 0) return;
    // Airborne jump i-frames: block ALL new damage events while z > 0. This
    // covers contact, projectiles, bloater cloud ticks and elite death pulses
    // (they all pipe through player.hurt). DoT timers already applied to the
    // zombies aren't player damage, so ignitions/bleeds on enemies keep
    // running. The player's OWN DoT (none exists in this game) would not be
    // gated here either.
    if (this.z > 0) return;
    // Room-clear grace: once no live zombies remain and no spawns are queued,
    // the fight is functionally over. Block residual damage (exploder self-
    // detonation on the same frame, projectiles still in flight, delayed
    // overload booms, F1 death-rattle puffs) so "kill the last monster → die
    // during ROOM CLEAR transition" can't happen.
    if (game.spawnQueue.length === 0 && !game.zombies.some(z => z.hp > 0)) return;
    if (hasSP('sp_ironwall')) dmg *= 0.75;
    this.hp = Math.max(0, this.hp - dmg);
    this.iFrames = 0.55;
    this.flashT = 0.25;
    shakeCam(8);
    flashDamage();
    sfx('hurt');
    recordHit(dmg, source, (performance.now() - game.runStartT) / 1000);
    if (this.hp <= 0) {
      // Phoenix revive — single-use per run. Restore to 50% max HP and grant
      // a long i-frame window so the player doesn't instantly die again.
      if (hasSP('sp_phoenix') && !game.phoenixUsed) {
        game.phoenixUsed = true;
        this.hp = Math.ceil(this.maxHp * 0.5);
        this.iFrames = 2.0;
        showBanner('PHOENIX!', 'Revived at 50% HP');
        sfx('levelup');
        return;
      }
      game.state = 'dead';
      clearInputs();
      sfx('gameover');
      showRunEnd(false);
    }
  }
  gainXP(amt) {
    this.xp += amt * this.xpMul;
    let leveled = false;
    while (this.xp >= this.xpNeeded) {
      this.xp -= this.xpNeeded;
      this.level++;
      this.xpNeeded = Math.floor(10 * Math.pow(1.06, this.level - 1));
      this.hp = Math.min(this.maxHp, this.hp + 2);
      game.pendingLevelUps++;
      leveled = true;
    }
    if (leveled) {
      sfx('levelup');
      flashXP();
      triggerCrazyDaveEvent();
      // `{calm:true}` swaps the bouncy banner-in (scale overshoot + rotate
      // wobble, amplified by the 1.4-overshoot bezier) for a calm fade.
      // That bouncy animation on the giant LEVEL UP banner is what reads
      // as a "screen shake/vibration." Other banners keep the full bounce.
      showBanner(t('levelUp'), t('chooseYourPath'), { calm: true });
      // flashPrePause() left disabled from the previous pass; the radial
      // purple pulse isn't restored here so the level-up feels calmer overall.
      // Re-enable by uncommenting if the calm banner alone isn't enough feedback.
      // flashPrePause();
    }
  }
  draw() {
    const x = this.x, y = this.y;
    // Platform lift: if standing on a platform, render PLATFORM_LIFT px higher
    // than the ground plane. Jump z stacks on top. Shadow always stays at y
    // (ground plane) so the lifted sprite reads as elevated.
    const onPlat = this.layer && this.layer.startsWith('platform:');
    const baseLift = onPlat ? PLATFORM_LIFT : 0;
    // Shadow stays on the ground; sprite lifts by -(z + baseLift). Shadow
    // shrinks slightly at peak for extra depth cue.
    const zFrac = Math.max(0, this.z) / Math.max(1, this.jumpPeak);
    ctx.save();
    ctx.globalAlpha = 1 - zFrac * 0.45;
    ctx.scale(1, 1);
    drawShadow(x, y, this.r * (1 - zFrac * 0.25));
    ctx.restore();
    const legBob = this.z > 0 ? 0 : Math.sin(this.walkPhase) * 3;
    const bodyFlash = this.flashT > 0 && (Math.floor(this.flashT*30)%2===0);
    const dashing = this.dashT > 0;
    const skin = getSkin();
    drawPlayerSprite(0, 0, this.r, this.angle, skin, {
      legBob, bodyFlash, dashing, translateXY: [x, y - this.z - baseLift]
    });
    // Melee swing arc visual
    if (this.swingT > 0) {
      const progress = 1 - (this.swingT / this.swingDuration);
      const alpha = Math.max(0, 1 - progress);
      const reach = this.swingReach;
      const arcHalf = this.swingArcWidth / 2;
      ctx.save();
      ctx.translate(x, y - baseLift);
      ctx.rotate(this.swingAngle);
      // Sweep gradient wedge
      const grad = ctx.createRadialGradient(0, 0, 8, 0, 0, reach);
      grad.addColorStop(0, `rgba(255, 217, 102, ${0.55 * alpha})`);
      grad.addColorStop(0.7, `rgba(255, 189, 46, ${0.35 * alpha})`);
      grad.addColorStop(1, `rgba(255, 107, 107, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, reach, -arcHalf, arcHalf);
      ctx.closePath();
      ctx.fill();
      // Leading blade line
      const sweep = -arcHalf + (arcHalf * 2) * progress;
      ctx.strokeStyle = `rgba(255, 246, 201, ${0.85 * alpha})`;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(Math.cos(sweep) * 10, Math.sin(sweep) * 10);
      ctx.lineTo(Math.cos(sweep) * reach, Math.sin(sweep) * reach);
      ctx.stroke();
      ctx.restore();
    }
    // Player HP bar (over head). Hidden at full HP so its 1px dark border
    // doesn't read as a stray black line above the head; also hidden at 0
    // (death frame) since the bar is meaningless there.
    const frac = this.hp / this.maxHp;
    if (frac > 0 && frac < 1) {
      const bw = 44, bh = 6;
      drawHPBar(x - bw/2, y - this.r - 16 - baseLift, bw, bh, frac, '#8fcf3f');
    }
  }
}

// True if any living zombie is within ~600px of the player (for auto-fire gating).
function anyZombieInRange(p) {
  if (!game || !game.zombies) return false;
  const r = 600;
  for (const z of game.zombies) {
    if (z.hp <= 0) continue;
    const dx = z.x - p.x, dy = z.y - p.y;
    if (dx*dx + dy*dy <= r*r) return true;
  }
  return false;
}

// Nearest living zombie to `p` within `maxRange` (default 700px), or null if none.
// Used by auto-aim to pick a target each frame. Zombie list is small (<=30) so a
// linear scan is fine; we compare squared distances to avoid sqrt.
function nearestZombie(p, maxRange = 700) {
  if (!game || !game.zombies) return null;
  const maxSq = maxRange * maxRange;
  let best = null, bestSq = Infinity;
  for (const z of game.zombies) {
    if (z.hp <= 0) continue;
    const dx = z.x - p.x, dy = z.y - p.y;
    const d2 = dx*dx + dy*dy;
    if (d2 <= maxSq && d2 < bestSq) { best = z; bestSq = d2; }
  }
  return best;
}

// Shortest-arc lerp between two angles in radians. `t` in [0,1].
// Normalizes the delta to [-PI, PI] so we always rotate the short way.

// Self-contained player sprite painter (used both in-game and for skin previews).
// If `translateXY` is given, ctx is translated to those world coords; otherwise it
// paints around the current ctx origin (used by preview canvases).
function drawPlayerSprite(localX, localY, r, angle, skin, opts = {}) {
  const legBob = opts.legBob || 0;
  const bodyFlash = !!opts.bodyFlash;
  const dashing = !!opts.dashing;
  // Per-skin outline override (Usagi uses warm dark; everyone else inherits the
  // standard near-black so existing skins look identical to before this change).
  const OUTLINE = skin.outlineColor || '#0f0a1a';

  ctx.save();
  if (opts.translateXY) ctx.translate(opts.translateXY[0], opts.translateXY[1]);
  else ctx.translate(localX, localY);

  // ----- Legs (always drawn upright, before rotation) -----
  if (skin.legStyle === 'paws') {
    // Usagi — tiny rounded white paw stubs, no dark boots.
    ctx.fillStyle = skin.legColor;
    ctx.strokeStyle = OUTLINE; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.ellipse(-6, 11+legBob*0.5, 4.5, 5, 0, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse( 6, 11-legBob*0.5, 4.5, 5, 0, 0, TAU); ctx.fill(); ctx.stroke();
    // tiny pink toe-bean dots
    ctx.fillStyle = '#F8C7CC';
    ctx.beginPath(); ctx.arc(-6, 11+legBob*0.5, 1.1, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc( 6, 11-legBob*0.5, 1.1, 0, TAU); ctx.fill();
  } else {
    ctx.fillStyle = skin.legColor;
    ctx.strokeStyle = OUTLINE; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.ellipse(-7, 8+legBob, 6, 10, 0, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse( 7, 8-legBob, 6, 10, 0, 0, TAU); ctx.fill(); ctx.stroke();
    // boots
    ctx.fillStyle = '#0f0a1a';
    ctx.beginPath(); ctx.ellipse(-7, 14+legBob, 6, 4, 0, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.ellipse( 7, 14-legBob, 6, 4, 0, 0, TAU); ctx.fill();
  }

  ctx.rotate(angle);

  // ----- Gun -----
  ctx.fillStyle = skin.gunColor;
  ctx.strokeStyle = OUTLINE; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.rect(10, -4, 24, 8); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.rect(14, -7, 4, 3); ctx.fill(); ctx.stroke();
  // muzzle highlight
  ctx.fillStyle = '#5a5a6a';
  ctx.fillRect(32, -2, 3, 4);

  // ----- Body -----
  const baseBody = bodyFlash ? '#ffffff' : (dashing ? skin.dashColor : skin.bodyColor);
  ctx.fillStyle = baseBody;
  ctx.strokeStyle = OUTLINE; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fill(); ctx.stroke();
  // body highlight rim
  if (!bodyFlash) {
    ctx.strokeStyle = lighten(skin.bodyColor, 25);
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(0, 0, r-3, -2.6, -1.0); ctx.stroke();
  }

  // ----- Accessory on torso -----
  ctx.lineWidth = 2.5;
  if (skin.accessory === 'strap') {
    ctx.strokeStyle = skin.accentColor;
    ctx.beginPath(); ctx.moveTo(-12, -8); ctx.lineTo(12, 8); ctx.stroke();
  } else if (skin.accessory === 'tape') {
    // hazmat seal — bright tape band
    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(-r*0.85, 4); ctx.lineTo(r*0.85, 4); ctx.stroke();
    ctx.lineWidth = 1.5; ctx.strokeStyle = '#0f0a1a';
    ctx.beginPath(); ctx.moveTo(-r*0.85, 4); ctx.lineTo(r*0.85, 4); ctx.stroke();
  } else if (skin.accessory === 'vest') {
    // tactical vest — twin pouches
    ctx.fillStyle = '#2a3818';
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2;
    ctx.fillRect(-10, -8, 7, 10); ctx.strokeRect(-10, -8, 7, 10);
    ctx.fillRect(  3, -8, 7, 10); ctx.strokeRect(  3, -8, 7, 10);
  } else if (skin.accessory === 'studs') {
    // punk — leather jacket studs
    ctx.fillStyle = '#c0c0c8';
    for (const [sx, sy] of [[-9,-6],[-3,-9],[5,-7],[10,-2],[-10,4],[-2,7],[7,5]]) {
      ctx.beginPath(); ctx.arc(sx, sy, 1.7, 0, TAU); ctx.fill();
    }
    ctx.strokeStyle = '#5a2a2a'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(-r*0.7, -2); ctx.lineTo(r*0.7, 2); ctx.stroke();
  } else if (skin.accessory === 'pocket') {
    // lab coat — collar + pocket
    ctx.strokeStyle = '#9aa6b2'; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(0, r*0.6); ctx.stroke();
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 1.5;
    ctx.strokeRect(-11, 1, 7, 7);
    // tie hint
    ctx.fillStyle = '#7b68ee';
    ctx.beginPath(); ctx.moveTo(-2,-r*0.6); ctx.lineTo(2,-r*0.6); ctx.lineTo(0,r*0.4); ctx.closePath(); ctx.fill();
  } else if (skin.accessory === 'sash') {
    ctx.strokeStyle = skin.accentColor;
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(-r*0.85, -2); ctx.lineTo(r*0.85, 4); ctx.stroke();
    ctx.lineWidth = 1.5; ctx.strokeStyle = '#0f0a1a';
    ctx.beginPath(); ctx.moveTo(-r*0.85, -2); ctx.lineTo(r*0.85, 4); ctx.stroke();
  } else if (skin.accessory === 'usagi-blush') {
    // Usagi — no torso gear; the body stays a clean rounded white blob.
    // (Branch exists so the dispatcher doesn't fall through to a default.)
  }

  // ----- Head -----
  // Usagi gets a fuller round head (no visible neck) and the face is repainted
  // by the 'usagi-ears' hat branch below — so we skip the default eye dot here
  // to avoid a stray off-center eye.
  const isUsagi = skin.hat === 'usagi-ears';
  ctx.fillStyle = bodyFlash ? '#fff' : skin.headColor;
  ctx.strokeStyle = OUTLINE; ctx.lineWidth = 3;
  if (isUsagi) {
    // Slightly larger, centered head — sits flush on the body for a no-neck silhouette.
    ctx.beginPath(); ctx.arc(0, -2, 13, 0, TAU); ctx.fill(); ctx.stroke();
  } else {
    ctx.beginPath(); ctx.arc(4, 0, 11, 0, TAU); ctx.fill(); ctx.stroke();
    // default single eye
    ctx.fillStyle = '#0f0a1a';
    ctx.beginPath(); ctx.arc(10, -1, 2, 0, TAU); ctx.fill();
  }

  // ----- Hair / hat -----
  if (skin.hairR > 0 && !skin.hat) {
    ctx.fillStyle = skin.hairColor;
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(0, -7, skin.hairR, 0, TAU); ctx.fill(); ctx.stroke();
  }
  if (skin.hat === 'gasmask') {
    // gas mask: dark goggles wrap + filter snout
    ctx.fillStyle = '#1a1a1a'; ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(4, -2, 11, 7, 0, 0, TAU); ctx.fill(); ctx.stroke();
    // lenses
    ctx.fillStyle = '#7be3ff';
    ctx.beginPath(); ctx.arc(0, -2, 3, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(8, -2, 3, 0, TAU); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(1.2, -3, 0.9, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(9.2, -3, 0.9, 0, TAU); ctx.fill();
    // filter
    ctx.fillStyle = '#3a3a3a'; ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.rect(11, 2, 6, 5); ctx.fill(); ctx.stroke();
  } else if (skin.hat === 'helmet') {
    // soldier helmet dome
    ctx.fillStyle = '#3d4a26'; ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(4, -4, 12, Math.PI*1.05, Math.PI*1.95); ctx.fill(); ctx.stroke();
    // strap
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(-6, 0); ctx.lineTo(14, 0); ctx.stroke();
    // star
    ctx.fillStyle = '#ffbd2e';
    ctx.beginPath(); ctx.arc(6, -7, 1.6, 0, TAU); ctx.fill();
  } else if (skin.hat === 'mohawk') {
    // red mohawk spikes
    ctx.fillStyle = skin.hairColor; ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2;
    for (let i = -1; i <= 2; i++) {
      const sx = 0 + i*3.5;
      ctx.beginPath();
      ctx.moveTo(sx-2, -8);
      ctx.lineTo(sx,   -16);
      ctx.lineTo(sx+2, -8);
      ctx.closePath(); ctx.fill(); ctx.stroke();
    }
  } else if (skin.hat === 'goggles') {
    // scientist goggles band across forehead
    ctx.strokeStyle = '#3a3a3a'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(-6, -5); ctx.lineTo(13, -5); ctx.stroke();
    ctx.fillStyle = '#7be3ff'; ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(0, -5, 3, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(9, -5, 3, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(1.2, -6, 0.9, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(10.2, -6, 0.9, 0, TAU); ctx.fill();
  } else if (skin.hat === 'mask') {
    // ninja face wrap — covers everything below eyes
    ctx.fillStyle = '#0f0a1a';
    ctx.beginPath(); ctx.ellipse(5, 3, 9, 6, 0, 0, TAU); ctx.fill();
    // headband stripe
    ctx.fillStyle = skin.accentColor;
    ctx.fillRect(-7, -7, 22, 3);
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 1;
    ctx.strokeRect(-7, -7, 22, 3);
    // band tail
    ctx.fillStyle = skin.accentColor;
    ctx.beginPath();
    ctx.moveTo(-7, -7); ctx.lineTo(-15, -2); ctx.lineTo(-13, 2); ctx.lineTo(-7, -4); ctx.closePath();
    ctx.fill(); ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 1.5; ctx.stroke();
  } else if (skin.hat === 'usagi-ears') {
    // Usagi — tall straight pointy ears, dot eyes set wide, blush cheeks,
    // tiny v-mouth. Ears are ~80% of head height (head r=13, so ear length ~10).
    // All ear/face geometry is in the rotated frame: "up" (negative y) is the
    // top of the head as it would appear if the player faced east.
    const earOutline = OUTLINE;
    // --- Ears: long thin rounded rectangles, slightly canted outward ---
    const drawEar = (cx, cy, tilt) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(tilt);
      // outer ear (white)
      ctx.fillStyle = bodyFlash ? '#fff' : '#FFFDF7';
      ctx.strokeStyle = earOutline; ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, 2.6, 9.5, 0, 0, TAU);
      ctx.fill(); ctx.stroke();
      // inner ear (pink) — narrower oval inset
      ctx.fillStyle = '#F8C7CC';
      ctx.beginPath();
      ctx.ellipse(0, 1, 1.1, 6.5, 0, 0, TAU);
      ctx.fill();
      ctx.restore();
    };
    // Two ears, sitting on top of the head (head center is (0,-2), top at y≈-15).
    // Slight outward cant (~12°) gives the silhouette the right "tall pointy" read.
    drawEar(-4, -16, -0.20);
    drawEar( 4, -16,  0.20);

    // --- Face: dot eyes set far apart, blush, tiny v-mouth ---
    // Coordinates relative to head center (0, -2). Eyes flank the centerline.
    if (!bodyFlash) {
      // Cheek blush patches first so eyes/mouth sit on top.
      ctx.fillStyle = '#F8C7CC';
      ctx.beginPath(); ctx.ellipse(-7, 1, 2.4, 1.6, 0, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.ellipse( 7, 1, 2.4, 1.6, 0, 0, TAU); ctx.fill();
    }
    // Dot eyes (wider apart than the standard skins' single eye).
    ctx.fillStyle = '#1A1410';
    ctx.beginPath(); ctx.arc(-4, -2, 1.6, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc( 4, -2, 1.6, 0, TAU); ctx.fill();
    // Tiny v-mouth one row below the eyes.
    ctx.strokeStyle = '#D89090'; ctx.lineWidth = 1.2; ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-1.6, 2);
    ctx.lineTo( 0,   3.2);
    ctx.lineTo( 1.6, 2);
    ctx.stroke();
    ctx.lineCap = 'butt';
  }

  ctx.restore();
}

// ------------- ZOMBIE ------------------------------------------
class Zombie {
  constructor(x, y, type, elite=false) {
    const stats = enemyStats(type, game.floor, elite);
    this.x = x; this.y = y;
    this.type = type;
    this.elite = elite;
    const base = ZTYPES[type];
    // Apply the current room's difficulty-tier multipliers at spawn. HP only
    // bumps at spawn (no retroactive scaling), damage bakes into _baseDamage
    // so applyHowlerBuffs composes cleanly with it.
    const tier = DIFFICULTY_TIERS[game.difficultyTier] || DIFFICULTY_TIERS[0];
    this.r = stats.radius;
    this.hp = Math.round(stats.hp * tier.hpMul);
    this.maxHp = this.hp;
    this.speed = stats.speed;
    this.damage = Math.round(stats.damage * tier.dmgMul);
    // Cache the unbuffed base values so applyHowlerBuffs can recompute the
    // current frame's speed/damage as base*buffMul without compounding.
    this._baseSpeed = stats.speed;
    this._baseDamage = this.damage;

    // Elite affix: random special death/aura effect on top of the elite flag.
    // Only rolls if this is an elite and not a boss variant. Stored as
    // 'blazing' | 'glacial' | 'overload' | null. See zombie.update / zombie.die
    // for behavior hooks and the matching aura visuals in zombie.draw.
    this.affix = null;
    if (elite && !BOSS_KINDS.has(type)) {
      const affixes = ['blazing', 'glacial', 'overload'];
      this.affix = affixes[randi(0, affixes.length)];
    }
    this.blazingAcc = 0;
    this.score = stats.score;
    this.xp = stats.xp;
    this.color = base.color;
    this.eye = base.eye;
    this.touchCdMax = base.touchCd;
    this.touchCd = 0;
    // Boss-only: override for on-touch collision damage + 3s periodic melee
    // swipe. Non-bosses leave these unset and fall back to `this.damage` for
    // contact hits (see the contact-damage block below). Damage fields are
    // scaled by the current difficulty dmgMul so they compose with the tier.
    this.collisionDmg = base.collisionDmg != null ? Math.round(base.collisionDmg * tier.dmgMul) : null;
    this.meleePower   = base.meleePower   != null ? Math.round(base.meleePower   * tier.dmgMul) : null;
    this.meleeCdMax   = base.meleeCd || 0;
    this.meleeCd      = this.meleeCdMax;
    this.meleeRange   = base.meleeRange || 0;
    this.walkPhase = Math.random() * TAU;
    this.hitFlash = 0;
    this.angle = 0;
    this.wobble = rand(0, TAU);
    // spitter
    this.shootCd = type === 'spitter' ? rand(800, 1600) : 0;
    // exploder
    this.fusing = false;
    this.fuseT = 0;
    // boss (classic) — charge + summon
    this.chargeCd = type === 'boss' ? 5000 : 0;
    this.charging = false;
    this.chargeT = 0;
    this.chargeDx = 0;
    this.chargeDy = 0;
    this.summonCd = type === 'boss' ? 2000 : 0;

    // ---- floor mechanic (one per floor, applies to every enemy incl. boss) ----
    // F1: death rattle cloud, F2: adrenaline surge on hurt, F3: frenzy below 50% HP,
    // F4: corrode aura ticks, F5: parting-shot bullets on die, F6: one phoenix
    // revive at 40% HP. State fields carry only what that mechanic needs.
    this.spawnFloor = game.floor;
    this.surgeT = 0;        // F2: seconds of +50% speed remaining
    this.corrodeAcc = 0;    // F4: 0.5s tick accumulator while player in aura
    this.phoenixUsed = false; // F6: has the one-time revive fired

    // ---- buff carrier (set externally each tick by howler aura) ----
    // Multipliers applied THIS frame from any howler(s) the zombie sits in.
    // Reset to 1 at the top of update() so leaving the aura ends the buff.
    this.buffSpdMul = 1;
    this.buffDmgMul = 1;

    // ---- DoT state (player-inflicted damage-over-time) ----
    // burn: on-hit ignite chance (player has 'ignite' upgrade); fixed 6 dps / 3s
    //       per stack, refreshed on reapply. Ticks every 0.5s via burnAcc.
    // bleed: on-crit from 'bleed' upgrade; dps scales with rank; stacks add.
    this.burnT = 0;
    this.burnDps = 0;
    this.burnAcc = 0;
    this.bleedT = 0;
    this.bleedDps = 0;
    this.bleedAcc = 0;

    // ---- howler ----
    if (type === 'howler') {
      this.howlPulse = Math.random() * TAU;
    }
    // ---- stalker ----
    if (type === 'stalker') {
      this.stalkRevealed = false;
      this.stalkRevealT = 0;     // counts up after first reveal (for fade-in)
      this.stalkLungeCd = rand(800, 1800);
      this.stalkState = 'sneak'; // 'sneak' | 'windup' | 'lunge' | 'recover'
      this.stalkT = 0;
      this.stalkDx = 0;
      this.stalkDy = 0;
      this.stalkHit = false;
    }
    // ---- bloater ---- (state lives on death, not update)

    // ---- boss_necro ----
    if (type === 'boss_necro') {
      const b = ZTYPES.boss_necro;
      this.raiseCd = b.raiseCd * 0.6; // first cast comes a bit sooner
      this.raiseSpawning = false;
      this.raiseSpawnT = 0;
      this.raiseSites = [];
    }
    // ---- boss_berserker ----
    if (type === 'boss_berserker') {
      this.bruteState = 'walk';
      this.bruteT = 0;
      this.bruteCd = rand(1500, 2500);
      this.bruteDx = 0;
      this.bruteDy = 0;
      this.bruteHit = false;
      this.rageStacks = 0; // recomputed every frame from HP
      // Slam / Quake cooldowns (amendment E). Prime with small stagger so
      // the boss doesn't fire everything at once on spawn.
      const bb = ZTYPES.boss_berserker;
      this.slamCd = bb.slamCd * 0.7;
      this.slamState = 'idle';        // 'idle' | 'windup'
      this.slamT = 0;
      this.quakeCd = bb.quakeCd * 0.6;
      this.quakeState = 'idle';       // 'idle' | 'windup'
      this.quakeT = 0;
      this.quakeTargetX = 0;
      this.quakeTargetY = 0;
    }
    // ---- boss_queen ----
    if (type === 'boss_queen') {
      const b = ZTYPES.boss_queen;
      this.shootCd = b.shootCd * 0.5; // open with a salvo sooner
    }
    // ---- layered boss abilities ----
    // On boss spawn, carry forward the ability casts of every earlier boss
    // variant seen in this run (random roll preserved; previous kits layered).
    // Each extra ability has its own isolated state (prefix x*) so it never
    // collides with the primary variant's state machine. The set is computed
    // BEFORE recording this spawn so a boss can't inherit from itself.
    if (isBossKind(type)) {
      const seen = Array.isArray(game.bossVariantsSeen) ? game.bossVariantsSeen : [];
      this.extraAbilities = new Set(seen.filter(v => v !== type && BOSS_KINDS.has(v)));
      // Boss stat inheritance: each earlier boss variant seen this run adds
      // +30% to HP and damage so later bosses stack meaningfully harder on top
      // of the per-floor scaling. Radius, touchCd, and speed are deliberately
      // left alone — radius stacking blobs the boss over the arena, and
      // touchCd shortening on top of boosted damage creates one-shots.
      // Caveat: keys off variant diversity (same as ability layering), so
      // rolling the same variant on consecutive floors won't stack.
      const extraCount = this.extraAbilities.size;
      if (extraCount > 0) {
        const statMul = 1 + 0.30 * extraCount;
        this.hp = Math.round(this.hp * statMul);
        this.maxHp = this.hp;
        this.damage = Math.round(this.damage * statMul);
        this._baseDamage = this.damage;
      }
      if (this.extraAbilities.has('boss')) {
        this.xSummonCd = Math.max(2400, 4500 - game.floor * 350) * 0.6;
      }
      if (this.extraAbilities.has('boss_necro')) {
        this.xRaiseCd = ZTYPES.boss_necro.raiseCd * 0.8;
        this.xRaiseSpawning = false;
        this.xRaiseSpawnT = 0;
        this.xRaiseSites = [];
      }
      if (this.extraAbilities.has('boss_queen')) {
        this.xShootCd = ZTYPES.boss_queen.shootCd * 0.7;
      }
      if (this.extraAbilities.has('boss_berserker')) {
        const bb = ZTYPES.boss_berserker;
        this.xSlamCd = bb.slamCd * 0.9;
        this.xSlamState = 'idle';
        this.xSlamT = 0;
        this.xQuakeCd = bb.quakeCd * 0.9;
        this.xQuakeState = 'idle';
        this.xQuakeT = 0;
        this.xQuakeTargetX = 0;
        this.xQuakeTargetY = 0;
      }
      // Record AFTER computing extras — this variant now joins the layer set
      // for any future boss encountered this run.
      if (!seen.includes(type)) {
        if (!Array.isArray(game.bossVariantsSeen)) game.bossVariantsSeen = [];
        game.bossVariantsSeen.push(type);
      }
    }
    // runner — perpendicular zigzag jitter, retimed every zigzagPeriod
    if (type === 'runner') {
      this.zigSign = Math.random() < 0.5 ? 1 : -1;
      this.zigT = rand(200, 600);
    }
    // brute — telegraphed shoulder-charge state machine
    if (type === 'brute') {
      this.bruteState = 'walk'; // 'walk' | 'windup' | 'dash' | 'recover'
      this.bruteT = 0;          // timer for current state (ms)
      this.bruteCd = rand(1500, 2500); // initial cooldown so brutes don't all charge instantly
      this.bruteDx = 0;
      this.bruteDy = 0;
      this.bruteHit = false;    // whether current dash already hit player
    }

    // ---- LAYER + JUMP (per-zombie) ----
    // Every zombie carries a layer ('ground' or 'platform:<id>') and optional
    // jump fields so they can pursue the player onto/off of platforms. Bosses
    // are grounded always (canJump=false); their scripted moves assume a free
    // field and their telegraphs are too long to mix platform hops in.
    this.layer = 'ground';
    this.z = 0;
    this.jumpT = 0;
    this.jumpCd = rand(0.5, 1.5); // initial stagger
    this.jumpDuration = 0.5;
    this.jumpPeak = 26;
    this.jumpFromLayer = null;    // layer at takeoff (for combat gating mid-air)
    this.jumpTargetLayer = null;  // layer we intend to land on
    // Per-type jump pacing. Runners are springier; brutes lumbering; spitters
    // prefer to stay at range and rarely jump; bloaters don't bother (they
    // lumber and explode). Howlers hop to stay near their buffees.
    if (BOSS_KINDS.has(type)) { this.canJump = false; this.jumpCdMax = 99; }
    else if (type === 'runner')   { this.canJump = true;  this.jumpCdMax = 1.4; }
    else if (type === 'brute')    { this.canJump = true;  this.jumpCdMax = 3.5; }
    else if (type === 'exploder') { this.canJump = true;  this.jumpCdMax = 2.2; }
    else if (type === 'spitter')  { this.canJump = true;  this.jumpCdMax = 3.2; }
    else if (type === 'howler')   { this.canJump = true;  this.jumpCdMax = 2.4; }
    else if (type === 'stalker')  { this.canJump = true;  this.jumpCdMax = 1.8; }
    else if (type === 'bloater')  { this.canJump = false; this.jumpCdMax = 99; }
    else                          { this.canJump = true;  this.jumpCdMax = 2.0; } // walker

    // Flanking AI: non-boss chasers get a persistent small angle offset so a
    // pack approaches from a spread of vectors instead of single-file funnel.
    // Range: ~±28° (0.5 rad). Applied in the walker/runner chase branch where
    // the offset rotates the move vector, decaying to 0 inside commit range so
    // the last few body-lengths still collapse into a direct rush (prevents
    // the ring-of-death failure mode where flankers orbit forever).
    // Bosses, spitters, brutes, bloaters, exploders, howlers, necromancers,
    // stalkers all have their own movement patterns — flanking only applies
    // to plain chasers (walker/runner).
    this.flankOffset = (type === 'walker' || type === 'runner') ? rand(-0.5, 0.5) : 0;

    // Spawn-time safety: if this zombie was placed inside a platform/obstacle
    // (summon rings, raise sites, fallback spawn points), nudge it out. Keeps
    // the "no entity overlaps platforms" invariant even when callers don't
    // pre-validate their spawn coordinates.
    pushOutOfObstacles(this, 0);
  }
  // Attempt to launch a jump toward (tx, ty), ideally landing on `targetLayer`.
  // Same physics as the player: z rises sinusoidally for jumpDuration. Movement
  // during the jump is handled by the normal AI loop with airborne collision
  // opts; layer resolves on landing from the entity's actual (x,y).
  tryJump(tx, ty, targetLayer) {
    if (!this.canJump) return false;
    if (this.jumpT > 0 || this.jumpCd > 0) return false;
    this.jumpT = this.jumpDuration;
    this.jumpCd = this.jumpCdMax;
    this.jumpFromLayer = this.layer;
    this.jumpTargetLayer = targetLayer || 'ground';
    // Takeoff puff — smaller than player's so a crowd jumping doesn't explode
    // particle count.
    for (let i = 0; i < 5; i++) {
      const a = Math.random()*TAU, s = rand(40, 110);
      game.particles.push(new Particle(this.x, this.y, {
        vx: Math.cos(a)*s, vy: Math.sin(a)*s * 0.3 + 14,
        life: 0.28, r: rand(2,4), color:'#c9d9d0', fade:true
      }));
    }
    return true;
  }
  update(dt, player) {
    this.hitFlash = Math.max(0, this.hitFlash - dt);
    this.touchCd = Math.max(0, this.touchCd - dt*1000);
    if (this.meleeCdMax > 0) this.meleeCd = Math.max(0, this.meleeCd - dt*1000);
    this.wobble += dt * 3;

    // Final-boss checkout freeze: stop all AI/attacks/contact damage until the
    // player confirms the super-power pick. The hitFlash pulse from hurt()
    // keeps it visually reading as alive-but-stunned.
    if (this.pendingCheckout) {
      this.hitFlash = Math.max(this.hitFlash, 0.3);
      return;
    }

    // ---- Jump physics (pseudo-3D elevation, mirrors player.jump) ----
    if (this.jumpT > 0) {
      this.jumpT = Math.max(0, this.jumpT - dt);
      const frac = 1 - this.jumpT / this.jumpDuration;
      this.z = Math.sin(frac * Math.PI) * this.jumpPeak;
      if (this.jumpT <= 0) {
        this.z = 0;
        // Platforms are solid walls — zombies never land on them.
        this.layer = 'ground';
        this.jumpFromLayer = null;
        this.jumpTargetLayer = null;
      }
    } else {
      this.z = 0;
    }
    this.jumpCd = Math.max(0, this.jumpCd - dt);

    // Layer-chase jumping removed — platforms are now solid walls, so there
    // is no upper layer to chase onto. Zombies still retain tryJump for other
    // potential uses but the platform-pursuit branch is gone.

    // ---- DoT ticks (burn / bleed) ----
    // Tick in 0.5s chunks via accumulator so the damage feel is consistent and
    // the hit particles/damage numbers don't spam every frame. Damage goes
    // through a dedicated DoT path (takeDoT) that skips vamp/crit/particles.
    if (this.burnT > 0) {
      this.burnT = Math.max(0, this.burnT - dt);
      this.burnAcc += dt;
      while (this.burnAcc >= 0.5 && this.hp > 0) {
        this.burnAcc -= 0.5;
        this.takeDoT(this.burnDps * 0.5, '#ff7b28');
      }
      if (this.burnT <= 0) { this.burnDps = 0; this.burnAcc = 0; }
    }
    if (this.bleedT > 0) {
      this.bleedT = Math.max(0, this.bleedT - dt);
      this.bleedAcc += dt;
      while (this.bleedAcc >= 0.5 && this.hp > 0) {
        this.bleedAcc -= 0.5;
        this.takeDoT(this.bleedDps * 0.5, '#c73866');
      }
      if (this.bleedT <= 0) { this.bleedDps = 0; this.bleedAcc = 0; }
    }
    if (this.hp <= 0) return;

    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const d = Math.hypot(dx, dy) || 0.001;
    this.angle = Math.atan2(dy, dx);

    // Behavior by type
    // (Howler aura buffs are stamped onto this.speed/this.damage as a temporary
    // multiplier by applyHowlerBuffs() right before this update loop runs;
    // they're recomputed from _baseSpeed/_baseDamage every frame so they don't
    // compound and naturally clear when the carrier dies.)
    if (this.type === 'spitter') {
      // keep distance ~280, shoot periodically
      const base = ZTYPES.spitter;
      this.shootCd -= dt * 1000;
      const desiredD = 280;
      let mx = 0, my = 0;
      if (d > desiredD + 40) { mx = dx/d; my = dy/d; }
      else if (d < desiredD - 40) { mx = -dx/d; my = -dy/d; }
      else {
        // strafe
        mx = -dy/d; my = dx/d;
        if ((Math.floor(this.wobble) % 2) === 0) { mx = -mx; my = -my; }
      }
      this.move(mx, my, this.speed, dt);
      // Only shoot if cooldown ready, in range, and clear line of sight to player.
      if (this.shootCd <= 0 && d < base.range && hasLineOfSight(this.x, this.y, player.x, player.y, 6)) {
        this.shootCd = base.shootCd;
        // Lead the target: solve for where the player will be when projectile arrives.
        // Use the player's smoothed velocity, capped so a sudden direction change
        // doesn't make the spitter shoot at empty space.
        const projSpd = base.projSpeed;
        const t0 = d / projSpd;
        const leadT = Math.min(base.leadCap, t0);
        const aimX = player.x + (player.vx || 0) * leadT;
        const aimY = player.y + (player.vy || 0) * leadT;
        const aimAngle = Math.atan2(aimY - this.y, aimX - this.x);
        const proj = new ZombieProjectile(this.x, this.y, aimAngle, projSpd, this.damage);
        game.ezBullets.push(proj);
        sfx('spit');
        // muzzle slime — biased along actual aim direction so the visual cue matches the lead
        for (let i = 0; i < 6; i++) {
          const a = aimAngle + rand(-0.3, 0.3);
          game.particles.push(new Particle(this.x, this.y, {
            vx: Math.cos(a)*rand(60,140), vy: Math.sin(a)*rand(60,140),
            life: 0.3, r: rand(3,5), color: '#8fcf3f', fade:true
          }));
        }
      }
    } else if (this.type === 'exploder') {
      // sprint toward player; start fuse when close OR when nearly dead (commit on low HP)
      const base = ZTYPES.exploder;
      const lowHp = (this.hp / this.maxHp) <= base.lowHpFuse;
      if (!this.fusing && (d < 80 || lowHp)) {
        this.fusing = true;
        this.fuseT = base.fuse;
        // extra telegraph puff when fuse is triggered by low HP at range — players
        // should see "this thing is committing" before it sprints into them.
        if (lowHp && d >= 80) {
          for (let i = 0; i < 10; i++) {
            const a = Math.random()*TAU;
            game.particles.push(new Particle(this.x, this.y, {
              vx: Math.cos(a)*rand(60,140), vy: Math.sin(a)*rand(60,140),
              life: 0.35, r: rand(3,5), color: '#fff0a0', fade:true
            }));
          }
        }
      }
      if (this.fusing) {
        this.fuseT -= dt * 1000;
        // still moves, slightly slower
        this.move(dx/d, dy/d, this.speed*0.6, dt);
        if (this.fuseT <= 0) {
          this.explode();
          return;
        }
      } else {
        this.move(dx/d, dy/d, this.speed, dt);
      }
    } else if (this.type === 'boss') {
      this.tickLayeredBossAbilities(dt, d, player);
      // charges periodically, otherwise walks toward player
      this.chargeCd -= dt * 1000;
      if (this.charging) {
        this.chargeT -= dt;
        this.move(this.chargeDx, this.chargeDy, 480 + game.floor * 20, dt);
        if (this.chargeT <= 0) this.charging = false;
      } else {
        this.move(dx/d, dy/d, this.speed, dt);
        if (game.floor >= 4 && this.chargeCd <= 0 && d < 600 && d > 90) {
          this.charging = true;
          this.chargeT = 0.9;
          this.chargeDx = dx/d; this.chargeDy = dy/d;
          this.chargeCd = 10000;
          // telegraph burst
          for (let i = 0; i < 28; i++) {
            const a = Math.random()*TAU;
            game.particles.push(new Particle(this.x, this.y, {
              vx: Math.cos(a)*rand(80,180), vy: Math.sin(a)*rand(80,180),
              life: 0.45, r: rand(4,8), color:'#ffbd2e', fade:true
            }));
          }
        }
      }
      // summon — active on every floor, scales hard with floor
      if (this.summonCd > 0) {
        this.summonCd -= dt * 1000;
        if (this.summonCd <= 0) {
          this.summonCd = Math.max(2400, 4500 - game.floor * 350);
          const n = Math.min(6, 1 + game.floor);
          for (let i = 0; i < n; i++) {
            const a = Math.random()*TAU;
            const sx = this.x + Math.cos(a)*60;
            const sy = this.y + Math.sin(a)*60;
            // Mix in tougher minions on later floors
            let stype = 'runner';
            if (game.floor >= 3 && Math.random() < 0.35) stype = 'spitter';
            if (game.floor >= 4 && Math.random() < 0.25) stype = 'exploder';
            game.zombies.push(new Zombie(sx, sy, stype, false));
            for (let j = 0; j < 8; j++) {
              const aa = Math.random()*TAU;
              game.particles.push(new Particle(sx, sy, {
                vx:Math.cos(aa)*rand(40,100), vy:Math.sin(aa)*rand(40,100),
                life:0.4, r:rand(3,5), color:'#c73866', fade:true
              }));
            }
          }
        }
      }
    } else if (this.type === 'brute') {
      // Brute: walk in slowly, then a telegraphed shoulder-charge inside chargeRange.
      // States: walk -> windup (root in place, particles) -> dash (locked vector, 2.4x speed,
      // damage on contact) -> recover (brief pause) -> walk.
      const base = ZTYPES.brute;
      this.bruteCd = Math.max(0, this.bruteCd - dt * 1000);
      this.bruteT  = Math.max(0, this.bruteT  - dt * 1000);

      if (this.bruteState === 'walk') {
        this.move(dx/d, dy/d, this.speed, dt);
        // Trigger windup if in range, off cooldown, and we have line of sight (no
        // charging through walls into invisible targets).
        if (d < base.chargeRange && this.bruteCd <= 0 && hasLineOfSight(this.x, this.y, player.x, player.y, 8)) {
          this.bruteState = 'windup';
          this.bruteT = base.chargeWindup;
          // Lock target vector at windup START — player can dodge by repositioning.
          this.bruteDx = dx/d; this.bruteDy = dy/d;
          this.bruteHit = false;
          // Telegraph burst — orange dust ring around the brute's feet
          for (let i = 0; i < 18; i++) {
            const a = Math.random()*TAU;
            game.particles.push(new Particle(this.x, this.y, {
              vx: Math.cos(a)*rand(40,110), vy: Math.sin(a)*rand(40,110),
              life: 0.45, r: rand(3,6), color:'#ff9c4e', fade:true
            }));
          }
          sfx('spit');
        }
      } else if (this.bruteState === 'windup') {
        // Root in place. Continuous rim particles in the charge direction so the
        // player can read which way it's about to launch.
        if (Math.random() < 0.6) {
          const sa = Math.atan2(this.bruteDy, this.bruteDx) + rand(-0.4, 0.4);
          game.particles.push(new Particle(
            this.x + Math.cos(sa)*this.r*0.7,
            this.y + Math.sin(sa)*this.r*0.7,
            { vx: Math.cos(sa)*rand(40,90), vy: Math.sin(sa)*rand(40,90),
              life: 0.25, r: rand(2,4), color:'#ffbd2e', fade:true }
          ));
        }
        if (this.bruteT <= 0) {
          this.bruteState = 'dash';
          this.bruteT = base.chargeDur;
        }
      } else if (this.bruteState === 'dash') {
        this.move(this.bruteDx, this.bruteDy, this.speed * base.chargeSpdMul, dt);
        // Damage on contact, once per dash. Same-layer gated — brute plows
        // through its own plane only.
        if (!this.bruteHit && d < this.r + player.r + 4 && player.iFrames <= 0 && sameLayer(this, player)) {
          player.hurt(this.damage * base.chargeDmgMul, this.x, this.y, { kind: 'zombie', zombieType: this.type, attackKind: 'charge' });
          this.bruteHit = true;
          // suppress regular contact damage for a moment so charge + touch don't double-hit
          this.touchCd = this.touchCdMax;
          // big knockback on charge hit
          player.x += this.bruteDx * 60;
          player.y += this.bruteDy * 60;
        }
        if (this.bruteT <= 0) {
          this.bruteState = 'recover';
          this.bruteT = 220;
        }
      } else { // recover
        // brief pause — almost stationary so player gets a punish window
        this.move(dx/d, dy/d, this.speed * 0.3, dt);
        if (this.bruteT <= 0) {
          this.bruteState = 'walk';
          this.bruteCd = base.chargeCd;
        }
      }
    } else if (this.type === 'howler') {
      // Howler: keeps mid-distance and ambles, but isn't a real combatant — its
      // value is the aura. Aura visuals + buff propagation are handled in
      // applyHowlerBuffs() and draw(). Here it just hangs back ~220px so the
      // player has to choose: dive in to silence it (eat aura damage) or peel
      // off existing zombies to expose it.
      this.howlPulse += dt * 2.4;
      const desiredD = 220;
      let mx = 0, my = 0;
      if (d > desiredD + 50) { mx = dx/d; my = dy/d; }
      else if (d < desiredD - 50) { mx = -dx/d; my = -dy/d; }
      else { mx = -dy/d; my = dx/d; if ((Math.floor(this.wobble) % 2) === 0) { mx = -mx; my = -my; } }
      this.move(mx, my, this.speed, dt);
    } else if (this.type === 'stalker') {
      // Stalker: low alpha until inside revealR. After reveal, telegraphs a
      // short windup then lunges 2.6x speed for a brief moment, dealing damage
      // on contact. Recovery pause after.
      const base = ZTYPES.stalker;
      this.stalkLungeCd = Math.max(0, this.stalkLungeCd - dt * 1000);
      // Reveal check — once revealed, stays revealed until death (no peek-a-boo
      // toggling that would feel cheap).
      if (!this.stalkRevealed && d < base.revealR) {
        this.stalkRevealed = true;
        this.stalkRevealT = 0;
        // brief hiss puff so the player notices the unmask
        for (let i = 0; i < 14; i++) {
          const a = Math.random()*TAU;
          game.particles.push(new Particle(this.x, this.y, {
            vx: Math.cos(a)*rand(60,140), vy: Math.sin(a)*rand(60,140),
            life: 0.4, r: rand(2,4), color: '#c881ff', fade:true
          }));
        }
        sfx('hit');
      }
      if (this.stalkRevealed) this.stalkRevealT += dt;

      if (this.stalkState === 'sneak') {
        // Approach. Slightly faster while still hidden — ambush vibe.
        const sneakBoost = this.stalkRevealed ? 1.0 : 1.15;
        this.move(dx/d, dy/d, this.speed * sneakBoost, dt);
        if (this.stalkRevealed && d < base.lungeRange + 40 && this.stalkLungeCd <= 0 && hasLineOfSight(this.x, this.y, player.x, player.y, 6)) {
          this.stalkState = 'windup';
          this.stalkT = base.lungeWindup;
          this.stalkDx = dx/d; this.stalkDy = dy/d;
          this.stalkHit = false;
          // ring telegraph
          for (let i = 0; i < 16; i++) {
            const a = Math.random()*TAU;
            game.particles.push(new Particle(this.x, this.y, {
              vx: Math.cos(a)*rand(50,120), vy: Math.sin(a)*rand(50,120),
              life: 0.35, r: rand(2,4), color:'#ff6b6b', fade:true
            }));
          }
        }
      } else if (this.stalkState === 'windup') {
        // root, particles in lunge direction
        this.stalkT -= dt * 1000;
        if (Math.random() < 0.7) {
          const sa = Math.atan2(this.stalkDy, this.stalkDx) + rand(-0.3, 0.3);
          game.particles.push(new Particle(
            this.x + Math.cos(sa)*this.r*0.6,
            this.y + Math.sin(sa)*this.r*0.6,
            { vx: Math.cos(sa)*rand(30,80), vy: Math.sin(sa)*rand(30,80),
              life: 0.22, r: rand(2,3), color:'#ffbd2e', fade:true }
          ));
        }
        if (this.stalkT <= 0) {
          this.stalkState = 'lunge';
          this.stalkT = base.lungeDur;
        }
      } else if (this.stalkState === 'lunge') {
        this.stalkT -= dt * 1000;
        this.move(this.stalkDx, this.stalkDy, this.speed * base.lungeSpdMul, dt);
        // Same-layer gated — lunge is a melee pounce.
        if (!this.stalkHit && d < this.r + player.r + 4 && player.iFrames <= 0 && sameLayer(this, player)) {
          player.hurt(this.damage, this.x, this.y, { kind: 'zombie', zombieType: this.type, attackKind: 'lunge' });
          this.stalkHit = true;
          this.touchCd = this.touchCdMax;
        }
        if (this.stalkT <= 0) {
          this.stalkState = 'recover';
          this.stalkT = 260;
        }
      } else { // recover
        this.stalkT -= dt * 1000;
        this.move(dx/d, dy/d, this.speed * 0.35, dt);
        if (this.stalkT <= 0) {
          this.stalkState = 'sneak';
          this.stalkLungeCd = ZTYPES.stalker.lungeCd;
        }
      }
    } else if (this.type === 'bloater') {
      // Bloater: just lumbers toward player. The interesting mechanic fires in
      // die() — a poison cloud the player must clear out of. Slight wobble.
      const bob = Math.sin(this.walkPhase) * 0.15;
      this.move(dx/d + bob*(-dy/d), dy/d + bob*(dx/d), this.speed, dt);
    } else if (this.type === 'boss_necro') {
      this.tickLayeredBossAbilities(dt, d, player);
      // Necromancer: stays at range, raises walker minions in a circle around
      // itself. Lower HP than the classic boss — reward burst-down play.
      // Cast is two-phase so the player can pre-emptively close: when the
      // cooldown lands, queue spawn sites + start a 0.5s telegraph (raiseSpawnT
      // counts down). When raiseSpawnT hits 0, the zombies actually appear.
      const base = ZTYPES.boss_necro;
      this.raiseCd -= dt * 1000;
      // Kite — keep the player at ~keepDist. If too close, retreat; if too
      // far, slowly close. No charge, no sprint.
      const desiredD = base.keepDist;
      let mx = 0, my = 0;
      if (d > desiredD + 60) { mx = dx/d; my = dy/d; }
      else if (d < desiredD - 30) { mx = -dx/d; my = -dy/d; }
      else { mx = -dy/d; my = dx/d; if ((Math.floor(this.wobble) % 2) === 0) { mx = -mx; my = -my; } }
      this.move(mx, my, this.speed, dt);

      // Phase 1: pick spawn sites + telegraph
      if (this.raiseCd <= 0 && !this.raiseSpawning) {
        this.raiseCd = base.raiseCd;
        this.raiseSpawning = true;
        this.raiseSpawnT = 500; // ms telegraph before minions actually appear
        const n = base.raiseCount + Math.min(2, Math.floor((game.floor - 2) / 2));
        this.raiseSites = [];
        for (let i = 0; i < n; i++) {
          const a = (i / n) * TAU + Math.random() * 0.4;
          const sx = this.x + Math.cos(a) * 70;
          const sy = this.y + Math.sin(a) * 70;
          let stype = 'walker';
          if (game.floor >= 4 && Math.random() < 0.30) stype = 'runner';
          this.raiseSites.push({ x: sx, y: sy, type: stype });
        }
        sfx('spit');
      }
      // Phase 2: telegraph — burp particles at each site each frame
      if (this.raiseSpawning) {
        this.raiseSpawnT -= dt * 1000;
        for (const s of this.raiseSites) {
          if (Math.random() < 0.6) {
            const aa = Math.random() * TAU;
            game.particles.push(new Particle(s.x, s.y, {
              vx: Math.cos(aa) * rand(15, 60), vy: Math.sin(aa) * rand(15, 60),
              life: 0.4, r: rand(3, 5), color: '#a8e34b', fade: true
            }));
          }
        }
        // Phase 3: spawn — actually pop the zombies
        if (this.raiseSpawnT <= 0) {
          for (const s of this.raiseSites) {
            game.zombies.push(new Zombie(s.x, s.y, s.type, false));
            for (let j = 0; j < 10; j++) {
              const aa = Math.random() * TAU;
              game.particles.push(new Particle(s.x, s.y, {
                vx: Math.cos(aa) * rand(60, 140), vy: Math.sin(aa) * rand(60, 140),
                life: 0.4, r: rand(3, 5), color: '#a8e34b', fade: true
              }));
            }
          }
          this.raiseSpawning = false;
          this.raiseSites = [];
          sfx('boss');
        }
      }
    } else if (this.type === 'boss_berserker') {
      this.tickLayeredBossAbilities(dt, d, player);
      // Berserker: HP-scaling enrage. No summons. Charges like a brute on a
      // shorter cooldown. Speed/damage multipliers are derived from missing
      // HP every frame so the buff visibly ramps as the fight progresses.
      const base = ZTYPES.boss_berserker;
      const missingFrac = 1 - (this.hp / this.maxHp);
      // Stacks at 25/50/75% missing HP. Cap at rageMaxStacks. step=0.20 → +60% at low HP.
      const stacks = Math.min(base.rageMaxStacks, Math.floor(missingFrac / 0.25));
      this.rageStacks = stacks;
      const rageMul = 1 + base.rageStep * stacks;

      this.bruteCd = Math.max(0, this.bruteCd - dt * 1000);
      this.bruteT  = Math.max(0, this.bruteT  - dt * 1000);
      this.slamCd  = Math.max(0, this.slamCd  - dt * 1000);
      this.quakeCd = Math.max(0, this.quakeCd - dt * 1000);

      const moveSpd = this.speed * rageMul;
      const dmgScaled = this.damage * rageMul;

      // ---- Quake (field-wide) ----
      // Starts if quakeCd elapsed AND no other windup is active. Wind-up roots
      // the boss and paints a ring marker at the player's CURRENT position;
      // the damage zone is fixed at telegraph-time so the player can walk out
      // (or jump over it — player.hurt gates on z>0 so jump dodges it).
      if (this.quakeState === 'idle' && this.slamState === 'idle' && this.bruteState === 'walk' && this.quakeCd <= 0) {
        this.quakeState = 'windup';
        this.quakeT = base.quakeWindup;
        this.quakeTargetX = player.x;
        this.quakeTargetY = player.y;
        sfx('boss');
      }
      if (this.quakeState === 'windup') {
        this.quakeT -= dt * 1000;
        // Ground-crack particles at the target spot so the telegraph reads.
        if (Math.random() < 0.9) {
          const a = Math.random()*TAU, r = Math.random()*base.quakeR;
          game.particles.push(new Particle(
            this.quakeTargetX + Math.cos(a)*r,
            this.quakeTargetY + Math.sin(a)*r,
            { vx: rand(-40,40), vy: rand(-80, -20),
              life: 0.45, r: rand(2,4), color:'#a13a2a', fade:true, gravity: 140 }
          ));
        }
        if (this.quakeT <= 0) {
          // Detonate: damage the player if they're inside the ring at the
          // moment of impact (and not airborne — player.hurt gates on z>0).
          const qdx = player.x - this.quakeTargetX, qdy = player.y - this.quakeTargetY;
          if (qdx*qdx + qdy*qdy < base.quakeR * base.quakeR) {
            player.hurt(dmgScaled * base.quakeDmgMul, this.quakeTargetX, this.quakeTargetY, { kind: 'zombie', zombieType: this.type, attackKind: 'quake' });
          }
          // Big burst
          for (let i = 0; i < 36; i++) {
            const a = Math.random()*TAU, s = rand(120, 300);
            game.particles.push(new Particle(this.quakeTargetX, this.quakeTargetY, {
              vx: Math.cos(a)*s, vy: Math.sin(a)*s,
              life: rand(0.35, 0.75), r: rand(4,8), color:'#ff6b6b', fade:true, gravity: 180,
            }));
          }
          shakeCam(14);
          sfx('hit');
          this.quakeCd = base.quakeCd * (1 - 0.10 * stacks);
          this.quakeState = 'idle';
        }
      }

      // ---- Slam (tight AoE around self) ----
      // Won't overlap a quake windup. Short 0.5s tell; detonation radius fixed
      // to slamR around the boss's position at detonation time (not windup
      // start, so the boss can still rotate to follow the player slightly).
      if (this.slamState === 'idle' && this.quakeState === 'idle' && this.bruteState === 'walk' && this.slamCd <= 0 && d < base.slamR * 1.4) {
        this.slamState = 'windup';
        this.slamT = base.slamWindup;
        sfx('boss');
      }
      if (this.slamState === 'windup') {
        this.slamT -= dt * 1000;
        // Halo-building particles at the boss's body.
        if (Math.random() < 0.85) {
          const a = Math.random()*TAU, r = base.slamR * (0.9 + Math.random()*0.1);
          game.particles.push(new Particle(
            this.x + Math.cos(a)*r, this.y + Math.sin(a)*r,
            { vx: -Math.cos(a)*rand(40,100), vy: -Math.sin(a)*rand(40,100),
              life: 0.3, r: rand(2,4), color:'#ffbd2e', fade:true }
          ));
        }
        if (this.slamT <= 0) {
          // Detonate. Player inside ring and grounded → full slam hit.
          const sdx = player.x - this.x, sdy = player.y - this.y;
          if (sdx*sdx + sdy*sdy < base.slamR * base.slamR) {
            player.hurt(dmgScaled * base.slamDmgMul, this.x, this.y, { kind: 'zombie', zombieType: this.type, attackKind: 'slam' });
          }
          // Visible shockwave (outward burst + ring of particles).
          for (let i = 0; i < 40; i++) {
            const a = Math.random()*TAU, s = rand(180, 360);
            game.particles.push(new Particle(this.x, this.y, {
              vx: Math.cos(a)*s, vy: Math.sin(a)*s,
              life: rand(0.3, 0.6), r: rand(4,7), color:'#ff6b6b', fade:true,
            }));
          }
          shakeCam(18);
          sfx('hit');
          this.slamCd = base.slamCd * (1 - 0.12 * stacks);
          this.slamState = 'idle';
        }
      }

      // Block charge/walk AI while winding either attack — the boss roots in
      // place during the telegraph so the player has time to read + dodge.
      if (this.slamState === 'windup' || this.quakeState === 'windup') {
        // rotate to face the player for visual read; hitFlash pulse handled
        // elsewhere. Skip the rest of the movement/charge state machine.
        return;
      }

      if (this.bruteState === 'walk') {
        this.move(dx/d, dy/d, moveSpd, dt);
        if (d < base.chargeRange && this.bruteCd <= 0 && hasLineOfSight(this.x, this.y, player.x, player.y, 8)) {
          this.bruteState = 'windup';
          this.bruteT = base.chargeWindup;
          this.bruteDx = dx/d; this.bruteDy = dy/d;
          this.bruteHit = false;
          // red rage burst — bigger than brute's
          for (let i = 0; i < 26; i++) {
            const a = Math.random()*TAU;
            game.particles.push(new Particle(this.x, this.y, {
              vx: Math.cos(a)*rand(60,160), vy: Math.sin(a)*rand(60,160),
              life: 0.5, r: rand(4,7), color:'#ff6b6b', fade:true
            }));
          }
          sfx('boss');
        }
      } else if (this.bruteState === 'windup') {
        if (Math.random() < 0.7) {
          const sa = Math.atan2(this.bruteDy, this.bruteDx) + rand(-0.4, 0.4);
          game.particles.push(new Particle(
            this.x + Math.cos(sa)*this.r*0.7,
            this.y + Math.sin(sa)*this.r*0.7,
            { vx: Math.cos(sa)*rand(50,110), vy: Math.sin(sa)*rand(50,110),
              life: 0.3, r: rand(3,5), color:'#ffbd2e', fade:true }
          ));
        }
        if (this.bruteT <= 0) {
          this.bruteState = 'dash';
          this.bruteT = base.chargeDur;
        }
      } else if (this.bruteState === 'dash') {
        this.move(this.bruteDx, this.bruteDy, moveSpd * base.chargeSpdMul, dt);
        // Same-layer gated (matches brute charge). Boss stays grounded so this
        // only ever hits ground players in practice, but the gate keeps the
        // rule uniform.
        if (!this.bruteHit && d < this.r + player.r + 4 && player.iFrames <= 0 && sameLayer(this, player)) {
          player.hurt(dmgScaled * base.chargeDmgMul, this.x, this.y, { kind: 'zombie', zombieType: this.type, attackKind: 'charge' });
          this.bruteHit = true;
          this.touchCd = this.touchCdMax;
          player.x += this.bruteDx * 70;
          player.y += this.bruteDy * 70;
        }
        if (this.bruteT <= 0) {
          this.bruteState = 'recover';
          this.bruteT = 200;
        }
      } else { // recover
        this.move(dx/d, dy/d, moveSpd * 0.4, dt);
        if (this.bruteT <= 0) {
          this.bruteState = 'walk';
          // Charge cooldown shrinks as rage stacks up
          this.bruteCd = base.chargeCd * (1 - 0.18 * stacks);
        }
      }
    } else if (this.type === 'boss_queen') {
      this.tickLayeredBossAbilities(dt, d, player);
      // Spitter Queen: slow walk, fan-shot of slightly-homing projectiles every
      // ~3s. Demands constant lateral movement to dodge sweeping arcs.
      const base = ZTYPES.boss_queen;
      this.shootCd -= dt * 1000;
      // Loose kite at long range; walk in if too far.
      const desiredD = 360;
      let mx, my;
      if (d > desiredD + 80) { mx = dx/d; my = dy/d; }
      else { mx = -dy/d; my = dx/d; if ((Math.floor(this.wobble) % 2) === 0) { mx = -mx; my = -my; } }
      this.move(mx, my, this.speed, dt);

      if (this.shootCd <= 0 && d < base.range && hasLineOfSight(this.x, this.y, player.x, player.y, 6)) {
        this.shootCd = base.shootCd;
        const baseAngle = Math.atan2(player.y - this.y, player.x - this.x);
        const half = base.shotSpread / 2;
        const step = base.shotCount > 1 ? base.shotSpread / (base.shotCount - 1) : 0;
        for (let i = 0; i < base.shotCount; i++) {
          const a = baseAngle - half + step * i;
          const proj = new ZombieProjectile(this.x, this.y, a, base.projSpeed, this.damage);
          // Mark as queen projectile — gives it homing for projHomeDur seconds.
          proj.homeT = base.projHomeDur;
          proj.homeAccel = base.projHomeAccel;
          proj.tint = '#a8e34b';
          game.ezBullets.push(proj);
        }
        // muzzle telegraph — sweeping fan of yellow-green particles
        for (let i = 0; i < 18; i++) {
          const a = baseAngle + rand(-half, half);
          game.particles.push(new Particle(this.x, this.y, {
            vx: Math.cos(a)*rand(80,180), vy: Math.sin(a)*rand(80,180),
            life: 0.35, r: rand(3,5), color: '#a8e34b', fade: true
          }));
        }
        sfx('spit');
      }
    } else {
      // walker / runner: chase, with runner zigzag jitter + per-zombie flank
      // offset so a pack fans out instead of single-filing.
      let spd = this.speed;
      let mvx = dx/d, mvy = dy/d;
      if (this.type === 'walker') spd *= 0.9 + 0.2*Math.sin(this.wobble);
      if (this.type === 'runner') {
        const base = ZTYPES.runner;
        this.zigT -= dt * 1000;
        if (this.zigT <= 0) {
          this.zigSign = -this.zigSign;
          this.zigT = base.zigzagPeriod * rand(0.7, 1.3);
        }
        // Once close enough to start swinging, drop the zigzag so the runner doesn't
        // dance harmlessly outside touch range.
        if (d > 90) {
          // Add a perpendicular component, then renormalize so total speed is unchanged.
          const px = -dy/d, py = dx/d;
          const k = base.zigzagMag * this.zigSign;
          mvx += px * k;
          mvy += py * k;
          const nm = Math.hypot(mvx, mvy) || 1;
          mvx /= nm; mvy /= nm;
        }
      }
      // Flanking: rotate the move vector by flankOffset scaled by proximity.
      // At d>=400 the full offset applies; it decays linearly to 0 by d=120 so
      // the final rush stays direct (prevents orbit/ring-of-death).
      if (this.flankOffset) {
        const falloff = clamp((d - 120) / 280, 0, 1);
        const a = this.flankOffset * falloff;
        const ca = Math.cos(a), sa = Math.sin(a);
        const rx = mvx * ca - mvy * sa;
        const ry = mvx * sa + mvy * ca;
        mvx = rx; mvy = ry;
      }
      this.move(mvx, mvy, spd, dt);
    }

    // walk phase
    const phaseMul = this.type==='runner' ? 16 : this.type==='brute' ? 6 : this.type==='boss' ? 5 : 10;
    this.walkPhase += dt * phaseMul;

    // Separate from other zombies
    for (const other of game.zombies) {
      if (other === this) continue;
      const ox = other.x - this.x, oy = other.y - this.y;
      const od = Math.hypot(ox, oy);
      const minD = this.r + other.r;
      if (od > 0 && od < minD) {
        const push = (minD - od) * 0.5;
        this.x -= (ox/od) * push;
        this.y -= (oy/od) * push;
      }
    }

    // Blazing affix aura — if alive and within 110px, tick a small burn damage
    // on the player every 0.5s. Same-layer gated: the blazing aura is a
    // contact-ish heat field, so a ground player can't be cooked by a blazing
    // elite perched on a platform.
    if (this.affix === 'blazing') {
      this.blazingAcc += dt;
      if (d < this.r + 110 && sameLayer(this, player)) {
        while (this.blazingAcc >= 0.5) {
          this.blazingAcc -= 0.5;
          player.hurt(Math.max(2, this.damage * 0.3), this.x, this.y, { kind: 'zombie', zombieType: this.type, attackKind: 'blazing' });
        }
      } else if (this.blazingAcc > 0.5) {
        this.blazingAcc = 0.5;
      }
    }

    // Boss periodic melee swipe — every meleeCdMax (3s), if the player is
    // within meleeRange and on the same layer, deal meleePower damage. This
    // is in addition to the on-touch contact hit below, which uses
    // collisionDmg for bosses.
    if (this.meleeCdMax > 0 && this.meleeCd <= 0 && this.meleePower != null
        && d < this.r + this.meleeRange && player.z <= 0 && sameLayer(this, player)) {
      player.hurt(this.meleePower, this.x, this.y, { kind: 'zombie', zombieType: this.type, attackKind: 'melee' });
      this.meleeCd = this.meleeCdMax;
    }

    // Contact damage — gated by layer (same-layer only) + skipped while the
    // player is airborne. A zombie on a platform cannot body-damage a player
    // on the ground directly below (they must jump off first). Thorns also
    // require contact, so they're gated here too.
    if (d < this.r + player.r && this.touchCd <= 0 && this.type !== 'exploder' && player.z <= 0 && sameLayer(this, player)) {
      player.hurt(this.collisionDmg != null ? this.collisionDmg : this.damage, this.x, this.y, { kind: 'zombie', zombieType: this.type, attackKind: 'contact' });
      this.touchCd = this.touchCdMax;
      // thorns
      if (player.thornsDmg > 0) {
        this.hurt(player.thornsDmg, this.x, this.y, false);
      }
      if (this.type === 'brute' || this.type === 'boss') {
        // knockback
        player.x += (dx/d) * -30;
        player.y += (dy/d) * -30;
      }
    }

    // Walk-off-edge drop (end-of-update so it runs AFTER any movement the AI
    // branch did this frame). Strict center-out rule so zombies can pace the
    // platform edge without auto-falling; once center crosses, they drop.
    if (this.jumpT <= 0 && this.layer && this.layer.startsWith('platform:')) {
      const id = +this.layer.slice(9);
      const p = platformAt(this.x, this.y);
      if (!p || p.id !== id) this.layer = 'ground';
    }
  }
  // Layered boss abilities: cast blocks inherited from earlier boss variants
  // this run. Each branch uses isolated x* state so it can't trample the
  // primary variant's state machine. Only ability casts — movement / charge
  // is NEVER layered (that's owned by the primary variant).
  tickLayeredBossAbilities(dt, d, player) {
    if (!this.extraAbilities || this.extraAbilities.size === 0) return;
    // ---- classic boss: summon ring of minions on a cooldown ----
    if (this.extraAbilities.has('boss') && this.type !== 'boss') {
      this.xSummonCd = (this.xSummonCd || 0) - dt * 1000;
      if (this.xSummonCd <= 0) {
        this.xSummonCd = Math.max(2400, 4500 - game.floor * 350);
        const n = Math.min(6, 1 + game.floor);
        for (let i = 0; i < n; i++) {
          const a = Math.random()*TAU;
          const sx = this.x + Math.cos(a)*60;
          const sy = this.y + Math.sin(a)*60;
          let stype = 'runner';
          if (game.floor >= 3 && Math.random() < 0.35) stype = 'spitter';
          if (game.floor >= 4 && Math.random() < 0.25) stype = 'exploder';
          game.zombies.push(new Zombie(sx, sy, stype, false));
          for (let j = 0; j < 8; j++) {
            const aa = Math.random()*TAU;
            game.particles.push(new Particle(sx, sy, {
              vx:Math.cos(aa)*rand(40,100), vy:Math.sin(aa)*rand(40,100),
              life:0.4, r:rand(3,5), color:'#c73866', fade:true
            }));
          }
        }
      }
    }
    // ---- necromancer: raise minions in a ring with a short telegraph ----
    if (this.extraAbilities.has('boss_necro') && this.type !== 'boss_necro') {
      const base = ZTYPES.boss_necro;
      this.xRaiseCd -= dt * 1000;
      if (this.xRaiseCd <= 0 && !this.xRaiseSpawning) {
        this.xRaiseCd = base.raiseCd;
        this.xRaiseSpawning = true;
        this.xRaiseSpawnT = 500;
        const n = base.raiseCount + Math.min(2, Math.floor((game.floor - 2) / 2));
        this.xRaiseSites = [];
        for (let i = 0; i < n; i++) {
          const a = (i / n) * TAU + Math.random() * 0.4;
          const sx = this.x + Math.cos(a) * 70;
          const sy = this.y + Math.sin(a) * 70;
          let stype = 'walker';
          if (game.floor >= 4 && Math.random() < 0.30) stype = 'runner';
          this.xRaiseSites.push({ x: sx, y: sy, type: stype });
        }
        sfx('spit');
      }
      if (this.xRaiseSpawning) {
        this.xRaiseSpawnT -= dt * 1000;
        for (const s of this.xRaiseSites) {
          if (Math.random() < 0.6) {
            const aa = Math.random() * TAU;
            game.particles.push(new Particle(s.x, s.y, {
              vx: Math.cos(aa) * rand(15, 60), vy: Math.sin(aa) * rand(15, 60),
              life: 0.4, r: rand(3, 5), color: '#a8e34b', fade: true
            }));
          }
        }
        if (this.xRaiseSpawnT <= 0) {
          for (const s of this.xRaiseSites) {
            game.zombies.push(new Zombie(s.x, s.y, s.type, false));
            for (let j = 0; j < 10; j++) {
              const aa = Math.random() * TAU;
              game.particles.push(new Particle(s.x, s.y, {
                vx: Math.cos(aa) * rand(60, 140), vy: Math.sin(aa) * rand(60, 140),
                life: 0.4, r: rand(3, 5), color: '#a8e34b', fade: true
              }));
            }
          }
          this.xRaiseSpawning = false;
          this.xRaiseSites = [];
        }
      }
    }
    // ---- spitter queen: fan-shot of slightly-homing projectiles ----
    if (this.extraAbilities.has('boss_queen') && this.type !== 'boss_queen') {
      const base = ZTYPES.boss_queen;
      this.xShootCd = (this.xShootCd || 0) - dt * 1000;
      if (this.xShootCd <= 0 && d < base.range && hasLineOfSight(this.x, this.y, player.x, player.y, 6)) {
        this.xShootCd = base.shootCd;
        const baseAngle = Math.atan2(player.y - this.y, player.x - this.x);
        const half = base.shotSpread / 2;
        const step = base.shotCount > 1 ? base.shotSpread / (base.shotCount - 1) : 0;
        for (let i = 0; i < base.shotCount; i++) {
          const a = baseAngle - half + step * i;
          const proj = new ZombieProjectile(this.x, this.y, a, base.projSpeed, this.damage);
          proj.homeT = base.projHomeDur;
          proj.homeAccel = base.projHomeAccel;
          proj.tint = '#a8e34b';
          game.ezBullets.push(proj);
        }
        for (let i = 0; i < 18; i++) {
          const a = baseAngle + rand(-half, half);
          game.particles.push(new Particle(this.x, this.y, {
            vx: Math.cos(a)*rand(80,180), vy: Math.sin(a)*rand(80,180),
            life: 0.35, r: rand(3,5), color: '#a8e34b', fade: true
          }));
        }
        sfx('spit');
      }
    }
    // ---- berserker: slam (self-centered AoE) + quake (remote ring) ----
    // Charge is intentionally omitted — it's movement-coupled and would fight
    // with the primary variant's own AI.
    if (this.extraAbilities.has('boss_berserker') && this.type !== 'boss_berserker') {
      const base = ZTYPES.boss_berserker;
      this.xSlamCd  = Math.max(0, (this.xSlamCd  || 0) - dt * 1000);
      this.xQuakeCd = Math.max(0, (this.xQuakeCd || 0) - dt * 1000);
      // Quake: ring at the player's position at telegraph start. Fires only if
      // no other extra-ability windup is currently active.
      if (this.xQuakeState === 'idle' && this.xSlamState === 'idle' && this.xQuakeCd <= 0) {
        this.xQuakeState = 'windup';
        this.xQuakeT = base.quakeWindup;
        this.xQuakeTargetX = player.x;
        this.xQuakeTargetY = player.y;
        sfx('boss');
      }
      if (this.xQuakeState === 'windup') {
        this.xQuakeT -= dt * 1000;
        if (Math.random() < 0.9) {
          const a = Math.random()*TAU, r = Math.random()*base.quakeR;
          game.particles.push(new Particle(
            this.xQuakeTargetX + Math.cos(a)*r,
            this.xQuakeTargetY + Math.sin(a)*r,
            { vx: rand(-40,40), vy: rand(-80, -20),
              life: 0.45, r: rand(2,4), color:'#a13a2a', fade:true, gravity: 140 }
          ));
        }
        if (this.xQuakeT <= 0) {
          const qdx = player.x - this.xQuakeTargetX, qdy = player.y - this.xQuakeTargetY;
          if (qdx*qdx + qdy*qdy < base.quakeR * base.quakeR) {
            player.hurt(this.damage * base.quakeDmgMul, this.xQuakeTargetX, this.xQuakeTargetY, { kind: 'zombie', zombieType: this.type, attackKind: 'quake' });
          }
          for (let i = 0; i < 36; i++) {
            const a = Math.random()*TAU, s = rand(120, 300);
            game.particles.push(new Particle(this.xQuakeTargetX, this.xQuakeTargetY, {
              vx: Math.cos(a)*s, vy: Math.sin(a)*s,
              life: rand(0.35, 0.75), r: rand(4,8), color:'#ff6b6b', fade:true, gravity: 180,
            }));
          }
          shakeCam(14);
          sfx('hit');
          this.xQuakeCd = base.quakeCd;
          this.xQuakeState = 'idle';
        }
      }
      if (this.xSlamState === 'idle' && this.xQuakeState === 'idle' && this.xSlamCd <= 0 && d < base.slamR * 1.4) {
        this.xSlamState = 'windup';
        this.xSlamT = base.slamWindup;
        sfx('boss');
      }
      if (this.xSlamState === 'windup') {
        this.xSlamT -= dt * 1000;
        if (Math.random() < 0.85) {
          const a = Math.random()*TAU, r = base.slamR * (0.9 + Math.random()*0.1);
          game.particles.push(new Particle(
            this.x + Math.cos(a)*r, this.y + Math.sin(a)*r,
            { vx: -Math.cos(a)*rand(40,100), vy: -Math.sin(a)*rand(40,100),
              life: 0.3, r: rand(2,4), color:'#ffbd2e', fade:true }
          ));
        }
        if (this.xSlamT <= 0) {
          const sdx = player.x - this.x, sdy = player.y - this.y;
          if (sdx*sdx + sdy*sdy < base.slamR * base.slamR) {
            player.hurt(this.damage * base.slamDmgMul, this.x, this.y, { kind: 'zombie', zombieType: this.type, attackKind: 'slam' });
          }
          for (let i = 0; i < 40; i++) {
            const a = Math.random()*TAU, s = rand(180, 360);
            game.particles.push(new Particle(this.x, this.y, {
              vx: Math.cos(a)*s, vy: Math.sin(a)*s,
              life: rand(0.3, 0.6), r: rand(4,7), color:'#ff6b6b', fade:true,
            }));
          }
          shakeCam(18);
          sfx('hit');
          this.xSlamCd = base.slamCd;
          this.xSlamState = 'idle';
        }
      }
    }
  }
  move(vx, vy, spd, dt) {
    const mag = Math.hypot(vx, vy) || 1;
    const desiredA = Math.atan2(vy, vx);
    let useA = desiredA;
    // Airborne zombies ignore gaps while mid-jump (same rule as the player).
    // Platforms were already made non-blocking globally in collidesObstacle.
    const opts = (this.jumpT > 0) ? { airborne: true } : undefined;
    // Lookahead probe: if an obstacle sits in our path, fan out angles to either
    // side and pick the smallest deflection that clears.
    const lookahead = this.r + 22 + spd * dt * 5;
    const lx = this.x + Math.cos(desiredA) * lookahead;
    const ly = this.y + Math.sin(desiredA) * lookahead;
    if (collidesObstacle(lx, ly, this.r, opts)) {
      const offsets = [Math.PI/6, Math.PI/3, Math.PI/2, 2*Math.PI/3, 5*Math.PI/6];
      // Bias toward the previously chosen side so we keep wrapping the same way
      // around an obstacle instead of jittering between sides.
      const sidePref = this._detourSign || (Math.random() < 0.5 ? 1 : -1);
      let found = false;
      for (const off of offsets) {
        for (const sign of [sidePref, -sidePref]) {
          const a = desiredA + off * sign;
          const tx = this.x + Math.cos(a) * lookahead;
          const ty = this.y + Math.sin(a) * lookahead;
          if (!collidesObstacle(tx, ty, this.r, opts)) {
            useA = a;
            this._detourSign = sign;
            this._detourT = 0.6;
            found = true;
            break;
          }
        }
        if (found) break;
      }
      if (!found) {
        // Fully boxed in — fall back to desired direction so axis-slide can at
        // least scrape along the wall.
        useA = desiredA;
      }
    } else if (this._detourT > 0) {
      this._detourT -= dt;
    } else {
      this._detourSign = 0;
    }

    const fx = Math.cos(useA) * mag;
    const fy = Math.sin(useA) * mag;
    const nx = this.x + fx * spd * dt;
    const ny = this.y + fy * spd * dt;
    if (!collidesObstacle(nx, this.y, this.r, opts)) this.x = nx;
    if (!collidesObstacle(this.x, ny, this.r, opts)) this.y = ny;
    this.x = clamp(this.x, this.r, world.w - this.r);
    this.y = clamp(this.y, this.r, world.h - this.r);
  }
  // Lightweight damage path for DoT ticks: no hit flash, no vamp, no sfx — but
  // still routes through die() so kill-triggers (plague puff, drops, XP) fire.
  // Color picks the damage-number tint to distinguish burn (orange) from
  // bleed (red) from plague (green) in the combat log.
  takeDoT(dmg, color='#ff7b28') {
    if (this.hp <= 0) return false;
    this.hp -= dmg;
    game.damageNums.push({
      x: this.x + rand(-6, 6), y: this.y - this.r + rand(-4, 4),
      life: 0.6, text: Math.ceil(dmg), vy: -45, color,
    });
    if (this.hp <= 0) { this.die(); return true; }
    return false;
  }
  hurt(dmg, bx, by, showNumber=true) {
    const wasAlive = this.hp > 0;
    if (!wasAlive) return false;
    if (hasSP('sp_giantslayer') && isBossKind(this.type)) dmg *= 1.45;
    this.hp -= dmg;
    this.hitFlash = 0.12;
    // F2 — Adrenaline Surge: refresh the 1.2s speed burst on each damage event.
    if (this.spawnFloor === 2) this.surgeT = 1.2;
    // vampire heal: lifesteal-on-hit (per damage event, not per kill)
    if (game.player && game.player.vampHeal > 0) {
      game.player.hp = Math.min(game.player.maxHp, game.player.hp + game.player.vampHeal);
    }
    for (let i = 0; i < 6; i++) {
      const a = Math.random()*TAU;
      const s = rand(100, 280);
      game.particles.push(new Particle(bx, by, {
        vx: Math.cos(a)*s, vy: Math.sin(a)*s,
        life: rand(0.2, 0.5), r: rand(3,6),
        color: isBossKind(this.type) ? '#ffbd2e' : '#8fcf3f', fade:true, gravity: 200,
      }));
    }
    if (showNumber) {
      game.damageNums.push({
        x: bx, y: by - this.r,
        life: 0.8, text: Math.ceil(dmg),
        vy: -60, color: dmg > 40 ? '#ff6b6b' : '#ffbd2e',
      });
    }
    sfx('hit');
    if (this.hp <= 0 && wasAlive) {
      // F6 — Second Wind: first time we'd die, revive at 40% HP instead.
      // Only the one cheat per enemy, including bosses.
      if (this.spawnFloor === 6 && !this.phoenixUsed) {
        this.phoenixUsed = true;
        this.hp = Math.max(1, this.maxHp * 0.4);
        this.hitFlash = 0.3;
        for (let i = 0; i < 20; i++) {
          const a = Math.random()*TAU, s = rand(120, 280);
          game.particles.push(new Particle(this.x, this.y, {
            vx: Math.cos(a)*s, vy: Math.sin(a)*s,
            life: rand(0.5, 1.0), r: rand(4, 8),
            color: choice(['#ff7b28','#ffd966','#ff6b6b']), fade: true, gravity: 120,
          }));
        }
        sfx('boss');
        return false;
      }
      // Final-boss "checkout" mechanic: on the final floor's boss, the killing
      // blow doesn't actually kill — boss clamps to 1 HP, stops attacking, goes
      // invulnerable, and the normal room-clear flow brings up the super-power
      // pick (the checkout screen). Real fate is decided at checkout confirm.
      if (isBossKind(this.type) && game.floor >= FLOORS.length && !this.pendingCheckout) {
        this.hp = 1;
        this.pendingCheckout = true;
        this.damage = 0;
        this.hitFlash = 0.4;
        sfx('boss');
        return false;
      }
      this.die();
      return true;
    }
    return false;
  }
  die() {
    // Splat
    const splatColor = isBossKind(this.type) ? '#ffbd2e'
                     : this.type === 'bloater' ? '#a8e34b'
                     : this.type === 'stalker' ? '#c881ff'
                     : '#8fcf3f';
    for (let i = 0; i < 18; i++) {
      const a = Math.random()*TAU;
      const s = rand(60, 280);
      game.particles.push(new Particle(this.x, this.y, {
        vx: Math.cos(a)*s, vy: Math.sin(a)*s,
        life: rand(0.4, 0.9), r: rand(4,8),
        color: splatColor, fade: true, gravity: 300,
      }));
    }
    // Bloater: leave a poison cloud that slows + DOTs the player.
    if (this.type === 'bloater') {
      const base = ZTYPES.bloater;
      game.poisonClouds.push(new PoisonCloud(this.x, this.y, base.cloudR, base.cloudLife, base.cloudSlow, base.cloudDmg));
    }
    // Plague Carrier upgrade: any zombie death leaks a short toxic puff that
    // damages nearby zombies. Scales with the 'plague' upgrade level.
    spawnPlaguePuff(this.x, this.y);
    // F1 — Death Rattle: leaves a brief toxic puff where the enemy fell.
    if (this.spawnFloor === 1) {
      game.poisonClouds.push(new PoisonCloud(this.x, this.y, 50, 0.8, 0.85, 4));
    }
    // F5 — Parting Shot: 3 enemy bullets in a radial burst on death.
    if (this.spawnFloor === 5) {
      const projSpd = 260;
      const projDmg = Math.max(4, this.damage * 0.5);
      const baseA = Math.random() * TAU;
      for (let i = 0; i < 3; i++) {
        const a = baseA + (i / 3) * TAU;
        game.ezBullets.push(new ZombieProjectile(this.x, this.y, a, projSpd, projDmg));
      }
    }
    // Elite affix death effects
    if (this.affix === 'glacial') {
      // Death pulse: if player is within 160px AND grounded, freeze/slow them.
      // Airborne (jumping) player dodges the debuff entirely — contract is
      // "airborne = immune to everything", matching the player.hurt z-gate.
      const pdx = game.player.x - this.x, pdy = game.player.y - this.y;
      if (pdx*pdx + pdy*pdy < 160*160 && game.player.z <= 0) {
        game.player.slowT = Math.max(game.player.slowT, 1.2);
        game.player.slowMul = Math.min(game.player.slowMul, 0.45);
      }
      // Ice-shard particles
      for (let i = 0; i < 26; i++) {
        const a = Math.random()*TAU, s = rand(120, 260);
        game.particles.push(new Particle(this.x, this.y, {
          vx: Math.cos(a)*s, vy: Math.sin(a)*s,
          life: rand(0.4, 0.8), r: rand(3,6), color: '#7bd1ff', fade: true,
        }));
      }
    } else if (this.affix === 'overload') {
      // Small explosion on death — schedule with a 0.35s telegraph so the
      // player has a window to jump/dash out. Damage dropped from 0.9x zombie
      // damage to 0.7x so a HAHAHA-tier overload isn't a one-shot if caught.
      const boomR = 95 * 0.85;
      const dmg = Math.max(10, this.damage * 0.7);
      game.pendingBooms.push({
        x: this.x, y: this.y, r: boomR, damage: dmg,
        windup: 0.35, t: 0, dead: false,
      });
    }
    // Elite drops
    const dropRoll = Math.random();
    const eliteBonus = this.elite ? 0.15 : 0;
    if (dropRoll < 0.08 + eliteBonus) {
      game.powerups.push(new Powerup(this.x, this.y, 'health'));
    } else if (dropRoll < 0.14 + eliteBonus) {
      game.powerups.push(new Powerup(this.x, this.y, 'ammo'));
    }
    game.kills++;
    game.score += this.score;
    game.player.gainXP(this.xp);
    applySuperPowerOnKill(this);
    shakeCam(isBossKind(this.type) ? 14 : this.type==='brute' ? 6 : 3);
    sfx('die');
  }
  explode() {
    // Trigger explosion, destroy self
    this.hp = 0;
    const base = ZTYPES.exploder;
    const eStats = enemyStats('exploder', game.floor, this.elite);
    game.explosions.push(new Explosion(this.x, this.y, base.boomR*(this.elite?1.2:1), eStats.damage, false));
    // just vanish into smoke, no splat particles
    for (let i = 0; i < 20; i++) {
      const a = Math.random()*TAU;
      const s = rand(80, 260);
      game.particles.push(new Particle(this.x, this.y, {
        vx: Math.cos(a)*s, vy: Math.sin(a)*s,
        life: rand(0.3, 0.7), r: rand(5,10),
        color: choice(['#ff7b5c','#ffbd2e','#c73866']), fade:true,
      }));
    }
    game.kills++;
    game.score += this.score;
    game.player.gainXP(this.xp);
    applySuperPowerOnKill(this);
    sfx('boom');
  }
  draw() {
    const x = this.x, y = this.y;
    // Platform lift: visual elevation when this zombie is standing on a slab.
    // Jump z stacks on top. Shadow stays at y so the lifted body reads.
    const onPlat = this.layer && this.layer.startsWith('platform:');
    const baseLift = onPlat ? PLATFORM_LIFT : 0;
    const lift = (this.z || 0) + baseLift;
    drawShadow(x, y, this.r);

    const now = performance.now();

    // Runner motion-blur trail (drawn underneath everything else)
    if (this.type === 'runner') {
      const sp = Math.hypot((this._lastX!=null? x-this._lastX:0), (this._lastY!=null? y-this._lastY:0));
      this._lastX = x; this._lastY = y;
      // approximate fast-moving — runners are always fast — paint a couple ghost circles behind
      const back = Math.cos(this.angle), bsy = Math.sin(this.angle);
      for (let i = 1; i <= 3; i++) {
        ctx.globalAlpha = 0.18 - i*0.04;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(x - back*i*7, y - bsy*i*7, this.r*0.85, 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    // Elite aura — animated outline + sparkle ring. Affix recolors the aura:
    // blazing=orange, glacial=ice-blue, overload=hazard-yellow. No affix keeps
    // the classic purple elite tint.
    if (this.elite) {
      const pulse = 0.5 + 0.3*Math.sin(now/200);
      let auraFill = `rgba(200,129,255,${0.13*pulse})`;
      let auraStroke = `rgba(200,129,255,${0.55*pulse})`;
      if (this.affix === 'blazing') {
        auraFill   = `rgba(255,123,40,${0.18*pulse})`;
        auraStroke = `rgba(255,189,46,${0.60*pulse})`;
      } else if (this.affix === 'glacial') {
        auraFill   = `rgba(123,209,255,${0.16*pulse})`;
        auraStroke = `rgba(180,230,255,${0.60*pulse})`;
      } else if (this.affix === 'overload') {
        auraFill   = `rgba(255,240,120,${0.14*pulse})`;
        auraStroke = `rgba(255,230,80,${0.60*pulse})`;
      }
      ctx.fillStyle = auraFill;
      ctx.beginPath(); ctx.arc(x, y, this.r*1.9, 0, TAU); ctx.fill();
      ctx.strokeStyle = auraStroke;
      ctx.lineWidth = 2;
      // dashed rotating outline
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(now/600);
      ctx.setLineDash([6, 5]);
      ctx.beginPath(); ctx.arc(0, 0, this.r*1.45, 0, TAU); ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
      // sparkles
      for (let i = 0; i < 4; i++) {
        const a = now/400 + i*Math.PI/2;
        const sx = x + Math.cos(a)*this.r*1.6;
        const sy = y + Math.sin(a)*this.r*1.6;
        ctx.fillStyle = `rgba(238,210,255,${0.6*pulse})`;
        ctx.beginPath(); ctx.arc(sx, sy, 1.8 + Math.sin(now/180+i), 0, TAU); ctx.fill();
      }
    }

    // Overload pre-death warning: at <=25% HP paint a fast-flickering
    // yellow-orange outline + expanding warning ring so the player reads
    // the impending boom early and can position/dodge.
    if (this.elite && this.affix === 'overload' && this.hp > 0 && this.hp <= this.maxHp * 0.25) {
      const flick = (Math.floor(now / 90) % 2 === 0);
      const ringPhase = (now / 600) % 1;
      const ringR = this.r * (1.1 + ringPhase * 1.6);
      ctx.strokeStyle = `rgba(255,189,46,${(1 - ringPhase) * 0.65})`;
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 5]);
      ctx.beginPath(); ctx.arc(x, y, ringR, 0, TAU); ctx.stroke();
      ctx.setLineDash([]);
      ctx.strokeStyle = flick ? '#ffbd2e' : '#ff7b5c';
      ctx.lineWidth = 4;
      ctx.beginPath(); ctx.arc(x, y, this.r + 2, 0, TAU); ctx.stroke();
    }

    // Exploder pulsing glow — intensifies as fuse runs out
    if (this.type === 'exploder') {
      let intensity = 0.18;
      if (this.fusing) {
        const base = ZTYPES.exploder.fuse;
        const left = Math.max(0, this.fuseT) / base; // 1 -> 0
        const urge = 1 - left;                       // 0 -> 1
        intensity = 0.25 + 0.55 * urge * (0.5 + 0.5*Math.sin(now/(60 - urge*40)));
      } else {
        intensity = 0.18 + 0.1*Math.sin(now/220);
      }
      const grad = ctx.createRadialGradient(x, y, 0, x, y, this.r*2.2);
      grad.addColorStop(0, `rgba(255,189,46,${intensity})`);
      grad.addColorStop(0.6, `rgba(255,107,107,${intensity*0.5})`);
      grad.addColorStop(1, 'rgba(255,107,107,0)');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(x, y, this.r*2.2, 0, TAU); ctx.fill();
    }

    // Boss menacing aura — applies to all boss variants. Color varies per kit:
    //   classic = red, necromancer = sickly green, berserker = fiery orange-red
    //   that intensifies with rage stacks, queen = acid green-yellow.
    if (isBossKind(this.type)) {
      const pulse = 0.4 + 0.25*Math.sin(now/300);
      let inner, outer;
      if (this.type === 'boss_necro')      { inner = 'rgba(110,200,90,0.18)';  outer = `rgba(140,255,120,${0.4*pulse})`; }
      else if (this.type === 'boss_berserker') {
        const rageBoost = 1 + 0.3 * (this.rageStacks || 0);
        inner = `rgba(255,80,40,${0.18*rageBoost})`;
        outer = `rgba(255,107,107,${0.45*pulse*rageBoost})`;
      }
      else if (this.type === 'boss_queen') { inner = 'rgba(180,230,90,0.18)';  outer = `rgba(200,255,100,${0.45*pulse})`; }
      else { inner = this.elite ? 'rgba(200,129,255,0.18)' : 'rgba(199,56,102,0.16)';
             outer = this.elite ? `rgba(200,129,255,${0.45*pulse})` : `rgba(255,107,107,${0.4*pulse})`; }
      const grad = ctx.createRadialGradient(x, y, this.r*0.6, x, y, this.r*2.1);
      grad.addColorStop(0, inner);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(x, y, this.r*2.1, 0, TAU); ctx.fill();
      ctx.strokeStyle = outer;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(x, y, this.r*1.25, 0, TAU); ctx.stroke();
    }

    // Berserker slam/quake telegraphs. Visible ring at the damage radius so
    // the player can position (or time a jump) before the detonation.
    if (this.type === 'boss_berserker') {
      const base = ZTYPES.boss_berserker;
      if (this.slamState === 'windup') {
        const prog = 1 - this.slamT / base.slamWindup;
        ctx.save();
        ctx.translate(x, y);
        // outer warning fill that fades in as detonation nears
        const grad = ctx.createRadialGradient(0, 0, this.r, 0, 0, base.slamR);
        grad.addColorStop(0, `rgba(255,107,107,${0.05 + 0.15*prog})`);
        grad.addColorStop(1, 'rgba(255,107,107,0)');
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(0, 0, base.slamR, 0, TAU); ctx.fill();
        // rotating dashed ring at the damage radius
        ctx.strokeStyle = `rgba(255,107,107,${0.55 + 0.35*prog})`;
        ctx.lineWidth = 3 + 2*prog;
        ctx.setLineDash([14, 8]);
        ctx.rotate(now/400);
        ctx.beginPath(); ctx.arc(0, 0, base.slamR, 0, TAU); ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }
      if (this.quakeState === 'windup') {
        const prog = 1 - this.quakeT / base.quakeWindup;
        ctx.save();
        ctx.translate(this.quakeTargetX, this.quakeTargetY);
        // ground-crack fill
        const grad = ctx.createRadialGradient(0, 0, 10, 0, 0, base.quakeR);
        grad.addColorStop(0, `rgba(255,189,46,${0.10 + 0.20*prog})`);
        grad.addColorStop(1, 'rgba(255,189,46,0)');
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(0, 0, base.quakeR, 0, TAU); ctx.fill();
        // inner + outer rings so the edge of the damage zone is unambiguous
        ctx.strokeStyle = `rgba(255,107,107,${0.6 + 0.3*prog})`;
        ctx.lineWidth = 3 + 2*prog;
        ctx.setLineDash([10, 8]);
        ctx.rotate(now/500);
        ctx.beginPath(); ctx.arc(0, 0, base.quakeR, 0, TAU); ctx.stroke();
        ctx.setLineDash([]);
        // crosshair in the middle
        ctx.strokeStyle = `rgba(255,230,80,${0.5 + 0.4*prog})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-12, 0); ctx.lineTo(12, 0);
        ctx.moveTo(0, -12); ctx.lineTo(0, 12);
        ctx.stroke();
        ctx.restore();
      }
    }

    // Howler aura — pulsing translucent ring. Drawn for ALL howlers, fading
    // out at the aura edge so the player can see the buff radius.
    if (this.type === 'howler') {
      const base = ZTYPES.howler;
      const pulse = 0.45 + 0.35 * Math.sin(this.howlPulse);
      // soft fill
      const grad = ctx.createRadialGradient(x, y, this.r, x, y, base.auraR);
      grad.addColorStop(0, 'rgba(123,184,224,0.10)');
      grad.addColorStop(1, 'rgba(123,184,224,0)');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(x, y, base.auraR, 0, TAU); ctx.fill();
      // sweeping ring outline at radius
      ctx.strokeStyle = `rgba(123,184,224,${0.30 + 0.25*pulse})`;
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 6]);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(this.howlPulse * 0.4);
      ctx.beginPath(); ctx.arc(0, 0, base.auraR, 0, TAU); ctx.stroke();
      ctx.restore();
      ctx.setLineDash([]);
    }

    // Stalker — translucent veil while unrevealed. Once revealed, fade to full
    // opacity over ~0.4s so the unmask reads as a hard reveal.
    let stalkerAlpha = 1;
    if (this.type === 'stalker') {
      const base = ZTYPES.stalker;
      if (!this.stalkRevealed) {
        // breathing low alpha
        stalkerAlpha = base.sneakAlpha + 0.05 * Math.sin(now/300);
      } else {
        stalkerAlpha = Math.min(1, base.sneakAlpha + this.stalkRevealT * 2.0);
      }
    }
    if (stalkerAlpha < 1) ctx.globalAlpha = stalkerAlpha;

    // Exploder fuse flash
    const fuseFlash = this.type==='exploder' && this.fusing &&
                     (Math.floor(now/80) % 2 === 0);

    ctx.save();
    ctx.translate(x, y - lift);

    const flash = this.hitFlash > 0 || fuseFlash;
    const bodyColor = flash ? '#ffffff' : this.color;

    // Legs
    const bob = Math.sin(this.walkPhase) * 3;
    const legColor = this.type === 'runner' ? '#162410' : '#1e3816';
    ctx.fillStyle = legColor;
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;
    // runners get longer/thinner legs
    const legW = this.type==='runner' ? this.r*0.28 : this.r*0.35;
    const legH = this.type==='runner' ? this.r*0.62 : this.r*0.5;
    ctx.beginPath(); ctx.ellipse(-this.r*0.4, this.r*0.7+bob, legW, legH, 0, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse( this.r*0.4, this.r*0.7-bob, legW, legH, 0, 0, TAU); ctx.fill(); ctx.stroke();

    ctx.rotate(this.angle);

    // ----- Body -----
    ctx.fillStyle = bodyColor;
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;
    if (this.type === 'spitter') {
      // bloated belly — slightly elongated body
      ctx.beginPath(); ctx.ellipse(0, this.r*0.05, this.r*1.05, this.r*1.1, 0, 0, TAU); ctx.fill(); ctx.stroke();
    } else if (this.type === 'brute') {
      // boxy hulking shoulders
      ctx.beginPath();
      const w = this.r*1.1, h = this.r*0.95;
      ctx.moveTo(-w, -h*0.4);
      ctx.lineTo(-w*0.7, -h);
      ctx.lineTo( w*0.7, -h);
      ctx.lineTo( w,  -h*0.4);
      ctx.lineTo( w*0.95, h*0.6);
      ctx.lineTo(-w*0.95, h*0.6);
      ctx.closePath();
      ctx.fill(); ctx.stroke();
    } else {
      ctx.beginPath(); ctx.arc(0, 0, this.r, 0, TAU); ctx.fill(); ctx.stroke();
    }

    // ----- Body details by type -----
    if (this.type === 'walker') {
      // tattered shirt — hanging strips + exposed bone hint
      ctx.strokeStyle = flash ? '#c8c8c8' : '#3a5a1f';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(-this.r*0.7, -this.r*0.2); ctx.lineTo(this.r*0.3, this.r*0.5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-this.r*0.5, this.r*0.3); ctx.lineTo(this.r*0.1, -this.r*0.4); ctx.stroke();
      // tatters at bottom
      ctx.fillStyle = '#1e3816';
      ctx.beginPath();
      ctx.moveTo(-this.r*0.5, this.r*0.6);
      ctx.lineTo(-this.r*0.3, this.r*0.95);
      ctx.lineTo(-this.r*0.1, this.r*0.6);
      ctx.lineTo( this.r*0.1, this.r*0.9);
      ctx.lineTo( this.r*0.3, this.r*0.6);
      ctx.closePath(); ctx.fill();
      // exposed bone (rib) hint
      ctx.strokeStyle = '#f5e8c8'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-this.r*0.25, -this.r*0.05); ctx.lineTo(this.r*0.05, -this.r*0.1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-this.r*0.25, this.r*0.15); ctx.lineTo(this.r*0.05, this.r*0.10); ctx.stroke();
    } else if (this.type === 'runner') {
      // lean torn jersey — diagonal slashes
      ctx.strokeStyle = flash ? '#c8c8c8' : '#5e8a25';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-this.r*0.6, -this.r*0.1); ctx.lineTo(this.r*0.4, -this.r*0.4); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-this.r*0.6, this.r*0.2); ctx.lineTo(this.r*0.5, this.r*0.0); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-this.r*0.4, this.r*0.5); ctx.lineTo(this.r*0.4, this.r*0.3); ctx.stroke();
      // bloodied claws hint forward
      ctx.fillStyle = '#c73866';
      ctx.beginPath(); ctx.arc(this.r*0.75, this.r*0.0, 2, 0, TAU); ctx.fill();
    } else if (this.type === 'spitter') {
      // glowing acid sacs across belly
      const breathe = 0.85 + 0.15*Math.sin(now/240);
      ctx.fillStyle = `rgba(143,207,63,${0.6*breathe})`;
      ctx.beginPath(); ctx.arc(-this.r*0.3, this.r*0.4, 5*breathe, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc(0,           this.r*0.55, 6*breathe, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc(this.r*0.3,  this.r*0.4, 5*breathe, 0, TAU); ctx.fill();
      ctx.fillStyle = '#cedc4e';
      ctx.beginPath(); ctx.arc(-this.r*0.3, this.r*0.4, 2, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc(0,           this.r*0.55, 2, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc(this.r*0.3,  this.r*0.4, 2, 0, TAU); ctx.fill();
      // dark veins
      ctx.strokeStyle = '#3a5a1f'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(-this.r*0.6, this.r*0.0); ctx.quadraticCurveTo(-this.r*0.3, this.r*0.3, 0, this.r*0.55); ctx.stroke();
    } else if (this.type === 'exploder') {
      // boil cluster — pulsing red sores
      const fp = this.fusing ? 1 - Math.max(0, this.fuseT)/ZTYPES.exploder.fuse : 0;
      const heat = 0.7 + fp*0.4 + 0.15*Math.sin(now/120);
      ctx.fillStyle = `rgba(255,80,40,${heat})`;
      ctx.beginPath(); ctx.arc(-this.r*0.35, -this.r*0.1, 4, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc( this.r*0.0,   this.r*0.35, 5, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc( this.r*0.35, -this.r*0.05, 4, 0, TAU); ctx.fill();
      ctx.fillStyle = '#fff6c9';
      ctx.beginPath(); ctx.arc(-this.r*0.35, -this.r*0.1, 1.5, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc( this.r*0.0,   this.r*0.35, 1.5, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc( this.r*0.35, -this.r*0.05, 1.5, 0, TAU); ctx.fill();
    } else if (this.type === 'brute') {
      // muscle / armor plates — chest plate + shoulder rivets
      ctx.fillStyle = flash ? '#d8d8d8' : '#3d5a26';
      ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-this.r*0.55, -this.r*0.2);
      ctx.lineTo( this.r*0.55, -this.r*0.2);
      ctx.lineTo( this.r*0.4,   this.r*0.35);
      ctx.lineTo(-this.r*0.4,   this.r*0.35);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      // rivets
      ctx.fillStyle = '#c0c0c8';
      for (const [rx, ry] of [[-this.r*0.45,-this.r*0.1],[ this.r*0.45,-this.r*0.1],[-this.r*0.3,this.r*0.25],[ this.r*0.3,this.r*0.25]]) {
        ctx.beginPath(); ctx.arc(rx, ry, 1.7, 0, TAU); ctx.fill();
      }
      // arm muscles bulge
      ctx.fillStyle = bodyColor;
      ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(-this.r*0.95, -this.r*0.45, this.r*0.32, 0, TAU); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc( this.r*0.95, -this.r*0.45, this.r*0.32, 0, TAU); ctx.fill(); ctx.stroke();
    } else if (this.type === 'boss') {
      // shoulder spikes + chest plate
      ctx.fillStyle = '#f5e8c8'; ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2.5;
      // left shoulder spike
      ctx.beginPath();
      ctx.moveTo(-this.r*0.95, -this.r*0.5);
      ctx.lineTo(-this.r*1.25, -this.r*1.1);
      ctx.lineTo(-this.r*0.65, -this.r*0.6);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      // right shoulder spike
      ctx.beginPath();
      ctx.moveTo( this.r*0.95, -this.r*0.5);
      ctx.lineTo( this.r*1.25, -this.r*1.1);
      ctx.lineTo( this.r*0.65, -this.r*0.6);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      // chest plate
      ctx.fillStyle = '#2a3a18';
      ctx.beginPath();
      ctx.moveTo(-this.r*0.45, -this.r*0.15);
      ctx.lineTo( this.r*0.45, -this.r*0.15);
      ctx.lineTo( this.r*0.35,  this.r*0.4);
      ctx.lineTo(-this.r*0.35,  this.r*0.4);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#5a7a3c'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-this.r*0.4, this.r*0.05); ctx.lineTo(this.r*0.4, this.r*0.05); ctx.stroke();
    } else if (this.type === 'boss_necro') {
      // Necromancer: tattered hooded robe — purple cloak hanging, glowing rune
      // on the chest. Also a small staff cradle (drawn as a vertical bone bar).
      ctx.fillStyle = '#2a1a3a'; ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2.5;
      // hood overhang
      ctx.beginPath();
      ctx.moveTo(-this.r*1.05, -this.r*0.55);
      ctx.quadraticCurveTo(0, -this.r*1.1, this.r*1.05, -this.r*0.55);
      ctx.lineTo( this.r*0.85, -this.r*0.1);
      ctx.lineTo(-this.r*0.85, -this.r*0.1);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      // chest rune — glowing acid-green sigil
      const rp = 0.6 + 0.4 * Math.sin(now/240);
      ctx.fillStyle = `rgba(168,227,75,${0.35*rp})`;
      ctx.beginPath(); ctx.arc(0, this.r*0.15, this.r*0.32, 0, TAU); ctx.fill();
      ctx.fillStyle = '#a8e34b'; ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, this.r*0.0);
      ctx.lineTo(this.r*0.18, this.r*0.18);
      ctx.lineTo(0, this.r*0.32);
      ctx.lineTo(-this.r*0.18, this.r*0.18);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      // staff (small bone vertical) on the right side
      ctx.fillStyle = '#f5e8c8'; ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.rect(this.r*1.1, -this.r*0.9, 4, this.r*1.6); ctx.fill(); ctx.stroke();
      // staff orb
      ctx.fillStyle = `rgba(168,227,75,${0.85*rp})`;
      ctx.beginPath(); ctx.arc(this.r*1.12, -this.r*0.95, 6 + rp*2, 0, TAU); ctx.fill();
    } else if (this.type === 'boss_berserker') {
      // Berserker: bare-chested, scarred — chest plate is flesh-colored with
      // diagonal scars. Brighter as rage stacks pile up.
      const rage = (this.rageStacks || 0) / 3;
      ctx.fillStyle = `rgb(${Math.round(200 + 40*rage)}, ${Math.round(70 - 30*rage)}, ${Math.round(50 - 20*rage)})`;
      ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(-this.r*0.55, -this.r*0.2);
      ctx.lineTo( this.r*0.55, -this.r*0.2);
      ctx.lineTo( this.r*0.45,  this.r*0.45);
      ctx.lineTo(-this.r*0.45,  this.r*0.45);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      // scars
      ctx.strokeStyle = '#5a0a0a'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-this.r*0.4, -this.r*0.1); ctx.lineTo(this.r*0.3, this.r*0.3); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-this.r*0.2, this.r*0.0); ctx.lineTo(this.r*0.45, this.r*0.2); ctx.stroke();
      // arm bulges
      ctx.fillStyle = bodyColor;
      ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(-this.r*1.0, -this.r*0.45, this.r*0.34, 0, TAU); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc( this.r*1.0, -this.r*0.45, this.r*0.34, 0, TAU); ctx.fill(); ctx.stroke();
      // rage particles when stacks > 0
      if (rage > 0 && Math.random() < 0.3 * rage) {
        const aa = -Math.PI/2 + rand(-0.6, 0.6);
        game.particles.push(new Particle(x, y - this.r*0.5, {
          vx: Math.cos(aa)*rand(20,60), vy: Math.sin(aa)*rand(40,80),
          life: 0.5, r: rand(2,4), color:'#ff6b6b', fade:true
        }));
      }
    } else if (this.type === 'boss_queen') {
      // Spitter Queen: distended acid-belly sacs + crown of small spikes (drawn
      // with the head). Ellipse body with cluster of glowing pouches.
      const breathe = 0.85 + 0.15 * Math.sin(now/240);
      ctx.fillStyle = `rgba(168,227,75,${0.55*breathe})`;
      for (const [px, py, pr] of [[-this.r*0.45, this.r*0.3, 9], [0, this.r*0.5, 11], [this.r*0.45, this.r*0.3, 9], [-this.r*0.2, this.r*0.0, 6], [this.r*0.2, this.r*0.0, 6]]) {
        ctx.beginPath(); ctx.arc(px, py, pr*breathe, 0, TAU); ctx.fill();
      }
      ctx.fillStyle = '#cedc4e';
      for (const [px, py] of [[-this.r*0.45, this.r*0.3], [0, this.r*0.5], [this.r*0.45, this.r*0.3]]) {
        ctx.beginPath(); ctx.arc(px, py, 2.5, 0, TAU); ctx.fill();
      }
      // dark veins
      ctx.strokeStyle = '#3a5a1f'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-this.r*0.6, this.r*0.0); ctx.quadraticCurveTo(-this.r*0.3, this.r*0.3, 0, this.r*0.55); ctx.stroke();
      ctx.beginPath(); ctx.moveTo( this.r*0.6, this.r*0.0); ctx.quadraticCurveTo( this.r*0.3, this.r*0.3, 0, this.r*0.55); ctx.stroke();
    } else if (this.type === 'howler') {
      // Howler: gaping mouth + glowing throat (it's literally screaming).
      // Mouth runs across the whole front of the body.
      ctx.fillStyle = '#1a0a0a';
      ctx.beginPath(); ctx.ellipse(this.r*0.2, this.r*0.0, this.r*0.55, this.r*0.35, 0, 0, TAU); ctx.fill();
      ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2; ctx.stroke();
      // glowing throat
      const tp = 0.6 + 0.4*Math.sin(now/180);
      ctx.fillStyle = `rgba(255,224,102,${0.55*tp})`;
      ctx.beginPath(); ctx.ellipse(this.r*0.25, 0, this.r*0.35, this.r*0.22, 0, 0, TAU); ctx.fill();
      // jagged teeth
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(this.r*0.0 + i*5, -this.r*0.18);
        ctx.lineTo(this.r*0.02 + i*5, -this.r*0.05);
        ctx.lineTo(this.r*0.05 + i*5, -this.r*0.18);
        ctx.closePath(); ctx.fill();
      }
    } else if (this.type === 'stalker') {
      // Stalker: hooded shadow — narrow ribcage suggested by 3 dark bars.
      ctx.strokeStyle = flash ? '#c8c8c8' : '#3a2a4f';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-this.r*0.4, -this.r*0.2); ctx.lineTo(this.r*0.4, -this.r*0.2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-this.r*0.4, -this.r*0.0); ctx.lineTo(this.r*0.4, -this.r*0.0); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-this.r*0.4,  this.r*0.2); ctx.lineTo(this.r*0.4,  this.r*0.2); ctx.stroke();
      // claws hint forward
      ctx.fillStyle = '#c881ff';
      ctx.beginPath(); ctx.arc(this.r*0.85, -this.r*0.05, 2, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc(this.r*0.85,  this.r*0.10, 2, 0, TAU); ctx.fill();
    } else if (this.type === 'bloater') {
      // Bloater: big distended bumps + green sores (poison sacs). Cracks across belly.
      const breathe = 0.85 + 0.15*Math.sin(now/280);
      ctx.fillStyle = `rgba(168,227,75,${0.55*breathe})`;
      for (const [px, py, pr] of [[-this.r*0.45, this.r*0.0, 8], [this.r*0.0, this.r*0.45, 10], [this.r*0.45, this.r*0.0, 8], [-this.r*0.15, -this.r*0.4, 6], [this.r*0.3, -this.r*0.35, 7]]) {
        ctx.beginPath(); ctx.arc(px, py, pr*breathe, 0, TAU); ctx.fill();
      }
      ctx.fillStyle = '#cedc4e';
      for (const [px, py] of [[-this.r*0.45, this.r*0.0], [this.r*0.0, this.r*0.45], [this.r*0.45, this.r*0.0]]) {
        ctx.beginPath(); ctx.arc(px, py, 2.2, 0, TAU); ctx.fill();
      }
      // cracks
      ctx.strokeStyle = '#5a3a1f'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(-this.r*0.7, this.r*0.2); ctx.lineTo(this.r*0.7, this.r*0.3); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-this.r*0.5, -this.r*0.1); ctx.lineTo( this.r*0.6, -this.r*0.2); ctx.stroke();
    }

    // ----- Head -----
    const hr = this.r * (this.type==='brute' ? 0.55 : isBossKind(this.type) ? 0.6 : 0.68);
    ctx.fillStyle = flash ? '#ffffff' : lighten(this.color, 12);
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(this.r*0.35, 0, hr, 0, TAU); ctx.fill(); ctx.stroke();

    // Mouth / teeth
    ctx.fillStyle = '#1a0a0a';
    ctx.beginPath(); ctx.ellipse(this.r*0.7, hr*0.15, hr*0.35, hr*0.2, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.rect(this.r*0.55 + i*5, hr*0.15 - 3, 3, 6);
      ctx.fill();
    }

    // Eye
    const eyeR = isBossKind(this.type) ? hr*0.28 : hr*0.22;
    ctx.fillStyle = this.eye;
    ctx.beginPath(); ctx.arc(this.r*0.55, -hr*0.25, eyeR, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(this.r*0.58, -hr*0.30, hr*0.08, 0, TAU); ctx.fill();
    // Boss kinds get a second glowing eye + an eye-glow halo. Color follows
    // the variant tint so identity reads at a glance.
    if (isBossKind(this.type)) {
      ctx.fillStyle = this.eye;
      ctx.beginPath(); ctx.arc(this.r*0.15, -hr*0.25, eyeR*0.85, 0, TAU); ctx.fill();
      ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(this.r*0.18, -hr*0.30, hr*0.07, 0, TAU); ctx.fill();
      const pulse = 0.5 + 0.5*Math.sin(now/220);
      const glowRGB = this.type === 'boss_necro'      ? '168,227,75'
                    : this.type === 'boss_berserker'  ? '255,107,107'
                    : this.type === 'boss_queen'      ? '206,220,78'
                    : '255,189,46';
      ctx.fillStyle = `rgba(${glowRGB},${0.45*pulse})`;
      ctx.beginPath(); ctx.arc(this.r*0.55, -hr*0.25, eyeR*1.7, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc(this.r*0.15, -hr*0.25, eyeR*1.5, 0, TAU); ctx.fill();
    }

    // Classic boss horns — only the original boss gets the bone horns. The
    // new variants are silhouetted differently (hood / crown / berserker).
    if (this.type === 'boss') {
      ctx.fillStyle = '#f5e8c8';
      ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;
      // outer big horn left
      ctx.beginPath();
      ctx.moveTo(this.r*0.15, -hr*0.85);
      ctx.quadraticCurveTo(this.r*0.25, -hr*1.6, this.r*0.5, -hr*1.65);
      ctx.lineTo(this.r*0.55, -hr*0.8);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      // outer big horn right
      ctx.beginPath();
      ctx.moveTo(this.r*0.55, -hr*0.8);
      ctx.quadraticCurveTo(this.r*0.85, -hr*1.55, this.r*1.0, -hr*1.35);
      ctx.lineTo(this.r*0.85, -hr*0.6);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      // tiny secondary spikes
      ctx.fillStyle = '#d8c098';
      ctx.beginPath(); ctx.moveTo(this.r*0.32, -hr*0.95); ctx.lineTo(this.r*0.4, -hr*1.2); ctx.lineTo(this.r*0.45, -hr*0.95); ctx.closePath(); ctx.fill(); ctx.stroke();
    }

    // Necromancer head — pointed hood overlay + glowing eye sockets shadow.
    if (this.type === 'boss_necro') {
      ctx.fillStyle = '#2a1a3a'; ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(this.r*0.0, -hr*1.7);
      ctx.lineTo(this.r*0.85, -hr*0.55);
      ctx.lineTo(this.r*0.85, hr*0.0);
      ctx.lineTo(this.r*0.05, hr*0.0);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      // hood inner shadow
      ctx.fillStyle = 'rgba(0,0,0,0.35)';
      ctx.beginPath(); ctx.ellipse(this.r*0.4, -hr*0.25, hr*0.55, hr*0.45, 0, 0, TAU); ctx.fill();
    }
    // Queen crown — three small spikes across the brow.
    if (this.type === 'boss_queen') {
      ctx.fillStyle = '#cedc4e'; ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2;
      for (const dx of [-0.1, 0.25, 0.6]) {
        ctx.beginPath();
        ctx.moveTo(this.r*dx, -hr*0.7);
        ctx.lineTo(this.r*(dx+0.08), -hr*1.15);
        ctx.lineTo(this.r*(dx+0.16), -hr*0.7);
        ctx.closePath(); ctx.fill(); ctx.stroke();
      }
    }
    // Berserker mohawk-spikes
    if (this.type === 'boss_berserker') {
      ctx.fillStyle = '#7a1a1a'; ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 2;
      for (const dx of [0.1, 0.32, 0.54]) {
        ctx.beginPath();
        ctx.moveTo(this.r*dx, -hr*0.6);
        ctx.lineTo(this.r*(dx+0.05), -hr*1.0);
        ctx.lineTo(this.r*(dx+0.12), -hr*0.6);
        ctx.closePath(); ctx.fill(); ctx.stroke();
      }
    }

    // Spitter extra: jaw pouch + drool
    if (this.type === 'spitter') {
      ctx.fillStyle = '#ffbd2e';
      ctx.beginPath(); ctx.arc(this.r*0.75, hr*0.35, 5, 0, TAU); ctx.fill();
      ctx.strokeStyle='#0f0a1a'; ctx.lineWidth=2; ctx.stroke();
      // drool dripping from mouth
      ctx.fillStyle = '#8fcf3f';
      const drop = 2 + Math.sin(now/300)*1;
      ctx.beginPath(); ctx.ellipse(this.r*0.85, hr*0.35 + drop, 1.5, 3, 0, 0, TAU); ctx.fill();
    }
    // Exploder: glowing fuse — sized by urgency
    if (this.type === 'exploder') {
      const fp = this.fusing ? 1 - Math.max(0, this.fuseT)/ZTYPES.exploder.fuse : 0;
      ctx.fillStyle = this.fusing ? '#ffffff' : '#ffbd2e';
      const fr = 4 + fp*3;
      ctx.beginPath(); ctx.arc(0, -this.r*0.7, fr, 0, TAU); ctx.fill();
      if (this.fusing) {
        ctx.strokeStyle = '#ff6b6b';
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(0, -this.r*0.7, 8 + fp*4, 0, TAU); ctx.stroke();
        // little spark trail off the fuse
        if (Math.random() < 0.6 + fp*0.3) {
          game.particles.push(new Particle(x, y - this.r*0.7, {
            vx: rand(-30, 30), vy: rand(-50, -10),
            life: 0.25, r: rand(1.5, 2.8),
            color: choice(['#ffbd2e','#ff6b6b','#fff6c9']), fade: true,
          }));
        }
      }
    }

    ctx.restore();
    // Restore alpha after stalker veil
    if (stalkerAlpha < 1) ctx.globalAlpha = 1;

    // HP bar for ALL zombies
    const isBoss = isBossKind(this.type);
    const bw = this.r * 2, bh = isBoss ? 8 : 4;
    const bx = x - bw/2;
    const by = y - this.r - (isBoss ? 14 : 10) - lift;
    if (isBoss) {
      // Per-variant HP bar tint matches the aura color so boss identity reads
      // at a glance from across the room.
      const barColor = this.type === 'boss_necro'      ? '#a8e34b'
                     : this.type === 'boss_berserker'  ? '#ff6b6b'
                     : this.type === 'boss_queen'      ? '#cedc4e'
                     : '#c73866';
      drawHPBar(bx, by, bw, bh, this.hp / this.maxHp, barColor);
      ctx.font = 'bold 14px Bangers, sans-serif';
      ctx.textAlign = 'center';
      ctx.lineWidth = 4; ctx.strokeStyle = '#0f0a1a';
      const variantName = this.type === 'boss_necro'      ? 'NECROMANCER'
                        : this.type === 'boss_berserker'  ? 'BERSERKER'
                        : this.type === 'boss_queen'      ? 'SPITTER QUEEN'
                        : 'BOSS';
      const name = this.elite ? ('ELITE ' + variantName) : variantName;
      ctx.strokeText(name, x, by - 4);
      ctx.fillStyle = this.elite ? '#c881ff'
                    : this.type === 'boss_necro'     ? '#a8e34b'
                    : this.type === 'boss_berserker' ? '#ff6b6b'
                    : this.type === 'boss_queen'     ? '#cedc4e'
                    : '#ffbd2e';
      ctx.fillText(name, x, by - 4);
    } else if (this.hp < this.maxHp || this.elite || this.type === 'brute') {
      drawHPBar(bx, by, bw, bh, this.hp / this.maxHp, this.elite ? '#c881ff' : '#c73866');
    }
  }
}

// ------------- HOWLER AURA ------------------------------------
// Recompute every zombie's effective speed/damage from cached _baseSpeed/_baseDamage
// before the per-zombie update loop runs. Howlers apply the strongest buff that
// covers the zombie (no stacking — we take the max so two howlers don't double-buff).
// Howlers themselves are exempt (they shouldn't self-buff into being scary).
// Cost: O(N * H) where H = #howlers in room (typically 0-3).
// Floor mechanic pass — runs after applyHowlerBuffs so it stacks on howler
// speed/damage buffs. Each enemy carries the mechanic of the floor it spawned
// on (so a boss layered across floors keeps its own), and only one mechanic
// fires per enemy. Tick-based (F2/F3/F4) effects apply here; event-based
// (F1/F5/F6) effects live in hurt()/die().
function applyFloorMechanics(dt) {
  const player = game.player;
  for (const z of game.zombies) {
    if (z.hp <= 0) continue;
    if (z.spawnFloor === 2) {
      // F2 — Adrenaline Surge: decay the timer and apply the frame's speed mul.
      if (z.surgeT > 0) {
        z.surgeT = Math.max(0, z.surgeT - dt);
        z.speed *= 1.5;
      }
    } else if (z.spawnFloor === 3) {
      // F3 — Frenzy: once below half HP, damage output jumps by 40%.
      if (z.hp < z.maxHp * 0.5) z.damage *= 1.4;
    } else if (z.spawnFloor === 4 && player) {
      // F4 — Corrode: 0.5s-tick aura damage while the player stands within
      // 70px of the enemy's body edge. No slow, no particles — it's a soft
      // "don't linger" pressure, not a DoT replacement.
      const auraR = 70 + z.r;
      const dx = player.x - z.x, dy = player.y - z.y;
      if (dx*dx + dy*dy < auraR*auraR) {
        z.corrodeAcc += dt;
        while (z.corrodeAcc >= 0.5) {
          z.corrodeAcc -= 0.5;
          player.hurt(Math.max(2, z.damage * 0.05), z.x, z.y, { kind: 'zombie', zombieType: z.type, attackKind: 'corrode' });
        }
      } else {
        z.corrodeAcc = 0;
      }
    }
  }
}

function applyHowlerBuffs() {
  // Reset everyone's buffs first.
  for (const z of game.zombies) {
    z.buffSpdMul = 1;
    z.buffDmgMul = 1;
  }
  // Rebuild the player's slow multiplier each frame ONLY when the slow timer
  // has already decayed — otherwise we'd wipe out fire-and-forget debuffs
  // (e.g. the glacial elite death pulse) that expect slowMul to hold for
  // their slowT window. Howler chill, bloater clouds, etc. all re-apply via
  // Math.min each frame, so a clean 1 at slowT=0 lets them rebuild from
  // scratch without stomping active timer-based slows.
  if (game.player && game.player.slowT <= 0) game.player.slowMul = 1;
  // Collect howlers (cheap pre-pass).
  const howlers = [];
  for (const z of game.zombies) {
    if (z.type === 'howler' && z.hp > 0) howlers.push(z);
  }
  if (howlers.length === 0) {
    // Restore base stats; nothing to buff.
    for (const z of game.zombies) {
      z.speed  = z._baseSpeed;
      z.damage = z._baseDamage;
    }
    return;
  }
  const base = ZTYPES.howler;
  const auraR2 = base.auraR * base.auraR;
  for (const z of game.zombies) {
    if (z.type === 'howler') continue; // no self/peer buff
    let bestSpd = 1, bestDmg = 1;
    for (const h of howlers) {
      // Howler ally-buff is same-layer only — a howler on a platform doesn't
      // empower ground-level walkers and vice versa. Feels right: aura is
      // morale, and you have to be standing with your pack.
      if (!sameLayer(h, z)) continue;
      const dx = h.x - z.x, dy = h.y - z.y;
      if (dx*dx + dy*dy < auraR2) {
        if (base.auraSpdMul > bestSpd) bestSpd = base.auraSpdMul;
        if (base.auraDmgMul > bestDmg) bestDmg = base.auraDmgMul;
      }
    }
    z.buffSpdMul = bestSpd;
    z.buffDmgMul = bestDmg;
    z.speed  = z._baseSpeed  * bestSpd;
    z.damage = z._baseDamage * bestDmg;
  }
  // Howlers themselves keep base stats.
  for (const h of howlers) { h.speed = h._baseSpeed; h.damage = h._baseDamage; }

  // Chill aura — if the player stands inside ANY howler's aura, refresh a short
  // slow debuff. slowMul was just reset to 1 at the top of this function, so
  // Math.min below starts clean; updatePoisonClouds may further lower it if the
  // player is also in a poison puddle this frame.
  const player = game.player;
  if (player) {
    let chilled = false;
    for (const h of howlers) {
      // Same-layer only — a howler on a platform can't freeze a ground player
      // standing beneath. Consistent with the ally-buff rule above.
      if (!sameLayer(h, player)) continue;
      const dx = h.x - player.x, dy = h.y - player.y;
      if (dx*dx + dy*dy < auraR2) { chilled = true; break; }
    }
    if (chilled) {
      player.slowT = Math.max(player.slowT, 0.25);
      player.slowMul = Math.min(player.slowMul, base.chillMul);
    }
  }
}

// ------------- POISON CLOUD ------------------------------------
// Bloater death residue. Persists for cloudLife seconds. While the player is
// inside the cloud radius: apply slow (refresh slowT each frame so leaving the
// cloud expires it ~0.2s later) and tick DOT every 0.5s.
class PoisonCloud {
  constructor(x, y, radius, life, slowMul, dps) {
    this.x = x; this.y = y;
    this.radius = radius;
    this.life = life;
    this.maxLife = life;
    this.slowMul = slowMul;
    this.dps = dps;
    this.dotAcc = 0;
    this.phase = Math.random() * TAU;
    this.dead = false;
    // initial puff
    for (let i = 0; i < 22; i++) {
      const a = Math.random()*TAU, s = rand(40, 140);
      game.particles.push(new Particle(x, y, {
        vx: Math.cos(a)*s, vy: Math.sin(a)*s,
        life: rand(0.5, 1.0), r: rand(4, 8), color:'#a8e34b', fade:true,
      }));
    }
  }
}
function updatePoisonClouds(dt, player) {
  if (game.poisonClouds.length === 0) return;
  for (const c of game.poisonClouds) {
    c.life -= dt;
    c.phase += dt * 1.4;
    if (c.life <= 0) { c.dead = true; continue; }
    // ambient drift particles — sparse so we stay light per frame
    if (Math.random() < 0.18) {
      const a = Math.random()*TAU, r = Math.random()*c.radius;
      game.particles.push(new Particle(c.x + Math.cos(a)*r, c.y + Math.sin(a)*r, {
        vx: rand(-15, 15), vy: rand(-25, -5),
        life: rand(0.4, 0.9), r: rand(2, 4), color:'#a8e34b', fade:true,
      }));
    }
    if (c.plague) {
      // Plague Carrier puff: no player effect, damages nearby zombies every
      // 0.25s. Radius is c.radius as set by spawnPlaguePuff.
      c.plagueAcc = (c.plagueAcc || 0) + dt;
      while (c.plagueAcc >= 0.25) {
        c.plagueAcc -= 0.25;
        const r2 = c.radius * c.radius;
        for (const z of game.zombies) {
          if (z.hp <= 0) continue;
          const zdx = z.x - c.x, zdy = z.y - c.y;
          if (zdx*zdx + zdy*zdy < r2) {
            z.takeDoT(c.plagueDps * 0.25, '#8fcf3f');
          }
        }
      }
    } else {
      // player overlap (normal bloater/hazard cloud)
      const dx = player.x - c.x, dy = player.y - c.y;
      if (dx*dx + dy*dy < (c.radius + player.r) * (c.radius + player.r)) {
        // slow refresh — short tail so it expires when you step out
        player.slowT = Math.max(player.slowT, 0.25);
        player.slowMul = Math.min(player.slowMul, c.slowMul);
        // DOT — small ticks every 0.5s. Routed through player.hurt so iframes
        // and the death pipeline behave consistently. iframes mean a recent
        // big hit will block the next poison tick — that's fine and merciful.
        c.dotAcc += dt;
        while (c.dotAcc >= 0.5) {
          c.dotAcc -= 0.5;
          player.hurt(c.dps * 0.5, c.x, c.y, { kind: 'cloud', attackKind: 'poison' });
        }
      }
    }
  }
  game.poisonClouds = game.poisonClouds.filter(c => !c.dead);
  // Reset slowMul if no cloud is currently slowing the player so the slow can
  // expire cleanly via slowT countdown in player.update().
  if (player.slowT <= 0) player.slowMul = 1;
}
function drawPoisonClouds() {
  for (const c of game.poisonClouds) {
    const lifeFrac = c.life / c.maxLife;
    const alpha = clamp(lifeFrac * 1.2, 0.0, 0.55);
    // soft fill
    const grad = ctx.createRadialGradient(c.x, c.y, c.radius*0.2, c.x, c.y, c.radius);
    grad.addColorStop(0, `rgba(168,227,75,${alpha*0.6})`);
    grad.addColorStop(0.7, `rgba(120,180,55,${alpha*0.35})`);
    grad.addColorStop(1, 'rgba(60,90,20,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    // wobble the radius slightly so it feels alive
    const wob = 1 + 0.05*Math.sin(c.phase);
    ctx.arc(c.x, c.y, c.radius*wob, 0, TAU); ctx.fill();
    // dashed boundary so the danger zone reads
    ctx.strokeStyle = `rgba(168,227,75,${alpha*1.2})`;
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 5]);
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.rotate(c.phase * 0.3);
    ctx.beginPath(); ctx.arc(0, 0, c.radius, 0, TAU); ctx.stroke();
    ctx.restore();
    ctx.setLineDash([]);
  }
}

// ------------- PENDING BOOMS (overload affix) ------------------
// Death-delayed explosions with a 0.35s telegraph so the player can jump or
// dash out. Detonates into a real Explosion (which pipes player damage
// through player.hurt, so jump i-frames dodge it cleanly).
function updatePendingBooms(dt) {
  if (game.pendingBooms.length === 0) return;
  for (const pb of game.pendingBooms) {
    pb.t += dt;
    if (pb.t >= pb.windup) {
      game.explosions.push(new Explosion(pb.x, pb.y, pb.r, pb.damage, false));
      pb.dead = true;
    }
  }
}
function drawPendingBooms() {
  for (const pb of game.pendingBooms) {
    const p = clamp(pb.t / pb.windup, 0, 1);
    // expanding telegraph circle — grows toward final radius as windup runs
    const tr = pb.r * (0.35 + 0.65 * p);
    ctx.strokeStyle = `rgba(255,189,46,${0.45 + 0.45 * p})`;
    ctx.lineWidth = 3 + 3 * p;
    ctx.setLineDash([10, 6]);
    ctx.beginPath(); ctx.arc(pb.x, pb.y, tr, 0, TAU); ctx.stroke();
    ctx.setLineDash([]);
    // inner warning glow
    const grad = ctx.createRadialGradient(pb.x, pb.y, 2, pb.x, pb.y, tr);
    grad.addColorStop(0, `rgba(255,107,107,${0.12 + 0.18 * p})`);
    grad.addColorStop(1, 'rgba(255,107,107,0)');
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(pb.x, pb.y, tr, 0, TAU); ctx.fill();
    // crosshair
    ctx.strokeStyle = `rgba(255,230,80,${0.5 + 0.4 * p})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pb.x - 10, pb.y); ctx.lineTo(pb.x + 10, pb.y);
    ctx.moveTo(pb.x, pb.y - 10); ctx.lineTo(pb.x, pb.y + 10);
    ctx.stroke();
  }
}

// ------------- BULLET ------------------------------------------
class Bullet {
  constructor(x, y, angle, speed, damage, opts={}) {
    this.x = x; this.y = y;
    this.vx = Math.cos(angle)*speed;
    this.vy = Math.sin(angle)*speed;
    this.angle = angle;
    this.life = opts.life || 0.7;
    this.damage = damage;
    this.dead = false;
    this.trail = [];
    this.pierce = opts.pierce || 0;
    this.piercedSet = new Set();
    // Explosive stacks: 0 = none, 1..5 = bigger boom. Store count directly so
    // the bullet's own explosion at hit/wall can size itself per stack.
    this.explosive = (opts.explosive | 0) || 0;
    this.crit = !!opts.crit;
  }
  update(dt) {
    this.trail.push({x:this.x,y:this.y,a:1});
    if (this.trail.length > 6) this.trail.shift();
    this.x += this.vx*dt; this.y += this.vy*dt;
    this.life -= dt;
    if (this.life <= 0) { this.dead = true; return; }
    if (this.x<0||this.y<0||this.x>world.w||this.y>world.h) { this.dead = true; return; }
    // Bullets fly — they pass over gaps and low platforms (walkOver obstacles)
    // but still collide with solid cover (crates, cars, etc.).
    if (collidesObstacle(this.x, this.y, 2, {passGaps:true})) {
      this.dead = true;
      if (this.explosive > 0) {
        // Radius and damage scale with stacks: L1 70/0.6×, L5 130/1.2×.
        const er = 70 + 15 * (this.explosive - 1);
        const em = 0.6 + 0.15 * (this.explosive - 1);
        game.explosions.push(new Explosion(this.x, this.y, er, this.damage * em, true));
      }
      for (let i=0;i<6;i++) {
        const a=Math.random()*TAU, s=rand(80,200);
        game.particles.push(new Particle(this.x, this.y, {
          vx:Math.cos(a)*s, vy:Math.sin(a)*s,
          life:0.2, r:rand(2,4), color:'#ffbd2e', fade:true,
        }));
      }
      return;
    }
    for (const z of game.zombies) {
      if (this.piercedSet.has(z)) continue;
      if (dist2(this.x, this.y, z.x, z.y) < z.r*z.r) {
        z.hurt(this.damage, this.x, this.y);
        applyOnHitDoT(z, this.crit);
        this.piercedSet.add(z);
        if (this.explosive > 0) {
          const er = 70 + 15 * (this.explosive - 1);
          const em = 0.6 + 0.15 * (this.explosive - 1);
          game.explosions.push(new Explosion(this.x, this.y, er, this.damage * em, true));
        }
        if (this.pierce <= 0) {
          this.dead = true;
          return;
        } else {
          this.pierce--;
        }
      }
    }
  }
  draw() {
    for (let i=0; i<this.trail.length; i++) {
      const t=this.trail[i], a=(i+1)/this.trail.length;
      ctx.globalAlpha = a*0.6;
      ctx.fillStyle = this.crit ? '#ff6b6b' : '#ffbd2e';
      ctx.beginPath(); ctx.arc(t.x, t.y, 3*a, 0, TAU); ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.save();
    ctx.translate(this.x, this.y); ctx.rotate(this.angle);
    ctx.fillStyle = this.crit ? '#ffdede' : '#fff6c9';
    ctx.strokeStyle = this.crit ? '#c73866' : '#e08e00';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(0, 0, this.crit?9:7, this.crit?4:3, 0, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.restore();
  }
}

// ------------- ENEMY PROJECTILE --------------------------------
class ZombieProjectile {
  constructor(x, y, angle, speed, damage) {
    this.x = x; this.y = y;
    this.vx = Math.cos(angle)*speed;
    this.vy = Math.sin(angle)*speed;
    this.life = 2.2;
    this.damage = damage;
    this.dead = false;
    this.phase = 0;
    // Optional homing — set externally by Spitter Queen. While homeT > 0, the
    // projectile gently steers toward the player at homeAccel px/s^2, capping
    // total speed at its initial magnitude so it doesn't snowball into a
    // hitscan. Once homeT drains, it flies straight.
    this.homeT = 0;
    this.homeAccel = 0;
    this.tint = null; // override slime color (queen=acid green-yellow)
  }
  update(dt, player) {
    this.phase += dt * 12;
    if (this.homeT > 0 && this.homeAccel > 0) {
      this.homeT -= dt;
      const tx = player.x - this.x, ty = player.y - this.y;
      const td = Math.hypot(tx, ty) || 1;
      // accel toward player
      this.vx += (tx/td) * this.homeAccel * dt;
      this.vy += (ty/td) * this.homeAccel * dt;
      // cap to original speed magnitude (assume initial speed ~340; clamp to 380)
      const sp = Math.hypot(this.vx, this.vy);
      const maxSp = 380;
      if (sp > maxSp) { this.vx *= maxSp/sp; this.vy *= maxSp/sp; }
    }
    this.x += this.vx*dt; this.y += this.vy*dt;
    this.life -= dt;
    if (this.life <= 0) { this.dead = true; return; }
    if (this.x<0||this.y<0||this.x>world.w||this.y>world.h) { this.dead = true; return; }
    if (collidesObstacle(this.x, this.y, 4, {passGaps:true})) { this.dead = true; return; }
    if (dist2(this.x, this.y, player.x, player.y) < (player.r+8)**2) {
      player.hurt(this.damage, this.x, this.y, { kind: 'projectile' });
      this.dead = true;
      const splatColor = this.tint || '#8fcf3f';
      for (let i=0;i<10;i++) {
        const a=Math.random()*TAU, s=rand(40,140);
        game.particles.push(new Particle(this.x, this.y, {
          vx:Math.cos(a)*s, vy:Math.sin(a)*s,
          life:0.4, r:rand(3,5), color:splatColor, fade:true,
        }));
      }
    }
  }
  draw() {
    const wobble = Math.sin(this.phase) * 2;
    ctx.save();
    ctx.translate(this.x, this.y);
    const main = this.tint || '#8fcf3f';
    const inner = this.tint ? '#e3ff7a' : '#cedc4e';
    ctx.fillStyle = main;
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(0, 0, 10 + wobble, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.fillStyle = inner;
    ctx.beginPath(); ctx.arc(-2, -3, 3, 0, TAU); ctx.fill();
    // drip trail (particles behind)
    if (Math.random() < 0.4) {
      game.particles.push(new Particle(this.x, this.y, {
        vx: rand(-20,20), vy: rand(-20,20),
        life: 0.4, r: rand(2,4), color: main, fade:true, gravity: 80,
      }));
    }
    ctx.restore();
  }
}

// ------------- EXPLOSION ---------------------------------------
class Explosion {
  constructor(x, y, radius, damage, fromPlayer) {
    this.x = x; this.y = y;
    this.radius = radius;
    this.damage = damage;
    this.fromPlayer = fromPlayer;
    this.t = 0;
    this.life = 0.4;
    this.dead = false;
    this.hitSet = new Set();
    // visual burst
    for (let i = 0; i < 24; i++) {
      const a = Math.random()*TAU, s = rand(80, 360);
      game.particles.push(new Particle(x, y, {
        vx: Math.cos(a)*s, vy: Math.sin(a)*s,
        life: rand(0.3, 0.7), r: rand(5, 10),
        color: choice(['#ff6b6b','#ffbd2e','#fff6c9']), fade:true,
      }));
    }
    shakeCam(fromPlayer ? 4 : 10);
    sfx('boom');
  }
  update(dt, player) {
    this.t += dt;
    // Apply damage instantly at start
    if (this.t < dt * 2) {
      if (this.fromPlayer) {
        // damage zombies
        for (const z of game.zombies) {
          if (this.hitSet.has(z)) continue;
          if (dist2(this.x, this.y, z.x, z.y) < (this.radius + z.r)**2) {
            z.hurt(this.damage, this.x, this.y);
            this.hitSet.add(z);
          }
        }
      } else {
        // damage player
        if (dist2(this.x, this.y, player.x, player.y) < (this.radius + player.r)**2) {
          player.hurt(this.damage, this.x, this.y, { kind: 'explosion' });
        }
      }
    }
    if (this.t >= this.life) this.dead = true;
  }
  draw() {
    const p = clamp(this.t / this.life, 0, 1);
    const r = this.radius * (0.3 + p * 0.9);
    ctx.globalAlpha = (1 - p) * 0.1;
    ctx.fillStyle = this.fromPlayer ? '#ffbd2e' : '#ff6b6b';
    ctx.beginPath(); ctx.arc(this.x, this.y, r, 0, TAU); ctx.fill();
    ctx.globalAlpha = (1 - p) * 0.1;
    ctx.strokeStyle = '#fff6c9';
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(this.x, this.y, r, 0, TAU); ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

// ------------- PARTICLE ----------------------------------------
class Particle {
  constructor(x, y, opts) {
    this.x=x; this.y=y;
    this.vx=opts.vx||0; this.vy=opts.vy||0;
    this.life = opts.life || 0.5;
    this.maxLife = this.life;
    this.r = opts.r || 3;
    this.color = opts.color || '#fff';
    this.fade = opts.fade;
    this.gravity = opts.gravity || 0;
    this.dead = false;
  }
  update(dt) {
    this.x += this.vx*dt; this.y += this.vy*dt;
    this.vx *= 0.92; this.vy *= 0.92;
    this.vy += this.gravity*dt;
    this.life -= dt;
    if (this.life <= 0) this.dead = true;
  }
  draw() {
    const alpha = this.fade ? clamp(this.life/this.maxLife, 0, 1) : 1;
    ctx.globalAlpha = alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r*(this.fade?alpha*0.6+0.4:1), 0, TAU);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// ------------- POWERUP -----------------------------------------
class Powerup {
  constructor(x, y, type) {
    this.x=x; this.y=y;
    this.type=type;
    this.r=16;
    this.phase=0;
    this.dead=false;
  }
  update(dt, player) {
    this.phase += dt*3;
    if (dist2(this.x, this.y, player.x, player.y) < (this.r+player.r)**2) {
      if (this.type==='health') {
        player.hp = Math.min(player.maxHp, player.hp + 30);
      } else if (this.type==='ammo') {
        player.ammo = player.maxAmmo;
        player.reloading = false;
      }
      this.dead = true;
      sfx('pickup');
      for (let i=0;i<10;i++) {
        const a=Math.random()*TAU;
        game.particles.push(new Particle(this.x, this.y, {
          vx:Math.cos(a)*rand(60,160), vy:Math.sin(a)*rand(60,160),
          life:0.5, r:rand(3,5),
          color:this.type==='health'?'#ff6b6b':'#ffbd2e', fade:true,
        }));
      }
    }
  }
  draw() {
    const yOff = Math.sin(this.phase)*4;
    ctx.fillStyle = this.type==='health' ? 'rgba(255,107,107,0.2)' : 'rgba(255,189,46,0.2)';
    ctx.beginPath(); ctx.arc(this.x, this.y+yOff, this.r*1.6, 0, TAU); ctx.fill();
    ctx.save();
    ctx.translate(this.x, this.y+yOff);
    ctx.fillStyle = this.type==='health' ? '#fff' : '#2a2f4a';
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.rect(-this.r, -this.r, this.r*2, this.r*2);
    ctx.fill(); ctx.stroke();
    if (this.type==='health') {
      ctx.fillStyle = '#c73866';
      ctx.fillRect(-4, -10, 8, 20);
      ctx.fillRect(-10, -4, 20, 8);
    } else {
      ctx.fillStyle = '#ffbd2e';
      ctx.beginPath();
      ctx.moveTo(-8,-4); ctx.lineTo(0,-10); ctx.lineTo(8,-4); ctx.lineTo(8,8); ctx.lineTo(-8,8); ctx.closePath();
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#0f0a1a';
      ctx.fillRect(-2, -2, 4, 8);
    }
    ctx.restore();
  }
}

// ------------- ROOM GENERATION ---------------------------------
// Each room pulls one of the archetypes below so combat rooms feel distinct
// instead of being same-shaped scatter fields. The archetype drives obstacle
// count + which "feature" to inject (gaps, platforms, chokepoints, hazards).
// Gap/platform types carry walkOver:true — the player can cross them only
// while airborne (jumping or dashing); zombies treat them as solid.
const ROOM_ARCHETYPES = [
  'scatter',     // classic random scatter (the old default feel)
  'gaps',        // two long horizontal gaps — jump to cross
  'platforms',   // elevated platform islands you hop between
  'chokepoint',  // two big pillars forming a corridor in the middle
  'hazardfield', // sparse cover + poison puddles as ambient hazard
  'arena',       // open center ring, cover around the edges (boss-feel)
];
function archetypeForRoom(floor, roomIdx, isBoss) {
  if (isBoss) return 'arena';
  // Deterministic pick per room so the same floor/room always has the same
  // layout style (less RNG thrash within a run, still varies by floor).
  const types = ['scatter','gaps','platforms','chokepoint','hazardfield'];
  const idx = (floor * 7 + roomIdx * 3 + 1) % types.length;
  return types[idx];
}

function obstacleSize(type) {
  if (type === 'crate')              return { w: randi(80, 180), h: randi(80, 180) };
  if (type === 'barrel')             { const s = randi(90, 130); return { w:s, h:s }; }
  if (type === 'car')                return { w: randi(180, 240), h: randi(90, 130) };
  return { w: randi(80, 180), h: randi(80, 180) };
}

function overlapsAny(x, y, w, h, list, pad = 30) {
  for (const o of list) {
    if (x < o.x + o.w + pad && x + w + pad > o.x && y < o.y + o.h + pad && y + h + pad > o.y) return true;
  }
  return false;
}

function generateObstacles(floor, isBoss, roomIdx = 0) {
  // All collidable terrain stripped — the player must be able to walk to every
  // corner without needing to jump or dash around cover. Doomsday ambiance is
  // carried by the per-theme background tile layer instead of physical walls.
  return [];
}

// Seed non-collidable hazard clouds for the hazardfield archetype. These damage
// the player but don't block movement, preserving "random damage landscape is
// fine" while honoring the no-terrain rule.
function generateHazards(floor, isBoss, roomIdx = 0) {
  const archetype = archetypeForRoom(floor, roomIdx, isBoss);
  if (archetype !== 'hazardfield') return;
  const puddleCount = randi(2, 4);
  for (let i = 0; i < puddleCount; i++) {
    let tries = 0;
    while (tries++ < 20) {
      const r = randi(90, 140);
      const x = randi(200, world.w - 200);
      const y = randi(200, world.h - 200);
      if (Math.hypot(x - world.w/2, y - world.h/2) < 260) continue;
      const c = new PoisonCloud(x, y, r, 999, 0.7, 3);
      c.maxLife = 1;
      game.poisonClouds.push(c);
      break;
    }
  }
}

function _generateObstaclesLegacy_DEPRECATED(floor, isBoss, roomIdx = 0) {
  const { obstacles: pool } = themeForFloor(floor);
  const archetype = archetypeForRoom(floor, roomIdx, isBoss);
  const obs = [];

  // ---- Archetype-specific terrain features ----
  // Gaps and platforms are placed first so the scatter pass can respect them.
  if (archetype === 'gaps') {
    // Two wide horizontal gaps carving the room into three vertical bands.
    const gapH = 120;
    const y1 = Math.floor(world.h * 0.33) - gapH/2;
    const y2 = Math.floor(world.h * 0.67) - gapH/2;
    for (const gy of [y1, y2]) {
      const gapW = randi(Math.floor(world.w*0.35), Math.floor(world.w*0.55));
      const gx = randi(160, world.w - gapW - 160);
      obs.push({ x: gx, y: gy, w: gapW, h: gapH, type: 'gap', walkOver: true });
    }
  } else if (archetype === 'platforms') {
    // Three raised platform islands scattered around the map. Each is a low
    // walkOver slab — the player jumps to reach them; zombies can't follow.
    const spots = [
      { x: world.w * 0.25, y: world.h * 0.30 },
      { x: world.w * 0.70, y: world.h * 0.35 },
      { x: world.w * 0.45, y: world.h * 0.70 },
    ];
    for (let i = 0; i < spots.length; i++) {
      const s = spots[i];
      const pw = randi(180, 260), ph = randi(140, 200);
      // Stable id per platform within the room — used by entity.layer strings
      // so "layer === 'platform:2'" uniquely identifies which slab they're on.
      obs.push({ x: Math.floor(s.x - pw/2), y: Math.floor(s.y - ph/2), w: pw, h: ph, type: 'platform', walkOver: true, id: i });
    }
  } else if (archetype === 'chokepoint') {
    // Two big solid pillars forming a corridor through the middle. Forces
    // the player to commit to a lane — strong read on where zombies funnel.
    const midY = world.h / 2;
    const corridorH = 320;
    const pillarW = randi(280, 360);
    const topH = midY - corridorH/2 - 80;
    const botH = world.h - (midY + corridorH/2) - 80;
    const px = Math.floor(world.w/2 - pillarW/2);
    obs.push({ x: px, y: 80, w: pillarW, h: Math.max(200, topH), type: 'chokepost' });
    obs.push({ x: px, y: Math.floor(midY + corridorH/2), w: pillarW, h: Math.max(200, botH), type: 'chokepost' });
  } else if (archetype === 'hazardfield') {
    // Ambient static poison puddles as terrain — fewer walls, more danger.
    const puddleCount = randi(2, 4);
    for (let i = 0; i < puddleCount; i++) {
      let tries = 0;
      while (tries++ < 20) {
        const r = randi(90, 140);
        const x = randi(200, world.w - 200);
        const y = randi(200, world.h - 200);
        if (Math.hypot(x - world.w/2, y - world.h/2) < 260) continue;
        // Spawn a long-lived static hazard cloud (not tied to a bloater death).
        const c = new PoisonCloud(x, y, r, 999, 0.7, 3);
        c.maxLife = 1; // keep draw alpha stable
        game.poisonClouds.push(c);
        break;
      }
    }
  }
  // 'scatter' and 'arena' skip special features and rely on the scatter pass.

  // ---- Scatter pass ----
  const baseCount = isBoss
    ? randi(4, 7)
    : (archetype === 'chokepoint' ? randi(2, 4)
      : archetype === 'arena'      ? randi(6, 9)
      : archetype === 'hazardfield'? randi(3, 5)
      : randi(6, 10));
  let tries = 0;
  while (obs.filter(o => !o.walkOver && o.type !== 'chokepost').length < baseCount && tries < 300) {
    tries++;
    const type = choice(pool);
    const { w, h } = obstacleSize(type);
    const x = randi(140, world.w - w - 140);
    const y = randi(140, world.h - h - 140);
    const centerD = Math.hypot((x + w/2) - world.w/2, (y + h/2) - world.h/2);
    if (centerD < 220) continue;
    if (overlapsAny(x, y, w, h, obs, 30)) continue;
    obs.push({ x, y, w, h, type });
  }
  // Arena: add a symmetric outer ring of cover for the boss-feel.
  if (archetype === 'arena') {
    const ringSpots = [
      { x: 0.18, y: 0.22 }, { x: 0.82, y: 0.22 },
      { x: 0.18, y: 0.78 }, { x: 0.82, y: 0.78 },
    ];
    for (const s of ringSpots) {
      const type = choice(pool);
      const { w, h } = obstacleSize(type);
      const x = Math.floor(world.w * s.x - w/2);
      const y = Math.floor(world.h * s.y - h/2);
      if (!overlapsAny(x, y, w, h, obs, 20)) obs.push({ x, y, w, h, type });
    }
  }
  return obs;
}

function generateRoomSpawns(floor, roomIdx, isBoss) {
  const spawns = [];
  // Floor-2+ flat 2x on count, cap, and spawn cadence.
  const f2 = floor >= 2 ? 2 : 1;
  // Per-room +50% total monsters — applies on top of the floor multiplier and
  // affects every floor. Stagger is unchanged by this multiplier (count only).
  const roomMul = 1.5;
  if (isBoss) {
    // Boss room: boss + minions (scales per floor). Floor 1 always rolls the
    // classic boss so first-time players get the canonical fight. Floor 2+
    // rolls between classic and any unlocked variant.
    let bossType = 'boss';
    if (floor >= 2) {
      const variants = ['boss']; // classic always available
      if (floor >= 2) variants.push('boss_necro', 'boss_queen');
      if (floor >= 3) variants.push('boss_berserker');
      bossType = choice(variants);
    }
    spawns.push({ type: bossType, elite: floor === FLOORS.length, delay: 0 });
    // Berserker is a solo fight — adding minions trivializes the burst-down
    // mechanic since the player has bigger threats to manage. Necromancer
    // already self-summons. Both should still get a small minion garnish so
    // the room isn't empty during the boss telegraphs.
    // Minion count + spawn cadence doubled (non-boss only): 8× base with cap
    // 8× larger (was 112, now 896). Variant scaling (berserker/necromancer)
    // stays as a multiplier on the doubled base so the relative thinning still
    // applies.
    let minionCount = Math.min(Math.ceil(8 * (4 + floor * 2) * f2 * roomMul), Math.ceil(896 * f2 * roomMul));
    if (bossType === 'boss_berserker') minionCount = Math.max(2, Math.floor(minionCount * 0.35));
    if (bossType === 'boss_necro')     minionCount = Math.max(3, Math.floor(minionCount * 0.55));
    const pool = enemyPool(floor).filter(t => t !== 'boss' && !BOSS_KINDS.has(t));
    for (let i = 0; i < minionCount; i++) {
      // Stagger halved (175→88ms) for 2× spawn speed; initial delay 600→300.
      // Floor-2+ further halves both (f2=2) so the horde piles in faster.
      spawns.push({ type: choice(pool), elite: floor >= 3 && Math.random() < 0.15, delay: (300 + i * 88) / f2 });
    }
    return spawns;
  }
  // Normal room: number of enemies scales with floor and room. Count doubled
  // (4× → 8×) and per-type stagger delays halved for 2× spawn speed/density.
  // Floor-2+ doubles count and halves stagger; +50% per-room roomMul stacks on
  // count across all floors.
  const baseCount = Math.ceil(8 * (8 + roomIdx * 2 + Math.floor(floor * 2.4)) * f2 * roomMul);
  const pool = enemyPool(floor);
  const eliteChance = floor >= 2 ? 0.10 + floor * 0.03 : 0;
  for (let i = 0; i < baseCount; i++) {
    const type = choice(pool);
    const elite = (floor >= 2) && Math.random() < eliteChance && !BOSS_KINDS.has(type);
    // Stagger delay halved: faster early, slower for tougher types.
    const baseDelay = type === 'brute' ? 125 : type === 'exploder' ? 88 : type === 'spitter' ? 65 : type === 'runner' ? 45 : 70;
    spawns.push({ type, elite, delay: i * baseDelay / f2 });
  }
  return spawns;
}

function enterRoom(floor, roomIdx) {
  // Event log — record floor change only on floor advance (not per room), and
  // always record the room enter. runStartT may be 0 on the very first call
  // before startRun set it, so guard the timestamp to 0 in that case.
  const evT = game.runStartT ? (performance.now() - game.runStartT) / 1000 : 0;
  if (floor !== game.floor) recordEvent({ t: evT, kind: 'floor', floor });
  recordEvent({ t: evT, kind: 'room', floor, room: roomIdx });
  game.floor = floor;
  game.roomIdx = roomIdx;
  game.isBossRoom = (roomIdx === COMBAT_ROOMS);
  // Clear transients FIRST so the obstacle generator can seed static hazard
  // clouds (hazardfield archetype) into the fresh poisonClouds list without
  // being wiped by the room reset.
  game.zombies = [];
  game.bullets = [];
  game.ezBullets = [];
  game.explosions = [];
  game.particles = [];
  game.damageNums = [];
  game.powerups = [];
  game.poisonClouds = [];
  game.pendingBooms = [];
  game.obstacles = generateObstacles(floor, game.isBossRoom, roomIdx);
  generateHazards(floor, game.isBossRoom, roomIdx);
  // Player keeps HP/ammo, but refill ammo a bit
  game.player.ammo = game.player.maxAmmo;
  game.player.reloading = false;
  // Place player at center
  game.player.x = world.w/2;
  game.player.y = world.h/2;
  // Reset airborne / mid-dash state so the cross-room boundary can't be used
  // as a free jump/dash extender or an invuln cheese.
  game.player.z = 0;
  game.player.jumpT = 0;
  game.player.jumpCd = 0;
  game.player.dashT = 0;
  game.player.iFrames = 0;
  // Layer resets to ground — new room spawns the player at center, and even
  // if center happens to be inside a platform footprint, "start grounded" is
  // the expected default so the player doesn't spawn mysteriously elevated.
  game.player.layer = 'ground';
  // Push out of any obstacle — cycle through 4 cardinal nudges so a pillar
  // that straddles the center (chokepoint archetype) doesn't trap the player
  // against the east wall when +x alone can't clear.
  const nudges = [
    { dx: 40,  dy: 0   },
    { dx: 0,   dy: 40  },
    { dx: -40, dy: 0   },
    { dx: 0,   dy: -40 },
  ];
  let safety = 0, nIdx = 0;
  while (collidesObstacle(game.player.x, game.player.y, game.player.r + 8) && safety < 80) {
    const n = nudges[nIdx % nudges.length];
    const tx = clamp(game.player.x + n.dx, game.player.r + 8, world.w - game.player.r - 8);
    const ty = clamp(game.player.y + n.dy, game.player.r + 8, world.h - game.player.r - 8);
    if (tx === game.player.x && ty === game.player.y) {
      // Hit a world edge in that direction; rotate to the next nudge.
      nIdx++;
    } else {
      game.player.x = tx; game.player.y = ty;
      // every 20 nudges swap direction so we don't get stuck scraping a wall
      if (safety > 0 && safety % 20 === 0) nIdx++;
    }
    safety++;
  }
  camera.x = game.player.x - W/2;
  camera.y = game.player.y - H/2;
  game.spawnQueue = generateRoomSpawns(floor, roomIdx, game.isBossRoom);
  game.spawnTimer = 0;
  game.roomState = 'active';
  game.roomT = 0;
  game.difficultyTier = 0;
  // Boss-room continuous-adds timer: ticks only while a boss is alive. Starts
  // primed-but-not-fired so the scripted minion spawns burn in first before
  // the infinite trickle kicks in.
  game.bossAddT = 2.5;

  const floorIdx = Math.min(floor-1, FLOORS.length - 1);
  if (game.isBossRoom) {
    showBanner(t('bossRoom'), tFloorName(floorIdx));
    sfx('boss');
    triggerCrazyDaveEvent();
  } else {
    showBanner(t('floorRoom', floor, roomIdx+1), tFloorName(floorIdx));
    sfx('wave');
  }
}

// Checkpoint storage: ring buffer of up to 3 slots in localStorage.
// Each slot holds the full checkpoint object + a savedAt timestamp. The legacy
// single-key `zr_checkpoint` is auto-migrated to slot 1 on first read.
function saveCheckpoint(floor, roomIdx) {
  const p = game.player;
  game.checkpoint = {
    floor,
    roomIdx,
    runId: game.runId,
    upgrades: { ...game.upgrades },
    playerLevel: p ? p.level : 1,
    xp: p ? p.xp : 0,
    xpNeeded: p ? p.xpNeeded : 20,
    kills: game.kills,
    score: game.score,
    bonusRerolls: game.bonusRerolls,
    playerClass: game.playerClass,
    environment: game.environment,
    superpowers: [...game.superpowers],
    phoenixUsed: game.phoenixUsed,
    bossVariantsSeen: [...(game.bossVariantsSeen || [])],
    schemaVersion: 2,
    player: p ? {
      hp: p.hp,
      ammo: p.ammo,
      reloading: p.reloading,
      reloadT: p.reloadT,
      fireCd: p.fireCd,
      dashCd: p.dashCd,
      jumpCd: p.jumpCd,
      swingCd: p.swingCd,
      iFrames: p.iFrames,
      slowT: p.slowT,
      slowMul: p.slowMul,
    } : null,
  };
}

// Auto-save: one slot per run. Each run gets a unique runId at start; auto-
// saves from the same run update that run's slot in place, so a single long
// run can't evict every prior run's save from the ring. New runs take the
// oldest slot (front insertion, dropping the oldest entry when full).
function persistCheckpoint() {
  if (!game.checkpoint) return;
  const entry = { ...game.checkpoint, savedAt: Date.now() };
  const arr = readCheckpointsArray();
  while (arr.length < CHECKPOINT_SLOTS) arr.push(null);
  const runId = entry.runId;
  const existing = runId ? arr.findIndex(e => e && e.runId === runId) : -1;
  if (existing >= 0) {
    arr[existing] = entry;
  } else {
    // New run — evict the oldest entry to make room at slot 0.
    arr.pop();
    arr.unshift(entry);
  }
  writeCheckpointsArray(arr);
  game.checkpoints = arr;
  refreshCheckpointPortalBtn();
}

// Manual save: write the current game.checkpoint into a specific slot
// (0..CHECKPOINT_SLOTS-1). Does NOT reorder — slot identity is preserved so
// the player's manual save stays where they put it.
function persistCheckpointToSlot(slotIdx) {
  if (!game.checkpoint) return;
  const entry = { ...game.checkpoint, savedAt: Date.now() };
  const arr = readCheckpointsArray();
  while (arr.length < CHECKPOINT_SLOTS) arr.push(null);
  arr[slotIdx] = entry;
  writeCheckpointsArray(arr);
  game.checkpoints = arr;
  refreshCheckpointPortalBtn();
}

function readCheckpointsArray() {
  try {
    const raw = localStorage.getItem(CHECKPOINTS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.slice(0, CHECKPOINT_SLOTS);
    }
  } catch {}
  // Migrate legacy single-key format: promote to slot 1 of the new ring.
  try {
    const legacy = localStorage.getItem(CHECKPOINT_KEY);
    if (legacy) {
      const cp = JSON.parse(legacy);
      const arr = [{ ...cp, savedAt: Date.now() }];
      writeCheckpointsArray(arr);
      try { localStorage.removeItem(CHECKPOINT_KEY); } catch {}
      return arr;
    }
  } catch {}
  return [];
}
function writeCheckpointsArray(arr) {
  try { localStorage.setItem(CHECKPOINTS_KEY, JSON.stringify(arr)); } catch {}
}

function loadPersistedCheckpoint() {
  const arr = readCheckpointsArray();
  game.checkpoints = arr;
  // game.checkpoint mirrors the most recent non-null slot so the runEnd
  // Continue button and Checkpoint Portal enabled state still work.
  game.checkpoint = arr.find(e => e) || null;
  refreshCheckpointPortalBtn();
}

function clearPersistedCheckpoint() {
  try { localStorage.removeItem(CHECKPOINTS_KEY); } catch {}
  try { localStorage.removeItem(CHECKPOINT_KEY); } catch {}
  game.checkpoints = [];
  game.checkpoint = null;
  refreshCheckpointPortalBtn();
}

function refreshCheckpointPortalBtn() {
  const b = document.getElementById('checkpointPortalBtn');
  if (!b) return;
  const has = !!(game.checkpoints && game.checkpoints.some(e => e));
  b.disabled = !has;
  b.style.opacity = has ? '1' : '0.4';
  b.style.cursor = has ? '' : 'not-allowed';
}

function formatRelativeTime(ts) {
  if (!ts) return '';
  const s = Math.max(0, Math.floor((Date.now() - ts) / 1000));
  if (s < 45) return t('justNow');
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} ${t('minAgo')}`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} ${t('hrAgo')}`;
  const d = Math.floor(h / 24);
  return `${d} ${t('dayAgo')}`;
}

// --- Slot-picker overlay -----------------------------------------
// One overlay used in two modes:
//   'load' — click a filled slot to resume the run at that save.
//   'save' — click any slot (filled or empty) to overwrite it with the
//            current in-run state. Empty slots are valid targets in save mode.
let checkpointSlotsMode = 'load';
function openCheckpointSlots(mode) {
  checkpointSlotsMode = mode;
  loadPersistedCheckpoint(); // refresh array before rendering
  const title = $('checkpointSlotsTitle');
  const sub   = $('checkpointSlotsSubtitle');
  if (title) title.textContent = mode === 'save' ? t('saveCheckpoint') : t('checkpointPortal');
  if (sub)   sub.textContent   = mode === 'save' ? t('chooseSaveSlot') : t('chooseLoadSlot');
  renderCheckpointSlotGrid();
  showOverlay($('checkpointSlots'));
}
function renderCheckpointSlotGrid() {
  const grid = $('checkpointSlotGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const arr = game.checkpoints || [];
  for (let i = 0; i < CHECKPOINT_SLOTS; i++) {
    const entry = arr[i] || null;
    const card = document.createElement('div');
    card.className = 'class-card';
    card.style.minWidth = '240px';
    const isEmpty = !entry;
    const canActivate = checkpointSlotsMode === 'save' || !isEmpty;
    if (!canActivate) {
      card.style.opacity = '0.45';
      card.style.cursor = 'not-allowed';
    }
    const label = `${t('slotLabel')} ${i + 1}`;
    const body = isEmpty
      ? `<div class="cdesc" style="opacity:0.6;">${t('emptySlot')}</div>`
      : `<div class="cdesc"><b>${t('floor')} ${entry.floor} · ${t('room')} ${(entry.roomIdx || 0) + 1}</b></div>
         <div class="cdesc" style="opacity:0.75;">${formatRelativeTime(entry.savedAt)}</div>
         <div class="cdesc" style="opacity:0.6;">${t('lvl')} ${entry.playerLevel || 1} · ${t('kills')} ${entry.kills || 0}</div>`;
    card.innerHTML = `<div class="cname">${label}</div>${body}`;
    if (canActivate) {
      card.addEventListener('click', () => handleCheckpointSlotClick(i));
    }
    grid.appendChild(card);
  }
}
function handleCheckpointSlotClick(slotIdx) {
  if (checkpointSlotsMode === 'save') {
    if (!game.player) return;
    saveCheckpoint(game.floor, game.roomIdx);
    persistCheckpointToSlot(slotIdx);
    hideAllOverlays();
    // Re-show pause overlay since the player was in the pause menu.
    if (game.state === 'paused') showOverlay($('pause'));
    showBanner(t('checkpointSaved'), `${t('slotLabel')} ${slotIdx + 1}`);
    sfx('pickup');
    return;
  }
  // load mode
  const arr = game.checkpoints || [];
  const entry = arr[slotIdx];
  if (!entry) return;
  game.checkpoint = entry;
  initAudio();
  continueFromCheckpoint();
}

function clearRoomAndAdvance() {
  // Heal on clear. The mid-floor "checkpoint" room (halfway through the combat
  // rooms) grants a full restore, saves a revive checkpoint, and grants a
  // bonus reroll token redeemable on any future level-up choice.
  const midRoomIdx = Math.floor(COMBAT_ROOMS / 2);
  const isMidCheckpoint = !game.isBossRoom && game.roomIdx === midRoomIdx;
  const healAmt = game.isBossRoom ? 40 : (isMidCheckpoint ? 9999 : 15);
  game.player.hp = Math.min(game.player.maxHp, game.player.hp + healAmt);
  game.player.ammo = game.player.maxAmmo;
  game.player.reloading = false;

  if (game.isBossRoom) {
    const isFinalBoss = game.floor >= FLOORS.length;
    if (isFinalBoss) {
      showBanner(t('floorClear'), '★ FINAL BOSS DOWN ★');
    } else {
      showBanner(t('floorClear'), t('enteringX', tFloorName(game.floor)));
    }
    sfx('clear');
    // Game-tick-driven transition — automatically pauses during level-up pre-pause
    // or upgrade choice, since it's only decremented inside the 'playing' state block.
    // Shortened so the super-power pick fires promptly; the pick overlay holds
    // the game in place until the player confirms, so the next-floor enterRoom
    // (or victory screen, for the final boss) runs only AFTER the pick.
    game.transitionT = 1.2;
    game.pendingSuperPower = true;
    if (isFinalBoss) {
      // Final boss still grants a pick before the victory screen so the player
      // sees the full pool of 6 picks' worth of choices across a full run.
      game.transitionTarget = null;
      game.pendingVictory = true;
    } else {
      // Boss-clear checkpoint: resume at start of next floor.
      saveCheckpoint(game.floor + 1, 0);
      persistCheckpoint();
      game.transitionTarget = { floor: game.floor + 1, roomIdx: 0 };
    }
  } else {
    if (isMidCheckpoint) {
      // Bonus reroll token is part of the mid-floor "brief shop" beat.
      game.bonusRerolls += 1;
      // Save AFTER incrementing so the token survives a revive.
      saveCheckpoint(game.floor, game.roomIdx + 1);
      persistCheckpoint();
      showBanner(t('checkpoint'), t('checkpointFull'));
    } else {
      showBanner(t('roomClear'), t('roomClearReward', healAmt));
    }
    sfx('clear');
    triggerCrazyDaveEvent();
    game.transitionT = 1.8;
    game.transitionTarget = { floor: game.floor, roomIdx: game.roomIdx + 1 };
  }
}

function updateSpawns(dt) {
  if (game.spawnQueue.length === 0) return;
  game.spawnTimer += dt * 1000;
  const remaining = [];
  for (const s of game.spawnQueue) {
    if (game.spawnTimer >= s.delay) {
      spawnZombie(s.type, s.elite);
    } else {
      remaining.push(s);
    }
  }
  game.spawnQueue = remaining;
}

// Boss-room continuous adds. While a boss is alive, trickle in fresh minions
// on a 2.0-2.8s cadence (scaled slightly by floor). Stops immediately when
// the boss dies. Respects the current difficulty-tier HP/dmg multipliers
// because spawnZombie -> new Zombie picks up game.difficultyTier in the
// Zombie constructor.
function updateBossAdds(dt) {
  if (!game.isBossRoom || game.roomState !== 'active') return;
  // Find a live boss in the current zombies list.
  let bossAlive = false;
  for (const z of game.zombies) {
    // Pending-checkout bosses are narratively dead — stop trickling adds.
    if (isBossKind(z.type) && z.hp > 0 && !z.pendingCheckout) { bossAlive = true; break; }
  }
  if (!bossAlive) return;
  game.bossAddT -= dt;
  if (game.bossAddT > 0) return;
  // Cadence doubled: interval halved (2.4→1.2s base, floor to 0.8s) and adds
  // per burst doubled (2→4) for 2× density of non-boss adds in boss rooms.
  const interval = Math.max(0.8, 1.2 - 0.075 * (game.floor - 1));
  game.bossAddT = interval;
  const pool = enemyPool(game.floor).filter(t => t !== 'boss' && !BOSS_KINDS.has(t));
  if (pool.length === 0) return;
  // Cap raised to 960 (8× the prior 120) per user request. Expect FPS drops on
  // lower-end hardware — separation is still O(n²) and particles/bullets add
  // further pressure. If framerate collapses, revert this cap or add a spatial
  // hash to the separation loop.
  const totalZ = game.zombies.length;
  const toSpawn = Math.min(4, Math.max(0, 960 - totalZ));
  for (let i = 0; i < toSpawn; i++) {
    const type = choice(pool);
    const elite = game.floor >= 3 && Math.random() < 0.12;
    spawnZombie(type, elite);
  }
}

function spawnZombie(type, elite=false) {
  const p = game.player;
  const sides = [
    { x: rand(60, world.w-60), y: 60 },
    { x: rand(60, world.w-60), y: world.h-60 },
    { x: 60, y: rand(60, world.h-60) },
    { x: world.w-60, y: rand(60, world.h-60) },
  ];
  sides.sort((a,b) => dist2(b.x,b.y,p.x,p.y) - dist2(a.x,a.y,p.x,p.y));
  let pick = sides[randi(0, Math.min(2, sides.length))];
  let x = pick.x, y = pick.y, tries = 0;
  while (collidesObstacle(x, y, 36) && tries < 10) {
    x = rand(60, world.w-60);
    y = rand(60, world.h-60);
    tries++;
  }
  for (let i = 0; i < 10; i++) {
    const a = Math.random()*TAU;
    game.particles.push(new Particle(x, y, {
      vx: Math.cos(a)*rand(40,120), vy: Math.sin(a)*rand(40,120),
      life: 0.4, r: rand(3,6), color: elite ? '#c881ff' : '#c73866', fade:true,
    }));
  }
  game.zombies.push(new Zombie(x, y, type, elite));
  // Meaningful-only event log: trash spawns are noise, so only elites and
  // bosses are recorded. Trash dominates the count in late floors otherwise.
  if (elite || BOSS_KINDS.has(type)) {
    recordEvent({
      t: (performance.now() - game.runStartT) / 1000,
      kind: 'spawn',
      zombieType: type,
      elite: !!elite,
      boss: BOSS_KINDS.has(type),
    });
  }
}

function endRoomCheck() {
  if (game.roomState !== 'active') return;
  // Pending-checkout bosses are "narratively dead" — they count as cleared so
  // the super-power pick (checkout screen) can come up while the boss stays
  // frozen at 1 HP. Their real fate resolves in finalizeFinalBossCheckout().
  const liveCount = game.zombies.reduce((n, z) => n + (z.pendingCheckout ? 0 : 1), 0);
  if (game.spawnQueue.length === 0 && liveCount === 0) {
    game.roomState = 'cleared';
    clearRoomAndAdvance();
  }
}

// ------------- ROOM DIFFICULTY ESCALATION ----------------------
// Time-based escalation (RoR1 inspired): while the player dawdles in a room
// the zombies get meaner. Tier bumps every 30s; compounds multiplicatively.
// HP bump only applies at spawn (retroactively scaling live HP would feel
// unfair or random); damage is rescaled live via the buffSpdMul/buffDmgMul
// path so it composes with the howler aura buff without clobbering it.
function difficultyTierName() {
  if (currentLang === 'zh') return DIFFICULTY_TIERS_ZH[game.difficultyTier] || DIFFICULTY_TIERS[game.difficultyTier].name;
  return DIFFICULTY_TIERS[game.difficultyTier].name;
}
function updateRoomDifficulty(dt) {
  if (game.roomState !== 'active') return;
  game.roomT += dt;
  const nextTier = Math.min(DIFFICULTY_TIERS.length - 1, Math.floor(game.roomT / DIFFICULTY_TIER_INTERVAL));
  if (nextTier > game.difficultyTier) {
    const prev = DIFFICULTY_TIERS[game.difficultyTier];
    game.difficultyTier = nextTier;
    const tier = DIFFICULTY_TIERS[nextTier];
    // Live damage bump for already-spawned zombies so the tier escalation hits
    // the existing swarm, not just reinforcements. HP is left alone to avoid
    // retroactive "full heal" or "instakill"-feeling scaling.
    const dmgRatio = tier.dmgMul / prev.dmgMul;
    for (const z of game.zombies) {
      z._baseDamage = z._baseDamage * dmgRatio;
      z.damage      = z.damage      * dmgRatio;
    }
    const label = (currentLang === 'zh') ? '难度：' : 'DIFFICULTY: ';
    showBanner(label + difficultyTierName(), null);
    sfx('levelup');
  }
}

// Risk-of-Rain-style persistent difficulty HUD. Shows mm:ss of the current
// room's elapsed time, a tier name colored by threat, and a progress bar
// filling toward the next tier bump. At max tier the bar stays full & pulses.
const DIFFHUD_VISIBLE_STATES = new Set(['playing', 'paused', 'levelup_pending']);
function updateDifficultyHud() {
  const el = $('diffHud');
  if (!el) return;
  const visible = DIFFHUD_VISIBLE_STATES.has(game.state);
  if (!visible) { el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const tIdx = game.difficultyTier | 0;
  const tier = DIFFICULTY_TIERS[tIdx] || DIFFICULTY_TIERS[0];
  const secs = Math.max(0, Math.floor(game.roomT));
  const mm = String(Math.floor(secs / 60)).padStart(2, '0');
  const ss = String(secs % 60).padStart(2, '0');
  $('dhTime').textContent = `${mm}:${ss}`;
  const tierEl = $('dhTier');
  tierEl.textContent = difficultyTierName();
  tierEl.style.color = tier.color;
  const maxed = tIdx >= DIFFICULTY_TIERS.length - 1;
  let frac;
  if (maxed) frac = 1;
  else {
    const into = game.roomT - tIdx * DIFFICULTY_TIER_INTERVAL;
    frac = Math.max(0, Math.min(1, into / DIFFICULTY_TIER_INTERVAL));
  }
  const fill = $('dhFill');
  fill.style.width = (frac * 100).toFixed(1) + '%';
  fill.style.background = tier.color;
  el.classList.toggle('maxed', maxed);
}

// Bottom-left player-level indicator. Shares visibility states with the
// difficulty HUD. Plays a brief scale-bump animation when level changes so
// the player registers the level-up even without the prepause flash.
let _lvlHudLast = -1;
function updateLevelHud() {
  const el = $('lvlHud');
  if (!el) return;
  const visible = DIFFHUD_VISIBLE_STATES.has(game.state) && game.player;
  if (!visible) { el.classList.add('hidden'); _lvlHudLast = -1; return; }
  el.classList.remove('hidden');
  const lv = game.player.level | 0;
  if (lv !== _lvlHudLast) {
    $('lhValue').textContent = `Lv ${lv}`;
    // Only bump on an actual level-up, not on first mount.
    if (_lvlHudLast !== -1 && lv > _lvlHudLast) {
      el.classList.remove('bumped');
      void el.offsetWidth;
      el.classList.add('bumped');
    }
    _lvlHudLast = lv;
  }
}

// ------------- DoT HOOKS ---------------------------------------
// Called on every player -> zombie hit (bullet or melee) AFTER the base damage
// lands. Rolls/applies burn (on-hit chance) and bleed (on-crit). DPS and chance
// come from the player's upgrade getters so stacking levels just works.
function applyOnHitDoT(z, isCrit) {
  if (!z || z.hp <= 0) return;
  const p = game.player;
  if (!p) return;
  // Ignite: X% chance per hit to apply a 6dps/3s burn. Refreshes timer; DPS is
  // fixed (not per-stack) so the build scales by chance, not by numbers.
  const igC = p.igniteChance;
  if (igC > 0 && Math.random() < igC) {
    z.burnT = Math.max(z.burnT, 3.0);
    z.burnDps = Math.max(z.burnDps, 6);
  }
  // Bleed: crit-only DoT. DPS stacks additively (crit often => big bleed),
  // timer refreshes on each re-crit. Caps at 10x rank-5 dps to keep sane.
  if (isCrit) {
    const bDps = p.bleedDps;
    if (bDps > 0) {
      z.bleedT = Math.max(z.bleedT, 3.0);
      z.bleedDps = Math.min(z.bleedDps + bDps, bDps * 10);
    }
  }
}

// Called from zombie.die() when plague upgrade is active. Leaves a short-lived
// poison puff that damages nearby zombies (NOT the player) via a per-frame
// radius scan. Uses PoisonCloud for visuals but flags it as plague so we don't
// apply the player-facing slow/DOT.
function spawnPlaguePuff(x, y) {
  const p = game.player;
  if (!p) return;
  const dps = p.plagueDps;
  if (dps <= 0) return;
  const c = new PoisonCloud(x, y, 90, 1.2, 1.0, 0);
  c.plague = true;       // skip player effects in updatePoisonClouds
  c.plagueDps = dps;
  c.plagueAcc = 0;
  game.poisonClouds.push(c);
}

// ------------- UPGRADE SYSTEM ----------------------------------
function rollUpgradeChoices(n=4) {
  const cls = game.playerClass || 'ranged';
  const eligible = UPGRADES.filter(u => {
    const have = game.upgrades[u.id] || 0;
    if (u.max && have >= u.max) return false;
    // Class gating: melee hides 'ranged', ranged hides 'melee'. 'shared' always in.
    if (u.cls === 'ranged' && cls === 'melee') return false;
    if (u.cls === 'melee' && cls === 'ranged') return false;
    return true;
  });
  const choices = [];
  const pool = [...eligible];
  while (choices.length < n && pool.length > 0) {
    const idx = randi(0, pool.length);
    choices.push(pool[idx]);
    pool.splice(idx, 1);
  }
  return choices;
}
function applyUpgrade(id) {
  game.upgrades[id] = (game.upgrades[id] || 0) + 1;
  game.lastUpgradePickId = 'upg:' + id;
  // HP upgrade heals
  if (id === 'hp') game.player.hp = Math.min(game.player.maxHp, game.player.hp + 15);
  if (id === 'ammo') game.player.ammo = game.player.maxAmmo;
  renderUpgradeStack();
  recordEvent({
    t: (performance.now() - game.runStartT) / 1000,
    kind: 'upgrade',
    id,
  });
}
function showUpgradeChoice() {
  const choices = rollUpgradeChoices(4);
  if (choices.length === 0) {
    game.pendingLevelUps--;
    resumeFromUpgrade();
    return;
  }
  game.currentChoices = choices;
  game.selectedChoice = 0;
  game.rerollAvailable = true;
  renderChoiceCards();
  // Stats page is now an independent overlay — make sure any stale open from a
  // previous interaction is closed before we drop into the new upgrade pick.
  hideStatsPage();
  clearInputs();
  showOverlay($('upgradeChoice'));
  game.state = 'upgradeChoice';
}

// Standalone stats page — layered on top of whatever overlay invoked it
// (pause or upgrade-choice). Remembers the caller so close returns there
// instead of the main menu. Independent show/hide so the page is reopenable.
let statsPageReturnTo = null;
function showStatsPage(returnTo) {
  statsPageReturnTo = returnTo || null;
  renderStatsPanel($('statsPageColumns'));
  const sp = $('statsPage');
  sp.classList.remove('hidden');
  sp.classList.add('fade-in');
}
function hideStatsPage() {
  const sp = $('statsPage');
  sp.classList.add('hidden');
  statsPageReturnTo = null;
}

// Upgrade-detail popup — opened by clicking any chip in the HUD's active-
// upgrades column. Pauses gameplay while open (so the player can safely read
// the entry); on close we restore whatever state the game was in before.
let upgradeDetailPrevState = null;
function showUpgradeDetail(id, kind) {
  const u = kind === 'sp' ? SP_BY_ID[id] : UPG_BY_ID[id];
  if (!u) return;
  const cardEl = $('upgradeDetailCard');
  if (kind === 'sp') {
    cardEl.style.setProperty('--accent-color', u.color);
    cardEl.innerHTML = `
      <div class="icon">${u.icon}</div>
      <div class="name">${u.name}</div>
      <div class="desc">${u.desc}</div>
      <div class="lvl-pill">★</div>
    `;
  } else {
    const lv = game.upgrades[id] || 0;
    const maxTxt = (u.max == null) ? '∞' : u.max;
    cardEl.style.setProperty('--accent-color', u.color);
    cardEl.innerHTML = `
      <div class="icon">${u.icon}</div>
      <div class="name">${tUpgradeName(id)}</div>
      <div class="desc">${tUpgradeDesc(id, lv)}</div>
      <div class="lvl-pill">${lv} / ${maxTxt}</div>
    `;
  }
  if (game.state === 'playing') {
    upgradeDetailPrevState = 'playing';
    game.state = 'paused';
    clearInputs();
  } else {
    upgradeDetailPrevState = null;
  }
  const el = $('upgradeDetail');
  el.classList.remove('hidden');
  el.classList.add('fade-in');
}
function hideUpgradeDetail() {
  const el = $('upgradeDetail');
  if (el.classList.contains('hidden')) return;
  el.classList.add('hidden');
  // Only restore to 'playing' if nothing else grabbed state while we were up
  // (e.g. a run-end transition) — otherwise we'd resurrect a dead run.
  if (upgradeDetailPrevState === 'playing' && game.state === 'paused') {
    game.state = 'playing';
    clearInputs();
  }
  upgradeDetailPrevState = null;
}
function rerollChoices() {
  if (game.state !== 'upgradeChoice') return;
  if (!game.rerollAvailable && game.bonusRerolls <= 0) return;
  const fresh = rollUpgradeChoices(4);
  if (fresh.length === 0) return;
  game.currentChoices = fresh;
  game.selectedChoice = 0;
  // Spend the free per-level reroll first, then fall back to bonus tokens.
  if (game.rerollAvailable) game.rerollAvailable = false;
  else game.bonusRerolls = Math.max(0, game.bonusRerolls - 1);
  renderChoiceCards();
  sfx('pickup');
}

function renderChoiceCards() {
  const choices = game.currentChoices;
  const grid = document.getElementById('choiceGrid');
  grid.innerHTML = '';
  $('upgradeLvlSub').textContent = t('chooseLevel', game.player.level);
  // Reroll button state — enabled if the free per-level reroll is available
  // OR the player holds one or more bonus tokens from a mid-floor checkpoint.
  const rr = $('rerollBtn');
  if (rr) {
    const canReroll = game.rerollAvailable || game.bonusRerolls > 0;
    rr.disabled = !canReroll;
    const tokens = game.bonusRerolls > 0 ? ` +${game.bonusRerolls}` : '';
    rr.textContent = `${t('reroll')}${tokens}`;
  }
  choices.forEach((u, idx) => {
    const currentLv = game.upgrades[u.id] || 0;
    const nextLv = currentLv + 1;
    const card = document.createElement('div');
    card.className = 'upgrade-card' + (idx === game.selectedChoice ? ' selected' : '');
    card.style.setProperty('--accent-color', u.color);
    const descText = tUpgradeDesc(u.id, nextLv);
    const lvlText = currentLv > 0 ? t('lvUp', currentLv, nextLv) : t('newLv', nextLv);
    card.innerHTML = `
      <div class="num-badge">${idx+1}</div>
      <div class="icon">${u.icon}</div>
      <div class="name">${tUpgradeName(u.id)}</div>
      <div class="desc">${descText}</div>
      <div class="lvl-pill">${lvlText}</div>
    `;
    // Single click: only ever selects — never confirms. Confirmation requires
    // either a double-click on a card or an explicit press of the CONFIRM button
    // (or the Enter key). This prevents accidental upgrade picks in combat.
    card.style.userSelect = 'none';
    card.addEventListener('click', () => {
      if (game.selectedChoice !== idx) {
        game.selectedChoice = idx;
        updateCardSelection();
      }
      sfx('pickup');
    });
    card.addEventListener('dblclick', (e) => {
      e.preventDefault(); // suppress text-selection from the double-click
      if (game.selectedChoice !== idx) {
        game.selectedChoice = idx;
        updateCardSelection();
      }
      confirmSelectedUpgrade();
    });
    grid.appendChild(card);
  });
}

function updateCardSelection() {
  const grid = document.getElementById('choiceGrid');
  Array.from(grid.children).forEach((card, idx) => {
    if (idx === game.selectedChoice) card.classList.add('selected');
    else card.classList.remove('selected');
  });
}

function changeSelection(delta) {
  const n = game.currentChoices.length;
  if (n === 0) return;
  game.selectedChoice = ((game.selectedChoice + delta) % n + n) % n;
  updateCardSelection();
  sfx('pickup');
}

function confirmSelectedUpgrade() {
  if (game.state !== 'upgradeChoice') return;
  const u = game.currentChoices[game.selectedChoice];
  if (!u) return;
  applyUpgrade(u.id);
  game.pendingLevelUps--;
  if (game.pendingLevelUps > 0) {
    showUpgradeChoice();
  } else {
    resumeFromUpgrade();
  }
}
// ------------- SUPER POWER PICK (boss bounty) ------------------
function rollSuperPowerChoices(n=4) {
  const pool = SUPERPOWERS.filter(p => !game.superpowers.has(p.id));
  const choices = [];
  while (choices.length < n && pool.length > 0) {
    const idx = randi(0, pool.length);
    choices.push(pool[idx]);
    pool.splice(idx, 1);
  }
  return choices;
}
function showSuperPowerChoice() {
  const choices = rollSuperPowerChoices(4);
  if (choices.length === 0) {
    // Pool exhausted — skip and continue the queued room transition.
    resumeFromSuperPower();
    return;
  }
  game.currentSPChoices = choices;
  game.selectedSPChoice = 0;
  renderSPChoiceCards();
  hideStatsPage();
  clearInputs();
  showOverlay($('superPowerChoice'));
  game.state = 'superPowerChoice';
  sfx('levelup');
}
function renderSPChoiceCards() {
  const grid = document.getElementById('spChoiceGrid');
  if (!grid) return;
  grid.innerHTML = '';
  game.currentSPChoices.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'upgrade-card' + (idx === game.selectedSPChoice ? ' selected' : '');
    card.style.setProperty('--accent-color', p.color);
    card.style.userSelect = 'none';
    card.innerHTML = `
      <div class="num-badge">${idx+1}</div>
      <div class="icon">${p.icon}</div>
      <div class="name">${p.name}</div>
      <div class="desc">${p.desc}</div>
      <div class="lvl-pill">SUPER POWER</div>
    `;
    card.addEventListener('click', () => {
      if (game.selectedSPChoice !== idx) {
        game.selectedSPChoice = idx;
        updateSPCardSelection();
      }
      sfx('pickup');
    });
    card.addEventListener('dblclick', (e) => {
      e.preventDefault();
      if (game.selectedSPChoice !== idx) {
        game.selectedSPChoice = idx;
        updateSPCardSelection();
      }
      confirmSelectedSuperPower();
    });
    grid.appendChild(card);
  });
}
function updateSPCardSelection() {
  const grid = document.getElementById('spChoiceGrid');
  if (!grid) return;
  Array.from(grid.children).forEach((card, idx) => {
    if (idx === game.selectedSPChoice) card.classList.add('selected');
    else card.classList.remove('selected');
  });
}
function changeSPSelection(delta) {
  const n = game.currentSPChoices.length;
  if (n === 0) return;
  game.selectedSPChoice = ((game.selectedSPChoice + delta) % n + n) % n;
  updateSPCardSelection();
  sfx('pickup');
}
function confirmSelectedSuperPower() {
  if (game.state !== 'superPowerChoice') return;
  const p = game.currentSPChoices[game.selectedSPChoice];
  if (!p) return;
  game.superpowers.add(p.id);
  game.lastUpgradePickId = 'sp:' + p.id;
  // Juggernaut bumps max HP — heal on pick so the player benefits immediately.
  if (game.player) {
    game.player.hp = Math.min(game.player.maxHp, game.player.hp + 999);
  }
  renderUpgradeStack();
  recordEvent({
    t: (performance.now() - game.runStartT) / 1000,
    kind: 'superpower',
    id: p.id,
  });
  resumeFromSuperPower();
}
// Final-boss "checkout" — decides fate at the moment the player confirms the
// super-power pick. Rolls FINAL_BOSS_ABNORMAL_CHANCE: on fail the pending boss
// gets its "final breath" in and abnormal-kills the player; on success we
// finalize the kill and roll credits. See FINAL_BOSS_ABNORMAL_CHANCE comment.
function finalizeFinalBossCheckout() {
  const abnormal = Math.random() < FINAL_BOSS_ABNORMAL_CHANCE;
  if (abnormal) {
    const now = (performance.now() - game.runStartT) / 1000;
    for (const z of game.zombies) {
      if (z.pendingCheckout) {
        recordHit(99999, { kind: 'zombie', zombieType: z.type, attackKind: 'final-breath' }, now);
      }
    }
    game.zombies = game.zombies.filter(z => !z.pendingCheckout);
    game.abnormalDeath = true;
    game.state = 'dead';
    sfx('gameover');
    showRunEnd(false);
    return;
  }
  game.zombies = game.zombies.filter(z => !z.pendingCheckout);
  game.state = 'victory';
  showRunEnd(true);
}

function resumeFromSuperPower() {
  hideAllOverlays();
  game.state = 'playing';
  clearInputs();
  game.transitionT = 0;
  // Final-boss path: pick happens BEFORE victory screen, so fire victory now.
  if (game.pendingVictory) {
    game.pendingVictory = false;
    finalizeFinalBossCheckout();
    return;
  }
  if (game.transitionTarget) {
    const t = game.transitionTarget;
    game.transitionTarget = null;
    enterRoom(t.floor, t.roomIdx);
  }
}

function resumeFromUpgrade() {
  hideAllOverlays();
  game.state = 'playing';
  // Don't restore any pre-interrupt inputs; force the player to re-press
  // so phantom-movement after a card pick is impossible.
  clearInputs();
  // If a room transition was queued when level-up interrupted, the ROOM CLEAR
  // banner has already played out behind the upgrade overlay — skip the remaining
  // wait and jump straight to the next room so the player doesn't stare at an
  // empty cleared room.
  if (game.transitionTarget) {
    const t = game.transitionTarget;
    game.transitionTarget = null;
    game.transitionT = 0;
    enterRoom(t.floor, t.roomIdx);
  }
}

// ------------- UI ----------------------------------------------
const $ = id => document.getElementById(id);
const overlays = () => ['langSelect','menu','classSelect','envSelect','upgradeChoice','superPowerChoice','runEnd','pause','settings','appearance','checkpointSlots','deathReplay'].map(id => $(id)).filter(Boolean);
function hideAllOverlays() { overlays().forEach(o => o.classList.add('hidden')); }
function showOverlay(el) { hideAllOverlays(); el.classList.remove('hidden'); el.classList.add('fade-in'); }

function showBanner(big, small, opts) {
  const el = $('banner');
  el.innerHTML = `${big}${small?`<small>${small}</small>`:''}`;
  el.classList.remove('show');
  el.classList.remove('no-shake');
  void el.offsetWidth;
  // `opts.calm`/`opts.noShake`: swap the bouncy banner-in for a calmer fade.
  // Used by the level-up banner where the scale-overshoot + rotate wobble
  // felt like a screen shake. Other banners keep the full animation.
  if (opts && (opts.calm || opts.noShake)) el.classList.add('no-shake');
  el.classList.add('show');
}
function flashDamage() {
  const el = $('damageFlash');
  el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit');
}
function flashXP() {
  const el = $('xpFlash');
  el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
}
function flashPrePause() {
  const el = $('prepauseFlash');
  if (!el) return;
  el.classList.remove('on'); void el.offsetWidth; el.classList.add('on');
}
function togglePause() {
  if (game.state === 'playing') {
    game.state = 'paused';
    clearInputs();
    renderStatsPanel();
    renderUpgradeStack();
    showOverlay($('pause'));
  } else if (game.state === 'paused') {
    game.state = 'playing';
    clearInputs();
    hideAllOverlays();
    renderUpgradeStack();
  }
}
function tryReload() {
  if (game.state !== 'playing' || !game.player) return;
  game.player.startReload();
}
function tryDash() {
  if (game.state !== 'playing' || !game.player) return;
  game.player.dash();
}
function tryJump() {
  if (game.state !== 'playing' || !game.player) return;
  game.player.jump();
}

function renderUpgradeStack() {
  const wrap = $('upgradeStack');
  wrap.innerHTML = '';
  // Pause-hover UX: on the paused state the container is brightened (opacity
  // bump via .paused class) so players can comfortably hover each chip. The
  // tooltip (title attr) shows `<name> — <lv> / <max | ∞>` so hovering reveals
  // the exact count. During gameplay the chips remain dimmed but still carry
  // the tooltip, so mouse-hover also works mid-run.
  wrap.classList.toggle('paused', game.state === 'paused');
  const lastKey = game.lastUpgradePickId;
  for (const [id, lv] of Object.entries(game.upgrades)) {
    if (!lv) continue;
    const u = UPG_BY_ID[id];
    const chip = document.createElement('div');
    chip.className = 'upg-chip';
    if (lastKey === 'upg:' + id) chip.classList.add('spark');
    const maxTxt = (u.max == null) ? '∞' : u.max;
    const name = tUpgradeName(id);
    chip.title = `${name} — ${lv} / ${maxTxt}`;
    chip.innerHTML = `<div class="dot" style="background:${u.color}">${u.icon}</div><span>${name}</span><span class="lvl">${lv}/${maxTxt}</span>`;
    chip.addEventListener('click', () => showUpgradeDetail(id, 'upg'));
    wrap.appendChild(chip);
  }
  // Super-power chips — rendered after upgrade chips so boss bounties are
  // clearly distinct. The star-lvl pill marks them as unique picks.
  if (game.superpowers) {
    for (const id of game.superpowers) {
      const p = SP_BY_ID[id];
      if (!p) continue;
      const chip = document.createElement('div');
      chip.className = 'upg-chip';
      if (lastKey === 'sp:' + id) chip.classList.add('spark');
      chip.title = `${p.name} — ${p.desc}`;
      chip.innerHTML = `<div class="dot" style="background:${p.color}">${p.icon}</div><span>${p.name}</span><span class="lvl">★</span>`;
      chip.addEventListener('click', () => showUpgradeDetail(id, 'sp'));
      wrap.appendChild(chip);
    }
  }
}

// Pause stats panel — rebuilt each time the player opens pause so values
// reflect current level/upgrades/room. Grouped into Combat, Defense/Mobility,
// DoT (only rows with nonzero chance/dps show), and Run state. Each line has
// a left label, a right numeric "final" value, and often a small formula line
// so players can see WHERE the number comes from. Values are computed from
// the live Player getters so the math matches gameplay exactly.
// Second arg lets the upgrade-choice overlay share the same renderer by
// passing its own columns element; no arg falls back to the pause panel.
function renderStatsPanel(columnsEl) {
  const panel = columnsEl || $('statsColumns');
  // Only update the pause-panel title when we're rendering there; the upgrade
  // overlay owns its own heading string (localized inline).
  if (!columnsEl) {
    const titleEl = document.querySelector('#statsPanel .stats-title');
    if (titleEl) titleEl.textContent = t('stats');
  }
  if (!panel) return;
  panel.innerHTML = '';
  const p = game.player;
  if (!p) return;
  const isMelee = p.isMelee;
  const fmt  = (n, d=2) => (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toString();
  const fmt0 = (n) => Math.round(n).toString();
  const pct  = (n, d=1) => fmt(n * 100, d) + '%';

  // Build a single "group" <div class="stats-group"> with a heading and rows.
  function group(titleKey, rows) {
    const g = document.createElement('div');
    g.className = 'stats-group';
    const h = document.createElement('h4');
    h.textContent = t(titleKey);
    g.appendChild(h);
    for (const row of rows) {
      if (!row) continue;
      const line = document.createElement('div');
      line.className = 'stat-line';
      line.innerHTML =
        `<div class="lbl">${row.label}${row.formula ? `<span class="formula">${row.formula}</span>` : ''}</div>` +
        `<div class="val">${row.value}</div>`;
      g.appendChild(line);
    }
    return g;
  }

  // ---- COMBAT ----
  const dmgBase = p._baseDamage + 0.2 * (p.level - 1);
  const dmgMul  = 1 + 0.18 * p.u('dmg');
  const combatRows = [
    { label: t('stat_damage'),
      formula: `(${p._baseDamage} + 0.2×${p.level-1}) × ${fmt(dmgMul,2)}`,
      value: fmt(p.damage, 2) },
    // ranged-only stats first — hidden for melee
    !isMelee && { label: t('stat_fireRate'),
      formula: `1 / ${fmt(p.fireRate, 3)}${t('stat_sec')}`,
      value: `${fmt(1 / Math.max(0.001, p.fireRate), 2)} ${t('stat_shotsSec')}` },
    !isMelee && { label: t('stat_reload'),
      formula: `(${p._baseReload} + 0.15 × ${p.maxAmmo - p._baseMaxAmmo}) × 0.82^${p.u('reload')}`,
      value: `${fmt(p.reloadTime, 2)} ${t('stat_sec')}` },
    { label: t('stat_crit'),
      formula: `0.09 × ${p.u('crit')} → capped at 100%`,
      value: `${pct(p.critChance, 1)} / 2.5×` },
    !isMelee && { label: t('stat_pierce'),
      formula: `2 × ${p.u('pierce')}`,
      value: fmt0(p.pierce) },
    !isMelee && { label: t('stat_ammo'),
      formula: `${p._baseMaxAmmo} + 5 × ${p.u('ammo')}`,
      value: `${fmt0(p.ammo)} / ${fmt0(p.maxAmmo)}` },
    // melee-only
    isMelee && { label: `${t('stat_swingDmg')} ${t('stat_melee')}`,
      formula: `dmg × 1.4 × (1 + 0.375×${p.u('heavy')})`,
      value: fmt(p.swingDmg, 2) },
    isMelee && { label: t('stat_swingArc'),
      formula: `60° × (1 + 0.3×${p.u('cleaver')})`,
      value: `${fmt(p.swingArcWidth * 180 / Math.PI, 1)}°` },
    isMelee && { label: t('stat_swingCd'),
      formula: `${p._baseSwingCdMax} × 0.88^${p.u('swift')}`,
      value: `${fmt(p.swingCdMax, 2)} ${t('stat_sec')}` },
  ].filter(Boolean);

  // ---- DEFENSE / MOBILITY ----
  const defenseRows = [
    { label: t('stat_hp'),
      formula: `(${p._baseMaxHp} + 2×${p.level-1}) × (1 + 0.15×${p.u('hp')})`,
      value: `${Math.floor(p.hp)} / ${Math.floor(p.maxHp)}` },
    { label: t('stat_speed'),
      formula: `${p._baseSpeed} × (1 + 0.09×${p.u('speed')})`,
      value: `${fmt0(p._baseSpeed * (1 + 0.09 * p.u('speed')))} ${t('stat_pxSec')}` },
    { label: t('stat_dash'),
      formula: `cd ${fmt(p._baseDashCdMax, 2)} × 0.775^${p.u('swift')}, dur ${fmt(p.dashDuration, 2)}${t('stat_sec')}`,
      value: `${fmt(p.dashCdMax, 2)} ${t('stat_sec')}` },
    { label: t('stat_jump'),
      formula: `cd ${fmt(p.jumpCdMax, 2)}${t('stat_sec')}, air ${fmt(p.jumpDuration, 2)}${t('stat_sec')} (i-frames)`,
      value: `${fmt(p.jumpCdMax, 2)} ${t('stat_sec')}` },
    p.regenRate > 0 && { label: t('stat_regen'),
      formula: `0.75 × ${p.u('regen')}`,
      value: `${fmt(p.regenRate, 2)} HP${t('stat_perSec')}` },
    p.thornsDmg > 0 && { label: t('stat_thorns'),
      formula: `7.5 × ${p.u('thorns')}`,
      value: `${fmt(p.thornsDmg, 1)} ${t('stat_perHit')}` },
    p.vampHeal > 0 && { label: t('stat_vamp'),
      formula: `0.5 × ${p.u('vamp')}`,
      value: `${fmt(p.vampHeal, 1)} HP${t('stat_perHit')}` },
  ].filter(Boolean);

  // ---- DoT (only nonzero rows) ----
  const dotRows = [];
  if (p.igniteChance > 0) dotRows.push({
    label: t('stat_ignite'),
    formula: `15% × ${p.u('ignite')} chance, 6 dps, 3s`,
    value: pct(p.igniteChance, 0),
  });
  if (p.bleedDps > 0) dotRows.push({
    label: t('stat_bleed'),
    formula: `9 × ${p.u('bleed')} dps on crit, 3s (stacks to 10×)`,
    value: `${fmt(p.bleedDps, 1)} dps`,
  });
  if (p.plagueDps > 0) dotRows.push({
    label: t('stat_plague'),
    formula: `6 × ${p.u('plague')} dps, 90px radius, 1.2s`,
    value: `${fmt(p.plagueDps, 1)} dps`,
  });

  // ---- RUN STATE ----
  const runSecs = (performance.now() - game.runStartT) / 1000;
  const mm = Math.floor(runSecs / 60), ss = Math.floor(runSecs % 60);
  const tier = (typeof DIFFICULTY_TIERS !== 'undefined' && DIFFICULTY_TIERS[game.difficultyTier]) || null;
  const tierName = (typeof difficultyTierName === 'function') ? difficultyTierName() : (tier ? tier.name : '-');
  const runRows = [
    { label: t('stat_floorRoom'),
      value: `${game.floor} / ${game.roomIdx+1}/${ROOMS_PER_FLOOR}` },
    tier && { label: t('stat_difficulty'),
      formula: `HP ×${fmt(tier.hpMul,2)}  DMG ×${fmt(tier.dmgMul,2)}`,
      value: tierName },
    { label: t('stat_runtime'),
      value: `${mm}:${ss.toString().padStart(2,'0')}` },
    { label: t('stat_xp'),
      formula: `next lv at ${p.xpNeeded} XP (lv ${p.level} → ${p.level+1})`,
      value: `${fmt0(p.xp)} / ${p.xpNeeded}` },
  ].filter(Boolean);

  panel.appendChild(group('stat_combat',  combatRows));
  panel.appendChild(group('stat_defense', defenseRows));
  if (dotRows.length) panel.appendChild(group('stat_dot', dotRows));
  panel.appendChild(group('stat_runstate', runRows));

  // Active upgrades row spans both columns at the bottom.
  const activeBox = document.createElement('div');
  activeBox.className = 'stats-group';
  activeBox.style.gridColumn = '1 / -1';
  const ah = document.createElement('h4');
  ah.textContent = t('stat_activeUpgrades');
  activeBox.appendChild(ah);
  const chipWrap = document.createElement('div');
  chipWrap.className = 'stats-upgrades';
  const entries = Object.entries(game.upgrades).filter(([, lv]) => lv > 0);
  if (entries.length === 0) {
    const none = document.createElement('span');
    none.className = 'pill-chip static';
    none.textContent = t('stat_none');
    chipWrap.appendChild(none);
  } else {
    for (const [id, lv] of entries) {
      const u = UPG_BY_ID[id];
      if (!u) continue;
      const max = u.max == null ? '∞' : u.max;
      const chip = document.createElement('span');
      chip.className = 'pill-chip interactive';
      chip.textContent = `${u.icon} ${tUpgradeName(id)} ${lv}/${max}`;
      chip.title = tUpgradeDesc(id, lv);
      chip.addEventListener('click', () => showUpgradeDetail(id, 'upg'));
      chipWrap.appendChild(chip);
    }
  }
  // Include picked super-powers in the same row so boss-bounty effects are
  // inspectable from the stats panel the same way regular upgrades are.
  if (game.superpowers) {
    for (const id of game.superpowers) {
      const p = SP_BY_ID[id];
      if (!p) continue;
      const chip = document.createElement('span');
      chip.className = 'pill-chip interactive';
      chip.textContent = `${p.icon} ${p.name} ★`;
      chip.title = p.desc;
      chip.addEventListener('click', () => showUpgradeDetail(id, 'sp'));
      chipWrap.appendChild(chip);
    }
  }
  activeBox.appendChild(chipWrap);
  panel.appendChild(activeBox);
}

function updateHUD() {
  if (!game.player) return;
  const p = game.player;
  $('hpFill').style.width = (p.hp / p.maxHp * 100) + '%';
  $('hpText').textContent = `${Math.floor(p.hp)}/${Math.floor(p.maxHp)}`;
  $('xpFill').style.width = (p.xp / p.xpNeeded * 100) + '%';
  $('xpText').textContent = `${Math.floor(p.xp)}/${p.xpNeeded}`;
  const af = $('ammoFill');
  if (p.isMelee) {
    // Swing cooldown fill (empty right after swing, full when ready)
    const fill = p.swingCdMax > 0 ? (1 - p.swingCd / p.swingCdMax) : 1;
    af.style.width = Math.max(0, Math.min(1, fill)) * 100 + '%';
    af.classList.remove('reload');
    $('ammoText').textContent = '⚔';
  } else if (p.reloading) {
    af.style.width = (1 - p.reloadT/p.reloadTime) * 100 + '%';
    af.classList.add('reload');
    $('ammoText').textContent = t('reloadingText');
  } else {
    af.style.width = (p.ammo / p.maxAmmo * 100) + '%';
    af.classList.remove('reload');
    $('ammoText').textContent = `${p.ammo}/${p.maxAmmo}`;
  }
  $('floorText').textContent = game.floor;
  $('roomText').textContent = `${game.roomIdx+1}/${ROOMS_PER_FLOOR}`;
  $('lvlText').textContent = p.level;
  $('leftText').textContent = game.zombies.length + game.spawnQueue.length;
  $('killText').textContent = game.kills;
  $('scoreText').textContent = game.score;
  // Dash indicator
  const cd = p.dashCd / p.dashCdMax;
  const di = $('dashIndicator');
  $('dashCool').style.width = ((1 - cd) * 100).toFixed(1) + '%';
  if (p.dashCd <= 0) di.classList.add('ready');
  else di.classList.remove('ready');
  // Jump indicator (mirrors the dash pill's ready-pulse when charged).
  const ji = $('jumpIndicator');
  const jc = $('jumpCool');
  if (ji && jc) {
    const jcd = p.jumpCd / (p.jumpCdMax || 1);
    jc.style.width = ((1 - jcd) * 100).toFixed(1) + '%';
    if (p.jumpCd <= 0 && p.jumpT <= 0) ji.classList.add('ready');
    else ji.classList.remove('ready');
  }
}

// ------------- RENDER ------------------------------------------
// ------------- REPLAY PLAYBACK ---------------------------------
// Drives the ▶ WATCH REPLAY overlay. The main canvas is hijacked for replay
// rendering: while game.state === 'deathReplay', the main render branch
// dispatches to drawReplay(), which swaps the live `game.*` arrays for the
// currently-targeted snapshot, calls drawWorld() for visual fidelity, then
// restores the saved state. No game updates run during playback because the
// main loop's `if (game.state === 'playing')` branch is skipped.
function replayCurrentElapsed() {
  const pb = replay.playback;
  if (pb.paused) return pb.pausedAt;
  return pb.pausedAt + (performance.now() - pb.startWall) / 1000;
}
function replayTotalDuration() {
  const s = replay.snapshots;
  if (s.length < 2) return 0;
  return s[s.length - 1].t - s[0].t;
}
function startReplayPlayback() {
  if (!replay.snapshots.length) return;
  const pb = replay.playback;
  pb.prevState = game.state;
  pb.active = true;
  pb.paused = false;
  pb.startWall = performance.now();
  pb.pausedAt = 0;
  pb.pauseBegan = 0;
  game.state = 'deathReplay';
  showOverlay($('deathReplay'));
  updateReplayPlayPauseBtn();
}
function stopReplayPlayback() {
  const pb = replay.playback;
  pb.active = false;
  pb.paused = false;
  // Restore the runEnd overlay so the player returns to the Game Over summary.
  game.state = pb.prevState || 'dead';
  showOverlay($('runEnd'));
}
function pauseReplayPlayback() {
  const pb = replay.playback;
  if (pb.paused) return;
  pb.pausedAt += (performance.now() - pb.startWall) / 1000;
  pb.paused = true;
}
function resumeReplayPlayback() {
  const pb = replay.playback;
  if (!pb.paused) return;
  pb.startWall = performance.now();
  pb.paused = false;
}
function toggleReplayPlayback() {
  if (replay.playback.paused) resumeReplayPlayback();
  else pauseReplayPlayback();
  updateReplayPlayPauseBtn();
}
function restartReplayPlayback() {
  const pb = replay.playback;
  pb.pausedAt = 0;
  pb.startWall = performance.now();
  // Leave paused state as-is — if paused, user is still reviewing.
}
function updateReplayPlayPauseBtn() {
  const btn = $('replayPlayPauseBtn');
  if (!btn) return;
  btn.textContent = replay.playback.paused ? '▶' : '⏸';
}
function drawReplay() {
  const s = replay.snapshots;
  if (!s.length) return;
  const pb = replay.playback;
  const total = replayTotalDuration();
  let elapsed = replayCurrentElapsed();
  // Auto-loop at end so the player can rewatch without clicking restart.
  if (total > 0 && elapsed >= total) {
    pb.pausedAt = 0;
    pb.startWall = performance.now();
    elapsed = 0;
  }
  const targetT = s[0].t + Math.min(total, Math.max(0, elapsed));
  // Linear scan — snapshots are few (<=240) and monotonically increasing.
  let snap = s[0];
  for (let i = 0; i < s.length; i++) {
    if (s[i].t >= targetT) { snap = s[i]; break; }
    snap = s[i];
  }
  // Swap live game state out; draw snapshot; swap live state back in. Particles
  // and damage numbers aren't captured (noise + memory), so temporarily empty
  // those arrays so drawWorld's particle loop has nothing to iterate.
  const saved = {
    cx: camera.x, cy: camera.y, cs: camera.shake,
    player: game.player,
    zombies: game.zombies,
    bullets: game.bullets,
    ezBullets: game.ezBullets,
    explosions: game.explosions,
    particles: game.particles,
    damageNums: game.damageNums,
    powerups: game.powerups,
    poisonClouds: game.poisonClouds,
    obstacles: game.obstacles,
    floor: game.floor,
    roomIdx: game.roomIdx,
  };
  camera.x = snap.camera.x; camera.y = snap.camera.y; camera.shake = 0;
  game.player = snap.player;
  game.zombies = snap.zombies;
  game.bullets = snap.bullets;
  game.ezBullets = snap.ezBullets;
  game.explosions = snap.explosions;
  game.particles = [];
  game.damageNums = [];
  game.powerups = snap.powerups;
  game.poisonClouds = snap.poisonClouds;
  game.obstacles = snap.obstacles;
  game.floor = snap.floor;
  game.roomIdx = snap.roomIdx;
  try { drawWorld(); } catch { /* defensive — never crash playback */ }
  camera.x = saved.cx; camera.y = saved.cy; camera.shake = saved.cs;
  game.player = saved.player;
  game.zombies = saved.zombies;
  game.bullets = saved.bullets;
  game.ezBullets = saved.ezBullets;
  game.explosions = saved.explosions;
  game.particles = saved.particles;
  game.damageNums = saved.damageNums;
  game.powerups = saved.powerups;
  game.poisonClouds = saved.poisonClouds;
  game.obstacles = saved.obstacles;
  game.floor = saved.floor;
  game.roomIdx = saved.roomIdx;
  // Time indicator in the control bar.
  const timeEl = $('replayTime');
  if (timeEl) timeEl.textContent = elapsed.toFixed(1) + ' / ' + total.toFixed(1) + 's';
}

function drawWorld() {
  const { bg, theme } = themeForFloor(game.floor);
  const sx = camera.shake ? (Math.random()-0.5)*camera.shake : 0;
  const sy = camera.shake ? (Math.random()-0.5)*camera.shake : 0;

  ctx.save();
  ctx.translate(-camera.x + sx, -camera.y + sy);

  // Solid per-theme background
  ctx.fillStyle = bg;
  ctx.fillRect(camera.x - 4, camera.y - 4, W + 8, H + 8);
  // Decorative per-theme tile layer (replaces the stripped terrain visually).
  const themePattern = getThemePattern(theme);
  if (themePattern) {
    ctx.fillStyle = themePattern;
    ctx.fillRect(camera.x - 4, camera.y - 4, W + 8, H + 8);
  }
  // Speckles
  ctx.fillStyle = 'rgba(255,255,255,0.04)';
  for (let i = 0; i < 120; i++) {
    const seed = i * 9301 + 49297;
    const px = (seed * 3) % world.w;
    const py = (seed * 7) % world.h;
    if (px < camera.x - 60 || px > camera.x + W + 60) continue;
    if (py < camera.y - 60 || py > camera.y + H + 60) continue;
    ctx.beginPath(); ctx.arc(px, py, 2 + (seed%3), 0, TAU); ctx.fill();
  }
  // Border
  ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 12;
  ctx.strokeRect(0, 0, world.w, world.h);
  ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 3;
  ctx.strokeRect(18, 18, world.w-36, world.h-36);

  // Obstacles
  for (const o of game.obstacles) drawObstacle(o);

  // Poison clouds (under powerups + entities so they read as ground hazard)
  drawPoisonClouds();
  // Overload-affix telegraphs — same ground-layer treatment so the ring
  // reads as a damage footprint on the floor.
  drawPendingBooms();

  // Powerups
  for (const p of game.powerups) p.draw();

  // Entities (sorted by y for depth)
  const sorted = [game.player, ...game.zombies].sort((a,b)=>a.y-b.y);
  for (const e of sorted) e.draw();

  // Enemy projectiles
  for (const p of game.ezBullets) p.draw();
  // Player bullets
  for (const b of game.bullets) b.draw();
  // Explosions
  for (const e of game.explosions) e.draw();
  // Particles
  for (const p of game.particles) p.draw();
  // Damage nums
  for (const d of game.damageNums) {
    const alpha = clamp(d.life / 0.8, 0, 1);
    ctx.globalAlpha = alpha;
    ctx.font = 'bold 20px Bangers, sans-serif';
    ctx.textAlign = 'center';
    ctx.lineWidth = 4; ctx.strokeStyle = '#0f0a1a';
    ctx.strokeText(d.text, d.x, d.y);
    ctx.fillStyle = d.color;
    ctx.fillText(d.text, d.x, d.y);
    ctx.globalAlpha = 1;
  }
  ctx.restore();

  // Low HP vignette
  if (game.player && game.player.hp < game.player.maxHp * 0.35) {
    const pulse = 0.25 + 0.15*Math.sin(performance.now()/200);
    const grad = ctx.createRadialGradient(W/2, H/2, Math.min(W,H)*0.3, W/2, H/2, Math.max(W,H)*0.7);
    grad.addColorStop(0, 'rgba(199,56,102,0)');
    grad.addColorStop(1, `rgba(199,56,102,${pulse})`);
    ctx.fillStyle = grad; ctx.fillRect(0,0,W,H);
  }
}

function drawObstacle(o) {
  const {x,y,w,h,type} = o;
  ctx.save();
  if (type === 'gap') {
    // Dark pit with a jagged inner edge — reads as a hole you must jump.
    ctx.fillStyle = '#08060e';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = '#3a2840'; ctx.lineWidth = 3;
    ctx.strokeRect(x+2, y+2, w-4, h-4);
    // dashed warning stripes along the rim
    ctx.strokeStyle = 'rgba(255,189,46,0.35)';
    ctx.lineWidth = 4;
    ctx.setLineDash([14, 10]);
    ctx.strokeRect(x+6, y+6, w-12, h-12);
    ctx.setLineDash([]);
    // a few scattered darker flecks inside to sell the depth
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    for (let i = 0; i < 6; i++) {
      const fx = x + (i*83 % (w-20)) + 6;
      const fy = y + (i*127 % (h-16)) + 6;
      ctx.beginPath(); ctx.arc(fx, fy, 3 + (i%2), 0, TAU); ctx.fill();
    }
    ctx.restore();
    return;
  } else if (type === 'platform') {
    // Low raised slab — drop shadow + beveled top edge so it reads as elevated
    // terrain you need to jump onto (walkOver when airborne).
    ctx.fillStyle = 'rgba(15,10,26,0.45)';
    ctx.fillRect(x+6, y+h-4, w, 14);
    // base slab
    ctx.fillStyle = '#5b6e52';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 3;
    ctx.strokeRect(x, y, w, h);
    // highlighted top (as if lit from above)
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.fillRect(x+3, y+3, w-6, 14);
    // corner chevrons hint "jump up"
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x+10, y+22); ctx.lineTo(x+18, y+10); ctx.lineTo(x+26, y+22);
    ctx.moveTo(x+w-26, y+22); ctx.lineTo(x+w-18, y+10); ctx.lineTo(x+w-10, y+22);
    ctx.stroke();
    ctx.restore();
    return;
  } else if (type === 'chokepost') {
    // Tall solid pillar for chokepoint archetype — hefty concrete column.
    ctx.fillStyle = 'rgba(15,10,26,0.35)';
    ctx.fillRect(x+8, y+h-6, w, 14);
    ctx.fillStyle = '#6c6f78';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 4;
    ctx.strokeRect(x, y, w, h);
    // ridged banding
    ctx.strokeStyle = '#4a4d54'; ctx.lineWidth = 3;
    for (let yy = 40; yy < h; yy += 60) {
      ctx.beginPath(); ctx.moveTo(x, y+yy); ctx.lineTo(x+w, y+yy); ctx.stroke();
    }
    ctx.restore();
    return;
  }
  if (type === 'crate') {
    ctx.fillStyle = 'rgba(15,10,26,0.35)';
    ctx.fillRect(x+6, y+h-4, w, 12);
    ctx.fillStyle = '#a36841';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 4;
    ctx.strokeRect(x, y, w, h);
    ctx.strokeStyle = '#6b3e24'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y+h/3); ctx.lineTo(x+w, y+h/3);
    ctx.moveTo(x, y+h*2/3); ctx.lineTo(x+w, y+h*2/3);
    ctx.moveTo(x+w/2, y); ctx.lineTo(x+w/2, y+h);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(x+4, y+4, w-8, 6);
  } else if (type === 'barrel') {
    ctx.fillStyle = 'rgba(15,10,26,0.35)';
    ctx.beginPath(); ctx.ellipse(x+w/2+6, y+h+6, w*0.55, 10, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#c73866';
    ctx.beginPath(); ctx.ellipse(x+w/2, y+h/2, w*0.5, h*0.5, 0, 0, TAU); ctx.fill();
    ctx.strokeStyle='#0f0a1a'; ctx.lineWidth=4; ctx.stroke();
    ctx.strokeStyle = '#8e1e3d'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.ellipse(x+w/2, y+h*0.3, w*0.48, h*0.45, 0, 0, TAU); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x+w/2, y+h*0.7, w*0.48, h*0.45, 0, 0, TAU); ctx.stroke();
    ctx.fillStyle = '#ffbd2e';
    ctx.beginPath(); ctx.arc(x+w/2, y+h/2, 6, 0, TAU); ctx.fill();
  } else if (type === 'car') {
    ctx.fillStyle = 'rgba(15,10,26,0.35)';
    ctx.fillRect(x+6, y+h+2, w, 10);
    ctx.fillStyle = '#4a5a8c';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = '#0f0a1a'; ctx.lineWidth = 4;
    ctx.strokeRect(x, y, w, h);
    ctx.fillStyle = '#1a1428';
    ctx.fillRect(x+w*0.15, y+h*0.2, w*0.3, h*0.6);
    ctx.fillRect(x+w*0.55, y+h*0.2, w*0.3, h*0.6);
    ctx.strokeRect(x+w*0.15, y+h*0.2, w*0.3, h*0.6);
    ctx.strokeRect(x+w*0.55, y+h*0.2, w*0.3, h*0.6);
    ctx.fillStyle = '#fff6c9';
    ctx.beginPath(); ctx.arc(x+w-4, y+10, 5, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(x+w-4, y+h-10, 5, 0, TAU); ctx.fill();
  }
  ctx.restore();
}

// ------------- GAME FLOW ---------------------------------------
function startRun() {
  clearInputs();
  replayReset();
  game.floor = 1;
  game.roomIdx = 0;
  game.zombies = []; game.bullets = []; game.ezBullets = [];
  game.explosions = []; game.particles = []; game.damageNums = [];
  game.powerups = []; game.poisonClouds = []; game.spawnQueue = [];
  game.pendingBooms = [];
  game.kills = 0; game.score = 0;
  game.checkpoint = null;
  game.bonusRerolls = 0;
  game.upgrades = {};
  game.superpowers = new Set();
  game.phoenixUsed = false;
  game.bossVariantsSeen = [];
  game.lastUpgradePickId = null;
  game.pendingSuperPower = false;
  game.pendingVictory = false;
  game.abnormalDeath = false;
  game.currentSPChoices = [];
  game.selectedSPChoice = 0;
  game.pendingLevelUps = 0;
  game.transitionT = 0;
  game.transitionTarget = null;
  game.levelupPauseT = 0;
  game.selectedChoice = 0;
  game.currentChoices = [];
  game.runStartT = performance.now();
  game.runTime = 0;
  // One runId per run — checkpoint auto-saves from this run update the same
  // slot rather than evicting older runs from the 3-slot ring.
  game.runId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  game.player = new Player();
  applyEnvironmentOverlay(game.environment);
  renderUpgradeStack();
  updateHUDForClass();
  enterRoom(1, 0);
  hideAllOverlays();
  game.state = 'playing';
}

function applyEnvironmentOverlay(envId) {
  const el = $('envOverlay');
  if (!el) return;
  el.classList.remove('active','neon','vhs','vapor','modern','cyberpunk','chiikawa');
  const theme = getTheme(envId);
  if (theme && theme.overlayClass) {
    el.classList.add(theme.overlayClass, 'active');
  }
}

// HUD: toggle the ammo pill into a swing-cooldown pill when melee.
function updateHUDForClass() {
  const isMelee = game.playerClass === 'melee';
  const ammoPill = $('ammoFill')?.closest('.pill');
  const ammoLabel = ammoPill?.querySelector('.label');
  const ammoText  = $('ammoText');
  document.body.classList.toggle('melee-mode', isMelee);
  if (!ammoPill) return;
  if (isMelee) {
    ammoPill.classList.add('swing-pill');
    if (ammoLabel) { ammoLabel.textContent = t('swing'); ammoLabel.removeAttribute('data-i18n'); }
    if (ammoText) ammoText.textContent = '⚔';
  } else {
    ammoPill.classList.remove('swing-pill');
    if (ammoLabel) { ammoLabel.textContent = t('ammo'); ammoLabel.setAttribute('data-i18n', 'ammo'); }
  }
}

function showRunEnd(victory) {
  game.runTime = (performance.now() - game.runStartT) / 1000;
  // Abnormal death = final boss got its last breath in at checkout. Mark it
  // distinctly so the player reads "rare roll went against me", not "I lost".
  const abnormal = !victory && !!game.abnormalDeath;
  $('endTitle').textContent = victory ? t('victory') : (abnormal ? 'FINAL BREATH' : t('youDied'));
  $('endTitle').className = 'subtitle ' + (victory ? 'cool' : 'hot');
  $('endFloor').textContent = game.floor;
  $('endKills').textContent = game.kills;
  $('endScore').textContent = game.score;
  $('endLvl').textContent = game.player ? game.player.level : 1;
  $('endTime').textContent = t('timeS', Math.floor(game.runTime));
  $('endUpgrades').textContent = Object.values(game.upgrades).reduce((a,b)=>a+b,0);
  // render upgrade list
  const list = $('endUpgradeList');
  list.innerHTML = '';
  for (const [id, lv] of Object.entries(game.upgrades)) {
    if (!lv) continue;
    const u = UPG_BY_ID[id];
    const chip = document.createElement('div');
    chip.className = 'sum-chip';
    chip.innerHTML = `<div class="dot" style="background:${u.color}">${u.icon}</div><span>${tUpgradeName(id)} ×${lv}</span>`;
    list.appendChild(chip);
  }
  if (game.superpowers) {
    for (const id of game.superpowers) {
      const p = SP_BY_ID[id];
      if (!p) continue;
      const chip = document.createElement('div');
      chip.className = 'sum-chip';
      chip.innerHTML = `<div class="dot" style="background:${p.color}">${p.icon}</div><span>${p.name} ★</span>`;
      list.appendChild(chip);
    }
  }
  // Only offer the checkpoint revive on death (not on victory) and only when
  // a checkpoint has actually been captured (i.e., at least one boss cleared).
  const cBtn = $('continueBtn');
  if (cBtn) cBtn.style.display = (!victory && game.checkpoint) ? '' : 'none';
  // Cause-of-death panel + Watch-Replay button — death only.
  const cause = $('deathCause');
  const replayBtn = $('watchReplayBtn');
  if (!victory) {
    populateDeathCause();
    if (cause) cause.classList.remove('hidden');
    if (replayBtn) replayBtn.style.display = replay.snapshots.length ? '' : 'none';
  } else {
    if (cause) cause.classList.add('hidden');
    if (replayBtn) replayBtn.style.display = 'none';
  }
  showOverlay($('runEnd'));
}

function formatReplayTimestamp(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}
function describeDamageSource(source) {
  if (!source || !source.kind) return 'Unknown';
  if (source.kind === 'zombie') {
    const zLabel = source.zombieType ? source.zombieType.charAt(0).toUpperCase() + source.zombieType.slice(1) : 'Zombie';
    return source.attackKind ? `${zLabel} (${source.attackKind})` : zLabel;
  }
  if (source.kind === 'cloud')     return 'Poison Cloud';
  if (source.kind === 'projectile') return 'Projectile';
  if (source.kind === 'explosion')  return 'Explosion';
  return 'Unknown';
}
function describeEventLine(ev) {
  switch (ev.kind) {
    case 'damage':
      return { cls: 'dmg', text: `-${Math.round(ev.amount)} ${describeDamageSource(ev.source)}` };
    case 'spawn': {
      const label = ev.boss ? 'Boss' : (ev.elite ? 'Elite' : 'Spawn');
      const zt = ev.zombieType ? ev.zombieType.charAt(0).toUpperCase() + ev.zombieType.slice(1) : '';
      return { cls: 'spawn', text: `${label}: ${zt}`.trim() };
    }
    case 'upgrade': {
      const u = UPG_BY_ID[ev.id];
      const name = u ? (tUpgradeName(ev.id) || u.name || ev.id) : ev.id;
      return { cls: 'upgrade', text: `Upgrade: ${name}` };
    }
    case 'superpower': {
      const p = SP_BY_ID[ev.id];
      return { cls: 'superpower', text: `Super Power: ${p ? p.name : ev.id}` };
    }
    case 'floor': return { cls: 'floor', text: `Floor ${ev.floor}` };
    case 'room':  return { cls: 'room',  text: `Floor ${ev.floor} · Room ${ev.room + 1}` };
    default:      return { cls: 'event', text: ev.kind };
  }
}
function populateDeathCause() {
  const hitsEl = $('deathHits');
  const logEl = $('deathEventLog');
  if (hitsEl) {
    hitsEl.innerHTML = '';
    if (!replay.hits.length) {
      hitsEl.innerHTML = '<div class="death-hit" style="opacity:0.6;">—</div>';
    } else {
      // Render newest first, mark the last one as the killing blow.
      const hits = replay.hits.slice();
      for (let i = hits.length - 1; i >= 0; i--) {
        const h = hits[i];
        const row = document.createElement('div');
        row.className = 'death-hit' + (i === hits.length - 1 ? ' killing' : '');
        row.innerHTML = `<span>${describeDamageSource(h.source)}</span><span>-${Math.round(h.amount)}</span><span class="death-hit-time">${formatReplayTimestamp(h.t)}</span>`;
        hitsEl.appendChild(row);
      }
    }
  }
  if (logEl) {
    logEl.innerHTML = '';
    if (!replay.events.length) {
      logEl.innerHTML = '<div class="death-event" style="opacity:0.6;">—</div>';
    } else {
      // Newest first so the killing blow is up top.
      for (let i = replay.events.length - 1; i >= 0; i--) {
        const ev = replay.events[i];
        const parts = describeEventLine(ev);
        const row = document.createElement('div');
        row.className = 'death-event ' + parts.cls;
        row.innerHTML = `<span>${parts.text}</span><span class="death-event-time">${formatReplayTimestamp(ev.t)}</span>`;
        logEl.appendChild(row);
      }
    }
  }
}

function continueFromCheckpoint() {
  const cp = game.checkpoint;
  if (!cp) return;
  clearInputs();
  const resumeFloor = cp.floor;
  const resumeRoom = cp.roomIdx || 0;
  game.floor = resumeFloor;
  game.roomIdx = resumeRoom;
  game.zombies = []; game.bullets = []; game.ezBullets = [];
  game.explosions = []; game.particles = []; game.damageNums = [];
  game.powerups = []; game.poisonClouds = []; game.spawnQueue = [];
  game.pendingBooms = [];
  game.kills = cp.kills;
  game.score = cp.score;
  game.upgrades = { ...cp.upgrades };
  game.superpowers = new Set(cp.superpowers || []);
  game.phoenixUsed = !!cp.phoenixUsed;
  game.bossVariantsSeen = Array.isArray(cp.bossVariantsSeen) ? [...cp.bossVariantsSeen] : [];
  game.lastUpgradePickId = null;
  game.pendingSuperPower = false;
  game.pendingVictory = false;
  game.abnormalDeath = false;
  game.currentSPChoices = [];
  game.selectedSPChoice = 0;
  game.bonusRerolls = cp.bonusRerolls || 0;
  game.pendingLevelUps = 0;
  game.transitionT = 0;
  game.transitionTarget = null;
  game.levelupPauseT = 0;
  game.selectedChoice = 0;
  game.currentChoices = [];
  game.playerClass = cp.playerClass;
  game.environment = cp.environment;
  game.runStartT = performance.now();
  game.runTime = 0;
  replayReset();
  // Preserve the checkpoint's runId so continuing the same run keeps landing
  // in the same slot. Legacy saves (no runId) get a fresh id so their next
  // auto-save doesn't overwrite an unrelated slot.
  game.runId = cp.runId || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  game.player = new Player();
  game.player.level = cp.playerLevel;
  game.player.xp = cp.xp;
  game.player.xpNeeded = cp.xpNeeded;
  game.player.hp = game.player.maxHp;
  game.player.ammo = game.player.maxAmmo;
  // Schema v2: restore live combat state so mid-room saves land the player
  // where they paused (HP, ammo, reload-in-flight, cooldowns, debuffs).
  if (cp.schemaVersion >= 2 && cp.player) {
    const pp = cp.player;
    if (typeof pp.hp === 'number')      game.player.hp = clamp(pp.hp, 0, game.player.maxHp);
    if (typeof pp.ammo === 'number')    game.player.ammo = clamp(pp.ammo, 0, game.player.maxAmmo);
    if (typeof pp.reloading === 'boolean') game.player.reloading = pp.reloading;
    if (typeof pp.reloadT === 'number') game.player.reloadT = pp.reloadT;
    if (typeof pp.fireCd === 'number')  game.player.fireCd = pp.fireCd;
    if (typeof pp.dashCd === 'number')  game.player.dashCd = pp.dashCd;
    if (typeof pp.jumpCd === 'number')  game.player.jumpCd = pp.jumpCd;
    if (typeof pp.swingCd === 'number') game.player.swingCd = pp.swingCd;
    if (typeof pp.iFrames === 'number') game.player.iFrames = pp.iFrames;
    if (typeof pp.slowT === 'number')   game.player.slowT = pp.slowT;
    if (typeof pp.slowMul === 'number') game.player.slowMul = pp.slowMul;
  }
  applyEnvironmentOverlay(game.environment);
  renderUpgradeStack();
  updateHUDForClass();
  enterRoom(resumeFloor, resumeRoom);
  hideAllOverlays();
  game.state = 'playing';
}

function quitToMenu() {
  game.state = 'menu';
  clearInputs();
  stopCrazyDave();
  game.player = null;
  game.zombies = []; game.bullets = []; game.ezBullets = [];
  game.explosions = []; game.particles = []; game.damageNums = [];
  game.powerups = []; game.poisonClouds = []; game.spawnQueue = [];
  game.pendingBooms = [];
  game.transitionT = 0;
  game.transitionTarget = null;
  game.levelupPauseT = 0;
  game.pendingLevelUps = 0;
  $('upgradeStack').innerHTML = '';
  showOverlay($('menu'));
}

// ------------- MAIN LOOP ---------------------------------------
let lastT = performance.now();
function loop(now) {
  const dt = Math.min(0.05, (now - lastT) / 1000);
  lastT = now;

  if (game.state === 'playing') {
    game.player.update(dt);
    cameraUpdate();
    updateRoomDifficulty(dt);
    applyHowlerBuffs();
    applyFloorMechanics(dt);
    // Crazy Dave: cooldown for event-triggered lines + periodic random roll
    // (~every 30s of play, 50% chance to fire). Only advances while playing.
    if (game.crazyDaveEventCdT > 0) game.crazyDaveEventCdT -= dt;
    game.crazyDaveRandomT -= dt;
    if (game.crazyDaveRandomT <= 0) {
      game.crazyDaveRandomT = 30;
      if (game.crazyDaveEnabled && Math.random() < 0.5) speakCrazyDave();
    }
    for (const z of game.zombies) z.update(dt, game.player);
    updatePoisonClouds(dt, game.player);
    updatePendingBooms(dt);
    for (const b of game.bullets) b.update(dt);
    for (const p of game.ezBullets) p.update(dt, game.player);
    for (const e of game.explosions) e.update(dt, game.player);
    for (const p of game.particles) p.update(dt);
    for (const pw of game.powerups) pw.update(dt, game.player);
    for (const d of game.damageNums) {
      d.y += d.vy * dt;
      d.vy *= 0.95;
      d.life -= dt;
    }
    game.zombies = game.zombies.filter(z => z.hp > 0);
    game.bullets = game.bullets.filter(b => !b.dead);
    game.ezBullets = game.ezBullets.filter(b => !b.dead);
    game.explosions = game.explosions.filter(e => !e.dead);
    game.particles = game.particles.filter(p => !p.dead);
    game.damageNums = game.damageNums.filter(d => d.life > 0);
    game.powerups = game.powerups.filter(p => !p.dead);
    game.pendingBooms = game.pendingBooms.filter(b => !b.dead);

    updateSpawns(dt);
    updateBossAdds(dt);
    endRoomCheck();

    // Room-transition timer (only ticks while actively playing, so it pauses
    // during the 1s pre-pause and the upgrade-choice screen).
    if (game.transitionT > 0) {
      game.transitionT -= dt;
      if (game.transitionT <= 0) {
        // Boss-clear flow: intercept the normal transition to show the super
        // power pick first. resumeFromSuperPower fires enterRoom (or the
        // victory screen, for the final boss) after the player confirms.
        if (game.pendingSuperPower) {
          game.pendingSuperPower = false;
          showSuperPowerChoice();
        } else if (game.pendingVictory) {
          game.pendingVictory = false;
          finalizeFinalBossCheckout();
        } else if (game.transitionTarget) {
          const t = game.transitionTarget;
          game.transitionTarget = null;
          enterRoom(t.floor, t.roomIdx);
        }
      }
    }

    updateHUD();

    // Replay snapshot — take every SNAPSHOT_STRIDE frames while actively playing.
    // Ring buffer in `replay.snapshots` caps at SNAPSHOT_CAP entries (~8s of play).
    replay.frameCounter++;
    if (replay.frameCounter % SNAPSHOT_STRIDE === 0) {
      recordSnapshot((performance.now() - game.runStartT) / 1000);
    }

    // Level-up pending: trigger the 1-second pre-pause before cards appear.
    if (game.pendingLevelUps > 0 && game.state === 'playing') {
      game.state = 'levelup_pending';
      game.levelupPauseT = 1.0;
      clearInputs();
    }
  }

  // 1-second freeze before upgrade cards slide in. Entity updates are skipped
  // entirely — only the HUD keeps refreshing and the pre-pause banner plays.
  if (game.state === 'levelup_pending') {
    game.levelupPauseT -= dt;
    updateHUD();
    if (game.levelupPauseT <= 0) {
      showUpgradeChoice();
    }
  }

  // Persistent difficulty HUD: visibility keyed off game.state, so calling
  // it every frame correctly shows/hides across playing/paused/menu/etc.
  updateDifficultyHud();
  updateLevelHud();

  // Render
  ctx.fillStyle = '#0f0a1a';
  ctx.fillRect(0, 0, W, H);
  if (game.state === 'deathReplay') drawReplay();
  else if (game.player) drawWorld();
  else drawMenuScene();
  // Reticle only matters when the player is aiming with the mouse — if
  // auto-fire is on, auto-aim picks the target and the reticle is just
  // visual noise. Hide during replay playback.
  if (!game.autoFire && game.state !== 'deathReplay') drawReticle();
  requestAnimationFrame(loop);
}

// Custom aiming reticle (replaces the OS cursor over the canvas).
function drawReticle() {
  const x = mouse.x, y = mouse.y;
  ctx.save();
  ctx.strokeStyle = '#ff3838';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  // Outer ring
  ctx.beginPath();
  ctx.arc(x, y, 14, 0, TAU);
  ctx.stroke();
  // Crosshair: 4 short ticks with a center gap
  const inner = 5, outer = 11;
  ctx.beginPath();
  ctx.moveTo(x - outer, y); ctx.lineTo(x - inner, y);
  ctx.moveTo(x + inner, y); ctx.lineTo(x + outer, y);
  ctx.moveTo(x, y - outer); ctx.lineTo(x, y - inner);
  ctx.moveTo(x, y + inner); ctx.lineTo(x, y + outer);
  ctx.stroke();
  // Center dot
  ctx.fillStyle = '#ff3838';
  ctx.beginPath();
  ctx.arc(x, y, 1.6, 0, TAU);
  ctx.fill();
  ctx.restore();
}

// Ambient menu scene
let menuT = 0;
function drawMenuScene() {
  menuT += 0.016;
  const tile = 80;
  for (let x = 0; x < W + tile; x += tile) {
    for (let y = 0; y < H + tile; y += tile) {
      const parity = ((x/tile) + (y/tile)) & 1;
      ctx.fillStyle = parity ? '#8FA876' : '#7B9363';
      ctx.fillRect(x, y, tile, tile);
    }
  }
  for (let i = 0; i < 7; i++) {
    const baseX = ((i * 187 + menuT*30) % (W + 200)) - 100;
    const baseY = 120 + (i * 91) % (H - 240);
    const z = {
      x: baseX, y: baseY + Math.sin(menuT + i)*10,
      r: 22, type:'walker', elite: false,
      color: '#8FCF3F', eye: '#c73866',
      walkPhase: menuT*8+i, angle: 0, hitFlash: 0,
      hp: 30, maxHp: 30,
      fusing: false,
    };
    Zombie.prototype.draw.call(z);
  }
}

// ------------- WIRING ------------------------------------------
$('startBtn').addEventListener('click', () => { initAudio(); showClassSelect(); });
$('restartBtn').addEventListener('click', () => { initAudio(); showClassSelect(); });
$('endMenuBtn').addEventListener('click', () => quitToMenu());
$('continueBtn').addEventListener('click', () => { initAudio(); continueFromCheckpoint(); });
$('resumeBtn').addEventListener('click', () => togglePause());
$('pauseMenuBtn').addEventListener('click', () => quitToMenu());

// Death replay buttons — populated in showRunEnd(false). Guard each $() so a
// missing element (stripped build variant) doesn't crash the wiring block.
const _watchReplayBtn = $('watchReplayBtn');
if (_watchReplayBtn) _watchReplayBtn.addEventListener('click', () => startReplayPlayback());
const _replayPlayPause = $('replayPlayPauseBtn');
if (_replayPlayPause) _replayPlayPause.addEventListener('click', () => toggleReplayPlayback());
const _replayRestart = $('replayRestartBtn');
if (_replayRestart) _replayRestart.addEventListener('click', () => restartReplayPlayback());
const _replayClose = $('replayCloseBtn');
if (_replayClose) _replayClose.addEventListener('click', () => stopReplayPlayback());

// Checkpoint Portal on the main menu: opens the 3-slot load picker.
const _checkpointPortalBtn = $('checkpointPortalBtn');
if (_checkpointPortalBtn) {
  _checkpointPortalBtn.addEventListener('click', () => {
    initAudio();
    loadPersistedCheckpoint();
    const arr = game.checkpoints || [];
    if (!arr.some(e => e)) { showBanner(t('noCheckpoint'), ''); return; }
    openCheckpointSlots('load');
  });
}

// Pause-menu "Save Checkpoint": opens the 3-slot picker in save mode so the
// player chooses which slot to overwrite.
const _pauseSaveBtn = $('pauseSaveCheckpointBtn');
if (_pauseSaveBtn) {
  _pauseSaveBtn.addEventListener('click', () => {
    if (!game.player) return;
    loadPersistedCheckpoint();
    openCheckpointSlots('save');
  });
}

// Checkpoint slots overlay — Back button behaviour depends on mode: from
// 'save' we re-open the pause overlay; from 'load' we return to main menu.
const _cpSlotsBack = $('checkpointSlotsBackBtn');
if (_cpSlotsBack) {
  _cpSlotsBack.addEventListener('click', () => {
    if (checkpointSlotsMode === 'save' && game.state === 'paused') {
      showOverlay($('pause'));
    } else {
      showOverlay($('menu'));
    }
  });
}

// Class-select overlay
function showClassSelect() {
  refreshClassCardActive();
  showOverlay($('classSelect'));
}
function refreshClassCardActive() {
  document.querySelectorAll('#classGrid .class-card').forEach(c => {
    if (c.dataset.class === game.playerClass) c.classList.add('active');
    else c.classList.remove('active');
  });
}
document.querySelectorAll('#classGrid .class-card').forEach(c => {
  c.addEventListener('click', () => {
    game.playerClass = c.dataset.class;
    localStorage.setItem('zr_class', game.playerClass);
    refreshClassCardActive();
    sfx('pickup');
    setTimeout(() => showEnvSelect(), 120);
  });
});
$('classBackBtn').addEventListener('click', () => showOverlay($('menu')));

// Environment-select overlay
function showEnvSelect() {
  refreshEnvCardActive();
  showOverlay($('envSelect'));
}
function refreshEnvCardActive() {
  document.querySelectorAll('#envGrid .env-card').forEach(c => {
    if (c.dataset.env === game.environment) c.classList.add('active');
    else c.classList.remove('active');
  });
}
document.querySelectorAll('#envGrid .env-card').forEach(c => {
  c.addEventListener('click', () => {
    game.environment = c.dataset.env;
    localStorage.setItem('zr_env', game.environment);
    refreshEnvCardActive();
    sfx('pickup');
    setTimeout(() => startRun(), 140);
  });
});
$('envBackBtn').addEventListener('click', () => showClassSelect());

// Reroll + confirm buttons in level-up overlay
$('rerollBtn').addEventListener('click', () => rerollChoices());
$('confirmBtn').addEventListener('click', () => confirmSelectedUpgrade());
$('spConfirmBtn').addEventListener('click', () => confirmSelectedSuperPower());
// Level-up: open the independent Stats page layered above the choice overlay.
$('viewStatsBtn').addEventListener('click', () => showStatsPage('upgradeChoice'));
$('statsPageCloseBtn').addEventListener('click', () => hideStatsPage());
$('upgradeDetailCloseBtn').addEventListener('click', () => hideUpgradeDetail());
$('upgradeDetail').addEventListener('click', (e) => {
  // Clicks on the backdrop (not the card or close button) dismiss the popup.
  if (e.target === $('upgradeDetail')) hideUpgradeDetail();
});

// Auto-fire toggle (two lang-style cards)
const savedAutoFire = localStorage.getItem('zr_autofire') === '1';
game.autoFire = savedAutoFire;
$('autoFireToggle').checked = savedAutoFire;
function refreshAutoFireCardActive() {
  document.querySelectorAll('#settingsAutoFireGrid .lang-card').forEach(c => {
    const want = c.dataset.autofire === 'on';
    c.classList.toggle('active', want === game.autoFire);
  });
}
document.querySelectorAll('#settingsAutoFireGrid .lang-card').forEach(c => {
  c.addEventListener('click', () => {
    game.autoFire = (c.dataset.autofire === 'on');
    $('autoFireToggle').checked = game.autoFire;
    localStorage.setItem('zr_autofire', game.autoFire ? '1' : '0');
    refreshAutoFireCardActive();
    sfx('pickup');
  });
});
refreshAutoFireCardActive();

// Crazy Dave voice toggle — default ON.
game.crazyDaveEnabled = (localStorage.getItem('zr_crazy_dave') !== '0');
function refreshCrazyDaveCardActive() {
  document.querySelectorAll('#settingsCrazyDaveGrid .lang-card').forEach(c => {
    const want = c.dataset.crazydave === 'on';
    c.classList.toggle('active', want === game.crazyDaveEnabled);
  });
}
document.querySelectorAll('#settingsCrazyDaveGrid .lang-card').forEach(c => {
  c.addEventListener('click', () => {
    game.crazyDaveEnabled = (c.dataset.crazydave === 'on');
    localStorage.setItem('zr_crazy_dave', game.crazyDaveEnabled ? '1' : '0');
    refreshCrazyDaveCardActive();
    if (!game.crazyDaveEnabled) stopCrazyDave();
    sfx('pickup');
  });
});
refreshCrazyDaveCardActive();

// Load any persisted checkpoint so the Checkpoint Portal button reflects
// availability from first paint.
loadPersistedCheckpoint();

// Restore saved class / environment picks
const savedClass = localStorage.getItem('zr_class');
if (savedClass === 'melee' || savedClass === 'ranged') game.playerClass = savedClass;
const savedEnv = localStorage.getItem('zr_env');
if (savedEnv && THEMES[savedEnv]) game.environment = savedEnv;
else if (savedEnv) {
  // Unknown legacy id — fall back to default but don't overwrite localStorage
  // (keeps user's previous selection should we add that theme later).
  game.environment = 'default';
}

// Menu tip rotator — shows a random tip every ~5s while menu is visible
const MENU_TIP_KEYS = ['tip_autoFire','tip_melee','tip_ranged','tip_dash','tip_reroll','tip_environment','tip_appearance','tip_space','tip_pause','tip_language'];
let menuTipIdx = Math.floor(Math.random() * MENU_TIP_KEYS.length);
function renderMenuTip() {
  const el = $('menuTipText');
  if (!el) return;
  el.textContent = t(MENU_TIP_KEYS[menuTipIdx]);
}
renderMenuTip();
setInterval(() => {
  const tip = $('menuTip');
  if (!tip) return;
  // Only rotate when menu-family overlay is visible
  const menuVisible = !$('menu').classList.contains('hidden') || !$('classSelect').classList.contains('hidden') || !$('envSelect').classList.contains('hidden');
  if (!menuVisible) return;
  tip.classList.add('swap');
  setTimeout(() => {
    menuTipIdx = (menuTipIdx + 1) % MENU_TIP_KEYS.length;
    renderMenuTip();
    tip.classList.remove('swap');
  }, 400);
}, 5000);

// Settings overlay: remember where we came from so BACK returns there.
let settingsReturnId = 'menu';
$('settingsBtn').addEventListener('click', () => {
  settingsReturnId = 'menu';
  showOverlay($('settings'));
  refreshLangCardActive();
  refreshAutoFireCardActive();
});
$('pauseSettingsBtn').addEventListener('click', () => {
  settingsReturnId = 'pause';
  showOverlay($('settings'));
  refreshLangCardActive();
  refreshAutoFireCardActive();
});
$('settingsBackBtn').addEventListener('click', () => {
  showOverlay($(settingsReturnId));
});

// Appearance overlay: same return-to-where-you-came-from pattern.
let appearanceReturnId = 'menu';
function openAppearance(fromId) {
  appearanceReturnId = fromId;
  renderSkinCards();
  showOverlay($('appearance'));
  refreshSkinCardActive();
}
$('appearanceBtn').addEventListener('click', () => openAppearance('menu'));
$('pauseAppearanceBtn').addEventListener('click', () => openAppearance('pause'));
$('appearanceBackBtn').addEventListener('click', () => {
  showOverlay($(appearanceReturnId));
});

// Build skin cards (with tiny canvas previews) into #skinGrid.
function renderSkinCards() {
  const grid = $('skinGrid');
  if (!grid) return;
  grid.innerHTML = '';
  SKINS.forEach(skin => {
    const card = document.createElement('div');
    card.className = 'skin-card';
    card.dataset.skin = skin.id;
    const cv = document.createElement('canvas');
    cv.width = 96; cv.height = 96;
    const label = document.createElement('div');
    label.className = 'sname';
    label.textContent = t(skin.nameKey);
    card.appendChild(cv);
    card.appendChild(label);
    card.addEventListener('click', () => {
      setSkin(skin.id);
      sfx('pickup');
    });
    grid.appendChild(card);
    drawSkinPreview(cv, skin);
  });
  refreshSkinCardActive();
}

// Render a skin into a small preview canvas.
// We temporarily swap the global `ctx` so drawPlayerSprite paints into the preview.
function drawSkinPreview(targetCanvas, skin) {
  const pctx = targetCanvas.getContext('2d');
  pctx.clearRect(0, 0, targetCanvas.width, targetCanvas.height);
  // Soft floor shadow on the preview
  pctx.fillStyle = 'rgba(15,10,26,0.25)';
  pctx.beginPath();
  pctx.ellipse(targetCanvas.width/2, targetCanvas.height*0.78, 22, 6, 0, 0, TAU);
  pctx.fill();
  // Hijack the module-level ctx for drawPlayerSprite (it's a `let`)
  ctx = pctx;
  ctx.save();
  ctx.translate(targetCanvas.width/2, targetCanvas.height/2 + 4);
  // Slight scale-up so the 18-radius sprite fills nicely
  ctx.scale(1.6, 1.6);
  drawPlayerSprite(0, 0, 18, -Math.PI/2 + 0.2, skin, {
    legBob: 0, bodyFlash: false, dashing: false
  });
  ctx.restore();
  // restore main ctx
  ctx = mainCtx;
}

// Language card click handlers (both initial language picker and in-settings picker).
document.querySelectorAll('#langSelectGrid .lang-card').forEach(c => {
  c.addEventListener('click', () => {
    setLanguage(c.dataset.lang);
    showOverlay($('menu'));
  });
});
document.querySelectorAll('#settingsLangGrid .lang-card').forEach(c => {
  c.addEventListener('click', () => {
    setLanguage(c.dataset.lang);
  });
});

// Initial overlay: language picker on first visit, otherwise main menu.
const hadSavedLang = loadSavedLang();
const savedSkinId = loadSavedSkin();
if (savedSkinId && SKIN_BY_ID[savedSkinId]) game.skinId = savedSkinId;
applyTranslations();
renderSkinCards();
showOverlay(hadSavedLang ? $('menu') : $('langSelect'));
requestAnimationFrame(loop);

function fitCanvas() {
  const stage = document.getElementById('stage');
  const touch = document.body.classList.contains('touch');
  const pad = touch ? 4 : 40;
  const availW = stage.clientWidth - pad;
  const availH = stage.clientHeight - pad;
  const ratio = 1220/720;
  let w = availW, h = availW / ratio;
  if (h > availH) { h = availH; w = availH * ratio; }
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
}
addEventListener('resize', fitCanvas);
fitCanvas();

// ------------- MOBILE / TOUCH CONTROLS -------------------------
const IS_TOUCH = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
if (IS_TOUCH) {
  document.body.classList.add('touch');
  // Default auto-fire ON for touch devices (first-time only)
  if (localStorage.getItem('zr_autofire') === null) {
    game.autoFire = true;
    const cb = $('autoFireToggle');
    if (cb) cb.checked = true;
    localStorage.setItem('zr_autofire', '1');
  }
  // Try to lock landscape if supported
  try {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(()=>{});
    }
  } catch(_) {}
  fitCanvas();
}

function setupJoystick(baseEl, stickEl, onChange) {
  if (!baseEl || !stickEl) return;
  let activeId = null;
  const updateStick = (dx, dy, rectW) => {
    const maxR = rectW * 0.32;
    const m = Math.hypot(dx, dy);
    let sdx = dx, sdy = dy;
    if (m > maxR) { sdx = dx/m*maxR; sdy = dy/m*maxR; }
    stickEl.style.transform = `translate(calc(-50% + ${sdx}px), calc(-50% + ${sdy}px))`;
  };
  const end = (e) => {
    if (activeId === null) return;
    let matched = false;
    for (const t of (e.changedTouches || [])) {
      if (t.identifier === activeId) { matched = true; break; }
    }
    if (!matched && e.changedTouches && e.changedTouches.length) return;
    activeId = null;
    onChange({ x: 0, y: 0, active: false });
    updateStick(0, 0, baseEl.getBoundingClientRect().width);
  };
  baseEl.addEventListener('touchstart', (e) => {
    const t = e.changedTouches[0];
    const rect = baseEl.getBoundingClientRect();
    const cx = rect.left + rect.width/2, cy = rect.top + rect.height/2;
    activeId = t.identifier;
    const dx = t.clientX - cx, dy = t.clientY - cy;
    onChange({ x: dx, y: dy, active: true });
    updateStick(dx, dy, rect.width);
    e.preventDefault();
  }, { passive: false });
  baseEl.addEventListener('touchmove', (e) => {
    if (activeId === null) return;
    for (const t of e.changedTouches) {
      if (t.identifier !== activeId) continue;
      const rect = baseEl.getBoundingClientRect();
      const cx = rect.left + rect.width/2, cy = rect.top + rect.height/2;
      const dx = t.clientX - cx, dy = t.clientY - cy;
      onChange({ x: dx, y: dy, active: true });
      updateStick(dx, dy, rect.width);
      e.preventDefault();
      return;
    }
  }, { passive: false });
  baseEl.addEventListener('touchend',    end, { passive: false });
  baseEl.addEventListener('touchcancel', end, { passive: false });
}

setupJoystick($('joyLeft'), $('joyLeftStick'), ({ x, y, active }) => {
  const dead = 10;
  if (!active || Math.hypot(x, y) < dead) {
    keys['w'] = keys['a'] = keys['s'] = keys['d'] = false;
    return;
  }
  const ang = Math.atan2(y, x);
  keys['d'] = (ang > -Math.PI*3/8 && ang <  Math.PI*3/8);
  keys['a'] = (ang >  Math.PI*5/8 || ang < -Math.PI*5/8);
  keys['s'] = (ang >  Math.PI*1/8 && ang <  Math.PI*7/8);
  keys['w'] = (ang > -Math.PI*7/8 && ang < -Math.PI*1/8);
});

setupJoystick($('joyRight'), $('joyRightStick'), ({ x, y, active }) => {
  const dead = 10;
  if (!active || Math.hypot(x, y) < dead) {
    touchAim.active = false;
    mouse.down = false;
    return;
  }
  touchAim.active = true;
  touchAim.angle = Math.atan2(y, x);
  mouse.down = true;
});

function bindMobileBtn(id, action) {
  const el = $(id);
  if (!el) return;
  const fire = (e) => { e.preventDefault(); initAudio(); action(); };
  el.addEventListener('touchstart', fire, { passive: false });
  el.addEventListener('click', fire);
}
bindMobileBtn('btnDash',   () => tryDash());
bindMobileBtn('btnJump',   () => tryJump());
bindMobileBtn('btnReload', () => tryReload());
bindMobileBtn('btnPause',  () => togglePause());

} // end bootLegacyGame

export {};
