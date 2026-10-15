---
name: Search vault sources before answering a physics question
description: For a standalone physics or math question, search firsthand vault sources first, then answer with line-level citations and vault/outside labels.
type: feedback
---
**Trigger:** the user asks a standalone physics or math question — a question asked for itself, not a step inside a coding or editing task.

**Search:** keyword search (e.g. `grep -rn`) over the Markdown files in:
- `50_Resources/Physics/GRE` (Kahn book, official GRE resources)
- `50_Resources/Physics/Courses`
- `50_Resources/Physics/Literature`

Read the best matches. Skip PDFs.

**Answer:**
- Mark which parts come from the vault and which come from outside it.
- If the search finds nothing, say "no vault source found" in one line, then answer.
- If a vault source and an outside source disagree, show both.

**Citation:** cite each vault claim as `[label](path:line)`, with the line, in the format of `preference_file_citation_links.md`.
- Example: `[Kahn, §1.5.1 Lagrangians](50_Resources/Physics/GRE/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29/Conquering%20the%20Physics%20GRE%20%28Yoni%20Kahn%29.md:833)`

**Why:** the user wants answers grounded in firsthand sources they can open and check. Format verified in the Claude desktop app on 2026-10-14.
