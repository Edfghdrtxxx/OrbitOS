/* Rayleigh scattering — physics core.
   Classic script (sets window.RS) so index.html also works when opened straight from disk.
   Units: geometry in km, wavelength in nm, coefficients in km^-1, irradiance in W m^-2 nm^-1. */
(function (root) {
  'use strict';

  // ---------- Spectral grid: 16 bins of 22.5 nm covering 380–740 nm ----------
  const NL = 16, L0 = 380, L1 = 740, DL = (L1 - L0) / NL;
  const LAMBDA = Array.from({ length: NL }, (_, i) => L0 + DL * (i + 0.5));

  // ---------- Physical constants and standard atmosphere ----------
  const kB = 1.380649e-23, NA = 6.02214076e23, G0 = 9.80665;
  const T_S = 288.15, P_S = 101325;
  const N_S = P_S / (kB * T_S);                     // m^-3; Bodhaine et al. 1999 quote 2.546899e19 cm^-3
  const M_AIR = 28.96491e-3 / NA;                   // kg per molecule (Bodhaine 1999 Table 1, 360 ppm CO2)
  const H_R = kB * T_S / (M_AIR * G0) / 1000;       // km; N_S * H_R = P_S / (m g), the hydrostatic column
  const H_M = 1.2;                                  // km, aerosol scale height (Bruneton demo)
  const MIE_G = 0.8, MIE_ALBEDO = 0.9, ANGSTROM = 1.3;
  const R_E = 6371, H_TOP = 100, R_A = R_E + H_TOP;
  const OZONE_PEAK = 300 * 2.687e20 / 15000;        // m^-3 at 25 km for a 300 DU column (tent 10–40 km)

  // ASTM G-173 extraterrestrial spectrum, 10 nm bin averages from 360 nm (Bruneton, demo.cc).
  const SOLAR = [1.11776, 1.14259, 1.01249, 1.14716, 1.72765, 1.73054, 1.6887, 1.61253,
    1.91198, 2.03474, 2.02042, 2.02212, 1.93377, 1.95809, 1.91686, 1.8298,
    1.8685, 1.8931, 1.85149, 1.8504, 1.8341, 1.8345, 1.8147, 1.78158, 1.7533,
    1.6965, 1.68194, 1.64654, 1.6048, 1.52143, 1.55622, 1.5113, 1.474, 1.4482,
    1.41018, 1.36775, 1.34188, 1.31429, 1.28303, 1.26758, 1.2367, 1.2082,
    1.18737, 1.14683, 1.12362, 1.1058, 1.07124, 1.04992];
  // Ozone absorption cross section at 233 K, m^2, same bins (IUP Bremen data via Bruneton, demo.cc).
  const OZONE_XS = [1.18e-27, 2.182e-28, 2.818e-28, 6.636e-28, 1.527e-27, 2.763e-27, 5.52e-27,
    8.451e-27, 1.582e-26, 2.316e-26, 3.669e-26, 4.924e-26, 7.752e-26, 9.016e-26,
    1.48e-25, 1.602e-25, 2.139e-25, 2.755e-25, 3.091e-25, 3.5e-25, 4.266e-25,
    4.672e-25, 4.398e-25, 4.701e-25, 5.019e-25, 4.305e-25, 3.74e-25, 3.215e-25,
    2.662e-25, 2.238e-25, 1.852e-25, 1.473e-25, 1.209e-25, 9.423e-26, 7.455e-26,
    6.566e-26, 5.105e-26, 4.15e-26, 4.228e-26, 3.237e-26, 2.451e-26, 2.801e-26,
    2.534e-26, 1.624e-26, 1.465e-26, 2.078e-26, 1.383e-26, 7.105e-27];

  function table(t, nm) {               // entry i is the mean over [360+10i, 370+10i) nm
    const x = (nm - 365) / 10;
    const i = Math.max(0, Math.min(t.length - 2, Math.floor(x)));
    const f = Math.min(1, Math.max(0, x - i));
    return t[i] * (1 - f) + t[i + 1] * f;
  }

  // ---------- Rayleigh cross section from first principles ----------
  function airIndexMinus1(nm) {         // Peck & Reeder 1972, standard air
    const s2 = 1 / ((nm / 1000) ** 2);
    return 8.06051e-5 + 2.480990e-2 / (132.274 - s2) + 1.74557e-4 / (39.32957 - s2);
  }
  function kingFactor(nm) {             // Bates 1984 via Bodhaine 1999 eqs (5), (6), (23); 360 ppm CO2
    const l2 = (nm / 1000) ** -2;
    const fN2 = 1.034 + 3.17e-4 * l2;
    const fO2 = 1.096 + 1.385e-3 * l2 + 1.448e-4 * l2 * l2;
    const c = 0.036;
    return (78.084 * fN2 + 20.946 * fO2 + 0.934 * 1.0 + c * 1.15) / (78.084 + 20.946 + 0.934 + c);
  }
  function rayleighCrossSection(nm) {   // m^2 per molecule, Bodhaine 1999 eq (22)
    const n = 1 + airIndexMinus1(nm), n2 = n * n, lm = nm * 1e-9;
    return 24 * Math.PI ** 3 * (n2 - 1) ** 2 / (lm ** 4 * N_S ** 2 * (n2 + 2) ** 2) * kingFactor(nm);
  }
  const betaRayleighExact = nm => N_S * rayleighCrossSection(nm) * 1000;  // km^-1 at sea level
  const BR550 = betaRayleighExact(550);

  // ---------- Colour science ----------
  function lobe(x, mu, a, b) { const t = (x - mu) * (x < mu ? a : b); return Math.exp(-0.5 * t * t); }
  function cmf(nm) {                    // CIE 1931 2° observer, Wyman, Sloan & Shirley 2013 multi-lobe fit
    return [
      0.362 * lobe(nm, 442.0, 0.0624, 0.0374) + 1.056 * lobe(nm, 599.8, 0.0264, 0.0323) - 0.065 * lobe(nm, 501.1, 0.0490, 0.0382),
      0.821 * lobe(nm, 568.8, 0.0213, 0.0247) + 0.286 * lobe(nm, 530.9, 0.0613, 0.0322),
      1.217 * lobe(nm, 437.0, 0.0845, 0.0278) + 0.681 * lobe(nm, 459.0, 0.0385, 0.0725)];
  }
  function xyzToLinearSRGB(x, y, z) {   // IEC 61966-2-1 (D65)
    return [3.2406 * x - 1.5372 * y - 0.4986 * z,
      -0.9689 * x + 1.8758 * y + 0.0415 * z,
      0.0557 * x - 0.2040 * y + 1.0570 * z];
  }
  const encodeSRGB = c => c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;

  // Per-bin integrals: CMF weights (so XYZ = sum S_i W_i) and mean solar irradiance.
  const CMF_W = [[], [], []], SUN = [], OZ = [];
  for (let i = 0; i < NL; i++) {
    let x = 0, y = 0, z = 0, s = 0, o = 0;
    const n = 45, d = DL / n;
    for (let k = 0; k < n; k++) {
      const nm = L0 + DL * i + (k + 0.5) * d, c = cmf(nm);
      x += c[0] * d; y += c[1] * d; z += c[2] * d;
      s += table(SOLAR, nm) / n; o += table(OZONE_XS, nm) / n;
    }
    CMF_W[0].push(x); CMF_W[1].push(y); CMF_W[2].push(z); SUN.push(s); OZ.push(o);
  }

  function spectrumToXYZ(S) {
    let x = 0, y = 0, z = 0;
    for (let i = 0; i < NL; i++) { x += S[i] * CMF_W[0][i]; y += S[i] * CMF_W[1][i]; z += S[i] * CMF_W[2][i]; }
    return [x, y, z];
  }
  // White balance: the Sun above the atmosphere renders as neutral white.
  const SUN_RGB = xyzToLinearSRGB(...spectrumToXYZ(SUN));
  const SUN_Y = spectrumToXYZ(SUN)[1];
  const WB = SUN_RGB.map(c => (SUN_Y / c));
  function spectrumToLinearRGB(S) {
    const rgb = xyzToLinearSRGB(...spectrumToXYZ(S));
    return [rgb[0] * WB[0], rgb[1] * WB[1], rgb[2] * WB[2]];
  }
  // Hue-only display colour (brightest channel = 1), gamut-clipped toward grey.
  function chroma(rgb) {
    let [r, g, b] = rgb;
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (lum <= 0) return [0, 0, 0];
    const mn = Math.min(r, g, b);
    if (mn < 0) { const k = lum / (lum - mn); r = lum + (r - lum) * k; g = lum + (g - lum) * k; b = lum + (b - lum) * k; }
    const mx = Math.max(r, g, b);
    return [r / mx, g / mx, b / mx];
  }
  function cssColor(rgbLinear, scale = 1) {
    return 'rgb(' + rgbLinear.map(c => Math.round(255 * encodeSRGB(Math.min(1, Math.max(0, c * scale))))).join(',') + ')';
  }
  // Colour of monochromatic light (for photons): add white until in gamut, then normalise.
  function wavelengthColor(nm) {
    const c = cmf(nm);
    let rgb = xyzToLinearSRGB(c[0], c[1], c[2]);
    const mn = Math.min(...rgb);
    if (mn < 0) rgb = rgb.map(v => v - mn);
    const mx = Math.max(...rgb);
    return rgb.map(v => v / mx);
  }

  // ---------- Atmosphere model ----------
  // p: { rayleigh, ozone, aerosol: bool, aod, density, exponent (null = exact Rayleigh formula) }
  function betaRayleigh(nm, p) {
    if (!p.rayleigh) return 0;
    const b = p.exponent == null ? betaRayleighExact(nm) : BR550 * Math.pow(550 / nm, p.exponent);
    return b * p.density;
  }
  const betaMieExt = (nm, p) => p.aerosol ? p.aod / H_M * Math.pow(nm / 550, -ANGSTROM) : 0;
  const betaOzone = (nm, p) => p.ozone ? table(OZONE_XS, nm) * OZONE_PEAK * 1000 : 0;

  function coefficients(p) {
    const bR = [], bMe = [], bMs = [], bO = [];
    for (let i = 0; i < NL; i++) {
      const nm = LAMBDA[i];
      bR.push(betaRayleigh(nm, p));
      const me = betaMieExt(nm, p);
      bMe.push(me); bMs.push(me * MIE_ALBEDO);
      bO.push(p.ozone ? OZ[i] * OZONE_PEAK * 1000 : 0);
    }
    return { bR, bMe, bMs, bO };
  }

  const densR = h => Math.exp(-Math.max(0, h) / H_R);
  const densM = h => Math.exp(-Math.max(0, h) / H_M);
  const densO = h => Math.max(0, 1 - Math.abs(h - 25) / 15);

  // Optical depths (km of sea-level-equivalent path) from radius r toward direction cosine mu, to the top.
  // Returns [odR, odM, odO, blocked] where blocked = 1 if the Earth is in the way.
  function opticalDepthToTop(r, mu, N) {
    const b = r * mu, c = r * r - R_E * R_E;
    let blocked = 0;
    if (mu < 0 && b * b - c >= 0) {     // ray hits the ground: integrate the grazing ray instead
      blocked = 1;
      mu = -Math.sqrt(Math.max(0, 1 - (R_E * R_E) / (r * r)));
    }
    const bb = r * mu;
    const tTop = -bb + Math.sqrt(Math.max(0, bb * bb - (r * r - R_A * R_A)));
    const ds = tTop / N;
    let oR = 0, oM = 0, oO = 0;
    for (let k = 0; k < N; k++) {
      const t = (k + 0.5) * ds;
      const h = Math.sqrt(r * r + t * t + 2 * r * mu * t) - R_E;
      oR += densR(h); oM += densM(h); oO += densO(h);
    }
    return [oR * ds, oM * ds, oO * ds, blocked, tTop];
  }

  // Lookup table of optical depth to the top of the atmosphere, indexed by (mu, altitude).
  const LUT_W = 512, LUT_H = 64;
  function lutX(mu) { return 0.5 + 0.5 * Math.sign(mu) * Math.sqrt(Math.abs(mu)); }
  function buildLUT() {
    const data = new Float32Array(LUT_W * LUT_H * 4);
    for (let j = 0; j < LUT_H; j++) {
      const y = j / (LUT_H - 1), r = R_E + H_TOP * y * y;
      for (let i = 0; i < LUT_W; i++) {
        const s = 2 * i / (LUT_W - 1) - 1, mu = Math.sign(s) * s * s;
        const od = opticalDepthToTop(r, mu, 160);
        data.set([od[0], od[1], od[2], od[3]], 4 * (j * LUT_W + i));
      }
    }
    return data;
  }
  function sampleLUT(lut, r, mu) {
    const h = Math.min(H_TOP, Math.max(0, r - R_E));
    const fx = lutX(Math.max(-1, Math.min(1, mu))) * (LUT_W - 1), fy = Math.sqrt(h / H_TOP) * (LUT_H - 1);
    const x0 = Math.min(LUT_W - 2, Math.floor(fx)), y0 = Math.min(LUT_H - 2, Math.floor(fy));
    const ax = fx - x0, ay = fy - y0, out = [0, 0, 0, 0];
    for (let c = 0; c < 4; c++) {
      const v00 = lut[4 * (y0 * LUT_W + x0) + c], v10 = lut[4 * (y0 * LUT_W + x0 + 1) + c];
      const v01 = lut[4 * ((y0 + 1) * LUT_W + x0) + c], v11 = lut[4 * ((y0 + 1) * LUT_W + x0 + 1) + c];
      out[c] = (v00 * (1 - ax) + v10 * ax) * (1 - ay) + (v01 * (1 - ax) + v11 * ax) * ay;
    }
    return out;
  }

  // ---------- Multiple scattering (Hillaire 2020, isotropic infinite-order approximation) ----------
  // For a point at altitude h with Sun zenith cosine muS:
  //   L2  = mean over directions of ∫ T σ_s T_sun /(4π) dt  (+ ground bounce)   second-order light
  //   f   = mean over directions of ∫ T σ_s dt                                  transfer factor
  //   Psi = L2 / (1 - f)                                                        all orders, geometric series
  // Psi is per unit solar irradiance; the renderer adds σ_s(x)·Psi(x) to the in-scattered light.
  const MS_W = 24, MS_H = 16, MS_DIRS = 48, MS_STEPS = 16, GROUND_ALBEDO = 0.1;
  const msY = h => Math.sqrt(Math.min(1, Math.max(0, h / H_TOP)));
  function fibonacciSphere(n) {
    const out = [], ga = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - 2 * (i + 0.5) / n, r = Math.sqrt(1 - y * y);
      out.push([Math.cos(ga * i) * r, y, Math.sin(ga * i) * r]);
    }
    return out;
  }
  const MS_DIR = fibonacciSphere(MS_DIRS);
  function buildMSLUT(co, lut) {
    const out = new Float32Array(MS_W * MS_H * NL);
    const L2 = new Float64Array(NL), F = new Float64Array(NL);
    for (let j = 0; j < MS_H; j++) {
      const y = j / (MS_H - 1), r0 = R_E + H_TOP * y * y;
      for (let i = 0; i < MS_W; i++) {
        const muS = -1 + 2 * i / (MS_W - 1), sun = [Math.sqrt(1 - muS * muS), muS, 0];
        L2.fill(0); F.fill(0);
        for (const d of MS_DIR) {
          const b = r0 * d[1];
          let tEnd = -b + Math.sqrt(b * b - (r0 * r0 - R_A * R_A)), ground = false;
          const dg = b * b - (r0 * r0 - R_E * R_E);
          if (b < 0 && dg >= 0) { tEnd = Math.max(0, -b - Math.sqrt(dg)); ground = true; }
          const ds = tEnd / MS_STEPS;
          let vR = 0, vM = 0, vO = 0;
          for (let k = 0; k < MS_STEPS; k++) {
            const t = (k + 0.5) * ds;
            const px = d[0] * t, py = r0 + d[1] * t, pz = d[2] * t;
            const r = Math.hypot(px, py, pz), h = r - R_E;
            const dR = densR(h), dM = densM(h), dO = densO(h);
            const s = sampleLUT(lut, r, (px * sun[0] + py * sun[1]) / r), vis = 1 - s[3];
            const aR = vR + 0.5 * dR * ds, aM = vM + 0.5 * dM * ds, aO = vO + 0.5 * dO * ds;
            for (let l = 0; l < NL; l++) {
              const sig = (co.bR[l] * dR + co.bMs[l] * dM) * ds;
              const tv = Math.exp(-(co.bR[l] * aR + co.bMe[l] * aM + co.bO[l] * aO));
              F[l] += tv * sig;
              L2[l] += tv * Math.exp(-(co.bR[l] * s[0] + co.bMe[l] * s[1] + co.bO[l] * s[2])) * vis * sig / (4 * Math.PI);
            }
            vR += dR * ds; vM += dM * ds; vO += dO * ds;
          }
          if (ground) {
            const px = d[0] * tEnd, py = r0 + d[1] * tEnd, pz = d[2] * tEnd, r = Math.hypot(px, py, pz);
            const cosI = Math.max(0, (px * sun[0] + py * sun[1]) / r);
            const s = sampleLUT(lut, r, cosI), vis = 1 - s[3];
            for (let l = 0; l < NL; l++) {
              const te = Math.exp(-(co.bR[l] * vR + co.bMe[l] * vM + co.bO[l] * vO));
              L2[l] += te * GROUND_ALBEDO / Math.PI * cosI * vis * Math.exp(-(co.bR[l] * s[0] + co.bMe[l] * s[1] + co.bO[l] * s[2]));
            }
          }
        }
        const o = (j * MS_W + i) * NL;
        for (let l = 0; l < NL; l++) {
          const f = F[l] / MS_DIRS;
          out[o + l] = (L2[l] / MS_DIRS) / Math.max(1e-3, 1 - f);
        }
      }
    }
    return out;
  }
  function sampleMS(ms, r, muS, outArr) {
    const fx = (Math.max(-1, Math.min(1, muS)) + 1) / 2 * (MS_W - 1), fy = msY(r - R_E) * (MS_H - 1);
    const x0 = Math.min(MS_W - 2, Math.floor(fx)), y0 = Math.min(MS_H - 2, Math.floor(fy));
    const ax = fx - x0, ay = fy - y0;
    const w00 = (1 - ax) * (1 - ay), w10 = ax * (1 - ay), w01 = (1 - ax) * ay, w11 = ax * ay;
    const i00 = (y0 * MS_W + x0) * NL, i10 = i00 + NL, i01 = i00 + MS_W * NL, i11 = i01 + NL;
    for (let l = 0; l < NL; l++) outArr[l] = ms[i00 + l] * w00 + ms[i10 + l] * w10 + ms[i01 + l] * w01 + ms[i11 + l] * w11;
    return outArr;
  }

  const phaseRayleigh = mu => 3 / (16 * Math.PI) * (1 + mu * mu);
  function phaseMie(mu, g = MIE_G) {   // Cornette & Shanks 1992
    const g2 = g * g;
    return 3 / (8 * Math.PI) * (1 - g2) * (1 + mu * mu) / ((2 + g2) * Math.pow(1 + g2 - 2 * g * mu, 1.5));
  }

  // Direct-beam transmittance from altitude hObs toward a Sun at elevation e (radians).
  function sunTransmittance(hObs, e, co) {
    const od = opticalDepthToTop(R_E + hObs, Math.sin(e), 4000);
    const T = [];
    for (let i = 0; i < NL; i++) {
      const tau = co.bR[i] * od[0] + co.bMe[i] * od[1] + co.bO[i] * od[2];
      T.push(od[3] ? 0 : Math.exp(-tau));
    }
    return { T, od, pathKm: od[4], blocked: od[3] };
  }

  // Single-scattering sky radiance (no surfaces), same scheme as the GPU shader. dir = [x, y, z], y up.
  const PSI = new Float64Array(NL);
  function skyRadiance(dir, sunDir, hObs, co, lut, N = 32, ms = null) {
    const r0 = R_E + hObs, o = [0, r0, 0];
    const b = r0 * dir[1];
    let tEnd = -b + Math.sqrt(b * b - (r0 * r0 - R_A * R_A));
    const dg = b * b - (r0 * r0 - R_E * R_E);
    if (b < 0 && dg >= 0) tEnd = Math.max(0, -b - Math.sqrt(dg));
    const mu = dir[0] * sunDir[0] + dir[1] * sunDir[1] + dir[2] * sunDir[2];
    const pR = phaseRayleigh(mu), pM = phaseMie(mu);
    const L = new Float64Array(NL);
    let vR = 0, vM = 0, vO = 0, tPrev = 0;
    for (let k = 0; k < N; k++) {
      const u = (k + 1) / N, t1 = tEnd * u * u, ds = t1 - tPrev, tm = 0.5 * (t1 + tPrev);
      const p = [o[0] + dir[0] * tm, o[1] + dir[1] * tm, o[2] + dir[2] * tm];
      const r = Math.hypot(p[0], p[1], p[2]), h = r - R_E;
      const dR = densR(h), dM = densM(h), dO = densO(h);
      const muS = (p[0] * sunDir[0] + p[1] * sunDir[1] + p[2] * sunDir[2]) / r;
      const s = sampleLUT(lut, r, muS), vis = 1 - s[3];
      const cR = vR + 0.5 * dR * ds, cM = vM + 0.5 * dM * ds, cO = vO + 0.5 * dO * ds;
      const aR = cR + s[0], aM = cM + s[1], aO = cO + s[2];
      for (let i = 0; i < NL; i++) {
        const T = Math.exp(-(co.bR[i] * aR + co.bMe[i] * aM + co.bO[i] * aO));
        L[i] += vis * T * (co.bR[i] * dR * pR + co.bMs[i] * dM * pM) * ds;
      }
      if (ms) {
        sampleMS(ms, r, muS, PSI);
        for (let i = 0; i < NL; i++) {
          const Tv = Math.exp(-(co.bR[i] * cR + co.bMe[i] * cM + co.bO[i] * cO));
          L[i] += Tv * (co.bR[i] * dR + co.bMs[i] * dM) * PSI[i] * ds;
        }
      }
      vR += dR * ds; vM += dM * ds; vO += dO * ds; tPrev = t1;
    }
    for (let i = 0; i < NL; i++) L[i] *= SUN[i];
    return L;
  }

  const luminance = L => 683 * spectrumToXYZ(L)[1];   // cd m^-2 when L is in W m^-2 sr^-1 nm^-1

  // Log-average sky luminance (for auto exposure) and horizontal sky irradiance (ambient light on terrain).
  function skyStats(sunDir, hObs, co, lut, ms = null) {
    const els = [2, 6, 12, 20, 32, 48, 66, 84], nAz = 12;
    let logSum = 0, n = 0;
    const E = new Float64Array(NL);
    for (let a = 0; a < els.length; a++) {
      const e = els[a] * Math.PI / 180;
      const e0 = (a === 0 ? 0 : (els[a - 1] + els[a]) / 2) * Math.PI / 180;
      const e1 = (a === els.length - 1 ? 90 : (els[a] + els[a + 1]) / 2) * Math.PI / 180;
      const band = (Math.sin(e1) ** 2 - Math.sin(e0) ** 2) * Math.PI / nAz;  // ∫cosθ dΩ over the patch
      for (let k = 0; k < nAz; k++) {
        const az = (k + 0.5) / nAz * 2 * Math.PI;
        const d = [Math.cos(e) * Math.sin(az), Math.sin(e), Math.cos(e) * Math.cos(az)];
        const L = skyRadiance(d, sunDir, hObs, co, lut, 24, ms);
        logSum += Math.log(1e-6 + luminance(L)); n++;
        for (let i = 0; i < NL; i++) E[i] += L[i] * band;
      }
    }
    return { logAvgLum: Math.exp(logSum / n), irradiance: Array.from(E) };
  }

  root.RS = {
    NL, L0, L1, DL, LAMBDA, N_S, H_R, H_M, R_E, R_A, H_TOP, MIE_G, MIE_ALBEDO, ANGSTROM, OZONE_PEAK,
    SUN, CMF_W, WB, LUT_W, LUT_H, BR550,
    airIndexMinus1, kingFactor, rayleighCrossSection, betaRayleighExact, betaRayleigh, betaMieExt, betaOzone,
    coefficients, densR, densM, densO, opticalDepthToTop, buildLUT, sampleLUT, sunTransmittance,
    MS_W, MS_H, buildMSLUT, sampleMS,
    skyRadiance, skyStats, luminance, phaseRayleigh, phaseMie,
    cmf, spectrumToXYZ, spectrumToLinearRGB, xyzToLinearSRGB, chroma, cssColor, encodeSRGB, wavelengthColor,
    solarAt: nm => table(SOLAR, nm),
  };
})(typeof window !== 'undefined' ? window : globalThis);
