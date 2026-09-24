<!-- Verbatim source section; overview: [[../fm-ar-label-blast]] -->
<!-- SOURCE-BODY-START -->
## 2.5 Verdict per paper claim (triton-task semantics)

| Claim | Verdict | Evidence |
|---|---|---|
| XA ≈ RN on HC | **seed-robust** (3/3) | Δ∈[−0.23,+0.04]pp |
| XA < RN on Raw | **seed-robust on observed seeds; grid 11/12** | 2/2 seeds, McNemar-bound p≤0.035/7.5e-4; survives balanced-acc (−2.7/−4.6pp) |
| Deficit concentrates in minority recall | **seed-robust** (2/2) | Δc0-rec −4.9/−8.7pp |
| HC > Raw | **seed-robust** (5/5) | +6.5–8.6pp |
| Query content-free (H3 refuted) | **seed-robust + task-robust, power caveat on Raw** | permuted_q Δ=0 on 6/6 ckpts incl. corrected 4He |
| Classifier physics load-bearing on Raw | **direction-robust; OOD-artifact reading open until D5** | zero_cls→minority-prevalence on 3/3 Raw + 4He |
| zero_q hurts | **direction seed-robust, magnitude wild** | −5.8 to −57.1pp triton; −12.1pp 4He |
| s0 anomaly (zero_both>zero_cls) | **single-seed; signature replicates on 4He** | 0.5235>0.1935 |
| HC attention sink / Raw Bragg-focus | sink **seed-robust** (3/3); Bragg **single-seed** | XA-Raw-s0/lf attention never run |
| **Central claim XA>RN growing on Raw** | **contradicted on triton; untested on 4He** | 4He 2×2 = 1/4, no comparator |
| 4He learnable (XA-Raw-lf 0.9214) | **single-seed, real converged number** | no RN comparator, no second seed |

**Honest position:** identical to referee's — on the measured (triton) task XA never beats RN and is significantly worse exactly where the paper predicted the largest gain; on true 4He exactly one cell of one arm exists. Comparative claims (XA-vs-RN, HC-vs-Raw) are internally valid on the triton task; only the task identity is wrong.

<!-- SOURCE-BODY-END -->
