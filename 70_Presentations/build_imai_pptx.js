const pptxgen = require("pptxgenjs");
const path = require("path");

// ── Color Palette: Ocean Gradient (physics / deep-blue theme) ──
const C = {
  navy:      "0D1B2A",   // dark bg
  deepBlue:  "1B2838",   // slide bg dark
  midBlue:   "1B3A4B",   // card bg
  teal:      "0E8388",   // accent / highlight
  seafoam:   "2EC4B6",   // secondary accent
  ice:       "CBE4DE",   // light text on dark
  offWhite:  "F0F4F8",   // body bg (light slides)
  white:     "FFFFFF",
  lightGray: "E2E8F0",
  medGray:   "94A3B8",
  darkText:  "1E293B",
  red:       "E63946",
};

// ── Paths ──
const FIG = "D:/Something/research/MATE-Automation-V4/10_Papers-Thesis/Physics_Informed/figures";
const TRK = "D:/Something/research/MATE-Automation-V4/runs/TRK-comparison/figures";
const EXP1 = "D:/Something/research/MATE-Automation-V4/runs/EXP1-XA-HC-100k/20260317_191552_seed42/figures";
const EXP2 = "D:/Something/research/MATE-Automation-V4/runs/EXP2-fusion-comparison/figures";
const NST = "D:/obsidian/OrbitOS/50_Resources/Physics/literature/MLforPhysics/NST-ML-12C12C-MATE";
const OUT = "D:/Something/research/MATE-Automation-V4/presentations/imai_meeting_20260413.pptx";

// ── Presentation Setup ──
let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";  // 10" x 5.625"
pres.author = "ZhiHeng Hu";
pres.title = "ML-Based Particle Identification for Active-Target TPCs";

// ── Helper: dark slide footer ──
function addFooter(slide, text) {
  slide.addText(text, {
    x: 0.5, y: 5.2, w: 9, h: 0.35,
    fontSize: 9, fontFace: "Calibri", color: C.medGray,
    align: "left", valign: "bottom", margin: 0,
  });
}

// ── Helper: slide number ──
function addSlideNum(slide, num) {
  slide.addText(String(num) + " / 5", {
    x: 9.0, y: 5.2, w: 0.8, h: 0.35,
    fontSize: 9, fontFace: "Calibri", color: C.medGray,
    align: "right", valign: "bottom", margin: 0,
  });
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 1 — Physics Motivation
// Layout: Dark bg, large title left, figure right
// ══════════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.navy };

  // Top accent bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.teal },
  });

  // Title
  s.addText("Understanding Nuclear Structure\nThrough Direct Reactions", {
    x: 0.6, y: 0.4, w: 5.2, h: 1.2,
    fontSize: 28, fontFace: "Georgia", color: C.white,
    bold: true, align: "left", valign: "top", lineSpacingMultiple: 1.1,
    margin: 0,
  });

  // Subtitle
  s.addText("Why Active-Target TPCs Need Better Particle Identification", {
    x: 0.6, y: 1.65, w: 5.2, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: C.seafoam,
    italic: true, align: "left", margin: 0,
  });

  // Content bullets (left column)
  s.addText([
    { text: "Shell evolution far from stability", options: { bullet: true, breakLine: true, fontSize: 13, color: C.ice, bold: true } },
    { text: "Traditional magic numbers change for exotic nuclei; tensor-force monopole reshuffles single-particle levels", options: { breakLine: true, fontSize: 11, color: C.medGray, indentLevel: 1 } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "Inverse-kinematics direct reactions as the probe", options: { bullet: true, breakLine: true, fontSize: 13, color: C.ice, bold: true } },
    { text: "Transfer/knockout reactions on RI beams extract spectroscopic factors and angular distributions via DWBA", options: { breakLine: true, fontSize: 11, color: C.medGray, indentLevel: 1 } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "Active-target TPCs: thick target + full coverage", options: { bullet: true, breakLine: true, fontSize: 13, color: C.ice, bold: true } },
    { text: "Gas IS the target: near-unity efficiency for short-range recoils, 4\u03C0 coverage, high luminosity without degrading resolution", options: { breakLine: true, fontSize: 11, color: C.medGray, indentLevel: 1 } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "The bottleneck: reliable particle identification (PID)", options: { bullet: true, breakLine: true, fontSize: 13, color: C.seafoam, bold: true } },
    { text: "Without clean PID, light recoils cannot be separated from backgrounds \u2014 angular distributions and C\u00B2S extraction collapse", options: { fontSize: 11, color: C.medGray, indentLevel: 1 } },
  ], {
    x: 0.6, y: 2.3, w: 5.0, h: 3.0,
    fontFace: "Calibri", valign: "top", align: "left",
    paraSpaceAfter: 2, margin: 0,
  });

  // Right side: MATE detector schematic
  s.addImage({
    path: path.join(FIG, "mate_geometry_schema.png"),
    x: 5.9, y: 0.5, w: 3.8, h: 3.2,
    sizing: { type: "contain", w: 3.8, h: 3.2 },
  });

  // Caption under figure
  s.addText("MATE AT-TPC: GEM readout, 3792 triangular pads", {
    x: 5.9, y: 3.75, w: 3.8, h: 0.35,
    fontSize: 9, fontFace: "Calibri", color: C.medGray,
    align: "center", margin: 0,
  });

  // Pad geometry inset (smaller)
  s.addImage({
    path: path.join(FIG, "mate_pad_geometry.png"),
    x: 6.4, y: 4.15, w: 2.8, h: 1.1,
    sizing: { type: "contain", w: 2.8, h: 1.1 },
  });

  addFooter(s, "ZhiHeng Hu  |  IMP, CAS  |  Meeting with Imai-sensei  |  2026-04-13");
  addSlideNum(s, 1);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 2 — What I Did (project overview)
