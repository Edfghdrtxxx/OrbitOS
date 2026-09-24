<!-- Verbatim source section; overview: [[../fm-ar-feature-norm]] -->
<!-- SOURCE-BODY-START -->
## 7. Cheapest CPU diagnostics for box 176 (ranked, all inference-only, no retraining)

All extend `scripts/analysis/exp3_counterfactual_battery.py` — the override hooks already exist (`model.py:263-264` `physics_query_override`, `classifier_physics_override`). Each new condition is ~5 lines + one val-set forward pass (2000 events, CPU-feasible under the 2 GB cap, minutes).

1. **D6a `mean_cls` — replace classifier physics with the per-feature train mean.** Preserves the DC offset (Izz→170) but destroys all event-specific content. Read: `mean_cls ≈ original` → the head uses physics as a *static bias*, not information → scale artifact confirmed, zero_cls collapse was OOD bias, H1b-as-information dead. `mean_cls ≈ zero_cls` → event content matters → genuine dependence. **This is the single most decisive addition** — it splits "magnitude" from "content" exactly where `zero_cls` is ambiguous. (D5's `permuted_cls` partially does this but permuted features can land off-manifold; mean is the cleanest version.)
2. **D6b `scaled_cls` — z-score classifier physics with train-split stats.** Preserves event content, destroys magnitude. Read: `scaled_cls ≈ original` → head is content-driven (scale harmless); `scaled_cls ≪ original` → head is magnitude-driven → scale confirmed as load-bearing. Together D6a+D6b form a 2×2 (content × magnitude) that fully decomposes the zero_cls ambiguity.
3. **D6c `clipped_cls` on EXP8 unseen channels — clip E–H physics to seen-channel [min,max].** The prior scout's E2; prediction: carbon→A leak 8% → ~1.5% (RN level). This is the OOD-leak confirmation and the direct test of "scale causes the leak."
4. **D6d `centered_q` — subtract train mean from query physics only.** Removes the 386-norm Izz DC while keeping event variation. Read: `centered_q ≈ original` → the query DC is functionally inert (softmax shift-invariance means only direction matters — actually predicts a *change*, so a null result would be informative about MHA's in_proj absorbing the DC); `centered_q` changes accuracy → the DC was doing something. Cheapest of all; run it, but interpret after D6a.
5. **Feature audit (E1, no model):** dump per-channel feature quantiles for EXP8 A–H and EXP3 Raw vs HC from the H5s — closes the Raw-range gap in §2 and names the OOD-driving feature. pandas+h5py only.

Suggested implementation note for the lead: `mean_cls`/`scaled_cls` need train-split physics stats — compute once from the training H5s (or the val loader's physics tensor) and pass as constants to the override fn; no dataset changes needed.

<!-- SOURCE-BODY-END -->
