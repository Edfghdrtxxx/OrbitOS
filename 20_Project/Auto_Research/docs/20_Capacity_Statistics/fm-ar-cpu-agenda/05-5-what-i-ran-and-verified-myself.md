<!-- Verbatim source section; overview: [[../fm-ar-cpu-agenda]] -->
<!-- SOURCE-BODY-START -->
## 5. What I ran and verified myself

```bash
# Environment
python3 --version                       # 3.9.6; pip list: numpy 2.0.2, scipy, pandas, sklearn, h5py — no torch
sysctl -n machdep.cpu.brand_string      # Apple M4, 16 GB, 10 cores
du -sh /Users/Reid\ Hu/MATE-Automation/{data,runs}   # 23 MB data (srim+sidecar), 722 MB runs

# CPU-torch probe (worktree venv, discarded at teardown)
uv venv .venv-probe --python 3.11 && uv pip install torch torchvision   # 76 s + 51 s
# MATEModel(cross_attention) fwd batch64: 3.48 s → 18 ev/s; ResNet: 29 ev/s; train step 9.5 s → ~100 h/run
# torch.load EXP8 best_model.pth (135 MB): 0.2 s, 132-entry state dict

# Torch-free tools on local artifacts
python3 scripts/analysis/exp3_selection_bias.py runs/EXP3-*/*/ --out selection_bias.json   # 12 runs, gaps 0.2–1.7 pp
python3 scripts/analysis/exp3_prereg_score.py --battery … --selection …                    # selection_bias = miss ×6 (formal)
python3 scripts/analysis/exp3_collect_tables.py --runs-dir … --out-dir /tmp/exp3_tables    # OK
python3 scripts/analysis/compare_exp3_runs.py --runs-dir …                                 # OK
python3 scripts/analysis/exp8_activation_ood.py --npz XA=… --npz RN=…                      # AUROC 0.903/0.898 reproduced
python3 scripts/analysis/rescore_sweep_event_mean.py --sweep-dir … --no-write              # OK
python3 scripts/analysis/exp8_maxh_observable_join.py                                      # exits: 8 missing data/exp8/*.h5

# New numbers computed today (local, paired)
# EXP8 eval_exp8 predictions: 475k events, 100% shared, labels 100% agree
#   seen ABCD: XA−RN = +0.03pp, McNemar p=0.76 (tied)
#   F/G/H:     XA−RN = −7.2/−7.4/−6.7pp, p≈0 (RN wins far-OOD decisively)
#   val 75k:   XA−RN = +0.21pp [+0.07,+0.35], p=0.004
# TRK5 vs TRK6: 450k paired slots, XA MAE 0.0093 vs RN 0.0137 MeV, Δ=−0.0043 [−0.0044,−0.0043], Wilcoxon p≈0; XA wins all energy bins
```

Also verified: prereg scorer reports `pending` (not `miss`) when battery_match is ambiguous — the s42 XA-Raw triton battery lacks D6 conditions, so the formal `conditions:` rows stay pending until B2 lands; `exp4_attention_metrics.json` files carry no query-invariance metrics → `map_permuted_q` unscorable until B4; `paired_stats`/`threshold_sweep` have zero local inputs.

<!-- SOURCE-BODY-END -->
