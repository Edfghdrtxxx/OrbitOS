# Gap Analysis — /orchestrate Protocol (Revision B)

Analyzed files:
- `.agents/skills/orchestrate/SKILL.md` (Phases 0, 1, 1.5)
- `.agents/skills/orchestrate/references/spec-mode.md` (Phases 2-5)
- `.agents/skills/orchestrate/references/inline-mode.md` (Phases 2-5)
- `.agents/skills/orchestrate/evolution.md` (accumulated lessons)

**Revision notes:** Incorporates reviewer feedback from `review_04.md`. Gap 8 (evolution.md propagation) removed — it contradicted the user's stated architecture for evolution.md as a runtime patch mechanism. Gap 9 (implementer review awareness) merged into Gap 2. Gap 2's recommendation simplified. Remaining gaps renumbered.

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

**Reviewer note:** The existing language is imperative ("dispatch"), not merely descriptive — so the gap is narrower than "the language is purely descriptive." The real issue is the absence of an explicit prohibition on skipping iteration.

**Recommended fix:**
Add a hard-rule statement before or at the start of the revision loop in both modes:

> **The orchestrator MUST re-dispatch for revision when a reviewer returns `needs-revision`.** Accepting unrevised work is not permitted — the only exit paths are a subsequent `approved` verdict or escalation to the user after 4 rounds.

This converts the revision loop from a procedural description into an enforceable obligation.

---

## Gap 2: DECOMPOSE phase lacks review awareness

**Severity:** MEDIUM
**Confidence:** High — verified against both mode files.

**Current state:**
Phase 2 (DECOMPOSE) in both modes requires each sub-task to specify an objective, input context, and output format. Neither mode's decomposition step mentions review at all. The review/iteration protocol only appears in Phase 4, which means the orchestrator decomposes tasks without considering what the reviewer should focus on for each sub-task.

Additionally, Phase 3 (DISPATCH) does not instruct the orchestrator to inform implementers that their output will be reviewed and may require revision. Whether this changes LLM output quality is debatable, but it costs nothing and aligns with the existing dispatch philosophy of conveying "WHAT success looks like" — the existence of a review cycle is part of that picture.

**Recommended fix:**
Add one sentence to the Phase 2 decomposition requirements in both modes, after the existing three bullet points:

> - **Review focus** (optional) — any specific review criteria the reviewer should prioritize for this sub-task (e.g., "verify physics constraints," "check path references"). Omit for straightforward tasks.

Add one sentence to Phase 3's "Core philosophy" paragraph in both modes:

> Inform each implementer that its output will be reviewed by a separate agent and may require revision.

These are lightweight additions: one optional annotation per sub-task, one sentence per dispatch. No iteration budgets, no redundant pairing declarations.

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

The Failure Handling section says "If a sub-agent fails, retry once with adjusted instructions" — but this is generic and doesn't specifically address the scratch directory bootstrapping problem.

**Recommended fix:**
Add a verification step after the first agent completes (or fails):

> After the first dispatched sub-agent completes, verify the scratch directory exists by running `Glob` on `99_System/.scratch/<session-id>/`. If the directory was not created (because the agent failed), include explicit directory creation instructions when retrying or dispatching the next agent.

Alternatively, include the `mkdir` instruction in every agent's dispatch prompt (not just the first), making directory creation idempotent. This is simpler and avoids the need for a dedicated verification step.

---

## Gap 6: No guidance on reviewer dispatch timing relative to worktree merges

**Severity:** MEDIUM
**Confidence:** Medium — this is an inferred gap from the interaction of isolation and review rules; no explicit failure case observed yet. Severity depends on how the Agent tool handles worktree lifecycle, which was not verified.

**Current state:**
Spec-mode says implementers run in worktrees and reviewers get the worktree path to read from. But neither mode specifies **when worktree merges happen** relative to reviews. The implicit assumption is:

1. Implementer runs in worktree, writes report to shared directory
2. Reviewer reads from worktree path + shared directory
3. Review passes → worktree is merged

