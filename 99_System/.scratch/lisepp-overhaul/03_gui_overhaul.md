# GUI Overhaul Report — 03

## Summary

Six targeted fixes applied to the LISE++ MCP GUI automation layer to improve reliability, correctness, and MCP client usability.

## Changes

### 1. Base64 screenshot support (`gui_base.py`, line 10 + lines 246-247)
- Added `import base64` to module imports.
- After saving the PNG, the file is read back and base64-encoded.
- Return dict now includes `"base64_png"` alongside the existing `"path"`, `"width"`, `"height"` fields.
- **Why:** MCP clients (AI models) cannot read local files; embedding the image as base64 in the response makes screenshots immediately usable.

### 2. Deterministic text result keys (`gui_controller.py`, lines 416-444)
- Replaced `f"text_{id(ctrl)}"` and `f"edit_{id(ctrl)}"` with sequential counters (`text_1`, `text_2`, ..., `edit_1`, `edit_2`, ...).
- Separate counters for Text and Edit control types.
- **Why:** Python `id()` values are non-deterministic between calls, making keys unstable across invocations. Sequential counters produce consistent keys as long as the control tree order is stable.

### 3. Implemented `_find_recent_outputs` (`gui_controller.py`, lines 315-343)
- Was a stub that always returned `[]`.
- Now parses the window title to extract the loaded `.lpp` file path from `[brackets]` using regex.
- Scans the parent directory for files with extensions `.txt`, `.csv`, `.dat`, `.out`, `.lpp` modified within the last 60 seconds.
- **Why:** The function is called after calculations to report output files. The stub silently discarded this data.

### 4. Reliable `force_reopen` polling (`gui_controller.py`, lines 90-108)
- Replaced the blind `time.sleep(2)` after `main_window.close()` with a polling loop.
- Polls `app._app.is_process_running()` every 0.5s with a 10-second deadline.
- Falls through on exception (process handle already gone).
- **Why:** A fixed 2-second sleep is both too short (process may still be alive) and too long (wastes time). Polling ensures the process is actually gone before relaunching.

### 5. Menu index documentation and debug logging (`gui_controller.py`, lines 33-36 + 180-196)
- Added version-pinning comment to the `_CALC_TRANSMISSION_AND_RATE` constant noting it was tested against Qt 6.6.1.
- Added `logging.getLogger(__name__)` at module level.
- Added `logger.debug()` call in `_run_single_calculation` logging the menu name and index before clicking.
- Expanded the docstring to document the Qt6/UIA limitation and the need to re-audit via `gui_inspector` if the menu layout changes.
- **Decision:** Did not attempt runtime text verification of the focused menu item because Qt6 menus are opaque to UIA — this is a known limitation documented in `gui_base.py`.

### 6. Base64 passthrough in `server.py` — no change needed
- Verified that `gui_read_results` in `server.py` (line 498) calls `_gui_read_results` which returns the dict from `gui_controller.gui_read_results`.
- `gui_controller.gui_read_results` stores `app.capture_screenshot()` output directly into `result["screenshot"]` (line 392-393).
- Since `capture_screenshot()` now returns `base64_png` in its dict, the field flows through to the MCP client automatically.
- **Decision:** No code change required; the passthrough architecture already handles new fields.

## Files Modified
- `D:\Something\research\LISE++\lisepp-mcp\lisepp\gui_base.py` — Changes 1
- `D:\Something\research\LISE++\lisepp-mcp\lisepp\gui_controller.py` — Changes 2, 3, 4, 5
- `D:\Something\research\LISE++\lisepp-mcp\server.py` — No changes (verified passthrough)
