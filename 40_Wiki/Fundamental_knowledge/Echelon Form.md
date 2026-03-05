---
area: "[[Linear_Algebra]]"
tags: [math, linear-algebra, matrix]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Echelon Form

## Definition

A matrix is in **(row) echelon form** if: (1) all zero rows are at the bottom, (2) the leading entry ([[Pivot|pivot]]) of each non-zero row is to the right of the pivot in the row above, and (3) all entries below each pivot are zero. Achieved via [[Row Reduction|row reduction]] (Gaussian elimination).

## Key Points

- **Reduced row echelon form (RREF)** additionally requires each pivot to be 1 and all entries above each pivot to be zero
- The number of pivots equals the [[Rank|rank]] of the matrix
- [[Free Variable|Free variables]] correspond to columns without pivots
- Echelon form reveals [[Linear Independence|linear independence]]: vectors are independent iff every column has a pivot

## Examples

- Echelon form: $\begin{pmatrix} 2 & 1 & 3 \\ 0 & -1 & 1 \\ 0 & 0 & 4 \end{pmatrix}$ — three pivots, rank 3
- RREF: $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ — the identity matrix

## Related Concepts

- [[Row Reduction]]
- [[Pivot]]
- [[Rank]]
- [[Free Variable]]
- [[Linear Independence]]
- [[Matrix Operations]]

## References

- Lay, *Linear Algebra and Its Applications*, Ch. 1