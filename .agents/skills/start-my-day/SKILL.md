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

4. **Investigate Deadlines (Explore Agent)**

   Launch an Explore agent (`subagent_type: Explore`) **in background** to scan for all time-sensitive items within 60 days of today. The agent runs concurrently with the remaining Step 1 work.

   **Agent prompt template** (fill in `{today}` and `{cutoff}` = today + 60 days):

   > Search the OrbitOS vault at D:/obsidian/OrbitOS for deadlines and time-sensitive items. Today is `{today}`.
   >
   > **Scope** (search these, nothing else):
   > - `20_Project/` — all files recursively
   > - `90_Plans/` — all files recursively
   > - `30_Research/` — frontmatter `due:` / `next_review:` fields only
   > - `00_Inbox/` — frontmatter `due:` fields only
   >
   > **What to look for:**
   > - Frontmatter fields: `due`, `next_review`, `target_intake`, or any date-valued key that implies a deadline
   > - Markdown tables with date columns (especially in `Official_Deadlines.md` and execution plans)
   > - Dated checkbox pattern: `- [ ] YYYY-MM-DD:` (action items with date triggers)
   > - Inline dates near keywords: deadline, due, by, before, until, window, registration, application, exam, submit, target
   > - Phase/milestone boundaries in section headings (e.g., "Phase 0: NOW → 2026-04-30")
   >
   > **Filter:** Only include items whose date falls between `{today}` and `{cutoff}` (60-day window). Exclude past dates unless they are overdue unchecked tasks (`- [ ]` with a date before today).
   >
   > **Output format — return a markdown list, one item per line:**
   > ```
   > - **[D-{days}]** {what} — {date} ({source file}) {confidence}
   > ```
   > - `D-{days}`: days remaining (negative = overdue, e.g., `D+3` means 3 days overdue)
   > - `{confidence}`: one of `VERIFIED`, `Estimated`, `Unverified` — look for these markers in the source; default to `Unverified` if not marked
   > - Sort by date ascending (most urgent first)
   > - If nothing is found, return "No deadlines within 60 days."

   **Usage:** The agent's output is consumed silently in Step 3 — do not show it to the user during Step 2. Incorporate findings into the Notes section of the daily note.

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
     | (new from Q1/Q4) | — | Add to appropriate section |

   - **Priorities — keep**: `[ ]` and `[*]` tasks carry over as-is. Do not relocate carried-over tasks
   - **Priorities — remove**: Delete `[x]` tasks without `#daily`
   - **Priorities — reset**: `[x]` tasks with `#daily` → `[ ]`
   - **Priorities — add**: User's focus (Q1), project next actions. Adjust quantity by energy (Q2). Place in natural section by topic
   - **Log**: Clear body, keep header
   - **Evening Review**: Clear body, keep header
   - **AI Digest**: Remove entire section if present
   - **Notes**: Replace with fresh recommendations. **Deadline integration:** prepend the Explore agent's deadline findings as a `> [!warning] Upcoming Deadlines` callout before other notes. Each deadline item is one line: `> - **[D-{days}]** {what} — {date} ({confidence})`. Omit the source file path — keep it concise. If the agent returned "No deadlines within 60 days", omit the callout entirely.
   - **Related Projects**: Update statuses

## Step 4: Process New Ideas (from Q4)

For each new idea/task mentioned in Q4:
1. Check if it exists in projects or inbox
2. If new, create `00_Inbox/[Brief-Title].md`:
   ```yaml
   ---
   created: YYYY-MM-DD
   status: pending
   source: start-my-day
   ---
   [User's description]
   ```

## Step 5: Present Summary

Output a short terminal confirmation:

```
Good morning! Your day is ready.

Energy: [level] | Priorities: [N] | Active projects: [N] | Inbox: [N] pending
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
