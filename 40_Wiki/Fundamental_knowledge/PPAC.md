---
area: "[[Physics]]"
tags:
  - detector
  - nuclear-physics
created: 2026-03-14
last_reviewed:
next_review: 2026-03-14
review_interval: 0
---
# PPAC

## Definition

A Parallel Plate Avalanche Counter (PPAC) is a gaseous detector consisting of two parallel electrode plates filled with a low-pressure gas, used for precise position and timing measurements of charged particles. It operates by detecting the avalanche of electrons produced when an incident particle ionises the gas between the plates.

## Key Points

- Provides both X and Y position information via delay-line or strip readout, with sub-millimetre spatial resolution
- Achieves timing resolution on the order of ~100 ps, making it well-suited for [[Time Resolution|time-of-flight]] measurements in fragment separators like [[BigRIPS]]
- Operates at low gas pressure (typically a few Torr of isobutane or similar), which minimises energy loss and scattering of the beam particles
- Commonly paired with [[Scintillation Detector|plastic scintillators]] for [[PID|particle identification]] via $B\rho$–TOF–$\Delta E$ methods

## Examples

- PPACs at focal planes F2 and F3 of the [[BigRIPS]] separator at [[RIKEN Nishina Center for Accelerator-Based Science (RNC)|RIKEN]] provide position and angle information for radioactive isotope beams
- In the [[RCNP]] ATPC experiment, F3 PPAC data is matched with [[Time Projection Chamber|TPC]] timestamps for event correlation

## Related Concepts

- [[Ionisation Chamber]]
- [[Time Projection Chamber]]
- [[BigRIPS]]
- [[Scintillation Detector]]
- [[PID]]

## References

- H. Kumagai et al., "Delay-line PPAC for radioactive nuclear beams," Nucl. Instrum. Methods A 470 (2001) 562
