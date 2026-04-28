---
type: resource
status: processed
source_type: article
platform: Anthropic Engineering
author:
  - Jeremy Hadfield
  - Barry Zhang
  - Kenneth Lien
  - Florian Scholz
  - Jeremy Fox
  - Daniel Ford
title: How we built our multi-agent research system
source_url: https://www.anthropic.com/engineering/built-multi-agent-research-system
published: 2025-06-13
retrieved: 2026-04-28
topic:
  - AI agents
  - Claude Code
  - multi-agent systems
  - research agents
  - agent orchestration
tags:
  - Anthropic
  - AI-Agent
  - Multi-Agent
  - Research-Agent
  - Claude
related:
  - [[Ralph_Multi-Agent_Collaboration_for_Long-Running_AI_Work]]
  - [[Multi-Agent Collaboration]]
  - [[Orchestrator Agent]]
  - [[Context Window]]
  - [[Feedback Loop]]
---
# How we built our multi-agent research system

> Source: [Anthropic Engineering — How we built our multi-agent research system](https://www.anthropic.com/engineering/built-multi-agent-research-system)  
> Publication date: 2025-06-13  
> Processing mode: organized source note; Anthropic's original section order is preserved.

Claude includes a Research capability that can search the web, Google Workspace, and connected integrations to handle complex tasks.

This article explains how Anthropic moved from a prototype to a production multi-agent research system. The system uses one lead agent to plan, delegate, and synthesize, while multiple worker agents run tool loops in parallel. The article focuses on coordination, evaluation, reliability, and production engineering lessons.

## Benefits of a multi-agent system

Research is open-ended and hard to pre-script. The path changes as new findings appear, so rigid pipelines perform poorly.

Anthropic argues that agents are a strong fit because they can:

- run for many turns,
- adapt plans midstream,
- and explore multiple branches concurrently.

A key mechanism is compression: subagents each explore with their own context, then return condensed findings for the lead agent. This separation also reduces path lock-in by letting teams of agents investigate independently.

Anthropic compares this to human collective intelligence: coordinated groups can outperform isolated individuals.

Internal evaluations reportedly showed major gains for breadth-first tasks. Anthropic's multi-agent configuration, using a lead Opus 4 agent with Sonnet 4 subagents, beat a single Opus 4 setup by 90.2% on an internal research benchmark.

Anthropic also reports that performance on BrowseComp was mostly explained by:

1. token usage,
2. tool-call count,
3. model choice.

The article frames multi-agent design as a way to scale token budget through parallel contexts, while noting that newer models improve token efficiency significantly.

### Tradeoffs

Costs increase sharply:

- agents use roughly 4× chat-token usage,
- multi-agent systems use roughly 15× chat-token usage.

The approach is best where task value justifies cost and where work is truly parallelizable. Anthropic notes that some coding workflows are less suitable today because they have tighter dependencies and weaker real-time delegation or coordination.

---

## Architecture overview for Research

Anthropic uses an orchestrator-worker pattern:

- a lead agent plans and coordinates,
- subagents run specialized investigations in parallel.

When a query arrives, the lead agent:

1. creates a strategy,
2. launches subagents across separate aspects,
3. gathers and synthesizes results.

Anthropic contrasts this with static RAG retrieval. Their system uses iterative search-and-reason loops that adapt as evidence appears.

### Workflow from the process diagram

1. The user submits a query.
2. A `LeadResearcher` enters a loop.
3. It plans and saves key context to memory, which matters for long contexts and truncation risk.
4. It creates specialized subagents.
5. Subagents run web or tool searches, use interleaved thinking after results, and return findings.
6. `LeadResearcher` decides whether to continue, refine, or spawn more subagents.
7. After enough evidence has been gathered, a `CitationAgent` maps claims to source locations.
8. The final answer is returned with citations.

---

## Prompt engineering and evaluations for research agents

Early failures included over-spawning agents, endless searching for missing sources, and noisy cross-agent chatter. Anthropic says prompt design was their strongest lever.

### Prompting principles

#### 1. Model the agent's behavior directly

Anthropic replayed real prompts and tools in simulation, then inspected step-by-step traces to identify issues such as over-searching, bad query style, or wrong tool use.

#### 2. Teach delegation explicitly

Subtasks need a clear goal, expected output format, tool and source guidance, and boundaries. Vague delegation caused overlap and missed coverage.

#### 3. Match effort to complexity

Anthropic embedded rough scaling rules: use fewer agents and calls for simple tasks, and more for complex jobs. This helped avoid both over-spending and under-spending effort.

#### 4. Treat tool UX as critical

Tool choice can determine success. Agents were taught to inspect tools first, align tool use with user intent, and prefer specialized tools when appropriate. Tool descriptions must be clear and distinct.

#### 5. Use models to improve prompts and tools

Claude 4 was used to diagnose failures and suggest fixes. A tool-testing agent repeatedly exercised flawed MCP tools and rewrote descriptions. Anthropic reports a 40% drop in later task time.

#### 6. Search broad first, then narrow

Agents were prompted to begin with short, high-recall queries, then specialize after seeing the landscape.

#### 7. Guide explicit reasoning

Extended thinking helped planning, decomposition, and tool strategy. Subagents used interleaved thinking after each tool result to assess quality and fill gaps.

#### 8. Parallelize at two levels

Faster performance came from both parallel subagent spawning and parallel tool calls within subagents. Anthropic reports up to 90% time reduction on complex tasks.

Anthropic says they encoded human research heuristics into the system: decompose the task, judge source quality, adapt strategy, and balance depth against breadth. They also added guardrails to prevent runaway behavior.

---

## Effective evaluation of agents

Because multi-agent systems can succeed through many different trajectories, process-only checks are brittle. Anthropic emphasizes outcome-focused evaluation, while still checking whether the process is reasonable.

### Start small and early

Anthropic recommends beginning with a small but representative query set immediately. Large effects in early development can be detected without huge test suites.

### LLM-as-judge

For free-form outputs, Anthropic used rubric-based model grading across:

- factual grounding,
- citation correctness,
- completeness,
- source quality,
- and tool efficiency.

They found that a single-call judge prompt with numeric scoring and pass/fail aligned best with human assessment in their setup.

### Human testing still matters

Manual testers surfaced failure modes automation missed, including odd hallucinations, reliability bugs, and subtle source-selection bias, such as over-weighting SEO pages. Prompt updates for source quality helped.

Anthropic stresses emergent behavior: small lead-agent changes can alter subagent dynamics. Prompts should define collaboration frameworks, not only strict instructions.

---

## Production reliability and engineering challenges

### Agents are stateful; failures cascade

Long-running workflows require durable execution, resumability, retries, and checkpoints. Restarting from scratch is too expensive. Anthropic also found it effective to notify agents of tool failures so they can adapt.

### Debugging needs richer observability

Non-determinism makes reproduction hard. Production tracing was essential for diagnosing missed information, poor query choices, bad sources, or tool faults. Anthropic tracks high-level decision and interaction patterns while preserving conversation privacy.

### Deployment is delicate

Because agents can be mid-flight for long periods, updates must avoid breaking active runs. Anthropic uses rainbow deployments to shift traffic gradually while old and new versions coexist.

### Current bottleneck: synchronous orchestration

Lead agents currently wait for subagent batches to finish, which limits steering and can block on stragglers. Asynchronous orchestration could improve throughput, but it adds complexity in coordination, consistency, and error handling.

---

## Conclusion

Anthropic says productionizing agents takes much more than getting a prototype to run. State management, reliability engineering, prompt and tool ergonomics, evaluation loops, and cross-team operations all matter.

Despite the complexity, Anthropic reports meaningful user impact in high-value research tasks, including business strategy, healthcare navigation, technical troubleshooting, and discovery of non-obvious connections.

The conclusion is that reliable multi-agent research at scale is achievable with strong engineering discipline plus close collaboration between research, product, and engineering teams.

---

## Acknowledgements

The post credits Jeremy Hadfield, Barry Zhang, Kenneth Lien, Florian Scholz, Jeremy Fox, and Daniel Ford, with thanks to Anthropic's apps engineering team and early users.

---

## Appendix

### End-state evaluation for state-mutating agents

For workflows that modify persistent state over many turns, Anthropic recommends evaluating final outcomes and key checkpoints instead of strict turn-by-turn path validation.

### Long-horizon conversation management

For very long sessions, Anthropic summarizes completed phases, stores key information in external memory, and spawns fresh subagents with clean context plus explicit handoffs to avoid context overflow.

### Subagent artifacts to reduce telephone loss

Instead of routing all output through the lead agent, subagents can write artifacts to external systems and return references. This preserves fidelity and reduces token overhead, especially for structured deliverables such as code, reports, and visualizations.

---

## Retrieval Notes

- Use this note with [[Ralph_Multi-Agent_Collaboration_for_Long-Running_AI_Work]] to compare community multi-agent workflows with Anthropic's production research-agent architecture.
- Key reusable pattern: [[Orchestrator Agent]] plus specialized subagents, with explicit delegation, bounded outputs, and citation verification.
- Key constraint: multi-agent systems trade cost and complexity for breadth, context capacity, and parallel exploration.
