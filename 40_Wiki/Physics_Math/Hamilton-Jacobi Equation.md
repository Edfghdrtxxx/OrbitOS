---
area: "[[Physics]]"
tags: [classical-mechanics, analytical-mechanics, PDE]
created: 2026-03-29
last_reviewed:
next_review: 2026-03-29
review_interval: 0
---
# Hamilton-Jacobi Equation

## Schematics

![[Hamilton-Jacobi_equation_diagram.svg]]
*Roadmap of classical mechanics showing parallel Newtonian and variational formulations, with the Hamilton-Jacobi equation as the culmination of the Lagrangian-Hamiltonian line of development. (CC BY-SA 4.0, Wikimedia Commons)*

## Definition

The Hamilton-Jacobi (HJ) equation is a first-order, nonlinear [[Partial Differential Equation|partial differential equation]] for Hamilton's principal function $S(q, t)$:

$$\frac{\partial S}{\partial t} + H\!\left(q_1, \dots, q_n,\; \frac{\partial S}{\partial q_1}, \dots, \frac{\partial S}{\partial q_n},\; t\right) = 0$$

where $H$ is the [[Hamiltonian Mechanics|Hamiltonian]] and the momenta are replaced by $p_i = \partial S / \partial q_i$. It reformulates classical mechanics so that solving one PDE replaces solving $2n$ first-order Hamilton's equations.

## Key Points

- **Canonical transformation viewpoint:** The principal function $S$ generates a [[Canonical Transformation|canonical transformation]] to new coordinates in which the transformed Hamiltonian vanishes, making the new momenta and coordinates constants of motion.
- **Time-independent case:** When $H$ has no explicit time dependence, separation $S = W(q) - Et$ yields the time-independent HJ equation $H(q, \nabla W) = E$, where $W$ is Hamilton's characteristic function.
- **Separation of variables:** If the HJ equation is separable in a coordinate system, each separated equation yields a conserved quantity — this is the standard route to [[Action-Angle Variables|action-angle variables]] and exact solutions for integrable systems.
- **Connection to quantum mechanics:** The [[Schrodinger-Equation|Schrodinger equation]] reduces to the HJ equation in the classical limit ($\hbar \to 0$) via the [[WKB Approximation|WKB approximation]], where the phase of the wavefunction plays the role of $S$.
- **Relation to the [[Euler-Lagrange-Equation|Euler-Lagrange equation]]:** Both are equivalent reformulations of classical mechanics; the HJ equation arises from the variational principle applied to the action integral $S = \int L\, dt$.

## Examples

1. **Free particle:** $H = p^2/2m$ gives $S = \frac{(q - q_0)^2}{2(t - t_0)} m$, recovering uniform straight-line motion.
2. **[[Harmonic Oscillator]]:** Separation in $(q, t)$ yields oscillatory solutions with $W = \int \sqrt{2m(E - \tfrac{1}{2}k q^2)}\, dq$, directly producing the action variable $J = E/\omega$.

## Related Concepts

- [[Hamiltonian Mechanics]]
- [[Canonical Transformation]]
- [[Action-Angle Variables]]
- [[Euler-Lagrange-Equation]]
- [[Schrodinger-Equation]]
- [[WKB Approximation]]
- [[Harmonic Oscillator]]
- [[Eikonal Equation]]

## References

- H. Goldstein, C. Poole, J. Safko, *Classical Mechanics*, 3rd ed. (Addison-Wesley, 2002), Ch. 10.
- L. D. Landau, E. M. Lifshitz, *Mechanics*, 3rd ed. (Butterworth-Heinemann, 1976), Sec. 47-48.
