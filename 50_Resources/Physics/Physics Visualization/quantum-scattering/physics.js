/* physics.js — live Schrödinger solver + Breit-Wigner resonance formula.
 *
 * Units: ℏ = 2m = 1, so Schrödinger becomes
 *     u''(x) = [ l(l+1)/x² + V(x) − E ] · u(x)
 * Same convention as the five source spreadsheets (Misner & Cooney, "Spreadsheet Physics").
 *
 * Integration: leapfrog (velocity-at-half-step), matching the source sheets.
 *     u'(x + dx/2) = u'(x − dx/2) + dx · u''(x)
 *     u(x + dx)    = u(x) + dx · u'(x + dx/2)
 */
(function (global) {
  'use strict';

  /* ---------------- Potentials ---------------- */

  // Spherical square WELL: V=-D for r<=W, 0 outside
  function wellV(D, W) { return function (r) { return r <= W ? -D : 0; }; }

  // Spherical square BARRIER: V=+H for r<=W, 0 outside
  function barrierV(H, W) { return function (r) { return r <= W ? H : 0; }; }

  // Spherical SHELL BARRIER: V=0 for r<W1, V=H for W1<=r<=W1+B, V=0 for r>W1+B.
  // This is the geometry used by RadSqBarr_Resn.xls (inner cavity + barrier shell).
  function shellBarrierV(H, W1, B) {
    const W2 = W1 + B;
    return function (r) { return (r >= W1 && r <= W2) ? H : 0; };
  }

  /* ---------------- Radial leapfrog solver ---------------- */
  // Returns {x, u, uFree} on a uniform grid r ∈ (0, xMax].
  // u     : wavefunction with potential V
  // uFree : wavefunction with V=0 (same E, same l) for reference
  // We skip r=0 to avoid the centrifugal singularity; start at r=dx with u=dx (regular at origin).
  function solveRadial(V, E, l, xMax, dx) {
    const N = Math.floor(xMax / dx);
    const x  = new Float64Array(N);
    const u  = new Float64Array(N);
    const uF = new Float64Array(N);

    const cent = l * (l + 1);
    // Regular solution near origin: u(r) ~ r^(l+1). For l=0 that is r, for l>0 still r^(l+1).
    // We seed two points to kick-start the leapfrog.
    for (let i = 0; i < N; i++) x[i] = (i + 1) * dx;

    u[0]  = Math.pow(x[0], l + 1);
    uF[0] = Math.pow(x[0], l + 1);
    u[1]  = Math.pow(x[1], l + 1);
    uF[1] = Math.pow(x[1], l + 1);

    // Initial half-step velocity, 2nd-order centred.
    let uVel  = (u[1]  - u[0])  / dx;
    let uFVel = (uF[1] - uF[0]) / dx;

    for (let i = 1; i < N - 1; i++) {
      const r  = x[i];
      const cr = cent / (r * r);
      const uppV  = (cr + V(r) - E) * u[i];
      const uppF  = (cr - E) * uF[i];
      uVel  += dx * uppV;
      uFVel += dx * uppF;
      u[i + 1]  = u[i]  + dx * uVel;
      uF[i + 1] = uF[i] + dx * uFVel;
    }
    return { x: x, u: u, uFree: uF };
  }

  /* ---------------- Normalisation helpers ---------------- */
  // Scale u so that its amplitude in the asymptotic (outer third of the grid) is ~1.
  function normalizeAsymptotic(u) {
    const N = u.length;
    const from = Math.floor(N * 0.6);
    let M = 1e-30;
    for (let i = from; i < N; i++) { const a = Math.abs(u[i]); if (a > M) M = a; }
    const s = 1 / M;
    const out = new Float64Array(N);
    for (let i = 0; i < N; i++) out[i] = u[i] * s;
    return out;
  }

  /* ---------------- Phase-shift extraction ---------------- */
  // For l=0 the outer wave satisfies u(r) ∝ sin(kr + δ).  Take the last two zero crossings,
  // compare with the free-wave crossings, return δ in (-π/2, π/2].
  function phaseShiftL0(sol, E) {
    const k = Math.sqrt(Math.max(E, 1e-9));
    const { x, u, uFree } = sol;
    // last zero-crossing of u and uFree after the outer 60% of the grid
    const start = Math.floor(x.length * 0.6);
    function lastZero(arr) {
      for (let i = arr.length - 2; i > start; i--) {
        if (arr[i] * arr[i + 1] < 0) {
          // linear interp
          const t = arr[i] / (arr[i] - arr[i + 1]);
          return x[i] + t * (x[i + 1] - x[i]);
        }
      }
      return NaN;
    }
    const r0  = lastZero(u);
    const r0F = lastZero(uFree);
    if (!isFinite(r0) || !isFinite(r0F)) return 0;
    // sin(k r0 + δ)=0  ⇒ k r0 + δ = nπ; free wave gives k r0F = n_F π.
    // Assuming same n (or adjusted mod π), δ = k*(r0F - r0).
    let delta = k * (r0F - r0);
    // wrap to (-π/2, π/2] for a clean monotonic-looking display
    while (delta >  Math.PI / 2) delta -= Math.PI;
    while (delta <= -Math.PI / 2) delta += Math.PI;
    return delta;
  }

  /* ---------------- Scattering length (E=0) ---------------- */
  // Outside the well, u(r) → C (r − a_s).  At a point r* beyond the well,
  // use tangent line: a_s = r* − u(r*) / u'(r*).
  function scatteringLength(sol, W) {
    const { x, u } = sol;
    // derivative by central differences at a point well past W
    let idx = Math.floor(x.length * 0.8);
    for (let i = 0; i < x.length; i++) { if (x[i] > W * 2.5) { idx = Math.min(i, x.length - 2); break; } }
    const du = (u[idx + 1] - u[idx - 1]) / (2 * (x[idx] - x[idx - 1]));
    if (Math.abs(du) < 1e-14) return NaN;
    return x[idx] - u[idx] / du;
  }

  /* ---------------- Linear extrapolation line (for scattering-length slide) ---------------- */
  // Returns slope m and intercept b for u ≈ m(r) + b at r = rRef.
  function tangentAt(sol, rRef) {
    const { x, u } = sol;
    let idx = 0;
    for (let i = 0; i < x.length; i++) { if (x[i] >= rRef) { idx = i; break; } }
    idx = Math.max(1, Math.min(idx, x.length - 2));
    const slope = (u[idx + 1] - u[idx - 1]) / (x[idx + 1] - x[idx - 1]);
    const intercept = u[idx] - slope * x[idx];
    return { slope: slope, intercept: intercept, xs: -intercept / slope };
  }

  /* ---------------- Breit-Wigner resonance ---------------- */
  // δ(E) = δ_bg + arctan( Γ/2 / (E₀ − E) ).  Matches the Resonance.xls layout
  // (l=2, gamma=0.15, E_0=3 as default parameters).
  function breitWigner(E, E0, Γ, δbg) {
    return δbg + Math.atan2(Γ / 2, E0 - E);
  }

  /* ---------------- Exports ---------------- */
  global.Physics = {
    wellV: wellV,
    barrierV: barrierV,
    shellBarrierV: shellBarrierV,
    solveRadial: solveRadial,
    normalizeAsymptotic: normalizeAsymptotic,
    phaseShiftL0: phaseShiftL0,
    scatteringLength: scatteringLength,
    tangentAt: tangentAt,
    breitWigner: breitWigner,
  };
})(window);
