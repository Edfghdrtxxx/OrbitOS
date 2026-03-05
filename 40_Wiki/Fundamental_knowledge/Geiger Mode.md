---
area: "[[Physics]]"
tags: [detector, photonics, solid-state]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Geiger Mode

## Definition

Geiger mode is the operating regime of an avalanche photodiode (APD) or [[Single-Photon Avalanche Diode]] in which the device is biased above its breakdown voltage, causing each absorbed photon to trigger a full, saturated avalanche — output amplitude is independent of photon number and enables single-photon detection.

## Key Points

- Named by analogy to the Geiger–Müller tube; both produce a large, standardized pulse per triggering event
- Contrast with linear mode: in linear mode, output is proportional to photon count; in Geiger mode, output saturates (one photon → one large pulse)
- Requires active or passive [[Quenching Circuit|quenching]] to stop the avalanche and restore bias for the next photon
- The foundation of [[Silicon Photomultiplier]] and SPAD operation; enables photon counting without external amplification

## Examples

- [[Single-Photon Avalanche Diode]]s operate exclusively in Geiger mode for single-photon sensitivity
- [[Silicon Photomultiplier]] arrays sum thousands of Geiger-mode micro-cells to measure photon multiplicity from [[Scintillation Detector]]s

## Related Concepts

- [[Single-Photon Avalanche Diode]]
- [[Silicon Photomultiplier]]
- [[Photodetector]]
- [[Scintillation Detector]]
- [[Time-of-Flight]]
- [[Avalanche Photodiode]]

## References

- Cova et al., "Avalanche photodiodes and quenching circuits for single-photon detection," *Appl. Opt.* **35**, 1956 (1996)
- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley
