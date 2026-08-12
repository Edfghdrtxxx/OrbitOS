# Lightweight Mode — Residual Day-Counter Transfer

**Load this file only when Mode Detection selected lightweight.** Do not run the full SKILL.md workflow (no Q1–Q4, no deadline/staleness agents, no priority delta, no Notes rewrite, no `/reflect`).

> **Identity:** `today = copy(last) + day-count delta only.`  
> Goal: open a usable daily note in seconds without shrinking content.

---

## When this mode is for

- Morning continuity when yesterday’s plan still holds
- Calendar gap days where re-planning is overkill
- Explicit user request: *short / lightweight / light / residual / copy-forward*

If the user later wants full planning, they re-invoke bare `/start-my-day` (full mode can read today’s existing note and apply full delta).

---

## Workflow

### 1. Resolve dates (silent)

1. **Today** = current date `YYYY-MM-DD`; weekday name; ISO week number.
2. **Last note** = most recent `10_Daily/YYYY-MM-DD.md` at top-level only (ignore `Archives/`). Prefer the chronologically latest date ≤ today that is not today.
3. **Gap days** = calendar days between last note and today (usually 1). All numeric day-count bumps use this gap (`g`), not hard-coded `1`.

If no previous note exists → **abort lightweight**; tell the user to run full `/start-my-day` (template path).

### 2. Identity copy

```bash
cp 10_Daily/<last-date>.md 10_Daily/<today>.md
```

- If `10_Daily/<today>.md` **already exists**: do **not** overwrite. Read it, report that today already exists, and stop (or offer full-mode delta only if the user asks).
- Copy is byte-for-byte first. **Never** reconstruct the note from memory.

### 3. Apply day-count delta only

Edit **only** the fields below. Touch nothing else (tasks, Anchor, Commitments, Main Focus prose, Stuck callout body, Appendix, Log/Evening Review bodies, `[x]` items — all stay).

| Target | Rule |
|--------|------|
| Frontmatter `date` | → today |
| Frontmatter `day` | → today’s weekday |
| Frontmatter `week` | → today’s ISO week |
| Title `# YYYY-MM-DD` | → today |
| Deadline markers `D-N` | → `D-(N − g)` (countdown; floor at 0 if needed) |
| Phrases `in N days` (remaining-time) | → `in (N − g) days` |
| `N days stale` / `N days stale via daily tasks` | → `N + g` |
| `N days plan-stale` | → `N + g` |

**Do not change** (unless they are pure instances of the rows above):

- Narrative “Monday / weekend gap / last log [[…]]” wording — leave as residual text (optional later pass only if user asks)
- GRE info callout calendar facts, fixed exam dates, costs
- `~8 days after window closes` style pattern descriptions (not live counters)
- Ranges like `(5–7d)` in prose commentary
- `energy`, priorities, Related Projects **text** beyond the stale/D-N numbers

Prefer a small scripted pass (Python/regex) over hand-editing many lines — reduces accidental drops.

### 4. Completeness sanity check (mandatory)

After edits, **diff last note vs today** (or equivalent line/task inventory):

| Check | Must hold |
|-------|-----------|
| Line count | equal (or today ≥ last if only digits grew) |
| Task inventory | same count of `- [ ]` / `- [*]` / `- [x]`; zero tasks only-in-last |
| Diff classification | every changed line is date/weekday/title **or** day-count numbers only |

If any open task (`[ ]` / `[*]`) from last is missing → **restore from last note immediately** and re-apply only the day-count delta.

Report a one-line pass/fail to the user (e.g. `Sanity: 52 tasks retained · 0 unexpected diffs`).

### 5. Present summary (short)

```
Lightweight start ready (day-counter transfer only).

Source: [[last-date]] → [[today]]  |  gap: g day(s)
Today's note: [[YYYY-MM-DD]]

> Full replan: /start-my-day   ·   Next: /breakdown-tasks → /estimate-time
```

**Skip:** AskUserQuestion rounds, Explore agents, Notes regeneration, `/daily-note-addition`, `/reflect`.

---

## Anti-patterns

- Inferring lightweight from low energy, “quick morning,” or weekend — **explicit keywords only** (gate is in SKILL.md)
- Running priority delta (`[x]` remove/reset) “while we’re here”
- Rebuilding Notes/Related Projects from agents
- Overwriting an existing today note
- Hard-coding `+1` when gap `g > 1` (multi-day skip must use `g`)

## Edge cases

| Case | Action |
|------|--------|
| No last note | Abort → full mode |
| Today already exists | Do not `cp`; report; stop unless user requests full delta |
| Multi-day gap (`g ≥ 2`) | Still lightweight if requested; apply `±g` to counters; mention gap in summary |
| User adds “also set energy / main focus” in same message | Apply those **named** field edits only; still skip Q1–Q4 agents unless they ask for full mode |
