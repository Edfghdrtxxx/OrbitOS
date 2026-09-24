<!-- Verbatim source section; overview: [[../fm-ar-d14-power]] -->
<!-- SOURCE-BODY-START -->
## 0. Reconstructed ground truth (exact, not estimated)

The JSON stores only aggregate accuracies, but exact class balance is recoverable:

- `data_split.json` `file_paths` are sorted (`3He, 4He, d, p, t`), 100k events/file → triton (class 0, raw label 4 → 0 per `src/data/label_contract.py:31`) occupies global indices `[400000, 500000)`.
- The script subsamples `val_indices[::50][:500]` (`exp3_h1_diagnostics.py:148-151`). Replaying this on the synced split gives **n0 = 99 class-0 events (19.8%)** — confirmed independently: the stored recalls 0.5758 = 57/99 and 0.6162 = 61/99 both have denominator 99.
- Replaying the probe split (`RandomState(42).permutation(500)`, `tr=perm[:250]`, `te=perm[250:]`, script lines 184-186): train half has 47 class-0 (majority 0.812), **test half has 52 class-0 → majority baseline = 198/250 = 0.792 exactly**.

Per-file subset counts: 3He 93, 4He 95, d 109, p 104, t 99 (sums to 500 ✓).

<!-- SOURCE-BODY-END -->
