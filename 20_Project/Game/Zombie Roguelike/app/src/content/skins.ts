// Player skin catalog — zombie_roguelike.html src 2668–2724. Each skin
// describes how Player.draw() paints the survivor. Picked from the APPEARANCE
// overlay; stored in localStorage as 'zr_skin'.

import type { Skin, SkinId } from '../types';

export const SKINS: Skin[] = [
  {
    id: 'default',  nameKey: 'skin_default',
    bodyColor: '#4ecdc4', dashColor: '#7dd3d0', accentColor: '#0f0a1a',
    legColor: '#2a2f4a', gunColor: '#2a2f4a',
    headColor: '#ffd2a4', hairColor: '#3b2a1d', hairR: 5,
    hat: null, accessory: 'strap',
  },
  {
    id: 'hazmat',   nameKey: 'skin_hazmat',
    bodyColor: '#ffd23f', dashColor: '#fff08a', accentColor: '#7a5a00',
    legColor: '#c79a00', gunColor: '#3a2f1a',
    headColor: '#e8eef2', hairColor: '#9aa6b2', hairR: 0,
    hat: 'gasmask', accessory: 'tape',
  },
  {
    id: 'soldier',  nameKey: 'skin_soldier',
    bodyColor: '#5a7a3c', dashColor: '#86a861', accentColor: '#2a3818',
    legColor: '#3d5526', gunColor: '#1a1a1a',
    headColor: '#e0b48a', hairColor: '#3d2a14', hairR: 4,
    hat: 'helmet', accessory: 'vest',
  },
  {
    id: 'punk',     nameKey: 'skin_punk',
    bodyColor: '#2a1a1a', dashColor: '#5e2a2a', accentColor: '#0f0a1a',
    legColor: '#1a0f0f', gunColor: '#3a2a2a',
    headColor: '#f0c8a0', hairColor: '#ff3030', hairR: 5,
    hat: 'mohawk', accessory: 'studs',
  },
  {
    id: 'scientist',nameKey: 'skin_scientist',
    bodyColor: '#f4f4f0', dashColor: '#ffffff', accentColor: '#9aa6b2',
    legColor: '#3a4055', gunColor: '#2a2f4a',
    headColor: '#ffd2a4', hairColor: '#a87b3f', hairR: 5,
    hat: 'goggles', accessory: 'pocket',
  },
  {
    id: 'ninja',    nameKey: 'skin_ninja',
    bodyColor: '#1a1428', dashColor: '#3a2a54', accentColor: '#c881ff',
    legColor: '#0f0a1a', gunColor: '#0f0a1a',
    headColor: '#1a1428', hairColor: '#0f0a1a', hairR: 0,
    hat: 'mask', accessory: 'sash',
  },
  {
    // Usagi — pastel rabbit. Uses warm-dark outlines (not pure black) and
    // overrides the leg/boot painter via legStyle:'paws'. Head/ears/blush
    // are drawn by the 'usagi-ears' hat branch; 'usagi-blush' accessory is
    // a no-op torso branch (the body stays clean white).
    id: 'usagi',    nameKey: 'skin_usagi',
    bodyColor: '#FFFDF7', dashColor: '#F8C7CC', accentColor: '#F8C7CC',
    legColor: '#FFFDF7', gunColor: '#3B2E2A',
    headColor: '#FFFDF7', hairColor: '#FFFDF7', hairR: 0,
    hat: 'usagi-ears', accessory: 'usagi-blush',
    outlineColor: '#3B2E2A', legStyle: 'paws',
  },
];

export const SKIN_BY_ID: Record<SkinId, Skin> = Object.fromEntries(
  SKINS.map((s) => [s.id, s]),
) as Record<SkinId, Skin>;
