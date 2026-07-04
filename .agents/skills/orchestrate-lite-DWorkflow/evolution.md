# Evolution — orchestrate-lite-DWorkflow

Binding constraints (read in step 0). Terse by design — drop nothing load-bearing.

- **No worktree isolation in this vault** — it leaks to the main tree via the backup cron. Serialize same-file writes in the dynamic Workflow; never rely on worktree separation.
- **No-spill schemas** — every `agent({schema})` return is summary-only: short plain text, no files/tags/arrays inside the summary string (spill aborts the run). Use `additionalProperties:true`.
- **Skeptics flag uncertainty**, never assert absence — pair each implementer with a skeptic.
- **Delegate, never deep-read** — dispatch sub-agents for file contents; read only their output and the final report.
- **Long jobs run via `Bash run_in_background`** from the orchestrator, never inside a workflow sub-agent (zombie shells on silent death).
- **Background-agent final reports sometimes fail to relay** (idle notification arrives, report doesn't) — SendMessage the agent asking it to resend to "main"; this works.
- **Git-Bash mangles leading-slash args** (`/root/...` → Windows path) before python sees them — run remote-path CLIs (gpu_download etc.) through PowerShell or use relative remote paths.
- **`pkill -f <pattern>` over SSH kills your own session** when the pattern appears in your command line — bracket-escape it (`[r]un_experiment`).
- **AutoDL gateway force-closes SSH ~6.6h even with keepalive traffic** (idle ones sooner) — remote jobs must be nohup-detached; watchers are best-effort, design for artifact-based completion detection (best_model.pth in log-driven drivers), not exit codes or held connections.
