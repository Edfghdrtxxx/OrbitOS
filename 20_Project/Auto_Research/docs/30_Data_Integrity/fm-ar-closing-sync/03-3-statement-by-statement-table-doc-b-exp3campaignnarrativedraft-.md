<!-- Verbatim source section; overview: [[../fm-ar-closing-sync]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
