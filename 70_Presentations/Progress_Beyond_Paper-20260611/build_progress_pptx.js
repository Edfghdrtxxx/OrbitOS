// Progress Beyond the Paper — self/archive summary deck (2026-06-11)
// Source doc: 10_Papers-Thesis/Physics_Informed/Supplemental_information/Progress_Beyond_Paper_20260611.md
const pptxgen = require("pptxgenjs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const FIG = (...p) => path.join(ROOT, ...p);

// ---------- design system ----------
const INK = "16243D";      // deep navy (dominant)
const INK2 = "23355C";     // lighter navy
const PAPER = "F7F8F5";    // warm off-white
const CARD = "FFFFFF";
const MUTED = "5A6B85";
const TEAL = "0E7C86";     // accent
const GOLD = "C9A227";
const LINEC = "D8DDE6";

const STATUS = {
  partial: { label: "PARTIAL", color: "B97E00", fill: "F6ECD4" },
  absent:  { label: "ABSENT",  color: "B3362B", fill: "F7E0DD" },
  stale:   { label: "STALE",   color: "6B4FA0", fill: "E9E2F4" },
  info:    { label: "CONTEXT", color: "5A6B85", fill: "E6EAF0" },
};

const HDR = "Georgia";
const BODY = "Calibri";

// image aspect ratios (w/h) measured from disk
const AR = {
  f1: 3178 / 2502, f2: 2268 / 2828, f4: 3240 / 2505, f5: 2178 / 1128,
  f7: 2354 / 1287, f8: 3238 / 2505, rf2: 2257 / 2828,
  sweeps: 3795 / 1170, clip: 2838 / 1142, xtask: 2210 / 1063,
  angres: 1823 / 1268, events: 2659 / 2458,
  mate3d: 1800 / 1500, geoschema: 2935 / 1309, padgeo: 1367 / 1306,
};

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10 x 5.625 in
pres.author = "MATE-Automation-V4 archive";
pres.title = "Progress Beyond the Paper — 2026-06-11";

let pageNo = 0;

// standard chrome: section chip (top-left), status pill (top-right), title, footer
function chrome(slide, sec, statusKey, title, titleW) {
  pageNo += 1;
  slide.background = { color: PAPER };
  // section chip (width follows label so long labels never wrap)
  const chipW = Math.max(1.5, 0.4 + sec.length * 0.105);
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.32, w: chipW, h: 0.3, fill: { color: INK } });
  slide.addText(sec, { x: 0.5, y: 0.32, w: chipW, h: 0.3, margin: 0.06, fontFace: BODY, fontSize: 10.5, bold: true, color: "FFFFFF", charSpacing: 2, valign: "middle" });
  // status pill
  if (statusKey) {
    const s = STATUS[statusKey];
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 8.42, y: 0.32, w: 1.08, h: 0.3, rectRadius: 0.15, fill: { color: s.fill }, line: { color: s.color, width: 1 } });
    slide.addText("PAPER: " + s.label, { x: 8.32, y: 0.32, w: 1.28, h: 0.3, margin: 0, align: "center", valign: "middle", fontFace: BODY, fontSize: 8.5, bold: true, color: s.color, charSpacing: 1 });
  }
  // title (single line at 20pt across the full content width)
  slide.addText(title, { x: 0.5, y: 0.74, w: 9.0, h: 0.5, margin: 0, fontFace: HDR, fontSize: 20, bold: true, color: INK, valign: "top" });
  // footer
  slide.addShape(pres.shapes.LINE, { x: 0.5, y: 5.3, w: 9.0, h: 0, line: { color: LINEC, width: 0.75 } });
  slide.addText("Progress Beyond the Paper  ·  archive summary  ·  2026-06-11", { x: 0.5, y: 5.33, w: 6.5, h: 0.25, margin: 0, fontFace: BODY, fontSize: 8.5, color: MUTED, valign: "middle" });
  slide.addText(String(pageNo), { x: 9.0, y: 5.33, w: 0.5, h: 0.25, margin: 0, align: "right", fontFace: BODY, fontSize: 8.5, color: MUTED, valign: "middle" });
}

// big stat callout (vSize overrides value font size for long values)
function stat(slide, x, y, w, value, label, color, vSize) {
  slide.addText(value, { x, y, w, h: 0.52, margin: 0, fontFace: HDR, fontSize: vSize || 26, bold: true, color: color || TEAL });
  slide.addText(label, { x, y: y + 0.5, w, h: 0.42, margin: 0, fontFace: BODY, fontSize: 9.5, color: MUTED, valign: "top" });
}
// darker amber for emphasis text on cream (pill amber is too low-contrast as body text)
const AMBER = "8A6100";

// white card with thin border
function card(slide, x, y, w, h, accent) {
  slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: CARD }, line: { color: LINEC, width: 0.75 }, shadow: { type: "outer", color: "16243D", blur: 5, offset: 1, angle: 90, opacity: 0.10 } });
  if (accent) slide.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.06, h, fill: { color: accent } });
}

// framed figure with caption; height-driven, keeps aspect
function fig(slide, imgPath, ar, x, y, h, caption, capW) {
  const w = h * ar;
  slide.addShape(pres.shapes.RECTANGLE, { x: x - 0.06, y: y - 0.06, w: w + 0.12, h: h + 0.12, fill: { color: CARD }, line: { color: LINEC, width: 1 }, shadow: { type: "outer", color: "16243D", blur: 6, offset: 2, angle: 90, opacity: 0.12 } });
  slide.addImage({ path: imgPath, x, y, w, h });
  if (caption) slide.addText(caption, { x: x - 0.06, y: y + h + 0.1, w: capW || (w + 0.12), h: 0.3, margin: 0, fontFace: BODY, fontSize: 8.5, italic: true, color: MUTED, valign: "top" });
  return w;
}

function bullets(slide, items, opts) {
  const runs = items.map((t, i) => ({
    text: t.text, options: { bullet: t.sub ? { code: "2013" } : { code: "25AA" }, indentLevel: t.sub ? 1 : 0, color: t.color || "2B3950", bold: !!t.bold, breakLine: true, paraSpaceAfter: opts.gap == null ? 6 : opts.gap },
  }));
  slide.addText(runs, { x: opts.x, y: opts.y, w: opts.w, h: opts.h, margin: 0, fontFace: BODY, fontSize: opts.size || 11.5, valign: "top" });
}

