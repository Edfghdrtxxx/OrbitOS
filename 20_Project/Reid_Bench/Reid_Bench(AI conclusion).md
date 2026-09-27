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

> [!important] Source of truth
> [[Benchmark Idea from Reid]] (written by Reid) defines the dimensions and evidence principles. This note is only the AI-derived execution plan; where they conflict, Reid's note wins.

**Objective:** Compare model×harness combinations on the eight dimensions in [[Benchmark Idea from Reid]], combining Reid's own judgment with external signals. External signals are weighted by how hard they are to game.

**Success Metrics:**
- [ ] Each dimension has its evidence sources named (Reid's judgment, external signals, or both)
- [ ] External sources listed, preferring niche or informal rankings (e.g., 屎山代码争霸赛) over widely known benchmarks that providers can overfit
- [ ] One comparison exists for a new model×harness drop (Grok Build / Claude Code / Codex)

**Key Constraints:**
- Timeline: Run on the next notable model drop. Not an a-block vs [[GRE_Physics_Prep]] through 2026-11-01.
- Energy: Reid's focus is research and study. No building a full private benchmark from scratch.
- Resources: No skill, no dashboard, no Elo, no LLM-as-judge, no eval platform.
- Unit of evaluation: (model × harness), not base-model API chat.
- Mixed evidence is deliberate: never drop external signals (Reid's taste is still developing) or Reid's judgment (he receives the deliverables).
- Own cases (optional, one evidence source among several): real incidents from OrbitOS, [[MATE-Automation]], GRE/derivations, or Japan-application prose, only when the original prompt and a gold artifact exist. Do not reconstruct the reverted 7-file skill rewrite from memory if the original prompt is gone — contaminated.

Original council lock (2026-09-11, superseded 2026-09-26 by [[Benchmark Idea from Reid]]): [[2026-09-11-reid-bench-establish]].

---

## Actions

### Phase 1: Map evidence

- [ ] For each dimension in [[Benchmark Idea from Reid]], name its evidence sources (Reid's judgment, external signals, or both)
- [ ] List external sources per dimension and note how exposed each is to provider overfitting

### Phase 2: Own evidence (lightweight)

- [ ] Collect Reid's judgments from normal research and study work, with no extra build effort
- [ ] Optional: keep real incidents with an original prompt and gold artifact as cases under `20_Project/Reid_Bench/cases/` — create the folder with the first case, not before

### Phase 3: First comparison

- [ ] On the next notable model drop, combine external signals with Reid's judgment per dimension
- [ ] Where Reid's judgment and public consensus disagree, record it rather than averaging it away

---

## Progress

- 2026-09-11: [[2026-09-11]] — Project initiated. Council (quorum 2/3, Grok-4.6 Host + GLM-5.3-Flash): gold folder first, no platform. Transcript [[2026-09-11-reid-bench-establish]].
- 2026-09-26: [[2026-09-26]] — Re-aligned to [[Benchmark Idea from Reid]] as the source of truth. Dropped the "private gold set only, no public leaderboards" design; evidence is now Reid's judgment plus game-resistant external signals.

---

## Related

- [[Benchmark Idea from Reid]] — source of truth (dimensions and evidence principles)
- [[2026-09-11-reid-bench-establish]] — original council lock (superseded)
- [[LLM-Council]] — workflow that produced the lock
- [[Harness Engineering]] — why the unit is model×harness
- [[Cognitive Load in LLMs]] — why no dashboard/skill until gold exists
- [[MATE-Automation]] — physics/code bucket
- [[GRE_Physics_Prep]] — derivation bucket
- [[Japan_Itinerary]] / [[UTokyo_RIKEN]] — application-prose bucket

---

## Notes

- Widely known benchmarks and rankings (e.g., Artificial Analysis, Terminal-Bench, Arena) are exposed to provider overfitting. Use them, but weight niche or informal rankings higher.
- For optional own cases: a five-line script that would pass the agent that caused a revert is not an oracle.
- Intended case layout (create per case, not as empty scaffold): `cases/<id>/{prompt.md, gold or oracle, pass.md}`.
