<!-- Verbatim source section; overview: [[../fm-ar-cpu-agenda]] -->
<!-- SOURCE-BODY-START -->
## 1. What this Mac can run — verified, not assumed

### 1a. Local data and artifacts (measured)

| Path | Size | Contents |
|---|---|---|
| `/Users/Reid Hu/MATE-Automation/data/srim/` | 96 KB | SRIM/LISE++ range tables + validation report |
| `/Users/Reid Hu/MATE-Automation/data/trk_h5_v2/truth_sidecar_v2.h5` | 23 MB | `energy_truth_mev` (1.2M×4 f32), `num_tracks` (1.2M i32) — truth only, **no images** |
| `/Users/Reid Hu/MATE-Automation/runs/` | 722 MB | 12 EXP3 run dirs (metrics/history/configs/**no checkpoints**), 2 EXP8 run dirs **with `best_model.pth` (135 MB each)** + `predictions.csv` (75k) + `eval_exp8/predictions.csv` (475k), TRK5/TRK6 `predictions_regression.csv` (450k rows each), 8 baseline `predictions_regression.csv` + one 5-config sweep dir, Z01 `model.npz` + `data_split.json` (**no Z01 checkpoint**), 6 `counterfactual_battery.json` + 3 `counterfactual_battery_d5.json` + 4 `exp4_attention_metrics.json` + 1 `h1_diagnostics.json` |
| worktree `outputs/figures/EXP8/_cache_feature_embedding/` | ~4 MB | `ResNet_penultimate.npz`, `CrossAtt_penultimate.npz` (7500×128 f32 + group labels) — **Jul-9 caches, pre-auditfix checkpoint** |
| worktree `outputs/{footprint_cut_r20mm,penetration_cut}/` | ~130 MB | `survive`/`keep` boolean caches over 180k events |

**Not local:** all EXP3 `best_model.pth`, all Garfield_HC/Garfield_Raw H5s, all `data/exp8/*.h5` (9 files, ~100k events each), `data/trk_h5_v2/trk_all_uncompressed_v2.h5`, Z01 `.npy` files (were in a discarded worktree), Z01-ResNet checkpoint, all `predictions_paired.csv` dumps, `h1_features.npz`, TRK3/4-v2 artifacts, EXP1/EXP2/V6/V4 artifacts. Two `data_split.json` are 0 bytes (XA-Raw-s0, XA-Raw-lf — verified).

### 1b. Python environment (measured)

System python3 = 3.9.6 (`/usr/bin/python3`) with numpy 2.0.2, scipy 1.13.1, pandas 2.3.3, sklearn 1.6.1, h5py 3.14.0, matplotlib, pytest, PyYAML. **No torch, no torchvision.** `uv` available at `~/.local/bin/uv`. Hardware: Apple M4, 16 GB RAM, 10 cores.

### 1c. CPU-torch feasibility — probed, not assumed

Created `.venv-probe` (uv, CPython 3.11.15) + `torch 2.14.0` + `torchvision 0.29.0` CPU wheels: **install 76 s + 51 s**. Loaded the real `src.models.model.MATEModel` and the real EXP8 checkpoint:

| Measurement | Result |
|---|---|
| `torch.load` EXP8 `best_model.pth` (135 MB) | 0.2 s — loads fine on CPU |
| XA forward, batch 64, (2,80,48), 4 threads | 3.48 s → **18 ev/s** (2000 ev ≈ 109 s) |
| ResNet (`fusion_type=none`) forward, batch 64 | 2.23 s → **29 ev/s** |
| XA train step, batch 64 | 9.5 s → **7 ev/s** → ~4.1 h/epoch at 100k events → **~100 h for a full run** |

**Verdict:** CPU torch on this Mac is *faster than box 176* (16 GB vs 2 GB cgroup, M4 vs shared vCPU). Inference-side campaign work (counterfactual batteries, prediction dumps, held-out eval, attention metrics, embedding refresh) is **fully feasible here** — the only blocker is data locality, not compute. Training is not: ~100 h/run vs ~5 GPU-h, so no training substitutes exist.

### 1d. Torch-free tools verified working on this Mac today

| Command | Result |
|---|---|
| `exp3_selection_bias.py` over all 12 EXP3 run dirs | Ran. Gaps +0.2 to +1.7 pp; the s42 XA-vs-RN pair gives `final_gap = −0.0306` |
| `exp3_prereg_score.py --selection …` | Ran. `selection_bias` row = **miss for all six rivals** (formal scorer verdict, not a hand-read) |
| `exp3_collect_tables.py --runs-dir …` | Ran. 12 runs → CSV/MD/TeX tables + provenance JSON |
| `compare_exp3_runs.py` | Ran. Full pairwise table incl. label-task flags |
| `exp8_activation_ood.py` on local caches | Ran (35 s). Reproduces AUROC 0.903 XA / 0.898 RN for F+G+H vs C+D |
| `rescore_sweep_event_mean.py` on local sweep dir | Ran. Recomputed ranking, winner no-flip, paired CI |
| `exp8_maxh_observable_join.py` | Ran → clean exit listing the 8 missing `data/exp8/*.h5` |
| `exp3_paired_stats.py` / `exp3_threshold_sweep.py` | Verified CLI; **no `predictions_paired.csv` exists locally** — nothing to consume |
| `verify_bib.py` | Stdlib + network only; runnable (bib is captain-held, so read-only verify is the only legal use) |

---

<!-- SOURCE-BODY-END -->
