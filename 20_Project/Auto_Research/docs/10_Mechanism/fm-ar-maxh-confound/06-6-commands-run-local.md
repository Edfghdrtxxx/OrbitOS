<!-- Verbatim source section; overview: [[../fm-ar-maxh-confound]] -->
<!-- SOURCE-BODY-START -->
## 6. Commands run (local)

- `np.load` on both caches → shapes/dtypes (§1).
- `shasum -a 256` on caches vs `git show 21eec4f:…` → byte-identical.
- `git diff 21eec4f HEAD -- configs/EXP8_*.yaml` → empty (split recipe unchanged).
- Rebuilt `build_samples` from `runs/EXP8-ResNet-Ideal-UnseenChannel/auditfix_d570d34_01/eval_exp8/predictions.csv` → matches `exp8_feature_embedding.png.provenance.json` `generation_parameters.samples` exactly.
- AUROC reproduction + per-channel/pairwise matrices, single-unit AUROCs, cross-arm Spearman, joins to auditfix `predictions.csv` (7500/7500 hits) — all numbers in §2.
- `mdfind`/`find` for `sim_*100k.h5` and `data/exp8/` → absent locally.

<!-- SOURCE-BODY-END -->
