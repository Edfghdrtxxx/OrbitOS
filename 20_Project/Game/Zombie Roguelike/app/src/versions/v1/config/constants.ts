export const TAU = Math.PI * 2;

export const CANVAS_W = 960;
export const CANVAS_H = 540;

export const WORLD_W = 1800;
export const WORLD_H = 1100;

export const ROOMS_PER_FLOOR = 4;
export const COMBAT_ROOMS = 3;

export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

export const clamp = (v: number, lo: number, hi: number): number =>
  v < lo ? lo : v > hi ? hi : v;

export const dist2 = (ax: number, ay: number, bx: number, by: number): number => {
  const dx = bx - ax;
  const dy = by - ay;
  return dx * dx + dy * dy;
};

export const rand = (a: number, b: number): number => a + Math.random() * (b - a);

export const randi = (a: number, b: number): number => Math.floor(rand(a, b));

export const choice = <T>(arr: readonly T[]): T => arr[randi(0, arr.length)]!;

export function lighten(hex: string, pct: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const m = (v: number): number => clamp(Math.floor(v + (255 - v) * pct / 100), 0, 255);
  return (
    '#' +
    [m(r), m(g), m(b)]
      .map((v) => v.toString(16).padStart(2, '0'))
      .join('')
  );
}
