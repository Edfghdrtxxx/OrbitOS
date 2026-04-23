const fs = require('fs');
const crypto = require('crypto');

const svg = fs.readFileSync('test-formula.svg', 'utf8');

// Replace the ex-unit dimensions with px so the image has a deterministic size.
// We keep the viewBox so vector scaling still works.
const widthMatch = svg.match(/width="([0-9.]+)ex"/);
const heightMatch = svg.match(/height="([0-9.]+)ex"/);
const exPx = 8; // 1ex ≈ 8px at 16px root
const pxW = Math.round(parseFloat(widthMatch[1]) * exPx);
const pxH = Math.round(parseFloat(heightMatch[1]) * exPx);
const svgPx = svg
  .replace(/width="[0-9.]+ex"/, `width="${pxW}"`)
  .replace(/height="[0-9.]+ex"/, `height="${pxH}"`);

const dataURL = 'data:image/svg+xml;base64,' + Buffer.from(svgPx).toString('base64');
const fileId = crypto.createHash('sha1').update(svgPx).digest('hex');
const now = Date.now();

// Scale for Excalidraw canvas — make it legible without hand-editing.
const scale = 3;
const imgW = pxW * scale;
const imgH = pxH * scale;

const excalidraw = {
  type: 'excalidraw',
  version: 2,
  source: 'https://github.com/zsviczian/obsidian-excalidraw-plugin',
  elements: [
    {
      id: 'title',
      type: 'text',
      x: 80, y: 40,
      width: 600, height: 32,
      angle: 0,
      strokeColor: '#1864ab',
      backgroundColor: 'transparent',
      fillStyle: 'solid',
      strokeWidth: 2, strokeStyle: 'solid',
      roughness: 1, opacity: 100,
      text: 'LaTeX pre-render probe',
      fontSize: 22, fontFamily: 3,
      textAlign: 'left', verticalAlign: 'top',
      baseline: 24,
      containerId: null, originalText: 'LaTeX pre-render probe',
      seed: 1, versionNonce: 1, isDeleted: false, boundElements: [],
      updated: now, link: null, locked: false,
      autoResize: true, lineHeight: 1.2, version: 1, index: 'a0',
      groupIds: [], frameId: null, roundness: null, hasTextLink: false,
      rawText: 'LaTeX pre-render probe',
    },
    {
      id: 'eqn-img',
      type: 'image',
      x: 80, y: 110,
      width: imgW, height: imgH,
      angle: 0,
      strokeColor: 'transparent',
      backgroundColor: 'transparent',
      fillStyle: 'solid',
      strokeWidth: 1, strokeStyle: 'solid',
      roughness: 0, opacity: 100,
      seed: 2, versionNonce: 2, isDeleted: false, boundElements: [],
      updated: now, link: null, locked: false,
      version: 1, index: 'a1',
      groupIds: [], frameId: null, roundness: null, hasTextLink: false,
      status: 'saved',
      fileId: fileId,
      scale: [1, 1],
      crop: null,
    },
    {
      id: 'caption',
      type: 'text',
      x: 80, y: 110 + imgH + 20,
      width: 800, height: 24,
      angle: 0,
      strokeColor: '#495057',
      backgroundColor: 'transparent',
      fillStyle: 'solid',
      strokeWidth: 2, strokeStyle: 'solid',
      roughness: 1, opacity: 100,
      text: 'σ_DC(E) ∝ S_f |I_L(E)|² / v   (rendered: MathJax → SVG → base64 → image element)',
      fontSize: 14, fontFamily: 3,
      textAlign: 'left', verticalAlign: 'top',
      baseline: 16,
      containerId: null, originalText: 'σ_DC(E) ∝ S_f |I_L(E)|² / v   (rendered: MathJax → SVG → base64 → image element)',
      seed: 3, versionNonce: 3, isDeleted: false, boundElements: [],
      updated: now, link: null, locked: false,
      autoResize: true, lineHeight: 1.2, version: 1, index: 'a2',
      groupIds: [], frameId: null, roundness: null, hasTextLink: false,
      rawText: 'caption',
    },
  ],
  appState: {
    theme: 'light',
    viewBackgroundColor: '#ffffff',
    currentItemFontFamily: 3,
    gridSize: 20,
    zoom: { value: 1 },
  },
  files: {
    [fileId]: {
      mimeType: 'image/svg+xml',
      id: fileId,
      dataURL: dataURL,
      created: now,
      lastRetrieved: now,
    },
  },
};

fs.writeFileSync(
  'D:/obsidian/OrbitOS/50_Resources/Attachments/latex_probe.excalidraw',
  JSON.stringify(excalidraw, null, 2)
);
console.log('Wrote latex_probe.excalidraw');
console.log('  fileId:', fileId);
console.log('  SVG size:', pxW, 'x', pxH, 'px  → image element:', imgW, 'x', imgH, 'px');
