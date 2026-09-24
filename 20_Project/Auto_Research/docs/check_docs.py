#!/usr/bin/env python3
"""Read-only checks for the Auto_Research docs index, wikilinks, and verbatim split reconstruction."""
from pathlib import Path
import hashlib
import json
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

# Rebuild every split report from its overview prefix and verbatim section files.
manifest_path = ROOT / "SPLIT_MANIFEST.json"
if not manifest_path.exists():
    errors.append("missing split manifest: SPLIT_MANIFEST.json")
else:
    try:
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
        for record in manifest.get("reports", []):
            overview = ROOT / record["overview"]
            overview_body = overview.read_bytes()
            try:
                prefix = overview_body.split(b"<!-- SOURCE-PREFIX-START -->\n", 1)[1].split(
                    b"<!-- SOURCE-PREFIX-END -->", 1
                )[0]
            except (IndexError, ValueError):
                errors.append(f"missing source prefix markers: {record['overview']}")
                continue
            rebuilt = prefix
            for section in record["section_files"]:
                section_path = ROOT / section["path"]
                if not section_path.exists():
                    errors.append(f"missing split section: {section['path']}")
                    continue
                section_body = section_path.read_bytes()
                try:
                    source_part = section_body.split(b"<!-- SOURCE-BODY-START -->\n", 1)[1].split(
                        b"<!-- SOURCE-BODY-END -->", 1
                    )[0]
                except (IndexError, ValueError):
                    errors.append(f"missing source section markers: {section['path']}")
                    continue
                rebuilt += source_part
            digest = hashlib.sha256(rebuilt).hexdigest()
            if digest != record["source_sha256"] or len(rebuilt) != record["source_bytes"]:
                errors.append(
                    f"split reconstruction mismatch: {record['overview']} "
                    f"(expected {record['source_sha256']}/{record['source_bytes']}, "
                    f"got {digest}/{len(rebuilt)})"
                )
    except (OSError, json.JSONDecodeError, KeyError, TypeError) as exc:
        errors.append(f"invalid split manifest: {exc}")

if errors:
    print("FAIL")
    print("\n".join(errors))
    sys.exit(1)
print(f"OK: {sum(1 for p in ROOT.rglob('*') if p.is_file())} files checked")
