---
area: "[[Physics]]"
tags: [electronics, signal-processing, instrumentation]
created: 2026-05-28
last_reviewed:
next_review: 2026-05-28
review_interval: 0
---
# Attenuator

## Schematics

![[Attenuator_schematic.excalidraw|1000]]
*Author-drawn Excalidraw schematic showing an attenuator inserted between a detector/readout output and a downstream ADC, oscilloscope, or trigger input.*

## Definition

An attenuator is a circuit or module that deliberately reduces a signal amplitude by a known factor while preserving the useful waveform as much as possible. In [[Readout Electronics]], attenuators are used to prevent [[Saturation]], fit pulses into the [[Dynamic Range]] of an [[ADC]], or maintain a controlled impedance environment for fast signals.

## Key Points

- **Known loss:** For matched voltage signals, insertion loss is often written as $L_{\mathrm{dB}} = 20\log_{10}(V_{\mathrm{in}}/V_{\mathrm{out}})$; for power ratios, $L_{\mathrm{dB}} = 10\log_{10}(P_{\mathrm{in}}/P_{\mathrm{out}})$.
- **Common forms:** Passive resistive attenuators use [[T-pad Attenuator|T]], [[Pi-pad Attenuator|Pi]], or [[L-pad Attenuator|L]] networks to dissipate excess signal energy as heat.
- **Impedance control:** In coaxial or RF-style detector setups, the attenuator should preserve [[Impedance Matching]], commonly around $50\,\Omega$, to avoid pulse reflections.
- **Noise tradeoff:** Attenuation lowers the signal entering downstream electronics; if the downstream noise floor is important, it can reduce the effective [[Signal-to-Noise Ratio]].
- **Calibration impact:** Adding or changing an attenuator changes the gain factor between [[Pulse Height]] and physical energy, so spectroscopy chains need recalibration.

## Examples

- A $10\,\mathrm{dB}$ attenuator before an oscilloscope input can keep a large [[Photomultiplier Tube]] pulse from clipping while retaining timing structure.
- A matched attenuator in a $50\,\Omega$ cable path can reduce trigger amplitude without creating large reflections in the [[Transmission Line]].

## Related Concepts

- [[Readout Electronics]]
- [[Dynamic Range]]
- [[Saturation]]
- [[ADC]]
- [[Pulse Height]]
- [[Signal-to-Noise Ratio]]
- [[Impedance Matching]]
- [[Preamplifier]]
- [[DAQ]]
- [[Transmission Line]]
- [[Characteristic Impedance]]
- [[T-pad Attenuator]]
- [[Pi-pad Attenuator]]
- [[L-pad Attenuator]]

## References

- Wikipedia, "Attenuator (electronics)": https://en.wikipedia.org/wiki/Attenuator_(electronics)
- Wikimedia Commons, "Attenuators Tee Pi L.svg" metadata checked as CC0, but direct download was rate-limited during note creation: https://commons.wikimedia.org/wiki/File:Attenuators_Tee_Pi_L.svg
