---
area: "[[Linear_Algebra]]"
tags: [math, linear-algebra, matrix]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Pivot

## Definition

A **pivot** (or pivot position) is the first non-zero entry in each row of a matrix in [[Echelon Form|echelon form]]. During [[Row Reduction|row reduction]], the pivot determines which row operations to perform to eliminate entries below (and above, for RREF) it.

## Key Points

- The number of pivots equals the [[Rank|rank]] of the matrix
- A pivot column corresponds to a basic variable; a non-pivot column corresponds to a [[Free Variable|free variable]]
- If the pivot position contains zero, a row swap is needed before elimination can proceed
- Pivot positions determine [[Linear Independence|linear independence]]: $n$ vectors in $\mathbb{R}^m$ are independent iff the matrix has $n$ pivots

## Examples

- In $\begin{pmatrix} \mathbf{1} & 2 & 3 \\ 0 & \mathbf{4} & 5 \\ 0 & 0 & \mathbf{6} \end{pmatrix}$, the pivots are 1, 4, 6 (bolded) — rank 3
- If a row reduces to all zeros, that row has no pivot and contributes to dependence

## Related Concepts

- [[Echelon Form]]
- [[Row Reduction]]
- [[Rank]]
- [[Free Variable]]
- [[Linear Independence]]

## References

- Lay, *Linear Algebra and Its Applications*, Ch. 1
