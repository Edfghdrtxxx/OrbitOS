/**
 * Velocity Filters — Learning Group deck
 * Source: Exp. Techniques NP Ch. 11 §III.B
 * Style: deep blue #174994, white content, Learning Group footer
 * Patterned after 716_Learning Group-20260805/build_pf_pptx.js
 *
 * Adaptations from PPT-Design.md:
 * - Fig. 16 omitted (design reserve / cut list).
 * - Header font shrinks slightly on long sentence titles (single-line bar).
 * - Wide Fig. 12 / Fig. 15 sit above callout cards rather than a squeezed sidebar.
 * - Contributions replaces the prior "Thank you" close; no Thank-you slide.
 *
 * Math: XeLaTeX (Times New Roman + TeX Gyre Termes Math) → assets/eq/*.png
 *       via render_eq.py. All non-math text is Times New Roman.
 */
const pptxgen = require("pptxgenjs");
const path = require("path");

const ROOT = __dirname;
const ASSETS = path.join(ROOT, "assets");
const EQ_DIR = path.join(ASSETS, "eq");
const EQ_META = require("./assets/eq/meta.json");
const FONT = "Times New Roman";

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

function eqPath(name) {
  return path.join(EQ_DIR, name + ".png");
}

function eqSize(name, opts = {}) {
  const m = EQ_META[name];
  if (!m) throw new Error("missing equation image: " + name);
  let w = m.wIn;
  let h = m.hIn;
  if (opts.scale) {
    w *= opts.scale;
    h *= opts.scale;
  }
  if (opts.maxW && w > opts.maxW) {
    const s = opts.maxW / w;
    w *= s;
    h *= s;
  }
  if (opts.maxH && h > opts.maxH) {
    const s = opts.maxH / h;
    w *= s;
    h *= s;
  }
  return { w, h };
}

function addEq(slide, name, x, y, opts = {}) {
  const { w, h } = eqSize(name, opts);
  if (opts.align === "center" && opts.boxW != null) x = x + (opts.boxW - w) / 2;
  if (opts.valign === "middle" && opts.boxH != null) y = y + (opts.boxH - h) / 2;
  slide.addImage({ path: eqPath(name), x, y, w, h });
  return { w, h, x, y };
}

function makeShadow() {
  return { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.12 };
}

function addHeader(slide, title, eqName) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.57,
    fill: { color: C.blue }, line: { color: C.blue },
  });
  if (eqName) {
    addEq(slide, eqName, 0.45, 0.08, { maxW: 9.1, maxH: 0.42, valign: "middle", boxH: 0.42 });
  } else {
    const fontSize = title.length > 72 ? 15 : title.length > 62 ? 16 : 18;
    slide.addText(title, {
      x: 0.45, y: 0.08, w: 9.1, h: 0.42,
      fontSize, fontFace: FONT, bold: true,
      color: C.white, margin: 0, valign: "middle",
    });
  }
}

function addFooter(slide, pageNum) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.38, y: 5.32, w: 9.25, h: 0.015,
    fill: { color: C.blue }, line: { color: C.blue },
  });
  slide.addText("Learning Group", {
    x: 0.5, y: 5.35, w: 7.5, h: 0.22,
    fontSize: 10, fontFace: FONT, color: C.muted, margin: 0,
  });
  slide.addText(`${pageNum} / ${TOTAL_CONTENT}`, {
    x: 8.4, y: 5.35, w: 1.2, h: 0.22,
    fontSize: 10, fontFace: FONT, color: C.muted, align: "right", margin: 0,
  });
}

