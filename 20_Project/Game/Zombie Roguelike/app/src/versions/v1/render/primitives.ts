import { TAU, clamp } from '../config/constants';

export function drawShadow(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
): void {
  ctx.fillStyle = 'rgba(15, 10, 26, 0.35)';
  ctx.beginPath();
  ctx.ellipse(x, y + r * 0.85, r * 0.95, r * 0.35, 0, 0, TAU);
  ctx.fill();
}

export function drawHPBar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  frac: number,
  color = '#c73866',
): void {
  ctx.fillStyle = '#0f0a1a';
  ctx.fillRect(x - 1, y - 1, w + 2, h + 2);
  ctx.fillStyle = '#2a0e1c';
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w * clamp(frac, 0, 1), h);
}
