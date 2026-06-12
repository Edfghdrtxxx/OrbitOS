---
area: "[[Physics]]"
tags:
  - special-relativity
  - kinematics
  - relativistic-mechanics
  - review/physics
created: 2026-05-21
---
# Relativistic Total Energy

> [!important] All math expressions, equations, and formulas **must** use LaTeX notation (`$...$` for inline, `$$...$$` for display blocks).

## Schematics

![[Relativistic_Total_Energy_diagram.svg]]
*"Einstein triangle" — the geometric form of $E^{2} = (pc)^{2} + (mc^{2})^{2}$. The hypotenuse is the total energy $E$, one leg is the momentum-energy $pc$, and the other leg is the rest energy $mc^{2}$. The arc at the **apex vertex** (where $E$ meets $mc^{2}$) measures the angle $\theta$ between those edges, with $\sin\theta = pc/E$ and $\cos\theta = mc^{2}/E$ — i.e. $\theta$ parameterizes the boost: rest frame $\theta = 0$ (hypotenuse collapses to $mc^{2}$ leg, $E = mc^{2}$); ultra-relativistic $\theta \to \pi/2$ (hypotenuse aligns with $pc$ leg, $E \approx pc$). The kinetic energy $K = E - mc^{2}$ is the **length difference** between hypotenuse and rest-energy leg, not the arc. (CC BY-SA 4.0, Wikimedia Commons)*

![[Relativistic_Total_Energy_principle.svg]]
*Pedagogical statement of the rest-energy limit: $E = mc^{2}$, with explicit SI units — energy in joules, mass in kilograms, $c = 299{,}792{,}458\,\mathrm{m/s}$ so $c^{2} \approx 8.99 \times 10^{16}\,\mathrm{m^{2}/s^{2}}$. This is the $v = 0$ ($\gamma = 1$) limit of the full $E = \gamma mc^{2}$ — the latent energy stored in invariant mass that becomes visible at the rest-frame end of the scale. (CC BY-SA 3.0, Wikimedia Commons)*

## Definition

The **relativistic total energy** of a free particle of invariant mass $m$ moving with velocity $v$ is
$$E \;=\; \gamma m c^{2} \;=\; \frac{m c^{2}}{\sqrt{1 - v^{2}/c^{2}}},$$
the sum of rest energy $E_{0} = mc^{2}$ and [[Relativistic Kinetic Energy]] $K = (\gamma-1)mc^{2}$. It is the time-component of the four-momentum $p^{\mu} = (E/c, \mathbf{p})$ and the conserved quantity in any inertial frame across reactions, decays, and scattering.

## Key Points

- **Rest energy.** At $v = 0$, $\gamma = 1$ and $E = mc^{2}$ — the [[Mass-Energy Equivalence]] of Einstein, the latent energy stored in invariant mass.
- **Decomposition.** $E = mc^{2} + K$ always; at $v \ll c$, $E \approx mc^{2} + \tfrac{1}{2}mv^{2}$, rest energy plus classical KE.
- **Ultra-relativistic limit.** $\gamma \gg 1 \Rightarrow E \approx pc$ — for relativistic beams the total energy is essentially $pc$, with rest mass entering only as a small correction (see [[Energy-Momentum Relation]]).
- **Conservation across reactions.** Equating $\sum E$ before and after fixes reaction Q-values, kinematic thresholds, and four-momentum balance in [[Inverse Kinematics]], [[Missing-Mass Spectroscopy]], and decay analyses.
- **Frame dependence.** $E$ is frame-dependent (different observers see different $\gamma$), but the combination $E^{2} - (pc)^{2} = (mc^{2})^{2}$ is Lorentz-invariant — the basis of [[Invariant Mass]] reconstruction.

## Examples

- **$^{58}\mathrm{Ni}$ at $80$ MeV/u.** Rest energy $\approx 58 \times 931.5 \approx 54.0$ GeV; kinetic $\approx 4.64$ GeV; total $E \approx 58.7$ GeV. Rest energy dominates because $\gamma$ is only $\approx 1.086$.
- **[[LHC]] proton at $7$ TeV.** $E = \gamma m c^{2}$ with $\gamma \approx 7460$ and $mc^{2} \approx 0.938$ GeV — total energy $\approx 7\,\mathrm{TeV}$, essentially all kinetic. The rest energy is a rounding error against $E$.

## Related Concepts

- [[Lorentz Factor]]
- [[Relativistic Momentum]]
- [[Relativistic Kinetic Energy]]
- [[Relativistic Force]]
- [[Energy-Momentum Relation]]
- [[Relativistic Forms of Physical Quantities]]
- [[Mass-Energy Equivalence]]
- [[Rest Energy]]
- [[Invariant Mass]]
- [[Four-Momentum]]
- [[Missing-Mass Spectroscopy]]
- [[Inverse Kinematics]]
- [[Special Relativity]]
- [[Binding Energy]]

## References

- K. S. Krane, *Introductory Nuclear Physics* (Wiley, 1988) — Appendix on relativistic kinematics.
- D. J. Griffiths, *Introduction to Electrodynamics*, 4th ed. (Pearson, 2013) — §12.2.4, relativistic energy.
- W. Rindler, *Relativity: Special, General, and Cosmological*, 2nd ed. (Oxford, 2006) — Ch. 6.
- Wikipedia: [Mass–energy equivalence](https://en.wikipedia.org/wiki/Mass%E2%80%93energy_equivalence).
