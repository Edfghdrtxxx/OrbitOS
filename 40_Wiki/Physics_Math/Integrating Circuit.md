---
area: "[[Physics]]"
tags: [electronics, signal-processing, nuclear-instrumentation]
created: 2026-03-21
last_reviewed:
next_review: 2026-03-21
review_interval: 0
---
# Integrating Circuit

## Schematics

*Placeholder — awaiting image enrichment.*

## Definition

An integrating circuit (integrator) is an electronic circuit whose output voltage is proportional to the time integral of its input signal, $V_\text{out}(t) \propto \int V_\text{in}(t)\,dt$. It is implemented either as a passive RC low-pass filter (with $\tau = RC$ much longer than the input pulse duration) or as an active [[Op-Amp]] integrator with a feedback capacitor.

## Key Points

- **Passive RC integrator:** The input is applied through a resistor $R$ and the output is taken across the capacitor $C$; the condition $\tau = RC \gg T_\text{pulse}$ ensures the capacitor voltage approximates the integral of the input current
- **Active (op-amp) integrator:** An [[Op-Amp]] with a feedback capacitor $C_f$ produces $V_\text{out} = -\frac{1}{R_\text{in} C_f} \int V_\text{in}\,dt$, offering high input impedance and precise gain control
- In nuclear and particle physics, the [[Preamplifier|charge-sensitive preamplifier]] is essentially an integrator that collects the total charge $Q$ from a detector (e.g., [[Silicon Detector]], [[Ionisation Chamber]]) and converts it to a voltage step proportional to the deposited energy
- The integrated output preserves the total charge information ([[Pulse Height]]) but produces a slow-rising signal; subsequent shaping (often via a [[Differentiating Circuit]]) is needed to restore the baseline and reduce [[Pile-up]]
- Bandwidth is inversely related to the [[Time Constant]]; longer integration suppresses high-frequency noise, improving [[Signal-to-Noise Ratio]] at the cost of slower response ([[Rise Time]])

## Examples

- A charge-sensitive [[Preamplifier]] in a [[HPGe Detector]] gamma spectroscopy chain integrates the current pulse from the detector crystal to yield a voltage step whose [[Pulse Height]] is proportional to the $\gamma$-ray energy
- An RC integrator with $\tau = 1\,\mu\text{s}$ smoothing a fast logic pulse from a [[Leading-Edge Discriminator]] to produce a gate signal for a [[Multichannel Analyzer]]

## Related Concepts

- [[Differentiating Circuit]]
- [[Preamplifier]]
- [[Pulse Height]]
- [[Signal-to-Noise Ratio]]
- [[Rise Time]]
- [[Pile-up]]
- [[Op-Amp]]
- [[RC Circuit]]
- [[Time Constant]]
- [[ADC]]

## References

- G. F. Knoll, *Radiation Detection and Measurement*, 4th ed., Wiley (2010), Ch. 16–17
- H. Spieler, *Semiconductor Detector Systems*, Oxford University Press (2005), Ch. 7
