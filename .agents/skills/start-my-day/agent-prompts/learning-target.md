Analyze learner progress and syllabus state to determine today's specific learning targets and objects. Today is `{today}`.

## Input
- **Main Focus Project:** `{main_focus}` (e.g., `GRE_Physics_Prep`)
- **Canonical Syllabus:** `20_Project/GRE_Physics_Prep/01_Syllabus_&_Plan/8-Week-Syllabus.md` (authoritative schedule)
- **Topic Breakdown Files:** `20_Project/GRE_Physics_Prep/03_Topic_Sets/` (detailed Sets 01–35)
- **Formula Recall Decks:** `20_Project/GRE_Physics_Prep/02_Formulas_&_Recall/Formula-Recall-Decks.md` (numbered batches)
- **Error Log & Misses Registry:** `20_Project/GRE_Physics_Prep/04_Diagnostics_&_Errors/Misses-Log.md`
- **Last Daily Note:** `{last_daily_note}` (path to the preceding `10_Daily/YYYY-MM-DD.md`)
- **External Prep Studio Plan (Reference Pool only):** `/Users/Reid Hu/Physics GRE/js/data-plan.js`

## Analysis Steps
1. **Identify Active Curriculum Window:**
   - Read `8-Week-Syllabus.md` to find the active week based on `{today}` (e.g. Week 0: Sep 7–13 CM lead-in, Week 1: Sep 14–20 CM wrap, etc.).
   - Identify the target topic domain (e.g. Classical Mechanics, 20% ETS weight).
2. **Determine Previous Completion & Next Set:**
   - **Check 1 (Primary): Preceding Daily Note:** Look at the child task under the timed set `#weekly` row in `{last_daily_note}`.
     - If yesterday's child task was completed (`- [x] Set NN`), advance to the next set in sequence (`Set NN+1`).
     - If yesterday's child task was uncompleted (`- [ ] Set NN`), retain `Set NN` (do not advance prematurely).
   - **Check 2: Topic Sets Status:** Cross-check with `03_Topic_Sets/` (e.g. `01_Classical_Mechanics.md`). If sets are marked `[x] Closed`, resume from the first `[ ] Open` set for that week's topic.
   - If no prior set was attempted, start with the first set assigned for that week in `8-Week-Syllabus.md` (e.g. Week 0 starts with Set 01; Week 1 starts with Set 06).
3. **Determine Formula Recall Batch:**
   - Check the formula child task in `{last_daily_note}`.
   - If yesterday's batch was completed (`- [x]`), select the next batch from `02_Formulas_&_Recall/Formula-Recall-Decks.md` (e.g. CM Batch 1 → CM Batch 2).
   - If yesterday's batch was uncompleted, repeat that batch.
4. **Determine Weak-Topic & Error Rework:**
   - Check the third weekly row count in `{last_daily_note}` (e.g. `(n/2)`). If the row has reached `(2/2)`, output `null` (no extra child needed today).
   - Otherwise, check `04_Diagnostics_&_Errors/Misses-Log.md` for un-reworked misses. If found, assign rework for those specific items.
   - If no misses are logged yet, assign rework of misses from the current problem set.

## Output Format
Return exactly the following block:

```markdown
### Proposed Learning Targets for {main_focus}

- **timed_set_child:**
  - [ ] {Set ID}: {Topic & Subtopics} (Q1–25) · {Source}
- **formula_recall_child:**
  - [ ] {Topic} Batch {N}: {Key Formulas Focus} (20 formulas)
- **weak_topic_child:**
  - [ ] Rework {Topic} misses from {Set ID} / log root error patterns into [[Misses-Log]]  <!-- or null if count reached -->
- **rationale:** {One concise sentence explaining why this set and focus were selected based on syllabus schedule and previous progress}
```
