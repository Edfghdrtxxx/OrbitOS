/* Ground-view sky renderer: spectral single scattering ray-marched per pixel on the GPU.
   Classic script; index.html calls window.createSkyView(THREE, canvas, RS). */
(function (root) {
  'use strict';

  const VERT = /* glsl */`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

  const FRAG = /* glsl */`
    precision highp float;
    varying vec2 vUv;
    #define PI 3.141592653589793
    uniform sampler2D uOD;            // optical depth to the top of the atmosphere (km): R, M, O, blocked
    uniform vec2 uLutSize;
    uniform sampler2D uMS;            // multiple-scattering radiance per unit solar irradiance (scaled)
    uniform vec2 uMSSize;
    uniform float uMSScale, uMSOn;
    uniform vec4 uBR[4];              // Rayleigh scattering at sea level, km^-1, 16 spectral bins
    uniform vec4 uBMs[4];             // aerosol scattering
    uniform vec4 uBMe[4];             // aerosol extinction
    uniform vec4 uBO[4];              // ozone absorption at peak density
    uniform vec4 uSun[4];             // solar irradiance, W m^-2 nm^-1
    uniform vec4 uAmb[4];             // horizontal sky irradiance, W m^-2 nm^-1
    uniform vec4 uAlbR[4];            // mountain albedo
    uniform vec4 uCX[4]; uniform vec4 uCY[4]; uniform vec4 uCZ[4];
    uniform vec3 uWB;
    uniform vec3 uSunDir;
    uniform float uObsR, uRE, uRA, uHR, uHM, uHTop, uMieG, uSunCos, uExposure, uMountains;
    uniform vec3 uFwd, uRight, uUp;
    uniform float uTanHalf, uAspect, uFisheye;
    uniform vec3 uBg;

    vec3 lookupOD(float r, float mu, out float vis) {
      float h = clamp(r - uRE, 0.0, uHTop);
      float x = 0.5 + 0.5 * sign(mu) * sqrt(abs(mu));
      float y = sqrt(h / uHTop);
      vec2 uv = (vec2(x, y) * (uLutSize - 1.0) + 0.5) / uLutSize;
      vec4 s = texture2D(uOD, uv);
      vis = 1.0 - s.a;
      return s.rgb;
    }

    float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }

    // Mountain ridges at fixed distances; azimuth phi measured from the Sun's azimuth (+z).
    float ridgeHeight(int i, float phi) {
      float a = float(i) * 1.7;
      float n = 0.50 + 0.22 * sin(3.0 * phi + a) + 0.14 * sin(7.0 * phi + 2.0 * a) + 0.08 * sin(17.0 * phi + 0.3 + a)
              + 0.04 * sin(41.0 * phi + 1.1 * a) + 0.02 * sin(97.0 * phi + a);
      float valley = 1.0 - 0.92 * exp(-phi * phi / 0.16);   // open sea toward the setting Sun
      float base = i == 0 ? 0.20 : (i == 1 ? 1.25 : 4.6);
      return base * n * valley;
    }
    float ridgeSlope(int i, float phi) { return (ridgeHeight(i, phi + 0.002) - ridgeHeight(i, phi - 0.002)) / 0.004; }
    float ridgeDist(int i) { return i == 0 ? 5.0 : (i == 1 ? 19.0 : 58.0); }

    void main() {
      // ----- view ray -----
      vec2 p = vUv * 2.0 - 1.0;
      vec3 d;
      if (uFisheye > 0.5) {
        vec2 q = vec2(p.x * uAspect, p.y);
        float rr = length(q);
        if (rr > 1.0) { gl_FragColor = vec4(uBg, 1.0); return; }
        float th = rr * 0.5 * PI, ps = atan(q.x, q.y);
        d = normalize(vec3(sin(th) * sin(ps), cos(th), sin(th) * cos(ps)));
      } else {
        d = normalize(uFwd + uRight * p.x * uTanHalf * uAspect + uUp * p.y * uTanHalf);
      }

      vec3 o = vec3(0.0, uObsR, 0.0);
      float b = dot(o, d);
      float tEnd = -b + sqrt(max(0.0, b * b - (uObsR * uObsR - uRA * uRA)));
      int hitKind = 0;                       // 0 sky, 1 ground/sea, 2 mountain
      vec3 nrm = vec3(0.0, 1.0, 0.0);
      float dg = b * b - (uObsR * uObsR - uRE * uRE);
      if (b < 0.0 && dg >= 0.0) { tEnd = max(0.0, -b - sqrt(dg)); hitKind = 1; nrm = normalize(o + d * tEnd); }

      if (uMountains > 0.5) {
        float phi = atan(d.x, d.z);
        float el = asin(clamp(d.y, -1.0, 1.0));
        vec3 hdir = normalize(vec3(d.x, 0.0, d.z));
        vec3 tang = vec3(hdir.z, 0.0, -hdir.x);
        for (int i = 0; i < 3; i++) {
          float D = ridgeDist(i);
          float top = atan((ridgeHeight(i, phi) - (uObsR - uRE) - D * D / (2.0 * uRE)) / D);
          float t = D / max(cos(el), 1e-3);
          if (el < top && t < tEnd) {
            tEnd = t; hitKind = 2;
            nrm = normalize(-hdir + vec3(0.0, 0.85, 0.0) - tang * ridgeSlope(i, phi) / D * 1.4);
            break;
          }
        }
      }

      // ----- single scattering along the ray -----
      float mu = dot(d, uSunDir);
      float pR = 3.0 / (16.0 * PI) * (1.0 + mu * mu);
      float g = uMieG, g2 = g * g;
      float pM = 3.0 / (8.0 * PI) * (1.0 - g2) * (1.0 + mu * mu) / ((2.0 + g2) * pow(1.0 + g2 - 2.0 * g * mu, 1.5));

      vec4 L0 = vec4(0.0), L1 = vec4(0.0), L2 = vec4(0.0), L3 = vec4(0.0);
      vec3 odV = vec3(0.0);
      float tPrev = 0.0;
      const int N = 40;
      for (int i = 0; i < N; i++) {
        float u = float(i + 1) / float(N);
        float t1 = tEnd * u * u;
        float ds = t1 - tPrev;
        vec3 x = o + d * (0.5 * (t1 + tPrev));
        float r = length(x), h = r - uRE;
        float hc = max(h, 0.0);
        vec3 dens = vec3(exp(-hc / uHR), exp(-hc / uHM), max(0.0, 1.0 - abs(h - 25.0) / 15.0));
        float vis, muS = dot(x, uSunDir) / r;
        vec3 cv = odV + 0.5 * dens * ds;
        vec3 od = cv + lookupOD(r, muS, vis);
        float wR = dens.x * pR * ds * vis, wM = dens.y * pM * ds * vis;
        L0 += exp(-(uBR[0] * od.x + uBMe[0] * od.y + uBO[0] * od.z)) * (uBR[0] * wR + uBMs[0] * wM);
        L1 += exp(-(uBR[1] * od.x + uBMe[1] * od.y + uBO[1] * od.z)) * (uBR[1] * wR + uBMs[1] * wM);
        L2 += exp(-(uBR[2] * od.x + uBMe[2] * od.y + uBO[2] * od.z)) * (uBR[2] * wR + uBMs[2] * wM);
        L3 += exp(-(uBR[3] * od.x + uBMe[3] * od.y + uBO[3] * od.z)) * (uBR[3] * wR + uBMs[3] * wM);
        if (uMSOn > 0.5) {
          // Multiple scattering: isotropic radiance Psi(h, muS) from the CPU table, 4 tiles of 4 wavelengths.
          float xs = 0.5 + 0.5 * clamp(muS, -1.0, 1.0);
          float v = (0.5 + sqrt(clamp(h / uHTop, 0.0, 1.0)) * (uMSSize.y - 1.0)) / uMSSize.y;
          float xi = 0.5 + xs * (uMSSize.x - 1.0);
          float W4 = 4.0 * uMSSize.x;
          float dR = dens.x * ds, dM = dens.y * ds;
          L0 += exp(-(uBR[0] * cv.x + uBMe[0] * cv.y + uBO[0] * cv.z)) * (uBR[0] * dR + uBMs[0] * dM) * texture2D(uMS, vec2(xi / W4, v)) * uMSScale;
          L1 += exp(-(uBR[1] * cv.x + uBMe[1] * cv.y + uBO[1] * cv.z)) * (uBR[1] * dR + uBMs[1] * dM) * texture2D(uMS, vec2((xi + uMSSize.x) / W4, v)) * uMSScale;
          L2 += exp(-(uBR[2] * cv.x + uBMe[2] * cv.y + uBO[2] * cv.z)) * (uBR[2] * dR + uBMs[2] * dM) * texture2D(uMS, vec2((xi + 2.0 * uMSSize.x) / W4, v)) * uMSScale;
          L3 += exp(-(uBR[3] * cv.x + uBMe[3] * cv.y + uBO[3] * cv.z)) * (uBR[3] * dR + uBMs[3] * dM) * texture2D(uMS, vec2((xi + 3.0 * uMSSize.x) / W4, v)) * uMSScale;
        }
        odV += dens * ds;
        tPrev = t1;
      }
      L0 *= uSun[0]; L1 *= uSun[1]; L2 *= uSun[2]; L3 *= uSun[3];

      // Transmittance from the camera to the end of the ray.
      vec4 T0 = exp(-(uBR[0] * odV.x + uBMe[0] * odV.y + uBO[0] * odV.z));
      vec4 T1 = exp(-(uBR[1] * odV.x + uBMe[1] * odV.y + uBO[1] * odV.z));
      vec4 T2 = exp(-(uBR[2] * odV.x + uBMe[2] * odV.y + uBO[2] * odV.z));
      vec4 T3 = exp(-(uBR[3] * odV.x + uBMe[3] * odV.y + uBO[3] * odV.z));

      if (hitKind == 0) {
        // Sun disk with limb darkening; radiance = irradiance / solid angle.
        if (mu > uSunCos) {
          float a = acos(clamp(uSunCos, -1.0, 1.0));
          float rr = acos(clamp(mu, -1.0, 1.0)) / a;
          float limb = (1.0 - 0.6 * (1.0 - sqrt(max(0.0, 1.0 - rr * rr)))) / (1.0 - 0.6 / 3.0);
          float k = limb / (PI * a * a);
          L0 += T0 * uSun[0] * k; L1 += T1 * uSun[1] * k; L2 += T2 * uSun[2] * k; L3 += T3 * uSun[3] * k;
        }
      } else {
        // Lambertian surface lit by the attenuated Sun plus sky irradiance; then aerial perspective.
        vec3 x = o + d * tEnd;
        float r = length(x);
        float vis;
        vec3 od = lookupOD(r, dot(x, uSunDir) / r, vis);
        float cosI = max(0.0, dot(nrm, uSunDir)) * vis;
        vec4 a0 = hitKind == 2 ? uAlbR[0] : vec4(0.06), a1 = hitKind == 2 ? uAlbR[1] : vec4(0.06);
        vec4 a2 = hitKind == 2 ? uAlbR[2] : vec4(0.06), a3 = hitKind == 2 ? uAlbR[3] : vec4(0.06);
        float amb = hitKind == 2 ? 0.55 : 1.0;
        L0 += T0 * a0 / PI * (uSun[0] * exp(-(uBR[0] * od.x + uBMe[0] * od.y + uBO[0] * od.z)) * cosI + uAmb[0] * amb);
        L1 += T1 * a1 / PI * (uSun[1] * exp(-(uBR[1] * od.x + uBMe[1] * od.y + uBO[1] * od.z)) * cosI + uAmb[1] * amb);
        L2 += T2 * a2 / PI * (uSun[2] * exp(-(uBR[2] * od.x + uBMe[2] * od.y + uBO[2] * od.z)) * cosI + uAmb[2] * amb);
        L3 += T3 * a3 / PI * (uSun[3] * exp(-(uBR[3] * od.x + uBMe[3] * od.y + uBO[3] * od.z)) * cosI + uAmb[3] * amb);
      }

      // ----- spectrum -> CIE XYZ -> linear sRGB -> exposure -> hue-preserving tone map -----
      vec3 xyz = vec3(dot(L0, uCX[0]) + dot(L1, uCX[1]) + dot(L2, uCX[2]) + dot(L3, uCX[3]),
                      dot(L0, uCY[0]) + dot(L1, uCY[1]) + dot(L2, uCY[2]) + dot(L3, uCY[3]),
                      dot(L0, uCZ[0]) + dot(L1, uCZ[1]) + dot(L2, uCZ[2]) + dot(L3, uCZ[3]));
      vec3 c = mat3(3.2406, -0.9689, 0.0557, -1.5372, 1.8758, -0.2040, -0.4986, 0.0415, 1.0570) * xyz;
      c *= uWB * uExposure;
      float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
      float mn = min(c.r, min(c.g, c.b));
      if (mn < 0.0 && lum > 0.0) c = lum + (c - lum) * (lum / (lum - mn));
      c = max(c, 0.0);
      float m = max(c.r, max(c.g, c.b));
      float mt = (m * (2.51 * m + 0.03)) / (m * (2.43 * m + 0.59) + 0.14);   // ACES fit (Narkowicz)
      c = m > 1e-8 ? c * (mt / m) : vec3(0.0);
      c = clamp(c, 0.0, 1.0);
      c = mix(12.92 * c, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
      c += (hash12(gl_FragCoord.xy) - 0.5) / 255.0;
      gl_FragColor = vec4(c, 1.0);
    }`;

  function vec4Array(THREE, arr) {
    const out = [];
    for (let k = 0; k < 4; k++) out.push(new THREE.Vector4(arr[4 * k], arr[4 * k + 1], arr[4 * k + 2], arr[4 * k + 3]));
    return out;
  }

  root.createSkyView = function (THREE, canvas, RS, lut) {
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.autoClear = false;

    // Optical-depth LUT as a half-float texture (linear filtering is core in WebGL2 for RGBA16F).
    const half = new Uint16Array(lut.length);
    for (let i = 0; i < lut.length; i++) half[i] = THREE.DataUtils.toHalfFloat(lut[i]);
    const tex = new THREE.DataTexture(half, RS.LUT_W, RS.LUT_H, THREE.RGBAFormat, THREE.HalfFloatType);
    tex.minFilter = tex.magFilter = THREE.LinearFilter;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.needsUpdate = true;

    // Multiple-scattering table: 4 horizontal tiles (4 wavelengths each), values ×1000 for half-float range.
    const MS_SCALE = 1000;
    const msData = new Uint16Array(RS.MS_W * 4 * RS.MS_H * 4);
    const msTex = new THREE.DataTexture(msData, RS.MS_W * 4, RS.MS_H, THREE.RGBAFormat, THREE.HalfFloatType);
    msTex.minFilter = msTex.magFilter = THREE.LinearFilter;
    msTex.wrapS = msTex.wrapT = THREE.ClampToEdgeWrapping;
    function setMS(ms) {
      for (let j = 0; j < RS.MS_H; j++) for (let i = 0; i < RS.MS_W; i++) for (let l = 0; l < 16; l++) {
        const k = l >> 2, c = l & 3;
        msData[4 * (j * RS.MS_W * 4 + k * RS.MS_W + i) + c] = THREE.DataUtils.toHalfFloat(ms[(j * RS.MS_W + i) * 16 + l] * MS_SCALE);
      }
      msTex.needsUpdate = true;
    }

    const albedo = RS.LAMBDA.map(nm => 0.07 + 0.07 * (nm - 380) / 360 + 0.03 * Math.exp(-(((nm - 555) / 35) ** 2)));
    const zero16 = new Array(16).fill(0);
    const U = {
      uOD: { value: tex }, uLutSize: { value: new THREE.Vector2(RS.LUT_W, RS.LUT_H) },
      uMS: { value: msTex }, uMSSize: { value: new THREE.Vector2(RS.MS_W, RS.MS_H) },
      uMSScale: { value: 1 / MS_SCALE }, uMSOn: { value: 1 },
      uBR: { value: vec4Array(THREE, zero16) }, uBMs: { value: vec4Array(THREE, zero16) },
      uBMe: { value: vec4Array(THREE, zero16) }, uBO: { value: vec4Array(THREE, zero16) },
      uSun: { value: vec4Array(THREE, RS.SUN) }, uAmb: { value: vec4Array(THREE, zero16) },
      uAlbR: { value: vec4Array(THREE, albedo) },
      uCX: { value: vec4Array(THREE, RS.CMF_W[0]) }, uCY: { value: vec4Array(THREE, RS.CMF_W[1]) },
      uCZ: { value: vec4Array(THREE, RS.CMF_W[2]) },
      uWB: { value: new THREE.Vector3(...RS.WB) },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uObsR: { value: RS.R_E + 0.2 }, uRE: { value: RS.R_E }, uRA: { value: RS.R_A }, uHR: { value: RS.H_R },
      uHM: { value: RS.H_M }, uHTop: { value: RS.H_TOP }, uMieG: { value: RS.MIE_G },
      uSunCos: { value: Math.cos(0.2666 * Math.PI / 180) }, uExposure: { value: 1 }, uMountains: { value: 1 },
      uFwd: { value: new THREE.Vector3(0, 0, 1) }, uRight: { value: new THREE.Vector3(-1, 0, 0) },
      uUp: { value: new THREE.Vector3(0, 1, 0) }, uTanHalf: { value: Math.tan(35 * Math.PI / 180) },
      uAspect: { value: 1.6 }, uFisheye: { value: 0 }, uBg: { value: new THREE.Vector3(0.973, 0.98, 0.988) },
    };
    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms: U, depthTest: false, depthWrite: false });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    quad.frustumCulled = false;
    const scene = new THREE.Scene();
    scene.add(quad);
    const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    function setArr(name, arr) {
      const v = U[name].value;
      for (let k = 0; k < 4; k++) v[k].set(arr[4 * k], arr[4 * k + 1], arr[4 * k + 2], arr[4 * k + 3]);
    }

    // view: { yaw, pitch, fov (deg), fisheye }; pane: { sunDir, exposure, ambient }
    function renderPane(x, y, w, h, view, pane, shared) {
      setArr('uBR', shared.co.bR); setArr('uBMs', shared.co.bMs); setArr('uBMe', shared.co.bMe); setArr('uBO', shared.co.bO);
      setArr('uAmb', pane.ambient);
      U.uSunDir.value.set(...pane.sunDir);
      U.uExposure.value = pane.exposure;
      U.uObsR.value = RS.R_E + shared.hObs;
      U.uMountains.value = shared.mountains ? 1 : 0;
      U.uMSOn.value = shared.multiple ? 1 : 0;
      U.uFisheye.value = view.fisheye ? 1 : 0;
      const cy = Math.cos(view.pitch), sy = Math.sin(view.pitch);
      const fwd = new THREE.Vector3(Math.sin(view.yaw) * cy, sy, Math.cos(view.yaw) * cy);
      const right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize();
      const up = new THREE.Vector3().crossVectors(right, fwd).normalize();
      U.uFwd.value.copy(fwd); U.uRight.value.copy(right); U.uUp.value.copy(up);
      U.uTanHalf.value = Math.tan(view.fov * Math.PI / 360);
      U.uAspect.value = w / h;
      renderer.setViewport(x, y, w, h);
      renderer.setScissor(x, y, w, h);
      renderer.setScissorTest(true);
      renderer.render(scene, cam);
    }

    return {
      renderer,
      setMS,
      resize(w, h) { renderer.setSize(w, h, false); },
      render(panes, view, shared) {
        const size = renderer.getSize(new THREE.Vector2());
        const W = size.x, H = size.y;
        if (panes.length === 1) renderPane(0, 0, W, H, view, panes[0], shared);
        else {
          const half = Math.floor(W / 2);
          renderPane(0, 0, half - 1, H, view, panes[0], shared);
          renderPane(half + 1, 0, W - half - 1, H, view, panes[1], shared);
        }
      },
    };
  };
})(window);
