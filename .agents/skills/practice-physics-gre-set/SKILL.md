---
name: practice-physics-gre-set
description: >
  Launch today's Physics GRE timed Studio pack (zero chip-picking), or log a
  finished pack from a Studio agent receipt / natural “done”.
  Use when the user runs /practice-physics-gre-set, asks to start / open / do /
  launch today's GRE timed set or pack, or says they finished / are done with a
  pack / wants to log GRE set results (optionally with pasted receipt JSON).
---

# Phase 0 — EVOLVE
Read `evolution.md` in this skill's folder. Apply lessons as extra constraints.

# Objective
Two modes, one skill:

1. **Launch** — open today's timed pack on the existing Prep Studio origin. User clicks Start/Resume. Agent never does.
2. **Log** — after the set, ingest a **Studio agent receipt** (primary) and write vault: tick daily child + parent counts, Log line, Misses-Log rows. Show receipt, write immediately (no second ask). End with a **next-step suggestion**.

**Close invariant:** no timed pack is **fully closed** in the vault without either (a) `kind: pgre-agent-receipt` backing W2 + W3, or (b) an **explicit** user override labeled `incomplete-misses`. Practiced ≠ logged. Never invent scores.

# Trigger only
- Launch: explicit start/open/do/launch of today's GRE timed set or pack, or `/practice-physics-gre-set` (no `log` arg).
- Log: natural “done” / “finished pack” / “log GRE set” / paste of `kind: pgre-agent-receipt` JSON, `/practice-physics-gre-set log`, or explicit `incomplete-misses`.
- **Never** auto-launch from `/start-my-day`, ambient GRE chat, or “what is pack 03”.
- **Never** park waiting for a ~100 min set.
- This skill does **not** gate `/end-my-day` / `/start-my-day` (sister lock). Evening may still `[x]` a timed child; on next log, treat bare `[x]` without W2/W3 as not logged.

# Mode routing
| Signal | Mode |
|--------|------|
| Message contains `pgre-agent-receipt` JSON (or fenced JSON with `"kind":"pgre-agent-receipt"`) | **Log** (prefer paste) |
| `/practice-physics-gre-set log` or natural done/finished/log GRE set | **Log** |
| Explicit `incomplete-misses` | **Log** (override path) |
| `/practice-physics-gre-set` or explicit launch wording | **Launch** |
| Both launch wording and a receipt paste | **Log** first (receipt wins) |

---

# Launch workflow

## 1. Resolve pack id (succession)
1. Read `10_Daily/YYYY-MM-DD.md` (today; if missing → most recent `10_Daily/*.md` by mtime).
2. Collect **unpracticed** (`- [ ]`) GRE timed pack children that match `pack\s*0*(\d{1,2})` (optional `n\s*=\s*(\d+)`). Do **not** launch a `[*] · practiced, not logged` child — that is log-mode work.
3. **Order:** first under **a0** / Priorities timed parent in document order; **if no unpracticed a0 timed pack child**, continue to the **next** unpracticed timed pack child later in the same daily note (other priority blocks). Still first-come-first in full-document order among matches.
4. Pad to two digits (`3` → `03`). Range 01–35.
5. User names an explicit pack id → that id wins (mention mismatch if it differs from the succession pick).
6. None / unparsable → stop; ask user for pack id or run `/start-my-day`. If the only timed child is `[*]`, say: practiced, not logged — run log mode (paste / done / `incomplete-misses`).

## 2. Serve Studio (http only if needed)
- Root: `/Users/Reid Hu/Physics GRE` (pointer: `99_System/memory/project_physics_gre.md`).
- If an existing rich tab already uses `http://localhost:8000` or `http://127.0.0.1:8000` and that port is down, start:
  `cd "/Users/Reid Hu/Physics GRE" && python3 -m http.server 8000` (background / hub).
- Do **not** invent an http origin when the live learning tab is `file://`.

