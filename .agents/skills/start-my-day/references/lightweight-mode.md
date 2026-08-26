# Lightweight Mode — Residual Day-Counter + Item Transfer

**Load this file only when Mode Detection selected lightweight.** Do not run the full SKILL.md workflow (no Q1–Q4, no deadline/staleness agents, no Notes rewrite, no `/reflect`).

> **Identity:** `today = copy(last) + day-count delta + item delta.`  
> Goal: open a usable daily note in seconds. Carry the plan forward; clear finished one-offs; reset `#daily` loops.

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

- If `10_Daily/<today>.md` **already exists**: do **not** overwrite. If the user asked only for item delta, skip to §3b. Otherwise report that today already exists and stop (or offer full-mode delta only if they ask).
- Copy is byte-for-byte first. **Never** reconstruct the note from memory.

### 3. Apply day-count delta

Edit the fields below. Then apply §3b. Do not touch Anchor, Commitments, Main Focus/Notes/Stuck prose beyond weekday tokens, Appendix, Log/Evening Review bodies, or `energy`.

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
| Weekday tokens in residual prose (`Sunday`, `Monday`, …) | → today’s weekday |
| `weekend <Weekday>` when today is Mon–Fri | drop `weekend `; keep the remapped weekday |

**Do not change** (unless they are pure instances of the rows above):

- Last-log `[[YYYY-MM-DD]]` / gap narrative beyond the weekday token
- GRE info callout calendar facts, fixed exam dates, costs
- `~8 days after window closes` style pattern descriptions (not live counters)
- Ranges like `(5–7d)` in prose commentary
- `energy`, Main Focus / Related Projects **text** beyond stale/D-N numbers and weekday tokens

Prefer a small scripted pass (Python/regex) over hand-editing many lines — reduces accidental drops.

### 3b. Apply item delta (Priorities only)

Same keep/remove/reset table as full-mode Step 3. **Skip the `(new from Q1)` add row.** Scope: `## Priorities` only (not Appendix).

| Task state | Condition | Action |
|---|---|---|
| `[ ]` | — | Keep as-is |
| `[*]` | — | Keep as-is |
| `[x]` | No `#daily` tag | Remove (parent and its `[x]` children) |
| `[x]` | Has `#daily` tag | Reset to `[ ]` |
| `[ ]`/`[x]` | Has `#weekly` tag | Keep as-is; do not reset or remove |

Source of truth for which `[x]` to process is **the last note**, not today's later checkmarks. If today already exists and a `#daily` item was `[ ]`/`[*]` on last but `[x]` on today, leave it `[x]` — that is today's progress.

Do not re-add a removed `[x]` (no `#daily`) as a fresh `[ ]`. Missing `#daily` means one-off.

### 4. Completeness sanity check (mandatory)

After edits, **diff last note vs today** (or equivalent line/task inventory):

| Check | Must hold |
|-------|-----------|
| Open tasks | every `- [ ]` / `- [*]` from last is still present |
| Removed | only last-note `[x]` with no `#daily` (and their `[x]` children) |
| Reset | last-note `[x]` `#daily` are `[ ]` on today (unless `#weekly`) |
| Diff classification | date/weekday/title, day-count numbers, weekday-token swaps, or item-delta checkbox/removal only |

If any open task (`[ ]` / `[*]`) from last is missing → **restore from last note immediately** and re-apply day-count + item delta.

Report a one-line pass/fail to the user (e.g. `Sanity: 48 open retained · 4 one-offs removed · 4 dailies reset`).

### 5. Present summary (short)

```
Lightweight start ready (day-counter + item delta).

Source: [[last-date]] → [[today]]  |  gap: g day(s)
Today's note: [[YYYY-MM-DD]]

> Full replan: /start-my-day   ·   Next: /breakdown-tasks → /estimate-time
```

**Skip:** AskUserQuestion rounds, Explore agents, Notes regeneration, `/daily-note-addition`, `/reflect`.

---

## Anti-patterns

- Inferring lightweight from low energy, “quick morning,” or weekend — **explicit keywords only** (gate is in SKILL.md)
- Skipping item delta (leaving yesterday’s `[x]` frozen on today)
- Q1 adds, Notes rewrite, Log/Evening clear, or agents “while we’re here”
- Overwriting an existing today note
- Hard-coding `+1` when gap `g > 1` (multi-day skip must use `g`)
- Resetting a `#daily` `[x]` that was still open on last — that is today’s progress, not leftover yesterday

## Edge cases

| Case | Action |
|------|--------|
| No last note | Abort → full mode |
| Today already exists | Do not `cp`. If the user asks only for item delta, apply §3b against last-note `[x]` and stop. Otherwise report and stop unless they request full-mode delta |
| Multi-day gap (`g ≥ 2`) | Still lightweight if requested; apply `±g` to counters; mention gap in summary |
| User adds “also set energy / main focus” in same message | Apply those **named** field edits only; still skip Q1–Q4 agents unless they ask for full mode |
