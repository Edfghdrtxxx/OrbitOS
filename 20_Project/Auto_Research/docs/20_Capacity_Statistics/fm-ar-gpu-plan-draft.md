> Origin: `fm-ar-gpu-plan-draft` scout report; recorded 2026-09-24.

# DRAFT — Minimal ranked experiment set to close EXP3 evidence gaps (input for budget gate)

**Status: DRAFT — input for a later strategic budget gate (council + captain approval). Not a decision, not a fire order.**
**Date:** 2026-09-24 · **Worker:** fm-ar-gpu-plan-draft (scout, read-only on `/Users/Reid Hu/MATE-Automation`)
**Sources synthesized:** fm-ar-seed-evidence, fm-ar-comparisons, fm-ar-capacity-critique, fm-ar-difficulty, fm-ar-results-audit reports; `20_doc/EXP3_closing_analysis_2026-09-24.md`; campaign record `firstmate/data/auto-research-exp3.md`; run artifacts under `runs/EXP3-*/`.

---

## 0. Two facts that changed since the scout reports were written (verified today)

1. **The 4He label-fix run COMPLETED.** `runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/` now contains `metrics.json` + `history.json` (synced 14:23 today, after all five scout snapshots):
   - **test acc 0.92136, α-recall 0.7254, macro-F1 0.8693**, confusion [[3627,1373],[593,19407]], best epoch 13 (val 0.9214), early-stopped at epoch 22 on val_loss.
   - Consequence: the 4He 2×2 is **1/4 done, not 0/4**. Claim C12 ("4He learnable by XA-Raw ≥0.92") is now a real converged test number — single-seed, but no longer provisional. The headline gap is the **RN-Raw-lf comparator**, not an XA rerun.
   - Its `data_split.json` is **0 bytes locally** (sync truncation, same as XA-Raw-s0) — re-pull from box before paired stats.
   - Its local `counterfactual_battery.json` is the **buggy pre-fix run** (original 0.7005, positional-label bug). Closing doc §13 NOTE records the corrected battery: **original 0.9275, zero_q 0.8065 (−12.1pp)** — the "+9.2pp sign flip" is **retracted**; zero_q hurts on 4He too. The corrected JSON is not yet synced locally (open question Q1).
2. **Budget fact:** ~60 GPU-hours remained before November per the captain (campaign record, 2026-09-23); ~32h of reserve was unspent when the GPU closed. The 16h and 60h cut lines below are against that envelope.

## 1. GPU-hour basis (measured, not estimated)

From `run.log` "Training complete in N seconds" in each run dir (all trained on the same AutoDL box):

| Arm | Runs (epochs) | Train time each | Mean | min/epoch |
|---|---|---|---|---|
| RN-HC | 37 / 32 / 30 ep | 3.42 / 2.96 / 2.77 h | **3.1 h** | 5.5 |
| RN-Raw | 20 / 19 / 20 ep | 4.84 / 4.59 / 4.89 h | **4.8 h** | 14.6 |
| XA-HC | 31 / 37 / 38 ep | 2.93 / 3.49 / 3.52 h | **3.3 h** | 5.6 |
| XA-Raw | 20 ep (s42); 23 ep (s0, recovered) | 4.91 h (s42) | **~4.9–5.6 h** | 14.7 |
| XA-Raw-lf | 22 ep (done) | not logged locally | **~5.4 h est.** (22 ep × 14.7 min) | — |

**Variance warning:** XA-Raw-s42's run-*directory* wall span was ~13.7h vs 4.9h of logged training (eval + queue/idle inside the job). For budget gating, plan billed wall-clock ≈ train time ×1.3, or cap XA-Raw cells at ~7h. HC cells are cheap and predictable (~3h); Raw cells are the budget driver (~5h, up to ~7h worst case).

Label-fix configs: the completed run used the triton config + `file_class_list: [1,1,1,1,0]` over hdf5 order (p,d,t,³He,⁴He) — verified in its `config.yaml`. The other three -lf arms are the same mutation of their triton configs; no new config design needed.