// ============================================================
// S1 — TITLE (dark)
// ============================================================
{
  const s = pres.addSlide();
  pageNo += 1;
  s.background = { color: INK };
  // faint gold rule motif
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 5.625, fill: { color: GOLD } });
  s.addText("MATE AT-TPC  ·  PHYSICS-INFORMED CNN PROGRAM", { x: 0.75, y: 0.95, w: 8.5, h: 0.3, margin: 0, fontFace: BODY, fontSize: 12, color: "9FB2D1", charSpacing: 3 });
  s.addText("Progress Beyond the Paper", { x: 0.75, y: 1.35, w: 8.5, h: 0.95, margin: 0, fontFace: HDR, fontSize: 44, bold: true, color: "FFFFFF" });
  s.addText([
    { text: "A verified archive of work completed after the manuscript's last edit ", options: {} },
    { text: "(main.tex, 2026-04-22)", options: { italic: true, color: "C9D6EC" } },
    { text: " — candidate material for paper revision and thesis chapters. Every number below is checked against run logs, metrics.json, configs, specs, and figure files.", options: {} },
  ], { x: 0.75, y: 2.42, w: 8.0, h: 0.85, margin: 0, fontFace: BODY, fontSize: 14, color: "DCE4F2" });
  // stat strip
  const strip = [
    { v: "16", l: "verified findings" },
    { v: "5", l: "partial (comment-only)" },
    { v: "9", l: "absent from paper" },
    { v: "2", l: "stale / contradicted" },
  ];
  strip.forEach((it, i) => {
    const x = 0.75 + i * 2.12;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 3.55, w: 1.86, h: 1.05, fill: { color: INK2 }, line: { color: "3A4F7E", width: 0.75 } });
    s.addText(it.v, { x: x + 0.16, y: 3.66, w: 1.6, h: 0.5, margin: 0, fontFace: HDR, fontSize: 28, bold: true, color: GOLD });
    s.addText(it.l, { x: x + 0.16, y: 4.18, w: 1.6, h: 0.35, margin: 0, fontFace: BODY, fontSize: 9.5, color: "B9C7DE" });
  });
  s.addText("Archive summary  ·  2026-06-11  ·  source: Progress_Beyond_Paper_20260611.md", { x: 0.75, y: 5.05, w: 8.5, h: 0.3, margin: 0, fontFace: BODY, fontSize: 10, color: "8DA0BE" });
}

// ============================================================
// S2 — SCOPE & HOW TO READ
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "SCOPE", "info", "Reference manuscript & how to read this deck");
  // left card: manuscript facts
  card(s, 0.5, 1.5, 4.5, 3.55, INK);
  s.addText("The manuscript as it stands", { x: 0.72, y: 1.66, w: 4.1, h: 0.3, margin: 0, fontFace: HDR, fontSize: 13.5, bold: true, color: INK });
  bullets(s, [
    { text: "Physics-informed CNN with cross-attention fusion for isotope identification in the MATE AT-TPC — classification only." },
    { text: "12 figures; no regression results, no classical-baseline comparisons, no statistical significance testing." },
    { text: "Lines 260–303: a 44-line commented TODO(advisor-review) block pre-registers wording for the energy-regression work but renders nothing." },
    { text: "Last modified 2026-04-22 — every result in this deck post-dates or extends it.", bold: true },
    { text: "Everything here is verified against repository artifacts; candidates that failed verification are listed in the appendix." },
  ], { x: 0.72, y: 2.02, w: 4.08, h: 2.9, size: 11 });
  // right card: status legend
  card(s, 5.25, 1.5, 4.25, 2.18, GOLD);
  s.addText("Paper-status legend", { x: 5.47, y: 1.66, w: 3.8, h: 0.3, margin: 0, fontFace: HDR, fontSize: 13.5, bold: true, color: INK });
  const leg = [
    { k: "partial", d: "only coverage is the commented advisor-review block" },
    { k: "absent", d: "zero coverage anywhere in the manuscript" },
    { k: "stale", d: "contradicts standing paper text" },
  ];
  leg.forEach((it, i) => {
    const y = 2.04 + i * 0.56;
    const st = STATUS[it.k];
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.47, y, w: 0.95, h: 0.28, rectRadius: 0.14, fill: { color: st.fill }, line: { color: st.color, width: 1 } });
    s.addText(st.label, { x: 5.47, y, w: 0.95, h: 0.28, margin: 0, align: "center", valign: "middle", fontFace: BODY, fontSize: 8.5, bold: true, color: st.color });
    // center the description on the pill's vertical midline
    s.addText(it.d, { x: 6.55, y: y - 0.11, w: 2.85, h: 0.5, margin: 0, fontFace: BODY, fontSize: 10, color: "2B3950", valign: "middle" });
  });
  // right lower card: deck map
  card(s, 5.25, 3.98, 4.25, 1.07, TEAL);
  s.addText("Deck map", { x: 5.47, y: 4.08, w: 3.8, h: 0.28, margin: 0, fontFace: HDR, fontSize: 12, bold: true, color: INK });
  s.addText("1 New experiments  ·  2 New baselines  ·  3 New analyses  ·  4 Methods & infrastructure  ·  5 Figures  ·  6 Presented, not published  ·  Appendix: rejected candidates", { x: 5.47, y: 4.36, w: 3.85, h: 0.62, margin: 0, fontFace: BODY, fontSize: 9, color: MUTED });
}

// ============================================================
// S3 — 1.1 TRK5/TRK6 ENERGY REGRESSION
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "1.1  NEW EXPERIMENTS", "partial", "TRK5 / TRK6 — per-event kinetic-energy regression", 7.6);
  const fw = fig(s, FIG("outputs", "figures", "TRK5_TRK6_comparison", "F2_per_energy_bin_rmse.png"), AR.f2, 6.62, 1.42, 3.45, "F2 — per-energy-bin RMSE, bootstrap 95% CIs");
  // stats column
  stat(s, 0.5, 1.5, 1.95, "0.0188", "TRK6 (cross-attn) test RMSE, MeV", TEAL);
  stat(s, 2.55, 1.5, 1.95, "0.0229", "TRK5 (ResNet) test RMSE, MeV", INK);
  stat(s, 4.6, 1.5, 1.9, "−18.0%", "RMSE, cross-attn vs ResNet", "B97E00");
  bullets(s, [
    { text: "Regenerated 1.2M-event continuous-energy dataset, E ~ U[0.3, 4.0] MeV per event; 180k test events / 450k valid slots." },
    { text: "Paired per-event ΔRMSE +0.004327 MeV (CI [0.004260, 0.004396]); Wilcoxon p ≈ 0; Cohen's d 0.293." },
    { text: "TRK6 relative RMSE 0.873%; best bin 0.00304 MeV (0.8–1.3 MeV)." },
    { text: "Decision gate 2026-05-14: TRK6 is the primary CNN result — claim qualified to per-event regression, 9 enumerated limitations.", bold: true },
    { text: "Status: the single largest unpublished body of results; only the commented block mentions it — zero rendered prose.", color: AMBER },
  ], { x: 0.5, y: 2.62, w: 5.9, h: 2.6, size: 11 });
}

