# Gap Analysis — /orchestrate Protocol

Analyzed files:
- `.agents/skills/orchestrate/SKILL.md` (Phases 0, 1, 1.5)
- `.agents/skills/orchestrate/references/spec-mode.md` (Phases 2-5)
- `.agents/skills/orchestrate/references/inline-mode.md` (Phases 2-5)
- `.agents/skills/orchestrate/evolution.md` (accumulated lessons)

---

## Gap 1: Iteration enforcement language is descriptive, not mandatory

**Severity:** HIGH
**Confidence:** High — exact wording verified against both mode files.

**Current state:**
Both spec-mode and inline-mode Phase 4 use identical revision loop language:

> "If the reviewer returns **needs-revision**, dispatch a new implementer with the review file path as input context"

The word "If" makes iteration conditional on the reviewer's verdict, which is correct. But the problem is structural: nothing in Phase 4 explicitly states that `needs-revision` **compels** the orchestrator to re-dispatch. The language reads as a description of what to do ("here is the procedure"), not as a hard requirement ("you MUST re-dispatch"). Compare this to the pairing rule one paragraph above:

> "Every implementer agent **MUST** be paired with a separate reviewer agent."

The word MUST is absent from the revision loop. An orchestrator could read a `needs-revision` verdict and, under context-window pressure or complexity fatigue, decide to accept the work and move on — nothing in the protocol explicitly forbids this. The max-4-rounds cap and escalation clause exist, but they only apply after iteration has already started; they don't mandate that iteration starts at all.

**Recommended fix:**
Add a hard-rule statement before or at the start of the revision loop in both modes:

> **The orchestrator MUST re-dispatch for revision when a reviewer returns `needs-revision`.** Accepting unrevised work is not permitted — the only exit paths are a subsequent `approved` verdict or escalation to the user after 4 rounds.

This converts the revision loop from a procedural description into an enforceable obligation.

---

## Gap 2: DECOMPOSE phase lacks iteration planning

**Severity:** HIGH
**Confidence:** High — verified against both mode files; user flagged this explicitly.

**Current state:**
Phase 2 (DECOMPOSE) in both modes requires each sub-task to specify:
- A clear **objective** (what it produces)
- **Input context** (file paths, prior outputs, constraints)
- **Output format** (what the sub-agent should return or write)

Neither mode's decomposition step mentions review pairing, iteration structure, or iteration budget. The review/iteration protocol only appears in Phase 4, which means:

1. **The orchestrator decomposes tasks without planning who reviews what.** Review pairings are implicit (Phase 4 says "every implementer MUST be paired") but they are not part of the decomposition artifact. This means the orchestrator has no upfront plan for which sub-tasks need tighter review scrutiny vs. which are straightforward.

2. **Implementers are dispatched without knowing they will be reviewed.** The Phase 3 dispatch philosophy says to transfer the mental model, but nowhere does it say to inform the implementer that their work will be reviewed and potentially revised. An implementer that knows iteration is expected may produce different (better self-checked) work than one that doesn't.

3. **No iteration budget per sub-task.** The protocol has a global max of 4 rounds, but the decomposition doesn't allow the orchestrator to set per-task expectations (e.g., "this task is high-risk, expect 2-3 revision rounds" vs. "this is mechanical, expect 0-1 rounds"). This matters for resource planning and user expectations.

**Recommended fix (both modes):**
Add a fourth required element to each sub-task in the decomposition:

> - **Review plan** — reviewer pairing (which reviewer handles this sub-task), iteration expectation (e.g., "expect 1-2 rounds" for complex work, "expect 0-1 rounds" for mechanical changes), and any specific review criteria the orchestrator wants the reviewer to focus on.

Additionally, add a dispatch-level requirement in Phase 3:

> When dispatching implementers, inform them that their output will be reviewed by a separate agent and may require revision. This sets the expectation for self-checking and thoroughness.

For spec-mode specifically, the review plan should be visible in the task.md `Tasks` section (e.g., annotating each task with its expected review rigor).

---

## Gap 3: Reviewer isolation rule — asymmetric explicitness

**Severity:** MEDIUM
**Confidence:** High — exact wording compared between both mode files.

**Current state:**
**Spec-mode** has an explicit exception callout under the isolation rule:

> "**Exception — reviewers:** Reviewers write review files to the change directory (`openspec/changes/[change-name]/`). They must **NOT** use worktree isolation — their review files need to be on the shared filesystem so downstream implementers can read them."

**Inline-mode** covers this implicitly:

> "Sub-agents that only write to the scratch directory (`99_System/.scratch/`) must **NOT** use worktree isolation — they need to write to the shared filesystem so downstream agents can read their output."

