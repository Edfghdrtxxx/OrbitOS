<!-- Verbatim source section; overview: [[../fm-ar-claims-refresh]] -->
<!-- SOURCE-BODY-START -->
## 5. Updated ledger — TIER 4 (partial / disclosure gaps)

| # | Loc | Claim | Status now | New evidence |
|---|-----|-------|------------|--------------|
| 18 | L166-170 | Garfield preprocessing description | **partially wrong — unchanged** | — |
| 19 | L144 | "five particle species" | **incomplete — unchanged** | — |
| 20 | L248 | "all reported accuracies refer to held-out validation sets" | **stands but incomplete — strengthened** | test-split (via closing-sync §5.2): selection premium measured **0.21–1.74pp, mean 0.71pp** across 12 runs; lf run only 0.22pp. A free held-out pool exists (75k/file complement; `exp3_heldout_unused.py` shipped, PR #17). One disclosure sentence + optional held-out eval. |
| 21 | L238 | TRK Huber β | **minor omission — unchanged** | — |
| 22 | L371-377 | Generalization-gap figure | **stands as hedged — unchanged** | figure-provenance concurs. |
| 23 | L516 | "[NEED to clarify later]" | **placeholder — unchanged** | — |
| 24 | L387 | "should carry over to other AT-TPC configurations" | **unsupported — unchanged; new citable prior** | related-work §3b: Wheeler et al. 2026 (arXiv:2608.21756) is the direct prior on cross-experiment TPC transfer. Z01 publisher-test degenerate result (closing doc §17) is fresh evidence that cross-dataset transfer is nontrivial. |
| 25 | L146 | "α vs Nonα" correct task name | **stands — unchanged** | — |
| 26 | L176 | "~100% signal retention" (DBSCAN) | **unverified — unchanged** | — |
| 27 | L94 | Gas/geometry | **stands — unchanged** | — |
| 28 | L111-115 | Z²A ordering, ΔA/A | **stands — strengthened** (see Tier 3) | ρ=0.964 HC separability. |
| 29 | L142 | Garfield post-processor | **stands — unchanged** | — |
| 30 | L204 | MoI from log-compressed Ch0 | **stands — unchanged** | — |
| 31 | L332 | "single-seed … bound rather than overturn" | **stands — unchanged** | — |
| 32 | L507 | "strengthens the case for the minimal 4-feature physics vector" | **stands — caveat now confirmed, not optional** | D6 proves the scaling issue is the live question: Raw head depends on physics *magnitude* (scaled_cls collapse), HC head ignores physics entirely. The "minimal vector" framing should carry the normalization caveat. |

<!-- SOURCE-BODY-END -->
