/**
 * Projectile Fragmentation of Heavy Ions — Learning Group deck
 * Source: Tanihata, Exp. Techniques NP Ch. 10 (secondary-beam / PF)
 * Style: deep blue #174994, white content, Learning Group footer
 */
const pptxgen = require("pptxgenjs");
const path = require("path");

const ROOT = __dirname;
const ASSETS = path.join(ROOT, "assets");

const C = {
  blue: "174994",
  blueDark: "0F2F5C",
  blueMid: "164994",
  white: "FFFFFF",
  offWhite: "F7F9FC",
  ink: "1A2332",
  muted: "5F6B73",
  lightMuted: "8A96A0",
  red: "C41E3A",
  coral: "E85D4C",
  card: "FFFFFF",
  cardBorder: "D8E0E8",
  accentSoft: "E8F0FA",
  gold: "C9A227",
};

const TOTAL_CONTENT = 10;

function makeShadow() {
  return { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.12 };
}

function addHeader(slide, title) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.57,
    fill: { color: C.blue }, line: { color: C.blue },
  });
  slide.addText(title, {
    x: 0.45, y: 0.08, w: 9.1, h: 0.42,
    fontSize: 18, fontFace: "Calibri", bold: true,
    color: C.white, margin: 0, valign: "middle",
  });
}

function addFooter(slide, pageNum) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.38, y: 5.32, w: 9.25, h: 0.015,
    fill: { color: C.blue }, line: { color: C.blue },
  });
  slide.addText("Learning Group", {
    x: 0.5, y: 5.35, w: 7.5, h: 0.22,
    fontSize: 10, fontFace: "Calibri", color: C.muted, margin: 0,
  });
  slide.addText(`${pageNum} / ${TOTAL_CONTENT}`, {
    x: 8.4, y: 5.35, w: 1.2, h: 0.22,
    fontSize: 10, fontFace: "Calibri", color: C.muted, align: "right", margin: 0,
  });
}

function addSectionOutline(slide, highlightIndex) {
  // Full blue background outline
  slide.background = { color: C.blue };
  slide.addText("Outline", {
    x: 0.45, y: 0.35, w: 4, h: 0.55,
    fontSize: 28, fontFace: "Calibri", bold: true, color: C.white, margin: 0,
  });

  const items = [
    "1. Where does Projectile Fragmentation come from?",
    "2. What is Projectile Fragmentation?",
    "3. Why we need to use Projectile Fragmentation?",
    "4. The practical use of Projectile Fragmentation",
  ];

  items.forEach((item, i) => {
    const y = 1.35 + i * 0.85;
    const active = i === highlightIndex;
    if (active) {
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.4, y: y - 0.12, w: 8.8, h: 0.62,
        fill: { color: C.white }, rectRadius: 0.08,
        shadow: makeShadow(),
      });
      slide.addText(item, {
        x: 0.65, y: y - 0.02, w: 8.4, h: 0.42,
        fontSize: 18, fontFace: "Calibri", bold: true, color: C.blue, margin: 0, valign: "middle",
      });
    } else {
      slide.addText(item, {
        x: 0.65, y: y, w: 8.4, h: 0.4,
        fontSize: 18, fontFace: "Calibri", color: "A8C4E8", margin: 0,
      });
    }
  });
}

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Zhiheng Hu";
pres.title = "Projectile Fragmentation of Heavy Ions";
pres.subject = "Learning Group — Tanihata Ch. 10";

