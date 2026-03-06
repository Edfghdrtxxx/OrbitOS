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
# Isotope Separation

## Definition

Isotope separation in nuclear physics experiments refers to the identification and discrimination of nuclear species that share the same atomic number $Z$ but differ in mass number $A$. The governing parameters and techniques differ depending on the detection method: $Z^2 A^\mu$ for the [[ΔE-E Method]], and $A/Z$ for [[Magnetic Rigidity|Bρ]]-[[Time-of-Flight|TOF]] methods.

## Key Points

- **[[ΔE-E Method]]**: separation depends on [[Stopping Power]] differences scaling as $Z^2 A^\mu$; heavier isotopes deposit more energy for the same $Z$ and velocity, producing distinct loci in [[dE-dx]] vs. $E$ space
- **[[Magnetic Rigidity|Bρ]]-[[Time-of-Flight|TOF]]**: separation depends on $A/Z$; combined with [[dE-dx]] for $Z$ determination, this yields unambiguous $(Z, A)$ identification (e.g., at [[BigRIPS]])
- For **same-$Z$ isotopes**, the difficulty increases as $\Delta A$ decreases — e.g., separating ${}^{15}\mathrm{N}$ from ${}^{14}\mathrm{N}$ is harder than ${}^{15}\mathrm{N}$ from ${}^{12}\mathrm{C}$
- [[Energy Resolution]] and [[Time-of-Flight|TOF]] resolution are the primary limiting factors for resolving neighboring isotopes
- Machine-learning approaches (e.g., ResNet-based [[Particle Identification|PID]]) aim to improve separation power beyond traditional graphical cuts

## Examples

- In a [[Time Projection Chamber|TPC]], ${}^{6}\mathrm{Li}$ and ${}^{7}\mathrm{Li}$ are separated by their different [[Range-Energy Relation|ranges]] and [[dE-dx]] profiles at the same initial energy
- [[BigRIPS]] routinely separates exotic isotopes produced at rates as low as a few counts per day using the Bρ–ΔE–Bρ–TOF method

## Related Concepts

- [[Particle Identification]]
- [[ΔE-E Method]]
- [[Magnetic Rigidity]]
- [[Time-of-Flight]]
- [[dE-dx]]
- [[Bethe-Bloch Formula]]
- [[Range-Energy Relation]]
- [[Mass Spectrometry]]

## References

- Morrissey, D. J. & Sherrill, B. M. (2004). *In-flight separation of projectile fragments*. The Euroschool Lectures on Physics with Exotic Beams, Vol. I. Springer.
