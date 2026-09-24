> Origin: `fm-ar-code-audit` scout report; recorded 2026-09-24.

# EXP3 analysis-code audit and artifact scout

Date: 2026-09-24 (Asia/Taipei)
Scope: read-only audit of the live run artifacts at `/Users/Reid Hu/MATE-Automation/runs` and the merged changes in this checkout. No repository or live-run files were modified; no PR was opened.

## Method and evidence

I inspected the nine merged commits corresponding to:

- [PR 1](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/1), commit `299e72a`
- [PR 2](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/2), commit `c76befb`
- [PR 3](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/3), commit `4cc081f`
- [PR 4](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/4), commit `6152bb8`
- [PR 5](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/5), commit `c94e066`
- [PR 6](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/6), commit `215c606`
- [PR 7](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/7), commit `4a99510`
- [PR 8](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/8), commit `cb83a91`
- [PR 9](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/9), commit `9cbfefd`

Commands used included:

```bash
git show <commit> -- <changed files>
python3 -m pytest -q tests/test_paired_stats.py tests/test_trk_classification_mcnemar.py   tests/test_exp3_isotope_separability.py tests/test_exp3_d6_conditions.py   tests/test_physics_norm.py tests/test_exp3_collect_tables.py   tests/test_exp3_repro_tooling.py tests/test_exp3_provenance.py
python3 -m pytest -q
```

The focused audit suite passed: **108 passed, 12 skipped**. The full suite had **452 passed, 16 skipped, 3 failed**. The failures are unrelated live/visual infrastructure: one EXP8 string-guard assertion and two Overleaf tests reporting an expired authentication cookie (`OVERLEAF_AUTH_FAILED`).

## Confirmed correctness bugs, ranked

### 1. Kuchera baseline silently reports triton-vs-rest as Alpha-vs-rest (high impact)

**Location:** `src/baselines/kuchera.py:65-73` in PR 5.

The new torch-free baseline hard-codes:

```python
LABEL_MAPS["3He_4He"] = {4: 0, 0: 1, 1: 1, 2: 1, 3: 1}
CLASS_MAPS["3He_4He"]["0"] = "Alpha (4He)"
```

The repository's Garfield label contract says raw labels are `{3He:0, 4He:1, d:2, p:3, t:4}` (`src/run_experiment.py:389-393`; independently repeated as `LABEL_TO_ISOTOPE = {0:"3He", 1:"4He", 2:"d", 3:"p", 4:"t"}` in `scripts/analysis/exp3_isotope_separability.py:87-90`). The same guard explicitly states that `{4:0,...}` therefore encodes triton-vs-rest and requires `data.file_class_list` for Alpha-vs-rest.

Minimal reproduction:

```bash
PYTHONPATH=. python3 - <<'PY'
from src.baselines.kuchera import resolve_task_mappings
print(resolve_task_mappings({"task_type": "3He_4He"}))
PY
```

Observed output begins:

```
({4: 0, 0: 1, 1: 1, 2: 1, 3: 1}, {'0': 'Alpha (4He)', '1': 'Non-alpha'})
```

Thus every PR-5 Kuchera LR/FCNN metric named `alpha_recall` is actually recall for raw label 4 (triton) unless the caller supplies a corrected file-class mechanism. The CLI does not inherit `run_experiment.validate_config`'s Garfield guard. This can invalidate the published “traditional baseline vs CNN” comparison.

**Recommended fix:** require an explicit `file_class_list`/resolved file-class map for Garfield Alpha-vs-rest, or label the legacy map as triton-vs-rest and rename its class map/metrics. Add a regression test using the repository's raw-label contract.

### 2. A6 threshold sweep can emit a false “calibration” verdict (medium-high impact)

**Location:** `scripts/analysis/exp3_threshold_sweep.py:147-155` in PR 9.

The code computes `closes_acc = any(...)` and `closes_bal = any(...)` independently, then returns `"calibration"` when both are true. The documented claim at lines 136-138 requires **one threshold** to close both metrics.

Minimal failing case:

```bash
PYTHONPATH=. python3 - <<'PY'
import numpy as np
from scripts.analysis.exp3_threshold_sweep import compare_arms
y=np.array([0,0,0,1,1,1,1,1])
xa0=np.array([.71,.487,.661,.47,.624,.119,.779,.551])
rn0=np.array([.203,.437,.777,.451,.632,.117,.32,.481])
o=compare_arms(y, np.c_[xa0,1-xa0], np.c_[rn0,1-rn0],
               np.array([.2,.5,.8]))
print(o["comparison"])
print(o["xa"]["curve"])
PY
```

