---
name: preference_lieflat_charts_html_charts
description: Chart requests for HTML pages or PPT decks use the lieflat-charts skill; PPT gets an animated image of the HTML chart
type: preference
---

**Trigger:** a chart, graph, plot, or data visualization request whose output goes into an HTML page or a PPT deck, or the name `lieflat-charts`.

**Rule:** Build the chart with the `lieflat-charts` skill at `.agents/skills/lieflat-charts/SKILL.md`. The output is a single-file animated HTML chart that drops into HTML slides as is. For a PPT deck, have the agent convert the animated chart into an animated image and place that image in the deck.

**Constraints:**
- Keep the skill's Chinese text as written; do not translate it.
- Use the default light cards. The skill has dark cards (`.card.dark`), which `preference_visualization_light_theme.md` rules out unless the user asks for one.
- The skill is PolyForm Noncommercial 1.0.0 (`LICENSE`). Do not use it for commercial distribution.
- Each delivery ends with an attribution suggestion for the developer. Keep it when the chart is published outside the vault.
