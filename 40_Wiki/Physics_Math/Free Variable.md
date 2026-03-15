---
area: "[[Linear_Algebra]]"
tags: [math, linear-algebra, systems]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Free Variable

## Definition

A **free variable** is a variable in a linear system that does **not** correspond to a [[Pivot|pivot]] column in the [[Echelon Form|echelon form]] of the coefficient matrix. Free variables can take any value, and the basic (pivot) variables are expressed in terms of them.

## Key Points

- Free variables arise when the system has more unknowns than independent equations (i.e., [[Rank|rank]] < number of unknowns)
- Each free variable adds one degree of freedom to the solution set, expanding the [[Dimension|dimension]] of the solution [[Subspace|subspace]]
- Setting each free variable to 1 (others to 0) and back-substituting yields [[Basis|basis]] vectors for the null space
- A system has a unique solution iff there are **no** free variables

## Examples

- System with 3 unknowns and rank 2: one free variable, solution is a line through the origin
- In parametrization: if $z$ is free, write $x = 2z$, $y = -z$ — the solution is $z(2, -1, 1)$, a 1D [[Subspace|subspace]]

## Related Concepts

- [[Pivot]]
- [[Echelon Form]]
- [[Row Reduction]]
- [[Rank]]
- [[Subspace]]
- [[Basis]]
- [[Dimension]]

## References

- Lay, *Linear Algebra and Its Applications*, Ch. 1