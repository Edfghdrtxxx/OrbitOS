---
type: project
status: active
area: null
---
# LLM-Council

## Context

LLM-Council is a reusable decision-quality workflow for stress-testing important questions through three model voices: the host model, Grok 4.6, and Gemini 3.8 Flash. The host writes in-session; Grok and Gemini are dispatched in parallel via omp `task` tool.

The workflow follows three stages:
- Stage 1 — independent first opinions: host writes in-session, Grok and Gemini dispatched in parallel.
- Stage 2 — anonymized peer review using global Member A/B/C labels, with hybrid qualitative review and structured FINAL RANKING.
- Stage 3 — host-as-Chairman synthesis into one consolidated answer, with self-bias audit.

Council members are generalized omp agents (`~/.omp/agent/agents/grok-4_6.md`, `gemini-3_8.md`). Council-specific identity is injected from the skill's `references/` templates at dispatch time.

Transcripts are saved in `20_Project/LLM-Council/Sessions/`.

## Actions

- [ ] Use `/llm-council` for high-stakes decisions, research direction checks, thesis planning, and workflow design choices where cross-model adversarial review adds value.
- [ ] Review saved sessions periodically for recurring blind spots and decision patterns.

## Progress

- 2026-05-22 — Rebuilt the old `/idea-debate-team` workflow into `/llm-council`, modeled after karpathy/llm-council with Claude, Gemini, and GPT as council members.
- 2026-09-02 — v2: Automated dispatch via omp agents. Replaced manual copy-paste relay with `task` tool parallel dispatch. Roster: Host + Grok 4.6 + Gemini 3.7 Flash. Dropped GPT (never actually participated). Added references/ directory for prompt templates and transcript template. Chairman is now the host model, not hardcoded.
- 2026-09-02 — v2.1: Gemini member upgraded 3.7 Flash → 3.8 Flash (`gemini-3_8`, `google-antigravity/gemini-3.8-flash-high`). Agent file renamed, skill + this note synced; clean cutover, no 3.7 fallback.
- 2026-09-03 — v2.2: Mandated high thinking level (`effort: "hi"`) across all council dispatches by default to prevent auto-downgrading to low/medium reasoning; non-high effort permitted only upon explicit user request.
- 2026-09-04 — v2.3: Added GLM 5.3 Flash High (`glm-5_3`) as inline backup slot for Gemini 3.8 Flash; fixed Gemini spawn crash root cause in `~/.omp/agent/config.yml` (`inlineToolDescriptors: "off"`); updated failover invariants and transcript templates.
- 2026-09-04 — v2.4: End-to-end direct clean model IDs. Replaced all vague member labels (`Member-Host`, `Member-Grok`, `Member-Gemini`, `Member A/B/C`) with direct clean model IDs (e.g. `Gemini-3.8-Flash`, `Grok-4.6`, `<Host-Model-ID> (Host)`). Completely eliminated Stage 2 blinding, translation layers, and frontmatter token mapping: subagents review and rank each other directly by model ID across all prompt templates, chat outputs, and session transcripts.
