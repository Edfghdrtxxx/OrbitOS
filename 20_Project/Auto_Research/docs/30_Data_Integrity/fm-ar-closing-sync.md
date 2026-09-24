> Origin: `fm-ar-closing-sync` scout report; recorded 2026-09-24.

# fm-ar-closing-sync — which statements in the lead's three EXP3 docs are stale, contradicted, or unsupported

**Date:** 2026-09-24 · **Worker:** fm-ar-closing-sync (scout) · **Scope:** read-only on live checkout `/Users/Reid Hu/MATE-Automation` and on `/Users/Reid Hu/firstmate/data/fm-ar-*/report.md`. No box-176/AutoDL/IMP/Windows contact; no manuscript or lead files touched. Findings only — the lead edits its own docs.

**Docs audited** (line numbers are the live files as of today):
- **A** = `20_doc/EXP3_closing_analysis_2026-09-24.md` (225 lines)
- **B** = `20_doc/EXP3_campaign_narrative_draft.md` (122 lines)
- **C** = `20_doc/EXP3_results_interpretation_predraft.md` (90 lines)

**Reports consumed** (cited, not re-derived): fm-ar-d14-power, fm-ar-exp2-contam, fm-ar-test-split, fm-ar-closing-check, fm-ar-claims-ledger, fm-ar-figure-provenance, fm-ar-mechanism, fm-ar-related-work. fm-ar-closing-check already audited doc A against the *earlier* 18 scouts; this report folds in the four newer reports (d14-power, exp2-contam, test-split, related-work) plus mechanism/claims-ledger/figure-provenance, and extends the check to docs B and C, which no prior sync covered.

**Verdict key:** **stands** · **needs qualifier** (directionally right, overstated/under-caveated) · **contradicted** (wrong as written) · **superseded** (was true when written; later results made it stale or moot).

---

## 1. Headline

Doc A is numerically accurate but carries **4 stale status lines, 2 contradicted mechanism sentences, 1 self-contradicted header, and a systematic "test acc" mislabel**; its §10a H1b synthesis is now formally **underpowered, not confirmed** (d14-power). Docs B and C are **structurally superseded**: their decision tables wait on a `zero_physics_query` ablation that never ran and is now moot — the counterfactual battery already answered the question it was designed to ask (permuted_q Δ=0 on 6/6 checkpoints → query-content poisoning refuted). The single most important new fact none of the three docs records: **the label-fix run's val set is not the same events as the buggy runs' val set** (different stratify arrays → different partitions), so no paired per-event comparison between the triton-task and 4He-task runs is valid even in principle (test-split §1).

---

## 2. Statement-by-statement table — Doc A (`EXP3_closing_analysis_2026-09-24.md`)

Ordered by doc position. "Report §" cites the deciding section.

