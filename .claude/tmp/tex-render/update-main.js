const fs = require('fs');
const crypto = require('crypto');
const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
const { AllPackages } = require('mathjax-full/js/input/tex/AllPackages.js');

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const tex = new TeX({ packages: AllPackages });
const svg = new SVG({ fontCache: 'none' });
const html = mathjax.document('', { InputJax: tex, OutputJax: svg });

function renderSVG(latex, display, color) {
  const node = html.convert(latex, { display });
  let s = adaptor.innerHTML(node);
  const w = s.match(/width="([0-9.]+)ex"/);
  const h = s.match(/height="([0-9.]+)ex"/);
  const ex = 8;
  const pxW = Math.round(parseFloat(w[1]) * ex);
  const pxH = Math.round(parseFloat(h[1]) * ex);
  s = s.replace(/width="[0-9.]+ex"/, `width="${pxW}"`)
       .replace(/height="[0-9.]+ex"/, `height="${pxH}"`);
  // MathJax output uses `currentColor`; data-URL SVG in an <img> resolves that
  // to black. Bake the caller's hex color in so panel palette survives.
  if (color) s = s.replaceAll('currentColor', color);
  const fileId = crypto.createHash('sha1').update(s).digest('hex');
  const dataURL = 'data:image/svg+xml;base64,' + Buffer.from(s).toString('base64');
  return { pxW, pxH, fileId, dataURL, svg: s };
}

// Display formulas: fit inside a bounding box (aspect preserved, centred).
const displayFormulas = [
  {
    match: ['σ_DC(E) ∝', '\\sigma_{\\text{DC}}'],
    latex: '\\sigma_{\\text{DC}}(E) \\;\\propto\\; S_{f}\\,\\bigl|\\langle \\phi_{f}\\,|\\,\\hat{O}_{\\text{EM}}\\,|\\,\\chi_{i}(E) \\rangle\\bigr|^{2}',
    box: [80, 410, 400, 90],
    color: '#1864ab',
  },
  {
    match: ['σ_BW(E)', '\\sigma_{\\text{BW}}'],
    latex: '\\begin{aligned} \\sigma_{\\text{BW}}(E) &= \\frac{\\pi}{k^{2}}\\, g_{J}\\, \\frac{\\Gamma_{a}\\,\\Gamma_{\\gamma}}{(E-E_{R})^{2} + (\\Gamma_{\\text{tot}}/2)^{2}} \\\\[2pt] \\omega\\gamma &= g_{J}\\,\\frac{\\Gamma_{a}\\Gamma_{\\gamma}}{\\Gamma_{\\text{tot}}} \\quad \\text{(resonance strength)} \\end{aligned}',
    box: [580, 400, 400, 120],
    color: '#2f9e44',
  },
  {
    match: ['Stellar rate:', '\\sigma v \\rangle_{\\text{tot}}'],
    latex: '\\text{Stellar rate:} \\;\\; \\langle \\sigma v \\rangle_{\\text{tot}}(T) \\;=\\; \\langle \\sigma v \\rangle_{\\text{DC}} \\;+\\; \\sum_{R} \\langle \\sigma v \\rangle_{\\text{RC},R}',
    box: [120, 535, 820, 50],
    color: '#1864ab',
  },
];

// Inline math labels: match by text content, preserve (x, y), scale height to
// match original element's height so the label sits in place like real text.
const inlineLabels = [
  {
    match: ['continuum:  a + X'],
    latex: '\\text{continuum: } a + X \\;\\;\\text{(entrance channel)}',
  },
  {
    match: ['Y*_f'],
    latex: 'Y^{*}_{f}',
    heightBoost: 1.3,  // subscript crops tight; give a little headroom
  },
  {
    match: ['Y g.s.'],
    latex: 'Y\\;\\text{g.s.}',
  },
  {
    match: ['γ  (E1/M1)'],
    latex: '\\gamma \\;(E1/M1)',
  },
  {
    match: ['Y*  (J^π, Γ)'],
    latex: 'Y^{*}\\;(J^{\\pi},\\,\\Gamma)',
  },
  {
    match: ['formation  Γ_a'],
    latex: '\\text{formation } \\Gamma_{a}',
  },
  {
    match: ['γ  (Γ_γ)'],
    latex: '\\gamma \\;(\\Gamma_{\\gamma})',
  },
];