function addSectionOutline(slide, highlightIndex) {
  slide.background = { color: C.blue };
  slide.addText("Outline", {
    x: 0.45, y: 0.28, w: 4, h: 0.5,
    fontSize: 28, fontFace: FONT, bold: true, color: C.white, margin: 0,
  });

  const items = [
    "1. Why separate by velocity?",
    "2. Why is zero dispersion an advantage?",
    "3. How are velocity filters built?",
    "4. What discoveries rely on this sensitivity?",
    "5. Where do velocity filters fit?",
  ];

  items.forEach((item, i) => {
    const y = 1.05 + i * 0.78;
    const active = i === highlightIndex;
    if (active) {
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.4, y: y - 0.12, w: 8.8, h: 0.62,
        fill: { color: C.white }, rectRadius: 0.08,
        shadow: makeShadow(),
      });
      slide.addText(item, {
        x: 0.65, y: y - 0.02, w: 8.4, h: 0.42,
        fontSize: 18, fontFace: FONT, bold: true, color: C.blue, margin: 0, valign: "middle",
      });
    } else {
      slide.addText(item, {
        x: 0.65, y, w: 8.4, h: 0.4,
        fontSize: 18, fontFace: FONT, color: "A8C4E8", margin: 0,
      });
    }
  });
}

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Zhiheng Hu";
pres.title = "Velocity Filters";
pres.subject = "Learning Group — Exp. Techniques NP Ch. 11 §III.B";
pres.theme = { headFontFace: FONT, bodyFontFace: FONT };

// ─────────────────────────────────────────────
// SLIDE 1 — Title
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.6, h: 0.72,
    fill: { color: C.blueMid }, line: { color: C.blueMid },
  });
  s.addText("Learning  ·  Group", {
    x: 0.2, y: 0.15, w: 3.2, h: 0.42,
    fontSize: 16, fontFace: FONT, bold: true, color: C.white, margin: 0,
  });

  s.addImage({
    path: path.join(ASSETS, "imp_logo.jpeg"),
    x: 5.85, y: 0.02, w: 3.95, h: 0.7,
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 1.05, w: 10, h: 3.55,
    fill: { color: C.blue }, line: { color: C.blue },
  });

  s.addText("Velocity Filters\nfor heavy-ion fusion products", {
    x: 0.5, y: 1.55, w: 9, h: 1.6,
    fontSize: 36, fontFace: FONT, bold: true, color: C.white,
    align: "center", margin: 0,
  });

  s.addText("Zhiheng Hu", {
    x: 0.5, y: 3.35, w: 9, h: 0.4,
    fontSize: 18, fontFace: FONT, color: C.white, align: "center", margin: 0,
  });
  s.addText("16 Sep, 2026  ·  Exp. Techniques NP Ch. 11 §III.B", {
    x: 0.5, y: 3.8, w: 9, h: 0.35,
    fontSize: 13, fontFace: FONT, color: "A8C4E8", align: "center", margin: 0,
  });

  s.addNotes("Welcome to the learning group. Today we cover Section III.B of Chapter 11 on velocity filters. I will show you why a filter that ignores mass is the most sensitive way to find superheavy elements.");
}

// ─────────────────────────────────────────────
// SLIDE 2 — Outline (all)
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  addSectionOutline(s, -1);
  s.addNotes("We will start with the kinematic motivation, explain the advantage of zero dispersion, look at how SHIP is built, and finish with real discoveries.");
}

// ─────────────────────────────────────────────
// SLIDE 3 — Outline highlight §1
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  addSectionOutline(s, 0);
  s.addNotes("Let's begin with why velocity is the natural observable for fusion.");
}

