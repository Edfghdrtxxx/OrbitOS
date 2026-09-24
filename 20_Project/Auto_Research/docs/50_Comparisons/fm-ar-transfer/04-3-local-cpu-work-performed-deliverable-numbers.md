<!-- Verbatim source section; overview: [[../fm-ar-transfer]] -->
<!-- SOURCE-BODY-START -->
## 3. Local CPU work performed (deliverable numbers)

Setup: downloaded `pr_train_simulated.npy` + `train_targets.npy` (734 MB, < 1 GB) into worktree `99_System/.scratch/z01-data/`; verified `(5600,128,128,1) float64`, labels 2800 p / 2800 C. Script: `99_System/.scratch/z01_baseline.py` (worktree scratch, discarded at teardown — code is trivially re-derivable from `src/data/z01.py` public functions).

**Split fidelity:** `split_publisher_train(labels)` output is **identical** to the live run's `data_split.json` (train 4480 / val 1120, seed 42, stratified) — verified programmatically.

**Results (val split, balanced accuracy):**

1. `LogisticRegression(l2, C=1, balanced, lbfgs, 1000, seed 42)` on standardized `[Ixx,Iyy,Ixy,M]` = **0.7009** (acc 0.7009; per-class recall [0.710, 0.692]; confusion [[397,162],[173,388]]). Cross-check: scoring the lead's own `model.npz` + `normalization_stats.json` on the same split gives **identical 0.7009** — the frozen arm is faithfully reproduced.
2. Flattened-pixel LR (Kuchera's actual LR recipe, 16384-d) = **0.9215** (confusion [[527,32],[56,505]]).
3. K-means(k=2) on moments = **0.6003**, ARI 0.040 — moments carry weak cluster structure; the published near-perfect k-means ran on VGG16 features.
4. Noise robustness (uniform random pixels at val-max amplitude, paper's "uniform random noise" protocol): pixel-LR 0.9215 → 0.662 (5%) → 0.617 (10%) → 0.515 (25%); moments-LR 0.7009 → 0.500 at any noise ≥5% (mass/moments dominated by noise pixels).

**Interpretation:** the frozen Z01 moments-LR arm is a weak traditional baseline (0.70), far below the published LR (0.98 on voxel features; my pixel-LR 0.92). If the paper quotes a "traditional baseline" on the public set, **pixel-LR is the honest anchor, not moments-LR**. The 0.98→0.92 gap vs Kuchera is explained by representation (their 8000-voxel 3D discretization vs the published 2D projections) and split differences — direction of the gap is expected, not a discrepancy.

<!-- SOURCE-BODY-END -->
