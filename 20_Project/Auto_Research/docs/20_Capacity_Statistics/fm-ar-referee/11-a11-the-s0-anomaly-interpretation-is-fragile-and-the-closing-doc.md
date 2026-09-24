<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## A11. The s0-anomaly interpretation is fragile — and the closing doc's "does not replicate" is wrong
- **Hits:** C9 (XA-Raw-s0 `zero_both 0.772 > zero_cls 0.41`) and the two-pathway-interaction story.
- **Why it bites:** the anomaly is n=1 checkpoint by definition; the capacity-critique's covariance-break explanation is plausible but untested. **New finding this report:** closing doc §10 NOTE says "the s0 anomaly does not replicate [on 4He]" — but the corrected 4He battery has `zero_both 0.5235 > zero_cls 0.1935` (+33pp), i.e. the anomaly's *signature* (zero_both ≫ zero_cls) **does** replicate, more strongly than on triton s0 (+36pp vs +33pp gap). The doc compared absolute values (0.5235 vs 0.772), not the ordering that defines the anomaly. A referee reading the JSONs catches this.
- **Already answered?** No — the misstatement is in the closing doc itself.
- **Cheapest check:** **CPU, ~1h on box 176** — `zero_both`/`zero_cls` on the remaining checkpoints is already in hand (6/6 done); what is missing is the *decomposition*: run `zero_q`-only vs `zero_cls`-only vs `zero_both` with predicted-class histograms (D5 chain covers the histogram part) to test whether zero_both lands at majority-baseline (covariance-break) or at a third class pattern. Also: XA-Raw-seed1 checkpoint (missing) would give a second triton-Raw anomaly test — needs GPU (~5.5h) only if the campaign keeps triton reporting.

<!-- SOURCE-BODY-END -->
