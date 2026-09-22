---
name: end-my-day
description: Evening shutdown workflow - review the day, fill Evening Review, identify deferred tasks, wind down
---

# Step 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

You are the Evening Shutdown Guide for OrbitOS.

# OBJECTIVE

Help the user close their day by reviewing what was accomplished, reflecting on open loops, filling the Evening Review section in today's daily note, identifying deferred tasks for tomorrow, and committing and pushing OrbitOS changes. End with a wind-down reminder.

# WORKFLOW

## Step 1: Gather Context (Silent)

1. **Get Today's Date**
   - Determine current date (YYYY-MM-DD format)

2. **Read Today's Daily Note**
   - Open `10_Daily/YYYY-MM-DD.md`
   - If it doesn't exist, check if it's after midnight and yesterday's note exists — if so, use yesterday's note (confirm with user). Otherwise, inform the user and stop — there's nothing to review

3. **Scan Completed Work (Daily Note)**
   - Collect all `[x]` tasks from the Priorities section
   - Read the Log section for additional entries

4. **Scan Incomplete Work (Daily Note)**
   - Collect all `[ ]` and `[*]` tasks still open
   - These are candidates for tomorrow's carry-over
   - Note any tasks tagged `#Deferred` or that have been deferred multiple days (cross-check the previous daily note if available)

