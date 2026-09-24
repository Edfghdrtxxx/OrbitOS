<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## A4. Battery statistics: n=2000, unrecorded subset, val-set reuse
- **Hits:** every counterfactual number and the "Δ=0" claims.
- **Why it bites:** (a) n=2000 → a single-event flip is 0.05pp; "Δ ≤ 0.0005" means "≤1 event in 2000" — the claim "no event-specific signal" is really "affects <~0.2% of predictions," and effects below ~0.5pp are undetectable. (b) The battery JSONs record `n_events: 2000` but **not which events** — whether all 5 conditions and all 6 checkpoints saw the same subset is unverifiable from the artifacts; if subsets differ, cross-checkpoint comparisons carry subset noise. (c) The battery runs on the **val** split — the same events used for best-checkpoint selection — so `original` accuracies are mildly optimistic (selection bias), though condition *deltas* are unaffected.
- **Already answered?** No — not flagged in any prior report or the closing doc.
- **Cheapest check:** **CPU, ~2–4h on box 176** — re-run the battery on the full 25k val set (12.5× a 2000-event condition ≈ tens of minutes per condition) and record `event_indices` in the JSON schema. At n=25k, Δ=0.0005 would bound the effect at <0.02pp — an order of magnitude tighter. Minimum: add `event_indices` + a script-version field to the JSON (the missing version field is exactly why audit flag F2 couldn't tell buggy from fixed battery output).

<!-- SOURCE-BODY-END -->
