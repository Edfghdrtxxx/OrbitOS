# FIX-ENGINE — orchestrate-inline.workflow.js (Tier A+B fixes)

## Files edited (identical, byte-for-byte)
- `D:/Something/research/MATE-Automation-V4/.agents/skills/orchestrate-v2-D-workflow/workflows/orchestrate-inline.workflow.js`
- `D:/Something/research/MATE-Automation-V4/.claude/skills/orchestrate-v2-D-workflow/workflows/orchestrate-inline.workflow.js`

Method: applied all edits to the `.agents` copy, then `cp` it over the `.claude` copy so the two are guaranteed identical.
Post-edit SHA-256 (both): `6c8ca92e5acd5b0d4f8aff9fe7c65d8220d1b96f51495f005c87663fce9b792b` (matched on both files).
Both copies parse cleanly under runtime-style wrapping (async fn with injected `args/agent/log/phase`). Line endings unchanged (LF, 0 CR).

NOTE on baseline: the git working tree already contained uncommitted FINALIZE machinery (the `description`, `Finalize` phase, `finalReportPath`, `FINAL_SCHEMA`, the finalizer block, `IMPL_SCHEMA` additionalProperties:true, prompt-wording tweaks). Those were present in the file as read and are NOT part of this work-item. `git diff` vs HEAD therefore shows them too — they are pre-existing, not introduced here.

## The five fixes

### B1 — Dependency-cycle safety
- Added a `findDependencyCycle()` DFS pre-pass over `byId` immediately AFTER the same-file backstop loop (so it also catches a cycle MANUFACTURED by that auto-chaining) and BEFORE any `run()` scheduling. White/gray/black coloring; on a back-edge into a gray node it reconstructs the exact cycle path from the DFS stack.
- On cycle: short-circuits and returns immediately, spawning nothing:
  `{ sessionId, finalReportPath: null, shortSummary: 'aborted: dependency cycle', items: items.map(i=>({id,status:'blocked',outputPath})), needsHuman: { item: cycle, reason: 'dependency cycle detected: <ids>', context: cycle }, agentsSpawned: 0 }`.
- Defense-in-depth in `run()`: switched to the deferred-promise pattern — create the promise, `promises.set(item.id, p)` BEFORE the async body runs, then resolve it from the IIFE via `.then(resolve, reject)`. A leading `;` guards the IIFE against ASI in this no-semicolon file. If a cycle ever slipped past the pre-pass, the recursive `run()` re-enters the already-registered promise instead of opening a fresh stack frame, so a missed cycle degrades to a deadlocked wait rather than a RangeError stack overflow. (The pre-pass always fires first, so the tested path neither overflows nor hangs.)

### B2 — Finalizer must ALWAYS run
- Finalizer now calls `agent(...)` DIRECTLY instead of the `MAX_AGENTS`-guarded `spawn(...)`, so the durable report is written even after the cap is hit.
- Added `const reportWritten = !!(finalizer && finalizer.shortSummary)` (FINAL_SCHEMA requires `shortSummary`, so this is a faithful "returned successfully" proxy). Final return uses `finalReportPath: reportWritten ? finalReportPath : null` — never returns a path to a file that was not written.
- Added one `agentCount++` immediately before the finalizer `agent()` call. Rationale: bypassing `spawn()` would otherwise drop the finalizer from `agentsSpawned`, changing the happy-path return (which must stay unchanged). The finalizer is the LAST agent, so counting it cannot re-trip the cap guard. This keeps `agentsSpawned` consistent with prior behavior.

### B4/F2 — Critic gaps go through scheduling
- `CRITIC_SCHEMA.gaps.items.properties` gained `dependsOn: { type: 'array', items: { type: 'string' } }` (additionalProperties on the gap item is false, so it had to be declared; `required` was left untouched).
- `gapItems` now carries `dependsOn: Array.isArray(g.dependsOn) ? g.dependsOn.slice() : []`.
- Each gap is registered in `byId`, then the SAME same-file backstop (reusing the module-scope `lastWriterOfPath` map) runs over the gaps so a gap sharing an outputPath with an existing item/another gap gets a `dependsOn` on the prior writer.
- Gaps are dispatched via `run(g)` (NOT `implementAndVerify` directly), so they get dependency resolution + `blocked` handling identical to primary items.

### B3/A2-4 — Collect ALL escalations
- Primary `needsHuman` selection (first `_escalate`, else first `blocked`, else `hitCap`) left UNCHANGED.
- When `needsHuman` is non-null, attach `needsHuman.escalations` = every `_escalate` object + every blocked item's `{ id, _blockedBy }`. Decision: included the full `_escalate` object (it already carries item/reason/context, matching how the primary escalated case uses `escalated._escalate`) rather than only the `.reason` string, so no stall information is dropped.

### A6 — Comment fix
- The scheduler comment no longer claims "concurrency capped by the engine." It now states fan-out is an unbounded `Promise.all`, this engine does NOT cap concurrency, and any limit is imposed by the runtime.

## Not changed (per constraints)
`MAX_AGENTS=60`, `MAX_ROUNDS=4`, `CRITIC_ROUNDS=2`, and the IMPL/VERDICT/FINAL schemas are untouched. `spawn()` still drives impl/verify/critic; only the finalizer uses `agent()` directly. No unrelated refactors.

## Verification (sandboxed execution of the actual file)
Ran the real workflow body in a `new Function(...)` harness with stubbed `agent/log/phase`. All passed:
- Explicit 2-cycle: agentsSpawned 0, 0 agents actually called, shortSummary 'aborted: dependency cycle', finalReportPath null, needsHuman.reason matches, items all blocked. No hang (3s race guard), no stack overflow.
- Cycle MANUFACTURED by the same-file backstop (a depends on b; both write SHARED): caught, 0 agents — confirms the check runs AFTER the backstop.
- Acyclic happy path: not aborted, agents spawned (6), finalReportPath set, needsHuman null, all approved, agentsSpawned == actual agent calls (finalizer counted).
- Capped path (8 always-failing items → >60 spawns): finalizer still wrote the report (B2), all 8 escalations collected (B3), finalizer invoked exactly once, agentsSpawned == 61 (60 capped + finalizer).
- Finalizer returns null: finalReportPath null (B2).
- Gap dispatched via run() with a failing dep: dependent gap g2 marked `blocked`, its implementer never ran, and `{id:'g2',_blockedBy:['g1']}` appears in needsHuman.escalations (B4 + B3).

Both copies confirmed byte-identical by SHA-256 after every edit round.
