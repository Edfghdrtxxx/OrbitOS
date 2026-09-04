---
type: retention-index
purpose: Terse cross-agent index of what has been re-tested. Agents running /retention MUST read this with Progress-context.md.
updated: 2026-08-30
---
# Retention — Context Index

> Pair of [[Progress-context]]: that file is *what was learned*; this file is *what has been re-tested*.
> Full dialogue stays in session notes under `60_Learning_Progress/<topic>/`.
> **Update rule:** after each `/retention` pass, add a Log row and move the thread between **Open** (weak/fail) and **Hold** (hold). Do not copy Known solid items here. Never-checked = Known solid minus Log. Verdict rules live in `/retention`, not here.

## Open

Needs another pass (weak / fail). Empty = none.

*(none yet — first `/retention` not run)*

## Hold

Last pass held. Recheck only if Open is empty and never-checked is empty, or the user names the thread.

*(none yet)*

## Log

| Date | Thread | Verdict | Weaknesses |
|------|--------|---------|------------|
