<!-- Verbatim source section; overview: [[../fm-ar-label-blast]] -->
<!-- SOURCE-BODY-START -->
## 1.3 New finding: EXP2's "³He/⁴He" runs are α-vs-rest **with carbon in the negative class**

The EXP2 3He4He configs set `dataset: Garfield_HC` with no `hdf5_files` list → directory glob. The 13C/14C HC files were written into that same directory on 2026-03-18 (`exp2-impl/01_data_generation.md:56,99-100`), *before* the 3He4He runs launched later that day. Result: 7 files × 25k = 175k total → 140k/35k split, matching the observed 35k val (5k class-0 + 30k class-1) that `01_exp_results_investigation.md:225` flags as "unexplained." **Explained.**

Consequences:
- EXP2-Gated/Concat "3He4He" = α vs {p,d,t,3He,13C,14C} — a *different, harder* task than EXP1's α vs {p,d,t,3He}. Their 96.94/96.98% vs EXP1's 95.80% is a cross-task, cross-val-set comparison; the manuscript's "ordering was the same (96.98, 96.94, 95.80)" (`main.tex:381`) already hedges "not fully controlled" but attributes it to val size only — the negative-pool difference is undisclosed.
- The EXP2 implementation log's "4 files (3He, 4He, 6He, Non-alpha)" (`implementation_log.md:166`) is wrong on both count and names — likely stale prose; the 35k val proves 7 files.

<!-- SOURCE-BODY-END -->
