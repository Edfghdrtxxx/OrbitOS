"""Rebuild an Obsidian-Excalidraw .md file from edited JSON.

Preserves frontmatter, regenerates Text Elements section from JSON,
and compresses the JSON back into an ``compressed-json`` block with
~65-char wrapped base64 lines matching Obsidian-Excalidraw conventions.
"""
import json
import re
import sys
from pathlib import Path

import lzstring

WRAP_WIDTH = 256  # LZString base64 lines in Obsidian-Excalidraw are 256 chars


def build_text_elements_section(data: dict) -> str:
    lines: list[str] = []
    for el in data["elements"]:
        if el.get("type") != "text":
            continue
        text = el.get("text", "") or el.get("originalText", "")
        anchor = el["id"]
        # Split into display lines and append anchor to last line
        segs = text.split("\n")
        if len(segs) == 1:
            segs[0] = f"{segs[0]} ^{anchor}"
        else:
            segs[-1] = f"{segs[-1]} ^{anchor}"
        lines.extend(segs)
        lines.append("")  # blank separator
    # drop trailing blank
    while lines and lines[-1] == "":
        lines.pop()
    return "\n".join(lines)


def wrap_base64(s: str, width: int = WRAP_WIDTH) -> str:
    """Wrap base64 string with blank lines between chunks (matches source style)."""
    chunks = [s[i : i + width] for i in range(0, len(s), width)]
    # Source uses blank line between chunks
    return "\n\n".join(chunks)


def rebuild(md_path: Path, edited_json_path: Path, out_path: Path) -> None:
    original = md_path.read_text(encoding="utf-8")
    data = json.loads(edited_json_path.read_bytes())

    # Extract frontmatter and header prologue (everything before "## Text Elements")
    prologue_match = re.search(r"\A(.*?)## Text Elements\n", original, re.DOTALL)
    if not prologue_match:
        raise SystemExit("could not find '## Text Elements' header")
    prologue = prologue_match.group(1)

    text_section = build_text_elements_section(data)

    # Compress JSON back to LZString base64
    json_payload = json.dumps(data, separators=(",", ":"), ensure_ascii=True)
    compressed = lzstring.LZString().compressToBase64(json_payload)
    wrapped = wrap_base64(compressed)

    new_content = (
        f"{prologue}"
        f"## Text Elements\n"
        f"{text_section}\n\n"
        f"%%\n"
        f"## Drawing\n"
        f"```compressed-json\n"
        f"{wrapped}\n"
        f"```\n"
        f"%%"
    )
    # preserve final newline if present originally
    if original.endswith("\n"):
        new_content += "\n"
    out_path.write_text(new_content, encoding="utf-8")
    print(f"wrote {out_path} ({len(new_content)} chars)")


if __name__ == "__main__":
    md = Path(sys.argv[1])
    edited = Path(sys.argv[2])
    out = Path(sys.argv[3])
    rebuild(md, edited, out)
