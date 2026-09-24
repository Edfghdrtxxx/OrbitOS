<!-- Verbatim source section; overview: [[../fm-ar-d14-power]] -->
<!-- SOURCE-BODY-START -->
## 4. Minimum n per diagnostic, and the 2 GB memory model

### Required n (95% CI half-width ≤ effect, paired where applicable)

| Diagnostic | Effect to resolve | Min n |
|---|---|---|
| D1/D3 probe gap | observed +1.2pp | n_test ≈ 2,700–5,900 → **total ≈ 5,300–11,700** (discordant fraction q=0.10–0.22 assumed; unpaired needs ~13k) |
| D1/D3 probe gap | decision-table-meaningful 2pp | total ≈ 1,900–4,200 |
| D2 vs majority | +2pp excess | total ≈ 3,100 (but observed direction is ≤0 — nothing to power for) |
| D4 error-rate diff | observed 1pp | n ≈ 3,800 |
| D4 discordant split | observed 55/45 vs 50/50 | n ≈ 8,000 (80% power); a 60/40 split needs only n ≈ 2,000 |

So: the originally planned n=2000 would have resolved a 2–3pp probe gap or a 60/40 D4 split, but **not** the observed 1.2pp/1pp effects. To resolve the observed effects: **n ≈ 6,000–8,000** (paired), up to ~13,000 worst case.

### Memory model — n is not the constraint

Arrays that scale with n (script lines 78-103, 181): `xa.head_input` n×68, `xa.aux` n×64, `rn.head_input` n×512, `rn.aux` n×4, logits n×2 ×2, labels/preds ×2, `phys_raw` n×4 — **≈2.6 KB/event → 21 MB at n=8000**. Trivial.

Images are the only other n-scaling term: `MATEDataset` memmaps `cache/images.npy` (`dataset.py:291,300-308`) or reads HDF5 per-event (`dataset.py:529`); ~30 KB/event touched → ~250 MB page-cache at n=8000 (only if the cgroup charges page cache).

Everything else is **fixed** overhead independent of n: torch + sklearn + h5py import RSS (~1–1.5 GB combined), two MATEModel instances, per-batch activations (~tens of MB at batch 32), DataLoader (workers=0 here). The two OOM kills at n=2000 were therefore almost certainly **fixed-overhead** deaths — the process was already within ~50 MB of the cap, and n only moved the total by ~50 MB. Cutting 2000→500 "fixed" it by luck of margin, not because n drove memory.

**Exact change to reach n≥8000 in 2 GB** (in priority order):

1. `torch.set_num_threads(1)` plus `OMP_NUM_THREADS=1 MKL_NUM_THREADS=1` before importing torch — thread-pool arenas are the usual multi-hundred-MB hidden cost on capped CPU boxes.
2. Split the script into two processes: extraction writes `features.npz` and exits (freeing torch's ~0.5–1 GB), a second torch-free process runs the three LogReg probes. Peak RSS drops by roughly the torch footprint during probing.
3. If page cache is charged: `os.posix_fadvise(fd, 0, 0, POSIX_FADV_DONTNEED)` on the `images.npy` fd after open, or force the HDF5 path (no `cache_dir`) — per-event reads don't accumulate cache.

With (1)+(2), n=8000 needs ≈ fixed 1.2–1.5 GB + ~270 MB n-scaling — fits. No streaming rewrite required; the arrays are already streaming-friendly (batch append → concatenate).

<!-- SOURCE-BODY-END -->