## 3. Verify pack (hard gate)
- Read `js/data-packs.js`: `PGRE.PACKS['NN']` must exist with non-empty `ids` and `n === ids.length`.
- Missing/empty → stop. **Do not** open bare `#/practice/custom` or the homepage.

## 4. Open — live Prep tab first (same origin as progress)
Progress is **per origin** (`localStorage` / IndexedDB). `file://`, `http://localhost:8000`, and `http://127.0.0.1:8000` are different stores.

### 4a. Find candidate tabs
Chrome tabs titled `Physics GRE · Prep Studio` or URL contains `Physics GRE/index.html`, `localhost:8000`, `127.0.0.1:8000`.
Prefer CDP (`web-access` proxy) when available; else AppleScript. **No** headless omp browser as practice surface. **No** `win.raise()` / foreground computer-use.

### 4b. Score and pick
```js
const raw = localStorage.getItem('pgre-state-v1') || ''
const s = (() => { try { return JSON.parse(raw) } catch { return {} } })()
const n = x => Array.isArray(x) ? x.length : (x && typeof x === 'object' ? Object.keys(x).length : 0)
({ bytes: raw.length, cards: n(s.cards), mistakes: n(s.mistakes), attempts: n(s.attempts), xp: s.xp || 0, href: location.href })
```
Pick **richest** (bytes, then cards+mistakes+attempts). Tie → prefer practice/formulas route over cold dashboard.

### 4c. Launch on that tab only
1. If `PGRE.launchPack` + `PGRE.PACKS['NN']`: `PGRE.launchPack('NN')` or hash `#/practice/pack/NN` on **this tab**.
2. Stale shell: same-origin full reload `?boot=<cacheBust>#/practice/pack/NN`.
3. Verify ~1s: pack label, practice route, rich `pgre-state-v1`.
4. **Stop at start gate.** Never click Resume / Start over / Start / Begin.

### 4d. No Prep tab
Open one new tab on the origin that holds progress (this machine usually `file:///Users/Reid%20Hu/Physics%20GRE/index.html#/practice/pack/NN`).

### Forbidden substitutes
Bare `/`, empty custom quiz, chip-picking, headless practice surface, wrong origin, clicking Start/Resume for the user.

## 5. Launch report and stop
```
Pack NN · <label> · n=<n>
Opened on existing tab: <href>
Store: cards=<c> mistakes=<m> bytes=<b> origin=<…>
Ready: user clicks Resume/Start
After the set: summary → “Copy agent receipt” → paste in chat or say “done”
Daily child left [ ] until log mode (receipt or incomplete-misses)
```
Stop. No mid-set coaching unless asked.

---

# Timed-child states (daily note)
| State | Marker | Parent (n/N) | Succession |
|---|---|---|---|
| Not practiced | `[ ]` | unchanged | retain |
| Practiced, not logged | `[*] · practiced, not logged` | unchanged | retain |
| Logged (receipt) | `[x] · logged a/n (p%)` (short `[x]` OK **only if** W2+W3 exist for this pack+date) | +1 once | advance |
| Override | `[x] · incomplete-misses` | +1 once | advance |

Bare `[x]` with no W2 line and no W3 receipt-rows/override-row is **not logged**.

---

# Log workflow (channel C — Studio receipt first)

## L1. Obtain receipt (priority order)
Target pack NN = succession child (`[ ]` or `[*]` timed pack; else user-named). Do not scrape `attempts` / `sessions` / `mistakes` as the primary channel.

1. **Paste** — user message contains JSON with `"kind":"pgre-agent-receipt"` (v≥1, including v1). Parse. Invalid → say why; fall through. Do not close on invalid paste.
2. **sessionStorage on richest Prep tab** — same tab scorer as launch; eval:
   ```js
   (() => { try { return JSON.parse(sessionStorage.getItem('pgre-agent-receipt') || 'null') } catch { return null } })()
   ```
   Accept only if `kind === 'pgre-agent-receipt'` and `score.n > 0`.
