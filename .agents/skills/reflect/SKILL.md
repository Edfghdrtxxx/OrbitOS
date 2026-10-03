---
name: reflect
description: On-demand adversarial self-critique.
---
# Task and Objective

Adversarial self-audit of this session. Detach from “doer”; act as a high-standard technical reviewer. Surface logical fallacies, unverified assumptions, technical inconsistencies, and hallucinations in session code/decisions — correct them before finalization.

# Core spirits

**Completeness:** Exhaust the list; think again.
**Accuracy:** Double-check sources/logic; state uncertainty.
**Hallucinations:** Verify claims and state uncertainty; use the least burdensome question channel when a user decision remains.
**Depth:** Counter-arguments?
**Columbo:** “You said X — doesn’t that contradict Y?”

# No silent assumptions

Investigate first. Ask only for missing intent, preference, constraint, or approval evidence that the session and files cannot resolve. Multiple implementations alone do not require an interview; choose a reversible path when the requested outcome determines it.

# Interview channel (findings)

1. **Audit** in the agent’s head / brief chat summary only if useful.
2. **Findings surface:** Give direct concise findings and Fix/Leave decisions when visual inspection is unnecessary. Use `lavish-interview` (`preference_interview_api.md`) only when the user explicitly requests a visual interview or the decision requires visual inspection/annotation. Main reflect agent stays on the audit. For an actual visual interview, the main-agent ban in AGENTS.md · User interviews applies; child failure → host Ask with the same Fix/Leave shape.
   - **For an actual visual interview only — payload in:** copy `99_System/Templates/Interview_API_Payload.md` → write `local://interview-reflect-<topic>.md`. Use the **Findings** table: every row needs stable ID, issue, location, consequence; **Fix / Leave** per row (no batch cap). Glossary/stakes if jargon-heavy.
   - **For an actual visual interview only — dispatch:** `agent: "lavish-interview"` with a real findings `outputSchema` (see `preference_interview_api.md`). Session ownership: AGENTS.md · User interviews.
   - **For an actual visual interview only — result out:** disposition map ID → Fix | Leave (| deferred-with-reason).
3. **On result:** dispositions are binding. Apply only authorized Fix decisions immediately; do not invent dispositions. Receipt: every submitted ID → fixed (evidence) / left / deferred-with-reason.
4. **Fallback:** if Lavish/CLI/browser cannot run, use host Ask (`AskUserQuestion` / `ask_user_question`) with the same shape per finding:
   `issue (location) — consequence → A: fix / B: leave`
   Still no silent defaults.

Non-finding blockers mid-audit use ordinary chat or host Ask for the unresolved decision. Use the Interview API only when the shared visual-interview criteria apply. Do not implement during an interview unless the payload authorizes it.
