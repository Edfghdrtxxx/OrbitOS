import { TAU, clamp, rand, choice, lighten } from '../config/constants';
import { ZTYPES, enemyStats, type ZombieType } from '../config/zombies';
import { sfx } from '../audio/sfx';
import { game, world, shakeCam, collidesObstacle } from '../state';
import { drawShadow, drawHPBar } from '../render/primitives';
import { Particle } from './Particle';
import { ZombieProjectile } from './ZombieProjectile';
import { Explosion } from './Explosion';
import { Powerup } from './Powerup';
import type { Player } from './Player';

export class Zombie {
  x: number;
  y: number;
  type: ZombieType;
  elite: boolean;
  r: number;
  hp: number;
  maxHp: number;
  speed: number;
  damage: number;
  score: number;
  xp: number;
  color: string;
  eye: string;
  touchCdMax: number;
  touchCd = 0;
  walkPhase: number;
  hitFlash = 0;
  angle = 0;
  wobble: number;

  shootCd: number;
  fusing = false;
  fuseT = 0;

  chargeCd: number;
  charging = false;
  chargeT = 0;
  chargeDx = 0;
  chargeDy = 0;
  summonCd: number;

  private _detourSign = 0;
  private _detourT = 0;
  private _lastX: number | null = null;
  private _lastY: number | null = null;

  constructor(x: number, y: number, type: ZombieType, elite = false) {
    const stats = enemyStats(type, game.floor, elite);
    const base = ZTYPES[type];
    this.x = x;
    this.y = y;
    this.type = type;
    this.elite = elite;
    this.r = stats.radius;
    this.hp = stats.hp;
    this.maxHp = stats.hp;
    this.speed = stats.speed;
    this.damage = stats.damage;
    this.score = stats.score;
    this.xp = stats.xp;
    this.color = base.color;
    this.eye = base.eye;
    this.touchCdMax = base.touchCd;
    this.walkPhase = Math.random() * TAU;
    this.wobble = rand(0, TAU);
    this.shootCd = type === 'spitter' ? rand(800, 1600) : 0;
    this.chargeCd = type === 'boss' ? 1600 : 0;
    this.summonCd = type === 'boss' ? 3500 : 0;
  }

