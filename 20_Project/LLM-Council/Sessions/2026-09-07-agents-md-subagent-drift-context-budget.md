---
type: council-session
date: 2026-09-07
question: How should OrbitOS AGENTS.md be structured so subagents neither drift from vault rules nor burn context?
chairman: Claude-Fable-5.1
members: [Claude-Fable-5.1, Grok-4.6, Gemini-3.8-Flash]
thinking: high
quorum: 3/3
status: complete
---
# AGENTS.md structure for subagent drift and context budget

## Question & Brief

**QUESTION:** How should OrbitOS's always-loaded `AGENTS.md` be structured so that subagents spawned from a session neither drift from vault rules nor burn context on things they don't need?

**CONTEXT:**
- `AGENTS.md` today: 86 lines, ~900 words (~1.8k tokens). Sections: folder structure map, skill-file paths, vault root, 5-location memory-resolution order with fallback table, templates list, user context (physics MSc, ML focus, Japan immigration pathway), related repos, formatting rules, and "Principles of Paramount Importance" (Zero Assumptions, No Silent Assumptions, trigger-based Necessity Check that loads another file).
- 40 skills in `.agents/skills/`; every skill's description is also always-loaded in the system prompt, several as long paragraphs. Skill bodies up to 634 lines load on trigger only.
- Multi-host single file: Claude Code, Codex, Grok Build, omp. Subagents (task tool) start blank, receive `AGENTS.md` as repo rules plus the parent's task brief, no conversation history, no user to ask.
- Observed problem: subagents drift from vault rules and burn context.
- Prior frame (Kun Chen, "Your AGENTS.md is a Neural Net"): user-level file = handwritten preferences; project-level file = weights under a fixed token budget (e.g. 5k), trained by reading transcripts (`backpass`): batch evidence, <=5 edits per pass, rules mattering in >=20% of sessions or safety-critical stay, narrow-with-trigger -> skill, narrow-no-trigger -> delete. Alternative shown: firstmate's 600-line always-loaded operational contract that names a script/skill as owner of every detail.
- Constraints: discussion only; no rewrite authorized; user has not chosen among compact-now, backpass training, or firstmate-style briefs.

## Stage 1 — First Opinions

### Claude-Fable-5.1 (Host) — Cost is induced actions, not tokens; split by audience

**Thesis.** The file is not too big — 1.8k tokens is a third of Kun's budget, and the 40 always-loaded skill descriptions already outweigh it. Drift and burn come from what the file *makes* an agent do, not what it costs to read. Three lines are the culprits: the memory-resolution order (5 locations to search before anything), the Necessity Check (loads another file, then mandates halting), and "Zero Assumptions -> halt and ask" — which a subagent cannot do; it has no user, so it either stalls or improvises, and improvisation is what the user reads as drift. The file is written for one audience (an interactive Claude session with a human present) and served to a second (a blank subagent with a brief and no human). Same text, opposite failure modes.

**Weak Link.** The counter-argument is Kun's: fix the file by training it on transcripts, and the budget handles bloat. Its flaw here is that backpass optimizes for session-level loss and cannot distinguish a rule that helped the parent from one that derailed a child; subagent transcripts are nested inside parent transcripts and are the minority signal. Training will trim the folder map and templates list (low relevance) while keeping the halt-and-ask rules (high relevance for the interactive parent) — the exact rules that break subagents. Budget is the wrong axis; audience is.

**Recommendation.** Keep `AGENTS.md` as the human-facing contract but mark every rule with who it binds. Concretely: a short "Subagents" section that says which rules are suspended when no user is reachable (Zero Assumptions -> "state the assumption in your result and proceed"; Necessity Check -> parent's job; memory resolution -> parent's job, pass resolved facts in the brief). The parent owns interpretation; the child receives resolved context. Measure before rewriting: count, over the next ten task dispatches, how many child outputs contain "I would ask the user" or a memory-file search — that is the loss signal for this specific problem.

### Grok-4.6 — Spawn-safe contract; split audience before training

