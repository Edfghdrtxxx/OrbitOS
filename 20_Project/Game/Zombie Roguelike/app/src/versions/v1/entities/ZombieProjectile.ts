import { TAU, dist2, rand } from '../config/constants';
import { game, world, collidesObstacle } from '../state';
import { Particle } from './Particle';
import type { Player } from './Player';

export class ZombieProjectile {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life = 2.2;
  damage: number;
  dead = false;
  private phase = 0;

  constructor(x: number, y: number, angle: number, speed: number, damage: number) {
    this.x = x;
    this.y = y;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.damage = damage;
  }

  update(dt: number, player: Player): void {
    this.phase += dt * 12;
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.life -= dt;
    if (this.life <= 0) { this.dead = true; return; }
    if (this.x < 0 || this.y < 0 || this.x > world.w || this.y > world.h) {
      this.dead = true;
      return;
    }
    if (collidesObstacle(this.x, this.y, 4)) { this.dead = true; return; }
    if (dist2(this.x, this.y, player.x, player.y) < (player.r + 8) ** 2) {
      player.hurt(this.damage);
      this.dead = true;
      for (let i = 0; i < 10; i++) {
        const a = Math.random() * TAU, s = rand(40, 140);
        game.particles.push(new Particle(this.x, this.y, {
          vx: Math.cos(a) * s, vy: Math.sin(a) * s,
          life: 0.4, r: rand(3, 5), color: '#8fcf3f', fade: true,
        }));
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const wobble = Math.sin(this.phase) * 2;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillStyle = '#8fcf3f';
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(0, 0, 10 + wobble, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#cedc4e';
    ctx.beginPath(); ctx.arc(-2, -3, 3, 0, TAU); ctx.fill();
    if (Math.random() < 0.4) {
      game.particles.push(new Particle(this.x, this.y, {
        vx: rand(-20, 20), vy: rand(-20, 20),
        life: 0.4, r: rand(2, 4), color: '#8fcf3f', fade: true, gravity: 80,
      }));
    }
    ctx.restore();
  }
}
