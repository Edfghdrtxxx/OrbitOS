from pathlib import Path
import re
from docx import Document
from docx.document import Document as DocumentClass
from docx.table import Table, _Cell
from docx.text.paragraph import Paragraph
from docx.oxml.ns import qn

src = Path('D:/obsidian/OrbitOS/50_Resources/ComputerScience/扫描文稿 2026-4-28 21.48.13_副本.docx')
out = src.with_name(src.stem + '_cleaned.md')

CJK = '㐀-鿿豈-﫿'
SUP_SUB = str.maketrans({
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
    '–': '-', '—': '-', '−': '-',
})

artifact_patterns = [
    re.compile(r'^(?:屏幕|解幕|幕)?\s*\d+\s*[-—]\s*\d+\s*[,，]?\s*共\s*\d+\s*个$'),
    re.compile(r'^\d{1,2}\s*[:：]\s*\d{2}(?:\s+\d{4}\s*/\s*\d{1,2}\s*/\s*\d{1,2})?$'),
    re.compile(r'^\d{4}\s*/\s*\d{1,2}\s*/\s*\d{1,2}$'),
    re.compile(r'^\+?\d{1,3}\s*%$'),
]

symbol_only = re.compile(r'^[□■◇◆●○★☆◎▫▭△▲▽▼·•\-—_\s]+$')


def iter_block_items(parent):
    if isinstance(parent, DocumentClass):
        parent_elm = parent.element.body
    elif isinstance(parent, _Cell):
        parent_elm = parent._tc
    else:
        parent_elm = parent.element
    for child in parent_elm.iterchildren():
        if child.tag == qn('w:p'):
            yield Paragraph(child, parent)
        elif child.tag == qn('w:tbl'):
            yield Table(child, parent)


def collapse_spaced_acronyms(text: str) -> str:
    def repl(match):
        return re.sub(r'\s+', '', match.group(0))

    return re.sub(r'(?<![A-Za-z])(?:[A-Z]\s+){1,}[A-Z]{1,6}(?![a-z])', repl, text)


def clean_text(text: str, *, cell=False) -> str:
    if not text:
        return ''
    t = text.replace('\r', ' ').replace('\n', ' ')
    t = t.translate(SUP_SUB)
    t = t.replace('　', ' ')
    t = re.sub(r'[\t ]+', ' ', t)
    t = collapse_spaced_acronyms(t)
    t = re.sub(r'^\s*S\s+(?=(?:gs|gsql|nohup|source|chroot|sed|curl|ping)\b)', '$ ', t)
    t = re.sub(r'^\s*Sgs\b', '$ gs', t)
    t = re.sub(r'^\s*\$gs\b', '$ gs', t)
    t = re.sub(rf'(?<=[{CJK}])\s+(?=[{CJK}])', '', t)
    t = re.sub(rf'(?<=[{CJK}])\s+([，。；：、？！）\)】\]》])', r'\1', t)
    t = re.sub(rf'([（\(【\[《])\s+(?=[{CJK}])', r'\1', t)
    t = re.sub(r'\s+([,.;:?!\)])', r'\1', t)
    t = re.sub(r'([\(])\s+', r'\1', t)
    t = re.sub(r'\s+', ' ', t).strip()
    return t


def compact(text: str) -> str:
    return re.sub(r'\s+', '', text)


def is_artifact(text: str, *, cell=False) -> bool:
    t = clean_text(text, cell=cell)
    if not t:
        return True
    c = compact(t)
    if not cell and c in {'I', 'l', '|', 'D', 'eno', 'm', 'CP', '写势', '基本收', '金量设置', '2通度章', '玄薄入复直', '地e', '■', '□', '◇', '●', '★', '◎', 'Q搜索', '搜索', '英画品品一100%', '品十100%'}:
        return True
    if not cell and len(c) <= 2 and symbol_only.fullmatch(t):
        return True
    if not cell and re.fullmatch(r'\d{1,3}', c):
        return True
    if not cell and any(p.fullmatch(t) or p.fullmatch(c) for p in artifact_patterns):
        return True
    if not cell and re.search(r'(屏幕|解幕|幕)\s*\d+\s*[-—]\s*\d+\s*[,，]?\s*共\s*\d+\s*个', t):
        return True
    if not cell and re.fullmatch(r'\d{3,}', c):
        return True
    if not cell and len(c) <= 16 and re.search(r'[一-鿿]', c) and re.search(r'[A-Za-z0-9]', c):
        chinese = len(re.findall(r'[一-鿿]', c))
        latin_digit = len(re.findall(r'[A-Za-z0-9]', c))
        if chinese <= 6 and latin_digit >= 1 and not re.match(r'^\d+(?:\.\d+)*[\s一-鿿]', t):
            return True
    if not cell and re.fullmatch(r'.*[0-9a-fA-F]{8,}.*', c) and len(c) <= 80:
        return True
    if not cell and '搜索' in c and len(c) <= 10:
        return True
    if not cell and re.fullmatch(r'[+\-]?100%+', c):
        return True
    if not cell and '100%' in c and len(c) <= 12:
        return True
    if not cell and any(ch in c for ch in '□■◇◆★◎') and len(c) <= 30:
        return True
    if not cell and re.search(r'[\\x00-\\x7f]', c) and re.search(r'[一-鿿]', c) and len(c) <= 28:
        chinese = len(re.findall(r'[一-鿿]', c))
        latin_digit = len(re.findall(r'[A-Za-z0-9]', c))
        if chinese <= 4 and latin_digit >= 2 and not re.match(r'^\d+(\.\d+)*', c):
            return True
    return False


