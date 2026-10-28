/* Spectrum panel (Canvas 2D): what survives the trip to the observer, and what is scattered toward them.
   Classic script; index.html calls window.drawSpectrum(canvas, RS, data). */
(function (root) {
  'use strict';

  const INK = '#1f2937', MUTED = '#6b7280', GRID = '#e5e7eb', AXIS = '#9ca3af';
  const X0 = 380, X1 = 740;

  function setup(canvas) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    }
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    return { ctx, w, h };
  }

  function panel(ctx, box, yMax, yTicks, title, yLabel) {
    const { x, y, w, h } = box;
    ctx.font = '600 12.5px ui-sans-serif, system-ui, -apple-system, sans-serif';
    ctx.fillStyle = INK; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(title, x, y - 10);
    ctx.font = '11px ui-sans-serif, system-ui, sans-serif';
    ctx.strokeStyle = GRID; ctx.lineWidth = 1; ctx.fillStyle = MUTED;
    for (const t of yTicks) {
      const yy = y + h - t / yMax * h;
      ctx.beginPath(); ctx.moveTo(x, Math.round(yy) + 0.5); ctx.lineTo(x + w, Math.round(yy) + 0.5); ctx.stroke();
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      ctx.fillText(t % 1 === 0 ? t.toFixed(0) : t.toFixed(1), x - 6, yy);
    }
    ctx.save(); ctx.translate(x - 34, y + h / 2); ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(yLabel, 0, 0); ctx.restore();
    ctx.strokeStyle = AXIS;
    ctx.beginPath(); ctx.moveTo(x, y + h + 0.5); ctx.lineTo(x + w, y + h + 0.5); ctx.stroke();
  }

  function xAxis(ctx, box) {
    ctx.font = '11px ui-sans-serif, system-ui, sans-serif';
    ctx.fillStyle = MUTED; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (let nm = 400; nm <= 700; nm += 50) {
      const xx = box.x + (nm - X0) / (X1 - X0) * box.w;
      ctx.fillText(nm, xx, box.y + box.h + 5);
    }
    ctx.fillText('wavelength (nm)', box.x + box.w / 2, box.y + box.h + 19);
  }

  function curve(ctx, box, f, yMax, n = 180) {
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const nm = X0 + (X1 - X0) * i / n;
      const xx = box.x + i / n * box.w, yy = box.y + box.h - Math.min(1.08, f(nm) / yMax) * box.h;
      i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy);
    }
  }

  // Spectral rainbow fill under f.
  function rainbowFill(ctx, box, f, yMax, alpha) {
    const step = 2;
    for (let px = 0; px < box.w; px += step) {
      const nm = X0 + (X1 - X0) * (px + step / 2) / box.w;
      const v = Math.min(1.08, f(nm) / yMax) * box.h;
      if (v <= 0.2) continue;
      const c = root.RS.wavelengthColor(nm).map(root.RS.encodeSRGB).map(q => Math.round(255 * q));
      ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;
      ctx.fillRect(box.x + px, box.y + box.h - v, step + 0.5, v);
    }
  }

  function interp(arr, nm) {
    const RS = root.RS;
    const x = (nm - RS.L0) / RS.DL - 0.5;
    const i = Math.max(0, Math.min(RS.NL - 2, Math.floor(x)));
    const f = Math.max(0, Math.min(1, x - i));
    return arr[i] * (1 - f) + arr[i + 1] * f;
  }

  // data: { params, T (direct transmittance, continuous fn), zenith (16-bin radiance), sunElevDeg }
  root.drawSpectrum = function (canvas, RS, data) {
    const { ctx, w, h } = setup(canvas);
    const left = 52, right = 16;
    const top = { x: left, y: 30, w: w - left - right, h: (h - 110) * 0.52 };
    const bot = { x: left, y: top.y + top.h + 50, w: w - left - right, h: (h - 110) * 0.48 };

    // ---- Top: direct sunlight, above the atmosphere vs at the observer ----
    const yMax = 2.2;
    panel(ctx, top, yMax, [0, 0.5, 1, 1.5, 2], 'Direct sunlight: above the atmosphere vs. reaching you', 'W m⁻² nm⁻¹');
    const ground = nm => RS.solarAt(nm) * data.T(nm);
    // When little light survives, also draw the same spectrum magnified so its shape stays readable.
    let gMax = 0;
    for (let nm = X0; nm <= X1; nm += 2) gMax = Math.max(gMax, ground(nm));
    let zoom = 1;
    if (gMax > 0 && gMax < 0.6) {                 // largest 1-2-5 step that keeps the peak below 1.8
      const raw = 1.8 / gMax, e = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / e;
      zoom = (m >= 5 ? 5 : m >= 2 ? 2 : 1) * e;
    }
    if (zoom > 1) {
      const z = nm => ground(nm) * zoom;
      rainbowFill(ctx, top, z, yMax, 0.35);
      curve(ctx, top, z, yMax); ctx.strokeStyle = '#b45309'; ctx.lineWidth = 1.3; ctx.setLineDash([2, 2]); ctx.stroke(); ctx.setLineDash([]);
    }
    rainbowFill(ctx, top, ground, yMax, 0.9);
    curve(ctx, top, nm => RS.solarAt(nm), yMax); ctx.strokeStyle = '#9ca3af'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]); ctx.stroke(); ctx.setLineDash([]);
    curve(ctx, top, ground, yMax); ctx.strokeStyle = INK; ctx.lineWidth = 1.6; ctx.stroke();
    ctx.font = '11px ui-sans-serif, system-ui, sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'top';
    ctx.fillStyle = MUTED; ctx.fillText('dashed: top of atmosphere (ASTM G-173)', top.x + top.w, top.y + 2);
    ctx.fillStyle = INK; ctx.fillText('filled: at your eye', top.x + top.w, top.y + 16);
    if (zoom > 1) {
      const zs = zoom >= 1e6 ? zoom.toExponential(0).replace('e+', ' × 10^') : Math.round(zoom).toLocaleString('en');
      ctx.fillStyle = '#b45309'; ctx.fillText(`pale, dotted: the same, magnified ×${zs} to show its shape`, top.x + top.w, top.y + 30);
    }

    // ---- Bottom: scattering strength vs. zenith skylight spectrum ----
    panel(ctx, bot, 1.05, [0, 0.5, 1], 'Why the scattered light is blue', 'relative');
    xAxis(ctx, bot);
    const bRel = nm => RS.betaRayleigh(nm, data.params) / RS.betaRayleigh(X0, data.params);
    const zMax = Math.max(...data.zenith) || 1;
    const sky = nm => interp(data.zenith, nm) / zMax;
    if (zMax > 0) {
      curve(ctx, bot, sky, 1.05);
      ctx.lineTo(bot.x + bot.w, bot.y + bot.h); ctx.lineTo(bot.x, bot.y + bot.h); ctx.closePath();
      ctx.fillStyle = 'rgba(59,130,246,0.14)'; ctx.fill();
      curve(ctx, bot, sky, 1.05); ctx.strokeStyle = '#2563eb'; ctx.lineWidth = 1.8; ctx.stroke();
    }
    if (data.params.rayleigh) {
      curve(ctx, bot, bRel, 1.05); ctx.strokeStyle = '#111827'; ctx.lineWidth = 1.4; ctx.setLineDash([5, 3]); ctx.stroke(); ctx.setLineDash([]);
    }
    ctx.font = '11px ui-sans-serif, system-ui, sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'top';
    ctx.fillStyle = '#111827'; ctx.fillText('dashed: Rayleigh scattering coefficient β(λ)/β(380 nm)', bot.x + bot.w, bot.y + 2);
    ctx.fillStyle = '#2563eb'; ctx.fillText('blue: zenith sky radiance (normalised)', bot.x + bot.w, bot.y + 16);
  };
})(window);
