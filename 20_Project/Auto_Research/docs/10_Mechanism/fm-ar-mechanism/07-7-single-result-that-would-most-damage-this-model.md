<!-- Verbatim source section; overview: [[../fm-ar-mechanism]] -->
<!-- SOURCE-BODY-START -->
## 7. Single result that would most damage this model

The most damaging result is **a map-level `permuted_q` change that is large and predictive** on HC: max attention-map change ≥0.10, argmax agreement ≤0.80, and accuracy loss ≥2 pp on the same events. This would directly falsify the claim that the physics query is a static/near-static bias and would force a query-routing mechanism. A close second is `permuted_cls`/`mean_cls` causing a large accuracy drop (≥10 pp) while `scaled_cls` and `clipped_cls` do not improve: that would reject the OOD-bias explanation and support genuine event-specific physics dependence/crowding.

<!-- SOURCE-BODY-END -->
