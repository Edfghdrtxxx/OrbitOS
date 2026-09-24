<!-- Verbatim source section; overview: [[../fm-ar-attn-sink]] -->
<!-- SOURCE-BODY-START -->
## TL;DR

1. **Token 50 is an edge-adjacent, near-always-empty 8×8-pad block — not the beam hole.** It covers image pads `y∈[64,72)`, `z∈[16,24)` (physical `y∈[87.9,117.2] mm`, `z∈[98.6,147.8] mm`). The beam hole is `z≥46, 28≤y≤51` — tokens 40–41 and 46–47. Token 50 is addressable in the analytic pad model but empirically off-track in ~98% of events (2.1% argmax-on-track overall vs 87% on token 50).
2. **A constant query does NOT mathematically force a fixed attention map** — the map is `softmax(q·k_i(x)/√d)` and keys `k_i(x)` are event-dependent. The observed fixed argmax therefore means the model *learned* a dominant sink key: token 50's logit wins for every query in the realistic-query cone. `permuted_q` Δ=0 on 6/6 checkpoints is exactly what this geometry predicts.
3. **The Bragg-focus claim survives only in weakened form.** On Raw, ~47% of attention mass lands on the Bragg region — but the physics query demonstrably does not steer it (permutation changes nothing). The honest claim is "the attention layer concentrates on the Bragg region, driven by image content alone" — i.e., the module is a **single-query attention-pooling head, not cross-modal fusion**. On HC the claim fails outright (f_Bragg ≤ 0.02, fixed sink).
4. **New caveat the lead should know:** the `permuted_q` test is *weak* on Raw — Raw physics features are near-constant (total_mass CV ≈ 3%), so permuting them barely moves the query. The strong evidence for query-content irrelevance comes from HC (CV ≈ 27%). On Raw the correct statement is "the query is *nearly constant by construction*," which yields the same conclusion (image-driven map) via a different mechanism.
5. **Cheapest CPU check for box 176:** dump per-event attention maps under `original` vs `permuted_q` on one checkpoint (~10 lines added to `exp4_attention_metrics.py`, ~5 min at the existing 2000-event/2 GB settings). This upgrades "accuracy-invariant" to "map-invariant" and simultaneously answers whether Raw's map is event-adaptive or a fixed spatial prior — the one measurement never recorded for Raw.

---

<!-- SOURCE-BODY-END -->
