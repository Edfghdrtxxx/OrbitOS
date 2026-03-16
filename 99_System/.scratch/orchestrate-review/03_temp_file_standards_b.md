# Audit: Temporary File Standards in Orchestrate Skill (Revised)

Auditor scope: `.agents/skills/orchestrate/SKILL.md`, `references/spec-mode.md`, `references/inline-mode.md`, plus real-world scratch sessions under `99_System/.scratch/`.

Revision notes: This revision consolidates restatements, recalibrates severity ratings, and elevates the `rib-workflow/` content-producer review ambiguity as a distinct high-priority finding per reviewer feedback. Issue count reduced from 26 to 21.

---

## 1. Naming Conventions

### 1.1 Implementer Reports: `<NN>_<description>.md`

**Current state:**
- Spec-mode (line 99): "`<NN>_<description>.md` (where `<NN>` matches the task number, e.g., `01_refactor_auth.md`)"
- Inline-mode (line 28): "`<NN>_<description>.md` (e.g., `01_publications.md`, `02_physics_background.md`)"
- Both modes agree: `<NN>` matches the task number from the decomposition list.

**Issues found:**

1. **Revised implementer report filename convention is undocumented.** Spec-mode describes the revision loop but never specifies the filename for a revised implementer's output. Review files get a letter suffix (`review_01b.md`), but does the revised implementation report overwrite `01_refactor_auth.md` or create `01_refactor_auth_b.md`? Real-world evidence from `imai-review/` shows both `01_evaluation.md` and `01_evaluation_b.md` exist — a `_b` suffix convention emerged organically but is **not codified anywhere** in either protocol file. Additionally, `imai-review/` has files for tasks 01 and 03 but no task 02, showing that `<NN>` numbering can have gaps in practice (task 02 may have been an Explore agent or other non-report-producing dispatch). (Confidence: HIGH — verified by listing `imai-review/` contents.)

2. **`<description>` naming conventions are example-driven, not rule-driven.** No explicit rules exist for allowed characters, separators, or length. In practice, the structural gate glob (`<NN>_*.md`) matches on the `<NN>_` prefix and `.md` suffix regardless of description format, so this is not a functional risk for gate pairing. The only practical concern is filenames with spaces causing shell issues, which is general filesystem hygiene. The existing examples (underscore-separated, lowercase) are likely sufficient for LLM agents to follow by convention. (Confidence: LOW — examples suffice; no demonstrated failure.)

### 1.2 Review Files: `review_<NN>.md`

**Current state:**
- Both modes: `review_<NN>.md` where `<NN>` matches the sub-task number.
- Revision rounds: `review_<NN>b.md`, `review_<NN>c.md`, etc.

No issues found. The initial review has no letter suffix; revisions get `b`, `c`, `d`. This asymmetry is intentional and consistent across both modes. The 4-round max bounds the pattern at `e`.

### 1.3 Cross-Reference: The Structural Gate

**Current state:** Phase 5 in both modes says: "for every implementer report (`<NN>_*.md`) there must be a corresponding review (`review_<NN>.md`)."

**Issue found:**

3. **The structural gate glob pattern does not account for revision files.** If the directory contains `01_evaluation.md`, `01_evaluation_b.md`, `review_01.md`, and `review_01b.md`, a naive glob for `<NN>_*.md` returns two implementer files for task 01. The gate says "for every implementer report there must be a corresponding review" — does `01_evaluation_b.md` need its own review? The answer is implicitly yes (the revision loop dispatches a new reviewer), but the gate description does not specify whether it should:
   - (a) Only check the *latest* implementer file against the *latest* review, or
   - (b) Require every file to be paired.

   Option (a) is what the orchestrator actually needs (it only cares if the final state is approved). Option (b) is mechanically satisfied by the revision loop but is not the real intent. (Confidence: HIGH — the ambiguity is plainly visible in the text.)

---

## 2. Content-Producer Review Requirement — Ambiguous

