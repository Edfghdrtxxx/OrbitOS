<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## B.5 Verdict per paper claim

| # | Claim | Verdict | Evidence |
|---|---|---|---|
| C1 | XA ≈ RN on HC (triton) | **seed-robust** (3 seeds) | Δ ∈ [−0.23,+0.04]pp; McNemar bound can't reach p<0.05 |
| C2 | XA < RN on Raw (triton) | **seed-robust on observed seeds; grid incomplete** | 2/2 seeds, McNemar-guaranteed p≤0.035/7.5e-4; survives balanced-acc; seed1 missing |
| C3 | Deficit concentrates in minority recall | **seed-robust** (2/2) | ΔC0rec −4.9/−8.7pp; bal-acc gap −2.7/−4.6pp |
| C4 | HC > Raw | **seed-robust** (5/5 pairs) | +6.5 to +8.6pp |
| C5 | Query content-free (H3 refuted) | **seed-robust + task-robust, with a power caveat** | permuted_q Δ=0 on 6/6 ckpts — but on Raw the query is ~constant by construction (A3); strong form proven on HC only |
| C6 | Classifier physics load-bearing on Raw | **direction-robust, interpretation unresolved** | zero_cls collapse 3/3 Raw ckpts + 4He — but OOD-artifact reading open until D5 (A2) |
| C7 | Physics redundant in HC head | **seed-variable** | zero_cls Δ +0.1/−0.4/−15.6pp — holds 2/3 seeds only |
| C8 | zero_q hurts | **seed-robust direction, wild magnitude** | −5.8 to −57.1pp triton; −12.1pp on corrected 4He (the +9.2pp flip is retracted — buggy-label artifact) |
| C9 | s0 anomaly (zero_both > zero_cls) | **single-seed; signature replicates on 4He** | 4He: zero_both 0.5235 > zero_cls 0.1935 — closing doc's "does not replicate" is wrong (A11) |
| C10 | HC sink / Raw Bragg-focus | sink **seed-robust** (3/3); Bragg-focus **single-seed** | XA-Raw-s0/lf attention never run; sink stats unreproduced (A10) |
| C11 | **Central claim: XA > RN, grows on Raw** | **contradicted on triton; untested on 4He** | C2; 4He 2×2 = 1/4 (XA-Raw-lf only, no comparator) |
| C12 | 4He learnable by XA-Raw | **single-seed, now a real converged number** | test 0.92136, α-recall 0.7254, ep13-best — but no RN comparator and no second seed |
| C13 | Any EXP3 number as a 4He result | **illegal except the lf run** | label bug; only `file_class_list [1,1,1,1,0]` run is true 4He |

**Honest paper position today:** on the (mislabeled) triton task the physics-informed arm never beats the generic baseline and is significantly worse exactly where the largest advantage was predicted. On the true 4He task exactly one arm of one cell exists (XA-Raw 0.9214) with no comparator — the central claim is untestable from disk. The strongest publishable mechanism facts are C5 (query content-free, 6/6 — with the Raw power caveat) and the *documented* OOD side-channel (EXP8 carbon leak + zero_cls collapse, pending D5).

<!-- SOURCE-BODY-END -->
