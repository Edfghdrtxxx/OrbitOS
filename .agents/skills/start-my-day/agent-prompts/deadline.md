Search the OrbitOS vault at D:/obsidian/OrbitOS for deadlines and time-sensitive items. Today is `{today}`.

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

## Output format
One item per line, sorted by date ascending:
```
- **[D-{days}]** {what} — {date} ({source file}) {confidence}
```
- `D-{days}`: days remaining; overdue = `D+{days}`
- `{confidence}`: `VERIFIED` / `Estimated` / `Unverified` (from source markers; default `Unverified`)
- If nothing found: "No deadlines within 60 days."
