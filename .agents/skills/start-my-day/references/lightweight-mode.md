# Lightweight Mode — Week-Slice Generation, Questions Skipped

**Load this file only when Mode Detection selected lightweight.** Lightweight = the full workflow's weekday generation with Q2–Q4 skipped. No AskUserQuestion, no deadline/staleness agents, no `/daily-note-addition`, no `/reflect`.

**Never runs on a plan day.** Before generating, read `week_plan` from the most recent daily note. If today − `week_plan` ≥ 7 days OR the key is missing → this is a plan day: tell the user ("Today is a plan day — running full /start-my-day") and run the full SKILL.md workflow instead.

---

## Workflow

### 1. Resolve dates (silent)

1. **Today** = current date `YYYY-MM-DD`; weekday name; ISO week number.
2. **Last note** = most recent `10_Daily/YYYY-MM-DD.md` at top-level only (ignore `Archives/`).
3. Read from it: the `week_plan` key, every `#weekly` row with its `(n/N)`, every `#daily` habit, every `#spare-time` row, and the `> [!info] Week plan` callout.

If no previous note exists → **abort lightweight**; tell the user to run full `/start-my-day` (template path).

### 2. Plan-day gate

Apply the check above. If today is a plan day, lightweight stops here — say so and run full mode.

### 3. Generate today's note (weekday generation, Q2–Q4 skipped)

Build today's note from the most recent daily note, carrying ONLY:

- **Frontmatter**: `date`, `day`, `week` updated to today; `energy` = the previous note's value (no question asked); `week_plan` copied forward unchanged.
- **`#weekly` rows**: with their current `(n/N)` unchanged. Never reset, never re-derive, never remove.
- **`#daily` habits**: reset to `[ ]`.
- **`#spare-time` rows**: carried as-is.
- **`## Notes` — the `> [!info] Week plan <start>–<end>` callout**: carried verbatim. Notes carries ONLY this callout in lightweight mode — no deadlines, staleness, or pace callouts.

Everything else is regenerated fresh, never copied:

- **Anchor**: regenerated from `99_System/Game_Framework.md` — the italic identity statement (Vision section) plus the bold "Updated goal" sentence of the 1-Year Goal.
- **Commitments**, **Log**, **Evening Review**: empty bodies.
- **Related Projects**: active projects from `20_Project/`, no staleness agents.
- Untagged `[ ]` one-offs from the source note are NOT carried.

**Skip:** AskUserQuestion rounds, Explore agents, `/daily-note-addition`, `/reflect`.

### 4. Completeness sanity check (mandatory)

| Check | Must hold |
|-------|-----------|
| Weekly rows | every `#weekly` row from the source note is present with unchanged `(n/N)` |
| Daily habits | every `#daily` habit is `[ ]` on today |
| Spare-time | every `#spare-time` row carried as-is |
| One-offs | no untagged `[ ]` line was carried |
| Week plan callout | present and verbatim in `## Notes` |

If any `#weekly` row is missing or its `(n/N)` changed → restore from the source note immediately.

### 5. Present summary (short)

```
Lightweight start ready (week-slice generation, questions skipped).

Week: <week_plan> → next plan day <date> | Rows: <k> weekly / <m> daily
Today's note: [[YYYY-MM-DD]]

> Full replan: /start-my-day   ·   Next: /breakdown-tasks → /estimate-time
```

---

## Anti-patterns

- Inferring lightweight from low energy, "quick morning," or weekend — **explicit keywords only** (gate is in SKILL.md)
- Running lightweight on a plan day — plan day always runs full
- Resetting or re-deriving a `(n/N)` count — a morning run must never touch `#weekly` counts
- Carrying untagged `[ ]` one-offs, review prose, or Log/Evening Review bodies
- Adding agents, questions, or Notes callouts "while we're here"
- Overwriting an existing today note

## Edge cases

| Case | Action |
|------|--------|
| No last note | Abort → full mode |
| Today already exists | Do not overwrite; report and stop unless they request full mode |
| Plan day detected | Say so, run full workflow |
| Gap ≥ 2 days | Generate normally from the latest note — no back-fill; mention the gap only if it affects pace |
