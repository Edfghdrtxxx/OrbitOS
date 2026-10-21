/**
 * DREB2026 contributed talk — F. Shi, 10Be 7.3 MeV level via 9Be + n (SAMURAI)
 * Source: assets/src/DREB_Meeting_SFS_v2.pptx (presenter's v2). Figures: assets/fig_*.png, cropped from it.
 * Generic academic profile (no LG chrome). Light theme. Arial + Fira Math (assets/eq via render_eq.py).
 *
 * Colour roles (fixed for the whole deck):
 *   coral = 1⁻ at 7.27 MeV (Chen et al. 2025) · teal = 3⁻ at 7.371 MeV (ENSDF) · ink = undisputed levels
 *   amber dashed = number the presenter must supply (TBD) · navy = structure
 */
const pptxgen = require("pptxgenjs");
const path = require("path");

const ROOT = __dirname;
const A = (f) => path.join(ROOT, "assets", f);
const EQ = require("./assets/eq/meta.json");
const FONT = "Times New Roman";   // body; the header title keeps the presenter's Arial (HEAD_FONT)
const HEAD_FONT = "Arial";
const W = 13.333;
const MX = 0.6;
const RIGHT = W - MX;
const TOTAL = 10;

const C = {
  ink: "111827", navy: "1B2D4F", muted: "5B6472", faint: "8A94A6", rule: "DDE2E8",
  card: "F5F7FA", white: "FFFFFF",
  coral: "E4572E", coralSoft: "FCE9E3", teal: "128C7E", tealSoft: "E1F3F0",
  amber: "B7791F", amberSoft: "FDF3E1", navySoft: "E3E9F2",
};

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "Fushuai Shi";
pres.title = "Probing Exotic Structures in 10Be via 9Be + n Coincidence Measurements";
pres.theme = { headFontFace: FONT, bodyFontFace: FONT };

// ── rich text: ^{sup} _{sub} *italic* ──────────────────────────
function rich(str, o = {}) {
  const out = [];
  for (const tok of str.split(/(\^\{[^}]*\}|_\{[^}]*\}|\*[^*]+\*)/)) {
    if (!tok) continue;
    if (tok.startsWith("^{")) out.push({ text: tok.slice(2, -1), options: { ...o, superscript: true } });
    else if (tok.startsWith("_{")) out.push({ text: tok.slice(2, -1), options: { ...o, subscript: true } });
    else if (tok.startsWith("*") && tok.length > 2) out.push({ text: tok.slice(1, -1), options: { ...o, italic: true } });
    else out.push({ text: tok, options: { ...o } });
  }
  return out;
}
// paragraphs: array of strings or [string, runOpts]; joins with breakLine
function paras(list) {
  const out = [];
  list.forEach((p, i) => {
    const [s, o] = Array.isArray(p) ? p : [p, {}];
    const runs = rich(s, o);
    if (i < list.length - 1) runs[runs.length - 1].options.breakLine = true;
    out.push(...runs);
  });
  return out;
}
function T(slide, s, x, y, w, h, o = {}) {
  const runs = Array.isArray(s) ? s : rich(s);
  slide.addText(runs, { x, y, w, h, fontFace: FONT, fontSize: 14, color: C.ink, margin: 0, valign: "top", ...o });
}
function rect(slide, x, y, w, h, fill, o = {}) {
  slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: fill, ...(o.tr != null ? { transparency: o.tr } : {}) }, line: o.line || { type: "none" } });
}
function rrect(slide, x, y, w, h, fill, o = {}) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: o.r ?? 0.08, fill: { color: fill }, line: o.line || { type: "none" } });
}
function line(slide, x1, y1, x2, y2, color, width = 1, dash) {
  slide.addShape(pres.shapes.LINE, {
    x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1), h: Math.abs(y2 - y1),
    flipH: (x2 < x1) !== (y2 < y1) && x1 !== x2 && y1 !== y2,
    line: { color, width, ...(dash ? { dashType: dash } : {}) },
  });
}
function img(slide, file, x, y, { w, h, px }) {
  // keep aspect: give w or h plus pixel size [W,H]
  if (w && !h) h = (w * px[1]) / px[0];
  if (h && !w) w = (h * px[0]) / px[1];
  slide.addImage({ path: A(file), x, y, w, h });
  return { x, y, w, h };
}
function eq(slide, name, x, y) {
  const m = EQ[name];
  slide.addImage({ path: A(`eq/${name}.png`), x, y, w: m.wIn, h: m.hIn });
  return m;
}
function pill(slide, s, x, y, w, fill, o = {}) {
  rrect(slide, x, y, w, 0.3, fill, { r: 0.15 });
  T(slide, rich(s, { bold: true, color: o.color || C.white }), x, y, w, 0.3, { fontSize: o.size || 11, align: "center", valign: "middle", charSpacing: o.cs ?? 1 });
}
// amber dashed chip = value the presenter must supply
function tbd(slide, s, x, y, w, h = 0.32, size = 12) {
  rrect(slide, x, y, w, h, C.amberSoft, { r: 0.06, line: { color: C.amber, width: 1, dashType: "dash" } });
  T(slide, rich(s, { bold: true, color: C.amber }), x, y, w, h, { fontSize: size, align: "center", valign: "middle" });
}
function cite(slide, s, x, y, w, o = {}) {
  T(slide, s, x, y, w, 0.24, { fontSize: 10, color: C.faint, ...o });
}
function label(slide, s, x, y, w, o = {}) {
  // small caps-style section label inside a slide; one size deck-wide
  const { fontSize, ...rest } = o;
  T(slide, s, x, y, w, 0.26, { bold: true, color: o.color || C.navy, charSpacing: 1.2, ...rest, fontSize: 11 });
}

