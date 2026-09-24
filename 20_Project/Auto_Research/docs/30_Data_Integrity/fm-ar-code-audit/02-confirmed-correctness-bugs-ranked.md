<!-- Verbatim source section; overview: [[../fm-ar-code-audit]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
