#!/usr/bin/env python3
"""Rigorous projectile-fragmentation RIB beamline schematic.

Physics locked to standard in-flight separation (Morrissey & Sherrill;
Geissel FRS; BigRIPS / A1900 / LISE practice):

  primary HI → Be/C production target → mixed forward projectile fragments
  → Bρ–ΔE–Bρ (momentum-loss achromat) → selected secondary beam (RIB)
  → secondary (reaction) target

Fixes vs earlier generative draft:
  - mid-volume production (not exit-face-only)
  - narrow forward cone (not wide spray)
  - Bρ–ΔE–Bρ with bent design orbit (not straight dipole + “forward selection”)
  - residual primary dump after first Bρ
  - standard terminology throughout

Palette: Claude design tokens (matches angular_acceptance_make.py).
"""
from __future__ import annotations

from pathlib import Path

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import (
    FancyBboxPatch,
    FancyArrowPatch,
    Rectangle,
    Polygon,
    Circle,
    Arc,
    PathPatch,
)
from matplotlib.path import Path as MplPath
from matplotlib import patheffects as pe
import numpy as np

# --- Claude design tokens ---
CANVAS = "#faf9f5"
SURFACE = "#efe9de"
SURFACE_SOFT = "#f5f0e8"
INK = "#141413"
BODY = "#3d3d3a"
MUTED = "#6c6a64"
CORAL = "#cc785c"
CORAL_SOFT = "#e8b4a4"
NAVY = "#181715"
NAVY_SOFT = "#2a2826"
TAUPE = "#6b6358"
ON_DARK = "#faf9f5"
HAIRLINE = "#e6dfd8"
WEDGE = "#c4b8a8"
ACCEPT = "#8b5e4b"
REJECT = "#a09d96"
BLUE_RIB = "#3d5a80"  # selected secondary beam accent

OUT_DIR = Path(__file__).resolve().parent
STEM = "projectile_fragmentation_beamline"


def _label(ax, x, y, text, *, fontsize=8.0, color=BODY, ha="center", va="center",
           outline=False, **kw):
    t = ax.text(x, y, text, ha=ha, va=va, fontsize=fontsize, color=color, **kw)
    if outline:
        t.set_path_effects([pe.withStroke(linewidth=2.2, foreground=NAVY)])
    return t