  update(dt: number, player: Player): void {
    this.hitFlash = Math.max(0, this.hitFlash - dt);
    this.touchCd = Math.max(0, this.touchCd - dt * 1000);
    this.wobble += dt * 3;

    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const d = Math.hypot(dx, dy) || 0.001;
    this.angle = Math.atan2(dy, dx);

    if (this.type === 'spitter') {
      const base = ZTYPES.spitter;
      this.shootCd -= dt * 1000;
      const desiredD = 280;
      let mx = 0, my = 0;
      if (d > desiredD + 40) { mx = dx / d; my = dy / d; }
      else if (d < desiredD - 40) { mx = -dx / d; my = -dy / d; }
      else {
        mx = -dy / d; my = dx / d;
        if ((Math.floor(this.wobble) % 2) === 0) { mx = -mx; my = -my; }
      }
      this.move(mx, my, this.speed, dt);
      if (this.shootCd <= 0 && d < (base.range ?? 0)) {
        this.shootCd = base.shootCd ?? 1800;
        const proj = new ZombieProjectile(this.x, this.y, Math.atan2(dy, dx), 340, this.damage);
        game.ezBullets.push(proj);
        sfx('spit');
        for (let i = 0; i < 6; i++) {
          const a = this.angle + rand(-0.3, 0.3);
          game.particles.push(new Particle(this.x, this.y, {
            vx: Math.cos(a) * rand(60, 140), vy: Math.sin(a) * rand(60, 140),
            life: 0.3, r: rand(3, 5), color: '#8fcf3f', fade: true,
          }));
        }
      }
    } else if (this.type === 'exploder') {
      const base = ZTYPES.exploder;
      if (!this.fusing && d < 80) {
        this.fusing = true;
        this.fuseT = base.fuse ?? 600;
      }
      if (this.fusing) {
        this.fuseT -= dt * 1000;
        this.move(dx / d, dy / d, this.speed * 0.6, dt);
        if (this.fuseT <= 0) {
          this.explode();
          return;
        }
      } else {
        this.move(dx / d, dy / d, this.speed, dt);
      }
    } else if (this.type === 'boss') {
      this.chargeCd -= dt * 1000;
      if (this.charging) {
        this.chargeT -= dt;
        this.move(this.chargeDx, this.chargeDy, 480 + game.floor * 20, dt);
        if (this.chargeT <= 0) this.charging = false;
      } else {
        this.move(dx / d, dy / d, this.speed, dt);
        if (game.floor >= 4 && this.chargeCd <= 0 && d < 600 && d > 90) {
          this.charging = true;
          this.chargeT = 0.9;
          this.chargeDx = dx / d;
          this.chargeDy = dy / d;
          this.chargeCd = Math.max(1200, 2200 - game.floor * 150);
          for (let i = 0; i < 28; i++) {
            const a = Math.random() * TAU;
            game.particles.push(new Particle(this.x, this.y, {
              vx: Math.cos(a) * rand(80, 180), vy: Math.sin(a) * rand(80, 180),
              life: 0.45, r: rand(4, 8), color: '#ffbd2e', fade: true,
            }));
          }
        }
      }
      if (this.summonCd > 0) {
        this.summonCd -= dt * 1000;
        if (this.summonCd <= 0) {
          this.summonCd = Math.max(2400, 4500 - game.floor * 350);
          const n = Math.min(6, 1 + game.floor);
          for (let i = 0; i < n; i++) {
            const a = Math.random() * TAU;
            const sx = this.x + Math.cos(a) * 60;
            const sy = this.y + Math.sin(a) * 60;
            let stype: ZombieType = 'runner';
            if (game.floor >= 3 && Math.random() < 0.35) stype = 'spitter';
            if (game.floor >= 4 && Math.random() < 0.25) stype = 'exploder';
            game.zombies.push(new Zombie(sx, sy, stype, false));
            for (let j = 0; j < 8; j++) {
              const aa = Math.random() * TAU;
              game.particles.push(new Particle(sx, sy, {
                vx: Math.cos(aa) * rand(40, 100), vy: Math.sin(aa) * rand(40, 100),
                life: 0.4, r: rand(3, 5), color: '#c73866', fade: true,
              }));
            }
          }
        }
      }
    } else {
      let spd = this.speed;
      if (this.type === 'walker') spd *= 0.9 + 0.2 * Math.sin(this.wobble);
      this.move(dx / d, dy / d, spd, dt);
    }

    const phaseMul =
      this.type === 'runner' ? 16 :
      this.type === 'brute'  ? 6  :
      this.type === 'boss'   ? 5  : 10;
    this.walkPhase += dt * phaseMul;

    for (const other of game.zombies) {
      if (other === this) continue;
      const ox = other.x - this.x, oy = other.y - this.y;
      const od = Math.hypot(ox, oy);
      const minD = this.r + other.r;
      if (od > 0 && od < minD) {
        const push = (minD - od) * 0.5;
        this.x -= (ox / od) * push;
        this.y -= (oy / od) * push;
      }
    }

    if (d < this.r + player.r && this.touchCd <= 0 && this.type !== 'exploder') {
      player.hurt(this.damage, this.x, this.y);
      this.touchCd = this.touchCdMax;
      if (player.thornsDmg > 0) {
        this.hurt(player.thornsDmg, this.x, this.y, false);
      }
      if (this.type === 'brute' || this.type === 'boss') {
        player.x += (dx / d) * -30;
        player.y += (dy / d) * -30;
      }
    }
  }

