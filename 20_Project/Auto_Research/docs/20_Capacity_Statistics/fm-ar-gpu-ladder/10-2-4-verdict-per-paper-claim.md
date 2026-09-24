<!-- Verbatim source section; overview: [[../fm-ar-gpu-ladder]] -->
<!-- SOURCE-BODY-START -->
## 2.4 Verdict per paper claim

| Claim | Verdict | Evidence |
|---|---|---|
| XA ≈ RN on HC (triton) | **seed-robust** (3/3) | Δ ∈ [−0.23, +0.04]pp; no discordant split reaches p<0.05 |
| XA < RN on Raw (triton) | **seed-robust on observed seeds; grid 2/3** | 2/2 seeds, guaranteed p≤1.5e-5 / 4.5e-12; survives balanced-acc (−2.7/−4.6pp); s1 missing |
| Deficit concentrates in minority recall | **seed-robust** (2/2) | Δc0rec −4.9/−8.7pp |
| HC > Raw | **seed-robust** (5/5 pairs) | +6.5 to +8.6pp, guaranteed-significant |
| Query content-free (H3 refuted) | **seed-robust + task-robust, power caveat** | permuted_q Δ=0 on 6/6 ckpts incl. corrected 4He — but on Raw the query is ~constant by construction (Izz≈170 DC dominates; feature-norm §3c) |
| Classifier physics load-bearing on Raw | **direction-robust, interpretation open** | zero_cls collapse on 3/3 Raw ckpts + 4He — OOD-artifact vs genuine dependence awaits D5/D6 |
| Physics redundant in HC head | **seed-variable** | zero_cls Δ +0.1/−0.4/−15.6pp — holds 2/3 seeds |
| zero_q hurts | **direction-robust, wild magnitude** | −5.8 to −57.1pp triton; −12.1pp corrected 4He |
| s0 anomaly (zero_both > zero_cls) | **single-seed; signature replicates on 4He** | 4He: 0.5235 > 0.1935 (+33pp) — closing doc's corrected NOTE now agrees |
| HC sink / Raw Bragg-focus | sink **seed-robust** (3/3); Bragg-focus **single-seed** | XA-Raw-s0/lf attention never run |
| **Central claim: XA > RN, grows on Raw** | **contradicted on triton; untested on 4He** | Raw Δ = −1.3/−2.1pp guaranteed-significant; 4He has no comparator |
| 4He learnable by XA-Raw | **single-seed, real converged number** | 0.92136, α-recall 0.7254, best ep 13 |
| Any EXP3 number as a 4He result | **illegal except the lf run** | label bug; only `file_class_list [1,1,1,1,0]` is true 4He |

**Honest paper position today:** on the (mislabeled) triton task the physics-informed arm never beats the generic baseline and is significantly worse exactly where the largest advantage was predicted — seed-robust on the observed seeds, guaranteed-significant without any further compute. On the true 4He task exactly one arm of one cell exists (XA-Raw 0.9214) with no comparator — the central claim is untestable from disk. The strongest publishable mechanism facts are the query's content-freeness (6/6, with the Raw power caveat) and the documented OOD side-channel.

<!-- SOURCE-BODY-END -->
