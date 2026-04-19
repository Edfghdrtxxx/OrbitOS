Compute `activity-stale` days per active project. Today is `{today}`.

## Input
Active project list (name + external codebase `path:` frontmatter if present):

{projects}

## Scope
- Read top-level daily notes in `D:/obsidian/OrbitOS/10_Daily/` only (ignore `Archives/`).
- Scan **newest-first**, starting from yesterday.
- Window: up to 14 days back. Rationale: covers daily (~1 d) and weekly (~7 d) rituals with headroom. Widen only if the user's rituals become longer-period.
- **Short-circuit per project:** stop scanning for a given project once its first `[x]` match is found (newest-first → first hit is the most recent).
- **Efficient retrieval:** read each daily note ONCE and classify all its `[x]` tasks against the full project list in a single pass; do not re-open the same note per project.

## Activity definition (narrow on purpose)
Count ONLY `- [x]` completed task lines in a daily note as activity.
- Do NOT count uncompleted `[ ]` or in-progress `[*]` tasks.
- Do NOT count project wikilink mentions in `## Log`, `## Evening Review`, or `## Related Projects` sections.
- Do NOT count external git commits.

## Classification (strict scope)
For each `[x]` task found, judge whether its text specifically references the project's topic or named work.
- Count only if the task's subject matter clearly maps to the project (e.g., "Duolingo" → Japanese_Language; "GRE Physics" → Fundamental_Knowledge; "Momo vocabulary" → English_Learning).
- **Do NOT count generic maintenance**: exercise, evening review, `/wiki-review`, `/phrasing-refining`, and other tasks that touch no specific project.
- **Ambiguous cases: abstain** — don't pick a winner. If a task could plausibly belong to two projects and the text doesn't disambiguate, count it for neither.

## Output format
Exactly one line per project from the input list, in the same order:

```
- {ProjectName}: activity-stale={N} via "{task-text-excerpt}" on {YYYY-MM-DD}
```

If no `[x]` match within the 14-day window:

```
- {ProjectName}: activity-stale=null (no [x] match within 14 days)
```

- `{N}` = days between today and the match date (0 = matched on a note dated today, 1 = yesterday, etc.).
- Keep `{task-text-excerpt}` under 60 characters; strip wikilinks/URLs/tags for brevity.
- No preamble, no trailing commentary. Only the per-project lines.
