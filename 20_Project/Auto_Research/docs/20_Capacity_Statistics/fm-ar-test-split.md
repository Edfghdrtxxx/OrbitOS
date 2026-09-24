> Origin: `fm-ar-test-split` scout report; recorded 2026-09-24.

# fm-ar-test-split — cheapest honest evaluation protocol for EXP3 Rung 1

**Date:** 2026-09-24 · **Worker:** fm-ar-test-split (scout) · **Scope:** read-only on live checkout `/Users/Reid Hu/MATE-Automation` (runs/ read in place; no box-176/AutoDL/IMP contact; no manuscript or lead files touched). Worktree: disposable checkout at `/Users/leyi/.treehouse/MATE-Automation-8e6480/3/MATE-Automation` — all file:line references below are to the live checkout unless noted.

**Question:** before any Rung-1 GPU hour is spent, what is the cheapest honest evaluation protocol?

---

## Headline

1. **R1 confirmed for EXP3 — and refined.** Every EXP3 run (12 run dirs on disk) is an 80/20 train/val split with **no held-out test set**; `metrics.json:accuracy` is computed by `evaluate_model` on `val_loader` — the same 25k events that drove best-epoch selection and early stopping. **But R1's "anywhere in the campaign" is too broad:** EXP8 and all TRK runs use a real 70/15/15 three-way split with `test_indices` recorded in `data_split.json`, and EXP8's seen-channel test set was actually evaluated (`eval_exp8/metrics.json`, 75k events). EXP1/EXP2 and the published V4/V6 runs are 80/20 val-only like EXP3.
2. **Selection bias is small and measurable for free:** `scripts/analysis/exp3_selection_bias.py` (PR#9) over all 12 EXP3 histories gives best-val − final-val gaps of **0.21–1.74pp, mean 0.71pp**; the label-fix run's gap is **0.216pp**. A sharper "best vs. neighbor epochs" measure gives 0.03–2.1pp. For paired XA-vs-RN deltas the bias is arm-symmetric and largely cancels.
3. **The cheapest honest protocol already exists in the data:** `per_file_limit: 25000` subsamples 25k of each 100k-event HDF5 file via a deterministic seeded `rs.choice` (`src/data/dataset.py:45-99`). The **75k unused events per file (375k per representation) are a true held-out pool** — never trained on, never validated on, never seen by normalization stats — shared identically by every seed-42 run on the same file set, including the existing XA-Raw label-fix run. Re-evaluating checkpoints on it is CPU-feasible (the counterfactual battery already ran on box-176 CPU) and needs ~50 lines of glue, not new infrastructure.
4. **Recommendation: option (a) + (d).** Keep the Rung-1 configs exactly as merged (80/20, seed 42 — this makes the new runs' val sets *identical* to the label-fix run's, preserving paired val statistics), and add a CPU held-out evaluation of all four seed-42 checkpoints on the unused-event pool. Zero GPU hours, zero config changes, and it produces the campaign's first true held-out numbers — for the existing 0.92136 run as well as the three new arms. Options (b) and (c) are strictly worse: both break or confound pairing with the label-fix run, and (b) still needs the same eval harness (d) provides, because `run_experiment.py` never evaluates `test_indices`.

---

## 1. R1 confirm/refute — held-out splits across the campaign

### Code path (how the split is made)

`src/run_experiment.py:1251-1297` — two branches:

- `data.split_ratio` present with 3 elements → three-way split: `train_test_split(test_size=test_frac)` then a second split of trainval into train/val, both `random_state=seed`, stratified (`:1258-1276`). `test_indices` saved into `data_split.json` (`:1351-1352`, writer `src/data/dataloader.py:202-262`).
- Otherwise → **default 80/20 two-way split** (`:1285-1293`): `train_test_split(test_size=0.2, random_state=seed, stratify=stratify_array)`; `test_indices = None`.

`data.train_size`/`val_size` in configs are **documentation only** — never read by `run_experiment.py` (confirmed: no occurrence in the file; openspec EXP1 doc `02_training_config.md:178` states the same).

### How the reported metric is computed

`src/run_experiment.py:1529-1552` builds exactly two loaders: `train_loader`, `val_loader`. **No test_loader is ever built, even when `test_indices` exist.** Step 14 (`:1695-1704`) calls `evaluate_model(checkpoint=best_model.pth, val_loader=val_loader, …)` — so `metrics.json:accuracy` is **always the val split**, for every experiment family including EXP8/TRK. Held-out numbers for EXP8/TRK come only from separate post-hoc evaluators (`src/evaluation/evaluate_exp8_unseen.py:483-537`, `evaluate_trk_classification.py:884-962`), which rebuild a dataset from `data_split.json:test_indices`.

### Per-experiment inventory (live `runs/`)

| Family | Runs on disk | `data_split.json` | Held-out test? | Reported `accuracy` is |
|---|---|---|---|---|
| EXP3 (all 12) | 12 run dirs | 3 present (2 are **0 bytes**: `XA-Raw-lf-s42`, `XA-Raw-s0`), rest absent | **No** — all configs 80/20, no `split_ratio` | val (25k), also used for best-epoch + early stop |
| EXP8 | 2 (RN, XA `auditfix_d570d34_01`) | `test_indices` present, 350k/75k/75k | **Yes** — evaluated by `eval_exp8` (seen-test 75k; `eval_exp8/metrics.json`) | `metrics.json` = val (0.94196); test numbers live in `eval_exp8/` |
| TRK5/6 | 2 run dirs | `test_indices` present, 840k/180k/180k | **Yes** (TRK protocol; `evaluate_trk_*` consumes `test_indices`) | val in `metrics.json`; test via TRK evaluators |
| Z01 | 2 | no `test_indices` (4480/1120) | No | val |
| baselines (ransac/hough/hc `-opt-v3`) | 3 | `test_indices` present (pinned to TRK split) | Yes | test (baselines pin to CNN `data_split.json`) |
| EXP1/EXP2 | **no run dirs on disk** | n/a | **No** — all `configs/EXP1_*.yaml`, `EXP2_*.yaml` lack `split_ratio` → 80/20 | val |
| V4/V6 (published) | not on disk (legacy codebase) | n/a | **No** — spec: `train_test_split test_size=0.2` "for all experiments (both V4 and V6)" (`20_doc/Legacy Codebase/S1-foundation-data-pipeline/spec.md:689-696,863`) | val |

**Verdict:** R1 is **confirmed for EXP3/EXP2/EXP1/V4/V6** — no held-out test exists and every reported classification accuracy is a val metric that doubles as the model-selection signal. R1 is **refuted as a campaign-wide statement**: EXP8 and TRK have genuine, recorded, evaluated test splits. The precise claim should be "no held-out test set exists in the EXP1/EXP2/EXP3/V4/V6 classification lineage."

### Stratification caveat that affects pairing (new finding)

The buggy EXP3 runs and the label-fix run **do not share the same val set** even at the same seed. `EXP3-XA-Raw-100k-seed42` config has no `file_class_list`/`label_map` → falls through to the default binary map `{4:0,…}` → stratified on **triton-vs-rest** labels. `EXP3-XA-Raw-100k-label-fix-seed42` has `file_class_list: [1,1,1,1,0]` → stratified on **4He-vs-rest** labels. `train_test_split` with the same seed but a different stratify array produces different partitions. So the lf run's val events ≠ the buggy s42 run's val events — paired per-event statistics between them are invalid even before the label-semantics question. (The three Rung-1 configs all carry `file_class_list: [1,1,1,1,0]`, so their val sets *will* be identical to lf's — see §3a.)

Also recorded: `data_split.json` is **0 bytes** for both `EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749` and `EXP3-XA-Raw-100k-seed0/20260923_084135` (sync truncation; flagged before in referee B.9.4). The splits are reconstructible deterministically from config (seed + file list + `per_file_limit`), so this is an inconvenience, not a loss — but any tooling that reads the file (e.g. `_build_eval_dataset`, `exp4_attention_metrics.py:571-585`) will fail on those dirs until the file is re-pulled or regenerated.

---

## 2. Selection-bias magnitude (PR#9 tooling + neighbor-epoch analysis)

Command run on the live checkout:

```bash
python3 scripts/analysis/exp3_selection_bias.py runs/EXP3-*/*/
```

Result over all 12 EXP3 histories (`best_val_acc − final_val_acc`, the disclosed bound from the tool's own definition):

| Run | best val | @ep | final val | gap | best−mean(nbrs) |
|---|---|---|---|---|---|
| RN-HC s0 | 0.95448 | 30 | 0.94880 | +0.57pp | +0.75pp |
| RN-HC s1 | 0.95752 | 27 | 0.95136 | +0.62pp | +0.29pp |
| RN-HC s42 | 0.95904 | 27 | 0.95416 | +0.49pp | +0.43pp |
| RN-Raw s0 | 0.88900 | 17 | 0.88592 | +0.31pp | +0.32pp |
| RN-Raw s1 | 0.89224 | 3 | 0.88128 | +1.10pp | +2.09pp |
| RN-Raw s42 | 0.89240 | 18 | 0.89028 | +0.21pp | +0.92pp |
| XA-HC s0 | 0.95420 | 23 | 0.94548 | +0.87pp | +0.18pp |
| XA-HC s1 | 0.95788 | 21 | 0.94936 | +0.85pp | +0.89pp |
| XA-HC s42 | 0.95672 | 22 | 0.95228 | +0.44pp | +0.03pp |
| **XA-Raw lf s42** | **0.92140** | **13** | **0.91924** | **+0.22pp** | **+0.37pp** |
| XA-Raw s0 | 0.87584 | 7 | 0.85844 | +1.74pp | +2.06pp |
| XA-Raw s42 | 0.87100 | 12 | 0.85964 | +1.14pp | +1.78pp |

Summary (tool output): `n_runs=12, gap_mean=0.71pp, gap_max=1.74pp, gap_min=0.21pp`.

Interpretation:

- The gap mixes two things: genuine late-training regression (overfitting — real, would also appear on a test set) and the selection premium (noise-picking — would not). The neighbor-epoch column (best minus mean of epochs best±1) isolates mostly the noise component: **0.03–2.1pp, typically ≲0.9pp**. Either way the honest bound to disclose is **≲1–2pp optimistic on any single-arm number, ≲0.3pp for the flagship lf run**.
- For the campaign's actual use — **paired XA-vs-RN deltas on the same val events** — the bias is arm-symmetric and largely cancels; McNemar on paired predictions is unaffected by the shared selection set (it conditions on per-event discordance, not on absolute accuracy).
- The tool is torch-free and ran locally in <1s. Its JSON output is reproducible; the per-run numbers above are its verbatim output plus my neighbor-epoch column computed from the same `history.json` files.

---

## 3. Rung-1 options — cost, pairing effect, mechanism

The Rung-1 pack (`configs/EXP3_{ResNet_Raw,ResNet_HC,XA_HC}_100k_label_fix_seed42.yaml`, launcher `scripts/remote/run_exp3_rung1.py`, doc `20_doc/workflows/exp3_gpu_rung1.md`) currently has **no `split_ratio`** → all three runs will be 80/20, seed 42, `file_class_list [1,1,1,1,0]` — i.e. **the identical val set as the lf run** (same seed, same sorted file order per representation, same stratify array). Estimated billed hours: 6.2 + 4.3 + 4.0 = **14.5h of the 24h cap**.

### (a) Keep 80/20, disclose val-selected accuracy

- **Config/code changes:** none. Disclosure text only (doc + manuscript already says "validation" — see §4).
- **Cost:** 0 extra GPU; the pack runs as merged.
- **Pairing with lf:** perfect on val — identical 25k events, same seed, same stratification → per-event McNemar/bootstrap valid.
- **Honesty:** weakest alone — every number remains selection-set; mitigated by disclosing the §2 bound (≤0.3pp for lf-scale runs, ≤~1.7pp worst arm).
- **Seeded/recorded:** yes — `random_state=seed`, `data_split.json` records `train_indices`/`val_indices`/`seed`/`test_size`.

### (b) Add a fixed held-out test split for the new runs only (`data.split_ratio: [0.70,0.15,0.15]`)

- **Config changes:** one line per config (`split_ratio: [0.70, 0.15, 0.15]`). Split is seeded (`random_state=seed`, `run_experiment.py:1258-1271`) and recorded (`test_indices` in `data_split.json`, `:1351-1352`).
- **Cost:** 0 extra GPU for the split itself — **but `run_experiment.py` never evaluates `test_indices`** (only `val_loader` reaches `evaluate_model`, `:1695-1704`). Getting a test number requires the same post-hoc eval harness as option (d). So the real cost is identical to (d) plus the config diff.
- **Pairing with lf — broken twice:** (i) the new val set is a different 18.75k subset → val pairing with lf's 25k is gone (only the intersection is shared, and the intersection is not recorded); (ii) the new test set is drawn from what was lf's **train** pool → lf's checkpoint **cannot** be evaluated on it (contaminated). The flagship pairing (new arms vs. 0.92136) loses its honest comparison basis entirely unless (d) is *also* done — at which point (b) added nothing.
- **Side effect:** train shrinks 100k→87.5k (−12.5%), a data-scale confound vs. lf's 100k-trained checkpoint on top of the split change.

### (c) Keep val identical, carve test from train

- **Config/code changes:** needs **new code** — a two-stage split: run the existing 80/20 first (freezing val identical to lf), then `train_test_split` on the 100k train indices (e.g. 75k train / 25k carved-test), saving `test_indices`. Natural implementation: a new config key, e.g. `data.carve_test_from_train: 0.25`, ~30 lines in `run_experiment.py` after `:1297`, plus integrity-check extension. Seeded if `random_state=seed`; recorded via `test_indices` in `data_split.json`.
- **Cost:** 0 extra GPU + the same eval-harness need as (b).
- **Pairing with lf:** val pairing preserved (identical val). But the carved test set is inside lf's **train** set → lf cannot be evaluated on it → the new-vs-lf comparison still has no common held-out basis. New-vs-new comparisons are valid but carry a −25% train-size confound vs. lf (75k vs 100k).
- **Verdict:** dominated by (d) — same harness cost, adds a confound, still can't evaluate lf.

### (d) Re-evaluate existing checkpoints on a new held-out set on CPU — **the unused-event pool**

- **The set exists and is free.** `subsample_indices` (`src/data/dataset.py:45-99`) draws 25k of each 100k-event file via `np.random.RandomState(seed).choice(n, take, replace=False)`, iterating files in sorted order. For every seed-42 run on the same file set the subsample is **identical** (verified: same seed, same 5-file sorted order, same `per_file_limit` in all EXP3 configs; the buggy and lf configs resolve to the same absolute paths). The complement — **75k events per file, 375k per representation (Raw or HC)** — was never subsampled, hence never trained on, never in val, never touched by normalization stats (train-only, `run_experiment.py:1372-1403`) or physics stats (train-only, `exp3_counterfactual_battery.py:208-249`). It is a true held-out pool, i.i.d. with train/val by construction (uniform random subsample).
- **Code changes:** ~50 lines of glue, no pipeline changes: (i) recompute `subsample_indices` per config and take the per-file complement → write `test_indices` into a `data_split.json` for each run dir (or add an `--indices-file` override to `_build_eval_dataset`, `exp4_attention_metrics.py:571-585`); (ii) run `scripts/analysis/exp3_dump_predictions.py --split test --device cpu` per checkpoint — it is explicitly built for box-176's 2GB CPU cgroup and emits `predictions_paired.csv` + `predictions.npz`; (iii) `src/evaluation/paired_stats.py` (`align_pair`, `mcnemar_exact_pvalue`) for paired stats. The battery script (`--split test`, `--device cpu`) works the same way for counterfactuals on the held-out set.
- **Cost:** 0 GPU. CPU inference ~25k events ≈ battery-scale (the 6-checkpoint battery already ran on box-176 CPU); a 25k–50k held-out subsample (e.g. 5k/file stratified-by-file, or every-kth) is a few CPU-hours per checkpoint. Can run **before, during, or after** Rung 1 — including on the lf checkpoint today.
- **Pairing with lf:** **perfect on the held-out set** — lf and all three new arms evaluate on the identical unused events (same seed-42 subsample → same complement). This is the *only* option that yields a true held-out number for the existing 0.92136 run. Val pairing is also preserved because (d) changes nothing about training.
- **Caveats:** (i) the pool is per-file — class balance is per-file counts, so subsample deliberately (e.g. 5k/file → 25k with 5k positives) or report per-class metrics; (ii) Raw and HC pools pair by file-local index, the same assumption the campaign's existing Raw↔HC val pairing already makes; (iii) needs the HDF5 files — runs where the data lives (box 176 CPU, as the battery did), not locally; (iv) for the lf run the 0-byte `data_split.json` must be regenerated or bypassed with `--indices-file` — trivial since the split is deterministic.
- **Seeded/recorded:** the pool is deterministic given seed+files; record the complement indices + selection rule in the eval JSON (the battery's `event_subset_record` schema already does exactly this, `exp3_counterfactual_battery.py:87-117`).

### Cost/pairing matrix

| Option | GPU cost | Code change | Val pairing w/ lf | Held-out pairing w/ lf | Confounds |
|---|---|---|---|---|---|
| (a) 80/20 + disclose | 0 | none | ✅ identical val | ❌ none exists | selection bias ≤~0.3pp (lf) |
| (b) 70/15/15 new runs | 0 (+eval harness) | 1 config line | ❌ different val | ❌ lf trained on it | −12.5% train vs lf |
| (c) carve test from train | 0 (+eval harness) | ~30 lines + key | ✅ identical val | ❌ lf trained on it | −25% train vs lf |
| (d) unused-pool CPU eval | 0 | ~50 lines glue | ✅ unchanged | ✅ identical held-out | none |

---

## 4. Recommendation

**Adopt (a) + (d): launch Rung 1 as merged, and add the unused-pool held-out evaluation.**

- The merged configs are already optimal for pairing: identical val to lf, identical recipe. Do **not** add `split_ratio` — option (b) destroys both pairing axes and still needs (d)'s harness to produce a test number.
- Before or alongside the GPU runs, run the (d) harness on the existing lf checkpoint (and optionally the buggy s42/s0 checkpoints — same unused pool) on box-176 CPU: recompute the seed-42 complement indices, dump predictions, publish `held_out_accuracy` alongside `best_val_acc`. When Rung 1 lands, repeat for the three new checkpoints → the campaign's first fully paired, true held-out 2×2.
- Disclosure wording for the closing doc / paper: *"All EXP3 accuracies are validation-set metrics on the 25k split used for early stopping and best-epoch selection; the selection premium is bounded at ≤0.3pp for the label-fix run (≤1.7pp worst arm, mean 0.7pp; `exp3_selection_bias.py`). Held-out numbers on the unused 75k-per-file event pool are reported separately."*
- If a *training-time-recorded* test split is ever mandated (referee-facing provenance inside `data_split.json`), prefer (c)'s carve-from-train over (b) — it preserves val pairing — but recognize it still cannot evaluate lf, so (d) remains necessary regardless.

**What should ship (for firstmate's promote decision):** the (d) glue — a small `scripts/analysis/exp3_heldout_unused.py` (complement-index computation + `data_split.json` writer or `--indices-file` patch to `_build_eval_dataset`) plus a one-line doc addition to `exp3_gpu_rung1.md`. No changes to training code or the merged configs.

---

## 5. Manuscript / doc findings (file:line, suggested wording — no edits made)

1. **`20_doc/EXP3_closing_analysis_2026-09-24.md` §4 L41/L43/L45** — "test acc 0.92136" / "a valid completed-run test metric": mislabeled; it is val accuracy on the selection split. Suggested: *"val acc 0.92136 (n=25k validation events — the same split used for early stopping and best-epoch selection; no held-out test set exists in the EXP1/EXP2/EXP3 lineage)"*. (Matches closing-check R1; my §1 adds the EXP8/TRK exception so the global sentence should say "in the EXP3 lineage", not "in this campaign".)
2. **`10_Papers-Thesis/Physics_Informed/main.tex:248`** — "Training uses an 80/20 train/validation split for the main tasks, and all reported accuracies refer to the held-out validation sets." **Accurate as written** — but incomplete: it does not disclose that the same split drives best-epoch selection and early stopping. Suggested addition: *"…held-out validation sets, which also serve for early stopping and best-epoch checkpoint selection; the resulting selection bias is bounded at under 2 percentage points (see Section X)."*
3. **`main.tex:255`** (Table `tab:classification-results` caption) — "best-epoch validation values" — accurate; consider appending *"(selection-set; see §methods)"* if the bound sentence lands.
4. **`main.tex:156,399,410,447,475`** — TRK/EXP8 "held-out test split" claims — **verified accurate**: those pipelines do record and evaluate `test_indices` (§1). No change needed.
5. **EXP1 openspec `02_training_config.md:237`** already flags the "held-out test set" misnomer for the V6 lineage — consistent with this report; no action.

---

## 6. What I ran (evidence)

```bash
# split code
grep -n "test_size|train_test_split|data_split" src/run_experiment.py   # :1187-1353
sed -n '1251,1353p' src/run_experiment.py                               # two-way vs three-way branches
grep -n "val_loader|test_loader|evaluate_model" src/run_experiment.py   # :1529-1704 — no test_loader

# run inventory
find runs -name data_split.json | … # per-file test_indices presence + sizes (table §1)
for d in runs/EXP3-*/*/; do grep split_ratio $d/config.yaml; done       # none → all 80/20
python3 -c 'json.load(metrics.json)'                                    # lf: accuracy=0.92136, best_val_acc=0.9214, best_epoch=13

# selection bias
python3 scripts/analysis/exp3_selection_bias.py runs/EXP3-*/*/          # 12 runs, mean 0.71pp, max 1.74pp
# + neighbor-epoch column computed from the same history.json files

# unused-pool determinism
sed -n '45,99p' src/data/dataset.py                                     # RandomState(seed).choice per file, sorted order
grep file_class_list runs/EXP3-*/config.yaml                            # buggy: absent; lf+Rung1: [1,1,1,1,0]

# eval harness
grep -n "split.*choices\|device" scripts/analysis/exp3_dump_predictions.py   # --split {val,test} --device cpu
sed -n '556,642p' scripts/analysis/exp4_attention_metrics.py            # _build_eval_dataset reads data_split.json keys
sed -n '884,962p' src/evaluation/evaluate_trk_classification.py         # TRK test_indices consumer
tail -30 runs/EXP8-XA-eval-auditfix_d570d34_01.log                      # seen-test 75k evaluated

# manuscript
grep -n "test set|validation" 10_Papers-Thesis/Physics_Informed/main.tex   # L156,248,255,328,399,410,447,475
```

## Captain-hold inventory

This report surfaces **no new captain-owned question**. The choice it informs — which protocol governs the Rung-1 GPU spend — is the already-held `fm-ar-gpu-budget` decision (per fm-ar-closing-check's inventory); my §4 recommendation is evidence for that call, not a new gate. Completion gate: `complete --none`.