// ── chrome: the presenter's own header band, logo and footer band, at their v2 coordinates ──
// The header rule is a placeholder line named HeaderRule; apply_chrome.py swaps in the v2 gradient line XML.
function header(slide, title) {
  slide.addText(rich(title, { bold: true, color: "000000" }), { x: 0.422, y: 0.049, w: 11.95, h: 0.503, fontFace: HEAD_FONT, fontSize: 24, valign: "top" });
  slide.addShape(pres.shapes.LINE, { x: 0, y: 0.5785, w: 13.305, h: 0, line: { color: "08294D", width: 3.5 }, objectName: "HeaderRule" });
  slide.addImage({ path: A("src/s03_p3.png"), x: 12.466, y: 0.0, w: 0.776, h: 0.763 });
}
function footer(slide) {
  slide.addImage({ path: A("src/s03_p1.png"), x: 0.001, y: 7.18, w: 13.332, h: 0.315 });
  slide.addText("DREB meeting", { x: 5.118, y: 7.14, w: 3.097, h: 0.369, fontFace: "Times New Roman", fontSize: 16, bold: true, color: "FFFFFF", align: "center", valign: "top" });
  slide.slideNumber = { x: 12.233, y: 7.162, w: 0.499, h: 0.347, fontFace: "Times New Roman", fontSize: 18, color: "FFFFFF" };
}
function backupSlide(title, notes) {
  const s = newSlide(title, notes);
  pill(s, "BACKUP", RIGHT - 1.3, 0.72, 1.05, C.faint, { size: 10 });
  return s;
}
function newSlide(title, notes) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  header(s, title);
  footer(s);
  if (notes) s.addNotes(notes);
  return s;
}

// ═════════════════════════════════════════════════════════════
// 1 — Title
// ═════════════════════════════════════════════════════════════
{
  // cover after 717 Velocity Filters.pptx slide 1 (geometry ×4/3 for 13.33 in): navy field, letter-spaced
  // kicker, white IMP mark + name top right, white serif title, faint rubbing of the setup bottom right
  const SERIF = "Times New Roman", PALE = "A8C4E8";
  const s = pres.addSlide();
  s.background = { color: "0F2F5C" };
  s.addImage({ path: A("cover_samurai_rubbing.png"), x: 6.95, y: 3.85, w: 6.1, h: (6.1 * 809) / 1504 });
  T(s, "DIRECT REACTIONS WITH EXOTIC BEAMS  ·  DREB2026", 0.8, 0.53, 8, 0.37, { fontFace: SERIF, fontSize: 16, bold: true, color: PALE, charSpacing: 2.1 });
  s.addImage({ path: A("imp_mark_white.png"), x: 9.24, y: 0.19, w: 0.77, h: 0.83 });
  T(s, "Institute of Modern Physics\nChinese Academy of Sciences", 10.23, 0.2, 3.0, 0.69, { fontFace: SERIF, fontSize: 15, bold: true, color: C.white, valign: "middle" });
  T(s, paras([
    ["Probing Exotic Structures in ^{10}Be", { fontSize: 46 }],
    ["via ^{9}Be + n Coincidence Measurements", { fontSize: 30 }],
    ["with the SAMURAI Spectrometer", { fontSize: 30 }],
  ]), 0.77, 1.55, 11.5, 2.3, { fontFace: SERIF, bold: true, color: C.white, lineSpacingMultiple: 1.08 });
  // cover palette only (white + PALE): no body colour codes, no amber TBD chip
  T(s, [
    ...rich("Near 7.3 MeV: a "), ...rich("1^{−}", { bold: true, color: C.white }),
    ...rich(", a "), ...rich("3^{−}", { bold: true, color: C.white }), ...rich(", or both?"),
  ], 0.8, 4.05, 7.5, 0.5, { fontFace: SERIF, fontSize: 22, color: PALE });
  T(s, "Fushuai Shi", 0.8, 4.96, 6, 0.53, { fontFace: SERIF, fontSize: 24, color: C.white });
  T(s, "1–6 Nov 2026  ·  Shenzhen, China", 0.8, 5.57, 6, 0.47, { fontFace: SERIF, fontSize: 17, color: PALE });
  T(s, "[ co-authors  ·  collaboration  ·  experiment ID ]", 0.8, 6.18, 7, 0.4, { fontFace: SERIF, fontSize: 15, italic: true, color: PALE });
  s.addNotes("Keep the submitted title (it is the one printed in the programme). Say: By the end of this talk you will know what our ⁹Be + n spectrum shows near 7.3 MeV and what will decide between 1⁻ and 3⁻. The question line tells the room what to listen for: one level with a disputed spin, or two levels. From slide 2 on, coral marks the 1⁻ assignment and teal the 3⁻ assignment. Replace the bracketed line with the co-authors, the collaboration and the experiment ID.");
}