const mainPath = 'D:/obsidian/OrbitOS/50_Resources/Attachments/Direct_Capture_vs_Resonance_mechanism.excalidraw';
const doc = JSON.parse(fs.readFileSync(mainPath, 'utf8'));
doc.files = doc.files || {};
const now = Date.now();
const referencedIds = new Set();

function textOf(el) {
  return [el.text || '', el.originalText || '', (el.customData && el.customData.latexSource) || ''];
}
// Deterministic matcher. Text elements: match by substring of their text.
// Image elements (re-runs): match by EXACT equality of customData.latexSource
// to the spec's latex — no positional fallback, so nothing cross-contaminates.
function matchDisplay(el, spec) {
  if (el.type === 'text') {
    const h = textOf(el);
    return spec.match.some(m => h.some(t => t.includes(m)));
  }
  if (el.type === 'image' && el.customData && el.customData.latexSource) {
    return el.customData.latexSource === spec.latex;
  }
  return false;
}
function matchInline(el, spec) {
  if (el.type === 'text') {
    const h = textOf(el);
    return spec.match.some(m => h.some(t => t.includes(m)));
  }
  if (el.type === 'image' && el.customData && el.customData.latexSource) {
    return el.customData.latexSource === spec.latex;
  }
  return false;
}

function makeImageElement(el, w, h, x, y, fileId, latex) {
  return {
    id: el.id,
    type: 'image',
    x, y, width: w, height: h,
    angle: 0,
    strokeColor: 'transparent',
    backgroundColor: 'transparent',
    fillStyle: 'solid',
    strokeWidth: 1,
    strokeStyle: 'solid',
    roughness: 0,
    opacity: 100,
    seed: el.seed || Math.floor(Math.random() * 2147483647),
    versionNonce: (el.versionNonce || 0) + 1,
    isDeleted: false,
    boundElements: [],
    updated: now,
    link: null,
    locked: false,
    version: (el.version || 1) + 1,
    index: el.index,
    groupIds: [],
    frameId: null,
    roundness: null,
    hasTextLink: false,
    status: 'saved',
    fileId,
    scale: [1, 1],
    crop: null,
    customData: { latexSource: latex },
  };
}

function addFile(fileId, dataURL) {
  if (!doc.files[fileId]) {
    doc.files[fileId] = { mimeType: 'image/svg+xml', id: fileId, dataURL, created: now, lastRetrieved: now };
  }
  referencedIds.add(fileId);
}

for (let i = 0; i < doc.elements.length; i++) {
  const el = doc.elements[i];

  const df = displayFormulas.find(f => matchDisplay(el, f));
  if (df) {
    const { pxW, pxH, fileId, dataURL } = renderSVG(df.latex, true, df.color);
    const [bx, by, bw, bh] = df.box;
    const scale = Math.min(bw / pxW, bh / pxH);
    const w = pxW * scale;
    const h = pxH * scale;
    const x = bx + (bw - w) / 2;
    const y = by + (bh - h) / 2;
    addFile(fileId, dataURL);
    doc.elements[i] = makeImageElement(el, w, h, x, y, fileId, df.latex);
    console.log(`display ${el.id}: ${Math.round(w)}×${Math.round(h)} at (${Math.round(x)}, ${Math.round(y)})`);
    continue;
  }

  const il = inlineLabels.find(f => matchInline(el, f));
  if (il) {
    // Preserve original color from text element; default monochrome.
    const color = el.strokeColor && el.strokeColor !== 'transparent' ? el.strokeColor : '#1e1e1e';
    const { pxW, pxH, fileId, dataURL } = renderSVG(il.latex, false, color);
    // Scale so image height ≈ original text element height × heightBoost (1 default).
    const origH = el.height || 22;
    const targetH = origH * (il.heightBoost || 1.0);
    const scale = targetH / pxH;
    const w = pxW * scale;
    const h = pxH * scale;
    addFile(fileId, dataURL);
    doc.elements[i] = makeImageElement(el, w, h, el.x, el.y, fileId, il.latex);
    console.log(`inline  ${el.id}: ${Math.round(w)}×${Math.round(h)} at (${Math.round(el.x)}, ${Math.round(el.y)})  [${color}]`);
    continue;
  }
}

// Retain only referenced files (drops orphaned base64 from earlier runs).
for (const e of doc.elements) if (e.type === 'image' && e.fileId) referencedIds.add(e.fileId);
for (const fid of Object.keys(doc.files)) if (!referencedIds.has(fid)) delete doc.files[fid];

fs.writeFileSync(mainPath, JSON.stringify(doc, null, '\t'));
console.log('\nWrote', mainPath);
