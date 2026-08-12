// Introductory academic presentation — "Physics-Informed Deep Learning for the MATE AT-TPC"
// Audience: nuclear physicists new to ML. 18 slides, English.
// Build: node build_intro_pptx.js   (from this directory; pptxgenjs resolved from ../node_modules)

const pptxgen = require("pptxgenjs");
const path = require("path");

// ── Color Palette: Ocean Gradient (consistent with prior decks) ──
const C = {
  navy:      "0D1B2A",
  deepBlue:  "1B2838",
  midBlue:   "1B3A4B",
  teal:      "0E8388",
  seafoam:   "2EC4B6",
  ice:       "CBE4DE",
  offWhite:  "F7FAFC",
  white:     "FFFFFF",
  lightGray: "E2E8F0",
  medGray:   "94A3B8",
  slateGray: "64748B",
  darkText:  "1E293B",
  red:       "E63946",
  amber:     "D97706",
};

// ── Paths ──
const ROOT = "D:/Something/research/MATE-Automation-V4";
const FIG  = ROOT + "/10_Papers-Thesis/Physics_Informed/figures";
const OUTF = ROOT + "/outputs/figures";
const ANG  = OUTF + "/Angular Regression-comparison";
const E56  = OUTF + "/TRK5_TRK6_comparison";
const OUT  = path.join(__dirname, "intro_MATE_ML_20260611.pptx");

const N_SLIDES = 18;
let slideNo = 0;

// ── Presentation Setup ──
let pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10" x 5.625"
pres.author = "ZhiHeng Hu";
pres.title = "Physics-Informed Deep Learning for the MATE Active-Target TPC";

// ── Helpers ──
function footer(s, dark) {
  slideNo += 1;
  s.addText("ZhiHeng Hu  |  IMP, CAS  |  June 2026", {
    x: 0.5, y: 5.25, w: 6.5, h: 0.3, fontSize: 9, fontFace: "Calibri",
    color: dark ? C.medGray : C.slateGray, align: "left", valign: "bottom", margin: 0,
  });
  s.addText(slideNo + " / " + N_SLIDES, {
    x: 8.7, y: 5.25, w: 0.8, h: 0.3, fontSize: 9, fontFace: "Calibri",
    color: dark ? C.medGray : C.slateGray, align: "right", valign: "bottom", margin: 0,
  });
}

function lightSlide(title, tag) {
  let s = pres.addSlide();
  s.background = { color: C.offWhite };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.teal } });
  if (tag) {
    s.addText(tag.toUpperCase(), {
      x: 0.5, y: 0.22, w: 3.2, h: 0.28, fontSize: 10, fontFace: "Calibri",
      color: C.teal, bold: true, charSpacing: 2, align: "left", margin: 0,
    });
  }
  s.addText(title, {
    x: 0.5, y: tag ? 0.48 : 0.3, w: 9.0, h: 0.75, fontSize: 26, fontFace: "Georgia",
    color: C.darkText, bold: true, align: "left", valign: "top", margin: 0,
  });
  footer(s, false);
  return s;
}

function darkSlide() {
  let s = pres.addSlide();
  s.background = { color: C.navy };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.teal } });
  footer(s, true);
  return s;
}

// stat callout card on light bg
function statCard(s, x, y, w, h, value, label, accent, valueSize) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h, fill: { color: C.white }, line: { color: C.lightGray, width: 1 },
    rectRadius: 0.06, shadow: { type: "outer", blur: 4, offset: 1, angle: 90, color: "94A3B8", opacity: 0.3 },
  });
  s.addText(value, {
    x: x + 0.1, y: y + 0.08, w: w - 0.2, h: h * 0.52, fontSize: valueSize || 26, fontFace: "Georgia",
    color: accent || C.teal, bold: true, align: "center", valign: "middle", margin: 0,
  });
  s.addText(label, {
    x: x + 0.12, y: y + h * 0.55, w: w - 0.24, h: h * 0.42, fontSize: 10, fontFace: "Calibri",
    color: C.slateGray, align: "center", valign: "top", margin: 0,
  });
}