Observed XA rows are:

- `tau=.20`: accuracy .50, balanced accuracy .60
- `tau=.50`: accuracy .50, balanced accuracy .5333
- `tau=.80`: accuracy .625, balanced accuracy .50

RN argmax is accuracy .625 and balanced accuracy .5667. No single XA threshold reaches both RN values, but the function returns `verdict: calibration` because accuracy closes at .80 and balanced accuracy closes at .20.

**Recommended fix:** compute `joint = any(r["accuracy"] >= rn_acc and r["balanced_accuracy"] >= rn_bal for r in xa["curve"])`; use that for the calibration branch and retain separate fields for the marginal checks. Also consider including all probability breakpoints or a documented `[0,1]` grid.

### 3. Paired-stat alignment silently drops label mismatches (medium impact)

**Location:** `src/evaluation/paired_stats.py:178-189` in PR 1.

For shared event IDs whose labels disagree, `align_pair` logs a warning and removes the rows before computing statistics. This can hide a class-index mix-up or a partially corrupted dump while still producing a valid-looking paired estimate on a changed population.

Minimal reproduction:

```bash
PYTHONPATH=. python3 - <<'PY'
import numpy as np
from src.evaluation.paired_stats import align_pair, paired_stats
D=lambda i,y,p: {"event_index":np.array(i), "true_label":np.array(y),
                  "pred_label":np.array(p), "path":"synthetic"}
a=D([1,2,3],[0,0,1],[0,0,1])
b=D([1,2,3],[0,1,1],[0,0,1])
x=align_pair(a,b)
print(x["event_index"], x["n_common"], x["n_label_mismatch"])
print(paired_stats(x,n_resamples=10)["n"])
PY
```

Observed: event IDs `[1,3]`, `n_common=2`, `n_label_mismatch=1`, and paired statistics still run with `n=2`.

**Recommended fix:** fail the paired comparison when any shared label mismatch exists (or require an explicit override that makes the reduced population impossible to miss in downstream claim tables). At minimum, the CLI should refuse a nonzero mismatch count.

### 4. Paired-stat alignment accepts duplicate event IDs and silently keeps the last duplicate (medium/low impact)

**Location:** `src/evaluation/paired_stats.py:165-173` in PR 1.

`pos_b = {event_id: row_position ...}` overwrites earlier rows. Duplicate IDs are not rejected in either dump.

Minimal reproduction:

```bash
PYTHONPATH=. python3 - <<'PY'
import numpy as np
from src.evaluation.paired_stats import align_pair
D=lambda i,y,p: {"event_index":np.array(i), "true_label":np.array(y),
                  "pred_label":np.array(p), "path":"synthetic"}
print(align_pair(D([1],[0],[0]), D([1,1],[0,0],[1,0])))
PY
```

Observed output keeps only B's last row for event 1 (`pred_b=0`) while reporting `n_b=2`, `n_common=1`. A malformed or accidentally concatenated dump can therefore change the paired result without an error.

**Recommended fix:** validate `len(unique(event_index)) == len(event_index)` in `load_predictions_csv` or `align_pair`, and require identical event-key sets when the comparison is intended to be full-val.

### Non-blocking but unsafe fallback

PR 6's battery catches any physics-stats or swap-data exception at `scripts/analysis/exp3_counterfactual_battery.py:533-559`, logs a warning, records `skipped_conditions`, and exits successfully. This is auditable rather than silent, but a caller requesting a specific condition can receive an exit-0 artifact without that condition. A fail-closed mode for `--conditions` would prevent accidental omission.

## What I verified clean

- PR 1's exact McNemar implementation matches SciPy's two-sided exact binomial oracle in the focused tests; paired bootstrap uses the same resample indices for both arms.
- PR 2's angle baseline changes (orientation, CSV validation, finite-prediction guards, lazy torch import) passed the baseline-angle and smoke tests; no event-order or slot-contract failure was reproduced.
- PR 3's isotope parser/features and separability metrics passed their focused tests. The raw-label convention used to diagnose PR 5 is explicit in this code.
- PR 4 provenance and restored battery invocation passed provenance tests; provenance does not alter numerical calculations.
- PR 6 D6 conditions, subset invariant, and swap cursor passed focused tests. The skipped-condition behavior is the fallback risk noted above.
- PR 7 physics normalization passed all dedicated tests. The main training path computes physics statistics from `norm_train_indices` only (`src/run_experiment.py:1363-1377`) and evaluation paths load the persisted scaler; I found no train/validation leakage in the merged code.
- PR 8 table collector passed its focused tests. Its “triton-vs-rest (label bug)” label is consistent with the raw Garfield label contract; the label-fix run has `file_class_list`.
- PR 9 subset provenance, threshold sweep mechanics, selection-bias parsing, and reproducibility tests passed; only the joint-threshold verdict logic above is incorrect.