| Doc:line | Statement (compressed) | Report § | Verdict | Suggested replacement (one line) |
|---|---|---|---|---|
| A:L3 | "no run completed on the true 4He task" | closing-check R2; test-split §1; A:§4 itself | **contradicted (stale)** | "one run completed on the true 4He task (XA-Raw-lf, val 0.92136); the other three label-fix arms never launched." |
| A:L7 | "the buggy label map (raw label 4 = triton as class 0)" | closing-check R16 (label-blast §1.1) | **needs qualifier** | "the label map↔file-convention mismatch (`{4:0}` is correct for v6-mapped files where 4He=4; the box-176 files are OLD-mapped where t=4 → triton-vs-rest)." |
| A:L16 | "−1.7pp mean (n=2), 9.1× the RN-Raw seed std — a real arch×repr interaction" | mechanism §5.1; claims-ledger §3 | **stands** | — (recomputed: −1.33/−2.13 pp, mean −1.73; McNemar-guaranteed significant) |
| A:L17 | "The attended 64-dim vector + 4 noisy features under-serves the hard class" | closing-check R10 (referee A6/A7) | **needs qualifier** | "The deficit concentrates in class-0 recall (−4.9/−8.7pp; survives in balanced accuracy at −2.7/−4.6pp). Cause — narrow head, noisy concat, or calibration — is unlocalized pending D1–D5 and the threshold sweep." |
| A:L27 | "strongest single piece of evidence for H2 over pure H1: a pure width limit would plateau, not degrade" | closing-check R9 (referee A5) | **needs qualifier** | "…consistent with noisy physics entering twice — and equally with generic under-regularization on an untuned recipe (lr/dropout/wd identical across all 12 configs). Rules out a pure static capacity limit; does not by itself select H2." |
| A:L37 | "On Raw, attention is event-adaptive and Bragg-focused — routing works; the deficit lives downstream of routing" | closing-check R6 (attn-sink §3) | **needs qualifier** | "On Raw the attention map concentrates on the Bragg region (f_Bragg≈0.47 vs 0.20 null, seed 42 only) and is image/key-driven — the physics query demonstrably does not steer it (permuted_q Δ=0); the deficit lives downstream of routing." |
| A:L41, L43, L45 | "**test acc** 0.92136 … a valid completed-run **test** metric" | closing-check R1; test-split §1/§5.1; claims-ledger §3 | **contradicted (terminology)** | "val acc 0.92136 (n=25k validation events — the same split used for early stopping and best-epoch selection; no held-out test set exists in the EXP1/EXP2/EXP3 lineage)." |
| A:L43 | "the paired RN-Raw-lf comparator is still missing, so the sign of Δ_Raw on 4He is unknown" | test-split §1 (stratification caveat) | **stands — strengthen** | Append: "and the lf run's val set is a *different* 25k partition than the buggy runs' (different stratify array, same seed) — no paired per-event stats exist between triton-task and 4He-task runs." |
| A:L49 | "4He 2×2 (4 arms, seed 42): **0/4 complete.** XA-Raw-lf partial only." | closing-check R2; mechanism §4 inventory | **contradicted (stale)** | "4He 2×2 (4 arms, seed 42): **1/4 complete** — XA-Raw-lf done (0.92136); the remaining 3 arms never launched." |
| A:L52 | counterfactual battery "cannot run locally — needs ~5 min GPU or a checkpoint pull" | closing-check R15; A:§8/§9/§11 | **contradicted (stale)** | Remove from pending — the battery ran on box-176 CPU; 6/6 checkpoint JSONs synced (§8/§9/§11). Keep only D5/D6 conditions as pending. |
| A:L62–64 | "That instance is also off" (pull plan premised on box down) | closing-check R14; A:§15 | **contradicted (stale)** | "Box 176 is up in no-GPU mode (§15) — the battery already ran on-box CPU; the pull plan remains the fallback for getting weights local." |
| A:L111 | "Query content carries **zero** event-specific signal" | closing-check R5 (attn-sink §2, referee A4, feature-norm §3c) | **needs qualifier** | "permuted_q = original on all 6 checkpoints (Δ≤0.05pp at n=2000 — bounds any content effect at <~0.2% of predictions). On Raw the query is near-constant by construction (Izz≈170 DC) so the test is weak there; the strong evidence is HC + corrected 4He." |
| A:L112 | "the model needs *a* varying query … but doesn't care which" | closing-check R4 (attn-sink §2) | **contradicted** | "a constant bias query hurts (−6.5pp) — `b_q` lands outside the trained query cone and produces a different fixed attention pattern; the model needs a query inside that cone, not a varying one." |
| A:L113, L129(3), L149 | zero_cls collapse "ambiguous … D5 decides"; "load-bearing" provisional | closing-check R21; mechanism §2.5 | **stands** | — (correctly hedged; D5 still absent from all 6 synced JSONs) |
| A:L115, L131 | "H3 (query poisoning) is refuted"; deficit is "H1 or redundancy-crowding, not poisoning" | mechanism §2.4/§5.3; closing-check R5 | **stands** | — (6/6 permuted_q invariance; add the n=2000 bound qualifier from L111 row) |
| A:L129 | "permuted_q = original on all 5 checkpoints … on BOTH representations" | closing-check R5 | **needs qualifier** | Same as L111: bound, not zero; Raw test weak by construction. |
| A:L137–149 (§10 table) | D2 branch "acc ≈ chance → H1a"; D4 two-branch table | d14-power §3, §5, §6.4 | **needs qualifier** | D2 branch should read "≈ majority baseline" not "≈ chance"; D4 needs a third cell — "concentrated on shared hard events → common difficulty, mechanism unattributed" — the observed outcome matches neither preregistered branch. |
| A:L150 NOTE | "the classifier-physics **dependence** is task-invariant/architectural" | closing-check R8 (referee A2, results-audit F1) | **needs qualifier** | "the zero_cls collapse *signature* (→ minority-class prevalence) is task-invariant — it replicates on 4He (0.1935) exactly as on triton s42. Whether it reflects information dependence or an OOD bias artifact remains unresolved pending D5." |
| A:L150 CORRECTION | s0-anomaly signature (zero_both ≫ zero_cls) replicates on 4He | closing-check R22 | **stands** | — |
| A:L156–161 (§10a) | D1–D4 results + synthesis "D1+D3 → H1b … the learned head leans on uninformative physics magnitude" | d14-power §1, §5 | **needs qualifier (overclaimed)** | "D1–D4 at n=500 are consistent with head-usage/crowding but underpowered to separate H1a from H1b (probe CIs ±4–6pp; D1/D3 differences within noise). D2 resolves 'physics linearly uninformative'. D5 remains the decider." |
| A:L157 | "D2 0.792 below majority baseline (~0.81) → uninformative" | d14-power §0, §3 | **contradicted in number (direction stands, stronger)** | "D2 = 0.792 is *exactly* the test-half majority baseline (52/250 class-0 → 198/250) — the probe extracted zero linear signal." |
| A:L159 | "D4 … 28 shared / 27 XA-only / 22 RN-only — diffuse, not physics-mediated (capacity)" | d14-power §1 | **contradicted** | "D4: 28 shared errors vs 5.5 expected under independence (hypergeometric P≈1.7e-17) — errors are *concentrated* on the same hard (mostly class-0) events; mechanism unattributed — resolves neither H1a nor H1b." |
| A:L163 | "n=500 (OOM-forced reduction from 2000); probe CIs ±~3pp" | d14-power §4 | **needs qualifier** | "n=500 (OOM-forced; the OOM was fixed-overhead, not n-driven — thread-cap + two-process split makes n≈8000 feasible in 2GB). Probe CIs ±4–6pp; single 50/50 split, no CV." |
| A:L167–169 | first lf battery void (positional-label bug); corrected run numbers | closing-check R23; claims-ledger §3 | **stands** | — (corrected JSON verified on disk by two independent scouts) |
| A:L175–183 (§12) | "some seeds route meaningfully through query content (large zero_q cost), others barely use it" | closing-check R3 (attn-sink §2) | **contradicted** | "the attention pathway's dependence on the *position* of the query vector is learned and unstable across seeds — zero_q cost varies −5.8 to −57.1pp — while no seed routes through query *content* (permuted_q Δ=0 on all 6 checkpoints)." |
| A:L185 | "accuracy std understates mechanism variance — same architecture learns different routing strategies per seed" | mechanism §2.3; closing-check R19 | **stands** | — |
| A:L189, L191 | fm-ar-difficulty and fm-ar-comparisons summaries | closing-check R24 | **stands** | — |
| A:L193 | "McNemar bound p≤0.035 s0, p≤7.5e-4 s42" | closing-check R12 (gpu-ladder §2.2); claims-ledger §3 | **superseded** | "McNemar-guaranteed p≤1.5e-5 (s0) / p≤4.5e-12 (s42) under every discordant split (gpu-ladder's tighter worst-case bounds using actual error counts)." |
| A:L195 | retraction of "+9.2pp zero_q flip" | closing-check R23 | **stands** | — |
| A:L199–203 (§14) | OOD-leak + E1 audit summary; "strengthens crowding branch of H1" | closing-check R25; mechanism §2.2 | **stands** | — |
| A:L205 OPEN | "if physics features were meant to be normalized but aren't, that's a pipeline bug" | closing-check R11 (feature-norm §1); claims-ledger #3 | **contradicted (premise resolved)** | "RESOLVED: physics features are unnormalized by deliberate spec (Req-7.2; `dataset.py:472-475`; published legacy runs identical) — a design choice, not a pipeline bug. Separately, `main.tex:170,207` falsely claims standardization." |
| A:L209–211 (§16) | separability numbers (p–t 0.541 Raw, ³He–⁴He 0.617 hardest) | closing-check R20 | **stands** | — |
| A:L213 | "the XA-Raw deficit is **not a model failure** — the input features are uninformative on Raw" | closing-check R7 | **contradicted** | "the XA-Raw deficit is not a *physics-feature* failure — the features are uninformative on Raw either way. The deficit is a failure of XA's image pathway (routing + 68-dim head) to extract the class signal RN's GAP head finds in the same images." |
| A:L219–223 (§15) | running chains / done / pending lists | closing-check R13 + minor items | **superseded (partially stale)** | Move "corrected lf battery JSON" to Done (verified on disk, mtime 15:21); add "XA-Raw-s0 `data_split.json` also 0 bytes" to open threads; append paired-stats caveat: "align_pair silently drops label-mismatched events and keeps last-duplicate IDs (code-audit §3-4) — require zero-mismatch + unique IDs before quoting." |

