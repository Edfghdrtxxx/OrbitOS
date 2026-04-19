import { TAU, dist2, rand } from '../config/constants';
import { game, world, collidesObstacle } from '../state';
import { Particle } from './Particle';
import { Explosion } from './Explosion';
import type { Zombie } from './Zombie';

export interface BulletOpts {
  life?: number;
  pierce?: number;
  explosive?: boolean;
  crit?: boolean;
}

interface TrailPoint { x: number; y: number; a: number; }

export class Bullet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  life: number;
  damage: number;
  dead = false;
  trail: TrailPoint[] = [];
  pierce: number;
  private piercedSet = new Set<Zombie>();
  explosive: boolean;
  crit: boolean;

  constructor(x: number, y: number, angle: number, speed: number, damage: number, opts: BulletOpts = {}) {
    this.x = x;
    this.y = y;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.angle = angle;
    this.life = opts.life ?? 0.7;
    this.damage = damage;
    this.pierce = opts.pierce ?? 0;
    this.explosive = !!opts.explosive;
    this.crit = !!opts.crit;
  }

  update(dt: number): void {
    this.trail.push({ x: this.x, y: this.y, a: 1 });
    if (this.trail.length > 6) this.trail.shift();
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.life -= dt;
    if (this.life <= 0) { this.dead = true; return; }
    if (this.x < 0 || this.y < 0 || this.x > world.w || this.y > world.h) {
      this.dead = true;
      return;
    }
    if (collidesObstacle(this.x, this.y, 2)) {
      this.dead = true;
      if (this.explosive) game.explosions.push(new Explosion(this.x, this.y, 70, this.damage * 0.6, true));
      for (let i = 0; i < 6; i++) {
        const a = Math.random() * TAU, s = rand(80, 200);
        game.particles.push(new Particle(this.x, this.y, {
          vx: Math.cos(a) * s, vy: Math.sin(a) * s,
          life: 0.2, r: rand(2, 4), color: '#ffbd2e', fade: true,
        }));
      }
      return;
    }
    for (const z of game.zombies) {
      if (this.piercedSet.has(z)) continue;
      if (dist2(this.x, this.y, z.x, z.y) < z.r * z.r) {
        z.hurt(this.damage, this.x, this.y);
        this.piercedSet.add(z);
        if (this.explosive) game.explosions.push(new Explosion(this.x, this.y, 70, this.damage * 0.6, true));
        if (this.pierce <= 0) {
          this.dead = true;
          return;
        }
        this.pierce--;
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    for (let i = 0; i < this.trail.length; i++) {
      const t = this.trail[i]!;
      const a = (i + 1) / this.trail.length;
      ctx.globalAlpha = a * 0.6;
      ctx.fillStyle = this.crit ? '#ff6b6b' : '#ffbd2e';
      ctx.beginPath(); ctx.arc(t.x, t.y, 3 * a, 0, TAU); ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = this.crit ? '#ffdede' : '#fff6c9';
    ctx.strokeStyle = this.crit ? '#c73866' : '#e08e00';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.crit ? 9 : 7, this.crit ? 4 : 3, 0, 0, TAU);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}
