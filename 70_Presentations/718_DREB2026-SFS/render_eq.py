#!/usr/bin/env python3
"""DREB2026 deck math: XeLaTeX (Times New Roman + TeX Gyre Termes Math) → PNG. Copied from 717 (in-eq \\ibox callouts)."""
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
\usepackage{amsmath}
\usepackage{array}
\usepackage{tikz}
\usetikzlibrary{tikzmark,arrows.meta,calc}
\setmainfont{Times New Roman}
\setmathfont{texgyretermes-math.otf}
\newcommand{\nuc}[2]{\ensuremath{{}^{#1}\mathrm{#2}}}
\definecolor{lgBlue}{HTML}{1B2D4F}
\definecolor{lgMuted}{HTML}{5B6472}
\tikzset{
  ibox/.style={inner sep=2.2pt, draw=lgBlue, line width=0.55pt, outer sep=0pt},
  ilab/.style={font=\fontsize{11}{13}\selectfont, text=lgMuted, inner sep=1pt, align=center},
  iarr/.style={lgMuted, line width=0.55pt, -{Latex[length=3.8pt]}},
}
\newcommand{\ibox}[2]{\tikzmarknode[ibox]{#1}{#2}}
\newcommand{\annleft}[2]{%
  \node[ilab, anchor=east, align=right] (#1L) at ([xshift=-8pt]#1.west) {#2};%
  \draw[iarr] (#1L.east) -- (#1.west);%
}
\newcommand{\annright}[2]{%
  \node[ilab, anchor=west, align=left] (#1R) at ([xshift=8pt]#1.east) {#2};%
  \draw[iarr] (#1R.west) -- (#1.east);%
}
\newcommand{\annabove}[2]{%
  \node[ilab, anchor=south] (#1A) at ([yshift=9pt]#1.north) {#2};%
  \draw[iarr] (#1A.south) -- (#1.north);%
}
\newcommand{\annbelow}[2]{%
  \node[ilab, anchor=north, align=center] (#1B) at ([yshift=-9pt]#1.south) {#2};%
  \draw[iarr] (#1B.north) -- (#1.south);%
}
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

    work = Path(tempfile.mkdtemp(prefix=f"dreb_{name}_"))
    try:
        (work / "eq.tex").write_text(tex, encoding="utf-8")
        npass = int(spec.get("passes") or (2 if r"\ibox" in spec["body"] else 1))
        proc = None
        for i in range(npass):
            args = [XELATEX, "-interaction=nonstopmode"]
            if i + 1 == npass:
                args.append("-halt-on-error")
            args.append("eq.tex")
            proc = subprocess.run(
                args,
                cwd=work,
                capture_output=True,
                text=True,
                timeout=90,
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
        if spec.get("trim", r"\ibox" in spec["body"]):
            # Callouts need a padded page; crop to ink so the PNG places at 1:1.
            x0, y0, x1, y1 = img.getchannel("A").getbbox()
            pad = round(DPI * 0.03)
            img = img.crop((max(x0 - pad, 0), max(y0 - pad, 0), min(x1 + pad, img.width), min(y1 + pad, img.height)))
            w_in, h_in = img.width / DPI, img.height / DPI
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
    dict(
        name="eq_minv",
        body=r"""
\begin{minipage}{6.2in}
\centering
\vspace*{0.55in}

{\fontsize{22}{26}\selectfont\color[HTML]{111827}$\ibox{Ms}{M^{*}} = \sqrt{\bigl(\ibox{E9}{E_{\mathrm{Be}}} + \ibox{En}{E_{n}}\bigr)^{2} - \bigl|\ibox{p9}{\vec{p}_{\mathrm{Be}}} + \ibox{pn}{\vec{p}_{n}}\bigr|^{2}}$}

\vspace{0.46in}
\end{minipage}
\begin{tikzpicture}[remember picture, overlay]
  \annleft{Ms}{invariant mass\\of $^{10}$Be$^{*}$}
  \node[ilab, anchor=north] (BeL) at ($(E9.south)!0.5!(p9.south) + (0,-11pt)$) {$^{9}$Be: SAMURAI tracking ($B\rho$, TOF)};
  \draw[iarr] (BeL.north) -- (E9.south);
  \draw[iarr] (BeL.north) -- (p9.south);
  \node[ilab, anchor=south] (nL) at ($(En.north)!0.5!(pn.north) + (0,22pt)$) {neutron: NEBULA (TOF, hit position)};
  \draw[iarr] (nL.south) -- (En.north);
  \draw[iarr] (nL.south) -- (pn.north);
\end{tikzpicture}
""",
        pt=10,
        color="5B6472",
        border=8,
        passes=2,
    ),
    dict(
        name="eq_ex",
        body=r"""
\begin{minipage}{6.2in}
\centering
\vspace*{0.05in}

{\fontsize{22}{26}\selectfont\color[HTML]{111827}$E_{x} = \ibox{Sn}{S_{n}} + E_{\mathrm{rel}}, \qquad \ibox{Er}{E_{\mathrm{rel}}} = M^{*} - m(^{9}\mathrm{Be}) - m_{n}$}

\vspace{0.62in}
\end{minipage}
\begin{tikzpicture}[remember picture, overlay]
  \annbelow{Sn}{neutron separation\\energy, 6.812 MeV}
  \annbelow{Er}{total kinetic energy of $^{9}$Be + n\\in their center-of-mass frame}
\end{tikzpicture}
""",
        pt=10,
        color="5B6472",
        border=8,
        passes=2,
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
