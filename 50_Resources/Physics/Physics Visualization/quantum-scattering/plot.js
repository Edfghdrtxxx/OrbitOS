/* plot.js — tiny canvas-2D plotting kit using academic-paper theme tokens.
 * One function per slide redraws the whole canvas; no retained state.
 */
(function (global) {
  'use strict';

  function tokens(el) {
    const cs = getComputedStyle(el || document.documentElement);
    return {
      text1:  cs.getPropertyValue('--text-1').trim()  || '#0a0a0a',
      text2:  cs.getPropertyValue('--text-2').trim()  || '#333',
      text3:  cs.getPropertyValue('--text-3').trim()  || '#777',
      accent: cs.getPropertyValue('--accent').trim() || '#1a3a7a',
      bad:    cs.getPropertyValue('--bad').trim()    || '#8a1a1a',
      good:   cs.getPropertyValue('--good').trim()   || '#1a5a2a',
      border: cs.getPropertyValue('--border').trim() || 'rgba(0,0,0,.14)',
      surface: cs.getPropertyValue('--surface').trim() || '#fff',
    };
  }

  function setupHiDPI(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width  = Math.round(rect.width  * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, w: rect.width, h: rect.height };
  }

  /* ---------------- Axes + frame ---------------- */
  function frame(canvas, opts) {
    const o = opts || {};
    const pad = o.pad || { l: 54, r: 18, t: 18, b: 36 };
    const { ctx, w, h } = setupHiDPI(canvas);
    const t = tokens(canvas);
    const plotW = w - pad.l - pad.r;
    const plotH = h - pad.t - pad.b;

    const xRange = o.xRange || [0, 1];
    const yRange = o.yRange || [-1, 1];

    function xToPx(x) { return pad.l + (x - xRange[0]) / (xRange[1] - xRange[0]) * plotW; }
    function yToPx(y) { return pad.t + (1 - (y - yRange[0]) / (yRange[1] - yRange[0])) * plotH; }

    ctx.fillStyle = t.surface;
    ctx.fillRect(0, 0, w, h);

    // grid
    ctx.strokeStyle = t.border;
    ctx.lineWidth = 1;
    ctx.font = '11px "Latin Modern Roman", Georgia, serif';
    ctx.fillStyle = t.text3;

    const xTicks = o.xTicks || 6;
    const yTicks = o.yTicks || 5;
    for (let i = 0; i <= xTicks; i++) {
      const xv = xRange[0] + (xRange[1] - xRange[0]) * i / xTicks;
      const px = xToPx(xv);
      ctx.beginPath(); ctx.moveTo(px, pad.t); ctx.lineTo(px, pad.t + plotH); ctx.stroke();
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillText(formatTick(xv), px, pad.t + plotH + 4);
    }
    for (let j = 0; j <= yTicks; j++) {
      const yv = yRange[0] + (yRange[1] - yRange[0]) * j / yTicks;
      const py = yToPx(yv);
      ctx.beginPath(); ctx.moveTo(pad.l, py); ctx.lineTo(pad.l + plotW, py); ctx.stroke();
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      ctx.fillText(formatTick(yv), pad.l - 6, py);
    }

    // frame border
    ctx.strokeStyle = t.text2;
    ctx.lineWidth = 1.2;
    ctx.strokeRect(pad.l, pad.t, plotW, plotH);

    // axis labels
    ctx.fillStyle = t.text1;
    ctx.font = '13px "Latin Modern Roman", Georgia, serif';
    if (o.xLabel) {
      ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
      ctx.fillText(o.xLabel, pad.l + plotW / 2, h - 4);
    }
    if (o.yLabel) {
      ctx.save();
      ctx.translate(12, pad.t + plotH / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillText(o.yLabel, 0, 0);
      ctx.restore();
    }
    if (o.title) {
      ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.font = '600 13px "Latin Modern Roman", Georgia, serif';
      ctx.fillStyle = t.text1;
      ctx.fillText(o.title, pad.l + 6, pad.t + 4);
    }

    return { ctx: ctx, w: w, h: h, pad: pad, plotW: plotW, plotH: plotH,
             xRange: xRange, yRange: yRange, xToPx: xToPx, yToPx: yToPx, t: t };
  }

  function formatTick(v) {
    if (v === 0) return '0';
    const a = Math.abs(v);
    if (a >= 100) return v.toFixed(0);
    if (a >= 10)  return v.toFixed(1);
    if (a >= 1)   return v.toFixed(2);
    return v.toFixed(2);
  }

  /* ---------------- Curves ---------------- */
  function curve(f, xs, ys, opts) {
    const o = opts || {};
    const ctx = f.ctx;
    ctx.save();
    ctx.strokeStyle = o.color || f.t.accent;
    ctx.lineWidth   = o.width || 2;
    if (o.dash) ctx.setLineDash(o.dash);
    ctx.beginPath();
    let started = false;
    for (let i = 0; i < xs.length; i++) {
      const x = xs[i], y = ys[i];
      if (!isFinite(x) || !isFinite(y)) { started = false; continue; }
      const px = f.xToPx(x), py = f.yToPx(y);
      if (!started) { ctx.moveTo(px, py); started = true; }
      else          { ctx.lineTo(px, py); }
    }
    ctx.stroke();
    ctx.restore();
  }

  function stepCurve(f, xs, ys, opts) {
    const o = opts || {};
    const ctx = f.ctx;
    ctx.save();
    ctx.strokeStyle = o.color || f.t.bad;
    ctx.lineWidth   = o.width || 2;
    if (o.fill) {
      ctx.fillStyle = o.fill;
      ctx.beginPath();
      ctx.moveTo(f.xToPx(xs[0]), f.yToPx(0));
      for (let i = 0; i < xs.length - 1; i++) {
        ctx.lineTo(f.xToPx(xs[i]),     f.yToPx(ys[i]));
        ctx.lineTo(f.xToPx(xs[i + 1]), f.yToPx(ys[i]));
      }
      ctx.lineTo(f.xToPx(xs[xs.length - 1]), f.yToPx(0));
      ctx.closePath();
      ctx.fill();
    }
    ctx.beginPath();
    for (let i = 0; i < xs.length - 1; i++) {
      if (i === 0) ctx.moveTo(f.xToPx(xs[i]), f.yToPx(ys[i]));
      else         ctx.lineTo(f.xToPx(xs[i]), f.yToPx(ys[i]));
      ctx.lineTo(f.xToPx(xs[i + 1]), f.yToPx(ys[i]));
    }
    ctx.stroke();
    ctx.restore();
  }

  function vLine(f, x, opts) {
    const o = opts || {};
    const ctx = f.ctx;
    ctx.save();
    ctx.strokeStyle = o.color || f.t.text3;
    ctx.lineWidth   = o.width || 1;
    if (o.dash) ctx.setLineDash(o.dash);
    ctx.beginPath();
    ctx.moveTo(f.xToPx(x), f.pad.t);
    ctx.lineTo(f.xToPx(x), f.pad.t + f.plotH);
    ctx.stroke();
    if (o.label) {
      ctx.fillStyle = o.color || f.t.text3;
      ctx.font = '11px "Latin Modern Roman", Georgia, serif';
      ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillText(o.label, f.xToPx(x) + 4, f.pad.t + 4);
    }
    ctx.restore();
  }

  function hLine(f, y, opts) {
    const o = opts || {};
    const ctx = f.ctx;
    ctx.save();
    ctx.strokeStyle = o.color || f.t.text3;
    ctx.lineWidth   = o.width || 1;
    if (o.dash) ctx.setLineDash(o.dash);
    ctx.beginPath();
    ctx.moveTo(f.pad.l, f.yToPx(y));
    ctx.lineTo(f.pad.l + f.plotW, f.yToPx(y));
    ctx.stroke();
    ctx.restore();
  }

  function legend(f, items, opts) {
    const o = opts || {};
    const x0 = (o.x != null) ? f.pad.l + f.plotW - 150 + o.x : f.pad.l + f.plotW - 150;
    const y0 = (o.y != null) ? f.pad.t + 10 + o.y : f.pad.t + 10;
    const ctx = f.ctx;
    ctx.save();
    ctx.font = '12px "Latin Modern Roman", Georgia, serif';
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      const y = y0 + i * 18;
      ctx.strokeStyle = it.color;
      ctx.lineWidth = it.width || 2;
      if (it.dash) ctx.setLineDash(it.dash); else ctx.setLineDash([]);
      ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x0 + 28, y); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = f.t.text1;
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(it.label, x0 + 34, y);
    }
    ctx.restore();
  }

  /* ---------------- linspace ---------------- */
  function linspace(a, b, n) {
    const r = new Float64Array(n);
    for (let i = 0; i < n; i++) r[i] = a + (b - a) * i / (n - 1);
    return r;
  }

  global.Plot = {
    frame: frame,
    curve: curve,
    stepCurve: stepCurve,
    vLine: vLine,
    hLine: hLine,
    legend: legend,
    tokens: tokens,
    linspace: linspace,
  };
})(window);
