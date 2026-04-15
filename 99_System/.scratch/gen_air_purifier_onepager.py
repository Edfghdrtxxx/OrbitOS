"""Generate single-page quick-reference PDF for air purifier comparison (Chinese)."""
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

# Register a CJK font so Chinese labels render correctly.
pdfmetrics.registerFont(UnicodeCIDFont("STSong-Light"))
CJK = "STSong-Light"
SANS = "Helvetica"

# ---------- Styles ----------
styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    "TitleMain", parent=styles["Title"],
    fontName=CJK, fontSize=13, leading=15,
    alignment=TA_CENTER, spaceAfter=2,
)
subtitle_style = ParagraphStyle(
    "Subtitle", parent=styles["Normal"],
    fontName=CJK, fontSize=8, leading=9.5,
    alignment=TA_CENTER, textColor=colors.HexColor("#555555"),
    spaceAfter=6,
)

# Cell styles — default to CJK font since most labels are Chinese now.
def cell(text, bold=False, size=8.2, align="left", color=None, cjk=True):
    # reportlab has no bold CJK variant; emulate via <b> tag in text if needed.
    font = CJK if cjk else (f"{SANS}-Bold" if bold else SANS)
    a = {"left": TA_LEFT, "center": TA_CENTER}[align]
    ps = ParagraphStyle(
        f"c{size}{bold}{align}{cjk}", parent=styles["Normal"],
        fontName=font, fontSize=size, leading=size + 1.3, alignment=a,
    )
    if color:
        ps.textColor = colors.HexColor(color)
    if bold and cjk:
        # Wrap in <b> tag so reportlab faux-bolds the CJK glyphs.
        text = f"<b>{text}</b>"
    return Paragraph(text, ps)