function bullets(s, items, opts) {
  const runs = [];
  items.forEach((it, i) => {
    runs.push({ text: it.h, options: { bullet: { code: "2022", indent: 12 }, breakLine: true, fontSize: it.hs || 14, color: it.hc || C.darkText, bold: true } });
    if (it.b) runs.push({ text: it.b, options: { breakLine: true, fontSize: it.bs || 11.5, color: it.bc || C.slateGray, indentLevel: 1 } });
    if (i < items.length - 1) runs.push({ text: "", options: { breakLine: true, fontSize: 5 } });
  });
  s.addText(runs, Object.assign({ fontFace: "Calibri", valign: "top", align: "left", paraSpaceAfter: 2, margin: 0 }, opts));
}

function caption(s, text, x, y, w) {
  s.addText(text, { x, y, w, h: 0.3, fontSize: 10, fontFace: "Calibri", color: C.slateGray, italic: true, align: "center", margin: 0 });
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 1 — Title (dark)
// ══════════════════════════════════════════════════════════════════════
{
  let s = darkSlide();
  s.addText("Physics-Informed Deep Learning\nfor the MATE Active-Target TPC", {
    x: 0.6, y: 1.0, w: 8.8, h: 1.6, fontSize: 34, fontFace: "Georgia", color: C.white,
    bold: true, align: "left", lineSpacingMultiple: 1.1, margin: 0,
  });
  s.addText("From Isotope Identification to Full Kinematic Reconstruction", {
    x: 0.6, y: 2.7, w: 8.8, h: 0.5, fontSize: 17, fontFace: "Calibri", color: C.seafoam, italic: true, margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 3.45, w: 1.6, h: 0.025, fill: { color: C.teal } });
  s.addText([
    { text: "ZhiHeng Hu", options: { fontSize: 15, color: C.ice, bold: true, breakLine: true } },
    { text: "Institute of Modern Physics, Chinese Academy of Sciences", options: { fontSize: 12, color: C.medGray, breakLine: true } },
    { text: "June 2026", options: { fontSize: 12, color: C.medGray } },
  ], { x: 0.6, y: 3.65, w: 6.0, h: 1.1, fontFace: "Calibri", align: "left", valign: "top", margin: 0 });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.25, y: 3.05, w: 3.45, h: 2.1, rectRadius: 0.08, fill: { color: C.white }, line: { color: C.teal, width: 1.25 } });
  s.addImage({ path: path.join(FIG, "mate_3d_schematic.png"), x: 6.4, y: 3.15, w: 3.15, h: 1.9, sizing: { type: "contain", w: 3.15, h: 1.9 } });
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 2 — Talk roadmap
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("What This Talk Covers", "Roadmap");
  const items = [
    ["1", "The detector & the data challenge", "MATE AT-TPC events as 3D point clouds — and why conventional reconstruction hits its limits."],
    ["2", "A physics-informed approach", "CNNs explained for physicists; injecting moment-of-inertia features via cross-attention."],
    ["3", "Results across three tasks", "Isotope identification → track counting & angles → kinetic-energy regression vs. classical baselines."],
    ["4", "Context & outlook", "How this complements ML work on real MATE beam data, and what comes next."],
  ];
  items.forEach((it, i) => {
    const y = 1.5 + i * 1.0;
    s.addShape(pres.shapes.OVAL, { x: 0.7, y: y, w: 0.55, h: 0.55, fill: { color: C.teal } });
    s.addText(it[0], { x: 0.7, y: y, w: 0.55, h: 0.55, fontSize: 20, fontFace: "Georgia", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s.addText([
      { text: it[1], options: { fontSize: 15, color: C.darkText, bold: true, breakLine: true } },
      { text: it[2], options: { fontSize: 11, color: C.slateGray } },
    ], { x: 1.5, y: y - 0.06, w: 7.9, h: 0.85, fontFace: "Calibri", align: "left", valign: "top", margin: 0 });
  });
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 3 — MATE AT-TPC & the data challenge
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("The MATE AT-TPC and Its Data Challenge", "Detector & Data");
  bullets(s, [
    { h: "Gas is both target and tracking medium", b: "95% ⁴He + 5% CO₂ at 500 mbar; active volume ≈ 300×300×200 mm³; near-4π coverage for short-range recoils." },
    { h: "Readout: 80×48 grid, 3792 triangular pads (3840 channels)", b: "Each event → a 3D point cloud (x, y, z, q): drift coordinate, pad plane position, deposited charge." },
    { h: "Simulation campaign (GEANT4 / MATEROOT)", b: "¹²C + ⁴He in inverse kinematics at 300 MeV; 7 species (p, d, t, ³He, α, ¹³C, ¹⁴C); up to 1.2M events per study." },
    { h: "The analysis bottleneck", b: "10⁶–10⁸ events per experiment — reconstruction and identification must be automated, fast, and objective.", hc: C.teal },
  ], { x: 0.5, y: 1.45, w: 4.9, h: 3.6 });
  s.addImage({ path: path.join(FIG, "mate_geometry_schema.png"), x: 5.55, y: 1.35, w: 4.1, h: 3.0, sizing: { type: "contain", w: 4.1, h: 3.0 } });
  caption(s, "MATE geometry: active volume and triangular-pad readout plane", 5.55, 4.45, 4.1);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 4 — Where conventional reconstruction struggles
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("Where Conventional Reconstruction Struggles", "The Problem");
  bullets(s, [
    { h: "Manual cuts are subjective", b: "Cut placement on overlapping dE/dx distributions varies analyst-to-analyst; sensitive to gain drifts and detector non-uniformity." },
    { h: "Same-Z isotopes are nearly degenerate", b: "Stopping power orders species by Z²A — for ¹³C vs. ¹⁴C the separation is only ΔA/A ≈ 8%, so dE/dx curves almost coincide." },
    { h: "Scalar observables discard structure", b: "Reducing a 3D track to total charge, length, or Bragg-peak amplitude throws away the spatial information that could break the degeneracy." },
    { h: "Geometric fitters degrade with complexity", b: "The published RANSAC pipeline misidentifies the track count in up to 49% of short-range, high-multiplicity events.", hc: C.red },
  ], { x: 0.5, y: 1.45, w: 5.3, h: 3.6 });
  statCard(s, 6.1, 1.7, 3.4, 1.35, "ΔA/A ≈ 8%", "¹³C / ¹⁴C separation — the hardest isotope pair", C.amber);
  statCard(s, 6.1, 3.45, 3.4, 1.35, "up to 49%", "wrong track count from RANSAC at short range & high multiplicity (published MATEROOT pipeline)", C.red);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 5 — Data pipeline: 3D tracks → 2D images
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("From 3D Point Clouds to Two-Channel Images", "Method · Data");
  s.addImage({ path: path.join(FIG, "data_pipeline.png"), x: 0.5, y: 1.4, w: 5.4, h: 3.4, sizing: { type: "contain", w: 5.4, h: 3.4 } });
  caption(s, "Processing chain: simulation → point cloud → projected pad-plane images", 0.5, 4.85, 5.4);
  bullets(s, [
    { h: "Project onto the y–z pad plane (80×48)", b: "Image grid matches the hardware readout one-to-one — no resampling artifacts." },
    { h: "Channel 0 — charge:  log(1+q) per pad", b: "Encodes energy deposition and the Bragg peak." },
    { h: "Channel 1 — drift time (normalized x̄)", b: "Restores the third dimension lost in projection." },
  ], { x: 6.1, y: 1.5, w: 3.5, h: 3.3 });
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 6 — CNN backbone for physicists
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("The CNN Backbone, in Physicist Terms", "Method · Model");
  bullets(s, [
    { h: "A convolution is a learned local filter", b: "Small kernels scan the image for local patterns (track edges, charge gradients); deeper layers compose them into track-level structure." },
    { h: "ResNet-18: stacked filters + shortcut connections", b: "Identity shortcuts keep 18 layers trainable — a standard, well-understood workhorse in computer vision." },
    { h: "Adapted to sparse TPC images", b: "First layer changed to 3×3, stride 1, and the early max-pool removed — the 80×48 images are small and sparse, so no aggressive downsampling." },
    { h: "Output: a 512-dimensional event descriptor", b: "Global average pooling turns the feature maps into one vector summarizing the whole event." },
  ], { x: 0.5, y: 1.45, w: 4.7, h: 3.6 });
  s.addImage({ path: path.join(FIG, "Standard_ResNet18_Architecture.png"), x: 5.35, y: 1.4, w: 4.3, h: 3.3, sizing: { type: "contain", w: 4.3, h: 3.3 } });
  caption(s, "Modified ResNet-18 backbone", 5.35, 4.8, 4.3);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 7 — Physics-informed fusion
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("Injecting Physics: Moment-of-Inertia + Cross-Attention", "Method · Physics-Informed");
  bullets(s, [
    { h: "Four physics features per event", b: "2D moment-of-inertia tensor of the charge image (Iyy, Izz, Iyz) plus total charge M — shape and scale observables a physicist would compute by hand." },
    { h: "Cross-attention: physics interrogates the image", b: "The physics features form the query; CNN spatial tokens are keys/values. The model learns where in the image to look, conditioned on event shape." },
    { h: "Why not just concatenate?", b: "Attention yields spatial weighting (interpretable overlays, slide 10) and pays off most in geometric regression tasks (slides 12–15)." },
  ], { x: 0.5, y: 1.45, w: 4.6, h: 3.6 });
  s.addImage({ path: path.join(FIG, "cross_attention_schema.png"), x: 5.25, y: 1.4, w: 4.4, h: 3.3, sizing: { type: "contain", w: 4.4, h: 3.3 } });
  caption(s, "Cross-attention fusion of physics features with CNN feature maps", 5.25, 4.8, 4.4);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 8 — Noise robustness & HC preprocessing
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("Robustness to Electronics Noise", "Method · Noise");
  bullets(s, [
    { h: "Realistic noise via Garfield++ post-processing", b: "Additive Gaussian electronics noise (ENC 800 e⁻) injected onto pad signals, emulating the GET readout." },
    { h: "HC denoising (Hierarchy Cluster)", b: "DBSCAN clustering in physical units (ε = 10 mm) keeps the largest physical cluster, rejecting isolated noise hits." },
    { h: "2×2 ablation — architecture × preprocessing", b: "CrossAtt+HC: 96.6% accuracy vs. ResNet+Raw: 93.5%. HC alone contributes +1.5–2.3 pp across architectures.", hc: C.teal },
  ], { x: 0.5, y: 1.45, w: 4.6, h: 3.4 });
  s.addImage({ path: path.join(FIG, "hc_before_after.png"), x: 5.25, y: 1.35, w: 4.4, h: 2.1, sizing: { type: "contain", w: 4.4, h: 2.1 } });
  caption(s, "HC preprocessing: raw noisy event (left) → denoised (right)", 5.25, 3.5, 4.4);
  statCard(s, 5.35, 3.85, 2.0, 1.25, "96.6%", "CrossAtt + HC under realistic noise", C.teal);
  statCard(s, 7.6, 3.85, 2.0, 1.25, "+1.5–2.3 pp", "gained by HC denoising alone", C.seafoam, 18);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 9 — Results I: Isotope PID
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("Results I — Isotope Identification", "Results · PID");
  s.addText("Clean GEANT4 simulation (NimpSim), physics-informed model vs. generic ResNet-18 baseline:", {
    x: 0.5, y: 1.35, w: 9.0, h: 0.3, fontSize: 12, fontFace: "Calibri", color: C.slateGray, italic: true, margin: 0,
  });
  statCard(s, 0.5, 1.8, 2.9, 1.45, "96.1%", "³He vs. ⁴He  (baseline: 91.9%,  +4.2 pp)", C.teal);
  statCard(s, 3.55, 1.8, 2.9, 1.45, "89.7%", "¹³C vs. ¹⁴C — hardest pair  (baseline: 82.8%,  +6.9 pp)", C.amber);
  statCard(s, 6.6, 1.8, 2.9, 1.45, "93.0%", "p / d / t  three-class", C.seafoam);
  s.addImage({ path: path.join(OUTF, "PRES/PRES1_performance_comparison.png"), x: 1.3, y: 3.35, w: 7.4, h: 1.55, sizing: { type: "contain", w: 7.4, h: 1.55 } });
  caption(s, "Accuracy across identification tasks (left) and angle-regression error (right): physics-informed vs. baseline", 1.3, 4.95, 7.4);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 10 — Interpretability: attention overlays
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("Not a Black Box: Where the Model Looks", "Results · Interpretability");
  s.addImage({ path: path.join(FIG, "attention_overlay.png"), x: 0.5, y: 1.45, w: 5.0, h: 3.3, sizing: { type: "contain", w: 5.0, h: 3.3 } });
  caption(s, "Cross-attention weights overlaid on input events", 0.5, 4.85, 5.0);
  bullets(s, [
    { h: "Attention maps are physically sensible", b: "Weight concentrates on track endpoints and the Bragg-peak region — exactly where the species-discriminating information lives." },
    { h: "A diagnostic, not just a picture", b: "When the model errs, the overlay shows what it attended to — enabling physics-level debugging of failure modes." },
    { h: "Builds trust for physics use", b: "Decisions can be audited against known energy-loss behavior rather than accepted on faith." },
  ], { x: 5.85, y: 1.55, w: 3.75, h: 3.4 });
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 11 — TRK series roadmap
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("Beyond “Which Particle?” — Full Kinematic Reconstruction", "Results · TRK Series");
  const rows = [
    ["TRK1 / TRK2", "How many tracks?", "4-class multiplicity classification (1–4 tracks)"],
    ["TRK3 / TRK4", "Which directions?", "Per-track polar-angle regression (4-slot masked output)"],
    ["TRK5 / TRK6", "What energy?", "Per-event kinetic-energy regression vs. 3 classical baselines"],
  ];
  rows.forEach((r, i) => {
    const y = 1.5 + i * 0.78;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y, w: 5.3, h: 0.65, rectRadius: 0.05, fill: { color: C.white }, line: { color: C.lightGray, width: 1 } });
    s.addText(r[0], { x: 0.65, y, w: 1.45, h: 0.65, fontSize: 12, fontFace: "Consolas", color: C.teal, bold: true, valign: "middle", margin: 0 });
    s.addText([
      { text: r[1] + "  ", options: { fontSize: 12, color: C.darkText, bold: true } },
      { text: r[2], options: { fontSize: 10, color: C.slateGray } },
    ], { x: 2.15, y, w: 3.6, h: 0.65, fontFace: "Calibri", valign: "middle", margin: 0 });
  });
  s.addText([
    { text: "Dataset: ", options: { fontSize: 11, color: C.darkText, bold: true } },
    { text: "1.2M simulated α-source events; kinetic energy sampled uniformly in [0.3, 4.0] MeV per event; in each pair, the first model is the plain ResNet and the second adds cross-attention fusion.", options: { fontSize: 11, color: C.slateGray } },
  ], { x: 0.5, y: 4.0, w: 5.3, h: 1.0, fontFace: "Calibri", valign: "top", margin: 0 });
  s.addImage({ path: path.join(OUTF, "TRK-energy-regression/event_examples/trk_energy_examples_overview.png"), x: 6.0, y: 1.45, w: 3.7, h: 3.3, sizing: { type: "contain", w: 3.7, h: 3.3 } });
  caption(s, "Example multi-track events from the TRK dataset", 6.0, 4.8, 3.7);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 12 — Multiplicity + angle regression
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("Counting Tracks Is Solved; Angles Show the Gain", "Results · Trajectory");
  statCard(s, 0.5, 1.55, 2.15, 1.35, ">99.99%", "track-count accuracy, both models (3 vs. 1 errors in 180k — at ceiling)", C.seafoam);
  statCard(s, 0.5, 3.1, 2.15, 1.35, "−16%", "angle MAE with cross-attention: 0.99° → 0.83°", C.teal);
  s.addText("Residual width shrinks for all track counts; the gain grows with energy.", {
    x: 0.55, y: 4.55, w: 2.1, h: 0.6, fontSize: 10, fontFace: "Calibri", color: C.slateGray, margin: 0,
  });
  s.addImage({ path: path.join(ANG, "residual_overlay_comparison.png"), x: 2.95, y: 1.4, w: 6.75, h: 3.45, sizing: { type: "contain", w: 6.75, h: 3.45 } });
  caption(s, "Angle residuals by track multiplicity: plain ResNet (TRK3-v2) vs. cross-attention (TRK4-v2), with Gaussian fits", 2.95, 4.92, 6.75);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 13 — Angular resolution vs RANSAC
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("Angular Resolution vs. the Published RANSAC Pipeline", "Results · Trajectory");
  s.addImage({ path: path.join(ANG, "angular_resolution_comparison.png"), x: 0.6, y: 1.4, w: 5.5, h: 3.5, sizing: { type: "contain", w: 5.5, h: 3.5 } });
  caption(s, "σ(θ) vs. particle range: CNN models vs. MATEROOT RANSAC reference", 0.6, 4.95, 5.5);
  bullets(s, [
    { h: "CNN resolution beats the fitted pipeline at every range point", b: "At ≈ 2 MeV (≈83 mm range): σ ≈ 0.77° (cross-attention) and 0.90° (plain ResNet) vs. 1.25° (RANSAC), 1-track events." },
    { h: "No per-dataset threshold tuning", b: "Classical fitters need careful inlier-distance tuning; the trained network has no event-selection knobs." },
  ], { x: 6.35, y: 1.5, w: 3.25, h: 2.5 });
  s.addText("⚠ Indicative comparison: CNN and RANSAC numbers come from different simulation campaigns; energy-to-range mapping approximate.", {
    x: 6.35, y: 4.05, w: 3.25, h: 0.9, fontSize: 9.5, fontFace: "Calibri", color: C.amber, italic: true, margin: 0,
  });
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 14 — Energy regression: 5-method comparison
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("Results II — Per-Event Energy: CNNs vs. Classical Methods", "Results · Energy");
  const tbl = [
    ["Cross-attention CNN (TRK6)", "0.019 MeV", C.teal, true],
    ["Plain ResNet CNN (TRK5)", "0.023 MeV", C.teal, false],
    ["RANSAC + SRIM (optimized)", "0.159 MeV", C.slateGray, false],
    ["Hough + SRIM (optimized)", "1.269 MeV", C.slateGray, false],
    ["Hierarchy Cluster + SRIM (optimized)", "1.419 MeV", C.slateGray, false],
  ];
  tbl.forEach((r, i) => {
    const y = 1.48 + i * 0.6;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y, w: 4.6, h: 0.52, rectRadius: 0.04, fill: { color: r[3] ? "E6F7F5" : C.white }, line: { color: r[3] ? C.seafoam : C.lightGray, width: 1 } });
    s.addText(r[0], { x: 0.65, y, w: 3.1, h: 0.52, fontSize: 11.5, fontFace: "Calibri", color: C.darkText, bold: r[3], valign: "middle", margin: 0 });
    s.addText(r[1], { x: 3.7, y, w: 1.3, h: 0.52, fontSize: 12, fontFace: "Consolas", color: r[2], bold: true, align: "right", valign: "middle", margin: 0 });
  });
  s.addText([
    { text: "Same test set, 180k events. ", options: { fontSize: 10.5, color: C.slateGray } },
    { text: "CNNs are ≈7× better than the best classical method ", options: { fontSize: 10.5, color: C.darkText, bold: true } },
    { text: "(all pairwise differences significant; relative RMSE ≈ 0.9% for the cross-attention model).", options: { fontSize: 10.5, color: C.slateGray } },
  ], { x: 0.5, y: 4.55, w: 4.6, h: 0.6, fontFace: "Calibri", valign: "top", margin: 0 });
  s.addImage({ path: path.join(E56, "F2_per_energy_bin_rmse.png"), x: 5.35, y: 1.45, w: 4.3, h: 3.25, sizing: { type: "contain", w: 4.3, h: 3.25 } });
  caption(s, "RMSE vs. true energy: classical methods diverge at high energy; CNNs stay flat (RMSE in MeV)", 5.35, 4.78, 4.3);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 15 — Energy deep dive: clipping & multiplicity
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("Why the CNNs Win: Clipped Tracks and Busy Events", "Results · Energy");
  bullets(s, [
    { h: "Range clipping breaks geometric methods", b: "Above ≈ 1.2 MeV an α can exit the active volume — 33% of test tracks are clipped. Track-length → SRIM inversion then underestimates energy systematically." },
    { h: "CNNs degrade gracefully with multiplicity", b: "Classical RMSE worsens from 1→4 tracks (overlap confuses fitting); CNN error actually improves, exploiting whole-image context." },
    { h: "Calibration is clean", b: "Cross-attention CNN: bias < 1 keV, median error ≈ 4 keV over [0.3, 4.0] MeV.", hc: C.teal },
  ], { x: 0.5, y: 1.45, w: 4.3, h: 3.6 });
  s.addImage({ path: path.join(E56, "F4_predicted_vs_truth_hexbin.png"), x: 4.95, y: 1.4, w: 4.75, h: 3.4, sizing: { type: "contain", w: 4.75, h: 3.4 } });
  caption(s, "Predicted vs. true energy per method — classical methods bend below the diagonal once tracks clip", 4.95, 4.85, 4.75);
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 16 — Comparison with Zhang et al. (complementary)
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("Complementary Work on Real Beam Data", "Context");
  s.addText("Zhang et al. (SUSTech / IMP), ML event classification & vertex reconstruction for ¹²C+¹²C with the MATE-TPC — submitted to Nucl. Sci. Tech.", {
    x: 0.5, y: 1.25, w: 9.0, h: 0.3, fontSize: 10.5, fontFace: "Calibri", color: C.slateGray, italic: true, margin: 0,
  });
  const colW = 3.7, colY = 2.05, rowH = 0.55;
  const rows = [
    ["Task", "Elastic vs. fusion sorting; vertex (x,y,z)", "Isotope PID + multiplicity, angle & energy"],
    ["Data", "Real ¹²C+¹²C beam data @ HIRFL + sim", "GEANT4 simulation campaigns"],
    ["Models", "Off-the-shelf ResNet / VGG, shallow CNN", "Modified ResNet-18 + physics cross-attention"],
    ["Baselines", "Implicit (traditional pipeline labels)", "Explicit: RANSAC, Hough, Hierarchy Cluster"],
    ["Key result", "≈97% (sim) → ≈90% (experiment)", "≈7× lower energy RMSE than best classical"],
  ];
  s.addText("Zhang et al.", { x: 2.1, y: colY - 0.32, w: colW, h: 0.3, fontSize: 12, fontFace: "Calibri", color: C.slateGray, bold: true, align: "center", margin: 0 });
  s.addText("This work", { x: 5.9, y: colY - 0.32, w: colW, h: 0.3, fontSize: 12, fontFace: "Calibri", color: C.teal, bold: true, align: "center", margin: 0 });
  rows.forEach((r, i) => {
    const y = colY + i * rowH;
    s.addText(r[0], { x: 0.5, y, w: 1.5, h: rowH - 0.08, fontSize: 11, fontFace: "Calibri", color: C.darkText, bold: true, valign: "middle", margin: 0 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 2.1, y, w: colW, h: rowH - 0.08, rectRadius: 0.04, fill: { color: C.white }, line: { color: C.lightGray, width: 1 } });
    s.addText(r[1], { x: 2.2, y, w: colW - 0.2, h: rowH - 0.08, fontSize: 10, fontFace: "Calibri", color: C.slateGray, valign: "middle", margin: 0 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.9, y, w: colW, h: rowH - 0.08, rectRadius: 0.04, fill: { color: "E6F7F5" }, line: { color: C.seafoam, width: 1 } });
    s.addText(r[2], { x: 6.0, y, w: colW - 0.2, h: rowH - 0.08, fontSize: 10, fontFace: "Calibri", color: C.darkText, valign: "middle", margin: 0 });
  });
  s.addText([
    { text: "Together: ", options: { fontSize: 10.5, color: C.darkText, bold: true } },
    { text: "their sim-to-real transfer (≈7 pp accuracy cost) shows real-data deployment is feasible — the natural next step for the physics-informed models presented here.", options: { fontSize: 10.5, color: C.slateGray } },
  ], { x: 0.5, y: 4.85, w: 9.1, h: 0.4, fontFace: "Calibri", valign: "top", margin: 0 });
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 17 — Summary
// ══════════════════════════════════════════════════════════════════════
{
  let s = lightSlide("Summary", "Wrap-up");
  statCard(s, 0.5, 1.45, 2.15, 1.55, "+6.9 pp", "on the hardest isotope pair (¹³C/¹⁴C) from physics-informed fusion", C.teal);
  statCard(s, 2.85, 1.45, 2.15, 1.55, "96.6%", "accuracy under realistic electronics noise (CrossAtt+HC)", C.seafoam);
  statCard(s, 5.2, 1.45, 2.15, 1.55, "0.83°", "angle MAE — 16% better than plain CNN, ahead of RANSAC", C.teal);
  statCard(s, 7.55, 1.45, 2.15, 1.55, "≈7×", "lower per-event energy RMSE than the best classical method", C.amber);
  bullets(s, [
    { h: "One pipeline, three reconstruction tasks", b: "The same two-channel image representation and physics-informed architecture handle identification, counting, angles, and energy." },
    { h: "Physics in the architecture pays off", b: "Moment-of-inertia features + cross-attention improve the hardest discrimination tasks and yield interpretable attention maps." },
    { h: "Rigorous, like-for-like baselines", b: "RANSAC, Hough, and Hierarchy Cluster were optimized on the same data before comparison — the CNN advantage is not a strawman." },
  ], { x: 0.5, y: 3.25, w: 9.0, h: 1.8 });
}

