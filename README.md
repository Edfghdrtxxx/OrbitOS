# OrbitOS — My Vault

A self-contained iterative daily working AI-collaborative repo. Everything orbits around me — projects, knowledge, and daily tasks stay in motion and connected. AI handles the organizing; I focus on thinking.

## Folder Structure

```
10_Daily/         → Daily logs in YYYY-MM/ folders. /start-my-day generates these. Captures land here via /daily-note-addition.
20_Project/       → Active projects (flat, linked to areas via frontmatter).
30_Research/      → Deep dives — physics reference notes, supervisor research profiles.
40_Wiki/          → Atomic concepts — 341 notes across 9 topic clusters, heavily linked.
50_Resources/     → Curated feeds, literature, attachments, meeting outlines.
90_Plans/         → Execution plans, archived when done.
99_System/        → Templates, prompts, bases dashboards, archives.
```

## How I Use the Commands

| When I want to...                                             | I run                           | What happens                                                                                 |
| ------------------------------------------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------- |
| Start today's GRE Physics timed pack                         | `/practice-physics-gre-set`     | Resolves today's a0 pack, reuses the live rich Prep tab (same origin as progress), launches `#/practice/pack/NN` |
| Drill GRE Physics repeat misses                               | `/physics-gre-miss-drill`       | Ranks misses across mocks, launches a targeted drill in the live Prep tab, routes each gap to a Recall card or `/learn` |
| Deep-dive a topic (new ML paper, visa pathway, TPC technique) | `/deep-research` (host)         | Host deep-research / workflow — vault `/research` archived 2026-07-29                        |
| Learn something with guided tutoring                          | `/learn <topic>`                | Diagnose, scaffold, one step per turn; records to `60_Learning_Progress/` + index; compile finished derivations to `30_Research/` |
| Clean up finished work                                        | `/archive`                      | Moves completed projects to 99_System/Archives/                                              |
| Break down complex tasks                                      | `/breakdown-tasks <task>`       | Stratified decomposition with estimates and dependencies, inserted into daily note           |
| Create an atomic wiki note                                    | `/atomic-note`                  | Creates a single-concept note in 40_Wiki/ with auto-linking and wikilink discovery           |
| Hand off work to another session                              | `/handoff-prompt`               | Generates a constraint-based handoff prompt without over-prescribing implementation          |
| Re-test learned knowledge                                     | `/retention`                    | Quiz Progress-context threads; log in Retention-context. Replaces `/wiki-review`             |
| Explain a concept simply                                      | `/Feynman-Technique`            | Feynman-style explanation as if teaching a 12-year-old                                       |
| Polish English writing                                        | `/phrasing-refining`            | Grammar, idiom, and naturalness review with terse inline corrections                         |
| Stress-test an idea (`/llm-council-v2` only)                  | `/llm-council-v2`               | Explicit invoke only. Multi-model council; round-table cross-examination + synthesis         |
| Self-critique current work                                    | `/reflect`                      | Adversarial review of current session trajectory                                             |
| First-principles discussion or critique                       | `/elon-musk`                    | Elon-flavored thinking partner — discussion, critique, The Algorithm when a draft needs it   |
| Confirm what I actually mean                                  | `/align`                        | Bidirectional steelman; optional file write-back (think from context, read before writing)   |
| Park a quick thought in today's note                          | `/daily-note-addition`          | Adds flat checkbox captures to the daily note without full triage                            |
| Coordinate multi-agent work (pure-PM via tmux)                | `/tmux-orchestrator`                  | Orchestrator delegates only; tmux workers + sentinel wake; assess → dispatch → review → report |
| Orchestrate a judgment task (analyze, rank, decide, ship)     | `/orchestrate-trust-taste`      | Subagents gather evidence; main owns judgment and taste; reproduce before ranking; lock with AC; end-to-end review |
| Extract web page content                                      | `/defuddle`                     | Clean markdown extraction from URLs, removing clutter                                        |
| Wrap up my day                                                | `/end-my-day`                   | Evening review, deferred task identification, wind-down                                      |
| Create a diagram                                              | `/excalidraw-diagram-generator` | Generates Excalidraw diagrams from natural language                                          |
| Build an MCP server                                           | `/mcp-builder`                  | Step-by-step guide for creating MCP servers (Python/Node)                                    |
| Create a NotebookLM podcast                                   | `/notebooklm`                   | Full Google NotebookLM API — notebooks, sources, artifacts                                   |
| Evolve skill definitions                                      | `/evolve-skills`                | Persists session lessons into per-skill evolution.md files                                   |
| Anchor to my game framework                                   | `/anchor-game-framework`        | Surfaces identity statement, 1-year goal, daily levers                                       |
| Summon Kun / how Kun thinks                                     | `/kun`                          | Answers as Kun thinks, builds, or solves problems                                            |

## Obsidian Features

| Skill | When I need it |
|---|---|
| `obsidian-markdown` | Wikilinks, callouts, embeds, frontmatter |
| `obsidian-bases` | Database-like views of notes (.base files) — 5 dashboards in 99_System/Bases/ |
| `obsidian-cli` | Vault operations, plugin dev, search, and DOM inspection from CLI |

## Skill Categories

Skills live under `.agents/skills/` (see folder listing). Category table below is the navigational index — not a closed census. Archived skills: `99_System/Archives/skills/` (each with `ARCHIVED.md`). Lark/Feishu skills: `99_System/lark-skills/`, loaded on demand via `99_System/memory/lark_skills.md`.

| Category | Skills |
|---|---|
| **Daily Workflow** | `start-my-day`, `end-my-day`, `breakdown-tasks`, `llm-council-v2`, `daily-note-addition`, `practice-physics-gre-set`, `physics-gre-miss-drill` |
| **Knowledge Management** | `archive`, `atomic-note` |
| **Obsidian Features** | `obsidian-markdown`, `obsidian-bases`, `obsidian-cli`, `excalidraw-diagram-generator` |
| **Learning** | `learn`, `retention`, `Feynman-Technique`, `phrasing-refining`, `vocabulary-absorption` |
| **Meta/Utility** | `reflect`, `elon-musk`, `evolve-skills`, `handoff-prompt`, `anchor-game-framework`, `align`, `kun`, `defuddle`, `orchestrate-trust-taste` |
| **Tools** | `mcp-builder`, `notebooklm`, `storage-analyzer`, `markitdown`, `pdf`, `docx`, `design-image-claude`, `phone-harness`, `academic-ppt`, `web-access`, `tmux-orchestrator` |

> Note: README previously listed `ai-newsletters` / `ai-products`; those skill folders are not present on disk.

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

- **AGENTS.md** — Single project rules file for Grok Build, Claude Code, and other hosts (vault structure, vault memory; minimal host-specific rules).
- **`.grok/`** — Grok Build project layer: `config.toml` (no skill bridges by design; no tool-name maps — trust the model).
- **99_System/Templates/** — Note templates (Daily, Project, Wiki, Inbox, Content, Derivation).
- **99_System/Prompts/** — 16 AI personas across Finance, Health, General, Learning, and Software Engineering domains.
- **99_System/Bases/** — 5 Obsidian Bases dashboards (Projects, Projects Archive, Knowledge, Wiki Review, Integrated Sources).
- **99_System/memory/** — Portable harness memory promoted into the vault (e.g. necessity-check).
- **99_System/Game_Framework.md** — Strategic life/goal framework based on Dan Koe's method: anti-vision, vision, identity, priority stack, daily levers.
- **.agents/skills/** — skill definitions (symlinked to `.claude/skills/`). Index: Skill Categories above; authoritative set = directory listing.
