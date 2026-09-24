<!-- Verbatim source section; overview: [[../fm-ar-difficulty]] -->
<!-- SOURCE-BODY-START -->
## 2. Definitions

- Isotopes: p(1,1), d(1,2), t(1,3), ³He(2,3), ⁴He(2,4), ¹²C(6,12), ¹³C(6,13), ¹⁴C(6,14) as (Z,A).
- `relZ2A(i,j) = |Z²A_i − Z²A_j| / min(Z²A_i, Z²A_j)` — matches the anchor's "relative separation" convention (¹³C/¹⁴C → 1/13 ≈ 7.7%).
- `|Δ(A/Z)|` and `relA/Z = |Δ(A/Z)|/min(A/Z)` (both computed; conclusions identical, `|Δ(A/Z)|` reported).
- **Pair confusion (cross-class):** symmetrized boundary-crossing rate = mean of the two directional misroute rates `P(i→class(j))` and `P(j→class(i))`. Caveat: for the lumped "other" class, `i→other` is an upper bound (it includes misroutes to *other* isotopes inside the bucket); `j→i` is exact.
- **Same-class pairs:** class-level confusion is undefined (both route to "other" by construction). Proxy: total-variation distance between the two predicted-class distributions — a soft measure of how differently the model treats them.
- EXP8 classes: A=p, B=d, other={t, ³He, null}; unseen channels ⁴He, ¹²C, ¹³C, ¹⁴C are labeled "other" but were never trained — their misroutes measure **OOD rejection failure**, not a learned boundary.

<!-- SOURCE-BODY-END -->
