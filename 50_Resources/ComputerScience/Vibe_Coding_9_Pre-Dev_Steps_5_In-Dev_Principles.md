---
type: resource
source: "Bilibili - 姜学长 (BV1kAw2z9E2s)"
topic: vibe coding workflow
tags:
  - vibe-coding
  - AI-development
  - software-engineering
  - workflow
created: 2026-03-20
---
## Summary

When using AI for Vibe Coding, many developers face messy, unmaintainable code as projects grow. The root cause isn't AI capability — it's the lack of an engineering workflow. This video presents a framework of **9 pre-development steps** (in 3 phases) and **5 in-development principles** to keep AI-assisted projects on track from prototype to delivery.

## Pre-Development: 9 Steps in 3 Phases

### Phase 1 — Define the Blueprint (定图纸)

1. **Talk through requirements** — Have an open conversation with AI about pain points, target users, scenarios, and ideal features. Don't worry about rigor yet; prioritize information volume.
2. **Write a PRD with acceptance criteria** — Structure the conversation into a PRD (功能列表, 用户流程, 页面清单). Every feature must have a concrete definition of done (e.g., login success = what happens on failure? lockout? redirect?).
3. **Lock down visual style & page framework** — Pick 2–3 reference sites or have AI propose style options. Decide navigation layout and overall aesthetic upfront to prevent mid-project UI rewrites.

### Phase 2 — Build the Foundation (打地基)

4. **Define project boundaries & non-functional requirements** — Answer three questions: (1) local-only or public deployment? (2) user data / privacy / compliance concerns? (3) performance and cost limits?
5. **Lock the tech stack (verifiability > trendiness)** — Choose mature technologies with rich documentation and community support. AI outputs are more accurate and controllable when docs and examples are abundant.
6. **Draft a lightweight architecture doc** — Have AI output directory structure, core modules, and data models. Treat this as a living document — allow iteration, but record the reason for every change.

### Phase 3 — Set the Rules (立规矩)

7. **Create 3 root-level context documents** — `PRD.md` (requirements), `arc.md` (architecture), `project.md` (current status, known issues, next steps). These are AI's global context — **update them synchronously with every major change**, or AI will write new code against an outdated worldview.
8. **Define coding standards & reference implementations** — Specify conventions (e.g., TypeScript, naming rules, file size limits). Create a `reference/` folder with approved implementations of common UI components (buttons, forms, modals).
9. **Set up Git & quality gates** — Git is your safety belt: rollback to any stable point, run parallel feature branches. Establish quality gates (tests, lint) before writing the first line of code.

## In-Development: 5 Core Principles

> Mantra: **You define boundaries and acceptance; AI handles the labor.**

### 1. Small-step MVP iteration

One verifiable slice at a time: page opens → form submits → server saves → auth checks → list displays. After each slice: run tests, pass lint, commit to Git.

### 2. Human-driven module splitting

Never let all code accumulate in one file. Proactively split modules — AI won't do this well on its own, and monolithic files become unnavigable.

### 3. Restrict AI autonomy

Use "closed-loop prompts" — end every task with:
> "Only modify the files and scope I specified. Do not refactor unrelated code. Do not change UI style. Do not touch unrelated logic."

Use state summaries to keep AI's context aligned with reality.

### 4. Enforce security as a checklist

AI code optimizes for "it runs," not for security. Minimum guardrails:
- API keys never in frontend code or repository — use env vars + server-side calls
- Server-side must perform auth and input validation — never trust the frontend

### 5. Scientific error handling

If two fix attempts produce no new evidence, **stop guessing**. Correct approach:
1. **Minimize** — Reduce the problem to the smallest reproducible input
2. **Instrument** — Add logs, breakpoints, print key variables and branches
3. **Lock behavior** — Write a small test that captures the failing case
4. Let AI fix based on this evidence. If still stuck, **Git rollback** to the last stable point.

## Supplementary Practices (from broader community)

The original framework covers the structural essentials. These additional practices, drawn from multiple practitioners, address common failure modes that the 9+5 framework doesn't explicitly cover.

### Prompt discipline

- **Ask AI to plan before coding each feature** — Not just at project level. Before each task, say "outline your approach, don't write code yet." This prevents overengineered solutions and forces a simplification discussion upfront.
- **Request multiple options, pick the simplest** — Have AI generate 2–3 approaches ranked by simplicity. You choose. This surfaces creative solutions while keeping complexity under control.
- **Feed relevant documentation into context** — Don't just pick mature stacks (Step 5) — paste the actual library docs, API references, or working examples into the prompt. AI accuracy depends on having the right docs in-context.

### Context & understanding

- **Fresh context per feature** — Start a new chat/session for each feature or major task. Stale context causes drift, hallucination, and conflicting implementations. Carry over only the 3 root documents (Step 7), not conversation history.
- **Ask AI to explain its code** — If you can't debug it, you can't maintain it. Periodically request file-level or function-level explanations to build your mental model and catch hidden assumptions ("black-box code" risk).

### Quality mindset

- **Treat all AI output as draft, not production code** — AI code optimizes for "it runs," not for edge cases, error handling, or maintainability. Every generation is a starting point that requires human review before it ships.

> For a deeper methodology (separate Proposal / Specs / Design / Tasks artifacts), see Zarar's [Spec-Driven Development](https://zarar.dev/spec-driven-development-from-vibe-coding-to-structured-development/) — an evolution beyond the single-PRD approach.

## Terminology

| Term | Definition |
|------|-----------|
| **PRD** | Product Requirement Document — feature list, user flows, acceptance criteria |
| **MVP** | Minimum Viable Product — smallest functional slice to validate core value |
| **Git** | Version control tool for code history, branching, and safe rollback |
| **Context (上下文)** | The global project information AI relies on, maintained via fixed documents (PRD.md, arc.md, project.md) |

## Source

[Bilibili Video: VibeCoding开发前9个步骤和开发中5个关键点](https://www.bilibili.com/video/BV1kAw2z9E2s) — 姜学长

**Supplementary sources:**
- [12 Rules to Vibe Code Without Frustration](https://creatoreconomy.so/p/12-rules-to-vibe-code-without-frustration) — Peter Yang
- [Spec-Driven Development: From Vibe Coding to Structured Development](https://zarar.dev/spec-driven-development-from-vibe-coding-to-structured-development/) — Zarar
- [Vibe Coding in Practice: Patterns, Pitfalls, and Prompting Strategies](https://aimconsulting.com/insights/vibe-coding-practice-patterns-pitfalls-prompting/) — AIM Consulting
- [8 Vibe Coding Best Practices (2026)](https://www.softr.io/blog/vibe-coding-best-practices) — Softr
- [A Structured Workflow for Vibe Coding Full-Stack Apps](https://dev.to/wasp/a-structured-workflow-for-vibe-coding-full-stack-apps-352l) — Wasp / DEV Community
