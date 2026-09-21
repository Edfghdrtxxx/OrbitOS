---
type: council-session
date: 2026-09-16
question: How to trim the OrbitOS vault lavish skill down
chairman: Grok-4.5
members: [Grok-4.5, Grok-4.6, Gemini-3.8-Flash]
thinking: high
quorum: 3/3
status: complete
---
# Trim lavish skill

## Question & Brief
QUESTION:
How should we trim the OrbitOS vault `lavish` skill down — what to cut, what to keep, and where durable guidance should live (SKILL.md vs evolution.md vs template vs CLI)?

CONTEXT:
- Path: /Users/Reid Hu/OrbitOS/.agents/skills/lavish/
- Files: SKILL.md (~100 lines, vault-heavy), evolution.md (same-day incident log), references/artifact-template.html (~33KB), mermaid-runtime snippet.
- Upstream package skill is thin; CLI is SoT. Vault fork has large overlays.
- Almost only loaded by agent `lavish-interview`. Main must not load '/Users/Reid Hu/OrbitOS/.agents/skills/lavish/SKILL.md' for interviews.
- User memory: SKILL.md lean terse. Necessity-check culture.
- Package upgraded to 0.1.69; risk of triple-documenting fixed bugs.
- Goal: reduce load tokens without losing vault rules that prevent real failures.

## Stage 1 — First Opinions
### Grok-4.5 (Host) — Collapse to vault-only checklist
Thesis: Bloat came from writing every incident into SKILL as permanent policy. Layer ownership: SKILL.md = vault orchestration invariants CLI cannot know; evolution.md = active Phase-0 constraints only (not a diary); template = DOM/theme; CLI = playbook/design/workflow. Target SKILL ≤40 lines. Package-bug archaeology out of SKILL — one version-floor line. Open-verify: 4 bullets. Composer: three lines (Queue≠Send, one pattern, both UIs valid).
Weak Link: Full failure story needed in SKILL — flawed because evolution Phase 0 already holds it; duplicate trains skip. Recurring failures = multi-owner reopen / missing CDP, not hang narrative post-0.1.69.
Recommendation: Checklist rewrite SKILL; prune evolution to Current constraints + superseded-false-recipe notes; template as pointer.

### Grok-4.6 — Cut SKILL to vault invariants
Thesis: Cut narratives and package-bug archaeology; keep four vault invariants in SKILL.md as a checklist. Durable guidance splits by who must fire it on every load. SKILL keeps ownership, CLI+version floor, template path+theme, ops list (CDP, max 2 reopen, one tab, child owns reopen, Queue≠Send, both shapes). Cut hang story/PR/token internals/sandbox forensics. Trimming SKILL while leaving bloated evolution is fake savings — collapse evolution to Current constraints + superseded false recipes.
Weak Link: Keep-all-in-SKILL because agents ignore evolution fails — Phase 0 mandates evolution; triple-doc rotting copies. Opposite error missed the template.
Recommendation: Rewrite SKILL ~40 lines; collapse today’s evolution so Phase 0 does not re-pay cut tokens.

### Gemini-3.8-Flash — SKILL.md: vault invariants only
Thesis: Strip SKILL.md to vault-specific orchestration invariants; purge transient package bug notes and upstream CLI duplicates. SKILL is operational gate for lavish-interview: caller boundary, session concurrency, CDP loop. Styling/patterns → CLI; DOM → template; resolved postmortems → git history, not hot prompt.
Weak Link: Defense-in-depth via historical bug warnings. Fatal: context pollution induces phantom-bug workarounds. If ≥0.1.69 fixed it, permanent overhead for zero marginal safety.
Recommendation: Four planes: SKILL ~30–40 lines (caller gate, engine pin ≥0.1.69, lifecycle one-tab/409, CDP + Queue vs Send); CLI owns design; template owns DOM; evolution keeps only unresolved harness friction — purge patched postmortems.

## Stage 2 — Peer Review
### Grok-4.5 (Host) — Peer Review
Accuracy: Grok-4.6 > Gemini (Grok keeps live 0.1.69 friction; Gemini misclassifies open modes as fixed).
Insight: Grok-4.6 > Gemini (who-must-fire + dual-load cost).
Strongest flaw: Gemini sending live token-drop/one-tab/Queue≠Send to git history.
Opinion change: Slightly toward Grok — evolution must shrink in same pass.
FINAL RANKING:
1. Grok-4.6
2. Gemini-3.8-Flash

### Grok-4.6 — Peer Review
Accuracy: Host tighter against files; Gemini misclassifies live 0.1.69 constraints and wrong-planes theme to CLI.
Insight: Host names real recurrence (multi-owner reopen, missing CDP); Gemini overgeneralizes.
Strongest flaw: Gemini treating 0.1.69 as closing the class.
Opinion change: No.
FINAL RANKING:
1. Grok-4.5 (Host)
2. Gemini-3.8-Flash

### Gemini-3.8-Flash — Peer Review
Accuracy: Grok-4.6 > Host — fake-savings / dual-file load cost.
Insight: Grok-4.6 > Host — unified runtime surface heuristic.
Strongest flaw: Neither stressed caller-side boundary enough (Main never loads skill on success path).
Opinion change: Yes — hard budget/cap on evolution.md too.
FINAL RANKING:
1. Grok-4.6
2. Grok-4.5 (Host)

## Stage 3 — Chairman Synthesis
### Self-Bias Audit
Host ranked 1st once and 2nd once; never last; never named strongest flaw. Synthesis leans on Grok-4.6 (two first-place peer ranks) for dual-file/fake-savings frame; Host layer list retained; Gemini pollution warning retained; Gemini git-purge of live constraints rejected.

### Final Answer
Trim on load-path ownership, not incident interest.

SKILL.md (~30–40 line checklist) — vault invariants only:
1. Caller gate — lavish-interview only; Main never '/Users/Reid Hu/OrbitOS/.agents/skills/lavish/SKILL.md' for interviews; /lavish exception
2. CLI SoT — npx -y lavish-axi + version floor ≥0.1.68 (prefer 0.1.69) — one line
3. Template pointer — references/artifact-template.html + light-cream / no Daisy luxury
4. Session ops — CDP open-verify once; max 2 reopens; one session tab; child owns --reopen
5. Send path — Queue ≠ delivered; chrome Send POSTs; both UI shapes valid; one pattern/session; Queued+no-pill → token/stale recovery

Cut from SKILL: 0.1.67 hang story, PR notes, sandbox forensics, dual 409 restatements, 7-step open-verify prose, composer mini-postmortem.

evolution.md — collapse same day (else fake savings):
- Short Current constraints block that does not repeat SKILL
- Keep still-live harness friction: token-drop, multi-tab/409, Queue≠Send, child-owns-reopen
- Dated notes only for superseded false recipes
- Drop fixed package archaeology

Template stays DOM/theme file (path pointer). CLI owns design/playbook/workflow only — do not move vault theme to CLI. Do not purge live token-drop guidance to git (not on load path).

### Unresolved Tension
How hard to cap evolution (line budget vs keep every live harness note) without recreating diary bloat.

### Recommendation
One paired rewrite now — checklist SKILL.md + collapsed evolution Current constraints; leave template bytes alone except existing status copy.