---

## 3. Statement-by-statement table — Doc B (`EXP3_campaign_narrative_draft.md`)

| Doc:line | Statement (compressed) | Report § | Verdict | Suggested replacement |
|---|---|---|---|---|
| B:L25 | "**All 12 EXP3 runs** silently trained triton-vs-rest" | mechanism §4 inventory; A:§1 | **contradicted (stale)** | "11 of 12 EXP3 runs silently trained triton-vs-rest; the 12th (XA-Raw-label-fix-s42) is the first true 4He run." |
| B:L33–36 (§4 table) | XA-Raw n=1: 87.12%, class-0 recall 54.8% | mechanism §5.1; A:§1 | **superseded** | "XA+Raw (n=2): 87.34% (87.12/87.57), class-0 recall ~55.4%." |
| B:L38 | "XA−RN on Raw = −2.1pp (~10× seed std, real effect)" | mechanism §5.1; gpu-ladder §2.2 via closing-check R12 | **needs qualifier** | "XA−RN on Raw = −1.33/−2.13pp per seed (mean −1.73, n=2; McNemar-guaranteed p≤1.5e-5/4.5e-12) — real effect; on HC −0.08pp (tied)." |
| B:L44 | "The queued `zero_physics_query` ablation discriminates: recovery → query noise; no change → capacity" | A:§8–9; mechanism §2.4 | **superseded (moot)** | "The counterfactual battery answered this without the ablation: permuted_q Δ=0 on 6/6 checkpoints → query content carries no event-specific signal; the deficit is downstream of routing (capacity/crowding branch)." |
| B:L53 | "the attention pathway is used only when the fused physics features are uninformative" | closing-check R6 (attn-sink §3) | **needs qualifier** | "the attention *map* is Bragg-focused only when the fused physics features are uninformative — and it is image/key-driven, not query-steered (permuted_q Δ=0); single Raw seed." |
| B:L57–61 | prior-art framing (sinks, conditional sinks, distinct angle) | related-work §3c/§4 | **stands — reinforceable** | Optionally add Jain & Wallace 2019 / Serrano & Smith 2019 (attention ≠ explanation) and Hessel & Lee 2020 (ignored cross-modal interactions) — related-work verified all DOIs. |
| B:L67–70 (§7) | controls in flight (label-fix 2×2, query ablation, auto-EXP4) | A:§5/§15 | **superseded (stale)** | "Campaign stopped 2026-09-24: label-fix 2×2 is 1/4 (XA-Raw-lf 0.92136); query ablation never ran (moot — battery answered); auto-EXP4 never fired." |
| B:L78–81 (§8 table) | label-fix outcome bands (0.93–0.95 → bug dominant; ~0.87 → intrinsically hard) | A:§4; test-split §1 | **needs qualifier** | "Outcome landed between bands: XA-Raw-lf = 0.9214 — neither 'bug dominant' nor '~0.87'. Read: the 4He task is substantially easier for XA-Raw than the triton task; the sign of Δ_Raw on 4He remains unknown (no RN-Raw-lf comparator)." |
| B:L85–89 (§8 table) | query-ablation decision table | A:§8–9; mechanism §2.4 | **superseded (moot)** | "Ablation never ran; the battery resolved the branch it gated — poisoning refuted (permuted_q Δ=0 ×6), deficit is capacity/crowding-side." |
| B:L93–96 | EXP4-rerun-on-label-fix decision table | A:§5 | **stands (open)** | — (auto-EXP4 never fired; the question is still unanswered) |
| B:L98 | ILLEGAL list | test-split §1 | **stands — add one** | Add: "paired per-event statistics between buggy and label-fix runs (different stratify arrays → different val partitions even at the same seed)." |
| B:L105 | "if the label-fix 2×2 restores XA > RN on Raw at 4He, the paper's central claim survives … if not, needs a data-scale qualifier" | claims-ledger #8; related-work #5 | **needs qualifier** | "…if not, the V6 '+1.6pp Raw' advantage is contradicted at matched size (EXP3: −1.33/−2.13pp, McNemar-guaranteed) — the confound is measured, not hypothetical; the claim needs restating, not just a qualifier." |
| B:L112–114 | mitigation variants staged; launch decision deferred to ablation readout | mechanism §3 (locked prereg) | **superseded in part** | "The ablation gate is moot; cures are now gated on D5/`scaled_cls` per the locked rival-prediction table (fm-ar-mechanism §3) — din/gate fix query noise, which the battery refuted as the deficit's cause." |

