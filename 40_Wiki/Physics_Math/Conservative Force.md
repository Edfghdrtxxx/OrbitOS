---
area: "[[Physics]]"
tags: [classical-mechanics, forces]
created: 2026-03-30
last_reviewed:
next_review: 2026-03-30
review_interval: 0
---
# Conservative Force

## Schematics

![[Conservative_Force_schematic.svg]]
*Two paths between the same start and end points under gravity: the straight path (green) and a winding path (blue) yield the same total work, illustrating path independence of a conservative force. (Public domain, Wikimedia Commons)*

![[Conservative_Force_diagram.png]]
*Relationships between conservative field potentials and forces: gravitational potential $V_G(\vec{r})$, potential energy $W_{pot}(\vec{r})$, and Coulomb potential $V_C(\vec{r})$ relate to their corresponding force fields via the negative gradient $-\vec{\nabla}$. (CC0, Wikimedia Commons)*

## Definition

A conservative force is a force for which the [[work]] done in moving a particle between two points is independent of the path taken. Equivalently, the total work done around any closed loop is zero: $\oint \mathbf{F} \cdot d\mathbf{r} = 0$. A conservative force can always be expressed as the negative gradient of a scalar [[Potential Energy Surface|potential energy]] function: $\mathbf{F} = -\nabla U$.

## Key Points

- **Path independence:** Work depends only on the initial and final positions, not on the trajectory connecting them
- **Curl-free condition:** A force is conservative if and only if $\nabla \times \mathbf{F} = 0$ (in a simply connected domain)
- **Potential energy:** Every conservative force has an associated potential energy $U(\mathbf{r})$, so that total mechanical energy $E = T + U$ is conserved
- **Reversibility:** Work done against a conservative force is fully recoverable — energy stored as potential energy can be converted back to kinetic energy

## Examples

- **Gravity** (near Earth's surface): $\mathbf{F} = -mg\hat{z}$, with potential $U = mgh$
- **Electrostatic (Coulomb) force:** $\mathbf{F} = \frac{1}{4\pi\epsilon_0}\frac{q_1 q_2}{r^2}\hat{r}$, with $U = \frac{1}{4\pi\epsilon_0}\frac{q_1 q_2}{r}$ — directly relevant to [[Coulomb Barrier]] and [[Electric Field]]
- **Spring force** ([[Harmonic Oscillator]]): $\mathbf{F} = -kx$, with $U = \frac{1}{2}kx^2$

## Related Concepts

- [[Non-conservative Force]] — the complementary class of forces where path independence fails
- [[Potential Energy Surface]]
- [[Canonical Transformation]]
- [[Hamilton-Jacobi Equation]]
- [[Euler-Lagrange-Equation]]
- [[Angular Momentum]] — conserved quantity in central conservative force fields
- [[Lorentz Force]]

## References

- Goldstein, Poole & Safko, *Classical Mechanics*, 3rd ed., Ch. 1
- Taylor, *Classical Mechanics*, Ch. 4
