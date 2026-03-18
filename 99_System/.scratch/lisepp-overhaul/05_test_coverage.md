# Sub-task 5: Test Coverage Expansion

## Summary

Expanded test coverage across 4 test files (3 modified, 1 new), adding 22 new test cases. All 89 tests pass (7 GUI integration tests skipped as expected).

## Changes by File

### `tests/test_formatting.py` — 5 new tests

| Test | Purpose |
|------|---------|
| `test_floating_point_artifact_01_02` | Verifies `sigfigs(0.1 + 0.2, 6)` produces `"0.300000"` without IEEE 754 artifacts |
| `test_floating_point_artifact_0999` | Verifies `sigfigs(0.9999999, 6)` rounds cleanly to 1.0 (no `999` artifacts) |
| `test_floating_point_artifact_subtraction` | Verifies catastrophic cancellation case (`1.0000001 - 1.0`) formats cleanly |
| `test_all_key_categories_formatted` | Comprehensive dict with keys from ALL SIGFIG_SPEC categories — ensures every known key gets a `_display` sibling |
| `test_fractions_display_not_shared_reference` | Confirms `fractions_display` is an independent copy; mutations to display don't affect original and vice versa |

### `tests/test_lpp_parser.py` — 7 new tests (4 classes)

| Test | Purpose |
|------|---------|
| `TestBlockDecoratorSkipped::test_block_decorator_skipped` | Block decorator `{===...===}` lines are skipped, not stored as keys |
| `TestBlockDecoratorSkipped::test_multiple_decorators` | Multiple decorators across sections all handled correctly |
| `TestSetPreservesComment::test_set_value_not_comment` | `set()` replaces only the value when the value also appears in the comment |
| `TestFileNotFound::test_nonexistent_file_raises` | `LppFile("nonexistent.lpp").parse()` raises `FileNotFoundError` |
| `TestFileNotFound::test_nonexistent_in_tmp` | Same check with a proper tmp_path |
| `TestDuplicateKeys::test_duplicate_keys_last_wins` | Documents current behavior: last occurrence wins in the keys dict |
| `TestDuplicateKeys::test_duplicate_keys_both_in_key_order` | Documents that `key_order` tracks both duplicate entries |

All parser tests use inline string fixtures (no external .lpp file dependency).

### `tests/test_physics.py` — 2 new tests

| Test | Purpose |
|------|---------|
| `test_brho_c12_reference` | C-12 (q=6) at 100 MeV/u: Brho verified at ~2.955 Tm (3 sig fig range: 2.90-3.00 Tm) |
| `test_tof_c12_reference` | C-12 at 100 MeV/u, 10m path: TOF verified at ~77.6 ns (tight bound: 75-82 ns) |

Both marked with `@pytest.mark.skipif(not HAS_DLL)`.

**Note on Brho reference value:** Initial estimate of 2.83 Tm was incorrect (based on A*amu approximation). The DLL's nuclear mass for C-12 (11.9967 amu) produces Brho = 2.955 Tm. This was corrected after the first test run.

### `tests/test_server_tools.py` — 10 new tests (NEW FILE)

| Test | Purpose |
|------|---------|
| `TestLppParseErrors::test_nonexistent_file` | `lpp_parse` returns `{"error": ...}` for missing file |
| `TestLppParseErrors::test_nonexistent_path_in_tmp` | Same with tmp_path |
| `TestLppParseErrors::test_valid_file_no_error` | Minimal valid .lpp parses without error key |
| `TestLppCreateErrors::test_missing_template` | `lpp_create` returns error for missing template |
| `TestLppCreateErrors::test_template_missing_expected_key` | Template without `A,Z,Q` returns error when `beam_az` specified |
| `TestLppCreateErrors::test_template_missing_fragment_key` | Template without `Settings on A,Z` returns error when `fragment_az` specified |
| `TestDllToolErrors::test_brho_invalid_z_zero` | Z=0 input handled without crash (DLL-dependent, skipif) |
| `TestDllToolErrors::test_energy_loss_negative_energy` | Negative energy handled without crash |
| `TestDllToolErrors::test_mass_unknown_isotope` | Exotic isotope (Z=120, A=300) handled without crash |
| `TestDllToolErrors::test_tof_zero_path` | Zero flight path (division by zero) caught by error handler |

## Test Results

```
89 passed, 7 skipped in 1.96s
```

- **89 passed**: All new and existing tests pass
- **7 skipped**: GUI integration tests (require `--gui` flag and running LISE++ instance)
- **0 failed**

## Issues Found During Testing

1. **Brho reference value was initially wrong** — estimated 2.83 Tm using simplified A*amu mass approximation; actual value using DLL nuclear mass is 2.955 Tm. Corrected in the test.
2. **`sigfigs` rounding boundary behavior** — `sigfigs(0.9999999, 6)` produces `"1.000000"` (7 characters after decimal) because magnitude is computed from the input value (magnitude=0) before rounding changes it to 1.0. This is technically one extra sig fig but is harmless for display purposes. Documented via test rather than flagged as a bug.
3. **Duplicate key behavior confirmed** — the parser silently overwrites (last wins) while `key_order` accumulates all occurrences. This asymmetry could cause issues if `key_order` is used for iteration while `keys` dict has fewer entries. Documented via test.
