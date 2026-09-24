<!-- Verbatim source section; overview: [[../fm-ar-prereg-scorecard]] -->
<!-- SOURCE-BODY-START -->
## 6. Scorer assessment — bugs, limitations, worth shipping?

**No scorer bug found.** Every verdict traced to correct clause logic. Three design limitations worth noting:

1. **`battery_match` ambiguity collapse.** With all 9 batteries passed, every battery row degrades to `pending` (match `["xa-raw"]` hits 3 files). Correct per spec (selectors pick *which* input), but the practical usage is one scorer invocation per battery set — documented in §1. A `--battery-match-override` CLI flag would remove the need for my driver; **small fix, worth shipping** if the scorecard will be re-run as more batteries land (~20 lines).
2. **`expect` gate is all-or-nothing per observed spec.** Off-lock batteries can't produce *any* clause verdicts through the stock CLI — my driver strips `expect` to get band-reads. A `--no-comparability-gate` flag (or per-run `expect: null` override) would make band-reads a first-class, scorer-produced artifact instead of a hand-read. **Worth shipping** — it is exactly the distinction this report had to draw manually, and yaml:59 already blesses selector retargeting.
3. **`zero_ch0` U-clause couples two checkpoints.** U's prediction requires the RN-Raw `zero_ch0` accuracy; no RN battery exists, so U stays pending/miss on that clause regardless. Not a bug — a genuinely missing input (named in §2b).

If firstmate promotes this task: the two CLI flags above plus a `prereg_scorecard.md` generator (table printer → markdown) would make this entire report a one-command artifact. Estimated <100 lines, torch-free, testable with the existing fixture batteries.

---

<!-- SOURCE-BODY-END -->