// ═════════════════════════════════════════════════════════════
// 2 — Stakes: two assignments near 7.3 MeV
// ═════════════════════════════════════════════════════════════
{
  const s = newSlide("Two spin assignments compete near 7.3 MeV in ^{10}Be.",
    "Set the stakes before any method. A 2025 deuteron-scattering experiment reports a new 1⁻ state at 7.27(10) MeV. ENSDF lists a 3⁻ at 7.371 MeV, 0.1 MeV higher, which is only one standard deviation away. So the question is whether this is one level with a disputed spin or two levels. Point at the coral band touching the teal line.");
  const E0 = 6.7, yB = 6.55, k = 5.3;
  const y = (E) => yB - (E - E0) * k;
  // axis
  line(s, 1.3, y(7.7), 1.3, y(6.7), C.faint, 1);
  for (const e of [6.8, 7.0, 7.2, 7.4, 7.6]) {
    line(s, 1.22, y(e), 1.3, y(e), C.faint, 1);
    T(s, e.toFixed(1), 0.6, y(e) - 0.12, 0.56, 0.24, { fontSize: 12, color: C.muted, align: "right" });
  }
  T(s, rich("*E*_{x} (MeV)"), 0.6, 0.88, 1.4, 0.26, { fontSize: 12, color: C.muted });
  const bx = 2.9, bw = 3.0;
  // thresholds
  for (const [e, lab] of [[6.812, "^{9}Be + n threshold   *S*_{n} = 6.812"], [7.41, "^{6}He + α threshold   7.41"]]) {
    line(s, 1.3, y(e), bx + bw, y(e), C.faint, 1, "dash");
    T(s, rich(lab), 1.4, y(e) - 0.27, 2.9, 0.24, { fontSize: 12, color: C.muted });
  }
  // 7.27 ± 0.10 band
  rect(s, bx, y(7.37), bw, y(7.17) - y(7.37), C.coral, { tr: 84 });
  const lev = [
    [7.27, C.coral, "7.27(10) MeV  1^{−}", "Chen et al. 2025"],
    [7.371, C.teal, "7.371 MeV  3^{−}", "ENSDF"],
    [7.542, C.ink, "7.542 MeV  2^{+}", "ENSDF"],
  ];
  for (const [e, col, main, src] of lev) {
    line(s, bx, y(e), bx + bw, y(e), col, 3);
    T(s, [...rich(main, { bold: true, color: col, fontSize: 16 }), ...rich("   " + src, { color: C.muted, fontSize: 11 })],
      bx + bw + 0.18, y(e) - 0.15, 3.3, 0.3, { valign: "middle" });
  }
  T(s, "±1σ", bx + 0.08, y(7.17) - 0.27, 0.6, 0.24, { fontSize: 12, color: C.coral });
  // right: what each spin would mean
  const cxr = 9.35, cw = RIGHT - cxr;
  const cards = [
    [0.95, C.coral, "IF 1^{−}", "Carries a large fraction of the isoscalar-dipole sum rule: strong α clustering.", "J. Chen et al., PRL 134, 012502 (2025)"],
    [3.0, C.teal, "IF 3^{−}", "Matches the 3^{−} isobaric analog at 8.898 MeV in ^{10}B (*T* = 1).", "A. N. Kuchera et al., PRC 84, 054615 (2011)"],
  ];
  for (const [cy, col, tag, body, src] of cards) {
    rect(s, cxr, cy, cw, 1.85, C.card);
    rect(s, cxr, cy, 0.06, 1.85, col);
    pill(s, tag, cxr + 0.25, cy + 0.2, 0.9, col);
    T(s, rich(body), cxr + 0.25, cy + 0.62, cw - 0.45, 0.85, { fontSize: 15, lineSpacingMultiple: 1.05 });
    cite(s, src, cxr + 0.25, cy + 1.52, cw - 0.4);
  }
  T(s, rich("7.27(10) and 7.371 MeV differ by 1σ: one level with a disputed spin, or two levels?"),
    cxr, 5.1, cw, 1.2, { fontSize: 18, bold: true, color: C.navy, lineSpacingMultiple: 1.05 });
}

// ═════════════════════════════════════════════════════════════
// 3 — Outline (question chain)
// ═════════════════════════════════════════════════════════════
{
  // contents-slide chrome from v2 slide 2: full IMP logo, rule at 0.765 in, no footer band
  const s = pres.addSlide();
  s.background = { color: C.white };
  s.addImage({ path: A("src/s02_p0.png"), x: 8.997, y: 0.0368, w: 3.909, h: 0.6896 });
  s.addShape(pres.shapes.LINE, { x: 0, y: 0.7646, w: 13.305, h: 0, line: { color: "08294D", width: 3.5 }, objectName: "HeaderRule" });
  s.addNotes("Four questions; each answer raises the next. Why is the assignment disputed? Therefore we test it with a proton probe, and therefore we look at the ⁹Be + n spectrum. But that spectrum does not resolve the levels, so the last question is what will decide.");
  T(s, "Outline", MX, 1.15, 6, 0.6, { fontSize: 32, bold: true, color: C.navy });
  const qs = [
    "Why is the 7.3 MeV assignment disputed?",
    "How can a proton probe test it?",
    "What does the ^{9}Be + n spectrum show?",
    "What will decide 1^{−} versus 3^{−}?",
  ];
  const links = ["therefore", "therefore", "but"];
  const y0 = 2.2, dy = 1.2, cx = 1.5;
  line(s, cx, y0 + 0.3, cx, y0 + 3 * dy + 0.3, C.rule, 2);
  qs.forEach((q, i) => {
    const yy = y0 + i * dy;
    s.addShape(pres.shapes.OVAL, { x: cx - 0.3, y: yy, w: 0.6, h: 0.6, fill: { color: C.navy }, line: { color: C.white, width: 3 } });
    T(s, String(i + 1), cx - 0.3, yy, 0.6, 0.6, { fontSize: 20, bold: true, color: C.white, align: "center", valign: "middle" });
    T(s, rich(q), 2.3, yy, 9.8, 0.6, { fontSize: 26, valign: "middle" });
    if (i < 3) T(s, links[i], cx + 0.2, yy + 0.68, 1.8, 0.34, { fontSize: 16, italic: true, color: C.muted });
  });
}

