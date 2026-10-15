---
name: Cite sources; files as clickable Markdown links
description: Every claim that something is settled or changed carries its source (file:line link, URL, or exact command); any file named in a reply is a clickable Markdown link, never a bare name or backtick code.
type: feedback
---
**Trigger:** a reply, report, wrap-up, or relayed subagent result states that something is settled or changed, or names a file or folder on disk.

**Canonical standard:** [captain.md](/Users/Reid%20Hu/firstmate/data/captain.md:18) (firstmate "Reply style", captain 2026-09-25 and 2026-10-14). This file applies it outside firstmate.

**Source rule:** every claim that something is settled or changed carries its source — a file path with line number, a URL, or the exact command — so the user can check it independently. The source closes the sentence it supports.

**Format:** `[label](path:line)`; drop `:line` only when the link names a whole file or folder, not a claim inside it. Plain web URLs stay as they are.
- Inside the vault (`/Users/Reid Hu/OrbitOS`): path relative to the vault root, e.g. `[STATUS.md](99_System/Archives/Plans/2026/Windows_PC_Sale/STATUS.md)`.
- Outside the vault (shared notes folder, scratchpad, `/Users/leyi/...`): absolute path, e.g. `[drive_reorg_plan.md](/Users/leyi/Library/Application%20Support/Claude/side-session-notes/<id>/drive_reorg_plan.md)`.
- In the path, replace each space with `%20`, `(` with `%28`, `)` with `%29`.
- No angle brackets around the path: the desktop app reads them as part of the path and reports "Couldn't find this file".
- No `[[wikilinks]]` in replies: the desktop app shows them as plain text. Wikilinks stay correct inside vault notes.
- A bare file name or a path in backticks does not count as a citation. Backticks stay for code, commands, and field values.
- When a subagent report names files by bare name or abbreviated path (e.g. `OS/...`, `TP/...`), expand each to a full link before relaying it.

**Why:** 2026-10-15, a mid-term-form and Drive-reorg session named its plan file as `drive_reorg_plan.md` "in the shared notes folder"; the user could not open it or tell which folder it was in. Relative vault-path format verified in the Claude desktop app on 2026-10-14.
