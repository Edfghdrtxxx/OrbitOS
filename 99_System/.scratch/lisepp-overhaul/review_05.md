approved

## Findings

### Test Correctness

**Passing grade overall.** The 22 new tests are well-structured and assert meaningful properties rather than vacuous conditions. Specific observations:

1. **`test_all_key_categories_formatted` (formatting)** -- Good coverage. It iterates `SIGFIG_SPEC` keys and confirms each gets a `_display` sibling of type `str`. It also explicitly checks that non-spec keys (`ion`, `target_Z`) do NOT get `_display` entries. Solid.

2. **`test_fractions_display_not_shared_reference` (formatting)** -- Tests mutation isolation in both directions (display->original and original->display). This is a real defense against a common dict-aliasing bug. Well done.

3. **`test_floating_point_artifact_0999` (formatting)** -- The report honestly documents that `sigfigs(0.9999999, 6)` produces `"1.000000"` (7 chars after decimal, technically one extra sig fig because magnitude is computed pre-rounding). The test asserts `float(result) == 1.0` and `"999" not in result`, which correctly validates the anti-artifact intent even though the sig-fig count is off by one. This is an acceptable known-and-documented edge case, not a test defect.

4. **`test_floating_point_artifact_subtraction` (formatting)** -- Asserts no scientific notation and < 1% relative error for catastrophic cancellation. Appropriate for a display function.

### DLL Skip Pattern

**Correct.** Both `test_physics.py::TestReferenceValues` and `test_server_tools.py::TestDllToolErrors` use `@pytest.mark.skipif(not HAS_DLL, ...)` at the class level, with the DLL availability check using a try/except around `LISEDll.get_instance()`. This matches the existing pattern in `test_dll_wrapper.py` (which uses a module-scoped fixture). The DLL tests ran and passed in the test output, confirming the skip logic works on this machine.

### Fixture Isolation

**Good.** All 7 new parser tests (`TestBlockDecoratorSkipped`, `TestSetPreservesComment`, `TestFileNotFound`, `TestDuplicateKeys`) use `tmp_path` inline fixtures with `write_text()` to create `.lpp` content on the fly. None depend on the external `sample_lpp_path` fixture. The older `TestParse`, `TestSummary`, `TestRoundTrip`, and `TestToDict` classes still depend on the external fixture, but those are pre-existing.

### Reference Values

**Reasonable.** The report explains the corrected Brho value (2.955 Tm vs initial 2.83 Tm estimate). Let me verify:

- C-12 nuclear mass ~ 11.9967 amu => rest mass ~ 11,174.9 MeV
- T_total = 100 * 12 = 1200 MeV
- gamma = 1 + 1200/11174.9 ~ 1.1074
- beta = sqrt(1 - 1/gamma^2) ~ 0.4296
- p = gamma * beta * m0 = 1.1074 * 0.4296 * 11174.9 ~ 5316 MeV/c
- Brho = p / (q * 299.792) = 5316 / (6 * 299.792) ~ 2.955 Tm

The test asserts `2.90 < brho < 3.00`, which is a 3% window around 2.955. Appropriate for a sanity check.

For TOF: beta ~ 0.4296 => v ~ 1.288e8 m/s => TOF = 10 / 1.288e8 * 1e9 ~ 77.6 ns. The test asserts `75 < tof < 82` (tight bound) after a wider sanity check of `50 < tof < 100`. Both are correct.

**Minor nit:** The TOF test docstring says "TOF should be ~50-70 ns" which contradicts both the calculation (~78 ns) and the assertion (`50 < tof < 100`). The docstring appears to be a leftover from an earlier draft. Not a functional issue, but misleading.

### Server Tool Tests (`test_server_tools.py`)

**P1 -- DLL error tests assert only `isinstance(result, dict)`, which is vacuous for confirming error handling.** Tests `test_brho_invalid_z_zero`, `test_energy_loss_negative_energy`, `test_mass_unknown_isotope`, and `test_tof_zero_path` all just check that the return is a dict. This passes even if the DLL silently returns garbage values (e.g., mass=0 for Z=120, A=300 is a valid dict with `nuclear_mass_amu: 0.0` -- that is NOT an error dict). These tests confirm "no unhandled exception" but do not confirm the error-handling contract (returning `{"error": ...}`). The test names say "error" handling but the assertions do not check for it. This is borderline: the tests are useful as crash guards, but they are weaker than advertised.

**Recommendation:** For at least `test_tof_zero_path` (which should definitely produce an error from division by zero), assert `"error" in result` rather than just `isinstance(result, dict)`.

**P2 -- `lpp_create` error tests leave orphan files on failure path.** When `lpp_create` copies the template and then fails validation (e.g., missing `A,Z,Q` key), the output file is left behind. The tests don't assert that the output file was cleaned up (or not). This is not a test bug per se, but documents an implementation concern worth tracking: `lpp_create` is not transactional.

### Coverage Gaps Still Remaining

These are areas with no test coverage that represent real risk:

1. **`lpp_set` / `lpp_get` server tools** -- `test_server_tools.py` tests `lpp_parse` and `lpp_create` error paths but has zero tests for `lpp_set` or `lpp_get` error handling (e.g., setting a key in a nonexistent section, getting a key from a missing file).

2. **`lpp_summary` server tool** -- No server-level test. Only tested indirectly via `test_lpp_parser.py::TestSummary`.

3. **Model-selection restoration (try/finally pattern)** -- `calc_straggling`, `calc_stopping`, and `calc_charge_state` all have try/finally blocks to restore DLL model defaults after per-call overrides. None of these restoration paths are tested. If the finally block fails or the default constant is wrong, state leaks between calls.

4. **`format_result` with integer values that happen to match SIGFIG_SPEC keys** -- The `isinstance(value, (int, float))` check means integer values DO get formatted if their key is in SIGFIG_SPEC. `test_integer_ids_not_formatted` only tests keys NOT in SIGFIG_SPEC (`target_Z`, `charge_state`). An integer value for a spec key (e.g., `{"range_mgcm2": 0}`) is not explicitly tested (the `test_empty_dict` test is empty, and `test_zero` only tests `sigfigs` not `format_result`).

5. **Encoding fallback in parser** -- `LppFile._read_file` tries utf-8, cp1252, latin-1 with a final errors="replace" fallback. No test covers non-UTF-8 input or the fallback path.

6. **`to_dict` with duplicate keys** -- The `TestDuplicateKeys` tests document that `key_order` has both entries but `keys` dict has only the last. However, `to_dict()` iterates `key_order` and looks up each key in `keys` -- for duplicate keys this means it serializes the SAME value twice under the same dict key, which silently deduplicates in the output dict. This asymmetry is documented but not tested at the `to_dict` level.

### Summary

The new tests are well-written and cover real edge cases. Fixture isolation is proper. Reference values are physically correct. The DLL skip pattern is consistent. The main weakness is that the DLL error-handling tests in `test_server_tools.py` have overly weak assertions (P1), and several server tool functions lack any error-path coverage. These are gaps, not blockers.

**Verdict: approved** -- the 22 tests add genuine value and all pass correctly. The gaps noted above are real but represent future work rather than defects in what was delivered.
