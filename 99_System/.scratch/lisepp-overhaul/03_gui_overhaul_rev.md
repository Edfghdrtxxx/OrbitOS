# GUI Overhaul — Revision Report

Addresses findings from `review_03.md`.

## P0 — Base64 try/except (gui_base.py)

`capture_screenshot()` now builds the result dict (status, path, width, height) **before** attempting base64 encoding. The `open() + b64encode` block is wrapped in try/except; on failure it logs a warning and sets `base64_png: null` instead of crashing the entire response. The path and metadata are always returned.

**File:** `lisepp/gui_base.py`, lines 249-261

## P1 — Title parsing consistency (gui_controller.py)

Extracted a shared helper `_get_lpp_dir(app) -> Path | None` that uses the bracket-regex approach (`re.search(r'\[(.+?)\]', title)`) to parse the LISE++ window title. Both `_find_recent_outputs` and `_read_file_results` now call this helper instead of implementing their own parsing. This fixes the broken `title.split()` logic in `_read_file_results` (which could never match `.lpp` suffix due to brackets) and prevents future drift.

Also moved `import re` to the module level since it is now used at module scope by the helper.

**File:** `lisepp/gui_controller.py`, lines 40-56 (helper), 362 (find_recent_outputs), 492 (read_file_results)

## P1 — force_reopen timing and Save dialog (gui_controller.py)

Two changes in the `force_reopen` branch of `gui_open_file`:

1. **time.monotonic():** Changed the polling loop deadline from `time.time()` to `time.monotonic()` for consistency with `_wait_for_completion` and immunity to system clock adjustments.

2. **Save dialog dismissal:** After calling `close()`, the code now waits 0.5s then scans for any dialog whose title contains "save", "confirm", or "discard". If found, it iterates buttons looking for "No" / "Don't Save" / "Discard" and clicks it. Falls back to sending the 'N' keystroke if no matching button is found. This prevents the old LISE++ instance from blocking on a save confirmation while the polling loop spins uselessly.

**File:** `lisepp/gui_controller.py`, lines 110-142

## P2 — Recency window (gui_controller.py)

Changed the recency window in `_find_recent_outputs` from 60 seconds to 300 seconds (5 minutes) to accommodate longer Monte Carlo calculations. Also removed `.lpp` from the scanned suffix list since config files are not calculation outputs.

**File:** `lisepp/gui_controller.py`, line 371

## Summary of changes

| File | What changed |
|---|---|
| `lisepp/gui_base.py` | Added `logging` import; wrapped base64 block in try/except |
| `lisepp/gui_controller.py` | Added `re` import at module level; new `_get_lpp_dir()` helper; both title-parsing call sites unified; `force_reopen` uses `monotonic()` + dismisses save dialog; recency window 60s -> 300s; dropped `.lpp` from output scan |
