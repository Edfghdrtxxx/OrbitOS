#!/usr/bin/env python3
"""Canonical eq renderer for /academic-ppt.

Copy into a deck folder, replace SPECS, run: python3 render_eq.py
Worked full SPECS: 70_Presentations/717_Learning Group-20260916/render_eq.py
"""
from __future__ import annotations

import json
import shutil
import subprocess
import tempfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "assets" / "eq"
DPI = 300
XELATEX = "xelatex"

PREAMBLE = r"""
\documentclass[border=2pt]{standalone}
\usepackage{fontspec}
\usepackage{unicode-math}
\usepackage{xcolor}
\usepackage{varwidth}
\setmainfont{Times New Roman}
\setmathfont{texgyretermes-math.otf}
\newcommand{\nuc}[2]{\ensuremath{{}^{#1}\mathrm{#2}}}
\setlength{\parindent}{0pt}
"""


def tint_alpha(img: Image.Image, hex_color: str) -> Image.Image:
    """Keep coverage alpha; paint every pixel the intended RGB.

    Used for white (or colored) glyphs: render black ink on a white page so
    MuPDF punches a clean alpha, then tint. Black-page chroma left a 1px fringe.
    """
    r = int(hex_color[0:2], 16)
    g = int(hex_color[2:4], 16)
    b = int(hex_color[4:6], 16)
    alpha = img.convert("RGBA").getchannel("A")
    out = Image.new("RGBA", img.size, (r, g, b, 255))
    out.putalpha(alpha)
    return out


def wrap_body(spec: dict) -> str:
    pt = spec.get("pt", 12)
    skip = pt * 1.22
    color = spec.get("color", "1A2332")
    body = spec["body"]
    parts = [rf"\fontsize{{{pt}}}{{{skip}}}\selectfont", rf"\color[HTML]{{{color}}}"]
    if spec.get("bold"):
        parts.append(r"\bfseries")
    if spec.get("italic"):
        parts.append(r"\itshape")
    inner = "\n".join(parts) + "\n" + body
    if spec.get("width"):
        align = r"\centering" if spec.get("align") == "center" else r"\raggedright"
        inner = (
            rf"\begin{{varwidth}}{{{spec['width']}in}}" "\n"
            + align + "\n"
            + inner + "\n"
            + r"\end{varwidth}"
        )
    return inner


def compile_spec(spec: dict) -> dict:
    name = spec["name"]
    bg = spec.get("bg", "white")
    border = spec.get("border", 2)
    tex = PREAMBLE.replace("[border=2pt]", f"[border={border}pt]")
    # White-on-transparent: black ink on a white page (no pagecolor).
    body_spec = spec if bg != "black" else {**spec, "color": "000000"}
    tex += r"\begin{document}" + "\n" + wrap_body(body_spec) + "\n" + r"\end{document}" + "\n"

    work = Path(tempfile.mkdtemp(prefix=f"eq_{name}_"))
    try:
        (work / "eq.tex").write_text(tex, encoding="utf-8")
        proc = subprocess.run(
            [XELATEX, "-interaction=nonstopmode", "-halt-on-error", "eq.tex"],
            cwd=work,
            capture_output=True,
            text=True,
            timeout=60,
        )
        pdf = work / "eq.pdf"
        if proc.returncode != 0 or not pdf.exists():
            log = (work / "eq.log").read_text(encoding="utf-8", errors="replace")[-2500:]
            raise RuntimeError(f"{name} xelatex failed:\n{proc.stdout[-1500:]}\n{log}")

        doc = fitz.open(pdf)
        page = doc[0]
        w_in = page.rect.width / 72.0
        h_in = page.rect.height / 72.0
        zoom = DPI / 72.0
        mat = fitz.Matrix(zoom, zoom)
        dest = OUT / f"{name}.png"
        pix = page.get_pixmap(matrix=mat, alpha=True)
        img = Image.frombytes("RGBA", (pix.width, pix.height), pix.samples)
        if bg == "black":
            img = tint_alpha(img, spec.get("color", "FFFFFF"))
        img.save(dest, "PNG")
        doc.close()
        return {
            "name": name,
            "wIn": round(w_in, 4),
            "hIn": round(h_in, 4),
            "wPx": img.size[0],
            "hPx": img.size[1],
        }
    finally:
        shutil.rmtree(work, ignore_errors=True)



SPECS = [
    # Replace with deck equations. Example:
    dict(name="eq_er", body=r"$E_r = (A_p/A_c)\, E_p$", pt=26, color="0F2F5C"),
    dict(
        name="eq_vr",
        body=r"$v_r = v_{\mathrm{cm}} \;\Rightarrow\; \Delta v / v_p = A_t / A_c$",
        pt=18,
        color="174994",
    ),
]


def main() -> None:
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    print(f"Rendering {len(SPECS)} equations → {OUT}")

    # Warm the XeLaTeX font cache once so parallel jobs do not race.
    compile_spec(dict(name="_warmup", body=r"$A$", pt=12, color="000000"))
    (OUT / "_warmup.png").unlink(missing_ok=True)

    meta = {}
    errors = []
    with ThreadPoolExecutor(max_workers=6) as pool:
        futs = {pool.submit(compile_spec, spec): spec["name"] for spec in SPECS}
        for fut in as_completed(futs):
            name = futs[fut]
            try:
                rec = fut.result()
                meta[rec["name"]] = {k: rec[k] for k in ("wIn", "hIn", "wPx", "hPx")}
                print(f"  ok  {name:16s}  {rec['wIn']:.3f} x {rec['hIn']:.3f} in")
            except Exception as e:
                errors.append((name, str(e)))
                print(f"  FAIL {name}: {e}")

    if errors:
        raise SystemExit(f"{len(errors)} render failures: {[n for n, _ in errors]}")

    ordered = {s["name"]: meta[s["name"]] for s in SPECS}
    (OUT / "meta.json").write_text(json.dumps(ordered, indent=2), encoding="utf-8")
    print(f"Wrote {len(ordered)} PNGs + meta.json")


if __name__ == "__main__":
    main()
