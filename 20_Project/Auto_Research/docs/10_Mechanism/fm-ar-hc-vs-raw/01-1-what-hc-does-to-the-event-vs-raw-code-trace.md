<!-- Verbatim source section; overview: [[../fm-ar-hc-vs-raw]] -->
<!-- SOURCE-BODY-START -->
## 1. What HC does to the event vs Raw — code trace

The training-time pipeline is **identical** for both arms. `MATEDataset.__getitem__` (`src/data/dataset.py:424-502`) reads `images` (N,80,48,2 NHWC), transposes to NCHW, applies per-channel z-score `(x−mean)/(std+1e-6)` (lines 469-470), and returns `physics_features` raw (line 474). Same code, same normalization method (`variance_floor`, `std=sqrt(max(var,1e-12))` from ≤3,200 train images — `src/data/normalization.py:113-115`), same label map (`src/data/dataloader.py:49`). The only difference is **which HDF5 files are read** (`Garfield_Raw/*.h5` vs `Garfield_HC/*_hc.h5`, per run `config.yaml data.hdf5_files`).

The representation difference is entirely upstream, in conversion (spec: `20_doc/Legacy Codebase/S1-foundation-data-pipeline/spec.md`; legacy code `hc_preprocessing.py` / `convert_root_to_h5_data.py`, Windows box — not in this repo):

| Step | Garfield_Raw | Garfield_HC | Spec ref |
|---|---|---|---|
| Source | `garfield_postprocessor_v5.C` pre-binned `padSignals[80][48]`, `driftTime[80][48]`; per-pad Gaussian noise σ≈0.028 added to **every** pad | Raw 3D hits `(x,y,z,q)` from same events | Req-2.4 |
| DBSCAN | **none** | eps=10 mm, min_samples=3, on **2D (y,z)** only; keep largest non-noise cluster; no-cluster events kept as all-zero images | Req-5.1–5.4 |
| Re-projection | none (pre-binned) | surviving hits re-projected onto triangular pad grid; edge hits **clamped**, not discarded | Req-2.5 |
| Central hole mask (j≥46, 28≤i≤51) | **not applied** | applied at hit level | Req-2.3/2.4 |
| Ch0 | `log1p(clip(padSignals,0))` | `log1p(clip(sum q_i,0))` over cluster hits — **same formula** | Req-3.1 |
| Ch1 | `driftTime` passthrough = **charge-weighted** mean x_norm | **simple (unweighted)** mean x_norm over cluster hits | Req-3.2 |
| Physics features `[Iyy,Izz,Iyz,total_mass]` | computed from **Ch0 of the binned image** (post-log1p weights, bin-index coords) | same code, same formula — but Ch0 is now the denoised image | Req-4.1/4.4 |

So HC differs from Raw by exactly four mechanisms: (a) DBSCAN noise/secondary-hit removal, (b) central hole mask, (c) Ch1 weighted→unweighted mean, (d) downstream — physics features computed from a clean vs noise-dominated Ch0. Charge handling is otherwise identical (same log1p compression, same z-score recipe).

<!-- SOURCE-BODY-END -->
