"""Generate air purifier comparison PDF for Beijing 38m2 loft buyer."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm, mm
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

OUT = r"D:/obsidian/OrbitOS/50_Resources/Attachments/Air_Purifier_Comparison_Detailed_2026-04-15.pdf"

# --- Register a CJK-capable font so Chinese SKU names render ----------------
CJK_FONT = "Helvetica"  # fallback
for candidate in [
    r"C:\Windows\Fonts\msyh.ttc",
    r"C:\Windows\Fonts\msyh.ttf",
    r"C:\Windows\Fonts\simhei.ttf",
    r"C:\Windows\Fonts\simsun.ttc",
]:
    if os.path.exists(candidate):
        try:
            pdfmetrics.registerFont(TTFont("CJK", candidate))
            CJK_FONT = "CJK"
            break
        except Exception:
            continue

# --- Styles ------------------------------------------------------------------
styles = getSampleStyleSheet()

H1 = ParagraphStyle(
    "H1", parent=styles["Heading1"], fontName=CJK_FONT,
    fontSize=16, leading=20, spaceAfter=8, textColor=colors.HexColor("#1f3a5f"),
)
H2 = ParagraphStyle(
    "H2", parent=styles["Heading2"], fontName=CJK_FONT,
    fontSize=12, leading=15, spaceBefore=10, spaceAfter=5,
    textColor=colors.HexColor("#2c5282"),
)
BODY = ParagraphStyle(
    "Body", parent=styles["BodyText"], fontName=CJK_FONT,
    fontSize=9.5, leading=13, spaceAfter=5, alignment=TA_LEFT,
)
BODY_TIGHT = ParagraphStyle(
    "BodyTight", parent=BODY, fontSize=9, leading=12, spaceAfter=3,
)
CELL = ParagraphStyle(
    "Cell", parent=BODY, fontSize=8.2, leading=10.5, spaceAfter=0,
)
CELL_CENTER = ParagraphStyle(
    "CellC", parent=CELL, alignment=TA_CENTER,
)
CELL_HEADER = ParagraphStyle(
    "CellH", parent=CELL, fontSize=8.4, leading=10.5,
    textColor=colors.white, alignment=TA_CENTER,
)
SMALL = ParagraphStyle(
    "Small", parent=BODY, fontSize=8.2, leading=10.5, spaceAfter=3,
)

def P(txt, style=BODY):
    return Paragraph(txt, style)

# --- Footer ------------------------------------------------------------------
def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont(CJK_FONT, 8)
    canvas.setFillColor(colors.grey)
    canvas.drawString(
        1.8 * cm, 1.0 * cm,
        "Air Purifier Purchase Brief  .  Beijing 38m2 Loft  .  2026-04-15"
    )
    canvas.drawRightString(A4[0] - 1.8 * cm, 1.0 * cm, f"Page {doc.page}")
    canvas.restoreState()

# --- Build document ----------------------------------------------------------
doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=1.8 * cm, rightMargin=1.8 * cm,
    topMargin=1.6 * cm, bottomMargin=1.6 * cm,
    title="Air Purifier Comparison - Beijing Loft",
    author="OrbitOS",
)

story = []

# ================== PAGE 1 — What to look for ==============================
story.append(P("Air Purifier Purchase Brief: Beijing 38m2 Loft", H1))
story.append(P("Detailed explanatory comparison of three candidates - 2026-04-15", SMALL))
story.append(Spacer(1, 6))

story.append(P("Context", H2))
story.append(P(
    "You're buying for a <b>38 m2 loft</b> in Beijing with new furniture. "
    "Two pollutants matter: <b>PM2.5</b> (Beijing ambient air + household dust) and "
    "<b>formaldehyde (HCHO)</b>, which will off-gas from new furniture for 6-12 months. "
    "All three candidates below target both pollutants, but they differ sharply in "
    "absolute throughput, filter economics, and long-term cost.", BODY))

story.append(P("What is CADR?", H2))
story.append(P(
    "<b>CADR (Clean Air Delivery Rate)</b> is the volume of clean air, in m3/h, that a "
    "purifier delivers at its highest setting. There are two separate CADR numbers "
    "published per machine:", BODY))
story.append(P(
    "&nbsp;&nbsp;- <b>CADR-P</b> - particulate (PM2.5, dust, pollen)", BODY_TIGHT))
story.append(P(
    "&nbsp;&nbsp;- <b>CADR-F</b> - formaldehyde (gas-phase)", BODY_TIGHT))
story.append(P(
    "Under the Chinese standard <b>GB/T 18801-2022</b>, applicable area (m2) is "
    "estimated as <b>CADR x 0.07 to 0.12</b>. For a 38 m2 single floor, aim for "
    "<b>CADR-P &#8805; 380</b> and <b>CADR-F &#8805; 150-200</b>.", BODY))

story.append(P("What is CCM F4?", H2))
story.append(P(
    "<b>CCM (Cumulative Clean Mass)</b> measures how much <i>total</i> pollutant the "
    "filter can process before saturating. CADR tells you <i>speed</i>; CCM tells you "
    "<i>endurance</i>. The formaldehyde rating has four tiers, F1 through F4. <b>F4 "
    "(&gt; 1500 mg formaldehyde)</b> is the highest. For a new-furniture household "
    "this matters a lot: off-gassing lasts months, not days. A unit with high CADR-F "
    "but low CCM-F will saturate fast and may start <b>re-releasing</b> trapped "
    "formaldehyde back into the room. All three candidates here are rated F4, so "
    "endurance is not a differentiator - but absolute CADR-F and filter refill "
    "economics are.", BODY))

story.append(P("Loft caveat: one unit cannot cover both floors", H2))
story.append(P(
    "A loft is effectively <b>38 m2 x 2 levels</b>. A single &#8776;&#165;1000-class "
    "purifier cannot clean both floors to spec - covering 76 m2 would require "
    "<b>CADR-P &#8805; 760</b>, well beyond any of the candidates below. The correct "
    "framing: <b>size the unit for the bedroom floor</b> (where you spend sleeping "
    "hours and HCHO exposure compounds), and accept weaker spillover via the "
    "stairwell for the other floor. If whole-loft coverage is required, plan for a "
    "<b>second, smaller unit</b> on the other floor rather than oversizing one "
    "machine.", BODY))

story.append(PageBreak())

# ================== PAGE 2 — The three options ============================
story.append(P("The Three Candidates", H1))
story.append(P(
    "Compared below on the fields that actually matter for a purchase decision. "
    "Rows are grouped: identity, cleaning throughput, endurance, acoustics and "
    "coverage, and operational cost / support.", BODY))
story.append(Spacer(1, 4))

header = ["Metric", "(1) Xiaomi Pro H (used)", "(2) Xiaomi 4 Pro H (new)", "(3) Midea KJ400G-Z1Pro (new)"]

rows = [
    ["Model ID",
     "AC-M7-SC (2019, discontinued)",
     "AC-M18-SC (2023, current)",
     "KJ400G-Z1Pro (current)"],
    ["Platform",
     "Xianyu - Beijing local / nationwide",
     "Tmall - Xiaomi flagship",
     "Tmall - Midea flagship"],
    ["Upfront price",
     "Y588",
     "Y1004.7 (incl. 15% gov subsidy)",
     "Y518.99 (incl. Y380 flagship discount)"],
    ["CADR - Particulate",
     "600 m3/h",
     "600 m3/h",
     "380 m3/h"],
    ["CADR - Formaldehyde",
     "220 m3/h",
     "300 m3/h",
     "200 m3/h"],
    ["CCM - Particulate",
     "P4",
     "P4",
     "P4"],
    ["CCM - Formaldehyde",
     "F4",
     "F4",
     "F4"],
    ["Noise (max)",
     "<=65 dB(A)",
     "<=65 dB(A)",
     "<=65 dB(A), 12-speed"],
    ["Coverage (GB/T 18801)",
     "42-72 m2",
     "42-72 m2",
     "27-46 m2"],
    ["Power draw",
     "70 W",
     "70 W",
     "35 W"],
    ["Digital HCHO readout",
     "No",
     "Yes",
     "No"],
    ["App",
     "Mi Home (Mijia)",
     "Mi Home (Mijia)",
     "Meiju"],
    ["Warranty",
     "None (second-hand)",
     "1 yr Xiaomi",
     "1 yr Midea"],
    ["Annual filter cost",
     "Y80-150 (3rd-party RFP-W23)",
     "Y133 (Xiaomi official, w/ subsidy)",
     "Y28 adapter / Y100+ genuine"],
]

# Replace the Xiaomi / Midea row with original Chinese SKU names preserved.
# Platform row - preserve Chinese store names:
rows[1] = ["Platform",
           "\u95f2\u9c7c - \u5317\u4eac\u540c\u57ce / \u5168\u56fd\u5305\u90ae",
           "Tmall \u5c0f\u7c73\u5b98\u65b9\u65d7\u8230\u5e97",
           "Tmall \u7f8e\u7684\u5b98\u65b9\u65d7\u8230\u5e97"]
# Header - preserve Chinese SKU names inline
header = ["Metric",
          "(1) \u7c73\u5bb6 Pro H (used)",
          "(2) \u7c73\u5bb6 4 Pro H (new)",
          "(3) \u7f8e\u7684 KJ400G-Z1Pro (new)"]
# App row:
rows[11] = ["App", "\u7c73\u5bb6 (Mi Home)", "\u7c73\u5bb6 (Mi Home)", "\u7f8e\u5c45 (Meiju)"]

def to_cell(s, style=CELL):
    return Paragraph(str(s).replace("&", "&amp;"), style)

table_data = [[to_cell(h, CELL_HEADER) for h in header]]
for r in rows:
    table_data.append([to_cell(r[0], ParagraphStyle("lbl", parent=CELL, fontName=CJK_FONT))]
                      + [to_cell(c, CELL_CENTER) for c in r[1:]])

col_widths = [4.1 * cm, 4.3 * cm, 4.3 * cm, 4.7 * cm]
t = Table(table_data, colWidths=col_widths, repeatRows=1, hAlign="LEFT")

ts = TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1f3a5f")),
    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
    ("FONTNAME", (0, 0), (-1, -1), CJK_FONT),
    ("FONTSIZE", (0, 0), (-1, -1), 8.2),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("GRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#a0aec0")),
    ("LEFTPADDING", (0, 0), (-1, -1), 4),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4),
    ("TOPPADDING", (0, 0), (-1, -1), 3),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
])
# Alternating row shading
for i in range(1, len(table_data)):
    if i % 2 == 1:
        ts.add("BACKGROUND", (0, i), (-1, i), colors.HexColor("#f3f6fa"))
t.setStyle(ts)
story.append(t)

story.append(Spacer(1, 6))
story.append(P(
    "<b>How to read this table.</b> Rows 4-5 (CADR) tell you <i>speed</i> of cleaning. "
    "Rows 6-7 (CCM) tell you <i>endurance</i>. Rows 8-10 are comfort / sizing. "
    "Rows 11-14 are the soft factors: UX, support, and ongoing cost.", SMALL))

story.append(PageBreak())

# ================== PAGE 3 — 3-year TCO ===================================
story.append(P("Cost-Effectiveness: 3-Year Total Cost of Ownership", H1))
story.append(P(
    "Upfront price is only part of the picture. Filters are the real long-run cost. "
    "Below is a 3-year TCO model using <b>mid-range filter estimates</b>, followed "
    "by two efficiency ratios: CADR per Y1000 of TCO - effectively, how much "
    "cleaning throughput you buy per yuan spent over the lifetime.", BODY))
story.append(Spacer(1, 6))

tco_header = ["Metric",
              "(1) \u7c73\u5bb6 Pro H (used)",
              "(2) \u7c73\u5bb6 4 Pro H (new)",
              "(3) \u7f8e\u7684 Z1Pro"]

tco_rows = [
    ["Upfront", "Y588", "Y1005", "Y519"],
    ["3yr filter cost (mid)", "Y360 (Y120 x 3)", "Y399 (Y133 x 3)", "Y192 (Y64 x 3, genuine avg)"],
    ["3yr TCO", "Y948", "Y1404", "Y711"],
    ["CADR-P per Y1000 TCO", "633", "427", "535"],
    ["CADR-F per Y1000 TCO", "232", "214", "281"],
]

tco_data = [[to_cell(h, CELL_HEADER) for h in tco_header]]
for r in tco_rows:
    is_total = r[0] == "3yr TCO"
    lbl_style = ParagraphStyle(
        "lbl2", parent=CELL, fontName=CJK_FONT,
        fontSize=8.5 if is_total else 8.2,
    )
    val_style = ParagraphStyle(
        "val", parent=CELL_CENTER, fontName=CJK_FONT,
        fontSize=8.8 if is_total else 8.2,
    )
    lbl_txt = f"<b>{r[0]}</b>" if is_total else r[0]
    tco_data.append([to_cell(lbl_txt, lbl_style)]
                    + [to_cell(f"<b>{v}</b>" if is_total else v, val_style) for v in r[1:]])

tco_col = [5.2 * cm, 4.1 * cm, 4.1 * cm, 4.0 * cm]
tco_table = Table(tco_data, colWidths=tco_col, repeatRows=1, hAlign="LEFT")
tts = TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1f3a5f")),
    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
    ("FONTNAME", (0, 0), (-1, -1), CJK_FONT),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("GRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#a0aec0")),
    ("LEFTPADDING", (0, 0), (-1, -1), 5),
    ("RIGHTPADDING", (0, 0), (-1, -1), 5),
    ("TOPPADDING", (0, 0), (-1, -1), 4),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    # Highlight the 3yr TCO row (index 3)
    ("BACKGROUND", (0, 3), (-1, 3), colors.HexColor("#fff4d6")),
])
for i in range(1, len(tco_data)):
    if i % 2 == 1 and i != 3:
        tts.add("BACKGROUND", (0, i), (-1, i), colors.HexColor("#f3f6fa"))
tco_table.setStyle(tts)
story.append(tco_table)

story.append(Spacer(1, 10))
story.append(P("Interpretation", H2))
story.append(P(
    "<b>Midea Z1Pro wins on pure cost-per-unit-of-cleaning.</b> It has the lowest "
    "3-year TCO (Y711) and the highest CADR-F per Y1000 TCO (281). But its absolute "
    "CADR is lower (380 / 200), meaning it clears the same room more slowly and "
    "leaves less headroom if the room turns out busier or dustier than expected "
    "(more cooking, guests, or a period of heavy outdoor haze). Its GB/T coverage "
    "(27-46 m2) is also right at the edge for a 38 m2 floor.", BODY))
story.append(P(
    "<b>Xiaomi Pro H (used) and 4 Pro H (new) deliver higher absolute throughput.</b> "
    "Both hit CADR-P 600, which gives a comfortable 42-72 m2 coverage envelope. The "
    "used Pro H is <b>32% cheaper on 3-year TCO</b> than the new 4 Pro H, while "
    "delivering <b>73%</b> of its CADR-F (220 vs 300) - a favorable tradeoff if "
    "you're comfortable sourcing from Xianyu. The 4 Pro H earns its &#8776;Y450 "
    "premium only if you genuinely value the 1-year warranty, the on-unit digital "
    "formaldehyde readout, and the newer sensor generation.", BODY))
story.append(P(
    "<b>All three meet CCM F4</b>, so filter saturation is not a year-one concern "
    "for any of them. The decision collapses to: do you want <i>speed</i> and "
    "coverage headroom (Xiaomi), or <i>efficiency</i> and low running cost (Midea)?",
    BODY))

story.append(PageBreak())

# ================== PAGE 4 — Recommendation + Xianyu checklist ===============
story.append(P("Recommendation & Buying Checklist", H1))

story.append(P("Decision Rules", H2))
story.append(P(
    "&#9679; <b>If the decision is about <i>speed</i> of cleaning</b> - visible haze "
    "days, heavy smell from new furniture, or a busy household - pick "
    "<b>(1) \u7c73\u5bb6 Pro H (used)</b> or <b>(2) \u7c73\u5bb6 4 Pro H (new)</b>. "
    "Both give CADR-P 600 and a wide coverage envelope.", BODY))
story.append(P(
    "&#9679; <b>If the decision is about <i>long-term cost and efficiency</i></b> - "
    "you expect steady, moderate conditions and want the lowest running cost - pick "
    "<b>(3) \u7f8e\u7684 KJ400G-Z1Pro</b>. Lowest TCO, best CADR-F per yuan, lowest "
    "power draw.", BODY))
story.append(P(
    "&#9679; <b>Hybrid / whole-loft coverage</b> - buy <b>(3) \u7f8e\u7684 Z1Pro</b> "
    "for the bedroom floor and leave budget for a second small unit on the other "
    "floor. Two modest units beat one oversized unit for a split-level layout, "
    "because clean air cannot effectively flow up a stairwell against natural "
    "convection.", BODY))

story.append(Spacer(1, 6))
story.append(P("Xianyu (Second-Hand) Purchase Checklist", H2))
story.append(P(
    "If you proceed with option (1) - the used \u7c73\u5bb6 Pro H - apply every "
    "item on this checklist before paying. The model is discontinued, so you "
    "cannot recover through warranty if you miss a problem.", BODY))

checklist = [
    ("1.", "Request a <b>\u7c73\u5bb6 App screenshot</b> showing the current filter "
           "remaining percentage. Anything under 50% means you're paying for a unit "
           "that will need a Y120 filter within months."),
    ("2.", "Request a <b>15-second power-on video</b> showing the unit running, the "
           "fan ramping up, and the touch panel responding. This catches dead "
           "motors, cracked panels, and rattling bearings."),
    ("3.", "Use <b>\u95f2\u9c7c\u62c5\u4fdd\u4ea4\u6613</b> (Xianyu escrow) - "
           "never accept requests to transfer directly via WeChat or Alipay. "
           "Escrow gives you a 7-day inspection window."),
    ("4.", "On arrival, <b>bind the unit in the \u7c73\u5bb6 App</b> before "
           "confirming receipt. An un-bindable unit is either stolen, already "
           "bound to the seller (who refuses to unbind), or counterfeit."),
    ("5.", "Stock <b>one spare RFP-W23 filter</b> (~Y120) at time of purchase. "
           "The model is discontinued; third-party filter supply is currently "
           "fine but will thin out over the next 2-3 years."),
]
for num, txt in checklist:
    story.append(P(f"<b>{num}</b> &nbsp;{txt}", BODY))

story.append(Spacer(1, 8))
story.append(P("Bottom Line", H2))
story.append(P(
    "For a Beijing loft with new furniture, the <b>lowest-risk, lowest-cost path</b> "
    "is <b>(3) \u7f8e\u7684 KJ400G-Z1Pro</b> - new, warrantied, Y519 upfront, Y711 "
    "3-year TCO - paired with a plan for a second small unit on the non-bedroom "
    "floor once the new-furniture peak passes. The <b>best speed-per-yuan</b> is "
    "<b>(1) \u7c73\u5bb6 Pro H used</b>, but only if you pass every Xianyu "
    "checklist item above. The <b>new-and-premium</b> path is <b>(2) 4 Pro H</b>, "
    "justified only if the digital HCHO readout and warranty have concrete value "
    "to you.", BODY))

# --- Build -------------------------------------------------------------------
doc.build(story, onFirstPage=footer, onLaterPages=footer)

# --- Verify ------------------------------------------------------------------
size = os.path.getsize(OUT)
print(f"OK: wrote {OUT} ({size} bytes, {size/1024:.1f} KB)")

from pypdf import PdfReader
r = PdfReader(OUT)
print(f"Pages: {len(r.pages)}")