// Layout: Light bg, single card with concise bullet points
// ══════════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.offWhite };

  // Top accent bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.teal },
  });

  // Title
  s.addText("What I Did", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.darkText,
    bold: true, align: "left", margin: 0,
  });

  // Subtitle
  s.addText("MATE-Automation: ML Pipeline for Active-Target TPC Particle Identification", {
    x: 0.5, y: 0.85, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Calibri", color: C.teal,
    italic: true, align: "left", margin: 0,
  });

  // Card background
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 9.0, h: 3.7,
    fill: { color: C.white },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.08 },
  });

  s.addText([
    { text: "Built the MATE-Automation ML pipeline", options: { bullet: true, bold: true, fontSize: 14, color: C.darkText, breakLine: true } },
    { text: "End-to-end framework: Geant4 simulation \u2192 ROOT \u2192 HDF5 \u2192 image generation \u2192 CNN training \u2192 inference", options: { fontSize: 11.5, color: C.medGray, indentLevel: 1, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 8 } },
    { text: "Trained ResNet family + VGG-19 on \u00B9\u00B2C+\u00B9\u00B2C data", options: { bullet: true, bold: true, fontSize: 14, color: C.darkText, breakLine: true } },
    { text: "ResNet-18/34/50 and VGG-19 benchmarked on Geant4-simulated + real HIRFL-RIBLL commissioning data", options: { fontSize: 11.5, color: C.medGray, indentLevel: 1, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 8 } },
    { text: "Developed novel CrossAttention + HitChannel fusion architecture", options: { bullet: true, bold: true, fontSize: 14, color: C.darkText, breakLine: true } },
    { text: "Physics-informed feature injection: cross-attention fuses scalar hit-channel data with CNN image embeddings", options: { fontSize: 11.5, color: C.medGray, indentLevel: 1, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 8 } },
    { text: "Extended pipeline to trajectory reconstruction", options: { bullet: true, bold: true, fontSize: 14, color: C.darkText, breakLine: true } },
    { text: "Same architecture generalizes from classification to angle regression (polar/azimuthal)", options: { fontSize: 11.5, color: C.medGray, indentLevel: 1, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 8 } },
    { text: "Submitted paper to Nuclear Science and Techniques", options: { bullet: true, bold: true, fontSize: 14, color: C.teal, breakLine: true } },
    { text: "NST-2025-0958: full PID classification results on elastic/fusion + 5 fusion sub-channels", options: { fontSize: 11.5, color: C.medGray, indentLevel: 1 } },
  ], {
    x: 0.8, y: 1.6, w: 8.4, h: 3.3,
    fontFace: "Calibri", valign: "top", align: "left",
    paraSpaceAfter: 2, margin: 0,
  });

  addFooter(s, "ZhiHeng Hu  |  IMP, CAS");
  addSlideNum(s, 2);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 3 — Results: Classification + Trajectory Reconstruction
