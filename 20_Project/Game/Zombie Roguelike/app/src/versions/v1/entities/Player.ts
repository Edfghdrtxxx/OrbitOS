import { clamp, rand } from '../config/constants';
import type { UpgradeId } from '../config/upgrades';
import { getSkin } from '../config/skins';
import { sfx } from '../audio/sfx';
import { t } from '../i18n';
import { game, world, keys, mouse, shakeCam, collidesObstacle } from '../state';
import { drawShadow, drawHPBar } from '../render/primitives';
import { drawPlayerSprite } from '../render/playerSprite';
import { flashDamage, flashXP, flashPrePause, showBanner, showRunEnd } from '../shell/hooks';
import { Bullet } from './Bullet';
import { Particle } from './Particle';

export class Player {
  x: number;
  y: number;
  r = 18;
  angle = 0;

  private readonly _baseSpeed = 158;
  private readonly _baseMaxHp = 55;
  private readonly _baseMaxAmmo = 6;
  private readonly _baseFireRate = 0.28;
  private readonly _baseDamage = 7;
  private readonly _baseReload = 1.9;
  private readonly _baseBulletSpeed = 700;
  private readonly _baseBulletLife = 0.48;

  hp: number;
  ammo: number;
  reloading = false;
  reloadT = 0;
  fireCd = 0;
  walkPhase = 0;
  iFrames = 0;
  flashT = 0;

  dashCd = 0;
  dashT = 0;
  dashDx = 0;
  dashDy = 0;
  dashDuration = 0.16;
  dashCdMax = 2.9;
  dashSpeed = 480;

  level = 1;
  xp = 0;
  xpNeeded = 32;

  private regenAcc = 0;

  constructor() {
    this.x = world.w / 2;
    this.y = world.h / 2;
    this.hp = this.maxHp;
    this.ammo = this.maxAmmo;
  }

  private u(id: UpgradeId): number {
    return game.upgrades[id] ?? 0;
  }

  get speed(): number       { return this._baseSpeed * (1 + 0.06 * this.u('speed')); }
  get maxHp(): number       { return this._baseMaxHp + 10 * this.u('hp'); }
  get maxAmmo(): number     { return this._baseMaxAmmo + 3 * this.u('ammo'); }
  get fireRate(): number    { return this._baseFireRate / (1 + 0.09 * this.u('rof')); }
  get damage(): number      { return this._baseDamage * (1 + 0.12 * this.u('dmg')); }
  get reloadTime(): number  { return this._baseReload * Math.pow(0.88, this.u('reload')); }
  get bulletSpeed(): number { return this._baseBulletSpeed * (1 + 0.12 * this.u('eagle')); }
  get bulletLife(): number  { return this._baseBulletLife * (1 + 0.12 * this.u('eagle')); }
  get critChance(): number  { return 0.06 * this.u('crit'); }
  get pierce(): number      { return this.u('pierce'); }
  get explosive(): boolean  { return this.u('explode') > 0; }
  get doubleTap(): boolean  { return this.u('double') > 0; }
  get xpMul(): number       { return 1 + 0.07 * this.u('scholar'); }
  get vampHeal(): number    { return 1 * this.u('vamp'); }
  get regenRate(): number   { return 0.5 * this.u('regen'); }
  get thornsDmg(): number   { return 5 * this.u('thorns'); }

  update(dt: number): void {
    if (this.regenRate > 0 && this.hp < this.maxHp) {
      this.regenAcc += dt * this.regenRate;
      while (this.regenAcc >= 1) {
        this.hp = Math.min(this.maxHp, this.hp + 1);
        this.regenAcc -= 1;
      }
    }

    this.dashCd = Math.max(0, this.dashCd - dt);
    if (this.dashT > 0) {
      this.dashT -= dt;
      const nx = this.x + this.dashDx * this.dashSpeed * dt;
      const ny = this.y + this.dashDy * this.dashSpeed * dt;
      if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;
      if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;
      this.x = clamp(this.x, this.r, world.w - this.r);
      this.y = clamp(this.y, this.r, world.h - this.r);
      if (Math.random() < 0.7) {
        game.particles.push(new Particle(this.x, this.y, {
          vx: rand(-30, 30), vy: rand(-30, 30),
          life: 0.25, r: rand(4, 8), color: '#4ecdc4', fade: true,
        }));
      }
    } else {
      let mx = 0, my = 0;
      if (keys['w'] || keys['arrowup']) my -= 1;
      if (keys['s'] || keys['arrowdown']) my += 1;
      if (keys['a'] || keys['arrowleft']) mx -= 1;
      if (keys['d'] || keys['arrowright']) mx += 1;
      const mag = Math.hypot(mx, my);
      if (mag > 0) {
        mx /= mag; my /= mag;
        const nx = this.x + mx * this.speed * dt;
        const ny = this.y + my * this.speed * dt;
        if (!collidesObstacle(nx, this.y, this.r)) this.x = nx;
        if (!collidesObstacle(this.x, ny, this.r)) this.y = ny;
        this.x = clamp(this.x, this.r, world.w - this.r);
        this.y = clamp(this.y, this.r, world.h - this.r);
        this.walkPhase += dt * 14;
      } else {
        this.walkPhase *= 0.92;
      }
    }

    this.angle = Math.atan2(mouse.worldY - this.y, mouse.worldX - this.x);

    this.fireCd = Math.max(0, this.fireCd - dt);
    if (mouse.down && !this.reloading && this.ammo > 0 && this.fireCd <= 0) this.shoot();
    if (this.ammo <= 0 && !this.reloading) this.startReload();

    if (this.reloading) {
      this.reloadT -= dt;
      if (this.reloadT <= 0) {
        this.reloading = false;
        this.ammo = this.maxAmmo;
      }
    }
    this.iFrames = Math.max(0, this.iFrames - dt);
    this.flashT = Math.max(0, this.flashT - dt);
  }

