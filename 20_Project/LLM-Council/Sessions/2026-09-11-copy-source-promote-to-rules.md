---
type: council-session
date: 2026-09-11
question: Is it necessary to promote preference_copy_source_over_recall into AGENTS.md Rules?
chairman: Grok-4.6
members: [Grok-4.6, Gemini-3.8-Flash, Gemini-3.1-Pro]
thinking: high
quorum: 3/3
status: complete
seating: "Host is Grok-4.6; dispatched Grok seat skipped (collision). User chose 3-member Host + Gemini-3.1-Pro + Gemini-3.8-Flash."
---
# Copy-source promote to Rules

## Question & Brief

**QUESTION:** Is it necessary to promote `preference_copy_source_over_recall` from the OrbitOS AGENTS.md vault-memory trigger index into always-on `## Rules`?

**CONTEXT:**
- AGENTS.md is the always-injected session contract. Vault memories in `99_System/memory/` load on trigger via an index table. They are not host-injected.
- Memory (type: preference, 2026-08-15): if copy-paste is available, copy the source rather than recalling from the context window. Applies to vault filing, on-disk transfer, and quoting when a path/selection exists. Recall is fallback only when no source exists. Origin: a `/deep-research` report was rewritten from context instead of copying `workflows/.../scratch/report.md`.
- Current index trigger: `filing an existing on-disk source into the vault`.
- Prior evaluation: that trigger matches the origin incident, not the rule. Alternative if it stays in the table: `source path/selection exists; about to write from memory`. Promotion was the other fork.
- Current `## Rules` are vault invariants (frontmatter, wikilinks, English, no-raise). Question is necessity of promotion, not wording polish.
- Gemini-3.1-Pro Stage 1/2 and Gemini-3.8-Flash Stage 2 returned harness `yield` null-data warnings; full text used as-is.

## Stage 1 — First Opinions

### Grok-4.6 (Host) — Do not promote; fix the trigger

**Thesis.** Promotion is not necessary. The defect is a mis-aimed trigger, not missing always-on status. `## Rules` holds vault invariants that must fire with no lookup: frontmatter, English, no-raise. Copy-versus-recall is a method preference gated by an observable precondition — a source path or selection exists. That is trigger-shaped. Always-on would spend tokens every session and teach agents that every write is a copy, including first drafts, synthesis, and tutoring notes where recall/composition is the job.

**Weak Link.** The strongest case for promotion is: generation is the default modality; by the time the agent is writing, it will not consult an index to learn how to write; therefore the override must already sit in the preamble. Fatal flaw: that is an argument against this trigger phrasing ("filing into the vault" / "about to write from memory"), not against indexes as such. Other rows already fire on observable tool/task preconditions (omp computer, SKILL.md edit, Chrome region error). Copy-source likewise attaches to an input: an existing file, export, or selection named in the task. If the index cannot fire on that input, this row is broken — the architecture is not. Promoting one preference because its trigger was written as a destination is how `## Rules` becomes a junk drawer. Distilling a one-liner and deleting the memory file also destroys origin, applies-to, and the recall-as-fallback clause, turning a situational method preference into a blunt ban on rewriting from context.

**Recommendation.** Do not promote. Do not delete the memory. Change the index trigger to an environmental input: existing on-disk source, export, or selection about to be written elsewhere.

### Gemini-3.8-Flash — Promotion is not necessary

**Thesis.** Promotion to always-on `## Rules` is not necessary. The perceived necessity stems from a false dichotomy between an un-triggerable internal-state trigger (`about to write from memory`) and prompt bloat. `## Rules` in `AGENTS.md` is strictly reserved for structural vault invariants and harness execution safety. Elevating a procedural file-handling preference into an immutable global rule dilutes session-wide attention and sets a damaging precedent for prompt governance.

**Weak Link.** The strongest counter-argument for promotion claims that because language models have an inherent generative bias to reconstruct text from context rather than execute disk operations, an agent cannot self-intercept its own recall impulse; therefore, the preference must be permanently resident in working memory. The fatal flaw in this argument is confusing *introspective cognitive monitoring* with *objective environmental preconditions*. An agent does not need to detect that it is "about to write from memory." It only needs the trigger index to match observable task inputs: specifically, the existence of an on-disk source artifact (such as a `/scratch/` workflow file, an exported document, or an existing vault note). This environmental trigger fires during initial task decomposition and plan formulation—long before token generation begins. Once matched, the preference is loaded into working memory at the exact moment tool selection (`cp`/`read` versus generative synthesis) is determined. If the trigger table cannot reliably fire on explicit task inputs and artifact presence, the vault-memory architecture itself is broken; if it can, promotion to always-on rules is completely superfluous.

