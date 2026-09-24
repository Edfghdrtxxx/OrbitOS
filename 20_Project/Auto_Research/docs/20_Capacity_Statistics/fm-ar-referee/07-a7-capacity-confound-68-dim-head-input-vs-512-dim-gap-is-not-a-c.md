<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## A7. Capacity confound: 68-dim head input vs 512-dim GAP is not a controlled comparison
- **Hits:** the H1a/H1b framing and any "physics crowds the head" claim.
- **Why it bites:** XA's classifier sees `attended(64) ⊕ physics(4)` = 68 dims; RN sees `GAP(512)`. "Physics features hurt" and "a 68-dim bottleneck hurts" are confounded — the XA arm is *also* the narrower-head arm. A referee notes the experiment varies two things at once (physics pathway AND head width) and attributes the effect to one.
- **Already answered?** Partially — D1/D3 probes (in flight) test whether the 68-dim representation is intrinsically weaker; fm-ar-capacity-critique §1 notes `probe_XA ≈ probe_RN` does not cleanly confirm H1b (could be MLP optimization failure).
- **Cheapest check:** **CPU-partial:** D1/D3 (in flight). **Decisive answer needs GPU:** `attn_dim: 512` capacity-matched XA run (~5.5h, already staged in the mechanism pack) — the only run that deconfounds width from physics.

<!-- SOURCE-BODY-END -->