def is_body_start(text: str) -> bool:
    c = compact(clean_text(text))
    return bool(re.fullmatch(r'1项目概述', c) or re.fullmatch(r'1[\.、]?项目概述', c))


def heading_level(text: str):
    t = clean_text(text)
    if re.match(r'^\d+\s+\S+', t) and len(t) <= 28:
        return 2
    match = re.match(r'^(\d+(?:\.\d+){1,4})\s*\S+', t)
    if match and len(t) <= 45:
        depth = match.group(1).count('.') + 1
        return min(depth + 1, 4)
    return None


def looks_like_code(text: str) -> bool:
    t = text.strip()
    if re.match(r'^(\$|#)\s+', t):
        return True
    if re.match(r'^(ping|curl|chroot|source|sed|nohup|gsql|gs\s+guc|create\s+user|alter\s+user|SELECT\b|cat\s+)\b', t, re.I):
        return True
    if (';' in t or '|' in t or '>' in t) and re.search(r'\b(gs|gsql|sed|grep|CREATE|ALTER|SELECT|TABLE|INDEX)\b', t, re.I):
        return True
    return False


def escape_md_cell(text: str) -> str:
    return text.replace('\\', '\\\\').replace('|', '\\|').replace('\n', '<br>')


def cell_lines(cell):
    lines = []
    for paragraph in cell.paragraphs:
        t = clean_text(paragraph.text, cell=True)
        if t and not is_artifact(t, cell=True):
            lines.append(t)
    if not lines:
        t = clean_text(cell.text, cell=True)
        if t and not is_artifact(t, cell=True):
            lines.append(t)
    dedup = []
    for line in lines:
        if not dedup or dedup[-1] != line:
            dedup.append(line)
    return dedup


def table_to_markdown(src_table):
    rows = []
    for row in src_table.rows:
        vals = []
        for cell in row.cells:
            vals.append('\n'.join(cell_lines(cell)))
        while vals and not vals[-1].strip():
            vals.pop()
        if any(v.strip() for v in vals):
            rows.append(vals)
    if not rows:
        return []
    joined = compact(''.join(''.join(r) for r in rows))
    if len(rows) <= 3 and re.search(r'[℃③②]', joined):
        return []
    if len(rows) <= 3 and re.search(r'(BGeser|oonore|蜗|昆多项|靠业能)', joined, re.I):
        return []
    max_cols = max(len(r) for r in rows)
    if max_cols < 2:
        paras = []
        for r in rows:
            txt = clean_text(' '.join(r))
            if txt and not is_artifact(txt):
                paras.append(txt)
        return paras
    padded = [r + [''] * (max_cols - len(r)) for r in rows]
    md = []
    md.append('| ' + ' | '.join(escape_md_cell(v) for v in padded[0]) + ' |')
    md.append('| ' + ' | '.join(['---'] * max_cols) + ' |')
    for r in padded[1:]:
        md.append('| ' + ' | '.join(escape_md_cell(v) for v in r) + ' |')
    return ['\n'.join(md)]


def add_text_block(lines, text, in_code):
    lvl = heading_level(text)
    is_code = looks_like_code(text)
    if is_code and not in_code:
        lines.append('```text')
        in_code = True
    elif not is_code and in_code:
        lines.append('```')
        lines.append('')
        in_code = False
    if is_code:
        lines.append(text)
    elif lvl:
        lines.append('#' * lvl + ' ' + text)
        lines.append('')
    else:
        lines.append(text)
        lines.append('')
    return in_code


def main():
    src_doc = Document(src)
    lines = []
    started = False
    paragraphs_added = 0
    code_lines_added = 0
    headings_added = 0
    tables_added = 0
    artifacts_skipped = 0
    previous = None
    in_code = False

    for block in iter_block_items(src_doc):
        if isinstance(block, Paragraph):
            txt = clean_text(block.text)
            if not started:
                if is_body_start(txt):
                    started = True
                else:
                    continue
            if is_artifact(txt):
                artifacts_skipped += 1
                continue
            if previous == txt and not heading_level(txt):
                artifacts_skipped += 1
                continue
            if heading_level(txt):
                headings_added += 1
            if looks_like_code(txt):
                code_lines_added += 1
            else:
                paragraphs_added += 1
            in_code = add_text_block(lines, txt, in_code)
            previous = txt
        elif isinstance(block, Table):
            if not started:
                continue
            if in_code:
                lines.append('```')
                lines.append('')
                in_code = False
            table_blocks = table_to_markdown(block)
            if table_blocks:
                for table_block in table_blocks:
                    lines.append(table_block)
                    lines.append('')
                tables_added += 1
                previous = None

    if in_code:
        lines.append('```')
        lines.append('')

    while lines and lines[-1] == '':
        lines.pop()

    out.write_text('\n'.join(lines) + '\n', encoding='utf-8')
    print(f'output={out}')
    print(f'headings={headings_added}')
    print(f'paragraphs={paragraphs_added}')
    print(f'code_lines={code_lines_added}')
    print(f'tables={tables_added}')
    print(f'artifacts_skipped={artifacts_skipped}')


if __name__ == '__main__':
    main()
