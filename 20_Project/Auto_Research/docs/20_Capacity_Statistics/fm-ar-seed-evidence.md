> Origin: `fm-ar-seed-evidence` scout report; recorded 2026-09-24.

# EXP3 seed-robust evidence audit — what on-disk artifacts support

**Date:** 2026-09-24 · **Scope:** EXP3 2×2 (XA/ResNet × Raw/HC), triton-vs-rest task (label bug) + partial 4He label-fix · **Source:** live checkout `/Users/Reid Hu/MATE-Automation/runs/` (gitignored; read-only) · **Worker:** fm-ar-seed-evidence (scout, CPU-local only)

**Headline:** every number on disk is the **triton-vs-rest** task, not 4He. Within that task, three claims are seed-robust (XA≈RN on HC; XA<RN on Raw; HC≫Raw), one mechanism claim is seed-robust (query content irrelevant, 6/6 checkpoints), and the paper's central claim (XA>RN, growing on Raw) is **contradicted on triton and untested on 4He** (0/4 label-fix runs complete). No paired per-event statistics are computable locally: exactly one `predictions.csv` exists (ResNet-HC-s42) and **zero checkpoints are local**. The cheapest gap-closer is not GPU training — it is CPU inference on box 176 to emit `predictions.csv` for the 10 other checkpoints, which unlocks McNemar/paired-bootstrap on the full 25k val set for free.

---

## 1. Run inventory (`/Users/Reid Hu/MATE-Automation/runs/EXP3-*`)

12 run directories, 11 completed training runs + 1 partial. All trained on AutoDL (`/root/autodl-tmp/z01-exec/runs/...` per `run_complete.json`), artifacts rsynced back. **No `best_model.pth` exists anywhere under local `runs/`** (verified: `find runs -name '*.pth'` → only two EXP8 checkpoints).

| Run dir | seed | status | metrics | history | split | preds | battery | attn | dur |
|---|---|---|---|---|---|---|---|---|---|
| EXP3-ResNet-HC-100k-seed0/20260921_092858 | 0 | complete | ✓ | ✓ (37 ep) | — | — | n/a | n/a | 3.5h |
| EXP3-ResNet-HC-100k-seed1/20260921_125613 | 1 | complete | ✓ | ✓ (32 ep) | — | — | n/a | n/a | 3.0h |
| EXP3-ResNet-HC-100k-seed42/20260921_002013 | 42 | complete | ✓ | ✓ (30 ep) | ✓ | **✓ 25k** | n/a | n/a | 2.8h |
| EXP3-ResNet-Raw-100k-seed0/20260921_231713 | 0 | complete | ✓ | ✓ (20 ep) | — | — | n/a | n/a | 4.9h |
| EXP3-ResNet-Raw-100k-seed1/20260922_041244 | 1 | complete | ✓ | ✓ (19 ep) | — | — | n/a | n/a | 4.7h |
| EXP3-ResNet-Raw-100k-seed42/20260921_181834 | 42 | complete | ✓ | ✓ (20 ep) | — | — | n/a | n/a | 5.0h |
| EXP3-XA-HC-100k-seed0/20260922_122647 | 0 | complete | ✓ | ✓ (31 ep) | — | — | ✓ | ✓ | 3.0h |
| EXP3-XA-HC-100k-seed1/20260922_152448 | 1 | complete | ✓ | ✓ (37 ep) | — | — | ✓ | ✓ | 3.5h |
| EXP3-XA-HC-100k-seed42/20260922_085316 | 42 | complete | ✓ | ✓ (38 ep) | — | — | ✓ | ✓ | 3.6h |
| EXP3-XA-Raw-100k-seed0/20260923_084135 | 0 | **recovered**¹ | ✓ | ✓ (23 ep) | ✗ 0-byte | — | ✓ | — | 7.4h |
| EXP3-XA-Raw-100k-seed42/20260922_185618 | 42 | complete | ✓ | ✓ (20 ep) | ✓ | — | ✓ | ✓ | 13.7h |
| EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749 | 42 | **partial**² | — | — | — | — | ✓ | — | killed |

¹ `run_complete.json` status `"recovered"`: "evaluator guard crash on AMP/FP32 drift (diff 1.2e-4); checkpoint metadata patched to recomputed acc; weights untouched". Its `data_split.json` is a **0-byte file** (sync truncation) — re-pull from box.
² Label-fix (4He) run killed at epoch ~13; local dir contains only `counterfactual_battery.json` — no metrics/history/config synced.

**Grid completeness:** triton 2×2 has 11/12 cells (XA-Raw-seed1 missing). 4He 2×2 has 0/12 (one partial XA-Raw-s42).

**Split determinism (verified):** `src/data/dataloader.py:379-394` — `train_test_split(random_state=seed)` on positions in the concatenated 125k-event file space. The two s42 `data_split.json` files (ResNet-HC and XA-Raw) contain **byte-identical `val_indices`** → same-seed arms evaluate on the same 25k events (different representations of the same events). Same-seed cross-arm comparisons are therefore *paired in principle*; only per-event predictions are missing to exploit it.

