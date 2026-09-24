<!-- Verbatim source section; overview: [[../fm-ar-cpu-agenda]] -->
<!-- SOURCE-BODY-START -->
## 2. Open questions, classified

Sources: `fm-ar-claims-ledger` (32-claim ledger), `fm-ar-claims-refresh` (post-16:53 delta + prereg band-reads), `fm-ar-closing-check` (26 statements + 16 claims-to-add), `fm-ar-label-blast`, `fm-ar-transfer`, `fm-ar-attn-sink`, `fm-ar-d14-power`/`d14-bign`, `fm-ar-maxh-confound`, `fm-ar-pack-drycheck`, `gpu_session_queue.md`, the prereg YAML, and the campaign log.

### A. Answerable CPU-only NOW with local data

| # | Item | Inputs (all local) | Settles / affects |
|---|---|---|---|
| A1 | **Formal prereg scorecard on landed artifacts** — feed all 6 battery JSONs + 3 d5 JSONs + selection_bias JSON into `exp3_prereg_score.py` | `runs/EXP3-*/*/counterfactual_battery*.json`, `history.json` | Prereg `conditions`/`selection_bias` rows; produces the deterministic verdict record (today: selection_bias = miss×6 verified; battery rows pending because the A0-locked s42 battery lacks D6 conditions) |
| A2 | **EXP8 paired arm statistics** — McNemar + bootstrap on the paired 75k val and 475k unseen-channel predictions | `runs/EXP8-*/auditfix_d570d34_01/{predictions.csv, eval_exp8/predictions.csv}` (verified: 100% event overlap, 100% label agreement) | Sharpens "arms differ only on far-OOD" (claims-ledger §4.9): **measured today** — seen ABCD Δ=+0.03pp (p=0.76, tied); unseen F/G/H Δ=−6.7/−7.4/−7.2pp (p≈0). Upgrades the pooled-FTR claim to per-channel paired significance |
| A3 | **TRK5-vs-TRK6 paired regression stats + energy stratification** | `runs/TRK{5,6}-*/seed42/predictions_regression.csv` (450k paired slots, truth agrees 100%) | **Measured today:** XA MAE 0.0093 vs RN 0.0137 MeV, Δ=−0.0043 [−0.0044,−0.0043], Wilcoxon p≈0; XA wins every energy bin. Adds paired rigor to the verified Table-6 energy cells |
| A4 | **Baseline-vs-CNN paired regression stats** (RANSAC/Hough/HC vs TRK5/6 on shared events) | `runs/baseline-*/seed42/predictions_regression.csv` + TRK5/6 | Same-sample significance for the §6 classical-vs-CNN margins (currently unpaired point estimates) |
| A5 | **Selection-bias bound table for all 12 EXP3 runs** | `history.json` ×12 | Claim #20 (L248 disclosure): premium 0.21–1.74 pp, mean 0.71 pp — the number the disclosure sentence needs |
| A6 | **Paper-table regeneration** (`exp3_collect_tables.py`, `compare_exp3_runs.py`) | runs/ | Keeps paper-ready tables current; already run today |
| A7 | **EXP8 activation-OOD characterization on existing caches** | `_cache_feature_embedding/*.npz` | Honest version of the max\|h\| story (maxh-confound): single-unit scale proxy, not novelty detection — feeds the L323-332 wording guard |
| A8 | **Manuscript amendment package** — consolidate claims-ledger + claims-refresh + bib-fixsheet into one captain-ready edit list | reports only | Every Tier-1/Tier-4 manuscript line (see §4 rank 1) |
| A9 | **Closing-doc revision draft** (in worktree; live checkout is read-only) | `20_doc/EXP3_closing_analysis_2026-09-24.md` + closing-check R1–R26 | The 16 "claims to add" + 6 contradicted + 7 weakened statements — a ship-able PR against the lead's doc |
| A10 | **Z01 pixel-LR / FCNN extension** | needs re-download of `pr_train_simulated.npy` (734 MB, public Zenodo 3473953) — allowed (worktree, public data) | Claim #24/L387 context; marginal — transfer scout already produced the anchor numbers |

### B. Answerable CPU-only if a small named file were copied from the box

The key insight: **box-176 CPU jobs are slower than this Mac's CPU**. Anything the lead runs on-box CPU can run here faster — it only needs the inputs. Sizes are estimates from artifact classes.

