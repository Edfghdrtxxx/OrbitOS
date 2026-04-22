"""Find elements likely belonging to the GSGC branch (near GSGC title position)."""
import json
import sys

path = sys.argv[1]
with open(path, encoding="utf-8") as f:
    data = json.load(f)

# GSGC title element
target_ids = {"6p1x0aZi", "GOC4qwOb"}
gsgc_containers = {"XEJIGUuQ79nxTSzd3i4A-"}

# Find container rectangles and any arrows pointing at them
for e in data["elements"]:
    eid = e.get("id", "")
    etype = e.get("type")
    x = e.get("x", 0)
    y = e.get("y", 0)
    # region of GSGC: approx x in [2700, 3700], y in [500, 900]
    if 2700 <= x <= 3800 and 500 <= y <= 950:
        txt = ""
        if etype == "text":
            txt = e.get("text", "").replace("\n", " / ")[:80]
        bound = e.get("boundElements", [])
        print(f"{etype:10} id={eid[:20]:20} x={x:.0f} y={y:.0f} w={e.get('width',0):.0f} h={e.get('height',0):.0f}"
              f" color={e.get('strokeColor','')} bg={e.get('backgroundColor','')} op={e.get('opacity',100)}"
              f" bound={len(bound)} | {txt}")

print("\n--- Arrows with endpoints ---")
for e in data["elements"]:
    if e.get("type") == "arrow":
        start = e.get("startBinding", {}) or {}
        end = e.get("endBinding", {}) or {}
        sid = start.get("elementId", "")[:15] if start else ""
        eid = end.get("elementId", "")[:15] if end else ""
        x = e.get("x", 0)
        y = e.get("y", 0)
        if 2700 <= x <= 3800 and 300 <= y <= 900:
            print(f"arrow id={e['id'][:15]} x={x:.0f} y={y:.0f} start={sid} end={eid}")
