---
name: SKILL.md should lean terse (guideline, not absolute)
description: Prefer concise SKILL.md files, but prose is acceptable where it carries durable guidance (examples, anti-patterns, placeholders authors fill in)
type: feedback
originSessionId: 03e1bffe-fcac-4382-aa2f-3d37e1c6f7b2
migrated_from: /Users/Reid Hu/MATE-Automation/99_System/memory/MATE-Automation-V4/feedback_skill_md_terse.md
migrated_at: 2026-07-26
---
SKILL.md files lean terse — short snippets over full tables, compact examples over explanatory paragraphs — but this is a guideline, not an absolute rule.

**Why:** User explicitly requested conciseness in the original session; verbose skill docs add noise without value when the source code or a short example already conveys the point. However, in 2026-04-17 the user clarified that prose is acceptable when it carries durable guidance inside the skill body — e.g. template placeholders that encode examples the author will reuse, anti-patterns that need explanation, or guidance that genuinely resists compression. Terseness is the default, not a hard cap.

**How to apply:** Prefer short form (import snippet + minimal table) when a snippet suffices. Accept longer prose when the content is load-bearing — embedded examples authors will read at point-of-use, or caveats whose compressed form would lose teeth. When in doubt, trim, but don't amputate meaning.
