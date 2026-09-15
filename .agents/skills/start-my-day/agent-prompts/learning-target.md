Analyze learner progress and syllabus state to determine today's specific learning targets and objects. Today is `{today}`.

## Input
- **Main Focus Project:** `{main_focus}` (e.g., `GRE_Physics_Prep`)
- **Canonical Syllabus:** `20_Project/GRE_Physics_Prep/01_Syllabus_&_Plan/8-Week-Syllabus.md` (authoritative schedule)
- **Topic Breakdown Files:** `20_Project/GRE_Physics_Prep/03_Topic_Sets/` (detailed Sets 01–35; each heading is `### Set NN: Title (n Qs)` with Studio pack id and honest `n`)
- **Formula Recall Decks:** `20_Project/GRE_Physics_Prep/02_Formulas_&_Recall/Formula-Recall-Decks.md` (numbered batches)
- **Error Log & Misses Registry:** `20_Project/GRE_Physics_Prep/04_Diagnostics_&_Errors/Misses-Log.md`
- **Last Daily Note:** `{last_daily_note}` (path to the preceding `10_Daily/YYYY-MM-DD.md`)
- **Prep Studio plan (derived mirror, not a source):** `/Users/Reid Hu/Physics GRE/js/data-plan.js` is generated from the syllabus

## Analysis Steps
1. **Identify Active Curriculum Window:**
   - Read `8-Week-Syllabus.md` (authoritative). `{today}` before 2026-09-14 is Week 0 (historical). From 2026-09-14 use the live table: W1 Sep 14–20, W2 Sep 21–27, W3 Sep 28–Oct 4, W4 Oct 5–11, W5 Oct 12–18, W6 Oct 19–25, W7 Oct 26–Nov 1.
   - Timed sets for that week are the IDs in that row, not a global 01→35 sequence. W1 default **03–07**; if Set 02 is still open on 2026-09-14, W1 is **02–06** and Set 07 is extras-only.
   - Hedged parent durations from Sep 14: timed **~100 min**, formula **~50 min**, extra **~50 min**. On week rollover, parent `#weekly` `~ mins` should match. Do not follow Prep Studio `js/data-plan.js` as a calendar (it is generated from this syllabus).
2. **Determine Previous Completion & Next Set:**
   - **Check 1 (Primary): Preceding Daily Note:** Look at the child task under the timed set `#weekly` row in `{last_daily_note}`.
     - If yesterday's child task was completed (`- [x] Set NN`), advance to the next set **in this week's syllabus list** (not NN+1 if that ID is not in the week).
     - If yesterday's child task was uncompleted (`- [ ] Set NN`), retain `Set NN` (do not advance prematurely).
   - **Check 2: Topic Sets Status:** Cross-check with `03_Topic_Sets/`. Skip `[x] Closed`. Among this week's timed IDs, take the first `[ ] Open`.
   - If no prior set was attempted this week, start with the first timed ID for that week in `8-Week-Syllabus.md` (W1: Set 03, or Set 02 if still open; W2: Set 08; W6: Set 26 then 27–29 only; W7 new: Set 32 then Set 33; W7 other weekday timed = replay latest miss-heavy set else Set 32; never 30/31/34/35 as new).
   - **Checkpoint Sundays (no timed_set_child):** `{today}` is 2026-10-04 or 2026-10-25 — output timed_set_child `null`; the diagnostic/rehearsal is the day's GRE sitting. **W7 Fri–Sun:** timed_set_child `null` (no new sets; no Friday replay).
3. **Determine Formula Recall Batch:**
   - Check the formula child task in `{last_daily_note}`.
   - If yesterday's batch was completed (`- [x]`), select the next batch from `02_Formulas_&_Recall/Formula-Recall-Decks.md` (e.g. CM Batch 1 → CM Batch 2).
   - If yesterday's batch was uncompleted, repeat that batch.
4. **Determine Weak-Topic & Error Rework:**
   - Check the third weekly row count in `{last_daily_note}` (e.g. `(n/2)`). If the row has reached `(2/2)`, output `null` (no extra child needed today).
   - Otherwise, check `04_Diagnostics_&_Errors/Misses-Log.md` for un-reworked misses. If found, assign rework for those specific items.
   - If no misses are logged: rework misses from the current problem set. Only if that is empty, leftover sets (Set 07 if carried; 30; 31/34/35) may fill the extra row.

## Output Format
Return exactly the following block:

```markdown
### Proposed Learning Targets for {main_focus}

- **timed_set_child:**
  - [ ] {Set ID}: {Topic & Subtopics} (pack {NN}, n={n}) · Prep Studio pack {NN}
  <!-- or `null` on 2026-10-04, 2026-10-25, and W7 Fri–Sun -->
- **formula_recall_child:**
  - [ ] {Topic} Batch {N}: {Key Formulas Focus} (20 formulas)
- **weak_topic_child:**
  - [ ] Rework {Topic} misses from {Set ID} / log root error patterns into [[Misses-Log]]  <!-- or null if count reached -->
- **rationale:** {One concise sentence explaining why this set and focus were selected based on syllabus schedule and previous progress}
```
