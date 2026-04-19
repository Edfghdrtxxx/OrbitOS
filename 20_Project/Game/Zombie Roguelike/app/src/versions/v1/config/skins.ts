export type SkinId = 'default' | 'hazmat' | 'soldier' | 'punk' | 'scientist' | 'ninja';

export type SkinHat = 'gasmask' | 'helmet' | 'mohawk' | 'goggles' | 'mask' | null;
export type SkinAccessory = 'strap' | 'tape' | 'vest' | 'studs' | 'pocket' | 'sash';

export interface SkinDef {
  id: SkinId;
  nameKey: string;
  bodyColor: string;
  dashColor: string;
  accentColor: string;
  legColor: string;
  gunColor: string;
  headColor: string;
  hairColor: string;
  hairR: number;
  hat: SkinHat;
  accessory: SkinAccessory;
}

export const SKINS: readonly SkinDef[] = [
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
];

export const SKIN_BY_ID: Readonly<Record<SkinId, SkinDef>> = Object.fromEntries(
  SKINS.map((s) => [s.id, s]),
) as Record<SkinId, SkinDef>;

export function getSkin(id: SkinId | string): SkinDef {
  return SKIN_BY_ID[id as SkinId] ?? SKINS[0]!;
}
