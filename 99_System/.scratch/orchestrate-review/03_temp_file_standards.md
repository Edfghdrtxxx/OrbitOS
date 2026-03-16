# Audit: Temporary File Standards in Orchestrate Skill

Auditor scope: `.agents/skills/orchestrate/SKILL.md`, `references/spec-mode.md`, `references/inline-mode.md`, plus real-world scratch sessions under `99_System/.scratch/`.

---

## 1. Naming Conventions

### 1.1 Implementer Reports: `<NN>_<description>.md`

**Current state:**
- Spec-mode (line 99): "`<NN>_<description>.md` (where `<NN>` matches the task number, e.g., `01_refactor_auth.md`)"
- Inline-mode (line 28): "`<NN>_<description>.md` (e.g., `01_publications.md`, `02_physics_background.md`)"
- Both modes agree: `<NN>` matches the task number from the decomposition list.

**Issues found:**

1. **`<NN>` semantics during revisions — ambiguous.** Spec-mode says a revised implementer report goes through the revision loop but never specifies the filename for the *revised* implementer's output. The review file gets a suffix (`review_01b.md`), but does the revised implementation report overwrite `01_refactor_auth.md` or create `01_refactor_auth_b.md`? Real-world evidence from `imai-review/` shows `01_evaluation.md` and `01_evaluation_b.md` — suggesting a `_b` suffix convention emerged organically, but this is **not codified anywhere** in either protocol file. (Confidence: HIGH — verified by listing `imai-review/` contents.)

2. **`<description>` constraints are unspecified.** No rules exist for:
   - Allowed characters (spaces? uppercase? special chars?)
   - Maximum length
   - Whether it must match a task name verbatim or can be abbreviated
   - Separator convention (underscore implied by examples, but not stated as a rule)

   This matters because the structural gate in Phase 5 uses glob matching (`<NN>_*.md`) to pair implementer reports with reviews. Inconsistent naming (e.g., `01-refactor-auth.md` with hyphens, or `01 refactor auth.md` with spaces) would break the pairing check. (Confidence: HIGH — the glob pattern is explicit in both mode files.)

3. **Zero-padding width is implicit.** Examples use two digits (`01`, `02`), but nothing states this is required. A session with 10+ tasks could produce `10_foo.md` which would glob-sort incorrectly alongside `01_foo.md` in naive string ordering. Minor issue but worth codifying. (Confidence: MEDIUM — unlikely in practice given typical task counts.)

### 1.2 Review Files: `review_<NN>.md`

**Current state:**
- Both modes: `review_<NN>.md` where `<NN>` matches the sub-task number.
- Revision rounds: `review_<NN>b.md`, `review_<NN>c.md`, etc.

**Issues found:**

4. **Letter-suffix convention caps out at 26 rounds but max is 4.** The `b/c/d/e` pattern is implicitly bounded by the 4-round max. This is fine in practice but the initial review has no suffix (not `review_01a.md`) — this asymmetry is **intentional** (the initial review has no suffix, revisions get `b`, `c`, `d`) and **consistent** across both modes. No issue here, just noting for completeness.

5. **Revised implementer output naming is undocumented (reiteration of issue 1).** Review revision rounds have `review_<NN>b.md`, but the corresponding revised implementer report convention is absent. The `imai-review/` session shows `01_evaluation_b.md` was used, mirroring the review suffix convention. This should be codified.

### 1.3 Cross-Reference: The Structural Gate

**Current state:** Phase 5 in both modes says: "for every implementer report (`<NN>_*.md`) there must be a corresponding review (`review_<NN>.md`)."

**Issue found:**

6. **The structural gate glob pattern does not account for revision files.** If the directory contains `01_evaluation.md`, `01_evaluation_b.md`, `review_01.md`, and `review_01b.md`, a naive glob for `<NN>_*.md` returns two implementer files for task 01. The gate says "for every implementer report there must be a corresponding review" — does `01_evaluation_b.md` need its own review? The answer is implicitly yes (the revision loop dispatches a new reviewer), but the gate description does not address this. It's unclear whether the gate should:
   - (a) Only check the *latest* implementer file against the *latest* review, or
   - (b) Require every file to be paired.

   Option (b) is satisfied by the revision loop (each revision gets a review), but option (a) is what the orchestrator actually needs (it only cares if the final state is approved). (Confidence: HIGH — the ambiguity is plainly visible in the text.)

---

## 2. Report vs Deliverable Distinction

### 2.1 Inline-Mode

**Current state (lines 30-31):**
- **Content producers** (research, drafts, collected data): the scratch file IS the deliverable.
- **Worktree implementers** (mutate existing files): the scratch file is a report.

**Issues found:**