// ─────────────────────────────────────────────
// SLIDE 1 — Title
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };

  // Top-left Learning Group badge
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.6, h: 0.72,
    fill: { color: C.blueMid }, line: { color: C.blueMid },
  });
  s.addText("Learning  ·  Group", {
    x: 0.2, y: 0.15, w: 3.2, h: 0.42,
    fontSize: 16, fontFace: "Calibri", bold: true, color: C.white, margin: 0,
  });

  // IMP logo top-right
  s.addImage({
    path: path.join(ASSETS, "imp_logo.jpeg"),
    x: 5.85, y: 0.02, w: 3.95, h: 0.7,
  });

  // Central blue band
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 1.05, w: 10, h: 3.55,
    fill: { color: C.blue }, line: { color: C.blue },
  });

  s.addText("Projectile Fragmentation\nof Heavy Ions", {
    x: 0.5, y: 1.55, w: 9, h: 1.6,
    fontSize: 36, fontFace: "Calibri", bold: true, color: C.white,
    align: "center", margin: 0,
  });

  s.addText("Zhiheng Hu", {
    x: 0.5, y: 3.35, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Calibri", color: C.white, align: "center", margin: 0,
  });
  s.addText("11 Aug, 2026  ·  Tanihata, Exp. Techniques NP Ch. 10", {
    x: 0.5, y: 3.8, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Calibri", color: "A8C4E8", align: "center", margin: 0,
  });
}

// ─────────────────────────────────────────────
// SLIDE 2 — Outline (all)
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  addSectionOutline(s, -1);
}

// ─────────────────────────────────────────────
// SLIDE 3 — Outline highlight §1
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  addSectionOutline(s, 0);
}

// ─────────────────────────────────────────────
// CONTENT 1 — Where it comes from (historical + physical)
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "1. Where does Projectile Fragmentation come from?");
  addFooter(s, 1);

  // Lead line (Tanihata §II)
  s.addText([
    { text: "Any reaction can produce radioactive nuclei — but secondary beams for reaction studies only became practical after ", options: {} },
    { text: "projectile fragmentation", options: { bold: true, color: C.red } },
    { text: " was discovered in high-energy heavy-ion collisions.", options: {} },
  ], {
    x: 0.45, y: 0.72, w: 9.1, h: 0.48,
    fontSize: 13, fontFace: "Calibri", color: C.ink, margin: 0,
  });

  // ── Left card: Historically ──
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: 1.3, w: 4.45, h: 3.7,
    fill: { color: C.offWhite }, rectRadius: 0.1,
    shadow: makeShadow(),
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.3, w: 0.1, h: 3.7,
    fill: { color: C.blue },
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 1.5, w: 2.0, h: 0.38,
    fill: { color: C.blue }, rectRadius: 0.06,
  });
  s.addText("Historically", {
    x: 0.7, y: 1.52, w: 2.0, h: 0.34,
    fontSize: 13, fontFace: "Calibri", bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("As a technique for radioactive beams", {
    x: 0.7, y: 2.0, w: 3.9, h: 0.32,
    fontSize: 12, fontFace: "Calibri", italic: true, color: C.muted, margin: 0,
  });

  const hist = [
    { h: "Stability-line lock-in", b: "For decades, beams and targets were confined to stable nuclei — a fundamental limit on what nuclear physics could access." },
    { h: "Discovery in HE heavy ions", b: "Projectile fragmentation was found in high-energy heavy-ion collisions: fragments poured into a usable forward beam." },
    { h: "First practical RIB path", b: "The first systematic reaction studies with radioactive beams used secondary beams from PF — not reacceleration." },
  ];
  hist.forEach((item, i) => {
    const y = 2.4 + i * 0.82;
    s.addText(item.h, {
      x: 0.7, y, w: 3.9, h: 0.28,
      fontSize: 13, fontFace: "Calibri", bold: true, color: C.blue, margin: 0,
    });
    s.addText(item.b, {
      x: 0.7, y: y + 0.28, w: 3.9, h: 0.5,
      fontSize: 11, fontFace: "Calibri", color: C.ink, margin: 0,
    });
  });

  // ── Right card: Physically ──
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.15, y: 1.3, w: 4.45, h: 3.7,
    fill: { color: C.offWhite }, rectRadius: 0.1,
    shadow: makeShadow(),
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.15, y: 1.3, w: 0.1, h: 3.7,
    fill: { color: C.coral },
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.45, y: 1.5, w: 1.85, h: 0.38,
    fill: { color: C.coral }, rectRadius: 0.06,
  });
  s.addText("Physically", {
    x: 5.45, y: 1.52, w: 1.85, h: 0.34,
    fontSize: 13, fontFace: "Calibri", bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("As a nuclear reaction mechanism", {
    x: 5.45, y: 2.0, w: 3.9, h: 0.32,
    fontSize: 12, fontFace: "Calibri", italic: true, color: C.muted, margin: 0,
  });

  const phys = [
    { h: "High-energy regime", b: "Beam energy ≫ nucleon binding energy — the projectile can shed nucleons without stopping in the target." },
    { h: "Forward fragmentation", b: "Nuclear fragments are emitted copiously into a narrow forward cone — these are projectile fragments." },
    { h: "Velocity inheritance", b: "Fragments leave with nearly the projectile velocity (v ≈ v_beam) — the kinematic key to in-flight separation." },
  ];
  phys.forEach((item, i) => {
    const y = 2.4 + i * 0.82;
    s.addText(item.h, {
      x: 5.45, y, w: 3.9, h: 0.28,
      fontSize: 13, fontFace: "Calibri", bold: true, color: C.coral, margin: 0,
    });
    s.addText(item.b, {
      x: 5.45, y: y + 0.28, w: 3.9, h: 0.5,
      fontSize: 11, fontFace: "Calibri", color: C.ink, margin: 0,
    });
  });
}

// ─────────────────────────────────────────────
// CONTENT 2 — Secondary-beam chain
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "1. The secondary-beam production chain");
  addFooter(s, 2);

  // Process steps as cards
  const steps = [
    { n: "01", t: "Primary HI beam", d: "Stable heavy ion at high energy (>> binding / nucleon)" },
    { n: "02", t: "Production target", d: "Thin Be / C — fragments created in forward cone" },
    { n: "03", t: "Fragment cloud", d: "Cocktail of (A,Z) with v ≈ v_beam" },
    { n: "04", t: "Separator", d: "Bρ - ΔE - Bρ selects one species" },
    { n: "05", t: "Physics target", d: "Secondary beam used for reactions" },
  ];

  steps.forEach((st, i) => {
    const x = 0.28 + i * 1.95;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: 1.0, w: 1.72, h: 3.6,
      fill: { color: C.offWhite }, rectRadius: 0.08,
      shadow: makeShadow(),
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.32, y: 1.25, w: 1.08, h: 0.55,
      fill: { color: C.blue }, rectRadius: 0.06,
    });
    s.addText(st.n, {
      x: x + 0.32, y: 1.3, w: 1.08, h: 0.45,
      fontSize: 18, fontFace: "Calibri", bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
    s.addText(st.t, {
      x: x + 0.08, y: 2.05, w: 1.56, h: 0.85,
      fontSize: 13, fontFace: "Calibri", bold: true, color: C.blue,
      align: "center", margin: 0,
    });
    s.addText(st.d, {
      x: x + 0.1, y: 3.05, w: 1.52, h: 1.3,
      fontSize: 11, fontFace: "Calibri", color: C.muted,
      align: "center", margin: 0,
    });
    // Chevrons sit in the gap between cards (not inside titles)
    if (i < steps.length - 1) {
      s.addShape(pres.shapes.RIGHT_ARROW, {
        x: x + 1.72, y: 2.55, w: 0.2, h: 0.28,
        fill: { color: C.blue }, line: { color: C.blue },
      });
    }
  });
}

// ─────────────────────────────────────────────
// SLIDE — Outline highlight §2
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  addSectionOutline(s, 1);
}

