---
area:
tags: [AI, multi-agent, LLM-orchestration]
created: 2026-03-02
last_reviewed:
next_review: 2026-03-03
review_interval: 0
---
# Agent Teams

## Definition

A paradigm in which multiple autonomous AI agents collaborate to accomplish tasks that exceed the capacity of any single agent. Each agent is specialised for a narrow role (planning, coding, reviewing, searching, etc.) and communicates through a shared protocol or orchestrator, forming a "team" or "swarm."

## Key Points

- **Why teams?** — A single LLM suffers from [[Cognitive Load in LLMs]]; distributing sub-tasks across agents keeps each one within its effective instruction budget
- **Orchestrator pattern** — a central agent decomposes the goal, delegates to sub-agents, and synthesises their outputs (e.g., Claude Code's `Agent` tool, CrewAI's "crew")
- **Swarm pattern** — agents communicate peer-to-peer with minimal central control; emergent coordination replaces top-down planning (e.g., OpenAI Swarm, AutoGen group chat)
- **Specialisation via system prompt** — each agent receives a tailored system prompt, tool set, and [[Context Window]], making it an expert in one slice of the problem
- **Failure modes** — coordination overhead, conflicting outputs, information loss at hand-off boundaries, and compounding hallucinations across agents

## Notable Frameworks

| Framework | Pattern | Notes |
|---|---|---|
| **CrewAI** | Orchestrator | Role-based agents with sequential/parallel task flow |
| **AutoGen** (Microsoft) | Swarm / group chat | Multi-agent conversation with human-in-the-loop |
| **LangGraph** | Graph-based | Agents as nodes in a state machine; fine-grained control flow |
| **OpenAI Swarm** | Swarm | Lightweight hand-off between agents; minimal abstraction |
| **Claude Agent SDK** | Orchestrator | Anthropic's SDK for building multi-agent pipelines |
| **[[FARS]]** | Pipeline | Four-stage research pipeline (Ideation → Planning → Experiment → Writing) |

## Examples

- **Claude Code sub-agents** — the `Agent` tool spawns specialised sub-agents (`Explore`, `Plan`, `general-purpose`) each with its own context, then returns results to the parent
- **[[FARS]]** — a four-module agent team that produced 100 research papers in 228 hours by pipelining ideation, planning, experimentation, and writing agents
- **Code review team** — an architect agent designs the approach, a coder agent implements it, and a reviewer agent checks for bugs — all orchestrated by a manager agent

## Related Concepts

- [[Cognitive Load in LLMs]] — the core limitation that motivates multi-agent decomposition
- [[FARS]] — concrete example of an agent team for autonomous research
- [[Autonomous Research]] — the research application domain for agent teams
- [[Context Window]] — each sub-agent gets its own window, multiplying effective capacity
- [[Prompt Engineering]] — designing effective system prompts for each agent role
- [[Verification Pooling]] — coordination topology where independent reviewer agents vote on findings; specific instance of the agent-team pattern applied to review tasks

## References

- CrewAI documentation: https://docs.crewai.com/
- Microsoft AutoGen: https://microsoft.github.io/autogen/
- LangGraph (LangChain): https://langchain-ai.github.io/langgraph/