Reviewers in inline-mode write to the scratch directory, so they fall under this rule. However, the connection is implicit — the orchestrator must reason that "reviewers only write to the scratch directory, therefore this rule applies to them." Under cognitive load, an orchestrator might not make this connection and could default to worktree isolation for a reviewer, which would cause the review file to be written to a worktree where nobody can read it.

**Recommended fix:**
Add the same explicit reviewer callout to inline-mode's isolation rule:

> "**Exception — reviewers:** Reviewers write review files to the scratch directory. They must NOT use worktree isolation — their review files need to be on the shared filesystem so downstream implementers can read them."

This costs one sentence and eliminates a potential misinterpretation.

---

## Gap 4: Context injection asymmetry between modes

**Severity:** LOW
**Confidence:** High — verified against both mode files.

**Current state:**
**Spec-mode** has a dedicated paragraph on context injection:

> "**Context injection:** Point sub-agents to the task.md file path so they can read it directly. Only paste task.md content into the prompt when the sub-agent is in an isolated worktree without access to the openspec/ path."

**Inline-mode** has no equivalent paragraph for initial dispatch. The file-path-vs-paste pattern appears only in the revision loop:

> "Prefer file paths over re-serialization, but paste the review content into the dispatch prompt if the revision implementer runs in a worktree without access to the scratch directory."

This asymmetry is arguably **intentional**: inline-mode has no task.md, so there is no central coordination artifact to "point to." However, inline-mode does use file-based handoff for dependent sub-tasks (Phase 3: "Dependent sub-tasks → dispatch sequentially; pass scratch file paths as input context"). The general principle — prefer file paths, paste only when worktree isolation blocks access — applies equally to initial dispatch in inline-mode, not just revisions.

**Recommended fix:**
Add a brief context injection note to inline-mode Phase 3, after the "What downstream agents receive" paragraph:

> **Context injection rule:** When passing scratch files as input to dependent sub-agents, prefer file paths over pasting content. Only paste content into the dispatch prompt when the sub-agent runs in an isolated worktree without access to the scratch directory.

This makes the principle explicit for all dispatch scenarios, not just the revision loop.

---

## Gap 5: Scratch directory creation failure (inline-mode)

**Severity:** MEDIUM
**Confidence:** High — exact wording verified.

**Current state:**
Inline-mode Phase 3 says:

> "**Setup:** The first dispatched sub-agent creates the scratch directory: `99_System/.scratch/<session-id>/`"

If that first agent fails (crashes, times out, or simply forgets to create the directory), all subsequent agents that try to write to the scratch directory will fail or behave unpredictably. There is no fallback, no verification step, and no guidance on what to do.

The Failure Handling section says "If a sub-agent fails, retry once with adjusted instructions" — but this is generic and doesn't specifically address the scratch directory bootstrapping problem. A failed first agent could be retried, but the orchestrator might not realize the directory was never created, especially if the retry also fails and the orchestrator moves on to dispatching the second agent.

**Recommended fix:**
Add a verification step after the first agent completes (or fails):

> After the first dispatched sub-agent completes, verify the scratch directory exists by running `Glob` on `99_System/.scratch/<session-id>/`. If the directory was not created (because the agent failed), the orchestrator must dispatch a minimal setup agent to create it before proceeding with subsequent dispatches.

Alternatively, a simpler approach: have the orchestrator itself create the scratch directory before dispatching any agents. But this conflicts with the "orchestrator must not write" rule. The verification-and-redispatch approach is more consistent with the existing architecture.

---

## Gap 6: No guidance on reviewer dispatch timing relative to worktree merges

**Severity:** MEDIUM
**Confidence:** Medium — this is an inferred gap from the interaction of isolation and review rules; no explicit failure case observed yet.

**Current state:**
Spec-mode says implementers run in worktrees and reviewers get the worktree path to read from. But neither mode specifies **when worktree merges happen** relative to reviews. The implicit assumption is:

1. Implementer runs in worktree, writes report to shared directory
2. Reviewer reads from worktree path + shared directory
3. Review passes → worktree is merged

But what if the orchestrator (or the Agent tool) auto-merges the worktree before the reviewer runs? The reviewer would then be given a worktree path that no longer exists. The protocol doesn't address this timing dependency.

**Recommended fix:**
Add explicit guidance:

> **Worktree lifecycle:** Do not merge or clean up a worktree until all reviewers for that sub-task have completed and the review is `approved`. If the review returns `needs-revision`, the worktree should remain available for the revision implementer (or a new worktree should be created for the revision round).