## EXP3 artifact inventory

Inventory command:

```bash
find '/Users/Reid Hu/MATE-Automation/runs' -mindepth 1 -maxdepth 3 -type d -path '*/EXP3-*'
```

There are **12** EXP3 run directories. Metrics below are read from each run's `metrics.json`; “pth/pred/split” are the actual files present in the live checkout.

| run | seed | representation/arm | accuracy | macro-F1 | class-0 recall field (`alpha_recall`) | best epoch | status | pth | predictions | data_split |
|---|---:|---|---:|---:|---:|---:|---|---|---|---|
| EXP3-ResNet-HC-100k-seed0 | 0 | HC/RN | .95448 | .92670 | .8472 | 30 | complete | no | no | no |
| EXP3-ResNet-HC-100k-seed1 | 1 | HC/RN | .95748 | .93069 | .8394 | 27 | complete | no | no | no |
| EXP3-ResNet-HC-100k-seed42 | 42 | HC/RN | .95908 | .93357 | .8484 | 27 | complete | no | yes (25,000 rows) | yes |
| EXP3-ResNet-Raw-100k-seed0 | 0 | Raw/RN | .88904 | .80974 | .6086 | 17 | complete | no | no | no |
| EXP3-ResNet-Raw-100k-seed1 | 1 | Raw/RN | .89224 | .80864 | .5782 | 3 | complete | no | no | no |
| EXP3-ResNet-Raw-100k-seed42 | 42 | Raw/RN | .89248 | .81858 | .6356 | 18 | complete | no | no | no |
| EXP3-XA-HC-100k-seed0 | 0 | HC/XA | .95412 | .92518 | .8304 | 23 | complete | no | no | no |
| EXP3-XA-HC-100k-seed1 | 1 | HC/XA | .95788 | .93206 | .8536 | 21 | complete | no | no | no |
| EXP3-XA-HC-100k-seed42 | 42 | HC/XA | .95676 | .92894 | .8276 | 22 | complete | no | no | no |
| EXP3-XA-Raw-100k-label-fix-seed42 | 42 | Raw/XA, corrected file-class labels | .92136 | .86928 | .7254 | 13 | recovered artifact absent | no | no | empty (0 bytes) |
| EXP3-XA-Raw-100k-seed0 | 0 | Raw/XA, legacy label map | .87572 | .78392 | .5598 | 7 | recovered | no | no | empty (0 bytes) |
| EXP3-XA-Raw-100k-seed42 | 42 | Raw/XA, legacy label map | .87116 | .77595 | .5482 | 12 | complete | no | no | yes |

The two standard XA-Raw runs with non-empty split files have empty/absent model artifacts in the live checkout; `run_complete.json` records provenance for some missing files but does not restore them.

## Seed summaries (accuracy)

The intervals below are **95% t intervals over independent seed-level accuracies**, not paired-event bootstrap CIs.

| arm/representation | n | mean | SD | range | 95% seed t CI |
|---|---:|---:|---:|---:|---:|
| RN/HC | 3 | .95701 | .00234 | .95448–.95908 | .95121–.96281 |
| XA/HC | 3 | .95625 | .00193 | .95412–.95788 | .95146–.96105 |
| RN/Raw | 3 | .89125 | .00192 | .88904–.89248 | .88648–.89602 |
| XA/Raw (legacy-label runs, seeds 0,42 only) | 2 | .87344 | .00322 | .87116–.87572 | .84447–.90241 |
| XA/Raw label-fix | 1 | .92136 | — | .92136 | — |

Same-seed arithmetic differences (not paired-event tests) are XA−RN = [-0.00036, +0.00040, -0.00232] on HC (mean −0.076 percentage points) and [-0.01332, -0.02108] on Raw for the two legacy-label shared seeds (mean −1.72 percentage points).

## Per-event pairing and CPU feasibility

