---
name: project_physics_gre
description: Prep Studio path for GRE Physics drills
type: project-pointer
saved_at: 2026-09-15
---
**Path:** `/Users/Reid Hu/Physics GRE` — local SPA *Physics GRE · Prep Studio* (`index.html`). Offline; progress in localStorage + IndexedDB. Not a tutorial site.

**Progress is per origin** (`file://`, `http://localhost:8000`, `http://127.0.0.1:8000` are different stores). Opening the wrong origin looks like a blank new Studio (no formulas / mistake book).

- **Rich store on this machine (2026-09-15):** `file:///Users/Reid Hu/Physics GRE/index.html` — ~70KB+ `pgre-state-v1` (cards/mistakes/xp). `http://localhost:8000` may be a separate empty profile.
- **Launch timed packs:** `/practice-physics-gre-set` only. Reuse the live richest Prep tab; same-origin full reload if pack APIs missing. Never assume localhost.
- Optional http server (only if a rich tab already uses that origin):  
  `cd "/Users/Reid Hu/Physics GRE" && python3 -m http.server 8000`
- Practice pool ~366 Q (preview + Kahn chapter + GR8677/GR9277 drills). Intact ETS/book exams only in Mock exam.
- Pages: Dashboard, Practice, History, Mistake book (SRS), Formula recall (334 cards), Study plan (`#/plan` from vault syllabus via `tools/build-plan.js`), Mock exam, Focus, Concepts, Analytics.
- Plan owner: OrbitOS `20_Project/GRE_Physics_Prep/` — do not hand-edit `js/data-plan.js`.
- Bank/PDFs: gitignored under `content/`, `20_docs/`.
