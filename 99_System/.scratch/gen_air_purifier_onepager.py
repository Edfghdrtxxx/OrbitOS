"""Generate single-page quick-reference PDF for air purifier comparison."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont

OUT = r"D:/obsidian/OrbitOS/50_Resources/Attachments/Air_Purifier_Comparison_OnePager_2026-04-15.pdf"

# Register a CJK font so Chinese SKU names render correctly.
pdfmetrics.registerFont(UnicodeCIDFont("STSong-Light"))
CJK = "STSong-Light"
SANS = "Helvetica"

# ---------- Styles ----------
styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    "TitleMain", parent=styles["Title"],
    fontName=f"{SANS}-Bold", fontSize=14, leading=16,
    alignment=TA_CENTER, spaceAfter=2,
)
subtitle_style = ParagraphStyle(
    "Subtitle", parent=styles["Normal"],
    fontName=SANS, fontSize=8.5, leading=10,
    alignment=TA_CENTER, textColor=colors.HexColor("#555555"),
    spaceAfter=6,
)
# Cell styles
def cell(text, bold=False, size=8.5, align="left", color=None, cjk=False):
    font = CJK if cjk else (f"{SANS}-Bold" if bold else SANS)
    color_attr = f' color="{color}"' if color else ""
    a = {"left": TA_LEFT, "center": TA_CENTER}[align]
    ps = ParagraphStyle(
        f"c{size}{bold}{align}", parent=styles["Normal"],
        fontName=font, fontSize=size, leading=size + 1.5, alignment=a,
    )
    if color:
        ps.textColor = colors.HexColor(color)
    return Paragraph(text, ps)

group_header_style = ParagraphStyle(
    "Group", parent=styles["Normal"],
    fontName=f"{SANS}-Bold", fontSize=9, leading=11,
    alignment=TA_LEFT, textColor=colors.HexColor("#1a3e72"),
)
callout_title_style = ParagraphStyle(
    "CalloutTitle", parent=styles["Normal"],
    fontName=f"{SANS}-Bold", fontSize=9, leading=11, alignment=TA_CENTER,
    textColor=colors.HexColor("#1a3e72"), spaceAfter=2,
)
callout_body_style = ParagraphStyle(
    "CalloutBody", parent=styles["Normal"],
    fontName=SANS, fontSize=8, leading=10, alignment=TA_CENTER,
)
callout_sku_style = ParagraphStyle(
    "CalloutSku", parent=styles["Normal"],
    fontName=CJK, fontSize=8.5, leading=10.5, alignment=TA_CENTER,
    textColor=colors.HexColor("#0b6e3f"),
)
footer_style = ParagraphStyle(
    "Footer", parent=styles["Normal"],
    fontName=SANS, fontSize=6.8, leading=8, alignment=TA_CENTER,
    textColor=colors.HexColor("#777777"),
)

# ---------- Colors ----------
GROUP_BG = colors.HexColor("#d9e3f1")
ALT_BG = colors.HexColor("#f4f6fa")
HEADER_BG = colors.HexColor("#1a3e72")
GRID = colors.HexColor("#b5bcc7")
TICK_GREEN = "#178a3a"
CROSS_RED = "#b42318"
HIGHLIGHT = colors.HexColor("#fff4c2")

# ---------- Build table data ----------
# Row layout: [label, sku1, sku2, sku3]
# We'll emit group-separator rows that span all 4 columns.

def grp(label):
    return [cell(label, bold=True, size=8.8, align="left", color="#1a3e72")]

def tick(ok):
    sym = "&#10003;" if ok else "&#10007;"
    col = TICK_GREEN if ok else CROSS_RED
    return cell(f'<font color="{col}"><b>{sym}</b></font>', size=10, align="center")

rows = []

# Header row
rows.append([
    cell("Attribute", bold=True, size=9, align="left", color="#ffffff"),
    cell("&#9312; Mi Pro H (used)", bold=True, size=8.8, align="center", color="#ffffff"),
    cell("&#9313; Mi 4 Pro H (new)", bold=True, size=8.8, align="center", color="#ffffff"),
    cell("&#9314; Midea KJ400G-Z1Pro", bold=True, size=8.8, align="center", color="#ffffff"),
])

# IDENTITY group
rows.append(grp("IDENTITY"))
rows.append([cell("SKU (Chinese)"),
             cell("米家 Pro H (二手)", cjk=True, align="center"),
             cell("米家 4 Pro H (新)", cjk=True, align="center"),
             cell("美的 KJ400G-Z1Pro (新)", cjk=True, align="center")])
rows.append([cell("Model code"),
             cell("AC-M7-SC (2019, EOL)", align="center"),
             cell("AC-M18-SC (2023)", align="center"),
             cell("KJ400G-Z1Pro", align="center")])
rows.append([cell("Platform"),
             cell("Xianyu BJ / nationwide", align="center"),
             cell("Tmall Xiaomi official", align="center"),
             cell("Tmall Midea official", align="center")])
rows.append([cell("Warranty"),
             cell(f'<font color="{CROSS_RED}">None</font>', align="center"),
             cell(f'<font color="{TICK_GREEN}">1 yr</font>', align="center"),
             cell(f'<font color="{TICK_GREEN}">1 yr</font>', align="center")])

# PRICE group
rows.append(grp("PRICE"))
rows.append([cell("Upfront"),
             cell("&yen;588", align="center"),
             cell("&yen;1004.7", align="center"),
             cell("&yen;518.99", align="center")])
rows.append([cell("Annual filter cost"),
             cell("&yen;80&ndash;150", align="center"),
             cell("&yen;133", align="center"),
             cell("&yen;28&ndash;100", align="center")])
rows.append([cell("3-yr TCO", bold=True),
             cell("<b>&yen;948</b>", align="center"),
             cell("<b>&yen;1404</b>", align="center"),
             cell("<b>&yen;711</b>", align="center")])

# EFFECT group
rows.append(grp("EFFECT (GB/T 18801)"))
rows.append([cell("CADR-P (particulate)"),
             cell("600 m&sup3;/h", align="center"),
             cell("600 m&sup3;/h", align="center"),
             cell("380 m&sup3;/h", align="center")])
rows.append([cell("CADR-F (formaldehyde)"),
             cell("220 m&sup3;/h", align="center"),
             cell("300 m&sup3;/h", align="center"),
             cell("200 m&sup3;/h", align="center")])
rows.append([cell("CCM-P / CCM-F"),
             cell("P4 / F4", align="center"),
             cell("P4 / F4", align="center"),
             cell("P4 / F4", align="center")])
rows.append([cell("Coverage"),
             cell("42&ndash;72 m&sup2;", align="center"),
             cell("42&ndash;72 m&sup2;", align="center"),
             cell("27&ndash;46 m&sup2;", align="center")])
rows.append([cell("Noise (max)"),
             cell("&le;65 dB", align="center"),
             cell("&le;65 dB", align="center"),
             cell("&le;65 dB", align="center")])
rows.append([cell("Power"),
             cell("70 W", align="center"),
             cell("70 W", align="center"),
             cell("35 W", align="center")])

# COST-EFFECTIVENESS group
rows.append(grp("COST-EFFECTIVENESS (per &yen;1000 of 3-yr TCO)"))
rows.append([cell("CADR-P / &yen;1000 TCO"),
             cell("633", align="center"),
             cell("427", align="center"),
             cell("535", align="center")])
rows.append([cell("CADR-F / &yen;1000 TCO", bold=True),
             cell("232", align="center"),
             cell("214", align="center"),
             cell("<b>281</b> (highest)", align="center", color="#0b6e3f")])

# EXTRAS group
rows.append(grp("EXTRAS"))
rows.append([cell("Digital HCHO readout"),
             tick(False), tick(True), tick(False)])
rows.append([cell("App"),
             cell("米家 (Mi Home)", cjk=True, align="center"),
             cell("米家 (Mi Home)", cjk=True, align="center"),
             cell("美居 (Meiju)", cjk=True, align="center")])

# ---------- Column widths ----------
PAGE_W = 210 * mm
L_MARGIN = R_MARGIN = 12 * mm
USABLE = PAGE_W - L_MARGIN - R_MARGIN  # ~186 mm
col_widths = [44 * mm, (USABLE - 44 * mm) / 3] * 1  # placeholder
col_widths = [44 * mm,
              (USABLE - 44 * mm) / 3,
              (USABLE - 44 * mm) / 3,
              (USABLE - 44 * mm) / 3]

# Expand group-header rows to span all columns in TableStyle via SPAN.
# ---------- Table style ----------
ts = TableStyle([
    # Header row
    ("BACKGROUND", (0, 0), (-1, 0), HEADER_BG),
    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("LEFTPADDING", (0, 0), (-1, -1), 4),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4),
    ("TOPPADDING", (0, 0), (-1, -1), 2.5),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
    ("GRID", (0, 0), (-1, -1), 0.3, GRID),
])

# Identify group-separator rows (the ones with only 1 cell -> we'll SPAN).
group_row_indices = []
for i, r in enumerate(rows):
    if len(r) == 1:
        group_row_indices.append(i)

for gi in group_row_indices:
    ts.add("SPAN", (0, gi), (-1, gi))
    ts.add("BACKGROUND", (0, gi), (-1, gi), GROUP_BG)
    ts.add("LEFTPADDING", (0, gi), (-1, gi), 5)
    ts.add("TOPPADDING", (0, gi), (-1, gi), 3)
    ts.add("BOTTOMPADDING", (0, gi), (-1, gi), 3)

# Alternating shading between group rows
shade = False
last_group = 0
for i in range(1, len(rows)):
    if i in group_row_indices:
        shade = False
        last_group = i
        continue
    # zebra on non-group rows
    if ((i - last_group) % 2) == 0:
        ts.add("BACKGROUND", (0, i), (-1, i), ALT_BG)

# Highlight the "3-yr TCO" row and CADR-F per ¥1000 TCO row
# Find them by label.
def find_row(label_contains):
    for idx, r in enumerate(rows):
        if len(r) == 4:
            # Paragraph text is in r[0]._cached or .text via getPlainText
            try:
                plain = r[0].getPlainText()
            except Exception:
                plain = ""
            if label_contains.lower() in plain.lower():
                return idx
    return None

tco_row = find_row("3-yr TCO")
cadrf_row = find_row("CADR-F / ")  # per ¥1000 row
if tco_row is not None:
    ts.add("BACKGROUND", (0, tco_row), (-1, tco_row), HIGHLIGHT)
if cadrf_row is not None:
    ts.add("BACKGROUND", (0, cadrf_row), (-1, cadrf_row), HIGHLIGHT)

# ---------- Row heights ----------
# Non-group data rows -> 7.6mm; group rows -> 5.2mm; header -> 8mm
row_heights = []
for i, r in enumerate(rows):
    if i == 0:
        row_heights.append(7.5 * mm)
    elif i in group_row_indices:
        row_heights.append(5 * mm)
    else:
        row_heights.append(7 * mm)

main_table = Table(rows, colWidths=col_widths, rowHeights=row_heights,
                   style=ts, hAlign="CENTER")

# ---------- Callout boxes ----------
def callout(title, winner_cjk, note):
    inner = [
        [Paragraph(title, callout_title_style)],
        [Paragraph(winner_cjk, callout_sku_style)],
        [Paragraph(note, callout_body_style)],
    ]
    t = Table(inner, colWidths=[(USABLE - 8 * mm) / 3], rowHeights=[6 * mm, 7 * mm, 12 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#e9eef7")),
        ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#1a3e72")),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    return t

c1 = callout(
    "Best raw cleaning speed",
    "&#9313; 米家 4 Pro H  (&yen;1004.7)",
    "Highest CADR-F (300), HCHO digital readout, 1-yr warranty.",
)
c2 = callout(
    "Best value per dollar",
    "&#9314; 美的 KJ400G-Z1Pro  (&yen;519)",
    "Lowest 3-yr TCO. Leftover budget covers a second small unit.",
)
c3 = callout(
    "Best balance (picked)",
    "&#9312; 米家 Pro H 二手 闲鱼  (&yen;588)",
    "Saves ~&yen;400 vs. new; verified listings at 96&ndash;99% filter life. No warranty.",
)

callout_row = Table(
    [[c1, c2, c3]],
    colWidths=[USABLE / 3] * 3,
    hAlign="CENTER",
)
callout_row.setStyle(TableStyle([
    ("LEFTPADDING", (0, 0), (-1, -1), 2),
    ("RIGHTPADDING", (0, 0), (-1, -1), 2),
    ("TOPPADDING", (0, 0), (-1, -1), 0),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
]))

# ---------- Assemble ----------
doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=L_MARGIN, rightMargin=R_MARGIN,
    topMargin=10 * mm, bottomMargin=8 * mm,
    title="Air Purifier Comparison One-Pager",
    author="OrbitOS",
)

story = []
story.append(Paragraph("Air Purifier Comparison &mdash; Beijing 38m&sup2; Loft, Budget &yen;1000", title_style))
story.append(Paragraph(
    "3 SKUs meeting CCM F4 + real activated-carbon stage &middot; 2026-04-15",
    subtitle_style,
))
story.append(main_table)
story.append(Spacer(1, 5))
story.append(callout_row)
story.append(Spacer(1, 4))
story.append(Paragraph(
    "Source: GB/T 18801-2022 &middot; Xiaomi specs &middot; Midea specs &middot; Xianyu Beijing same-city scan 2026-04-15",
    footer_style,
))

doc.build(story)

# ---------- Verify ----------
import os
size = os.path.getsize(OUT)
# Count pages by reading PDF trailer (simple approach: scan for /Type /Page tokens)
with open(OUT, "rb") as f:
    data = f.read()
# Count page objects — avoid counting /Pages (the catalog node).
import re
page_count = len(re.findall(rb"/Type\s*/Page(?!s)", data))
print(f"OUTPUT: {OUT}")
print(f"SIZE_BYTES: {size}")
print(f"PAGES: {page_count}")
