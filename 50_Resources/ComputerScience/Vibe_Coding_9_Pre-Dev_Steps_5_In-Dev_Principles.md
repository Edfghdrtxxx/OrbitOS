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

## Terminology

| Term | Definition |
|------|-----------|
| **PRD** | Product Requirement Document — feature list, user flows, acceptance criteria |
| **MVP** | Minimum Viable Product — smallest functional slice to validate core value |
| **Git** | Version control tool for code history, branching, and safe rollback |
| **Context (上下文)** | The global project information AI relies on, maintained via fixed documents (PRD.md, arc.md, project.md) |

## Source

[Bilibili Video: VibeCoding开发前9个步骤和开发中5个关键点](https://www.bilibili.com/video/BV1kAw2z9E2s) — 姜学长