### 2.1 The Protocol Tension

**This is the strongest finding in this audit.** Inline-mode creates a two-track distinction (lines 30-31):
- **Content producers** (research, drafts, collected data): the scratch file IS the deliverable.
- **Worktree implementers** (mutate existing files): the scratch file is a report.

But Phase 4 (line 54) says: **"Every implementer agent MUST be paired with a separate reviewer agent."** The word "implementer" is doing ambiguous work here — it is unclear whether content producers are "implementers" subject to mandatory review.

### 2.2 Real-World Evidence: `rib-workflow/`

The `rib-workflow/` session contains 7 content-producer files (`01_ion_source.md` through `07_data_analysis.md`) and **zero review files**. The structural gate (inline-mode line 74) requires "for every implementer output (`<NN>_*.md`) there must be a corresponding review (`review_<NN>.md`)." This session would fail the gate. Either:

(a) The structural gate was not enforced (protocol violation), or
(b) The orchestrator interpreted content producers as exempt from review (reasonable but unstated), or
(c) The session was abandoned before reaching Phase 5 (stale session hypothesis).

Regardless of which explanation is correct, **this is direct evidence that the review mandate is ambiguous for content-producer deliverables.** A reasonable orchestrator can read the protocol and conclude either that content producers require review or that they do not — both interpretations are defensible from the text.

### 2.3 Spec-Mode Has No Content-Producer Distinction At All

Spec-mode (line 99) describes every output as a "report." It does not have the content-producer vs worktree-implementer distinction. This omission may be intentional (spec-mode is designed for stateful, multi-session work where real deliverables are file changes committed via worktrees), but the reasoning is implicit, not stated. This is a cross-mode divergence.

(Confidence: HIGH for the ambiguity; the `rib-workflow/` evidence makes it concrete, not theoretical.)

---

## 3. Report vs Deliverable — Remaining Issues

4. **Hybrid content-producer + worktree cases are unaddressed.** What about a sub-agent that both creates new files AND modifies existing files? It would run in a worktree (because it mutates), so the scratch file is a "report" — but some new files it created might also be deliverables. The protocol does not address this. (Confidence: MEDIUM — the worktree isolation rule implies all mutations go through worktrees, so the merge step handles it, but the report/deliverable language is still ambiguous.)

---

## 4. Directory Lifecycle

### 4.1 Setup / Creation

**Spec-mode:**
- Phase 2, step 4: "dispatch a sub-agent to write the task.md to `openspec/changes/[change-name]/task.md`."
- The sub-agent implicitly creates the directory by writing `task.md`. There is no explicit "create directory" step.

**Inline-mode:**
- Line 26: "The first dispatched sub-agent creates the scratch directory: `99_System/.scratch/<session-id>/`."
- Explicit instruction to include this in the first agent's dispatch prompt.

**Issues found:**

5. **Spec-mode has no explicit directory creation step.** It relies on the task.md writer sub-agent to create the directory as a side effect of `Write` (which creates parent directories). If the sub-agent uses `Edit`, it would fail. This assumption is not stated. (Confidence: MEDIUM — the Write tool creates directories automatically and is the natural choice, so the practical risk is low.)

6. **Neither mode validates directory creation succeeded before proceeding.** The orchestrator should Glob the directory after the first sub-agent completes to confirm it was created. This is hinted at by the tiered access priority ("Glob first") but not explicitly required at the setup stage. (Confidence: MEDIUM — the gap exists but the Write tool makes failure unlikely.)

7. **Neither mode addresses creation failure or directory collision.** What if the path already exists from a prior session? Inline-mode is vulnerable because session IDs are manually chosen and could collide. Spec-mode's `[change-name]` has the same risk. No collision detection or mitigation is specified. (Confidence: MEDIUM — session IDs are descriptive of the task, and the three observed sessions all have naturally unique names, so collision is plausible but unlikely in practice.)

### 4.2 During Execution: Mutability Rules

