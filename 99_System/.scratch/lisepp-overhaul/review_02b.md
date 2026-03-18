approved

## Findings

### P0 — Model selection state restoration: VERIFIED CORRECT

All three tools (`calc_stopping`, `calc_charge_state`, `calc_straggling`) implement the try/finally pattern correctly:

- **`calc_stopping`** (server.py lines 305-321): Sets `loss_method` before inner try, restores `_DEFAULT_LOSS_METHOD` (2) in finally. Guarded by `if loss_method is not None`.
- **`calc_charge_state`** (server.py lines 345-375): Sets `charge_method` before inner try, restores `_DEFAULT_CHARGE_METHOD` (3) in finally. Guarded by `if charge_method is not None`.
- **`calc_straggling`** (server.py lines 267-285): Sets `straggling_method` before inner try, restores `_DEFAULT_STRAGGLING_METHOD` (1) in finally. Guarded by `if straggling_method is not None`.

Default constants at server.py lines 25-27 match `LISEDll._initialize()` at dll_wrapper.py lines 176-178 exactly (loss=2, charge=3, straggling=1).

The finally block executes on both normal return and exception. If the finally's own `set_*_method()` call were to raise (extremely unlikely), the outer `except Exception` catches it and returns `{"error": ...}` — the DLL state would be stale but the failure is surfaced. Acceptable for this edge case.

### P1 — Thread safety: ACKNOWLEDGED (no code change required)

Non-blocking per original review. Single-threaded MCP model makes this acceptable.

### P2 — LISE_DIR import-time comment: VERIFIED

Comment added at dll_wrapper.py lines 38-39 explaining evaluation timing. Matches the review's recommendation.

### No regressions found

- All 10 DLL-backed tools retain their `try: ... except Exception` wrappers.
- The `if xxx_method is not None` guard in each finally block ensures zero overhead when the optional parameter is not provided — no unnecessary DLL calls on the default path.
- Module-level constants are DRY and correctly named with leading underscore (private to the module).
