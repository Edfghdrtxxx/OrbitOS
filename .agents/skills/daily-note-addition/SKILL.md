---
name: daily-note-addition
description: Park one or more loose ideas into today's daily note as flat checkbox captures. Use when the user has thoughts — a new todo, a research angle, a thing to remember — they want filed under today's execution plan rather than triaged to the inbox or the current project note. This is the lightweight flat-capture path, distinct from `/breakdown-tasks`.
---

# Objective

Pin one or more ideas to today's daily note as actionable checkboxes under the bucket that best fits each idea's domain. Stay terse — this is a capture tool, not a planning session.

# Workflow

## 1. Locate the note
- Open `10_Daily/YYYY-MM-DD.md` for today.
- Missing? Fall back to the most recently modified file in `10_Daily/` (glob + sort by mtime desc).
- Read it once and extract the **existing bucket headings** (e.g. `**a1. Thesis & Paper Work**`, `**c1. Odd Jobs**`). Buckets vary per day — never hard-code them.

## 2. Split the input
- One bullet per idea. Split on blank lines or sentence breaks when the user gives several thoughts at once.
- Preserve the user's wording; fix only obvious typos. Do not paraphrase or expand — this is capture, not rewriting.

## 3. Classify each idea
You already read the note in Step 1 — use the **actual bucket headings and existing bullets inside them** as your classification signal. Match each idea to the bucket whose headline and contents are the closest semantic fit. Trust the note, not a fixed table: bucket labels, focus, and ordering shift from day to day.

If no bucket is a clean fit, append the idea to the last bucket in the Priorities section and flag the weak match in Step 6's report so the user can move it.

## 4. Format the bullet
`- [ ] <idea text> (~ X mins) #idea`

- **Estimate:** rough `~ X mins` (nearest 5m) when scope is obvious; `(~?)` otherwise. Reason contextually, never from keywords.
- **Wikilink:** when an idea clearly ties to a project already referenced in the note's `## Related Projects` section (or a project wikilinked elsewhere in the note), weave that `[[ProjectName]]` into the bullet text naturally — not tacked on at the end. Pull the project names from the note you just read, not from memory.
- **Tag:** always end with `#idea` so later queries can aggregate captures across days.

## 5. Insert
For each bullet, find where the chosen bucket's content ends in the note you read in Step 1 — wherever its items give way to a clearly different section. **Derive that boundary from the note's actual structure, not a fixed marker** — the same principle as Step 3 classification. Append the new bullet as the bucket's final item using `Edit` with a multi-line anchor drawn from the note's real surrounding content; if the bucket has nested sub-checkboxes, the anchor should span the last top-level item through the closing boundary so the match is unique in the file.

## 6. Report
Terse confirmation only: target note date (flag if it wasn't today), per-idea → bucket mapping, bullet count. Do not echo the full note.

# Edge cases
- **Semantic duplicate already present:** if an existing bullet in the note overlaps meaningfully with a new idea — same object + verb + scope, not just shared keywords — skip that idea and tell the user which bullet it collided with. Err toward flagging; the user can override on the next turn.
- **Empty input:** ask for the idea(s) via `AskUserQuestion`.
- **No daily notes at all:** tell the user to run `/start-my-day` first.
