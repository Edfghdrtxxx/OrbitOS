---
name: start-my-day
description: >
  Daily planning workflow — builds today's note with week-slice generation (weekly rows, daily
  habits, and spare-time rows carried from the most recent note; everything else regenerated fresh)
  and detects plan day (`week_plan` 7+ days old or missing) to draft the next week's (n/N) targets.
  Optional lightweight mode (same generation, questions skipped) only when the user explicitly says
  short, lightweight, light, residual, or copy-forward; bare /start-my-day is always full.
---
# Step 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

You are the Daily Planner for OrbitOS.

# Mode Detection (progressive disclosure)

**Default = full.** Bare `/start-my-day` and any invocation **without** an explicit lightweight keyword run the full workflow below (Steps 1–6). **Never** offer or auto-switch to lightweight. **Never** treat low energy, "quick," weekend, or "just transfer" as lightweight unless a keyword is present.

**Lightweight (opt-in only):** If the user explicitly uses any of:

- `short` / `short mode`
- `lightweight` / `light` / `light mode`
- `residual` / `residual only` / `copy-forward` / `day-counter only`

…or clearly equivalent phrasing that names this mode — **stop reading the full workflow**, read and follow **only** [`references/lightweight-mode.md`](references/lightweight-mode.md), then exit. Do not run Steps 1–6, agents, Q2–Q4, or `/reflect`. Lightweight never runs on a plan day — if plan day is detected, say so and run the full workflow instead.

Examples that **do** trigger lightweight: `/start-my-day short`, `/start-my-day lightweight`, "start my day in light mode", "lightweight residual transfer from yesterday".

Examples that **do not**: `/start-my-day`, "start my day, energy low", "quick morning plan", "copy yesterday's tasks" without a mode keyword → **full**.

# OBJECTIVE

Help the user start their day by generating today's daily note from the most recent one (week-slice method), keeping the week's plan on track, and connecting daily tasks to active projects. On plan day, draft the next week's plan with the user. Generate the daily log directly without intermediate plan files.

# WORKFLOW (full mode)

## Step 1: Gather Context (Silent)

1. **Get Today's Date**
   - Determine current date (YYYY-MM-DD format)

2. **Read Last Daily Note**
   - Find the most recent daily note in `10_Daily/` (top-level only — ignore `Archives/` subfolder)
   - Extract the week-slice state:
     - The `week_plan` key from frontmatter (if present)
     - Every `#weekly` row with its current `(n/N)` counts
     - Every `#daily` habit and `#spare-time` row
   - Scan: what was worked on, which tasks are complete vs. pending, overall progress

3. **Find Active Projects**
   - Search `20_Project/` for notes with `status: active`
   - For each active project, note:
     - Current phase and status
     - Pending tasks in Actions section
     - **plan-stale** = days since any file under the project was last modified. Cheap, computed inline.
       - Single-file project (`20_Project/Foo.md`): `git log -1 --format="%ai" -- <path>`.
       - Folder-note project (`20_Project/Foo/Foo.md`): use **folder-wide** max mtime — `git log -1 --format="%ai" -- 20_Project/Foo/` — so sibling-file edits count. Avoids under-reporting for folder-notes like `Japan_Itinerary/`, `MaterThesisPapers/`, `Claude in LISE++/`.
     - Any due dates or time-sensitive items

4. **Investigate Deadlines & Activity-Staleness** — Launch two Explore agents **in parallel in the background** (single message, two tool uses):
   - **Deadline agent** using `agent-prompts/deadline.md` (fill `{today}`, `{cutoff}` = +60 days).
   - **Staleness agent** using `agent-prompts/staleness.md` (fill `{today}` and `{projects}` with the active-project list from Step 1.3, one per line: `- <ProjectName> (path: <external-path-if-any>)`).
   Both outputs consumed silently in Step 3 Notes. Wait for both before drafting the daily note.

