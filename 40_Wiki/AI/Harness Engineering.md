---
area: "[[AI]]"
tags: [ai-agents, infrastructure, prompt-engineering]
created: 2026-04-04
last_reviewed:
next_review: 2026-04-04
review_interval: 0
---
# Harness Engineering

## Schematics

*No suitable open-license schematics found on Wikimedia Commons for this topic.*

## Definition

Harness engineering is the practice of designing and building the **runtime wrapper** (the "harness") around a foundation model that governs how it receives instructions, selects tools, enforces permissions, and returns results. The harness is everything between the raw model and the end-user experience — [[System Prompt|system prompts]], tool definitions, [[Hooks|hooks]], permission policies, and output post-processing.

## Key Points

- **Separation of concerns:** The model provides reasoning; the harness provides structure, safety, and [[Context Window|context]] management. Well-engineered harnesses let the same model serve vastly different use cases (coding assistant, knowledge manager, research agent) by changing only the surrounding scaffolding.
- **Tool orchestration:** A core harness responsibility is defining which tools the model can call, in what order, and under what conditions — directly shaping agent capabilities. This connects to how [[Agent Teams]] coordinate multi-agent workflows.
- **Permission & safety layer:** Harnesses enforce [[Guardrails|guardrails]] — sandboxing dangerous operations, requiring user confirmation for irreversible actions, and filtering outputs. This is distinct from model-level alignment.
- **Prompt injection surface:** Every input channel the harness exposes (system prompt, tool results, user messages) is a potential [[Prompt Injection|prompt injection]] vector. Harness design must treat external data as untrusted.
- **Observability:** Production harnesses instrument token usage, tool call patterns, latency, and error rates to enable debugging and cost control without inspecting model internals.

## Examples

- **Claude Code** uses a harness that combines a system prompt (behavioral rules, tone, tool descriptions), a permission system (auto-allow vs. user-confirm), hooks (pre/post tool-call shell commands), and context compression — all configured outside the model itself.
- **OrbitOS skills** (e.g., `/atomic-note`, `/start-my-day`) are harness-level constructs: prompt templates injected into the [[Context Window]] that steer the model toward domain-specific workflows without retraining.

## Related Concepts

- [[Agent Teams]]
- [[Autonomous Research]]
- [[Cognitive Load in LLMs]]
- [[Context Window]]
- [[System Prompt]]
- [[Hooks]]
- [[Guardrails]]
- [[Prompt Injection]]
- [[Prompt Engineering]]

## References

- Anthropic, "Claude Code CLI documentation" — describes harness architecture (system prompts, tools, hooks, permissions)
- Chase, H. (2022), *LangChain* framework — early open-source harness for LLM tool orchestration
