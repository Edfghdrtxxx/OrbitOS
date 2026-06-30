# Evolution — orchestrate-lite-DWorkflow

Binding constraints (read in step 0). Terse by design — drop nothing load-bearing.

- **No worktree isolation in this vault** — it leaks to the main tree via the backup cron. Serialize same-file writes in the dynamic Workflow; never rely on worktree separation.
- **No-spill schemas** — every `agent({schema})` return is summary-only: short plain text, no files/tags/arrays inside the summary string (spill aborts the run). Use `additionalProperties:true`.
- **Skeptics flag uncertainty**, never assert absence — pair each implementer with a skeptic.
- **Delegate, never deep-read** — dispatch sub-agents for file contents; read only their output and the final report.
- **Long jobs run via `Bash run_in_background`** from the orchestrator, never inside a workflow sub-agent (zombie shells on silent death).