// ─────────────────────────────────────────────
// CONTENT 1 — Velocity mismatch
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "Complete fusion creates a large velocity mismatch.");
  addFooter(s, 1);

  addEq(s, "lead_vcm", 0.45, 0.66, { maxW: 9.1, valign: "middle", boxH: 0.32 });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: 1.00, w: 9.1, h: 2.70,
    fill: { color: C.accentSoft }, rectRadius: 0.1,
    shadow: makeShadow(),
  });
  addEq(s, "eq_er", 0.52, 1.04, { boxH: 1.28, valign: "middle", maxH: 1.24, maxW: 5.45 });
  s.addText([
    { text: "Residue", options: { bold: true, italic: true, color: C.blueDark } },
    { text: " = heavy remnant of the compound nucleus after it evaporates a few light particles.", options: { italic: true, color: C.muted } },
    { text: "\n" },
    { text: "Er = (Ap/Ac) Ep", options: { italic: true, color: C.blueDark } },
    { text: " — the residue’s kinetic energy under full momentum transfer: motion at v_cm, slower than the beam.", options: { italic: true, color: C.muted } },
  ], {
    x: 5.78, y: 1.08, w: 3.55, h: 1.18,
    fontSize: 11, fontFace: FONT, margin: 0, valign: "middle",
  });
  addEq(s, "eq_vr", 0.45, 2.32, { boxW: 9.1, boxH: 1.08, align: "center", valign: "middle", maxH: 1.04, maxW: 8.9 });
  addEq(s, "eq_eq2", 0.45, 3.40, { boxW: 9.1, boxH: 0.22, align: "center", valign: "middle", maxH: 0.20 });

  const kine = [
    { h: "Fusion residues", eq: "kine_fusion_b" },
    { h: "Unreacted beam", eq: "kine_beam_b" },
    { h: "Other channels", b: "Transfer stays near beam or target velocity; fission-after-fusion spreads over a wide lab-velocity range." },
  ];
  kine.forEach((item, i) => {
    const x = 0.45 + i * 3.1;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: 3.78, w: 2.95, h: 1.32,
      fill: { color: C.offWhite }, rectRadius: 0.08,
      shadow: makeShadow(),
    });
    s.addText(item.h, {
      x: x + 0.15, y: 3.86, w: 2.65, h: 0.28,
      fontSize: 13, fontFace: FONT, bold: true, color: C.blue, margin: 0,
    });
    if (item.eq) {
      addEq(s, item.eq, x + 0.15, 4.16, { maxW: 2.65, maxH: 0.82 });
    } else {
      s.addText(item.b, {
        x: x + 0.15, y: 4.16, w: 2.65, h: 0.82,
        fontSize: 12, fontFace: FONT, color: C.ink, margin: 0,
      });
    }
  });

  s.addNotes("When a projectile fuses completely with a target, the compound nucleus absorbs all the momentum. It recoils at the center-of-mass velocity, which is significantly slower than the unreacted beam.");
}

// ─────────────────────────────────────────────
// CONTENT 2 — Forward cone
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "Evaporation residues are kinematically focused into a narrow forward cone.");
  addFooter(s, 2);

  s.addText("A heavy compound nucleus carries large forward momentum; a few evaporated nucleons barely deflect it.", {
    x: 0.45, y: 0.68, w: 9.1, h: 0.34,
    fontSize: 13, fontFace: FONT, color: C.ink, margin: 0, italic: true,
  });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: 1.06, w: 9.1, h: 1.96,
    fill: { color: C.accentSoft }, rectRadius: 0.1,
    shadow: makeShadow(),
  });
  addEq(s, "eq_sigma", 0.45, 1.10, { boxW: 9.1, boxH: 1.52, align: "center", valign: "middle", maxH: 1.48, maxW: 8.9 });
  addEq(s, "eq_sigma_note", 0.45, 2.64, { boxW: 9.1, boxH: 0.28, align: "center", valign: "middle", maxH: 0.24 });

  const focus = [
    { n: "chip_theta", t: "Narrow cone", d: "focus_theta_d" },
    { n: "chip_omega", t: "Small solid angle", d: "focus_omega_d" },
    { n: "chip_eps", t: "High transmission", d: "focus_eps_d" },
  ];
  focus.forEach((r, i) => {
    const x = 0.45 + i * 3.1;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: 3.14, w: 2.95, h: 1.92,
      fill: { color: C.offWhite }, rectRadius: 0.08,
      shadow: makeShadow(),
    });
    s.addShape(pres.shapes.OVAL, {
      x: x + 1.15, y: 3.26, w: 0.5, h: 0.5,
      fill: { color: C.blue },
    });
    addEq(s, r.n, x + 1.15, 3.26, { boxW: 0.5, boxH: 0.5, align: "center", valign: "middle", maxH: 0.32 });
    s.addText(r.t, {
      x: x + 0.15, y: 3.84, w: 2.65, h: 0.32,
      fontSize: 14, fontFace: FONT, bold: true, color: C.blue, align: "center", margin: 0,
    });
    addEq(s, r.d, x + 0.15, 4.20, { maxW: 2.65, maxH: 0.70, boxW: 2.65, align: "center" });
  });

  s.addNotes("Because the heavy compound nucleus carries large forward momentum, evaporating a few light particles barely deflects it. They are tightly focused forward.");
}