// ═════════════════════════════════════════════════════════════
// 4 — Cluster bands (native level scheme)
// ═════════════════════════════════════════════════════════════
{
  const s = newSlide("^{10}Be’s cluster bands already contain a 3^{−} and a 2^{+} near 7.3 MeV.",
    "In the molecular-orbital picture the two valence neutrons occupy π or σ orbitals around the 2α core, and the levels group into bands. The 3⁻ at 7.37 MeV continues the (σπ) band; the 2⁺ at 7.54 MeV continues the (σ)² band. A 1⁻ at 7.27 MeV is not part of this scheme, so the spin of the level near 7.3 MeV decides whether a new cluster state exists.");
  const yB = 6.5, k = 0.505;
  const y = (E) => yB - E * k;
  line(s, 1.0, y(10.6), 1.0, y(0), C.faint, 1);
  for (const e of [0, 2, 4, 6, 8, 10]) {
    line(s, 0.92, y(e), 1.0, y(e), C.faint, 1);
    T(s, String(e), 0.4, y(e) - 0.12, 0.45, 0.24, { fontSize: 12, color: C.muted, align: "right" });
  }
  T(s, rich("*E*_{x} (MeV)"), 0.4, 0.8, 1.4, 0.24, { fontSize: 12, color: C.muted });
  const cols = [
    { x: 1.75, head: "(π)^{2}", col: C.navy, lv: [[0, "0^{+}", "g.s."], [3.37, "2^{+}", "3.37"]] },
    { x: 3.75, head: "(σ)^{2}", col: C.navy, lv: [[6.18, "0^{+}", "6.18"], [7.54, "2^{+}", "7.54"], [10.2, "(4^{+})", "10.2"]] },
    { x: 5.75, head: "(σπ)", col: C.navy, lv: [[5.96, "1^{−}", "5.96", 0.06], [6.26, "2^{−}", "6.26", -0.06], [7.37, "3^{−}", "7.37", 0, C.teal], [9.27, "4^{−}", "9.27"]] },
    { x: 7.75, head: "Chen 2025", col: C.coral, lv: [[7.27, "1^{−}", "7.27", 0, C.coral]] },
  ];
  const bw = 1.0;
  line(s, 1.0, y(6.81), 9.35, y(6.81), C.faint, 1, "dash");
  T(s, rich("*S*_{n} 6.81"), 8.82, y(6.81) + 0.03, 0.9, 0.24, { fontSize: 12, color: C.muted });
  for (const c of cols) {
    for (const [e, spin, en, nudge = 0, colr = C.ink] of c.lv) {
      line(s, c.x, y(e), c.x + bw, y(e), colr, colr === C.ink ? 2 : 3);
      T(s, rich(spin, { color: colr, bold: colr !== C.ink }), c.x - 0.67, y(e) - 0.13 + nudge, 0.61, 0.26, { fontSize: 14, align: "right" });
      T(s, en, c.x + bw + 0.06, y(e) - 0.13 + nudge, 0.7, 0.26, { fontSize: 14, color: colr === C.ink ? C.muted : colr, bold: colr !== C.ink });
    }
    T(s, rich(c.head, { bold: true, color: c.col }), c.x - 0.2, 6.68, bw + 0.4, 0.3, { fontSize: 15, align: "center" });
  }
  // right: reading
  const rx = 9.85, rw = RIGHT - rx;
  T(s, "Columns: orbitals of the two valence neutrons around the 2α core.", rx, 0.95, rw, 0.75, { fontSize: 13, color: C.muted });
  const pts = [
    [C.teal, "3^{−} at 7.37 MeV continues the (σπ) band."],
    [C.ink, "2^{+} at 7.54 MeV continues the (σ)^{2} band."],
    [C.coral, "A 1^{−} at 7.27 MeV adds a state outside this scheme."],
  ];
  pts.forEach(([col, t], i) => {
    const yy = 2.0 + i * 1.2;
    s.addShape(pres.shapes.OVAL, { x: rx, y: yy + 0.07, w: 0.16, h: 0.16, fill: { color: col } });
    T(s, rich(t), rx + 0.3, yy, rw - 0.3, 1.0, { fontSize: 15 });
  });
  cite(s, "Levels and configurations: W. von Oertzen et al., Phys. Rep. 432, 43 (2006). 7.27 MeV: J. Chen et al., PRL 134, 012502 (2025).", rx, 5.75, rw, { h: 0.8 });
}

// ═════════════════════════════════════════════════════════════
// 5 — Evidence on each side
// ═════════════════════════════════════════════════════════════
{
  const s = newSlide("The angular distribution points to 1^{−}, isobaric analogs to 3^{−}.",
    "Left: deuteron inelastic scattering on ¹⁰Be in inverse kinematics, measured with the AT-TPC coupled to SOLARIS. The angular distribution of the 7.27 MeV peak follows the L = 1 curve, hence 1⁻. Right: in ¹⁰B, the T = 1 analog of the 7.37 MeV level is a 3⁻ at 8.898 MeV, which supports 3⁻. Therefore we test the assignment with a different probe, ¹⁰Be(p,p′), and reconstruct Eₓ from the ⁹Be + n invariant mass.");
  // left: for 1-
  pill(s, "FOR 1^{−}", MX, 0.9, 1.05, C.coral);
  T(s, rich("^{10}Be + d → d′ + ^{10}Be^{*}  ·  AT-TPC + SOLARIS"), MX + 1.2, 0.9, 4.7, 0.3, { fontSize: 13, color: C.muted, valign: "middle" });
  img(s, "fig_chen_spec.png", MX, 1.4, { w: 2.55, px: [491, 499] });
  img(s, "fig_chen_ang.png", 3.3, 1.45, { w: 3.25, px: [445, 261] });
  T(s, rich("Data follow the 1^{−} (*L* = 1) curve."), 3.3, 3.5, 3.25, 0.55, { fontSize: 14, bold: true, color: C.coral });
  cite(s, "J. Chen et al., Phys. Rev. Lett. 134, 012502 (2025)", MX, 5.1, 5.8);
  line(s, 6.68, 0.95, 6.68, 5.3, C.rule, 1);
  // right: for 3-
  const rx = 6.95;
  pill(s, "FOR 3^{−}", rx, 0.9, 1.05, C.teal);
  T(s, rich("Isobaric analogs  ^{10}Be ↔ ^{10}B (*T* = 1)"), rx + 1.2, 0.9, 4.5, 0.3, { fontSize: 13, color: C.muted, valign: "middle" });
  img(s, "fig_analog.png", rx, 1.35, { w: 5.75, px: [780, 504] });
  cite(s, "A. N. Kuchera et al., Phys. Rev. C 84, 054615 (2011); NNDC", rx, 5.1, 5.8);
  // bottom: our test
  rect(s, MX, 5.55, RIGHT - MX, 1.0, C.card);
  rect(s, MX, 5.55, 0.06, 1.0, C.navy);
  T(s, [...rich("Our test:  ", { bold: true, color: C.navy }), ...rich("a proton probe, ^{10}Be(p,p′), with ^{9}Be + n in coincidence.")],
    MX + 0.3, 5.55, RIGHT - MX - 0.5, 1.0, { fontSize: 18, valign: "middle" });
}

