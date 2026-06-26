---
type: reference
source_type: skill-index
platform: GitHub
repo: EvoScientist/EvoSkills
author: EvoScientist
title: "EvoSkills — Paper-Writing Skill (Index)"
source_url: https://github.com/EvoScientist/EvoSkills/tree/main/skills/paper-writing
retrieved: 2026-06-26
topic: AI-assisted paper writing
tags: [reference, paper-writing, academic-writing, evoskills, index]
related: "[[PaperOrchestra-AI-Paper-Writer]], [[MATE-Automation]], [[Masters_Thesis]], [[Autoresearch-Karpathy]]"
---
> [!info]+ Retrieval wrapper — non-source material
> This is a navigation/index note I (Claude) wrote on 2026-06-26 for the verbatim mirror of the [EvoScientist/EvoSkills](https://github.com/EvoScientist/EvoSkills/tree/main/skills/paper-writing) `paper-writing` skill. The 10 sibling notes in this folder are faithful copies of the source; **this note is summary + commentary, not source content.** Open the linked mirror notes for the full, unedited text.

# EvoSkills — Paper-Writing Skill (Index)

A systematic, section-by-section workflow for drafting academic ML/CS-style papers, built around an explicit **11-step process** and a router (`SKILL.md`) that defers section detail to nine reference files. The whole skill is engineered toward one goal: **maximize acceptance probability by anchoring every claim to a table or figure.** It assumes upstream "planning" and "experiment" artifacts exist and treats paper writing as *assembly of prepared parts*, not from-scratch invention.

## The 11-step workflow (dependency order, not document order)
1. Sketch the **pipeline figure**
2. Design the **story** + plan experiments
3. Write **Method** (run experiments in parallel)
4. Revise **Intro + Method**
5. Write **Experiments** (once results land)
6. Polish figures + create a **teaser**
7. Write **Related Work**
8. **Self-review** → hand off to a separate `paper-review` skill
9. Write **Abstract** (deliberately near the end)
10. Choose the **title**
11. **Iterate**

## Reference files (verbatim mirrors)
| File | What it gives you | Serves step |
|---|---|---|
| [[paper-writing-SKILL]] | Master router: the 11-step order, artifact-source table, hard rules, handoff checklist | all |
| [[abstract-templates]] | 3 abstract structures + 4 pre-writing questions + length/claim rules | 9 |
| [[introduction-templates]] | 4 task × 3 challenge × 4 pipeline templates; the banned "naive→improvement" anti-pattern | 4 |
| [[method-templates]] | Three-element-per-module system (design / motivation / advantages) + overview skeleton | 3 |
| [[experiments-guide]] | 3-question RQ structure, mandatory 2-part ablation, structured-observation style, booktabs rules | 5 |
| [[related-work-guide]] | 3-step process (list → group into 2–4 topics → positioning paragraphs) | 7 |
| [[supplementary-guide]] | Main-vs-appendix placement rules ("supplementary is depth, not defense") | 5–6 |
| [[counterintuitive-writing]] | 7 trust-building tactics + a 10-minute pre-submission T/F claim pass | 8 |
| [[writing-practice]] | 3 deliberate-practice paths; "clarity = compression, not word count" | habit |
| [[writing-principles]] | Paragraph/sentence rules, reverse-outlining, terminology consistency, multi-pass self-edit | all |

## Cross-cutting principles (the reusable spine)
1. **Anchor every claim to evidence.** Any Abstract/Intro claim must point to a specific table/figure — run the T/F pass and delete unanchored sentences before submission.
2. **Write in dependency order, not document order.** Pipeline figure + Method first; Experiments when results land; Abstract + title last.
3. **Structure every unit as motivation → content → advantage.** The Method's three-element system, the Experiments' bold-title→evidence→mechanism observations, and the Intro's challenge→insight→contribution all encode the same "say WHY before WHAT, then WHY-IT-WORKS" spine reviewers trust.
4. **Underclaim in prose, overdeliver in evidence.** Lower the verbal temperature, state one scope boundary + one limitation, show one diagnosed failure case, build one decisive anchor figure.
5. **Clarity comes from compression and planning, not volume.** Plan the outline first; one-message paragraphs with topic sentences; fixed terminology; reverse-outline to audit flow. Difficulty writing a section signals unclear thinking/pipeline.
6. **Reuse upstream artifacts.** Module Motivation Mapping table, story summary, experiment plan, and claim-to-experiment mapping feed directly into Method/Intro/Experiments.
7. **Avoid incremental-looking framings reviewers punish.** No "naive solution → our improvement" intro; never bury a core ablation in the supplementary; never omit recent/SOTA references or the limitation section. These are documented rejection triggers.
8. **Treat figures/tables as first-class persuasion.** Booktabs tables, captions describing *setup* (not results), color/bold for best + underline for second, ↑/↓ arrows, one high-information anchor figure.

## Applying this to my thesis / MATE
> [!tip]+ TPC-PID / energy-regression specifics
> - **Abstract (Recommended Version 2, Challenge→Insight→Contribution):** the bridging insight = *domain shift between simulated and measured TPC tracks motivates DANN/MCD*; pre-check every number against EXP1–7.
> - **Introduction:** use *General-to-Specific* task template + *Observation-Driven* pipeline template (broad: ML for nuclear PID → specific: ResNet/ViT on TPC images with sim-to-real shift). The anti-pattern warning stops you framing domain adaptation as a tweak on a baseline classifier.
> - **Method:** one motivation-design-advantages subsection per module (preprocessing → ResNet/ViT backbone → DANN/MCD head → PID / energy regression); the forward-process template forces the step-by-step input→output reviewers expect.
> - **Experiments:** comparison (ResNet vs ViT vs baselines) + big-table core ablation (with/without domain adaptation; DANN vs MCD) + small ablation tables (backbone depth, input representation, label noise).
> - **The Limitation rule is your friend:** it reframes *"simulation-only"* as a **scope boundary**, not a technical defect ("if the method does not fall below current SOTA metrics, it is not a defect").

## Per-file key takeaways (folded)
> [!note]- paper-writing-SKILL.md — master router
> - The exact 11-step order (Abstract is step 9, near the end).
> - Artifact Sources table mapping upstream skills → where outputs are consumed (story summary `task→challenge→insight→contribution→advantage`, Module Motivation Mapping, experiment plan, claim-to-experiment mapping; ablation tables; failure analysis).
> - Hard rules: Conclusion MUST have a Limitation section (= task/setting boundary, not a defect); the "naive→improvement" intro is banned.
> - Handoff-to-Review checklist + Section Navigation table (which reference file at which step).
> - LaTeX assets: `paper-skeleton.tex`, `table-style.tex`; title = keywords first, then an informative title naming technique/task/problem.

> [!note]- abstract-templates.md
> - 4 pre-writing questions (Q1 problem+why-no-solution and Q4 advantage+insight are flagged Critical).
> - V1 Challenge→Contribution; **V2 (Recommended) Challenge→Insight→Contribution**; V3 Multiple Contributions.
> - 150–250 words; every claim experimentally supported; never "we propose a novel method" without saying what's novel.

> [!note]- introduction-templates.md
> - Selection tables: Task (V3 General-to-Specific recommended), Challenge (V1 Evolutionary…), Pipeline (V4 Observation-Driven…).
> - Reverse-then-forward thinking process.
> - Banned anti-pattern: "A straightforward approach would be [naive], however [problem]…".
> - Reusable scope-boundary sentence + contribution-paragraph checklist.

> [!note]- method-templates.md
> - Three-Element System per module: (1) Design (structure + forward process), (2) Motivation (problem-driven), (3) Advantages (why it works). Import the Module Motivation Mapping table if planning was used (one row = one subsection).
> - Overview-paragraph LaTeX template (Setting → Core contribution → Fig ref → roadmap).
> - Write design FIRST, then add motivation + advantages. Reusable motivation openers ("A remaining problem is…", "However, [existing] have difficulty in…", "We observe that…").

> [!note]- experiments-guide.md
> - 3 questions: prove better (comparison) / prove modules effective (ablation) / show upper limit (hard demos).
> - Mandatory 2-part ablation: 1 big table for core contributions + several small tables for design choices.
> - Structured-observation style: bold title (innovation→result) + numeric evidence + mechanism; method name as subject.
> - Booktabs table rules; caption describes SETUP not results; ↑/↓ arrows; color/bold best, underline second.

> [!note]- related-work-guide.md
> - 3 steps: list all closely related papers → 2–4 topics → per-topic positioning paragraphs.
> - Per-topic pattern: what the line addresses → chronological survey with \cite → explicit "Unlike [prev], our method…".
> - Missing key references is the most dangerous pitfall (can alone cause rejection); when in doubt, over-cite.

> [!note]- supplementary-guide.md
> - Core claims supporting accept must be in the MAIN paper; supplementary = depth, not defense.
> - Placement table (core comparison/ablation → main; extra variants, full hyperparams, proofs, galleries → supplementary).
> - Appendix order: Implementation Details → Additional Experiments → Additional Qualitative → Proofs. Forward-reference specifically ("See Appendix A", "Table S1").

> [!note]- counterintuitive-writing.md
> - 7 tactics: lower verbal temperature; declare scope; mechanism-before-metrics; claim-evidence thread; one anchor figure; delete the most impressive UNsupported sentence; one diagnosed failure case.
> - 10-minute pre-submission pass: mark each Abstract/Intro claim T/F (table-or-figure evidence), rewrite/delete every F.

> [!note]- writing-practice.md
> - Path 1 daily paper summaries (1 sentence novelty + pipeline steps); Path 2 verbal articulation ("if you can't say it, you can't write it"); Path 3 slides as writing practice.
> - Bottleneck is clear thinking, not word count. Intro's first 2–3 paragraphs are hardest; hard-to-write Method = unclear pipeline → re-plan.

> [!note]- writing-principles.md
> - One message per paragraph; topic-sentence-first.
> - Outline → refine → draft → flow-check; **reverse-outlining** to audit structure.
> - Sentence rules: motivation clarity, flow/transitions, terminology consistency (one fixed name).
> - Perfectionist multi-pass self-review (one aspect per pass: structure/clarity/grammar/figures/references).

## Related
- [[PaperOrchestra-AI-Paper-Writer]] — the *autonomous* version of roughly this same pipeline; its one net-new idea (verified-citation agent) fills EvoSkills' gap.
- [[Autoresearch-Karpathy]] — borrowable patterns for unattended experiment loops.
- [[MATE-Automation]] / [[Masters_Thesis]] — where this writing scaffold gets used.
