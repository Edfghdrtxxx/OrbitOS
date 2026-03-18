# Parser Hardening Report

**Date:** 2026-03-18
**Files modified:**
- `D:\Something\research\LISE++\lisepp-mcp\lisepp\lpp_parser.py`
- `D:\Something\research\LISE++\lisepp-mcp\server.py`

---

## Changes Made

### 1. Block decorator regex fix (`lpp_parser.py`, line 49)

**Problem:** `BLOCK_RE` used pattern `^\{=+\s*BLOCK\s+(\w+)\s*-\s*(.+?)\s*=+\}$` which only matched lines like `{=== BLOCK D1 - Dipole ===}`. Real .lpp files also have free-form decorators like `{============================= Main Part ======================================}` which lack the `BLOCK` keyword. These unmatched decorators fell through to `KV_RE` and were stored as spurious key-value entries (key: `{=====...Main Part`, value: the rest).

**Fix:** Changed to `^\{=+.*=+\}$` — matches any line starting with `{=` and ending with `=}`. Since block decorators are purely cosmetic (preserved verbatim in `_lines` for round-trip), the capture groups were unnecessary and removed.

**Decision:** The broader pattern could theoretically match a legitimate key-value line containing `{=...=}`, but this is not a realistic concern given the .lpp format. All decorator lines in the sample file (25 lines) are matched correctly by the new pattern.

### 2. `set()` substring collision fix (`lpp_parser.py`, lines 184-222)

**Problem:** `set()` called `after_eq.replace(old_val, str(value), 1)` on the entire portion after `=`. If the old value (e.g., `"1"`) appeared in the unit text (e.g., `(+/-)mm`) or inline comment, the wrong token could be replaced.

**Fix:** Split `after_eq` into two regions before replacement:
1. Separate the comment (everything after `;`) from the value+unit region.
2. In the value+unit region (`before_comment`), use `str.index()` to find the exact position of the old value and replace only that occurrence via slicing (`before_comment[:val_pos] + new_value + before_comment[val_end:]`).
3. Reassemble: `prefix + new_before + comment_suffix`.

This ensures the comment text is never touched, and since the value always appears before the unit in the before-comment region, the first occurrence found by `index()` is the correct token.

### 3. Encoding handling fix (`lpp_parser.py`, lines 63-85, 250)

**Problem:** `parse()` used `read_text(encoding="utf-8", errors="replace")` which silently converted Windows codepage characters (e.g., degree symbol `°` in units like `(°)mm`) into replacement characters. When saved back, these became `?` — corrupting the file.

**Fix:**
- Added `_read_file()` static method (lines 65-78) that tries encodings in order: `utf-8`, `cp1252`, `latin-1`. Only falls back to `utf-8` with `errors="replace"` if all three fail.
- Added `_encoding` instance attribute (line 63) to store the detected encoding.
- `save()` now writes with `self._encoding` (line 250) instead of hardcoded `utf-8`, ensuring round-trip fidelity.

**Decision:** The encoding cascade `utf-8 -> cp1252 -> latin-1` was chosen because: UTF-8 is correct for modern files; cp1252 covers Windows-generated .lpp files with extended characters; latin-1 never raises `UnicodeDecodeError` (it accepts all byte values 0-255) so it acts as a lossless last resort before the destructive `errors="replace"` fallback.

### 4. FileNotFoundError handling in server tools (`server.py`, all 5 lpp tools)

**Problem:** `lpp_parse`, `lpp_summary`, `lpp_get`, `lpp_set`, and `lpp_create` all called `LppFile(path).parse()` without catching `FileNotFoundError`. While the parser raises it correctly, the MCP tool would propagate an unhandled exception to the client.

**Fix:** Wrapped the body of each tool in `try/except` catching `FileNotFoundError` (returns `{"error": f"File not found: {file_path}"}`) and a generic `Exception` catch (returns `{"error": str(e)}`).

**Lines affected:**
- `lpp_parse`: lines 46-52
- `lpp_summary`: lines 62-68
- `lpp_get`: lines 80-89
- `lpp_set`: lines 102-123
- `lpp_create`: lines 143-170

### 5. Key validation in `lpp_create` (`server.py`, lines 153-165)

**Problem:** `lpp_create` called `lpp.set()` on optional parameters (`beam_az`, `beam_energy`, `fragment_az`) without checking if the corresponding keys exist in the parsed template. If the template lacked `A,Z,Q`, `Energy`, or `Settings on A,Z` in `[settings]`, `set()` would raise `LppParseError` — caught by the generic `except Exception` but returning a confusing error message.

**Fix:** Before each optional `set()` call, check with `lpp.get()` first. If the key is missing, return a clear error message naming the missing key and section, e.g., `"Template missing key 'A,Z,Q' in [settings]"`.

---

## Verification

Reviewed the final state of both files. All changes are consistent and the parser logic flows correctly: block decorators are skipped before KV matching, encoding is preserved through the read-modify-write cycle, and all MCP tool entry points handle errors gracefully.
