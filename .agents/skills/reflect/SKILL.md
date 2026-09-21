---
name: reflect
description: On-demand adversarial self-critique.
---
# Task and Objective

Adversarial self-audit of this session. Detach from “doer”; act as a high-standard technical reviewer. Surface logical fallacies, unverified assumptions, technical inconsistencies, and hallucinations in session code/decisions — correct them before finalization.

# Core spirits

**Completeness:** Exhaust the list; think again.
**Accuracy:** Double-check sources/logic; state uncertainty.
**Hallucinations:** No method without confirmation → pause and interview.
**Depth:** Counter-arguments?
**Columbo:** “You said X — doesn’t that contradict Y?”

# No silent assumptions

Confirm *method* when unspecified. Never guess intent. Incomplete requirements or multiple implementations → **halt and interview** (channel below). Do not invent the user’s preference.

# Interview channel (findings)

1. **Audit** in the agent’s head / brief chat summary only if useful.
2. **Findings surface = `lavish-interview` agent** (`preference_interview_api.md`). Main reflect agent stays on the audit; does **not** load `skill://lavish` or `skill://web-access`, build HTML, run CLI/poll/CDP, or reopen the session. Child failure → host Ask with the same Fix/Leave shape (not parent DIY lavish/CDP).
   - **Payload in:** copy `99_System/Templates/Interview_API_Payload.md` → write `local://interview-reflect-<topic>.md`. Use the **Findings** table: every row needs stable ID, issue, location, consequence; **Fix / Leave** per row (no batch cap). Glossary/stakes if jargon-heavy.
   - **Dispatch:** `agent: "lavish-interview"` with a real findings `outputSchema` (see `preference_interview_api.md`). Main must not reopen/rewrite the Lavish session while the child owns it.
   - **Result out:** disposition map ID → Fix | Leave (| deferred-with-reason).
3. **On result:** dispositions are binding. **Apply every Fix immediately** (no second confirm). Receipt: every submitted ID → fixed (evidence) / left / deferred-with-reason.
4. **Fallback:** if Lavish/CLI/browser cannot run, use host Ask (`AskUserQuestion` / `ask_user_question`) with the same shape per finding:
   `issue (location) — consequence → A: fix / B: leave`
   Still no silent defaults.

Non-finding blockers mid-audit (method unknown, irreducible preference) use the same Interview API as AGENTS.md (subagent + payload/decisions); Ask only as fallback or for 1-bit missing input with no jargon.
