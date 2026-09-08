Search the OrbitOS vault (git root / CWD — do not use host-specific absolute paths) for deadlines and time-sensitive items. Today is `{today}`.

## Input
Per-project context (status, pause scope/reason, resume/review condition, source):

{project_context}

If a project's context is missing or says unknown, treat it as unknown — do not invent context.

## Scope
- `20_Project/` — all files recursively
- `90_Plans/` — all files recursively
- `30_Research/` — frontmatter `due:` / `next_review:` fields only
- `00_Inbox/` — frontmatter `due:` fields only

## Exclude
Read `.gitignore` at the vault root and skip all matched paths/directories.

## Patterns to match
- Frontmatter: `due`, `next_review`, `target_intake`, or any date-valued deadline key
- Markdown tables with date columns (especially `Official_Deadlines.md` and execution plans)
- Dated checkboxes: `- [ ] YYYY-MM-DD:` (action items with date triggers)
- Inline dates near: deadline, due, by, before, until, window, registration, application, exam, submit, target
- Phase/milestone boundaries in headings (e.g., "Phase 0: NOW → 2026-04-30")

## Filter
Only items between `{today}` and `{cutoff}` (60 days). Exception: overdue unchecked tasks (`- [ ]` with past date).

## Paused projects
- Deliberately paused work keeps its external deadlines: still report due dates, exam/registration windows, and other externally imposed dates for paused projects — a pause does not pause the calendar.
- Annotate items from paused (fully or partially) projects with the pause context, e.g. `— (project paused: {reason}; deadline stands)`. Partial pause: name the paused scope only if the deadline item falls inside it.
- Unknown context: report the item plainly and mark `— (context unknown)`.

## Output format
One item per line, sorted by date ascending:
```
- **[D-{days}]** {what} — {date} ({source file}) {confidence}
```
- `D-{days}`: days remaining; overdue = `D+{days}`
- `{confidence}`: `VERIFIED` / `Estimated` / `Unverified` (from source markers; default `Unverified`)
- If nothing found: "No deadlines within 60 days."
