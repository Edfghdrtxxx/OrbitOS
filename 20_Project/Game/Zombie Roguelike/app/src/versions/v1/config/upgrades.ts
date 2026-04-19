export type UpgradeId =
  | 'dmg' | 'rof' | 'speed' | 'hp'
  | 'reload' | 'ammo' | 'double' | 'crit'
  | 'pierce' | 'explode' | 'vamp'
  | 'regen' | 'thorns' | 'eagle' | 'scholar';

export interface UpgradeDef {
  id: UpgradeId;
  name: string;
  color: string;
  icon: string;
  max: number | null;
}

export const UPGRADES: readonly UpgradeDef[] = [
  { id: 'dmg',     name: 'Boomstick',       color: '#ff6b6b', icon: '💥', max: null },
  { id: 'rof',     name: 'Hair Trigger',    color: '#ffbd2e', icon: '⚡',  max: 8 },
  { id: 'speed',   name: 'Sneakers',        color: '#4ecdc4', icon: '👟', max: 8 },
  { id: 'hp',      name: 'Tough Skin',      color: '#ff6b6b', icon: '❤️', max: null },
  { id: 'reload',  name: 'Quick Hands',     color: '#ffbd2e', icon: '⏱️', max: 6 },
  { id: 'ammo',    name: 'Extra Clip',      color: '#a36841', icon: '📦', max: 8 },
  { id: 'double',  name: 'Double Tap',      color: '#ffbd2e', icon: '🔫', max: 1 },
  { id: 'crit',    name: 'Sharpshooter',    color: '#ff6b6b', icon: '🎯', max: 8 },
  { id: 'pierce',  name: 'Piercing Rounds', color: '#7b68ee', icon: '🔩', max: 5 },
  { id: 'explode', name: 'Explosive Rounds',color: '#ff6b6b', icon: '💣', max: 1 },
  { id: 'vamp',    name: 'Vampire',         color: '#c73866', icon: '🩸', max: null },
  { id: 'regen',   name: 'Regeneration',    color: '#8fcf3f', icon: '✚',  max: 6 },
  { id: 'thorns',  name: 'Thorns',          color: '#c881ff', icon: '🌵', max: 5 },
  { id: 'eagle',   name: 'Eagle Eye',       color: '#4ecdc4', icon: '🦅', max: 6 },
  { id: 'scholar', name: 'Scholar',         color: '#7b68ee', icon: '📘', max: 6 },
];

export const UPG_BY_ID: Readonly<Record<UpgradeId, UpgradeDef>> = Object.fromEntries(
  UPGRADES.map((u) => [u.id, u]),
) as Record<UpgradeId, UpgradeDef>;