**Thesis.** AGENTS.md must be a subagent-safe operational contract, not a conversational handbook. Subagents start blank, have no user, and receive only this file plus a task brief. The current document is written for a top-level chat agent: halt-and-ask, user biography, related repos, template catalogs, and a five-question Necessity Check. Those rules are either false or unused for a spawn. That mismatch is why they drift and why they burn tokens. Keep only invariants that remain true with no user present: vault folder law, English, wikilinks, no blank line after frontmatter, the five-location memory resolution table, and one loading rule (skill bodies on trigger only). Name the owner of every other detail (skill path or parent brief) instead of inlining it. Conversational principles and user context belong in the parent session, injected when relevant. Firstmate's owner-of-detail model is the right shape; Kun's token budget and 20%-or-safety gate are the right retention test. Compact-now without changing audience just shrinks a document subagents must violate.

**Weak Link.** The strongest counter-argument is: keep a rich always-loaded file so every spawn inherits full vault culture; compacting is how principles die and drift starts. Fatal flaw: the current 86-line file already fails at preventing drift. Length is not the cause. Audience-mismatch is. A subagent cannot execute "halt and ask the user." It freezes, invents a user, or silently ignores the rule. A longer document that must be violated teaches violation. Culture that cannot be acted on is not culture; it is noise competing with the task brief. Skill descriptions are already always-loaded, so repeating skill paths in AGENTS.md is a second tax on the same facts.

**Recommendation.** Do not start with backpass. First split the audience. Draft a spawn-invariant AGENTS.md of roughly 400–600 tokens: folder IDs as law, formatting invariants, memory-resolution table, "no user / fail closed / do not invent," and pointers to skill owners. Move Zero Assumptions, Necessity Check, templates, biography, and related repos out of the always-loaded path into skills or the parent brief. Only after that contract is true for a blank spawn, run backpass with a 5k budget and the 20%-or-safety gate. Training a file that currently contains rules false for subagents will fit those false rules more tightly.

### Gemini-3.8-Flash — Strip to 300-token invariant contract; abort on ambiguity

**Thesis.** `AGENTS.md` must be stripped down to an **Invariant Vault Contract** (under 40 lines / ~300 tokens) that defines only physical constraints: folder routing, Obsidian formatting syntax, and blast-radius write guardrails. All interactive governance — user biography, immigration priorities, memory resolution hierarchies, and "ask the user" halt conditions — must be evicted to the root session's interactive skills. Headless subagents drift not from an absence of context, but from context dilution: burying critical syntactic invariants inside personal lore and conversational protocols that subagents have neither the user channel nor the cognitive headroom to execute.

**Weak Link.** The strongest counter-argument — the "Unified Full-Context Contract" (e.g., Firstmate or 5k-token transcript-trained models) — holds that stripping `AGENTS.md` starves subagents of the user's intent, producing semantically disconnected work unless every child agent shares the complete personal and operational model. The fatal flaw is the **conversational mismatch**: subagents run open-loop `task` calls with no user to query. Mandating rules like "Zero Assumptions: halt and ask the user" inside a headless worker is an architectural contradiction. It forces the model to either hallucinate interaction, deadlock, or treat the entire file as optional guidance. High-level intent belongs strictly in the parent's scoped task dispatch prompt; dumping static personal context into an always-loaded file wastes attention heads on every generated token without preventing formatting drift.

**Recommendation.** Immediately prune `AGENTS.md` into four mechanical, non-conversational tables: (1) Destination Matrix — write targets by folder; (2) Formatting Invariants — wikilink syntax, no blank line after frontmatter, English only; (3) Safety Boundaries — no deletions or out-of-scope edits; (4) Headless Failure Protocol — "You have no user. If input is incomplete or conflicting, abort immediately and return a structured error payload to the parent agent." Move user biography, career priorities, and memory lookup trees into a root-only skill (e.g., `.agents/skills/vault-orchestrator/SKILL.md`), letting the parent own alignment while workers enforce integrity.

## Stage 2 — Peer Review

### Claude-Fable-5.1 (Host) — Peer Review