## 2. What the CPU box closes NOW (0 GPU-h) — do these before/alongside any GPU spend

All run on box 176 in no-GPU mode (2GB cgroup, `--max-events 2000 --batch-size 64`, ~10 min/condition — proven by the battery already run there). Scripts exist in-repo.

| # | Item | Exact run | Closes | Cost |
|---|---|---|---|---|
| C0 | **Per-event prediction dumps → paired stats** | `scripts/analysis/exp3_dump_predictions.py` per checkpoint (11 ckpts incl. label-fix); McNemar + paired bootstrap already in `src/evaluation/evaluate.py` (~L257–321). Needs re-sync of the two 0-byte `data_split.json` (XA-Raw-s0, XA-Raw-lf) | True McNemar/paired-bootstrap CIs for all same-seed pairs (val_indices byte-identical across arms — verified); enables D4 error-overlap and per-isotope breakdowns for free | ~2–4 CPU-h on-box |
| C1 | **D5: permuted_cls / mean_cls + predicted-class histogram** | Extend `exp3_counterfactual_battery.py` with the two conditions; run on all 6 XA ckpts | Whether zero_cls collapse (0.19 ≈ minority prevalence) is an **OOD-bias artifact vs genuine physics dependence** — gates every "load-bearing"/"task-invariant" sentence (audit flag F1) | ~1–2 CPU-h |
| C2 | **D1–D4 probes** (lead already running) | `scripts/analysis/exp3_h1_diagnostics.py` | H1a capacity vs H1b crowding localization | in flight |
| C3 | **Traditional classification baseline** = D2's physics-features LogReg, reported with α-recall vs RN-Raw 0.8925/0.636 | same script output | The paper's missing traditional-baseline leg for isotope classification (comparisons report rank 1) | free with C2 |
| C4 | **Corrected label-fix battery sync + battery on the converged 4He ckpt** | re-run fixed battery script on `EXP3-XA-Raw-100k-label-fix-seed42` best_model.pth; sync JSON | Replaces the buggy local JSON; tests whether zero_q −12.1pp and zero_cls collapse hold on the *converged* 4He model (C9 cross-task check) | ~1 CPU-h |
| C5 | **EXP4 attention on XA-Raw-s0 and XA-Raw-lf** | `scripts/analysis/exp4_attention_metrics.py` | C10: Raw Bragg-focus is currently single-seed (s42 only) | ~1 CPU-h |
| C6 | **p–t easiness confound check** | Compare deposited-energy/Bragg distributions of the p file vs d/t/³He/⁴He in `Garfield_{Raw,HC}` H5s (h5py read-only) | The one outlier in the Z²A difficulty ordering (difficulty report §5.2) | ~30 min |
| C7 | **RANSAC/Hough angle baseline** | fm-ar-angle-baseline worker already building it (fit→`atan2`→`predictions_regression.csv` contract, pinned to TRK3-v2 split) | The "literature-only" caveat on the angle-regression leg | in flight (IMP/CPU) |
| C8 | **Z01 publisher-test eval** | `python src/evaluation/evaluate_z01.py --run-dir runs/Z01-Logistic-Moments/z01-overnight-20260919-01` on the box holding `pr_test_simulated.npy` | Housekeeping: trained model never scored | minutes |
| C9 | **Artifact re-syncs** | `data_split.json` ×2 (0-byte), corrected lf battery JSON, label-fix `run.log` | Backs currently-unbacked numbers (audit F4: lf val trajectory now backed by synced history.json ✓) | minutes |

**Net: every open gap except multi-seed 4He training, the triton grid hole, and mechanism-pack cures is CPU-closable.** GPU money buys exactly one thing: trained 4He (and one triton) checkpoints.

## 3. Ranked GPU experiment set

Ranking principle: information-per-GPU-hour against *paper claims*, diagnostics before cures (doctrine), the paired-Δ gate from closing doc §6 preserved.

