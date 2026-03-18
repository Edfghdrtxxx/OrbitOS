# Precision Chain Fixes - LISE++ MCP Server

**Date:** 2026-03-18
**Scope:** 4 files across `D:\Something\research\LISE++\lisepp-mcp`

---

## 1. `lisepp/constants.py` (line 4)

**Change:** `AMU_TO_MEV = 931.494` -> `AMU_TO_MEV = 931.49410242`

**Rationale:** Updated to CODATA 2018 recommended value (1 u = 931.49410242 MeV/c^2). The previous truncated value introduced ~6 keV/u systematic error in all mass-energy conversions, affecting momentum, Brho, and TOF calculations downstream.

---

## 2. `lisepp/formatting.py`

### sigfigs(0, n) fix (lines 17-20)

**Before:** `sigfigs(0, n)` returned `"0"` for any `n`.
**After:** Returns trailing zeros matching the sig-fig spec:
- `sigfigs(0, 6)` -> `"0.00000"`
- `sigfigs(0, 4)` -> `"0.000"`
- `sigfigs(0, 1)` -> `"0"` (edge case preserved)

**Decision:** For `n <= 1`, return plain `"0"` since no decimal places are needed. For `n >= 2`, output `n - 1` decimal zeros. This matches LISE++ GUI behavior where zero-valued quantities (e.g., zero energy loss) still show the expected precision.

### format_result() non-mutation fix (lines 90-101)

**Before:** Mutated the input dict via `result.update(display_pairs)`.
**After:** Creates a shallow copy with `out = dict(result)`, adds display keys to the copy, returns the copy. The caller's original dict is never modified.

**Decision:** Used `dict(result)` (shallow copy) rather than `copy.deepcopy()`. Display keys are new string entries, so shallow copy is sufficient and avoids unnecessary overhead. Nested dicts like `fractions` are shared references, but since we only add a new `fractions_display` key (never modify `fractions` itself), this is safe.

---

## 3. `lisepp/physics.py` — `calc_brho()` (lines 79-96)

**Before:** Called `calc_momentum(z, a, energy)`, `calc_beta(z, a, energy)`, and `calc_gamma(z, a, energy)` separately. Each called `dll.isotope_mass(z, a)` independently, resulting in 3 redundant DLL calls.

**After:** Single `dll.isotope_mass(z, a)` call, then inline `_beta_gamma(mass, energy)` and momentum calculation (`p = g * b * m0`).

**Decision:** Public API functions (`calc_beta`, `calc_gamma`, `calc_momentum`) left unchanged -- they still call `dll.isotope_mass` internally and work as standalone functions. Only `calc_brho` was refactored since it's the hot path that calls all three.

---

## 4. `tests/test_formatting.py`

### New/updated tests:

| Test | Line | Description |
|------|------|-------------|
| `test_zero` (updated) | 28 | Changed expected from `"0"` to `"0.00000"` for `sigfigs(0.0, 6)` |
| `test_zero_four_sigfigs` (new) | 30-31 | Asserts `sigfigs(0, 4)` -> `"0.000"` |
| `test_zero_one_sigfig` (new) | 33-34 | Asserts `sigfigs(0.0, 1)` -> `"0"` (edge case) |
| `test_does_not_mutate_input` (new) | 98-102 | Verifies `format_result()` does not modify the input dict |

### Test results: 24/24 passed.

---

## Files Modified

| File | Path |
|------|------|
| Constants | `lisepp/constants.py` |
| Formatting | `lisepp/formatting.py` |
| Physics | `lisepp/physics.py` |
| Tests | `tests/test_formatting.py` |
