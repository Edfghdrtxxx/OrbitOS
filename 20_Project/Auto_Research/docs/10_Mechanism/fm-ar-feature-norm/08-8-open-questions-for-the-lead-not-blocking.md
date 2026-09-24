<!-- Verbatim source section; overview: [[../fm-ar-feature-norm]] -->
<!-- SOURCE-BODY-START -->
## 8. Open questions for the lead (not blocking)

- **Raw-arm feature ranges** (§2 gap): need `physics_features` quantiles from `Garfield_Raw/*.h5` on the box — E1 covers it. Prediction: Izz still O(10²), total_mass compressed (CV 3%).
- **EXP3 checkpoint head weights**: only EXP8 `best_model.pth` is local; the §3 quantification should be re-run on `EXP3-XA-Raw-100k-seed42` and `EXP3-XA-HC-100k-seed42` checkpoints (same torch-free recipe, §9) to check whether the Raw head's physics columns are *larger* (more reliance) or the ReLU tiling more frozen. Prediction under H1b: Raw head has comparable physics weights but the features are noise → same DC cost, zero information gain.
- **fp16 under AMP**: `mixed_precision: true` in all configs; physics is cast to `x.dtype` (`model.py:337`). Izz≈170 in fp16 is representable but the query's 386-norm DC in fp16 attention scores could sharpen softmax saturation. Minor; flag only.
- **Manuscript fix** (§5): captain's call — the "standardized" sentence is wrong for both the reproduction and (per spec D-PHYS-NORM) the original published runs.

<!-- SOURCE-BODY-END -->
