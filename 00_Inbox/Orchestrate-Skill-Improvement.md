---
created: 2026-03-16
status: pending
source: start-my-day
---
Improve the `/orchestrate` skill based on yesterday's thinking 

# Handoff: Improve the Orchestrate Skill via Inline Mode

## Why This Matters
The orchestrate skill is the meta-coordination layer for all multi-agent work in this vault. Recent patches added session directory access, implementer report files, and structural gates — but these changes were made incrementally across one session and haven't been reviewed and stress-tested for internal consistency or completeness. The user wants a thorough improvement pass using `/orchestrate` inline mode itself (dog-fooding).

## Current State
Three files were modified in the latest session:
- `.agents/skills/orchestrate/SKILL.md` — tiered Read access (Glob → targeted Read → full Read) for session directories
- `.agents/skills/orchestrate/references/spec-mode.md` — new implementer report convention (`<NN>_<description>.md`), structural gate with explicit pairing
- `.agents/skills/orchestrate/references/inline-mode.md` — universal output convention (all implementers write to scratch dir), same structural gate
- `.agents/skills/orchestrate/evolution.md` — lesson log (not updated this session)

## What Changed and Why
- Orchestrator can now read session working directories (was previously restricted to its own skill folder)
- Both modes require every implementer to write a file to the session directory — spec-mode implementers write reports, inline-mode content producers write deliverables and worktree implementers write reports
- Phase 5 has a structural gate: every `<NN>_*.md` must pair with at least one `review_<NN>.md` before synthesis proceeds
- Access is tiered: list-first (Glob), then targeted Read, then full Read as last resort

## Hard Constraints
- Invoke `/orchestrate` and select **inline mode** for this work.
- Do NOT weaken the orchestrator's read-only mutation policy — it coordinates, never mutates.