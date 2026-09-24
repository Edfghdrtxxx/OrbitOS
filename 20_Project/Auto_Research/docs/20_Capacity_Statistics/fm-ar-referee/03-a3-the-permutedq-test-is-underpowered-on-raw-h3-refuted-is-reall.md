<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## A3. The `permuted_q` test is underpowered on Raw — "H3 refuted" is really an HC result
- **Hits:** C5 "physics query carries no event-specific signal (H3 refuted)" — the campaign's most-quoted mechanism fact.
- **Why it bites:** on Raw the physics features are near-constant (total_mass CV ≈ 3%, |r| ≤ 0.038; recording doc L101). Permuting near-constant features produces near-identical queries, so Raw's Δ=0 barely probes anything — the query is *nearly constant by construction*, which yields the same conclusion via a different mechanism. The strong evidence is HC (CV ≈ 27%) (fm-ar-attn-sink §2 caveat; fm-ar-feature-norm §3c: the query is a ~383-norm vector dominated by a fixed Izz DC term, so permutation barely moves it on *either* representation).
- **Already answered?** Partially — fm-ar-attn-sink and fm-ar-feature-norm both flag it; the closing doc does not. The claim survives but must be re-worded: "query content-free" is proven on HC; on Raw it is "query nearly constant by construction."
- **Cheapest check:** **CPU, ~5 min on box 176** — dump per-event attention maps under `original` vs `permuted_q` on XA-Raw-s42 + XA-HC-s42 and record `max|α_orig − α_perm|` + argmax-agreement (~10 lines in `exp4_attention_metrics.py`). Upgrades "accuracy-invariant" to "map-invariant" and simultaneously answers whether Raw's map is event-adaptive or a fixed spatial prior (the one measurement never recorded for Raw).

<!-- SOURCE-BODY-END -->
