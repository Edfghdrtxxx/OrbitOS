---
name: llm-council-v2
description: Flexible, multi-model deliberative council for high-stakes decisions, research, and stress-testing. Supports arbitrary models, custom member counts, and round-table cross-examination. Trigger: /llm-council-v2 or explicit request to convene a multi-model council.
---
# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder if it exists. Apply accumulated lessons.

# LLM Council v2: Flexible Deliberative Architecture

A multi-agent council that breaks groupthink, uncovers blind spots, and delivers actionable verdicts through structured deliberation.

---

## 1. Principles

- **Trigger:** `/llm-council-v2` or explicit multi-model council request.
- **User Owns the Goal.** The council stress-tests; the user decides.
- **Non-Sycophancy First.** Challenge assumptions and identify failure modes — never validate preconceptions.
- **Shortest Path to Intent.** Add a mechanism only if skipping it would change the verdict. No ceremony, taxonomy, or extra rounds that don't materially alter the user's next action.
- **Less is More.** The council's job is to change the answer or prove it survives attack — nothing else.

---

## 2. Composition & Roster

- **User-specified:** Parse named models or `<model agent="mN">` tags → assign directly.
- **Default (4-voice):** Gemini 3.1 Pro (conceptual), Grok 4.6 (pragmatic), SWE-2 (adversarial, read-only), GPT-5.6-Sol (integrative).
- **Minimum 2 members.** Warn below 3 that cross-examination is degenerate.
- **Chairman (Host):** Frames the brief, selects probes, writes synthesis. May submit a labeled Stage 1 stance (no special weight); must quote dissent verbatim.

---

## 3. Deliberation Flow

```
  ┌───────────────────────────────────────┐
  │   Stage 1: Survey then stances        │
  │   (Parallel; primary sources, 0 talk) │
  └───────────────────┬───────────────────┘
                      │
                      ▼
  ┌───────────────────────────────────────┐
  │   Stage 2: Round-Table Probing        │
  │   (All stances visible, adaptive CX)  │
  └───────────────────┬───────────────────┘
                      │
                      ▼
  ┌───────────────────────────────────────┐
  │   Stage 3: Executive Synthesis        │
  │   (Verdict, dissent, next action)     │
  └───────────────────────────────────────┘
```

### Stage 1 — Survey, then Independent Stances (Zero Crosstalk)

1. **Frame Brief.** Question + constraints + **source list** (paths/URLs). Write to `99_System/.scratch/<topic>/`. Brief is a map, not evidence. Never paste long-form into `hub send`.
2. **Parallel Dispatch.** One `task` batch, stable names, zero crosstalk.
3. **Survey (mandatory).** Each member opens the listed sources and quotes file:line or URL-section. A stance that cites only the brief is **invalid** (non-yield). Chairman compression is not a substitute for member survey.
4. **Stance Template.** After the survey:
   - Bottom-line stance in $\le 8$ words.
   - The single assumption that, if false, flips the stance.
   - What evidence or test would prove it wrong.
   - The fatal flaw, alternative, or failure mode (whichever the question demands).
   - Unvarnished recommendation.
   Include a survey log (source → quote).

### Stage 2 — Round-Table Probing

1. **Compile & Share.** Chairman writes all stances + tension map to `99_System/.scratch/<topic>/round-table-rN.md`. Every member reads the full table — round-table, not pairwise.
2. **Probe the decisive uncertainty.** Chairman selects $\le 2$ probes:
   - **Divergence →** Press the crux: which assumption separates positions?
   - **Convergence →** One question: *"What shared assumption — if false — would overturn this recommendation?"* Members answer with what they searched and what would change their mind. If no credible counterexample exists, that's a valid answer — label `consensus-tested`.
3. **Same Agents.** Ping the same Stage 1 instances via `hub send` (≤2 lines: pointer to scratch file). Never spawn new agents for CX.
4. **Each member states:** what changed, what held, remaining uncertainty.

### Stage 3 — Executive Synthesis

The Chairman delivers:
- **Verdict** — recommendation, confidence, primary trade-off accepted.
- **Dissent** — each minority stance quoted verbatim with its falsifier and an operational tripwire: the observable condition under which the majority is wrong and the pivot action fires.
- **Next action** — one reversible step; what must be true before committing irreversibly.

---

## 4. Runtime

- **Data ≠ Control.** Briefs, stances, and CX packets live in `99_System/.scratch/<topic>/`. `hub send` is a ≤2-line wake/steer ping only.
- **Survey ≠ Brief.** Members read primary sources. The brief may list paths; it may not stand in for them.
- **Agent Continuity.** Stage 1 agents are reused in Stage 2 via `hub send`. If revival fails, mark `dissent-absent` — never spawn a blank twin.
- **Degradation.** 0 yields → host solo; 1 yield → no CX, confidence `degraded`; ≥2 → CX only responding seats. Do not stall Stage 3 on one silent seat.

---

## 5. Stopping Rules

- **One question per council.** Tightly scoped.
- **1–2 CX rounds max.** Second round opt-in only.
- **Stop on crux resolution,** not mere convergence. Agreement without a shared-assumption test is not resolution.
- **If Stage 1 suffices, synthesize.** Do not add rounds for ceremony. Survey is not ceremony; skip it and the stance is invalid.
