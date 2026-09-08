Compute `activity-stale` days per active project. Today is `{today}`.

## Input
Active projects (name, vault/external paths, plan-stale):

{projects}

Per-project context (status, pause scope/reason, resume/review condition, source):

{project_context}

If a project's context is missing or says unknown, treat it as unknown — do not invent context.

## Scope
- Read top-level daily notes in `10_Daily/` only (vault-relative; ignore `Archives/`).
- Scan **newest-first**, starting from yesterday.
- Window: up to 14 days back. Rationale: covers daily (~1 d) and weekly (~7 d) rituals with headroom. Widen only if the user's rituals become longer-period.
- Stop per project only after verifying its newest completion; a weekly tick may need comparison with earlier notes.
- **Efficient retrieval:** read each daily note ONCE and classify all its `[x]` tasks against the full project list in a single pass; do not re-open the same note per project.

## Activity definition (narrow on purpose)
Count ONLY `- [x]` completed task lines in a daily note as activity.
- Do NOT count uncompleted `[ ]` or in-progress `[*]` tasks.
- Do NOT count project wikilink mentions in `## Log`, `## Evening Review`, or `## Related Projects` sections.
- Do NOT count external git commits.
- Repeated weekly `[x]` marks or unchanged `(n/N)` may be copies: verify a new completion against earlier notes (new tick, count increase, or distinct completed task); otherwise abstain for that date, never use prose mentions as proof.

## Classification (strict scope + umbrella projects)
For each `[x]` task found, judge whether its text specifically references the project's topic or named work.
- Count only if the task's subject matter clearly maps to the project (e.g., "Duolingo" → Japanese_Language; "GRE Physics" → Fundamental_Knowledge; "Momo vocabulary" → English_Learning).
- **Do NOT count generic maintenance**: exercise, evening review, `/wiki-review`, `/phrasing-refining`, and other tasks that touch no specific project.
- **Ambiguous cases: abstain** — don't pick a winner. If a task could plausibly belong to two projects and the text doesn't disambiguate, count it for neither.
- **Fundamental_Knowledge exception** (overrides the `/wiki-review` generic-maintenance exclusion above): DO count for Fundamental_Knowledge (a) any `[x]` under the `**a2. Fundamental Knowledge**` section header of a daily note (including subtasks); (b) `[x] /wiki-review` when the reviewed Wiki sits in a knowledge-learning cluster (Physics_Math, ComputerScience, Physiologics) — NOT SelfDevelopment/StudyMethodology. These also propagate to the Japan_Itinerary umbrella.

### Umbrella projects
Any `[x]` counting for a sub-project ALSO counts for its umbrella. Record on both (same date, excerpt); umbrella anchor = newest `[x]` across the sub-project set.

- **Japan_Itinerary** (UTokyo / RIKEN pathway) ← Japanese_Language, English_Learning, Fundamental_Knowledge

## Output format
Exactly one line per project from the input list, in the same order:

```
- {ProjectName}: activity-stale={N} via "{task-text-excerpt}" on {YYYY-MM-DD} — {context and source}
```

If no `[x]` match within the 14-day window:

```
- {ProjectName}: activity-stale=null (no verified completion within 14 days) — {context and source}
```

Briefly state pause scope/reason and source, whether completion evidence belongs to paused or unpaused work, and any due review; missing context is unknown, not proof of neglect.
A partial pause does not cover unrelated work; a due review does not automatically resume the project.

- `{N}` = days between today and the match date (0 = matched on a note dated today, 1 = yesterday, etc.).
- Keep `{task-text-excerpt}` under 60 characters; strip wikilinks/URLs/tags for brevity.
- Never treat a pause itself as activity, and never infer progress from context — report evidence and context only.
- No preamble, no trailing commentary. Only the per-project lines.
