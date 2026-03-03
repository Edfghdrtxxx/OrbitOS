# OrbitOS — My Vault

A self-contained iterative daily working AI-collaborative repo. Everything orbits around me — projects, knowledge, and daily tasks stay in motion and connected. AI handles the organizing; I focus on thinking.

## Folder Structure

```
00_Inbox/         → Drop anything here. AI processes it later.
10_Daily/         → Daily logs. /start-my-day generates these.
20_Project/       → Active projects (flat, linked to areas via frontmatter).
30_Research/      → Deep dives — papers, technologies, country guides.
40_Wiki/          → Atomic concepts — one idea per note, heavily linked.
50_Resources/     → Curated feeds — newsletters, product launches.
90_Plans/         → Execution plans, archived when done.
99_System/        → Templates, prompts, archives.
Excalidraw/       → Visual diagrams, flowcharts, and drawings.
```

## How I Use the Commands

| When I want to... | I run | What happens |
|---|---|---|
| Start my morning | `/start-my-day` | Reviews yesterday, surfaces active projects, processes inbox, generates today's daily note |
| Turn an idea into a project | `/kickoff` | Structures it with C.A.P. layout (Context, Actions, Progress), asks clarifying questions |
| Deep-dive a topic (new ML paper, visa pathway, TPC technique) | `/research <topic>` | Two-agent workflow: researches, then organizes into 30_Research/ and 40_Wiki/ with wikilinks |
| Get a quick answer without creating notes | `/ask <question>` | Direct answer, optionally saves to wiki |
| Process a blob of text (meeting notes, article, lecture) | `/parse-knowledge` | Breaks it into areas + wiki entries, files everything properly |
| Explore an idea before committing | `/brainstorm` | Interactive session, can optionally become a project |
| Clean up finished work | `/archive` | Moves completed projects and processed inbox items to 99_System/Archives/ |
| Catch up on AI news | `/ai-newsletters` | Curates TLDR AI, The Rundown AI into 50_Resources/ |
| See what's shipping in AI | `/ai-products` | Product Hunt, HN, GitHub, Reddit roundup |
| Break down complex tasks | `/breakdown-tasks <task>` | Stratified decomposition with estimates and dependencies, inserted into daily note |
| Estimate daily workload | `/estimate-time` | Reasoning-based time estimates for today's tasks at subtask resolution |
| Create an atomic wiki note | `/atomic-note` | Creates a single-concept note in 40_Wiki/ with auto-linking and wikilink discovery |
| Hand off work to another session | `/handoff-prompt` | Generates a constraint-based handoff prompt without over-prescribing implementation |
| Review wiki knowledge | `/wiki-review` | Spaced-repetition review of Wiki notes using forgetting-curve scheduling |

## Obsidian Features

| Skill | When I need it |
|---|---|
| `obsidian-markdown` | Wikilinks, callouts, embeds, frontmatter |
| `obsidian-bases` | Database-like views of notes (.base files) |
| `json-canvas` | Visual maps and flowcharts (.canvas files) |

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

## System Files

- **CLAUDE.md** — Authoritative system instructions, user context, rules. This is what Claude Code reads.
- **AGENTS.md** — Codex behavior instructions (mirrors CLAUDE.md for OpenAI Codex).
- **99_System/Templates/** — Note templates (Daily, Project, Wiki, Inbox, Content).
- **99_System/Prompts/** — AI personas for domain-specific tasks.