7. **The distinction is clear in inline-mode but has no guidance for hybrid cases.** What about a sub-agent that both creates new files AND modifies existing files? It would run in a worktree (because it mutates), so the scratch file is a "report" — but some of the new files it created might also be deliverables. The protocol does not address this. (Confidence: MEDIUM — the worktree isolation rule implies all mutations go through worktrees, so the merge step handles it, but the report/deliverable language is still ambiguous for this case.)

8. **Real-world evidence shows the distinction works in practice.** The `rib-workflow/` session has 7 content-producer files (01-07) with no reviews at all, suggesting it was either a research-only session where reviews were skipped or the orchestrator did not follow the review protocol. The `imai-review/` session correctly distinguishes reports from deliverables. (Confidence: HIGH — observed directly.)

### 2.2 Spec-Mode

**Current state (line 99):** "Every implementer sub-agent writes a report file... The report captures what was changed, where (file paths), and any decisions made."

**Issue found:**

9. **Spec-mode does not have the content-producer vs worktree-implementer distinction at all.** Every spec-mode output is described as a "report." But spec-mode could conceivably have content-producer tasks (e.g., "research X and write findings to the change directory"). The protocol only describes the report case. This is a **divergence from inline-mode** that may or may not be intentional. Since spec-mode is designed for stateful, multi-session work, treating all outputs as reports (not deliverables) is arguably correct — the real deliverables are the file changes committed via worktrees. But this reasoning is implicit, not stated. (Confidence: MEDIUM — the omission may be deliberate.)

---

## 3. Directory Lifecycle

### 3.1 Setup / Creation

**Spec-mode:**
- Phase 2, step 4: "dispatch a sub-agent to write the task.md to `openspec/changes/[change-name]/task.md`."
- The sub-agent implicitly creates the directory by writing `task.md`. There is no explicit "create directory" step.

**Inline-mode:**
- Line 26: "The first dispatched sub-agent creates the scratch directory: `99_System/.scratch/<session-id>/`."
- Explicit instruction to include this in the first agent's dispatch prompt.

**Issues found:**

10. **Spec-mode has no explicit directory creation step.** It relies on the task.md writer sub-agent to create the directory as a side effect. If the sub-agent uses `Write` (which creates parent directories), this works. If it uses `Edit`, it would fail. This assumption is not stated. (Confidence: HIGH — the protocol relies on an implicit behavior of the Write tool.)

11. **Neither mode addresses creation failure.** What if the path is invalid, permissions fail, or the directory already exists from a prior session? Inline-mode is more vulnerable here because session IDs are manually chosen (see Section 4) and could collide. Spec-mode's `[change-name]` has the same risk. (Confidence: HIGH — no error handling is documented.)

12. **Neither mode validates directory creation succeeded before proceeding.** The orchestrator should Glob the directory after the first sub-agent completes to confirm it was created. This is hinted at by the tiered access priority ("Glob first") but not explicitly required at the setup stage. (Confidence: HIGH — the gap is clear.)

### 3.2 During Execution: Mutability Rules

**Issues found:**

13. **No immutability rules for completed files.** Once an implementer writes `01_evaluation.md`, can a subsequent sub-agent modify it? The reviewer is explicitly read-only w.r.t. implementation files, but nothing prevents a *second implementer* from editing a *first implementer's* output. In the revision loop, the revised implementer writes a new file (`_b` suffix), which implies the original should not be modified — but this is an inference, not a stated rule. (Confidence: MEDIUM — the convention is implied by the naming pattern but not explicit.)

14. **task.md is explicitly mutable** (spec-mode only): "The task.md is a coordination artifact, not a contract. If scope changes mid-execution, update it in place." This is clear and correct. Checkpoint updates (marking checkboxes) are also explicitly dispatched. No issue here.

### 3.3 Teardown / Cleanup

**Spec-mode:**
- Line 147: "Do not archive the task directory — archiving (moving to `archive/YYYY-MM-DD-[name]/`) is done manually by the user."
- Archive path format is specified: `openspec/changes/archive/YYYY-MM-DD-[name]/`.

**Inline-mode:**
- Lines 79-80: "List the scratch directory path... so the user can review or clean up manually."
- Summary template includes: "`99_System/.scratch/<session-id>/` — [list files, can be deleted]"

**Issues found:**

15. **Inline-mode has no archive convention.** Spec-mode archives to `archive/YYYY-MM-DD-[name]/`. Inline-mode says "can be deleted" with no archive path. If the user wants to preserve inline-mode scratch files for reference, there is no standard location. This is arguably intentional (inline-mode is ephemeral by design), but the asymmetry should be acknowledged. (Confidence: HIGH — the text is explicit that cleanup = deletion.)

