---
area: "[[Physics]]"
tags: [instrumentation, detector-performance, electronics]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Saturation

## Definition

Saturation is the condition where a detector or electronics component can no longer produce an output proportional to its input, causing signal clipping or compression — it defines the upper boundary of the usable [[Dynamic Range]].

## Key Points

- **Detector saturation**: In a [[Silicon Photomultiplier]], saturation occurs when the number of incident photons exceeds the number of microcells, causing a non-linear response that compresses [[Pulse Height]]
- **Electronics saturation**: The [[Preamplifier]] or [[ADC]] output clips at supply-rail limits; any [[Pulse Height]] above the ceiling is recorded at the maximum code, losing energy information
- **Rate saturation**: At high count rates, detector recovery time ([[Dead Time]]) causes pulse pile-up, effectively saturating the throughput even if individual pulses are within range
- **Mitigation**: Logarithmic compression, dual-gain readout paths, and automatic gain control extend the linear operating range before saturation onset

## Examples

- A [[Scintillation Detector]] coupled to a 3×3 mm² [[Silicon Photomultiplier]] (3600 microcells) saturates above ~3000 detected photons per pulse, requiring saturation correction for high-energy [[Gamma Ray|gamma rays]]
- A 12-bit [[ADC]] saturates at code 4095; any signal above the full-scale voltage is clipped, producing a flat-topped peak in the [[Pulse Height Spectrum]]

## Related Concepts

- [[Dynamic Range]]
- [[Silicon Photomultiplier]]
- [[Dead Time]]
- [[Pulse Height]]
- [[ADC]]
- [[Preamplifier]]

## References

- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 4, 9
- Spieler, H. (2005). *Semiconductor Detector Systems*. Oxford University Press — Ch. 7