// ─────────────────────────────────────────────
// CONTENT 3 — What is PF: three traits
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "2. What is Projectile Fragmentation?");
  addFooter(s, 3);

  s.addText("At beam energy >> nucleon binding energy, nuclear fragments are emitted into a narrow forward cone — projectile fragments.", {
    x: 0.45, y: 0.75, w: 9.1, h: 0.55,
    fontSize: 13, fontFace: "Calibri", color: C.ink, margin: 0, italic: true,
  });

  const traits = [
    {
      num: "1",
      title: "Many exotic species",
      body: "Large cross sections for nuclei far from stability — including extreme n-rich and p-rich nuclides first discovered via PF.",
    },
    {
      num: "2",
      title: "Nearly beam velocity",
      body: "All fragments leave with v ≈ v_beam. Narrow forward cone → high collection efficiency and simple magnetic separation.",
    },
    {
      num: "3",
      title: "Energy-independent σ",
      body: "Fragmentation cross section is almost independent of incident energy (once above the relevant scale).",
    },
  ];

  traits.forEach((tr, i) => {
    const y = 1.45 + i * 1.15;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.45, y, w: 9.1, h: 1.0,
      fill: { color: C.offWhite }, rectRadius: 0.08,
      shadow: makeShadow(),
    });
    s.addShape(pres.shapes.OVAL, {
      x: 0.65, y: y + 0.22, w: 0.55, h: 0.55,
      fill: { color: C.blue },
    });
    s.addText(tr.num, {
      x: 0.65, y: y + 0.28, w: 0.55, h: 0.45,
      fontSize: 18, fontFace: "Calibri", bold: true, color: C.white,
      align: "center", margin: 0,
    });
    s.addText(tr.title, {
      x: 1.45, y: y + 0.12, w: 7.8, h: 0.35,
      fontSize: 16, fontFace: "Calibri", bold: true, color: C.blue, margin: 0,
    });
    s.addText(tr.body, {
      x: 1.45, y: y + 0.48, w: 7.8, h: 0.42,
      fontSize: 12, fontFace: "Calibri", color: C.ink, margin: 0,
    });
  });
}

// ─────────────────────────────────────────────
// CONTENT 4 — Momentum distribution
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "2. Momentum distribution of fragments");
  addFooter(s, 4);

  // Left: figure
  s.addImage({
    path: path.join(ASSETS, "fig1_momentum.jpeg"),
    x: 0.35, y: 0.85, w: 4.5, h: 4.0,
    sizing: { type: "contain", w: 4.5, h: 4.0 },
  });
  s.addText("Fig. 1  ·  ¹⁰Be from ¹²C @ 2.1A GeV (projectile rest frame)", {
    x: 0.35, y: 4.9, w: 4.5, h: 0.28,
    fontSize: 9, fontFace: "Calibri", color: C.lightMuted, margin: 0, align: "center",
  });

  // Right: key points
  const pts = [
    { h: "Gaussian shape", b: "Fits all isotopes — independent of beam, energy, or target." },
    { h: "σ|| ≈ σ_t", b: "Parallel and transverse widths nearly equal (isotropic in the moving frame)." },
    { h: "<P||> shift", b: "Central momentum -10 to -130 MeV/c (fragment slightly slower than projectile)." },
    { h: "Same velocity", b: "Total fragment momentum >> <P||> => v_F ≈ v_beam — the key for separators." },
  ];
  pts.forEach((p, i) => {
    const y = 0.85 + i * 0.95;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.1, y, w: 4.5, h: 0.85,
      fill: { color: C.offWhite }, rectRadius: 0.06,
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.1, y, w: 0.08, h: 0.85,
      fill: { color: C.blue },
    });
    s.addText(p.h, {
      x: 5.4, y: y + 0.1, w: 4.0, h: 0.28,
      fontSize: 13, fontFace: "Calibri", bold: true, color: C.blue, margin: 0,
    });
    s.addText(p.b, {
      x: 5.4, y: y + 0.4, w: 4.0, h: 0.38,
      fontSize: 11, fontFace: "Calibri", color: C.ink, margin: 0,
    });
  });
}

