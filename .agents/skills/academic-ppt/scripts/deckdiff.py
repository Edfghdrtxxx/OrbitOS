"""deckdiff.py A.pptx B.pptx — shape-level diff (text, geometry, fill, shadow, notes, images) + B's PowerPoint comments."""
import sys, hashlib
from pptx import Presentation
from lxml import etree
E = 914400
NS = {"a": "http://schemas.openxmlformats.org/drawingml/2006/main"}

def sig(sh):
    el = sh._element
    fill = el.xpath(".//p:spPr/a:solidFill/a:srgbClr/@val") if hasattr(el, "xpath") else []
    shd = bool(el.xpath(".//a:effectLst/a:outerShdw"))
    img = hashlib.md5(sh.image.blob).hexdigest()[:8] if sh.shape_type == 13 else ""
    txt = sh.text_frame.text if sh.has_text_frame else ""
    geo = tuple(round((v or 0) / E, 2) for v in (sh.left, sh.top, sh.width, sh.height))
    return dict(name=sh.name, txt=txt, geo=geo, fill=fill[:1], shadow=shd, img=img)

def deck(path):
    p = Presentation(path)
    out = []
    for s in p.slides:
        notes = s.notes_slide.notes_text_frame.text if s.has_notes_slide and s.notes_slide.notes_text_frame else ""
        out.append(({sh.shape_id: sig(sh) for sh in s.shapes}, notes))
    return out

def comments(path):
    """(slide, text) for legacy and modern PowerPoint comments."""
    out = []
    for i, s in enumerate(Presentation(path).slides, 1):
        for r in s.part.rels.values():
            if not r.is_external and r.reltype.endswith("/comments"):
                for cm in etree.fromstring(r.target_part.blob).xpath("//*[local-name()='cm']"):
                    out.append((i, " ".join(cm.xpath(".//*[local-name()='text' or local-name()='t']/text()"))))
    return out

A, B = deck(sys.argv[1]), deck(sys.argv[2])
print(f"slides {len(A)} -> {len(B)}")
for i in range(max(len(A), len(B))):
    if i >= len(A) or i >= len(B):
        print(f"[slide {i+1}] only in {'B' if i >= len(A) else 'A'}"); continue
    (a, an), (b, bn) = A[i], B[i]
    lines = []
    for sid in sorted(set(a) | set(b)):
        if sid not in b: lines.append(f"  - removed {sid} {a[sid]['name']} {a[sid]['txt'][:60]!r}")
        elif sid not in a: lines.append(f"  + added {sid} {b[sid]['name']} {b[sid]['geo']} fill={b[sid]['fill']} shadow={b[sid]['shadow']} {b[sid]['txt'][:80]!r}")
        else:
            for k in ("txt", "geo", "fill", "shadow", "img"):
                if a[sid][k] != b[sid][k]:
                    lines.append(f"  ~ {sid} {b[sid]['name']} {k}: {str(a[sid][k])[:90]!r} -> {str(b[sid][k])[:90]!r}")
    if an != bn: lines.append(f"  ~ notes: {bn[:120]!r}")
    if lines: print(f"[slide {i+1}]"); print("\n".join(lines))
for i, t in comments(sys.argv[2]): print(f"[slide {i}] comment: {t[:120]!r}")
