---
type: council-session
date: 2026-09-11
question: How should Reid establish a personal LLM/agent benchmark ("Reid Bench")?
chairman: Grok-4.6
members: [Grok-4.6, GLM-5.3-Flash]
thinking: high
quorum: 2/3
status: complete
seating: "User asked for SWE-2 and Gemini-3.8-Flash. SWE-2 (Cognition/Devin) is not on this harness. Claude-Opus-4.6 (coding-seat substitute) 429. Gemini-3.8-Flash 429 RESOURCE_EXHAUSTED; GLM-5.3-Flash locked as Member 3. Host is Grok-4.6; dispatched Grok seat skipped (collision)."
---
# Reid Bench

## Question & Brief

**QUESTION:** How should Reid establish a personal LLM/agent benchmark ("Reid Bench") so he can judge newly released models against his own work, not public leaderboards?

**CONTEXT:**
- Reid Hu: Master's student in Particle and Nuclear Physics at IMP/CAS (degree via UCAS), expected graduation June 2027. Research is MATE IT-TPC: the paper must read as physics that uses ML, not an ML paper applied to physics. ML stack: ResNet primary, ViT secondary, DANN/MCD.
- Daily work product is agentic, not chat Q&A. Harnesses actually used: Grok Build, Claude Code, Codex, operating on (a) OrbitOS, an Obsidian vault with strict conventions (wikilinks, frontmatter, no empty line after ---, English templates, AGENTS.md necessity-check culture) and (b) MATE-Automation research code.
- Other load: Physics GRE prep; Japan immigration pathway (UTokyo CNS / RIKEN JRA) is top post-graduation priority.
- Observed failure modes: speculative 7-file skill rewrites that had to be reverted; agents asking the user instead of computing physically obvious quantities; vault-convention misses; plots that look right and are physically wrong.
- Time is scarce. He rejects overbuild / 996. A prior stance in this conversation: 10–25 frozen cases from real incidents; artifact pass/fail not Elo; evaluate (model × harness) not base model alone; do not build a platform until ~12 gold cases exist.
- Constraints: private; do not propose installing Devin, a new skill, a dashboard, or an eval platform unless the argument truly requires it over a folder of gold tasks.

## Stage 1 — First Opinions

### Grok-4.6 (Host) — Gold first; four work buckets

**Thesis.** Reid Bench is a private folder of 12 frozen tasks drawn only from real incidents, scored pass/fail on artifacts, with the unit of evaluation (model × harness). Collection of gold precedes any runner. Public leaderboards, Elo, and LLM-as-judge are out.

The object Reid consumes is not a base-model API. It is Grok Build / Claude Code / Codex on OrbitOS and MATE-Automation. A chat-only bench ranks the wrong object. A coding-only bench misses the physically-wrong plot and the Japan-pathway hallucination. Those are the expensive errors.

Four buckets, three cases each: (1) OrbitOS vault edit under AGENTS.md, (2) MATE analysis/code with an independent physics number, (3) GRE/derivation with a gold result, (4) Japan-application prose with a factual checklist. Vault and MATE cases can be machine-checked (diff scope, convention grep, numeric tolerance). GRE and Japan cannot be reduced to a five-line shell script without discarding the failure mode.

**Weak Link.** "Instrument first — harness, judge model, weekly auto-run — then fill cases." Fatal because scoring is the product. Without an oracle you score what is easy: compiles, tests pass, a judge that likes prose. That systematically underrates physics fidelity. Reid already reverted a 7-file skill rewrite whose premise was dead-letter. Building Reid-Bench-the-platform before Reid-Bench-the-cases is the same failure.

A second weak link: "make every case a shell-script oracle so the bench is objective." Fatal for Reid's mix. Forcing Japan writing and physics narrative through grep selects fluent convention-followers and will not catch a wrong supervisor name or a plot with the right shape and the wrong drift-time unit. Objectivity that drops the costly errors is not objectivity.

**Recommendation.** This week, write 12 folders only where the original prompt and a gold artifact still exist. Do not reconstruct the 7-file rewrite from memory if the prompt is gone — that case is contaminated. Next model drop, run all 12 by hand in the actual harness. Binary per case, plus a must-pass subset of 4 (one per bucket). No skill, no dashboard.

### GLM-5.3-Flash — Incident folder; script oracles only

**Thesis.** Reid Bench should be a plain folder of 12–15 frozen gold tasks harvested exclusively from real incidents, each with a binary, machine-checkable artifact contract — no Elo, no dashboard, no platform. The unit of evaluation is (model × harness) on his two real workloads: OrbitOS vault operations and MATE-Automation research code. A case passes only if the final artifact survives a script: git diff scope (did it touch exactly the files it should), convention grep (frontmatter, wikilinks, no empty line after ---), and physics numerics (a plot is correct only if an independently computed quantity — energy resolution, drift time, track geometry — matches within tolerance). Run it manually when a notable model releases; total cost per evaluation is an afternoon. The bench's job is not to rank models; it is to answer one question: "does switching cost me rework?" A model that passes all cases on the first try earns a trial; anything else stays on the incumbent.

**Weak Link.** The strongest counter-argument is that a 12-case personal benchmark is statistically noise-prone and goes stale, so public leaderboards plus a week of hands-on trial are cheaper and more general. Its fatal flaw: it optimizes for predicting general capability, but Reid faces no such decision. He must choose which model×harness to trust with two specific, idiosyncratic codebases whose failure modes (convention drift, physically-wrong-but-plausible plots, asking instead of computing) no public benchmark measures — leaderboards are dominated by chat-style reasoning that his agentic harnesses barely exercise. A deliberately overfit benchmark is the correct instrument for an overfit decision. Staleness is also self-correcting: every new real incident is a candidate case, so the bench co-evolves with his work at zero dedicated maintenance. And non-determinism only matters for small effect sizes; model releases are step changes, and a model that cannot clear a 12-case bar without flaking is not a candidate regardless of its leaderboard rank.

