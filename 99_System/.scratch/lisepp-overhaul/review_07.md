needs-revision

## Review of TODO.md update (07)

### Existing DONE entries
Both resolved entries (material density conversion, numeric display precision) are preserved intact at the top of the file. No modifications detected. PASS.

### New entry 1: charge_double() and chargeSchiwietzGas() non-functional

**FACTUAL ERROR** on line 35:

> `charge_double()` returns 0.0 for all charge states.

The actual source code (dll_wrapper.py lines 249-254) documents that `charge_double()` "returns extremely small values (e.g. 1e-50) that are indistinguishable from zero for practical purposes." It does NOT return literal 0.0. Furthermore, `server.py` uses `charge_double()` with a threshold `if f > 1e-6` (line 408), which confirms it returns nonzero values that are merely tiny.

Only `chargeSchiwietzGas()` returns literal 0.0 (dll_wrapper.py line 261). The TODO conflates the two distinct failure modes into a single "returns 0.0" claim.

**Fix:** Change to something like: "`charge_double()` returns extremely small values (e.g. 1e-50) indistinguishable from zero for practical purposes. `chargeSchiwietzGas()` returns literal 0.0 for all inputs."

### New entry 2: global_code() returns undocumented values
Accurate. The `check_error()` diagnostic method exists at dll_wrapper.py line 285. The example values (large integers, negative) match the code's own log message expectations. PASS.

### New entry 3: Batch mode incomplete
Accurate. `batch.py` provides `create_batch_file` and `parse_batch_results`. The GUI integration in `gui_controller.py` uses `title_re=".*[Bb]atch.*"` regex matching for dialog detection, which qualifies as heuristic. The claim that it is exploratory/untested is consistent with the code comments. PASS.

### New entry 4: Remaining test coverage gaps

Minor inaccuracy in bullet 2:

> No encoding fallback cascade tests (cp1252 -> latin-1)

The actual cascade in `lpp_parser.py` line 68 is `utf-8 -> cp1252 -> latin-1`. The TODO omits the `utf-8` step, making the description incomplete. This is minor but should be corrected to `utf-8 -> cp1252 -> latin-1` for accuracy.

All other bullets verified:
- No server-level tests for `lpp_set`/`lpp_get`/`lpp_summary` error paths: confirmed (grep found zero test files mentioning these).
- DLL error-handling tests assert `isinstance(dict)` but don't check for `"error"` key: confirmed (test_server_tools.py lines 107, 113, 119, 125).
- No model-restoration integration tests: confirmed (try/finally blocks exist in server.py but no tests exercise the restoration path).
- No end-to-end GUI tests: confirmed.

### Verdict
Two factual issues found:
1. **Blocking:** `charge_double()` behavior misdescribed as "returns 0.0" when it actually returns extremely small nonzero values.
2. **Minor:** Encoding cascade description incomplete (missing utf-8 as first attempt).
