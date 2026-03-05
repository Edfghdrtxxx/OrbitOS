---
area:
tags: [python, dev-tools]
created: 2026-03-05
last_reviewed:
next_review: 2026-03-05
review_interval: 0
---
# Python Virtual Environments

## Definition

A Python virtual environment (`venv`) is an isolated directory containing a Python interpreter and its own `site-packages`, allowing project-specific dependencies without polluting the system or conda environment.

## Key Points

- Created with `python3 -m venv .venv` — produces a self-contained directory that is **not portable** and must be recreated if moved or deleted
- Activation (`source .venv/bin/activate`) modifies `$PATH` so `python` and `pip` resolve to the venv's copies
- Venvs are typically listed in [[.gitignore]] and are never committed — they must be recreated on each fresh clone or after a [[Git Submodules|submodule]] re-initialization
- Using a venv avoids conda/pip conflicts (e.g., `uninstall-no-record-file` errors when pip tries to remove a conda-installed package)
- The disk space used by a venv is fully reclaimed when the directory is deleted

## Examples

- `python3 -m venv .venv && source .venv/bin/activate && pip install marker-pdf` sets up an isolated environment for the Marker project
- If the `.venv` directory disappears (e.g., after submodule update), just recreate it — previous space is already freed

## Related Concepts

- [[.gitignore]]
- [[Git Submodules]]

## References

- [Python venv Documentation](https://docs.python.org/3/library/venv.html)
