---
area:
tags: [AI, LLM]
created: 2026-03-02
last_reviewed:
next_review: 2026-03-03
review_interval: 0
---
# Context Window

## Definition

The context window is the maximum amount of text (measured in [[Tokens]]) that a [[Large Language Model]] can process in a single interaction, encompassing both the input prompt and the generated output. It defines the model's "working memory" — everything outside the window is invisible to the model.

## Key Points

- Measured in **tokens** (roughly ¾ of a word in English); common sizes range from 4K to 200K+ tokens depending on the model
- Includes **both** input and output — a 128K window shared between a long prompt and the reply
- Longer context windows enable processing entire codebases, books, or long conversations, but increase latency and cost
- When input exceeds the window, models either truncate or require [[Retrieval-Augmented Generation]] (RAG) to handle overflow
- [[Cognitive Load in LLMs]] increases as the context window fills, often degrading attention to middle sections ("lost in the middle" effect)

## Examples

- Claude's context window can be up to 200K tokens, enough to process ~500 pages of text in one go
- A coding assistant like Claude Code uses context-window management (auto-compression, eviction) to maintain long sessions without losing critical state

## Related Concepts

- [[Tokens]]
- [[Large Language Model]]
- [[Cognitive Load in LLMs]]
- [[Retrieval-Augmented Generation]]
- [[Prompt Engineering]]
- [[Agent Teams]]

## References

- Anthropic documentation on Claude model context windows