| Rank | Run | Config change vs triton arm | Seeds | Est. GPU-h (train / w×1.3) | Claim it gates | Result that changes the paper |
|---|---|---|---|---|---|---|
| **G1** | **RN-Raw-lf s42** | RN-Raw cfg + `file_class_list [1,1,1,1,0]` | 42 | **4.8 / ~6.2** | **C11 central claim; C12 comparator** | The headline paired Δ_Raw on the *true* 4He task. XA-Raw-lf = 0.9214. If RN-Raw-lf ≈0.92 → XA parity on Raw (claim dead on Raw too). If RN < 0.92 → first evidence XA's physics path helps where the paper predicted. **Nothing else ranks until this number exists.** |
| **G2** | **XA-HC-lf s42 + RN-HC-lf s42** | same mutation on HC arms | 42 | **6.4 / ~8.3** (3.3+3.1) | **C11 interaction term** | Completes the 4He 2×2. The paper's claim is architecture×representation — without HC cells there is no interaction to report, only a Raw pairwise Δ. |
| | *— 16h cut line —* | | | **cum 11.2 / ~14.6** | | |
| **G3** | **XA-Raw-lf s1 + RN-Raw-lf s1** | same, seed 1 | 1 | **10.3 / ~13.4** | Seed-robustness of the headline | Second seed of the Raw pair — the number the paper will headline. Per anchor policy, no delta may be presented as seed-robust on n=1. |
| **G4** | **XA-Raw-lf s0 + RN-Raw-lf s0** | same, seed 0 | 0 | **10.3 / ~13.4** | Seed-robustness | Third seed → mean±sd + paired stats on the headline, matching the triton grid's n=3 standard. |
| **G5** | **XA-HC-lf s0,s1 + RN-HC-lf s0,s1** | same | 0,1 | **12.8 / ~16.6** | Seed-robust interaction | Full 4He 2×2 × 3 seeds — parity with the triton evidence base. |
| | *— 60h cut line —* | | | **cum ~44.6 / ~58** | | |
| **G6** | **Triton XA-Raw-seed1** | none (existing cfg) | 1 | **5.5 / ~7.2** | C2 grid completeness | Makes the triton deficit 3/3 seeds. **Skippable** if the campaign pivots to 4He-only reporting — the deficit is already McNemar-guaranteed significant on 2/2 seeds (p≤0.035 / 7.5e-4). Diagnostic-task evidence only. |
| **G7** | **Mechanism pack — GATED, cures not diagnostics** | `query_mode: learned` latent-Q; `attn_dim: 512`; 4He zero-Q ablation | 42 first | **~5.5 each** | H1a/H1b resolution → architecture fix | Only after C1/C2 diagnostics land AND the paired-Δ gate fires (closing doc §6: Δ_Raw < 0 → zero-Q ablation then latent-Q/attn512; Δ_Raw ≥ 0 → skip mechanism work, spend on seeds). Do not pre-empt the gate. |

### Cut-line recommendations

- **At 16 GPU-h:** run **G1+G2 only (the 4He 2×2, seed 42) — ~11.2h train, ~14.6h with wall-clock headroom.** Bank the ~1.4–4.8h remainder; nothing else fits without stranding a half-pair (a lone RN-Raw-lf-s1 buys nothing without its XA partner). Alternative package if the council values seed-robustness over the 2×2: G1 + XA-Raw-lf-s1 + RN-Raw-lf-s1 = ~15.1h — two seeds of the Raw headline but no HC cells and no interaction term. **Recommended: the 2×2.** The paper's design is the interaction; and if Δ_Raw < 0 the campaign pivots to mechanism work, making a second Raw seed dead spend.
- **At 60 GPU-h:** **G1–G5 (~44.6h train, ~58h with headroom)** = complete 4He 2×2 × 3 seeds — the paper's PID section stands on the same n=3 footing as the triton diagnostic record. The ~2–15h remainder fits **one** gated mechanism run (G7, ~5.5h) *or* G6 (triton grid completion) — choose after the Δ_Raw sign and D1–D5 readouts are known. Do not commit the remainder now.

