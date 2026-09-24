<!-- Verbatim source section; overview: [[../fm-ar-seed-evidence]] -->
<!-- SOURCE-BODY-START -->
## 4. Verdict per paper claim

| # | Claim | Verdict | Evidence |
|---|---|---|---|
| C1 | XA ≈ RN on HC (triton) | **seed-robust** (3 seeds) | Δ ∈ [−0.23,+0.04]pp; McNemar bound can't reach p<0.05; unpaired p≥0.20 |
| C2 | XA < RN on Raw (triton) | **seed-robust on observed seeds; grid incomplete** | 2/2 seeds, Δ −1.33/−2.13pp, McNemar-guaranteed p≤0.035/7.5e-4; **seed1 missing** |
| C3 | Deficit concentrates in minority-class recall | **seed-robust** (2/2) | ΔC0rec −4.9/−8.7pp |
| C4 | HC > Raw representation | **seed-robust** (5/5 pairs) | +6.5 to +8.6pp |
| C5 | Physics query carries no event-specific signal (H3 refuted) | **seed-robust + task-robust** | permuted_q Δ=0, 6/6 checkpoints, both tasks |
| C6 | Classifier-side physics load-bearing on Raw | **seed-robust direction; variable magnitude** | zero_cls collapse 3/3 Raw ckpts incl. 4He |
| C7 | Physics redundant in HC head | **seed-variable** | zero_cls Δ −0.4/+0.1/−15.6pp across seeds |
| C8 | zero_q (constant query) hurts | **contradicted as universal** | −57pp … +9.2pp; sign flips on undertrained 4He |
| C9 | XA-Raw-s0 anomaly (zero_both 0.772 > zero_cls 0.41) | **single-seed by definition** | one checkpoint; needs s1 + 4He converged ckpt |
| C10 | HC attention sink / Raw Bragg-focus | sink **seed-robust** (3/3); Bragg-focus **single-seed** | §3e |
| C11 | **Paper central claim: XA > RN, advantage grows on Raw** | **contradicted on triton; untested on 4He** | C2; 4He 2×2 = 0/4 runs |
| C12 | 4He task learnable by XA-Raw ≥0.92 | **single-seed, provisional** | one partial run, val-only ep13, no test eval; battery row possibly pre-bugfix |
| C13 | All EXP3 numbers as *4He* results | **illegal** (label bug) | closing doc §1; raw label 4 = triton in Garfield HDF5 |

**Honest paper position today:** on the (mislabeled) triton task the physics-informed architecture never beats the generic baseline and is significantly worse exactly where the paper predicted the largest advantage. Nothing can be claimed about 4He until the label-fix 2×2 runs. The strongest publishable mechanism facts are C5 (query content-free, 6/6) and C6 (classifier physics dependence on Raw, 3/3) — both seed-robust *and* task-robust.

<!-- SOURCE-BODY-END -->
