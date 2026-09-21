# Profile: Learning Group (LG)

Apply **only** when occasion is Learning Group / 组会 series. Generic academic talks: do not force this chrome.

## Folder

```
70_Presentations/<NNN>_Learning Group-YYYYMMDD/
  PPT-Design.md
  build_<short>.js
  render_eq.py          # if on-slide math; start from skill scripts/render_eq.py
  <Title>.pptx
  assets/
    imp_logo.jpeg       # from 716_Learning Group-20260805/assets/
    fig_*.jpeg
    eq/                 # if math
      meta.json
      *.png
```

`NNN` = next index after latest under `70_Presentations/`.

## Color `C` (from 717 gold)

```js
blue: "174994", blueDark: "0F2F5C", blueMid: "164994",
white: "FFFFFF", offWhite: "F7F9FC", ink: "1A2332",
muted: "5F6B73", lightMuted: "8A96A0",
coral: "E85D4C", accentSoft: "E8F0FA", gold: "C9A227"
```

## Chrome

- Author: Zhiheng Hu · Footer label: `Learning Group` · `page / TOTAL_CONTENT` (content slides only)
- Layout `LAYOUT_16x9` · header bar `h: 0.57` · footer rule `y: 5.32`
- Title: badge “Learning · Group” + IMP logo + full-width blue band
- Long sentence titles: shrink 18→16→15 pt; or eq header image if math-heavy
- Coral banners: avoid white-on-coral; prefer blue banner or dark ink
- Contributions close on blue full-bleed; three numbered takeaways

## Rhythm

`Title → Outline (all) → [§ highlight → content…] × N → Contributions`

## Deps

`70_Presentations/package.json` → `pptxgenjs`