// ─────────────────────────────────────────────
// SLIDE — Outline highlight §2
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  addSectionOutline(s, 1);
  s.addNotes("So the residues have a distinct velocity. But why only measure velocity?");
}

// ─────────────────────────────────────────────
// CONTENT 3 — Charge-state problem
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "Mass separators lose most of the yield to charge-state splitting.");
  addFooter(s, 3);

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.85, w: 4.45, h: 4.15,
    fill: { color: C.offWhite },
    shadow: makeShadow(),
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.85, w: 4.45, h: 0.55,
    fill: { color: C.muted },
  });
  addEq(s, "hdr_aq", 0.4, 0.93, { boxW: 4.45, boxH: 0.4, align: "center", valign: "middle" });
  addEq(s, "body_mass_sep", 0.65, 1.6, { maxW: 4.0, maxH: 3.1 });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.15, y: 0.85, w: 4.45, h: 4.15,
    fill: { color: C.accentSoft },
    shadow: makeShadow(),
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.15, y: 0.85, w: 4.45, h: 0.55,
    fill: { color: C.blue },
  });
  s.addText("The charge-state penalty", {
    x: 5.15, y: 0.93, w: 4.45, h: 0.4,
    fontSize: 16, fontFace: FONT, bold: true, color: C.white, align: "center", margin: 0,
  });
  addEq(s, "body_charge", 5.4, 1.6, { maxW: 4.0, maxH: 3.1 });

  s.addNotes("A standard mass separator uses magnetic and electric fields to disperse by A/q. But heavy ions emerge in a spread of charge states centered near q ≈ 20 — about five states carry the intensity. A mass separator keeps only one or two, losing most of the yield.");
}

// ─────────────────────────────────────────────
// CONTENT 4 — Zero dispersion
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "Pure velocity filters transmit all charge states and isotopes simultaneously.");
  addFooter(s, 4);

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: 0.68, w: 9.1, h: 2.12,
    fill: { color: C.accentSoft }, rectRadius: 0.1,
    shadow: makeShadow(),
  });
  addEq(s, "eq_fe", 0.45, 0.72, { boxW: 9.1, boxH: 1.42, align: "center", valign: "middle", maxH: 1.40, maxW: 8.9 });
  addEq(s, "eq_veb", 0.45, 2.14, { boxW: 9.1, boxH: 0.32, align: "center", valign: "middle", maxH: 0.30 });
  addEq(s, "eq_qcancel", 0.45, 2.46, { boxW: 9.1, boxH: 0.26, align: "center", valign: "middle", maxH: 0.24, maxW: 8.7 });

  const powers = [
    { h: "All charge states", eq: "power_allq_b" },
    { h: "All fusion isotopes", eq: "power_iso_b" },
    { h: "Beam rejection", eq: "power_beam_b" },
  ];
  powers.forEach((p, i) => {
    const x = 0.45 + i * 3.1;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: 2.88, w: 2.95, h: 1.22,
      fill: { color: C.offWhite }, rectRadius: 0.08,
      shadow: makeShadow(),
    });
    s.addText(p.h, {
      x: x + 0.15, y: 2.96, w: 2.65, h: 0.28,
      fontSize: 13, fontFace: FONT, bold: true, color: C.blue, margin: 0,
    });
    addEq(s, p.eq, x + 0.15, 3.26, { maxW: 2.65, maxH: 0.72 });
  });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: 4.18, w: 9.1, h: 0.88,
    fill: { color: C.blue }, rectRadius: 0.08,
  });
  s.addText("Trade-off: the filter does not measure mass in flight. The isotope is identified later — by decay spectroscopy at the focal plane.", {
    x: 0.65, y: 4.30, w: 8.7, h: 0.64,
    fontSize: 13, fontFace: FONT, color: C.white, margin: 0, valign: "middle",
  });

  s.addNotes("In a pure velocity filter, the deflection condition is independent of charge. All charge states of the chosen velocity pass through, giving near-100% charge-state transmission and suppressing the unreacted beam by more than 10¹⁶. E here is the electric field, not kinetic energy.");
}

