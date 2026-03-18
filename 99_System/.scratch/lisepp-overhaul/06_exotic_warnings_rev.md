pass

# Rev: 06 — Exotic Nuclide Stability Formula Fix

## Change
Replaced the heavy-nucleus stability formula in `check_nuclide_stability()` (`lisepp/constants.py`, line 182).

**Before (broken):** `n_stable = z + 0.4 * (a ** (2/3))` — circular, uses input A to estimate stable N.

**After (fixed):** `n_stable = z + 0.006 * z ** 2` — Z-only empirical fit, no dependence on input A. Tolerance unchanged at `max(5, n_stable * 0.2)` (reduced from 25% to 20% since the formula is now accurate enough to tighten).

Light-nucleus branch (Z <= 20) unchanged — it was already correct per review.

## Verification

| Nuclide | Z | N | N_stable | Tolerance | Deviation | Warns? | Correct? |
|---------|---|---|----------|-----------|-----------|--------|----------|
| C-12 (stable) | 6 | 6 | 6 | 3 | 0 | NO | YES |
| Ca-48 (quasi-stable) | 20 | 28 | 20 | 8 | 8 | NO | YES |
| Ca-60 (exotic) | 20 | 40 | 20 | 8 | 20 | YES | YES |
| Sn-100 (exotic, T1/2~1s) | 50 | 50 | 65 | 13 | 15 | YES | YES (was false negative) |
| Ni-78 (exotic) | 28 | 50 | 32.7 | 6.5 | 17.3 | YES | YES |
| Pb-208 (stable) | 82 | 126 | 122.3 | 24.5 | 3.7 | NO | YES (was false positive) |
| Au-197 (stable) | 79 | 118 | 116.5 | 23.3 | 1.5 | NO | YES (was false positive) |
| U-238 (natural) | 92 | 146 | 142.8 | 28.6 | 3.2 | NO | YES (was false positive) |

All six reviewer-identified failures (3 false positives, 2 false negatives, plus Au-197) are resolved. No regressions on stable or light nuclei.
