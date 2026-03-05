---
area: "[[Fundamental_Knowledge]]"
tags: [math, linear-algebra, quantum-mechanics, Phase-0]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Eigenvalues and Eigenvectors

## Definition

Given a linear operator $A$ on a [[Vector_Spaces|vector space]], a non-zero vector $\mathbf{v}$ is an **eigenvector** with **eigenvalue** $\lambda$ if $A\mathbf{v} = \lambda\mathbf{v}$. The operator scales $\mathbf{v}$ without changing its direction.

## Key Points

- Eigenvalues are found by solving $\det(A - \lambda I) = 0$ (the characteristic equation)
- Eigenvectors with distinct eigenvalues are [[Linear Independence|linearly independent]]
- In QM, measurement outcomes are eigenvalues; the system collapses to the corresponding eigenvector
- A matrix is diagonalizable iff it has a [[Basis]] of eigenvectors

## Examples

- $A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$ has eigenvalues $\lambda = 2, 3$
- The Hamiltonian's eigenstates $|n\rangle$ satisfy $H|n\rangle = E_n|n\rangle$ — energy eigenstates form a [[Basis]]

## Related Concepts

- [[Vector_Spaces]]
- [[Matrix Operations]]
- [[Linear Independence]]
- [[Basis]]
- [[Hilbert Space]]
- [[Inner Product Spaces]]

## References

- Forward reference from [[Vector_Spaces]]