8. **No immutability rules for completed files.** Once an implementer writes `01_evaluation.md`, can a subsequent sub-agent modify it? The reviewer is explicitly read-only w.r.t. implementation files, but nothing prevents a *second implementer* from editing a *first implementer's* output. The revision loop convention (writing `_b` suffix files rather than overwriting) implies the original should not be modified, but this is an inference, not a stated rule. (Confidence: MEDIUM — implied by naming pattern but not explicit.)

### 4.3 Teardown / Cleanup

**Spec-mode:** Archive to `openspec/changes/archive/YYYY-MM-DD-[name]/`, done manually by user.
**Inline-mode:** "can be deleted" with no archive path.

**Issues found:**

9. **Inline-mode has no archive convention.** If the user wants to preserve inline-mode scratch files for reference, there is no standard location. This is arguably intentional (inline-mode is ephemeral by design), but the asymmetry should be acknowledged. (Confidence: LOW — the text is explicit that cleanup = deletion.)

10. **Stale session detection is absent.** If a session is abandoned mid-execution, the scratch directory persists indefinitely. There is no mechanism to detect or flag stale sessions. The `99_System/.scratch/` directory could accumulate orphaned sessions over time. The `rib-workflow/` session (7 files, zero reviews) may be an example of this. (Confidence: MEDIUM — observed in practice.)

---

## 5. Session ID / Change-Name Conventions

**Current state (inline-mode, line 26):** "Use a short, descriptive session ID like `imai-research` or `tpc-wiki`."

**Issues found:**

11. **No uniqueness guarantee or collision handling.** If two orchestrate sessions use the same ID, files from the second would land in the same directory. No collision detection is specified. Applies symmetrically to spec-mode's `[change-name]`. (Confidence: MEDIUM — plausible but unlikely given descriptive naming.)

12. **Who chooses the session ID is ambiguous.** The protocol implies the orchestrator chooses it, but this is not explicit. If the orchestrator chooses, it should follow a deterministic convention; if the user chooses, the orchestrator should validate it. (Confidence: LOW — the text implies the orchestrator chooses.)

---

## 6. Cross-Mode Consistency

| Convention | Spec-Mode | Inline-Mode | Consistent? |
|---|---|---|---|
| Implementer file naming | `<NN>_<description>.md` | `<NN>_<description>.md` | YES |
| Review file naming | `review_<NN>.md` | `review_<NN>.md` | YES |
| Revision review suffix | `review_<NN>b.md` | `review_<NN>b.md` | YES |
| Revision implementer suffix | Not specified | Not specified (but `_b` used in practice) | CONSISTENT GAP |
| Structural gate glob | `<NN>_*.md` vs `review_<NN>.md` | `<NN>_*.md` vs `review_<NN>.md` | YES |
| Content-producer distinction | Not present | Present | NO — divergence |
| Directory creation | Implicit (sub-agent side effect) | Explicit instruction | NO — divergence |
| Teardown | Archive to `archive/YYYY-MM-DD-[name]/` | Delete manually | INTENTIONAL divergence |
| Max revision rounds | 4 | 4 | YES |

**Issues found:**