// ─────────────────────────────────────────────
// SLIDE — Outline highlight §3
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  addSectionOutline(s, 2);
  s.addNotes("How do we actually build a device to handle this intense unreacted beam?");
}

// ─────────────────────────────────────────────
// CONTENT 5 — SHIP
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "SHIP uses separated fields to protect its condenser plates.");
  addFooter(s, 5);

  s.addImage({
    path: path.join(ASSETS, "fig12_ship.jpeg"),
    x: 0.35, y: 0.68, w: 9.3, h: 2.50,
    sizing: { type: "contain", w: 9.3, h: 2.50 },
  });
  s.addText("Fig. 12  ·  SHIP (GSI) — plate condenser first, then dipoles; projectile dump before the focal plane", {
    x: 0.35, y: 3.28, w: 9.3, h: 0.28,
    fontSize: 10, fontFace: FONT, color: C.lightMuted, align: "center", margin: 0,
  });

  const ship = [
    { h: "Condenser first", eq: "ship_cond_b" },
    { h: "Not a Wien filter", eq: "ship_wien_b" },
    { h: "High current", eq: "ship_current_b" },
  ];
  ship.forEach((p, i) => {
    const x = 0.4 + i * 3.15;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: 3.60, w: 3.0, h: 1.45,
      fill: { color: C.offWhite }, rectRadius: 0.08,
      shadow: makeShadow(),
    });
    s.addText(p.h, {
      x: x + 0.12, y: 3.70, w: 2.76, h: 0.32,
      fontSize: 13, fontFace: FONT, bold: true, color: C.blue, margin: 0,
    });
    if (p.eq) {
      addEq(s, p.eq, x + 0.12, 4.05, { maxW: 2.76, maxH: 0.85 });
    } else {
      s.addText(p.b, {
        x: x + 0.12, y: 4.05, w: 2.76, h: 0.85,
        fontSize: 11, fontFace: FONT, color: C.ink, margin: 0,
      });
    }
  });

  s.addNotes("This is SHIP at GSI. Notice it is not a crossed-field Wien filter. The electric condenser comes first. It deflects the primary beam away immediately, so the beam never hits the plates — no scattered background, no heat damage.");
}

// ─────────────────────────────────────────────
// CONTENT 6 — Daresbury
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "The Daresbury separator uses crossed fields and energy refocusing.");
  addFooter(s, 6);

  s.addImage({
    path: path.join(ASSETS, "fig15_daresbury.jpeg"),
    x: 0.35, y: 0.68, w: 9.3, h: 2.50,
    sizing: { type: "contain", w: 9.3, h: 2.50 },
  });
  s.addText("Fig. 15  ·  Daresbury recoil separator — two crossed-field filters + DQQQ spectrometer", {
    x: 0.35, y: 3.28, w: 9.3, h: 0.28,
    fontSize: 10, fontFace: FONT, color: C.lightMuted, align: "center", margin: 0,
  });

  const dar = [
    { hEq: "dar_exb_h", eq: "dar_exb_b" },
    { h: "DQQQ spectrometer", b: "A magnetic spectrometer after the filters refocuses the energy spread at the focal plane." },
    { hEq: "dar_gamma_h", eq: "dar_gamma_b" },
  ];
  dar.forEach((p, i) => {
    const x = 0.4 + i * 3.15;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: 3.60, w: 3.0, h: 1.45,
      fill: { color: C.offWhite }, rectRadius: 0.08,
      shadow: makeShadow(),
    });
    if (p.hEq) {
      addEq(s, p.hEq, x + 0.12, 3.70, { maxH: 0.32, valign: "middle", boxH: 0.32 });
    } else {
      s.addText(p.h, {
        x: x + 0.12, y: 3.70, w: 2.76, h: 0.32,
        fontSize: 13, fontFace: FONT, bold: true, color: C.blue, margin: 0,
      });
    }
    if (p.eq) {
      addEq(s, p.eq, x + 0.12, 4.05, { maxW: 2.76, maxH: 0.85 });
    } else {
      s.addText(p.b, {
        x: x + 0.12, y: 4.05, w: 2.76, h: 0.85,
        fontSize: 11, fontFace: FONT, color: C.ink, margin: 0,
      });
    }
  });

  s.addNotes("In contrast, Daresbury uses crossed E and B fields, followed by a magnetic spectrometer to refocus the energy spread.");
}