### Explicitly NOT in the set

- Re-running/continuing XA-Raw-lf s42 — converged, metrics on disk.
- Any energy-regression baseline — comparison complete and statistically airtight (21/21 Wilcoxon).
- EXP7 p/d/t baseline — its own proposal rates it droppable.
- More triton seeds beyond G6 — diagnostic task, diminishing returns.
- Mechanism runs before the gate — doctrine: no cures before a diagnostic confirms the mechanism.

## 4. Gap → claim → closer map (checklist for the lead)

| Gap (source report) | Paper claim | Closer |
|---|---|---|
| XA-Raw-seed1 missing (seed-evidence) | C2 triton deficit 3/3 | G6 (GPU, optional) |
| 4He 2×2 was 0/4 → now 1/4 | C11 central claim | G1+G2 (GPU) |
| 4He single-seed | C11/C12 seed-robust | G3–G5 (GPU) |
| Paired stats not computable | all Δ claims | C0 (CPU) |
| zero_cls "load-bearing" ambiguous (capacity-critique, audit F1) | C6/C7 wording | C1 D5 (CPU) |
| H1a vs H1b unresolved | mechanism section | C2 D1–D4 (CPU, in flight) |
| No traditional classification baseline (comparisons) | doctrine: fair comparison | C3 = D2 (CPU) |
| Angle baseline literature-only (comparisons) | angle-reg leg | C7 (CPU, in flight) |
| Per-isotope breakdowns 11 runs; p–t confound (difficulty) | Z²A difficulty framing | C0 dumps + C6 (CPU) |
| Unbacked numbers (audit F4) | audit gate | C9 syncs (CPU) |
| Label-fix battery buggy JSON (audit F2) | all 4He battery numbers | C4 (CPU) |
| XA-Raw attention single-seed (C10) | mechanism figure | C5 (CPU) |
| Mechanism cure (if needed) | architecture fix | G7 (GPU, gated) |

## 5. Open questions for the lead (non-blocking)

1. Where is the **corrected** label-fix `counterfactual_battery.json` on box (the original=0.9275 run)? Local file is the buggy one; sync it before any 4He battery number is quoted.
2. Do all 11 `best_model.pth` (incl. RN arms) still exist on box 176? C0 needs them; battery JSONs only reference XA ckpts.
3. Actual wall-clock of the XA-Raw-lf run (for cost calibration of G3–G5) — `run.log` not synced locally.
4. Are `-lf` configs for the other three arms already staged on box, or generated ad hoc? (Recipe verified: triton cfg + `file_class_list [1,1,1,1,0]`.)
5. EXP4 sink stats (max-weight 0.52, token-50 444/512, entropy) — which eval produced them? Synced JSON lacks the fields (audit Q4).

## 6. Commands used (reproduction)

```bash
# durations: grep 'Training complete in' runs/EXP3-*/*/run.log
# label-fix metrics: cat runs/EXP3-XA-Raw-100k-label-fix-seed42/*/metrics.json
#   → accuracy 0.92136, alpha_recall 0.7254, best_epoch 13
# history: runs/EXP3-XA-Raw-100k-label-fix-seed42/*/history.json → 22 epochs, early-stopped
# 0-byte splits: wc -c runs/EXP3-XA-Raw-100k-{seed0,label-fix-seed42}/*/data_split.json → 0
# buggy battery: cat runs/EXP3-XA-Raw-100k-label-fix-seed42/*/counterfactual_battery.json → original 0.7005
# label-fix recipe: runs/EXP3-XA-Raw-100k-label-fix-seed42/*/config.yaml → file_class_list [1,1,1,1,0]
# scripts present: scripts/analysis/{exp3_dump_predictions,exp3_h1_diagnostics,exp3_counterfactual_battery,exp4_attention_metrics}.py
```