16. **Neither mode addresses partial cleanup.** If some sub-tasks completed and others failed, the user might want to keep some scratch files and delete others. No guidance is provided for selective cleanup. (Confidence: LOW — this is arguably the user's problem, not the protocol's.)

17. **Stale session detection is absent.** If a session is abandoned mid-execution (user closes the conversation), the scratch directory persists indefinitely. There is no mechanism to detect or flag stale sessions. The `99_System/.scratch/` directory could accumulate orphaned sessions over time. (Confidence: HIGH — observed: `rib-workflow/` has no reviews, suggesting it may be an incomplete/abandoned session.)

---

## 4. Session ID Conventions (Inline-Mode Only)

**Current state (line 26):** "Use a short, descriptive session ID like `imai-research` or `tpc-wiki`."

**Issues found:**

18. **No uniqueness guarantee.** If two orchestrate sessions use the same ID (e.g., the user runs `imai-research` twice), files from the second session would land in the same directory as the first. Numbered files could collide (both sessions might have `01_*.md`). No collision detection or mitigation is specified. (Confidence: HIGH — the protocol has zero collision handling.)

19. **No character constraints.** The examples use lowercase-kebab-case (`imai-research`, `tpc-wiki`), but no rule mandates this. Allowed characters, case sensitivity, maximum length, and whitespace handling are all unspecified. A session ID with spaces or special characters could cause filesystem issues. (Confidence: HIGH — completely unspecified.)

20. **Who chooses the session ID?** The protocol says the orchestrator chooses it ("use a short, descriptive session ID"), but it could also be user-provided. This is unclear. If the orchestrator chooses, it should follow a deterministic convention; if the user chooses, the orchestrator should validate it. (Confidence: MEDIUM — the text implies the orchestrator chooses, but this is not explicit.)

21. **Spec-mode's `[change-name]` has the same gaps.** The change-name in `openspec/changes/[change-name]/` has no character constraints, uniqueness rules, or collision handling. The same issues (18-20) apply symmetrically. (Confidence: HIGH — spec-mode is equally silent on this.)

---

## 5. Cross-Mode Consistency

**Comparison of conventions:**

| Convention | Spec-Mode | Inline-Mode | Consistent? |
|---|---|---|---|
| Implementer file naming | `<NN>_<description>.md` | `<NN>_<description>.md` | YES |
| Review file naming | `review_<NN>.md` | `review_<NN>.md` | YES |
| Revision review suffix | `review_<NN>b.md` | `review_<NN>b.md` | YES |
| Revision implementer suffix | Not specified | Not specified (but `_b` used in practice) | CONSISTENT GAP |
| `<NN>` semantics | Matches task number | Matches sub-task number | YES (same concept) |
| Structural gate glob | `<NN>_*.md` vs `review_<NN>.md` | `<NN>_*.md` vs `review_<NN>.md` | YES |
| Content-producer distinction | Not present | Present | NO — divergence |
| Directory creation | Implicit (sub-agent side effect) | Explicit instruction | NO — divergence |
| Teardown | Archive to `archive/YYYY-MM-DD-[name]/` | Delete manually | INTENTIONAL divergence |
| Max revision rounds | 4 | 4 | YES |

**Issues found:**

22. **The content-producer vs report distinction exists only in inline-mode (reiteration of issue 9).** Spec-mode should either adopt it or explicitly state why all outputs are reports.

23. **Directory creation approaches diverge unnecessarily.** Spec-mode's implicit creation is less robust than inline-mode's explicit instruction. The more explicit approach should be standardized across both modes.

---

## 6. File Format Standards

### 6.1 Review Files — Well Defined

Both modes specify: "Verdict line (`approved` or `needs-revision`), then a Findings section with specific, actionable items (file paths, line numbers, what's wrong, why it matters)."

This is a clear, minimal but sufficient format. No issues.

### 6.2 Implementer Reports — Underspecified

**Current state:**
- Spec-mode (line 99): "The report captures what was changed, where (file paths), and any decisions made."
- Inline-mode (line 31): "a report capturing what was changed, where (file paths), and any decisions made."

Both are identical prose descriptions. Neither provides a structured format template.

**Issues found:**

24. **No structured format for implementer reports.** Reviews have `Verdict line + Findings section`. Reports have no equivalent. The prose says "what was changed, where, and decisions" but does not mandate section headings, ordering, or format. This leaves each sub-agent to invent its own structure, making automated/glob-based parsing unreliable and reviewer comprehension inconsistent. (Confidence: HIGH — the asymmetry between review format specification and report format specification is stark.)

