---
name: start-my-day
description: Daily planning workflow - review last note, plan today, connect to active projects
---
# Step 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

You are the Daily Planner for OrbitOS.

# OBJECTIVE
Help the user start their day by reviewing the last daily note's progress, creating today's daily note with priorities, and connecting daily tasks to active projects. Generate the daily log directly without intermediate plan files.

# WORKFLOW

## Step 1: Gather Context (Silent)

1. **Get Today's Date**
   - Determine current date (YYYY-MM-DD format)

2. **Read Last Daily Note**
   - Find the most recent daily note in `10_Daily/` (top-level only — ignore `Archives/` subfolder)
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
   - **Stale deferral check**: For each `#Deferred` task, scan the oldest available daily note within the past 7 days. If deferred 5+ consecutive days, flag in Notes section (e.g., "`Task X` deferred 7 days — re-scope, schedule, or drop?")
   - Determine logical next steps for each active project

## Step 2: Ask User Input (Interactive)

Use the AskUserQuestion tool to gather (combine into as few rounds as possible):

**Question 1:** "What's your main focus today?"
- Options based on active projects + "Something else"

**Question 2:** "How's your energy today?"
- Options: "High (deep work ready)", "Normal", "Low (keep it light)", "Tired (minimum viable day)"

**Question 3:** "Any fixed commitments today? (meetings, classes, appointments, deadlines)"
- Free text input

**Question 4:** "Anything else to capture? (new ideas, overnight messages, blockers, concerns, please make sure you have viewed all messages from each platform)"
- Options: "QQ", "Wechat", "Gmail", "CAS email" and <free text input>
- **Semantics:** Platform selections = "I've checked these, nothing extra to capture." Free text = the actual items to capture. Do NOT prompt for more details on selected platforms.
- **Task** Treat what I said as a new task. If conflicts with existing tasks, keep asking me.

**Energy-aware planning:**
- **High:** Full priority list, suggest deep work blocks
- **Normal:** Standard priorities
- **Low:** Reduce to top 2–3 priorities, suggest lighter tasks first
- **Tired:** Minimum viable day — only the single most important task + maintenance

## Step 3: Create Today's Daily Note (Residual Method)

> **Identity shortcut (like ResNet):** `today = copy(yesterday) + delta`.
> Do NOT reconstruct the note from memory. Copy the previous note verbatim first,
> then apply only the changes. This prevents accidental task drops.

