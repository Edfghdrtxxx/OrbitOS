# T9 — Commit Foundation + Save Worktree-Isolation Memory

## Task 1: Memory files

**New file written:**
- `C:\Users\petro\.claude\projects\D--obsidian-OrbitOS\memory\feedback_worktree_isolation.md` — 15 lines

**Index updated (one line inserted under existing feedback block):**
- `C:\Users\petro\.claude\projects\D--obsidian-OrbitOS\memory\MEMORY.md` — 17 lines (was 16)

New entry appended after `feedback_windows_symlinks.md`:
> `- [feedback_worktree_isolation.md](feedback_worktree_isolation.md) — Agent tool worktree isolation leaks to main in this vault via a backup cron; serialize parallel mutating dispatches instead`

## Task 2: Commit on main

### Situation encountered (live demo of exactly the memory topic)

Between the initial `git status` (which showed 6 modified files + 18 untracked icons + Cargo.lock + package-lock.json) and the explicit `git status` immediately after running 2x `git add <path>` batches, **the vault-backup cron ran at 22:55:06 and absorbed every one of those refactor files into commit `f6b77d94`** — along with the scratch artifacts we explicitly wanted excluded. By the time our `git add` commands executed, there was nothing left in the working tree for them to stage; `git status` confirmed an empty index afterwards.

This is the exact pattern the Task 1 memory file describes: in this vault, explicit staging races the backup cron and can lose.

### What f6b77d94 (vault backup at 22:55:06) absorbed

All of the refactor files listed in the T9 brief:
- `app/index.html`, `app/src-tauri/tauri.conf.json`, `app/src/constants.ts`, `app/src/content/zombies.ts`, `app/src/legacy/game.ts`, `app/src/shell/styles.css` (modifications)
- `app/package-lock.json`, `app/src-tauri/Cargo.lock` (new)
- `app/src-tauri/icons/*.png`, `icon.ico`, `icon.icns`, `source.png` (18 new icon files, total ~60 KB)
- UNWANTED: `99_System/.scratch/zombie-refactor/{06_delta_pass,06_delta_pass_revision,07_windows_build,07_windows_build_rebuild,review_06,review_06b,review_07}.md` and `build-log.txt` — scratch files the brief told us NOT to stage. The cron swept them in anyway.

Total: 34 files, +11937/-23 lines.

### Decision

Per task constraints:
- No amend / no force-push.
- No hook bypass.

Options considered:
1. **Amend f6b77d94 to rewrite the message + drop scratch paths** — explicitly forbidden by "Do NOT amend or force-push".
2. **Reset + re-stage + re-commit** — requires destructive history rewrite, equivalent to amend, and any subsequent cron tick would re-absorb everything.
3. **Empty commit with the intended message + cross-reference to f6b77d94** — preserves history, satisfies "One commit on main" with the explicit session-summary message, documents the absorption for future archaeology.

Chose option 3. An empty marker commit records session intent and points at the backup commit that holds the actual content.

### The commit

Commit SHA: `997037cb7a8c28dda5b0c3fec5058cccfbe2bf40`

```
commit 997037cb7a8c28dda5b0c3fec5058cccfbe2bf40
Author: Gemini Agent <agent@gemini.cli>
Date:   Sun Apr 19 22:56:14 2026 +0800

    Refactor zombie_roguelike.html into modular TS + Tauri desktop app

    Foundation pass from a /orchestrate inline-mode session:

    - T1: architecture plan (scratch-only, planning doc)
    - T2: Tauri 2 + Capacitor 6 packaging on top of existing Vite+PWA scaffold
    - T3: extract I18N, ZTYPES, BOSS_KINDS, UPGRADES, SUPERPOWERS, SKINS, THEMES,
           FLOORS, DIFFICULTY_TIERS, CRAZY_DAVE_LINES + math helpers into typed
           ES modules under app/src/content/, app/src/constants.ts, app/src/util/
    - T4: bootstrap + playability wiring - app/src/shell/styles.css (1257 lines),
           app/index.html (354 lines body markup), app/src/legacy/game.ts (6650
           lines transitional bundle with 27 symbols replaced by imports from T3),
           app/src/main.ts (12-line entry)
    - T6: delta-pass to re-sync scaffold with HTML amendments mid-session
           (CSS +27 lines, canvas 1280->1220, boss ZTYPES re-ported)
    - T7: Windows .exe via tauri:build (rustup 1.87->1.95 for crate MSRVs)

    Preservation: all localStorage keys ... byte-identical values. npx tsc
    --noEmit + npm run build both pass.

    Not in session scope: engine/entities/systems/render/ui extraction;
    Android .apk; browser gameplay runtime verification.

    Note: foundation file contents were absorbed into preceding "vault backup"
    commit f6b77d94 by the vault-backup cron before this explicit commit could
    stage them - see memory/feedback_worktree_isolation.md. This empty commit
    records the intent/session summary on main.

    Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

`git log -1 --stat 997037cb` shows no file changes (empty commit by design).

### Staged files for this commit

None — empty commit. Intended file list (all already in f6b77d94):
- `20_Project/Game/Zombie Roguelike/app/index.html`
- `20_Project/Game/Zombie Roguelike/app/src-tauri/tauri.conf.json`
- `20_Project/Game/Zombie Roguelike/app/src/constants.ts`
- `20_Project/Game/Zombie Roguelike/app/src/content/zombies.ts`
- `20_Project/Game/Zombie Roguelike/app/src/legacy/game.ts`
- `20_Project/Game/Zombie Roguelike/app/src/shell/styles.css`
- `20_Project/Game/Zombie Roguelike/app/package-lock.json`
- `20_Project/Game/Zombie Roguelike/app/src-tauri/Cargo.lock`
- `20_Project/Game/Zombie Roguelike/app/src-tauri/icons/` (18 files)

Pre-existing tracked-but-unchanged refactor files (already on main from prior backup commits, no change this commit):
- `app/.gitignore`, `app/capacitor.config.ts`, `app/package.json`, `app/tsconfig.json`, `app/vite.config.ts`
- `app/src/main.ts`, `app/src/types.ts`, `app/src/util/math.ts`
- `app/src/content/{crazyDave,difficulty,i18n,skins,superpowers,themes,upgrades}.ts`
- `app/src-tauri/{Cargo.toml,build.rs,.gitignore,src/main.rs,src/lib.rs}`
- `app/src-tauri/icons/README.md`

### `git status` after commit

```
On branch main
Your branch is ahead of 'origin/main' by 1 commit.

Changes not staged for commit:
        modified:   .claude/worktrees/cool-rosalind (modified content)
        modified:   20_Project/Marker (modified content)

no changes added to commit
```

Pre-existing unrelated modifications (`.claude/worktrees/cool-rosalind`, `20_Project/Marker`) left untouched per scope rules — these are out of session scope.

## Caveats / follow-ups

1. The explicit commit is empty because the cron beat us. All intended file content IS on main under f6b77d94 — nothing is lost. But archaeology now requires reading two commits together (f6b77d94 for diffs, 997037cb for intent/session context).
2. Scratch files for T6/T7 (`06_delta_pass*.md`, `07_windows_build*.md`, `review_06*.md`, `review_07.md`, `build-log.txt`) were swept into f6b77d94 despite the brief saying to exclude them. If you want them out of history, that is a separate history-rewrite task and explicitly out of this task's constraints. Easiest mitigation: delete them from the working tree — the backup cron would then record the deletion in a future commit.
3. T9's own scratch file (this one) will similarly get swept into the next cron tick. That is consistent with the rest of the scratch artifacts in f6b77d94.