  dash(): void {
    if (this.dashCd > 0 || this.dashT > 0) return;
    let mx = 0, my = 0;
    if (keys['w'] || keys['arrowup']) my -= 1;
    if (keys['s'] || keys['arrowdown']) my += 1;
    if (keys['a'] || keys['arrowleft']) mx -= 1;
    if (keys['d'] || keys['arrowright']) mx += 1;
    const mag = Math.hypot(mx, my);
    if (mag > 0) { mx /= mag; my /= mag; }
    else { mx = Math.cos(this.angle); my = Math.sin(this.angle); }
    this.dashDx = mx; this.dashDy = my;
    this.dashT = this.dashDuration;
    this.dashCd = this.dashCdMax;
    this.iFrames = Math.max(this.iFrames, this.dashDuration + 0.05);
    sfx('dash');
    for (let i = 0; i < 12; i++) {
      game.particles.push(new Particle(this.x, this.y, {
        vx: rand(-60, 60), vy: rand(-60, 60),
        life: 0.3, r: rand(3, 6), color: '#4ecdc4', fade: true,
      }));
    }
  }

  shoot(): void {
    this.fireCd = this.fireRate;
    this.ammo--;
    const muzX = this.x + Math.cos(this.angle) * 28;
    const muzY = this.y + Math.sin(this.angle) * 28;

    const shots = this.doubleTap ? 2 : 1;
    const perShotMul = this.doubleTap ? 0.55 : 1.0;
    for (let i = 0; i < shots; i++) {
      const spread = (Math.random() - 0.5) * (this.doubleTap ? 0.14 : 0.06);
      const a = this.angle + spread;
      const isCrit = Math.random() < this.critChance;
      const dmg = this.damage * perShotMul * (isCrit ? 2.5 : 1.0);
      game.bullets.push(new Bullet(muzX, muzY, a, this.bulletSpeed, dmg, {
        pierce: this.pierce,
        explosive: this.explosive,
        life: this.bulletLife,
        crit: isCrit,
      }));
    }
    for (let i = 0; i < 5; i++) {
      game.particles.push(new Particle(muzX, muzY, {
        vx: Math.cos(this.angle) * rand(120, 260) + rand(-40, 40),
        vy: Math.sin(this.angle) * rand(120, 260) + rand(-40, 40),
        life: 0.1, r: rand(3, 6),
        color: Math.random() < 0.5 ? '#ffbd2e' : '#fff6c9', fade: true,
      }));
    }
    shakeCam(1.5);
    sfx('shoot');
  }

  startReload(): void {
    if (this.reloading || this.ammo === this.maxAmmo) return;
    this.reloading = true;
    this.reloadT = this.reloadTime;
    sfx('reload');
  }

  hurt(dmg: number, _sourceX?: number, _sourceY?: number): void {
    if (this.iFrames > 0) return;
    this.hp = Math.max(0, this.hp - dmg);
    this.iFrames = 0.55;
    this.flashT = 0.25;
    shakeCam(8);
    flashDamage();
    sfx('hurt');
    if (this.hp <= 0) {
      game.state = 'dead';
      sfx('gameover');
      showRunEnd(false);
    }
  }

  gainXP(amt: number): void {
    this.xp += amt * this.xpMul;
    let leveled = false;
    while (this.xp >= this.xpNeeded) {
      this.xp -= this.xpNeeded;
      this.level++;
      this.xpNeeded = Math.floor(32 * Math.pow(1.6, this.level - 1));
      game.pendingLevelUps++;
      leveled = true;
    }
    if (leveled) {
      sfx('levelup');
      flashXP();
      showBanner(t('levelUp'), t('chooseYourPath'));
      flashPrePause();
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const x = this.x, y = this.y;
    drawShadow(ctx, x, y, this.r);
    const legBob = Math.sin(this.walkPhase) * 3;
    const bodyFlash = this.flashT > 0 && Math.floor(this.flashT * 30) % 2 === 0;
    const dashing = this.dashT > 0;
    const skin = getSkin(game.skinId);
    drawPlayerSprite(ctx, 0, 0, this.r, this.angle, skin, {
      legBob, bodyFlash, dashing, translateXY: [x, y],
    });
    const bw = 44, bh = 6;
    drawHPBar(ctx, x - bw / 2, y - this.r - 16, bw, bh, this.hp / this.maxHp, '#8fcf3f');
  }
}
