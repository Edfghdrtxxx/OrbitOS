# Intake residuals

Open uncertainties handed to the auto-research second mate at intake (2026-09-26). Facts to check or routing calls for the main firstmate; none is a captain call. Re-verified at intake: OrbitOS origin/main is 9f2b720323aa4702a24901c4b85f90bbda78f78b, MATE-Automation origin/master is 15016d66551907e3d555f5f51858382d4ab18717, both with 0 open PRs.

- R1. IMP reachability has not been re-probed since fm-ar-jump-net. IMP is the designated home for CPU jobs and durable data.
- R2. The scope of the captain's answer "run on the AutoDL box for a small fee" (main `data/done-archive.md:656-657`) is unknown: it covered at least halt items 2-6, and may or may not cover later CPU batches.
- R3. Box 176 holds the only copies of the EXP3 checkpoints and the Garfield data (`data/auto-research-index.md:21`; OrbitOS `docs/00_Campaign/fm-ar-box-evac.md`). AutoDL gives 24 hours' warning before a release (`data/captain-shared.md`), and the evacuation to IMP waits on R1.
- R4. Box 193's data status is unverified (`fm-ar-halt/03-3:5`).
- R5. Halt items 9-13 and the IMP move have no backlog rows (`fm-ar-halt/03-3:13-17`, `fm-ar-cpu-box/06:5`): B2 copy, e23 rewrite, NimpSim H5 location, `exp3_collect_tables.py`, and the closing-doc pass. Main decides whether and when to route them.
- R6. The NimpSim `3He_100k.h5` / `4He_100k.h5` location is still unanswered (`fm-ar-halt/03-3:15`). It gates reserve Options A and B.
- R7. The Overleaf live project was not checked for Table 4 or EXP2 edits; only the git manuscript tree was.
- R8. The leftover OrbitOS remote branches `fm/fm-ar-docs-cpubox`, `fm/fm-ar-index-rename`, and `claude/modest-gauss` still exist as of 2026-09-26 at origin/main 9f2b720; `claude/modest-gauss` may be the captain's, so ask before cleaning it.
- R9. It is unclear whether the `/reckon` after the jump scouts ran (`data/auto-research-index.md:23`).
- R10. The old omp lead handle `omp --resume 01a0bf45-…` ran with the live OrbitOS vault as its working directory (`data/auto-research-index.md:19`). Resuming it would write into the captain's vault; see the hard rule on live checkouts.
- R11. Whether Grok loads project hooks in the leased home without launch-time `--trust` (`.agents/skills/harness-adapters/references/harness/grok.md:91`). Trust is keyed to the primary checkout path, which is already trusted (`:43-52`).
