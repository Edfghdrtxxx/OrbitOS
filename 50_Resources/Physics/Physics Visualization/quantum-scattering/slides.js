/* slides.js — per-slide live visualizations.
 *
 * Lifecycle: every controller returns an object with
 *   { redraw(), pause(), resume() }
 * `redraw` is called on slider changes AND on ResizeObserver hits, so the canvas
 * always reflects current state even if RAF is throttled. `pause` cancels all
 * animation frames; `resume` restarts them. Slide enter calls `resume`, slide
 * leave calls `pause`. Controllers are initialised once per slide.
 */
(function () {
  'use strict';

  const { wellV, barrierV, shellBarrierV, solveRadial, normalizeAsymptotic,
          phaseShiftL0, scatteringLength, tangentAt, breitWigner } = Physics;
  const { frame, curve, stepCurve, vLine, hLine, legend, linspace } = Plot;

  /* ============ helpers ============ */
  function bindRange(el, onInput) {
    const out = el.parentElement.querySelector('.v');
    function update() {
      const v = parseFloat(el.value);
      if (out) out.textContent = (el.dataset.fmt ? formatFmt(el.dataset.fmt, v) : v.toFixed(2));
      onInput(v);
    }
    el.addEventListener('input', update);
    update();
  }
  function formatFmt(fmt, v) {
    const d = parseInt(fmt.replace(/[^\d]/g, ''), 10) || 2;
    return v.toFixed(d);
  }

  // Attach ResizeObservers to every canvas in the slide → redraw on any size change.
  function watchResize(slide, redraw) {
    if (typeof ResizeObserver === 'undefined') return;
    const canvases = slide.querySelectorAll('canvas');
    const ro = new ResizeObserver(() => redraw());
    canvases.forEach(c => ro.observe(c));
    return ro;
  }

  /* ============ Slide 1: Cover — miniature Breit-Wigner loop ============ */
  function initCover(slide) {
    const c = slide.querySelector('canvas[data-role="cover"]');
    if (!c) return { redraw(){}, pause(){}, resume(){} };
    const Es = linspace(0, 6, 200);
    let t = 0, raf = 0;
    function redraw() {
      const E0 = 3 + 0.4 * Math.sin(2 * Math.PI * t);
      const G = 0.25;
      const f = frame(c, {
        xRange: [Es[0], Es[Es.length - 1]], yRange: [-Math.PI, Math.PI],
        xLabel: 'E', yLabel: 'δ(E)', title: 'Breit-Wigner resonance',
        xTicks: 6, yTicks: 4,
      });
      const ds = Es.map(E => breitWigner(E, E0, G, 0));
      curve(f, Array.from(Es), ds, { color: f.t.accent, width: 2.4 });
      vLine(f, E0, { color: f.t.bad, dash: [4, 4] });
    }
    function tick() {
      t += 0.005; if (t > 1) t -= 1;
      redraw();
      raf = requestAnimationFrame(tick);
    }
    return {
      redraw,
      pause:  () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } },
      resume: () => { if (!raf) tick(); },
    };
  }

  /* ============ Slide 2: Partial-wave framework ============ */
  function initPartialWave(slide) {
    const c = slide.querySelector('canvas[data-role="pw"]');
    const sD = slide.querySelector('input[data-p="delta"]');
    let delta = 0.8;
    let t = 0, raf = 0;
    const xs = linspace(0.05, 18, 400);

    function redraw() {
      const f = frame(c, {
        xRange: [0, xs[xs.length - 1]], yRange: [-1.6, 1.6],
        xLabel: 'kr', yLabel: 'u(r)', title: 'Free wave vs. wave after scatterer   (δ = ' + delta.toFixed(2) + ')',
        xTicks: 6, yTicks: 4,
      });
      const ps = 2 * Math.PI * t;
      const free    = Array.from(xs, x => Math.sin(x + ps));
      const shifted = Array.from(xs, x => Math.sin(x + delta + ps));
      curve(f, Array.from(xs), free,    { color: f.t.good, width: 1.5, dash: [5, 4] });
      curve(f, Array.from(xs), shifted, { color: f.t.accent, width: 2.2 });
      const xMark = 10;
      f.ctx.strokeStyle = f.t.text1; f.ctx.lineWidth = 1;
      f.ctx.beginPath();
      f.ctx.moveTo(f.xToPx(xMark),         f.yToPx(1.2));
      f.ctx.lineTo(f.xToPx(xMark + delta), f.yToPx(1.2));
      f.ctx.stroke();
      f.ctx.fillStyle = f.t.text1;
      f.ctx.font = '12px "Latin Modern Roman", Georgia, serif';
      f.ctx.textAlign = 'center';
      f.ctx.fillText('δ', f.xToPx(xMark + delta / 2), f.yToPx(1.35));
      legend(f, [
        { color: f.t.good,   label: 'free wave', dash: [5, 4] },
        { color: f.t.accent, label: 'with phase shift' },
      ]);
    }
    function tick() {
      t += 0.004; if (t > 1) t -= 1;
      redraw();
      raf = requestAnimationFrame(tick);
    }
    bindRange(sD, v => { delta = v; redraw(); });

    return {
      redraw,
      pause:  () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } },
      resume: () => { if (!raf) tick(); },
    };
  }

  /* ============ Slide 3: Breit-Wigner resonance ============ */
  function initBreitWigner(slide) {
    const c1 = slide.querySelector('canvas[data-role="phase"]');
    const c2 = slide.querySelector('canvas[data-role="sigma"]');
    const sE0 = slide.querySelector('input[data-p="E0"]');
    const sG  = slide.querySelector('input[data-p="G"]');
    const sBg = slide.querySelector('input[data-p="bg"]');
    const sE  = slide.querySelector('input[data-p="E"]');
    const btn = slide.querySelector('button[data-role="sweep"]');

    const st = { E0: 3.0, G: 0.3, bg: 0, E: 1.0, sweeping: false, rafId: 0 };
    const Es = linspace(0.2, 6.0, 240);

    function redraw() {
      const f1 = frame(c1, {
        xRange: [Es[0], Es[Es.length - 1]], yRange: [-Math.PI, Math.PI],
        xLabel: 'Energy  E', yLabel: 'δ(E)', title: 'Phase shift',
        xTicks: 6, yTicks: 4,
      });
      const deltas = Es.map(E => breitWigner(E, st.E0, st.G, st.bg));
      curve(f1, Es, deltas, { color: f1.t.accent, width: 2.2 });
      vLine(f1, st.E0, { color: f1.t.bad, dash: [4, 4], label: 'E₀' });
      hLine(f1, st.bg, { color: f1.t.text3, dash: [2, 4] });
      vLine(f1, st.E,  { color: f1.t.good, width: 1.5 });
      legend(f1, [
        { color: f1.t.accent, label: 'δ(E)' },
        { color: f1.t.bad,    label: 'E₀', dash: [4, 4] },
      ]);

      const f2 = frame(c2, {
        xRange: [Es[0], Es[Es.length - 1]], yRange: [0, 1.05],
        xLabel: 'Energy  E', yLabel: 'sin²(δ − δ_bg)', title: 'Cross-section shape',
        xTicks: 6, yTicks: 4,
      });
      const sig = Es.map(E => {
        const d = breitWigner(E, st.E0, st.G, st.bg) - st.bg;
        const s = Math.sin(d); return s * s;
      });
      curve(f2, Es, sig, { color: f2.t.accent, width: 2.2 });
      vLine(f2, st.E0, { color: f2.t.bad, dash: [4, 4], label: 'E₀' });
      vLine(f2, st.E,  { color: f2.t.good });
      hLine(f2, 0.5, { color: f2.t.text3, dash: [2, 4] });
    }

    function tick() {
      st.E += 0.012; if (st.E > 6.0) st.E = 0.2;
      sE.value = st.E;
      sE.dispatchEvent(new Event('input'));
      st.rafId = requestAnimationFrame(tick);
    }
    function onSweep() {
      st.sweeping = !st.sweeping;
      btn.classList.toggle('on', st.sweeping);
      btn.textContent = st.sweeping ? 'Pause sweep' : 'Auto-sweep E';
      if (st.sweeping) tick(); else { cancelAnimationFrame(st.rafId); st.rafId = 0; }
    }

    bindRange(sE0, v => { st.E0 = v; redraw(); });
    bindRange(sG,  v => { st.G  = v; redraw(); });
    bindRange(sBg, v => { st.bg = v; redraw(); });
    bindRange(sE,  v => { st.E  = v; redraw(); });
    btn.addEventListener('click', onSweep);

    return {
      redraw,
      pause:  () => { if (st.rafId) { cancelAnimationFrame(st.rafId); st.rafId = 0; } },
      resume: () => { redraw(); if (st.sweeping && !st.rafId) tick(); },
    };
  }

  /* ============ Slide 4: Square-well phase shift ============ */
  function initWellPhase(slide) {
    const cPsi   = slide.querySelector('canvas[data-role="psi"]');
    const cDelta = slide.querySelector('canvas[data-role="delta"]');
    const sE = slide.querySelector('input[data-p="E"]');
    const sD = slide.querySelector('input[data-p="D"]');
    const sW = slide.querySelector('input[data-p="W"]');
    const sL = slide.querySelector('input[data-p="L"]');

    const st = { E: 1.0, D: 5.0, W: 1.0, L: 0 };
    const xMax = 10, dx = 0.02;
    const Es = linspace(0.05, 5, 60);

    function redraw() {
      const V = wellV(st.D, st.W);
      const sol = solveRadial(V, st.E, st.L, xMax, dx);
      const psi  = normalizeAsymptotic(sol.u);
      const free = normalizeAsymptotic(sol.uFree);

      const f1 = frame(cPsi, {
        xRange: [0, xMax], yRange: [-6, 2.5],
        xLabel: 'r', yLabel: 'u(r), V(r)', title: 'Wavefunction inside and outside the well',
        xTicks: 5, yTicks: 5,
      });
      const Vxs = [0, st.W, st.W, xMax];
      const Vys = [-st.D, -st.D, 0, 0];
      stepCurve(f1, Vxs, Vys, { color: f1.t.bad, width: 2, fill: 'rgba(138,26,26,.08)' });
      curve(f1, Array.from(sol.x), Array.from(free), { color: f1.t.good, width: 1.6, dash: [5, 4] });
      curve(f1, Array.from(sol.x), Array.from(psi),  { color: f1.t.accent, width: 2.2 });
      vLine(f1, st.W, { color: f1.t.text3, dash: [2, 4] });
      legend(f1, [
        { color: f1.t.bad,    label: 'V(r)' },
        { color: f1.t.good,   label: 'free u', dash: [5, 4] },
        { color: f1.t.accent, label: 'with V' },
      ]);

      const deltas = [];
      for (let i = 0; i < Es.length; i++) {
        const s2 = solveRadial(V, Es[i], st.L, xMax, dx);
        deltas.push(phaseShiftL0(s2, Es[i]));
      }
      const f2 = frame(cDelta, {
        xRange: [Es[0], Es[Es.length - 1]], yRange: [-Math.PI / 2, Math.PI / 2],
        xLabel: 'E', yLabel: 'δ₀(E)', title: 'Phase shift (l=0 extraction)',
        xTicks: 5, yTicks: 4,
      });
      const xs2 = [], ys2 = [];
      for (let i = 0; i < Es.length; i++) {
        if (i > 0 && Math.abs(deltas[i] - deltas[i - 1]) > Math.PI / 2) {
          xs2.push(NaN); ys2.push(NaN);
        }
        xs2.push(Es[i]); ys2.push(deltas[i]);
      }
      curve(f2, xs2, ys2, { color: f2.t.accent, width: 2 });
      vLine(f2, st.E, { color: f2.t.good });
      hLine(f2, 0, { color: f2.t.text3, dash: [2, 4] });
    }

    bindRange(sE, v => { st.E = v; redraw(); });
    bindRange(sD, v => { st.D = v; redraw(); });
    bindRange(sW, v => { st.W = v; redraw(); });
    bindRange(sL, v => { st.L = Math.round(v); redraw(); });

    return { redraw, pause(){}, resume: redraw };
  }

  /* ============ Slide 5: Scattering length ============ */
  function initScatLength(slide) {
    const cPsi = slide.querySelector('canvas[data-role="psi"]');
    const cAs  = slide.querySelector('canvas[data-role="as"]');
    const sD = slide.querySelector('input[data-p="D"]');
    const sW = slide.querySelector('input[data-p="W"]');
    const btn = slide.querySelector('button[data-role="sweep"]');

    const st = { D: 2.0, W: 1.0, sweeping: false, rafId: 0 };
    const xMax = 8, dx = 0.01;
    const Eeps = 1e-3;
    const Ds = linspace(0.01, 12, 200);

    let asCache = [];
    function recomputeCache() {
      asCache = new Array(Ds.length);
      for (let i = 0; i < Ds.length; i++) {
        const V = wellV(Ds[i], st.W);
        const sol = solveRadial(V, Eeps, 0, xMax, dx);
        asCache[i] = scatteringLength(sol, st.W);
      }
    }

    function redraw() {
      const V = wellV(st.D, st.W);
      const sol = solveRadial(V, Eeps, 0, xMax, dx);
      const psi = normalizeAsymptotic(sol.u);
      const tan = tangentAt({ x: sol.x, u: psi }, xMax * 0.8);

      const f1 = frame(cPsi, {
        xRange: [-1, xMax], yRange: [-2, 2],
        xLabel: 'r', yLabel: 'u(r)', title: 'E → 0 wavefunction and tangent',
        xTicks: 6, yTicks: 4,
      });
      const Vxs = [0, st.W, st.W, xMax];
      const Vmax = 1.8, Vscale = Vmax / Math.max(1, st.D);
      const Vys = [-st.D * Vscale, -st.D * Vscale, 0, 0];
      stepCurve(f1, Vxs, Vys, { color: f1.t.bad, width: 2, fill: 'rgba(138,26,26,.08)' });
      curve(f1, Array.from(sol.x), Array.from(psi), { color: f1.t.accent, width: 2.2 });
      const xsLine = linspace(-1, xMax, 2);
      const ysLine = xsLine.map(x => tan.slope * x + tan.intercept);
      curve(f1, Array.from(xsLine), ysLine, { color: '#c08500', width: 1.5, dash: [5, 4] });
      const aS = tan.xs;
      if (isFinite(aS) && aS > -1 && aS < xMax) {
        vLine(f1, aS, { color: '#c08500', label: 'a = ' + aS.toFixed(2) });
        f1.ctx.save();
        f1.ctx.fillStyle = '#c08500';
        f1.ctx.beginPath(); f1.ctx.arc(f1.xToPx(aS), f1.yToPx(0), 4, 0, Math.PI * 2); f1.ctx.fill();
        f1.ctx.restore();
      }
      hLine(f1, 0, { color: f1.t.text2 });
      legend(f1, [
        { color: f1.t.bad,    label: 'V(r)' },
        { color: f1.t.accent, label: 'u(r)' },
        { color: '#c08500',   label: 'tangent', dash: [5, 4] },
      ]);

      const f2 = frame(cAs, {
        xRange: [0, 12], yRange: [-8, 8],
        xLabel: 'Well depth  D', yLabel: 'a(D)', title: 'Scattering length vs depth',
        xTicks: 6, yTicks: 4,
      });
      const cx = [], cy = [];
      for (let i = 0; i < Ds.length; i++) {
        const a = asCache[i];
        if (!isFinite(a) || Math.abs(a) > 20) { cx.push(NaN); cy.push(NaN); }
        else { cx.push(Ds[i]); cy.push(a); }
      }
      curve(f2, cx, cy, { color: f2.t.accent, width: 2 });
      hLine(f2, 0, { color: f2.t.text3, dash: [2, 4] });
      vLine(f2, st.D, { color: f2.t.good });
    }

    function tick() {
      let v = parseFloat(sD.value) + 0.04;
      if (v > 12) v = 0.1;
      sD.value = v;
      sD.dispatchEvent(new Event('input'));
      st.rafId = requestAnimationFrame(tick);
    }

    bindRange(sD, v => { st.D = v; redraw(); });
    bindRange(sW, v => { st.W = v; recomputeCache(); redraw(); });
    btn.addEventListener('click', () => {
      st.sweeping = !st.sweeping;
      btn.classList.toggle('on', st.sweeping);
      btn.textContent = st.sweeping ? 'Pause D sweep' : 'Auto-sweep D';
      if (st.sweeping) tick(); else { cancelAnimationFrame(st.rafId); st.rafId = 0; }
    });

    recomputeCache();
    return {
      redraw,
      pause:  () => { if (st.rafId) { cancelAnimationFrame(st.rafId); st.rafId = 0; } },
      resume: () => { redraw(); if (st.sweeping && !st.rafId) tick(); },
    };
  }

  /* ============ Slide 6: Shell-barrier resonance ============ */
  function initBarrierResonance(slide) {
    const cPsi  = slide.querySelector('canvas[data-role="psi"]');
    const cAmp  = slide.querySelector('canvas[data-role="amp"]');
    const sE = slide.querySelector('input[data-p="E"]');
    const sH = slide.querySelector('input[data-p="H"]');
    const sW = slide.querySelector('input[data-p="W1"]');
    const sB = slide.querySelector('input[data-p="B"]');
    const sL = slide.querySelector('input[data-p="L"]');
    const btn = slide.querySelector('button[data-role="sweep"]');

    const st = { E: 1.617, H: 5.0, W1: 2.0, B: 1.0, L: 0, sweeping: false, rafId: 0 };
    const xMax = 10, dx = 0.02;
    const Es = linspace(0.1, 4.5, 110);

    function insideRatio(V, E, L, W1) {
      const sol = solveRadial(V, E, L, xMax, dx);
      let out = 1e-30; const from = Math.floor(sol.x.length * 0.6);
      for (let i = from; i < sol.x.length; i++) { const a = Math.abs(sol.u[i]); if (a > out) out = a; }
      let ins = 0;
      for (let i = 0; i < sol.x.length; i++) {
        if (sol.x[i] > W1) break;
        const a = Math.abs(sol.u[i]); if (a > ins) ins = a;
      }
      return ins / out;
    }

    function redraw() {
      const V = shellBarrierV(st.H, st.W1, st.B);
      const sol = solveRadial(V, st.E, st.L, xMax, dx);
      const psi = normalizeAsymptotic(sol.u);

      const f1 = frame(cPsi, {
        xRange: [0, xMax], yRange: [-12, 12],
        xLabel: 'r', yLabel: 'u(r)', title: 'Wavefunction — inside balloons at resonance',
        xTicks: 5, yTicks: 4,
      });
      const Hscale = Math.min(10, 6 * st.H / 5);
      const W2 = st.W1 + st.B;
      const Vxs = [0, st.W1, st.W1, W2, W2, xMax];
      const Vys = [0, 0, Hscale, Hscale, 0, 0];
      stepCurve(f1, Vxs, Vys, { color: f1.t.bad, width: 2, fill: 'rgba(138,26,26,.08)' });
      curve(f1, Array.from(sol.x), Array.from(psi), { color: f1.t.accent, width: 2.2 });
      vLine(f1, st.W1, { color: f1.t.text3, dash: [2, 4] });
      vLine(f1, W2,    { color: f1.t.text3, dash: [2, 4] });
      legend(f1, [
        { color: f1.t.bad,    label: 'V(r) shell' },
        { color: f1.t.accent, label: 'u(r)' },
      ]);

      const ratios = [];
      for (let i = 0; i < Es.length; i++) ratios.push(insideRatio(V, Es[i], st.L, st.W1));
      const rmax = Math.max.apply(null, ratios);
      const ymax = Math.min(30, Math.max(3, rmax * 1.15));
      const f2 = frame(cAmp, {
        xRange: [Es[0], Es[Es.length - 1]], yRange: [0, ymax],
        xLabel: 'E', yLabel: 'inside / outside amplitude', title: 'Resonance sharpens as H or B grows',
        xTicks: 5, yTicks: 4,
      });
      curve(f2, Array.from(Es), ratios, { color: f2.t.accent, width: 2 });
      vLine(f2, st.E, { color: f2.t.good });
      hLine(f2, 1, { color: f2.t.text3, dash: [2, 4] });
    }

    function tick() {
      let v = parseFloat(sE.value) + 0.008;
      if (v > 4.4) v = 0.15;
      sE.value = v;
      sE.dispatchEvent(new Event('input'));
      st.rafId = requestAnimationFrame(tick);
    }

    bindRange(sE, v => { st.E  = v; redraw(); });
    bindRange(sH, v => { st.H  = v; redraw(); });
    bindRange(sW, v => { st.W1 = v; redraw(); });
    bindRange(sB, v => { st.B  = v; redraw(); });
    bindRange(sL, v => { st.L  = Math.round(v); redraw(); });
    btn.addEventListener('click', () => {
      st.sweeping = !st.sweeping;
      btn.classList.toggle('on', st.sweeping);
      btn.textContent = st.sweeping ? 'Pause E sweep' : 'Auto-sweep E';
      if (st.sweeping) tick(); else { cancelAnimationFrame(st.rafId); st.rafId = 0; }
    });

    return {
      redraw,
      pause:  () => { if (st.rafId) { cancelAnimationFrame(st.rafId); st.rafId = 0; } },
      resume: () => { redraw(); if (st.sweeping && !st.rafId) tick(); },
    };
  }

  /* ============ Lifecycle ============ */
  const initMap = {
    'cover':             initCover,
    'partial-wave':      initPartialWave,
    'breit-wigner':      initBreitWigner,
    'well-phase':        initWellPhase,
    'scat-length':       initScatLength,
    'barrier-resonance': initBarrierResonance,
  };

  let current = null;
  function activate(slide) {
    if (current && current.slide === slide) return;
    if (current && current.ctrl && current.ctrl.pause) current.ctrl.pause();
    const key = slide.dataset.kind;
    if (!key) { current = { slide, ctrl: null }; return; }
    let ctrl = slide._ctrl;
    if (!ctrl) {
      const fn = initMap[key];
      if (fn) {
        ctrl = fn(slide);
        slide._ctrl = ctrl;
        watchResize(slide, () => { if (ctrl && ctrl.redraw) ctrl.redraw(); });
      }
    }
    current = { slide, ctrl };
    if (ctrl && ctrl.resume) ctrl.resume();
  }

  function setup() {
    const deck = document.querySelector('.deck');
    if (!deck) return;
    const slides = Array.from(deck.querySelectorAll('.slide'));

    function watch() {
      for (const s of slides) { if (s.classList.contains('is-active')) { activate(s); return; } }
    }
    watch();
    const obs = new MutationObserver(watch);
    slides.forEach(s => obs.observe(s, { attributes: true, attributeFilter: ['class'] }));

    window.addEventListener('resize', () => {
      if (current && current.ctrl && current.ctrl.redraw) current.ctrl.redraw();
    });
  }

  if (document.readyState !== 'loading') setup();
  else document.addEventListener('DOMContentLoaded', setup);
})();