// ═════════════════════════════════════════════════════════════
// 6 — Method
// ═════════════════════════════════════════════════════════════
{
  const s = newSlide("SAMURAI and NEBULA detect ^{9}Be + n from ^{10}Be(p,p′) in coincidence.",
    "A ¹⁰Be beam at 230 MeV/u hits a liquid-hydrogen target. The proton scatters inelastically and leaves ¹⁰Be excited above the neutron threshold; the excited ¹⁰Be decays to ⁹Be and a neutron. SAMURAI bends ⁹Be into FDC2 and HODF; the neutron flies straight to NEBULA. The invariant mass of the ⁹Be + n pair gives the energy above the neutron threshold; adding Sₙ gives the excitation energy.");
  img(s, "fig_setup.png", 0.4, 0.8, { w: 7.55, px: [1504, 809] });
  const rx = 8.15, rw = RIGHT - rx;
  label(s, "REACTION", rx, 0.88, rw, { color: C.muted, fontSize: 10 });
  T(s, rich("^{10}Be + p → p′ + ^{10}Be^{*} → ^{9}Be + n"), rx, 1.14, rw, 0.4, { fontSize: 19, bold: true, color: C.navy });
  const facts = [
    ["BEAM", "^{10}Be, 230 MeV/u, 2 × 10^{5} pps", "93 % purity · ^{18}O at 250 MeV/u on 10 mm ^{9}Be"],
    ["TARGET", "Liquid H_{2}, Φ 46 mm, 140 mg/cm^{2}", ""],
    ["FRAGMENT", "SAMURAI + FDC1, FDC2, HODF", "Runge–Kutta tracking → Bρ, A/Q"],
    ["NEUTRON", "NEBULA + NEBULA-Plus", "ε(1n) ≈ 40 %"],
  ];
  facts.forEach(([k, v, sub], i) => {
    const yy = 1.85 + i * 0.72;
    line(s, rx, yy - 0.08, RIGHT, yy - 0.08, C.rule, 0.75);
    label(s, k, rx, yy, 1.1, { color: C.muted, fontSize: 10 });
    T(s, rich(v), rx + 1.12, yy - 0.03, rw - 1.12, 0.3, { fontSize: 14 });
    if (sub) T(s, rich(sub), rx + 1.12, yy + 0.29, rw - 1.12, 0.3, { fontSize: 12, color: C.muted });
  });
  cite(s, paras([["Target: X. Wang et al., NIMA (2026) 172066", {}], ["NEBULA: T. Kobayashi et al., NIMB 317, 294 (2013)", {}]]), rx, 4.72, rw, { h: 0.4 });
  eq(s, "eq_minv", MX, 5.2);
  eq(s, "eq_ex", 6.9, 5.55);
}

// ═════════════════════════════════════════════════════════════
// 7 — Selections (merged PID slides)
// ═════════════════════════════════════════════════════════════
{
  const s = newSlide("Beam ID, fragment ID, and NEBULA timing select ^{9}Be + n events.",
    "Three checks, one per particle. Beam: BigRIPS ΔE versus time of flight from F3 to F7; ¹⁰Be is 93 % of the cocktail. Fragment: after Runge–Kutta tracking, ΔE in HODF versus A/Q separates ⁹Be from the lithium and helium isotopes. Neutron: after bar-by-bar alignment the prompt γ peak has σ = 258 ps. Details are in backup slides 12 to 14.");
  const cw = 3.85, gap = 0.29, top = 1.3, fh = 3.4;
  const xs = [MX, MX + cw + gap, MX + 2 * (cw + gap)];
  const heads = ["BEAM  ·  F7 ΔE vs TOF (F3–F7)", "FRAGMENT  ·  HODF ΔE vs A/Q", "NEUTRON  ·  NEBULA timing"];
  heads.forEach((h, i) => { label(s, h, xs[i], 0.85, cw, { fontSize: 10.5 }); line(s, xs[i], 1.17, xs[i] + cw, 1.17, C.rule, 0.75); });
  // beam PID + labels (positions carried over from the presenter's slide 6)
  const b = img(s, "fig_beam_pid.png", xs[0], 2.17, { w: cw, px: [1236, 782] });  // x-axis level with the other two panels
  const tag = (box, t, rx, ry, o = {}) => {
    const w = o.w || 0.5, h = 0.24;
    const x = box.x + rx * box.w - w / 2, yy = box.y + ry * box.h - h / 2;
        T(s, rich(t, { bold: true, color: o.color || C.ink, glow: { size: 6, opacity: 0.85, color: "FFFFFF" } }), x, yy, w, h, { fontSize: 11, align: "center", valign: "middle" });
  };
  for (const [t, rx, ry, w] of [["^{12}B", 0.224, 0.479], ["^{7}Li", 0.19, 0.667, 0.38], ["^{8}Li", 0.454, 0.674], ["^{11}Be", 0.561, 0.63], ["^{6}He", 0.72, 0.667], ["^{9}Li", 0.827, 0.612]]) tag(b, t, rx, ry, { w });
  tag(b, "^{10}Be", 0.385, 0.37, { color: C.coral, w: 0.56 });
  // fragment PID + labels (from the presenter's slide 7)
  const f = img(s, "fig_frag_pid.png", xs[1] + (cw - (fh * 735) / 645) / 2, top, { h: fh, px: [735, 645] });
  for (const [t, rx, ry, col, w] of [["^{9}Be", 0.318, 0.327, C.coral], ["^{7}Li", 0.389, 0.485], ["^{8}Li", 0.698, 0.474], ["^{9}Li", 0.86, 0.482, , 0.3], ["^{4}He", 0.266, 0.647], ["^{6}He", 0.86, 0.662, , 0.3]]) tag(f, t, rx, ry, { color: col, w });
  // neutron timing
  img(s, "fig_dt.png", xs[2] + (cw - (fh * 598) / 550) / 2, top, { h: fh, px: [598, 550] });
  T(s, rich("^{10}Be + Cu run"), xs[2] + 2.45, top + 0.4, 1.3, 0.24, { fontSize: 12, color: C.muted });
  // stat row
  const stats = [
    ["93 %", "of the beam is ^{10}Be"],
    ["^{9}Be", "selected in A/Q (Bρ + TOF) and ΔE"],
    ["σ = 258 ps", "prompt γ peak after bar-by-bar alignment"],
  ];
  stats.forEach(([big, small], i) => {
    rect(s, xs[i], 5.0, cw, 1.1, C.card);
    rect(s, xs[i], 5.0, 0.06, 1.1, C.navy);
    T(s, rich(big, { bold: true, color: C.navy }), xs[i] + 0.25, 5.07, cw - 0.4, 0.5, { fontSize: 24, valign: "middle" });
    T(s, rich(small), xs[i] + 0.25, 5.58, cw - 0.4, 0.45, { fontSize: 13, color: C.muted });
  });
}

