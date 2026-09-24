<!-- Verbatim source section; overview: [[../fm-ar-test-split]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
