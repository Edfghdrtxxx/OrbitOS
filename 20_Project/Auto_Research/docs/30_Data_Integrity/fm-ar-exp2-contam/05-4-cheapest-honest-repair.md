<!-- Verbatim source section; overview: [[../fm-ar-exp2-contam]] -->
<!-- SOURCE-BODY-START -->
## 4. Cheapest honest repair

### Option A — zero-compute re-scoring (cheapest; needs the Windows box, ~5 min)

Both contaminated runs saved `predictions.csv` (event_index, true_label, pred_label) and `data_split.json` (val_indices = global indices into the sorted 7-file space). Carbon events occupy global indices < 50,000 (files 1–2 in §1.2). Join and drop:

```python
import json, pandas as pd
split = json.load(open('data_split.json'))
val = split['val_indices']                      # global indices
df = pd.read_csv('predictions.csv')             # aligned to val_indices order
mask = [i >= 50000 for i in val]                # drop 13C/14C (first two sorted files)
clean = df[mask]
acc = (clean.true_label == clean.pred_label).mean()
# per-species: species = val[i]//25000 -> file table in §1.2
```

Cost: minutes, zero GPU, zero retraining. Yields the exact clean-subset accuracy/macro-F1/per-species recalls for both checkpoints. **This is the recommended first step** — it converts my c≈1.0 estimate into a measurement.

### Option B — CPU re-evaluation on box 176 (~1–3 CPU-h, 0 GPU-h)

If Windows artifacts are unreachable: copy `best_model.pth` + `normalization_stats.json` + `config.yaml` from the two Windows run dirs to box 176 and run `evaluate.py` against the 5 `sim_inv_*_hc.h5` files there. Two caveats: (i) box-176 Garfield files are OLD-mapped, so the eval config **must** set `data.file_class_list` (the 2026-09-23 guard at `run_experiment.py:400-417` refuses Garfield binary runs without it); (ii) box-176 files are an independent conversion — image content should be identical modulo conversion nondeterminism, so treat the result as a cross-check, not bit-exact. Cost: 2 checkpoints × 25k-event CPU forward pass ≈ 20–60 CPU-min each plus transfer.

### Option C — clean retrain (only if clean-*trained* numbers are wanted)

Exact config change for `configs/EXP2_{Gated,Concat}Fusion_HC_100k_3He4He.yaml` — replace the glob with an explicit list and satisfy the guard:

```yaml
data:
  dataset: Garfield_HC
  hdf5_dir: ""
  hdf5_files:
    - "Garfield_HC/sim_inv_12C300MeV_4He_3He_100k_garfield_v5_hc.h5"
    - "Garfield_HC/sim_inv_12C300MeV_4He_4He_100k_garfield_v5_hc.h5"
    - "Garfield_HC/sim_inv_12C300MeV_4He_d_100k_garfield_v5_hc.h5"
    - "Garfield_HC/sim_inv_12C300MeV_4He_p_100k_garfield_v5_hc.h5"
    - "Garfield_HC/sim_inv_12C300MeV_4He_t_100k_garfield_v5_hc.h5"
  file_class_list: [1, 0, 1, 1, 1]   # declared order 3He,4He,d,p,t -> 4He = class 0
  per_file_limit: 25000
```

This reproduces EXP1's exact 125k/100k/25k split (same seed 42, same sorted files), making the retrain fully controlled against EXP1-XA — including identical val indices. On box 176 the same config works unchanged (OLD-mapped files are bypassed by `file_class_list`).

GPU-hour estimate: EXP2 epochs on the RTX 4060 laptop took ~21 min under contention (26–29 epochs → ~9–10 h/run there). On the AutoDL 3080 Ti, EXP3-scale runs (100k train, 20–38 epochs) imply roughly **2.5–4 GPU-h per run → ~5–8 GPU-h for both**, inside the approved 24 GPU-h budget. But note Option C still leaves a single-seed comparison; its marginal value over Option A is only the training-pool difference.

### Recommendation

1. **Option A now** (Windows box, minutes) → exact clean numbers for the manuscript footnote/fix.
2. If the captain wants the fusion claim to rest on fully controlled data, **Option C** (≤8 GPU-h, within budget) — but the clean 13C/14C arm already supports "simplest fusion ≥ cross-attention," so the cheapest *sufficient* manuscript repair may be dropping or annotating the ³He/⁴He arm, costing 0 GPU-h.
3. Whatever runs next on Garfield must use `file_class_list` — the guard now enforces it, and this contamination is exactly the failure mode it exists for.

---

<!-- SOURCE-BODY-END -->