// Layout: Dark bg, 3-column stat callouts + figures below
// ══════════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.deepBlue };

  // Top accent bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.seafoam },
  });

  // Title
  s.addText("Results: From Event Classification to Trajectory Reconstruction", {
    x: 0.5, y: 0.2, w: 9, h: 0.55,
    fontSize: 24, fontFace: "Georgia", color: C.white,
    bold: true, align: "left", margin: 0,
  });

  // ── 3 stat callout cards ──
  const cardY = 0.9;
  const cardH = 1.55;
  const cardW = 2.85;
  const gap = 0.22;

  // Card 1: PID classification
  const makeCardBg = (xPos) => ({
    x: xPos, y: cardY, w: cardW, h: cardH,
    fill: { color: C.midBlue },
  });

  s.addShape(pres.shapes.RECTANGLE, makeCardBg(0.5));
  // Accent left border
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cardY, w: 0.06, h: cardH, fill: { color: C.teal },
  });
  s.addText([
    { text: "PID Classification", options: { bold: true, fontSize: 11, color: C.seafoam, breakLine: true } },
    { text: "90\u201397%", options: { bold: true, fontSize: 32, color: C.white, breakLine: true } },
    { text: "elastic/fusion on \u00B9\u00B2C+\u00B9\u00B2C", options: { fontSize: 10, color: C.ice, breakLine: true } },
    { text: "95% across 5 fusion channels", options: { fontSize: 10, color: C.ice, breakLine: true } },
    { text: "Submitted: NST-2025-0958", options: { fontSize: 9, color: C.medGray, italic: true } },
  ], {
    x: 0.7, y: cardY + 0.1, w: cardW - 0.35, h: cardH - 0.2,
    fontFace: "Calibri", valign: "top", align: "left", margin: 0,
  });

  // Card 2: Architecture improvement
  const card2X = 0.5 + cardW + gap;
  s.addShape(pres.shapes.RECTANGLE, {
    x: card2X, y: cardY, w: cardW, h: cardH, fill: { color: C.midBlue },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: card2X, y: cardY, w: 0.06, h: cardH, fill: { color: C.seafoam },
  });
  s.addText([
    { text: "CrossAtt + HitChannel", options: { bold: true, fontSize: 11, color: C.seafoam, breakLine: true } },
    { text: "95.80%", options: { bold: true, fontSize: 32, color: C.white, breakLine: true } },
    { text: "\u00B3He/\u2074He binary (controlled)", options: { fontSize: 10, color: C.ice, breakLine: true } },
    { text: "Comparable to baseline (95.77%, p=0.81)", options: { fontSize: 9.5, color: C.medGray, italic: true, breakLine: true } },
    { text: "Adds interpretable physics features", options: { fontSize: 10, color: C.ice, breakLine: true } },
    { text: "without sacrificing accuracy", options: { fontSize: 10, color: C.ice } },
  ], {
    x: card2X + 0.2, y: cardY + 0.1, w: cardW - 0.35, h: cardH - 0.2,
    fontFace: "Calibri", valign: "top", align: "left", margin: 0,
  });

  // Card 3: TRK angle regression
  const card3X = card2X + cardW + gap;
  s.addShape(pres.shapes.RECTANGLE, {
    x: card3X, y: cardY, w: cardW, h: cardH, fill: { color: C.midBlue },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: card3X, y: cardY, w: 0.06, h: cardH, fill: { color: C.red },
  });
  s.addText([
    { text: "Trajectory Reconstruction", options: { bold: true, fontSize: 11, color: C.seafoam, breakLine: true } },
    { text: "\u221216.1%", options: { bold: true, fontSize: 32, color: C.white, breakLine: true } },
    { text: "MAE: 0.992\u00B0 \u2192 0.832\u00B0 (p < 10\u207B\u00B9\u2076)", options: { fontSize: 10, color: C.ice, breakLine: true } },
    { text: "CrossAtt on angle regression", options: { fontSize: 10, color: C.ice, breakLine: true } },
    { text: "Same architecture generalizes", options: { fontSize: 10, color: C.ice } },
  ], {
    x: card3X + 0.2, y: cardY + 0.1, w: cardW - 0.35, h: cardH - 0.2,
    fontFace: "Calibri", valign: "top", align: "left", margin: 0,
  });

  // ── Bottom row: two figures ──
  // Left: confusion matrix grid (V6 ablation)
  s.addImage({
    path: path.join(FIG, "v6_confusion_matrix_grid.png"),
    x: 0.5, y: 2.7, w: 4.3, h: 2.35,
    sizing: { type: "contain", w: 4.3, h: 2.35 },
  });
  s.addText("2\u00D72 ablation confusion matrices (3He/4He)", {
    x: 0.5, y: 5.0, w: 4.3, h: 0.25,
    fontSize: 8.5, fontFace: "Calibri", color: C.medGray,
    align: "center", margin: 0,
  });

  // Right: cross-task honest comparison
  s.addImage({
    path: path.join(TRK, "cross_task_honest_comparison.png"),
    x: 5.1, y: 2.7, w: 4.5, h: 2.35,
    sizing: { type: "contain", w: 4.5, h: 2.35 },
  });
  s.addText("Cross-task: Isotope ID / Track Count / Angle Regression", {
    x: 5.1, y: 5.0, w: 4.5, h: 0.25,
    fontSize: 8.5, fontFace: "Calibri", color: C.medGray,
    align: "center", margin: 0,
  });

  addSlideNum(s, 3);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 4 — Connection: From MATE to DONUTS
