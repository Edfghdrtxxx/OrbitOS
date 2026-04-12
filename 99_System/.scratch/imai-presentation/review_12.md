needs-revision

---

## Critical Findings

### 1. WRONG ISOTOPE: 99Se instead of 79Se (Slide 4, line 385 of build script)

**File:** `D:\Something\research\MATE-Automation-V4\presentations\build_imai_pptx.js`, line 385

The Unicode encoding `\u2079\u2079Se(d,p)` renders as **99Se(d,p)**, but the correct isotope is **79Se(d,p)**. The source material (`02_physics_background.md`, `03_results_mate.md`) consistently says "79Se(d,p) surrogate for 79Se(n,gamma), Imai first author, PLB 2024."

Getting Imai-sensei's own flagship reaction isotope wrong is maximally embarrassing. The correct encoding would be `\u2077\u2079Se(d,p)` (superscript 7 + superscript 9).

**Severity:** BLOCKER. Must fix before the meeting.

---

### 2. "Published" claim is premature (Slide 3, line 244)

**File:** `build_imai_pptx.js`, line 244

The script renders `"Published: NST-2025-0958"`. However, the source (`03_results_mate.md`) states: "Submitted Nov 2025" to Nuclear Science and Techniques. There is no evidence the paper has been accepted or published.

Calling an unpublished paper "Published" in front of a professor is a credibility risk. Use "Submitted" or "Under review" instead.

**Severity:** HIGH. Fix wording.

---

### 3. CrossAtt+HC 95.80% headline is misleading without context (Slide 3)

**File:** `build_imai_pptx.js`, lines 258-265

The second stat card presents "CrossAtt + HitChannel / 95.80%" as a headline result. However, per the source data (`06_figures_outputs.md`, EXP1 section):

- Legacy ResNet@100k: 95.772%
- EXP1 CrossAtt@100k: 95.796%
- Architecture effect: +0.024 pp, **p = 0.813 (NOT significant)**

The 95.80% number is correct, but without any note that the baseline achieves 95.77%, it implies CrossAtt+HC is substantially better. If Imai asks "how does this compare to a simpler model?", the honest answer ("identical within noise") contradicts the visual prominence of the card.

**Recommendation:** Either add a sub-line like "vs 95.77% baseline (architecture gain not significant; data scaling is the lever)" or reframe the card around the 3He/4He controlled experiment aspect rather than implying superiority. At minimum, the presenter must be prepared to explain this verbally.

**Severity:** MEDIUM. Not factually wrong, but misleading. Embarrassing only if the professor probes.

---

### 4. Conflicting build reports create confusion

Two build reports exist:
- `08_pptx_implementation.md` — describes JS/PptxGenJS build, 8 images, 7.7 MB
- `08_build_report.md` — describes Python/python-pptx build, 4 images, 3.0 MB, different figure selection

These describe **different presentations**. The JS script is the one that actually exists in the presentations directory. The Python build report appears to be from an earlier attempt. This is not a presentation error per se, but risks confusion if the presenter looks at the wrong report for talking points.

**Severity:** LOW. Housekeeping issue.

---

## Verified (No Issues)

| Claim | Source Value | Status |
|-------|-------------|--------|
| 90-97% elastic/fusion | 90.47% exp, 97.89% sim (ResNet-50) | Correct |
| ~95% across 5 fusion channels | 95.83% (ResNet-18 best) | Correct |
| 95.80% CrossAtt+HC accuracy | 95.796% rounds to 95.80% | Correct (number only) |
| -16.1% MAE improvement | (0.9922-0.8324)/0.9922 = 16.1% | Correct |
| MAE 0.992 -> 0.832 deg | TRK3-v2: 0.9922, TRK4-v2: 0.8324 | Correct |
| p < 10^-16 | Source: "p < 1e-16" | Correct |
| 3792 triangular pads | Source confirms 48x80=3792 | Correct |
| GEM readout (not Micromegas) | Source explicitly states GEM | Correct |
| DG-M-THGEM stable to 2.5x10^6 pps | Source: Iwamoto, Ota, Imai, PTEP 2023 | Correct |
| 12C+12C commissioning at HIRFL-RIBLL | Source confirms | Correct |

---

## Presentation Quality Assessment

- **Text density:** Slides 1 and 2 are dense but acceptable for a 1-on-1 meeting (not a conference talk). The bullet+sub-text hierarchy keeps it scannable. Slide 5 is well-balanced.
- **Narrative flow:** Matches the approved arc (physics question -> challenge -> results -> DONUTS connection -> outlook). Logical and well-structured.
- **Build script validity:** Syntactically correct JavaScript. Uses PptxGenJS API correctly. All figure paths verified to exist on disk.
- **Figure selection:** Appropriate and correctly referenced. The v6_confusion_matrix_grid and cross_task_honest_comparison are good choices for Slide 3.
- **Missing from outline:** The outline mentions "sub-cm" vertex reconstruction as a talking point. The script does not include vertex results on any slide. This is acceptable -- the outline mentions it as optional context, and 5 slides is tight.

---

## Summary

Two items must be fixed before the meeting:
1. **79Se, not 99Se** (Unicode typo: `\u2079\u2079` -> `\u2077\u2079`)
2. **"Submitted" not "Published"** for NST-2025-0958

One item should be addressed (verbally at minimum):
3. The 95.80% CrossAtt+HC number needs honest context about the baseline comparison
