---
name: verify
description: Verify Zombie Roguelike changes by running the TypeScript build and checking the dev server log for errors. Use before claiming a task done.
---

Run from the project root (`D:\obsidian\OrbitOS\20_Project\Game\Zombie Roguelike`).

## 1. Build

```bash
cd app && npm run build
```

This runs `tsc` (strict, `noUnusedLocals`, `noUnusedParameters`) and `vite build`. If it fails, fix the reported errors before continuing — dead imports and unused parameters count as failures.

## 2. Dev server smoke check

Start the dev server in the background and wait ~5 seconds for Vite to finish the initial module graph:

```bash
cd app && npm run dev
```

Tail the log. Acceptable output includes `VITE v5.x.x ready in <ms>` and the local URL line. Fail the check if you see:

- Any `[vite] Internal server error` / `Pre-transform error`
- Unhandled `SyntaxError`, `TypeError`, or `ReferenceError` at boot
- Missing-module errors (e.g., `Failed to resolve import "…"`)

Stop the dev server after the check.

## 3. Report

Tell the user:

- Whether `npm run build` passed or failed (paste the first error line if failed)
- Whether the dev server booted cleanly
- That gameplay verification is still their call — this skill does not click through the game

Do not mark the task done if either step failed.
