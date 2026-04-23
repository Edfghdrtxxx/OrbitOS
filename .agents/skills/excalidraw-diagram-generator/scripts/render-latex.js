#!/usr/bin/env node
// Render LaTeX math in an .excalidraw file to embedded vector SVG images.
//
// Workflow:
//   1. Author the .excalidraw with normal `text` elements whose content is a
//      plain-text fallback (read if LaTeX fails), and tag each one with
//      `customData.latex: "<TeX source>"`. Optionally also set
//      `customData.latexDisplay: true` for display-mode math (\\frac, \\sum
//      rendered large); omit or false for inline labels.
//   2. Run:  node render-latex.js <path-to.excalidraw>
//   3. Each tagged text element is replaced in place with an `image` element
//      whose base64 SVG is added to the `files` dict. Colour is preserved from
//      the original `strokeColor`. The image is scaled (aspect-preserved) to
//      fit inside the original text element's (x, y, width, height) box.
//
// Re-runs are idempotent: image elements carry `customData.latex` so repeated
// invocations regenerate the SVG and update the fileId deterministically.
//
// Prerequisite (one-time):  npm install -g mathjax-full
//                    or:    cd <scratch>; npm install mathjax-full; and set
//                           NODE_PATH=<scratch>/node_modules before invoking.
//
// Tradeoff: the rendered formulas are not editable as LaTeX inside the
// Excalidraw UI (they're static SVG images). Obsidian Excalidraw's native
// Ctrl+Shift+L LaTeX feature stays the right choice when the user will edit
// equations by hand; this script is for author-time rendering of figures.

const fs = require('fs');
const path = require('path');
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

const EX_PX = 8;  // 1 ex ≈ 8 px at a 16-px root font — MathJax's native scale

function renderSVG(latex, display, color) {
  const node = html.convert(latex, { display });
  let s = adaptor.innerHTML(node);
  const w = s.match(/width="([0-9.]+)ex"/);
  const h = s.match(/height="([0-9.]+)ex"/);
  if (!w || !h) throw new Error(`MathJax produced no ex dimensions for: ${latex}`);
  const pxW = Math.round(parseFloat(w[1]) * EX_PX);
  const pxH = Math.round(parseFloat(h[1]) * EX_PX);
  s = s.replace(/width="[0-9.]+ex"/, `width="${pxW}"`)
       .replace(/height="[0-9.]+ex"/, `height="${pxH}"`);
  // MathJax emits `currentColor`; in a data-URL <img> that resolves to black.
  // Bake in the caller's hex so panel palette survives.
  if (color) s = s.split('currentColor').join(color);
  const fileId = crypto.createHash('sha1').update(s).digest('hex');
  const dataURL = 'data:image/svg+xml;base64,' + Buffer.from(s).toString('base64');
  return { pxW, pxH, fileId, dataURL };
}

function convertElement(el, doc, now) {
  const cd = el.customData || {};
  const latex = cd.latex;
  if (!latex) return null;
  const display = !!cd.latexDisplay;
  // Colour precedence: customData.color (stashed on first render, so re-runs
  // stay idempotent) > strokeColor (first run from a plain text element) >
  // near-black default. Without the customData stash, re-runs would silently
  // turn panel colours black because the image element's strokeColor is
  // 'transparent' by construction.
  const color = cd.color
    || (el.strokeColor && el.strokeColor !== 'transparent' ? el.strokeColor : '#1e1e1e');
  const { pxW, pxH, fileId, dataURL } = renderSVG(latex, display, color);

  // Fit aspect-preserved inside the original (x, y, width, height) box.
  const origW = el.width || pxW;
  const origH = el.height || pxH;
  let scale;
  if (display) {
    scale = Math.min(origW / pxW, origH / pxH);
  } else {
    // Inline mode: scale height to match the text element's height, as long
    // as that does not blow out the width.
    scale = Math.min(origH / pxH, origW / pxW);
  }
  const w = pxW * scale;
  const h = pxH * scale;
  const x = (el.x || 0) + (origW - w) / 2;
  const y = (el.y || 0) + (origH - h) / 2;

  // No-op short-circuit: if the element is already an image with the same
  // fileId + latex + display, the render is byte-identical. Return the
  // element unchanged so re-runs don't churn version/timestamp fields and
  // pollute git history.
  if (el.type === 'image' && el.fileId === fileId
      && cd.latexDisplay === display && cd.color === color) {
    if (!doc.files[fileId]) {
      doc.files[fileId] = { mimeType: 'image/svg+xml', id: fileId, dataURL, created: now, lastRetrieved: now };
    }
    return el;
  }

  if (!doc.files[fileId]) {
    doc.files[fileId] = {
      mimeType: 'image/svg+xml', id: fileId,
      dataURL, created: now, lastRetrieved: now,
    };
  }

  return {
    id: el.id,
    type: 'image',
    x, y, width: w, height: h,
    angle: 0,
    strokeColor: 'transparent',
    backgroundColor: 'transparent',
    fillStyle: 'solid',
    strokeWidth: 1, strokeStyle: 'solid',
    roughness: 0, opacity: 100,
    seed: el.seed || Math.floor(Math.random() * 2147483647),
    versionNonce: (el.versionNonce || 0) + 1,
    isDeleted: false, boundElements: [],
    updated: now, link: null, locked: false,
    version: (el.version || 1) + 1,
    index: el.index,
    groupIds: el.groupIds || [],
    frameId: el.frameId || null,
    roundness: null,
    hasTextLink: false,
    status: 'saved',
    fileId,
    scale: [1, 1],
    crop: null,
    customData: { latex, latexDisplay: display, color },
  };
}

function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('Usage: node render-latex.js <path-to.excalidraw>');
    process.exit(2);
  }
  const abs = path.resolve(file);
  const doc = JSON.parse(fs.readFileSync(abs, 'utf8'));
  doc.files = doc.files || {};
  const now = Date.now();
  const referenced = new Set();
  let converted = 0;

  for (let i = 0; i < doc.elements.length; i++) {
    const el = doc.elements[i];
    // Accept either text elements tagged with customData.latex (first-pass),
    // or image elements already tagged (re-renders — regenerate SVG).
    const isCandidate =
      (el.type === 'text' || el.type === 'image') &&
      el.customData && el.customData.latex;
    if (!isCandidate) {
      if (el.type === 'image' && el.fileId) referenced.add(el.fileId);
      continue;
    }
    const next = convertElement(el, doc, now);
    if (next) {
      doc.elements[i] = next;
      referenced.add(next.fileId);
      converted++;
      console.log(`  ${next.id}: ${Math.round(next.width)}×${Math.round(next.height)} at (${Math.round(next.x)}, ${Math.round(next.y)})  ${el.customData.latexDisplay ? 'display' : 'inline'}`);
    }
  }

  // Drop orphan file entries so the JSON stays lean across re-runs.
  for (const fid of Object.keys(doc.files)) {
    if (!referenced.has(fid)) delete doc.files[fid];
  }

  fs.writeFileSync(abs, JSON.stringify(doc, null, '\t'));
  console.log(`\nRendered ${converted} LaTeX element(s) → ${abs}`);
}

main();
