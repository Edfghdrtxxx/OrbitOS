# Annotation types (on figures)

Native, editable shapes above the picture. Never edit, crop or restyle the picture itself. Deck palette only; coral is a deck accent (slide 8/15 bars), not a highlight colour. Colours are roles (line = deck primary, tint = deck soft accent, tag = primary fill with white text); the hex values below are 717's.

Pick by what is pointed at, and use the same variant for the same job on every slide of a deck.

| Job | Variant | Status |
|---|---|---|
| A part or region of a schematic or apparatus | Region highlight | approved (717 slide 11) |
| Anything on dense data (spectrum, plot, photo), or where a tint would vanish (bright projector, greyscale) | Outline only | untried |
| One peak, point or curve | Feature pointer | untried |
| Several parts of one figure | Repeated highlight | untried |

An untried variant's first use needs the user's OK on a real slide; then mark it approved. Add a new variant only when a real figure needs one.

## Region highlight

Use when the audience would ask "where is X in this figure?" (a comment, or a schematic with several parts). User-approved form: 717 `Velocity Filters.pptx`, slide 11 (`Highlight SHIP`, `Tag SHIP`).

- **Tint + outline:** fill `A8C4E8` at 28 % alpha, line `0F2F5C` 1.75 pt, square corners. The picture stays readable through the tint.
  ```xml
  <a:solidFill><a:srgbClr val="A8C4E8"><a:alpha val="28000"/></a:srgbClr></a:solidFill>
  <a:ln w="22225"><a:solidFill><a:srgbClr val="0F2F5C"/></a:solidFill><a:miter lim="800000"/></a:ln>
  ```
- **Tag:** one word (the part's name), navy `0F2F5C` pill (`roundRect`, `adj` 50000), white bold 12 pt Times New Roman, 0.62 × 0.21 in. It straddles the top edge near the left corner and stays clear of the figure's own labels.
- **Extent from the source,** not by eye: find the sentence or caption that fixes each edge, map picture pixels to slide EMU (`x = off + px / W × cx`), and say in the handoff which edge is inferred.
- **Outline traces the region.** Keep the border off the figure's other elements (scale bar, labels, the neighbouring part): step the outline (`custGeom`) around them instead of cutting through.
- **Order and names:** directly above the picture, below cards and text; `Highlight <X>` and `Tag <X>`.

## Variations

Same tokens as the region highlight (line colour and weight, tag pill, naming, extent from the source); only the differences are listed.

- **Outline only:** no tint; the outline and tag carry the highlight. For dense data where a tint dims the data, and as the fallback when a tint would vanish.
- **Feature pointer:** for one peak, point or curve. A tight outline (rounded box or ellipse), never a filled shape, around the feature; the tag sits beside it with a 1 pt `0F2F5C` leader line to the outline. Keep both clear of the data.
- **Repeated highlight:** one region highlight per part, each with its own tag. Regions don't overlap and share one colour (a differing colour would have to mean something).
