"""Decompress an Obsidian-Excalidraw compressed-json block to plain JSON."""
import json
import re
import sys
from pathlib import Path

import lzstring


def decompress(md_path: Path, out_path: Path) -> None:
    text = md_path.read_text(encoding="utf-8")
    m = re.search(r"```compressed-json\n(.*?)\n```", text, re.DOTALL)
    if not m:
        print("No compressed-json block found", file=sys.stderr)
        sys.exit(1)
    raw = m.group(1)
    compacted = "".join(raw.split())
    decompressed = lzstring.LZString().decompressFromBase64(compacted)
    if not decompressed:
        print("Decompression returned empty", file=sys.stderr)
        sys.exit(1)
    data = json.loads(decompressed)
    out_path.write_bytes(json.dumps(data, indent=2, ensure_ascii=True).encode("utf-8"))
    print(f"Decompressed {len(decompressed)} chars into {out_path}")


if __name__ == "__main__":
    md = Path(sys.argv[1])
    out = Path(sys.argv[2])
    decompress(md, out)
