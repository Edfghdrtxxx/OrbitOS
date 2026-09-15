---
name: preference_clear_temp_files
description: After work that creates disposable files, clear them before yielding
type: preference
---
**Trigger:** install/download, gate or pipeline run, smoke test, mktemp/extract, agent scratch, or any step that left disposable artifacts.

**Rule:** Before yielding, remove temps the session created. Do not leave extract dirs, stale worktrees, smoke outputs, or one-off scratch.

**Keep:** project data (`runs/`, datasets, named notes), tool config/state the user still needs, and anything not created by this session — ask if unsure.
