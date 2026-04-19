// Theme catalog + floor definitions + obstacle pool.
// Source: zombie_roguelike.html lines 2228–2297 (FLOORS, ROOMS_PER_FLOOR,
// COMBAT_ROOMS, BASIC_OBSTACLES, THEMES, THEME_ALIASES). Values byte-identical.

import type { EnvironmentId, FloorDef, ThemeDef } from '../types';
import { BASIC_OBSTACLES } from '../constants';

export { BASIC_OBSTACLES };

// ---- FLOORS (src 2228–2235) --------------------------------------------
export const FLOORS: FloorDef[] = [
  { name:'The Outskirts',   bgA:'#8FA876', bgB:'#7B9363', obstacles:['crate','barrel'] },
  { name:'Downtown Drift',  bgA:'#7A6F88', bgB:'#5E5571', obstacles:['car','crate','barrel'] },
  { name:'Mall Panic',      bgA:'#A89878', bgB:'#8D7E60', obstacles:['crate','crate','barrel'] },
  { name:'Industrial Rot',  bgA:'#5F6B70', bgB:'#4A5559', obstacles:['barrel','barrel','crate'] },
  { name:'Final Stand',     bgA:'#4A3A56', bgB:'#352741', obstacles:['crate','barrel','car'] },
  { name:'Pandemonium',     bgA:'#3A1520', bgB:'#24101A', obstacles:['barrel','car','crate','barrel'] },
];

// ---- THEMES (src 2245–2295) --------------------------------------------
// Visual overlay + obstacle pool per environment. Keys load-bearing for
// localStorage migrations — do not rename.
export const THEMES: Record<EnvironmentId, ThemeDef> = {
  default: {
    id: 'default', nameKey: 'env_default', descKey: 'env_default_desc',
    overlayClass: null,
    bg: '#8FA876',
    obstacles: BASIC_OBSTACLES as unknown as string[],
    tilePattern: { kind: 'doomsday', colors: ['#6e8757', '#5a7245', '#3d4a2e'], spacing: 128 },
  },
  neon: {
    id: 'neon', nameKey: 'env_neon', descKey: 'env_neon_desc',
    overlayClass: 'neon',
    bg: '#3a1c4a',
    obstacles: BASIC_OBSTACLES as unknown as string[],
    tilePattern: { kind: 'circuit', colors: ['#ff3cf0', '#39d0ff', '#57005b'], spacing: 96 },
  },
  vhs: {
    id: 'vhs', nameKey: 'env_vhs', descKey: 'env_vhs_desc',
    overlayClass: 'vhs',
    bg: '#6e7a82',
    obstacles: BASIC_OBSTACLES as unknown as string[],
    tilePattern: { kind: 'scanlines', colors: ['#ffffff', '#000000'], spacing: 6 },
  },
  vapor: {
    id: 'vapor', nameKey: 'env_vapor', descKey: 'env_vapor_desc',
    overlayClass: 'vapor',
    bg: '#e082c4',
    obstacles: BASIC_OBSTACLES as unknown as string[],
    tilePattern: { kind: 'sand', colors: ['#f3a6da', '#b85798', '#ffe0f4'], spacing: 80 },
  },
  modern: {
    id: 'modern', nameKey: 'env_modern', descKey: 'env_modern_desc',
    overlayClass: 'modern',
    bg: '#5a6068',
    obstacles: BASIC_OBSTACLES as unknown as string[],
    tilePattern: { kind: 'doomsday', colors: ['#484d54', '#6a6f76', '#ffb028'], spacing: 144 },
  },
  cyberpunk: {
    id: 'cyberpunk', nameKey: 'env_cyberpunk', descKey: 'env_cyberpunk_desc',
    overlayClass: 'cyberpunk',
    bg: '#1a1430',
    obstacles: BASIC_OBSTACLES as unknown as string[],
    tilePattern: { kind: 'hexGrid', colors: ['#ff2ea8', '#24ffe0', '#2a2047'], spacing: 72 },
  },
  chiikawa: {
    id: 'chiikawa', nameKey: 'env_chiikawa', descKey: 'env_chiikawa_desc',
    overlayClass: 'chiikawa',
    bg: '#c4ecbc',
    obstacles: BASIC_OBSTACLES as unknown as string[],
    tilePattern: { kind: 'sakura', colors: ['#ffc4dd', '#ff8ab7', '#ffffff'], spacing: 96 },
  },
};

// Legacy / alias mapping for migrations and safety. (src 2297)
export const THEME_ALIASES: Record<EnvironmentId, EnvironmentId> = {
  default: 'default',
  neon: 'neon',
  vhs: 'vhs',
  vapor: 'vapor',
  modern: 'modern',
  cyberpunk: 'cyberpunk',
  chiikawa: 'chiikawa',
};
