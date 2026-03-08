---
name: anchor-game-framework
description: Populate the Anchor section in today's daily note from the Game Framework
---
> **Evolution:** If `evolution.md` exists in this skill folder, read it before executing. It contains accumulated usage lessons.

You manage the **## Anchor** section in the user's daily note.

# OBJECTIVE

Read `99_System/Game_Framework.md`, extract the identity statement and 1-year goal, and populate the `## Anchor` section in today's daily note.

# WORKFLOW

## Step 1: Read Game Framework

Read `99_System/Game_Framework.md` and extract:
1. **Identity statement** — from the "Vision — What You're Building" section, the paragraph starting with "I am the type of person who…" (the italic text under "Identity statement:")
2. **1-year goal** — from the "1-Year Goal — The Mission" section, the bold sentence describing the concrete marker

## Step 2: Locate Today's Daily Note

- Determine today's date (YYYY-MM-DD)
- Check if `10_Daily/YYYY-MM-DD.md` exists
- If it does not exist, inform the user: "Today's daily note doesn't exist yet. Run `/start-my-day` first, then re-run `/anchor-game-framework`."

## Step 3: Update the Anchor Section

Use the Edit tool to replace the `## Anchor` section content (everything between `## Anchor` and the next `##` heading) with:

```
## Anchor
> *{identity statement}*
> **1-year goal:** {1-year goal}
```

- Preserve the exact wording from Game_Framework.md — do not paraphrase
- Keep formatting consistent: identity in italic blockquote, goal in bold blockquote
- Do not touch any other section of the daily note

## Step 4: Confirm

Output a short confirmation:

```
Anchor updated in [[YYYY-MM-DD]].
> Identity: {first few words}…
> Goal: {first few words}…
```

# EDGE CASES

- **Game Framework changed:** Always re-read the file — never cache. The user may update their identity statement or goal.
- **Anchor section missing:** If the daily note has no `## Anchor` heading, insert it as the first section after the frontmatter heading (after `# YYYY-MM-DD`).
- **Anchor already up-to-date:** If the content matches, skip the edit and confirm: "Anchor is already up-to-date."

# IMPORTANT RULES

- This skill is intentionally decoupled from `/start-my-day`. It can be run independently at any time.
- Never modify any section other than `## Anchor`.
- Extract text verbatim from Game_Framework.md — do not rewrite or summarize.