// ============================================================
// S4 — 1.2 EXP2 FUSION-MECHANISM COMPARISON (chart)
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "1.2  NEW EXPERIMENTS", "stale", "EXP2 fusion ranking — Concat > Gated > CrossAtt", 7.6);
  s.addChart(pres.charts.BAR, [
    { name: "ConcatFusion", labels: ["13C/14C (matched)", "3He/4He (caveat)"], values: [86.07, 96.98] },
    { name: "GatedFusion", labels: ["13C/14C (matched)", "3He/4He (caveat)"], values: [85.74, 96.94] },
    { name: "CrossAtt", labels: ["13C/14C (matched)", "3He/4He (caveat)"], values: [84.63, 95.80] },
  ], {
    x: 0.5, y: 1.5, w: 5.4, h: 3.1, barDir: "col",
    chartColors: ["0E7C86", "C9A227", "B3362B"],
    chartArea: { fill: { color: "FFFFFF" } },
    catAxisLabelColor: MUTED, valAxisLabelColor: MUTED, catAxisLabelFontSize: 10, valAxisLabelFontSize: 9,
    valAxisMinVal: 80, valAxisMaxVal: 100,
    valGridLine: { color: "E2E8F0", size: 0.5 }, catGridLine: { style: "none" },
    showValue: true, dataLabelPosition: "outEnd", dataLabelColor: "1E293B", dataLabelFontSize: 9, dataLabelFormatCode: "0.00",
    showLegend: true, legendPos: "b", legendFontSize: 10,
  });
  s.addText("Validation accuracy (%) — seed 42, 100k events, HC preprocessing, ~11.23M params each. Y-axis starts at 80%.", { x: 0.5, y: 4.62, w: 5.4, h: 0.3, margin: 0, fontFace: BODY, fontSize: 8.5, italic: true, color: MUTED });
  card(s, 6.25, 1.5, 3.25, 3.55, STATUS.stale.color);
  s.addText("Why this is STALE", { x: 6.47, y: 1.66, w: 2.9, h: 0.3, margin: 0, fontFace: HDR, fontSize: 13, bold: true, color: INK });
  bullets(s, [
    { text: "Cross-attention is the worst fusion mechanism in every comparison run (single seed)." },
    { text: "3He/4He caveat: CrossAtt cell evaluated on a 25k val set vs 35k for Gated/Concat — mismatched validation sets." },
    { text: "Recorded implication: shift emphasis from “cross-attention is optimal” to “physics features improve discrimination regardless of fusion strategy”.", bold: true },
    { text: "Paper does not mention Gated/Concat as evaluated variants; new modules gated_fusion.py / concat_fusion.py." },
  ], { x: 6.47, y: 2.0, w: 2.85, h: 2.95, size: 10.5, gap: 7 });
}

// ============================================================
// S5 — 1.3 ANGLE REGRESSION + HP DIAGNOSIS
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "1.3  NEW EXPERIMENTS", "absent", "TRK3/4-v2 — per-track polar-angle regression", 7.6);
  stat(s, 0.5, 1.5, 1.95, "0.832°", "TRK4-v2 (cross-attn) MAE", TEAL);
  stat(s, 2.55, 1.5, 1.95, "0.992°", "TRK3-v2 (ResNet) MAE", INK);
  stat(s, 4.6, 1.5, 1.9, "−16.1%", "relative MAE, Welch p < ε", "B97E00");
  bullets(s, [
    { text: "Masked 4-slot angle regression: SmoothL1, sentinel −1.0, ascending-θ slot sort (replaces Hungarian matching)." },
    { text: "HP diagnosis: TRK3 v1's ~4.6× train/val MAE gap was a dropout-0.3 measurement artifact + over-regularization; v2 uses dropout 0.05, wd 1e-5 (v1 MAE 1.112° → 0.992°)." },
    { text: "High-tier (<1°) fraction: 65.32% → 72.87%." },
    { text: "Caveats: TRK4-v1 never trained (HP vs architecture not disentangled on the cross-attn side); single seed." },
    { text: "Status: cross-attention's strongest measurable win — a cleaner architecture story than the confounded classification claims.", color: STATUS.absent.color, bold: true },
  ], { x: 0.5, y: 2.62, w: 5.45, h: 2.6, size: 10.5, gap: 5 });
  // right: energy-trend mini chart
  card(s, 6.3, 1.42, 3.2, 3.63, TEAL);
  s.addText("Benefit grows with energy", { x: 6.52, y: 1.56, w: 2.85, h: 0.35, margin: 0, fontFace: HDR, fontSize: 12.5, bold: true, color: INK });
  s.addChart(pres.charts.BAR, [
    { name: "MAE change vs ResNet", labels: ["0.5 MeV", "2.0 MeV", "3.2 MeV"], values: [-11.5, -20.0, -22.4] },
  ], {
    x: 6.45, y: 2.1, w: 2.95, h: 2.5, barDir: "col",
    chartColors: ["0E7C86"],
    chartArea: { fill: { color: "FFFFFF" } },
    catAxisLabelColor: MUTED, valAxisLabelColor: MUTED, catAxisLabelFontSize: 9, valAxisLabelFontSize: 8.5,
    valGridLine: { color: "E2E8F0", size: 0.5 }, catGridLine: { style: "none" },
    showValue: true, dataLabelPosition: "outEnd", dataLabelColor: "1E293B", dataLabelFontSize: 9, dataLabelFormatCode: "0.0",
    showLegend: false, valAxisMinVal: -25, valAxisMaxVal: 0,
  });
}

