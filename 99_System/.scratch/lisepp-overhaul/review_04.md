approved

## Findings

All 12 existing parser tests pass. The five stated changes are implemented as described and the core logic is correct. The issues below range from informational to low-severity; none block approval.

### 1. Block decorator regex (BLOCK_RE) -- OK

`^\{=+.*=+\}$` correctly matches all decorator formats observed across ~90 real .lpp files in `D:\LISEcute\files\examples\`:
- `{============================= Main Part ======================================}` (free-form)
- `{============================= BLOCK D1 - Dipole ======================================}` (structured)

No false positives found: key-value lines never begin with `{=` in the .lpp format. Confirmed via grep across the full example corpus. The old BLOCK_RE only matched lines containing the `BLOCK` keyword, allowing free-form decorators (like `Main Part`) to fall through to KV_RE — which parsed them as key=`{`, value=rest-of-line. The fix correctly eliminates this.

Theoretical concern: a line like `{=foo = bar=}` would be swallowed as a decorator. In practice, no such lines exist in the format.

### 2. set() substring collision fix -- OK with one latent edge case

The split-on-`;` then `str.index()` approach is correct. The comment text is fully isolated before replacement, and the first occurrence of the old value in the before-comment region is always the value token (since the value precedes the unit in .lpp format).

**Latent edge case (pre-existing, not a regression):** If `lpp_val.value` is empty string `""`, then `"" in before_comment` is always True and `index("")` returns 0, causing the new value to be inserted at position 0 (before leading whitespace), corrupting formatting. In practice, empty values do not appear in .lpp files, but the code has no guard. Consider adding `if not old_val: <fallback path>` if defensive coding is desired.

**Pre-existing limitation:** Calling `set()` twice on the same key falls to the reconstruction fallback on the second call because `self._lines[line_idx]` still holds the original line while `lpp_val.value` has been updated by the first call. The `lpp_create` tool never calls `set()` twice on the same key, so this is not triggered in practice.

### 3. Encoding cascade -- OK with caveats

The cascade `utf-8 -> cp1252 -> latin-1 -> utf-8+replace` works correctly:
- UTF-8 files are detected as UTF-8.
- The sample test file (`18O-80AMeV__12Be.lpp`) is actually **GBK-encoded** (Chinese Windows codepage). It fails UTF-8, succeeds cp1252. The in-memory text contains mojibake for Chinese characters, BUT the round-trip re-encodes to identical bytes for those characters — so the file content is preserved byte-for-byte in the affected region.
- `latin-1` never raises `UnicodeDecodeError` (all 256 byte values are valid), making the final `utf-8+replace` fallback **unreachable dead code**. This is harmless defense-in-depth.
- The `_encoding` attribute is stored and used by `save()` on line 250. Confirmed.

**Missing encoding: GBK/GB2312.** The sample test file contains Chinese paths. cp1252 "wins" the cascade and produces mojibake in memory, though the bytes round-trip correctly. If the parser ever needs to display or manipulate Chinese text from .lpp paths, GBK should be added to the cascade (after UTF-8, before cp1252). This is not a regression since the old code used `utf-8+replace` which was strictly worse (replacing Chinese bytes with `U+FFFD`).

**Pre-existing platform issue (not introduced by this patch):** On Windows, `write_text()` in text mode converts `\n` to `\r\n`. If the original file uses bare `\n` line endings (as most .lpp files from LISE++ do), the saved file gains extra `\r` bytes. This existed before the encoding changes and would require `newline=''` in the write call to fix.

### 4. FileNotFoundError handling -- OK

All 5 lpp tools have `try/except FileNotFoundError` returning `{"error": f"File not found: {file_path}"}`, followed by generic `except Exception as e` returning `{"error": str(e)}`. This matches the `{"error": ...}` convention used by all other tools in server.py.

Minor note: In `lpp_create`, the `FileNotFoundError` handler on line 175 references `template_path` in its message, but the error could theoretically originate from `LppFile(dst).parse()` if the copy fails. The explicit `src.exists()` check on line 147 makes this unlikely in practice.

### 5. lpp_create key validation -- OK with minor cleanup opportunity

All three optional parameters (`beam_az`, `beam_energy`, `fragment_az`) are validated with `lpp.get()` before `lpp.set()`. Error messages clearly identify the missing key and section.

**Minor:** When validation fails (lines 155, 159, 163), the function returns early but the file at `output_path` has already been copied (line 150) and is left on disk as an unmodified template copy. Not a data corruption issue, but the orphan file could be confusing. Consider deleting `dst` in the early-return paths.

### 6. Line map correctness after decorator fix -- OK

The `_line_map` stores `(section, key) -> line_index` during `parse()`. Since block decorators are skipped via `continue` on line 103 (same as before for the subset of decorators the old regex matched), no line indices are affected. The decorator lines remain in `self._lines` at their original indices, and key-value lines still map to their correct indices. Verified by the passing round-trip tests.

### 7. Test coverage gaps (informational)

The existing tests cover basic parse/set/save round-trip but do not test:
- The block decorator fix specifically (no test asserts that decorator lines are NOT parsed as KV pairs)
- The set() fix with values that collide with unit text (e.g., setting a key whose value is `"1"` and unit is `1/m`)
- Encoding detection (no test for cp1252 or latin-1 files)
- FileNotFoundError handling in the MCP tools
- lpp_create key validation paths

These are not blockers but would strengthen confidence in the hardening changes.