// ─────────────────────────────────────────────
// CONTENT 5 — Goldhaber formula
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "2. Goldhaber width — how broad is the cloud?");
  addFooter(s, 5);

  s.addText("σ(P||) is essentially independent of target mass and beam energy; it depends on projectile and fragment mass numbers.", {
    x: 0.45, y: 0.75, w: 9.1, h: 0.4,
    fontSize: 13, fontFace: "Calibri", color: C.ink, margin: 0,
  });

  // Formula card
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.3, w: 8.4, h: 1.35,
    fill: { color: C.accentSoft }, rectRadius: 0.1,
    shadow: makeShadow(),
  });
  s.addText("σ(P||) = σ0 * sqrt[ A_F (A_p - A_F) / (A_p - 1) ]", {
    x: 0.8, y: 1.5, w: 8.4, h: 0.55,
    fontSize: 22, fontFace: "Cambria", bold: true, color: C.blueDark,
    align: "center", margin: 0,
  });
  s.addText("σ₀ ≈ 90 MeV/c   ·   maximum when A_F = A_p / 2", {
    x: 0.8, y: 2.15, w: 8.4, h: 0.3,
    fontSize: 14, fontFace: "Calibri", color: C.muted, align: "center", margin: 0,
  });

  // Two columns
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: 2.95, w: 4.4, h: 2.0,
    fill: { color: C.offWhite }, rectRadius: 0.08,
  });
  s.addText("High energy (>= 200 MeV/u)", {
    x: 0.65, y: 3.1, w: 4.0, h: 0.35,
    fontSize: 14, fontFace: "Calibri", bold: true, color: C.blue, margin: 0,
  });
  s.addText("σ(P_t) ≈ σ(P||)\nIsotropic production in the projectile frame moving at β|| = -<P||>/E.", {
    x: 0.65, y: 3.55, w: 4.0, h: 1.2,
    fontSize: 12, fontFace: "Calibri", color: C.ink, margin: 0,
  });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.15, y: 2.95, w: 4.4, h: 2.0,
    fill: { color: C.offWhite }, rectRadius: 0.08,
  });
  s.addText("Low energy (< 200 MeV/u)", {
    x: 5.35, y: 3.1, w: 4.0, h: 0.35,
    fontSize: 14, fontFace: "Calibri", bold: true, color: C.coral, margin: 0,
  });
  s.addText("Extra transverse term with σ₁ ≈ 200 MeV/c (Eq. 2). σ|| stays ~constant down to ~20 MeV/u.", {
    x: 5.35, y: 3.55, w: 4.0, h: 1.2,
    fontSize: 12, fontFace: "Calibri", color: C.ink, margin: 0,
  });
}

// ─────────────────────────────────────────────
// CONTENT 6 — Relative width vs energy
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "2. Why high energy helps collection");
  addFooter(s, 6);

  s.addImage({
    path: path.join(ASSETS, "fig2_relative_width.jpeg"),
    x: 0.3, y: 0.75, w: 5.0, h: 4.2,
    sizing: { type: "contain", w: 5.0, h: 4.2 },
  });

  s.addText("Fig. 2  ·  Relative momentum width vs beam energy", {
    x: 0.3, y: 4.95, w: 5.0, h: 0.22,
    fontSize: 9, fontFace: "Calibri", color: C.lightMuted, align: "center", margin: 0,
  });

  const rights = [
    { t: "Relative width shrinks", d: "σ is nearly fixed in MeV/c; total P grows with energy → σ/P drops." },
    { t: "Narrower lab angles", d: "θ ≈ p_t / p_|| → high energy packs more yield into the separator’s ΔΩ." },
    { t: "Higher collection ε", d: "I_sec = R_prod x ε_coll x ... Fixed machine acceptance captures a larger fraction." },
    { t: "Design tip", d: "Choose A_p close to A_F (and Z_p, N_p >= Z_F, N_F) to minimize broadening." },
  ];
  rights.forEach((r, i) => {
    const y = 0.8 + i * 1.0;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.5, y, w: 4.15, h: 0.9,
      fill: { color: C.offWhite }, rectRadius: 0.06,
    });
    s.addText(r.t, {
      x: 5.7, y: y + 0.1, w: 3.8, h: 0.28,
      fontSize: 13, fontFace: "Calibri", bold: true, color: C.blue, margin: 0,
    });
    s.addText(r.d, {
      x: 5.7, y: y + 0.4, w: 3.8, h: 0.42,
      fontSize: 11, fontFace: "Calibri", color: C.ink, margin: 0,
    });
  });
}

