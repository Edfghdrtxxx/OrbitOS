needs-revision

## Findings

### P0 — Model selection mutates global DLL state without reset (server.py lines 262-263, 297-298, 333-334)

All three model-selection parameters (`straggling_method`, `loss_method`, `charge_method`) call `dll.set_*_method()` **before** the calculation but never restore the previous value **after**. This means:

1. `calc_stopping(z=6, a=12, energy=100, target_z=6, loss_method=0)` permanently changes the loss method to 0 for **all** subsequent calls — including `calc_energy_loss`, `calc_range`, and `calc_de_tof_tool`, which also depend on the energy-loss model via `treste`/`trange`/`stopping_power` but have no `loss_method` parameter of their own.
2. Same for `calc_straggling` permanently affecting later `calc_straggling` calls that don't specify a method.
3. Same for `calc_charge_state` permanently affecting later `calc_charge_state` calls.

This is a correctness bug, not just a thread-safety concern. Even in a single-threaded MCP server, a user who calls `calc_stopping(loss_method=0)` once will silently get different results from `calc_energy_loss` for the rest of the session compared to a user who never set it.

**Fix:** Save the current method before, restore after. Pattern:
```python
old = dll.set_loss_method(loss_method)  # set_loss returns previous value (verify)
try:
    sp = dll.stopping_power(...)
finally:
    dll.set_loss_method(old)
```
If `set_loss` / `set_charge_state` / `set_straggling` do NOT return the previous value, store the init defaults (2, 3, 1 respectively) and restore to those. Alternatively, document explicitly in each tool's docstring that the method change is **persistent for the session** and make that a deliberate design choice — but this would be surprising to users.

### P1 — Thread safety note (informational, non-blocking)

If the MCP server ever runs with concurrent tool calls (e.g., FastMCP with async handlers), the set/calc/reset sequence is not atomic. Two concurrent `calc_stopping` calls with different `loss_method` values would race on the global DLL state. This is acceptable for now given MCP's single-threaded model, but should be documented as a known limitation. A lock around model-selection + calculation would be the fix if concurrency is ever added.

### P2 — `LISE_DIR` is evaluated at class-definition time (dll_wrapper.py line 38)

`LISE_DIR = os.environ.get("LISE_DIR", "D:/LISEcute")` is a **class variable** evaluated when the module is first imported, not when `get_instance()` is called. This is fine for normal use (env vars are typically set before the process starts), but it means:
- Setting `os.environ["LISE_DIR"]` after importing `dll_wrapper` has no effect.
- This is standard Python behavior but worth a one-line comment to prevent confusion.

Severity: low / informational. No action required, but a comment would help.

### Verified — all other claims check out

- **10 DLL-backed tools wrapped:** Confirmed. All 10 tools listed in the report (`get_material_info`, `calc_energy_loss`, `calc_range`, `calc_straggling`, `calc_stopping`, `calc_charge_state`, `calc_mass`, `calc_brho_tool`, `calc_tof_tool`, `calc_de_tof_tool`) have `try: ... except Exception as e: return {"error": str(e)}` wrappers. The three tools that go through `physics.py` (`calc_brho_tool`, `calc_tof_tool`, `calc_de_tof_tool`) correctly catch exceptions from the underlying DLL calls since those calls happen inside the try block.
- **`import shutil` at module level:** Confirmed at line 3 of `server.py`, no duplicate inside `lpp_create`.
- **`logging` import and `logger`:** Confirmed at lines 13 and 18 of `dll_wrapper.py`.
- **`check_error()` method:** Confirmed at lines 283-304 of `dll_wrapper.py`. Non-blocking, catches exceptions, returns -1 on failure. The docstring accurately describes the observed behavior (constant 1948546305).
- **`charge_double` warning docstring:** Confirmed at lines 245-253 of `dll_wrapper.py`. Accurately describes underflow behavior and recommends alternatives.
- **`chargeSchiwietzGas` warning docstring:** Confirmed at lines 256-264 of `dll_wrapper.py`. Accurately hedges with "may require" and "possibly only works within" rather than asserting definitively.
- **`LISEDllError` import in server.py:** Imported at line 8 but never used directly in `server.py` (all tools catch bare `Exception`). This is harmless — `LISEDllError` is a subclass of `Exception` and will be caught. The import might be useful for future refinement where DLL errors are handled differently from other errors.
- **LISE_DIR env var:** Confirmed at line 38 of `dll_wrapper.py` with correct `os.environ.get()` pattern and `"D:/LISEcute"` fallback.