// ═════════════════════════════════════════════════════════════
// 8 — Result
// ═════════════════════════════════════════════════════════════
{
  const s = newSlide("The ^{9}Be + n spectrum shows one peak just above the neutron threshold.",
    "Excitation energy from the ⁹Be + n invariant mass, 6 to 10 MeV. Red: neutron in either wall; blue: NEBULA only; green: NEBULA-Plus only. The ticks above the frame mark the 1⁻ assignment at 7.27, the 3⁻ at 7.371 and the 2⁺ at 7.542 MeV. One peak, no separation of the three levels at the present resolution. [Presenter: fill the centroid and σ from the fit and simulation; the histogram maximum sits near 7.5 MeV, so state how the centroid compares with 7.371 MeV.]");
  const fx = MX, fy = 1.55, fw = 6.2, PX = [753, 567];
  const fh = (fw * PX[1]) / PX[0];
  img(s, "fig_result_zoom.png", fx, fy, { w: fw, px: PX });
  const xE = (E) => fx + ((90.5 + (E - 6) * 143.75) / PX[0]) * fw;
  const yTop = fy + (8.5 / PX[1]) * fh, yBot = fy + (498 / PX[1]) * fh;
  const R = fy - 0.13; // tick tops; label tiers sit above
  // threshold
  line(s, xE(6.812), yTop, xE(6.812), yBot, C.faint, 1, "dash");
  // vertical label in the empty strip left of the threshold line, clear of the axis and the 6.5 MeV grid line
  T(s, rich("*S*_{n} = 6.812"), xE(6.812) - 0.7, yTop + 1.6, 1.0, 0.22, { fontSize: 12, color: C.muted, align: "center", rotate: 270 });
  // level ruler above the frame
  const marks = [
    [7.27, C.coral, "7.27  1^{−}", "low"],
    [7.371, C.teal, "7.371  3^{−}", "high"],
    [7.542, C.ink, "7.542  2^{+}", "low"],
  ];
  for (const [E, col, txt, tier] of marks) {
    const x = xE(E);
    line(s, x, yTop + 0.9, x, yBot, col, 0.75, "sysDot");
    line(s, x, R, x, yTop + 0.12, col, 2.25);
    if (tier === "high") {
      line(s, x, R - 0.28, x, R, col, 0.75);
      T(s, rich(txt, { bold: true, color: col }), x - 0.6, R - 0.52, 1.2, 0.24, { fontSize: 12, align: "center" });
    } else if (E < 7.371) {
      line(s, x - 0.12, R - 0.12, x, R, col, 0.75);
      T(s, rich(txt, { bold: true, color: col }), x - 1.17, R - 0.24, 1.0, 0.24, { fontSize: 12, align: "right" });
    } else {
      line(s, x + 0.12, R - 0.12, x, R, col, 0.75);
      T(s, rich(txt, { bold: true, color: col }), x + 0.17, R - 0.24, 1.0, 0.24, { fontSize: 12 });
    }
  }
  cite(s, "NB / NP: neutron in NEBULA / NEBULA-Plus; NB∪NP: either. Not acceptance-corrected.", fx, fy + fh + 0.04, fw + 0.4);
  // right: what it shows
  const rx = 7.25, rw = RIGHT - rx;
  label(s, "WHAT WE CAN SAY", rx, 1.55, rw, { color: C.muted, fontSize: 10.5 });
  const rows = [
    [C.navy, "One peak just above *S*_{n}.", null],
    [C.amber, "Peak centroid:", "fit → MeV"],
    [C.amber, "Resolution at *E*_{x} ≈ 7.4 MeV:  σ =", "simulation → keV"],
    [C.faint, "7.27, 7.371 and 7.542 MeV are not resolved; yields are not yet extracted.", null],
  ];
  let yy = 1.95;
  for (const [col, t, chip] of rows) {
    const h = t.length > 40 ? 1.0 : 0.75;
    rect(s, rx, yy, rw, h, C.card);
    rect(s, rx, yy, 0.06, h, col);
    T(s, rich(t), rx + 0.28, yy, chip ? 3.15 : rw - 0.45, h, { fontSize: 16, valign: "middle" });
    if (chip) tbd(s, chip, rx + 3.6, yy + 0.19, 1.7, 0.32);
    yy += h + 0.18;
  }
}

