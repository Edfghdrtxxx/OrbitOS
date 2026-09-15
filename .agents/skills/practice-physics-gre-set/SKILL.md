---
name: practice-physics-gre-set
description: >
  Launch today's Physics GRE timed Studio pack (zero chip-picking).
  Use when the user runs /practice-physics-gre-set, or explicitly asks to
  start / open / do / launch today's GRE timed set, pack, or Prep Studio practice
  for the daily GRE row.
---

# Phase 0 — EVOLVE
Read `evolution.md` in this skill's folder. Apply lessons as extra constraints.

# Objective
Open **today's timed pack** in the user's browser on Prep Studio. No chip-picking, no solving, no ticking the daily checkbox.

# Trigger only
- Explicit start/open/do/launch of today's GRE timed set or pack, or `/practice-physics-gre-set`.
- **Never** auto-launch from `/start-my-day`, ambient GRE chat, or "what is pack 03".

# Workflow

## 1. Resolve pack id
1. Read `10_Daily/YYYY-MM-DD.md` (today; if missing → most recent `10_Daily/*.md` by mtime).
2. Collect **open** (`- [ ]`) GRE timed pack children under **a0** / Priorities that match `pack\s*0*(\d{1,2})` (optional `n\s*=\s*(\d+)`).
3. **Succession — first-come-first launch:** if several match, take the **first in document order** only; do not launch later packs in the same run. Example: `CM Set 03: … (pack 03, n=8)` before any later pack child → `NN=03`, `n=8`.
4. Pad to two digits (`3` → `03`). Range 01–35.
5. User names an explicit pack id → that id wins (mention mismatch if it differs from the first open child).
6. None / unparsable → stop; ask user for pack id or run `/start-my-day`.

## 2. Serve Studio
- Root: `/Users/Reid Hu/Physics GRE` (pointer: `99_System/memory/project_physics_gre.md`).
- If `http://127.0.0.1:8000/` is down, start:  
  `cd "/Users/Reid Hu/Physics GRE" && python3 -m http.server 8000` (background / hub).
- Prefer `http://localhost:8000` over `file://`.

## 3. Verify pack (hard gate)
- Read `js/data-packs.js`: `PGRE.PACKS['NN']` must exist with non-empty `ids` and `n === ids.length`.
- Missing/empty → stop. **Do not** open `#/practice/custom` bare or the homepage.

## 4. Open — one shot (user browser only)
**Required URL (do not substitute):**
```text
http://localhost:8000/#/practice/pack/NN
```
- macOS: `open 'http://localhost:8000/#/practice/pack/NN'`
- This runs `PGRE.launchPack` → writes pack ids → `#/practice/custom`. That is the only correct entry.
- **Forbidden substitutes:** bare `/`, `#/practice`, empty custom quiz, manual Build chips, headless omp browser as the practice surface, `win.raise()` / foreground computer-use.

## 5. Report and stop
```
Pack NN · <label from Studio> · n=<n>
Opened: http://localhost:8000/#/practice/pack/NN
Expect: Question 1 of n · Set NN label
Daily child left unchecked
```
Stop. No mid-set coaching unless the user asks after.

# Edge cases
- Port 8000 serves non-Prep content → report; do not kill unknown PIDs without asking.
- No open pack children → stop unless user gave an explicit pack id; do not invent from `[x]` rows.
- User names a pack id ≠ first open child → honor explicit id; mention mismatch.
- Non-macOS → same URL via platform default opener.
