---
name: feedback_investigate_over_ask
description: User prefers the agent to investigate/verify and recommend over offloading decisions via ask_user_question when the answer is discoverable or domain-obvious
metadata:
  node_type: memory
  type: feedback
  originSessionId: 37a2a89c-5320-4362-bff5-7129e88e0274
migrated_from: /Users/Reid Hu/MATE-Automation/99_System/memory/MATE-Automation-V4/feedback_investigate_over_ask.md
migrated_at: 2026-07-26
---

When a choice is **discoverable** (re-run a check, read the code, compute it) or **physically/domain-obvious**, investigate and recommend — do NOT punt it to the user via `ask_user_question` / `AskUserQuestion`.

**Why:** Over-asking on derivable points reads as offloading work the agent should have done. Evidence (2026-06-30 session, RANSAC energy-regression figure): the user **rejected two AskUserQuestion prompts**; when offered a "split by column-2 value" option they said *"Why you ask this?"* because the column's physical meaning (label = per-track index ⇒ tracks-per-event = multiplicity) was obvious to them; and earlier, instead of answering a layout/data-mode question they redirected the agent to **interrogate the data lineage and compute the multiplicity proportions**.

**How to apply:**
- Exhaust investigation first: trace the code, re-run the relevant check, compute the numbers. Bring back a reasoned recommendation, not a menu.
- Reserve `ask_user_question` for genuinely **irreducible, non-derivable** choices (subjective preference, business intent, mutually-exclusive paths with no evidence to decide between them).
- This **refines, not weakens** `feedback_necessity_check` and Zero-Assumptions: still verify rigorously and still halt on real ambiguity — the point is to source the answer from *evidence* rather than from the user when evidence exists. The user has a strong questioning/interrogative spirit and wants depth, just not decision-offloading.
