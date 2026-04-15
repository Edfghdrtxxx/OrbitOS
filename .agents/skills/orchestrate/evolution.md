# Evolution — /orchestrate

## 2026-03-08: Self-review dog-food

**Applied:**
- Batch output by stage, not per-agent (context window bottleneck with 12 agents)
- `ToolSearch` + `Skill` added to permitted tools

**Learned:**
- Reviewers can hallucinate something non-existence — reviewer prompt should require confidence flagging on factual claims (e.g., "state uncertainty rather than asserting absence")

## 2026-03-09: No deep reading in orchestrator

**User Preference:**
- The orchestrator must NOT read files for deep context gathering itself. When preliminary exploration or information gathering is needed (e.g., to understand which files exist, what they contain, or to build dispatch context), dispatch Explore sub-agents instead. The orchestrator may only read files for lightweight dispatch decisions (e.g., checking if a file exists, reading a skill's evolution.md). Multiple Explore agents should be launched in parallel when the scope spans several areas.

## 2026-03-13: Impact analysis for structural refactors

### Lessons
- When dispatching Explore agents **for structural refactors** (renaming, moving, or reorganizing files/folders), always include an impact-analysis pass: grep old path strings, folder names, and conventions across the entire repo (skills, templates, scripts, system files) to find all producers and consumers of the affected structure. Content classification alone ("what is this file?") is insufficient — the real question is "what reads from, writes to, or assumes the existence of these paths?" Missing this step risks breaking project consistency silently. This does not apply to general research dispatches where sub-agents own the investigation approach.

## 2026-03-16: Self-improvement dog-food (inline mode)

### Lessons
- Do NOT use worktree isolation for a single implementer — it adds confusion (lost edits, wasted verification dispatches) without preventing any conflicts. The isolation rule exists for parallel write conflict prevention only.

## 2026-03-22: No Agent subagents for long-running training with sleep polling

### Lessons
- ~~Never dispatch Agent subagents for long-running processes with periodic polling (training, builds, etc.). When the subprocess dies silently (OOM, killed), the agent's `sleep` polling loop persists as unkillable zombie shells — the orchestrator has no mechanism to terminate background tasks inside a running agent.~~
- ~~Run long processes via `Bash` with `run_in_background: true` directly from the orchestrator. Poll on the next user prompt or task notification, not via `sleep` commands inside agents.~~

Superseded by 2026-04-15 — `Monitor` replaces sleep-based polling for status watching. The zombie-sleep rule (no `sleep` loops inside Agent subagents) still holds.

## 2026-04-15: Monitor supersedes sleep-based polling for long-running processes

### Lessons
- `Monitor` is the preferred mechanism for watching long-running processes (training, builds). It streams stdout events to the chat as they arrive (event-driven, not sleep-driven) and is harness-managed — `TaskStop` cleans it up, no zombies.
- Filter must be **coverage-complete**: match both progress markers (epoch boundaries, milestone lines) AND failure signatures (`Traceback|Error|FAILED|OOM|CUDA error|Killed`). A success-only filter is silent on crash, indistinguishable from still-running.
- Select progress markers for low event density (epoch-end, not per-step) to avoid flooding the chat. The old "sleep 7200s between checks" rule translates to "roughly one event per epoch boundary" — same density, event-driven.
- `Bash` with `run_in_background: true` remains the fallback for fire-and-check-once-done cases without intermediate visibility needs. Never spawn `sleep` loops inside Agent subagents.

