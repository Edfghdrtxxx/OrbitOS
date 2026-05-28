---
area: "[[Physics]]"
tags: [electronics, signal-processing, rf]
created: 2026-05-28
last_reviewed:
next_review: 2026-05-28
review_interval: 0
---
# Impedance Matching

## Schematics

![[Impedance_Matching_schematic.svg]]
*Transmission-line model showing a source, line, and load; impedance matching aims to suppress reflected waves at boundaries between them. (CC BY-SA 3.0, Wikimedia Commons, User:Omegatron)*

![[Impedance_Matching_diagram.svg]]
*Crystal radio receiver using coil taps as impedance-matching transformer points between antenna, tuned circuit, detector, and earphone. (Public domain, Wikimedia Commons, Chetvorno)*

## Definition

Impedance matching is the design condition where a source, transmission path, and load are arranged so that power transfer is efficient and unwanted signal reflection is minimized. In AC and [[RF Electric Field|RF]] systems this usually means matching complex impedances, not just equal DC resistance.

## Key Points

- **Maximum power transfer:** For a Thevenin source with impedance $Z_S$, maximum average power reaches the load when $Z_L = Z_S^*$.
- **Reflection control:** In a [[Transmission Line]], mismatch between the load $Z_L$ and the [[Characteristic Impedance]] $Z_0$ produces a [[Reflection Coefficient]] $\Gamma = (Z_L - Z_0)/(Z_L + Z_0)$.
- **Signal integrity:** Good matching reduces ringing, standing waves, pulse distortion, and losses in [[Readout Electronics]].
- **Noise tradeoff:** The best power match is not always the best [[Signal-to-Noise Ratio|noise]] match, especially near a [[Preamplifier]] input.
- **Practical method:** A [[Matching Network]] uses capacitors, inductors, transformers, stubs, or resistive pads to transform one impedance into another at the frequency of interest.

## Examples

- A $50\,\Omega$ coaxial cable connected to a $50\,\Omega$ oscilloscope input minimizes reflections from fast detector pulses.
- In an RF resonant circuit, a tapped coil or transformer can couple a low-impedance antenna to a high-impedance tuned circuit without overloading its resonance.

## Related Concepts

- [[RF Electric Field]]
- [[Signal-to-Noise Ratio]]
- [[Preamplifier]]
- [[Readout Electronics]]
- [[Differentiating Circuit]]
- [[Integrating Circuit]]
- [[Electric Field]]
- [[Electromagnetic Spectrum]]
- [[Transmission Line]]
- [[Characteristic Impedance]]
- [[Reflection Coefficient]]
- [[Standing Wave Ratio]]
- [[Maximum Power Transfer Theorem]]
- [[Matching Network]]
- [[Q Factor]]

## References

- Wikimedia Commons, "Transmission line schematic.svg": https://commons.wikimedia.org/wiki/File:Transmission_line_schematic.svg
- Wikimedia Commons, "Crystal radio with impedance matching.svg": https://commons.wikimedia.org/wiki/File:Crystal_radio_with_impedance_matching.svg
- Wikipedia, "Impedance matching": https://en.wikipedia.org/wiki/Impedance_matching