3. **Durable on the same richest origin** (website may add these; read when present). When target pack NN is known (daily child / user / succession):
   ```js
   (() => {
     const pack = 'NN' // target, two-digit
     const ok = r => r && r.kind === 'pgre-agent-receipt' && r.score && r.score.n > 0
     const pad = p => String(p == null ? '' : p).padStart(2, '0')
     const packOf = r => (r && r.pack != null && r.pack !== '' ? pad(r.pack) : null)
     let s = {}
     try { s = JSON.parse(localStorage.getItem('pgre-state-v1') || '{}') } catch {}
     const pr = s.packReceipts && s.packReceipts[pack]
     if (ok(pr)) return pr
     const hasPr = !!(s.packReceipts && s.packReceipts[pack])
     const acceptLast = r => {
       if (!ok(r)) return false
       const lp = packOf(r)
       // match NN, or unlabeled only when no packReceipts entry for NN
       // never a different-NN last/mirror
       return lp === pack || (lp == null && !hasPr)
     }
     if (acceptLast(s.lastAgentReceipt)) return s.lastAgentReceipt
     try {
       const ls = JSON.parse(localStorage.getItem('pgre-agent-receipt') || 'null')
       if (acceptLast(ls)) return ls
     } catch {}
     return null
   })()
   ```
   Order when NN known: `pgre-state-v1.packReceipts[NN]` (valid kind + score.n>0) → else `lastAgentReceipt` / `localStorage['pgre-agent-receipt']` **only if** their `pack` matches NN (or `pack` is null/absent — unlabeled last OK only when no `packReceipts[NN]`). **Never** use a last/mirror receipt whose pack is a different NN than the pack being logged. Missing keys → skip, not error.
4. **Else stop.** Offer exactly these — do **not** silent-`[x]`:
   - paste `kind: pgre-agent-receipt` JSON (Copy agent receipt on summary), or
   - explicit `incomplete-misses` override, or
   - mark `[*] · practiced, not logged` (parent unchanged).
   If the child is already bare `[x]` without W2/W3: reopen to `[*] · practiced, not logged` and un-bump parent `(k/N)` → `(k-1/N)` when this child was counted (parent `[x]` → `[ ]` if it hit N/N from this). Then the same three offers.
   NEVER invent scores. NEVER scrape attempts/sessions/mistakes as primary. No parked poll.

Override is **only** when the user explicitly says `incomplete-misses` (not inferred from “done”).

## L2. Validate receipt
Required:
- `kind === 'pgre-agent-receipt'`
- `score.correct`, `score.n` (n ≥ 1, correct ≤ n, correct ≥ 0)
- `score.pct` or computable (`round(100 * correct / n)`)
- `missQids` **array** (may be empty). If only `misses[]` (v1 alias), coerce to qid strings → `missQids`.

Reject (do not close):
- missing kind / correct / n / missQids-not-array
- `correct < n` and (`missQids` missing or `missQids.length !== n - correct`)
- nonsense (`n < 1`, correct > n)

Perfect: `correct === n` && `missQids = []` → W3 none is OK.

`pack`: two-digit when present; else infer from `label` / daily child / `ids` vs `PGRE.PACKS`. Prefer today's succession child; receipt pack ≠ open child → honor receipt pack, note mismatch.

`completedAt` / `durationMin` optional — include in W2 when present.

## L3. Show then write (no second ask)
Print a short receipt block (pack, label, score, %, durationMin, miss count, origin, source: paste|session|localStorage|lastAgentReceipt|packReceipts). Then W1+W2+W3 immediately.

Override path: print `incomplete-misses` (no invented score) then write.

## L4. Vault writes

### W1 — Tick timed child + parent `(n/N)`
**`[x]` + parent +1 ONLY from a validated receipt or explicit `incomplete-misses`.**