**Accuracy: Grok-4.6 > Gemini-3.8-Flash.** Grok's claims survive contact with the file: it correctly notes skill paths are double-taxed (descriptions already always-loaded) and correctly sequences "make the contract true, then train it" — backpass fitting false rules tighter is a real failure mode. Gemini has two factual problems: "under 40 lines / ~300 tokens" cannot hold folder routing, formatting invariants, safety boundaries, *and* a failure protocol — the existing folder map alone is ~350 tokens; and "abort immediately and return a structured error payload" is the wrong fail-closed shape for a knowledge vault: it recreates the halt-and-ask deadlock one level up, and most "incomplete input" in this vault (which folder, which frontmatter field) is resolvable from the folder law it just wrote down.

**Insight: Gemini-3.8-Flash > Grok-4.6.** Gemini's "context dilution" framing — invariants buried in lore lose weight — is the sharper mechanism for why *formatting* drift happens, and the four-table shape is a concrete, checkable artifact. Grok's insight is mostly a well-argued restatement of the shared diagnosis plus the sound sequencing point.

**Strongest flaw across both:** Both keep the 5-location memory-resolution table (Grok explicitly; Gemini evicts it but only to a root skill) without asking what a subagent does with it. A memory table in a spawn's context is an invitation to go search five directories before starting — that is the "burn context" complaint verbatim. Memory resolution is parent work; the child should receive resolved facts in the brief. Grok's retention test ("true with no user present") should have caught this: the table is *true* but not *actionable* for a spawn.

**Opinion change:** Partially. Both convinced me a pure "Subagents: these rules are suspended" appendix is too weak — it leaves the dilution in place and asks a blank spawn to parse exemptions. I now think the file should be restructured, not annotated. I hold my measurement point: nobody, including me, has evidence which rule causes the drift; ten dispatches of observation costs nothing and prevents rewriting the wrong section. I reject Gemini's abort-on-ambiguity.

FINAL RANKING:
1. Grok-4.6
2. Gemini-3.8-Flash

### Grok-4.6 — Peer Review

**Accuracy: Claude-Fable-5.1 > Gemini-3.8-Flash.** Claude's causal diagnosis is correct: 1.8k tokens is not the burn (40 always-loaded skill descriptions already outweigh it), and the failure mode is halt-and-ask / Necessity Check / five-location search under a blank child with no user. Gemini's 40-line/~300-token target, "attention heads on every generated token," and "context dilution burying syntactic invariants" are unevidenced; formatting drift is not the observed problem.

**Insight: Claude-Fable-5.1 > Gemini-3.8-Flash.** The non-obvious point is that backpass optimizes session-level loss and will keep halt-and-ask (high relevance for the interactive parent) while trimming folder maps — exactly the rules that break children — because nested subagent transcripts are the minority signal. Gemini's open-loop vs halt-and-ask contradiction is real but already in both briefs; strip-to-four-tables is compression, not a new mechanism.

**Strongest flaw:** Neither specifies the parent-brief contract that must replace the rules they suspend. Claude says "parent owns interpretation; pass resolved facts" then stalls on a 10-dispatch measurement of "I would ask the user," delaying a known architectural bug. Gemini's Headless Failure Protocol ("abort immediately, structured error") relocates deadlock to the parent: incomplete briefs are the common case, so the tree thrashes instead of working. Both also leave the 40 always-loaded skill descriptions — the larger tax Claude himself quantified — untouched.

**Opinion change:** Neither converts the original stance. AGENTS.md should still be a spawn-invariant operational contract (~400–600 tokens), not a dual-audience annotated handbook (Claude) and not a 300-token strip-and-abort (Gemini). Dual binding still loads rules the child must violate; abort-on-incomplete is fail-closed in the wrong place. One update only: for missing user intent, Claude's "state the assumption in the result and proceed" is better than original "fail closed / do not invent"; fail closed stays for write-scope and safety. Memory-resolution remains parent-owned at spawn time, with resolved facts in the brief — not evicted so the child cannot route a write. Backpass still comes after that cut, with the 20%-or-safety gate.

FINAL RANKING:
1. Claude-Fable-5.1
2. Gemini-3.8-Flash

### Gemini-3.8-Flash — Peer Review

*(Agent yielded with a harness null-data warning but delivered the full review; content used as-is.)*

