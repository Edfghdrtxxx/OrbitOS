import { TAU, dist2, rand } from '../config/constants';
import { sfx } from '../audio/sfx';
import { game } from '../state';
import { Particle } from './Particle';
import type { Player } from './Player';

export type PowerupType = 'health' | 'ammo';

export class Powerup {
  x: number;
  y: number;
  type: PowerupType;
  r = 16;
  private phase = 0;
  dead = false;
  life = 14;

  constructor(x: number, y: number, type: PowerupType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  update(dt: number, player: Player): void {
    this.phase += dt * 3;
    this.life -= dt;
    if (this.life <= 0) this.dead = true;
    if (dist2(this.x, this.y, player.x, player.y) < (this.r + player.r) ** 2) {
      if (this.type === 'health') {
        player.hp = Math.min(player.maxHp, player.hp + 30);
      } else {
        player.ammo = player.maxAmmo;
        player.reloading = false;
      }
      this.dead = true;
      sfx('pickup');
      for (let i = 0; i < 10; i++) {
        const a = Math.random() * TAU;
        game.particles.push(new Particle(this.x, this.y, {
          vx: Math.cos(a) * rand(60, 160), vy: Math.sin(a) * rand(60, 160),
          life: 0.5, r: rand(3, 5),
          color: this.type === 'health' ? '#ff6b6b' : '#ffbd2e', fade: true,
        }));
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const yOff = Math.sin(this.phase) * 4;
    ctx.fillStyle = this.type === 'health' ? 'rgba(255,107,107,0.2)' : 'rgba(255,189,46,0.2)';
    ctx.beginPath(); ctx.arc(this.x, this.y + yOff, this.r * 1.6, 0, TAU); ctx.fill();
    ctx.save();
    ctx.translate(this.x, this.y + yOff);
    ctx.fillStyle = this.type === 'health' ? '#fff' : '#2a2f4a';
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.rect(-this.r, -this.r, this.r * 2, this.r * 2);
    ctx.fill();
    ctx.stroke();
    if (this.type === 'health') {
      ctx.fillStyle = '#c73866';
      ctx.fillRect(-4, -10, 8, 20);
      ctx.fillRect(-10, -4, 20, 8);
    } else {
      ctx.fillStyle = '#ffbd2e';
      ctx.beginPath();
      ctx.moveTo(-8, -4);
      ctx.lineTo(0, -10);
      ctx.lineTo(8, -4);
      ctx.lineTo(8, 8);
      ctx.lineTo(-8, 8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#0f0a1a';
      ctx.fillRect(-2, -2, 4, 8);
    }
    ctx.restore();
  }
}