def draw() -> plt.Figure:
    # Wide presentation frame (matches prior 1280×720-ish aspect)
    fig, ax = plt.subplots(figsize=(14.0, 7.2), dpi=200)
    fig.patch.set_facecolor(CANVAS)
    ax.set_facecolor(CANVAS)
    ax.set_xlim(0, 140)
    ax.set_ylim(0, 72)
    ax.set_aspect("equal")
    ax.axis("off")

    # ---- Title ----
    ax.text(
        70, 68.2,
        "Projectile fragmentation — in-flight RIB production",
        ha="center", va="center",
        fontsize=17, color=INK, fontweight="semibold",
        fontfamily="sans-serif",
    )
    ax.text(
        70, 65.0,
        r"Primary HI $\rightarrow$ production target $\rightarrow$ projectile fragments "
        r"$\rightarrow$ fragment separator ($B\rho$–$\Delta E$–$B\rho$) "
        r"$\rightarrow$ secondary beam $\rightarrow$ reaction target",
        ha="center", va="center",
        fontsize=8.0, color=MUTED, fontfamily="sans-serif",
    )

    # Main card
    card = FancyBboxPatch(
        (2.0, 6.0), 136, 56.5,
        boxstyle="round,pad=0.35,rounding_size=1.4",
        facecolor=SURFACE_SOFT, edgecolor=HAIRLINE, linewidth=1.0, zorder=0,
    )
    ax.add_patch(card)

    y0 = 36.0  # optic axis (achromatic exit height)

    # =====================================================================
    # 1. PRIMARY BEAM
    # =====================================================================
    x_pri0, x_pri1 = 5.5, 22.0
    for dy, alpha, lw in [
        (0.0, 1.0, 1.8),
        (0.55, 0.75, 1.1),
        (-0.55, 0.75, 1.1),
        (1.05, 0.45, 0.8),
        (-1.05, 0.45, 0.8),
    ]:
        # gentle focus into target mid-plane
        ax.plot(
            [x_pri0, x_pri1],
            [y0 + dy * 1.6, y0 + dy * 0.15],
            color=CORAL, lw=lw, alpha=alpha, solid_capstyle="round", zorder=2,
        )
    ax.annotate(
        "", xy=(x_pri1 + 0.2, y0), xytext=(x_pri1 - 2.2, y0),
        arrowprops=dict(arrowstyle="-|>", color=CORAL, lw=1.4),
        zorder=3,
    )
    _label(ax, 13.5, 44.5, "primary heavy-ion beam", fontsize=8.5, color=INK)
    _label(ax, 13.5, 42.0, r"$^{48}\mathrm{Ca}$  (example)", fontsize=9.5, color=CORAL, fontweight="medium")
    _label(ax, 13.5, 28.5, "focused onto\nproduction target", fontsize=7.0, color=MUTED)

    # =====================================================================
    # 2. PRODUCTION TARGET (thin Be/C; mid-volume production)
    # =====================================================================
    tw, th = 2.6, 16.0
    xt = 23.0
    target = FancyBboxPatch(
        (xt, y0 - th / 2), tw, th,
        boxstyle="round,pad=0.05,rounding_size=0.25",
        facecolor="#f0ebe3", edgecolor=TAUPE, linewidth=1.4, zorder=4,
    )
    ax.add_patch(target)
    # mid-volume production locus
    prod = Circle((xt + tw / 2, y0), 0.55, facecolor=CORAL, edgecolor=INK, lw=0.6, zorder=6)
    ax.add_patch(prod)
    # callouts (leader ends below the two-line caption)
    ax.plot([xt + tw / 2, xt + tw / 2], [y0 + th / 2 + 0.4, 50.0], color=MUTED, lw=0.7, zorder=3)
    _label(ax, xt + tw / 2, 55.5, "thin Be/C production target", fontsize=8.3, color=INK)
    _label(ax, xt + tw / 2, 53.2, r"optimized thickness · low $Z$", fontsize=6.8, color=MUTED)
    _label(ax, xt + tw / 2, 24.0, "production\n(volume)", fontsize=7.0, color=MUTED)

    # =====================================================================
    # 3. NARROW FORWARD COCKTAIL (projectile fragments)
    # =====================================================================
    x_cone0 = xt + tw / 2
    x_cone1 = 42.5
    # accepted core (narrow)
    for ang_deg, alpha, lw in [
        (0, 0.95, 1.5),
        (2.2, 0.7, 1.0),
        (-2.2, 0.7, 1.0),
        (4.0, 0.45, 0.8),
        (-4.0, 0.45, 0.8),
        (6.0, 0.28, 0.65),
        (-6.0, 0.28, 0.65),
    ]:
        ang = np.deg2rad(ang_deg)
        ax.plot(
            [x_cone0, x_cone1],
            [y0, y0 + (x_cone1 - x_cone0) * np.tan(ang)],
            color=CORAL, lw=lw, alpha=alpha, zorder=2,
        )
    # outer rejected rays (miss separator acceptance) — dashed
    for ang_deg in (11.0, -11.0, 15.0, -15.0):
        ang = np.deg2rad(ang_deg)
        x_end = 40.0
        ax.plot(
            [x_cone0, x_end],
            [y0, y0 + (x_end - x_cone0) * np.tan(ang)],
            color=REJECT, lw=0.7, alpha=0.55, ls=(0, (2.5, 2.0)), zorder=1,
        )
    # fragment “shards” as small ticks near axis (sparse, forward)
    rng = np.random.default_rng(7)
    for _ in range(28):
        t = rng.uniform(0.15, 0.95)
        ang = rng.normal(0, 3.2)
        xx = x_cone0 + t * (x_cone1 - x_cone0)
        yy = y0 + (xx - x_cone0) * np.tan(np.deg2rad(ang))
        ax.plot(xx, yy, marker="s", markersize=rng.uniform(1.2, 2.4),
                color=CORAL, alpha=rng.uniform(0.25, 0.55),
                markeredgewidth=0, zorder=3)

    _label(
        ax, 35.5, 31.5,
        r"cocktail of projectile fragments",
        fontsize=7.8, color=CORAL, fontweight="medium",
    )
    _label(
        ax, 35.5, 29.3,
        r"$(p_\parallel,\,p_\perp)$  ·  $v \approx v_{\mathrm{beam}}$  ·  narrow cone",
        fontsize=6.6, color=MUTED,
    )
    _label(ax, 36.5, 25.5, r"rejected: large $\theta$", fontsize=6.6, color=REJECT)

    # =====================================================================
    # 4. FRAGMENT SEPARATOR — Bρ–ΔE–Bρ (bent design orbit)
    # =====================================================================
    # Separator enclosure
    sep_x0, sep_y0, sep_w, sep_h = 43.5, 18.0, 58.0, 36.0
    sep = FancyBboxPatch(
        (sep_x0, sep_y0), sep_w, sep_h,
        boxstyle="round,pad=0.25,rounding_size=1.0",
        facecolor="#f7f3ec", edgecolor=NAVY, linewidth=1.5, zorder=1,
    )
    ax.add_patch(sep)
    _label(
        ax, sep_x0 + sep_w / 2, 52.8,
        r"fragment separator  ·  momentum-loss achromat  ($B\rho$–$\Delta E$–$B\rho$)",
        fontsize=8.5, color=INK, fontweight="medium",
    )

    # --- Stage coordinates inside separator ---
    # Design orbit: slight S-bend (down then up) to show bending without huge offset
    # D1 entrance, mid (wedge), D2 exit at y0
    x_d1 = 48.0
    x_mid = 72.0
    x_d2 = 94.0
    y_mid = y0 - 5.5  # dispersive plane offset (schematic)

    # Dipole 1 block — labels at top so design orbit does not cover them
    d1 = FancyBboxPatch(
        (x_d1, y0 - 10.5), 10.5, 16.0,
        boxstyle="round,pad=0.08,rounding_size=0.4",
        facecolor=NAVY, edgecolor=NAVY, linewidth=0.5, zorder=4,
    )
    ax.add_patch(d1)
    _label(ax, x_d1 + 5.25, y0 + 3.8, "D1", fontsize=11, color="#ffffff",
           fontweight="bold", outline=True)
    _label(ax, x_d1 + 5.25, y0 + 1.4, r"$B\rho_1$", fontsize=8.5, color="#ffffff",
           outline=True)

    # Intermediate: wedge + slits
    wedge = Polygon(
        [
            (x_mid - 2.2, y_mid + 7.5),
            (x_mid + 2.2, y_mid + 5.0),
            (x_mid + 2.2, y_mid - 5.0),
            (x_mid - 2.2, y_mid - 7.5),
        ],
        closed=True, facecolor=WEDGE, edgecolor=TAUPE, lw=1.1, zorder=5,
    )
    ax.add_patch(wedge)
    # slits (vertical bars at dispersive focus)
    for sx in (x_mid - 3.6, x_mid + 3.6):
        ax.add_patch(
            Rectangle((sx - 0.25, y_mid - 3.2), 0.5, 6.4,
                      facecolor=INK, edgecolor="none", zorder=6)
        )
    _label(ax, x_mid, y_mid + 10.2, r"wedge $\Delta E$ + slits", fontsize=7.5, color=INK)
    _label(ax, x_mid, y_mid + 8.2, "(dispersive focus)", fontsize=6.5, color=MUTED)

    # Dipole 2 block — labels at top
    d2 = FancyBboxPatch(
        (x_d2 - 5.25, y0 - 8.0), 10.5, 16.0,
        boxstyle="round,pad=0.08,rounding_size=0.4",
        facecolor=NAVY, edgecolor=NAVY, linewidth=0.5, zorder=4,
    )
    ax.add_patch(d2)
    _label(ax, x_d2, y0 + 6.0, "D2", fontsize=11, color="#ffffff",
           fontweight="bold", outline=True)
    _label(ax, x_d2, y0 + 3.6, r"$B\rho_2$", fontsize=8.5, color="#ffffff",
           outline=True)

    # ---- Trajectories ----
    # Selected design orbit: enter D1 at y0, bend down to y_mid, through wedge,
    # bend back up in D2 to y0
    def cubic(p0, p1, p2, p3, n=40):
        t = np.linspace(0, 1, n)
        pts = (
            ((1 - t) ** 3)[:, None] * np.array(p0)
            + 3 * ((1 - t) ** 2)[:, None] * t[:, None] * np.array(p1)
            + 3 * (1 - t)[:, None] * (t ** 2)[:, None] * np.array(p2)
            + (t ** 3)[:, None] * np.array(p3)
        )
        return pts[:, 0], pts[:, 1]

    # selected RIB (blue) — design orbit
    xs1, ys1 = cubic(
        (43.8, y0), (x_d1 + 2, y0 - 0.5), (x_d1 + 8, y_mid + 1.5), (x_mid - 2.5, y_mid)
    )
    xs2, ys2 = cubic(
        (x_mid + 2.5, y_mid), (x_d2 - 6, y_mid + 1.2), (x_d2 - 1, y0 - 0.4), (x_d2 + 5.5, y0)
    )
    ax.plot(xs1, ys1, color=BLUE_RIB, lw=2.0, zorder=7, solid_capstyle="round")
    ax.plot(xs2, ys2, color=BLUE_RIB, lw=2.0, zorder=7, solid_capstyle="round")
    # parallel companions (acceptance envelope)
    for ddy in (0.9, -0.9):
        ax.plot(xs1, ys1 + ddy * 0.35, color=BLUE_RIB, lw=0.7, alpha=0.45, zorder=6)
        ax.plot(xs2, ys2 + ddy * 0.35, color=BLUE_RIB, lw=0.7, alpha=0.45, zorder=6)

    # wrong-Bρ rays (hit slits / walls) — gray dashed
    # high Bρ (too stiff) → less bend
    xw1, yw1 = cubic(
        (43.8, y0 + 0.8), (x_d1 + 3, y0 + 0.3), (x_d1 + 9, y0 - 1.5), (x_mid - 3.4, y_mid + 4.5)
    )
    ax.plot(xw1, yw1, color=REJECT, lw=1.0, ls=(0, (3, 2)), alpha=0.85, zorder=5)
    ax.plot(x_mid - 3.4, y_mid + 4.5, "x", color=REJECT, ms=7, mew=1.4, zorder=8)

    # low Bρ (too soft) → more bend
    xw2, yw2 = cubic(
        (43.8, y0 - 0.6), (x_d1 + 2.5, y0 - 2.0), (x_d1 + 7, y_mid - 3.5), (x_mid - 3.4, y_mid - 4.8)
    )
    ax.plot(xw2, yw2, color=REJECT, lw=1.0, ls=(0, (3, 2)), alpha=0.85, zorder=5)
    ax.plot(x_mid - 3.4, y_mid - 4.8, "x", color=REJECT, ms=7, mew=1.4, zorder=8)

    # residual primary dump after first Bρ — upper-right of D1, clear of legend
    dump_cx, dump_cy = x_d1 + 18.0, y0 + 12.2
    dump = FancyBboxPatch(
        (dump_cx - 4.4, dump_cy - 1.45), 8.8, 2.9,
        boxstyle="round,pad=0.1,rounding_size=0.3",
        facecolor="#d9d2c8", edgecolor=TAUPE, lw=0.9, zorder=5,
    )
    ax.add_patch(dump)
    _label(ax, dump_cx, dump_cy, "primary dump", fontsize=6.8, color=BODY)
    ax.annotate(
        "",
        xy=(dump_cx - 4.4, dump_cy - 0.2),
        xytext=(x_d1 + 10.5, y0 + 4.0),
        arrowprops=dict(
            arrowstyle="-|>", color=CORAL, lw=1.15,
            connectionstyle="arc3,rad=-0.32",
        ),
        zorder=6,
    )
    _label(
        ax, x_d1 + 13.8, y0 + 6.2,
        r"residual $^{48}\mathrm{Ca}$",
        fontsize=6.4, color=CORAL,
    )

    # Stage labels under separator
    _label(ax, x_d1 + 5.25, 20.5, r"1st $B\rho$ selection", fontsize=7.2, color=BODY)
    _label(ax, x_d1 + 5.25, 18.8, r"($p/q$ cut)", fontsize=6.4, color=MUTED)
    _label(ax, x_mid, 20.5, r"$Z$-sensitive $\Delta E$", fontsize=7.2, color=BODY)
    _label(ax, x_mid, 18.8, "(breaks $A/Q$ degeneracy)", fontsize=6.4, color=MUTED)
    _label(ax, x_d2, 20.5, r"2nd $B\rho$ selection", fontsize=7.2, color=BODY)
    _label(ax, x_d2, 18.8, "(achromatic focus)", fontsize=6.4, color=MUTED)

    # legend inside sep (compact) — top-left of separator card
    _label(ax, 46.0, 50.5, "selected design orbit", fontsize=6.3, color=BLUE_RIB, ha="left")
    _label(
        ax, 46.0, 48.8,
        r"wrong $B\rho$ (rejected at slits)",
        fontsize=6.3, color=REJECT, ha="left",
    )

    # =====================================================================
    # 5. SELECTED SECONDARY BEAM → REACTION TARGET
    # =====================================================================
    x_out0 = x_d2 + 5.5
    x_tgt = 128.5
    for dy, alpha, lw in [
        (0.0, 1.0, 1.7),
        (0.45, 0.65, 1.0),
        (-0.45, 0.65, 1.0),
        (0.9, 0.35, 0.75),
        (-0.9, 0.35, 0.75),
    ]:
        ax.plot(
            [x_out0, x_tgt - 1.5],
            [y0 + dy * 0.2, y0 + dy * 0.05],
            color=BLUE_RIB, lw=lw, alpha=alpha, solid_capstyle="round", zorder=3,
        )
    ax.annotate(
        "", xy=(x_tgt - 1.3, y0), xytext=(x_tgt - 3.5, y0),
        arrowprops=dict(arrowstyle="-|>", color=BLUE_RIB, lw=1.3),
        zorder=4,
    )
    _label(ax, 114.5, 42.5, "selected secondary beam (RIB)", fontsize=8.0, color=BLUE_RIB, fontweight="medium")
    _label(ax, 114.5, 40.2, r"still often a cocktail $\Rightarrow$ event-by-event PID", fontsize=6.5, color=MUTED)

    # secondary / reaction target
    stw, sth = 2.4, 14.0
    secondary = FancyBboxPatch(
        (x_tgt, y0 - sth / 2), stw, sth,
        boxstyle="round,pad=0.05,rounding_size=0.25",
        facecolor=CORAL_SOFT, edgecolor=CORAL, linewidth=1.5, zorder=4,
    )
    ax.add_patch(secondary)
    # impact star
    ax.plot(x_tgt + stw / 2, y0, marker="*", markersize=11, color=CORAL, zorder=6)
    ax.plot(
        [x_tgt + stw / 2, x_tgt + stw / 2],
        [y0 + sth / 2 + 0.3, 50.5],
        color=MUTED, lw=0.7, zorder=2,
    )
    _label(ax, x_tgt + stw / 2, 52.5, "secondary", fontsize=8.2, color=INK)
    _label(ax, x_tgt + stw / 2, 50.3, "(reaction) target", fontsize=8.2, color=INK)
    _label(ax, x_tgt + stw / 2, 24.5, "physics\nexperiment", fontsize=7.0, color=MUTED)

    # =====================================================================
    # Bottom caption bar
    # =====================================================================
    bar = FancyBboxPatch(
        (4.0, 7.5), 132, 5.5,
        boxstyle="round,pad=0.2,rounding_size=0.6",
        facecolor=SURFACE, edgecolor=HAIRLINE, linewidth=0.8, zorder=2,
    )
    ax.add_patch(bar)
    ax.text(
        70, 11.2,
        r"$B\rho = p/q$  ·  pure $B\rho$ keeps same $A/Q$ cocktail  ·  "
        r"wedge $\Delta E$ (Bethe–Bloch) breaks degeneracy  ·  "
        r"2nd $B\rho$ selects isotope  ·  delivery ideally achromatic",
        ha="center", va="center", fontsize=7.2, color=BODY, fontfamily="sans-serif",
    )
    ax.text(
        70, 9.0,
        "Schematic (not to scale). Standard method: Geissel et al. NIM B 70 (1992); "
        "Morrissey & Sherrill, Lect. Notes Phys. 651 (2004). "
        "Example primary: $^{48}$Ca on Be (e.g. BigRIPS).",
        ha="center", va="center", fontsize=6.4, color=MUTED, fontfamily="sans-serif",
    )

    # stage index ticks along bottom of card interior
    stages = [
        (13.5, "1 · primary"),
        (24.3, "2 · target"),
        (33.5, "3 · fragments"),
        (72.0, "4 · separator"),
        (114.5, "5 · RIB"),
        (129.7, "6 · reaction"),
    ]
    for x, lab in stages:
        _label(ax, x, 15.2, lab, fontsize=6.2, color=MUTED)

    fig.tight_layout(pad=0.3)
    return fig


def main() -> None:
    fig = draw()
    for ext in ("png", "jpg", "svg"):
        out = OUT_DIR / f"{STEM}.{ext}"
        fig.savefig(
            out,
            dpi=220,
            facecolor=CANVAS,
            edgecolor="none",
            bbox_inches="tight",
            pad_inches=0.15,
        )
        print(f"wrote {out}")
    plt.close(fig)


if __name__ == "__main__":
    main()
