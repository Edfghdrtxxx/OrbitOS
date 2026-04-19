import { TAU, clamp, rand, choice } from '../config/constants';
import { sfx } from '../audio/sfx';
import { game, shakeCam } from '../state';
import { Particle } from './Particle';
import type { Player } from './Player';

export class Explosion {
  x: number;
  y: number;
  radius: number;
  damage: number;
  fromPlayer: boolean;
  t = 0;
  life = 0.4;
  dead = false;
  private hitSet = new Set<unknown>();

  constructor(x: number, y: number, radius: number, damage: number, fromPlayer: boolean) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.damage = damage;
    this.fromPlayer = fromPlayer;

    for (let i = 0; i < 24; i++) {
      const a = Math.random() * TAU;
      const s = rand(80, 360);
      game.particles.push(new Particle(x, y, {
        vx: Math.cos(a) * s, vy: Math.sin(a) * s,
        life: rand(0.3, 0.7), r: rand(5, 10),
        color: choice(['#ff6b6b', '#ffbd2e', '#fff6c9']), fade: true,
      }));
    }
    shakeCam(fromPlayer ? 4 : 10);
    sfx('boom');
  }

  update(dt: number, player: Player): void {
    this.t += dt;
    if (this.t < dt * 2) {
      if (this.fromPlayer) {
        for (const z of game.zombies) {
          if (this.hitSet.has(z)) continue;
          const dx = this.x - z.x, dy = this.y - z.y;
          if (dx * dx + dy * dy < (this.radius + z.r) ** 2) {
            z.hurt(this.damage, this.x, this.y);
            this.hitSet.add(z);
          }
        }
      } else {
        const dx = this.x - player.x, dy = this.y - player.y;
        if (dx * dx + dy * dy < (this.radius + player.r) ** 2) {
          player.hurt(this.damage);
        }
      }
    }
    if (this.t >= this.life) this.dead = true;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const p = clamp(this.t / this.life, 0, 1);
    const r = this.radius * (0.3 + p * 0.9);
    ctx.globalAlpha = (1 - p) * 0.6;
    ctx.fillStyle = this.fromPlayer ? '#ffbd2e' : '#ff6b6b';
    ctx.beginPath(); ctx.arc(this.x, this.y, r, 0, TAU); ctx.fill();
    ctx.globalAlpha = (1 - p) * 0.9;
    ctx.strokeStyle = '#fff6c9';
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(this.x, this.y, r, 0, TAU); ctx.stroke();
    ctx.globalAlpha = 1;
  }
}
