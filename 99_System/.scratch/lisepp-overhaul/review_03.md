needs-revision

## Findings

### P0 — Base64 encoding has no error handling (gui_base.py, lines 246-247)

The `capture_screenshot` method saves the image successfully (line 244), then immediately reads the file back and base64-encodes it (lines 246-247). This read-back + encode block is **not** wrapped in try/except. If the file write completes but the read-back fails (disk full after flush, permissions, antivirus lock on Windows), the entire `capture_screenshot` call raises an unhandled exception and the caller loses the screenshot path, dimensions, and status — all of which were already computed.

**Fix:** Wrap lines 246-254 in a try/except. On failure, return the dict *without* `base64_png` (or with `base64_png: null`) so the path and metadata are still available. This was explicitly called out in the review instructions as a required property.

```python
# Suggested shape:
result = {
    "status": "ok",
    "path": str(output_path),
    "width": img.width,
    "height": img.height,
}
try:
    with open(output_path, "rb") as f:
        result["base64_png"] = base64.b64encode(f.read()).decode("ascii")
except Exception:
    result["base64_png"] = None
return result
```

### P1 — `_find_recent_outputs` and `_read_file_results` parse the window title differently (gui_controller.py)

`_find_recent_outputs` (line 325) uses `re.search(r'\[(.+?)\]', title)` to extract the path from brackets. Meanwhile, `_read_file_results` (lines 461-463) uses `title.split()` and looks for a token with suffix `.lpp`. These are two independent implementations of the same logic (extract the loaded file's directory from the window title), using incompatible parsing strategies.

If the LISE++ title format is `' L I S E ++   [D:\path\to\file.lpp]'`, then `title.split()` will never find a token with `.lpp` suffix because the brackets stay attached, producing `[D:\path\to\file.lpp]` — which has suffix `].lpp]` on split but `Path("[D:...")` would have suffix `.lpp]` (not `.lpp`). This means **`_read_file_results` was likely already broken before this change** and `_find_recent_outputs` now works correctly, but the two functions are inconsistent.

**Recommendation:** Extract a shared helper like `_get_lpp_dir(app) -> Path | None` that uses the bracket-regex approach, and call it from both functions. This prevents future drift and fixes the likely-broken `_read_file_results` path as well.

### P2 — `force_reopen` uses `time.time()` while `_wait_for_completion` uses `time.monotonic()` (gui_controller.py, line 95 vs 299)

The polling loop in `force_reopen` (line 95-96) uses `time.time()` for its deadline, while `_wait_for_completion` (line 299-300) correctly uses `time.monotonic()`. `time.time()` is subject to system clock adjustments (NTP sync, manual changes, daylight saving on some configurations). In a 10-second window this is unlikely to cause real issues, but it is an unnecessary inconsistency.

**Fix:** Change line 95 to `deadline = time.monotonic() + 10` and line 96 to `while time.monotonic() < deadline`.

### P2 — `force_reopen` does not handle "Save changes?" dialog (gui_controller.py, lines 90-108)

The implementer's report says `force_reopen` now polls for process exit. It does, but the code calls `app.main_window.close()` (line 93), which sends WM_CLOSE. If LISE++ has unsaved changes, it may display a "Save changes?" modal dialog. The code then enters the polling loop on `is_process_running()`, which will spin for 10 seconds and silently fall through (the process is still alive, blocked on the dialog). After the loop, lines 106-108 reset the singleton state and line 111-112 attempt to re-launch. At this point the old LISE++ instance is **still running** with an open dialog, and the new `connect_or_launch` will likely connect to it rather than starting a fresh one.

**Fix:** After sending `close()`, add a check for the appearance of a confirmation dialog (title matching "save" or "confirm") and dismiss it (click "No"/"Don't Save") before entering the polling loop. Alternatively, document this as a known limitation.

### P2 — 60-second window in `_find_recent_outputs` may be too narrow (gui_controller.py, line 339)

`_find_recent_outputs` looks for files modified within 60 seconds. A LISE++ Monte Carlo calculation can easily run for several minutes (the `timeout` parameter defaults to 300 seconds). If a calculation takes >60 seconds, its output files will already be outside the 60-second recency window by the time `_find_recent_outputs` runs. The function is called *after* `_wait_for_completion` returns, so the relevant mtime is the file's write time vs the time `_find_recent_outputs` executes — if the file was written at the start of a multi-minute calculation and `_find_recent_outputs` runs at the end, it will miss it.

**Recommendation:** Either (a) record `time.time()` before the calculation starts and pass it as a `since` parameter, or (b) widen the window to match the calculation timeout, or (c) document this as suitable only for fast calculations.

### P3 — Text key determinism is control-tree-order dependent (gui_controller.py, lines 416-444)

The report claims keys are deterministic "as long as the control tree order is stable." This is correct — the sequential counter resets to 0 each call, so the same control tree order produces the same keys. However, it is worth noting that if LISE++ adds or removes a control between calls (e.g., a status label appears after a calculation), the numbering shifts for all subsequent controls. This is an improvement over `id(ctrl)` but is **not fully stable across application state changes**. The report's caveat is accurate; no code change needed, but MCP clients should not treat these keys as persistent identifiers.

### P3 — `_find_recent_outputs` includes `.lpp` files in its scan (gui_controller.py, line 337)

The output scan includes files with extension `.lpp`. LISE++ configuration files are `.lpp` — if the user saves or auto-saves the configuration during a calculation, it will appear as an "output file." This is arguably misleading since `.lpp` is an input/config format, not a calculation output. Consider removing `.lpp` from the suffix list, or at minimum separating it from the true output extensions.

### No regressions detected in existing tests

- All unit tests in `test_gui_controller.py` exercise validation paths (not-available, file-not-found, invalid-mode, invalid-result-type). None of these code paths were modified. No regressions.
- Integration tests in `test_gui_integration.py` check `result["status"] == "ok"` and key presence (`"screenshot"`, `"text"`, `"files"`). The new `base64_png` field is additive — existing assertions still pass.
- No function signatures were changed in a breaking way. `gui_open_file`, `gui_run_calculation`, `gui_read_results` retain identical parameters.
- `capture_screenshot` return dict adds `base64_png` but retains all original keys (`status`, `path`, `width`, `height`).

### Summary

One P0 (base64 encoding lacks error isolation), two P1-level issues (title parsing inconsistency, `time.time` vs `time.monotonic`), one behavioral gap (force_reopen vs save dialog), one timeout mismatch (60s window vs long calculations), and two minor observations. The P0 is the blocking item — a file-read failure during base64 encoding will crash the entire screenshot tool when it should degrade gracefully.
