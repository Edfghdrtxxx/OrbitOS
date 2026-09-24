<!-- Verbatim source section; overview: [[../fm-ar-attn-sink]] -->
<!-- SOURCE-BODY-START -->
## 3. Does the Bragg-focus claim survive?

Partially — the spatial fact survives on Raw, the causal framing does not.

| Sub-claim | Status |
|---|---|
| "Attention mass concentrates on the Bragg region" | **True on Raw only** (f_Bragg 0.467/0.480 vs 0.20 null, p≈1e-11/1e-69). False on HC (≤0.02, all 3 seeds). |
| "The physics-informed query guides attention to the Bragg peak" | **Refuted on both representations.** On HC the query is ignored outright (fixed sink). On Raw the query is ~constant and permutation-invariant — the map is key(image)-driven. The physics features inform the classifier through the **direct concat path** (`model.py:374-377`), not through attention routing. |
| "Attention is event-adaptive on Raw" | **Unverified.** f_Bragg=0.47 is consistent with an event-adaptive map *and* with a fixed spatial prior whose tokens usually fall in the far-from-vertex region (the Bragg heuristic picks the far 20% of occupied pads; a fixed map concentrated at low-z/high-|y| tokens would score high whenever tracks range out that way). The argmax-dispersion and argmax-on-track stats were recorded for HC (87% token 50, 2.1% on-track) but **never for Raw** — `exp4_attention_metrics.py` does not persist per-event argmax at all (it only aggregates f_Bragg and attn–charge r; the 444/512 number came from an ad-hoc eval). |

**Verdict for the paper:** describe the maps as *image-driven attention pooling*, not physics-guided cross-attention:

> "The cross-attention branch allocates its mass over image tokens independently of the physics query: permuting the query across the batch changes no prediction on any checkpoint. On the Raw representation the resulting map concentrates on the Bragg region (f_Bragg ≈ 0.47 vs 0.20 null); on HC it collapses to a fixed low-information token (87% argmax on one edge token, f_Bragg ≤ 0.02) — a softmax attention sink. The physics features instead inform the classifier through the direct concatenation path."

This is *stronger* than the current draft wording ("the physics-feature query attends to the physically meaningful end of the track") because it survives the counterfactual evidence. It also reframes the architecture honestly: at 100k scale the learned module is a **single-query attention-pooling head with a parallel physics-feature concat** — the "cross-modal" part is vestigial in the attention branch. The `query_mode: "learned"` variant already in the code (`cross_attention.py:82-83`) is the natural control to make this explicit.

<!-- SOURCE-BODY-END -->
