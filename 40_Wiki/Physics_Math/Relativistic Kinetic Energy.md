---
area: "[[Physics]]"
tags:
  - special-relativity
  - kinematics
  - relativistic-mechanics
  - review/physics
created: 2026-05-21
last_reviewed:
next_review: 2026-05-21
review_interval: 0
sr-due: 2026-05-21
sr-interval: 1
sr-ease: 230
---
# Relativistic Kinetic Energy

> [!important] All math expressions, equations, and formulas **must** use LaTeX notation (`$...$` for inline, `$$...$$` for display blocks).

## Schematics

![[Relativistic_Kinetic_Energy_comparison.svg]]
*Relativistic kinetic energy $K = (\gamma - 1)mc^{2}$ (red) versus the Newtonian $\tfrac{1}{2}mv^{2}$ (green) as a function of speed in units of $c$. The two curves overlap below $\beta \approx 0.3$ but diverge sharply as $v \to c$: the relativistic form diverges while the Newtonian formula stays finite. (CC BY-SA 3.0, Wikimedia Commons)*

![[Relativistic_Kinetic_Energy_graph.png]]
*"Correct" relativistic $K(v)$ (orange) versus a common pre-relativistic approximation (blue) over $0 \le v/c \le 0.97$. The two formulas agree to within a few percent up to $v/c \approx 0.5$ but diverge by a factor of $\sim 1.5$ near $v/c = 0.95$ — illustrating why heavy-ion-facility energies above $\sim 50$ MeV/u demand the full $(\gamma - 1)mc^{2}$ form. (CC BY-SA 3.0, Wikimedia Commons)*

## Definition

**Relativistic kinetic energy** is the energy a free particle of rest mass $m$ possesses by virtue of its motion at velocity $v$, equal to the difference between total energy and rest energy:
$$K \;=\; (\gamma - 1)\,mc^{2} \;=\; \frac{mc^{2}}{\sqrt{1 - v^{2}/c^{2}}} \;-\; mc^{2},$$
where $\gamma$ is the [[Lorentz Factor]]. It is the work–energy theorem's relativistic form: the total work done by an external [[Relativistic Force]] in accelerating a particle from rest to $v$.

## Key Points

- **Newtonian limit.** Taylor expansion $\gamma \approx 1 + \tfrac{1}{2}\beta^{2}$ recovers $K \approx \tfrac{1}{2}mv^{2}$ for $v \ll c$ — the classical formula is the leading term of the relativistic one.
- **Diverges as $v \to c$.** Infinite kinetic energy is required to reach the speed of light, the dynamical statement of the speed limit (see [[Lorentz Factor]]).
- **$K/A$ is the canonical scale at heavy-ion facilities.** "300 MeV/u" means $K/A = 300$ MeV per nucleon, not total $K$ or total $E$ — used at [[BigRIPS]], [[OEDO]], [[HIRFL]], and [[RIBLL]].
- **Ultra-relativistic regime.** When $\gamma \gg 1$, $K \approx E = pc$ — rest mass becomes a negligible correction.
- **Connection to magnetic rigidity.** At fixed $B\rho = \gamma m v / q$, two ions of identical rigidity but different $(A, Z)$ carry different $K$ — this is what makes [[DeltaE-Brho-TOF-Identification]] sensitive to $(A, Z)$ rather than just $p/q$.

## Examples

- **Heavy-ion fragment at $80$ MeV/u.** $^{58}\mathrm{Ni}$ at $K/A = 80$ MeV/u: $K_{\mathrm{tot}} = 58 \times 80 = 4.64$ GeV, $\gamma \approx 1.086$, $\beta \approx 0.385$. Newtonian $\tfrac{1}{2}mv^{2}$ would understate $K$ by about $9\%$ — already non-negligible.
- **[[LHC]] proton at $7$ TeV.** $K \approx 7\,\mathrm{TeV} - 0.938\,\mathrm{GeV} \approx 7\,\mathrm{TeV}$; the rest-mass contribution to $E$ is $\sim 0.013\%$. Fully relativistic — the $K \approx E = pc$ approximation is accurate to four decimal places.

## Related Concepts

- [[Lorentz Factor]]
- [[Relativistic Momentum]]
- [[Relativistic Total Energy]]
- [[Relativistic Force]]
- [[Energy-Momentum Relation]]
- [[Relativistic Forms of Physical Quantities]]
- [[Mass-Energy Equivalence]]
- [[Magnetic Rigidity]]
- [[DeltaE-Brho-TOF-Identification]]
- [[Particle Identification]]
- [[Bethe-Bloch Formula]]
- [[Stopping Power]]
- [[Linear Energy Transfer]]
- [[Special Relativity]]
- [[Inverse Kinematics]]

## References

- K. S. Krane, *Introductory Nuclear Physics* (Wiley, 1988) — Appendix on relativistic kinematics.
- D. J. Griffiths, *Introduction to Electrodynamics*, 4th ed. (Pearson, 2013) — §12.2.4, relativistic energy.
- W. Rindler, *Relativity: Special, General, and Cosmological*, 2nd ed. (Oxford, 2006) — Ch. 6.
- Wikipedia: [Kinetic energy § Relativistic kinetic energy](https://en.wikipedia.org/wiki/Kinetic_energy#Relativistic_kinetic_energy).
