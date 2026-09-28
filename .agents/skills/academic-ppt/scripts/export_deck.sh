#!/bin/zsh
# usage: export_deck.sh <deck.pptx> <out_dir>
# Renders <out_dir>/deck.pdf plus slide-NN.png with headless LibreOffice (the pattern of
# Anthropic's pptx skill): no PowerPoint window, no access prompts, any output folder.
# Reads the saved file, so it works while the deck is open; unsaved edits are not shown.
set -e
deck="$1"; out="$2"
soffice=/Applications/LibreOffice.app/Contents/MacOS/soffice
lock="$(dirname "$deck")/~\$$(basename "$deck")"
[[ -e "$lock" ]] && echo "note: deck is open in PowerPoint; rendering the last saved version" >&2
rm -rf "$out"; mkdir -p "$out"
profile=$(mktemp -d)  # throwaway profile: no clash with a running LibreOffice
"$soffice" -env:UserInstallation="file://$profile" --headless --convert-to pdf --outdir "$out" "$deck" >/dev/null 2> >(grep -v '^Fontconfig' >&2)
rm -rf "$profile"
mv "$out/$(basename "${deck%.*}").pdf" "$out/deck.pdf"
python3 - "$out" <<'PY'
import sys, fitz
out = sys.argv[1]
d = fitz.open(f"{out}/deck.pdf")
for i, pg in enumerate(d, 1):
    pg.get_pixmap(dpi=150).save(f"{out}/slide-{i:02d}.png")
print(f"{d.page_count} slides → {out}")
PY
