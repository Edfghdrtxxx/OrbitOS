import { TAU, lighten } from '../config/constants';
import type { SkinDef } from '../config/skins';

export interface PlayerSpriteOpts {
  legBob?: number;
  bodyFlash?: boolean;
  dashing?: boolean;
  translateXY?: [number, number];
}

export function drawPlayerSprite(
  ctx: CanvasRenderingContext2D,
  localX: number,
  localY: number,
  r: number,
  angle: number,
  skin: SkinDef,
  opts: PlayerSpriteOpts = {},
): void {
  const legBob = opts.legBob ?? 0;
  const bodyFlash = !!opts.bodyFlash;
  const dashing = !!opts.dashing;

  ctx.save();
  if (opts.translateXY) ctx.translate(opts.translateXY[0], opts.translateXY[1]);
  else ctx.translate(localX, localY);

  // Legs
  ctx.fillStyle = skin.legColor;
  ctx.strokeStyle = '#0f0a1a';
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.ellipse(-7, 8 + legBob, 6, 10, 0, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.ellipse( 7, 8 - legBob, 6, 10, 0, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#0f0a1a';
  ctx.beginPath(); ctx.ellipse(-7, 14 + legBob, 6, 4, 0, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.ellipse( 7, 14 - legBob, 6, 4, 0, 0, TAU); ctx.fill();

  ctx.rotate(angle);

  // Gun
  ctx.fillStyle = skin.gunColor;
  ctx.strokeStyle = '#0f0a1a';
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.rect(10, -4, 24, 8); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.rect(14, -7, 4, 3); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#5a5a6a';
  ctx.fillRect(32, -2, 3, 4);

  // Body
  const baseBody = bodyFlash ? '#ffffff' : dashing ? skin.dashColor : skin.bodyColor;
  ctx.fillStyle = baseBody;
  ctx.strokeStyle = '#0f0a1a';
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fill(); ctx.stroke();
  if (!bodyFlash) {
    ctx.strokeStyle = lighten(skin.bodyColor, 25);
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(0, 0, r - 3, -2.6, -1.0); ctx.stroke();
  }

  // Accessory
  ctx.lineWidth = 2.5;
  if (skin.accessory === 'strap') {
    ctx.strokeStyle = skin.accentColor;
    ctx.beginPath(); ctx.moveTo(-12, -8); ctx.lineTo(12, 8); ctx.stroke();
  } else if (skin.accessory === 'tape') {
    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(-r * 0.85, 4); ctx.lineTo(r * 0.85, 4); ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#0f0a1a';
    ctx.beginPath(); ctx.moveTo(-r * 0.85, 4); ctx.lineTo(r * 0.85, 4); ctx.stroke();
  } else if (skin.accessory === 'vest') {
    ctx.fillStyle = '#2a3818';
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 2;
    ctx.fillRect(-10, -8, 7, 10); ctx.strokeRect(-10, -8, 7, 10);
    ctx.fillRect(  3, -8, 7, 10); ctx.strokeRect(  3, -8, 7, 10);
  } else if (skin.accessory === 'studs') {
    ctx.fillStyle = '#c0c0c8';
    for (const [sx, sy] of [[-9, -6], [-3, -9], [5, -7], [10, -2], [-10, 4], [-2, 7], [7, 5]] as const) {
      ctx.beginPath(); ctx.arc(sx, sy, 1.7, 0, TAU); ctx.fill();
    }
    ctx.strokeStyle = '#5a2a2a';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(-r * 0.7, -2); ctx.lineTo(r * 0.7, 2); ctx.stroke();
  } else if (skin.accessory === 'pocket') {
    ctx.strokeStyle = '#9aa6b2';
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(0, r * 0.6); ctx.stroke();
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(-11, 1, 7, 7);
    ctx.fillStyle = '#7b68ee';
    ctx.beginPath();
    ctx.moveTo(-2, -r * 0.6);
    ctx.lineTo(2, -r * 0.6);
    ctx.lineTo(0, r * 0.4);
    ctx.closePath();
    ctx.fill();
  } else if (skin.accessory === 'sash') {
    ctx.strokeStyle = skin.accentColor;
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(-r * 0.85, -2); ctx.lineTo(r * 0.85, 4); ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#0f0a1a';
    ctx.beginPath(); ctx.moveTo(-r * 0.85, -2); ctx.lineTo(r * 0.85, 4); ctx.stroke();
  }

  // Head
  ctx.fillStyle = bodyFlash ? '#fff' : skin.headColor;
  ctx.strokeStyle = '#0f0a1a';
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(4, 0, 11, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#0f0a1a';
  ctx.beginPath(); ctx.arc(10, -1, 2, 0, TAU); ctx.fill();

  // Hair / hat
  if (skin.hairR > 0 && !skin.hat) {
    ctx.fillStyle = skin.hairColor;
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(0, -7, skin.hairR, 0, TAU); ctx.fill(); ctx.stroke();
  }
  if (skin.hat === 'gasmask') {
    ctx.fillStyle = '#1a1a1a';
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(4, -2, 11, 7, 0, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#7be3ff';
    ctx.beginPath(); ctx.arc(0, -2, 3, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(8, -2, 3, 0, TAU); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(1.2, -3, 0.9, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(9.2, -3, 0.9, 0, TAU); ctx.fill();
    ctx.fillStyle = '#3a3a3a';
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.rect(11, 2, 6, 5); ctx.fill(); ctx.stroke();
  } else if (skin.hat === 'helmet') {
    ctx.fillStyle = '#3d4a26';
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(4, -4, 12, Math.PI * 1.05, Math.PI * 1.95); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(-6, 0); ctx.lineTo(14, 0); ctx.stroke();
    ctx.fillStyle = '#ffbd2e';
    ctx.beginPath(); ctx.arc(6, -7, 1.6, 0, TAU); ctx.fill();
  } else if (skin.hat === 'mohawk') {
    ctx.fillStyle = skin.hairColor;
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 2;
    for (let i = -1; i <= 2; i++) {
      const sx = i * 3.5;
      ctx.beginPath();
      ctx.moveTo(sx - 2, -8);
      ctx.lineTo(sx, -16);
      ctx.lineTo(sx + 2, -8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  } else if (skin.hat === 'goggles') {
    ctx.strokeStyle = '#3a3a3a';
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(-6, -5); ctx.lineTo(13, -5); ctx.stroke();
    ctx.fillStyle = '#7be3ff';
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(0, -5, 3, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(9, -5, 3, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(1.2, -6, 0.9, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(10.2, -6, 0.9, 0, TAU); ctx.fill();
  } else if (skin.hat === 'mask') {
    ctx.fillStyle = '#0f0a1a';
    ctx.beginPath(); ctx.ellipse(5, 3, 9, 6, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = skin.accentColor;
    ctx.fillRect(-7, -7, 22, 3);
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 1;
    ctx.strokeRect(-7, -7, 22, 3);
    ctx.fillStyle = skin.accentColor;
    ctx.beginPath();
    ctx.moveTo(-7, -7);
    ctx.lineTo(-15, -2);
    ctx.lineTo(-13, 2);
    ctx.lineTo(-7, -4);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#0f0a1a';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  ctx.restore();
}
