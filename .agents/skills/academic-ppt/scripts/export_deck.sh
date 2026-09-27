#!/bin/zsh
# usage: export_deck.sh <deck.pptx> <out_dir>
# Exports the real deck (no copies → no new PowerPoint recents) to <out_dir>/deck.pdf
# plus slide-NN.png. Refuses if the deck is open, so the user's window is never closed.
set -e
deck="$1"; out="$2"
lock="$(dirname "$deck")/~\$$(basename "$deck")"
[[ -e "$lock" ]] && { echo "deck is open in PowerPoint; close it first" >&2; exit 1; }
rm -rf "$out"; mkdir -p "$out"
osascript <<OSA
with timeout of 120 seconds
tell application "Microsoft PowerPoint"
  repeat with p in presentations
    if full name of p is "$deck" then error "deck is open in PowerPoint"
  end repeat
  open POSIX file "$deck"
  set p to active presentation
  save p in POSIX file "$out/deck.pdf" as save as PDF
  close p saving no
end tell
end timeout
OSA
python3 - "$out" <<'PY'
import sys, fitz
out = sys.argv[1]
d = fitz.open(f"{out}/deck.pdf")
for i, pg in enumerate(d, 1):
    pg.get_pixmap(dpi=110).save(f"{out}/slide-{i:02d}.png")
print(f"{d.page_count} slides → {out}")
PY