## 2. Feasibility of local CPU inference — NO

Three independent blockers on this Mac:

1. **No checkpoints.** `find runs -name '*.pth'` → only EXP8 weights. All 11 EXP3 `best_model.pth` (~45MB each) exist only on box 176 at `/root/autodl-tmp/z01-exec/runs/...` (paths enumerated in closing doc §7).
2. **No torch.** `python3 -c "import torch"` → ModuleNotFoundError (per AGENTS.md, torch is remote-only; installable ~200MB but pointless without 1 & 3).
3. **No Garfield H5.** `data/` contains only `srim/` and `trk_h5_v2/`; the ~25GB Garfield_{Raw,HC} files live on the box.

**Feasible on box 176 (proven, not estimated):** the counterfactual battery already ran there CPU-only under the 2GB cgroup cap (`--max-events 2000 --batch-size 64`, single-threaded) — 6 checkpoints × 5 conditions completed 2026-09-24. Full-25k inference per checkpoint ≈ 12.5× a battery condition ≈ tens of minutes CPU. **Do not pull 25GB of H5 to the Mac; run inference on-box and sync only `predictions.csv` (~1MB each).**

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

## 5. The seed-variance trap (for the writeup)

Accuracy seed-sd is 0.19–0.32pp, but counterfactual seed-variance is ~40× larger (zero_q: −5.8pp to −57.1pp across seeds on identical architecture). Multi-seed accuracy **does not** establish multi-seed mechanism. Any mechanism sentence in the paper needs the counterfactual battery on ≥2 seeds — which exists for triton XA (5 ckpts) but not yet for a converged 4He checkpoint.

## 6. Minimum runs to close each gap

Ordered by information-per-cost. GPU-hours from observed durations (§1): RN-HC ≈3h, RN-Raw ≈5h, XA-HC ≈3.4h, XA-Raw ≈7–14h (high variance; s42 took 13.7h).

| Gap | Action | Cost | Unlocks |
|---|---|---|---|
| **G0 — paired stats on existing runs** | On box 176 CPU: run `src/evaluation/evaluate.py` (already implements McNemar + paired bootstrap, lines ~257–321) or equivalent inference pass to emit `predictions.csv` for the 10 checkpoints lacking it; sync CSVs | **0 GPU-h; ~2–4 CPU-h on-box** | True McNemar + paired bootstrap CIs for all 5 same-seed pairs; enables D4 error-overlap for free |
| G1 — complete triton grid | Train XA-Raw-seed1 | ~7–14 GPU-h | C2 becomes 3/3 seeds |
| G2 — 4He headline | Train label-fix 2×2 seed42 (4 runs; XA-Raw-lf partial exists at ep13 — restart or continue per lead) | ~19–26 GPU-h | C11 testable; the paper's central claim lives or dies here |
| G3 — 4He seed-robust | Label-fix seeds 0,1 (8 runs) | ~38–52 GPU-h | Seed-robust 4He claims |
| G4 — 4He mechanism | Battery + attention metrics on converged 4He ckpts | 0 GPU-h (CPU on-box) | C5/C6/C9 cross-task confirmation; resolves whether +9.2pp zero_q survives convergence |
| G5 — H1 diagnostics | D1–D3 probes (pre-registered, closing doc §10) | 0 GPU-h | capacity vs crowding |

**Cheapest decisive path:** G0 (CPU, now) → G2 seed-42 4He 2×2 (~19–26 GPU-h) → gate everything else on Δ_Raw per the pre-registered table. G1 is skippable if the campaign pivots to 4He-only reporting; the triton deficit is already paired-significant on 2 seeds.

## 7. Commands used (reproduction)

```bash
# inventory
ls /Users/Reid\ Hu/MATE-Automation/runs/EXP3-*/*/
find /Users/Reid\ Hu/MATE-Automation/runs -name '*.pth'        # → EXP8 only
# metrics/stats: python3 json.load on metrics.json, counterfactual_battery.json,
#   exp4_attention_metrics.json, history.json, run_complete.json per run dir
# split identity: diff of val_indices in the two s42 data_split.json → identical
# stats: Wilson CI, unpaired z, McNemar bound χ²≥nΔ² — plain python3, no deps
```

## 8. Open questions for the lead (not blocking)

1. Do RN `best_model.pth` files still exist on box 176? Battery JSONs reference only XA checkpoints; G0 needs all 11.
2. Did the corrected label-fix battery re-run land? Local `EXP3-XA-Raw-100k-label-fix-seed42/.../counterfactual_battery.json` may predate the positional-label fix (closing doc §12 caveat).
3. XA-Raw-s0 `data_split.json` is 0 bytes locally — re-sync; also its `exp4_attention_metrics.json` was never produced (worth a CPU pass for the C10 single-seed gap).
4. Label-fix run dir has no metrics/history/config locally — does the full run record exist on-box (for the ep13 val trajectory + restart decision)?
5. `predictions.csv` exists only for ResNet-HC-s42 — was that a one-off manual eval, or does the training pipeline emit it only on demand? Determines whether G0 is a script flag or a new eval pass.
