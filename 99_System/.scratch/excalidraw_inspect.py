"""List all text elements with their ids and text snippets."""
import json
import sys

path = sys.argv[1]
with open(path, encoding="utf-8") as f:
    data = json.load(f)

for i, e in enumerate(data["elements"]):
    if e.get("type") == "text":
        txt = e.get("text", "").replace("\n", " / ")[:120]
        print(f"[{i}] id={e['id'][:10]} x={e.get('x',0):.0f} y={e.get('y',0):.0f} "
              f"color={e.get('strokeColor','')} op={e.get('opacity',100)} "
              f"containerId={e.get('containerId','')} | {txt}")
