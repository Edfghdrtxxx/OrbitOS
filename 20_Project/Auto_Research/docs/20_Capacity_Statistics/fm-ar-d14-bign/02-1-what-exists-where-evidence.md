<!-- Verbatim source section; overview: [[../fm-ar-d14-bign]] -->
<!-- SOURCE-BODY-START -->
## 1. What exists where (evidence)

| Input | Location | Evidence |
|---|---|---|
| Script `exp3_h1_diagnostics.py` | worktree + live checkout, identical (sha256 `77d23123…`) | `shasum -a 256` both paths |
| `data_split.json` (val = 25,000 of 125k, `per_file_limit: 25000`, `test_size: 0.2`, seed 42) | live checkout only | `runs/EXP3-XA-Raw-100k-seed42/20260922_185618/data_split.json` |
| `config.yaml`, `normalization_stats.json` | live checkout only | same dir |
| `best_model.pth` ×2 | **AutoDL only** (`/root/autodl-tmp/z01-exec`) | `h1_diagnostics.json` provenance block; absent everywhere on Mac |
| Garfield_Raw H5 ×5 | **AutoDL only** (`/root/autodl-tmp/data/Garfield_Raw/`) | `config.yaml:25-29` |
| `h1_features.npz` | **nowhere** — never synced | `find` over both checkouts |
| `torch` | **not installed** | `import torch` fails in every interpreter found |
| `sklearn 1.6.1`, `h5py 3.14.0`, `numpy 2.0.2` | system python3.9 | verified |

The n=500 run's provenance (`h1_diagnostics.json`) records host `autodl-container-3187449845`, repo `/root/autodl-tmp/z01-exec`, argv `--max-events 500 --device cpu --batch-size 32`.

**Same val-set definition:** `--max-events 8000` reproduces the n=500 protocol exactly — `_build_eval_dataset` reads `val_indices` (25,000) from `data_split.json`, then subsamples `arange(25000)[::3][:8000]` (step = 25000//8000 = 3). Note: the stride-3 subset is **not** a superset of the old stride-50 subset (only ~⅓ of the n=500 events recur); the *definition* is identical, the event overlap is partial. If strict supersetting is wanted, use `--max-events 12500` (step 2, contains every stride-50 event) — memory model says it still fits (§4).

<!-- SOURCE-BODY-END -->
