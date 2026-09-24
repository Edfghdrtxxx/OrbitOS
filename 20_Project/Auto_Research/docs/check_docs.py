#!/usr/bin/env python3
"""Read-only checks for the Auto_Research docs index and wikilinks."""
from pathlib import Path
import re, sys

ROOT = Path(__file__).resolve().parent
INDEX = ROOT / "README.md"
text = INDEX.read_text(encoding="utf-8")
errors = []

# Every file below docs/ is listed in docs/README.md (the index itself is exempt).
for path in sorted(ROOT.rglob("*")):
    if not path.is_file() or path == INDEX:
        continue
    rel = path.relative_to(ROOT).as_posix()
    stem = rel[:-3] if rel.endswith(".md") else rel
    if rel not in text and stem not in text:
        errors.append(f"missing from README index: {rel}")

# Resolve Obsidian wikilinks found inside docs/.
for source in sorted(ROOT.rglob("*.md")):
    body = source.read_text(encoding="utf-8")
    for raw in re.findall(r"\[\[([^\]]+)\]\]", body):
        target = raw.split("|", 1)[0].split("#", 1)[0].strip()
        if not target or target.startswith("http"):
            continue
        candidates = []
        t = Path(target)
        if t.suffix:
            candidates.append(ROOT / t)
            candidates.append(source.parent / t)
        else:
            candidates.extend([ROOT / (str(t) + ".md"), source.parent / (str(t) + ".md")])
            candidates.extend(ROOT.rglob(t.name + ".md"))
        if not any(c.exists() and c.is_file() for c in candidates):
            errors.append(f"broken wikilink in {source.relative_to(ROOT)}: [[{raw}]]")

if errors:
    print("FAIL")
    print("\n".join(errors))
    sys.exit(1)
print(f"OK: {sum(1 for p in ROOT.rglob('*') if p.is_file())} files checked")
