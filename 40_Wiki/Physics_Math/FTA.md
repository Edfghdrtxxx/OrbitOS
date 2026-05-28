---
area: "[[Physics]]"
tags: [electronics, timing, nuclear-instrumentation]
created: 2026-05-28
last_reviewed:
next_review: 2026-05-28
review_interval: 0
---
# FTA

## Schematics

![[FTA_schematic.excalidraw|1000]]
*Author-drawn Excalidraw schematic showing a Fast Timing Amplifier between a detector fast output and the discriminator/TDC timing chain.*

## Definition

FTA means Fast Timing Amplifier: a wide-bandwidth, low-noise amplifier used to boost very fast detector pulses before timing discrimination. In nuclear electronics, an FTA preserves fast [[Rise Time]] information so that a [[Constant Fraction Discriminator]] or [[Leading-Edge Discriminator]] can form a precise logic timing mark for a [[TDC]].

## Key Points

- **Timing role:** An FTA is used in the fast branch of [[Readout Electronics]], where the goal is [[Time Resolution]] rather than pulse-height spectroscopy.
- **Bandwidth matters:** Sub-nanosecond or few-nanosecond timing requires high [[Bandwidth]] so the rising edge is not slowed before discrimination.
- **Gain without shaping:** Unlike a spectroscopy shaping amplifier, an FTA amplifies the fast linear pulse while avoiding long shaping times that would blur timing.
- **Impedance environment:** Commercial FTAs are commonly designed for $50\,\Omega$ input/output systems, so [[Impedance Matching]] and cable termination matter.
- **Noise and slope:** Good timing depends on a steep signal slope and low electronic [[Jitter]], so the useful FTA improves signal amplitude without adding too much noise.

## Examples

- A [[Photomultiplier Tube]] anode pulse from a fast scintillator is amplified by an FTA before entering a [[Constant Fraction Discriminator]] for [[Time-of-Flight]] measurement.
- ORTEC's FTA820A is an octal [[NIM Module]] Fast Timing Amplifier with gain 200, input impedance $50\,\Omega$, and rise time $\leq 1\,\mathrm{ns}$.

## Related Concepts

- [[Readout Electronics]]
- [[Rise Time]]
- [[Time Resolution]]
- [[Jitter]]
- [[Constant Fraction Discriminator]]
- [[Leading-Edge Discriminator]]
- [[TDC]]
- [[Time-of-Flight]]
- [[Photomultiplier Tube]]
- [[Scintillation Detector]]
- [[Impedance Matching]]
- [[Bandwidth]]
- [[NIM Module]]

## References

- AMETEK ORTEC, "FTA820A Octal Fast Timing Amplifier": https://www.ortec-online.com/products/electronic-instruments/amplifiers/fta820a
- AMETEK ORTEC, *Model FTA820A Octal Fast Timing Amplifier and Model FTA420C Quad Fast Timing Amplifier Operating Manual*: https://www.ortec-online.com/-/media/ametekortec/manuals/f/fta820a-mnl.pdf
- Knoll, G. F. *Radiation Detection and Measurement*, 4th ed. -- Ch. 17 (Pulse Processing).
