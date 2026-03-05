---
area:
tags: [ai, multi-agent, research-automation]
created: 2026-02-27
last_reviewed:
next_review: 2026-03-03
review_interval: 0
---
# FARS

## Definition

FARS (Fully Automated Research System) is reported as a multi-agent, end-to-end automated research pipeline built by Analemma and publicly demonstrated during a February 2026 livestreamed operation. Media reports describe a modular workflow that runs research tasks through sequential stages of ideation, planning, experimentation, and writing.

## Key Points

- Reported as a multi-agent system with four modules: Ideation, Planning, Experiment, Writing.
- Public run reported on Feb 24-25, 2026 lasted 228h 28m 33s and produced 244 hypotheses and 100 short papers.
- Reported compute scale: 160-GPU cluster; total usage 11.4B tokens; total cost about $104k.
- Media reports describe FARS as an AI4AI (AI-for-AI) research system; outputs are short papers focused on single, well-scoped contributions (including negative results).
- Reported evaluation: average score about 5.05 (range 3.0-6.3) using Stanford Agentic Reviewer against ICLR-style criteria; reports also cite ICLR 2026 averages for context.

## Architecture (Reported)

The system is described as a multi-agent pipeline with four sequential stages:

- Ideation: literature review and hypothesis generation
- Planning: experimental design
- Experiment: code writing and execution
- Writing: paper drafting

## Reported Performance Metrics (Feb 2026 Public Run)

- Runtime: 228 hours, 28 minutes, 33 seconds
- Output: 244 hypotheses; 100 short papers
- Throughput: about one paper every ~2 hours
- Compute: 160 GPUs
- Usage: 11.4 billion tokens
- Cost: about $104,000 USD

## Evaluation (Reported)

Media coverage states that outputs were scored with Stanford's Agentic Reviewer (paperreview.ai) using ICLR-style criteria. The reported average score was about 5.05 (range 3.0-6.3), which was compared against ICLR 2026 averages for context.

## Open Questions

- Official project documentation and technical details from Analemma are not directly accessible via text-only sources cited below.
- Scope limitations beyond AI4AI and the exact evaluation protocol are not fully specified in the sources cited below.

## Related Concepts

- [[Multi-Agent Systems]]
- [[Autonomous Research]]
- [[AI Scientist]]
- [[Agentic Reviewer]]

## References

- 36kr (English), Feb 25 2026, "228 hours of non-stop work to produce 100 papers, burning through 11.4 billion Tokens: FARS has gone crazy." https://eu.36kr.com/en/p/3696795271966336
- 36kr (Chinese), Feb 12 2026, "Livestream AI4AI large-scale research." https://www.36kr.com/p/3679798166711939
- Huxiu, Feb 24 2026, "228 hours, 100 papers, 11.4B tokens: FARS." https://www.huxiu.com/article/4836445.html
- Stanford Agentic Reviewer (paperreview.ai) https://paperreview.ai/
- Stanford Agentic Reviewer - Tech Overview https://paperreview.ai/tech-overview
