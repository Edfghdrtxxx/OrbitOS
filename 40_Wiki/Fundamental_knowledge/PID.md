---
area: "[[Physics]]"
tags:
  - detector
  - nuclear-physics
  - analysis
created: 2026-03-14
last_reviewed:
next_review: 2026-03-14
review_interval: 0
---
# PID

## Definition

Particle Identification (PID) is the process of determining the nuclear charge $Z$ and mass number $A$ of detected particles by combining multiple independent measurements such as energy loss ($\Delta E$), total energy ($E$), time of flight (TOF), and magnetic rigidity ($B\rho$).

## Key Points

- Classical PID methods include the [[ΔE-E Method]], [[Bethe-Bloch Formula|Bethe-Bloch]] $\mathrm{d}E/\mathrm{d}x$ analysis, and $B\rho$–TOF techniques using [[PPAC]] and [[Scintillation Detector|plastic scintillators]]
- PID spectra are typically displayed as 2D plots (e.g., $\Delta E$ vs. TOF, or $Z$ vs. $A/Q$) where isotopes form distinct clusters
- Machine learning approaches (ResNet, CNN) are emerging as alternatives to traditional cut-based PID, particularly for cases with overlapping distributions or [[Pile-up|pile-up]] contamination
- Quality of PID depends critically on detector calibration, [[Time Resolution|timing resolution]], and [[Energy Resolution|energy resolution]]

## Examples

- In the [[BigRIPS]] separator, PID combines $B\rho$ from position measurements at [[PPAC|PPACs]], TOF from [[Scintillation Detector|plastic scintillators]], and $\Delta E$ from an [[Ionisation Chamber|ion chamber]]
- In [[Time Projection Chamber|TPC]] experiments, PID uses [[dE-dx|$\mathrm{d}E/\mathrm{d}x$]] measured along particle tracks combined with silicon detector energy deposits

## Related Concepts

- [[ΔE-E Method]]
- [[Bethe-Bloch Formula]]
- [[dE-dx]]
- [[Ionisation Chamber]]
- [[Time Projection Chamber]]
- [[Silicon Detector]]

## References

- T. Kubo, "In-flight RI beam separator BigRIPS at RIKEN," Nucl. Instrum. Methods B 204 (2003) 97
