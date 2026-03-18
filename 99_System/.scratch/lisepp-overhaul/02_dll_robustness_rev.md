# 02 DLL Robustness — Revision

Addresses findings from `review_02.md`.

## P0 — Model selection now restores defaults after each call (FIXED)

**Problem:** `calc_stopping`, `calc_charge_state`, and `calc_straggling` in `server.py` called `dll.set_*_method()` when an optional model parameter was provided, but never restored the previous value. This permanently mutated global DLL state for all subsequent tool calls in the session.

**Fix:** Each of the three tools now uses a `try/finally` pattern that restores the initialization default after the calculation completes (or fails):

- `calc_stopping` — restores `set_loss_method(2)` after use of `loss_method`
- `calc_charge_state` — restores `set_charge_state_method(3)` after use of `charge_method`
- `calc_straggling` — restores `set_straggling_method(1)` after use of `straggling_method`

The defaults are stored as module-level constants (`_DEFAULT_LOSS_METHOD`, `_DEFAULT_CHARGE_METHOD`, `_DEFAULT_STRAGGLING_METHOD`) matching the values in `LISEDll._initialize()`. The `finally` block only runs the restore if the parameter was actually provided (guarded by `if xxx_method is not None`), so calls without the optional parameter have zero overhead.

The outer `except Exception` still catches errors from both the calculation and the restore call, returning them as `{"error": ...}`.

### Files changed
- `D:/Something/research/LISE++/lisepp-mcp/server.py` — lines 23-27 (defaults), calc_straggling, calc_stopping, calc_charge_state (try/finally wrappers)

## P1 — Thread safety (ACKNOWLEDGED, no code change)

The review noted this is informational and non-blocking. The set/calc/reset sequence is not atomic, which would be a problem under concurrent execution. Acceptable for MCP's single-threaded model.

## P2 — LISE_DIR evaluation timing comment (FIXED)

**Fix:** Added a two-line comment above the `LISE_DIR` class variable in `dll_wrapper.py` explaining that it is evaluated at import time, not at `get_instance()` time.

### Files changed
- `D:/Something/research/LISE++/lisepp-mcp/lisepp/dll_wrapper.py` — comment above line 38
