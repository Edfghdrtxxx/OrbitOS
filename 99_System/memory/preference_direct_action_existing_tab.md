---
name: preference_direct_action_existing_tab
description: "Directly select/do it in the app for me" means act in the user's existing browser tab
type: preference
saved_at: 2026-10-20
---
When the user asks you to **directly** select or do something in a web app they have open (for example "directly select the flashcards in the studio"), act in the user's existing tab for that app. Do not open a new background tab for it.

This overrides the `web-access` skill default of working only in tabs the agent creates.

For Prep Studio, the existing tab is the live `file:///Users/Reid%20Hu/Physics%20GRE/index.html` tab (see `project_physics_gre.md`).

**Recall card selection — prefer this:** in that tab, run `PGRE.formulaDeck().then(deck => PGRE.srs.addFormulaDaySoft(deck, ids))` through CDP eval, and read `added` / `already` / `skipped` from the result. It is the same action as the "+ today" chip. It writes today's batch and saves to `localStorage`, and it does not navigate, reload, or need the tab in front (Prep Studio `js/srs.js` `addFormulaDaySoft`, `js/store.js` `save`). So the user keeps working on whatever page the tab shows. Do not change the route or click through the Recall UI to select cards. If a card file under `content/bank/` was just edited, first reload it with a cache-busting `<script>` tag, which also leaves the page alone.
