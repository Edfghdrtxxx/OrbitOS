---
area: "[[Physics]]"
tags:
  - special-relativity
  - kinematics
  - relativistic-mechanics
  - index-moc
  - review/physics
created: 2026-05-21
last_reviewed:
next_review: 2026-05-21
review_interval: 0
sr-due: 2026-05-21
sr-interval: 1
sr-ease: 230
---
# Relativistic Forms of Physical Quantities

> [!important] All math expressions, equations, and formulas **must** use LaTeX notation (`$...$` for inline, `$$...$$` for display blocks).

> [!info] This is an **index / map-of-content** note: it gathers the relativistic generalizations of Newtonian mechanical quantities and links each to its own atomic note.

## Schematics

*This is an index/MOC note — see the linked atomic notes ([[Lorentz Factor]], [[Relativistic Momentum]], [[Relativistic Kinetic Energy]], [[Relativistic Total Energy]], [[Relativistic Force]], [[Energy-Momentum Relation]]) for their individual schematics, plots, and geometric visualizations.*

## Definition

In [[Special Relativity]], the Newtonian quantities momentum, energy, and force must be redefined so that they transform consistently under [[Lorentz Transformations]] between inertial frames. Every generalization is built from a single scaling factor, the [[Lorentz Factor]]
$$\gamma \;=\; \frac{1}{\sqrt{1-\beta^{2}}}, \qquad \beta \;\equiv\; \frac{v}{c},$$
and each reduces to its Newtonian counterpart for $v \ll c$.

## The Four Generalizations

- **[[Lorentz Factor]]** — $\gamma = 1/\sqrt{1-\beta^{2}}$. The universal scaling factor; appears in every relativistic quantity below.
- **[[Relativistic Momentum]]** — $\mathbf{p} = \gamma m \mathbf{v}$. Conserves under boosts; spatial part of the four-momentum.
- **[[Relativistic Kinetic Energy]]** — $K = (\gamma - 1) m c^{2}$. Work done by an external force to bring a particle from rest to $v$.
- **[[Relativistic Total Energy]]** — $E = \gamma m c^{2}$. Rest energy plus kinetic energy; time-component of the four-momentum.
- **[[Relativistic Force]]** — $\mathbf{F} = \mathrm{d}\mathbf{p}/\mathrm{d}t$. Velocity-dependent inertia: $F_{\parallel} = \gamma^{3} m a$, $F_{\perp} = \gamma m a$.

## The Invariant

- **[[Energy-Momentum Relation]]** — $E^{2} = (pc)^{2} + (mc^{2})^{2}$. The Lorentz-invariant norm of the four-momentum; reduces to $E = pc$ for massless particles.

## Quick-Reference Summary

| Quantity                | Newtonian               | Relativistic                                            | $v \ll c$ Limit                              |
| ----------------------- | ----------------------- | ------------------------------------------------------- | -------------------------------------------- |
| **Momentum** $\mathbf{p}$   | $m\mathbf{v}$           | $\gamma m \mathbf{v}$                                   | $\approx m\mathbf{v}$                        |
| **Kinetic Energy** $K$  | $\tfrac{1}{2} m v^{2}$  | $(\gamma - 1) m c^{2}$                                  | $\approx \tfrac{1}{2} m v^{2}$               |
| **Total Energy** $E$    | $K$                     | $\gamma m c^{2}$                                        | $\approx mc^{2} + \tfrac{1}{2} m v^{2}$      |
| **Force** $\mathbf{F}$  | $m\mathbf{a}$           | $\mathrm{d}(\gamma m \mathbf{v})/\mathrm{d}t$            | $\approx m\mathbf{a}$                        |
| **Mass-shell** (invariant) | —                    | $E^{2} = (pc)^{2} + (mc^{2})^{2}$                       | $\approx mc^{2} + p^{2}/(2m)$                |

## Pedagogical Notes

- All five formulas share the same scaling factor $\gamma$; mastering [[Lorentz Factor]] first makes the rest mechanical.
- The Newtonian forms are not "wrong" — they are the leading term of a Taylor expansion in $\beta^{2}$. The relativistic forms are needed once $\beta \gtrsim 0.3$ (corrections $\gtrsim 5\%$), which corresponds to $K/A \gtrsim 50$ MeV/u for nucleons — a threshold routinely crossed at modern heavy-ion facilities like [[BigRIPS]], [[RIBLL]], [[HIRFL]], and [[OEDO]].
- **Modern convention:** $m$ always denotes the invariant (rest) mass. The historical "relativistic mass" $\gamma m$ is avoided in current particle and nuclear physics.

## Related Concepts

- [[Special Relativity]]
- [[Lorentz Transformations]]
- [[Lorentz Boost]]
- [[Four-Momentum]]
- [[Mass-Energy Equivalence]]
- [[Invariant Mass]]
- [[Rest Energy]]
- [[Speed of Light]]
- [[Inertial Frame]]
- [[Time Dilation]]
- [[Length Contraction]]
- [[Inverse Kinematics]]
- [[Magnetic Rigidity]]
- [[DeltaE-Brho-TOF-Identification]]
- [[Doppler Broadening]]
- [[Relativity theory]]

## References

- K. S. Krane, *Introductory Nuclear Physics* (Wiley, 1988) — Appendix on relativistic kinematics.
- D. J. Griffiths, *Introduction to Electrodynamics*, 4th ed. (Cambridge, 2017) — Ch. 12.
- W. Rindler, *Relativity: Special, General, and Cosmological*, 2nd ed. (Oxford, 2006) — Ch. 2–6.
- J. D. Jackson, *Classical Electrodynamics*, 3rd ed. (Wiley, 1999) — Ch. 11.
- Wikipedia: [Special relativity](https://en.wikipedia.org/wiki/Special_relativity).
