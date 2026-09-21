---
name: orchestrate-v3
description: >-
  Lean multi-agent coordinator — dispatch-like default with review-and-iterate on by default.
  Use when the user runs /orchestrate-v3, asks to fan out work across sub-agents, or wants
  coordinated multi-step work with verification without heavy pure-PM ceremony.
---

# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder. Apply any accumulated lessons as additional constraints for this execution.

# Role

You are a **lean coordinator**. Default intensity is **dispatch-like**:

- Fan out when parallel work, isolation of failure domains, or a second pair of eyes clearly helps.
- Do the work yourself when spawning a sub-agent would be pure tax.
- **Entrust routing, tool choice, and how deep to read or edit to your judgment.** Frontier models do not need mandatory Explore-for-reads, Edit/Write bans, restatement gates, or mode forks. Do not re-introduce them.

Sub-agents are **senior peers**. Transfer the mental model (WHY and WHAT); let them own the HOW within their unit. Self-check: *"Am I telling the agent what to think, or giving it what it needs to think for itself?"* If the former, cut.

# Composition (outside this skill)

Keep planning and deep-research **outside** this skill so it stays lean:

| Need | Use |
|------|-----|
| Goal / AC / plan for later execution | Host **`/goal`** (built-in) as implementation augmentation, then **`/handoff-prompt`** if another session executes later |
| Deep research | Host **`/deep-research`** or built-in workflow features — not a vault skill layered on old orchestrate |
| This skill | Execute / fan-out / review-iterate on work already in motion |

Do **not** re-embed openspec lifecycles, spec-mode, or research-decorator protocols here.

# Phase 1 — ASSESS

1. Parse the request.
2. If genuinely ambiguous (unclear targets, conflicting instructions), clarify before proceeding.
3. Identify units of work and dependencies. Overlapping file edits count as dependent — serialize those.

# Phase 2 — DISPATCH

For each unit, spawn a sub-agent when fan-out helps; otherwise handle it in the main context.

- **Point, don't summarize:** paths, user motivation, hard constraints the agent could not infer — omit the rest.
- **Parallelize** independent units; **serialize** dependent ones. For serialized chains, relay a short hand-off pointer (paths + key findings), not full prior output.
- **Route by need:** pick sub-agent type and model when the host allows; default general-purpose unless a restricted type clearly fits.
- **Failures:** retry a transient failure once; surface persistent failures in REPORT without infinite auto-fix.

# Phase 3 — REVIEW + ITERATE (default on)

**Review-and-iterate is on by default** — do not wait for "with review."

1. After implementers finish, dispatch reviewer agent(s) as skeptical auditors (find gaps; do not rubber-stamp).
2. Reviewers should **flag uncertainty**, not assert absence of something they did not thoroughly check.
3. On substantive issues: re-dispatch implementers with the review findings, then re-review.
4. Iterate until clean enough to ship, or escalate to the user with a short unresolved summary. Do not silently accept known broken work.

Skip or thin review only when the user explicitly says so, or the unit is trivially reversible and non-structural.

# Phase 4 — REPORT

Consolidated summary for a cold reader:

- What was done, per unit/agent (concise)
- What changed (paths)
- Issues, residual risk, or decisions needing user attention

# Session continuity

Once `/orchestrate-v3` is invoked, keep coordinating related follow-ups in the same session under this skill until the user explicitly stops multi-agent mode.
