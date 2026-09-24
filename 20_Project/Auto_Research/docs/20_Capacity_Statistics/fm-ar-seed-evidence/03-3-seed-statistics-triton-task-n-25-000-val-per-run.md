<!-- Verbatim source section; overview: [[../fm-ar-seed-evidence]] -->
<!-- SOURCE-BODY-START -->
## 3. Seed statistics — triton task, n=25,000 val per run

### 3a. Per-arm (accuracy / macro-F1 / class-0 recall)

| Arm | seeds | accuracy per seed | mean ± sd | Wilson 95% CI (on mean, n=25k) | class-0 recall |
|---|---|---|---|---|---|
| ResNet-HC | 0,1,42 | 0.95448 / 0.95748 / 0.95908 | **0.95701 ± 0.0023** | [0.9544, 0.9595] | 0.847 / 0.839 / 0.848 |
| XA-HC | 0,1,42 | 0.95412 / 0.95788 / 0.95676 | **0.95625 ± 0.0019** | [0.9536, 0.9587] | 0.830 / 0.854 / 0.828 |
| ResNet-Raw | 0,1,42 | 0.88904 / 0.89224 / 0.89248 | **0.89125 ± 0.0019** | [0.8873, 0.8951] | 0.609 / 0.578 / 0.636 |
| XA-Raw | 0,42 | 0.87572 / 0.87116 | **0.87344 ± 0.0032** | [0.8693, 0.8775] | 0.560 / 0.548 |

Seed dispersion of accuracy is tiny everywhere (sd ≤ 0.32pp) — but see §5: mechanism-level seed variance is ~100× larger.

### 3b. Same-seed paired comparisons (XA − RN), n=25,000 each

Per-event predictions exist for only one run, so McNemar/paired-bootstrap are **not computable**. Two substitutes reported:

- **Unpaired two-proportion z** (conservative: same val events → positive covariance → paired test is strictly more powerful).
- **McNemar lower bound:** with discordants b,c, |b−c| ≥ n|Δacc| and χ²=(b−c)²/(b+c) ≥ n·Δ². This bound needs only the two accuracies — it is a *guaranteed* significance floor, no per-event data required.

| Comparison | Δ acc | unpaired z (p) | McNemar χ² ≥ nΔ² (p ≤) | Δ class-0 recall |
|---|---|---|---|---|
| HC s0 | −0.04pp | −0.19 (0.85) | ≥0.004 (≤0.95) | −1.7pp |
| HC s1 | +0.04pp | +0.22 (0.82) | ≥0.004 (≤0.95) | +1.4pp |
| HC s42 | −0.23pp | −1.29 (0.20) | ≥0.13 (≤0.71) | −2.1pp |
| **Raw s0** | **−1.33pp** | **−4.62 (3.8e-6)** | **≥4.44 (≤0.035)** | **−4.9pp** |
| **Raw s42** | **−2.13pp** | **−7.39 (1.5e-13)** | **≥11.36 (≤7.5e-4)** | **−8.7pp** |

Read: on HC the bound can't even reach significance — consistent with noise. On Raw, **s42 is guaranteed McNemar-significant (p≤7.5e-4) and s0 is guaranteed p≤0.035** regardless of the unknown discordant split. The XA-Raw deficit is real and paired-significant on both observed seeds, not an unpaired artifact.

### 3c. Representation effect (HC − Raw), same arch+seed

| Pair | Δ |
|---|---|
| ResNet s0/s1/s42 | +6.54 / +6.52 / +6.66 pp |
| XA s0/s42 | +7.84 / +8.56 pp |

Seed-robust, ~30× larger than seed sd, same sign 5/5.

### 3d. Counterfactual battery seed-robustness (n=2000 val subsets, box-176 CPU)

| Checkpoint | ep | orig | permuted_q Δ | zero_q Δ | zero_cls Δ | zero_both Δ |
|---|---|---|---|---|---|---|
| XA-HC s0 | 23 | 0.9530 | +0.0005 | −0.058 | −0.156 | −0.055 |
| XA-HC s1 | 21 | 0.9605 | 0.000 | −0.383 | −0.004 | −0.156 |
| XA-HC s42 | 22 | 0.9530 | −0.0005 | −0.463 | +0.001 | −0.146 |
| XA-Raw s0 | 7 | 0.8675 | 0.000 | −0.571 | −0.457 | −0.096 |
| XA-Raw s42 | 12 | 0.8715 | 0.000 | −0.065 | −0.678 | −0.677 |
| XA-Raw-lf s42 (4He) | 13 | 0.7005 | 0.000 | **+0.092** | −0.493 | −0.197 |

- **permuted_q: Δ=0 on 6/6 checkpoints** (|Δ|≤0.0005, i.e. ≤1 event in 2000), both representations, both tasks. The single most seed-robust mechanism fact in the campaign.
- **zero_q: NOT seed-robust** — range −57.1pp to +9.2pp (~40× spread, sign flip across tasks). Any claim about the query's *value* is seed/task-dependent; only its *content-irrelevance* is invariant.
- **zero_cls: representation-split, direction-robust.** Raw: collapse on 3/3 checkpoints (−45.7/−67.8/−49.3pp, incl. 4He) → classifier physics dependence is task-invariant on Raw. HC: redundant on s42/s1 (−0.4/+0.1pp) but −15.6pp on s0 → redundancy is seed-variable, not absolute.
- ⚠️ The local label-fix battery JSON may be the **pre-fix run** — closing doc §12 caveat says the first 4He battery had a positional-label bug and a corrected re-run was pending. Verify with lead before quoting the 4He row.

### 3e. EXP4 attention metrics (500 correct val events per checkpoint)

| Checkpoint | f_Bragg class0 | f_Bragg class1 | verdict |
|---|---|---|---|
| XA-HC s0/s1/s42 | 0.005 / 0.014 / 0.020 | 0.018 / 0.021 / 0.059 | sink, **all 3 seeds** (p≤1e-25) |
| XA-Raw s42 | 0.467 | 0.480 | track-focused (p≤1e-11) — **single seed** |
| XA-Raw s0, XA-Raw-lf | — | — | never run |

HC sink is seed-robust (3/3). Raw Bragg-focus is single-seed; XA-Raw-s0 attention metrics were never produced.

<!-- SOURCE-BODY-END -->