group_header_style = ParagraphStyle(
    "Group", parent=styles["Normal"],
    fontName=CJK, fontSize=8.6, leading=10,
    alignment=TA_LEFT, textColor=colors.HexColor("#1a3e72"),
)
callout_title_style = ParagraphStyle(
    "CalloutTitle", parent=styles["Normal"],
    fontName=CJK, fontSize=8.8, leading=10.5, alignment=TA_CENTER,
    textColor=colors.HexColor("#1a3e72"), spaceAfter=2,
)
callout_body_style = ParagraphStyle(
    "CalloutBody", parent=styles["Normal"],
    fontName=CJK, fontSize=7.6, leading=9.2, alignment=TA_CENTER,
)
callout_sku_style = ParagraphStyle(
    "CalloutSku", parent=styles["Normal"],
    fontName=CJK, fontSize=8.4, leading=10, alignment=TA_CENTER,
    textColor=colors.HexColor("#0b6e3f"),
)
footer_style = ParagraphStyle(
    "Footer", parent=styles["Normal"],
    fontName=CJK, fontSize=6.8, leading=8, alignment=TA_CENTER,
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
def grp(label):
    ps = ParagraphStyle(
        "GroupLabel", parent=styles["Normal"],
        fontName=CJK, fontSize=8.6, leading=10,
        alignment=TA_LEFT, textColor=colors.HexColor("#1a3e72"),
    )
    return [Paragraph(f"<b>{label}</b>", ps)]

def tick(ok):
    sym = "&#10003;" if ok else "&#10007;"
    col = TICK_GREEN if ok else CROSS_RED
    return cell(f'<font color="{col}"><b>{sym}</b></font>', size=10, align="center", cjk=False)

rows = []

# Header row — white text on dark blue.
rows.append([
    cell("参数", bold=True, size=8.8, align="left", color="#ffffff"),
    cell("&#9312; 米家 Pro H (二手)", bold=True, size=8.2, align="center", color="#ffffff"),
    cell("&#9313; 米家 4 Pro H (全新)", bold=True, size=8.2, align="center", color="#ffffff"),
    cell("&#9314; 美的 KJ400G-Z1Pro (全新)", bold=True, size=8.2, align="center", color="#ffffff"),
])

# 基本信息
rows.append(grp("基本信息"))
rows.append([cell("型号"),
             cell("AC-M7-SC (2019, EOL)", align="center", cjk=False),
             cell("AC-M18-SC (2023)", align="center", cjk=False),
             cell("KJ400G-Z1Pro", align="center", cjk=False)])
rows.append([cell("平台"),
             cell("闲鱼 BJ / 全国包邮", align="center"),
             cell("天猫小米官方", align="center"),
             cell("天猫美的官方", align="center")])
rows.append([cell("保修"),
             cell(f'<font color="{CROSS_RED}">无</font>', align="center"),
             cell(f'<font color="{TICK_GREEN}">1 年</font>', align="center"),
             cell(f'<font color="{TICK_GREEN}">1 年</font>', align="center")])

# 价格
rows.append(grp("价格"))
rows.append([cell("到手价"),
             cell("&yen;588", align="center", cjk=False),
             cell("&yen;1004.7", align="center", cjk=False),
             cell("&yen;518.99", align="center", cjk=False)])
rows.append([cell("年耗材"),
             cell("&yen;80&ndash;150", align="center", cjk=False),
             cell("&yen;133", align="center", cjk=False),
             cell("&yen;28&ndash;100", align="center", cjk=False)])
rows.append([cell("三年 TCO", bold=True),
             cell("<b>&yen;948</b>", align="center", cjk=False),
             cell("<b>&yen;1404</b>", align="center", cjk=False),
             cell("<b>&yen;711</b>", align="center", cjk=False)])

# 净化性能
rows.append(grp("净化性能 · 按 GB/T 18801"))
rows.append([cell("CADR-P (颗粒物)"),
             cell("600 m&sup3;/h", align="center", cjk=False),
             cell("600 m&sup3;/h", align="center", cjk=False),
             cell("380 m&sup3;/h", align="center", cjk=False)])
rows.append([cell("CADR-F (甲醛)"),
             cell("220 m&sup3;/h", align="center", cjk=False),
             cell("300 m&sup3;/h", align="center", cjk=False),
             cell("200 m&sup3;/h", align="center", cjk=False)])
rows.append([cell("CCM-P / CCM-F"),
             cell("P4 / F4", align="center", cjk=False),
             cell("P4 / F4", align="center", cjk=False),
             cell("P4 / F4", align="center", cjk=False)])
rows.append([cell("适用面积"),
             cell("42&ndash;72 m&sup2;", align="center", cjk=False),
             cell("42&ndash;72 m&sup2;", align="center", cjk=False),
             cell("27&ndash;46 m&sup2;", align="center", cjk=False)])
rows.append([cell("最大噪音"),
             cell("&le;65 dB", align="center", cjk=False),
             cell("&le;65 dB", align="center", cjk=False),
             cell("&le;65 dB", align="center", cjk=False)])
rows.append([cell("功率"),
             cell("70 W", align="center", cjk=False),
             cell("70 W", align="center", cjk=False),
             cell("35 W", align="center", cjk=False)])

# 性价比
rows.append(grp("性价比 · 按三年 TCO"))
rows.append([cell("每 &yen;1000 TCO 的 CADR-P"),
             cell("633", align="center", cjk=False),
             cell("427", align="center", cjk=False),
             cell("535", align="center", cjk=False)])
rows.append([cell("每 &yen;1000 TCO 的 CADR-F", bold=True),
             cell("232", align="center", cjk=False),
             cell("214", align="center", cjk=False),
             cell("<b>281</b> (最高)", align="center", color="#0b6e3f")])

# 附加功能
rows.append(grp("附加功能"))
rows.append([cell("数字甲醛读数"),
             tick(False), tick(True), tick(False)])
rows.append([cell("App"),
             cell("米家", align="center"),
             cell("米家", align="center"),
             cell("美居", align="center")])

# ---------- Column widths ----------
PAGE_W = 210 * mm
L_MARGIN = R_MARGIN = 12 * mm
USABLE = PAGE_W - L_MARGIN - R_MARGIN  # ~186 mm
# Slightly wider label column because Chinese labels like "每 ¥1000 TCO 的 CADR-P" are long.
LABEL_W = 46 * mm
col_widths = [LABEL_W,
              (USABLE - LABEL_W) / 3,
              (USABLE - LABEL_W) / 3,
              (USABLE - LABEL_W) / 3]

# ---------- Table style ----------
ts = TableStyle([
    # Header row
    ("BACKGROUND", (0, 0), (-1, 0), HEADER_BG),
    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("LEFTPADDING", (0, 0), (-1, -1), 4),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4),
    ("TOPPADDING", (0, 0), (-1, -1), 2),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ("GRID", (0, 0), (-1, -1), 0.3, GRID),
])

