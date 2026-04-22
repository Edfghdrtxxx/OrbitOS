"""Apply in-place text/opacity edits to the decompressed Excalidraw JSON."""
import json
import sys
import time
from pathlib import Path

VERSION_BUMP = True

# Edits: map element id -> new text (for text elements)
TEXT_EDITS = {
    # subtitle: pathway finalized
    "BXOwrrUy": "Pathway FINALIZED (2026-04-13): Route B Special Selection, Supervisor Imai (DONUTS) committed",
    # GRE prep header adds GRE 900 cutoff
    "GzaEtuPT": "GRE Physics Prep (min 900)",
    # GSGC title: reflect N/A
    "6p1x0aZi": "GSGC Application (N/A - ineligible for master's holders, Imai 2026-04-13)",
    # GSGC details: replace with concise N/A rationale
    "GOC4qwOb": (
        "Route archived:\n"
        "GSGC is closed to applicants\n"
        "who already hold a master's\n"
        "degree. Confirmed by Imai-san,\n"
        "2026-04-13."
    ),
    # Special Selection title: verified window
    "WUzux8Af": "Special Selection Application (Period 2: Dec 7-22, 2026 - VERIFIED 2026-04-22)",
    # Special Selection exam description: interview-only per Imai
    "4VNJr2dl": (
        "1. Interview only, no written\n"
        "exam (CONFIRMED Imai 2026-04-13)\n"
        "2. Document screening first\n"
        "3. Research plan + supervisor\n"
        "endorsement critical"
    ),
    # GRE Score Ready - left branch (Oct exam path): note GRE 900 cutoff
    "zjdCzUhb": (
        "1. UTokyo requires scores within 2\n"
        "years of application\n"
        "2. Submitted to UTokyo (7048)\n"
        "3. Min 900 cutoff (Imai 2026-04-13)"
    ),
    # Duplicate GRE Score Ready node (Sep exam path)
    "p33LYONM": (
        "1. UTokyo requires scores within 2\n"
        "years of application\n"
        "2. Submitted to UTokyo (7048)\n"
        "3. Min 900 cutoff (Imai 2026-04-13)"
    ),
    # PhD D1 info: tuition correction 520,800 -> 535,800
    "b5g6XF7o": (
        "1. Oct 2027 enrollment\n"
        "2. Funding: RIKEN JRA\n"
        "3. Admission fee: 282,000 JPY;\n"
        "Tuition 535,800 JPY/year"
    ),
    # Application checklist: JSON stale; sync to verified FY2027 windows
    "t1KlPf4M": (
        "1. GRE Physics score (Required -\n"
        "Physics Department, min 900)\n"
        "2. TOEFL iBT score (100+ target)\n"
        "3. Proof of professor consultation\n"
        "4. Research plan, Personal Statement,\n"
        "Statement of Purpose\n"
        "5. Academic transcripts, two\n"
        "recommendation letters\n"
        "6. Official FY2027 guidelines\n"
        "PUBLISHED 2026-04-22: Period 1\n"
        "Oct 15-30, Period 2 Dec 7-22,\n"
        "2026 (JST)"
    ),
    # TOEFL retake window: target Dec 7 (Period 2 open) not Dec 5
    "BUXkZP3k": (
        "1. If score<95, retake available\n"
        "2. Window: Sep-Nov 2026. Leave\n"
        "enough time for ETS to deliver\n"
        "the score before Dec 7\n"
        "(Period 2 opens)."
    ),
}

# Opacity dimming for GSGC-archived elements
GREY_OUT_IDS = {
    "6p1x0aZi": 50,            # GSGC title text
    "GOC4qwOb": 50,            # GSGC details text
    "XEJIGUuQ79nxTSzd3i4A-": 40,  # GSGC container rectangle
}

# Text color change for GSGC (to grey)
GSGC_TEXT_IDS = {"6p1x0aZi", "GOC4qwOb"}
GREY_COLOR = "#868e96"


def approximate_text_width(text: str, font_size: int) -> int:
    """Excalidraw uses font metrics; approximate for our rough width needs."""
    # Rough: each char ~ 0.55 * font_size in px
    longest = max((len(line) for line in text.splitlines()), default=0)
    return max(80, int(longest * font_size * 0.55))


def approximate_text_height(text: str, font_size: int) -> int:
    lines = max(1, len(text.splitlines()))
    return int(lines * font_size * 1.25)


def apply_edits(data: dict) -> None:
    by_id = {e["id"]: e for e in data["elements"]}

    for eid, new_text in TEXT_EDITS.items():
        el = by_id.get(eid)
        if el is None:
            print(f"WARN: element {eid} not found", file=sys.stderr)
            continue
        old = el.get("text", "")
        el["text"] = new_text
        el["originalText"] = new_text
        # Recompute width/height crudely to avoid over-clipping
        fs = el.get("fontSize", 20)
        el["width"] = max(el.get("width", 0), approximate_text_width(new_text, fs))
        el["height"] = max(el.get("height", 0), approximate_text_height(new_text, fs))
        # Recompute lineHeight line count
        print(f"edited {eid}: {old[:40]!r} -> {new_text[:60]!r}")

    for eid, opacity in GREY_OUT_IDS.items():
        el = by_id.get(eid)
        if el is None:
            print(f"WARN: grey-out target {eid} not found", file=sys.stderr)
            continue
        el["opacity"] = opacity
        print(f"grey-out {eid}: opacity={opacity}")

    for eid in GSGC_TEXT_IDS:
        el = by_id.get(eid)
        if el is not None:
            el["strokeColor"] = GREY_COLOR

    # Bump version / updated timestamp
    for e in data["elements"]:
        if e["id"] in TEXT_EDITS or e["id"] in GREY_OUT_IDS:
            e["version"] = e.get("version", 1) + 1
            e["versionNonce"] = int(time.time() * 1000) & 0x7FFFFFFF
            e["updated"] = int(time.time() * 1000)


def main() -> None:
    in_path = Path(sys.argv[1])
    out_path = Path(sys.argv[2])
    data = json.loads(in_path.read_bytes())
    apply_edits(data)
    out_path.write_bytes(json.dumps(data, indent=2, ensure_ascii=True).encode("utf-8"))
    print(f"wrote {out_path}")


if __name__ == "__main__":
    main()
