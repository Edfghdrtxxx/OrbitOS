# Grok tool map for OrbitOS skills

OrbitOS skills under `.agents/skills/` were authored for Claude Code. When running in **Grok Build**, map Claude tool names and patterns as follows. Apply this map automatically whenever a skill body names a Claude-only tool.

## Tool name map

| Claude Code name | Grok Build action |
|---|---|
| `AskUserQuestion` | `ask_user_question` |
| `Agent` (spawn) | `spawn_subagent` — put role, scope, and output contract in the prompt |
| `subagent_type: Explore` | `spawn_subagent` with `subagent_type: "explore"` (or `capability_mode: "read-only"`) |
| `subagent_type: Plan` | `spawn_subagent` with `subagent_type: "plan"`, or `enter_plan_mode` when appropriate |
| `subagent_type: general-purpose` | `spawn_subagent` with `subagent_type: "general-purpose"` |
| `SendMessage` (resume agent) | No direct equivalent — re-dispatch with a handoff summary, or continue sequentially |
| `Skill` / SlashCommand / “invoke `/name`” | `read_file` on `.agents/skills/<name>/SKILL.md` and follow it in-process; for isolation use `spawn_subagent` with that skill body |
| `Read` | `read_file` |
| `Write` | `write` |
| `Edit` | `search_replace` (or read + rewrite for multi-hunk edits) |
| `Glob` | `list_dir` + path filtering; shell `find` only when needed |
| `Grep` | `grep` |
| `Bash` | `run_terminal_command` |
| `WebFetch` | `web_fetch` (prefer `/defuddle` skill / Defuddle CLI when available for article pages) |
| `WebSearch` | `web_search` |
| `TodoWrite` | `todo_write` |
| `TaskCreate` / `TaskUpdate` / `TaskList` / `TaskGet` | `todo_write` + optional scratch under `99_System/.scratch/<session-id>/` |
| `ToolSearch` | `search_tool` (then `use_tool` for MCP) |

## Skill chaining

When a skill says “run `/daily-note-addition`” or “invoke the Skill tool”:

1. Resolve the skill directory under `.agents/skills/<skill-name>/`.
2. Read `SKILL.md` (and `evolution.md` if the skill’s Step 0 requires it).
3. Execute that workflow with Grok tools — do not skip nested skills silently.

## Paths

- Vault root = git root of this workspace (on this Mac: `/Users/Reid Hu/OrbitOS`).
- Treat legacy `D:/obsidian/OrbitOS` and `D:\obsidian\OrbitOS\...` as the vault root.
- Treat related-repo tables that still list Windows paths using the Mac table in `CLAUDE.md`.

## Multi-agent skills

`/orchestrate`, `/dispatch`, `/research`, and dual-agent `/kickoff` should use `spawn_subagent` where the skill would have used Claude `Agent`/`Task`. If subagent fan-out is unnecessary for a small task, collapse to a single-agent path and tell the user.
