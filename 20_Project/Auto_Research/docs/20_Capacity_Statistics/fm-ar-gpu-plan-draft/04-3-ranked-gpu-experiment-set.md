<!-- Verbatim source section; overview: [[../fm-ar-gpu-plan-draft]] -->
<!-- SOURCE-BODY-START -->
## 3. Ranked GPU experiment set

Ranking principle: information-per-GPU-hour against *paper claims*, diagnostics before cures (doctrine), the paired-Δ gate from closing doc §6 preserved.

| Rank | Run | Config change vs triton arm | Seeds | Est. GPU-h (train / w×1.3) | Claim it gates | Result that changes the paper |
|---|---|---|---|---|---|---|
| **G1** | **RN-Raw-lf s42** | RN-Raw cfg + `file_class_list [1,1,1,1,0]` | 42 | **4.8 / ~6.2** | **C11 central claim; C12 comparator** | The headline paired Δ_Raw on the *true* 4He task. XA-Raw-lf = 0.9214. If RN-Raw-lf ≈0.92 → XA parity on Raw (claim dead on Raw too). If RN < 0.92 → first evidence XA's physics path helps where the paper predicted. **Nothing else ranks until this number exists.** |
| **G2** | **XA-HC-lf s42 + RN-HC-lf s42** | same mutation on HC arms | 42 | **6.4 / ~8.3** (3.3+3.1) | **C11 interaction term** | Completes the 4He 2×2. The paper's claim is architecture×representation — without HC cells there is no interaction to report, only a Raw pairwise Δ. |
| | *— 16h cut line —* | | | **cum 11.2 / ~14.6** | | |
| **G3** | **XA-Raw-lf s1 + RN-Raw-lf s1** | same, seed 1 | 1 | **10.3 / ~13.4** | Seed-robustness of the headline | Second seed of the Raw pair — the number the paper will headline. Per anchor policy, no delta may be presented as seed-robust on n=1. |
| **G4** | **XA-Raw-lf s0 + RN-Raw-lf s0** | same, seed 0 | 0 | **10.3 / ~13.4** | Seed-robustness | Third seed → mean±sd + paired stats on the headline, matching the triton grid's n=3 standard. |
| **G5** | **XA-HC-lf s0,s1 + RN-HC-lf s0,s1** | same | 0,1 | **12.8 / ~16.6** | Seed-robust interaction | Full 4He 2×2 × 3 seeds — parity with the triton evidence base. |
| | *— 60h cut line —* | | | **cum ~44.6 / ~58** | | |
| **G6** | **Triton XA-Raw-seed1** | none (existing cfg) | 1 | **5.5 / ~7.2** | C2 grid completeness | Makes the triton deficit 3/3 seeds. **Skippable** if the campaign pivots to 4He-only reporting — the deficit is already McNemar-guaranteed significant on 2/2 seeds (p≤0.035 / 7.5e-4). Diagnostic-task evidence only. |
| **G7** | **Mechanism pack — GATED, cures not diagnostics** | `query_mode: learned` latent-Q; `attn_dim: 512`; 4He zero-Q ablation | 42 first | **~5.5 each** | H1a/H1b resolution → architecture fix | Only after C1/C2 diagnostics land AND the paired-Δ gate fires (closing doc §6: Δ_Raw < 0 → zero-Q ablation then latent-Q/attn512; Δ_Raw ≥ 0 → skip mechanism work, spend on seeds). Do not pre-empt the gate. |

### Cut-line recommendations

- **At 16 GPU-h:** run **G1+G2 only (the 4He 2×2, seed 42) — ~11.2h train, ~14.6h with wall-clock headroom.** Bank the ~1.4–4.8h remainder; nothing else fits without stranding a half-pair (a lone RN-Raw-lf-s1 buys nothing without its XA partner). Alternative package if the council values seed-robustness over the 2×2: G1 + XA-Raw-lf-s1 + RN-Raw-lf-s1 = ~15.1h — two seeds of the Raw headline but no HC cells and no interaction term. **Recommended: the 2×2.** The paper's design is the interaction; and if Δ_Raw < 0 the campaign pivots to mechanism work, making a second Raw seed dead spend.
- **At 60 GPU-h:** **G1–G5 (~44.6h train, ~58h with headroom)** = complete 4He 2×2 × 3 seeds — the paper's PID section stands on the same n=3 footing as the triton diagnostic record. The ~2–15h remainder fits **one** gated mechanism run (G7, ~5.5h) *or* G6 (triton grid completion) — choose after the Δ_Raw sign and D1–D5 readouts are known. Do not commit the remainder now.

### Explicitly NOT in the set

- Re-running/continuing XA-Raw-lf s42 — converged, metrics on disk.
- Any energy-regression baseline — comparison complete and statistically airtight (21/21 Wilcoxon).
- EXP7 p/d/t baseline — its own proposal rates it droppable.
- More triton seeds beyond G6 — diagnostic task, diminishing returns.
- Mechanism runs before the gate — doctrine: no cures before a diagnostic confirms the mechanism.

<!-- SOURCE-BODY-END -->