// ─────────────────────────────────────────────
// SLIDE — Outline highlight §4
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  addSectionOutline(s, 3);
  s.addNotes("What can we discover with such extreme beam suppression?");
}

// ─────────────────────────────────────────────
// CONTENT 7 — 151Lu
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "", "hdr_lu");
  addFooter(s, 7);

  s.addImage({
    path: path.join(ASSETS, "fig13_151lu.jpeg"),
    x: 0.28, y: 0.72, w: 5.15, h: 4.2,
    sizing: { type: "contain", w: 5.15, h: 4.2 },
  });
  addEq(s, "cap_lu", 0.28, 4.92, { boxW: 5.15, boxH: 0.25, align: "center", valign: "middle", maxH: 0.24 });

  const lu = [
    { hEq: "lu_flight_h", b: "SHIP delivers short-lived residues to a Si surface-barrier detector." },
    { hEq: "lu_proton_h", eq: "lu_proton_b" },
    { h: "Escape bump", eq: "lu_alpha_b" },
    { hEq: "lu_half_h", b: "Implant time-tag gives the half-life event by event." },
  ];
  lu.forEach((p, i) => {
    const y = 0.72 + i * 1.05;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.55, y, w: 4.1, h: 0.95,
      fill: { color: C.offWhite }, rectRadius: 0.06,
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.55, y, w: 0.08, h: 0.95,
      fill: { color: C.blue },
    });
    if (p.hEq) {
      addEq(s, p.hEq, 5.8, y + 0.08, { maxH: 0.28, valign: "middle", boxH: 0.28 });
    } else {
      s.addText(p.h, {
        x: 5.8, y: y + 0.08, w: 3.7, h: 0.28,
        fontSize: 13, fontFace: FONT, bold: true, color: C.blue, margin: 0,
      });
    }
    if (p.eq) {
      addEq(s, p.eq, 5.8, y + 0.4, { maxW: 3.7, maxH: 0.45 });
    } else {
      s.addText(p.b, {
        x: 5.8, y: y + 0.4, w: 3.7, h: 0.45,
        fontSize: 12, fontFace: FONT, color: C.ink, margin: 0,
      });
    }
  });

  s.addNotes("Because SHIP separates in under 2 microseconds, we can implant short-lived residues into silicon. Here is the first ground-state proton decay from Lutetium-151, cleanly isolated from the alpha background.");
}

// ─────────────────────────────────────────────
// CONTENT 8 — Element 108
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "Genetic decay-chain tagging isolated Element 108 from just three atoms.");
  addFooter(s, 8);

  s.addImage({
    path: path.join(ASSETS, "fig14_element108.jpeg"),
    x: 0.22, y: 0.7, w: 6.0, h: 4.22,
    sizing: { type: "contain", w: 6.0, h: 4.22 },
  });
  addEq(s, "cap_hs", 0.22, 4.92, { boxW: 6.0, boxH: 0.25, align: "center", valign: "middle", maxH: 0.24 });

  const hs = [
    { h: "1  Ungated", eq: "hs_ungated_b" },
    { h: "2  Implant-correlated", b: "Decay must match a prior implant in time and position." },
    { h: "3  Heavy-mass window", b: "TOF + implant energy select heavy-mass recoils; 2 of 3 atoms survive." },
    { h: "4  Daughter generations", eq: "hs_daughter_b" },
  ];
  hs.forEach((p, i) => {
    const y = 0.7 + i * 1.05;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.4, y, w: 3.25, h: 0.95,
      fill: { color: C.offWhite }, rectRadius: 0.06,
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 6.4, y, w: 0.08, h: 0.95,
      fill: { color: i === 3 ? C.coral : C.blue },
    });
    s.addText(p.h, {
      x: 6.62, y: y + 0.08, w: 2.88, h: 0.28,
      fontSize: 13, fontFace: FONT, bold: true, color: C.blue, margin: 0,
    });
    if (p.eq) {
      addEq(s, p.eq, 6.62, y + 0.4, { maxW: 2.88, maxH: 0.48 });
    } else {
      s.addText(p.b, {
        x: 6.62, y: y + 0.4, w: 2.88, h: 0.48,
        fontSize: 10, fontFace: FONT, color: C.ink, margin: 0,
      });
    }
  });

  s.addNotes("Out of 6 × 10¹⁷ projectiles over ten days, SHIP produced just three atoms of element 108. Because SHIP doesn't measure mass, we prove the isotope by watching it alpha-decay step-by-step into known daughters.");
}