// ============================================================
// S6 — 1.4 TRACK-COUNT CLASSIFICATION (saturation)
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "1.4  NEW EXPERIMENTS", "absent", "TRK1 / TRK2 — track-count task is saturated", 7.6);
  // three big cards
  const cards = [
    { v: "99.9983%", l: "TRK1 (plain ResNet) accuracy — 3 errors / 180,000 test events; CI [99.9951, 99.9994]", c: INK },
    { v: "99.9994%", l: "TRK2 (cross-attention) accuracy — 1 error / 180,000 test events", c: TEAL },
    { v: "p = 0.48", l: "McNemar paired test — difference NOT significant", c: "B97E00" },
  ];
  cards.forEach((it, i) => {
    const x = 0.5 + i * 3.125;
    card(s, x, 1.55, 2.75, 1.7, it.c);
    s.addText(it.v, { x: x + 0.22, y: 1.75, w: 2.45, h: 0.55, margin: 0, fontFace: HDR, fontSize: 26, bold: true, color: it.c });
    s.addText(it.l, { x: x + 0.22, y: 2.32, w: 2.45, h: 0.85, margin: 0, fontFace: BODY, fontSize: 10, color: MUTED });
  });
  card(s, 0.5, 3.6, 9.0, 1.5, STATUS.absent.color);
  s.addText("Documented conclusion", { x: 0.72, y: 3.72, w: 8.5, h: 0.3, margin: 0, fontFace: HDR, fontSize: 13, bold: true, color: INK });
  bullets(s, [
    { text: "Phase-1 reconstruction on 1.2M isotropic alpha-source events (1–4 tracks × 0.5 / 2.0 / 3.2 MeV); trained 2026-03-21/23, metrics finalized 2026-03-25." },
    { text: "The task is saturated and cannot discriminate architectures — an honest ceiling / negative result.", bold: true },
    { text: "First demonstration that the method handles multi-track events (paper covers single-particle classification only); establishes the multiplicity capability the energy and angle work builds on." },
  ], { x: 0.72, y: 4.04, w: 8.55, h: 1.0, size: 10, gap: 3 });
}

// ============================================================
// S7 — 2.1 CLASSICAL ENERGY BASELINES
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "2.1  NEW BASELINES", "partial", "Classical energy baselines — RANSAC, Hough, HC", 7.6);
  const fw = fig(s, FIG("outputs", "figures", "TRK5_TRK6_comparison", "F1_residual_hist_overlay.png"), AR.f1, 5.6, 1.45, 3.0, "F1 — residual overlay, 5-method suite (regenerated 2026-06-10)");
  s.addTable([
    [
      { text: "Method", options: { fill: { color: INK }, color: "FFFFFF", bold: true } },
      { text: "RMSE (MeV)", options: { fill: { color: INK }, color: "FFFFFF", bold: true } },
      { text: "Mean err (MeV)", options: { fill: { color: INK }, color: "FFFFFF", bold: true } },
      { text: "Missing slots", options: { fill: { color: INK }, color: "FFFFFF", bold: true } },
    ],
    ["RANSAC", "1.2400", "−1.0037", "38,386"],
    ["Hough", "1.2776", "−1.0383", "30,086"],
    ["HC (Hierarchy Cluster)", "1.4269", "−1.2069", "36"],
  ], { x: 0.5, y: 1.5, w: 4.6, colW: [1.6, 1.0, 1.1, 0.9], border: { pt: 0.5, color: LINEC }, fontFace: BODY, fontSize: 10, color: "2B3950", align: "left", valign: "middle", rowH: 0.32, fill: { color: "FFFFFF" } });
  stat(s, 0.5, 3.05, 2.3, "54–76×", "worse RMSE than the CNNs on the identical TRK5 test split", "B3362B");
  bullets(s, [
    { text: "Image-only baselines on the SHA-1-audited TRK5 split (180,000 truth events; 179,964 in error stats); track length → energy via the SRIM lookup (4.2)." },
    { text: "All three systematically underestimate energy; HC = Hierarchy Cluster (scipy agglomerative, ward) — explicitly NOT Hough." },
    { text: "Gap is moderated by the LM-refined RANSAC (next slide)." },
  ], { x: 0.5, y: 4.0, w: 4.7, h: 1.2, size: 10, gap: 4 });
}

// ============================================================
// S8 — 2.2 LM-REFINED RANSAC (newest work)
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "2.2  NEW BASELINES", "absent", "LM-refined RANSAC (June 9–10, 2026 — uncommitted)", 7.6);
  fig(s, FIG("outputs", "figures", "TRK5_TRK6_comparison", "RANSAC Comparision", "F2_per_energy_bin_rmse.png"), AR.rf2, 6.85, 1.42, 3.45, "F2 — per-bin RMSE (RANSAC variant)");
  stat(s, 0.5, 1.48, 1.9, "0.159", "LM-refined RANSAC RMSE (rel. 10.61%)", TEAL);
  stat(s, 2.55, 1.48, 1.95, "7–8×", "better than plain RANSAC (1.176 MeV on this set)", INK);
  stat(s, 4.65, 1.48, 1.85, "8.47×", "still worse than TRK6 (0.0188 MeV)", "B97E00");
  bullets(s, [
    { text: "Re-evaluated on the NEW alpha_sim_0_20_160 dataset (59,992 events); LM-refined fit at full coverage (177,864 events; 2,861 missing of 383,935 truth slots); MAE 0.1076 MeV." },
    { text: "Changes the comparative narrative: CNN advantage shrinks from ~60× (plain baselines) to ~8× against the best classical method.", bold: true },
  ], { x: 0.5, y: 2.62, w: 6.0, h: 1.0, size: 10.5, gap: 5 });
  card(s, 0.5, 3.78, 5.9, 1.27, "B3362B");
  s.addText("Cautions (must carry into any paper text)", { x: 0.72, y: 3.88, w: 5.5, h: 0.28, margin: 0, fontFace: HDR, fontSize: 12, bold: true, color: "B3362B" });
  bullets(s, [
    { text: "Different dataset/split than the May comparison matrix — not directly commensurate (F7 masks these pairs)." },
    { text: "Re-run overwrote the 2026-05-18 ransac-opt test metrics (the runs directory is git-untracked); post-dates last commit 7a92841 — uncommitted." },
  ], { x: 0.72, y: 4.18, w: 5.6, h: 0.85, size: 9.5, gap: 3 });
}

// ============================================================
// S9 — 3.1 PHYSICS CORRECTION: A/Z
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "3.1  NEW ANALYSES", "stale", "A/Z — wrong governing parameter for dE/dx PID", 8.0);
  // two comparison columns
  card(s, 0.5, 1.5, 4.3, 2.1, "B3362B");
  s.addText("Paper's framing (still in main.tex)", { x: 0.72, y: 1.64, w: 3.9, h: 0.3, margin: 0, fontFace: HDR, fontSize: 13, bold: true, color: "B3362B" });
  bullets(s, [
    { text: "Motivation built on Δ(A/Z): abstract quotes “Δ(A/Z) ~ 8%” for 13C/14C; Table 1 quantifies A/Z." },
    { text: "No Tassan-Got / Z²A correction appears anywhere — the recorded decision was never propagated." },
  ], { x: 0.72, y: 2.0, w: 3.9, h: 1.5, size: 11, gap: 6 });
  card(s, 5.2, 1.5, 4.3, 2.1, TEAL);
  s.addText("Documented investigation (2026-03-06)", { x: 5.42, y: 1.64, w: 3.9, h: 0.3, margin: 0, fontFace: HDR, fontSize: 13, bold: true, color: TEAL });
  bullets(s, [
    { text: "Tassan-Got identification parameter: Z²·A^μ (NIM B 194, 2002); TPC range–energy scaling goes as A/Z²." },
    { text: "Counter-example: d vs ⁴He have identical A/Z = 2, yet Z²A of 2 vs 16 — the A/Z narrative fails cross-element." },
  ], { x: 5.42, y: 2.0, w: 3.9, h: 1.5, size: 11, gap: 6 });
  card(s, 0.5, 3.95, 9.0, 1.0, GOLD);
  s.addText([
    { text: "Saving grace & required action:  ", options: { bold: true, color: INK } },
    { text: "for same-Z isotope pairs (all comparisons in the paper) the Δ(A/Z) ranking equals a ΔA ranking, so statements are not wrong in practice — but for an NST reviewer this is a correctness risk in the central motivation. Recorded decision: soften the abstract's conventional-method critique to practical drawbacks.", options: { color: "2B3950" } },
  ], { x: 0.72, y: 4.05, w: 8.55, h: 0.8, margin: 0, fontFace: BODY, fontSize: 10.5, valign: "middle" });
}

