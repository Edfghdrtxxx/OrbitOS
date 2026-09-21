# Evolution — /tmux-orchestrator

Folded from archived `/orchestrate-v3` (2026-09-15). Identity shifted to pure-PM Orchestrator (delegate only) over tmux workers.

## Binding (terse)

- **Pure-PM:** main never implements, edits deliverables, or writes code — only schedules, briefs, wakes, re-dispatches, reports. Exception: user-ordered skill self-fix (this file / SKILL.md ops).
- **Reviewers flag uncertainty** — never assert absence without a thorough check.
- **Structural refactors need impact analysis** — search producers/consumers of paths (skills, templates, scripts, system files).
- **No worktree isolation in this vault** — backup cron can leak worktree edits; serialize same-file writes.
- **Long jobs:** hub/bash background + sentinel — never agent sleep-polling loops (zombie shells on silent death).
- **Background-agent reports sometimes fail to relay** — if idle without a report, message the agent to resend.
- **Session stickiness:** once invoked, keep coordinating until the user stops multi-agent mode.
- **Glass = session group, not `attach -t SESSION:WIN`.** Same-session clients share one current window; fleet tabs go identical. Use `glass-$WIN` grouped with `firstmate` (`new-session -t firstmate -s glass-$WIN`), then `select-window` + `attach-session -t glass-$WIN`.
- **Post-spawn capture once per WIN.** Grok “trust this directory?” blocks the real prompt; send `y`+Enter. Window exists ≠ agent working.

## 2026-09-15
### Lessons
- When this skill is activated, launch worker agents through tmux (`firstmate` windows + omp/grok/agy + `.done` sentinels). Host inherent multi-agent tools (`vibe_spawn`, native `task`/`agent()`) are **fallbacks only**, not the primary worker path.
- On every spawn, print a terminal-visible **agent → task roster** (window name, CLI, one-line task). Keep it updated if the fleet changes mid-run.
- **Glass isolation (recurrent failure 2026-09-15):** `tmux attach -t firstmate:$WIN` is **wrong for multi-tab fleets** — all clients follow one current window (tabs look identical; status bar shows one `WIN*`). **Correct:** per-WIN grouped session `glass-$WIN` (`new-session -d -s glass-$WIN -t firstmate`), `select-window -t glass-$WIN:$WIN`, `attach-session -t glass-$WIN`. Verify with `list-clients` → distinct `win=` per glass session. SKILL.md §2 updated to match.
- **Grok trust gate:** new cwd often pauses on “Do you trust the contents of this directory?”. Fleet spawn must `capture-pane` once per WIN and send `y` if stuck; otherwise only the last-focused pane may ever run.

### User Preferences
- Tmux is default execution surface for `/tmux-orchestrator` and `/orchestrate-v3`; inherent multi-agent tools only when tmux/CLI path is unavailable.

