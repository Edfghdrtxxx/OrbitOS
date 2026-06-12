---
area: "[[Physics]]"
tags:
  - special-relativity
  - kinematics
  - relativistic-mechanics
  - particle-identification
  - review/physics
created: 2026-05-21
---
# Relativistic Momentum

> [!important] All math expressions, equations, and formulas **must** use LaTeX notation (`$...$` for inline, `$$...$$` for display blocks).

## Schematics

![[Relativistic_Momentum_diagram.svg]]
*Spacetime depiction of the four-momentum $p^{\mu} = (E/c,\,\mathbf{p})$ as a single vector in Minkowski space. The timelike component $E/c$ and the spacelike three-momentum $\mathbf{p}$ are not independent: their Minkowski norm $E^{2}/c^{2} - |\mathbf{p}|^{2} = (mc)^{2}$ is fixed by the invariant rest mass $m$ — every observer measures different $(E, \mathbf{p})$ but agrees on the length of the 4-vector. This is the geometric reason $\gamma m \mathbf{v}$, not $m\mathbf{v}$, is the conserved momentum across boosts. (CC BY-SA 4.0, Wikimedia Commons)*

## Definition

**Relativistic momentum** is the Lorentz-covariant generalization of Newtonian $m\mathbf{v}$,
$$\mathbf{p} \;=\; \gamma m \mathbf{v} \;=\; \frac{m\mathbf{v}}{\sqrt{1 - v^{2}/c^{2}}},$$
where $m$ is the invariant (rest) mass and $\gamma$ is the [[Lorentz Factor]]. It is the spatial part of the four-momentum $p^{\mu} = (E/c,\,\mathbf{p})$ and is what conservation of momentum actually conserves across inertial frames in [[Special Relativity]].

## Key Points

- **Conservation requires the $\gamma$ factor.** Without it, $\sum m\mathbf{v}$ is not preserved under [[Lorentz Transformations]] — Newtonian momentum is only the $v \ll c$ limit.
- **Unreachable speed limit.** $|\mathbf{p}| \to \infty$ as $v \to c$, so no finite impulse can accelerate a massive particle to $c$.
- **Magnetic rigidity is a direct momentum measurement.** For a fully-stripped ion of charge $q$, $B\rho = p/q = \gamma m v / q$ — the basis of [[DeltaE-Brho-TOF-Identification]] and the curved-trajectory analysis in [[BigRIPS]], [[RIBLL]], and [[Magnetic Spectrometer]]s.
- **Deviation from Newtonian.** At $\beta = 0.3$ ($\gamma \approx 1.048$) the relativistic correction is $\approx 5\%$; at $\beta = 0.9$ ($\gamma \approx 2.29$) the relativistic $|\mathbf{p}|$ is more than double $m|\mathbf{v}|$ — well below the threshold where heavy-ion experiments must use the full form.
- **Component of the four-momentum.** $p^{\mu} p_{\mu} = E^{2}/c^{2} - |\mathbf{p}|^{2} = (mc)^{2}$ — the same invariant that defines the [[Energy-Momentum Relation]].

## Examples

- **BigRIPS at RIBF.** Secondary RIB fragments at $\sim 300$ MeV/u carry $\beta \approx 0.65$, $\gamma \approx 1.32$ — relativistic momentum reconstruction is mandatory, with $p \approx 1.32 \cdot m \cdot 0.65 c$ rather than the Newtonian $m \cdot 0.65 c$ (a $32\%$ underestimate from the Newtonian formula).
- **[[LHC]] proton beam at $7\,\mathrm{TeV}$.** $\gamma \approx 7460$, giving $p \approx 7\,\mathrm{TeV}/c$. The Newtonian formula $p = mv$ would yield $\approx 938\,\mathrm{MeV}/c$ — wrong by four orders of magnitude.

## Related Concepts

- [[Lorentz Factor]]
- [[Relativistic Kinetic Energy]]
- [[Relativistic Total Energy]]
- [[Relativistic Force]]
- [[Energy-Momentum Relation]]
- [[Relativistic Forms of Physical Quantities]]
- [[Four-Momentum]]
- [[Magnetic Rigidity]]
- [[DeltaE-Brho-TOF-Identification]]
- [[Particle Identification]]
- [[Magnetic Spectrometer]]
- [[BigRIPS]]
- [[RIBLL]]
- [[Special Relativity]]
- [[Lorentz Transformations]]
- [[Inverse Kinematics]]
- [[Invariant Mass]]

## References

- K. S. Krane, *Introductory Nuclear Physics* (Wiley, 1988) — Appendix on relativistic kinematics.
- D. J. Griffiths, *Introduction to Electrodynamics*, 4th ed. (Pearson, 2013) — §12.2, relativistic energy and momentum.
- W. Rindler, *Relativity: Special, General, and Cosmological*, 2nd ed. (Oxford, 2006) — Ch. 6.
- Wikipedia: [Momentum § Relativistic momentum](https://en.wikipedia.org/wiki/Momentum#Relativistic).