// ─────────────────────────────────────────────
// CONTENT 9 — Recoil-γ 49Mn
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "Recoil-gamma tagging reveals nuclear structure at the proton drip line.");
  addFooter(s, 9);

  s.addImage({
    path: path.join(ASSETS, "fig17_49mn.jpeg"),
    x: 0.3, y: 0.72, w: 5.0, h: 4.2,
    sizing: { type: "contain", w: 5.0, h: 4.2 },
  });
  addEq(s, "cap_mn", 0.3, 4.92, { boxW: 5.0, boxH: 0.25, align: "center", valign: "middle", maxH: 0.24 });

  const mn = [
    { h: "Tag at the focal plane", eq: "mn_tag_b" },
    { h: "Background suppressed", b: "Coulomb excitation, fission, and target impurities drop out of the spectrum." },
    { h: "Drip-line structure", eq: "mn_drip_b" },
    { h: "Why Daresbury", eq: "mn_why_b" },
  ];
  mn.forEach((p, i) => {
    const y = 0.72 + i * 1.05;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.5, y, w: 4.15, h: 0.95,
      fill: { color: C.offWhite }, rectRadius: 0.06,
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.5, y, w: 0.08, h: 0.95,
      fill: { color: C.blue },
    });
    s.addText(p.h, {
      x: 5.75, y: y + 0.08, w: 3.75, h: 0.28,
      fontSize: 13, fontFace: FONT, bold: true, color: C.blue, margin: 0,
    });
    if (p.eq) {
      addEq(s, p.eq, 5.75, y + 0.4, { maxW: 3.75, maxH: 0.45 });
    } else {
      s.addText(p.b, {
        x: 5.75, y: y + 0.4, w: 3.75, h: 0.45,
        fontSize: 12, fontFace: FONT, color: C.ink, margin: 0,
      });
    }
  });

  s.addNotes("At Daresbury, they surround the target with gamma detectors. By only looking at gammas that are in coincidence with a recoil arriving at the focal plane, the Coulomb-excitation and fission background disappears.");
}

// ─────────────────────────────────────────────
// SLIDE — Outline highlight §5
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  addSectionOutline(s, 4);
  s.addNotes("Finally, let's put velocity filters in context with other devices.");
}