// ─────────────────────────────────────────────
// SLIDE — Outline highlight §3
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  addSectionOutline(s, 2);
}

// ─────────────────────────────────────────────
// CONTENT 7 — Why we need PF
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "3. Why we need Projectile Fragmentation");
  addFooter(s, 7);

  // Two big comparison cards — RECTANGLE so header bars align (no rounded-corner gap)
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.9, w: 4.4, h: 3.9,
    fill: { color: C.offWhite },
    shadow: makeShadow(),
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.9, w: 4.4, h: 0.55,
    fill: { color: C.muted },
  });
  s.addText("Classical constraint", {
    x: 0.4, y: 0.98, w: 4.4, h: 0.4,
    fontSize: 16, fontFace: "Calibri", bold: true, color: C.white, align: "center", margin: 0,
  });
  s.addText([
    { text: "Stable beam + stable target", options: { bold: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "Only the narrow valley of stability is well measured:", options: { breakLine: true } },
    { text: "• radii & moments", options: { breakLine: true } },
    { text: "• single-particle structure", options: { breakLine: true } },
    { text: "• giant resonances", options: { breakLine: true } },
    { text: "• scattering & reaction mechanisms", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "Vast regions of bound nuclei remain out of reach.", options: { italic: true } },
  ], {
    x: 0.65, y: 1.65, w: 3.9, h: 2.9,
    fontSize: 13, fontFace: "Calibri", color: C.ink, margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 0.9, w: 4.4, h: 3.9,
    fill: { color: C.accentSoft },
    shadow: makeShadow(),
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 0.9, w: 4.4, h: 0.55,
    fill: { color: C.blue },
  });
  s.addText("With radioactive beams", {
    x: 5.2, y: 0.98, w: 4.4, h: 0.4,
    fontSize: 16, fontFace: "Calibri", bold: true, color: C.white, align: "center", margin: 0,
  });
  s.addText([
    { text: "β-unstable nucleus in entrance channel", options: { bold: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "• Structure far from stability", options: { breakLine: true } },
    { text: "  (neutron halo, thick skin)", options: { breakLine: true } },
    { text: "• Exclusive reactions & isospin", options: { breakLine: true } },
    { text: "• Hot CNO & Big Bang paths", options: { breakLine: true } },
    { text: "• New isotopes, masses, moments", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "PF makes energetic RIB practical for reaction studies — not only decay spectroscopy.", options: { italic: true } },
  ], {
    x: 5.45, y: 1.65, w: 3.9, h: 2.9,
    fontSize: 13, fontFace: "Calibri", color: C.ink, margin: 0,
  });
}

// ─────────────────────────────────────────────
// CONTENT 8 — Same v → Bρ separation
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "3. Same velocity → magnetic separation works");
  addFooter(s, 8);

  s.addText("Because fragment velocities are nearly equal, magnetic rigidity maps cleanly onto A/q.", {
    x: 0.45, y: 0.75, w: 9.1, h: 0.35,
    fontSize: 13, fontFace: "Calibri", color: C.ink, margin: 0,
  });

  // Formula row
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: 1.25, w: 9.1, h: 1.5,
    fill: { color: C.accentSoft }, rectRadius: 0.1,
  });
  s.addText("Bρ ~ p/q    with    p ≈ A · m_u · v", {
    x: 0.45, y: 1.4, w: 9.1, h: 0.45,
    fontSize: 20, fontFace: "Cambria", bold: true, color: C.blueDark, align: "center", margin: 0,
  });
  s.addText("same β  =>  Bρ ~ A/q     (fully stripped: Bρ ~ A/Z)", {
    x: 0.45, y: 1.95, w: 9.1, h: 0.4,
    fontSize: 16, fontFace: "Calibri", color: C.blue, align: "center", margin: 0,
  });

  // Example cards
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: 3.05, w: 4.4, h: 1.9,
    fill: { color: C.offWhite }, rectRadius: 0.08,
  });
  s.addText("Example: ¹¹Be vs ¹¹C", {
    x: 0.65, y: 3.2, w: 4.0, h: 0.35,
    fontSize: 14, fontFace: "Calibri", bold: true, color: C.blue, margin: 0,
  });
  s.addText("Fully stripped, same β:\nA/Z(Be) = 11/4 ,  A/Z(C) = 11/6\n\n(Bρ)_Be / (Bρ)_C = 3/2", {
    x: 0.65, y: 3.6, w: 4.0, h: 1.2,
    fontSize: 13, fontFace: "Calibri", color: C.ink, margin: 0,
  });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.15, y: 3.05, w: 4.4, h: 1.9,
    fill: { color: C.offWhite }, rectRadius: 0.08,
  });
  s.addText("If velocities differed wildly...", {
    x: 5.35, y: 3.2, w: 4.0, h: 0.35,
    fontSize: 14, fontFace: "Calibri", bold: true, color: C.coral, margin: 0,
  });
  s.addText("p = mv would scramble. Different (A,Z) would no longer land at distinct Bρ values — magnetic selection would fail.", {
    x: 5.35, y: 3.65, w: 4.0, h: 1.1,
    fontSize: 13, fontFace: "Calibri", color: C.ink, margin: 0,
  });
}

