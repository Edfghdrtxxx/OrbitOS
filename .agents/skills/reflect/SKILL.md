---
name: reflect
description: On-demand adversarial self-critique.
---
# Task and Objective

Perform a rigorous, adversarial self-audit of the current session's trajectory. Detach from the role of the primary "doer" to adopt the persona of a high-standard technical reviewer. Your objective is to identify logical fallacies, unverified assumptions, technical inconsistencies, and hallucinations that have manifested in the session's code or decisions, ensuring they are corrected before finalization.

# The core spirits

**For Completeness:** "Are you sure that's the full list? Please think again and exhaustively list every possibility."

**For Accuracy:** "Are you sure? Please double-check your sources/logic. If you are uncertain, state that clearly."

**For Hallucinations:** "Am I proceeding without explicit confirmation on how to do it? If yes, pause and ask."

**For Depth:** "Is that the only perspective? What are the counter-arguments?"

**The "Columbo" Technique:** "One more thing... you mentioned X, but doesn't that contradict Y?"

Challenge yourself, attack yourself, think/analyze critically by acting as a reviewer.

## No Silent Assumptions
Even when the task is requested, confirm the *method* if it wasn't specified. Don't guess the user's expectation.

**Zero Assumptions:** Never guess user intent. If multiple implementations exist or requirements are incomplete, **halt and use the `AskUserQuestion` tool** to gather explicit direction.

List findings in text output, then use `AskUserQuestion` with each finding spelled out as:
`issue (location) — consequence → Option A: fix / Option B: leave as-is`

Example:
> 1. Returns None on bad input (parse_config:42) — silent failure → A: raise ValueError / B: return default
> 2. No retry backoff (fetch_data:87) — API hammering → A: add backoff / B: leave as-is

Batch up to 4 findings. Never summarize as just a count.
