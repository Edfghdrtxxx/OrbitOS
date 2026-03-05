---
area: "[[Fundamental_Knowledge]]"
tags: [math, linear-algebra, Phase-0]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Rank

## Definition

The **rank** of a matrix is the number of pivots (non-zero rows) after [[Row Reduction]]. Equivalently, it is the [[Dimension]] of the column space (or row space) — row rank always equals column rank.

## Key Points

- Vectors are [[Linear Independence|linearly independent]] iff the rank of their matrix equals the number of vectors
- **Row rank = column rank**: each pivot witnesses one independent row and one independent column
- For an $m \times n$ matrix: $\text{rank} \leq \min(m, n)$
- The **nullity** (dimension of the null space) satisfies rank + nullity = number of columns

## Examples

- Three vectors in $\mathbb{R}^3$ with rank 2 → one vector is a [[Linear Combination]] of the other two
- A $3 \times 3$ matrix with rank 3 is invertible (full rank)

## Related Concepts

- [[Vector_Spaces]]
- [[Row Reduction]]
- [[Linear Independence]]
- [[Dimension]]
- [[Basis]]
- [[Matrix Operations]]

## References

- Derived from [[Vector_Spaces]] problems P2.1, P2.7
