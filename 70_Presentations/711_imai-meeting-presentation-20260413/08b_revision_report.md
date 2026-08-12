# Revision Report: imai_meeting_20260413.pptx

**Date:** 2026-04-12
**Triggered by:** review_12.md findings

## Changes Made

### 1. BLOCKER FIXED — Wrong isotope (Slide 4, SAKURA card)

**Before:** `\u2079\u2079Se(d,p)` rendered as 99Se(d,p)
**After:** `\u2077\u2079Se(d,p)` renders as 79Se(d,p)

Imai-sensei's flagship reaction from PLB 2024 is 79Se(d,p), not 99Se. The Unicode superscripts were `\u2079\u2079` (superscript 9 + superscript 9); corrected to `\u2077\u2079` (superscript 7 + superscript 9). Only one occurrence in the build script (line 385).

### 2. BLOCKER FIXED — Wrong publication status (Slide 3, Card 1)

**Before:** "Published: NST-2025-0958"
**After:** "Submitted: NST-2025-0958"

The NST paper was submitted in November 2025 and has not been accepted or published. Only one occurrence (line 244).

### 3. WARNING ADDRESSED — Misleading CrossAtt+HC headline (Slide 3, Card 2)

**Before:**
- "95.80%" headline
- "Physics-informed attention on / Bragg peak spatial features"
- No mention of baseline comparison

**After:**
- "95.80%" headline retained (number is correct)
- Added explicit context line: "Comparable to baseline (95.77%, p=0.81)" in muted italic
- Reframed body text: "Adds interpretable physics features / without sacrificing accuracy"

This frames CrossAtt+HC as delivering architectural benefits (interpretability, physics-informed features) at no accuracy cost, rather than implying it outperforms the baseline. The TRK card (Card 3) already correctly highlights the -16.1% MAE reduction where CrossAtt shows a statistically significant gain.

## Build Output

Rebuilt with `node build_imai_pptx.js`. Output: `D:/Something/research/MATE-Automation-V4/presentations/imai_meeting_20260413.pptx` (8.1 MB, 5 slides).
