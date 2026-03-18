needs-revision

# Review: 06 — Exotic Nuclide Warnings

## Summary

The warning injection into 9 tools is correctly implemented and well-placed (after `format_result()`). The `calc_charge_state` always-on warning is correct. However, the stability check function `check_nuclide_stability()` has a serious bug in the heavy-nucleus branch that causes false positives on common stable nuclides and false negatives on proton-rich exotics.

## P0 — Stability formula broken for heavy nuclei

**File:** `lisepp/constants.py`, lines 178-180

The heavy-nucleus branch uses Green's approximation as `N_stable = Z + 0.4 * A^(2/3)`, but plugs in the **actual input A** rather than the stable A for that Z. This drastically underestimates N_stable for heavy elements (where N >> Z at stability), producing both false positives on stable nuclides and false negatives on proton-rich exotics.

**False positives on stable nuclides:**

| Nuclide | N | N_stable (formula) | Tolerance | Deviation | Warns? |
|---------|---|--------------------|-----------|-----------|--------|
| Pb-208 (stable) | 126 | 96.0 | 24.0 | 30.0 | YES (false positive) |
| U-238 (natural) | 146 | 107.4 | 26.8 | 38.6 | YES (false positive) |
| Au-197 (stable) | 118 | 93.6 | 23.4 | 24.4 | YES (false positive) |

**False negatives on proton-rich exotics:**

| Nuclide | N | N_stable (formula) | Tolerance | Deviation | Warns? |
|---------|---|--------------------|-----------|-----------|--------|
| Sn-100 (exotic, T½~1s) | 50 | 58.6 | 14.7 | 8.6 | NO (false negative) |
| Ni-56 (exotic, T½~6d) | 28 | 33.9 | 8.5 | 5.9 | NO (false negative) |

**Root cause:** The approximation `N_stable = Z + 0.4 * A^(2/3)` is implicit (A depends on N). Using the input nuclide's A creates a self-referential calculation that diverges from actual stability for A far from stability — and more fundamentally, 0.4 * A^(2/3) significantly underestimates the neutron excess at stability for heavy elements.

**Suggested fix:** Replace the heavy branch with a Z-only formula derived from the semi-empirical mass formula:

```python
# For heavy nuclei, use the SEMF-derived Z-only formula:
# N_stable(Z) ≈ Z * (1 + c * Z^(2/3))  where c ≈ 0.006-0.008
# Or more practically, use the empirical fit: A_stable ≈ 2.5Z - 2 (rough)
# Best option: use the well-known parametrization
#   A_stable(Z) = round(2*Z + 0.0155 * Z^(5/3))
#   N_stable = A_stable - Z = Z + 0.0155 * Z^(5/3)
a_stable = round(2 * z + 0.0155 * z ** (5 / 3))
n_stable = a_stable - z
```

Verification with this fix:
- Pb (Z=82): N_stable = 82 + 0.0155 * 82^(5/3) = 82 + 0.0155 * 3513 = 82 + 54.5 ≈ 137. Actual stable: 126. Tolerance at 25% of 137 → 34.2. No false positive. (Though the formula overshoots slightly — the tolerance is generous enough to handle it.)

Actually, a simpler and more robust approach: use a well-tested parametrization. The standard SEMF result is:

```
N_stable(Z) = Z + 0.4 * A_stable^(2/3)
```

where A_stable is computed self-consistently by iterating:
```python
a_est = 2 * z + 1  # initial guess
for _ in range(5):
    a_est = z + z + 0.4 * a_est ** (2/3)
n_stable = a_est - z
```

Or just use a direct Z-only polynomial fit to the stability line. There are many in the literature. The simplest reliable one is:

```
A_stable(Z) ≈ 1.867Z + 8.1E-4 * Z^2 + 0.17
```

This gives Pb: A ≈ 153.1 + 5.37 + 0.17 ≈ 158.6... still too low. Fitting the stability line precisely is tricky without a table.

**Pragmatic recommendation:** Ship a small lookup table of ~20 anchor points (the stable N for select Z values: 2, 6, 10, 14, 20, 26, 28, 36, 40, 50, 56, 68, 78, 82, 90, 92) and interpolate. This avoids formula-fitting entirely and is guaranteed correct at the anchors. Alternatively, use the iterative Green's approach shown above, which at least removes the dependence on the input A.

## P1 — Sn-100 false negative (blocked by P0)

As shown in the P0 table, Sn-100 (Z=50, A=100) does not trigger a warning despite being one of the most exotic proton-rich doubly-magic nuclei. This will be resolved when P0 is fixed, but should be verified as a regression test.

## Verified correct

1. **Warning placement:** All 9 tools add the warning key AFTER `format_result()` is called, so warning strings are never subject to sig-fig formatting. Confirmed on every tool.

2. **Tool coverage:** All 9 DLL-backed tools that accept ion (z, a) have stability warnings:
   - calc_energy_loss, calc_range, calc_straggling, calc_stopping (conditional)
   - calc_mass, calc_brho_tool, calc_tof_tool, calc_de_tof_tool (conditional)
   - calc_charge_state (always-on, different warning text about DLL limitations)

3. **calc_charge_state always-on warning:** Lines 419-422 unconditionally set `result["warning"]` about `charge_double()` / `chargeSchiwietzGas()` being non-functional in standalone DLL mode. This is correct — the warning is not guarded by an `if` and applies regardless of nuclide. Note: this tool takes `z_beam` but not `a`, so no isotope-level stability check is possible here (nor is one needed given the always-on warning).

4. **Light-nucleus branch:** The `N ≈ Z` approximation with `tolerance = max(3, Z * 0.4)` for Z <= 20 works correctly:
   - C-12 (Z=6, N=6): no warning (correct)
   - Ca-48 (Z=20, N=28): deviation=8, tolerance=8, no warning (correct — Ca-48 is quasi-stable)
   - Ca-60 (Z=20, N=40): deviation=20 > tolerance=8, warns (correct)

5. **Invalid nuclide guard:** `z < 1 or a < 1 or a < z` catches physically impossible inputs. Correct.

6. **Import and integration:** `check_nuclide_stability` is properly imported in `server.py` (line 14) and called consistently across all relevant tools.

## Verdict

**needs-revision** — The heavy-nucleus stability formula (P0) produces false positives on common stable nuclides like Pb-208 and U-238, and false negatives on proton-rich exotics like Sn-100. The light-nucleus branch, warning placement, tool coverage, and calc_charge_state always-on warning are all correct.
