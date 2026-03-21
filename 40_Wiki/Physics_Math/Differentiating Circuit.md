---
area: "[[Physics]]"
tags: [electronics, signal-processing, nuclear-instrumentation]
created: 2026-03-21
last_reviewed:
next_review: 2026-03-21
review_interval: 0
---
# Differentiating Circuit

## Schematics

*Placeholder — awaiting image enrichment.*

## Definition

A differentiating circuit (differentiator) is an electronic circuit whose output voltage is proportional to the time derivative of its input signal, $V_\text{out}(t) \propto \frac{dV_\text{in}}{dt}$. It is implemented either as a passive CR high-pass filter (with $\tau = RC$ much shorter than the input signal duration) or as an active [[Op-Amp]] differentiator with an input capacitor.

## Key Points

- **Passive CR differentiator:** The input is applied through a capacitor $C$ and the output is taken across the resistor $R$; with $\tau = RC \ll T_\text{signal}$, the circuit converts a step input into a short pulse whose amplitude reflects the rate of change
- **Active (op-amp) differentiator:** An [[Op-Amp]] with an input capacitor $C_\text{in}$ and feedback resistor $R_f$ produces $V_\text{out} = -R_f C_\text{in} \frac{dV_\text{in}}{dt}$, but is sensitive to high-frequency noise and typically requires a small series resistor for stability
- In nuclear spectroscopy, CR differentiation (shaping) follows the [[Integrating Circuit|charge-sensitive preamplifier]] stage to convert the slow voltage step back into a peaked pulse suitable for amplitude measurement by a [[Multichannel Analyzer]]
- The CR–RC shaping chain (one differentiator + one integrator) produces a semi-Gaussian pulse; the shaping time $\tau$ is chosen to optimize [[Signal-to-Noise Ratio]] — too short increases electronic noise, too long increases [[Pile-up]] at high count rates
- Pole-zero cancellation is applied to the CR stage to eliminate the undershoot that would otherwise distort subsequent pulses and degrade [[Energy Resolution]]

## Examples

- In a standard nuclear spectroscopy amplifier, a CR differentiator with $\tau = 2\,\mu\text{s}$ shapes the step output of a [[Preamplifier]] into a unipolar pulse, which is then further shaped by an [[Integrating Circuit]] stage for optimal [[Signal-to-Noise Ratio]]
- A fast CR differentiator ($\tau \sim 10\,\text{ns}$) applied to a [[Scintillation Detector]] signal to extract precise timing information for a [[Constant Fraction Discriminator]]

## Related Concepts

- [[Integrating Circuit]]
- [[Preamplifier]]
- [[Pulse Height]]
- [[Signal-to-Noise Ratio]]
- [[Energy Resolution]]
- [[Rise Time]]
- [[Pile-up]]
- [[Constant Fraction Discriminator]]
- [[Op-Amp]]
- [[RC Circuit]]
- [[Time Constant]]

## References

- G. F. Knoll, *Radiation Detection and Measurement*, 4th ed., Wiley (2010), Ch. 16–17
- W. R. Leo, *Techniques for Nuclear and Particle Physics Experiments*, 2nd ed., Springer (1994), Ch. 11
