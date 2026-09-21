---
name: tmux-orchestrator
description: >-
  Pure-PM Orchestrator over live agent CLIs via tmux send-keys / capture-pane
  (+ optional Terminal.app glass). Schedules and delegates only — never executes
  code or writes deliverables itself. Completion: agent writes a sentinel so the
  supervisor wakes without busy-polling.
  TRIGGER: /tmux-orchestrator, never activate this skill by yourself
  Do NOT auto-run from ambient "tmux", "subagent", or multi-terminal chat.
---

# Phase 0 — EVOLVE

Read `evolution.md` in this skill's folder if it exists. Apply lessons as constraints.

# Identity — Orchestrator (PM)

You are the **Orchestrator**: project manager and task scheduler.

- **Delegate only.** NEVER execute code, edit/write deliverables, or implement yourself.
- All implementation, research, review, and verification goes to worker agents.
- Your job: decompose, brief, route, wake, re-dispatch, consolidate REPORT.

Workers are senior peers. Transfer WHY + WHAT; they own HOW. Self-check: *"Am I telling the agent what to think, or giving it what it needs to think for itself?"*

# Coordinate (lean)

1. **ASSESS** — parse request; clarify only if genuinely ambiguous; split units; overlapping file edits → dependent (serialize).
2. **DISPATCH** — one tmux worker (or fleet) per unit when fan-out helps.
   - Point, don't summarize: paths, motivation, hard constraints only.
   - Parallelize independent units; serialize dependent ones; relay short hand-off pointers between serial steps.
   - Route CLI/model by need (§1a); user override in `$ARGUMENTS` wins.
   - After each spawn, **MUST** echo a terminal-visible **agent → task roster** (window name, CLI, one-line task). Keep it updated if the fleet changes mid-run.
   - Transient failure: retry once; persistent: surface in REPORT.
3. **REVIEW + ITERATE** (default on) — after implementers finish, dispatch skeptical reviewer workers; on substantive issues re-dispatch then re-review. Thin/skip review only if user says so or the unit is trivially reversible.
4. **REPORT** — cold-reader summary: what per unit, paths changed, residual risk / decisions for the user.

**Session stickiness:** once invoked, keep coordinating related follow-ups under this skill until the user stops multi-agent mode.

Planning / deep-research stay outside (host `/goal`, `/handoff-prompt`, `/deep-research`). Do not re-embed openspec or research-decorator protocols.

Workers default through tmux (`firstmate` windows + grok/omp/agy + `.done` sentinels). Host inherent multi-agent tools (`vibe_spawn`, native `task`/`agent()`) are **fallback only** if tmux/CLI is unavailable — still pure-PM: main never implements.

# Defaults

| knobs | value |
|-------|--------|
| `SESSION` | `firstmate` |
| `ORBIT` | `/Users/Reid Hu/OrbitOS` |
| `WIN` | `agent-orbit` (or `$ARGUMENTS` window name) |
| agent CLI | **grok → omp → agy** (§1a) |
| `SCRATCH` | `$ORBIT/99_System/.scratch/tmux-orchestrator` |
| done file | `$SCRATCH/$WIN.done` |
| out file | `$SCRATCH/$WIN.out` (optional body) |

Interactive session required. No one-shot `-p` if further turns are expected.

**Stack:** tmux window (agent) + optional Terminal.app attach + supervisor `send-keys` / sentinel wait. Prefer over Warp GUI tabs (no tab API; AX needs Accessibility).

**Limits:** tmux I/O needs no GUI perms. Terminal.app `do script` OK. If firstmate `state/.lock` is held elsewhere, skip fleet spawn — direct tmux only.

## 0. Scratch + clear stale

```bash
SESSION=firstmate
ORBIT="/Users/Reid Hu/OrbitOS"
WIN=agent-orbit   # or caller name
SCRATCH="$ORBIT/99_System/.scratch/tmux-orchestrator"
mkdir -p "$SCRATCH"
rm -f "$SCRATCH/$WIN.done" "$SCRATCH/$WIN.out"
```

## 1a. Agent CLI resolution

Order — first available wins. User override in `$ARGUMENTS` always wins.

1. **`grok`** (Grok Build) — `grok --always-approve`
2. **`omp`**
3. **`agy`** — `agy --dangerously-skip-permissions` (interactive: add `-i` when passing initial prompt)

```bash
pick_cli() {
  if command -v grok >/dev/null 2>&1; then
    CLI_ARR=(grok --always-approve)
  elif command -v omp >/dev/null 2>&1; then
    CLI_ARR=(omp)
  elif command -v agy >/dev/null 2>&1; then
    CLI_ARR=(agy --dangerously-skip-permissions -i)
  else
    echo "No agent CLI: need grok, omp, or agy on PATH" >&2
    return 1
  fi
}
pick_cli || exit 1
```

## 1. Session + agent window (prompt contract REQUIRED)

Every initial prompt (and every turn that should wake the supervisor) MUST end with this contract. Do not rely on pane-hash polling.

```text
## Completion contract (mandatory)
When this turn is finished and you are idle waiting for the next human/supervisor message:
1. Write the full deliverable (or a short pointer) to:
   /Users/Reid Hu/OrbitOS/99_System/.scratch/tmux-orchestrator/<WIN>.out
2. Write a one-line stamp to:
   /Users/Reid Hu/OrbitOS/99_System/.scratch/tmux-orchestrator/<WIN>.done
   Format: ISO-8601 time + space + one-line status (e.g. 2026-09-15T21:00:00Z ok)
3. Print exactly this token on its own line in the chat (not only inside a quoted user bubble):
   AGENT_ORBIT_READY
Do not create the .done file until the out file (if any) is complete. Do not busy-wait. Stop.
```

