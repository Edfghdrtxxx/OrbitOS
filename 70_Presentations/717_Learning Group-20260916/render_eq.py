#!/usr/bin/env python3
"""Render slide math with XeLaTeX (Times New Roman + TeX Gyre Termes Math) → PNG."""
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
\definecolor{lgBlue}{HTML}{0F2F5C}
\definecolor{lgMuted}{HTML}{5F6B73}
\tikzset{
  ibox/.style={inner sep=2.2pt, draw=lgBlue, line width=0.55pt, outer sep=0pt},
  ilab/.style={font=\itshape\fontsize{9}{11}\selectfont, text=lgMuted, inner sep=1pt, align=center},
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

    work = Path(tempfile.mkdtemp(prefix=f"vf_{name}_"))
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
    # ── display ──────────────────────────────────────────────
    dict(
        name="eq_er",
        body=r"""
\begin{minipage}{6.4in}
\centering
\vspace*{0.50in}

{\fontsize{22}{26}\selectfont\color[HTML]{0F2F5C}$\ibox{Er}{E_r}=(\ibox{Ap}{A_p}/\ibox{Ac}{A_c})\,\ibox{Ep}{E_p}$}

\vspace{0.50in}
\end{minipage}
\begin{tikzpicture}[remember picture, overlay]
  \annleft{Er}{Residue kinetic energy}
  \annabove{Ap}{projectile mass number}
  \annbelow{Ac}{compound-nucleus\\mass number}
  \annright{Ep}{projectile kinetic energy}
\end{tikzpicture}
""",
        pt=10,
        color="5F6B73",
        border=8,
        passes=2,
    ),
    dict(
        name="eq_vr",
        body=r"""
\begin{minipage}{7.6in}
\centering
\vspace*{0.42in}

{\fontsize{16}{20}\selectfont\color[HTML]{174994}$\ibox{vr}{v_r} = v_{\mathrm{cm}} \;\Rightarrow\; \ibox{dv}{\Delta v} / v_p = \ibox{At}{A_t} / A_c$}

\vspace{0.42in}
\end{minipage}
\begin{tikzpicture}[remember picture, overlay]
  \annleft{vr}{residue velocity}
  \annabove{dv}{velocity mismatch}
  \annbelow{At}{target mass number}
\end{tikzpicture}
""",
        pt=10,
        color="5F6B73",
        border=8,
        passes=2,
    ),
    dict(
        name="eq_eq2",
        body=r"Eq.~2 \;·\; complete momentum transfer \;·\; $A_c = A_p + A_t$",
        pt=12,
        color="5F6B73",
    ),
    dict(
        name="eq_sigma",
        body=r"""
\begin{minipage}{7.8in}
\centering
\vspace*{0.50in}

{\fontsize{20}{24}\selectfont\color[HTML]{0F2F5C}$\ibox{sr}{\sigma_r} / \ibox{pr}{p_r} = \sqrt{\sum \ibox{pi}{p_i}^{2} / 3}\,/\, \ibox{pp}{p_p}$}

\vspace{0.50in}
\end{minipage}
\begin{tikzpicture}[remember picture, overlay]
  \annleft{sr}{residue momentum spread}
  \annabove{pr}{residue momentum}
  \annbelow{pi}{evaporated-particle\\momentum}
  \annright{pp}{projectile momentum}
\end{tikzpicture}
""",
        pt=10,
        color="5F6B73",
        border=8,
        passes=2,
    ),
    dict(
        name="eq_sigma_note",
        body=r"Eq.~5",
        pt=11,
        color="5F6B73",
    ),
    dict(
        name="eq_fe",
        body=r"""
\begin{minipage}{8.6in}
\centering
\vspace*{0.50in}

{\fontsize{18}{22}\selectfont\color[HTML]{0F2F5C}$\ibox{Fe}{F_e} = \ibox{q}{q}\,\ibox{E}{E}$\quad balances\quad $\ibox{Fm}{F_m} = q\,\ibox{v}{v}\,\ibox{B}{B}$}

\vspace{0.50in}
\end{minipage}
\begin{tikzpicture}[remember picture, overlay]
  \annleft{Fe}{electric force}
  \annabove{q}{ionic charge}
  \annbelow{E}{electric field strength}
  \annabove{Fm}{magnetic force}
  \annbelow{v}{ion velocity}
  \annright{B}{magnetic field strength}
\end{tikzpicture}
""",
        pt=10,
        color="5F6B73",
        border=8,
        passes=2,
    ),
    dict(
        name="eq_veb",
        body=r"undeflected $\Leftrightarrow$ $v = E/B$\qquad (independent of $q$ and $A$)",
        pt=16,
        color="174994",
    ),
    dict(
        name="eq_qcancel",
        body=r"Both forces scale with $q$, so charge cancels. Mass never enters the balance condition.",
        pt=12,
        color="5F6B73",
        width=9.1,
        align="center",
    ),
    # ── leads ────────────────────────────────────────────────
    dict(
        name="lead_vcm",
        body=r"The compound nucleus takes the full projectile momentum and recoils at $v_{\mathrm{cm}}$ --- slower than the unreacted beam.",
        pt=13,
        color="1A2332",
        width=9.1,
        italic=True,
    ),
    # ── content 1 cards ──────────────────────────────────────
    dict(
        name="kine_fusion_b",
        body=r"Travel at $v_{\mathrm{cm}}$. This is the velocity the filter is tuned to pass.",
        pt=12,
        color="1A2332",
        width=2.65,
    ),
    dict(
        name="kine_beam_b",
        body=r"Stays near $v_p$. The mismatch $\Delta v$ is set only by the mass ratio.",
        pt=12,
        color="1A2332",
        width=2.65,
    ),
    # ── content 2 chips + cards ──────────────────────────────
    dict(name="chip_theta", body=r"$\theta$", pt=14, color="FFFFFF", bg="black", border=1),
    dict(name="chip_omega", body=r"$\Omega$", pt=14, color="FFFFFF", bg="black", border=1),
    dict(name="chip_eps", body=r"$\varepsilon$", pt=14, color="FFFFFF", bg="black", border=1),
    dict(
        name="focus_theta_d",
        body=r"$\theta$ = lab emission half-angle --- typically $\lesssim 2^{\circ}$, so residues stay on the beam axis.",
        pt=12,
        color="1A2332",
        width=2.65,
        align="center",
    ),
    dict(
        name="focus_omega_d",
        body=r"Forward cone $\lesssim 5\,\mathrm{msr}$ --- well matched to separator acceptance.",
        pt=12,
        color="1A2332",
        width=2.65,
        align="center",
    ),
    dict(
        name="focus_eps_d",
        body=r"For heavy projectiles near the barrier, efficiencies of $20\%$--$100\%$.",
        pt=12,
        color="1A2332",
        width=2.65,
        align="center",
    ),
    # ── content 3 ────────────────────────────────────────────
    dict(
        name="hdr_aq",
        body=r"$A/q$ mass separator",
        pt=16,
        color="FFFFFF",
        bg="black",
        bold=True,
        border=1,
    ),
    dict(
        name="body_mass_sep",
        body=r"""
\textbf{Disperses by mass-over-charge}

\vspace{0.35em}
Electric and magnetic fields send each $A/q$ to a different focal-plane position.

\vspace{0.35em}
Heavy recoils ($Z \gg 1$) leave the target in many ionic charge states.

\vspace{0.35em}
\textit{You keep one or two states. Most of the yield is thrown away.}
""",
        pt=13,
        color="1A2332",
        width=4.0,
    ),
    dict(
        name="body_charge",
        body=r"""
\textbf{$q \sim 20 \pm 3$ for heavy ions}

\vspace{0.35em}
Intensity is split across $\approx 5$ charge states.

Transmission per state falls to $10\%$--$20\%$.

\vspace{0.35em}
\textit{For an unknown superheavy, even the mean charge state $\bar{q}$ is uncertain --- you may tune to the wrong peak.}
""",
        pt=13,
        color="1A2332",
        width=4.0,
    ),
    # ── content 4 cards ──────────────────────────────────────
    dict(
        name="power_allq_b",
        body=r"Every $q$ of the chosen velocity follows the same trajectory. Near-$100\%$ charge transmission.",
        pt=12,
        color="1A2332",
        width=2.65,
    ),
    dict(
        name="power_iso_b",
        body=r"Any complete-fusion residue in the velocity window is collected --- no $A/q$ splitting.",
        pt=12,
        color="1A2332",
        width=2.65,
    ),
    dict(
        name="power_beam_b",
        body=r"Unretarded projectiles suppressed by ${>}10^{16}$. Scattered beam up to $10^{12}$.",
        pt=12,
        color="1A2332",
        width=2.65,
    ),
    # ── content 5 / 6 ────────────────────────────────────────
    dict(
        name="ship_wien_b",
        body=r"Separated $E$ then $B$ --- not crossed $E \times B$. Two low-dispersion stages, not one high-dispersion stage.",
        pt=11,
        color="1A2332",
        width=2.76,
    ),
    dict(
        name="ship_current_b",
        body=r"Survives particle-$\mu$A beams ($\sim 10^{13}$ ions/s). Scattered beam is stopped on stage-2 diaphragms.",
        pt=11,
        color="1A2332",
        width=2.76,
    ),
    dict(
        name="dar_exb_h",
        body=r"Crossed $E \times B$",
        pt=13,
        color="174994",
        bold=True,
        border=1,
    ),
    dict(
        name="dar_exb_b",
        body=r"Wien filters: $E$ and $B$ occupy the same chamber, unlike SHIP's separated fields.",
        pt=11,
        color="1A2332",
        width=2.76,
    ),
    # ── content 7 151Lu ──────────────────────────────────────
    dict(
        name="hdr_lu",
        body=r"SHIP found the first ground-state proton emitter, \nuc{151}{Lu}.",
        pt=18,
        color="FFFFFF",
        bg="black",
        bold=True,
        border=1,
    ),
    dict(
        name="cap_lu",
        body=r"Fig.~13  ·  Implant-decay spectrum, \nuc{151}{Lu}",
        pt=10,
        color="8A96A0",
        border=1,
    ),
    dict(
        name="lu_flight_h",
        body=r"Flight time $< 2\,\mu\mathrm{s}$",
        pt=13,
        color="174994",
        bold=True,
        border=1,
    ),
    dict(
        name="lu_proton_h",
        body=r"$1.23\,\mathrm{MeV}$ proton line",
        pt=13,
        color="174994",
        bold=True,
        border=1,
    ),
    dict(
        name="lu_proton_b",
        body=r"Sharp isolated peak: ground-state proton emission from \nuc{151}{Lu}.",
        pt=12,
        color="1A2332",
        width=3.7,
    ),
    dict(
        name="lu_alpha_b",
        body=r"Broad shelf from backward-emitted $\alpha$ particles that deposit only part of their energy.",
        pt=12,
        color="1A2332",
        width=3.7,
    ),
    dict(
        name="lu_half_h",
        body=r"$T_{1/2} = 0.08\,\mathrm{s}$",
        pt=13,
        color="174994",
        bold=True,
        border=1,
    ),
    # ── content 8 element 108 ────────────────────────────────
    dict(
        name="cap_hs",
        body=r"Fig.~14  ·  \nuc{265}{108} from \nuc{58}{Fe} + \nuc{208}{Pb} --- four-tier $\alpha$ gating",
        pt=10,
        color="8A96A0",
        border=1,
    ),
    # ── content 9 49Mn ───────────────────────────────────────
    dict(
        name="cap_mn",
        body=r"Fig.~17  ·  Recoil-correlated prompt $\gamma$ spectrum of \nuc{49}{Mn}",
        pt=10,
        color="8A96A0",
        border=1,
    ),
    dict(
        name="mn_drip_b",
        body=r"$\nuc{12}{C}(\nuc{40}{Ca},\,p2n)\nuc{49}{Mn}$ --- discrete in-beam spectroscopy becomes possible.",
        pt=12,
        color="1A2332",
        width=3.75,
    ),
    # ── content 10 landscape ─────────────────────────────────
    dict(
        name="row_rms_w",
        body=r"Need $A/q$ at the focal plane",
        pt=12,
        color="1A2332",
        border=1,
    ),
    dict(
        name="row_rms_n",
        body=r"Charge-state splitting; need to know $\bar{q}$",
        pt=12,
        color="1A2332",
        border=1,
    ),
    dict(
        name="row_rf_n",
        body=r"Needs sharp $\mathrm{ns}$ beam pulsing",
        pt=12,
        color="1A2332",
        border=1,
    ),
    dict(
        name="row_frag_w",
        body=r"Relativistic $E/u \gtrsim 100\,\mathrm{MeV}$",
        pt=12,
        color="1A2332",
        border=1,
    ),
    dict(
        name="ship_cond_b",
        body=r"$E$-field deflects the primary beam at once. The beam never strikes the plates.",
        pt=11,
        color="1A2332",
        width=2.76,
    ),
    dict(
        name="dar_gamma_h",
        body=r"$\gamma$ array at target",
        pt=13,
        color="174994",
        bold=True,
        border=1,
    ),
    dict(
        name="dar_gamma_b",
        body=r"A high-efficiency germanium array around the target enables prompt recoil-$\gamma$ coincidences.",
        pt=11,
        color="1A2332",
        width=2.76,
    ),
    dict(
        name="hs_ungated_b",
        body=r"Raw $\alpha$ spectrum between beam pulses --- background dominates.",
        pt=10,
        color="1A2332",
        width=2.88,
    ),
    dict(
        name="hs_daughter_b",
        body=r"Parent--daughter $\alpha$ steps prove the isotope. SHIP never measured $A$ in flight.",
        pt=10,
        color="1A2332",
        width=2.88,
    ),
    dict(
        name="mn_tag_b",
        body=r"Keep only $\gamma$ rays in coincidence with a velocity-selected recoil.",
        pt=12,
        color="1A2332",
        width=3.75,
    ),
    dict(
        name="mn_why_b",
        body=r"The target $\gamma$ array is central to this design, not an add-on.",
        pt=12,
        color="1A2332",
        width=3.75,
    ),
    dict(
        name="contrib_decay",
        body=r"Mass is not measured in flight --- $\alpha$-decay chains and recoil-$\gamma$ coincidences identify the isotope.",
        pt=13,
        color="1A2332",
        width=7.7,
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
