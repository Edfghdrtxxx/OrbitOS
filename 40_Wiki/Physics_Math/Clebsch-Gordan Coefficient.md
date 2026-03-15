---
area: "[[Physics]]"
tags:
  - quantum-mechanics
  - angular-momentum
  - nuclear-physics
created: 2026-03-15
last_reviewed:
next_review: 2026-03-15
review_interval: 0
---
# Clebsch-Gordan Coefficient

## Schematics

*No suitable open-license schematics found on Wikimedia Commons for this topic.*

## Definition

In [[quantum mechanics]], Clebsch-Gordan coefficients $\langle j_1\, m_1;\, j_2\, m_2 \mid J\, M \rangle$ are the expansion coefficients that arise when coupling two [[Angular Momentum|angular momenta]] $\mathbf{j}_1$ and $\mathbf{j}_2$ into a total angular momentum $\mathbf{J} = \mathbf{j}_1 + \mathbf{j}_2$, expressing the coupled basis state $|J, M\rangle$ as a [[Linear Combination]] of uncoupled product states $|j_1, m_1\rangle \otimes |j_2, m_2\rangle$.

## Key Points

- **Coupling rule:** $|J, M\rangle = \sum_{m_1, m_2} \langle j_1\, m_1;\, j_2\, m_2 \mid J\, M \rangle\, |j_1, m_1\rangle |j_2, m_2\rangle$ — the coefficients are real and satisfy orthogonality/normalization relations.
- **Selection rules:** Non-zero only when $M = m_1 + m_2$ and $|j_1 - j_2| \leq J \leq j_1 + j_2$ (the **triangle condition**).
- **Relation to Wigner 3-j symbols:** $\langle j_1\, m_1;\, j_2\, m_2 \mid J\, M \rangle = (-1)^{-j_1+j_2-M}\,\sqrt{2J+1}\begin{pmatrix} j_1 & j_2 & J \\ m_1 & m_2 & -M \end{pmatrix}$ — the [[Wigner 3-j Symbol|3-j symbol]] is preferred in theory for its higher symmetry.
- **Isospin CG coefficient in nuclear physics:** In [[Transfer Reactions]] such as $(d,p)$, the isospin CG coefficient $C$ couples the isospin states of the target and residual nucleus. The measured quantity is the product $C^2S$, where $S$ is the [[Spectroscopic Factor]], because [[DWBA]] cross sections are proportional to this combined factor.
- Computed via recursion relations or looked up in standard tables; special cases (e.g., one angular momentum is $1/2$) yield simple closed-form expressions.

## Examples

- **Coupling two spin-$1/2$ particles:** The triplet state $|1, 0\rangle = \frac{1}{\sqrt{2}}\bigl(|\!\uparrow\downarrow\rangle + |\!\downarrow\uparrow\rangle\bigr)$ — here $\langle \tfrac{1}{2},\, +\tfrac{1}{2};\, \tfrac{1}{2},\, -\tfrac{1}{2} \mid 1,\, 0 \rangle = 1/\sqrt{2}$.
- **Nuclear $(d,p)$ reaction:** In ${}^{14}\text{C}(d,p){}^{15}\text{C}$, the isospin CG coefficient $C$ accounts for coupling a transferred neutron ($t = 1/2$) to the ${}^{14}\text{C}$ core isospin, and the experimentally extracted $C^2S$ is compared against [[40_Wiki/Physics_Math/Nuclear Shell Model|shell-model]] predictions.

## Related Concepts

- [[Angular Momentum]]
- [[Quantum Numbers]]
- [[Spectroscopic Factor]]
- [[Wigner 3-j Symbol]]
- [[Isospin]]
- [[Racah Coefficient]]
- [[Superposition]]

## References

- A.R. Edmonds, *Angular Momentum in Quantum Mechanics* (Princeton University Press, 1957)
- A. de-Shalit & I. Talmi, *Nuclear Shell Theory* (Academic Press, 1963) — Ch. 6 on isospin CG coefficients in nuclear reactions
