# FIX-SKILL report

Applied Tier A+B wording fixes to `SKILL.md` in BOTH tree copies, identically.

## Files edited
- `D:/Something/research/MATE-Automation-V4/.agents/skills/orchestrate-v2-D-workflow/SKILL.md`
- `D:/Something/research/MATE-Automation-V4/.claude/skills/orchestrate-v2-D-workflow/SKILL.md`

## Changes (4 edits per file, all applied to both)

### A6 — Cost control (hard caps) paragraph (L67)
Replaced the entire paragraph with the exact specified text:
> The primary cap is the **Phase-3 cost-gate**. Inside the engine: `MAX_ROUNDS` caps every verify loop and `MAX_AGENTS` (=60) is a fixed **cumulative (lifetime)** backstop across the whole run. The engine imposes **no concurrency cap** of its own — fan-out is unbounded `Promise.all`, so any concurrency limit comes from the runtime. The engine does **not** read a `budget`/`+Nk` value; that knob is not wired in.

### A7-N1 — read-only identity reconciled with Phase-2.5 carve-out
- (a) L3 frontmatter description: `Read-only front-end; never mutates files.` -> `Read-only front-end; never directly edits files (Edit/Write).`
- (b) L7 opening line: `you **never** mutate files` -> `you **never** directly edit files (no Edit/Write)`
- (c) L12 Tool policy Prohibited clause: `Edit/Write and any mutating command — those belong to sub-agents.` -> `Edit/Write and any **direct, in-process** file mutation — those belong to sub-agents. (The Phase-2.5 carve-out is the deliberate exception: you may **launch** a long-running background subprocess via `Bash run_in_background`; that subprocess — not you — produces the files.)`

## Verification
- SHA256 of both copies: `B0F890ADFC17FD4147E5145ECEE3F885F6FED0E984DAC2E2ED5A5B7AE4A0FF25` (IDENTICAL), both 7400 bytes.
- Grep confirmed no stale strings remain (`never mutates files`, `any mutating command`, `the engine concurrency cap`, `only an extra cap`): no matches.
- No empty line after frontmatter preserved (L4 `---`, L5 `# Orchestrate`).
- Coherence: the new L12 carve-out exception now explicitly squares the "never directly edit" identity (L3/L7/L12) with Phase 2.5 (L28, background subprocess) and the L64 transparency invariant. No other text changed.

## Decisions / notes
- Made only the 4 specified edits; no collateral changes. Each `old_string` was anchored against the exact existing text read from the file first.
