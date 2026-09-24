<!-- Verbatim source section; overview: [[../fm-ar-ood-leakage]] -->
<!-- SOURCE-BODY-START -->
## 3. Confidence and entropy: leaked vs correctly-routed (same channel)

Medians (XA arm; RN in parentheses where it differs materially):

| group | n (XA, F) | maxp med | entropy med | p_A med | p_other med |
|---|---:|---:|---:|---:|---:|
| F→A leaked | 8,284 | **0.765** (RN 0.547) | 0.69 (RN 0.96) | 0.765 | 0.091 |
| F→B leaked | 2,665 | 0.466 | 1.02 | 0.178 | 0.322 |
| F correct (→other) | 89,051 | 0.912 | 0.36 | 0.045 | 0.912 |
| seen-A correct | 13,859 | 0.980 | 0.11 | — | — |

- **XA's carbon→A leaks are confident**: median maxp 0.75–0.77, 84–85% of leaked events have maxp > 0.5, ~12% have maxp > 0.9. RN's rare carbon→A leaks are marginal (median maxp 0.55). XA leaks are *more* confident than its own correct routing of the same channel is wrong — the signature of a systematic bias, not boundary noise.
- p_A on carbons is **bimodal on XA**: decile histogram has a second mode at p_A ∈ [0.8,0.9] holding 2.5–2.7% of events (vs 0.1% on RN). The leak is a distinct high-p_A sub-population, not a diffuse tail.
- ⁴He→A leaks look different: lower confidence (XA med 0.54, RN 0.60) and **18.5× cross-arm overlap enrichment** (751 events leak on both arms vs 41 expected under independence) → genuine image-level ambiguity. Carbon→A overlap enrichment is only 3.8–4.2×, and 92–94% of XA's carbon leaks are XA-only.

<!-- SOURCE-BODY-END -->
