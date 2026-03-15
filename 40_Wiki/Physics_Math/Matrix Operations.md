---
area: "[[Fundamental_Knowledge]]"
tags: [math, linear-algebra, Phase-0]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Matrix Operations

## Definition

**Matrix operations** are the algebraic rules for manipulating matrices: addition, scalar multiplication, matrix multiplication, transposition, and inversion. Matrices represent linear transformations between [[Vector_Spaces|vector spaces]].

## Key Points

- Matrix multiplication is **not commutative**: $AB \neq BA$ in general
- $(AB)^T = B^T A^T$ — transpose reverses order
- A square matrix is invertible iff its [[Rank]] equals its size (full rank) iff $\det(A) \neq 0$
- [[Row Reduction]] is the primary computational tool for solving systems, finding [[Rank]], and testing [[Linear Independence]]

## Examples

- $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 5 \\ 6 \end{pmatrix} = \begin{pmatrix} 17 \\ 39 \end{pmatrix}$ — matrix-vector multiplication
- The identity matrix $I$ satisfies $AI = IA = A$ for any conformable matrix $A$

## Related Concepts

- [[Vector_Spaces]]
- [[Row Reduction]]
- [[Rank]]
- [[Eigenvalues and Eigenvectors]]
- [[Linear_Algebra]]

## References

- Next topic after [[Vector_Spaces]]