---

## 4. Statement-by-statement table — Doc C (`EXP3_results_interpretation_predraft.md`)

| Doc:line | Statement (compressed) | Report § | Verdict | Suggested replacement |
|---|---|---|---|---|
| C:L13 | XA-Raw cell mean 0.87344, n=2 | mechanism §5.1 | **stands** | — |
| C:L19 | Run 2 (XA-Raw seed 1) blank template | A:§15 | **stands (open — never ran)** | — |
| C:L23–30 | label-fix 2×2 blank table | A:§4 | **superseded in part** | Fill XA-Raw-lf row: 0.92136 / α-recall 0.7254 / macro-F1 0.8693; mark other 3 arms "never launched — campaign stopped." |
| C:L36–37 | "XA-Raw-lf → 0.93–0.95 = bug dominant; stays ~0.87 = intrinsically hard" | A:§4 | **needs qualifier** | "Observed 0.9214 falls between the preregistered bands — record as '4He task easier for XA-Raw; Δ_Raw sign unknown pending RN-Raw-lf.'" |
| C:L43 | ILLEGAL: "fix delta" comparisons across different val splits | test-split §1 | **stands — strengthened** | The prohibition is sharper than stated: buggy and lf runs have *different* val partitions (stratify on different label arrays), so even same-seed per-event pairing is invalid. |
| C:L45–57 | Run 7 query-ablation template + decision table | A:§8–9; mechanism §2.4 | **superseded (moot)** | "Ablation never ran. The battery answered the gated question: permuted_q Δ=0 on 6/6 → not query poisoning; zero_q cost is query-cone geometry (seed-variable −5.8 to −57.1pp), not content." |
| C:L59–73 | variant cures "launch only if ablation says so" | mechanism §3 | **needs qualifier** | "The ablation trigger can never fire (never ran, question moot). Cure launches now gate on D5/`scaled_cls` per the locked prereg table — attn_dim=512 for capacity, physics_norm=zscore for the scale side-channel." |
| C:L75–83 | Run 11 auto-EXP4 template | A:§5 | **stands (open — never fired)** | — |
| C:L85–90 | standing follow-ups incl. "Decide GPU release (AutoDL wipe ~2026-10-06)" | A:§1/§15 | **superseded in part** | GPU decision already made (AutoDL closed at captain's call); remaining follow-ups (narrative §4 update, compare_exp3_runs) still apply. |

---

## 5. Conclusions the reports establish that none of the three docs records

Ordered by reader impact. Each is established in the cited report — cite, don't re-derive.

1. **The label-fix run and the buggy runs do not share a val set** (test-split §1). Same seed, different stratify array → different 25k partition. No paired per-event statistic between triton-task and 4He-task runs is valid; the "fix delta" prohibition in docs B/C is sharper than written.
2. **All EXP3 (and EXP1/EXP2/V4/V6) accuracies are validation metrics on the selection split** — no held-out test exists in that lineage; EXP8 and TRK *do* have true 70/15/15 test splits (test-split §1). Selection premium measured: best−final val gap 0.21–1.74pp, mean 0.71pp; label-fix run only 0.22pp (`exp3_selection_bias.py`, 12 runs).
3. **A free held-out pool exists**: `per_file_limit: 25000` leaves 75k unused events per file (375k/representation), never trained/validated/normalized — deterministic complement of the seeded subsample; CPU-evaluable on box 176 with ~50 lines of glue (test-split §3d). This is the only path to a true held-out number for the existing 0.92136 run.
4. **D1–D4 at n=500 are underpowered, and D4 was misread** (d14-power §1, §5): errors are concentrated (28 shared vs 5.5 expected, P≈1.7e-17), not diffuse; D2 equals the majority baseline *exactly* (0.792 = 198/250); D1/D3 differences are within noise. Correct framing: "H1b-leaning, unresolved; D5 decides." The OOM was fixed-overhead, not n-driven — n≈8000 fits in 2GB with `set_num_threads(1)` + a two-process split (d14-power §4).
5. **EXP2's "³He/⁴He" arm is carbon-contaminated** (exp2-contam §0–2): the two 3He4He runs globbed 7 files (5 light species + 13C/14C) → 35k val with 10k near-free carbon events; reported 96.94/96.98% inflates ~1.2pp; clean-subset ≈95.7–95.8% = a three-way tie with EXP1-XA's 95.80%. Touches `main.tex:381` and two openspec logs — **zero** EXP2 numbers appear in any of the three EXP3 docs, so no doc edit is needed, but the campaign record should note the blast radius.
6. **Physics features are unnormalized by deliberate spec, and the manuscript claims the opposite** (closing-check R11; claims-ledger #3; feature-norm §1): `dataset.py:472-475` "NOT normalized, Req-7.2"; `main.tex:170,207` falsely claims standardization. Izz≈170 contributes a ~386-norm DC to the query and fixes 108/128 hidden ReLU signs — the concrete mechanism behind the "magnitude/crowding" reading doc A already leans toward.
7. **The HC−Raw gap is image-side denoising, proven by the physics-free arm** (closing-check claims-to-add #5; mechanism §2.1): RN gains +6.5pp on HC with zero physics exposure → the representation gap lives in the image (DBSCAN removes ~94% of pads; Raw Ch0 track below σ≈0.028 noise floor). Absent from all three docs.
8. **Token 50 is not the beam hole; the sink is a learned register** (closing-check #4; attn-sink §1): token 50 = edge-adjacent near-empty block; beam hole is tokens 23/29/35/41/47. Honest architecture description: "single-query attention pooling + parallel physics concat."
9. **A unified 4-mechanism model with a locked rival-prediction preregistration exists** (mechanism §2–3): denoising + raw-physics side-channel/crowding + query-content invariance, with dated predictions for `permuted_cls`/`mean_cls`/`scaled_cls`/`clipped_cls`/`centered_q`/channel ablations/`swap_physics`/map-level `permuted_q` and the planned GPU runs. Doc A's §10 table should cite it so D5/D6 readouts are scored against predictions, not rationalized.
10. **Tighter guaranteed McNemar bounds** (closing-check R12; gpu-ladder §2.2): p≤1.5e-5 (s0) / p≤4.5e-12 (s42) — supersedes the nΔ² floor in A:L193.
11. **V6 Table 4 is unsettled** (closing-check #2; claims-ledger #11): whether the published V6 2×2 was α-vs-Nonα or the same triton bug hinges on Windows-file label values — decidable in ~1 min of h5py. Comparative XA-vs-RN deltas survive either way; task identity and α-recall are at risk.
12. **Manuscript §5.5's "controlled experiments" ran on the wrong task** (claims-ledger #1–2; related-work #1): they are Garfield_HC α-vs-Nonα, not NimpSim ³He/⁴He — the flagship 96.1% margin was never decomposed.
13. **No manuscript figure is built from an EXP3/EXP2/EXP1/V6 run** (figure-provenance §0): the label bug touches zero of the 12 referenced figures. Residual risks are caption/text: `attention_overlay.png`'s physics-guided framing (refuted on the only checkpoints tested), the EXP8 forest caption's nonexistent "null channel" row, and `figures/_legacy/v6_*.pdf` which must not be reinstated before the Windows label check.
14. **The bib has a fabrication problem** (related-work §2): 4 fabricated entries (`He2020ResNetSmall`, `Li2023CrossAttention`, `Li2021DomainAdapt`, `Yao2022Calibration`), 1 unverifiable (`Koch2021`), 5 wrong DOIs resolving to unrelated papers (incl. `Kuchera2019` → a RADFET dosimetry paper), plus miscited AdamW/label-smoothing and missing methods citations (RANSAC, Hough, LISE++, Hubert). Every DOI verified against Crossref/arXiv.
15. **Every campaign failure mode is precedented and citable** (related-work §4): permuted_q invariance → Hessel & Lee 2020; HC sink → Darcet 2024/Xiao 2024; unnormalized side-channel → Geirhos 2020 shortcut learning + Wang 2021 PINN gradient pathologies; OOD detection → ReAct (Sun 2021). The counterfactual battery is itself a contribution: a mechanism-audit protocol no prior AT-TPC ML paper applied.
16. **Two analysis-code bugs gate pending results** (closing-check #8; code-audit §2–4): `exp3_threshold_sweep.py` can emit a false "calibration" verdict (marginal vs joint threshold); `paired_stats.align_pair` silently drops label-mismatched events and accepts duplicate IDs. Also `src/baselines/kuchera.py` hard-codes the same `{4:0}` triton map while naming class 0 "Alpha (4He)".
17. **Augmentation is a silent no-op** (closing-check #16): `dataset.py:587-588` — any future config assuming augmentation silently runs without it.
18. **EXP8's seen-channel parity deserves plain statement** (claims-ledger §4.9): the arms differ *only* on far-OOD inputs — the physics pathway's cost is exclusively extrapolative.
19. **Z01/traditional-baseline anchors** (closing-check #14; mechanism §5.3): flattened-pixel LR = 0.9215 is the honest traditional baseline on the public Kuchera set; ResNet18 saturates at 1.0000; D2 physics-only LogReg is the missing EXP3 classification baseline.
20. **Per-species triton-task confusion** (closing-check #15): dominant confusion is d→t (3.6%), 4He→t only 0.7% — the triton task is a real stopping-power discrimination problem, which is why the XA<RN Raw deficit on it is meaningful.

---

## 6. Cross-report conflicts noticed (resolved by the reports themselves)

- **Label-fix battery JSON buggy vs corrected:** fm-ar-mechanism §4 still flags the local JSON as the buggy 0.7005 run — **stale**; closing-check R13 and claims-ledger §3 independently verified the corrected file on disk (original 0.9275, mtime 15:21). The lead should ignore mechanism §4's caveat on this point (its §1–3 analysis is unaffected).
- **McNemar bounds:** seed-evidence/referee quote p≤0.035/7.5e-4; gpu-ladder's p≤1.5e-5/4.5e-12 is newer and better-evidenced (claims-ledger §3 recomputed both) — use the tighter bounds.
- **EXP2 val size:** methods-audit said "same 25k val"; exp2-contam's CM arithmetic (35,000 = 0.2×7×25k) proves 35k with 10k carbon — exp2-contam is correct (claims-ledger §3 concurs).

## 7. Recommendation

Doc A needs a **targeted revision pass** (the L3/L49/L52/L62 staleness cluster, the "test acc" mislabel, the L112/L175/L213 contradicted sentences, the §10a overclaim, the L205 resolved premise, the L193 superseded bounds). Docs B and C need a **status banner**, not line edits: both are pre-stop planning documents whose queues and decision tables are now mostly moot — mark them "superseded by the 2026-09-24 campaign stop; retained as the preregistration record" and let doc A carry the live state. The §5 list above is where the campaign's newest established findings (test-split protocol, EXP2 contamination, d14-power verdict, mechanism prereg, bib integrity) currently have no home in the lead's docs.

## 8. What I did

- Read all three lead docs in full (live checkout) and all eight report.md files in full.
- Cross-checked every checkable statement in the three docs against the reports' verdicts; where reports conflicted, used the resolution already established by claims-ledger §3 / closing-check (which re-verified artifacts on disk).
- Did not re-derive any analysis; all verdicts cite report sections. No files modified anywhere.

## 9. Captain-hold inventory

This review surfaces **no new captain-owned question**. Everything it feeds is already held elsewhere: the GPU-budget call (`fm-ar-gpu-budget`), manuscript amendment (captain's declared task), and the Windows label check (held under the V6/Table-4 question). Completion gate: `complete --none`.
