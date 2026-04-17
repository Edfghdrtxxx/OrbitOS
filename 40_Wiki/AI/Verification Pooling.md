---
area:
tags: [AI, multi-agent, code-review, LLM-orchestration]
created: 2026-04-17
last_reviewed:
next_review: 2026-04-18
review_interval: 0
---
# Verification Pooling

## Definition

A multi-agent review pattern in which several independent agents examine the same artifact (code diff, argument, claim) in isolated contexts, and a finding is only surfaced if it is **reproduced by more than one agent**. The pooling step — requiring agreement across independent observers — acts as a noise filter that suppresses hallucinations and stylistic nitpicks while preserving real defects.

Canonical production example: Claude Code's `/ultrareview`, which runs a fleet of reviewer agents in a cloud sandbox and verifies each reported bug before returning it.

## Philosophy

- **Depth via parallelism, not via a bigger model.** The signal quality does not come from extended thinking or a stronger base model — it comes from running the *same* model several times in isolation and keeping the intersection of its findings.
- **Independence is the active ingredient.** If reviewers share context, they converge on the same conclusions (including the same mistakes). Isolation — separate processes, separate working memory, separate git checkouts — is what makes disagreement informative.
- **Verification > generation.** A single agent is good at *proposing* bugs but bad at *confirming* them. Pooling trades single-agent speed for multi-agent precision, which matches the economics of code review: false positives waste human attention, and human attention is the scarce resource.
- **The merge rule encodes the policy.** Intersection (keep findings ≥2 agents flagged) is conservative and high-precision. Union is sensitive but noisy. Majority vote is the usual compromise.

## Key Points

- **Isolation guarantees** — each reviewer needs its own [[Context Window]] with no cross-talk; shared tool outputs or shared scratchpads defeat the purpose
- **Merge rules** — intersection, union, and majority vote trade off precision vs. recall differently; pick the rule based on the cost of a false positive vs. a missed bug
- **Reproduction step** — strongest version of the pattern asks each agent to *reproduce* the bug (construct a failing input, trace the code path) rather than simply restate it
- **Why it beats single-pass review** — a lone reviewer cannot tell its own hallucinations from real findings; a second independent reviewer can
- **Cost profile** — N agents means N× the token spend; only worth it when the cost of a missed defect exceeds the review cost (pre-merge on critical code, not on notes or scratch)

## Examples

- **`/ultrareview`** — Claude Code's cloud-sandboxed multi-reviewer command; each finding is independently reproduced before surfacing
- **Local approximation** — spawn 3 `Agent` subagents in parallel with the same diff, aggregate findings, keep those flagged by ≥2 (loses true isolation since subagents share the parent's model state, but approximates the pattern)
- **Adversarial self-critique** — the `reflect` skill is a single-agent version of the same idea: generate, then critique with a fresh frame
- **Ensemble ML classifiers** — the same philosophy at the model layer: N independent weak learners voting beats one strong learner when errors are uncorrelated

## When to Use

- Pre-merge review on code where a bug is expensive (production services, migrations, security-sensitive paths)
- High-stakes written arguments (research claims, proposals) where you want to surface only the objections that survive independent scrutiny

## When Not to Use

- Low-stakes edits where a single-pass `/review` is already sufficient
- Creative or exploratory work — pooling filters out divergent ideas, which is the opposite of what brainstorming needs
- Budget-constrained sessions — N× the tokens is real

## Related Concepts

- [[Agent Teams]] — the broader pattern of multi-agent collaboration; verification pooling is one specific coordination topology
- [[Cognitive Load in LLMs]] — motivates why one agent cannot reliably verify its own output
- [[Context Window]] — isolation requires separate context windows per reviewer
- [[Harness Engineering]] — the scaffolding that enforces agent independence in practice

## References

- Claude Code — Find bugs with ultrareview: https://code.claude.com/docs/en/ultrareview
- Classical analog: ensemble methods (bagging, Random Forests) in statistical learning