// ─────────────────────────────────────────────
// SLIDE — Outline highlight §4
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  addSectionOutline(s, 3);
}

// ─────────────────────────────────────────────
// CONTENT 9 — Separation principles + target
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "4. Practical use — separation principles & target");
  addFooter(s, 9);

  s.addText("Three design requirements for efficient secondary-beam delivery", {
    x: 0.45, y: 0.72, w: 9.1, h: 0.3,
    fontSize: 12, fontFace: "Calibri", italic: true, color: C.muted, margin: 0,
  });

  const reqs = [
    { n: "1", t: "Narrow production", d: "Target & reaction chosen so σ_p and σ_θ stay small" },
    { n: "2", t: "Large acceptance", d: "Separator Δp and ΔΩ as large as practical" },
    { n: "3", t: "Achromatic delivery", d: "Momentum spread != position smear at physics focus" },
  ];
  reqs.forEach((r, i) => {
    const x = 0.4 + i * 3.15;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: 1.1, w: 3.0, h: 1.55,
      fill: { color: C.offWhite }, rectRadius: 0.08,
      shadow: makeShadow(),
    });
    s.addShape(pres.shapes.OVAL, {
      x: x + 1.15, y: 1.25, w: 0.45, h: 0.45,
      fill: { color: C.blue },
    });
    s.addText(r.n, {
      x: x + 1.15, y: 1.3, w: 0.45, h: 0.38,
      fontSize: 16, fontFace: "Calibri", bold: true, color: C.white, align: "center", margin: 0,
    });
    s.addText(r.t, {
      x: x + 0.15, y: 1.8, w: 2.7, h: 0.3,
      fontSize: 13, fontFace: "Calibri", bold: true, color: C.blue, align: "center", margin: 0,
    });
    s.addText(r.d, {
      x: x + 0.15, y: 2.15, w: 2.7, h: 0.4,
      fontSize: 11, fontFace: "Calibri", color: C.ink, align: "center", margin: 0,
    });
  });

  // Target takeaways
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: 2.9, w: 9.2, h: 2.1,
    fill: { color: C.accentSoft }, rectRadius: 0.08,
  });
  s.addText("Target material: prefer low-Z (e.g. Be)", {
    x: 0.65, y: 3.05, w: 8.7, h: 0.35,
    fontSize: 15, fontFace: "Calibri", bold: true, color: C.blue, margin: 0,
  });
  s.addText([
    { text: "• Lower dE/dx → thicker target for same energy loss", options: { breakLine: true } },
    { text: "• Yield ~ A^(-1/3) for fixed g/cm² (σ_frag ~ A^(2/3), nuclei/area ~ 1/A) → light targets win", options: { breakLine: true } },
    { text: "• Less multiple scattering → smaller emittance growth; primary attenuates faster", options: { breakLine: true } },
    { text: "• Optimum thickness: balance Goldhaber width vs energy-loss Δp (>= ~5 g/cm², ΔE term rivals reaction width)", options: {} },
  ], {
    x: 0.65, y: 3.5, w: 8.7, h: 1.35,
    fontSize: 12, fontFace: "Calibri", color: C.ink, margin: 0,
  });
}

