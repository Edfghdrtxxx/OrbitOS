"""Generate air purifier comparison PDF for Beijing 38m2 loft buyer (Chinese body)."""
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

# --- Register a CJK-capable font so Chinese text renders --------------------
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
SMALL_CENTER = ParagraphStyle(
    "SmallC", parent=SMALL, alignment=TA_CENTER, textColor=colors.grey,
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
        "空气净化器选购简报 · 北京 38m² Loft · 2026-04-15"
    )
    canvas.drawRightString(A4[0] - 1.8 * cm, 1.0 * cm, f"第 {doc.page} 页")
    canvas.restoreState()

# --- Build document ----------------------------------------------------------
doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=1.8 * cm, rightMargin=1.8 * cm,
    topMargin=1.6 * cm, bottomMargin=1.6 * cm,
    title="空气净化器对比 - 北京 Loft",
    author="OrbitOS",
)

story = []

# ================== PAGE 1 — 评估要点 =======================================
story.append(P("评估要点：你在为怎样的场景选购？", H1))
story.append(P("三款候选的解释性对比 · 2026-04-15", SMALL))
story.append(Spacer(1, 6))

story.append(P("背景场景", H2))
story.append(P(
    "你要买的是一台给 <b>38 m² loft 两层、新装修、北京</b> 用的空气净化器。"
    "有两种污染同时存在：<b>PM2.5</b>（北京大气 + 室内灰尘）和 "
    "<b>甲醛（HCHO）</b>——新家具未来 6-12 个月会持续释放。本文比较的三款"
    "都同时处理这两项，区别在于处理速度、持久力、和花费。", BODY))

story.append(P("什么是 CADR？", H2))
story.append(P(
    "<b>CADR（Clean Air Delivery Rate，洁净空气输出比率）</b>单位是 m³/h，"
    "代表净化器在最高档每小时能把多少立方米的空气清洗到\"洁净\"。"
    "每台机器会公布两个独立的 CADR：", BODY))
story.append(P(
    "&nbsp;&nbsp;- <b>CADR-P</b>：颗粒物（PM2.5、灰尘、花粉）", BODY_TIGHT))
story.append(P(
    "&nbsp;&nbsp;- <b>CADR-F</b>：甲醛（气态污染物）", BODY_TIGHT))
story.append(P(
    "按国家标准 <b>GB/T 18801-2022</b>，适用面积（m²）≈ <b>CADR × 0.07-0.12</b>。"
    "对 38 m² 的单层卧室，建议 <b>CADR-P ≥ 380</b>、<b>CADR-F ≥ 150-200</b>。", BODY))

story.append(P("什么是 CCM F4？", H2))
story.append(P(
    "<b>CCM（Cumulative Clean Mass，累积净化量）</b>衡量一片滤芯在饱和报废前"
    "能累计处理多少<i>总量</i>的污染物。CADR 代表<i>速度</i>，CCM 代表<i>持久力</i>。"
    "甲醛 CCM 分四档 F1-F4，<b>F4（> 1500 mg 甲醛）</b>为最高等级。"
    "对新装修家庭特别关键：甲醛释放要持续好几个月而不是几天，"
    "如果 CADR-F 高但 CCM-F 低，滤芯两三个月就饱和，反而会把已经吸附的甲醛"
    "<b>二次释放</b>回房间。本文三款都达到 F4，所以持久力不是分差项——"
    "真正分胜负的是绝对 CADR-F 和滤芯的耗材成本。", BODY))

story.append(P("Loft 的麻烦：单机覆盖不了两层", H2))
story.append(P(
    "Loft 实际上是 <b>38 m² × 2 层</b>，相当于 76 m² 平层的空气体积。"
    "¥1000 级别的单机 <b>覆盖不了两层</b>——要达到 76 m² 的标准需要 "
    "<b>CADR-P ≥ 760</b>，远超本文所有候选。"
    "正确的策略：<b>按卧室那层的体积来选型</b>（睡眠时间长、甲醛暴露更集中），"
    "另一层靠楼梯井的空气流通顺带获益。如果下层也重度异味或同样重要，"
    "应该考虑 <b>再加一台小机</b>，而不是硬上一台大单机——"
    "因为清洁的空气无法靠自然对流有效地穿越楼梯井向上扩散。", BODY))

story.append(PageBreak())

# ================== PAGE 2 — 三款对比 =====================================
story.append(P("三款候选详细参数", H1))
story.append(P(
    "下表按几个决策相关字段分组列出：型号身份、净化速度、持久力、噪音与覆盖、"
    "以及日常使用成本与售后支持。", BODY))
story.append(Spacer(1, 4))