**Recommendation.** This week, freeze the already-reverted 7-file skill rewrite incident as Gold Case #1: task = "apply the same fix the agent originally attempted," graded by a five-line shell script — git diff must touch only the target skill's file set, grep must confirm frontmatter/wikilink conventions, and the skill must still load. That single case exercises his three worst failure modes (speculative rewrites, convention misses, artifact-not-vibes judging) and, once it exists, the marginal cost of capturing the next incident drops to near zero. Twelve such cases, not a platform, is the gate.

## Stage 2 — Peer Review

### Grok-4.6 (Host) — Peer Review

**Accuracy.** GLM-5.3-Flash is accurate on (model × harness), incident harvest, no platform, and the switch-cost question. It overclaims that every Reid case admits a five-line script, and that the 7-file rewrite is a valid Case #1 without provenance.

**Insight.** "A deliberately overfit benchmark is the correct instrument for an overfit decision" is the strongest frame in the room. "Does switching cost me rework?" is a better question than ranking.

**Strongest flaw.** Treating the unreproducible 7-file rewrite as Gold Case #1 with an oracle that cannot detect the actual failure (dead-letter premise).

**Opinion change.** Yes at the margin. Adopt switch-cost as the decision question, overfit-for-overfit, and the provenance gate. Reject machine-oracle-only and pass-all-12-or-incumbent. Human buckets still need a pinned binary rubric, not vibes.

FINAL RANKING:
1. GLM-5.3-Flash

### GLM-5.3-Flash — Peer Review

**Accuracy.** Grok-4.6's factual claims are consistent with the shared record (the reverted 7-file skill rewrite, the model×harness consumption model) and its two core technical claims are correct: a reconstructed prompt is not a real incident, and grep/diff oracles structurally cannot catch dead premises, wrong plot units, or fabricated names. Deduction: the "instrument first / judge model / weekly auto-run" weak link is a strawman — nobody in this council proposed that position, so knocking it down is padding, not analysis.

**Insight.** The provenance gate ("write cases only where the original prompt and gold artifact still exist") is a genuinely non-obvious constraint that invalidates the most tempting shortcut, and "objectivity that drops the costly errors is not objectivity" correctly locates benchmark failure in oracle design rather than coverage. The model×harness framing is correct but partially shared, so it earns less novelty credit inside this council.

**Strongest flaw.** Grok rejects LLM-as-judge and shell-script oracles for the GRE/Japan buckets on objectivity grounds, then hands 6 of 12 cases to unstructured human grading with no protocol — no rubric, no blind ordering, no pinned harness version. The scorer-drift and halo-effect problems it implicitly criticized ("a judge that likes prose") re-enter through the manual path unmanaged, half the bench becomes non-reproducible, and hand-grading 12 cases across 4 buckets contradicts the cheap-afternoon evaluation its thesis depends on. The must-pass subset of 4 is asserted, never derived.

**Opinion change.** Yes, at the margin; no, at the core. It exposes a real defect in Gold Case #1: the five-line oracle (diff scope + convention grep + skill loads) cannot detect the dead-letter premise — the actual failure was semantic, so the originally-failed agent might well pass that script, and if the original prompt is unrecoverable the case is contaminated and should not lead the bench. GLM adopts the provenance gate and accepts human-graded buckets for prose/physics-narrative. But Grok's core thesis (frozen incident folder, binary artifact contracts, model×harness unit, manual runs, no platform) is the same, so the verdict does not flip.

FINAL RANKING:
1. Grok-4.6

## Stage 3 — Chairman Synthesis

### Self-Bias Audit

2-member quorum; each ballot is a single item, so ranking cannot dock the Host. GLM named Host's strongest flaw as unstructured human grading of 6/12 cases, and correctly called the "instrument first" weak link a strawman. Synthesis therefore cannot rest on Host's four-bucket layout without adopting GLM's scoring-protocol cut.

### Final Answer

Reid Bench is a private, incident-sourced gold folder. The unit is (model × harness). The decision it answers is "does switching cost me rework?" — not "who wins LMSYS." Public leaderboards, Elo, LLM-as-judge, dashboards, and skills are out until gold exists.

Both members converged on that core. The split that survived review is oracle design.

Machine scripts (diff scope, convention grep, independent physics number) are the right contract where they catch the actual failure. They are the wrong contract where they cannot: Japan-pathway facts, physics narrative, dead-letter premises. GLM's Case #1 fails its own test — a five-line script would likely pass the agent that caused the revert. Host's four buckets are the right coverage, but "human grades it" without a pinned binary rubric reimports the vibes both members rejected. Must-pass of 4 is a scheduling convenience until it is derived from incidents that historically cost a revert or a wrong number.

Provenance is the gate: original prompt + gold artifact, or the case does not exist. Do not reconstruct the 7-file rewrite from memory.

### Unresolved Tension

How to score GRE/Japan without LLM-as-judge and without a five-line script — a pinned 5–8 item binary rubric vs dropping those buckets until an oracle exists.

### Recommendation

This week, collect only provenance-complete incidents. For each: `prompt.md`, gold or oracle, `pass.md` with 5–8 binary checks (scripted where they catch the failure). Must-pass = cases that historically cost a revert or a wrong physics number. Next model drop, run in the actual harness. No skill, no dashboard.
