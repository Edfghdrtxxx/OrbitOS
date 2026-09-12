---
title: Reid Bench
type: project
status: active
area: "[[AI]]"
created: 2026-09-11
due:
priority: P2
tags: [project, eval, llm, harness]
---
# Reid Bench

## Context

**Objective:** Decide whether switching a model×harness costs rework on Reid's actual work, using a private incident-sourced gold set — not public leaderboards.

**Success Metrics:**
- [ ] Provenance-complete cases exist (original prompt + gold artifact, or the case does not exist)
- [ ] Each frozen case has `prompt.md`, gold or oracle, and `pass.md` with 5–8 binary checks (scripted where the check catches the failure)
- [ ] Must-pass set is derived from incidents that historically cost a revert or a wrong physics number
- [ ] One scored run exists for a new model×harness drop (Grok Build / Claude Code / Codex)

**Key Constraints:**
- Timeline: Collect gold this week if provenance exists; run on the next notable model drop. Not an a-block vs [[GRE_Physics_Prep]] through 2026-11-01.
- Resources: Manual afternoon per run. No skill, no dashboard, no Elo, no LLM-as-judge, no eval platform.
- Unit of evaluation: (model × harness), not base-model API chat.
- Coverage target (do not invent cases to fill): OrbitOS vault edit; [[MATE-Automation]] with an independent physics number; GRE/derivation with a gold result; Japan-application prose with a factual checklist.
- Oracle rule: scripts (diff scope, convention grep, independent numeric tolerance) where they catch the failure. GRE/Japan use a pinned binary rubric, not vibes and not a five-line grep that drops the error. Unresolved: rubric vs drop those buckets until an oracle exists.
- Do not reconstruct the reverted 7-file skill rewrite from memory if the original prompt is gone — contaminated.

Council lock: [[2026-09-11-reid-bench-establish]].

---

## Actions

### Phase 1: Provenance harvest

- [ ] Mine real incidents (OrbitOS, MATE, GRE, Japan) for original prompt + gold artifact
- [ ] Drop any case that requires reconstructing the prompt from memory
- [ ] Mark must-pass: historical revert or wrong physics number only

### Phase 2: Freeze case contracts

- [ ] For each kept incident: `prompt.md`, gold or oracle, `pass.md` (5–8 binary checks)
- [ ] Script the checks that actually catch the failure; pin a rubric for prose/narrative
- [ ] Cases live under `20_Project/Reid_Bench/cases/` when the first one is frozen — not before

### Phase 3: First run

- [ ] On the next notable model drop, run frozen cases in the actual harness
- [ ] Binary per case; keep or switch by rework cost, not rank
- [ ] New real miss → candidate case (bench restocks from work)

---

## Progress

- 2026-09-11: [[2026-09-11]] — Project initiated. Council (quorum 2/3, Grok-4.6 Host + GLM-5.3-Flash): gold folder first, no platform. Transcript [[2026-09-11-reid-bench-establish]].

---

## Related

- [[2026-09-11-reid-bench-establish]] — council that locked the design
- [[LLM-Council]] — workflow that produced the lock
- [[Harness Engineering]] — why the unit is model×harness
- [[Cognitive Load in LLMs]] — why no dashboard/skill until gold exists
- [[MATE-Automation]] — physics/code bucket
- [[GRE_Physics_Prep]] — derivation bucket
- [[Japan_Itinerary]] / [[UTokyo_RIKEN]] — application-prose bucket

---

## Notes

- Public benches (MMLU, SWE-bench, Arena) average other people's tasks. Rankings reverse on this mix.
- A five-line script that would pass the agent that caused a revert is not an oracle.
- Intended case layout (create per case, not as empty scaffold): `cases/<id>/{prompt.md, gold or oracle, pass.md}`.