But what if the orchestrator (or the Agent tool) auto-merges the worktree before the reviewer runs? The reviewer would then be given a worktree path that no longer exists.

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

This is stated but easy to miss in a dispatch prompt. The orchestrator must explicitly instruct each worktree implementer to write its report to the shared path, not its worktree root.

**Recommended fix:**
Add a dispatch checklist item in Phase 3 (both modes):

> **Worktree dispatch checklist:** When dispatching an implementer with `isolation: "worktree"`, the dispatch prompt MUST include: (1) the shared directory path where the implementer writes its report, and (2) explicit instruction that the report goes to the shared directory, not the worktree.

---

## Reviewer-identified gaps not in original analysis

### Gap 8: Phase 0 EVOLVE has no verification step

**Severity:** LOW
**Confidence:** Medium — no failure case observed, but the gap is structurally real.

**Current state:**
Phase 0 says "Read evolution.md... Apply any accumulated lessons as additional constraints." But there is no verification that the orchestrator actually read and applied the lessons. Unlike Phase 5's structural gate (which verifies review pairing via Glob), Phase 0 is entirely honor-system.

**Recommended fix:**
Add a lightweight verification prompt to Phase 0:

> After reading evolution.md, list the lessons being applied before proceeding to Phase 1.

This makes evolution.md application observable without requiring propagation of lessons into the protocol body (which would defeat the purpose of the runtime-patch architecture).

---

### Gap 9: Escalation path "full context" is underspecified

**Severity:** LOW
**Confidence:** High — exact wording verified.

**Current state:**
Both modes say "If still unresolved, escalate to the user with full context." But "full context" is not defined — does the orchestrator paste the review files, list file paths, summarize the dispute? The Phase 4 escalation clause is vaguer than the rest of the protocol's typically precise language.

**Recommended fix:**
Replace "with full context" with a brief enumeration:

> If still unresolved, escalate to the user with: the original sub-task objective, the implementer report file path, all review file paths for this sub-task, and a 1-2 sentence summary of the unresolved disagreement.

---

## Summary Table

| # | Gap | Severity | Category |
|---|-----|----------|----------|
| 1 | Revision loop lacks MUST language — orchestrator could skip iteration | HIGH | Enforcement |
| 2 | DECOMPOSE phase has no review awareness; implementers not told about review cycle | MEDIUM | Planning |
| 3 | Reviewer isolation rule is implicit in inline-mode | MEDIUM | Consistency |
| 4 | Context injection principle absent from inline-mode initial dispatch | LOW | Consistency |
| 5 | Scratch directory creation has no failure recovery | MEDIUM | Robustness |
| 6 | Worktree merge timing vs. reviewer access is unspecified | MEDIUM | Robustness |
| 7 | Worktree report path easy to omit from dispatch prompts | LOW | Robustness |
| 8 | Phase 0 EVOLVE has no verification step (reviewer-identified) | LOW | Enforcement |
| 9 | Escalation path "full context" is underspecified (reviewer-identified) | LOW | Clarity |

### Changes from Revision A

| Change | Rationale |
|--------|-----------|
| **Gap 8 (evolution.md propagation) removed** | Contradicted the user's explicit architecture: evolution.md is a runtime patch loaded in Phase 0, not content to propagate into protocol files |
| **Gap 9 (implementer review awareness) merged into Gap 2** | Overlapped substantially with Gap 2; HIGH severity rested on unverified premise about LLM behavior |
| **Gap 2 severity downgraded HIGH → MEDIUM** | The actual omission is modest (no review-focus annotation, no dispatch sentence); the original fix over-engineered it with iteration budgets and redundant pairing |
| **Gap 2 recommendation simplified** | Replaced four-element "Review plan" with one optional annotation + one dispatch sentence |
| **Two reviewer-identified gaps added** | Phase 0 verification (new Gap 8) and escalation underspecification (new Gap 9) — both LOW severity |