// ============================================================
// S10 — 3.2 SWEEPS + 8-METHOD SIGNIFICANCE MATRIX
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "3.2  NEW ANALYSES", "absent", "Baseline sweeps, -opt runs & significance matrix", 7.6);
  fig(s, FIG("outputs", "figures", "TRK_baseline_parameter_sweeps", "baseline_parameter_sweeps_overview.png"), AR.sweeps, 0.56, 1.48, 1.78, "Validation-split grid sweeps: RANSAC 5 cfgs · Hough 27 cfgs · HC 15 cfgs (winners: 3.0 mm; ρ 5.0 / θ 0.5° / NMS 3×3; ward / x_weight 0)", 5.5);
  fig(s, FIG("outputs", "figures", "TRK5_TRK6_comparison", "F7_pairwise_significance_matrix.png"), AR.f7, 6.84, 1.48, 1.42, "F7 — pairwise significance (unpaired-RANSAC pairs masked)");
  bullets(s, [
    { text: "-opt test re-runs moved baselines only marginally: ΔRMSE 0.0246 / 0.0179 / 0.0064 MeV — the ~1 MeV gap to TRK6 is NOT an under-tuning artifact.", bold: true },
    { text: "All 28 method pairs Bonferroni-significant (Wilcoxon, max p = 5.1e-253; 1000 bootstrap resamples; Cohen's d recorded)." },
    { text: "Supplies the complete statistical machinery the paper currently lacks — it has no significance testing at all.", color: STATUS.absent.color },
    { text: "Caveat: on-disk ransac-opt artifacts overwritten 2026-06-10; the 0.0246 delta survives only in the frozen comparison_matrix.json.", sub: false },
  ], { x: 0.5, y: 3.95, w: 9.0, h: 1.3, size: 10, gap: 4 });
}

// ============================================================
// S11 — 3.3 RANGE CLIPPING / DEGRADATION RATIO
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "3.3  NEW ANALYSES", "partial", "Range clipping — partial clipped-energy recovery", 7.6);
  stat(s, 0.5, 1.48, 1.7, "33.4%", "of test slots are range-clipped", INK);
  stat(s, 2.4, 1.48, 2.7, "0.030–0.034", "CNN clipped-region RMSE (MeV) vs 2.0–2.3 for plain classical", TEAL, 22);
  stat(s, 5.5, 1.48, 2.5, "2.28 / 3.50", "degradation ratio TRK5 / TRK6 (clipped ÷ unclipped RMSE)", "B97E00", 22);
  bullets(s, [
    { text: "Physics-rich finding: the CNN must learn more than geometric range (e.g., charge-deposition profile) to recover clipped-track energy — a natural physics-informed narrative hook.", bold: true },
    { text: "Exception: June-10 LM-refined RANSAC reaches 0.083 MeV in the [3.3, 4.0] MeV bin (ratio 0.576) — “classical methods are crippled by clipping” no longer holds as a blanket claim." },
    { text: "Note: TRK6's ratio (3.503) is a larger relative degradation than the baselines' (~2.2); the recovery claim rests on absolute clipped RMSE, not the ratio." },
    { text: "Figures F3/F3.5 were cut from the suite on 2026-06-10; the analysis survives in both metrics.json range_clipping blocks — revisit at drafting.", color: AMBER },
  ], { x: 0.5, y: 2.55, w: 9.0, h: 1.55, size: 10.5, gap: 4 });
  fig(s, FIG("outputs", "figures", "Energy Regression-comparison", "F3_range_clipping_analysis.png"), AR.clip, 0.5, 4.18, 0.92, "");
  fig(s, FIG("outputs", "figures", "Energy Regression-comparison", "F3_5_recovery_ratio_explainer.png"), 2120 / 770, 3.1, 4.18, 0.92, "");
  s.addText("F3 / F3.5 — range-clipping analysis and degradation-ratio explainer (superseded 2026-05-27 suite; both cut from the current suite on 2026-06-10)", { x: 5.95, y: 4.18, w: 3.55, h: 0.92, margin: 0, fontFace: BODY, fontSize: 9, italic: true, color: MUTED, valign: "middle" });
}

// ============================================================
// S12 — 3.4 CROSS-TASK COMPARISON (T1–T6)
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "3.4  NEW ANALYSES", "absent", "Cross-task report & paper-ready tables TRK-T1…T6", 7.6);
  fig(s, FIG("outputs", "figures", "Angular Regression-comparison", "cross_task_honest_comparison.png"), AR.xtask, 0.5, 1.5, 2.0, "cross_task_honest_comparison — the T5 verdict in one figure");
  // verdict rows
  const rows = [
    { tag: "LOSES", c: "B3362B", t: "Isotope ID 3He/4He: ConcatFusion 96.98% vs EXP1-XA 95.80% (−1.19 pp; documented comparator asymmetry)" },
    { tag: "TIES", c: "B97E00", t: "Track-count classification: +0.0011 pp at ceiling — task saturated (1.4)" },
    { tag: "WINS", c: "0E7C86", t: "Angle regression: −0.1599° MAE (1.3) — the defensible cross-attention claim is task-dependent" },
  ];
  rows.forEach((r, i) => {
    const y = 3.98 + i * 0.39;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y, w: 0.78, h: 0.32, fill: { color: r.c } });
    s.addText(r.tag, { x: 0.7, y, w: 0.78, h: 0.32, margin: 0, align: "center", valign: "middle", fontFace: BODY, fontSize: 9.5, bold: true, color: "FFFFFF" });
    s.addText(r.t, { x: 1.6, y: y - 0.04, w: 7.9, h: 0.42, margin: 0, fontFace: BODY, fontSize: 10, color: "2B3950", valign: "middle" });
  });
  card(s, 5.2, 1.44, 4.3, 2.36, TEAL);
  s.addText("What exists, ready to land", { x: 5.42, y: 1.6, w: 3.9, h: 0.3, margin: 0, fontFace: HDR, fontSize: 13, bold: true, color: INK });
  bullets(s, [
    { text: "Standalone narrative report runs/TRK-comparison-angle/summary.md (2026-04-11)." },
    { text: "Six compiled CSV/LaTeX tables: T1 classification · T2 energy-stratified accuracy · T3 regression summary · T4 angle error by energy · T5 cross-task verdict · T6 HP effect." },
    { text: "Report's own Status line: paper integration deferred — prepared but never landed.", color: STATUS.absent.color },
  ], { x: 5.42, y: 1.98, w: 3.85, h: 1.75, size: 10, gap: 5 });
}

