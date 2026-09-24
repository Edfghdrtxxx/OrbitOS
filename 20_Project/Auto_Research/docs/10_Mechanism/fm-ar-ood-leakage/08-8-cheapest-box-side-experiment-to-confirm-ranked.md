<!-- Verbatim source section; overview: [[../fm-ar-ood-leakage]] -->
<!-- SOURCE-BODY-START -->
## 8. Cheapest box-side experiment to confirm (ranked)

All CPU-feasible under the 2 GB cap, no training, no GPU:

1. **E1 — feature audit (minutes, pandas+h5py only, no model).** Load `physics_features` for channels A,B,C,D,E,F,G,H from `data/exp8/*.h5`; join to `eval_exp8/predictions.csv` by `global_idx`. Report per-channel feature quantiles and leaked-vs-correct feature distributions. Prediction: leaked events sit at the extreme of `Iyy` (and/or low `Izz`), outside the seen-channel range. This alone names the driving feature and closes the "clustering in stored features" question this report could only answer in hidden space.
2. **E2 — clipped-physics eval (the decisive counterfactual; ~10–20 min CPU on 400k unseen events, batched forward only).** Re-run EXP8 eval on E–H with physics features **clipped to the seen-channel [min,max] per feature**. Prediction: carbon→A leak collapses from ~8% to ≈RN's ~1.5% while seen-channel accuracy is unchanged (clipping is a no-op in-distribution). If confirmed, the mechanism is magnitude extrapolation, full stop — and the fix is a one-line clamp or feature normalization.
3. **E3 — zero/permuted-physics on unseen channels (same cost as E2).** `zero_cls` on carbons should drive them to a single fixed class (the OOD-bias prediction); `permuted_cls` (physics shuffled across the batch) should leave the leak rate ≈ unchanged if the leak is a static magnitude artifact vs drop if event-specific. This is D5 applied to the OOD setting and ties the EXP8 leak directly to the EXP3 `zero_cls` ambiguity.

E1+E2 together are the minimum sufficient confirmation; E3 is the mechanistic tie-in. None touches training or the manuscript.

<!-- SOURCE-BODY-END -->
