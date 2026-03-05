---
area: "[[Physics]]"
tags: [nuclear-instrumentation, signal-processing, electronics]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Constant Fraction Discriminator

## Definition

A Constant Fraction Discriminator (CFD) is an electronic circuit that implements [[Constant Ratio Timing]] by splitting an input pulse into an attenuated copy and a delayed, inverted copy, then summing them to produce a bipolar signal whose zero-crossing provides an amplitude-independent timing marker.

## Key Points

- **Circuit operation**: Input signal is split — one path attenuated by fraction $f$ (typically 0.2–0.4), the other inverted and delayed by $t_d$ (matched to the rise time); the zero-crossing of their sum is detected by a comparator to generate the timing output
- **Purpose**: Eliminates [[Time Walk]] inherent in leading-edge discriminators, achieving sub-nanosecond time resolution independent of pulse amplitude
- **Parameter selection**: Fraction $f$ trades off walk performance vs. jitter; delay $t_d$ must approximate the signal rise time — mismatched parameters degrade timing resolution
- **Digital implementation**: Digital CFD (dCFD) algorithms replicate the analog process in [[FPGA]] firmware on digitized waveforms, offering flexibility and multi-channel scalability

## Examples

- An Ortec 935 quad CFD module processes four [[Photomultiplier Tube|PMT]] signals simultaneously for a [[Time-of-Flight]] detector array, providing NIM-standard timing outputs to a TDC
- In a [[Time Projection Chamber|TPC]] DAQ system, a dCFD algorithm running on a Kintex-7 [[FPGA]] extracts drift-time timestamps from 256 pad channels in parallel

## Related Concepts

- [[Constant Ratio Timing]]
- [[Time Walk]]
- [[FPGA]]
- [[Time-of-Flight]]
- [[Coincidence Detection]]
- [[Photomultiplier Tube]]
- [[Time Projection Chamber]]
- [[Leading-Edge Discriminator]]
- [[ADC]]

## References

- Gedcke, D. A. & McDonald, W. J. (1967). "A constant fraction of pulse height trigger for optimum time resolution." *Nuclear Instruments and Methods*, 55, 377–380
- Knoll, G. F. (2010). *Radiation Detection and Measurement*, 4th ed. Wiley — Ch. 17