// ═════════════════════════════════════════════════════════════
// 9 — Next steps
// ═════════════════════════════════════════════════════════════
{
  const s = newSlide("Angular distributions and a lineshape fit can distinguish 1^{−} from 3^{−}.",
    "But the peak alone cannot tell the spins apart. Three steps will: clean the spectrum; measure the angular distribution of the peak and compare its shape with L = 1 and L = 3 calculations; and fit the lineshape with the simulated response, testing whether a 7.27 MeV term is needed on top of the known 7.371 and 7.542 MeV levels.");
  const cards = [
    ["1", "Clean the spectrum", "Subtract the empty-target run; correct for acceptance and efficiency."],
    ["2", "Measure dσ/dΩ", "Angular distribution of the peak against *L* = 1 and *L* = 3 reaction calculations."],
    ["3", "Fit the lineshape", "Simulated response with 7.371 MeV 3^{−} and 7.542 MeV 2^{+}: is a 7.27 MeV 1^{−} term needed?"],
  ];
  const gap = 0.17, cw = (RIGHT - MX - 2 * gap) / 3;
  cards.forEach(([n, h, b], i) => {
    const x = MX + i * (cw + gap);
    rect(s, x, 0.95, cw, 3.25, C.card);
    rect(s, x, 0.95, 0.06, 3.25, C.navy);
    T(s, n, x + 0.3, 1.2, 0.8, 0.7, { fontSize: 40, bold: true, color: C.navy });
    T(s, rich(h), x + 0.3, 2.0, cw - 0.5, 0.4, { fontSize: 20, bold: true });
    T(s, rich(b), x + 0.3, 2.52, cw - 0.55, 1.6, { fontSize: 18, color: C.muted, lineSpacingMultiple: 1.05 });
  });
  // outcomes
  label(s, "OUTCOME", MX, 4.5, 3, { color: C.muted });
  const ow = (3 * cw + gap) / 2, ox1 = MX, ox2 = MX + ow + gap;  // outcome cards on the step-card grid
  for (const [x, col, t1, t2] of [
    [ox1, C.coral, "*L* = 1 part and a 7.27 MeV term needed", "→  a 1^{−} beside the 3^{−}"],
    [ox2, C.teal, "*L* = 3 shape, no extra term", "→  the 3^{−} alone"],
  ]) {
    rect(s, x, 4.9, ow, 1.3, C.card);
    rect(s, x, 4.9, 0.06, 1.3, col);
    T(s, paras([[t1, {}], [t2, {}]]), x + 0.3, 4.9, ow - 0.45, 1.3, { fontSize: 18, bold: true, color: col, valign: "middle" });
  }
}

// ═════════════════════════════════════════════════════════════
// 10 — Contributions
// ═════════════════════════════════════════════════════════════
{
  const s = newSlide("Contributions",
    "Leave this slide up during questions. Say: These are the three points I would like you to take away. Thank you for your attention.");
  const items = [
    "A ^{9}Be + n invariant-mass spectrum of ^{10}Be from (p,p′) at 230 MeV/u: independent data on the 7.3 MeV region.",
    "One peak just above *S*_{n}; 7.27, 7.371 and 7.542 MeV are not resolved.",
    "Angular-distribution and lineshape analysis will test the 1^{−} assignment.",
  ];
  items.forEach((t, i) => {
    const yy = 1.55 + i * 1.85;
    T(s, String(i + 1), MX, yy - 0.25, 0.8, 0.9, { fontSize: 44, bold: true, color: C.navy });
    T(s, rich(t), MX + 1.0, yy, RIGHT - MX - 1.0, 1.2, { fontSize: 24, lineSpacing: 30 });
    if (i < 2) line(s, MX + 1.0, yy + 1.5, RIGHT, yy + 1.5, C.rule, 0.75);
  });
}