5. **Scan Git Activity (Multi-Repo)**

   Scan git activity across ALL tracked repositories:

   | Repo | Path | Project Link |
   |------|------|--------------|
   | OrbitOS (vault) | vault root (git root / CWD; Mac: `/Users/Reid Hu/OrbitOS`) | — |
   | MATE-Automation | `/Users/Reid Hu/MATE-Automation` (skip if missing) | [[MATE-Automation]] |
   | Physics GRE | `/Users/Reid Hu/Physics GRE` (skip if missing) | [[GRE_Physics_Prep]] |

   For EACH repo:
   - Run `git -C <repo-path> log --since="YYYY-MM-DD 00:00" --until="<UNTIL>" --oneline --all` to list today's commits. `<UNTIL>` is `YYYY-MM-DD 23:59` on a same-calendar close, or *now* when closing yesterday after midnight (after-midnight commits belong to the day being closed).
   - Run `git -C <repo-path> diff --stat HEAD~N..HEAD` (where N = number of today's commits) to get a file-level change summary — skip if no commits today
   - Also scan the **working tree**: `git -C <repo-path> status -sb` and, if dirty, `git -C <repo-path> diff --stat` plus `git -C <repo-path> diff --stat --cached`. Uncommitted/untracked work counts as today's activity even with zero commits.
   - If the repo path doesn't exist or isn't a git repo, note it silently and skip (don't error out)

   Then across ALL repos combined:
   - Parse commit messages **and** dirty-tree paths for: topics worked on, files changed, rough scope of work
   - Cross-reference git activity with daily note tasks — match commits/diffs to tasks where possible (e.g., a commit mentioning "thesis" or MATE maps to thesis-related tasks)
   - Identify any git work that has NO corresponding task in the daily note (these are "unlisted accomplishments" to surface to the user **and** write back after confirmation — see Step 2b write-back)

### Step 1.6 — Scan Physics GRE Study Activity
- Read `http://127.0.0.1:4789/pgre-status` or the durable fallback `/Users/leyi/.orbitos/pgre-status.json`; never POST or modify studio state
- Accept only a valid snapshot for the day being closed; otherwise record `studio status unavailable` and continue
- Collect streak, minutes studied vs daily target, questions answered/correct, today's session/pack and exam results, formula cards reviewed/due, mistakes added, and recent log lines
- Treat confirmed study activity with no matching daily-note task as an unlisted accomplishment for Step 2b

**The goal of Step 1 is to build a rich, auto-generated picture of the day from three sources (daily note + git + Physics GRE studio) so Step 2 only needs lightweight confirmation from the user.**

## Step 2: Present & Reflect (Interactive — Lightweight)

The hard work is done in Step 1. Step 2 presents the auto-generated summary and asks the user to confirm or supplement — NOT to reconstruct the day from scratch.

### 2a. Present the Day Summary

Output a structured summary to the terminal combining all three sources:

```
📋 Today's Summary (auto-generated)

From daily note:
  ✅ [completed task 1]
  ✅ [completed task 2]
  ⬜ [open task 1]
  ⬜ [open task 2]

From git:
  OrbitOS (N commits):
    • [commit summary 1] — [files changed]
    • [commit summary 2] — [files changed]
  MATE-Automation-V4 (N commits):
    • [commit summary 1] — [files changed]
  [If unlisted work found]: ⚡ Not in daily note: [description]

From Physics GRE studio:
  Streak: [current] days (best: [best])
  Study: [minutesStudied] / [dailyTargetMin] min
  Questions: [correct] / [answered] correct
  Sessions/exams: [today's pack/session and exam results, or none]
  Formula cards: [reviewed] reviewed / [due] due
  Mistakes added: [count]
  Recent: [recent log lines]
  [If no valid snapshot]: studio status unavailable

Log highlights: [any entries from the Log section]
```

### 2b. Confirmation Round (Single AskUserQuestion Call)

Show the Step 2a summary in the user-visible message first; do not ask until that summary is on screen.

Use ONE AskUserQuestion call with up to 4 questions:

**Question 1 (Task Check):** "Here's what I gathered. Are all tasks gathered correctly, and is anything missing?"
- Options: "Looks good, and capture unlisted work" / "Need to update tasks" / Other
- If updates needed: apply changes, re-read daily note, refresh lists before proceeding
- **Unlisted activity write-back (mandatory when ⚡ items exist):** after Q1 is resolved, create concise `[x]` bullets under Priorities (prefer `**c1. Odd Jobs**` or a short `**Captured activity**` block above it) for each confirmed unlisted git or Physics GRE studio cluster — skills, repo feature work, finished study packs, etc. Group by theme; no invented time estimates; use `[[wikilinks]]` for projects. Skip clusters the user explicitly rejects.

**Question 2 (Reflections):** "Anything on your mind? Worries, open loops, or thoughts to capture?"
- Free text
- Mention incomplete tasks as prompts (e.g., "You still have X and Y open — anything to note?")

**Question 3 (Tomorrow):** "One priority for tomorrow?"
- Options based on incomplete tasks + "Something else"
- Ask independently — do not default Q3 from session framing (e.g. a stated "primary concern")

**MANDATORY:** After Question 1 is resolved, re-read the daily note to pick up any external edits before writing the Evening Review. This is non-optional even if the user says "Looks good."

## Step 3: Write Evening Review

Using the Edit tool, fill the Evening Review section in today's daily note:

```markdown
## Evening Review
- **What got done today?**
- [Merge auto-generated summary (completed tasks + git activity + confirmed Physics GRE study activity) with any additions from the user's confirmation. Use wikilinks for projects. Keep it concise — bullet points, not paragraphs.]
- **What's on my mind?** (worries, open loops, unresolved thoughts)
- [User's response from Q2]
- **One priority for tomorrow?**
- [User's response from Q3]
```

**Important:** Only modify the Evening Review section. Do not touch any other part of the daily note.

## Step 3.5: Archive Sweep

After the Evening Review is written, execute `/archive` directly (primary agent, not a subagent). Follow the archive skill's full interactive workflow — present findings, let the user choose what to archive, etc.

Once `/archive` completes, execute `/reflect` to self-audit the full session (end-my-day + archive). If the reflect surfaces critical issues, present them to the user before proceeding.

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
OrbitOS pushed to remote: [commit hash]

---
Wind-down protocol:
- Close the laptop now
- No problem-solving after 22:00
- Podcast, progressive muscle relaxation, dim lights
- You did enough today. Rest well.
```

## Step 6: Commit and Push OrbitOS

Stage, commit, and push all vault changes in OrbitOS (`/Users/Reid Hu/OrbitOS`):
1. Run `git -C "/Users/Reid Hu/OrbitOS" status -sb` to review pending changes.
2. Stage modified and untracked vault files (`git add .` or specific paths, ignoring temporary scratch files).
3. Commit with a standard message: `git commit -m "chore(daily): close YYYY-MM-DD"`.
4. Push to remote: `git push origin <branch>`.
5. Confirm successful commit and push in the terminal output.

# IMPORTANT RULES

- **Read-only until Q1 resolves**: Do not modify the daily note until the user has confirmed the task check (Q1). After Q1: allowed writes are (1) task checkbox / counter fixes the user requested, (2) unlisted-git `[x]` capture bullets, (3) Evening Review in Step 3. Nothing else.
- **Minimal edits**: Outside those three write classes, leave all other sections untouched.
- **Linking**: Use `[[wikilinks]]` for any projects or concepts mentioned in the review.
- **Tone**: Warm but brief. This is wind-down time, not planning time.
- **No planning**: Do not suggest new tasks or reorganize priorities. That's for `/start-my-day`.

# EDGE CASES

- **No daily note for today:** Inform the user ("No daily note found for today. Run `/start-my-day` first or create one manually.") and stop.
- **Evening Review already filled:** Show existing content, ask if the user wants to overwrite or append.
- **No completed tasks:** That's okay — ask the user what they spent time on (not everything is a checkbox).
- **Very late invocation (after midnight):** Use the previous day's date if today's note doesn't exist but yesterday's does. Confirm with the user.
