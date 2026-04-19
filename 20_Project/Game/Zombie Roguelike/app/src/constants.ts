// Numeric + string literal constants extracted from zombie_roguelike.html.
// Source line references are noted per-group.

// ---- Math / core (src 1598) --------------------------------------------
export const TAU = Math.PI * 2;

// ---- World dimensions (src 2213) ---------------------------------------
export const WORLD_W = 2880;
export const WORLD_H = 1760;

// ---- Canvas dimensions (src 1257 — `<canvas id="game" width="1280" height="720">`) ----
export const CANVAS_W = 1280;
export const CANVAS_H = 720;

// ---- Room / floor layout (src 2236–2237, 2244) -------------------------
export const ROOMS_PER_FLOOR = 6; // 5 combat + 1 boss
export const COMBAT_ROOMS = 5;
export const BASIC_OBSTACLES = ['crate', 'barrel', 'car'] as const;

// ---- Platform lift (src 2868) ------------------------------------------
export const PLATFORM_LIFT = 14; // visual/base z-lift when standing on a platform

// ---- Difficulty tier cadence (src 6935) --------------------------------
export const DIFFICULTY_TIER_INTERVAL = 30; // seconds of roomT between tier bumps

// ---- Checkpoint storage (src 6599–6601) --------------------------------
export const CHECKPOINT_KEY = 'zr_checkpoint'; // legacy, kept for migration only
export const CHECKPOINTS_KEY = 'zr_checkpoints'; // new: array of up to 3 entries
export const CHECKPOINT_SLOTS = 3;

// ---- localStorage key map (src 2057, 2082, 8257, 8279, 8296, 8317) -----
export const STORAGE_KEYS = {
  lang: 'zr_lang',
  skin: 'zr_skin',
  class: 'zr_class',
  env: 'zr_env',
  autofire: 'zr_autofire',
  crazyDave: 'zr_crazy_dave',
} as const;

// ---- Camera shake scale (src 2224) -------------------------------------
export const SHAKE_SCALE = 0.3;
