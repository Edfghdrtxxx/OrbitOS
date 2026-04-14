---
name: dispatch
description: Lightweight sub-agent dispatcher — fast fan-out that skips formal restatement and review-by-default
---
# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

# Phase 1 — ASSESS

1. Parse the request.
2. If genuinely ambiguous (unclear target files, conflicting instructions), use `AskUserQuestion` to clarify before proceeding.
3. Identify the units of work to dispatch, noting any dependencies between them.

# Phase 2 — DISPATCH

Every sub-agent is a **senior peer, not a subordinate** — it reads files, explores, and decides the HOW **within its unit**. Your job is to transfer the mental model (WHY and WHAT), then step back on the HOW. Peer-at-the-unit-level does not mean hands-off at the pipeline level: the dispatcher still coordinates across units — selecting `subagent_type`, relaying hand-offs between serialized agents, and handling failures.

Self-check before sending any dispatch prompt: *"Am I telling the agent what to think, or giving it what it needs to think for itself?"* If the former, cut.

For each unit from Phase 1, spawn a sub-agent via `Agent`:

- **Point, don't summarize:** give file paths, the user's motivation, and hard constraints the agent couldn't infer — omit everything else.
- **Parallelize where possible:** launch independent units in a single message; serialize dependent ones. For serialized dependencies, relay a concise hand-off pointer (paths + key findings) from agent N into agent N+1's prompt — never the full output. Keeps the dispatcher's context lean.
- **Prefer dispatching over reading:** keep the dispatcher's context lean. A single small read is fine; dispatch an Explore agent for anything larger.
- **Pick `subagent_type` when obvious:** Explore for broad codebase reads, Plan for design work, general-purpose otherwise. The type is a dispatcher-level routing choice — never prescribe the HOW inside the prompt itself.
- **Handle failures actively:** retry a transient failure once; surface persistent failures in REPORT without auto-fixing.

Permitted tools: `Agent`, `AskUserQuestion`, `Glob`, `Grep`, `ToolSearch`, `Skill`, `Read` (prefer dispatch; single small reads OK).

# Phase 3 — REPORT

After all sub-agents complete, deliver a consolidated summary:

- What was done, per agent (concise — enough for the reader to pick up cold)
- Any issues or items that need attention

## Optional: REVIEW

Triggered when the user signals they want review — **"with review"** is the canonical phrase, close variants qualify. After REPORT, dispatch reviewer agent(s) to audit all changes. Report the reviewer's findings. No auto-fix loop — surface issues for the user to decide.
