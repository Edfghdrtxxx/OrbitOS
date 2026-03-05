---
area: "[[Fundamental_Knowledge]]"
tags: [math, linear-algebra, Phase-0]
created: 2026-03-04
last_reviewed:
next_review: 2026-03-04
review_interval: 0
---
# Row Reduction

## Definition

**Row reduction** (Gaussian elimination) is an algorithm that transforms a matrix into **echelon form** using three elementary row operations: (1) swap two rows, (2) multiply a row by a non-zero scalar, (3) add a scalar multiple of one row to another. It reveals the [[Rank]] and [[Linear Independence]] structure.

## Key Points

- A row swap is needed **only** when the current pivot position is zero — not for "nicer" numbers
- Always label every operation explicitly (e.g., $R_2 \to R_2 - 3R_1$) to avoid errors
- The number of non-zero rows in echelon form equals the [[Rank]]
- Free variable columns identify [[Linear Independence|linearly dependent]] vectors — back-substitute to find the dependency relation

## Examples

- $\begin{pmatrix} 1 & 2 & -1 \\ 3 & 5 & 0 \\ 2 & 3 & 1 \end{pmatrix} \xrightarrow{R_2 - 3R_1,\; R_3 - 2R_1} \begin{pmatrix} 1 & 2 & -1 \\ 0 & -1 & 3 \\ 0 & -1 & 3 \end{pmatrix} \xrightarrow{R_3 - R_2} \begin{pmatrix} 1 & 2 & -1 \\ 0 & -1 & 3 \\ 0 & 0 & 0 \end{pmatrix}$ — rank 2

## Related Concepts

- [[Vector_Spaces]]
- [[Rank]]
- [[Linear Independence]]
- [[Matrix Operations]]
- [[Basis]]

## References

- Derived from [[Vector_Spaces]] practice problems P2.1, P2.5
