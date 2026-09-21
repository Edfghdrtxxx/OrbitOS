# Evolution — /orchestrate-v3

Folded from archived `/orchestrate`, `/dispatch`, and `/orchestrate-lite-DWorkflow` (2026-07-29). Dropped pure-PM / Explore-for-reads / mandatory-restatement doctrine as obsolete for frontier models.

## Binding (terse)

- **Reviewers flag uncertainty** — never assert absence without a thorough check; confidence-flag factual claims.
- **Structural refactors need impact analysis** — when renaming/moving structure, search producers/consumers of paths (skills, templates, scripts, system files), not only "what is this file?"
- **No worktree isolation in this vault** — backup cron can leak worktree edits; serialize same-file writes instead. Worktree is not free isolation here.
- **Long jobs:** run via orchestrator/main `Bash` with background/run_in_background — never agent sleep-polling loops (zombie shells on silent death).
- **Background-agent reports sometimes fail to relay** — if idle notification arrives without a report, message the agent to resend to main.
- **Session stickiness:** once invoked, keep coordinating related work under this skill until the user stops multi-agent mode.

## Host / remote ops (when relevant)

- Prefer relative remote paths or a host shell that does not mangle leading-slash args.
- `pkill -f` over SSH can kill your session if the pattern matches the command line — bracket-escape (`[r]un_experiment`).
- Long remote jobs: nohup/detach; design for artifact-based completion, not held SSH.
