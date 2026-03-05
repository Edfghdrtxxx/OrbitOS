---
area:
tags: [git, version-control]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Git Submodules

## Definition

A Git submodule is a reference to another Git repository embedded inside a parent repository at a specific commit. The parent tracks only the commit hash, not the submodule's file contents — so untracked files (like `.venv`) inside the submodule are lost when it is re-initialized.

## Key Points

- The submodule directory contains a `.git` **file** (not folder) pointing to `.git/modules/<path>` in the parent repo
- Operations like `git submodule update` reset the submodule working directory to the tracked commit, **deleting all untracked files**
- Converting an existing directory to a submodule replaces its contents with a fresh checkout — any local-only files are permanently removed
- `.gitignore` inside the submodule still applies, but ignored files are never preserved across re-initializations
- Submodules are useful for pinning external dependencies (e.g., [[Connecting a local repo to a GitHub remote|upstream tools]]) at a known-good version

## Examples

- Marker PDF is tracked as a submodule in OrbitOS at `20_Project/Marker` — its `.venv` must be recreated after every fresh checkout or submodule update
- `git submodule update --init --recursive` clones and checks out all submodules to their pinned commits

## Related Concepts

- [[.gitignore]]
- [[Python Virtual Environments]]
- [[Connecting a local repo to a GitHub remote]]

## References

- [Git Submodules — Pro Git Book](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
