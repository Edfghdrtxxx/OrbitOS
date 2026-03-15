---
area: "[[Physics]]"
tags:
  - quantum-mechanics
  - angular-momentum
created: 2026-03-15
last_reviewed:
next_review: 2026-03-15
review_interval: 0
---
# Wigner 3-j Symbol

## Schematics

*No suitable open-license schematics found on Wikimedia Commons for this topic.*

## Definition

The Wigner 3-j symbol $\begin{pmatrix} j_1 & j_2 & j_3 \\ m_1 & m_2 & m_3 \end{pmatrix}$ is a mathematical object that arises in the coupling of three [[Angular Momentum|angular momenta]] in [[quantum mechanics]]. It is a symmetrized, phase-convention-independent alternative to the [[Clebsch-Gordan Coefficient]], related by:

$$\begin{pmatrix} j_1 & j_2 & J \\ m_1 & m_2 & -M \end{pmatrix} = \frac{(-1)^{j_1-j_2+M}}{\sqrt{2J+1}} \langle j_1\, m_1;\, j_2\, m_2 \mid J\, M \rangle$$

## Key Points

- **Higher symmetry:** The 3-j symbol has simple symmetry properties under column permutations — even permutations leave it unchanged, odd permutations multiply by $(-1)^{j_1+j_2+j_3}$, and sign-flipping all $m$ values gives the same phase factor.
- **Selection rules:** Vanishes unless $m_1 + m_2 + m_3 = 0$ and the triangle condition $|j_1 - j_2| \leq j_3 \leq j_1 + j_2$ is satisfied.
- **Orthogonality:** Satisfies $\sum_{m_1 m_2} \begin{pmatrix} j_1 & j_2 & j_3 \\ m_1 & m_2 & m_3 \end{pmatrix} \begin{pmatrix} j_1 & j_2 & j_3' \\ m_1 & m_2 & m_3' \end{pmatrix} = \frac{\delta_{j_3 j_3'}\,\delta_{m_3 m_3'}}{2j_3+1}$, which encodes the completeness of the angular momentum coupling basis.
- **Relation to higher-order symbols:** The 3-j symbol is the building block for [[Racah Coefficient|6-j symbols]] (recoupling of three angular momenta) and 9-j symbols (recoupling of four), which appear in complex [[Nuclear Shell Model|shell-model]] matrix elements and [[Nuclear Transition|transition]] rate calculations.

## Examples

- **Scalar coupling:** For $j_1 = j_2 = j$ and $j_3 = 0$, the 3-j symbol reduces to $\begin{pmatrix} j & j & 0 \\ m & -m & 0 \end{pmatrix} = \frac{(-1)^{j-m}}{\sqrt{2j+1}}$, which appears in the contraction of spherical tensor operators.
- **Transition matrix elements:** In [[Gamma Spectroscopy|gamma-ray spectroscopy]], the reduced matrix element for an electromagnetic transition of multipolarity $L$ involves 3-j symbols coupling the initial and final state angular momenta with $L$, determining selection rules and relative intensities.

## Related Concepts

- [[Clebsch-Gordan Coefficient]]
- [[Angular Momentum]]
- [[Quantum Numbers]]
- [[Racah Coefficient]]
- [[Nuclear Shell Model]]
- [[Spectroscopic Factor]]
- [[Superposition]]

## References

- A.R. Edmonds, *Angular Momentum in Quantum Mechanics* (Princeton University Press, 1957) — Ch. 3 on 3-j symbols and their symmetry properties
- D.A. Varshalovich, A.N. Moskalev & V.K. Khersonskii, *Quantum Theory of Angular Momentum* (World Scientific, 1988)
