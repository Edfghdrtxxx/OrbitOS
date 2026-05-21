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
# Lorentz Factor

> [!important] All math expressions, equations, and formulas **must** use LaTeX notation (`$...$` for inline, `$$...$$` for display blocks).

## Schematics

![[Lorentz_Factor_graph.png]]
*The Lorentz factor $\gamma = \Delta t' / \Delta t$ versus $v/c$. The curve is essentially flat ($\gamma \approx 1$) up to $\beta \approx 0.5$, then climbs steeply, diverging as $\beta \to 1$. This is the dynamical statement of $c$ as a speed limit: no finite work can drive $\gamma$ to infinity. (CC BY-SA 4.0, Wikimedia Commons)*

![[Lorentz_Factor_graph_2.svg]]
*Log–log plot of $\gamma$ (left axis) and $1/\gamma$ (right axis) versus $\beta$ (bottom) and $1-\beta$ (top, counting "nines"). On log-log axes the relativistic regime $\beta \to 1$ becomes linear: $\gamma$ grows by one order of magnitude per "nine" added to $\beta$ (e.g. $\beta = 0.99 \Rightarrow \gamma \approx 7.09$; $\beta = 0.9999999 \Rightarrow \gamma \approx 2236$). The plot makes visible the extreme $\gamma$ regimes — LHC protons sit at $\gamma \approx 7460$, around the "$\beta = 0.99999999$" tick. (CC BY-SA 4.0, Wikimedia Commons)*

![[Lorentz_Factor_diagram.svg]]
*Pythagorean / geometric interpretation: a right triangle with hypotenuse $1$, one leg $\beta = v/c$, and the other leg $\alpha = 1/\gamma = \sqrt{1-\beta^{2}}$. The identity $1^{2} = \beta^{2} + (1/\gamma)^{2}$ is the same statement as $\gamma = 1/\sqrt{1-\beta^{2}}$. The triangle is the **Euclidean** mnemonic for $\gamma$; the actual [[Lorentz Transformations]] are **hyperbolic** rotations parameterized by rapidity $\eta$ with $\beta = \tanh\eta$, $\gamma = \cosh\eta$, $\gamma\beta = \sinh\eta$ — the trig analogy is geometric only, not the boost itself. (CC BY-SA 4.0, Wikimedia Commons)*

## Definition

The **Lorentz factor** $\gamma$ is the dimensionless scaling factor
$$\gamma \;=\; \frac{1}{\sqrt{1-\beta^{2}}}, \qquad \beta \;\equiv\; \frac{v}{c},$$
that quantifies how time, length, momentum, and energy of an object moving at velocity $v$ transform between inertial frames in [[Special Relativity]]. It is the single algebraic ingredient that appears in every kinematic generalization from Newtonian to relativistic form ([[Relativistic Momentum]], [[Relativistic Kinetic Energy]], [[Relativistic Total Energy]], [[Relativistic Force]]).

## Key Points

- **Divergence at $v \to c$.** $\gamma(0.1c) \approx 1.005$, $\gamma(0.5c) \approx 1.155$, $\gamma(0.9c) \approx 2.29$, $\gamma(0.99c) \approx 7.09$, $\gamma(0.999c) \approx 22.4$ — the steep climb forbids any massive particle from reaching $c$ (infinite work required).
- **Low-velocity expansion.** $\gamma \approx 1 + \tfrac{1}{2}\beta^{2} + \tfrac{3}{8}\beta^{4} + \dots$, so the leading correction $\tfrac{1}{2}\beta^{2}$ produces the classical kinetic energy $\tfrac{1}{2}mv^{2}$ from $(\gamma-1)mc^{2}$.
- **Equivalent forms.** $\gamma = E/(mc^{2})$ (total energy in rest-energy units) and $\gamma = \mathrm{d}t/\mathrm{d}\tau$ (lab time per unit proper time) — the same factor governs energy scaling and [[Time Dilation]].
- **Invariant mass convention.** In modern notation $m$ is the rest (invariant) mass; the velocity dependence lives entirely in $\gamma$. The historical "relativistic mass" $\gamma m$ is frame-dependent and is avoided in current particle and nuclear physics.
- **Connection to magnetic rigidity.** [[Magnetic Rigidity]] $B\rho = p/q = \gamma m v / q$ carries $\gamma$ explicitly — relativistic in-flight momenta in [[BigRIPS]] / [[RIBLL]] / fragment separators must use the $\gamma$-form, not $mv/q$.

## Examples

- **Time-of-flight measurement → $\gamma$.** A start–stop scintillator pair fixes $\beta$ from $L/(c\,\Delta t)$; $\gamma$ then follows directly. In [[DeltaE-Brho-TOF-Identification]], the trio $(\Delta E, B\rho, \mathrm{TOF})$ collapses to $(Z, A, \gamma)$ through this route.
- **Cosmic-ray muon survival.** Rest-frame muon lifetime is $\tau_{0} = 2.2\,\mu\mathrm{s}$. A muon with $\beta = 0.998$ has $\gamma \approx 15.8$, extending lab-frame lifetime to $\gamma\tau_{0} \approx 35\,\mu\mathrm{s}$ — long enough for upper-atmosphere muons to reach sea level, a textbook validation of [[Time Dilation]].
- **Heavy-ion regimes.** $\gamma$ at HIRFL ($\sim 80$ MeV/u, $\beta \approx 0.39$): $\approx 1.09$. At RIBF ($\sim 300$ MeV/u, $\beta \approx 0.65$): $\approx 1.32$. At the [[LHC]] (7 TeV/p): $\gamma \approx 7460$.

## Related Concepts

- [[Special Relativity]]
- [[Time Dilation]]
- [[Length Contraction]]
- [[Relativistic Momentum]]
- [[Relativistic Kinetic Energy]]
- [[Relativistic Total Energy]]
- [[Relativistic Force]]
- [[Energy-Momentum Relation]]
- [[Relativistic Forms of Physical Quantities]]
- [[Magnetic Rigidity]]
- [[Lorentz Transformations]]
- [[Lorentz Boost]]
- [[Speed of Light]]
- [[Inertial Frame]]
- [[Inverse Kinematics]]
- [[Doppler Broadening]]
- [[Relativity theory]]

## References

- K. S. Krane, *Introductory Nuclear Physics* (Wiley, 1988) — Appendix on relativistic kinematics.
- D. J. Griffiths, *Introduction to Electrodynamics*, 4th ed. (Pearson, 2013) — Ch. 12, relativistic mechanics.
- W. Rindler, *Relativity: Special, General, and Cosmological*, 2nd ed. (Oxford, 2006) — Ch. 2–3.
- Wikipedia: [Lorentz factor](https://en.wikipedia.org/wiki/Lorentz_factor).