// Layout: Light bg, left text + right architecture diagram
// ══════════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.offWhite };

  // Top accent bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.teal },
  });

  // Title
  s.addText("Connection: From MATE to DONUTS", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.darkText,
    bold: true, align: "left", margin: 0,
  });

  // Subtitle
  s.addText("The ML-PID capability maps directly to the DONUTS experimental program", {
    x: 0.5, y: 0.85, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Calibri", color: C.teal,
    italic: true, align: "left", margin: 0,
  });

  // ── Three content cards ──
  const cY = 1.45;
  const cW = 2.85;
  const cH = 2.2;

  // Card 1: OEDO-SHARAQ
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cY, w: cW, h: cH,
    fill: { color: C.white },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cY, w: cW, h: 0.06, fill: { color: C.teal },
  });
  s.addText([
    { text: "OEDO-SHARAQ", options: { bold: true, fontSize: 14, color: C.teal, breakLine: true } },
    { text: "Direct Reactions on Exotic Nuclei", options: { bold: true, fontSize: 11, color: C.darkText, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "Inverse-kinematics (d,p), (p,d) at 10\u201330 MeV/u with RI beams from RIKEN RIBF", options: { fontSize: 10.5, color: C.medGray, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 3 } },
    { text: "Same PID challenge: separate light recoils from beam-related backgrounds", options: { fontSize: 10.5, color: C.darkText } },
  ], {
    x: 0.7, y: cY + 0.15, w: cW - 0.4, h: cH - 0.25,
    fontFace: "Calibri", valign: "top", align: "left", margin: 0,
  });

  // Card 2: SAKURA
  const c2X = 0.5 + cW + 0.22;
  s.addShape(pres.shapes.RECTANGLE, {
    x: c2X, y: cY, w: cW, h: cH,
    fill: { color: C.white },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: c2X, y: cY, w: cW, h: 0.06, fill: { color: C.seafoam },
  });
  s.addText([
    { text: "SAKURA", options: { bold: true, fontSize: 14, color: C.seafoam, breakLine: true } },
    { text: "Surrogate (d,p) for r-Process", options: { bold: true, fontSize: 11, color: C.darkText, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "Proxy for (n,\u03B3) cross-sections on short-lived nuclei for astrophysical r-process", options: { fontSize: 10.5, color: C.medGray, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 3 } },
    { text: "\u2077\u2079Se(d,p) flagship (PLB 2024, Imai et al.) \u2014 reliable PID essential for extracting neutron-capture proxy", options: { fontSize: 10.5, color: C.darkText } },
  ], {
    x: c2X + 0.2, y: cY + 0.15, w: cW - 0.4, h: cH - 0.25,
    fontFace: "Calibri", valign: "top", align: "left", margin: 0,
  });

  // Card 3: Shared Infrastructure
  const c3X = c2X + cW + 0.22;
  s.addShape(pres.shapes.RECTANGLE, {
    x: c3X, y: cY, w: cW, h: cH,
    fill: { color: C.white },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: c3X, y: cY, w: cW, h: 0.06, fill: { color: C.navy },
  });
  s.addText([
    { text: "Shared Challenge", options: { bold: true, fontSize: 14, color: C.navy, breakLine: true } },
    { text: "Active-Target TPC + PID", options: { bold: true, fontSize: 11, color: C.darkText, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "CAT-M (CNS) and MATE (IMP) share GEM-based AT-TPC design with dual-gain architecture", options: { fontSize: 10.5, color: C.medGray, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 3 } },
    { text: "DG-M-THGEM prototype (Iwamoto, Ota, Imai, PTEP 2023): stable to 2.5\u00D710\u2076 pps", options: { fontSize: 10.5, color: C.darkText } },
  ], {
    x: c3X + 0.2, y: cY + 0.15, w: cW - 0.4, h: cH - 0.25,
    fontFace: "Calibri", valign: "top", align: "left", margin: 0,
  });

  // Bottom: architecture diagram (CrossAttention schema)
  s.addImage({
    path: path.join(FIG, "cross_attention_schema.png"),
    x: 0.5, y: 3.9, w: 4.5, h: 1.55,
    sizing: { type: "contain", w: 4.5, h: 1.55 },
  });
  s.addText("CrossAttention + HitChannel architecture (transferable to DONUTS data)", {
    x: 0.5, y: 5.35, w: 4.5, h: 0.25,
    fontSize: 8.5, fontFace: "Calibri", color: C.medGray,
    align: "center", margin: 0,
  });

  // Bottom-right: data pipeline
  s.addImage({
    path: path.join(FIG, "data_pipeline.png"),
    x: 5.3, y: 3.9, w: 4.3, h: 1.55,
    sizing: { type: "contain", w: 4.3, h: 1.55 },
  });
  s.addText("End-to-end pipeline: ROOT \u2192 HDF5 \u2192 image \u2192 ML inference", {
    x: 5.3, y: 5.35, w: 4.3, h: 0.25,
    fontSize: 8.5, fontFace: "Calibri", color: C.medGray,
    align: "center", margin: 0,
  });

  addFooter(s, "ZhiHeng Hu  |  IMP, CAS");
  addSlideNum(s, 4);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 5 — Outlook & Discussion
// Layout: Dark bg, centered text, discussion prompt
// ══════════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.navy };

  // Top accent bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.seafoam },
  });

  // Title
  s.addText("Outlook & Discussion", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Georgia", color: C.white,
    bold: true, align: "left", margin: 0,
  });

  // Main content: 3 columns
  // Column 1: Natural Next Steps
  const colY = 1.3;
  const colW = 2.85;
  const colH = 2.6;

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: colY, w: colW, h: colH, fill: { color: C.midBlue },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: colY, w: 0.06, h: colH, fill: { color: C.seafoam },
  });
  s.addText([
    { text: "Natural Next Steps", options: { bold: true, fontSize: 13, color: C.seafoam, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "Apply CrossAtt-PID framework to DONUTS detector data", options: { bullet: true, fontSize: 11, color: C.ice, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "Adapt pipeline for CAT-M / DG-M-THGEM geometries", options: { bullet: true, fontSize: 11, color: C.ice, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "Extend to complex multi-particle reaction channels in SAKURA", options: { bullet: true, fontSize: 11, color: C.ice } },
  ], {
    x: 0.7, y: colY + 0.15, w: colW - 0.35, h: colH - 0.3,
    fontFace: "Calibri", valign: "top", align: "left", margin: 0,
  });

  // Column 2: Open Questions
  const col2X = 0.5 + colW + 0.22;
  s.addShape(pres.shapes.RECTANGLE, {
    x: col2X, y: colY, w: colW, h: colH, fill: { color: C.midBlue },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: col2X, y: colY, w: 0.06, h: colH, fill: { color: C.teal },
  });
  s.addText([
    { text: "Open Questions", options: { bold: true, fontSize: 13, color: C.teal, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "How does ML-PID transfer across different TPC geometries and beam conditions?", options: { bullet: true, fontSize: 11, color: C.ice, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "Can domain adaptation (DANN, MCD) bridge simulation-to-real gap for exotic nuclei data?", options: { bullet: true, fontSize: 11, color: C.ice, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "What is the minimum training data for reliable PID on rare reaction channels?", options: { bullet: true, fontSize: 11, color: C.ice } },
  ], {
    x: col2X + 0.2, y: colY + 0.15, w: colW - 0.35, h: colH - 0.3,
    fontFace: "Calibri", valign: "top", align: "left", margin: 0,
  });

  // Column 3: For Discussion
  const col3X = col2X + colW + 0.22;
  s.addShape(pres.shapes.RECTANGLE, {
    x: col3X, y: colY, w: colW, h: colH, fill: { color: C.midBlue },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: col3X, y: colY, w: 0.06, h: colH, fill: { color: C.red },
  });
  s.addText([
    { text: "For Discussion", options: { bold: true, fontSize: 13, color: C.red, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: "Where does Imai-sensei see the highest-impact application of ML-PID within DONUTS?", options: { bullet: true, fontSize: 11, color: C.ice, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "Which upcoming SAKURA/OEDO experiments would benefit most from this pipeline?", options: { bullet: true, fontSize: 11, color: C.ice, breakLine: true } },
    { text: "", options: { breakLine: true, fontSize: 4 } },
    { text: "How can this work contribute to a PhD thesis at UTokyo CNS?", options: { bullet: true, fontSize: 11, color: C.ice } },
  ], {
    x: col3X + 0.2, y: colY + 0.15, w: colW - 0.35, h: colH - 0.3,
    fontFace: "Calibri", valign: "top", align: "left", margin: 0,
  });

  // Bottom highlight box
  s.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: 4.2, w: 7.0, h: 0.85,
    fill: { color: C.teal, transparency: 15 },
  });
  s.addText([
    { text: "Core message: ", options: { bold: true, fontSize: 14, color: C.white } },
    { text: "The AFTPC pipeline ", options: { fontSize: 14, color: C.ice } },
    { text: "generalizes", options: { bold: true, italic: true, fontSize: 14, color: C.seafoam } },
    { text: " across tasks (classification + regression) and can be adapted to DONUTS experimental data \u2014 let\u2019s explore how.", options: { fontSize: 14, color: C.ice } },
  ], {
    x: 1.7, y: 4.25, w: 6.6, h: 0.75,
    fontFace: "Calibri", valign: "middle", align: "center", margin: 0,
  });

  addFooter(s, "ZhiHeng Hu  |  IMP, CAS  |  hu@impcas.ac.cn");
  addSlideNum(s, 5);
}

// ── Write file ──
pres.writeFile({ fileName: OUT }).then(() => {
  console.log("SUCCESS: Presentation saved to " + OUT);
}).catch(err => {
  console.error("ERROR:", err);
  process.exit(1);
});
