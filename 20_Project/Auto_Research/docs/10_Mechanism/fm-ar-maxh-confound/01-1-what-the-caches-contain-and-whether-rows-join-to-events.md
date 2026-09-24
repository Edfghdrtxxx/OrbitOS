<!-- Verbatim source section; overview: [[../fm-ar-maxh-confound]] -->
<!-- SOURCE-BODY-START -->
## 1. What the caches contain, and whether rows join to events

**Files:** `/Users/Reid Hu/MATE-Automation/outputs/figures/EXP8/_cache_feature_embedding/{ResNet,CrossAtt}_penultimate.npz` (mtime 2026-07-09; sha256 `15a9d78d…` / `7632c952…`, byte-identical to git commit `21eec4f`).

**Contents:** `X` (7500×128 float32 penultimate activations) + `y` (7500 group labels: A, B, C+D, E, F+G+H — 1500 each). **No event IDs, no channel tags, no indices.**

**Producer:** `scripts/plotting/plot_EXP8_feature_embedding.py`
- `build_samples` (lines 145–160): `rng = np.random.default_rng(42)`; per group, `rng.choice(len(sub), 1500, replace=False)` over rows of the ResNet `eval_exp8/predictions.csv`; `np.sort(take)` preserves CSV row order.
- `features_for_arm` (lines 208–242): cache rows are emitted in group order (A, B, C+D, E, F+G+H), then channel order within a group (dict insertion = GROUPS tag order), then CSV row order within a channel.
- The Jul-9 script version (`git show 21eec4f:…`) has **identical sampling code**; only cache-keying/provenance was added later (diff verified).

**Join — reconstructible, with one caveat:**
- `outputs/figures/EXP8/exp8_feature_embedding.png.provenance.json` → `generation_parameters.samples` records the exact `global_idx` lists per channel for the **Jul-12** (post-auditfix) regeneration. I verified cache row order matches this key exactly: `(y == reconstructed_labels).all()` for both arms, and rebuilding `build_samples` from the auditfix `predictions.csv` reproduces the provenance key **bit-for-bit**.
- The Jul-9 caches have no provenance (provenance sidecars did not exist then). The join is still valid **iff** the sampled event set is identical across the two runs. It is: `predictions.csv` row order = `test_indices` (from `data_split.json`) then unseen channels E,F,G,H as `arange` (`src/evaluation/evaluate_exp8_unseen.py:1330-1346`, `_build_unseen_loader` uses `per_file_limit=None` → `subsample_indices` returns `arange`, `src/data/dataset.py:45-75`). The split is seeded (`random_state=seed=42`, `src/data/dataloader.py:397-413`), and `configs/EXP8_*.yaml` are **unchanged** between `21eec4f` and HEAD (`git diff` empty; seed 42, per_file_limit 100000, same file lists). So the Jul-9 and auditfix runs sampled the same events; the provenance key joins to the Jul-9 caches. Caveat: this rests on split determinism, not a recorded Jul-9 key — flagged as `[INFERENCE]` with strong supporting evidence.
- The Jul-9 runs themselves (`runs/EXP8-*/20260703_*`, referenced by `exp8_inference_utils.py` at `21eec4f`) are deleted locally; only `auditfix_d570d34_01` remains.

<!-- SOURCE-BODY-END -->
