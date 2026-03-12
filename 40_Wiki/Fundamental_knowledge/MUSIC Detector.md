---
area: "[[Physics]]"
tags: [nuclear-instrumentation, detector, particle-identification]
created: 2026-03-12
last_reviewed:
next_review: 2026-03-12
review_interval: 0
---
# MUSIC Detector

## Definition

MUSIC (MUltiple-Sampling Ionization Chamber) is a gas-filled ionization chamber with multiple anode segments along the beam axis, providing several independent energy-loss ($\Delta E$) measurements per particle for high-resolution Z (atomic number) identification of heavy ions.

## Key Points

- **Principle**: A heavy ion traverses the gas volume, losing energy via ionization ([[Bethe-Bloch Formula|Bethe-Bloch]], $\Delta E \propto Z^2$); each anode segment independently measures $\Delta E$, and averaging $N$ samples improves Z resolution by $\sqrt{N}$
- **Segmentation**: Typically 4–8 anode segments; individual bad segments (e.g., distorted by delta electrons) can be rejected without losing the event
- **Gas choice**: Usually CF$_4$ or P10 (Ar/CH$_4$), selected for electron drift properties and appropriate stopping power at the beam energy
- **Role in PID**: Provides the $\Delta E$ (charge) measurement in the $\Delta E$–$B\rho$–ToF [[Particle Identification]] scheme used at fragment separators like [[BigRIPS]] and RIBLL

## Examples

- At [[BigRIPS]], a MUSIC detector downstream of the separator measures Z to distinguish isotopes with the same A/Z but different charge, complementing [[Time-of-Flight]] and [[Magnetic Rigidity|$B\rho$]] measurements
- At IMP's HIRFL-RIBLL, MUSIC chambers identify fragments from [[Radioactive Isotope Beam|RIB]] production reactions alongside [[Scintillation Detector|plastic scintillator]] ToF walls

## Related Concepts

- [[Bethe-Bloch Formula]]
- [[Particle Identification]]
- [[ΔE-E Method]]
- [[Time-of-Flight]]
- [[Magnetic Rigidity]]
- [[BigRIPS]]
- [[Radioactive Isotope Beam]]
- [[Dead Time]]
- [[DAQ]]

## References

- Pfützner, M. et al. (1994). *Nuclear Instruments and Methods A*, 346, 73–80 — MUSIC III at GSI
- Kimura, N. et al. (2005). *Nuclear Instruments and Methods A*, 538, 608–614 — MUSIC at RIKEN
