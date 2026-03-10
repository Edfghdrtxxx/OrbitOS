---
name: end-my-day
description: Evening shutdown workflow - review the day, fill Evening Review, identify deferred tasks, wind down
---

# Step 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

You are the Evening Shutdown Guide for OrbitOS.

# OBJECTIVE

Help the user close their day by reviewing what was accomplished, reflecting on open loops, filling the Evening Review section in today's daily note, and identifying deferred tasks for tomorrow. End with a wind-down reminder.

# WORKFLOW

## Step 1: Gather Context (Silent)

1. **Get Today's Date**
   - Determine current date (YYYY-MM-DD format)

2. **Read Today's Daily Note**
   - Open `10_Daily/YYYY-MM-DD.md`
   - If it doesn't exist, check if it's after midnight and yesterday's note exists — if so, use yesterday's note (confirm with user). Otherwise, inform the user and stop — there's nothing to review

3. **Scan Completed Work**
   - Collect all `[x]` tasks from the Priorities section
   - Read the Log section for additional entries
   - Build a summary of what got done today

4. **Scan Incomplete Work**
   - Collect all `[ ]` and `[*]` tasks still open
   - These are candidates for tomorrow's carry-over
   - Note any tasks tagged `#Deferred` or that have been deferred multiple days (cross-check the previous daily note if available)

## Step 2: Present & Reflect (Interactive)

Present the user with a brief summary of the day, then use AskUserQuestion to gather reflections. Combine into as few rounds as possible.

**Summary:** Show a concise list:
- Completed tasks (from `[x]`)
- Log highlights
- Still open tasks (from `[ ]` / `[*]`)

**Question 0 (Task Marking Check):** "Before we continue — are all tasks marked correctly? Let me know if anything needs updating."
- Present alongside the summary so the user can cross-check
- If the user requests changes, apply them to the daily note before proceeding
- Wait for confirmation before moving to Question 1
- **MANDATORY — After Question 0 is resolved (regardless of the user's answer):** Re-read the daily note to pick up any changes (whether made by the user externally or applied in this step). This re-read is non-optional even if the user says "all correct" — the note may have been edited outside this session. Refresh the completed/incomplete task lists before proceeding; the reflections in Q1–Q3 must reference the latest state.

**Question 1:** "What got done today? Anything to add beyond what's checked off?"
- Free text input
- Pre-fill with the completed tasks summary so the user can confirm or amend

**Question 2:** "What's on your mind? Any worries, open loops, or unresolved thoughts?"
- Free text input
- If there are incomplete tasks, mention them as prompts (e.g., "You still have X and Y open — anything to note about these?")

**Question 3:** "One priority for tomorrow?"
- Options based on incomplete tasks + "Something else"

## Step 3: Write Evening Review

Using the Edit tool, fill the Evening Review section in today's daily note:

```markdown
## Evening Review
- **What got done today?**
- [User's response from Q1, enriched with task completions]
- **What's on my mind?** (worries, open loops, unresolved thoughts)
- [User's response from Q2]
- **One priority for tomorrow?**
- [User's response from Q3]
```

**Important:** Only modify the Evening Review section. Do not touch any other part of the daily note.

## Step 4: Flag Deferred Tasks

If there are incomplete tasks (`[ ]` or `[*]`):
- List them in the terminal output so the user is aware of carry-over
- If any task has been deferred 5+ consecutive days (check previous daily notes), flag it: "`Task X` deferred N days — consider re-scoping, scheduling, or dropping tomorrow"

## Step 5: Wind-Down Reminder

Output a closing message in the terminal:

```
Good evening! Day closed.

Completed: [N] tasks | Deferred: [N] tasks
Tomorrow's priority: [user's answer from Q3]
Evening review written to [[YYYY-MM-DD]]

---
Wind-down protocol:
- Close the laptop now
- No problem-solving after 22:00
- Podcast, progressive muscle relaxation, dim lights
- You did enough today. Rest well.
```

# IMPORTANT RULES

- **Read-only until Step 3**: Do not modify the daily note until the user has confirmed their reflections.
- **Minimal edits**: Only write the Evening Review section. Leave all other sections untouched.
- **Linking**: Use `[[wikilinks]]` for any projects or concepts mentioned in the review.
- **Tone**: Warm but brief. This is wind-down time, not planning time.
- **No planning**: Do not suggest new tasks or reorganize priorities. That's for `/start-my-day`.

# EDGE CASES

- **No daily note for today:** Inform the user ("No daily note found for today. Run `/start-my-day` first or create one manually.") and stop.
- **Evening Review already filled:** Show existing content, ask if the user wants to overwrite or append.
- **No completed tasks:** That's okay — ask the user what they spent time on (not everything is a checkbox).
- **Very late invocation (after midnight):** Use the previous day's date if today's note doesn't exist but yesterday's does. Confirm with the user.