Note: This may depend on how the Agent tool handles worktree lifecycle — if the tool auto-merges on agent completion, the protocol should document this behavior and instruct reviewers to read from the merged main tree instead.

---

## Gap 7: Implementer report writing location in worktree scenarios is stated but could be missed

**Severity:** LOW
**Confidence:** High — exact wording verified.

**Current state:**
Both modes state that worktree implementers write reports to the **shared** directory (not the worktree):

- Spec-mode: "When the implementer runs in a worktree, it writes the report to the **shared change directory** (not the worktree)"
- Inline-mode: "the scratch file is a report capturing what was changed... The implementer writes this report to the **shared scratch directory**, not the worktree."

This is stated but easy to miss in a dispatch prompt. The orchestrator must explicitly instruct each worktree implementer to write its report to the shared path, not its worktree root. If the orchestrator forgets this instruction, the report ends up in the worktree where the reviewer (who writes to the shared directory) might not find it, or it gets lost on worktree cleanup.

**Recommended fix:**
Add a dispatch checklist item in Phase 3 (both modes):

> **Worktree dispatch checklist:** When dispatching an implementer with `isolation: "worktree"`, the dispatch prompt MUST include: (1) the shared directory path where the implementer writes its report, and (2) explicit instruction that the report goes to the shared directory, not the worktree.

---

## Gap 8: Evolution.md reviewer hallucination lesson not integrated into protocol

**Severity:** MEDIUM
**Confidence:** High — evolution.md lesson verified; protocol text verified as not containing this guidance.

**Current state:**
Evolution.md (2026-03-08) records:

> "Reviewers can hallucinate something non-existent — reviewer prompt should require confidence flagging on factual claims (e.g., 'state uncertainty rather than asserting absence')"

This lesson is in evolution.md, and Phase 0 says "Read evolution.md... Apply any accumulated lessons as additional constraints." However, this relies on the orchestrator reading and correctly applying the lesson every time. The lesson is behavioral (how to prompt reviewers), and if the orchestrator forgets to incorporate it — or interprets "apply" loosely — reviewers continue to hallucinate unchecked.

**Recommended fix:**
Integrate this directly into the Phase 4 reviewer dispatch instructions in both modes:

> When dispatching reviewers, instruct them to flag confidence levels on factual claims. Reviewers must state uncertainty rather than asserting absence (e.g., "I did not find X in the files I checked" rather than "X does not exist").

This makes the lesson a permanent part of the protocol rather than relying on Phase 0 indirection.

---

## Gap 9: No explicit instruction for implementers to know they will be reviewed

**Severity:** HIGH (closely related to Gap 2, but distinct — Gap 2 is about planning, this is about dispatch communication)
**Confidence:** High — verified against both modes' Phase 3.

**Current state:**
Phase 3 in both modes describes the dispatch philosophy ("transfer the mental model") and output conventions, but neither mode instructs the orchestrator to tell implementers that:

1. Their work will be reviewed by a separate agent
2. Revision rounds may follow if the reviewer finds issues
3. They should self-check their work accordingly

The "Core philosophy" section says to convey "WHY this matters and WHAT success looks like" — but the existence of a review cycle is part of "what success looks like." An implementer that knows it will be reviewed is more likely to produce verifiable, well-documented work. An implementer that doesn't know may cut corners that seem invisible from its perspective but are immediately obvious to a reviewer, wasting an iteration round.

**Recommended fix:**
Add to the Phase 3 dispatch instructions in both modes:

> **Iteration awareness:** Inform each implementer that its output will be reviewed by a separate agent and may require revision based on reviewer feedback. This sets the expectation for self-checking, thorough documentation in the report file, and clean, verifiable deliverables.

---

## Summary Table

| # | Gap | Severity | Category |
|---|-----|----------|----------|
| 1 | Revision loop lacks MUST language — orchestrator could skip iteration | HIGH | Enforcement |
| 2 | DECOMPOSE phase has no review/iteration planning | HIGH | Planning |
| 3 | Reviewer isolation rule is implicit in inline-mode | MEDIUM | Consistency |
| 4 | Context injection principle absent from inline-mode initial dispatch | LOW | Consistency |
| 5 | Scratch directory creation has no failure recovery | MEDIUM | Robustness |
| 6 | Worktree merge timing vs. reviewer access is unspecified | MEDIUM | Robustness |
| 7 | Worktree report path easy to omit from dispatch prompts | LOW | Robustness |
| 8 | Evolution.md hallucination lesson not integrated into protocol | MEDIUM | Maintenance |
| 9 | Implementers not informed they will be reviewed | HIGH | Communication |
