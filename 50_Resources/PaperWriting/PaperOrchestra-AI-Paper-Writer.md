---
type: reference
source_type: evaluation
platform: arXiv / X
author: "Yiwen Song, Yale Song, Tomas Pfister, Jinsung Yoon (Google Cloud AI Research)"
title: "PaperOrchestra — AI writer for research papers (evaluation)"
paper_url: https://arxiv.org/abs/2604.05018
project_page: https://yiwen-song.github.io/paper_orchestra/
code: https://github.com/google-research/paper-orchestra
x_post: https://x.com/alex_prompter/status/2042452776433926570
retrieved: 2026-06-26
topic: AI-assisted paper writing
status: evaluated
tags: [reference, paper-writing, ai-research, multi-agent, evaluation]
related: "[[EvoSkills-Paper-Writing-Index]], [[MATE-Automation]], [[Masters_Thesis]], [[Autoresearch-Karpathy]], [[Auto-Research-Claude-Investigation]]"
---
> [!info]+ Evaluation note — non-source material
> Evaluation written 2026-06-26. Triggered by an X post (@alex_prompter, 2026-04-10) that I traced to its **primary source** (Google's arXiv preprint) and **adversarially fact-checked** claim-by-claim. This note is my analysis; the load-bearing numbers below are verified against the arXiv paper/PDF.

# PaperOrchestra — AI Writer for Research Papers

> [!abstract] TL;DR — recommendation: **partially adopt (as a pattern library, not a tool)**
> **What it is:** *PaperOrchestra: A Multi-Agent Framework for Automated AI Research Paper Writing* — a real Google Cloud AI Research preprint (arXiv **2604.05018**, 6 Apr 2026). A **5-agent** pipeline that turns "pre-writing" materials (idea summary + experiment logs + template) into a submission-ready LaTeX manuscript, *including* literature synthesis and generated figures. **Not a product** — an un-peer-reviewed research artifact with a code repo.
> **Verdict for me:** Do **NOT** use it as a paper-generator (it's benchmarked only on CV venues, its headline numbers are self-evaluated/LLM-simulated, and it's not maintained software). **DO** graft 1–2 of its patterns onto my existing [[EvoSkills-Paper-Writing-Index|EvoSkills]] + `/orchestrate` setup. The single highest-value idea: a **verified-citation agent** — exactly the gap EvoSkills lacks.

## What it actually is — the real architecture
Five specialized agents (Outline & Plotting can run in parallel; the rest are sequential):

1. **Outline Agent** — synthesizes the unconstrained inputs into a structured JSON outline that *pre-declares* a visualization plan **and** a literature **search strategy** (it plans the search; it does not execute it).
2. **Plotting Agent** — generates conceptual diagrams + statistical/result plots (uses a VLM-critic tool, "PaperBanana").
3. **Literature Review Agent** — the novel part: an LLM with web search proposes candidate papers, then **verifies each via the Semantic Scholar API** (fuzzy title match by Levenshtein distance, metadata retrieval, temporal cutoff tied to the venue deadline), compiles a **verified BibTeX citation registry**, and drafts Intro/Related Work using *only* verified references.
4. **Section Writing Agent** — drafts the remaining sections in LaTeX, enforcing citation consistency against the registry.
5. **Content Refinement Agent** — a **simulated peer-review loop** (AgentReview) that critiques and revises, accepting a revision **only if the overall review score rises** (or ties with net non-negative sub-axis gains).

It also ships a benchmark, **PaperWritingBench**: 200 reverse-engineered CVPR-2025 / ICLR-2025 papers (100 each) turned back into raw idea summaries + experiment logs, plus automated evaluators.

## ⚠️ Fact-check: the viral X post vs the paper
The tweet is *directionally* true (real Google paper, 5 agents, Semantic Scholar verification, beats AI-Scientist-v2) but inflates several numbers. Verified claim-by-claim against the primary source:

| X-post claim | Verdict | What the paper actually says |
|---|---|---|
| "**Human eval**: beat AISv2 by **39–86%** overall, **88–99%** lit-review" | ❌ **Contradicted** | Those are **automated LLM-judge** margins (Gemini-3.1-Pro / GPT-5 judges). Real **human** margins are far smaller: **14–38%** overall, **50–68%** lit-review. Also conflates two baselines (39–86% is vs AISv2; 88–99% is vs "AI baselines"). |
| 5 agents: outline**+search**, citation-verify, figures, writing, peer-review | ⚠️ **Partially** | Count of 5 ✓ and all roles real ✓, but **search executes in the Literature Review agent, not the Outline agent** (Outline only *plans* the search). |
| Peer-review loop alone **+19–22 pp** acceptance | ✅ **Supported** | Ablation: refinement loop adds **+19% (CVPR) / +22% (ICLR)**; refined beats unrefined 79–81% with 0% losses. ("pp" is the tweet's interpolation; magnitude is accurate.) |
| Citations **46–48** vs **13–14** (AISv2); humans **59** | ✅ **Supported** | Table 3: PaperOrchestra **45.73–47.98**, AISv2 **13.71–14.18**, human GT **58.52–59.18**. Numbers faithful (still below human). |
| Sim. acceptance CVPR 84/86/70, ICLR 81/94/**64** | ⚠️ **Partially** | PO & human ✓ (84%/86%, 81%/94%). AISv2 CVPR ~70% ✓ (derived ~71%). **ICLR "64%" is wrong** — paper's +9% margin implies **~72%**. All are **LLM-simulated** (ScholarPeer), not real decisions. |
| Blind eval, 11 researchers: tied/beat **humans 43%** on lit synthesis | ✅ **Supported** | Verbatim: "43% tie/win rate against human GT in literature synthesis" (11 researchers, 180 paired evals). Implies humans still preferred real papers **~57%** of the time. |
| ~**40 min**, **60–70 LLM calls**; input = bullet idea + results table; output = submission-ready LaTeX | ⚠️ **Partially** | Runtime (**39.6 min**, trimmed mean over only 10 papers) & calls (60–70) ✓; output ✓ (also a rendered PDF). **Input oversimplified**: the paper needs **5 components** (idea summary, experiment log, LaTeX template, conference guidelines, optional figures), not 2. |

> [!warning] The honest headline (what the hype drops)
> Against **real human-written papers**, PaperOrchestra reaches only a **43% tie/win** rate (humans preferred the real papers ~57% of the time) and produces **fewer citations** (~46–48 vs ~59). The eye-catching margins are vs *AI* baselines, often via *automated* judges built by the *same team*. The "84%/81% acceptance" is **LLM-simulated**, not a program-committee decision.

## Fit for my thesis / MATE-Automation
**Relevance:** partial. It's tuned for CV/ML venues (CVPR/ICLR) — nothing validates it on simulation-based nuclear-physics + ML papers, and its quality claims don't transfer across genre. It overlaps ~80% with what [[EvoSkills-Paper-Writing-Index|EvoSkills]] already gives me with more human control. So mine it for **patterns**, not as a generator.

### Borrowable patterns (highest value first)
1. **Verified-citation agent (verify-before-cite).** *The graft worth making.* For every reference Claude wants to cite, hit an API to confirm title/authors/year/DOI exist and match, then emit a **verified `.bib` registry**; the writing pass may only cite keys in that registry. **For nuclear physics, swap Semantic Scholar for [INSPIRE-HEP](https://inspirehep.net) or NASA ADS** (HEP/nuclear-native, clean BibTeX). Buildable as a small Claude Code sub-agent via `/orchestrate` or `/dispatch`. Directly fills EvoSkills' missing verification step in [[related-work-guide]].
2. **Peer-review loop with an accept-only-if-score-improves gate.** After a draft, spawn an adversarial reviewer sub-agent (or `/reflect` / `/llm-council`) scoring fixed axes (novelty, claim-evidence anchoring, clarity, limitations) → reviser pass → re-score → **keep the revision only if the score didn't regress.** The monotonic gate stops "revision" silently degrading a section. Cap ~5–7 iterations. Complements my existing EvoSkills `paper-review` handoff.
3. **Outline-first plan bundling a viz plan + literature-search strategy** as one machine-readable spec the downstream agents consume (dovetails with my claim-to-experiment mapping + OpenSpec habit).
4. **Figure agent as a VLM *critic* loop** (not raw generation): draw with deterministic tools (matplotlib/TikZ/[[excalidraw-diagram-generator|Excalidraw]]), then have a vision pass critique it against the claim it must support, then regenerate. Image models still mangle scientific labels — keep them as critic + drafter only.
5. **Verify-before-write provenance discipline** generalized: any agent-written claim must trace to a verified artifact (registry entry, experiment-log row, verified figure). Encodes the rigor instinct as a *pipeline gate* instead of a manual catch.

### Cautions
- **Domain mismatch** — CV-venue benchmark only; genre conventions (NIM/PRC/EPJA, detector methodology, simulation-validation framing) differ; don't trust end-to-end quality claims for physics.
- **Simulated, not real, metrics** — "84%/81% acceptance" is LLM-as-judge, not a PC decision.
- **Self-friendly, affiliation-biased eval** — benchmark + automated judges + simulated reviewer all from the same Google team; automated margins flatter the system vs honest human margins.
- **Citation-stuffing risk (acute in physics)** — the system chases citation *count*; padding Related Work invites reviewer suspicion. Optimize for **verified + relevant**, never count.
- **Not a product** — un-peer-reviewed preprint + research repo; re-implement the patterns yourself.
- **Slower than the baseline it "beats"** (39.6 vs 35.1 min) and the ~40-min figure is a trimmed mean over 10 papers — speed isn't the selling point.

## Relation to EvoSkills
Complementary. **EvoSkills is my human-in-the-loop craft layer** (planning, section templates, counterintuitive tactics, review checklist). **PaperOrchestra is the autonomous version of roughly the same pipeline** — its Outline / Section Writing / Content Refinement agents mostly re-implement what EvoSkills already gives me. The **one thing EvoSkills lacks** is the **verified-citation Literature Review agent**; that's the highest-value graft. **Net plan:** keep EvoSkills as the spine, bolt on (a) a `citation-verify` sub-agent pointed at INSPIRE-HEP/ADS and (b) a score-gated revise loop, as MATE-built tooling. Ignore the rest as CV-domain, self-evaluated, non-product material — and *monitor* for a future physics/NIM-validated version before trusting any end-to-end generation.

## Sources
- **Primary:** arXiv preprint [2604.05018](https://arxiv.org/abs/2604.05018) · [project page](https://yiwen-song.github.io/paper_orchestra/) · [code](https://github.com/google-research/paper-orchestra)
- **Trigger:** [X post by @alex_prompter](https://x.com/alex_prompter/status/2042452776433926570) (2026-04-10) — directionally accurate, numerically inflated (see fact-check).
