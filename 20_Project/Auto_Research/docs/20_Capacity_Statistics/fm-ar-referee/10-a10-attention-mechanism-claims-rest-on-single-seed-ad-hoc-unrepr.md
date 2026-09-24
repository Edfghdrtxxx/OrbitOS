<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## A10. Attention-mechanism claims rest on single-seed, ad-hoc, unreproduced evals
- **Hits:** C10 (HC sink / Raw Bragg-focus) and the "physics-guided attention" narrative.
- **Why it bites:** (a) Raw Bragg-focus (f_Bragg 0.467) is **seed-42 only** — XA-Raw-s0 attention metrics were never produced. (b) The headline sink stats (87% argmax on token 50, 444/512, max-weight 0.52, 2.1% on-track) come from an ad-hoc eval whose output exists nowhere — the synced `exp4_attention_metrics.json` (n=500) lacks every one of those fields (results-audit F4/Q4). (c) `exp4_attention_metrics.py` persists no per-event argmax, so no argmax claim is reproducible from artifacts. (d) Token 50 is an edge-adjacent near-empty block, **not** the beam hole (fm-ar-attn-sink §1) — the "attention finds the physics" framing is backwards: on HC it finds a register.
- **Already answered?** HC sink is seed-robust (3/3, f_Bragg ≤ 0.02). Everything else: no.
- **Cheapest check:** **CPU, ~1h on box 176** — run `exp4_attention_metrics.py` on XA-Raw-s0 and XA-Raw-lf (never run), plus Check A from A3 (per-event argmax persistence). Makes every attention claim a reproducible artifact.

<!-- SOURCE-BODY-END -->