**Accuracy: Claude-Fable-5.1 > Grok-4.6.** Claude correctly identifies that context burn is driven by the *mandated downstream actions* (the 5-location memory search and the Necessity Check) rather than static file size. Grok misdiagnoses this by advocating an invariant contract that explicitly preserves the 5-location memory resolution table — a protocol that directly commands headless subagents to conduct multi-file exploratory searches and burn tokens.

**Insight: Claude-Fable-5.1 > Grok-4.6.** Claude's critique of transcript training is non-obvious: backpass evaluates session-level loss, treating nested subagent transcripts as minority noise and inadvertently optimizing to preserve the parent's conversational rules. Grok's "a document that must be violated teaches violation" is a sharp aphorism but mechanically standard prompt hygiene.

**Strongest flaw:** Both attempt a half-measure on subagent autonomy instead of enforcing a pure zero-search invariant boundary. Grok preserves the 5-location memory hierarchy inside the base contract; Claude keeps a unified document with conditional role-suspension tags. Negative constraints and conditional role exemptions are notoriously leaky for blank LLM spawns, which routinely fail to ignore rules physically present in their prompt.

**Opinion change:** Neither changes my original opinion; they validate it while demonstrating the hazards of compromising on it. Grok confirms conversational directives must be physically evicted but errs in retaining memory search hierarchies. Claude correctly spots that memory searches and halt-and-ask trigger drift and burn, but fails to see that conditional tagging does not prevent model fixation. AGENTS.md must remain an uncompromising, zero-search, sub-300-token structural invariant, with all memory resolution and user interaction handled exclusively by the root session before dispatch.

FINAL RANKING:
1. Claude-Fable-5.1
2. Grok-4.6

**Ranking tally:** Claude-Fable-5.1 first in both peer ballots; Grok-4.6 first in Host ballot, second in Gemini's; Gemini-3.8-Flash last in both ballots that included it.

## Stage 3 — Chairman Synthesis

### Self-Bias Audit

Host was ranked first by both peers but was named inside the "strongest flaw" by both (Grok: the 10-dispatch measurement stalls a known bug; Gemini: a suspension section is a leaky half-measure). The Host *diagnosis* is the synthesis base because it won on accuracy and insight in every ballot; the Host *remedy* (annotate-and-measure) is dropped, because the peers' objection to it is correct and the Host conceded it in Stage 2.

### Final Answer

The problem is not the size of `AGENTS.md`. It is that one file is serving two audiences with opposite failure modes. An interactive session with a human present benefits from "halt and ask," a five-location memory search, and a Necessity Check; a blank subagent that receives the same file with a brief and no human cannot execute any of those, so it stalls, invents a user, or silently ignores the rule — and each of those is what you observe as drift, while the memory-search mandate and the Necessity Check's file load are the context burn. Compacting the file without changing its audience shrinks a document the child must still violate; training it with backpass first fits those rules tighter, because backpass scores session-level loss and the interactive parent is the majority signal.

So the structure follows from a single principle: **everything in the always-loaded file must be true and actionable for a blank spawn with no user.** That yields three layers.

1. **`AGENTS.md` — spawn-invariant contract, ~400–600 tokens.** Folder law (which folder receives which kind of note), formatting invariants (wikilinks, no blank line after frontmatter, English), write-scope and safety boundaries (no deletion or out-of-scope edits), and one headless protocol: *no user is reachable; for missing intent, state the assumption in your result and proceed; for write-scope or safety ambiguity, stop and report.* Every other detail names its owner — a skill path or "the parent brief" — instead of being inlined. Skill paths themselves are not repeated; the 40 descriptions are already loaded.

2. **Root-session skill (interactive governance).** Zero Assumptions, No Silent Assumptions, the Necessity Check, the five-location memory-resolution order and its fallback table, user biography and the Japan priority, related repos, templates catalog. These are true only when a human is present, so they load only in the session that has one.

3. **The parent brief — the contract nobody wrote down.** The parent resolves memory, applies the Necessity Check, reads the Japan notes, and passes *resolved facts* to the child: target file, frontmatter values, links to make, what is out of scope. The child must never be asked to search for context the parent already had. Grok is right that this contract is the real gap: eviction from `AGENTS.md` without a brief template moves the failure, not fixes it.

