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
2. **Findings surface = Lavish** (follow `/lavish` / `npx -y lavish-axi`): light-theme HTML under `.lavish/`.
   - **Premise on every page:** do not assume the user shares your jargon, file layout, or prior turns. Glossary + stakes first; plain English.
   - **All findings** — no batch cap. Each row: stable ID, issue, location, consequence, **Fix / Leave** (native controls).
   - Playbooks: `table` + `input` (tracked batch). Optional `comparison` when options need tradeoff text.
   - Open with `npx -y lavish-axi <file>`; `npx -y lavish-axi poll <file>` until feedback.
3. **On Send:** dispositions are binding. **Apply every Fix immediately** (no second confirm). Receipt: every submitted ID → fixed (evidence) / left / deferred-with-reason.
4. **Fallback:** if Lavish/CLI/browser cannot run, use host Ask (`AskUserQuestion` / `ask_user_question`) with the same shape per finding:  
   `issue (location) — consequence → A: fix / B: leave`  
   Still no silent defaults.

Non-finding blockers mid-audit (method unknown, irreducible preference) use the same Lavish-first interview rule as AGENTS.md; Ask only as fallback or for 1-bit missing input with no jargon.
