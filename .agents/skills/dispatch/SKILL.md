---
name: dispatch
description: Lightweight sub-agent dispatcher — fast alternative to /orchestrate that skips decomposition, restatement, and formal review
---
# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

# Phase 1 — ASSESS

Parse the user's request. Do **not** restate the task or wait for confirmation — move straight to dispatch. If genuinely ambiguous (unclear target files, conflicting instructions), use `AskUserQuestion` to clarify.

Check whether the invocation includes **"with review"**. If so, set the REVIEW flag for Phase 3.

# Phase 2 — DISPATCH

**Core philosophy:** Transfer the mental model — WHY this matters and WHAT success looks like — then let the sub-agent own the HOW entirely. Every sub-agent is a **senior peer, not a subordinate**. It can read files, explore code, and make design decisions. Don't pre-chew the work.

Self-check before sending any dispatch prompt: *"Am I telling the agent what to think, or giving it what it needs to think for itself?"* If the former, cut.

For each identified unit of work, spawn a sub-agent via the `Agent` tool:

- **Point, don't summarize:** give file paths, the user's motivation, and hard constraints the agent couldn't infer — omit everything else.
- **Parallel when independent:** launch all non-dependent agents in a single message.
- **Direct execution:** sub-agents work on target files directly (no scratch layer, no intermediate specs).
- **Prefer dispatching over reading:** keep the dispatcher's context lean. If you need to understand file contents, dispatch an Explore agent — don't read files yourself.

Permitted tools for the dispatcher: `Agent`, `AskUserQuestion`, `Glob`, `Grep`, `ToolSearch`, `Skill`, `Read` (restricted to this skill's folder only).

# Phase 3 — REPORT

After all sub-agents complete, deliver a consolidated summary to the user:

- What was done (per agent, 1-2 lines each)
- Any issues or items that need attention

## Optional: REVIEW

Triggered only when the user includes **"with review"** in the invocation. After REPORT, dispatch **one** reviewer agent to audit all changes in a single consolidated pass. Report the reviewer's findings. No auto-fix loop — surface issues for the user to decide.
