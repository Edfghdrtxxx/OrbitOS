> Origin: `fm-ar-pack-drycheck` scout report; recorded 2026-09-24.

# EXP3 pack dry-check — Rung 1 + reserve packs vs current main

**Task:** fm-ar-pack-drycheck (scout, findings only)
**Scope:** Will the Rung 1 pack (`scripts/remote/preflight_exp3_rung1.py`, `run_exp3_rung1.py`), the one-command report (`scripts/analysis/exp3_rung1_report.py`), and the reserve packs (attn_dim512 + physicsnorm #20, NimpSim 3He/4He #13) run end to end on current main, as far as checkable without CUDA?
**Environment:** disposable worktree at `0ab20db` (main HEAD, includes #21–#27); Python 3.9.6; numpy 2.0.2, PyYAML, h5py present; **no torch, no CUDA, no detector H5** — matching the brief's constraints.
**Verdict:** **One real break found** (prereg `rn-mod` match never resolves the RNMod run's metrics). Everything else CPU-checkable passes. One follow-up ship recommended.

---

## Checklist

| # | Path | Result | Evidence |
|---|------|--------|----------|
| 1 | `preflight_exp3_rung1.py --help` | PASS | exit 0 |
| 2 | `preflight_exp3_rung1.py` full run | PASS (CPU parts) / needs-CUDA for torch check | all 6 configs PASS; all 10 data checks PASS on synthetic H5s (`--expected-events 10`); `torch + CUDA` FAIL by design (no torch); exit 1 |
| 3 | `run_exp3_rung1.py --help` | PASS | exit 0 |
| 4 | `run_exp3_rung1.py` campaign logic | PASS | in-process `run_campaign(require_gpu=False)`: unknown `--reserve-run BAD` → `ValueError` before state change; plain run skips reserves (R3a/R3b stay `pending`); R1 subprocess launches `src/run_experiment.py --config … --base-config … --run-subdir rung1-r1-seed42`, fails on `import torch` (expected here), ledger records `status=failed`, `attempts=1`, wall hours; `--cap-hours 1` → `budget_blocked` + `RuntimeError`; fake `best_model.pth` → `--resume` appended to command |
| 5 | Launcher → `run_experiment.py` signature | PASS | `--config`, `--base-config`, `--resume`, `--run-subdir` all exist (`src/run_experiment.py:1825-1857`); `--run-subdir`+`--resume` mutual exclusion enforced at `src/run_experiment.py:961-962`; resume picks lexicographically-latest run dir (`:980-990`) — consistent with launcher's `-retryN` subdir scheme |
| 6 | All 10 pack configs through real `deep_merge` + `validate_config` | PASS | torch-stub import of `src.run_experiment`; all 10 configs validate |
| 7 | `validate_label_contract` per config (real call path, synthetic H5s) | PASS | all 6 Garfield label-fix configs → `task_name=4He-vs-rest` (the stamp the report requires); 3 NimpSim configs → `task_name=3He-vs-rest`, `class_map={0:3He, 1:4He}` |
| 8 | `check_nimpsim_h5.py` on synthetic staged pair | PASS | `[ok]` both files, `RESULT: PASS`, exit 0 |
| 9 | `exp3_rung1_report.py` end-to-end on synthetic run dirs | PASS | exit 0; JSON+MD written; `pairing_check` all `ok`; point effects + paired McNemar/bootstrap CIs + interaction CI computed; selection premium, heldout, prereg blocks populated |
| 10 | Report pairing guard (#25) — mismatched `val_indices` | PASS | refuses exit 2: `val event sets differ: RN-HC (n=200) vs XA-Raw (n=200); val_indices differ: first difference at position 199 …` |
| 11 | Report `--allow-unpaired-val` downgrade | PASS | exit 0; `pairing_check` → `unpaired_override`; effects → `status: unpaired` (two-prop z + independent bootstrap); interaction → `unavailable` |
| 12 | Report `label_task` refusal | PASS | `label_task='triton-vs-rest'` → exit 2 |
| 13 | `exp3_prereg_score.py` full inputs (battery×3, attention, sweep, selection, metrics×5) | PASS with one break | all conditions/gpu_runs/falsifiers resolve **except** `rn_mod_nimpsim` — see Finding 1 |
| 14 | `exp3_paired_stats.py` on synthetic dumps | PASS | exit 0; McNemar + bootstrap table |
| 15 | `exp3_threshold_sweep.py --pair` | PASS | exit 0; output `pair.{xa,rn,comparison}` keys match `_obs_sweep` contract (`rn_argmax_accuracy`, `xa.argmax.minority_recall`, `xa.curve[].accuracy/balanced_accuracy`) |
| 16 | `exp3_heldout_unused.py --write-split-only` (torch-free path) | PASS | wrote `held_out_split.json` (n=20 over 5×10-event files); disjoint guard correctly fired on an intentionally inconsistent fixture |
| 17 | `exp3_dump_predictions.py` / `exp3_heldout_unused.py` eval / `exp3_h1_diagnostics.py` extract | needs-CUDA (torch) | signatures traced: dump writes `predictions_paired.csv` via `write_predictions_csv` (cols `event_index,true_label,pred_label,prob_*` + `# run_dir=` meta — matches `load_predictions_csv`/`resolve_run_dir`); heldout writes `held_out_metrics.json` with `held_out_accuracy,n_events,split,best_val_acc,val_minus_held_out` — matches report contract; h1 `_child_argv` forwards all args incl. `--allow-unpaired-val` |
| 18 | `exp3_h1_diagnostics.py --phase probe` (torch-free) | PASS by inspection + tests | needs `h1_features.npz` (extract output); legacy-npz fallback recomputes `check_paired_runs` (`exp3_h1_diagnostics.py:548-554`) |
| 19 | Pack-related pytest files | PASS | `pytest tests/test_exp3_rung1_report.py test_pairing_guard.py test_nimpsim_reserve_configs.py test_exp3_prereg_score.py test_exp3_gpu_pack.py test_paired_stats.py test_exp3_h1_diagnostics.py test_exp3_heldout_unused.py` → **115 passed, 1 skipped** |
| 20 | #26/#27 overlap with EXP3 packs | none | #26 touches `tests/test_exp8_plot_artifacts.py` only; #27 adds `exp8_activation_ood.py` + EXP8 docs — no EXP3 surface |

## Finding 1 — BREAK: prereg `rn_mod_nimpsim` can never score the RNMod run

- **Where:** `20_doc/prereg/exp3_mechanism_prereg_2026-09-24.yaml:361` — `match: ["rn-mod"]` (also `:362` for `balanced_recall`).
- **What:** `configs/V4HeHe_RNMod_NimpSim_160k_seed42.yaml:35` sets `experiment_id: V4HeHe-RNMod-NimpSim-160k-seed42`. `_select_metrics` (`scripts/analysis/exp3_prereg_score.py:219-233`) does case-insensitive **substring** match on `experiment_id` or path. `"rn-mod"` (hyphen) is not a substring of `"...RNMod..."` (no hyphen).
- **Reproduced:** `python3 scripts/analysis/exp3_prereg_score.py --metrics /tmp/rnmod-run/metrics.json` (synthetic metrics with the real experiment_id, accuracy 0.95, per_class recalls) → `rn_mod_nimpsim` row = `pending` for all rivals. Same result when fed alongside the four Rung 1 metrics. `attn_dim_512` (`match: ["xa-raw","512"]` vs `EXP3-XA-Raw-100k-label-fix-attndim512-seed42`) and `physics_norm_zscore` (`["xa-raw","zscore"]` vs `EXP3-XA-Raw-100k-label-fix-zscore-seed42`) **do** resolve — verified with synthetic metrics (verdicts hit/miss as expected).
- **Impact:** after the RNMod GPU run completes, the prereg row stays `pending` forever — the §5.5 repair run would land unscored. Not a launch blocker; a scoring blocker discovered only post-run.
- **Minimal fix:** change `match: ["rn-mod"]` → `match: ["rnmod"]` on both observed specs of `gpu_runs.rn_mod_nimpsim` (lines 361–362). This is explicitly permitted by the prereg itself: `scoring.notes` line 59 — *"match … may be adjusted to actual run names without touching any band."* No band changes; locked predictions untouched.
- **Recommend:** yes, ship as a one-line follow-up PR (2-line diff). Low risk; covered by existing `test_exp3_prereg_score.py` patterns (add a metrics fixture named `V4HeHe-RNMod-…` if a regression test is wanted).

## Finding 2 — non-blocking caveat: report's prereg block only sees the four 2×2 arms

`exp3_rung1_report.py:_prereg_verdicts` feeds only the four arm `metrics.json` files to the scorer (`:430-437`), so `rn_mod_nimpsim`, `attn_dim_512`, `physics_norm_zscore` always render `pending` in the report even after those runs finish. This matches the docstring ("gpu_runs block verdicts" for the 2×2) and the standalone scorer CLI covers the reserve runs — but the operator should know the report will not show reserve verdicts. No fix required; optionally document in `20_doc/workflows/exp3_gpu_rung1.md`.

## Finding 3 — non-blocking caveat: NimpSim pack has no launcher/ledger

The NimpSim reserve pack (#13) is configs + checker + docs only; `20_doc/nimpsim_reserve/README.md:128-131` instructs direct `python src/run_experiment.py --config …` launches. These bypass the Rung 1 flock, ledger, and `--cap-hours` budget accounting. If the 24 GPU-hour cap is meant to cover the NimpSim runs too, they must either be registered as `RESERVE_SPECS` in `run_exp3_rung1.py` or billed manually. Flagging for firstmate/captain awareness — the pack as shipped is internally consistent, so no break.

## Needs-CUDA items (cannot verify on this Mac)

- `run_exp3_rung1.py` actual training subprocesses (torch import, CUDA, dataset load, checkpoints).
- `preflight` `torch + CUDA` check (correctly FAILs here).
- `exp3_dump_predictions.py`, `exp3_heldout_unused.py` eval phase, `exp3_h1_diagnostics.py --phase extract` — all import torch; signatures and output contracts verified statically + via tests.
- Real 100k-event H5 inspection (synthetic 10-event files used; schema/label/species logic exercised).

## Commands run (evidence)

```bash
# --help on all 10 entry points: all exit 0
python3 scripts/remote/preflight_exp3_rung1.py --data-root /tmp/mate-data --expected-events 10   # configs+data PASS, torch FAIL→exit 1
# in-process run_campaign(require_gpu=False) with scratch ledger/lock/logs — see checklist #4
# torch-stub import of src.run_experiment: deep_merge+validate_config+validate_label_contract on all 10 configs
python3 scripts/preprocessing/check_nimpsim_h5.py --dir /tmp/mate-data/NimpSim --expect-events 10  # PASS
python3 scripts/analysis/exp3_rung1_report.py --xa-raw … --rn-raw … --xa-hc … --rn-hc … --out-json … --out-md …  # exit 0
# same with corrupted val_indices → exit 2; with --allow-unpaired-val → exit 0 unpaired
python3 scripts/analysis/exp3_prereg_score.py --battery … --attention … --sweep … --selection … --metrics …  # all resolve except rn_mod_nimpsim
python3 scripts/analysis/exp3_paired_stats.py --dump XA=… --dump RN=… --pair XA:RN  # exit 0
python3 scripts/analysis/exp3_threshold_sweep.py --pair A.csv B.csv --out sweep.json  # exit 0
MATE_DATA_ROOT=/tmp/mate-data python3 scripts/analysis/exp3_heldout_unused.py --run-dir /tmp/heldout-run --write-split-only  # exit 0
python3 -m pytest tests/test_exp3_rung1_report.py tests/test_pairing_guard.py tests/test_nimpsim_reserve_configs.py tests/test_exp3_prereg_score.py tests/test_exp3_gpu_pack.py tests/test_paired_stats.py tests/test_exp3_h1_diagnostics.py tests/test_exp3_heldout_unused.py -x -q  # 115 passed, 1 skipped
```

## Bottom line

The first GPU launch will not die on an integration break in any CPU-checkable path. The one break found is downstream of training: the RNMod reserve run's metrics will never match its prereg row (`rn-mod` vs `RNMod`). Recommend a follow-up ship: change `match: ["rn-mod"]` → `["rnmod"]` at `20_doc/prereg/exp3_mechanism_prereg_2026-09-24.yaml:361-362` (permitted by the prereg's own scoring notes). Optionally also decide whether NimpSim runs should bill against the 24 h ledger.
