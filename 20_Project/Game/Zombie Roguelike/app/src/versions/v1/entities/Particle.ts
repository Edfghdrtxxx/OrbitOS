import { TAU, clamp } from '../config/constants';

export interface ParticleOpts {
  vx?: number;
  vy?: number;
  life?: number;
  r?: number;
  color?: string;
  fade?: boolean;
  gravity?: number;
}

export class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  r: number;
  color: string;
  fade: boolean;
  gravity: number;
  dead = false;

  constructor(x: number, y: number, opts: ParticleOpts) {
    this.x = x;
    this.y = y;
    this.vx = opts.vx ?? 0;
    this.vy = opts.vy ?? 0;
    this.life = opts.life ?? 0.5;
    this.maxLife = this.life;
    this.r = opts.r ?? 3;
    this.color = opts.color ?? '#fff';
    this.fade = !!opts.fade;
    this.gravity = opts.gravity ?? 0;
  }

  update(dt: number): void {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.vx *= 0.92;
    this.vy *= 0.92;
    this.vy += this.gravity * dt;
    this.life -= dt;
    if (this.life <= 0) this.dead = true;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const alpha = this.fade ? clamp(this.life / this.maxLife, 0, 1) : 1;
    ctx.globalAlpha = alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r * (this.fade ? alpha * 0.6 + 0.4 : 1), 0, TAU);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}
