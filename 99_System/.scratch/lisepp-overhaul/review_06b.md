pass

# Re-review: 06b — Exotic Nuclide Stability Check (post-revision)

## Summary

The P0 bug (heavy-nucleus formula used input A, creating a circular dependency) has been fixed. The new formula `n_stable = z + 0.006 * z^2` is Z-only and produces correct results for all five test cases.

## Verification of `check_nuclide_stability()` (constants.py, lines 161-193)

### Formula used

- **Z <= 20 (light):** `n_stable = Z`, `tolerance = max(3, Z * 0.4)`
- **Z > 20 (heavy):** `n_stable = Z + 0.006 * Z^2`, `tolerance = max(5, n_stable * 0.2)`

### Test cases

| Nuclide | Z | N | n_stable | tolerance | deviation | Warns? | Expected | Result |
|---------|---|---|----------|-----------|-----------|--------|----------|--------|
| C-12 | 6 | 6 | 6.0 | 3.0 | 0.0 | NO | NO | PASS |
| Ni-78 | 28 | 50 | 32.7 | 6.5 | 17.3 | YES | YES | PASS |
| Sn-100 | 50 | 50 | 65.0 | 13.0 | 15.0 | YES | YES | PASS |
| Pb-208 | 82 | 126 | 122.3 | 24.5 | 3.7 | NO | NO | PASS |
| U-238 | 92 | 146 | 142.8 | 28.6 | 3.2 | NO | NO | PASS |

### Detailed calculations

**C-12 (Z=6, N=6):** Light branch. n_stable=6, tolerance=max(3, 2.4)=3. |6-6|=0 <= 3. No warning.

**Ni-78 (Z=28, N=50):** Heavy branch. n_stable=28+0.006*784=32.704, tolerance=max(5, 6.54)=6.54. |50-32.704|=17.3 > 6.54. Warns correctly — Ni-78 is an exotic neutron-rich nuclide near the r-process path.

**Sn-100 (Z=50, N=50):** Heavy branch. n_stable=50+0.006*2500=65.0, tolerance=max(5, 13.0)=13.0. |50-65|=15.0 > 13.0. Warns correctly — Sn-100 is a proton-rich doubly-magic exotic (T½ ~ 1s). The margin is slim (15 vs 13) but sufficient. This was the P1 false-negative case from review_06.

**Pb-208 (Z=82, N=126):** Heavy branch. n_stable=82+0.006*6724=122.344, tolerance=max(5, 24.47)=24.47. |126-122.344|=3.656 <= 24.47. No warning. This was the main P0 false-positive case from review_06 — now fixed.

**U-238 (Z=92, N=146):** Heavy branch. n_stable=92+0.006*8464=142.784, tolerance=max(5, 28.56)=28.56. |146-142.784|=3.216 <= 28.56. No warning. Second P0 false-positive case — also fixed.

### Additional spot-checks

| Nuclide | Z | N | n_stable | tolerance | deviation | Warns? | Correct? |
|---------|---|---|----------|-----------|-----------|--------|----------|
| Ca-48 (Z=20, N=28) | 20 | 28 | 20.0 | 8.0 | 8.0 | NO (edge) | OK — quasi-stable |
| Fe-56 (Z=26, N=30) | 26 | 30 | 30.1 | 6.0 | 0.1 | NO | Correct — most abundant Fe isotope |
| Ni-56 (Z=28, N=28) | 28 | 28 | 32.7 | 6.5 | 4.7 | NO | Acceptable — Ni-56 is exotic (T½~6d) but close to stability; missing it is a known trade-off of the 20% tolerance |

### Note on Ni-56

Ni-56 (Z=28, N=28, deviation=4.7 vs tolerance=6.5) is technically exotic but slips through. This is an inherent limitation of the simple quadratic formula with 20% tolerance — catching it would require either tightening the tolerance (risking false positives on stable nuclides like Fe-58) or using a lookup table. For a soft warning system this is acceptable.

## P0 status: RESOLVED

The circular dependency on input A is eliminated. The Z-only formula `n_stable = Z + 0.006 * Z^2` matches the valley of stability well across the nuclear chart, and the 20% tolerance provides adequate margin.

## P1 status: RESOLVED

Sn-100 now correctly triggers a warning (deviation 15.0 > tolerance 13.0).

## Items confirmed unchanged from review_06

- Warning placement (after `format_result()`) — still correct
- Tool coverage (9 DLL-backed tools) — still correct
- calc_charge_state always-on warning — still correct
- Light-nucleus branch — still correct
- Invalid nuclide guard — still correct

## Verdict

**pass** — All original issues resolved. The stability check correctly identifies exotic nuclides while leaving common stable/natural nuclides unwarned.