5. **Analyze & Prioritize**
   - Identify time-sensitive items (deadlines, events)
   - Merge plan-stale (Step 1.3) with activity-stale (Step 1.4 staleness agent). **Effective staleness = `min(plan-stale, activity-stale)`**; if activity-stale is null, fall back to plan-stale.
   - Flag projects with effective staleness **≥ 4 days** in the Notes section. Projects with effective staleness `< 4` are omitted from the Notes project-stale bullet list (they're fresh — no need to flag). Related Projects still lists all active projects regardless of threshold.
   - **Plan-day detection**: Plan day fires when today − `week_plan` ≥ 7 days OR the `week_plan` key is missing from the most recent note. Sunday is preferred, but any day works.
   - **Mid-week pace check** (only when today is NOT a plan day): for each `#weekly` row, compute remaining = N − n and days-left = days until `week_plan` + 7. Flag rows where remaining > days-left. This is report-only — it surfaces in the `[!Pace]` callout (Step 3); N changes only on plan day.
   - Determine logical next steps for each active project

## Step 2: Ask User Input (Interactive)

Use the AskUserQuestion tool to gather (combine into as few rounds as possible):

**Question 2:** "How's your energy today?"
- Options: "High (deep work ready)", "Normal", "Low (keep it light)", "Tired (minimum viable day)"

**Question 3:** "Any fixed commitments today? (meetings, classes, appointments, deadlines)"
- Free text input

**Question 4:** "Anything else to capture? (new ideas, overnight messages, blockers, concerns, please make sure you have viewed all messages from each platform)"
- Options: "QQ", "Wechat", "Gmail", "CAS email" and <free text input>
- **Semantics:** Platform selections = "I've checked these, nothing extra to capture." Free text = the actual items to capture. Do NOT prompt for more details on selected platforms.
- **Task** Treat what I said as a new task. If conflicts with existing tasks, keep asking me.

**Plan-day questions (plan day ONLY — skip entirely on weekdays):**

- **Plan Q1:** Show last week's `#weekly` rows with their counts (`n/N`) and ask the user to correct the counts from memory — one reply, no per-row interrogation.
- **Plan Q2:** Present the proposed next week's N per row with its gap line (Step 3.4) and ask the user to accept or adjust — one reply.

**Energy-aware planning:**
- **High / Normal:** rows shown as planned.
- **Low / Tired:** the same rows — **never remove rows for energy** — plus one line in `## Notes` naming the single row to protect today (e.g. "Protect the GRE set today; everything else is optional").

## Step 3: Create Today's Daily Note (Week-Slice Method)

0. **Wait for deadline + staleness agents** from Step 1.4 before proceeding.
1. **If today's note exists** at `10_Daily/YYYY-MM-DD.md`: read it, confirm it with the user, and stop — never regenerate over an existing note.
2. **Heading contract** — every daily note keeps exactly these H2s, in this order: `## Anchor`, `## Commitments`, `## Priorities`, `## Log`, `## Evening Review`, `## Notes`, `## Related Projects`.

3. **Weekday generation** (the normal case): build today's note from the most recent daily note, carrying ONLY:
   - **Frontmatter**: `date`, `day`, `week` updated to today; `energy` from Q2; `week_plan` copied forward unchanged.
   - **`#weekly` rows**: with their current `(n/N)` unchanged. Never reset, never re-derive, never remove.
   - **`#daily` habits**: reset to `[ ]`.
   - **`#spare-time` rows**: carried as-is (optional, never counted).
   - **`## Notes` — the `> [!info] Week plan <start>–<end>` callout**: carried verbatim.

   Everything else is **regenerated fresh, never copied from yesterday**:
   - **Anchor**: regenerated each morning from `99_System/Game_Framework.md` — the italic identity statement (Vision section) plus the bold "Updated goal" sentence of the 1-Year Goal. Never copied from yesterday.
   - **Commitments**: today's, from Q3.
   - **New one-offs** from Q4 route through `/daily-note-addition` (Step 4). Untagged `[ ]` one-offs from the source note are NOT carried.
   - **Log** and **Evening Review**: empty bodies (end-my-day writes only `## Evening Review`).
   - **Notes**: group classifiable items into Obsidian callouts at the top of the section, in this order, then loose bullets below:
     0. `> [!info] Week plan <start>–<end>` — carried from the source note; lists each weekly row plus its gap line.
     1. `> [!warning] Upcoming Deadlines` — deadline-agent findings (omit source file paths; omit callout entirely if none found).
     2. `> [!Staleness] Project staleness (≥ 4 days)` — one bullet per flagged project (effective staleness ≥ 4). Below the bullet list, add a parenthetical note naming omitted fresh projects (e.g., `*(FooProject, BarProject omitted — all fresh under the 4-day threshold.)*`). Omit callout entirely if no project meets the threshold.
     3. `> [!Pace] Behind-pace rows` — one line per row flagged by the mid-week pace check, format `GRE 1/5 — 4 in 3 days`. Report only; N changes only on plan day. Omit callout entirely if nothing is behind pace.
     4. Loose `- ` bullets (no callout): energy/commitments framing, the Low/Tired protect hint, inbox triage, day cadence, and any elaboration that doesn't fit cleanly inside a callout.

   Per-project staleness uses **effective = `min(plan-stale, activity-stale)`**. Reporting format inside the `[!Staleness]` callout and in Related Projects:
   - Diverged ≥ 7 days: `(M days stale via daily tasks; N days plan-stale)`
   - Activity-stale only (diverged < 7 days): `(M days stale via daily tasks)`
   - No activity-stale signal (agent returned null): `(N days stale)` — current behavior
   - **Related Projects**: Update statuses using the same staleness format. Related Projects lists all active projects (no 4-day threshold applies here).

4. **Plan day** (when Step 1.5 detected one):
   1. Show last week's `#weekly` rows with their counts; the user corrects them from memory in one reply (Plan Q1).
   2. Propose next week's N per row from observed pace (the confirmed n), deadlines (`[[UTokyo_RIKEN]]`, `[[GRE_Physics_Prep]]`, `[[TOEFL_Listen_Repeat]]`), and `[[Game_Framework]]` (including its `## Working Pattern` section if present).
   3. Every row gets one gap line: `<N>/wk → ~<projected total> by <deadline>; plan needs <required total>`. Projected total = confirmed total done so far + N × (full weeks remaining between this plan day and the deadline, rounded down). Required total = the target stated in the linked project note (e.g. [[GRE_Physics_Prep]] Phase 1 total sets) — omit the `plan needs` clause if the project note states none. A row with no deadline gets `<N>/wk, no deadline`.
   4. The user accepts or adjusts in one reply (Plan Q2).
   5. Write today's note with the new rows (`- [ ] <task text> (0/N) #weekly`), `week_plan: <today>`, and a fresh `> [!info] Week plan <start>–<end>` callout in `## Notes` listing the rows + gap lines. `#daily` and `#spare-time` rows carry over as in weekday generation.

## Step 4: Process New Ideas (from Q4)

For each new idea/task mentioned in Q4:
1. Check whether it already exists in today's note or in an active project — skip duplicates.
2. For genuinely new items, invoke the `/daily-note-addition` skill (via the Skill tool) with all remaining Q4 items as input. That skill owns placement and section selection — do not write to the daily note yourself at this step.

## Step 5: Present Summary

Output a short terminal confirmation:

```
Good morning! Your day is ready.

Energy: [level] | Priorities: [N] | Active projects: [N]
Week: <week_plan> → next plan day <date> | Rows: <k> weekly / <m> daily
Today's note: [[YYYY-MM-DD]]

> Next: /breakdown-tasks → /estimate-time
```

## Step 6: Reflect

Invoke `/reflect` using the Skill tool. This is a **mandatory** step — do not skip it.

Let the reflect skill run generically against the full session. Present its findings to the user. Do **not** act on any findings until the user explicitly approves — this is required by the reflect skill's own protocol.

# FALLING OFF

Missing days is normal, not failure. Four fail-safe rules:

- **Missed days cost nothing.** Generate today from the latest note. No back-fill, no "you missed N days" guilt lines.
- **A missed Sunday just delays plan day.** The plan fires the next time a note is generated once today − `week_plan` ≥ 7 days.
- **Under-reported counts shrink N.** If the user reports fewer done than planned, next week's N is smaller. That is the fail-safe working, not a failure.
- **Never stack catch-up.** A missed week's deficit is not added to the new plan. Each plan day starts from observed pace, not from debt.

# IMPORTANT RULES

- **Completeness Sanity Check**: after generating, verify every `#weekly` row from the source note is present with unchanged `(n/N)`, and that no untagged `[ ]` line was carried.
- **Linking**: Use `[[wikilinks]]` for all projects, concepts, and people throughout the note.
- **Tag semantics**: `#daily` resets to `[ ]` every morning; `#weekly` carries `(n/N)` and is touched only on plan day; `#spare-time` is optional and never counted; `#Deferred` is still recognised if the user writes it, but start-my-day no longer generates it.
- **Prioritization**: Time-sensitive items first; flag projects with effective staleness ≥ 4 days (see Step 1.5).
- **Capture**: Route any new ideas or tasks mentioned by the user through `/daily-note-addition` (see Step 4).
- **Next Steps**: Always end by recommending `/breakdown-tasks` and `/estimate-time` (estimate-time appends `(~ N mins)` and skips `#Deferred`/`#spare-time` rows).

# EDGE CASES

- **No active projects:** Suggest reviewing on-hold projects or starting something new
- **No previous daily note:** Fall back to template; remove placeholders, populate all sections fresh, set `week_plan: <today>` (today is plan day)
- **Gap ≥ 2 days since the last note:** Generate normally from the latest note — no back-fill; mention the gap only if it affects pace
- **No `week_plan` key in the most recent note:** Today is plan day
- **Today's note already exists:** Already handled in Step 3.1

# TEMPLATE

Use `99_System/Templates/Daily_Note.md` as the base format for daily notes.
