---
name: Evaluate change necessity before implementing
description: Five-question check applied in two trigger contexts — (a) changes to structural/system surfaces (skills, AGENTS.md, memory, hooks, configs, pipeline architecture) or (b) user-floated modification/refactor ideas (questioning/interrogative spirit). Halt via AskUserQuestion if any check fails.
type: feedback
originSessionId: 401c2b36-2774-44ff-a7c4-f348cc318b01
---
Applied in two trigger contexts (per AGENTS.md):
- **(a) Structural/system surfaces:** skills, AGENTS.md, memory, hooks, configs, vault architecture, training pipeline, openspec specs, plotting infrastructure — any edit that reshapes how the project harness behaves.
- **(b) User-floated modification/refactor ideas:** the user proposes a new mechanism, a skill/workflow redesign, or a change to existing design — invoking their "questioning/interrogative spirit." In this mode they want scrutiny, not agreement; a "sounds good, let's do it" response is a failure.

In those contexts, do not jump to implementation. First perform the necessity-check.

**Why:** Originated in OrbitOS (2026-04-15) — user asked about improving a skill with a new tool. Claude proposed a 7-file rewrite and executed it after scope clarification, but the entire premise was shaky: the rules being "upgraded" were dead-letter, the existing pattern already covered the workflow, and the new tool added cognitive load with no concrete payoff. All edits were reverted. The failure mode was **selling a speculative change as an obvious win** — reasoning forward from "new tool exists" to "we should use it" without evaluating whether a real problem was being solved.

**How to apply:** Before implementing any proposed change, explicitly answer these five questions:

1. **Does the problem exist?** Is this a real incident the user hit, or a hypothetical improvement I'm imagining? Has the user described a concrete pain point, or am I reasoning from "X is new/better/available"?
2. **Is the rule/code/pattern I'm updating still active?** Check for superseding rules, dead-letter guidance, code that's unreachable, deprecated paths. Edits to zombie content look productive but change nothing.
3. **Does the existing pattern already solve the problem?** State the concrete gap in one sentence. If I can't, the gap probably doesn't exist.
4. **Does the new pattern add cognitive load?** More decisions, more failure modes, more config knobs, more docs to remember. Weigh this against the concrete payoff.
5. **Is there a concrete use-case?** Name a specific situation — who, when, doing what — where the new approach beats the existing one. If only hypotheticals come to mind, pause.

If any answer is "no," "unclear," or "I'm assuming" — halt and ask the user (Claude/Codex: `AskUserQuestion`; Grok: `ask_user_question`). Do not sell speculation as obvious. New tool availability, theoretical cleanliness, or "while we're here" opportunity are not by themselves reasons to change working things.

**In scope (within the two triggers):** skill edits, AGENTS.md changes, memory edits, hook changes, config schema changes, pipeline architecture shifts, new mechanisms/abstractions proposed for any of the above, new tools or MCP servers, workflow/process redesigns, and any "improvement" that isn't fixing a named bug the user reported.

**Out of scope:** ordinary in-task code edits the user explicitly requested, bug fixes for named bugs, training runs, evaluation runs, plotting tasks, paper/thesis writing within existing workflow. The check is for structural surfaces and user-floated ideas — not every line change.