// ============================================================
// S13 — 4.1 V2 DATASET + QA GATE
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "4.1  METHODS & INFRA", "partial", "v2 continuous-energy dataset & 19-probe QA gate", 7.6);
  fig(s, FIG("outputs", "figures", "TRK-energy-regression", "event_examples", "trk_energy_examples_overview.png"), AR.events, 6.14, 1.5, 3.05, "v2-dataset event-example gallery (K = 1…4)");
  stat(s, 0.5, 1.48, 1.6, "1.2M", "events, 4-file v2 layout (300k each, IMP server)", INK);
  stat(s, 2.25, 1.48, 1.6, "37 GB", "uncompressed trk_all_ uncompressed_v2.h5", TEAL);
  stat(s, 4.0, 1.48, 1.7, "18 / 1", "QA probes pass / warn — “GATE PASS WITH WARN”", "B97E00");
  bullets(s, [
    { text: "Pipeline extended to emit energy_truth_mev (N, 4) with sentinel; QA levels 1–6 + level-7 verdict (uniformity χ² 43.40, KS p 0.376; θ isotropy KS p 0.579; zero NaN)." },
    { text: "QA discovered the AC2 contract: NimpSim samples ONE energy per event, broadcast to all slots (max per-event slot std = one float32 ULP) → forces the claim narrowing to PER-EVENT energy regression.", bold: true },
    { text: "Training-correctness fix: a hard-coded deg→rad π/180 scale would have shrunk MeV targets ~57×." },
    { text: "Exactly the methods-section content a regression chapter requires; broadcast contract pre-registered only in the comment block.", color: AMBER },
  ], { x: 0.5, y: 2.6, w: 5.3, h: 2.55, size: 10, gap: 5 });
}

// ============================================================
// S14 — 4.2 SRIM LOOKUP
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "4.2  METHODS & INFRA", "partial", "SRIM lookup — alpha in He:CO₂ 95:5 at 0.5 bar", 7.6);
  // formula hero card
  card(s, 0.5, 1.5, 4.35, 1.8, TEAL);
  s.addText([
    { text: "R = 8.03 · E", options: {} },
    { text: "1.32", options: { superscript: true } },
    { text: " cm", options: {} },
  ], { x: 0.72, y: 1.72, w: 4.0, h: 0.6, margin: 0, fontFace: HDR, fontSize: 26, bold: true, color: TEAL });
  s.addText("global power-law fit (A = 8.0316, n = 1.3214); 100-row log-spaced table over [0.05, 10.0] MeV with provenance metadata + re-runnable generator/validator", { x: 0.72, y: 2.35, w: 3.95, h: 0.85, margin: 0, fontFace: BODY, fontSize: 10, color: MUTED });
  card(s, 5.2, 1.5, 4.3, 1.8, INK);
  s.addText("Validation 3 / 3 PASS", { x: 5.42, y: 1.66, w: 3.9, h: 0.4, margin: 0, fontFace: HDR, fontSize: 17, bold: true, color: INK });
  bullets(s, [
    { text: "Am-241-in-air anchor 40.85 mm exact (+0.00%)" },
    { text: "Worst Bragg cross-check −5.40% at 0.30 MeV (within ±10%)" },
    { text: "Strict monotonicity across the full table" },
  ], { x: 5.42, y: 2.12, w: 3.9, h: 1.1, size: 10, gap: 3 });
  bullets(s, [
    { text: "Methodology: NIST ASTAR + Bragg additivity fallback (pysrim/SRIM.exe unavailable); log-log piecewise-linear interpolation." },
    { text: "Sole range→energy inverter for all three classical baselines (common.py srim_range_to_energy) and sole SRIM source for the range-clipping analysis (forward direction)." },
    { text: "Straggling columns flagged as ~10×-understated analytic placeholders — excluded from baseline consumption." },
    { text: "Drafting caveat: AC8 item (d) pre-registers “pysrim SR (tabulation) mode”, but the executed branch was the ASTAR fallback — wording must be corrected.", color: AMBER, bold: true },
  ], { x: 0.5, y: 3.55, w: 9.0, h: 1.65, size: 10.5, gap: 7 });
}

// ============================================================
// S15 — 5.1 ENERGY-REGRESSION FIGURE SUITE
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "5.1  FIGURES", "absent", "A near-complete publication figure suite exists", 7.6);
  const thumbs = [
    { p: ["TRK5_TRK6_comparison", "F1_residual_hist_overlay.png"], ar: AR.f1, l: "F1 residual overlay" },
    { p: ["TRK5_TRK6_comparison", "F2_per_energy_bin_rmse.png"], ar: AR.f2, l: "F2 per-bin RMSE + CIs" },
    { p: ["TRK5_TRK6_comparison", "F4_predicted_vs_truth_hexbin.png"], ar: AR.f4, l: "F4 pred-vs-truth hexbin" },
    { p: ["TRK5_TRK6_comparison", "F5_per_track_count_rmse.png"], ar: AR.f5, l: "F5 per-track-count RMSE" },
    { p: ["TRK5_TRK6_comparison", "F7_pairwise_significance_matrix.png"], ar: AR.f7, l: "F7 significance matrix" },
    { p: ["TRK5_TRK6_comparison", "F8_residual_vs_truth_hexbin.png"], ar: AR.f8, l: "F8 residual-vs-truth" },
  ];
  // uniform 2x3 grid: fixed cells, images centred inside, captions on a shared baseline
  const cellW = 2.0, cellH = 1.32, gapX = 0.3, rowStep = 1.82, x0 = 0.5;
  thumbs.forEach((t, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const cx = x0 + col * (cellW + gapX);
    const cy = 1.5 + row * rowStep;
    const h = Math.min(cellH, cellW / t.ar);
    const w = h * t.ar;
    const ix = cx + (cellW - w) / 2, iy = cy + (cellH - h) / 2;
    s.addShape(pres.shapes.RECTANGLE, { x: ix - 0.04, y: iy - 0.04, w: w + 0.08, h: h + 0.08, fill: { color: CARD }, line: { color: LINEC, width: 0.75 } });
    s.addImage({ path: FIG("outputs", "figures", ...t.p), x: ix, y: iy, w, h });
    s.addText(t.l, { x: cx, y: cy + cellH + 0.06, w: cellW, h: 0.24, margin: 0, align: "center", fontFace: BODY, fontSize: 8.5, color: MUTED });
  });
  card(s, 7.45, 1.44, 2.05, 3.6, STATUS.absent.color);
  s.addText("Status", { x: 7.63, y: 1.58, w: 1.75, h: 0.3, margin: 0, fontFace: HDR, fontSize: 13, bold: true, color: INK });
  s.addText([
    { text: "main.tex has exactly 12 \\includegraphics — none energy-regression.", options: { breakLine: true, paraSpaceAfter: 8 } },
    { text: "Academic-draw compliant; 5-method -opt suite regenerated 2026-06-10.", options: { breakLine: true, paraSpaceAfter: 8 } },
    { text: "2026-05-14 predecessor suite reviewer-approved; the 06-10 regeneration not re-reviewed.", options: { breakLine: true, paraSpaceAfter: 8 } },
    { text: "Drafting prose is the only missing step.", options: { bold: true, color: STATUS.absent.color } },
  ], { x: 7.63, y: 1.92, w: 1.72, h: 3.0, margin: 0, fontFace: BODY, fontSize: 9, color: "2B3950", valign: "top" });
}

