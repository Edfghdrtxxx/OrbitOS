/* slides.js — per-slide live visualizations.
 * Each controller is idempotent: it can be re-invoked safely on slide enter.
 * We hook into runtime's slide-change via a MutationObserver on `.is-active`.
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

  /* ============ Slide 3: Breit-Wigner resonance ============ */
  function initBreitWigner(slide) {
    const c1 = slide.querySelector('canvas[data-role="phase"]');
    const c2 = slide.querySelector('canvas[data-role="sigma"]');
    const sE0 = slide.querySelector('input[data-p="E0"]');
    const sG  = slide.querySelector('input[data-p="G"]');
    const sBg = slide.querySelector('input[data-p="bg"]');
    const sE  = slide.querySelector('input[data-p="E"]');
    const btn = slide.querySelector('button[data-role="sweep"]');

    let state = { E0: 3.0, G: 0.3, bg: 0, E: 1.0, sweeping: false, rafId: 0 };
    const Es = linspace(0.2, 6.0, 240);

    function redraw() {
      // δ(E) panel
      const f1 = frame(c1, {
        xRange: [Es[0], Es[Es.length - 1]],
        yRange: [-Math.PI, Math.PI],
        xLabel: 'Energy  E', yLabel: 'δ(E)', title: 'Phase shift',
        xTicks: 6, yTicks: 4,
      });
      const deltas = Es.map(E => breitWigner(E, state.E0, state.G, state.bg));
      curve(f1, Es, deltas, { color: f1.t.accent, width: 2.2 });
      vLine(f1, state.E0, { color: f1.t.bad, dash: [4, 4], label: 'E₀' });
      hLine(f1, state.bg, { color: f1.t.text3, dash: [2, 4] });
      vLine(f1, state.E,  { color: f1.t.good, width: 1.5 });
      legend(f1, [
        { color: f1.t.accent, label: 'δ(E)' },
        { color: f1.t.bad,    label: 'E₀',   dash: [4, 4] },
      ]);

      // sin²(δ−δ_bg) panel (partial-wave cross-section shape)
      const f2 = frame(c2, {
        xRange: [Es[0], Es[Es.length - 1]],
        yRange: [0, 1.05],
        xLabel: 'Energy  E', yLabel: 'sin²(δ − δ_bg)', title: 'Cross-section shape',
        xTicks: 6, yTicks: 4,
      });
      const sig = Es.map(E => {
        const d = breitWigner(E, state.E0, state.G, state.bg) - state.bg;
        const s = Math.sin(d);
        return s * s;
      });
      curve(f2, Es, sig, { color: f2.t.accent, width: 2.2 });
      vLine(f2, state.E0, { color: f2.t.bad, dash: [4, 4], label: 'E₀' });
      vLine(f2, state.E,  { color: f2.t.good });
      // Γ width bracket at half maximum
      hLine(f2, 0.5, { color: f2.t.text3, dash: [2, 4] });
    }

    function onSweepToggle() {
      state.sweeping = !state.sweeping;
      btn.classList.toggle('on', state.sweeping);
      btn.textContent = state.sweeping ? 'Pause sweep' : 'Auto-sweep E';
      if (state.sweeping) tick();
      else cancelAnimationFrame(state.rafId);
    }
    function tick() {
      const lo = 0.2, hi = 6.0;
      state.E += 0.012;
      if (state.E > hi) state.E = lo;
      sE.value = state.E;
      sE.dispatchEvent(new Event('input'));
      state.rafId = requestAnimationFrame(tick);
    }

    bindRange(sE0, v => { state.E0 = v; redraw(); });
    bindRange(sG,  v => { state.G  = v; redraw(); });
    bindRange(sBg, v => { state.bg = v; redraw(); });
    bindRange(sE,  v => { state.E  = v; redraw(); });
    btn.addEventListener('click', onSweepToggle);

    slide._dispose = () => {
      if (state.sweeping) { cancelAnimationFrame(state.rafId); state.sweeping = false; btn.classList.remove('on'); }
    };
    redraw();
  }

  /* ============ Slide 4: Square-well phase shift ============ */
  function initWellPhase(slide) {
    const cPsi  = slide.querySelector('canvas[data-role="psi"]');
    const cDelta = slide.querySelector('canvas[data-role="delta"]');
    const sE = slide.querySelector('input[data-p="E"]');
    const sD = slide.querySelector('input[data-p="D"]');
    const sW = slide.querySelector('input[data-p="W"]');
    const sL = slide.querySelector('input[data-p="L"]');

    let st = { E: 1.0, D: 5.0, W: 1.0, L: 0 };
    const xMax = 10, dx = 0.02;
    const Es = linspace(0.05, 5, 60);

    function redraw() {
      const V = wellV(st.D, st.W);
      const sol = solveRadial(V, st.E, st.L, xMax, dx);
      const psi  = normalizeAsymptotic(sol.u);
      const free = normalizeAsymptotic(sol.uFree);

      // ψ panel: shows potential step, actual ψ, free wave
      const f1 = frame(cPsi, {
        xRange: [0, xMax], yRange: [-6, 2.5],
        xLabel: 'r', yLabel: 'u(r), V(r)', title: 'Wavefunction inside & outside the well',
        xTicks: 5, yTicks: 5, pad: { l: 54, r: 18, t: 18, b: 36 },
      });
      // potential (red step, only shown rescaled to plot)
      const Vxs = [0, st.W, st.W, xMax];
      const Vys = [-st.D, -st.D, 0, 0];
      stepCurve(f1, Vxs, Vys, { color: f1.t.bad, width: 2,
        fill: 'rgba(138,26,26,.08)' });
      curve(f1, Array.from(sol.x), Array.from(free), { color: f1.t.good, width: 1.6, dash: [5, 4] });
      curve(f1, Array.from(sol.x), Array.from(psi),  { color: f1.t.accent, width: 2.2 });
      vLine(f1, st.W, { color: f1.t.text3, dash: [2, 4] });
      legend(f1, [
        { color: f1.t.bad,    label: 'V(r)' },
        { color: f1.t.good,   label: 'free  u', dash: [5, 4] },
        { color: f1.t.accent, label: 'with V' },
      ]);

      // δ(E) panel: scan energy, plot phase shift for current (D, W, L)
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
      // break the line at wrap jumps (|Δδ| > π/2) so we don't draw ugly vertical segments
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
    slide._dispose = () => {};
    redraw();
  }

  /* ============ Slide 5: Scattering length ============ */
  function initScatLength(slide) {
    const cPsi = slide.querySelector('canvas[data-role="psi"]');
    const cAs  = slide.querySelector('canvas[data-role="as"]');
    const sD = slide.querySelector('input[data-p="D"]');
    const sW = slide.querySelector('input[data-p="W"]');
    const btn = slide.querySelector('button[data-role="sweep"]');

    let st = { D: 2.0, W: 1.0, sweeping: false, rafId: 0 };
    const xMax = 8, dx = 0.01;
    // For scattering length we evaluate at E → 0.
    const Eeps = 1e-3;
    const Ds = linspace(0.01, 12, 200);

    // Precompute a_s(D) once per W
    let asCache = [];
    function recomputeCache() {
      asCache = new Array(Ds.length);
      for (let i = 0; i < Ds.length; i++) {
        const V = wellV(Ds[i], st.W);
        const sol = solveRadial(V, Eeps, 0, xMax, dx);
        const a = scatteringLength(sol, st.W);
        asCache[i] = a;
      }
    }

    function redraw() {
      const V = wellV(st.D, st.W);
      const sol = solveRadial(V, Eeps, 0, xMax, dx);
      // Normalise so the max of u over the plot range is ~1, then rescale for display.
      const psi = normalizeAsymptotic(sol.u);
      const tan = tangentAt({ x: sol.x, u: psi }, xMax * 0.8);

      const f1 = frame(cPsi, {
        xRange: [-1, xMax], yRange: [-2, 2],
        xLabel: 'r', yLabel: 'u(r)', title: 'E → 0 wavefunction and tangent',
        xTicks: 6, yTicks: 4,
      });
      // potential
      const Vxs = [0, st.W, st.W, xMax];
      const Vmax = 1.8;  // visual scaling only
      const Vscale = Vmax / Math.max(1, st.D);
      const Vys = [-st.D * Vscale, -st.D * Vscale, 0, 0];
      stepCurve(f1, Vxs, Vys, { color: f1.t.bad, width: 2, fill: 'rgba(138,26,26,.08)' });
      // wavefunction
      curve(f1, Array.from(sol.x), Array.from(psi), { color: f1.t.accent, width: 2.2 });
      // tangent line extended back to x-axis
      const xsLine = linspace(-1, xMax, 2);
      const ysLine = xsLine.map(x => tan.slope * x + tan.intercept);
      curve(f1, Array.from(xsLine), ysLine, { color: '#c08500', width: 1.5, dash: [5, 4] });
      // mark a_s
      const aS = tan.xs;
      if (isFinite(aS) && aS > -1 && aS < xMax) {
        vLine(f1, aS, { color: '#c08500', label: `a = ${aS.toFixed(2)}` });
        // dot
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

      // a_s vs D panel
      const f2 = frame(cAs, {
        xRange: [0, 12], yRange: [-8, 8],
        xLabel: 'Well depth  D', yLabel: 'a(D)', title: 'Scattering length vs depth',
        xTicks: 6, yTicks: 4,
      });
      // clamp asCache for plotting; break line at huge jumps
      const clampedX = [], clampedY = [];
      for (let i = 0; i < Ds.length; i++) {
        const a = asCache[i];
        if (!isFinite(a) || Math.abs(a) > 20) { clampedX.push(NaN); clampedY.push(NaN); }
        else { clampedX.push(Ds[i]); clampedY.push(a); }
      }
      curve(f2, clampedX, clampedY, { color: f2.t.accent, width: 2 });
      hLine(f2, 0, { color: f2.t.text3, dash: [2, 4] });
      vLine(f2, st.D, { color: f2.t.good });
    }

    function sweepTick() {
      let v = parseFloat(sD.value) + 0.04;
      if (v > 12) v = 0.1;
      sD.value = v;
      sD.dispatchEvent(new Event('input'));
      st.rafId = requestAnimationFrame(sweepTick);
    }

    bindRange(sD, v => { st.D = v; redraw(); });
    bindRange(sW, v => { st.W = v; recomputeCache(); redraw(); });
    btn.addEventListener('click', () => {
      st.sweeping = !st.sweeping;
      btn.classList.toggle('on', st.sweeping);
      btn.textContent = st.sweeping ? 'Pause D sweep' : 'Auto-sweep D';
      if (st.sweeping) sweepTick();
      else cancelAnimationFrame(st.rafId);
    });
    slide._dispose = () => {
      if (st.sweeping) { cancelAnimationFrame(st.rafId); st.sweeping = false; btn.classList.remove('on'); }
    };

    recomputeCache();
    redraw();
  }

  /* ============ Slide 6: Radial shell-barrier resonance ============ */
  // Geometry (matches RadSqBarr_Resn.xls): V=0 for r<W1, V=H for W1<=r<=W1+B, V=0 outside.
  // Defaults W1=2, B=1, H=5 ⇒ l=0 resonance at E ≈ 1.617, exactly as the source sheet documents.
  function initBarrierResonance(slide) {
    const cPsi  = slide.querySelector('canvas[data-role="psi"]');
    const cAmp  = slide.querySelector('canvas[data-role="amp"]');
    const sE = slide.querySelector('input[data-p="E"]');
    const sH = slide.querySelector('input[data-p="H"]');
    const sW = slide.querySelector('input[data-p="W1"]');
    const sB = slide.querySelector('input[data-p="B"]');
    const sL = slide.querySelector('input[data-p="L"]');
    const btn = slide.querySelector('button[data-role="sweep"]');

    let st = { E: 1.617, H: 5.0, W1: 2.0, B: 1.0, L: 0, sweeping: false, rafId: 0 };
    const xMax = 10, dx = 0.02;
    const Es = linspace(0.1, 4.5, 110);

    function insideRatio(V, E, L, W1) {
      const sol = solveRadial(V, E, L, xMax, dx);
      let out = 1e-30;
      const from = Math.floor(sol.x.length * 0.6);
      for (let i = from; i < sol.x.length; i++) { const a = Math.abs(sol.u[i]); if (a > out) out = a; }
      let ins = 0;
      for (let i = 0; i < sol.x.length; i++) {
        if (sol.x[i] > W1) break;
        const a = Math.abs(sol.u[i]);
        if (a > ins) ins = a;
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
      // shell barrier: rises at W1, falls at W1+B
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
        { color: f1.t.accent, label: 'u(r), normalised outside' },
      ]);

      // inside/outside amplitude ratio vs E — should peak at resonance
      const ratios = [];
      for (let i = 0; i < Es.length; i++) {
        ratios.push(insideRatio(V, Es[i], st.L, st.W1));
      }
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

    function sweepTick() {
      let v = parseFloat(sE.value) + 0.008;
      if (v > 4.4) v = 0.15;
      sE.value = v;
      sE.dispatchEvent(new Event('input'));
      st.rafId = requestAnimationFrame(sweepTick);
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
      if (st.sweeping) sweepTick();
      else cancelAnimationFrame(st.rafId);
    });
    slide._dispose = () => {
      if (st.sweeping) { cancelAnimationFrame(st.rafId); st.sweeping = false; btn.classList.remove('on'); }
    };
    redraw();
  }

  /* ============ Slide 2: partial-wave framework — animated incoming+outgoing ============ */
  function initPartialWave(slide) {
    const c = slide.querySelector('canvas[data-role="pw"]');
    const sD = slide.querySelector('input[data-p="delta"]');
    let delta = 0.8;
    let t = 0, raf = 0;
    const xs = linspace(0.05, 18, 400);

    function redraw() {
      const f = frame(c, {
        xRange: [0, xs[xs.length - 1]], yRange: [-1.6, 1.6],
        xLabel: 'kr', yLabel: 'u(r)', title: 'Incoming vs shifted outgoing  (δ = ' + delta.toFixed(2) + ')',
        xTicks: 6, yTicks: 4,
      });
      const ps = 2 * Math.PI * t;
      const free   = Array.from(xs, x => Math.sin(x + ps));
      const shifted = Array.from(xs, x => Math.sin(x + delta + ps));
      curve(f, Array.from(xs), free,    { color: f.t.good, width: 1.5, dash: [5, 4] });
      curve(f, Array.from(xs), shifted, { color: f.t.accent, width: 2.2 });
      // arrow showing phase shift
      const xMark = 10;
      const yMark = Math.sin(xMark + ps);
      f.ctx.strokeStyle = f.t.text1; f.ctx.lineWidth = 1;
      f.ctx.beginPath();
      f.ctx.moveTo(f.xToPx(xMark), f.yToPx(1.2));
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
      t += 0.004;
      if (t > 1) t -= 1;
      redraw();
      raf = requestAnimationFrame(tick);
    }
    bindRange(sD, v => { delta = v; });
    slide._dispose = () => cancelAnimationFrame(raf);
    tick();
  }

  /* ============ Slide 1: cover — miniature Breit-Wigner loop ============ */
  function initCover(slide) {
    const c = slide.querySelector('canvas[data-role="cover"]');
    if (!c) return;
    const Es = linspace(0, 6, 200);
    let t = 0, raf = 0;
    function tick() {
      t += 0.005;
      if (t > 1) t -= 1;
      const E0 = 3 + 0.4 * Math.sin(2 * Math.PI * t);
      const G = 0.25;
      const f = frame(c, {
        xRange: [Es[0], Es[Es.length - 1]], yRange: [-Math.PI, Math.PI],
        xLabel: 'E', yLabel: 'δ(E)', title: 'Breit-Wigner — a resonance seen through its phase shift',
        xTicks: 6, yTicks: 4,
      });
      const ds = Es.map(E => breitWigner(E, E0, G, 0));
      curve(f, Array.from(Es), ds, { color: f.t.accent, width: 2.4 });
      vLine(f, E0, { color: f.t.bad, dash: [4, 4], label: 'E₀' });
      raf = requestAnimationFrame(tick);
    }
    slide._dispose = () => cancelAnimationFrame(raf);
    tick();
  }

  /* ============ Lifecycle ============ */
  const initMap = {
    'cover':            initCover,
    'partial-wave':     initPartialWave,
    'breit-wigner':     initBreitWigner,
    'well-phase':       initWellPhase,
    'scat-length':      initScatLength,
    'barrier-resonance': initBarrierResonance,
  };

  let currentActive = null;
  function activate(slide) {
    if (currentActive === slide) return;
    if (currentActive && currentActive._dispose) currentActive._dispose();
    currentActive = slide;
    const key = slide.dataset.kind;
    if (!key || slide.dataset.inited === '1') {
      // already initialised — just call dispose-safe re-entry logic if present
      return;
    }
    const fn = initMap[key];
    if (fn) { fn(slide); slide.dataset.inited = '1'; }
  }

  function setup() {
    const deck = document.querySelector('.deck');
    if (!deck) return;
    const slides = Array.from(deck.querySelectorAll('.slide'));
    // Initialise whichever slide is already active, plus re-init on change.
    const watch = () => {
      for (const s of slides) { if (s.classList.contains('is-active')) { activate(s); return; } }
    };
    watch();
    const obs = new MutationObserver(watch);
    slides.forEach(s => obs.observe(s, { attributes: true, attributeFilter: ['class'] }));

    // Re-layout canvases on resize
    window.addEventListener('resize', () => {
      if (currentActive && currentActive._dispose) {
        // Redraw is handled by our own resize logic: mark dirty by re-running init.
        // Easiest is to dispatch a synthetic input event on any range in the slide.
        const r = currentActive.querySelector('input[type="range"]');
        if (r) r.dispatchEvent(new Event('input'));
      }
    });
  }

  if (document.readyState !== 'loading') setup();
  else document.addEventListener('DOMContentLoaded', setup);
})();
