# OrbitOS — My Vault

A self-contained iterative daily working AI-collaborative repo. Everything orbits around me — projects, knowledge, and daily tasks stay in motion and connected. AI handles the organizing; I focus on thinking.

## Folder Structure

```
10_Daily/         → Daily logs. /start-my-day generates these. Captures land here via /daily-note-addition.
20_Project/       → Active projects (flat, linked to areas via frontmatter).
30_Research/      → Deep dives — physics reference notes, supervisor research profiles.
40_Wiki/          → Atomic concepts — ~195 notes across 9 topic clusters, heavily linked.
50_Resources/     → Curated feeds, literature, attachments, meeting outlines.
90_Plans/         → Execution plans, archived when done.
99_System/        → Templates, prompts, bases dashboards, archives.
```

## How I Use the Commands

| When I want to... | I run | What happens |
|---|---|---|
| Start my morning | `/start-my-day` | Reviews yesterday, surfaces active projects, generates today's daily note |
| Turn an idea into a project | `/kickoff` | Structures it with C.A.P. layout (Context, Actions, Progress), asks clarifying questions |
| Deep-dive a topic (new ML paper, visa pathway, TPC technique) | `/research <topic>` | Two-agent workflow: researches, then organizes into 30_Research/ and 40_Wiki/ with wikilinks |
| Get a quick answer without creating notes | `/ask <question>` | Direct answer, optionally saves to wiki |
| Explore an idea before committing | `/brainstorm` | Interactive session, can optionally become a project |
| Clean up finished work | `/archive` | Moves completed projects to 99_System/Archives/ |
| Catch up on AI news | `/ai-newsletters` | Curates TLDR AI, The Rundown AI into 50_Resources/ |
| See what's shipping in AI | `/ai-products` | Product Hunt, HN, GitHub, Reddit roundup |
| Break down complex tasks | `/breakdown-tasks <task>` | Stratified decomposition with estimates and dependencies, inserted into daily note |
| Estimate daily workload | `/estimate-time` | Reasoning-based time estimates for today's tasks at subtask resolution |
| Create an atomic wiki note | `/atomic-note` | Creates a single-concept note in 40_Wiki/ with auto-linking and wikilink discovery |
| Hand off work to another session | `/handoff-prompt` | Generates a constraint-based handoff prompt without over-prescribing implementation |
| Review wiki knowledge | `/wiki-review` | Spaced-repetition review of Wiki notes using forgetting-curve scheduling |
| Derive a formula step-by-step | `/guide-derivation` | Guided derivation of physics/math formulas with scaffolded steps |
| Explain a concept simply | `/Feynman-Technique` | Feynman-style explanation as if teaching a 12-year-old |
| Annotate a confusing note | `/insert-Feynman` | Inserts Feynman explanation callouts directly into the note file |
| Polish English writing | `/phrasing-refining` | Grammar, idiom, and naturalness review with terse inline corrections |
| Stress-test an idea | `/idea-debate-team` | Multi-agent debate from distinct lenses to expose blind spots |
| Self-critique current work | `/reflect` | Adversarial review of current session trajectory |
| Park a quick thought in today's note | `/daily-note-addition` | Adds flat checkbox captures to the daily note without full triage |
| Dispatch parallel agents (heavyweight) | `/orchestrate` | Decomposes a task, dispatches sub-agents, reviews, synthesizes results |
| Dispatch parallel agents (lightweight) | `/dispatch` | Fast sub-agent dispatch — skips decomposition, restatement, and formal review |
| Extract web page content | `/defuddle` | Clean markdown extraction from URLs, removing clutter |
| Wrap up my day | `/end-my-day` | Evening review, deferred task identification, wind-down |
| Create a diagram | `/excalidraw-diagram-generator` | Generates Excalidraw diagrams from natural language |
| Build an MCP server | `/mcp-builder` | Step-by-step guide for creating MCP servers (Python/Node) |
| Create a NotebookLM podcast | `/notebooklm` | Full Google NotebookLM API — notebooks, sources, artifacts |
| Evolve skill definitions | `/evolve-skills` | Persists session lessons into per-skill evolution.md files |
| Anchor to my game framework | `/anchor-game-framework` | Surfaces identity statement, 1-year goal, daily levers |

## Obsidian Features

| Skill | When I need it |
|---|---|
| `obsidian-markdown` | Wikilinks, callouts, embeds, frontmatter |
| `obsidian-bases` | Database-like views of notes (.base files) — 5 dashboards in 99_System/Bases/ |
| `obsidian-cli` | Vault operations, plugin dev, search, and DOM inspection from CLI |
| `json-canvas` | Visual maps and flowcharts (.canvas files) |

## Skill Categories

33 skills across 7 categories:

| Category | Count | Skills |
|---|---|---|
| **Daily Workflow** | 8 | `start-my-day`, `end-my-day`, `ask`, `brainstorm`, `breakdown-tasks`, `estimate-time`, `idea-debate-team`, `daily-note-addition` |
| **Knowledge Management** | 5 | `kickoff`, `archive`, `atomic-note`, `research`, `wiki-review` |
| **Obsidian Features** | 5 | `obsidian-markdown`, `obsidian-bases`, `obsidian-cli`, `json-canvas`, `excalidraw-diagram-generator` |
| **Learning** | 4 | `Feynman-Technique`, `guide-derivation`, `phrasing-refining`, `insert-Feynman` |
| **Content Curation** | 2 | `ai-newsletters`, `ai-products` |
| **Meta/Utility** | 7 | `orchestrate`, `dispatch`, `reflect`, `evolve-skills`, `handoff-prompt`, `anchor-game-framework`, `defuddle` |
| **Tools** | 2 | `mcp-builder`, `notebooklm` |

## C.A.P. Project Layout

Every project follows:
- **Context** — What am I trying to achieve? What does success look like?
- **Actions** — Phased task checklists
- **Progress** — Timestamped updates linking back to daily notes

## Linking Convention

```markdown
[[NoteName]]                  # Link to another note
[[NoteName|Display Text]]     # Link with custom label
![[NoteName]]                 # Embed entire note inline
![[NoteName#Section]]         # Embed a specific section
```

Link liberally. The AI creates connections automatically, but manual links are just as valuable.

## Community Plugins

| Plugin | Purpose |
|---|---|
| `obsidian-git` | Auto-backup vault to Git |
| `obsidian-excalidraw-plugin` | Visual diagrams and drawings |
| `obsidian-spaced-repetition` | Flashcard-style review scheduling |
| `obsidian42-brat` | Beta plugin installer |
| `claudian` | Claude AI integration inside Obsidian |
| `terminal` | In-vault terminal |
| `dragger` | Drag-and-drop note reordering |

## System Files

- **CLAUDE.md** — Authoritative system instructions, user context, rules. This is what Claude Code reads.
- **99_System/Templates/** — Note templates (Daily, Project, Wiki, Inbox, Content, Derivation).
- **99_System/Prompts/** — 16 AI personas across Finance, Health, General, Learning, and Software Engineering domains.
- **99_System/Bases/** — 5 Obsidian Bases dashboards (Projects, Projects Archive, Knowledge, Wiki Review, Integrated Sources).
- **99_System/Game_Framework.md** — Strategic life/goal framework based on Dan Koe's method: anti-vision, vision, identity, priority stack, daily levers.
- **.agents/skills/** — 33 skill definitions (symlinked to .claude/skills/).