**Recommendation.** Reject promotion to `## Rules`. Retain the preference in `99_System/memory/` and redefine its index entry to trigger on the concrete input artifact rather than the destination or internal state: `handling, transferring, or filing existing on-disk artifacts, workflow outputs, or source files`.

### Gemini-3.1-Pro — Promote; delete the memory

**Thesis.** Promotion is strictly necessary. The requirement to copy source data rather than recall it from the context window is not a situational preference; it is a foundational invariant of data integrity. Relegating a continuous, ubiquitous mechanical operation to a situational trigger guarantees it will be ignored, leading to lossy compression and corrupted knowledge transfers.

**Weak Link.** The strongest counter-argument against promotion is prompt bloat—the notion that `AGENTS.md` must remain relentlessly lean, and that fixing the trigger in the index to something like "source path exists; about to write" is sufficient. The fatal flaw in this argument is a misunderstanding of LLM execution mechanics. Trigger indexes succeed for noun-based, topical knowledge lookups (e.g., interacting with a specific API or project domain). Conversely, "data transfer" is a ubiquitous verb. By the time an agent determines it needs to write a file, its generative stream has already engaged. It will not pause a fundamental output action to query a secondary index to learn *how* to write. Relying on an index for a core behavioral override guarantees failure: the agent's default modality is generation, so it will inevitably rewrite the document from its context window, hallucinating details and dropping precision.

**Recommendation.** Promote the core directive to the always-on `## Rules` immediately, but distill it. Do not inject the origin story or the enumerated three-point application list into the root prompt. Add a single, unmissable bullet to `## Rules`: "Data Transfer: Always use exact file operations (`cp` or Read->Write) for existing sources. NEVER rewrite, recall, or summarize existing documents from context memory." Delete `preference_copy_source_over_recall.md` and its index entry entirely to eliminate redundancy.

## Stage 2 — Peer Review

### Grok-4.6 (Host) — Peer Review

**Accuracy: Gemini-3.8-Flash > Gemini-3.1-Pro.** 3.8 keeps the memory's actual type (preference gated by an existing source) and keeps `## Rules` as invariants. 3.1-Pro upgrades it to a "foundational invariant of data integrity" and ships a distilled ban ("NEVER rewrite, recall, or summarize") that is false for tutoring, paper drafting, and any write whose job *is* recall.

**Insight: Gemini-3.1-Pro > Gemini-3.8-Flash.** 3.1-Pro's noun-index vs ubiquitous-verb claim is the non-obvious mechanics argument. 3.8's environmental-precondition vs introspective-monitoring cut is correct but is the same point the Host already used.

**Strongest flaw:** Gemini-3.1-Pro's package: promote a one-liner *and delete the memory*. That throws away the recall-as-fallback clause and turns a copy-vs-reconstruct preference into a global ban on summarization.

**Opinion change:** No. The verb/stream argument is the right steelman of promotion; it still diagnoses a bad trigger, not a missing Rule. Deleting the file makes the case against promotion stronger, not weaker.

FINAL RANKING:
1. Gemini-3.8-Flash
2. Gemini-3.1-Pro

### Gemini-3.8-Flash — Peer Review

**Accuracy:** Grok-4.6 (Host) > Gemini-3.1-Pro. Grok-4.6 accurately preserves the scope of the rule, correctly recognizing that copy-versus-recall is conditional on the presence of an existing artifact rather than a universal invariant. Gemini-3.1-Pro introduces a severe inaccuracy by defining the distilled rule as an absolute negative constraint ("NEVER rewrite, recall, or summarize"), which is factually incompatible with legitimate synthesis, transformation, and drafting tasks where context recall and summarization are the explicit objectives.

**Insight:** Grok-4.6 (Host) > Gemini-3.1-Pro. While Gemini-3.1-Pro provides a sharp behavioral observation regarding the inertia of generative streams over "verb-based" procedural checks, Grok-4.6 delivers deeper structural insight by analyzing prompt governance: misdiagnosing poor trigger phrasing as an architectural failure creates an unbounded "junk drawer" in `## Rules`, while stripping context and fallback clauses degrades nuanced operational guidance into blunt obstruction.

