<!-- Verbatim source section; overview: [[../fm-ar-results-audit]] -->
<!-- SOURCE-BODY-START -->
## 5. Prioritized corrections for the lead

1. **Confirm provenance of the label-fix `counterfactual_battery.json`** (buggy vs fixed script) before quoting any 4He battery number — the +9.2pp sign flip is the campaign's most quotable new finding and currently sits on a possibly-void artifact. Add a script-version/git-hash field to the battery JSON schema.
2. **Downgrade zero_cls language** in §9/§11 from "leans on physics"/"dependence is task-invariant" to the §8-style hedge everywhere until D5 (`permuted_cls`/`mean_cls` + predicted-class histogram) lands; note the s0-HC −15.6pp exception in §9.
3. **Fix the five small errors** (F5): run count 12→11, "500 correct"→"500 evaluated (442–483 correct)", s42-HC zero_cls sign, "monotonically", first-5 range.
4. **Sync or cite the backing artifacts** for the F4 clusters — especially label-fix `history.json` (the 0.9214 claim is currently unverifiable locally) and the full EXP4 sink output (the 444/512-token-50 stats are not in the synced JSON and use n=512 vs the synced n=500).
5. **State the denominator** in "8×/10× seed std" claims (RN-Raw std 0.19pp → 11.2×; XA-Raw n=2 std 0.32pp → 5.4×) and flag the XA-Raw deficit as n=2 wherever it headlines.

<!-- SOURCE-BODY-END -->
