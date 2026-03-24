---
created: 2026-03-15
status: processed
source: start-my-day
---
Research Karpathy's "research intern robot" (autoresearch): https://github.com/karpathy/autoresearch

## What It Is
Autonomous AI experiment loop (MIT, 53k+ stars). An agent modifies a single file (`train.py`), runs a 5-min training experiment, evaluates one scalar metric (`val_bpb`), keeps improvements, discards failures, repeats. ~12 experiments/hour, ~100 overnight unattended.

**Architecture:** 3 files only — `prepare.py` (data/eval, locked), `train.py` (agent-editable), `program.md` (human instructions). LLM-specific: GPT model, BPE tokenizer, single NVIDIA GPU.

## MATE-Automation Compatibility
**Pattern is useful; code is not.** MATE's existing `/orchestrate` + `task.md` workflow is already more sophisticated (multi-file, multi-metric, structured reviews, reproducibility via seeds/configs).

**Borrowable ideas:**
- **Unattended overnight loop** — wrap `run_experiment.py` in an autonomous loop for repetitive experiments (EXP3 seed variance, EXP5 learning curves)
- **Single-metric gating** — pick one metric (e.g., macro accuracy on 13C/14C) for automated keep/discard decisions

**Not needed:** the actual code (LLM-only), single-file constraint, simplified evaluation. MATE's per-class analysis and statistical tests are essential for physics claims.

## Verdict
Inspiring proof of concept for "AI does the boring hyperparameter search overnight." Adapt the *pattern* if unattended experiment sweeps become valuable; don't adopt the tool itself.