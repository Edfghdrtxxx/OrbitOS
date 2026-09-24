<!-- Verbatim source section; overview: [[../fm-ar-test-split]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
