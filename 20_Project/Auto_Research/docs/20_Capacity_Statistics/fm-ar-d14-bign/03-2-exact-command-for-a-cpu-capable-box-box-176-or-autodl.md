<!-- Verbatim source section; overview: [[../fm-ar-d14-bign]] -->
<!-- SOURCE-BODY-START -->
## 2. Exact command for a CPU-capable box (box 176 or AutoDL)

The spec's k-fold requirement needs the patch in §3 (the merged script only does repeated 50/50 splits). Apply the patch, then:

```bash
cd /root/autodl-tmp/z01-exec   # repo root on the box (per n=500 provenance)
git apply /path/to/h1_kfold.patch   # §3 below
nice -n 19 python scripts/analysis/exp3_h1_diagnostics.py \
  --xa-run-dir runs/EXP3-XA-Raw-100k-seed42/20260922_185618 \
  --rn-run-dir runs/EXP3-ResNet-Raw-100k-seed42/20260921_181834 \
  --split val --device cpu --batch-size 32 \
  --max-events 8000 --cv-folds 5 --report-peak-rss
```

`--phase all` (default) already runs extract and probe as two subprocesses (torch RSS freed before sklearn loads — the PR-22 two-process split), and thread caps are already set at `scripts/analysis/exp3_h1_diagnostics.py:52-60`. `--report-peak-rss` (added by the patch) records `peak_rss_mb` in the JSON and logs the extract-phase peak — the 2 GB evidence the spec requires.

Fallback without the patch (repeated splits, no k-fold, no RSS record):

```bash
nice -n 19 python scripts/analysis/exp3_h1_diagnostics.py \
  --xa-run-dir runs/EXP3-XA-Raw-100k-seed42/20260922_185618 \
  --rn-run-dir runs/EXP3-ResNet-Raw-100k-seed42/20260921_181834 \
  --split val --device cpu --batch-size 32 --max-events 8000 --probe-repeats 10
```

<!-- SOURCE-BODY-END -->