25. **No status/outcome line equivalent to the review's verdict line.** A report could start with a status line (e.g., `Status: complete`, `Status: partial — blocked on X`) to give the orchestrator a machine-parseable signal without reading the full report. Currently, the orchestrator relies entirely on the sub-agent's 1-2 sentence return summary. If that summary is lost or ambiguous, the orchestrator must read the full report, which violates the list-first priority. (Confidence: MEDIUM — the return summary is intended to fill this role, but having it duplicated in the file provides resilience.)

### 6.3 Content-Producer Deliverables — No Format Standard

26. **Content-producer files have no format standard at all.** Inline-mode says "the scratch file IS the deliverable" but provides no guidance on structure. This is arguably correct — the deliverable format depends on the task (research notes vs. draft wiki page vs. data collection). But a minimal envelope (e.g., a YAML frontmatter block with `task_number`, `session_id`, `status`) would enable the structural gate to validate content-producer files without understanding their content. (Confidence: LOW — this may be over-engineering for the current use case.)

---

## Summary of Issues by Severity

### High Priority (ambiguity that could cause runtime failures)

| # | Issue | Affected Mode |
|---|---|---|
| 1 | Revised implementer report filename convention undocumented | Both |
| 6 | Structural gate does not account for revision files | Both |
| 11 | Directory creation failure not handled | Both |
| 18 | Session ID collision not handled | Inline |
| 21 | Change-name collision not handled | Spec |
| 24 | No structured format for implementer reports | Both |

### Medium Priority (inconsistency or underspecification)

| # | Issue | Affected Mode |
|---|---|---|
| 2 | `<description>` character/length constraints unspecified | Both |
| 9 | Content-producer vs report distinction missing in spec-mode | Spec |
| 10 | Spec-mode directory creation is implicit, not explicit | Spec |
| 12 | No validation that directory was created successfully | Both |
| 13 | No immutability rules for completed intermediate files | Both |
| 17 | Stale session detection absent | Inline |
| 19 | Session ID character constraints unspecified | Inline |
| 23 | Directory creation approach diverges between modes | Cross-mode |

### Low Priority (nice-to-have improvements)

| # | Issue | Affected Mode |
|---|---|---|
| 3 | Zero-padding width not codified | Both |
| 7 | Hybrid content-producer + worktree case unaddressed | Inline |
| 15 | Inline-mode has no archive convention | Inline |
| 16 | Partial cleanup not addressed | Both |
| 20 | Who chooses the session ID is ambiguous | Inline |
| 25 | No status line in implementer reports | Both |
| 26 | No format standard for content-producer deliverables | Inline |

---

## Recommended Improvements

### 1. Codify Revised Implementer Report Naming (High Priority)
Add to both mode files: "When a revision is needed, the revised implementer writes `<NN>_<description>_b.md` (round 2), `<NN>_<description>_c.md` (round 3), etc., mirroring the review suffix convention. The original report is not modified."

### 2. Add a Naming Rules Section (Medium Priority)
Create a shared reference (or add to both mode files):
```
**File naming rules:**
- `<NN>`: Two-digit zero-padded task number from decomposition (01-99).
- `<description>`: Lowercase, underscore-separated, ASCII alphanumeric only. Max 40 characters. Must be descriptive of the task, not necessarily matching the task name verbatim.
- Session IDs / change names: Lowercase, hyphen-separated, ASCII alphanumeric only. Max 30 characters. Must be unique within the parent directory.
```

### 3. Clarify the Structural Gate for Revisions (High Priority)
Amend the gate description: "For every implementer report, there must be a corresponding review. When revision rounds occurred, verify that the *latest* revision file (`<NN>_<description>_<X>.md`) has a corresponding approved review (`review_<NN><X>.md`). Earlier rounds may have `needs-revision` verdicts — only the final round must be `approved`."

### 4. Add Directory Creation Validation (Medium Priority)
Add to both modes after the first sub-agent completes: "After the first sub-agent returns, Glob the session directory to confirm it was created and contains the expected initial file. If the directory does not exist, halt and report the failure to the user."

### 5. Add Collision Handling for Session IDs / Change Names (High Priority)
Add: "Before dispatching the first sub-agent, Glob the parent directory to check if the session ID / change name already exists. If it does, append a numeric suffix (e.g., `imai-research-2`) or ask the user to choose a different name."

### 6. Define a Minimal Report Format (Medium Priority)
```
# Task <NN>: <description>

**Status:** complete | partial | failed
**Files changed:** (list of absolute paths)

## What Was Done
[Prose description of changes and decisions]

## Open Questions
[Optional — items needing orchestrator or user attention]
```

### 7. Standardize Directory Creation Across Modes (Low Priority)
Adopt inline-mode's explicit approach for spec-mode: "The first dispatched sub-agent creates the change directory `openspec/changes/[change-name]/` and writes `task.md` within it. Include directory creation as an explicit instruction in the dispatch prompt."