13. **Directory creation approaches diverge unnecessarily.** Spec-mode's implicit creation is less robust than inline-mode's explicit instruction. The more explicit approach should be standardized. (Confidence: MEDIUM — functional today but spec-mode's approach is fragile.)

---

## 7. File Format Standards

### 7.1 Review Files — Well Defined

Both modes specify: "Verdict line (`approved` or `needs-revision`), then a Findings section with specific, actionable items (file paths, line numbers, what's wrong, why it matters)."

Clear and sufficient. No issues.

### 7.2 Implementer Reports — Underspecified

Both modes use identical prose: "The report captures what was changed, where (file paths), and any decisions made." Neither provides a structured format template.

**Issues found:**

14. **No structured format for implementer reports.** Reviews have a clear format (verdict line + findings). Reports have no equivalent structure. The prose description is functional — `imai-review/` produced reports that were successfully reviewed — but a minimal status line (e.g., `Status: complete | partial | failed`) at the top would give the orchestrator a machine-parseable signal without requiring a full template. (Confidence: MEDIUM — the prose description works in practice but a status line would add cheap resilience.)

---

## Summary of Issues by Severity

### High Priority (ambiguity that could cause incorrect routing or gate failures)

| # | Issue | Affected Mode |
|---|---|---|
| 1 | Revised implementer report filename convention undocumented | Both |
| 3 | Structural gate does not account for revision files | Both |
| 2.1-2.3 | Content-producer review requirement is ambiguous — `rib-workflow/` demonstrates the gap | Inline (primarily); cross-mode divergence |

### Medium Priority (underspecification with low practical risk)

| # | Issue | Affected Mode |
|---|---|---|
| 5 | Spec-mode directory creation is implicit, not explicit | Spec |
| 6 | No validation that directory was created successfully | Both |
| 7 | Session ID / change-name collision not handled | Both |
| 8 | No immutability rules for completed intermediate files | Both |
| 10 | Stale session detection absent | Inline |
| 13 | Directory creation approach diverges between modes | Cross-mode |
| 14 | No structured format / status line for implementer reports | Both |

### Low Priority (nice-to-have or already handled by convention)

| # | Issue | Affected Mode |
|---|---|---|
| 2 | `<description>` naming is example-driven, not rule-driven | Both |
| 4 | Hybrid content-producer + worktree case unaddressed | Inline |
| 9 | Inline-mode has no archive convention | Inline |
| 11 | No uniqueness guarantee for session IDs / change-names | Both |
| 12 | Who chooses the session ID is ambiguous | Inline |

---

## Recommended Improvements

### 1. Codify Revised Implementer Report Naming (High Priority)
Add to both mode files: "When a revision is needed, the revised implementer writes `<NN>_<description>_b.md` (round 2), `<NN>_<description>_c.md` (round 3), etc., mirroring the review suffix convention. The original report is not modified."

### 2. Clarify the Structural Gate for Revisions (High Priority)
Amend the gate description: "When revision rounds occurred, verify that the *latest* revision file (`<NN>_<description>_<X>.md`) has a corresponding approved review (`review_<NN><X>.md`). Earlier rounds may have `needs-revision` verdicts — only the final round must be `approved`."

### 3. Resolve the Content-Producer Review Ambiguity (High Priority)
Add an explicit statement to inline-mode Phase 4 clarifying whether content-producer sub-tasks require review. Two viable options:

- **Option A (exempt):** "Content-producer sub-tasks (where the scratch file IS the deliverable) are exempt from mandatory review. The structural gate only checks worktree-implementer reports against reviews." This is lightweight and matches the `rib-workflow/` precedent.
- **Option B (required):** "All sub-tasks — including content producers — require review. Content-producer reviews assess completeness and accuracy of the deliverable itself." This is more rigorous but adds review overhead to research/data-gathering tasks.

Whichever option is chosen, spec-mode should either adopt the content-producer distinction or explicitly state that all spec-mode outputs are reports subject to review.

### 4. Add Collision Check for Session IDs / Change Names (Medium Priority)
Add to both modes: "Before dispatching the first sub-agent, Glob the parent directory to check if the session ID / change name already exists. If it does, append a numeric suffix (e.g., `imai-research-2`)."

### 5. Standardize Directory Creation Across Modes (Medium Priority)
Adopt inline-mode's explicit approach for spec-mode: "Include directory creation as an explicit instruction in the first sub-agent's dispatch prompt." Also add: "After the first sub-agent returns, Glob the session directory to confirm it was created."

### 6. Add a Status Line to Implementer Reports (Low Priority)
Recommend (not mandate) a status line at the top of implementer reports: `Status: complete | partial | failed`. This gives the orchestrator a quick parseable signal without requiring a full report template. The rest of the report format remains free-form per the existing prose description.
