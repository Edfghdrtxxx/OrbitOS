<!-- Verbatim source section; overview: [[../fm-ar-code-audit]] -->
<!-- SOURCE-BODY-START -->
## Method and evidence

I inspected the nine merged commits corresponding to:

- [PR 1](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/1), commit `299e72a`
- [PR 2](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/2), commit `c76befb`
- [PR 3](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/3), commit `4cc081f`
- [PR 4](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/4), commit `6152bb8`
- [PR 5](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/5), commit `c94e066`
- [PR 6](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/6), commit `215c606`
- [PR 7](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/7), commit `4a99510`
- [PR 8](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/8), commit `cb83a91`
- [PR 9](https://github.com/Edfghdrtxxx/MATE-Automation-V4/pull/9), commit `9cbfefd`

Commands used included:

```bash
git show <commit> -- <changed files>
python3 -m pytest -q tests/test_paired_stats.py tests/test_trk_classification_mcnemar.py   tests/test_exp3_isotope_separability.py tests/test_exp3_d6_conditions.py   tests/test_physics_norm.py tests/test_exp3_collect_tables.py   tests/test_exp3_repro_tooling.py tests/test_exp3_provenance.py
python3 -m pytest -q
```

The focused audit suite passed: **108 passed, 12 skipped**. The full suite had **452 passed, 16 skipped, 3 failed**. The failures are unrelated live/visual infrastructure: one EXP8 string-guard assertion and two Overleaf tests reporting an expired authentication cookie (`OVERLEAF_AUTH_FAILED`).

<!-- SOURCE-BODY-END -->
