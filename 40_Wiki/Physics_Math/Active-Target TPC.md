---
area: "[[Physics]]"
tags: [detector, TPC, nuclear-physics]
created: 2026-03-14
last_reviewed:
next_review: 2026-03-14
review_interval: 0
---
# Active-Target TPC

> [!important] All math expressions, equations, and formulas **must** use LaTeX notation (`$...$` for inline, `$$...$$` for display blocks).

## Definition

An Active-Target Time Projection Chamber (AT-TPC) is a [[GEM Detector]]-based particle detector in which the detector gas itself serves simultaneously as both the tracking medium and the reaction target, eliminating the need for a separate solid or liquid target. This design maximizes the effective target thickness and provides $4\pi$ solid-angle coverage for low-energy nuclear reaction products that would otherwise stop in a conventional target.

## Key Points

- **Dual-role gas:** The fill gas (e.g., ${}^{4}\text{He}$, $\text{d}_2$, isobutane mixtures) acts as the target nucleus for the beam and as the ionization medium for [[Track Reconstruction]], giving near-unity geometric efficiency for short-range recoils.
- **Luminosity vs. resolution trade-off:** Higher gas pressure increases the target thickness (luminosity) but degrades spatial resolution due to increased straggling and diffusion — typical operating pressures range from ~50 to ~500 Torr.
- **3D tracking:** Ionization electrons drift toward a segmented pad plane; the $(x, y)$ position comes from the pad hits and $z$ from the drift time (via [[TDC]]), enabling full 3D vertex and track reconstruction with methods like [[Hough Transform]], [[RANSAC]], or [[Kalman Filter]].
- **Key applications:** Resonant scattering, transfer reactions, and [[Coulomb Excitation]] measurements on exotic (radioactive) beams at facilities like RIBF (RIKEN) and FRIB, where beam intensities are too low for conventional thick-target experiments.
- **Electronics chain:** Signals from the pad plane are digitized by [[ADC]] and [[TDC]] modules, read out through a [[DAQ]] system, often using [[FPGA]]-based or [[ASIC]]-based front-end electronics such as GET (General Electronics for TPCs).

## Examples

- **MAIKo** (Kyoto/RCNP): A small AT-TPC optimized for missing-mass spectroscopy of direct reactions on light nuclei.
- **AT-TPC at FRIB** (MSU): A large-volume active-target detector used for low-energy reactions with rare-isotope beams, employing a Micromegas amplification stage and the GET electronics system.

## Related Concepts

- [[GEM Detector]]
- [[Track Reconstruction]]
- [[Bethe-Bloch Formula]]
- [[Energy Resolution]]
- [[DAQ]]
- [[Silicon Photomultiplier]]
- [[Dead Time]]
- [[Coulomb Excitation]]
- [[Nuclear Matrix Element]]
- [[Neutrinoless Double-Beta Decay]]

## References

- S. Beceiro-Novo et al., "Active targets and time projection chambers for experiments in nuclear structure and nuclear astrophysics," *Progress in Particle and Nuclear Physics* **84** (2015) 124–165.
- T. Roger et al., "Demonstrator detection system for the Active Target and Time Projection Chamber (AT-TPC)," *NIM A* **895** (2018) 126–134.
