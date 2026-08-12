#!/usr/bin/env python3
"""Generate angular_acceptance.{jpg,png,svg} — continuous RIB beamline schematic.

Geometry (physics-correct, single production origin):
  primary beam (before target only) → target → projectile fragments
  → entrance aperture (θ_acc ≈ r/L) → spectrometer (Bρ).

Palette: Claude design (50_Resources/Design/DESIGN-claude.md).
"""
from __future__ import annotations

from pathlib import Path

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch, Arc, Rectangle
import numpy as np

# --- Claude design tokens ---
CANVAS = "#faf9f5"
SURFACE = "#efe9de"
SURFACE_SOFT = "#f5f0e8"
INK = "#141413"
BODY = "#3d3d3a"
MUTED = "#6c6a64"
CORAL = "#cc785c"
NAVY = "#181715"
TAUPE = "#6b6358"
ON_DARK = "#faf9f5"
ON_DARK_SOFT = "#a09d96"
HAIRLINE = "#e6dfd8"

OUT_DIR = Path(__file__).resolve().parent
STEM = "angular_acceptance"


def draw() -> plt.Figure:
    fig, ax = plt.subplots(figsize=(12.72, 5.785), dpi=200)
    fig.patch.set_facecolor(CANVAS)
    ax.set_facecolor(CANVAS)
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 48)
    ax.set_aspect("equal")
    ax.axis("off")

    # Title
    ax.text(
        50, 45.6,
        "Angular acceptance of a fragment separator",
        ha="center", va="center",
        fontsize=16, color=INK,
        fontfamily="serif",
    )
    ax.text(
        50, 43.4,
        r"Lab side view  ·  every fragment trajectory starts at the production point in the target  ·  $\theta \approx p_t/p_\parallel$",
        ha="center", va="center",
        fontsize=8.2, color=MUTED,
        fontfamily="sans-serif",
    )

    # Main card
    card = FancyBboxPatch(
        (2.5, 7.2), 95, 34.5,
        boxstyle="round,pad=0.3,rounding_size=1.2",
        facecolor=SURFACE_SOFT, edgecolor=HAIRLINE, linewidth=1.0,
        zorder=0,
    )
    ax.add_patch(card)

    # --- Beamline geometry (figure coords) ---
    y0 = 24.0  # optic axis
    x_primary_end = 16.5
    x_target = 18.0
    target_w, target_h = 2.2, 14.0
    x_prod = x_target + target_w / 2  # production point (target mid-plane)
    y_prod = y0

    x_ap_face = 58.0  # upstream face of aperture block
    ap_half_h = 2.6  # clear half-height r (figure units)
    ap_block_w = 5.5
    ap_block_half_outer = 9.5

    x_spec = 72.0
    spec_w, spec_h = 18.0, 16.0

    L = x_ap_face - x_prod  # free-flight length for θ_acc
    theta_acc = np.arctan(ap_half_h / L)

    # --- Primary beam (BEFORE target only) ---
    ax.annotate(
        "",
        xy=(x_primary_end, y0),
        xytext=(6.5, y0),
        arrowprops=dict(
            arrowstyle="-|>",
            color=TAUPE,
            lw=3.2,
            mutation_scale=14,
        ),
        zorder=3,
    )
    ax.text(
        11.2, y0 + 3.4,
        "primary beam",
        ha="center", va="bottom",
        fontsize=9.5, color=BODY, fontweight="500",
        fontfamily="sans-serif",
    )
    ax.text(
        11.2, y0 + 2.0,
        "(driver ions · before target only)",
        ha="center", va="bottom",
        fontsize=7.2, color=MUTED,
        fontfamily="sans-serif",
    )

    # --- Target ---
    ax.add_patch(
        FancyBboxPatch(
            (x_target, y0 - target_h / 2),
            target_w, target_h,
            boxstyle="round,pad=0.02,rounding_size=0.25",
            facecolor=TAUPE, edgecolor="none",
            zorder=4,
        )
    )
    ax.plot([x_prod, x_prod], [y0 + target_h / 2 + 0.3, y0 + target_h / 2 + 3.2], color=INK, lw=0.9, zorder=4)
    ax.text(
        x_prod, y0 + target_h / 2 + 4.0,
        "target",
        ha="center", va="bottom",
        fontsize=11, color=INK, fontweight="600",
        fontfamily="sans-serif",
    )
    ax.text(
        x_prod, y0 - target_h / 2 - 1.1,
        "production",
        ha="center", va="top",
        fontsize=7.5, color=MUTED,
        fontfamily="sans-serif",
    )
    ax.text(
        x_prod, y0 - target_h / 2 - 2.4,
        "(fragmentation)",
        ha="center", va="top",
        fontsize=7.5, color=MUTED,
        fontfamily="sans-serif",
    )

    # Production point
    ax.plot(x_prod, y_prod, "o", color=CORAL, markersize=7, zorder=6, markeredgecolor=INK, markeredgewidth=0.4)

    # --- Rays from single production origin ---
    # Accepted angles: within ±θ_acc; rejected: larger
    n_acc = 7
    n_rej = 4
    thetas_acc = np.linspace(-theta_acc * 0.92, theta_acc * 0.92, n_acc)
    # Rejected just outside θ_acc and farther
    thetas_rej = np.array(
        [
            -theta_acc * 1.55,
            -theta_acc * 1.22,
            theta_acc * 1.22,
            theta_acc * 1.55,
        ]
    )

    def ray_to_aperture(theta: float, accepted: bool) -> None:
        """Draw ray from production point; accepted clears opening, rejected hits face."""
        if accepted:
            # Through clear opening to spectrometer interior
            x_end = x_spec + spec_w * 0.55
            y_end = y_prod + (x_end - x_prod) * np.tan(theta)
            ax.plot(
                [x_prod, x_end],
                [y_prod, y_end],
                color=CORAL,
                lw=1.35,
                alpha=0.88,
                solid_capstyle="round",
                zorder=2,
            )
        else:
            # Hit aperture face outside clear opening
            y_hit = y_prod + (x_ap_face - x_prod) * np.tan(theta)
            # Clamp hit to outer face (not past block outer height)
            y_hit = float(np.clip(y_hit, y0 - ap_block_half_outer + 0.4, y0 + ap_block_half_outer - 0.4))
            # If tan would place inside clear opening, force to edge of solid face
            if abs(y_hit - y0) < ap_half_h:
                y_hit = y0 + np.sign(theta) * (ap_half_h + 1.1)
            ax.plot(
                [x_prod, x_ap_face],
                [y_prod, y_hit],
                color=MUTED,
                lw=1.05,
                alpha=0.55,
                solid_capstyle="round",
                zorder=2,
            )
            # Reject mark at face
            s = 0.55
            ax.plot(
                [x_ap_face - s, x_ap_face + s],
                [y_hit - s, y_hit + s],
                color=MUTED, lw=1.2, alpha=0.85, zorder=5,
            )
            ax.plot(
                [x_ap_face - s, x_ap_face + s],
                [y_hit + s, y_hit - s],
                color=MUTED, lw=1.2, alpha=0.85, zorder=5,
            )

    for th in thetas_acc:
        ray_to_aperture(float(th), accepted=True)
    for th in thetas_rej:
        ray_to_aperture(float(th), accepted=False)

    # θ_acc arc + label (on upper accepted edge)
    arc_r = 9.5
    arc = Arc(
        (x_prod, y_prod),
        2 * arc_r, 2 * arc_r,
        angle=0,
        theta1=0,
        theta2=np.degrees(theta_acc),
        color=INK,
        lw=1.2,
        zorder=5,
    )
    ax.add_patch(arc)
    ax.annotate(
        r"$\theta_{\mathrm{acc}}$",
        xy=(x_prod + arc_r * np.cos(theta_acc * 0.55), y_prod + arc_r * np.sin(theta_acc * 0.55)),
        xytext=(x_prod + 7.5, y_prod + 6.8),
        fontsize=10, color=INK, fontfamily="serif",
        arrowprops=dict(arrowstyle="-", color=INK, lw=0.7),
        zorder=6,
    )

    # Fragment labels
    ax.text(
        36, y0 + 11.2,
        "projectile fragments",
        ha="center", va="bottom",
        fontsize=8.5, color=BODY, fontweight="500",
        fontfamily="sans-serif",
    )
    ax.text(
        36, y0 + 9.8,
        "(secondary · only after target)",
        ha="center", va="bottom",
        fontsize=7.0, color=MUTED,
        fontfamily="sans-serif",
    )
    ax.text(
        42, y0 + 13.0,
        r"rejected: $|\theta| > \theta_{\mathrm{acc}}$",
        ha="center", va="bottom",
        fontsize=7.5, color=MUTED,
        fontfamily="sans-serif",
    )
    ax.text(
        36, y0 - 8.5,
        r"accepted: $|\theta| < \theta_{\mathrm{acc}}$",
        ha="center", va="top",
        fontsize=8.0, color=CORAL, fontweight="500",
        fontfamily="sans-serif",
    )

    # --- Entrance aperture (solid frame + clear opening) ---
    # Outer block
    ax.add_patch(
        Rectangle(
            (x_ap_face, y0 - ap_block_half_outer),
            ap_block_w, 2 * ap_block_half_outer,
            facecolor=NAVY, edgecolor="none",
            zorder=3,
        )
    )
    # Clear opening (cut out with canvas-colored rect)
    ax.add_patch(
        Rectangle(
            (x_ap_face - 0.05, y0 - ap_half_h),
            ap_block_w + 0.1, 2 * ap_half_h,
            facecolor=SURFACE_SOFT, edgecolor="none",
            zorder=3.5,
        )
    )
    # r dimension at aperture
    ax.annotate(
        "",
        xy=(x_ap_face + ap_block_w * 0.55, y0 + ap_half_h),
        xytext=(x_ap_face + ap_block_w * 0.55, y0 - ap_half_h),
        arrowprops=dict(arrowstyle="<->", color=BODY, lw=0.9, mutation_scale=8),
        zorder=6,
    )
    ax.text(
        x_ap_face + ap_block_w * 0.55 + 1.3, y0,
        r"$r$",
        ha="left", va="center",
        fontsize=10, color=BODY, fontfamily="serif",
        zorder=6,
    )
    ax.annotate(
        "entrance aperture\n(clear half-height $r$)",
        xy=(x_ap_face + ap_block_w * 0.5, y0 + ap_block_half_outer),
        xytext=(x_ap_face + ap_block_w * 0.5, y0 + ap_block_half_outer + 4.2),
        ha="center", va="bottom",
        fontsize=7.5, color=BODY,
        fontfamily="sans-serif",
        arrowprops=dict(arrowstyle="-", color=MUTED, lw=0.7),
        zorder=6,
    )

    # --- Spectrometer ---
    ax.add_patch(
        FancyBboxPatch(
            (x_spec, y0 - spec_h / 2),
            spec_w, spec_h,
            boxstyle="round,pad=0.05,rounding_size=0.4",
            facecolor=NAVY, edgecolor="none",
            zorder=3,
        )
    )
    ax.text(
        x_spec + spec_w / 2, y0 + 1.0,
        "spectrometer",
        ha="center", va="center",
        fontsize=9.5, color=ON_DARK, fontweight="600",
        fontfamily="sans-serif",
        zorder=4,
    )
    ax.text(
        x_spec + spec_w / 2, y0 - 1.4,
        r"RIB separator · $B\rho$",
        ha="center", va="center",
        fontsize=7.5, color=ON_DARK_SOFT,
        fontfamily="sans-serif",
        zorder=4,
    )

    # Spectrometer system bracket
    br_y = 10.0
    ax.annotate(
        "",
        xy=(x_ap_face, br_y),
        xytext=(x_spec + spec_w, br_y),
        arrowprops=dict(arrowstyle="-", color=MUTED, lw=0.9),
        zorder=4,
    )
    ax.plot([x_ap_face, x_ap_face], [br_y - 0.4, br_y + 0.4], color=MUTED, lw=0.9)
    ax.plot([x_spec + spec_w, x_spec + spec_w], [br_y - 0.4, br_y + 0.4], color=MUTED, lw=0.9)
    ax.text(
        (x_ap_face + x_spec + spec_w) / 2, br_y - 1.3,
        "spectrometer system  (angular window at aperture + rigidity selection downstream)",
        ha="center", va="top",
        fontsize=7.0, color=MUTED,
        fontfamily="sans-serif",
    )

    # --- L dimension + formula ---
    L_y = 12.6
    ax.annotate(
        "",
        xy=(x_ap_face, L_y),
        xytext=(x_prod, L_y),
        arrowprops=dict(arrowstyle="<->", color=BODY, lw=0.95, mutation_scale=9),
        zorder=5,
    )
    # Formula pill
    pill = FancyBboxPatch(
        (28.5, L_y - 1.55), 22.5, 3.1,
        boxstyle="round,pad=0.15,rounding_size=0.5",
        facecolor=CANVAS, edgecolor=HAIRLINE, linewidth=0.9,
        zorder=5,
    )
    ax.add_patch(pill)
    ax.text(
        39.75, L_y + 0.35,
        r"$\theta_{\mathrm{acc}} = \arctan\!\left(\frac{r}{L}\right) \approx \frac{r}{L}$  (geometric half-acceptance)",
        ha="center", va="center",
        fontsize=7.3, color=BODY,
        fontfamily="sans-serif",
        zorder=6,
    )
    ax.text(
        39.75, L_y - 0.85,
        r"$L$  (production point $\rightarrow$ aperture face)",
        ha="center", va="center",
        fontsize=6.8, color=MUTED,
        fontfamily="sans-serif",
        zorder=6,
    )

    # Footer strip
    footer = FancyBboxPatch(
        (2.5, 1.5), 95, 4.2,
        boxstyle="round,pad=0.2,rounding_size=0.8",
        facecolor=SURFACE, edgecolor=HAIRLINE, linewidth=0.8,
        zorder=0,
    )
    ax.add_patch(footer)
    ax.text(
        50, 3.6,
        r"primary beam $\rightarrow$ target $\rightarrow$ projectile fragments  ·  only $|\theta| < \theta_{\mathrm{acc}}$ clear the aperture into the spectrometer  ·  $\theta \approx p_t/p_\parallel$",
        ha="center", va="center",
        fontsize=7.8, color=BODY,
        fontfamily="sans-serif",
    )

    fig.subplots_adjust(left=0.01, right=0.99, top=0.99, bottom=0.01)
    return fig


def main() -> None:
    fig = draw()
    png_path = OUT_DIR / f"{STEM}.png"
    jpg_path = OUT_DIR / f"{STEM}.jpg"
    svg_path = OUT_DIR / f"{STEM}.svg"

    fig.savefig(png_path, dpi=200, facecolor=CANVAS, edgecolor="none")
    fig.savefig(jpg_path, dpi=200, facecolor=CANVAS, edgecolor="none", pil_kwargs={"quality": 92})
    fig.savefig(svg_path, facecolor=CANVAS, edgecolor="none")
    plt.close(fig)

    for p in (jpg_path, png_path, svg_path):
        print(f"wrote {p} ({p.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