header = ["参数",
          "① 米家 Pro H（二手）",
          "② 米家 4 Pro H（全新）",
          "③ 美的 KJ400G-Z1Pro（全新）"]

rows = [
    ["型号",
     "AC-M7-SC（2019，已停产）",
     "AC-M18-SC（2023，现售）",
     "KJ400G-Z1Pro（现售）"],
    ["平台",
     "闲鱼 · 北京同城 / 全国包邮",
     "天猫 · 小米官方旗舰店",
     "天猫 · 美的官方旗舰店"],
    ["到手价",
     "¥588",
     "¥1004.7（含 15% 国补）",
     "¥518.99（含店铺立减 ¥380）"],
    ["CADR-P（颗粒物）",
     "600 m³/h",
     "600 m³/h",
     "380 m³/h"],
    ["CADR-F（甲醛）",
     "220 m³/h",
     "300 m³/h",
     "200 m³/h"],
    ["CCM-P（颗粒物）",
     "P4",
     "P4",
     "P4"],
    ["CCM-F（甲醛）",
     "F4",
     "F4",
     "F4"],
    ["最大噪音",
     "≤65 dB(A)",
     "≤65 dB(A)",
     "≤65 dB(A), 12 档可调"],
    ["适用面积（GB/T 18801）",
     "42-72 m²",
     "42-72 m²",
     "27-46 m²"],
    ["功率",
     "70 W",
     "70 W",
     "35 W"],
    ["数字甲醛读数",
     "✗",
     "✓",
     "✗"],
    ["app",
     "米家",
     "米家",
     "美居"],
    ["保修",
     "无（二手）",
     "小米官方 1 年",
     "美的官方 1 年"],
    ["年耗材成本",
     "¥80-150（第三方 RFP-W23）",
     "¥133（小米原厂，含国补）",
     "¥28 副厂 / ¥100+ 原厂"],
]

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
    "<b>如何读这张表：</b>CADR 数值越大净化越快；CCM 字母等级越高滤芯寿命越长"
    "（P4 / F4 为最高）。适用面积按 GB/T 18801 推算；实际使用建议按房间面积的 "
    "0.8 倍打折选择，留出冗余。", SMALL))

story.append(PageBreak())

# ================== PAGE 3 — 三年性价比（TCO）==============================
story.append(P("三年持有成本与性价比", H1))
story.append(P(
    "购机价只是一部分，滤芯才是长期真正的花费。下表用 <b>中位耗材成本估算</b> "
    "计算三年总成本（TCO），再给出两个效率比值：每 ¥1000 TCO 换来多少 CADR——"
    "也就是整个使用周期里每一块钱买到的净化能力。", BODY))
story.append(Spacer(1, 6))

tco_header = ["指标",
              "① 米家 Pro H（二手）",
              "② 米家 4 Pro H（全新）",
              "③ 美的 Z1Pro"]

tco_rows = [
    ["购机成本", "¥588", "¥1005", "¥519"],
    ["三年耗材（中位估计）", "¥360（¥120 × 3）", "¥399（¥133 × 3）", "¥192（¥64 × 3 原厂均值）"],
    ["三年总成本（TCO）", "¥948", "¥1404", "¥711"],
    ["每 ¥1000 TCO 的 CADR-P", "633", "427", "535"],
    ["每 ¥1000 TCO 的 CADR-F", "232", "214", "281"],
]

tco_data = [[to_cell(h, CELL_HEADER) for h in tco_header]]
for r in tco_rows:
    is_total = r[0] == "三年总成本（TCO）"
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
story.append(P("解读", H2))
story.append(P(
    "<b>美的 Z1Pro 在纯性价比上胜出。</b>三年 TCO 最低（¥711），每 ¥1000 TCO "
    "换来的 CADR-F 最高（281）。代价是绝对 CADR 较低（380 / 200）——"
    "同样房间清洗速度更慢，对意料之外的污染（访客多、灰尘大、雾霾爆表日）"
    "留的余量也较少。GB/T 适用面积（27-46 m²）对 38 m² 单层已经贴在下限。", BODY))
story.append(P(
    "<b>米家 Pro H 二手和 4 Pro H 全新的绝对净化能力更强。</b>两款都是 CADR-P 600，"
    "有 42-72 m² 的宽裕覆盖余量。Pro H 二手比 4 Pro H 全新 <b>三年 TCO 便宜 32%</b>，"
    "同时 CADR-F 能做到 4 Pro H 的 <b>73%</b>（220 vs 300）——"
    "如果你能接受闲鱼二手机，这是很划算的取舍。4 Pro H 多花的 ≈¥450 值不值，"
    "取决于你是否在意官方 1 年保修、数字甲醛读数和最新一代传感器。", BODY))
