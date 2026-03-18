# DLL Wrapper Robustness Improvements

**Date:** 2026-03-18
**Files modified:**
- `D:\Something\research\LISE++\lisepp-mcp\lisepp\dll_wrapper.py`
- `D:\Something\research\LISE++\lisepp-mcp\server.py`

## Changes

### 1. `lisepp/dll_wrapper.py`

#### 1a. LISE_DIR configurable via environment variable (line 38)
- Changed `LISE_DIR = "D:/LISEcute"` to `LISE_DIR = os.environ.get("LISE_DIR", "D:/LISEcute")`
- Allows deploying the server with a different LISE++ installation path without code changes.

#### 1b. Added `logging` import and logger (lines 13, 18)
- `import logging` added alongside existing stdlib imports.
- `logger = logging.getLogger(__name__)` created at module level for use by `check_error()`.

#### 1c. charge_double / chargeSchiwietzGas investigation (lines 244-265)
- **Tested `charge_option(0-3)` before charge_double/chargeSchiwietzGas calls** -- no effect on either function.
- **Tested all `set_charge_state(0-5)` methods** -- no change in behavior.
- **Tested multiple beam species** (12C, 40Ar, 238U) at various energies (5-100 MeV/u).

**Findings:**
- `charge_double()` IS operational but returns values so small they underflow (e.g. 1e-50 to 1e-130). The function computes charge-state fractions using a formula that severely underflows for most realistic parameters. At lower energies (10 MeV/u, Fe on C), it returns non-zero but still negligible values like 1e-29. This is a DLL-internal numerical issue, not a calling convention problem.
- `chargeSchiwietzGas()` returns 0.0 for ALL tested parameter combinations regardless of `charge_option` settings. This function likely requires initialization only available within the full LISE++ GUI context, or is non-functional in the standalone DLL.
- **Decision:** Did NOT modify `_initialize()` since no `charge_option()` value fixed the issue. Instead, added detailed WARNING docstrings to both methods (lines 246-253 and 258-264) documenting the exact behavior and recommending `charge_qmean`/`charge_dq` as reliable alternatives.

#### 1d. `check_error()` diagnostic method (lines 283-304)
- Added `check_error()` method that calls `global_code(0)` and logs warnings.
- Non-blocking: catches all exceptions and returns -1 on failure.
- Testing revealed `global_code()` returns 1948546305 (0x7427F701) consistently for all arguments 0-4 -- meaning unknown, but documented in docstring.
- Logs at WARNING level when return value is non-zero.

### 2. `server.py`

#### 2a. try/except on ALL DLL-backed tools (10 tools wrapped)
Every DLL-backed tool function now has its body wrapped in `try: ... except Exception as e: return {"error": str(e)}`, matching the pattern already used by lpp_* tools. Affected tools:
- `get_material_info` (line 158)
- `calc_energy_loss` (line 189)
- `calc_range` (line 218)
- `calc_straggling` (line 260)
- `calc_stopping` (line 295)
- `calc_charge_state` (line 331)
- `calc_mass` (line 368)
- `calc_brho_tool` (line 396)
- `calc_tof_tool` (line 417)
- `calc_de_tof_tool` (line 442)

#### 2b. Model selection parameters added to 3 tools

- **`calc_stopping`** (line 278): Added `loss_method: int | None = None`. If provided, calls `dll.set_loss_method(loss_method)` before calculation. Documented known values 0-3 (init default: 2).
- **`calc_charge_state`** (line 310): Added `charge_method: int | None = None`. If provided, calls `dll.set_charge_state_method(charge_method)` before calculation. Documented known values 0-5 (init default: 3). Also added note about charge_double unreliability.
- **`calc_straggling`** (line 243): Added `straggling_method: int | None = None`. If provided, calls `dll.set_straggling_method(straggling_method)` before calculation. Documented known values 0, 1 (init default: 1).

#### 2c. `import shutil` moved to module level (line 3)
- Moved from inside `lpp_create()` function body to top-level imports.

## Test Results
All 65 tests pass, 7 skipped (GUI integration tests requiring LISE++ GUI running).
No regressions introduced.
