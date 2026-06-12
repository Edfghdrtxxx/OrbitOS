---
area: "[[Physics]]"
tags: [particle-physics, energy-loss, detector-physics, review/physics]
created: 2026-03-04
---
# Bethe-Bloch Formula

## Definition

The Bethe-Bloch formula describes the mean rate of [[Ionizing Radiation|ionization]] energy loss ($-\mathrm{d}E/\mathrm{d}x$) of moderately relativistic [[Charged Particle]]s traversing matter, and is the theoretical backbone of [[Particle Identification]] via specific energy loss in detectors such as [[Time Projection Chamber]]s. In its canonical PDG form:

$$
-\left\langle\frac{\mathrm{d}E}{\mathrm{d}x}\right\rangle = K\, z^{2}\, \frac{Z}{A}\, \frac{1}{\beta^{2}} \left[\, \frac{1}{2} \ln\!\frac{2 m_{e} c^{2}\, \beta^{2} \gamma^{2}\, T_{\max}}{I^{2}} \;-\; \beta^{2} \;-\; \frac{\delta(\beta\gamma)}{2} \,\right]
$$

with $K = 4\pi N_{A} r_{e}^{2} m_{e} c^{2} \approx 0.307\ \mathrm{MeV\,mol^{-1}\,cm^{2}}$, $z$ the projectile charge in units of $e$, $Z/A$ the target's atomic-to-mass ratio, $\beta\gamma$ the projectile's relativistic velocity, $I$ the [[Mean Excitation Energy]], $T_{\max}$ the maximum kinetic energy transferable to a free electron in a single collision, and $\delta(\beta\gamma)$ the density-effect (Sternheimer) correction.

## Key Points

- Energy loss depends on the particle's velocity ($\beta\gamma$), charge, and the target material's atomic number and [[Mean Excitation Energy]]
- Exhibits a characteristic minimum at $\beta\gamma \approx 3$–$4$ (minimum-ionizing particles), then rises logarithmically at higher energies (relativistic rise)
- Different particle species ([[Proton]], [[Pion]], [[Kaon]]) follow distinct $\mathrm{d}E/\mathrm{d}x$ vs momentum curves, enabling [[Particle Identification]]
- Corrections include density effect (Sternheimer) at high energy and shell corrections at low energy
- Measured $\mathrm{d}E/\mathrm{d}x$ in a [[Time Projection Chamber]] or [[Scintillation Detector]] is compared to Bethe-Bloch predictions for species separation

## Examples

- In a [[Time Projection Chamber]], the truncated mean of $\mathrm{d}E/\mathrm{d}x$ samples along a track is matched against Bethe-Bloch curves to distinguish protons from pions at the same momentum
- The [[ALARA Principle|ALARA]]-relevant dose calculations use Bethe-Bloch to estimate energy deposited by heavy ions in tissue via [[Linear Energy Transfer]]

## Related Concepts

- [[Time Projection Chamber]]
- [[Ionizing Radiation]]
- [[Scintillation Detector]]
- [[Time-of-Flight]]
- [[Stopping Power]]
- [[Particle Identification]]
- [[Linear Energy Transfer]]
- [[Charged Particle]]
- [[Mean Excitation Energy]]

## References

- Particle Data Group, "Passage of particles through matter," *Review of Particle Physics*
- H. Bethe, *Ann. Phys.* **5**, 325 (1930)
