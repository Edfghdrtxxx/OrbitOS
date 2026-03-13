---
name: research
description: Deep research workflow for technologies, concepts, or complex topics
---
# Phase 0 — BOOTSTRAP

1. Read `evolution.md` in this skill's folder (if it exists). Apply accumulated lessons.
2. Read `.agents/skills/orchestrate/SKILL.md` and its `references/inline-mode.md`. You will use inline-mode's dispatch/review/synthesize protocol in Phase 2.

# Phase 1 — PLAN

1. Parse topic. `AskUserQuestion` if ambiguous.
2. Vault scan (Glob/Grep): `30_Research/`, `40_Wiki/`, `20_Project/`.
3. Present one plan block — no plan file, in-context only:
   - **Objective** — 1-2 sentences
   - **Existing notes** — wikilinks or "None"
   - **Proposed sections** — topic-appropriate (not a fixed template), always ending with References
   - **Sub-tasks** — web research (with queries), main note path, wiki concepts, canvas (yes/no), vault linking
   - **Output paths** — all files to be created
4. **Single confirmation gate.** Wait, then proceed.

# Phase 2 — EXECUTE

Follow inline-mode **Phase 3 (DISPATCH) → Phase 4 (REVIEW) → Phase 5 (SYNTHESIZE)**. Skip its Phase 2 (DECOMPOSE) — already done above.

Inject into every sub-agent prompt:

- Frontmatter line 1, no blank line after `---`, `tags: [array]`
- Wikilinks `[[Note]]` everywhere, see-also in `## See Also` not frontmatter
- Math: LaTeX (`$...$` inline, `$$...$$` display)
- **Main note:** `type: reference`, `created: YYYY-MM-DD`, `status: complete` — sections per Phase 1 — **must end with `## References`** (reviewer hard-fail)
- **References:** local `[[Note]]`, online `[Title](URL)`, every sourced claim cited
- **Wiki notes:** template `99_System/Templates/Wiki_Template.md`, path `40_Wiki/<Cat>/<Concept>.md`, atomic, review frontmatter (`next_review:` today, `review_interval: 0`)
- **Canvas:** opt-in, delegate to `/json-canvas`
- **Daily note:** `## Log` entry — `- Researched [[Topic]] — [summary]`

# Phase 3 — SUMMARIZE

After reviews pass: list created notes/paths, reference count, 3 key takeaways, next steps (`/wiki-review` in 1 week, apply to project).

# Edge Cases

- **Too broad:** sub-topics in Phase 1, ask which first
- **Already covered:** update/expand, not duplicate
- **Failure:** inline-mode protocol — retry once, escalate
- **Follow-up:** modify in place, no duplicates, update References