- Find the daily timed pack child (`pack NN` / Set NN).
- Receipt → `- [x] · logged <correct>/<n> (<pct>%)` (short `- [x]` OK if W2+W3 land this turn).
- Override → `- [x] · incomplete-misses`.
- Parent `(k/N)` → `(k+1/N)` only when this child **newly** flips to `[x]` from `[ ]` or `[*]`. Never double-bump. If parent reaches N/N, mark parent `[x]` if that is the house convention; else stay consistent with other dailies.
- Already `[x] · logged …` or `[x] · incomplete-misses` with W2+W3: idempotent, no parent bump, still run W2/W3 idempotently.
- Already bare `[x]` **without** W2/W3 and **no** receipt/override this turn: not logged — reopen to `[*]` (L1.4). Do not treat as success.
- `[*]` without receipt/override: leave `[*]` or set it if currently `[ ]` and user chose “practiced, not logged”. Parent unchanged.

### W2 — Daily Log line (mandatory on logged close)
First `## Log` in the daily note (create the heading if missing). Append once if not already present for this pack+date:
```
- GRE pack NN · <label or Set NN> · <correct>/<n> (<pct>%) · <durationMin> min · origin <file|localhost|…>
```
Override:
```
- GRE pack NN · <label or Set NN> · incomplete-misses · origin <file|localhost|…>
```
Idempotent: same pack + same score/override line → skip. Logged close **requires** W2. Do not `[x]` without it.

### W3 — Misses-Log (vault only)
File: `20_Project/GRE_Physics_Prep/04_Diagnostics_&_Errors/Misses-Log.md`.
Skill writes **Misses-Log** only. Studio **Mistake book** (`#/mistakes`) is a different surface — do not write it; do not call them the same in next-step.

Receipt, one row **per miss qid** (no unlabeled stubs). Skip if **Date + qid** already logged today:
```
| YYYY-MM-DD | Pack NN / <qid> | <topic or —> | - | - | [ ] |
```
- Perfect (`missQids = []`) → W3 none OK.
- Override → **one** row labeled `incomplete-misses` (not a pending/TBD stub):
  ```
  | YYYY-MM-DD | Pack NN · incomplete-misses | — | incomplete-misses | — | [ ] |
  ```
- Never append “pending / completed without receipt / fill later” unlabeled stubs.
- Bump frontmatter `updated` to today when any row is added.

## L5. Log report + next-step suggestion
```
Logged pack NN · <correct>/<n> (<pct>%) · misses=<m>   OR   incomplete-misses
source: paste|session|localStorage|lastAgentReceipt|packReceipts|override
W1: child <logged|override|[*] not logged|reopened [*]|missing child>
W2: log <appended|exists|skipped not closed>
W3: misses-log <+k qid rows|none perfect|incomplete-misses row>
```
**Always end with one concrete next-step**, and do **not** conflate vault Misses-Log with Studio Mistake book:
- receipt misses > 0 → rework top Misses-Log qid / GRE extra child (Mistake book `#/mistakes` is Studio-only, optional, not the vault log)
- receipt misses = 0 → next unpracticed timed pack child, or formula/extra if timed done
- `[*]` / no receipt → paste receipt, or say `incomplete-misses`
- override → recover receipt later if possible; do not invent qids
- no further timed child → evening review or next daily priority

Stop.

---

# Edge cases
- Port 8000 serves non-Prep content → report; do not kill unknown PIDs without asking.
- No unpracticed `[ ]` pack children on launch → stop unless explicit pack id. `[*]` → log, don’t relaunch.
- Two rich tabs → pick richest; never merge stores.
- Log without Prep tab and without paste → L1.4 offers (paste / `incomplete-misses` / `[*]`). Do not guess. Durable keys absent → skip.
- `file://` clipboard failure in Studio → user may paste from on-screen fallback `<pre>`; agent still accepts paste (v1 JSON included).
- Non-macOS → same tab-reuse via platform browser automation.
- Historical packs closed `[x]` without receipt (e.g. pack 03) are **not** recovered here; log mode may reopen today’s bare `[x]` to `[*]` or take override, but do not invent old miss qids.
