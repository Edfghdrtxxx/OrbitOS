---
type: project
status: active
area: null
---
# LLM-Council

## Context

LLM-Council is a reusable decision-quality workflow for stress-testing important questions through three model voices: Claude, Gemini, and GPT.

The workflow follows three stages:
- Stage 1 — independent first opinions from each model.
- Stage 2 — anonymized peer review using global Member A/B/C labels.
- Stage 3 — Claude-as-Chairman synthesis into one consolidated answer.

Transcripts are saved in [[LLM-Council/Sessions]].

## Actions

- [ ] Use `/llm-council` for high-stakes decisions, research direction checks, thesis planning, and workflow design choices where cross-model adversarial review is worth the relay friction.
- [ ] Review saved sessions periodically for recurring blind spots and decision patterns.

## Progress

- 2026-05-22 — Rebuilt the old `/idea-debate-team` workflow into `/llm-council`, modeled after karpathy/llm-council with Claude, Gemini, and GPT as council members.