story.append(P(
    "<b>三款都达到 CCM F4</b>，第一年内滤芯不会饱和——CCM 不是分差项，"
    "选择可以简化成 <i>速度与覆盖冗余</i>（米家）vs <i>效率与低运行成本</i>（美的）的权衡。",
    BODY))

story.append(PageBreak())

# ================== PAGE 4 — 决策规则 + 闲鱼核查清单 ========================
story.append(P("怎么选 + 闲鱼买二手的核查清单", H1))

story.append(P("三条决策规则", H2))
story.append(P(
    "● <b>① 如果你的首要需求是清洗速度</b>——肉眼可见的雾霾天、"
    "新家具的重度异味、家里人多——选 <b>① 米家 Pro H（二手）</b>或 "
    "<b>② 米家 4 Pro H（全新）</b>。绝对 CADR 更高，清洗 38 m² 房间的时间更短，"
    "覆盖余量宽裕。", BODY))
story.append(P(
    "● <b>② 如果你的首要需求是长期低成本</b>——预期工况平稳中等，"
    "想把三年花费压到最低——选 <b>③ 美的 KJ400G-Z1Pro</b>。"
    "三年 TCO 省出 ¥200+，每一块钱买到的 CADR-F 最高，功率也最低。", BODY))
story.append(P(
    "● <b>③ 想兼顾（全屋覆盖）</b>——<b>③ 美的 Z1Pro</b> + 用剩下的 ≈¥480 "
    "再买一台下层补位用的小净化器（桌面款或车载款）。全屋覆盖反而比单机买 "
    "① 或 ② 更完整——因为清洁空气无法靠自然对流穿过楼梯井向上扩散。", BODY))

story.append(Spacer(1, 6))
story.append(P("闲鱼购买前核查清单", H2))
story.append(P(
    "如果你走的是方案 ①（米家 Pro H 二手），付款前把下面每一条都跑一遍。"
    "机型已停产，漏掉任何一条你都没法靠保修找回来。", BODY))

checklist = [
    ("1.", "要卖家发一张 <b>米家 App 里的滤芯剩余寿命截图</b>——"
           "官方固态计数，不是口头\"还新\"。低于 50% 意味着你花钱买了一台 "
           "几个月内就要换 ¥120 滤芯的机器。"),
    ("2.", "要一段 <b>开机 15 秒视频</b>：机器运行、风机升速、触摸面板响应。"
           "这能排除死电机、裂面板、轴承异响。"),
    ("3.", "走 <b>闲鱼担保交易</b>，不要直接微信/支付宝转账——"
           "担保交易给你 7 天验机窗口期。"),
    ("4.", "到货后先用 <b>米家 App 绑定设备</b> 再点确认收货。"
           "绑不上的机器要么是黑机、要么是没解绑的前主人机、要么是翻新假货。"),
    ("5.", "<b>额外囤一片 RFP-W23 滤芯</b>（~¥120）。"
           "型号已停产，第三方滤芯目前供应充足但 2-3 年后会逐渐稀缺——"
           "长期滤芯供应是最大风险。"),
]
for num, txt in checklist:
    story.append(P(f"<b>{num}</b> &nbsp;{txt}", BODY))

story.append(Spacer(1, 8))
story.append(P("一句总结", H2))
story.append(P(
    "对北京新装修 loft 而言，<b>风险最低、花费最省的路径</b>是 "
    "<b>③ 美的 KJ400G-Z1Pro</b>——全新、有保修、购机 ¥519、三年 TCO ¥711——"
    "搭配\"新家具甲醛高峰过去后再补一台小机给下层\"的计划。"
    "<b>速度性价比最高</b>是 <b>① 米家 Pro H 二手</b>，但前提是把上面的闲鱼"
    "核查清单逐条跑完。<b>全新旗舰路径</b>是 <b>② 4 Pro H</b>，只有在你确实"
    "看重数字甲醛读数和官方保修时才值得。", BODY))

story.append(Spacer(1, 10))
story.append(P(
    "本简报基于 2026-04-15 的闲鱼北京同城扫描 + 天猫官方价调研。"
    "价格会随促销浮动，核心结论（CADR / CCM 参数、三款的相对性价比）稳定有效。",
    SMALL_CENTER))

# --- Build -------------------------------------------------------------------
doc.build(story, onFirstPage=footer, onLaterPages=footer)

# --- Verify ------------------------------------------------------------------
size = os.path.getsize(OUT)
print(f"OK: wrote {OUT} ({size} bytes, {size/1024:.1f} KB)")

from pypdf import PdfReader
r = PdfReader(OUT)
print(f"Pages: {len(r.pages)}")