| # | Item | File(s) to copy | Size | What it unlocks |
|---|---|---|---|---|
| B1 | **Paired stats + threshold sweep on EXP3** (McNemar/bootstrap per arm pair; joint-threshold verdict) | `predictions_paired.csv` ×12 (predump chain output, in flight on box) | ~10–50 MB total | Prereg `threshold_sweep` row; referee A6/A7; the "not purely calibration" claim with paired CIs. **Cheapest unlock in the campaign** |
| B2 | **D6 battery on the A0-locked checkpoint** (s42 XA-Raw triton) — the only battery that scores formally | `runs/EXP3-XA-Raw-100k-seed42/…/best_model.pth` (~135 MB) + val-subset export (~2000 events ≈ 60 MB NPZ) + `physics_feature_stats.json` (KB) | ~200 MB | Converts every `conditions:` row from not_comparable/pending to scored; the prereg's discriminating rows (scaled_cls, centered_q, zero_ch*) get their formal verdict. Runs here in ~15–30 min at 18 ev/s |
| B3 | **Held-out eval on the lf run** (`exp3_heldout_unused.py`) | lf `best_model.pth` + unused-pool subset export (75k/file × 5 files ≈ 2 GB NPZ, or a 25k subsample ≈ 700 MB) | ~1–3 GB | First true held-out number for 0.92136 (claim #20); alternatively runs on-box CPU in ~30 min |
| B4 | **Map-level `permuted_q` (Check A)** — prereg falsifier | XA-HC-s42 `best_model.pth` + val-subset export (~60 MB) | ~200 MB | `falsifiers.map_permuted_q_large_predictive`; claim #9 wording. ~1 h here |
| B5 | **D1–D4 probe phase locally** | `h1_features.npz` (if the box extract phase writes it) | ~50 MB | `--phase probe` is torch-free; local re-probing at any CV scheme |
| B6 | **EXP8 max\|h\| observable join** | per-event observable export (~475k rows × ~10 floats ≈ 20 MB CSV/NPZ) **or** `data/exp8/*.h5` (~24 GB — not "small") | 20 MB vs 24 GB | proxy-vs-learned verdict for the max\|h\| unit. The honest small-copy path is a box-side export of the observables, not the H5s |
| B7 | **EXP8 penultimate cache refresh** | `data/exp8/*.h5` (24 GB) — no small-copy path; alternatively box-side refresh + copy the two ~4 MB NPZs back | 4 MB (output) | Same-generation caches for join/figure; the refresh itself is ~25 min CPU wherever the H5s live |
| B8 | **Z01 noise-robustness + publisher-test eval** | Z01-ResNet `best_model.pth` (~135 MB) + `pr_test_simulated.npy` (315 MB) | ~450 MB | The only non-tied direction-B claim (CNN robustness under noise); publisher-test number closes direction B |
| B9 | **TRK3/4-v2 metrics sync** | `metrics.json` ×2 + `predictions_regression.csv` ×2 | <50 MB | Ledger #16/#17 (App D stratified angle MAE, Table 7 CIs) |
| B10 | **0-byte `data_split.json` re-pulls** (XA-Raw-s0, XA-Raw-lf) + lf `run.log` | 3 small files | <1 MB | Pairing eligibility for the lf run; cost calibration |
| B11 | **EXP2 clean re-score** | EXP2 `predictions.csv` + `data_split.json` (if synced from Windows/box) | ~10 MB | Exact clean-subset numbers for claim #2 — but the Windows kit already packages this for the Windows visit; copying is a fallback |

### C. GPU-only (or non-Mac-machine-only)

| # | Item | Why |
|---|---|---|
| C1 | Rung 1 (RN-Raw-lf + XA-HC-lf + RN-HC-lf s42) | 14.5 billed GPU-h; ~100 h/run on this Mac's CPU = infeasible |
| C2 | NimpSim Option B (RN-mod @160k) | 20–35 GPU-h + IMP staging + augmentation wiring |
| C3 | Reserve runs R3a (attn_dim 512) / R3b (physics_norm zscore) | GPU training; R3b gate currently **not met** (scaled_cls collapsed) |
| C4 | Kuchera VGG16 arm on MATE tasks | GPU fine-tune; FCNN/LR arms are CPU-feasible but need MATE H5s (B-list, large) |
| C5 | **Windows-label question** (V6 Table 4 task identity + EXP2 clean re-score + class-0 source file) | Windows machine only; `windows_visit_checks.py` (PR #31) is the packaged one-command kit — captain-held (`fm-ar-windows-label-check`) |
| C6 | `run_baseline_rawpoints.py` re-run (claim #14) | Needs raw point-cloud data on box/IMP |
| C7 | Angle baseline on TRK3-v2 split (claim #13) | Needs TRK H5 point clouds (IMP/box); `fm-ar-angle-baseline` worker in flight |
| C8 | e23 EXP8 physics battery, isotope separability, survey_2mev | Need `data/exp8/*.h5` / Garfield H5s / `trk_all_uncompressed_v2.h5` — all box-resident, too big to be "small copies" |

---

<!-- SOURCE-BODY-END -->