- Only `EXP3-ResNet-HC-100k-seed42/.../predictions.csv` exists. It has `event_index,true_label,pred_label,confidence`; it is not a paired-stat dump and has no per-class probabilities.
- No EXP3 `best_model.pth` exists locally. The only `.pth` files under `runs/` belong to EXP8.
- No local EXP3 HDF5 image dataset is present for re-inference. Therefore CPU inference on a fixed validation subset cannot be run locally, and paired bootstrap/McNemar between EXP3 arms cannot be computed from the surviving artifacts.
- The counterfactual JSONs are 2,000-event val subsets, not paired arm prediction dumps.

## Additional seed evidence from surviving counterfactual artifacts

Counterfactual files exist for the three XA-HC seeds and for XA-Raw seeds 0, 42, plus the corrected-label seed42 run. Their exact `conditions` values are:

- XA-HC s0: original .9530; permuted-q .9535; zero-cls .7975; zero-q .8955.
- XA-HC s1: original .9605; permuted-q .9605; zero-cls .9570; zero-q .5775.
- XA-HC s42: original .9530; permuted-q .9525; zero-cls .9540; zero-q .4905.
- XA-Raw legacy s0: original .8675; permuted-q .8675; zero-cls .4105; zero-q .2970.
- XA-Raw legacy s42: original .8715; permuted-q .8715; zero-cls .1935; zero-q .8065.
- XA-Raw label-fix s42: original .9275; permuted-q .9275; zero-cls .1935; zero-q .8065.

The permutation result is consistent with query-poisoning being absent on these 2,000-event subsets, but the classifier-side physics effect is not seed-stable on HC: zero-cls deltas are −15.55 pp, −0.35 pp, and +0.10 pp. Raw legacy zero-cls deltas are −45.70 pp and −67.80 pp, with only two legacy seeds and a separate corrected-label run. A paper claim that physics is load-bearing on Raw is supported as a repeated diagnostic pattern for the two legacy seeds; “redundant on HC” is not seed-robust from these artifacts because the HC zero-cls result spans a large negative effect to parity. These are diagnostic-subset results, not full-val or paired-arm CIs.

## Paper claim verdicts and minimum further runs

| claim | verdict from surviving artifacts | minimum evidence needed |
|---|---|---|
| XA improves classification accuracy over RN on HC | **Contradicted as a seed-robust superiority claim**: XA is lower on 2/3 seeds and higher by only .04 pp on seed1; no paired event CI. | Retain three existing seeds plus per-event dumps for all six HC runs; no new training needed if checkpoints/data are restored. |
| RN is better than XA on Raw | **Suggestive, not seed-robust**: RN wins both shared legacy seeds by 1.33 and 2.11 pp; XA seed1 is absent and label-fix changes the label construction. | One standard XA-Raw seed1 run plus restored checkpoints/predictions for all arms; one GPU run at the campaign’s existing EXP3 cost. |
| Physics query poisoning explains XA behavior | **Contradicted on the available XA batteries**: permuted-q changes are 0 pp or ±0.05 pp on each 2,000-event subset. | No new training; rerun full-val batteries for all six arms if the claim is to be stated as full-val. |
| Classifier-side physics is load-bearing on Raw | **Single-seed/limited-seed only**: repeated on two legacy XA-Raw seeds, but n=2 and the corrected-label run is a different label construction. | At least one additional standard-label Raw XA seed and full-val counterfactuals; one GPU training run plus CPU battery. |
| Classifier-side physics is redundant on HC | **Not seed-robust / contradicted by s0 diagnostic**: zero-cls is −15.55 pp on s0 but near parity on s1/s42. | Full-val counterfactuals for all HC seeds and at least one additional independent HC seed if the effect remains heterogeneous. |
| Paired McNemar/bootstrap arm comparisons | **Unavailable from surviving artifacts**. | Restore or regenerate per-event predictions for every same-seed arm pair; no new training if checkpoints and HDF5s can be restored. |
| Traditional-baseline comparison (Kuchera LR/FCNN) | **Not interpretable until PR-5 label mapping is fixed or explicitly labeled triton-vs-rest**. | Correct the baseline mapping, rerun LR/FCNN on the pinned split, and report task identity beside metrics. |

GPU-hour costs cannot be derived verifiably from the surviving local artifacts: no run-time ledger or checkpoint timing is present in this checkout. The only defensible minimum is the number of additional training jobs above; attach the campaign's measured per-job GPU-hour figure before budgeting.

## Completion status

No unresolved captain-owned decision was discovered in this report; the findings are actionable code fixes and evidence gaps.
