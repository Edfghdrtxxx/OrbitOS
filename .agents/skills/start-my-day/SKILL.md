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
     - Last update date (to identify stale projects 3+ days)
     - Any due dates or time-sensitive items

4. **Investigate Deadlines** — Launch Explore agent **in background** using `agent-prompts/deadline.md` (fill `{today}`, `{cutoff}` = +60 days). Output consumed silently in Step 3 Notes.

5. **Check Inbox**
   - List files in `00_Inbox/` with `status: pending`
   - Count items waiting to be processed

6. **Analyze & Prioritize**
   - Identify time-sensitive items (deadlines, events)
   - Re-read the last daily note as a premise, to find projects not touched in 3+ days (stale)
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

0. **Wait for deadline agent** from Step 1.4 before proceeding.
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
     | (new from Q1/Q4) | — | Add to appropriate section |

   - **Priorities — keep**: `[ ]` and `[*]` tasks carry over as-is. Do not relocate carried-over tasks
   - **Priorities — remove**: Delete `[x]` tasks without `#daily`
   - **Priorities — reset**: `[x]` tasks with `#daily` → `[ ]`
   - **Priorities — add**: User's focus (Q1), project next actions. Adjust quantity by energy (Q2). Place in natural section by topic
   - **Log**: Clear body, keep header
   - **Evening Review**: Clear body, keep header
   - **AI Digest**: Remove entire section if present
   - **Notes**: Replace with fresh recommendations. Prepend deadline agent findings as `> [!warning] Upcoming Deadlines` callout (omit source file paths; omit callout if none found).
   - **Related Projects**: Update statuses

## Step 4: Process New Ideas (from Q4)

For each new idea/task mentioned in Q4:
1. Check if it exists in projects or inbox
2. If new, create `00_Inbox/[Brief-Title].md` using the template at `99_System/Templates/Inbox_Template.md`. Set `source: start-my-day` and fill in all applicable fields.

## Step 4.5: Inbox Backfill (Auto-Create)

Two-pass inbox backfill: **Pass A** mirrors today's active tasks so every
item has a triage record; **Pass B** acts as a dropped-task safety net,
catching items that were in yesterday's note but vanished from today's —
so accidental drops are never silently lost.

1. **Dispatch a writable sub-agent** — use the Agent tool with the default
   `general-purpose` subagent type (NOT `Explore`, which is read-only). Pass
   `agent-prompts/inbox-backfill.md` with these placeholders filled in:
   - `{today}` — today's date in `YYYY-MM-DD`
   - `{daily_note_path}` — `10_Daily/<today>.md`
   - `{previous_daily_note_path}` — path to the most recent daily note
     *before* today (the same one used as the `cp` source in Step 3.2).
     Pass empty string if no previous note exists.

   Foreground dispatch — must run *after* Step 4 so Q4 captures are visible
   to the matcher and don't get duplicated.
2. The sub-agent owns the full workflow: it scans both notes + inbox +
   archives, matches with hard-skip-on-ambiguity dedup, and writes the new
   inbox files via its own Write tool. You do NOT parse spec blocks or write
   files yourself at this step.
3. **Parse the sub-agent's final report**:
   - `NO BACKFILL NEEDED` → set `{backfilled_count} = 0`, skip to Step 5.
   - Otherwise, sum the Pass A + Pass B creation counts into
     `{backfilled_count}`. If the report lists dropped-task items (Pass B)
     or collisions, surface those filenames inline in the Step 5 output so
     the user knows — especially Pass B, since those flag possible
     accidental drops worth reviewing.
4. Trust the sub-agent's report — do not re-verify or re-write. It is
   authoritative for Step 4.5.

## Step 5: Present Summary

Output a short terminal confirmation:

```
Good morning! Your day is ready.

Energy: [level] | Priorities: [N] | Active projects: [N] | Inbox: [N] pending (+[M] backfilled)
Today's note: [[YYYY-MM-DD]]

> Next: /breakdown-tasks → /estimate-time
```

Drop the `(+[M] backfilled)` suffix when `M == 0`.

## Step 6: Reflect

Invoke `/reflect` using the Skill tool. This is a **mandatory** step — do not skip it.

Let the reflect skill run generically against the full session. Present its findings to the user. Do **not** act on any findings until the user explicitly approves — this is required by the reflect skill's own protocol.

# IMPORTANT RULES

- **Completeness Sanity Check**: After applying delta, verify no `- [ ]` or `- [*]` task from the last note was accidentally removed.
- **Linking**: Use `[[wikilinks]]` for all projects, concepts, and people throughout the note.
- **Prioritization**: Time-sensitive items first; flag projects untouched for 3+ days.
- **Capture**: Immediately create Inbox notes for any new ideas or tasks mentioned by the user.
- **Next Steps**: Always end by recommending `/breakdown-tasks` and `/estimate-time`.

# EDGE CASES

- **No active projects:** Suggest processing inbox or starting something new
- **No previous daily note:** Fall back to template; remove placeholders, populate all sections fresh
- **Weekend/Monday:** Note the gap since last daily note
- **Empty inbox:** Focus on project execution
- **Today's note already exists:** Already handled in Step 3.1

# TEMPLATE

Use `99_System/Templates/Daily_Note.md` as the base format for daily notes.
