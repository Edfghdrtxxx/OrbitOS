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

