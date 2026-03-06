---
area: "[[Physics]]"
tags:
  - nuclear-physics
  - particle-detection
created: 2026-03-06
last_reviewed:
next_review: 2026-03-06
review_interval: 0
---
# ΔE-E Method

## Definition

The ΔE-E method is a [[Particle Identification]] technique that measures both the partial energy loss ($\Delta E$) in a thin detector and the residual energy ($E$) in a thick stopping detector. The combination yields an identification parameter proportional to $Z^2 A^\mu$ ($\mu \approx 1$), enabling separation of nuclear species.

## Key Points

- Based on the [[Bethe-Bloch Formula]]: since [[dE-dx]] $\propto Z^2\,f(E/A)$, the product $\Delta E \cdot E$ (or power-law variants) isolates $Z$ and $A$
- Tassan-Got & Stephan (NIM B194, 2002) showed the extracted parameter is $Z^2 A^\mu$, **not** $A/Z$ — $A/Z$ governs [[Magnetic Rigidity|Bρ]]-[[Time-of-Flight|TOF]] separation instead
- Requires careful calibration of detector thicknesses and [[Energy Resolution]] to resolve neighboring isotopes
- Works best when particles stop in the $E$ detector; punch-through events need separate treatment
- Commonly implemented with silicon telescopes, ionization chambers, or [[Time Projection Chamber|TPCs]]

## Examples

- A silicon telescope (thin Si ΔE + thick Si E) at a tandem accelerator separating ${}^{12}\mathrm{C}$, ${}^{13}\mathrm{C}$, and ${}^{14}\mathrm{N}$ in a direct reaction experiment
- In a [[Time Projection Chamber|TPC]], the [[Track Reconstruction|reconstructed track]] provides spatially resolved [[dE-dx]] and integrated energy, functioning as a continuous ΔE-E system

## Related Concepts

- [[dE-dx]]
- [[Bethe-Bloch Formula]]
- [[Stopping Power]]
- [[Particle Identification]]
- [[Energy Resolution]]
- [[Time Projection Chamber]]
- [[Pulse Height Defect]]

## References

- Tassan-Got, L. & Stephan, C. (2002). *A new functional for charge and mass identification in ΔE–E telescopes*. NIM B 194, 503.
