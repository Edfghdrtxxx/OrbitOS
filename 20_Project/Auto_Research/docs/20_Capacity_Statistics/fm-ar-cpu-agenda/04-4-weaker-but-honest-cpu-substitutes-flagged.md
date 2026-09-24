<!-- Verbatim source section; overview: [[../fm-ar-cpu-agenda]] -->
<!-- SOURCE-BODY-START -->
## 4. Weaker-but-honest CPU substitutes — flagged

| GPU/box version | CPU substitute | How much weaker |
|---|---|---|
| Rung 1 true-4He 2×2 (C1) | None. The lf XA-Raw arm exists (0.92136) but has **no comparator** — no CPU substitute can produce the RN-Raw-lf number | No substitute; the sign of Δ_Raw on 4He stays unknown |
| NimpSim Option B decomposition (C2) | None | No substitute; §5.5 stays mislabeled until a real ³He/⁴He matched pair runs |
| Box-176 D6 battery on locked checkpoint | **B2: run it here on CPU torch** — needs ~200 MB copy (checkpoint + val-subset NPZ). Result is *identical*, not weaker: same code, same events, deterministic eval | Equal strength — this is the recommended path; the Mac is faster than the box's 2 GB cgroup |
| Box-176 predump paired stats | **B1: copy the dump CSVs** (~10–50 MB) → identical stats locally | Equal strength once files land |
| EXP8 cache refresh + max|h| join (queue jobs 2–3) | Local caches are **stale** (Jul-9, pre-auditfix). Local activation-OOD on them reproduces the numbers but cannot support *new* claims about the current checkpoint; the join needs either 24 GB of H5s or a ~20 MB observable export (B6) | Stale-cache analysis is honest for the "scale proxy not novelty" negative result (already established by maxh-confound) but cannot make positive claims — ~half strength |
| Windows visit (C5) | B11 fallback: if EXP2/V6 predictions+split were synced off the Windows box, the re-score runs here | Equal for EXP2 re-score; **no substitute** for the H5 label-value check (needs the files themselves) |
| Z01 publisher-test + noise eval | B8: copy checkpoint + test npy (~450 MB) → identical eval locally at 29 ev/s (~3 min for 2400 events) | Equal strength |
| Held-out eval (B3) | On-box CPU ~30 min vs local ~1–3 GB copy + ~1 h | Equal result; box is cheaper operationally |
| Kuchera VGG16 arm (C4) | FCNN/pixel-LR arms on MATE data — CPU-feasible but need MATE H5s (large); and weak baselines add little | Much weaker: VGG16 is the discriminating arm; LR/FCNN only add a floor |

---

<!-- SOURCE-BODY-END -->