  private move(vx: number, vy: number, spd: number, dt: number): void {
    const mag = Math.hypot(vx, vy) || 1;
    const desiredA = Math.atan2(vy, vx);
    let useA = desiredA;
    const lookahead = this.r + 22 + spd * dt * 5;
    const lx = this.x + Math.cos(desiredA) * lookahead;
    const ly = this.y + Math.sin(desiredA) * lookahead;
    if (collidesObstacle(lx, ly, this.r)) {
      const offsets = [Math.PI / 6, Math.PI / 3, Math.PI / 2, (2 * Math.PI) / 3, (5 * Math.PI) / 6];
      const sidePref = this._detourSign || (Math.random() < 0.5 ? 1 : -1);
      let found = false;
      for (const off of offsets) {
        for (const sign of [sidePref, -sidePref]) {
          const a = desiredA + off * sign;
          const tx = this.x + Math.cos(a) * lookahead;
          const ty = this.y + Math.sin(a) * lookahead;
          if (!collidesObstacle(tx, ty, this.r)) {
            useA = a;
            this._detourSign = sign;
            this._detourT = 0.6;
            found = true;
            break;
          }
        }
        if (found) break;
      }
      if (!found) useA = desiredA;
    } else if (this._detourT > 0) {
      this._detourT -= dt;
    } else {
      this._detourSign = 0;
    }

    const fx = Math.cos(useA) * mag;
    const fy = Math.sin(useA) * mag;
    const nx = this.x + fx * spd * dt;
    const ny = this.y + fy * spd * dt;
    if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;
    if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;
    this.x = clamp(this.x, this.r, world.w - this.r);
    this.y = clamp(this.y, this.r, world.h - this.r);
  }

  hurt(dmg: number, bx: number, by: number, showNumber = true): boolean {
    const wasAlive = this.hp > 0;
    this.hp -= dmg;
    this.hitFlash = 0.12;
    for (let i = 0; i < 6; i++) {
      const a = Math.random() * TAU;
      const s = rand(100, 280);
      game.particles.push(new Particle(bx, by, {
        vx: Math.cos(a) * s, vy: Math.sin(a) * s,
        life: rand(0.2, 0.5), r: rand(3, 6),
        color: this.type === 'boss' ? '#ffbd2e' : '#8fcf3f', fade: true, gravity: 200,
      }));
    }
    if (showNumber) {
      game.damageNums.push({
        x: bx, y: by - this.r,
        life: 0.8, text: String(Math.ceil(dmg)),
        vy: -60, color: dmg > 40 ? '#ff6b6b' : '#ffbd2e',
      });
    }
    sfx('hit');
    if (this.hp <= 0 && wasAlive) {
      this.die();
      return true;
    }
    return false;
  }

  die(): void {
    for (let i = 0; i < 18; i++) {
      const a = Math.random() * TAU;
      const s = rand(60, 280);
      game.particles.push(new Particle(this.x, this.y, {
        vx: Math.cos(a) * s, vy: Math.sin(a) * s,
        life: rand(0.4, 0.9), r: rand(4, 8),
        color: this.type === 'boss' ? '#ffbd2e' : '#8fcf3f', fade: true, gravity: 300,
      }));
    }
    const dropRoll = Math.random();
    const eliteBonus = this.elite ? 0.15 : 0;
    if (dropRoll < 0.08 + eliteBonus) {
      game.powerups.push(new Powerup(this.x, this.y, 'health'));
    } else if (dropRoll < 0.14 + eliteBonus) {
      game.powerups.push(new Powerup(this.x, this.y, 'ammo'));
    }
    game.kills++;
    game.score += this.score;
    const player = game.player!;
    if (player.vampHeal > 0) {
      player.hp = Math.min(player.maxHp, player.hp + player.vampHeal);
    }
    player.gainXP(this.xp);
    shakeCam(this.type === 'boss' ? 14 : this.type === 'brute' ? 6 : 3);
    sfx('die');
  }

