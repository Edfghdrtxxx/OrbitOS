---
type: council-session
date: 2026-09-11
question: Should OrbitOS adopt SureForge as a vault skill, or keep “do not install”?
chairman: Grok-4.6
members: [Grok-4.6, Gemini-3.8-Flash, Gemini-3.1-Pro]
thinking: high
quorum: 3/3
status: complete
seating: "Host is Grok-4.6; dispatched Grok seat skipped (collision). Third seat is Gemini-3.1-Pro per user (replaces GLM-5.3-Flash failover)."
---
# SureForge adoption

## Question & Brief

**QUESTION:** Should OrbitOS adopt SureForge (https://github.com/Da7-Tech/SureForge) as a vault skill, or keep the existing “do not install” decision?

**CONTEXT:**
- OrbitOS is a personal knowledge vault + daily planner (Obsidian), not a software product factory. ~39 skills. Canonical skill path is `.agents/skills/`. Claude’s skill dir is a symlink to that. The user has repeatedly archived heavy process (orchestrate / dispatch / orchestrate-lite) in favor of lean skills.
- SureForge v1.0.0 (2026-09-09): instruction-only agent skill. Four phases, READY/REPAIR/BLOCKED gates, Light/Standard/Full tiers, fresh-context independent review, ledgers. No runtime. Repo tests check packaging, not task quality.
- Published behavioral evidence is honest and weak: GLM-5.2 38 sessions, activation 5/10 on intended prompts; Grok 4.6 two-arm 24 runs, both arms met every frozen criterion. Pilots were synthetic; three-arm study unrun.
- OrbitOS already has Zero Assumptions, necessity-check, harness verify/completeness, `/orchestrate-v3` (forbids restatement gates / mode forks), `/align`, `/reflect`, `/kickoff`, `/handoff-prompt`, `/llm-council`.
- Necessity check vs adopt failed Q1/Q3/Q4/Q5. User named “sometimes instruction-drift but rarely.” User chose “Do not install.” Steal-one-idea and coding-repo trial were offered and not chosen.

## Stage 1 — First Opinions

### Grok-4.6 (Host) — Do not install; mismatch is the case

**Thesis.** Keep “do not install.” SureForge is a carefully written operating procedure for complex delivery. OrbitOS is a personal vault that already killed heavier cousins of this procedure. The named pain is rare instruction-drift. That mismatch is the whole case.

The failures SureForge lists are real. They are not this user’s incident. The necessity check’s first question is whether a problem exists, not whether a protocol exists. “Sometimes drift, rarely” is `/align` or a patch to the drifted skill. It is not four phases, coverage CSVs, and three review rounds per gate.

SureForge’s own Grok 4.6 two-arm is the evidence that matters: both arms met every frozen criterion. Adherence without a quality delta is ceremony. The GLM activation miss (5/10) means it also fails at the thing skills must do: show up on the right tasks.

Installing it would not be a no-cost text file. Standard/full mode reintroduces restatement gates and mode forks that `/orchestrate-v3` forbids in writing. Skills CLI multi-host copy fights the canonical `.agents/skills/` + Claude symlink rule. Cognitive load is paid on every subsequent complex task, including daily-planner work that should stay small.

**Weak Link.** The strongest case for adoption is: rare drift is how disasters start; the unused delta (freeze-candidate + coverage denominator) is real; steal the protocol before a thesis or UTokyo packet ships half-inspected. The fatal flaw is that this is the speculative-win pattern the necessity check exists to kill. No named visual/PDF miss. User already declined steal-one-idea and a coding-repo trial. Front-loading a factory QA stack “just in case” is how this vault got orchestrate-lite and then archived it.

**Recommendation.** Do not install. Do not add a SureForge-shaped skill under another name. If a freeze-candidate miss happens on a real PDF/PPT, patch that one check into the skill that drifted. Until then, close.

### Gemini-3.8-Flash — Do not install; close permanently

**Thesis.** Keep the "do not install" decision. Adopting SureForge into the OrbitOS vault skill catalog introduces heavy, redundant process overhead into a personal knowledge environment that has systematically eliminated bureaucratic machinery, solving no demonstrated problem while actively conflicting with existing vault architecture and design principles.

**Weak Link.** The strongest counter-argument asserts that SureForge's rigid verification architecture—READY/REPAIR/BLOCKED gating, coverage ledgers, and independent review tiers—provides essential procedural insurance against instruction drift, silent assumptions, and premature declarations of task completion.

The fatal flaw in this argument is twofold:

1. **Procedural Redundancy:** OrbitOS already enforces these behavioral standards through lightweight, native mechanisms: `AGENTS.md` Zero Assumptions, the five-question necessity check, harness verification contracts, `/align`, and `/orchestrate-v3` (which explicitly forbids restatement gates and mode forks). SureForge re-imports the exact bureaucratic sprawl (four phases, seven reference files, four templates, multi-method gates) that the user intentionally archived when retiring `orchestrate`, `dispatch`, and `orchestrate-lite`.
2. **Domain and Tooling Mismatch:** OrbitOS is an Obsidian personal vault and daily execution engine, not an enterprise software factory. SureForge's installation conventions conflict with OrbitOS's canonical `.agents/skills/` symlink setup, and its published benchmarks demonstrate only synthetic adherence without proving quality improvements or real token savings. Paying substantial cognitive and token costs to protect against theoretical failure modes that the user has not experienced—and has already formally declined—violates the vault's core design ethos.

**Recommendation.** Uphold the existing "do not install" decision and close the proposal permanently; if a concrete, high-stakes verification deficit ever arises in document processing, incorporate that specific check (such as a frozen coverage denominator) directly into an existing skill rather than importing an external process framework.

### Gemini-3.1-Pro — Reject; overkill for rare drift

*(Agent wrapper yielded null twice; full opinion recovered from the job snapshot.)*

**Thesis.** OrbitOS must uphold its "do not install" decision regarding SureForge. SureForge is an enterprise-grade bureaucratic solution searching for a problem within a personal knowledge vault. OrbitOS already possesses a mature, lean framework (AGENTS.md Zero Assumptions, `/orchestrate-v3`, `/align`) that successfully prevents the systemic AI failures SureForge targets. Adopting a heavy, four-phase instruction set with ledgers, memos, and multi-host installation friction directly contradicts the user’s established preference for lightweight workflows and aggressively violates the system's existing lean constraints.

**Weak Link.** The strongest counter-argument for adoption is that SureForge provides rigorous, formal safeguards—such as coverage ledgers, freeze-candidates, and independent review gates—to completely eliminate edge-case instruction drift and false-completion. The fatal flaw in this argument is a complete failure of proportionality and context. The user explicitly characterized their actual pain point as rare, minor instruction drift, not catastrophic task failure. Deploying an intricate framework requiring seven references, four templates, and multi-tier gating to fix an infrequent annoyance is an egregious over-correction. Furthermore, SureForge's own published evidence only proves adherence on synthetic tasks, offering zero proof of efficacy on the underspecified, real-world knowledge work relevant to OrbitOS. The cognitive and administrative tax of running this system vastly outweighs its theoretical benefits.

**Recommendation.** Permanently reject the SureForge integration for OrbitOS and close the inquiry. If the specific issue of instruction drift during exhaustive document or visual inspection ever escalates from "rare" to a systemic blocker, extract only the "freeze-candidate and coverage-denominator" heuristic from SureForge's methodology. Patch that single concept directly into the existing `/align` skill, leaving the rest of the SureForge architecture behind.

## Stage 2 — Peer Review

### Grok-4.6 (Host) — Peer Review

**Accuracy: Gemini-3.8-Flash > Gemini-3.1-Pro.** 3.8 names live constraints without overclaim: restatement-gate ban, archived orchestrate/dispatch/orchestrate-lite, symlink/canonical path. 3.1 states OrbitOS “successfully prevents” the failures SureForge targets — unproven — and “enterprise-grade” overstates a text skill.

**Insight: Gemini-3.1-Pro > Gemini-3.8-Flash.** Proportionality (rare annoyance vs four-gate stack) is the necessity-check’s actual heart. 3.8’s domain mismatch is correct restatement. 3.1’s `/align` patch target is concrete and wrong.

**Strongest flaw:** Both treat “user already declined” as nearly load-bearing. This council was supposed to stress-test that decline, not cite it as evidence. Secondary: 3.1 parks freeze-candidate in `/align`, which is intent steelman, not verification.

**Opinion change:** No. Same verdict. 3.1’s `/align` target is rejected; Host already said patch the skill that drifted.

FINAL RANKING:
1. Gemini-3.8-Flash
2. Gemini-3.1-Pro

### Gemini-3.8-Flash — Peer Review

**Accuracy:** Grok-4.6 (Host) > Gemini-3.1-Pro. Grok-4.6 grounds its argument in concrete empirical data from SureForge’s own testing—specifically citing the Grok 4.6 two-arm parity and the GLM 5/10 trigger failure rate—alongside precise vault constraints like the `.agents/skills/` symlink convention and `/orchestrate-v3`'s prohibition on mode forks. Gemini-3.1-Pro is factually consistent regarding vault principles and file counts, but relies on generalized characterizations ("synthetic tasks") rather than citing verified benchmark metrics.

**Insight:** Grok-4.6 (Host) > Gemini-3.1-Pro. Grok-4.6 delivers the decisive operational insight that adherence without a quality delta is mere ceremony, correctly diagnosing that an activation failure rate (5/10) renders a verification protocol useless at the point of need. Gemini-3.1-Pro presents a sound proportionality critique, but remains bounded by standard anti-bloat framing without examining activation economics or cognitive spillover into daily workflows.

**Single strongest flaw:** The misattribution of verification scope to `/align`. Gemini-3.1-Pro explicitly recommends patching SureForge's "freeze-candidate and coverage-denominator" heuristic into `/align`, while Grok-4.6 similarly suggests `/align` as the remedy for execution drift. In OrbitOS, `/align` is strictly scoped for pre-decision intent clarification and steelmanning; routing exhaustive artifact-inspection heuristics into a conversational decision-alignment skill fundamentally confuses intent specification with downstream verification.

**Opinion-change check:** Neither response changes my original opinion. Both peers arrive at the identical conclusion ("do not install"). While Grok-4.6 provides valuable supporting data regarding activation failure rates and benchmark parity that reinforces my analysis, neither model introduces evidence that challenges or alters the core verdict.

FINAL RANKING:
1. Grok-4.6 (Host)
2. Gemini-3.1-Pro

### Gemini-3.1-Pro — Peer Review

*(Agent wrapper yielded null; full review recovered from the job snapshot.)*

**Accuracy:** Grok-4.6 (Host) > Gemini-3.8-Flash. Grok-4.6 grounds its argument in highly specific, accurate citations of the underlying SureForge testing data, specifically referencing the GLM activation miss (5/10) and the two-arm test results, whereas Gemini relies on a higher-level generalization about "synthetic adherence."

**Insight:** Grok-4.6 (Host) > Gemini-3.8-Flash. Grok elevates the critique beyond mere procedural mismatch by observing that the strongest case for SureForge—front-loading QA for a hypothetical disaster—is the exact "speculative-win pattern" OrbitOS's necessity check was explicitly designed to kill.

**Strongest flaw:** Both models dilute their strong philosophical and architectural teardowns by citing the `.agents/skills/` symlink conflict as a material barrier. An installation path conflict is a trivial technical hurdle easily solved by a script modification, making it a weak, distracting argument to include when the actual disqualifier is the massive cognitive overhead and architectural violation.

**Opinion change:** Neither response changes my original opinion, as all three of us independently converged on rejecting SureForge due to its heavy, enterprise-tier ceremony fundamentally conflicting with OrbitOS's lean constraints. However, Grok-4.6's precise deconstruction of the "speculative-win" perfectly articulates and sharpens the latent architectural philosophy behind my initial stance.

FINAL RANKING:
1. Grok-4.6 (Host)
2. Gemini-3.8-Flash

**Ranking tally:** Grok-4.6 (Host) first in both peer ballots. Gemini-3.8-Flash first in Host ballot, second in Gemini-3.1-Pro ballot. Gemini-3.1-Pro last in both ballots that included it.

Note on Gemini-3.8-Flash’s strongest-flaw claim: Host did **not** recommend patching `/align`. Host said patch the skill that drifted. That misread docks the 3.8 review, not the Host Stage 1 text.

## Stage 3 — Chairman Synthesis

### Self-Bias Audit

Host was ranked first by both peers and was not the primary target of either “strongest flaw” (3.8’s `/align` charge misfires on Host; 3.1’s symlink ding is a supporting-argument cut). Host may be the synthesis base; the symlink point is dropped as a load-bearing reason.

### Final Answer

Do not install SureForge into OrbitOS. The council did not split on the verdict. It split on which reasons count.

The reasons that survive peer review are: there is no named incident, only rare instruction-drift; SureForge’s own two-arm study showed no quality delta on the tasks they actually ran; Standard/Full reintroduces restatement gates `/orchestrate-v3` forbids; the cognitive tax is paid on work that should stay small. “User already said no” is not an argument — it is the thing being checked — and it is not needed once those four hold.

The reasons that do not survive: install-path/symlink conflict (trivial, 3.1-Pro correctly called it a distraction); “OrbitOS already prevents these failures” (unproven); parking a coverage-denominator in `/align` (category error — `/align` is intent steelman). If a freeze-candidate miss ever happens, it belongs in the skill that shipped the unchecked artifact, not in a new OS and not in `/align`.

Convergence is not extra evidence. Three models restated the same brief. The brief already contained a failed necessity check. What the council adds is the cut between load-bearing and decorative arguments, and the rejection of a SureForge-shaped clone under another name.

### Unresolved Tension

Whether freeze-candidate / coverage-denominator should be written into any existing skill *before* a named visual/PDF miss, or only after one.

### Recommendation

Leave `.agents/skills/` unchanged. Close SureForge. If a real complete-coverage miss happens, patch that one check into the skill that missed.
