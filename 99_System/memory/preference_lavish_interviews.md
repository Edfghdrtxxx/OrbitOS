---
name: preference_lavish_interviews
description: Multi-option or jargon-heavy user interviews use Lavish-first pages; Ask is fallback
type: preference
saved_at: 2026-09-15
---

# Lavish-first user interviews

**When this fires:** about to ask the user a multi-option choice, method fork, findings triage, or any decision that needs briefing/jargon — or about to open host Ask for those shapes.

## Mental model (premise)

1. **Irreducible only** — still investigate first (`feedback_investigate_over_ask`). Do not interview for discoverable facts.
2. **Channel:** Lavish HTML interview (follow `/lavish` / `lavish-axi`) when multi-option **or** stakes/jargon need explanation. Host Ask only if Lavish cannot run, or for **1-bit missing input** with no jargon (path, yes/no, empty field).
3. **Explain without assuming** — every interview page defines terms, stakes, and option consequences for a smart non-insider. Chat cutoffs and terse option labels are the failure mode this replaces.
4. **Token discipline** — keep always-on rules short; put procedure in skills/CLI playbooks, not AGENTS.md essays.

## Reflect defaults (pilot)

- Findings: all on one page (no cap of 4).
- Fix/Leave via input playbook; on Send → **apply fixes immediately**.
- Fallback Ask keeps the same A/B shape if Lavish is unavailable.

## Related

- AGENTS.md · User interviews (Lavish-first)
- Skill: `reflect`, `lavish`
- `feedback_investigate_over_ask.md`, `feedback_necessity_check.md`
