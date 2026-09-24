<!-- Verbatim source section; overview: [[../fm-ar-exp2-contam]] -->
<!-- SOURCE-BODY-START -->
## 3. Every place EXP2 numbers are quoted

| # | Location | Numbers quoted | Verdict |
|---|---|---|---|
| 1 | `10_Papers-Thesis/Physics_Informed/main.tex:381` | 13C/14C: 86.07/85.74/84.63; "³He/⁴He": 96.98/96.94/95.80 | 13C/14C numbers **stand** (clean runs). ³He/⁴He numbers **inflated ~1.2 pp and misleading**: task is α-vs-rest not ³He/⁴He; negative pool undisclosed-carbon-contaminated; the "smaller validation set" caveat understates it (different *composition*, plus asymmetric training data — EXP2 trained on 28.6% carbon, EXP1 on none). Clean-subset values ≈95.7–95.8% collapse the ordering to a tie. |
| 2 | `openspec/changes/EXP2-fusion-mechanism-comparison/implementation_log.md:114-115, 126, 150-153, 166, 192, 203` | 96.94/96.98; CMs; "4 files (3He,4He,6He,Non-alpha)"; "Concat > Gated > CrossAtt"; "~11 pp drop confirms Δ(A/Z) intuition" | Accuracy/macro-F1 rows **inflated**; the "4 files" prose **wrong** (7 files, no 6He/Non-alpha files exist); the ranking claim **artifact of val composition**; the "~11 pp drop" line is **uninterpretable** — it compares a contaminated α-vs-7-species task against a clean 13C-vs-14C task. |
| 3 | `openspec/changes/TRK-group-meeting-20260326/01_exp_results_investigation.md:220-223, 258, 475` | 96.943/96.983; "35k val unexplained"; "not directly comparable" | The flag was correct; **root cause now determined** — 7-file glob including carbon. The "not directly comparable" warning stands and should be upgraded to "inflated; clean-subset ≈95.7%". The 13C/14C rows (L229-231, 258) **stand**. |
| 4 | `20_doc/paper/paper_anchor.md` | — | No EXP2 numbers quoted. No action. |
| 5 | `20_doc/EXP3_closing_analysis_2026-09-24.md`, `EXP3_campaign_narrative_draft.md`, `EXP3_results_interpretation_predraft.md`, `EXP3_garfield_noise_robustness_analysis.md`, `EXP4_attention_collapse_finding.md`, `Experiment Recordings/` | — | No EXP2 numbers quoted (grep-verified). No action. |
| 6 | `runs/EXP2-fusion-comparison/figures/` (7 PNGs, Windows only) | exp2_accuracy_bars etc. | **Inflated** for the 3He4He panels; regenerate if reused. |

Suggested wording for `main.tex:381` (finding only — captain edits): replace the ³He/⁴He clause with e.g. *"on the α-vs-rest task the three mechanisms were statistically indistinguishable (≈95.7–95.8% on the five light species; the originally reported 96.9% figures included ¹³C/¹⁴C events in the validation pool)"* — or drop the arm and let the clean 13C/14C result carry the claim, which it already does.

---

<!-- SOURCE-BODY-END -->