// ─────────────────────────────────────────────
// CONTENT 10 — Separation methods + close
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "4. Separation methods & take-home messages");
  addFooter(s, 10);

  // Left column — methods
  s.addText("How species are selected", {
    x: 0.4, y: 0.75, w: 4.6, h: 0.35,
    fontSize: 14, fontFace: "Calibri", bold: true, color: C.blue, margin: 0,
  });

  const methods = [
    { t: "Bρ selection", d: "Same β => R = p/q ~ A/Z. First stage separates by A/Z at dispersive focus F2." },
    { t: "Energy-loss achromat", d: "Degrader at F2: dE/dx ~ Z² → second Bρ resolves A and Z (not only A/Z)." },
    { t: "Wedge shape", d: "d(x) ~ (1 + x/D₁)^(2*gamma) preserves achromatism for all A, Z, E." },
  ];
  methods.forEach((m, i) => {
    const y = 1.2 + i * 1.05;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.4, y, w: 4.6, h: 0.95,
      fill: { color: C.offWhite }, rectRadius: 0.06,
    });
    s.addText(m.t, {
      x: 0.6, y: y + 0.1, w: 4.2, h: 0.28,
      fontSize: 13, fontFace: "Calibri", bold: true, color: C.blue, margin: 0,
    });
    s.addText(m.d, {
      x: 0.6, y: y + 0.42, w: 4.2, h: 0.45,
      fontSize: 11, fontFace: "Calibri", color: C.ink, margin: 0,
    });
  });

  // Right — takeaways
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.25, y: 0.75, w: 4.4, h: 4.2,
    fill: { color: C.blue }, rectRadius: 0.1,
  });
  s.addText("Take-home", {
    x: 5.5, y: 0.95, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Calibri", bold: true, color: C.white, margin: 0,
  });
  s.addText([
    { text: "1. PF → forward, same-v fragments with usable σ far from stability.", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "2. Cloud width (Goldhaber) sets how much yield fits the separator.", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "3. Same β makes Bρ ~ A/Z; degrader adds Z-sensitive purity.", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "4. Low-Z thick targets + high energy maximize delivered intensity.", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "5. Facilities: LBL beam line → LISE, RIPS, A1900/ARIS, FRS...", options: {} },
  ], {
    x: 5.5, y: 1.5, w: 3.9, h: 3.2,
    fontSize: 12, fontFace: "Calibri", color: C.white, margin: 0,
  });
}

// ─────────────────────────────────────────────
// CLOSING slide
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.blue };
  s.addText("Thank you", {
    x: 0.5, y: 1.8, w: 9, h: 0.8,
    fontSize: 40, fontFace: "Calibri", bold: true, color: C.white, align: "center", margin: 0,
  });
  s.addText("Questions & discussion", {
    x: 0.5, y: 2.7, w: 9, h: 0.45,
    fontSize: 18, fontFace: "Calibri", color: "A8C4E8", align: "center", margin: 0,
  });
  s.addText("Source: I. Tanihata — Production and Use of Radioactive Beams\n(Experimental Techniques in Nuclear Physics, Ch. 10)", {
    x: 1, y: 3.6, w: 8, h: 0.7,
    fontSize: 12, fontFace: "Calibri", color: "7BA3D4", align: "center", margin: 0,
  });
  s.addText("Learning Group  ·  Zhiheng Hu  ·  11 Aug 2026", {
    x: 0.5, y: 4.7, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Calibri", color: "A8C4E8", align: "center", margin: 0,
  });
}

const outPath = path.join(ROOT, "Projectile Fragmentation of Heavy Ions.pptx");
pres.writeFile({ fileName: outPath })
  .then(() => console.log("Wrote:", outPath))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