**Strongest flaw:** Gemini-3.1-Pro's proposed distilled rule—"NEVER rewrite, recall, or summarize existing documents from context memory"—overcorrects into operational paralysis. By conflating verbatim data transfer with general document processing and permanently enforcing it in working memory, it bans standard summarization, note condensation, and synthesis workflows whenever an existing document is in context.

**Opinion change:** Neither response changes my original stance. Grok-4.6 strongly corroborates my analysis that this is an environmental trigger failure rather than a rationale for prompt bloat, while Gemini-3.1-Pro’s extreme distilled rule perfectly demonstrates the exact failure mode I cautioned against: polluting always-on rules with blunt procedural mandates that damage model versatility.

FINAL RANKING:
1. Grok-4.6 (Host)
2. Gemini-3.1-Pro

### Gemini-3.1-Pro — Peer Review

**Accuracy:** Grok-4.6 (Host) > Gemini-3.8-Flash. Grok demonstrates superior practical accuracy by correctly diagnosing how LLMs overfit to global system prompts; it accurately warns that an always-on rule would bleed into legitimate synthesis and drafting tasks where recall is explicitly the job. Gemini’s point about task decomposition is technically accurate but abstracts away the immediate behavioral risks of prompt pollution that Grok grounds perfectly.

**Insight:** Grok-4.6 (Host) > Gemini-3.8-Flash. Grok provides the crucial insight that distilling the rule into the root prompt destroys vital operational nuance—specifically the "recall-as-fallback clause"—turning a targeted file-handling preference into a destructive, context-blind ban on generative synthesis. Gemini’s argument is functionally identical to Grok's but merely dresses it up in academic phrasing ("introspective cognitive monitoring") without unearthing new systemic implications.

**Strongest flaw:** Both models share a fragile assumption that data-transfer operations are strictly mapped during an initial "task decomposition" phase based on upfront inputs. Both completely ignore mid-task execution dynamics: if an agent organically decides to split a file or extract a snippet halfway through a broader objective, it will not retroactively query an index for "environmental preconditions"—it will simply execute using its generative default, bypassing their proposed input-based triggers entirely.

**Opinion change:** Yes. Previous stance advocated for a blunt invariant to guarantee data integrity, but Grok successfully exposed that doing so would globally poison the agent’s core capability to synthesize, draft, or tutor. The realization that the necessary nuance (like the "recall-as-fallback" clause) cannot be distilled into a single `## Rules` bullet without breaking standard generative workflows proves that it must remain a situational, index-gated memory.

FINAL RANKING:
1. Grok-4.6 (Host)
2. Gemini-3.8-Flash

## Stage 3 — Chairman Synthesis

### Self-Bias Audit

Host was first in both peer ballots and was not named as the strongest flaw. Synthesis may use the Host base. Gemini-3.1-Pro's mid-task objection is kept as the unresolved tension, not discarded because it lost Stage 1.

### Final Answer

It is not necessary to promote `preference_copy_source_over_recall` into `## Rules`.

The live defect is the index cell, not the layer. The memory is a method preference gated by an existing source. The current trigger names a destination (`filing … into the vault`) and therefore misses transfer and quote-from-path. That is why the row feels unenforced. Always-on does not fix that. It spends preamble on every session and, if distilled the way Stage-1 Gemini-3.1-Pro proposed (`NEVER rewrite, recall, or summarize`), bans the jobs where recall is the job: tutoring, paper voice, condensation.

Peer review settled the fork. Gemini-3.8-Flash and Grok-4.6 (Host) rejected promotion on the same cut: environmental precondition vs introspective "about to write from memory." Gemini-3.1-Pro ranked both of those opinions above its own Stage-1 promote-and-delete package and reversed: the fallback clause cannot survive distillation into a Rule bullet.

What remains is not "Rules vs index." It is whether a corrected trigger still fires when the source appears *mid-task* rather than in the opening brief. That is an index-design problem (trigger on path/selection whenever a write cites an existing artifact), not a reason to move the preference into the invariant list.

### Unresolved Tension

A path-based trigger still has to fire when the agent decides mid-task to extract or split a file that was not in the original brief.

### Recommendation

Do not promote. Do not delete `99_System/memory/preference_copy_source_over_recall.md`. Change the index Trigger cell to an environmental input (existing on-disk source, export, or selection), not a vault-filing destination.
