approved

---

## Second-Round Review: build_imai_pptx.js (post-revision)

**Reviewer:** Skeptical reviewer (second round)
**Date:** 2026-04-12
**Inputs:** review_12.md (first review), 08b_revision_report.md (revision report), build_imai_pptx.js (revised script)

---

## Verification of First-Round Fixes

### 1. BLOCKER: Wrong isotope (99Se -> 79Se) -- VERIFIED FIXED

- **Line 386:** `\u2077\u2079Se(d,p)` -- Unicode superscript 7 (`\u2077`) + superscript 9 (`\u2079`) = 79Se. Correct.
- **Grepped for `\u2079\u2079Se` and `99Se`:** zero occurrences remain. The old encoding is fully eliminated.
- **Only one occurrence of `\u2077\u2079Se` exists** (line 386, SAKURA card on Slide 4), matching the revision report's claim.

### 2. HIGH: "Published" -> "Submitted" for NST paper -- VERIFIED FIXED

- **Line 244:** `"Submitted: NST-2025-0958"` with italic styling and muted gray color.
- **Grepped for `Published`:** zero occurrences in the entire script. No residual incorrect wording.
- **Only one occurrence of `Submitted`** (line 244, Slide 3 Card 1), matching the revision report's claim.

### 3. MEDIUM: CrossAtt+HC honest framing -- VERIFIED FIXED

- **Line 260:** Headline `95.80%` retained (the number is factually correct).
- **Line 262:** Added `"Comparable to baseline (95.77%, p=0.81)"` in 9.5pt muted gray italic -- clearly subordinate to the headline but visible.
- **Lines 263-264:** Body reframed to `"Adds interpretable physics features / without sacrificing accuracy"` -- positions CrossAtt+HC as delivering architectural value (interpretability) rather than implying accuracy superiority.
- The p-value 0.81 is correctly rounded from the source's 0.813. Acceptable.
- The TRK card (Card 3) continues to correctly highlight the statistically significant -16.1% MAE gain where CrossAtt genuinely outperforms. The contrast between Card 2 (interpretability story) and Card 3 (accuracy story) is now honest and defensible.

---

## Check for New Issues Introduced

### Syntax validity
- `node --check build_imai_pptx.js` passes with zero errors. Script is syntactically valid Node.js.

### Content integrity scan
- All previously verified facts from review_12.md remain unchanged:
  - 90-97% elastic/fusion, 95% across 5 fusion channels, -16.1% MAE, p < 10^-16, 3792 triangular pads, GEM readout, DG-M-THGEM 2.5x10^6 pps, 12C+12C commissioning at HIRFL-RIBLL -- all still present and correct.
- No new factual claims were added that require source verification.
- The Card 2 reframing introduces no new numbers beyond what was already in the source data (95.77% and p=0.81 are from EXP1 results).

### Layout/structural check
- Card 2 now has 6 text elements instead of the original 4. The card height (1.55") should accommodate this given the small font sizes (9.5-11pt), but it may be tight. Not a blocker -- visual overflow would be caught during build QA.
- No other slides were modified. Slides 1, 2, 4, and 5 are identical to the pre-revision script.

---

## Verdict

All three issues from review_12.md are confirmed fixed in the actual build script (not just claimed in the revision report). No new factual, syntactic, or structural issues detected. The presentation is ready for the meeting.