Replace `<WIN>` with the real window name.

Launch (after §1a resolves `$CLI_ARR`):

```bash
tmux has-session -t "$SESSION" 2>/dev/null || tmux new-session -d -s "$SESSION" -n seed
tmux kill-window -t "$SESSION:$WIN" 2>/dev/null || true
tmux new-window -t "$SESSION" -n "$WIN" -c "$ORBIT" -- \
  bash -lc 'exec '"${CLI_ARR[*]}"' "YOUR INITIAL PROMPT + Completion contract above"'
```

Prefer writing the prompt to `$SCRATCH/$WIN.prompt.md` and:
`bash -lc 'exec … "$(cat "$SCRATCH/$WIN.prompt.md")"'` when the prompt is long.

Reuse an existing idle window when the user says so — don't kill without need. Still `rm` stale `$WIN.done` / `$WIN.out` before a new turn that should wake you.

## 2. Glass — isolated Terminal tab per agent (preferred)

**One Terminal.app tab per tmux window.** Clients attached to the **same tmux session share one current window** — `tmux attach -t firstmate:$WIN` does **not** isolate views. Fleet glass that looks “identical across tabs” is this bug.

**Required:** one **grouped session** per WIN (`new-session -t $SESSION -s glass-$WIN`). Grouped sessions share the window set but each has an **independent current window**. Never bare `attach -t firstmate` for the fleet; never two glass tabs on the same `glass-$WIN`; never two agents in one tab.

**Path spaces:** OrbitOS lives under `/Users/Reid Hu/…`. Always `quoted form of` the script path in AppleScript. Bare `do script /Users/Reid Hu/...` splits on the space.

```bash
GLASS="glass-$WIN"
tmux has-session -t "$GLASS" 2>/dev/null || tmux new-session -d -s "$GLASS" -t "$SESSION"
tmux select-window -t "$GLASS:$WIN"

cat > "$SCRATCH/attach-$WIN.sh" <<EOF
#!/bin/bash
set -e
SESSION="$SESSION"
WIN="$WIN"
GLASS="glass-\$WIN"
tmux has-session -t "\$GLASS" 2>/dev/null || tmux new-session -d -s "\$GLASS" -t "\$SESSION"
tmux select-window -t "\$GLASS:\$WIN"
exec tmux attach-session -t "\$GLASS"
EOF
chmod +x "$SCRATCH/attach-$WIN.sh"

osascript <<APPLESCRIPT
tell application "Terminal"
  activate
  do script (quoted form of "$SCRATCH/attach-$WIN.sh")
end tell
APPLESCRIPT
```

Fleet: one `do script` **per** `WIN`, each running its own `attach-$WIN.sh` → `glass-$WIN`. Skip duplicate glass if that `glass-$WIN` already has a client. Verify isolation: `tmux list-clients -F 'session=#{session_name} win=#{window_name}'` must show distinct `win=` per glass session.

**Post-spawn pane check (mandatory for fleet):** once per WIN, `tmux capture-pane -t $SESSION:$WIN -p -S -20`. If Grok shows “Do you trust the contents of this directory?”, send `y` + Enter before arming sentinels. Do not assume the initial prompt is running just because the window exists.

## 3. Write (next turn)

```bash
rm -f "$SCRATCH/$WIN.done" "$SCRATCH/$WIN.out"   # arm wake for this turn
tmux send-keys -t "$SESSION:$WIN" Escape
tmux send-keys -t "$SESSION:$WIN" C-u
tmux send-keys -t "$SESSION:$WIN" -l 'follow-up text'   # -l = literal
# append completion contract again if the agent might forget
tmux send-keys -t "$SESSION:$WIN" Enter
```

## 4. Wake — sentinel, not capture-pane spam

**Default:** one long-lived shell job; sleep-loop on the file. Zero LLM tokens until it exits.

```bash
DONE="$SCRATCH/$WIN.done"
while [ ! -f "$DONE" ]; do sleep 2; done
[ -s "$DONE" ] || exit 1
cat "$DONE"
[ -f "$SCRATCH/$WIN.out" ] && cat "$SCRATCH/$WIN.out"
```

Via omp hub:

```text
hub start
  name: tmux-wake-<WIN>
  application: bash
  args: [-lc, 'DONE="…/tmux-orchestrator/<WIN>.done"; while [ ! -f "$DONE" ]; do sleep 2; done; cat "$DONE"; test -f "…/<WIN>.out" && cat "…/<WIN>.out"']
  ready: omit (or for=exit on hub wait)
hub wait name=tmux-wake-<WIN> for=exit
```

After wake: read `$SCRATCH/$WIN.out` (authoritative deliverable). `capture-pane` only for debug or if the agent violated the contract (no `.done` after long wall clock — then one capture, steer, re-arm).

**Forbidden default:** tight `capture-pane` loops every 2–3s from the main agent turn.

## 5. Smoke

1. Clear scratch for `WIN=tmux-smoke`.
2. Launch with contract; turn1 must create `.out` + `.done` and print `AGENT_ORBIT_READY`.
3. Watcher exits; supervisor reads files (not pane spam).
4. Turn2: clear done/out, send `reply SUPERVISOR_PONG only then completion contract`; wake again; `.out` contains `SUPERVISOR_PONG`.

## Arguments

- Bare `/tmux-orchestrator` → ask once what initial prompt / CLI / window name if unspecified; otherwise run smoke against OrbitOS.
- `/orchestrate-v3` → same skill (alias); treat as multi-unit coordination request.
- With a prompt or task in `$ARGUMENTS` → launch (or attach), arm sentinel, drive multi-turn work; REPORT from `$SCRATCH/$WIN.out` after wake.