// ============================================================
// S16 — 5.2 UNREFERENCED GEOMETRY FIGURES
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "5.2  FIGURES", "absent", "Ready-made geometry figures the paper never references", 8.2);
  const geos = [
    { p: "mate_3d_schematic.png", ar: AR.mate3d, l: "mate_3d_schematic" },
    { p: "mate_geometry_schema.png", ar: AR.geoschema, l: "mate_geometry_schema" },
    { p: "mate_pad_geometry.png", ar: AR.padgeo, l: "mate_pad_geometry (3792 triangular pads, beam hole)" },
  ];
  // fit all three frames inside the 9.0" content width
  const sumAr = geos.reduce((a, g) => a + g.ar, 0);
  const gh = (9.0 - 2 * 0.35) / sumAr; // ≈1.85
  let x = 0.5;
  geos.forEach((g) => {
    const w = gh * g.ar;
    s.addShape(pres.shapes.RECTANGLE, { x: x - 0.05, y: 1.62, w: w + 0.1, h: gh + 0.1, fill: { color: CARD }, line: { color: LINEC, width: 0.75 }, shadow: { type: "outer", color: "16243D", blur: 5, offset: 1, angle: 90, opacity: 0.1 } });
    s.addImage({ path: FIG("10_Papers-Thesis", "Physics_Informed", "figures", g.p), x, y: 1.67, w, h: gh });
    s.addText(g.l, { x: x - 0.05, y: 1.67 + gh + 0.12, w: w + 0.1, h: 0.45, margin: 0, fontFace: BODY, fontSize: 8.5, italic: true, color: MUTED });
    x += w + 0.35;
  });
  card(s, 0.5, 4.45, 9.0, 0.7, GOLD);
  s.addText([
    { text: "Low-effort integration win:  ", options: { bold: true, color: INK } },
    { text: "all dated 2026-04-23/24 (after main.tex's last edit), with generator scripts; main.tex includes none — Section 2 currently describes the 80×48 triangular-pad geometry in text only.", options: { color: "2B3950" } },
  ], { x: 0.72, y: 4.5, w: 8.55, h: 0.6, margin: 0, fontFace: BODY, fontSize: 10.5, valign: "middle" });
}

// ============================================================
// S17 — 6.1 TRK vs MATEROOT (group meeting 2026-03-26)
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "6.1  PRESENTED, NOT PUBLISHED", "absent", "CNN beats MATEROOT's published angular resolution", 7.6);
  fig(s, FIG("outputs", "figures", "Angular Regression-comparison", "angular_resolution_comparison.png"), AR.angres, 5.45, 1.45, 2.85, "Digitized MATEROOT Fig. 4/8 overlay vs CNN (group_meeting_20260326.pptx)");
  s.addTable([
    [
      { text: "Range", options: { fill: { color: INK }, color: "FFFFFF", bold: true } },
      { text: "CNN σθ", options: { fill: { color: INK }, color: "FFFFFF", bold: true } },
      { text: "MATEROOT", options: { fill: { color: INK }, color: "FFFFFF", bold: true } },
    ],
    ["~30 mm", "1.764°", "3.6°"],
    ["~83 mm", "0.875°", "1.25°"],
    ["~168 mm", "0.513°", "~0.68°"],
  ], { x: 0.5, y: 1.5, w: 4.0, colW: [1.3, 1.35, 1.35], border: { pt: 0.5, color: LINEC }, fontFace: BODY, fontSize: 10.5, color: "2B3950", align: "left", valign: "middle", rowH: 0.32, fill: { color: "FFFFFF" } });
  stat(s, 0.5, 3.05, 2.05, "1.3–2×", "better than published (Lu Li et al., NST)", TEAL);
  stat(s, 2.75, 3.05, 2.0, "49% → ~0", "wrong-track-count rate, MATEROOT vs CNN", INK, 24);
  bullets(s, [
    { text: "Delivered at group meeting 2026-03-26; 8 figure pairs incl. digitized overlays; RANSAC distance-parameter fragility documented." },
    { text: "Explicit caveat: different simulation campaigns, ~15–20% range-mapping uncertainty." },
    { text: "Strongest external-positioning result in the repository — a natural anchor for a trajectory-reconstruction paper or chapter.", color: STATUS.absent.color, bold: true },
  ], { x: 0.5, y: 4.0, w: 4.7, h: 1.2, size: 9.5, gap: 4 });
}

