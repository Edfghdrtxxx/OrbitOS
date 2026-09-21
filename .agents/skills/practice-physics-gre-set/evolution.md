# evolution.md — practice-physics-gre-set

## Lessons

### Origin & store (2026-09-15)
- Progress is **per origin** (`file://` ≠ `localhost` ≠ `127.0.0.1`). Score open Prep tabs’ `pgre-state-v1`; launch only on the **richest**. Never open a second origin when one already holds progress.
- Stale shell (no `PGRE.launchPack` / packs): **same-origin full reload** (`?boot=…#/practice/pack/NN`). Hash-only is not enough.
- New-tab fallback URL must match the origin that actually holds the rich blob.

### Start gate (2026-09-15)
- Land on pack UI (label + rich store). **User** clicks Resume / Start over / Start. Agent never does.
- `Question 1 of n` is optional proof only when already in-question with no gate.

### Completion handoff (2026-09-15)
- **Channel C primary:** Studio summary **Copy agent receipt** → JSON `kind: pgre-agent-receipt` (+ `sessionStorage['pgre-agent-receipt']`). Not parked poll; not session-scrape-as-primary.
- **Log triggers:** natural done / finished / log GRE set, pasted receipt, `/practice-physics-gre-set log`.
- **Vault:** W1 tick timed child + parent `(n/N)`; W2 daily Log line; W3 Misses-Log rows. Show receipt then write immediately (no second ask).
- **Pack succession:** open a0 timed pack children first; if none, next open timed pack child later in the daily note (document order).
- Log mode always ends with one concrete next-step suggestion.
- `file://` clipboard may fail — Studio fallback `<pre>`; agent accepts paste.

### Miss logging close invariant (2026-09-16)
- Evening W1-without-receipt failed: timed child `[x]` + parent bump with no `pgre-agent-receipt` and no real W3 qids. **Practiced ≠ logged.** Fully closed only with (a) receipt backing W2+W3 or (b) explicit `incomplete-misses`.
- L1 order: paste (v≥1) → `sessionStorage['pgre-agent-receipt']` → durable on same richest origin (`packReceipts[NN]` first when NN known; else same-pack or unlabeled `lastAgentReceipt` / `localStorage['pgre-agent-receipt']`). Never invent scores. Never scrape attempts/sessions/mistakes as primary.
- L1 durable when NN known: prefer `packReceipts[NN]` (valid) over `lastAgentReceipt` / `localStorage['pgre-agent-receipt']`; accept last/mirror only if pack matches NN (or unlabeled and no packReceipts entry). Never let a different-NN last receipt shadow the target pack.
- No silent `[x]`. No receipt → offer paste, `[*] · practiced, not logged`, or explicit `incomplete-misses`. Bare `[x]` without W2/W3 is not logged — reopen to `[*]` (un-bump parent) or demand override.
- Reject `correct < n` with missing/empty/`length !== n-correct` `missQids`. Perfect: `correct===n` && `missQids=[]` → W3 none OK. No unlabeled W3 stubs.
- Vocab: vault **Misses-Log** vs Studio **Mistake book** (`#/mistakes`) — this skill writes only Misses-Log; next-step must not conflate.
- Sister skills (`end-my-day`, `start-my-day`) are **not** yet gated (skill-only lock). Evening can still tick a timed child; this skill repairs on next log.

### Formula-receipt Other (2026-09-21)
- **Fault:** After formula-receipt Halt, Other / “strengthen from this receipt” launched catalog pack 13 from `data-packs.js`.
- **Fix:** That path is a receipt-derived custom set: map hard/lapse cards → practice-pool ids, write `sessionStorage['pgre-quiz-config']` `{ids, label}` (not `PGRE.launchPack`, not an existing pack file), route `#/practice/custom` on the richest Prep tab. Still no chip-picking, no empty custom, no Start click.
- **User:** customized set based on the uploaded content; don’t pick the existing file.

