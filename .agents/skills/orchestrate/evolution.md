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