// ============================================================
// S18 — 6.2 INSTITUTIONAL DECKS (provenance)
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "6.2  PRESENTED, NOT PUBLISHED", "absent", "Institutional decks — provenance of the TRK story", 8.2);
  card(s, 0.5, 1.55, 5.3, 2.2, TEAL);
  s.addText("Imai (UTokyo) meeting — 2026-04-13", { x: 0.72, y: 1.7, w: 4.8, h: 0.3, margin: 0, fontFace: HDR, fontSize: 13, bold: true, color: INK });
  bullets(s, [
    { text: "imai_meeting_20260413.pptx, built 2026-04-12 (PptxGenJS/Node); markdown 01–07 are assembled source material." },
    { text: "Covers thesis experiments, MATE NST-paper numbers (ResNet-50 90.47% exp / 97.89% sim, 12C+12C elastic-vs-fusion, F1 = 0.931), the mid-March EXP pivot, TRK pipeline shipped 2026-04-11." },
  ], { x: 0.72, y: 2.06, w: 4.85, h: 1.6, size: 10, gap: 5 });
  card(s, 6.2, 1.55, 3.3, 2.2, GOLD);
  s.addText("Mid-term assessment", { x: 6.42, y: 1.7, w: 2.9, h: 0.3, margin: 0, fontFace: HDR, fontSize: 13, bold: true, color: INK });
  bullets(s, [
    { text: "Chinese-language deck 硕士中期考核_胡智恒_2026-04.pptx." },
    { text: "Both decks first committed 2026-05-22 (commit 7a92841)." },
  ], { x: 6.42, y: 2.06, w: 2.85, h: 1.6, size: 10, gap: 5 });
  card(s, 0.5, 4.1, 9.0, 0.8, INK);
  s.addText([
    { text: "Why it matters:  ", options: { bold: true, color: INK } },
    { text: "minor for paper content, but useful provenance — the TRK trajectory-reconstruction story was already the project's externally presented progress narrative in April 2026 while the manuscript remained classification-only.", options: { color: "2B3950" } },
  ], { x: 0.72, y: 4.18, w: 8.55, h: 0.64, margin: 0, fontFace: BODY, fontSize: 10.5, valign: "middle" });
}

// ============================================================
// S19 — APPENDIX: REJECTED CANDIDATES
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "APPENDIX", "info", "Checked and rejected during verification", 8.2);
  const rej = [
    { t: "EXP1 matched-training-size (“headline gain is data scaling”)", d: "Numbers verified, but the significance misattributes the target: it undercuts the V6-ablation +0.8 pp claim, NOT the abstract's +4.2 pp 3He/4He claim, whose confound remains unresolved. “Built the entire src/” also overstated." },
    { t: "Advisor deck “Energy Regression Comparison” (2026-05-18)", d: "Deck has 17 slides, not 19; headline paired-diff sign was flipped in source notes (correct: ResNet − CrossAtt = +0.00433 MeV); SoTA-anchor and decision-request slides exist only in the 05-19 notes version." },
    { t: "TRK angular-resolution supplement toolchain (June 2026)", d: "“+106/+93 lines” is diffstat churn (net +62/+69); “validated end-to-end” is false — inference, ROOT conversion, and plot merge never executed; smoke test used a 3-event synthetic NPZ." },
    { t: "EXP5 / EXP7 figure artifacts", d: "Provenance disqualifying: EXP5 figures render hard-coded placeholder data (RUN_DIRS all None); EXP7 falls back to an unmatched legacy AFTPC_V3 run (91.5%) with a reconstructed confusion matrix. No EXP5/EXP7 training ever ran." },
  ];
  rej.forEach((r, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7, y = 1.5 + row * 2.0;
    card(s, x, y, 4.3, 1.62, "B3362B");
    s.addText(r.t, { x: x + 0.2, y: y + 0.1, w: 3.92, h: 0.42, margin: 0, fontFace: HDR, fontSize: 10.5, bold: true, color: "B3362B" });
    s.addText(r.d, { x: x + 0.2, y: y + 0.54, w: 3.92, h: 1.0, margin: 0, fontFace: BODY, fontSize: 8.8, color: "2B3950" });
  });
}

// ============================================================
// S20 — SUMMARY MATRIX
// ============================================================
{
  const s = pres.addSlide();
  chrome(s, "SUMMARY", null, "All 16 findings at a glance");
  const TH = (t) => ({ text: t, options: { fill: { color: INK }, color: "FFFFFF", bold: true, fontSize: 9 } });
  const pill = (k) => ({ text: STATUS[k].label, options: { color: STATUS[k].color, bold: true, fontSize: 8.5 } });
  const row = (id, name, k, sig) => [
    { text: id, options: { fontSize: 8.5, bold: true, color: INK } },
    { text: name, options: { fontSize: 8.5 } },
    pill(k),
    { text: sig, options: { fontSize: 8.5, color: "44536B" } },
  ];
  s.addTable([
    [TH("§"), TH("Finding"), TH("Paper"), TH("One-line significance")],
    row("1.1", "TRK5/TRK6 energy regression", "partial", "Extends the paper to quantitative reconstruction"),
    row("1.2", "EXP2 fusion comparison", "stale", "Concat > Gated > CrossAtt — challenges the framing"),
    row("1.3", "TRK3/4-v2 angle regression", "absent", "Strongest cross-attention win (−16.1% MAE)"),
    row("1.4", "TRK1/2 track-count classification", "absent", "Multi-track capability demonstrated; task saturated"),
    row("2.1", "Classical baselines (RANSAC/Hough/HC)", "partial", "Conventional context; 54–76× worse than CNNs"),
    row("2.2", "LM-refined RANSAC", "absent", "Newest result; CNN advantage shrinks ~60× → ~8×"),
    row("3.1", "A/Z governing-parameter correction", "stale", "Correctness risk in central motivation (Z²·A^μ)"),
    row("3.2", "Sweeps + significance matrix", "absent", "Pre-empts under-tuning objection; full statistics"),
    row("3.3", "Range-clipping analysis", "partial", "CNN recovers clipped-track energy — physics hook"),
    row("3.4", "Cross-task report, tables T1–T6", "absent", "Task-dependent architecture narrative, LaTeX-ready"),
    row("4.1", "v2 dataset + 19-probe QA gate", "partial", "Per-event broadcast contract — load-bearing"),
    row("4.2", "SRIM range→energy lookup", "partial", "Methods content; pre-registered wording needs fix"),
    row("5.1", "Energy-regression figure suite", "absent", "Near-complete figure package; prose is the only gap"),
    row("5.2", "Geometry schematics", "absent", "Low-effort Section-2 integration win"),
    row("6.1", "TRK vs MATEROOT comparison", "absent", "Beats published angular resolution 1.3–2×"),
    row("6.2", "Institutional decks", "absent", "Provenance of the presented TRK narrative"),
  ], {
    x: 0.5, y: 1.36, w: 9.0, colW: [0.45, 2.6, 0.75, 5.2],
    border: { pt: 0.5, color: LINEC }, fontFace: BODY, align: "left", valign: "middle",
    fill: { color: "FFFFFF" }, rowH: 0.205, margin: 0.04,
  });
}

console.log("Slides:", pageNo);

pres.writeFile({ fileName: path.join(__dirname, "Progress_Beyond_Paper_20260611.pptx") })
  .then(() => console.log("WROTE Progress_Beyond_Paper_20260611.pptx"));