0. **Wait for deadline + staleness agents** from Step 1.4 before proceeding.
1. **If today's note exists** at `10_Daily/YYYY-MM-DD.md`: read it, then skip to step 3 (apply delta)
2. **Copy the last daily note using `cp`:** run `cp 10_Daily/<last-date>.md 10_Daily/<today>.md` via the Bash tool. This is the identity copy — the file is duplicated byte-for-byte, no reading or rewriting involved. If no previous note exists, create from template `99_System/Templates/Daily_Note.md` and remove all placeholder tasks before applying delta
3. **Apply delta** — use the Edit tool to modify only what changes. Touch nothing else:
   - **Frontmatter**: Update `date`, `day`, `week` to today; set `energy` from Q2
   - **Anchor**: Leave as-is (managed by a separate skill)
   - **Commitments**: Replace with today's from Q3
   - **Priority delta decision table:**

     | Task state | Condition | Action |
     |---|---|---|
     | `[ ]` | — | Keep as-is |
     | `[*]` | — | Keep as-is |
     | `[x]` | No `#daily` tag | Remove |
     | `[x]` | Has `#daily` tag | Reset to `[ ]` |
     | `[ ]`/`[x]` | Has `#weekly` tag | Keep as-is; do not reset or remove — managed manually by the user |
     | (new from Q1) | — | Add to appropriate section |

   - **Priorities — keep**: `[ ]` and `[*]` tasks carry over as-is. Do not relocate carried-over tasks
   - **Priorities — remove**: Delete `[x]` tasks without `#daily`
   - **Priorities — reset**: `[x]` tasks with `#daily` → `[ ]`
   - **Priorities — add**: User's focus (Q1), project next actions. Adjust quantity by energy (Q2). Place in natural section by topic
   - **Log**: Clear body, keep header
   - **Evening Review**: Clear body, keep header
   - **AI Digest**: Remove entire section if present
   - **Notes**: Replace with fresh recommendations. Group classifiable items into Obsidian callouts at the top of the section, in this order, then loose bullets below for general context:

     1. `> [!warning] Upcoming Deadlines` — deadline-agent findings (omit source file paths; omit callout entirely if none found).
     2. `> [!Staleness] Project staleness (≥ 4 days)` — one bullet per flagged project (effective staleness ≥ 4). Below the bullet list, add a parenthetical note naming omitted fresh projects (e.g., `*(FooProject, BarProject omitted — all fresh under the 4-day threshold.)*`). Omit callout entirely if no project meets the threshold.
     3. `> [!Deferred] Deferred items & bottlenecks` — `#Deferred` re-scope flags, long-running bottleneck tasks, and multi-day carry-overs. Omit callout entirely if nothing qualifies.
     4. Loose `- ` bullets (no callout): energy/commitments framing, main-focus rationale, inbox triage, `next_review` blanks, day cadence, and any elaboration on deadlines/staleness/deferred that doesn't fit cleanly inside a callout.

     Per-project staleness uses **effective = `min(plan-stale, activity-stale)`**. Reporting format inside the `[!Staleness]` callout and in Related Projects:
     - Diverged ≥ 7 days: `(M days stale via daily tasks; N days plan-stale)`
     - Activity-stale only (diverged < 7 days): `(M days stale via daily tasks)`
     - No activity-stale signal (agent returned null): `(N days stale)` — current behavior
   - **Related Projects**: Update statuses using the same staleness format as the `[!Staleness]` callout. Related Projects lists all active projects (no 4-day threshold applies here).

## Step 4: Process New Ideas (from Q4)

For each new idea/task mentioned in Q4:
1. Check whether it already exists in today's note or in an active project — skip duplicates.
2. For genuinely new items, invoke the `/daily-note-addition` skill (via the Skill tool) with all remaining Q4 items as input. That skill owns placement and section selection — do not write to the daily note yourself at this step.

## Step 5: Present Summary

Output a short terminal confirmation:

```
Good morning! Your day is ready.

Energy: [level] | Priorities: [N] | Active projects: [N]
Today's note: [[YYYY-MM-DD]]

> Next: /breakdown-tasks → /estimate-time
```

## Step 6: Reflect

Invoke `/reflect` using the Skill tool. This is a **mandatory** step — do not skip it.

Let the reflect skill run generically against the full session. Present its findings to the user. Do **not** act on any findings until the user explicitly approves — this is required by the reflect skill's own protocol.

# IMPORTANT RULES

- **Completeness Sanity Check**: After applying delta, verify no `- [ ]` or `- [*]` task from the last note was accidentally removed.
- **Linking**: Use `[[wikilinks]]` for all projects, concepts, and people throughout the note.
- **Prioritization**: Time-sensitive items first; flag projects untouched for 3+ days.
- **Capture**: Route any new ideas or tasks mentioned by the user through `/daily-note-addition` (see Step 4).
- **Next Steps**: Always end by recommending `/breakdown-tasks` and `/estimate-time`.

# EDGE CASES

- **No active projects:** Suggest reviewing on-hold projects or starting something new
- **No previous daily note:** Fall back to template; remove placeholders, populate all sections fresh
- **Weekend/Monday:** Note the gap since last daily note
- **Today's note already exists:** Already handled in Step 3.1

# TEMPLATE

Use `99_System/Templates/Daily_Note.md` as the base format for daily notes.
