---
name: sleep-tracker
description: Extract and record daily sleep metrics from Huawei Health (HUAWEI TruSleep™) on iPhone via phone-harness into OrbitOS markdown logs.
---

# sleep-tracker

Extract and record daily sleep logs from Huawei Health via Mac iPhone Mirroring (`phone-harness`).

## Triggers

- `/sleep-tracker`
- "Extract my sleep data for last month / last 30 days"
- "Sync my sleep status into today's daily note"

## Usage

Ensure iPhone Mirroring is running with the Health app on the **Sleep > Day** tab.

```bash
# 1. Rolling last N days (default destination: 00_Inbox/sleep status log/):
python3 .agents/skills/sleep-tracker/scripts/extract_sleep.py --days 30

# 2. Specific calendar month:
python3 .agents/skills/sleep-tracker/scripts/extract_sleep.py --month 2026-10

# 3. Custom output destination:
python3 .agents/skills/sleep-tracker/scripts/extract_sleep.py --days 7 --out "00_Inbox/Sleep_Review_W40.md"
```

Before analysis, read items 5–6 of Section 4 in `00_Inbox/sleep status log/Sleep_Status_Log_2026-09.md`. They hold the living context and the active experiment (from 2026-10-01).

## Screen & Navigation Protocol

- **Dynamic bounds:** Bounds change when the window moves. Always re-query `screen_info()['window']`.
- **Calendar popup:** Triggered at `(win['x'] + 284, win['y'] + 105)`.
- **Date selection:**
  1. Primary: Dynamic OCR search for the day label within the popup card bounds (`win['y'] + 320` to `win['y'] + 560`).
  2. Fallback: Calibrated grid geometry:
     - `cols_x = [85, 116, 146, 177, 208, 238, 269]` (Sun..Sat, 31px pitch)
     - `rows_y = [382, 408, 435, 461, 487, 513]` (Weeks 1..6, 26px pitch)
     - `col = (d + offset - 1) % 7`, `row = (d + offset - 1) // 7`
- **Month switching:** `<` button in calendar header at `(win['x'] + 86, win['y'] + 335)`. The popup opens on the month of the date currently shown, so switch by the delta from the page header date.
- **Settle check:** Confirm the header date equals the target before reading; renavigate up to 3 times, else emit a `CHECK:` row. A missed tap silently shows the previous date's data.
- **Scroll reset:** The Day page keeps its scroll offset across dates. Scroll to top before reading; scroll down a little if stage rows are below the fold.

## TruSleep™ & OCR Invariants

- **Duration Ground Truth:** Header `Night sleep` value (subscripts render as decimals: `6.35 min` = 6 h 35 min). `Deep + Light + REM` must equal it; a mismatch is flagged `CHECK:` in Notes, never silently replaced.
- **Stage pairing:** Match each value to the `Deep/Light/REM sleep` label on the same row. Never assign by vertical order: the Sleep report carousel above the rows (`Sleep duration (7/14-7/20) … 25 min`) injects stray durations. The chart legend repeats the labels without values.
- **Disruption metrics:** `Times woke up` and `Deep sleep continuity` sit below the stage rows; value is the box just under each label. OCR reads a zero count as `O times`.
- **Sanity flags:** `CHECK:` when a stage is missing, REM > 40% of night sleep, or total ≠ night + naps. Re-read flagged dates before analysis.
- **Percentile:** Huawei says "Better than N% of other users"; write it that way, not "Top N%".
- **< 3h Nap Rule:** Huawei TruSleep™ classifies sleep episodes under 3 hours as Naps without calculating sleep scores or stage breakdown.
- **Normalization:**
  - Punctuation in times: `7-47 AM` → `7:47 AM`, `905AM` → `9:05 AM`.
  - Spacing before meridian: `12:15AM` → `12:15 AM`.
  - Label misreads: `Ded time` → `Bed time`, `Wake up` / `Woke up`.

