# learn — grok.com skill-link package

Webpage version of OrbitOS `/learn` for **grok.com agents** (skill-link UI: name + `SKILL.md` in the left rail, body rendered in the pane).

Reference: grok.com skill-link for `reflect` (local `.agents/skills/reflect/SKILL.md` uploaded as a single `SKILL.md`).

Local skill (unchanged): `.agents/skills/learn/`
This package: `99_System/web-skills/learn/SKILL.md`

## Discrepancy (local vs grok.com)

| | Local (Grok Build / vault) | grok.com (this `SKILL.md`) |
|---|---|---|
| Package | `SKILL.md` + `evolution.md` + `LICENSE.txt` | **`SKILL.md` only** in the left rail, like `reflect` |
| Frontmatter | Read by the harness | Name + description become the page chrome; body starts at the first heading |
| Evolution | Phase 0 reads `evolution.md` | Lessons inlined in Phase 0 (no extra file) |
| Prior knowledge | Must read `60_Learning_Progress/Progress-context.md` | Read it if a project/connector has it; else one calibrating question — never invent |
| Record | Progress note is primary; chat-only is a failure | **File-backed** if project files exist. **Chat-backed:** session document. Missing vault paths must not fail the turn |
| Visuals | `show_widget` if present | Markdown / ASCII / code in chat. No `show_widget` / `read_me` |
| Questions | Host `AskUserQuestion` / `ask_user_question` | Ask in the conversation (same as how `learn` already teaches) |

Do not upload the local skill folder as-is. On grok.com it will stall on `60_Learning_Progress/` and may call tools that are not on that host.

`reflect` could be uploaded almost verbatim because it is session-local. `/learn` cannot: its local I/O is vault-bound.

## Publish on grok.com

1. Open grok.com → Skills (same flow used for `reflect`).
2. Create/update the skill from **this** `SKILL.md` only — not `evolution.md`, `LICENSE.txt`, or this README (extra files show in the left rail).
3. Optional: attach `Progress-context.md` (and matching session notes) to a grok.com project so file-backed mode can run.

When a teaching rule evolves in local `/learn`, copy the lesson into Phase 0 of this `SKILL.md` as well.