# Identify group-separator rows.
group_row_indices = []
for i, r in enumerate(rows):
    if len(r) == 1:
        group_row_indices.append(i)

for gi in group_row_indices:
    ts.add("SPAN", (0, gi), (-1, gi))
    ts.add("BACKGROUND", (0, gi), (-1, gi), GROUP_BG)
    ts.add("LEFTPADDING", (0, gi), (-1, gi), 5)
    ts.add("TOPPADDING", (0, gi), (-1, gi), 2.5)
    ts.add("BOTTOMPADDING", (0, gi), (-1, gi), 2.5)

# Alternating shading between group rows
last_group = 0
for i in range(1, len(rows)):
    if i in group_row_indices:
        last_group = i
        continue
    if ((i - last_group) % 2) == 0:
        ts.add("BACKGROUND", (0, i), (-1, i), ALT_BG)

# Highlight the "三年 TCO" row and the per-¥1000 CADR-F row.
def find_row(label_contains):
    for idx, r in enumerate(rows):
        if len(r) == 4:
            try:
                plain = r[0].getPlainText()
            except Exception:
                plain = ""
            if label_contains in plain:
                return idx
    return None

tco_row = find_row("三年 TCO")
cadrf_row = find_row("每 ¥1000 TCO 的 CADR-F")
if tco_row is not None:
    ts.add("BACKGROUND", (0, tco_row), (-1, tco_row), HIGHLIGHT)
if cadrf_row is not None:
    ts.add("BACKGROUND", (0, cadrf_row), (-1, cadrf_row), HIGHLIGHT)

# ---------- Row heights ----------
row_heights = []
for i, r in enumerate(rows):
    if i == 0:
        row_heights.append(7.2 * mm)
    elif i in group_row_indices:
        row_heights.append(4.6 * mm)
    else:
        row_heights.append(6.6 * mm)

main_table = Table(rows, colWidths=col_widths, rowHeights=row_heights,
                   style=ts, hAlign="CENTER")

# ---------- Callout boxes ----------
def callout(title, winner_cjk, note):
    inner = [
        [Paragraph(f"<b>{title}</b>", callout_title_style)],
        [Paragraph(winner_cjk, callout_sku_style)],
        [Paragraph(note, callout_body_style)],
    ]
    t = Table(inner, colWidths=[(USABLE - 8 * mm) / 3],
              rowHeights=[5.5 * mm, 6.5 * mm, 13 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#e9eef7")),
        ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#1a3e72")),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 1.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    return t

c1 = callout(
    "净化速度最快",
    "&#9313; 米家 4 Pro H (&yen;1004.7)",
    "CADR-F 最高 (300)，自带数字甲醛读数，1 年保修。",
)
c2 = callout(
    "性价比最高",
    "&#9314; 美的 KJ400G-Z1Pro (&yen;519)",
    "三年 TCO 最低；省下的预算够再加一台下层补位机。",
)
c3 = callout(
    "综合最优（已选）",
    "&#9312; 米家 Pro H 二手 · 闲鱼 (&yen;588)",
    "省 &yen;400 vs 全新；验证过 96&ndash;99% 滤芯的挂件；无保修。",
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
    topMargin=9 * mm, bottomMargin=7 * mm,
    title="空气净化器对比 One-Pager",
    author="OrbitOS",
)

story = []
story.append(Paragraph(
    "<b>空气净化器对比 &mdash; 北京 38m&sup2; Loft，预算 &yen;1000</b>",
    title_style,
))
story.append(Paragraph(
    "3 款候选均达 CCM F4 + 活性炭滤芯 &middot; 2026-04-15",
    subtitle_style,
))
story.append(main_table)
story.append(Spacer(1, 4))
story.append(callout_row)
story.append(Spacer(1, 3))
story.append(Paragraph(
    "数据来源：GB/T 18801-2022 &middot; 小米官方参数 &middot; 美的官方参数 &middot; 闲鱼北京同城扫描 2026-04-15",
    footer_style,
))

doc.build(story)

# ---------- Verify ----------
import os
size = os.path.getsize(OUT)
with open(OUT, "rb") as f:
    data = f.read()
import re
page_count = len(re.findall(rb"/Type\s*/Page(?!s)", data))
print(f"OUTPUT: {OUT}")
print(f"SIZE_BYTES: {size}")
print(f"PAGES: {page_count}")
