<!-- Verbatim source section; overview: [[../fm-ar-figure-provenance]] -->
<!-- SOURCE-BODY-START -->
## 4. What I ran (evidence)

```bash
# figure enumeration
grep -n 'includegraphics' 10_Papers-Thesis/Physics_Informed/{main,supplementary}.tex   # 8+4 figures
git log --follow -- 10_Papers-Thesis/Physics_Informed/figures/<each>                    # provenance commits
grep -rln '<fig_stem>' scripts/ src/                                                  # emitting script per figure

# artifact presence (live checkout)
ls runs/                                   # EXP3×12, EXP8×2, TRK5/6, baselines×7, Z01 — NO TRK3/4-v2, EXP1/2, V4/V6
cat figures/exp8_delta_false_target_forest.png.provenance.json                        # sha256 roster, git d570d34

# regeneration tests (worktree, runs/ symlinked to live; writes land in worktree only)
python3 scripts/plotting/plot_TRK5_TRK6_baselines_comparison.py   # F7 needs missing comparison_matrix.json;
   # called plot_f1/f2/f4 directly -> all three saved, ~35 s
python3 scripts/plotting/plot_hc_before_after.py                  # OK
python3 scripts/plotting/plot_physics_feature_distributions.py    # OK
python3 scripts/plotting/plot_mate_geometry_schema.py             # OK
python3 scripts/plotting/plot_PAPER_cross_attention_schema.py     # OK
python3 scripts/plotting/plot_EXP8_delta_forest.py --xa-run-dir ... --resnet-run-dir ...
   # FAILS: "Training run-directory mismatch in run_complete.json" (AutoDL path pinned)
python3 scripts/plotting/plot_TRK_angular_resolution.py           # FAILS: py3.9 syntax; CSVs absent anyway

# pixel verification (PIL, RGB int16 diff vs manuscript copies)
F1/F2/F4, hc_before_after.png, mate_geometry_schema.png, cross_attention_schema.png,
exp8_delta_false_target_forest.png (vs outputs/figures/EXP8 copy): all max|d|=0

# visual checks
read figures/exp8_delta_false_target_forest.png   # rows C,D,E,F,G,H + pooled — no null-channel row
read figures/attention_overlay.png                # real event, attention mass at track end
```

<!-- SOURCE-BODY-END -->