Gemini's abort-on-ambiguity is rejected: incomplete briefs are the common case in a knowledge vault, and aborting recreates the halt-and-ask deadlock one level up. Gemini's 300-token target is rejected as arithmetically infeasible for the folder law plus invariants. Kun's backpass loop is the right maintenance regime *after* the cut — with the 20%-or-safety retention gate and the 5k budget — and its evidence should be scoped to child transcripts, not sessions, or it will re-learn the parent's rules.

Cost check against the original ask: only ~1.8k tokens are at stake in `AGENTS.md`, versus a larger always-loaded tax in the 40 skill descriptions. The cut fixes drift; if raw context burn remains the complaint after the cut, the descriptions are the next target, not the file.

### Unresolved Tension

Fail-closed vs. proceed-with-stated-assumption for a headless child: proceeding risks confident wrong writes into the vault; stopping risks the tree thrashing on the common case of an underspecified brief — the council split the line at "intent -> proceed, write-scope -> stop," and that boundary is a judgment call, not a derivation.

### Recommendation

Before any rewrite, draft the parent-brief template (target path, frontmatter values, wikilinks, out-of-scope list, resolved user facts) and dispatch three real tasks with it against the *current* `AGENTS.md`; if drift disappears with the brief alone, the file cut is a cleanup, not a fix, and its scope should be set by what the brief still fails to cover.

## Post-Council Finding & Correction

**Date:** 2026-09-07 (Post-deliberation audit)  
**Trigger:** User questioned whether the proposed stratification is over-engineering, noting that subagent failures matching the hypothesized mechanism had never been observed.

### Empirical Audit (Session Transcripts)
Inspection of the actual session JSONL logs (`~/.omp/agent/sessions/--Users-Reid Hu-OrbitOS--/2026-09-07T02-51-01-831Z_01a079c6-b947-74c5-91b2-43241b10431b/`) for all four spawned council subagents (`GrokStage1`, `GeminiStage1`, `GrokStage2`, `GeminiStage2`) revealed:

1. **`AGENTS.md` is NOT injected into subagents:**
   - In this harness (omp `task` tool), subagents start with system instructions, skill catalogs, and tool specs, but **no** `<repo-rules>` block.
   - Exact checks: `Zero Assumptions`, `OrbitOS`, `10_Daily`, `Necessity` were completely absent (`-1`) in subagent system prompts.
   - The core council thesis—that subagents stall, improvise, or burn context trying to resolve `AGENTS.md` rules like "halt and ask" or memory tables—was founded on an unverified, false factual premise supplied in the brief.

2. **Context breakdown:**
   - Total subagent system prompt: ~33.1k characters (~8k tokens).
   - Always-loaded skill descriptions: 13.4k characters (~40% of prompt, ≈3.3k tokens across 40 skills).
   - `AGENTS.md`: 0 tokens in subagent prompt.
   - Subagent context burn is driven by the global skill catalog and harness scaffolding, not `AGENTS.md`.

3. **Subagent behavior:**
   - No subagent attempted memory file searches, file reads, or interactive halts. Tool calls were exclusively `yield`.
   - The only observed failure was harness/protocol-level (GrokStage2 thinking loops around terminal yield format), entirely unrelated to repo rules.

### Necessity Check Verdict (`feedback_necessity_check.md`)
- **Q1 (Problem exists?):** No. The failure mode does not occur in this harness.
- **Q2 (Pattern active?):** Yes for interactive parent; inert for headless subagents.
- **Q3 (Concrete gap?):** None demonstrated.
- **Q4 (Cognitive load?):** High (splitting into 3 layers: spawn contract, root skill, parent brief).
- **Q5 (Concrete use-case?):** None statable.
- **Verdict:** Fails 3 of 5 checks.

### Final Corrected Decision
**Leave `AGENTS.md` exactly as is.**  
The proposed 3-layer architecture is rejected as speculative over-engineering. `AGENTS.md` functions correctly for its sole actual consumer (the interactive parent session). If context burn per spawn ever becomes an issue requiring optimization, the evidence points to pruning or deferring the always-loaded skill descriptions (40 skills = ~3.3k tokens), not restructuring `AGENTS.md`.
