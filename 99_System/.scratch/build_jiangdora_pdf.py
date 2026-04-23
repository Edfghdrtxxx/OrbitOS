# -*- coding: utf-8 -*-
"""
Build a single PDF compilation of three JiangDora BibiGPT interview notes.
Style: Anthropic-inspired serif (warm cream paper, terracotta accent, Chinese serif body).
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm, mm
from reportlab.lib.colors import HexColor, Color
from reportlab.lib.enums import TA_LEFT, TA_JUSTIFY, TA_CENTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Flowable,
    KeepTogether,
)

# ---------- Font registration ----------
FONT_DIR = "C:/Windows/Fonts"

def try_register(name, path, subfontIndex=None):
    if not os.path.exists(path):
        return False
    try:
        if subfontIndex is not None:
            pdfmetrics.registerFont(TTFont(name, path, subfontIndex=subfontIndex))
        else:
            pdfmetrics.registerFont(TTFont(name, path))
        return True
    except Exception as e:
        print(f"Failed to register {name} from {path}: {e}")
        return False

# Unified Source Han Serif SC family: Regular (via Noto, which IS Source Han Serif) + Heavy
body_font = None
for name, path, idx in [
    ("HanSerif", f"{FONT_DIR}/NotoSerifSC-VF.ttf", None),
    ("HanSerif", f"{FONT_DIR}/STSONG.TTF", None),  # fallback
    ("HanSerif", f"{FONT_DIR}/simsun.ttc", 0),      # final fallback
]:
    if try_register(name, path, idx):
        body_font = name
        break

bold_font = None
for name, path, idx in [
    ("HanSerifHeavy", f"{FONT_DIR}/Source Han Serif SC Heavy (TrueType).ttf", None),
    ("HanSerifHeavy", f"{FONT_DIR}/simsunb.ttf", None),  # fallback
]:
    if try_register(name, path, idx):
        bold_font = name
        break

if body_font is None:
    raise RuntimeError("Could not register any CJK body font.")
if bold_font is None:
    bold_font = body_font

# Tell reportlab that <b> inside body paragraphs should use the Heavy weight
registerFontFamily('HanSerif',
                   normal='HanSerif',
                   bold=bold_font,
                   italic='HanSerif',
                   boldItalic=bold_font)

print(f"Body: {body_font}  |  Display/Heavy: {bold_font}")

# ---------- Anthropic-inspired palette ----------
PAPER  = HexColor("#F5F1E8")  # warm cream
INK    = HexColor("#1A1714")  # deep warm ink
SUBINK = HexColor("#3D3832")  # softer body ink
MUTED  = HexColor("#7A7162")  # muted warm gray
ACCENT = HexColor("#C15F3C")  # terracotta
ACCENT_LIGHT = HexColor("#E8C9B8")  # faded terracotta
RULE   = HexColor("#D4CEC0")  # subtle rule

# ---------- Styles ----------
def mk_styles():
    return {
        'cover_kicker': ParagraphStyle('cover_kicker', fontName=bold_font, fontSize=10,
            leading=14, textColor=ACCENT, alignment=TA_LEFT, spaceAfter=8),
        'cover_title': ParagraphStyle('cover_title', fontName=bold_font, fontSize=34,
            leading=44, textColor=INK, alignment=TA_LEFT, spaceAfter=4),
        'cover_sub': ParagraphStyle('cover_sub', fontName=body_font, fontSize=14,
            leading=22, textColor=MUTED, alignment=TA_LEFT, spaceAfter=8),
        'cover_item_num': ParagraphStyle('cover_item_num', fontName=bold_font, fontSize=11,
            leading=16, textColor=ACCENT),
        'cover_item_title': ParagraphStyle('cover_item_title', fontName=bold_font, fontSize=13,
            leading=18, textColor=INK, spaceAfter=2),
        'cover_item_meta': ParagraphStyle('cover_item_meta', fontName=body_font, fontSize=10,
            leading=15, textColor=MUTED, spaceAfter=14),
        'section_num': ParagraphStyle('section_num', fontName=bold_font, fontSize=10,
            leading=14, textColor=ACCENT, spaceAfter=2),
        'h1': ParagraphStyle('h1', fontName=bold_font, fontSize=22, leading=30,
            textColor=INK, spaceBefore=0, spaceAfter=4),
        'h1_sub': ParagraphStyle('h1_sub', fontName=body_font, fontSize=13, leading=19,
            textColor=MUTED, spaceAfter=4),
        'meta': ParagraphStyle('meta', fontName=body_font, fontSize=9.5, leading=14,
            textColor=MUTED, spaceAfter=14),
        'h2': ParagraphStyle('h2', fontName=bold_font, fontSize=11.5, leading=18,
            textColor=ACCENT, spaceBefore=14, spaceAfter=6),
        'body': ParagraphStyle('body', fontName=body_font, fontSize=10.5, leading=18,
            textColor=SUBINK, alignment=TA_JUSTIFY, spaceAfter=8, firstLineIndent=0),
        'highlight': ParagraphStyle('highlight', fontName=body_font, fontSize=10.5,
            leading=18, textColor=SUBINK, leftIndent=18, spaceAfter=7),
        'q_q': ParagraphStyle('q_q', fontName=bold_font, fontSize=11, leading=17,
            textColor=INK, spaceBefore=10, spaceAfter=3, leftIndent=0),
        'q_a': ParagraphStyle('q_a', fontName=body_font, fontSize=10.5, leading=18,
            textColor=SUBINK, alignment=TA_JUSTIFY, leftIndent=16, spaceAfter=6),
        'term_name': ParagraphStyle('term_name', fontName=bold_font, fontSize=10.5,
            leading=16, textColor=ACCENT, spaceBefore=8, spaceAfter=2),
        'term_def': ParagraphStyle('term_def', fontName=body_font, fontSize=10.5,
            leading=17, textColor=SUBINK, alignment=TA_JUSTIFY, leftIndent=14, spaceAfter=4),
        'tag_line': ParagraphStyle('tag_line', fontName=body_font, fontSize=9,
            leading=14, textColor=MUTED, spaceAfter=0),
        'chart_caption': ParagraphStyle('chart_caption', fontName=body_font, fontSize=9.5,
            leading=14, textColor=MUTED, alignment=TA_CENTER, spaceBefore=4, spaceAfter=12),
        'chart_label': ParagraphStyle('chart_label', fontName=bold_font, fontSize=10,
            leading=14, textColor=ACCENT, alignment=TA_LEFT, spaceAfter=6),
    }

# ---------- Helpers ----------
def esc(s):
    return (s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))

class AccentRule(Flowable):
    def __init__(self, width=3*cm, height=2, color=ACCENT):
        super().__init__()
        self.width, self.height, self.color = width, height, color
    def wrap(self, *a): return (self.width, self.height)
    def draw(self):
        self.canv.setFillColor(self.color)
        self.canv.rect(0, 0, self.width, self.height, stroke=0, fill=1)

# ---------- Page background ----------
def on_page(canvas, doc):
    canvas.saveState()
    # cream background
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, A4[0], A4[1], stroke=0, fill=1)
    # subtle top rule on content pages
    if doc.page > 1:
        canvas.setFillColor(ACCENT)
        canvas.rect(2.6*cm, A4[1] - 1.6*cm, 0.9*cm, 1.2, stroke=0, fill=1)
        canvas.setFont(body_font, 8.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(4.0*cm, A4[1] - 1.58*cm, "姜 Dora · 100 场职业访谈")
    # footer
    canvas.setFont(body_font, 9)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(A4[0] - 2.6*cm, 1.4*cm, str(doc.page))
    canvas.restoreState()

# ============================================================
# SCHEMATIC FLOWABLES
# ============================================================

class PathwayDiagram(Flowable):
    """
    Interview 1 (钱婧): career-growth pathway as a stepped arrow flow.
    拒绝宏大叙事 → 本分 → 核心能力 → 职场价值 → 利他交换 → 收入升级
    """
    STEPS = [
        ("拒绝", "宏大叙事"),
        ("本分", "心态起步"),
        ("打磨", "核心能力"),
        ("提升", "职场价值"),
        ("利他", "价值交换"),
        ("收入", "升级跃迁"),
    ]
    def __init__(self, width=16*cm):
        super().__init__()
        self.width = width
        self.height = 5.6*cm
    def wrap(self, *a): return (self.width, self.height)
    def draw(self):
        c = self.canv
        n = len(self.STEPS)
        gap = 0.18*cm
        w = (self.width - gap*(n-1)) / n
        h = 1.5*cm
        y = 2.6*cm
        # arrows
        for i, (top, bot) in enumerate(self.STEPS):
            x = i * (w + gap)
            # chevron-shaped box
            c.saveState()
            # color ramps from light to accent
            t = i / (n - 1)
            fill = Color(
                PAPER.red*(1-t) + ACCENT.red*t,
                PAPER.green*(1-t) + ACCENT.green*t,
                PAPER.blue*(1-t) + ACCENT.blue*t,
            )
            c.setFillColor(fill)
            c.setStrokeColor(ACCENT)
            c.setLineWidth(0.6)
            tip = 0.35*cm
            p = c.beginPath()
            if i == 0:
                p.moveTo(x, y)
                p.lineTo(x + w - tip, y)
                p.lineTo(x + w, y + h/2)
                p.lineTo(x + w - tip, y + h)
                p.lineTo(x, y + h)
                p.close()
            elif i == n - 1:
                p.moveTo(x, y)
                p.lineTo(x + w, y)
                p.lineTo(x + w, y + h)
                p.lineTo(x, y + h)
                p.lineTo(x + tip, y + h/2)
                p.close()
            else:
                p.moveTo(x, y)
                p.lineTo(x + w - tip, y)
                p.lineTo(x + w, y + h/2)
                p.lineTo(x + w - tip, y + h)
                p.lineTo(x, y + h)
                p.lineTo(x + tip, y + h/2)
                p.close()
            c.drawPath(p, stroke=1, fill=1)
            # labels
            text_color = INK if t < 0.5 else PAPER
            c.setFillColor(text_color)
            c.setFont(bold_font, 10)
            c.drawCentredString(x + w/2, y + h/2 + 2, top)
            c.setFont(body_font, 8.5)
            c.drawCentredString(x + w/2, y + h/2 - 10, bot)
            c.restoreState()
        # bottom caption segments
        c.setFont(body_font, 9)
        c.setFillColor(MUTED)
        c.drawCentredString(self.width*0.22, 1.7*cm, "心态地基")
        c.drawCentredString(self.width*0.55, 1.7*cm, "能力资产")
        c.drawCentredString(self.width*0.87, 1.7*cm, "价值变现")
        # horizontal brackets
        c.setStrokeColor(RULE)
        c.setLineWidth(0.5)
        c.line(0.1*cm, 1.35*cm, self.width*0.35, 1.35*cm)
        c.line(self.width*0.38, 1.35*cm, self.width*0.73, 1.35*cm)
        c.line(self.width*0.76, 1.35*cm, self.width - 0.1*cm, 1.35*cm)
        # title
        c.setFillColor(ACCENT)
        c.setFont(bold_font, 10.5)
        c.drawString(0, self.height - 0.4*cm, "图解 · 搞钱的阶梯：从心态到价值跃迁")


class SafetyZoneMatrix(Flowable):
    """
    Interview 2 (温义飞): 2x2 matrix '监管看不起 / 同行看不见 / 品牌能看见 / 消费者常看见'.
    """
    def __init__(self, width=14*cm):
        super().__init__()
        self.width = width
        self.height = 9.5*cm
    def wrap(self, *a): return (self.width, self.height)
    def draw(self):
        c = self.canv
        box_w = 6.2*cm
        box_h = 3.2*cm
        gap = 0.3*cm
        left = (self.width - (box_w*2 + gap)) / 2
        bot = 1.2*cm
        labels = [
            # (row, col), label, sub
            ((1,0), "监管看不起", "低敏感度 · 不招惹"),
            ((1,1), "同行看不见", "差异化 · 避开内卷"),
            ((0,0), "品牌能看见", "可被商业化承接"),
            ((0,1), "消费者常看见", "持续触达 · 复访"),
        ]
        # axis labels (outer)
        c.setFont(bold_font, 10.5)
        c.setFillColor(ACCENT)
        c.drawString(0, self.height - 0.3*cm, "图解 · 创作者的安全区：四象限定位")
        # boxes
        for (row, col), label, sub in labels:
            x = left + col*(box_w + gap)
            y = bot + row*(box_h + gap)
            # subtle fill
            c.setFillColor(HexColor("#FAF5EC"))
            c.setStrokeColor(ACCENT)
            c.setLineWidth(0.7)
            c.roundRect(x, y, box_w, box_h, 6, stroke=1, fill=1)
            # label
            c.setFillColor(INK)
            c.setFont(bold_font, 13)
            c.drawCentredString(x + box_w/2, y + box_h/2 + 6, label)
            c.setFont(body_font, 9.5)
            c.setFillColor(MUTED)
            c.drawCentredString(x + box_w/2, y + box_h/2 - 10, sub)
        # center text
        cx = left + box_w + gap/2
        cy = bot + box_h + gap/2
        c.setFillColor(ACCENT)
        c.circle(cx, cy, 0.55*cm, stroke=0, fill=1)
        c.setFillColor(PAPER)
        c.setFont(bold_font, 9)
        c.drawCentredString(cx, cy - 3, "安全区")
        # corner note
        c.setFont(body_font, 9)
        c.setFillColor(MUTED)
        c.drawString(0, 0.3*cm, "流量是中转站 · 不是资产。稳健的商业承接 > 一次性爆发。")


class CirclesDiagram(Flowable):
    """
    Interview 3 (马兆远): concentric circles — AI-addressable (logical, closed)
    sits inside the larger human / super-experiential domain.
    """
    def __init__(self, width=15*cm):
        super().__init__()
        self.width = width
        self.height = 9.8*cm
    def wrap(self, *a): return (self.width, self.height)
    def draw(self):
        c = self.canv
        cx = self.width / 2
        cy = 4.5*cm
        # outer circle (universe / super-experiential)
        c.setStrokeColor(ACCENT)
        c.setLineWidth(1.0)
        # dashed outer to convey fuzziness
        c.saveState()
        c.setDash(3, 2)
        c.circle(cx, cy, 4.2*cm, stroke=1, fill=0)
        c.restoreState()
        # inner circle (logic/science — AI's home)
        c.setFillColor(HexColor("#FAF5EC"))
        c.setStrokeColor(ACCENT)
        c.setLineWidth(0.8)
        c.circle(cx, cy, 2.0*cm, stroke=1, fill=1)
        # inner labels
        c.setFillColor(INK)
        c.setFont(bold_font, 12)
        c.drawCentredString(cx, cy + 12, "逻辑 · 科学")
        c.setFont(body_font, 9.5)
        c.setFillColor(MUTED)
        c.drawCentredString(cx, cy - 2, "AI 可高效处理")
        c.drawCentredString(cx, cy - 16, "同一 · 矛盾 · 排中 · 因果")
        # outer labels — placed around the ring
        c.setFont(bold_font, 12)
        c.setFillColor(ACCENT)
        c.drawCentredString(cx, cy + 3.6*cm, "超验领域 · 人的疆域")
        c.setFont(body_font, 9.5)
        c.setFillColor(SUBINK)
        c.drawString(cx - 3.9*cm, cy + 1.2*cm, "情感")
        c.drawString(cx - 3.9*cm, cy - 0.0*cm, "价值")
        c.drawString(cx - 3.9*cm, cy - 1.2*cm, "美学")
        c.drawRightString(cx + 3.9*cm, cy + 1.2*cm, "形而上学")
        c.drawRightString(cx + 3.9*cm, cy + 0.0*cm, "直觉")
        c.drawRightString(cx + 3.9*cm, cy - 1.2*cm, "宗教体验")
        # boundary note
        c.setFont(body_font, 9)
        c.setFillColor(MUTED)
        c.drawCentredString(cx, cy - 3.5*cm, "边界模糊 · 哥德尔不完备：系统内必有不可证之真")
        # title
        c.setFillColor(ACCENT)
        c.setFont(bold_font, 10.5)
        c.drawString(0, self.height - 0.3*cm, "图解 · AI 的圆与人的圆：边界之外是人的疆域")
        # arrow from AI circle outward
        c.setStrokeColor(ACCENT)
        c.setLineWidth(0.6)
        c.saveState()
        c.setDash(1, 2)
        c.line(cx + 1.5*cm, cy + 1.5*cm, cx + 2.8*cm, cy + 2.8*cm)
        c.restoreState()
        c.setFillColor(ACCENT)
        c.setFont(body_font, 8.5)
        c.drawString(cx + 2.9*cm, cy + 2.9*cm, "人类文明 ⊋ 科学")


class SynthesisMindmap(Flowable):
    """
    Final synthesis: three interviews → one throughline.
    Center: 年轻人在不确定时代的确定性
    Branches: 行动 / 接纳 / 思维
    """
    def __init__(self, width=16*cm):
        super().__init__()
        self.width = width
        self.height = 12*cm
    def wrap(self, *a): return (self.width, self.height)
    def draw(self):
        c = self.canv
        cx = self.width / 2
        cy = self.height / 2 - 0.3*cm
        # Title
        c.setFillColor(ACCENT)
        c.setFont(bold_font, 11)
        c.drawString(0, self.height - 0.3*cm, "合集 · 一条共通的主线")
        # center node
        c.setFillColor(ACCENT)
        c.circle(cx, cy, 1.35*cm, stroke=0, fill=1)
        c.setFillColor(PAPER)
        c.setFont(bold_font, 10)
        c.drawCentredString(cx, cy + 6, "在不确定中")
        c.drawCentredString(cx, cy - 6, "寻回确定性")

        # Three branches
        branches = [
            # (angle_deg, color_tint, title, subtitle, points[])
            (150, "钱 婧", "行动 · Action",
                ["本分起步：拒绝宏大叙事",
                 "上班是最低成本的锻炼",
                 "利他与公平价值交换"]),
            (30, "温义飞", "接纳 · Acceptance",
                ["流量是中转站 · 不是资产",
                 "可能性坍缩即使命浮现",
                 "与不完美共存 = 风格"]),
            (270, "马兆远", "思维 · Thinking",
                ["逻辑四律 = 思维地基",
                 "AI 是工具 · 不是神",
                 "高级外行 · 跨行业学习力"]),
        ]
        import math
        for (angle, guest, title, pts) in branches:
            rad = math.radians(angle)
            # branch node center
            bx = cx + math.cos(rad) * 5.3*cm
            by = cy + math.sin(rad) * 3.8*cm
            # line from center to branch
            c.setStrokeColor(ACCENT)
            c.setLineWidth(1.2)
            c.line(cx + math.cos(rad)*1.35*cm, cy + math.sin(rad)*1.35*cm,
                   bx - math.cos(rad)*0.4*cm, by - math.sin(rad)*0.4*cm)
            # branch box
            bw = 4.8*cm
            bh = 3.0*cm
            c.setFillColor(HexColor("#FAF5EC"))
            c.setStrokeColor(ACCENT)
            c.setLineWidth(0.7)
            c.roundRect(bx - bw/2, by - bh/2, bw, bh, 5, stroke=1, fill=1)
            # guest label (kicker)
            c.setFillColor(ACCENT)
            c.setFont(bold_font, 8.5)
            c.drawCentredString(bx, by + bh/2 - 14, guest.upper() if False else guest)
            # title
            c.setFillColor(INK)
            c.setFont(bold_font, 11)
            c.drawCentredString(bx, by + bh/2 - 30, title)
            # bullets
            c.setFillColor(SUBINK)
            c.setFont(body_font, 9)
            for i, pt in enumerate(pts):
                c.drawCentredString(bx, by + bh/2 - 48 - i*14, "· " + pt)


# ============================================================
# INTERVIEW CONTENT
# ============================================================

INTERVIEWS = [
    {
        'num': '01',
        'title': '哪些诀窍真能让普通人挣到钱？',
        'subtitle': '年轻收入高的人都有迹可循',
        'guest': '钱婧 × 姜Dora',
        'url': 'bibigpt.co/video/BV1KPQuBAEDY',
        'summary': '在本次访谈中，职业成长导师钱婧与博主姜Dora深入探讨了当代年轻人关于"搞钱"与职业发展的困惑。视频强调了普通人应拒绝宏大叙事，通过立足本职工作、打磨核心能力来积累原始资本，并指出"搞钱"不仅是获取收入，更是通过行动和责任感实现自我认知的过程。嘉宾建议年轻人保持积极精气神，理性看待消费与欲望，在职场中通过利他思维与公平交换，最终实现个人价值与收入的同步提升。',
        'highlights': [
            ('年轻人应将重心放在提升职场价值上，当月薪达到城市中位数或以上时，才具备更强的抗风险能力与搞钱基础。', '02:35'),
            ('上班是心脉受损程度最低的锻炼方式，通过搞定难缠的领导和应对职场琐事，能有效锻炼应对真实商业世界所需的抗压能力与情绪能量。', '08:08'),
            ('"搞钱"是一个动词，沉迷于造富神话会导致行动力丧失，只有通过持续的创造和行动，才能在复杂的人生课题中看清真实的自我。', '15:43'),
            ('面对贫富差距产生的"小刺痛"，应将其转化为向上的野心，而非沦为怨天尤人的负面情绪，将欲望转化为不断进取的动力。', '12:35'),
            ('商业社会的本质是利他与价值交换，不仅要追求收入升级，更要学会通过职场人际关系的优化实现"老板升级"，在公平交易中建立长期的信任。', '11:15'),
        ],
        'tags': '#搞钱   #职场成长   #职业规划   #个人提升   #年轻人奋斗',
        'questions': [
            ('为什么说"上班"比"创业"更适合大多数普通人？',
             '因为上班是负债与责任最小化的选择。创业需要极其综合的能力，包括决策力、抗压性以及处理复杂利益分配的能力。如果一个人在职场中尚无法胜任基础岗位，直接进入残酷的自由市场极易面临惨重损失。'),
            ('面对职场中的金钱焦虑，年轻人应该采取什么样的心态？',
             '应当拒绝宏大叙事，从"本分"做起。在现状上"开花"，通过小目标的积累让自己变得更值钱。同时，将金钱视为社会化的工具，通过适当的消费与体验来平衡工作的苦闷，并始终保持积极向上的精神状态。'),
        ],
        'terms': [
            ('宏大叙事', '指那种脱离个人实际、空谈暴富神话或宏观经济趋势的观点，容易让年轻人产生浮躁心态，忽视本职工作的积累。'),
            ('稳态', '指个体在创业或独立经营时，所具备的心理稳定性与抗风险能力，是独立决策与面对失败时依然能保持正常运作的基础。'),
            ('利益相关者（Stakeholders）', '在商业活动中所有受项目或行为影响的各方，成功的商业模式需要平衡各方利益，做到利他才能实现长期共赢。'),
            ('社会化（Socialization）', '在视频语境下，指通过工作、消费与人际交往，获取对真实世界的认知，学会如何在社会规则下通过提供价值换取回报的过程。'),
        ],
        'chart': PathwayDiagram,
        'chart_caption': '从心态起步到价值跃迁的六步阶梯 — 源自对话中的核心递进逻辑',
    },
    {
        'num': '02',
        'title': '我好像突然明白了资本世界的玩法',
        'subtitle': None,
        'guest': '温义飞 × 姜Dora',
        'url': 'bibigpt.co/video/BV1XGXzBwEke',
        'summary': '这是一场关于职场、资本逻辑与个体自我认知的深刻访谈。财经大V温义飞与主持人姜Dora探讨了当代年轻人在追求财富过程中的深层困境，揭示了资本世界运作背后的冷酷真相。对话深入剖析了创作者在理想主义与商业成功之间的挣扎，探讨了如何在被商业裹挟的现状中，接纳并平衡个人欲望与现实使命，最终寻求与不完美世界的和解。',
        'highlights': [
            ('具有极高道德门槛的人在追求财富时往往举步维艰，因为资本的本质要求冷血与效率，而过高的社会道德认知有时会成为商业运转的阻碍。', '02:30'),
            ('当个人的时间被证券化，休息成为奢侈品，创作者甚至会将自己的痛苦与情绪转化为内容生产的素材，这反映了创作者在商业化浪潮中逐渐被异化的无奈。', '09:12'),
            ('自媒体创作者本质上是"步行街上的卖艺人"，流量并非真正拥有的资产，而是一种瞬时的过客；若妄图通过影响力改变社会反而是一种傲慢，真正的生存之道在于建立稳固的商业承接模式。', '15:45'),
            ('人生中可能性的逐渐收束并不一定是坏事，这实际上是个人内在道路的逐步显现，学会接纳自己的不完美并与这种不完美共存，才是个人风格的真正来源。', '31:25'),
        ],
        'tags': '#财经访谈   #资本逻辑   #个人成长   #职场思考   #温义飞',
        'questions': [
            ('在自媒体赛道中，个体创作者如何避免被"流量"裹挟？',
             '核心在于认清自己并非拥有流量，而是流量的"中转站"。创作者应避免产生傲慢，不要将虚名当作实名。真正的稳健策略是让"监管看不起、同行看不见、品牌能看见、消费者常看见"，在这一安全区内建立真实的商业转化能力，而非沉迷于一次性的流量爆发。'),
            ('人生选择的"可能性坍缩"是令人痛苦的吗？',
             '不一定。虽然年轻时有很多选择是幻觉，但随着年龄增长，可能性坍缩实际上是个人内心使命的浮现。这是一种"知天命"的过程，与其在无数噪音中焦虑，不如接受命运的安排，在收束的道路上做到极致，这反而会带来内心的平静与安全感。'),
        ],
        'terms': [
            ('资本寄宿（Capital Host）', '借用马克思的理论，指资本家在追求收益的过程中，往往会沦为资本的工具，被资本这一"幽灵"所寄生，不得不为了效率牺牲道德和情感。'),
            ('流量（Traffic）', '在视频语境中，指流经创作者注意力的一过性资源。创作者必须清醒地认识到这并非自有资产，不能产生过多的心理羁绊或所有权幻觉。'),
            ('可能性坍缩（Collapse of Possibilities）', '指一个人随着成长和人生目标的明确，原本宽泛的选择路径逐渐变窄。这种收束被视频中解读为个人道路的显现与成熟，而非单纯的失去。'),
        ],
        'chart': SafetyZoneMatrix,
        'chart_caption': '温义飞给创作者的四象限定位公式 — 在四个视角的交集里，才有可持续商业',
    },
    {
        'num': '03',
        'title': 'AI 时代你不得不适应的新变化',
        'subtitle': '对 AI 的悲观是对人类的乐观',
        'guest': '马兆远 × 姜Dora',
        'url': 'bibigpt.co/video/BV1vFNwzfEoA',
        'summary': '在本期视频中，姜Dora与南方科技大学教授马兆远展开了深度对话，探讨了AI时代下的职场变化、人类的独特性以及如何构建现代人的核心竞争力。对话指出，目前社会对AI的盲目乐观实际上是对AI的"迷信"，而真正的悲观主义反而是对人类自身潜力的乐观。在这个知识生成过剩的时代，年轻人无需过度焦虑，应重点培养逻辑思维能力，将AI作为辅助工具，同时发掘与职业无关的个人兴趣，在不确定性中寻找属于自己的确定性。',
        'highlights': [
            ('目前社会对AI的盲目推崇类似于100年前的"科学至上主义"，将AI神化实际上是一种反科学精神，因为真正的科学从不认为自己是绝对正确的。', '04:47'),
            ('人类与AI的区别在于那些无法被算法量化、描述的"超验"领域，如情感、价值、美学及形而上学的体验；这些不自洽但充满创造力的部分，正是人类的核心价值所在。', '08:57'),
            ('年轻人应掌握现代人的思维方式，即通过严谨的逻辑素养训练，提升知识整合与快速跨行业学习的能力，如同修习"小无相功"，能够迅速掌握新领域的知识架构，从而在多变的时代中安身立命。', '20:17'),
        ],
        'tags': '#人工智能   #职场成长   #思维逻辑   #马兆远   #人类文明',
        'questions': [
            ('在AI可以随时生成答案的时代，普通人学习的意义到底是什么？',
             'AI擅长处理逻辑闭环内的知识点，学习的意义在于提升思维逻辑，将散乱的知识串联成系统，通过对已有知识的批判性思考和逻辑梳理，从而在这些基础上创造出新的价值。'),
            ('如何在职场中构建自己的核心竞争力？',
             '不必过分执着于单一的"赛道"，应培养与职业无关的深度兴趣。真正的核心竞争力在于"学习能力"，即具备一套严谨的思维架构，能够像"高级外行"一样通过与领域大牛的高效沟通，快速进入并理解一个全新的行业。'),
        ],
        'terms': [
            ('科学至上主义（Scientism）', '一种将科学视为绝对真理和唯一信仰的思维方式，类似于盲目崇拜神，忽视了科学本身是有限的、可被证伪的探索过程。'),
            ('哥德尔不完备定理（Gödel\'s Incompleteness Theorems）', '指出在任何逻辑系统中，总存在无法在该系统内被证明或证伪的命题，这解释了为什么人类的直觉和非逻辑部分往往比纯算法系统更具包容性和创造力。'),
            ('逻辑的四个基本规则', '指同一律、矛盾律、排中律和因果律。遵循这些规则是进行有效表达和知识积累的前提，是现代人思维方式的基石。'),
        ],
        'chart': CirclesDiagram,
        'chart_caption': 'AI 能做的事是一个逻辑闭环的小圆；人的圆更大，边界模糊处正是人独有的疆域',
    },
]


# ============================================================
# BUILD DOC
# ============================================================
OUT_PATH = "D:/obsidian/OrbitOS/50_Resources/SelfDevelopment/JiangDora_Interviews/JiangDora_Interviews_Compilation.pdf"

styles = mk_styles()
doc = SimpleDocTemplate(
    OUT_PATH,
    pagesize=A4,
    leftMargin=2.6*cm, rightMargin=2.6*cm,
    topMargin=2.6*cm, bottomMargin=2.2*cm,
    title='姜Dora 100场职业访谈 · 三篇合集',
    author='BibiGPT / JiangDora',
)

story = []

# ---- COVER ----
story.append(Spacer(1, 3.2*cm))
story.append(Paragraph("JIANG DORA · 100 场职业访谈", styles['cover_kicker']))
story.append(AccentRule(1.6*cm, 2.5))
story.append(Spacer(1, 0.3*cm))
story.append(Paragraph("三场对话", styles['cover_title']))
story.append(Paragraph("关于搞钱、资本与 AI 时代的生存", styles['cover_sub']))
story.append(Spacer(1, 1.2*cm))
for iv in INTERVIEWS:
    story.append(Paragraph(f"<font color='#C15F3C'>—— {iv['num']}</font>", styles['cover_item_num']))
    story.append(Paragraph(esc(iv['title']), styles['cover_item_title']))
    sub = iv['guest']
    if iv.get('subtitle'):
        sub = iv['subtitle'] + ' · ' + iv['guest']
    story.append(Paragraph(esc(sub), styles['cover_item_meta']))

story.append(Spacer(1, 1.5*cm))
story.append(Paragraph("精选自 BibiGPT 对哔哩哔哩节目的整理 · 仅作个人学习留存", styles['tag_line']))
story.append(PageBreak())

# ---- EACH INTERVIEW ----
for i, iv in enumerate(INTERVIEWS):
    # Header
    story.append(Paragraph(f"— {iv['num']} —", styles['section_num']))
    story.append(Paragraph(esc(iv['title']), styles['h1']))
    if iv.get('subtitle'):
        story.append(Paragraph(esc(iv['subtitle']), styles['h1_sub']))
    story.append(Paragraph(f"对话：{esc(iv['guest'])}   ·   {esc(iv['url'])}", styles['meta']))
    story.append(AccentRule(2.5*cm, 1.5))
    story.append(Spacer(1, 0.4*cm))

    # Summary
    story.append(Paragraph("摘要 · SUMMARY", styles['h2']))
    story.append(Paragraph(esc(iv['summary']), styles['body']))

    # Schematic
    story.append(Spacer(1, 0.3*cm))
    chart_flow = iv['chart']()
    caption = Paragraph(esc(iv['chart_caption']), styles['chart_caption'])
    story.append(KeepTogether([chart_flow, caption]))

    # Highlights
    story.append(Paragraph("亮点 · HIGHLIGHTS", styles['h2']))
    for text, ts in iv['highlights']:
        bullet = f"<font color='#C15F3C'>●</font>&nbsp;&nbsp;{esc(text)} &nbsp;<font color='#7A7162'>[{ts}]</font>"
        story.append(Paragraph(bullet, styles['highlight']))

    # Questions
    story.append(Paragraph("核心问答 · QUESTIONS", styles['h2']))
    for q, a in iv['questions']:
        story.append(Paragraph(f"<font color='#C15F3C'>Q</font>&nbsp;&nbsp;{esc(q)}", styles['q_q']))
        story.append(Paragraph(esc(a), styles['q_a']))

    # Terminology
    story.append(Paragraph("关键术语 · TERMS", styles['h2']))
    for name, defn in iv['terms']:
        story.append(Paragraph(esc(name), styles['term_name']))
        story.append(Paragraph(esc(defn), styles['term_def']))

    # Tags
    story.append(Spacer(1, 0.5*cm))
    story.append(Paragraph(esc(iv['tags']), styles['tag_line']))

    if i < len(INTERVIEWS) - 1:
        story.append(PageBreak())

# ---- FINAL SYNTHESIS ----
story.append(PageBreak())
story.append(Paragraph("— 合集 —", styles['section_num']))
story.append(Paragraph("一条共通的主线", styles['h1']))
story.append(Paragraph("三场对话 · 一个青年人的坐标系", styles['h1_sub']))
story.append(AccentRule(2.5*cm, 1.5))
story.append(Spacer(1, 0.4*cm))

synthesis_text = (
    "三场对话放在一起，其实在回答同一个问题：<b>在一个不确定性被放大的时代，"
    "一个普通年轻人如何找回自己的确定性？</b>钱婧从<i>行动</i>这一面切入——拒绝宏大叙事，"
    "回到本分，通过持续创造把自己变得更值钱；温义飞从<i>接纳</i>这一面切入——"
    "看清流量只是中转站、可能性坍缩反而是使命的浮现，与不完美共处是个人风格的起点；"
    "马兆远则从<i>思维</i>这一面切入——AI 能处理的是逻辑闭环里的小圆，人的疆域在那更大的圆之外，"
    "逻辑素养加跨行业学习力才是抗震的底盘。"
    "<br/><br/>"
    "<b>行动 · 接纳 · 思维</b>：一个是面向外界的姿态，一个是面向命运的姿态，一个是面向信息的姿态。"
    "三者合起来，就是这本合集试图勾勒的那个坐标系。"
)
story.append(Paragraph(synthesis_text, styles['body']))
story.append(Spacer(1, 0.5*cm))
story.append(SynthesisMindmap())

# ---- BUILD ----
doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
print(f"Generated: {OUT_PATH}")
print(f"Size: {os.path.getsize(OUT_PATH)/1024:.1f} KB")