// ═════════════════════════════════════════════════════════════
// Backup
// ═════════════════════════════════════════════════════════════
{
  const s = backupSlide("(p,pα) knockout supports a molecular-like 2α ground state.",
    "Triple-differential ¹⁰Be(p,pα)⁶He cross section compared with AMD and THSR calculations; the data follow the molecular-like density, between the shell-model-like and gas-like limits. AMD: antisymmetrized molecular dynamics. THSR: the Tohsaki–Horiuchi–Schuck–Röpke wave function.");
  label(s, "^{10}Be(p,pα)^{6}He", MX, 0.85, 5);
  img(s, "fig_ppa_xs.png", MX, 1.25, { h: 5.0, px: [487, 504] });
  const d = img(s, "fig_ppa_dens.png", 5.6, 1.6, { w: 7.0, px: [433, 284] });
  [["(a) shell-model-like", 0.243], ["(b) molecular-like", 0.498], ["(c) gas-like", 0.752]].forEach(([t, rx]) =>
    T(s, t, d.x + rx * d.w - 1.0, d.y + d.h + 0.08, 2.0, 0.26, { fontSize: 12, align: "center", color: C.muted }));
  cite(s, "P. J. Li et al., PRL 131, 212501 (2023); M. Lyu et al., PRC 93, 054308 (2016); PRC 97, 044612 (2018)", MX, 6.6, 12);
}
{
  const s = backupSlide("BDC1 and BDC2 track each ^{10}Be ion to the Φ 46 mm target.",
    "BigRIPS identifies each ion by ΔE and time of flight from F3 to F7 (slide 7); BDC1 and BDC2 track each ion to the target plane. Red circle: target cell, Φ 46 mm.");
  label(s, "BigRIPS  ·  F3 → F7 time of flight", MX, 0.85, 6);
  img(s, "fig_bigrips.png", MX, 1.2, { w: 6.0, px: [919, 210] });
  label(s, "BDC1 → BDC2 → target", 7.0, 0.85, 5.7);
  img(s, "fig_bdc.png", 7.0, 1.2, { w: 5.7, px: [1240, 296] });
  label(s, "Target plane  ·  all beam", MX, 3.0, 3.7);
  img(s, "fig_target_xy.png", MX, 3.35, { h: 3.3, px: [902, 794] });
  label(s, "Target plane  ·  beam trigger", MX + 3.85, 3.0, 3.7);
  img(s, "fig_target_xy_trig.png", MX + 3.85, 3.35, { h: 3.3, px: [920, 815] });
  img(s, "fig_target_photo.png", 8.4, 3.35, { h: 2.9, px: [434, 309] });
  cite(s, "Target cell: X. Wang et al., NIMA (2026) 172066", 8.4, 6.42, 4.5);
}
{
  const s = backupSlide("Runge–Kutta tracking through the field map gives Bρ and A/Q.",
    "Steps: local fits in FDC1 and FDC2; seed at the HOD plane from FDC2; RK4 backward through the 3-D field map, fitting x, y, u, v and q = Q/p to the FDC hits; at the target, vertex, momentum and path length give Bρ and, with TOF, A/Q.");
  const steps = [
    "Local track fits in FDC1 and FDC2 (χ^{2}/ndf < 3).",
    "Seed at the HOD plane from FDC2: position, angle, *p*_{0}.",
    "RK4 backward through the 3-D field map; fit (*x*, *y*, *u*, *v*, *q* = *Q*/*p*) to FDC hits by χ^{2}.",
    "At the target: vertex, momentum, path length → Bρ → A/Q (with TOF).",
  ];
  steps.forEach((t, i) => {
    const yy = 0.95 + i * 0.62;
    T(s, String(i + 1), MX, yy, 0.4, 0.4, { fontSize: 16, bold: true, color: C.navy });
    T(s, rich(t), MX + 0.45, yy, 11.5, 0.5, { fontSize: 15 });
  });
  // four plots share one height so the row spans MX → RIGHT
  const row = [["fig_fdc1.png", [761, 625]], ["fig_hodf.png", [717, 617]], ["fig_frag_pid.png", [735, 645]], ["fig_mom.png", [713, 644]]];
  const gap = 0.2, fh = (RIGHT - MX - gap * 3) / row.reduce((a, [, [w, h]]) => a + w / h, 0), y0 = 3.8;
  let x = MX;
  const boxes = row.map(([f, px]) => { const b = img(s, f, x, y0, { h: fh, px }); x += (fh * px[0]) / px[1] + gap; return b; });
  label(s, "Y:X on FDC1", boxes[0].x, 3.45, boxes[0].w);
  label(s, "ΔE(HODF): FDC2_X", boxes[1].x, 3.45, boxes[1].w);
  label(s, "Charged particle PID and momentum distribution", boxes[2].x, 3.45, boxes[3].x + boxes[3].w - boxes[2].x);
  const f = boxes[2];
  for (const [t, rx, ry, col, w = 0.4] of [["^{9}Be", 0.318, 0.327, C.coral], ["^{7}Li", 0.389, 0.485], ["^{8}Li", 0.698, 0.474], ["^{9}Li", 0.86, 0.482, , 0.28], ["^{4}He", 0.266, 0.647], ["^{6}He", 0.86, 0.662, , 0.28]]) {
    const tx = f.x + rx * f.w - w / 2, ty = f.y + ry * f.h - 0.1;
        T(s, rich(t, { bold: true, color: col || C.ink, glow: { size: 6, opacity: 0.85, color: "FFFFFF" } }), tx, ty, w, 0.2, { fontSize: 10, align: "center", valign: "middle" });
  }
}
{
  const s = backupSlide("NEBULA times are aligned bar by bar to the prompt γ peak.",
    "Calibration run ¹⁰Be + Cu. Time of flight versus bar ID before alignment, dT versus bar ID after alignment, and the summed dT distribution with σ = 258 ps. Reference value for the detector: σ(γ) ≈ 170 ps. [Presenter: prepare one sentence on why this run gives 258 ps.]");
  img(s, "fig_nebula_geo.png", MX, 0.85, { h: 2.6, px: [349, 294] });
  img(s, "fig_nebula_photo.png", MX + 3.35, 0.85, { h: 2.6, px: [1333, 1108] });
  // three plots spread across the full width; the two cards sit side by side in the top row
  const row = [["fig_tof_id.png", [889, 773]], ["fig_dt_id.png", [888, 774]], ["fig_dt.png", [598, 550]]];
  const fh = 3.25, y0 = 3.6, ws = row.map(([, [w, h]]) => (fh * w) / h);
  const gap = (RIGHT - MX - ws.reduce((a, b) => a + b, 0)) / 2;
  let x = MX;
  row.forEach(([f, px], i) => { img(s, f, x, y0, { h: fh, px }); x += ws[i] + gap; });
  const rx = 7.45, rw = 3.0, tx = rx + rw + 0.2, tw = RIGHT - tx, cy = 1.25, ch = 2.2;
  rect(s, rx, cy, rw, ch, C.card);
  rect(s, rx, cy, 0.06, ch, C.navy);
  label(s, "REFERENCE VALUES", rx + 0.2, cy + 0.15, rw, { color: C.muted, fontSize: 10 });
  T(s, paras(["ε(1n) ≈ 40 %", "σ(γ) ≈ 170 ps", "σ(n) ≈ 340 ps", "  at *E*_{n} ≈ 200 MeV"]), rx + 0.2, cy + 0.48, rw - 0.3, 1.3, { fontSize: 14 });
  cite(s, "T. Kobayashi et al., NIMB 317, 294 (2013)", rx + 0.2, cy + 1.8, rw - 0.3, { h: 0.4 });
  rect(s, tx, cy, tw, ch, C.card);
  rect(s, tx, cy, 0.06, ch, C.navy);
  label(s, "THIS RUN", tx + 0.2, cy + 0.15, tw, { color: C.muted, fontSize: 10 });
  T(s, "σ(γ) = 258 ps", tx + 0.2, cy + 0.45, tw - 0.3, ch - 0.55, { fontSize: 20, bold: true, color: C.navy, valign: "middle" });
}

pres.writeFile({ fileName: path.join(ROOT, "DREB2026_SFS.pptx") }).then((f) => console.log("wrote", f));