// ─────────────────────────────────────────────
// CONTENT 10 — Landscape fence
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "Velocity filters fill a unique niche for low-energy fusion.");
  addFooter(s, 10);

  const rows = [
    { d: "Velocity filter", w: "Coulomb-barrier fusion; highest transmission", n: "No in-flight mass ID — decay spectroscopy afterward" },
    { d: "RMS / FMA", wEq: "row_rms_w", nEq: "row_rms_n" },
    { d: "RF separator", w: "Pulsed beams; TOF phase", nEq: "row_rf_n" },
    { d: "Gas-filled", w: "Very asymmetric reactions; actinide targets; high efficiency", n: "Scattering; no velocity resolution" },
    { d: "Fragment separator", wEq: "row_frag_w", n: "Wrong energy regime; degraders destroy slow beams" },
  ];

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.75, w: 9.2, h: 0.42,
    fill: { color: C.blue },
  });
  s.addText("Device", {
    x: 0.55, y: 0.8, w: 2.1, h: 0.32,
    fontSize: 14, fontFace: FONT, bold: true, color: C.white, margin: 0,
  });
  s.addText("Use when", {
    x: 2.7, y: 0.8, w: 3.3, h: 0.32,
    fontSize: 14, fontFace: FONT, bold: true, color: C.white, margin: 0,
  });
  s.addText("Not when", {
    x: 6.15, y: 0.8, w: 3.3, h: 0.32,
    fontSize: 14, fontFace: FONT, bold: true, color: C.white, margin: 0,
  });

  rows.forEach((r, i) => {
    const y = 1.22 + i * 0.72;
    const fill = i === 0 ? C.accentSoft : C.offWhite;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y, w: 9.2, h: 0.66,
      fill: { color: fill },
    });
    if (i === 0) {
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y, w: 0.08, h: 0.66,
        fill: { color: C.blue },
      });
    }
    s.addText(r.d, {
      x: 0.55, y: y + 0.14, w: 2.1, h: 0.38,
      fontSize: 13, fontFace: FONT, bold: true, color: C.blue, margin: 0, valign: "middle",
    });
    if (r.wEq) {
      addEq(s, r.wEq, 2.7, y + 0.14, { maxH: 0.38, valign: "middle", boxH: 0.38 });
    } else {
      s.addText(r.w, {
        x: 2.7, y: y + 0.14, w: 3.3, h: 0.38,
        fontSize: 12, fontFace: FONT, color: C.ink, margin: 0, valign: "middle",
      });
    }
    if (r.nEq) {
      addEq(s, r.nEq, 6.15, y + 0.14, { maxH: 0.38, valign: "middle", boxH: 0.38 });
    } else {
      s.addText(r.n, {
        x: 6.15, y: y + 0.14, w: 3.3, h: 0.38,
        fontSize: 12, fontFace: FONT, color: C.ink, margin: 0, valign: "middle",
      });
    }
  });

  s.addNotes("Velocity filters are the best choice for Coulomb-barrier fusion where you need maximum transmission. If you need mass resolution in flight, use an RMS. If you have relativistic energies, use a fragment separator.");
}

// ─────────────────────────────────────────────
// CLOSING — Contributions (no Thank you)
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.blue };
  s.addText("Contributions", {
    x: 0.5, y: 0.45, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONT, bold: true, color: C.white, margin: 0,
  });

  const takes = [
    { n: "1", t: "Velocity-based separation yields zero charge dispersion.", d: "All charge states of the fusion velocity are transmitted together." },
    { n: "2", t: "Separated-field design keeps the beam off the condenser plates.", d: "Condenser-first SHIP dumps the primary beam before it can hit the plates." },
    { n: "3", t: "Enables picobarn sensitivity through decay tagging.", dEq: "contrib_decay" },
  ];
  takes.forEach((t, i) => {
    const y = 1.2 + i * 1.15;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y, w: 9.0, h: 1.0,
      fill: { color: C.white }, rectRadius: 0.08,
    });
    s.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.22, w: 0.55, h: 0.55,
      fill: { color: C.blue },
    });
    s.addText(t.n, {
      x: 0.7, y: y + 0.28, w: 0.55, h: 0.45,
      fontSize: 18, fontFace: FONT, bold: true, color: C.white, align: "center", margin: 0,
    });
    s.addText(t.t, {
      x: 1.5, y: y + 0.12, w: 7.7, h: 0.38,
      fontSize: 16, fontFace: FONT, bold: true, color: C.blue, margin: 0,
    });
    if (t.dEq) {
      addEq(s, t.dEq, 1.5, y + 0.52, { maxW: 7.7, maxH: 0.35, valign: "middle", boxH: 0.35 });
    } else {
      s.addText(t.d, {
        x: 1.5, y: y + 0.52, w: 7.7, h: 0.35,
        fontSize: 13, fontFace: FONT, color: C.ink, margin: 0,
      });
    }
  });

  s.addText("Learning Group  ·  Zhiheng Hu  ·  16 Sep 2026", {
    x: 0.5, y: 4.85, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT, color: "A8C4E8", align: "center", margin: 0,
  });

  s.addNotes("To summarize: velocity filters ignore mass to achieve 100% charge-state transmission; SHIP's separated fields survive particle-microampere beams; and this extreme sensitivity makes single-atom discoveries possible.");
}

const outPath = path.join(ROOT, "Velocity Filters.pptx");
pres.writeFile({ fileName: outPath })
  .then(() => console.log("Wrote:", outPath))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
