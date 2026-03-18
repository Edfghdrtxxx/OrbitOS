approved

## Findings

All 24 formatting tests pass. The changes are correct and the refactors preserve behavior. Three minor items noted below; none are blocking.

### 1. Stale comment in `physics.py` (low severity)

**File:** `D:\Something\research\LISE++\lisepp-mcp\lisepp\physics.py`, line 23
**Issue:** Comment says `# Rest mass energy in MeV: mass_amu * 931.494` but the constant is now `931.49410242`.
**Why it matters:** Misleading to future readers who may think the truncated value is intentional.
**Fix:** Update comment to `# Rest mass energy in MeV: mass_amu * AMU_TO_MEV` (reference the constant name, not the number, so it never goes stale again).

### 2. Non-mutation test lacks nested-dict coverage (low severity)

**File:** `D:\Something\research\LISE++\lisepp-mcp\tests\test_formatting.py`, line 98-102
**Issue:** `test_does_not_mutate_input` uses a flat dict (`{"range_mgcm2": ..., "ion": ...}`). It does not test the `fractions` nested-dict path. A future change that accidentally mutates the inner `fractions` dict would not be caught.
**Current risk:** Low. The shallow copy is safe today because `format_result` only reads the nested dict, never writes to it. But the test should document this contract.
**Fix:** Add a second non-mutation test with a `fractions` key, asserting that the original nested dict is unmodified (same contents) and optionally that it is the same object (`is` identity check, to confirm shallow-copy behavior is understood).

### 3. CODATA version choice (informational, non-blocking)

**File:** `D:\Something\research\LISE++\lisepp-mcp\lisepp\constants.py`, line 4
**Observation:** `AMU_TO_MEV = 931.49410242` is the CODATA 2018 value. The CODATA 2022 recommended value is `931.49410372(29)` MeV/c^2, differing at the 7th decimal place (~0.13 eV/u). This is well below any practical significance for LISE++ calculations. No action needed, but a comment noting the CODATA edition (e.g., `# CODATA 2018`) would aid traceability.

### Verification summary

| Check | Result |
|-------|--------|
| `AMU_TO_MEV` value correct (CODATA 2018) | Pass |
| `sigfigs(0, 6)` returns `"0.00000"` | Pass |
| `sigfigs(0, 1)` returns `"0"` | Pass |
| `format_result()` does not mutate input | Pass (flat dict tested; nested dict safe by inspection) |
| `calc_brho` single DLL call, math identical to old 3-call version | Pass (traced by hand) |
| Public API signatures unchanged (`calc_beta`, `calc_gamma`, `calc_momentum`) | Pass |
| `calc_tof` and `calc_de_tof` still work (call `calc_beta` standalone) | Pass (no changes to those functions) |
| All 24 tests pass | Pass |
| No regressions identified | Pass |
