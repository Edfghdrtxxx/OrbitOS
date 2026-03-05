---
area: "[[Physics]]"
tags: [nuclear-instrumentation, signal-processing, timing]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Constant Ratio Timing

## Definition

Constant Ratio Timing (also called Constant Fraction Timing) is a signal timing technique in nuclear physics instrumentation that triggers at a fixed fraction of a pulse's peak amplitude, eliminating amplitude-dependent [[Time Walk]] — implemented via a **[[Constant Fraction Discriminator]]** (CFD).

## Key Points

- **Mechanism**: The input signal is split — one copy attenuated by fraction *f*, the other inverted and delayed by *t_d* — then summed; the zero-crossing of the resulting bipolar signal provides amplitude-independent timing
- **Key parameters**: fraction *f* (typically 0.2–0.4) and delay *t_d* (matched to the signal rise time)
- **Origin**: Developed ~1967–1968 by Gedcke & McDonald in nuclear instrumentation labs requiring sub-nanosecond timing from [[Scintillation Detector|scintillation detectors]] and [[Photomultiplier Tube|photomultiplier tubes]] (PMTs)
- **Applications**: Critical for [[Time-of-Flight]] measurements, [[Coincidence Detection]], and particle identification in detector systems including [[Time Projection Chamber|TPCs]]
- **Modern implementations**: Digital CFD (dCFD) algorithms run in [[FPGA]] firmware, replacing analog circuits

## Examples

- In [[Gamma Spectroscopy]], a CFD on each detector channel provides precise event timestamps for coincidence gating, independent of varying gamma-ray energies
- In a TPC readout, dCFD firmware timestamps pad signals for drift-time measurement, enabling 3D track reconstruction despite wide dynamic range in [[Ionizing Radiation]] deposits

## Related Concepts

- [[Gamma Spectroscopy]]
- [[Ionizing Radiation]]
- [[Time Walk]]
- [[Time-of-Flight]]
- [[Coincidence Detection]]
- [[Scintillation Detector]]
- [[FPGA]]

## References

- Gedcke, D. A. & McDonald, W. J. (1967). "A constant fraction of pulse height trigger for optimum time resolution." *Nuclear Instruments and Methods*, 55, 377–380
- Spieler, H. (2005). *Semiconductor Detector Systems*. Oxford University Press — Ch. 14 (Timing measurements)