// ══════════════════════════════════════════════════════════════════════
// SLIDE 18 — Outlook & thanks (dark)
// ══════════════════════════════════════════════════════════════════════
{
  let s = darkSlide();
  s.addText("Outlook", {
    x: 0.6, y: 0.55, w: 8.8, h: 0.7, fontSize: 30, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  bullets(s, [
    { h: "Validate on real MATE beam data", b: "Sim-to-real transfer is demonstrably feasible on this detector — quantify what physics-informed features buy under real noise and gain variations.", hc: C.seafoam, bc: C.lightGray },
    { h: "Extend to production physics campaigns", b: "Deploy the pipeline for channel selection and kinematic reconstruction in upcoming measurements.", hc: C.seafoam, bc: C.lightGray },
    { h: "Toward online analysis", b: "A trained network is fast at inference — a candidate for near-real-time event filtering during beam time.", hc: C.seafoam, bc: C.lightGray },
  ], { x: 0.6, y: 1.5, w: 5.6, h: 2.9 });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.45, y: 1.45, w: 3.25, h: 2.65, rectRadius: 0.08, fill: { color: C.white }, line: { color: C.teal, width: 1.25 } });
  s.addImage({ path: path.join(FIG, "attention_overlay.png"), x: 6.55, y: 1.55, w: 3.05, h: 2.45, sizing: { type: "contain", w: 3.05, h: 2.45 } });
  s.addText("Thank you — questions welcome", {
    x: 0.6, y: 4.6, w: 8.8, h: 0.6, fontSize: 22, fontFace: "Georgia", color: C.seafoam, bold: true, italic: true, margin: 0,
  });
}

// ── Write ──
pres.writeFile({ fileName: OUT }).then(() => {
  console.log("Wrote " + OUT + " with " + slideNo + " slides.");
});
