<!-- Verbatim source section; overview: [[../fm-ar-label-blast]] -->
<!-- SOURCE-BODY-START -->
## 1.4 The one unsettled question: Windows-file label values at V6/EXP1 run time

Everything above is settled except the actual `labels` dtype values inside the **Windows** `D:\...\dataset\Garfield_{HC,Raw}\*.h5` files. Local evidence:

- `label_map_version='openspec_v6'` attr present on the Windows Garfield_HC files (measured March 2026, `EXP1 review_01.md:58`, `review_03b.md:11`). The relabel script `relabel_garfield_v6_labels.py` sets this attr **after** rewriting labels (`01_converter_verification.md:24,68`; `review_01b.md:25` verifies the idempotency guard).
- **But the attr is not proof of label values**: if the converter wrote `openspec_v6` while emitting OLD labels (e.g., the V5-wrapper default path — the same path whose default mapped both 13C and 14C to label 1, `exp2-impl/01_data_generation.md:49`), the attr lies. The EXP1 docs' label table (`03_data_subsampling.md` §2) asserts `4He=4` but its own verification line only confirms "a single unique label value (0 through 4 respectively)" per file — it never says which file holds which value.
- The box-176 files are OLD-mapped (measured). If they were copied from Windows *after* relabeling they would be v6-mapped — so either they are an independent conversion (V5-wrapper default = OLD) or pre-relabel copies. Both are consistent with Windows files being v6-mapped **now**; neither says anything about **February 2026** (V6 run time) vs the relabel script's creation date.

Two scenarios:
- **(a) Windows files v6-mapped at V6 run time** → V6 Table 4 = true α-vs-Nonα; EXP1/EXP2 = true α-vs-rest; only the EXP3 box lineage carried the bug. EXP1-vs-V6 comparisons valid.
- **(b) Windows files OLD-mapped until an openspec-era relabel** → V6 Table 4 = triton-vs-rest (same bug as EXP3, undetected for 8 months); EXP1/EXP2 clean only if runs post-date the relabel (EXP1 ran 2026-03-17, EXP2 2026-03-18 — plausibly after). Under (b), the EXP1-vs-V6-RN-HC near-tie (95.80 vs 95.75) is a cross-task coincidence, and the manuscript's entire V6 section reports the wrong positive class.

**Cheapest verification (none possible locally — no Garfield H5 on this Mac):**
1. **Windows box, ~1 min:** `h5py.File(r'D:\...\Garfield_HC\sim_inv_12C300MeV_4He_t_100k_garfield_v5_hc.h5')['labels'][:].unique()` + `['metadata'].attrs['label_map_version']` on the `t` and `4He` files. If `t`→4: files are OLD-mapped *now* → V6 was buggy (files can only have been relabeled *to* v6, never back). If `t`→2: v6-mapped now → proceed to step 2 for run-time state.
2. **Windows box, ~2 min:** `predictions.csv` + `data_split.json` (or the run's saved val indices) from `V6_ResNet_HC_20260204_004518` — same join I ran for EXP3-RN-HC-s42 (§1.1): which species file contributes the class-0 events. Decisive for the *run-time* mapping regardless of current file state.
3. **Tiebreaker:** `relabel_garfield_v6_labels.py` mtime / git history on the Windows repo vs V6 run-dir timestamps (2026-02-02/04).

<!-- SOURCE-BODY-END -->
