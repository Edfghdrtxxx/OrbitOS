/* Cross-section of the atmosphere along the Sun's vertical plane, with a Monte Carlo photon beam.
   Physical frame: X (km) horizontal toward the Sun, Y (km) altitude above the observer's ground,
   Earth centre at (0, -R_E). Drawn with the vertical axis exaggerated by V.
   Classic script; index.html calls window.createPathView(THREE, canvas, overlay, RS). */
(function (root) {
  'use strict';

  const V = 10;                 // vertical exaggeration of the drawing
  const XHALF = 560;            // km shown either side of the observer
  const BEAM_PX = 5;            // drawn half width of the photon beam, px
  const MAXP = 2600;

  const BG_FRAG = /* glsl */`
    precision highp float;
    varying vec2 vPos;
    uniform float uRE, uHR, uV, uOzone;
    void main() {
      vec2 q = vec2(vPos.x, vPos.y / uV);              // physical km
      float h = length(vec2(q.x, q.y + uRE)) - uRE;
      if (h < 0.0) {
        float k = clamp(-h / 25.0, 0.0, 1.0);
        gl_FragColor = vec4(mix(vec3(0.86, 0.83, 0.76), vec3(0.78, 0.75, 0.68), k), 1.0);
        return;
      }
      float rho = exp(-h / uHR);
      vec3 c = mix(vec3(0.985, 0.988, 0.992), vec3(0.62, 0.76, 0.93), pow(rho, 0.7) * 0.75);
      float oz = max(0.0, 1.0 - abs(h - 25.0) / 15.0) * uOzone;
      c = mix(c, vec3(0.80, 0.74, 0.90), oz * 0.35);
      float grid = 1.0 - smoothstep(0.0, 0.06 * uV, abs(fract(h / 10.0 + 0.5) - 0.5) * 10.0 * uV);
      c = mix(c, vec3(0.45, 0.50, 0.60), grid * 0.30);
      gl_FragColor = vec4(c, 1.0);
    }`;
  const BG_VERT = /* glsl */`
    varying vec2 vPos;
    void main() { vPos = (modelMatrix * vec4(position, 1.0)).xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

  const PT_VERT = /* glsl */`
    attribute vec3 color;
    attribute float alpha;
    attribute float size;
    varying vec3 vColor; varying float vAlpha;
    uniform float uScale;
    void main() {
      vColor = color; vAlpha = alpha;
      gl_PointSize = size * uScale;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`;
  const PT_FRAG = /* glsl */`
    precision highp float;
    varying vec3 vColor; varying float vAlpha;
    void main() {
      vec2 c = gl_PointCoord - 0.5;
      float r = length(c);
      if (r > 0.5) discard;
      float edge = smoothstep(0.5, 0.36, r);
      vec3 col = mix(vColor * 0.55, vColor, smoothstep(0.42, 0.25, r));
      gl_FragColor = vec4(col, vAlpha * edge);
    }`;

  root.createPathView = function (THREE, canvas, overlay, RS) {
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0xfbfcfd, 1);
    const scene = new THREE.Scene();
    const cam = new THREE.OrthographicCamera(-XHALF, XHALF, 300, -300, -10, 10);

    // Atmosphere / Earth background, shaded per pixel from the physical altitude.
    const bgMat = new THREE.ShaderMaterial({
      vertexShader: BG_VERT, fragmentShader: BG_FRAG,
      uniforms: { uRE: { value: RS.R_E }, uHR: { value: RS.H_R }, uV: { value: V }, uOzone: { value: 1 } },
      depthTest: false,
    });
    const bg = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), bgMat);
    bg.renderOrder = 0;
    scene.add(bg);

    // Ground outline.
    const groundPts = [];
    for (let i = 0; i <= 200; i++) {
      const x = -XHALF * 1.1 + i * (2.2 * XHALF / 200);
      groundPts.push(new THREE.Vector3(x, (Math.sqrt(RS.R_E ** 2 - x * x) - RS.R_E) * V, 0));
    }
    const ground = new THREE.Line(new THREE.BufferGeometry().setFromPoints(groundPts),
      new THREE.LineBasicMaterial({ color: 0x6b6355 }));
    ground.renderOrder = 1;
    scene.add(ground);

    // Beam ribbon coloured by the light that is still travelling along it.
    const RIB = 160;
    const ribGeo = new THREE.BufferGeometry();
    ribGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array((RIB + 1) * 2 * 3), 3));
    ribGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array((RIB + 1) * 2 * 3), 3));
    const idx = [];
    for (let i = 0; i < RIB; i++) { const a = 2 * i; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    ribGeo.setIndex(idx);
    const ribbon = new THREE.Mesh(ribGeo, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.9, depthTest: false }));
    ribbon.renderOrder = 2;
    scene.add(ribbon);

    // Observer marker.
    const obs = new THREE.Mesh(new THREE.CircleGeometry(1, 24), new THREE.MeshBasicMaterial({ color: 0x111827, depthTest: false }));
    obs.renderOrder = 5;
    scene.add(obs);

    // Photons.
    const pos = new Float32Array(MAXP * 3), col = new Float32Array(MAXP * 3);
    const alp = new Float32Array(MAXP), siz = new Float32Array(MAXP);
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    pGeo.setAttribute('alpha', new THREE.BufferAttribute(alp, 1));
    pGeo.setAttribute('size', new THREE.BufferAttribute(siz, 1));
    const pMat = new THREE.ShaderMaterial({ vertexShader: PT_VERT, fragmentShader: PT_FRAG, transparent: true, depthTest: false,
      uniforms: { uScale: { value: renderer.getPixelRatio() } } });
    const points = new THREE.Points(pGeo, pMat);
    points.frustumCulled = false;
    points.renderOrder = 4;
    scene.add(points);

    // Photon state (physical coordinates).
    const P = [];
    for (let i = 0; i < MAXP; i++) P.push({ live: false });
    const BANDS = [
      { name: 'Violet–blue', lo: 400, hi: 490 },
      { name: 'Green', lo: 490, hi: 570 },
      { name: 'Yellow–orange', lo: 570, hi: 620 },
      { name: 'Red', lo: 620, hi: 700 },
    ];
    let stats, theory = [], params = null, sunE = 0.5, hObs = 0.2, sDir = [1, 0], start = [0, 0], beamLen = 0;
    let spawnAcc = 0, W = 1, Hpx = 1, yBottom = -300, yTop = 300;
    const CUM_N = 3000, cumR = new Float64Array(CUM_N + 1), cumM = new Float64Array(CUM_N + 1), cumO = new Float64Array(CUM_N + 1);
    let cumStep = 0;
    function resetStats() { stats = BANDS.map(() => ({ sent: 0, arrived: 0, scattered: 0, absorbed: 0 })); }
    resetStats();

    const altitude = (x, y) => Math.hypot(x, y + RS.R_E) - RS.R_E;
    const bandOf = nm => BANDS.findIndex(b => nm >= b.lo && nm < b.hi);

    function setState(p, e, h) {
      params = p; sunE = e; hObs = h;
      sDir = [Math.cos(e), Math.sin(e)];
      bgMat.uniforms.uOzone.value = p.ozone ? 1 : 0;
      // Start of the beam: where the ray from the observer toward the Sun leaves the atmosphere.
      const r = RS.R_E + h, mu = Math.sin(e);
      const blocked = mu < 0 && (r * mu) ** 2 - (r * r - RS.R_E ** 2) >= 0;
      beamLen = blocked ? 0 : -r * mu + Math.sqrt((r * mu) ** 2 - (r * r - RS.R_A ** 2));
      start = [sDir[0] * beamLen, h + sDir[1] * beamLen];
      // Cumulative optical depths along the beam, from the top of the atmosphere (s = 0) to the observer.
      cumStep = beamLen / CUM_N;
      for (let k = 0; k < CUM_N; k++) {
        const t = beamLen - (k + 0.5) * cumStep;                      // distance from the observer
        const hh = altitude(sDir[0] * t, h + sDir[1] * t);
        cumR[k + 1] = cumR[k] + RS.densR(hh) * cumStep;
        cumM[k + 1] = cumM[k] + RS.densM(hh) * cumStep;
        cumO[k + 1] = cumO[k] + RS.densO(hh) * cumStep;
      }
      // Theory: band-averaged direct transmittance exp(-tau) along the same path.
      theory = BANDS.map(b => {
        if (blocked) return 0;
        let s = 0, n = 0;
        for (let nm = b.lo + 1; nm < b.hi; nm += 2) {
          const tau = RS.betaRayleigh(nm, p) * cumR[CUM_N] + RS.betaMieExt(nm, p) * cumM[CUM_N] + RS.betaOzone(nm, p) * cumO[CUM_N];
          s += Math.exp(-tau); n++;
        }
        return s / n;
      });
      for (const ph of P) ph.live = false;
      resetStats();
      updateRibbon(blocked);
      layoutLabels(blocked);
    }

    function updateRibbon(blocked) {
      const pa = ribGeo.attributes.position.array, ca = ribGeo.attributes.color.array;
      const halfW = 3.2 * XHALF * 2 / Math.max(1, W);             // ~3 px in drawing units
      let oR = 0, oM = 0, oO = 0;
      const steps = 2000, ds = beamLen / steps;
      const Tcol = [];
      // integrate from the top of the atmosphere toward the observer, sampling RIB+1 points
      const sample = new Map();
      for (let i = 0; i <= RIB; i++) sample.set(Math.round(i * steps / RIB), i);
      for (let s = 0; s <= steps; s++) {
        if (sample.has(s)) {
          const S = RS.LAMBDA.map((nm, i) => RS.SUN[i] * Math.exp(-(params ? (RS.betaRayleigh(nm, params) * oR + RS.betaMieExt(nm, params) * oM + RS.betaOzone(nm, params) * oO) : 0)));
          Tcol[sample.get(s)] = RS.chroma(RS.spectrumToLinearRGB(S)).map(RS.encodeSRGB);
        }
        const t = (steps - s - 0.5) * ds;                            // distance from observer
        const x = sDir[0] * t, y = hObs + sDir[1] * t, h = altitude(x, y);
        oR += RS.densR(h) * ds; oM += RS.densM(h) * ds; oO += RS.densO(h) * ds;
      }
      for (let i = 0; i <= RIB; i++) {
        const t = beamLen * (1 - i / RIB);
        const x = sDir[0] * t, y = (hObs + sDir[1] * t) * V;
        // ribbon normal in drawing space
        const dx = sDir[0], dy = sDir[1] * V, L = Math.hypot(dx, dy);
        const qx = -dy / L * halfW, qy = dx / L * halfW;
        pa.set([x + qx, y + qy, 0, x - qx, y - qy, 0], 6 * i);
        const c = blocked ? [0.7, 0.7, 0.7] : Tcol[i];
        ca.set([...c, ...c], 6 * i);
      }
      ribGeo.attributes.position.needsUpdate = true;
      ribGeo.attributes.color.needsUpdate = true;
      ribbon.visible = !blocked;
    }

    // Every photon travels the exact observer–Sun line, so its statistics match the theory column;
    // the spread across the drawn beam (ph.j) is cosmetic and applied only when drawing.
    // The first interaction is sampled at launch (free path with P(τ > τ*) = e^{-τ*}), so the tally
    // counts each photon once, as soon as it is sent, with no bias from photons still in flight.
    function spawn(ph) {
      const nm = 400 + Math.random() * 300;
      ph.live = true; ph.nm = nm; ph.band = bandOf(nm); ph.scattered = false; ph.fade = 1;
      ph.j = Math.random() * 2 - 1;
      ph.x = start[0]; ph.y = start[1];
      ph.dx = -sDir[0]; ph.dy = -sDir[1];
      ph.s = 0;                                       // distance travelled along the beam
      ph.c = RS.wavelengthColor(nm);
      const me = RS.betaMieExt(nm, params);
      ph.bR = RS.betaRayleigh(nm, params); ph.bMs = me * RS.MIE_ALBEDO; ph.bAbs = me * (1 - RS.MIE_ALBEDO);
      ph.bO = RS.betaOzone(nm, params);
      const tau = k => ph.bR * cumR[k] + me * cumM[k] + ph.bO * cumO[k];
      const tStar = -Math.log(1 - Math.random());
      const st = stats[ph.band];
      st.sent++;
      if (tStar >= tau(CUM_N)) { ph.fate = 'arrive'; ph.fateS = beamLen; st.arrived++; return; }
      let lo = 0, hi = CUM_N;                         // tau(lo) < tStar <= tau(hi)
      while (hi - lo > 1) { const m = (lo + hi) >> 1; if (tau(m) < tStar) lo = m; else hi = m; }
      const f = (tStar - tau(lo)) / Math.max(1e-12, tau(hi) - tau(lo));
      ph.fateS = (lo + f) * cumStep;
      const t = beamLen - ph.fateS, hh = altitude(sDir[0] * t, hObs + sDir[1] * t);
      const sca = ph.bR * RS.densR(hh) + ph.bMs * RS.densM(hh);
      const ext = sca + ph.bAbs * RS.densM(hh) + ph.bO * RS.densO(hh);
      if (Math.random() * ext < sca) { ph.fate = 'scatter'; st.scattered++; } else { ph.fate = 'absorb'; st.absorbed++; }
    }

    function scatter(ph) {
      ph.scattered = true;
      const th = samplePhaseAngle() * (Math.random() < 0.5 ? -1 : 1);
      const c = Math.cos(th), s = Math.sin(th);
      const nx = ph.dx * c - ph.dy * s, ny = ph.dx * s + ph.dy * c;
      ph.dx = nx; ph.dy = ny;
    }

    function samplePhaseAngle() {               // Rayleigh phase: p(mu) ∝ 1 + mu^2, by rejection
      for (;;) { const m = Math.random() * 2 - 1; if (Math.random() * 2 < 1 + m * m) return Math.acos(m); }
    }

    function inView(x, yv) { return x > -XHALF * 1.05 && x < XHALF * 1.05 && yv > yBottom - 20 && yv < yTop + 20; }

    function step(dt) {
      if (!params || beamLen === 0) return;
      // Spawn
      spawnAcc += dt * 260;
      for (let i = 0; i < P.length && spawnAcc >= 1; i++) if (!P[i].live) { spawn(P[i]); spawnAcc -= 1; }
      spawnAcc = Math.min(spawnAcc, 5);
      const vVis = 0.42 * XHALF;                // drawing units per second
      for (const ph of P) {
        if (!ph.live) continue;
        if (ph.fade < 1) { ph.fade -= dt * 2.5; if (ph.fade <= 0) ph.live = false; continue; }
        const inside = inView(ph.x, ph.y * V);
        const vis = Math.hypot(ph.dx, ph.dy * V);
        let remaining = vVis * dt / vis * (inside ? 1 : 12);   // physical km to advance this frame
        if (!ph.scattered) {
          // Direct beam: move along the line to the pre-sampled interaction point.
          const ds = Math.min(remaining, ph.fateS - ph.s);
          ph.s += ds; ph.x += ph.dx * ds; ph.y += ph.dy * ds;
          if (ph.s >= ph.fateS - 1e-9) {
            if (ph.fate === 'scatter') scatter(ph);
            else ph.fade = 0.999;                 // reached the observer, or absorbed
          }
        } else {
          // After the first scattering: free random walk, sampled step by step (multiple scattering).
          while (remaining > 0 && ph.fade === 1) {
            const ds = Math.min(remaining, 2.0);
            remaining -= ds;
            ph.x += ph.dx * ds; ph.y += ph.dy * ds;
            const h = altitude(ph.x, ph.y);
            if (h < 0) { ph.fade = 0.999; break; }
            if (h > RS.H_TOP + 1) { ph.live = false; break; }
            const tauS = (ph.bR * RS.densR(h) + ph.bMs * RS.densM(h)) * ds;
            const tauA = (ph.bO * RS.densO(h) + ph.bAbs * RS.densM(h)) * ds;
            if (Math.random() < 1 - Math.exp(-tauA)) { ph.fade = 0.999; break; }
            if (Math.random() < 1 - Math.exp(-tauS)) { scatter(ph); break; }
          }
        }
        if (ph.live && !inView(ph.x, ph.y * V) && ph.scattered) ph.live = false;
      }
      // Upload
      const L = Math.hypot(sDir[0], sDir[1] * V), jw = BEAM_PX * 2 * XHALF / Math.max(1, W);
      const jx = -sDir[1] * V / L * jw, jy = sDir[0] / L * jw;
      let n = 0;
      for (const ph of P) {
        if (!ph.live) continue;
        pos[3 * n] = ph.x + ph.j * jx; pos[3 * n + 1] = ph.y * V + ph.j * jy; pos[3 * n + 2] = 0;
        col[3 * n] = ph.c[0]; col[3 * n + 1] = ph.c[1]; col[3 * n + 2] = ph.c[2];
        const a = ph.fade < 1 ? ph.fade : 1;
        alp[n] = (ph.scattered ? 0.75 : 0.95) * a;
        siz[n] = ph.scattered ? 4.2 : 4.8;
        n++;
      }
      pGeo.setDrawRange(0, n);
      for (const k of ['position', 'color', 'alpha', 'size']) pGeo.attributes[k].needsUpdate = true;
    }

    // HTML labels positioned in drawing coordinates.
    const labels = {};
    function label(key, html, cls) {
      if (!labels[key]) { const el = document.createElement('div'); el.className = 'pv-label ' + (cls || ''); overlay.appendChild(el); labels[key] = el; }
      labels[key].innerHTML = html;
      return labels[key];
    }
    function place(el, x, yv, ax = 0, ay = 0) {
      const px = (x - cam.left) / (cam.right - cam.left) * W;
      const py = (cam.top - yv) / (cam.top - cam.bottom) * Hpx;
      el.style.left = px + 'px'; el.style.top = py + 'px';
      el.style.transform = `translate(${-ax * 100}%, ${-ay * 100}%)`;
    }
    function layoutLabels(blocked) {
      if (!W) return;
      place(label('obs', 'You'), 0, hObs * V - 8, 0.5, 0);
      for (const h of [10, 20, 30]) {
        const xl = -XHALF * 0.3;
        const yv = (Math.sqrt(RS.R_E ** 2 - xl * xl) - RS.R_E + h) * V;
        place(label('h' + h, h + ' km', 'muted'), xl, yv, 0.5, 1.05);
      }
      const eDeg = sunE * 180 / Math.PI;
      const sunTxt = blocked ? 'Sun below the horizon: no direct beam reaches you'
        : `Sunlight path inside the atmosphere: <b>${beamLen.toFixed(0)} km</b>`;
      const pxU = (cam.top - cam.bottom) / Hpx;
      place(label('path', sunTxt, 'strong'), -XHALF * 0.97, yBottom + 10 * pxU, 0, 1);
      place(label('note', `Sun elevation ${eDeg.toFixed(1)}° · heights drawn ×${V}`, 'muted'), XHALF * 0.97, yBottom + 10 * pxU, 1, 1);
      if (!blocked) {
        // Arrow label at the point where the beam enters the view.
        let t = beamLen;
        for (let i = 0; i < 400; i++) { const x = sDir[0] * t, yv = (hObs + sDir[1] * t) * V; if (x < XHALF * 0.9 && yv < yTop - 40 * pxU) break; t *= 0.97; }
        const steep = Math.abs(sDir[1] * V) > Math.abs(sDir[0]);
        if (steep) place(label('sun', 'from the Sun', 'sun'), sDir[0] * t + 10 * pxU, (hObs + sDir[1] * t) * V, 0, 0.5);
        else place(label('sun', 'from the Sun', 'sun'), sDir[0] * t, (hObs + sDir[1] * t) * V + 16 * pxU, 1, 1);
        labels.sun.style.display = '';
      } else if (labels.sun) labels.sun.style.display = 'none';
    }

    function resize(w, h) {
      W = w; Hpx = h;
      renderer.setSize(w, h, false);
      const visH = 2 * XHALF * h / w;
      yBottom = (Math.sqrt(RS.R_E ** 2 - XHALF ** 2) - RS.R_E) * V - 0.10 * visH;
      yTop = yBottom + visH;
      cam.left = -XHALF; cam.right = XHALF; cam.bottom = yBottom; cam.top = yTop; cam.updateProjectionMatrix();
      bg.scale.set(2 * XHALF, visH, 1); bg.position.set(0, (yBottom + yTop) / 2, 0);
      const pxUnit = 2 * XHALF / w;
      obs.scale.set(4.5 * pxUnit, 4.5 * pxUnit, 1);
      obs.position.set(0, hObs * V, 0);
      pMat.uniforms.uScale.value = renderer.getPixelRatio();
      if (params) { updateRibbon(beamLen === 0); layoutLabels(beamLen === 0); }
    }

    return {
      setState(p, e, h) { setState(p, e, h); obs.position.set(0, h * V, 0); },
      frame(dt, running) { if (running) step(Math.min(dt, 0.05)); renderer.render(scene, cam); },
      resize,
      stats: () => ({ bands: BANDS, stats, theory }),
      resetStats,
    };
  };
})(window);
