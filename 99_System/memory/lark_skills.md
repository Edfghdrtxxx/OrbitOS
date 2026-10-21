---
name: Lark/Feishu skills live in the vault, not in the skill listing
description: When a task involves Feishu/Lark (飞书) or lark-cli, read the matching SKILL.md from 99_System/lark-skills/ — the 28 lark-* skills are not auto-loaded.
type: preference
---
**Trigger:** the task involves Feishu / Lark / 飞书 (messages, docs, wiki, sheets, Base/多维表格, calendar, meetings/妙记, mail, tasks, approval, OKR, Drive/云盘, slides, whiteboard, 妙搭/Spark apps), a `feishu.cn` / `larksuite.com` / `doubao.com` URL, or the `lark-cli` command.

**How to apply:**
1. Read `99_System/lark-skills/lark-shared/SKILL.md` first (auth, identity, scopes); the other lark skills reference it.
2. Pick the domain skill by name in `99_System/lark-skills/` (`ls` it; each `SKILL.md` description says what it covers and which sibling to route to), read it, and follow it as if it had been invoked.
3. Relative links inside these skills (`../lark-shared/SKILL.md`) resolve within `99_System/lark-skills/`.

**Why:** the 28 skill descriptions are mostly Chinese and cost about 3.7k tokens in every session's skill listing across Claude Code and Grok; in 186 startups only lark-doc, lark-drive and lark-shared were used, once each (`skillUsage` in `/Users/leyi/.claude.json`, 2026-10-21).

**Install source:** `npx skills` from `open.feishu.cn` (`/Users/leyi/.agents/.skill-lock.json`). A `skills` update or reinstall puts them back in `/Users/leyi/.agents/skills/` and re-links them into `/Users/leyi/.claude/skills/` and `/Users/leyi/.grok/skills/`; move them here again afterwards.

**Restore auto-loading:** move the folders back to `/Users/leyi/.agents/skills/` and symlink each into `/Users/leyi/.claude/skills/` and `/Users/leyi/.grok/skills/` as `../../.agents/skills/<name>`.
