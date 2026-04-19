export interface FloorTheme {
  name: string;
  bgA: string;
  bgB: string;
  obstacles: readonly string[];
}

export const FLOORS: readonly FloorTheme[] = [
  { name: 'The Outskirts',  bgA: '#8FA876', bgB: '#7B9363', obstacles: ['crate', 'barrel'] },
  { name: 'Downtown Drift', bgA: '#7A6F88', bgB: '#5E5571', obstacles: ['car', 'crate', 'barrel'] },
  { name: 'Mall Panic',     bgA: '#A89878', bgB: '#8D7E60', obstacles: ['crate', 'crate', 'barrel'] },
  { name: 'Industrial Rot', bgA: '#5F6B70', bgB: '#4A5559', obstacles: ['barrel', 'barrel', 'crate'] },
  { name: 'Final Stand',    bgA: '#4A3A56', bgB: '#352741', obstacles: ['crate', 'barrel', 'car'] },
];