  explode(): void {
    this.hp = 0;
    const base = ZTYPES.exploder;
    const eStats = enemyStats('exploder', game.floor, this.elite);
    game.explosions.push(new Explosion(
      this.x, this.y,
      (base.boomR ?? 95) * (this.elite ? 1.2 : 1),
      eStats.damage,
      false,
    ));
    for (let i = 0; i < 20; i++) {
      const a = Math.random() * TAU;
      const s = rand(80, 260);
      game.particles.push(new Particle(this.x, this.y, {
        vx: Math.cos(a) * s, vy: Math.sin(a) * s,
        life: rand(0.3, 0.7), r: rand(5, 10),
        color: choice(['#ff7b5c', '#ffbd2e', '#c73866']), fade: true,
      }));
    }
    game.kills++;
    game.score += this.score;
    game.player!.gainXP(this.xp);
    sfx('boom');
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const x = this.x, y = this.y;
    drawShadow(ctx, x, y, this.r);
    const now = performance.now();

    if (this.type === 'runner') {
      const sp = Math.hypot(
        this._lastX != null ? x - this._lastX : 0,
        this._lastY != null ? y - this._lastY : 0,
      );
      void sp;
      this._lastX = x;
      this._lastY = y;
      const back = Math.cos(this.angle), bsy = Math.sin(this.angle);
      for (let i = 1; i <= 3; i++) {
        ctx.globalAlpha = 0.18 - i * 0.04;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(x - back * i * 7, y - bsy * i * 7, this.r * 0.85, 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    if (this.elite) {
      const pulse = 0.5 + 0.3 * Math.sin(now / 200);
      ctx.fillStyle = `rgba(200,129,255,${0.13 * pulse})`;
      ctx.beginPath(); ctx.arc(x, y, this.r * 1.9, 0, TAU); ctx.fill();
      ctx.strokeStyle = `rgba(200,129,255,${0.55 * pulse})`;
      ctx.lineWidth = 2;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(now / 600);
      ctx.setLineDash([6, 5]);
      ctx.beginPath(); ctx.arc(0, 0, this.r * 1.45, 0, TAU); ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
      for (let i = 0; i < 4; i++) {
        const a = now / 400 + (i * Math.PI) / 2;
        const sx = x + Math.cos(a) * this.r * 1.6;
        const sy = y + Math.sin(a) * this.r * 1.6;
        ctx.fillStyle = `rgba(238,210,255,${0.6 * pulse})`;
        ctx.beginPath(); ctx.arc(sx, sy, 1.8 + Math.sin(now / 180 + i), 0, TAU); ctx.fill();
      }
    }

    if (this.type === 'exploder') {
      let intensity = 0.18;
      if (this.fusing) {
        const base = ZTYPES.exploder.fuse ?? 600;
        const left = Math.max(0, this.fuseT) / base;
        const urge = 1 - left;
        intensity = 0.25 + 0.55 * urge * (0.5 + 0.5 * Math.sin(now / (60 - urge * 40)));
      } else {
        intensity = 0.18 + 0.1 * Math.sin(now / 220);
      }
      const grad = ctx.createRadialGradient(x, y, 0, x, y, this.r * 2.2);
      grad.addColorStop(0, `rgba(255,189,46,${intensity})`);
      grad.addColorStop(0.6, `rgba(255,107,107,${intensity * 0.5})`);
      grad.addColorStop(1, 'rgba(255,107,107,0)');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(x, y, this.r * 2.2, 0, TAU); ctx.fill();
    }

    if (this.type === 'boss') {
      const pulse = 0.4 + 0.25 * Math.sin(now / 300);
      const grad = ctx.createRadialGradient(x, y, this.r * 0.6, x, y, this.r * 2.1);
      grad.addColorStop(0, this.elite ? 'rgba(200,129,255,0.18)' : 'rgba(199,56,102,0.16)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(x, y, this.r * 2.1, 0, TAU); ctx.fill();
      ctx.strokeStyle = this.elite ? `rgba(200,129,255,${0.45 * pulse})` : `rgba(255,107,107,${0.4 * pulse})`;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(x, y, this.r * 1.25, 0, TAU); ctx.stroke();
    }

    const fuseFlash = this.type === 'exploder' && this.fusing && Math.floor(now / 80) % 2 === 0;

    ctx.save();
    ctx.translate(x, y);

    const flash = this.hitFlash > 0 || fuseFlash;
    const bodyColor = flash ? '#ffffff' : this.color;

    const bob = Math.sin(this.walkPhase) * 3;
    const legColor = this.type === 'runner' ? '#162410' : '#1e3816';
    ctx.fillStyle = legColor;
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 3;
    const legW = this.type === 'runner' ? this.r * 0.28 : this.r * 0.35;
    const legH = this.type === 'runner' ? this.r * 0.62 : this.r * 0.5;
    ctx.beginPath(); ctx.ellipse(-this.r * 0.4, this.r * 0.7 + bob, legW, legH, 0, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse( this.r * 0.4, this.r * 0.7 - bob, legW, legH, 0, 0, TAU); ctx.fill(); ctx.stroke();

    ctx.rotate(this.angle);

    ctx.fillStyle = bodyColor;
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 3;
    if (this.type === 'spitter') {
      ctx.beginPath(); ctx.ellipse(0, this.r * 0.05, this.r * 1.05, this.r * 1.1, 0, 0, TAU); ctx.fill(); ctx.stroke();
    } else if (this.type === 'brute') {
      ctx.beginPath();
      const w = this.r * 1.1, h = this.r * 0.95;
      ctx.moveTo(-w, -h * 0.4);
      ctx.lineTo(-w * 0.7, -h);
      ctx.lineTo( w * 0.7, -h);
      ctx.lineTo( w, -h * 0.4);
      ctx.lineTo( w * 0.95, h * 0.6);
      ctx.lineTo(-w * 0.95, h * 0.6);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.beginPath(); ctx.arc(0, 0, this.r, 0, TAU); ctx.fill(); ctx.stroke();
    }

    if (this.type === 'walker') {
      ctx.strokeStyle = flash ? '#c8c8c8' : '#3a5a1f';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(-this.r * 0.7, -this.r * 0.2); ctx.lineTo(this.r * 0.3, this.r * 0.5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-this.r * 0.5,  this.r * 0.3); ctx.lineTo(this.r * 0.1, -this.r * 0.4); ctx.stroke();
      ctx.fillStyle = '#1e3816';
      ctx.beginPath();
      ctx.moveTo(-this.r * 0.5, this.r * 0.6);
      ctx.lineTo(-this.r * 0.3, this.r * 0.95);
      ctx.lineTo(-this.r * 0.1, this.r * 0.6);
      ctx.lineTo( this.r * 0.1, this.r * 0.9);
      ctx.lineTo( this.r * 0.3, this.r * 0.6);
      ctx.closePath(); ctx.fill();
      ctx.strokeStyle = '#f5e8c8';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-this.r * 0.25, -this.r * 0.05); ctx.lineTo(this.r * 0.05, -this.r * 0.1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-this.r * 0.25,  this.r * 0.15); ctx.lineTo(this.r * 0.05,  this.r * 0.10); ctx.stroke();
    } else if (this.type === 'runner') {
      ctx.strokeStyle = flash ? '#c8c8c8' : '#5e8a25';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-this.r * 0.6, -this.r * 0.1); ctx.lineTo(this.r * 0.4, -this.r * 0.4); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-this.r * 0.6,  this.r * 0.2); ctx.lineTo(this.r * 0.5,  this.r * 0.0); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-this.r * 0.4,  this.r * 0.5); ctx.lineTo(this.r * 0.4,  this.r * 0.3); ctx.stroke();
      ctx.fillStyle = '#c73866';
      ctx.beginPath(); ctx.arc(this.r * 0.75, this.r * 0.0, 2, 0, TAU); ctx.fill();
    } else if (this.type === 'spitter') {
      const breathe = 0.85 + 0.15 * Math.sin(now / 240);
      ctx.fillStyle = `rgba(143,207,63,${0.6 * breathe})`;
      ctx.beginPath(); ctx.arc(-this.r * 0.3, this.r * 0.4, 5 * breathe, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc(0,             this.r * 0.55, 6 * breathe, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc( this.r * 0.3, this.r * 0.4, 5 * breathe, 0, TAU); ctx.fill();
      ctx.fillStyle = '#cedc4e';
      ctx.beginPath(); ctx.arc(-this.r * 0.3, this.r * 0.4, 2, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc(0,             this.r * 0.55, 2, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc( this.r * 0.3, this.r * 0.4, 2, 0, TAU); ctx.fill();
      ctx.strokeStyle = '#3a5a1f';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-this.r * 0.6, this.r * 0.0);
      ctx.quadraticCurveTo(-this.r * 0.3, this.r * 0.3, 0, this.r * 0.55);
      ctx.stroke();
    } else if (this.type === 'exploder') {
      const fp = this.fusing ? 1 - Math.max(0, this.fuseT) / (ZTYPES.exploder.fuse ?? 600) : 0;
      const heat = 0.7 + fp * 0.4 + 0.15 * Math.sin(now / 120);
      ctx.fillStyle = `rgba(255,80,40,${heat})`;
      ctx.beginPath(); ctx.arc(-this.r * 0.35, -this.r * 0.1, 4, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc( this.r * 0.0,   this.r * 0.35, 5, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc( this.r * 0.35, -this.r * 0.05, 4, 0, TAU); ctx.fill();
      ctx.fillStyle = '#fff6c9';
      ctx.beginPath(); ctx.arc(-this.r * 0.35, -this.r * 0.1, 1.5, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc( this.r * 0.0,   this.r * 0.35, 1.5, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc( this.r * 0.35, -this.r * 0.05, 1.5, 0, TAU); ctx.fill();
    } else if (this.type === 'brute') {
      ctx.fillStyle = flash ? '#d8d8d8' : '#3d5a26';
      ctx.strokeStyle = '#0f0a1a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-this.r * 0.55, -this.r * 0.2);
      ctx.lineTo( this.r * 0.55, -this.r * 0.2);
      ctx.lineTo( this.r * 0.4,   this.r * 0.35);
      ctx.lineTo(-this.r * 0.4,   this.r * 0.35);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#c0c0c8';
      for (const [rx, ry] of [
        [-this.r * 0.45, -this.r * 0.1],
        [ this.r * 0.45, -this.r * 0.1],
        [-this.r * 0.3,   this.r * 0.25],
        [ this.r * 0.3,   this.r * 0.25],
      ] as const) {
        ctx.beginPath(); ctx.arc(rx, ry, 1.7, 0, TAU); ctx.fill();
      }
      ctx.fillStyle = bodyColor;
      ctx.strokeStyle = '#0f0a1a';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(-this.r * 0.95, -this.r * 0.45, this.r * 0.32, 0, TAU); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc( this.r * 0.95, -this.r * 0.45, this.r * 0.32, 0, TAU); ctx.fill(); ctx.stroke();
    } else if (this.type === 'boss') {
      ctx.fillStyle = '#f5e8c8';
      ctx.strokeStyle = '#0f0a1a';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(-this.r * 0.95, -this.r * 0.5);
      ctx.lineTo(-this.r * 1.25, -this.r * 1.1);
      ctx.lineTo(-this.r * 0.65, -this.r * 0.6);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo( this.r * 0.95, -this.r * 0.5);
      ctx.lineTo( this.r * 1.25, -this.r * 1.1);
      ctx.lineTo( this.r * 0.65, -this.r * 0.6);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#2a3a18';
      ctx.beginPath();
      ctx.moveTo(-this.r * 0.45, -this.r * 0.15);
      ctx.lineTo( this.r * 0.45, -this.r * 0.15);
      ctx.lineTo( this.r * 0.35,  this.r * 0.4);
      ctx.lineTo(-this.r * 0.35,  this.r * 0.4);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#5a7a3c';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-this.r * 0.4, this.r * 0.05); ctx.lineTo(this.r * 0.4, this.r * 0.05); ctx.stroke();
    }

    const hr = this.r * (this.type === 'brute' ? 0.55 : this.type === 'boss' ? 0.6 : 0.68);
    ctx.fillStyle = flash ? '#ffffff' : lighten(this.color, 12);
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(this.r * 0.35, 0, hr, 0, TAU); ctx.fill(); ctx.stroke();

    ctx.fillStyle = '#1a0a0a';
    ctx.beginPath(); ctx.ellipse(this.r * 0.7, hr * 0.15, hr * 0.35, hr * 0.2, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.rect(this.r * 0.55 + i * 5, hr * 0.15 - 3, 3, 6);
      ctx.fill();
    }

    const eyeR = this.type === 'boss' ? hr * 0.28 : hr * 0.22;
    ctx.fillStyle = this.eye;
    ctx.beginPath(); ctx.arc(this.r * 0.55, -hr * 0.25, eyeR, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(this.r * 0.58, -hr * 0.30, hr * 0.08, 0, TAU); ctx.fill();
    if (this.type === 'boss') {
      ctx.fillStyle = this.eye;
      ctx.beginPath(); ctx.arc(this.r * 0.15, -hr * 0.25, eyeR * 0.85, 0, TAU); ctx.fill();
      ctx.strokeStyle = '#0f0a1a';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(this.r * 0.18, -hr * 0.30, hr * 0.07, 0, TAU); ctx.fill();
      const pulse = 0.5 + 0.5 * Math.sin(now / 220);
      ctx.fillStyle = `rgba(255,189,46,${0.45 * pulse})`;
      ctx.beginPath(); ctx.arc(this.r * 0.55, -hr * 0.25, eyeR * 1.7, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc(this.r * 0.15, -hr * 0.25, eyeR * 1.5, 0, TAU); ctx.fill();
    }

    if (this.type === 'boss') {
      ctx.fillStyle = '#f5e8c8';
      ctx.strokeStyle = '#0f0a1a';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(this.r * 0.15, -hr * 0.85);
      ctx.quadraticCurveTo(this.r * 0.25, -hr * 1.6, this.r * 0.5, -hr * 1.65);
      ctx.lineTo(this.r * 0.55, -hr * 0.8);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(this.r * 0.55, -hr * 0.8);
      ctx.quadraticCurveTo(this.r * 0.85, -hr * 1.55, this.r * 1.0, -hr * 1.35);
      ctx.lineTo(this.r * 0.85, -hr * 0.6);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#d8c098';
      ctx.beginPath();
      ctx.moveTo(this.r * 0.32, -hr * 0.95);
      ctx.lineTo(this.r * 0.4,  -hr * 1.2);
      ctx.lineTo(this.r * 0.45, -hr * 0.95);
      ctx.closePath(); ctx.fill(); ctx.stroke();
    }

    if (this.type === 'spitter') {
      ctx.fillStyle = '#ffbd2e';
      ctx.beginPath(); ctx.arc(this.r * 0.75, hr * 0.35, 5, 0, TAU); ctx.fill();
      ctx.strokeStyle = '#0f0a1a';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#8fcf3f';
      const drop = 2 + Math.sin(now / 300) * 1;
      ctx.beginPath(); ctx.ellipse(this.r * 0.85, hr * 0.35 + drop, 1.5, 3, 0, 0, TAU); ctx.fill();
    }
    if (this.type === 'exploder') {
      const fp = this.fusing ? 1 - Math.max(0, this.fuseT) / (ZTYPES.exploder.fuse ?? 600) : 0;
      ctx.fillStyle = this.fusing ? '#ffffff' : '#ffbd2e';
      const fr = 4 + fp * 3;
      ctx.beginPath(); ctx.arc(0, -this.r * 0.7, fr, 0, TAU); ctx.fill();
      if (this.fusing) {
        ctx.strokeStyle = '#ff6b6b';
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(0, -this.r * 0.7, 8 + fp * 4, 0, TAU); ctx.stroke();
        if (Math.random() < 0.6 + fp * 0.3) {
          game.particles.push(new Particle(x, y - this.r * 0.7, {
            vx: rand(-30, 30), vy: rand(-50, -10),
            life: 0.25, r: rand(1.5, 2.8),
            color: choice(['#ffbd2e', '#ff6b6b', '#fff6c9']), fade: true,
          }));
        }
      }
    }

    ctx.restore();

    const bw = this.r * 2, bh = this.type === 'boss' ? 8 : 4;
    const bx = x - bw / 2;
    const by = y - this.r - (this.type === 'boss' ? 14 : 10);
    if (this.type === 'boss') {
      drawHPBar(ctx, bx, by, bw, bh, this.hp / this.maxHp, '#c73866');
      ctx.font = 'bold 14px Bangers, sans-serif';
      ctx.textAlign = 'center';
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#0f0a1a';
      const name = this.elite ? 'ELITE BOSS' : 'BOSS';
      ctx.strokeText(name, x, by - 4);
      ctx.fillStyle = this.elite ? '#c881ff' : '#ffbd2e';
      ctx.fillText(name, x, by - 4);
    } else if (this.hp < this.maxHp || this.elite || this.type === 'brute') {
      drawHPBar(ctx, bx, by, bw, bh, this.hp / this.maxHp, this.elite ? '#c881ff' : '#c73866');
    }
  }
}
