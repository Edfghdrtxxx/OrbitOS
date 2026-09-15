---
name: project_physics_gre
description: Prep Studio path for GRE Physics drills
type: project-pointer
saved_at: 2026-09-15
---
**Path:** `/Users/Reid Hu/Physics GRE` — local SPA *Physics GRE · Prep Studio* (`index.html`). Offline; progress in localStorage + IndexedDB. Not a tutorial site.

```bash
cd "/Users/Reid Hu/Physics GRE" && python3 -m http.server 8000
# → http://localhost:8000  (prefer over file://)
```

- Practice pool ~366 Q (preview + Kahn chapter + GR8677/9277 drills). Intact ETS/book exams only in Mock exam.
- Pages: Dashboard, Practice, History, Mistake book (SRS), Formula recall (334 cards), Study plan (`#/plan` from vault syllabus via `tools/build-plan.js`), Mock exam, Focus, Concepts, Analytics.
- Plan owner: OrbitOS `20_Project/GRE_Physics_Prep/` — do not hand-edit `js/data-plan.js`.
- Bank/PDFs: gitignored under `content/`, `20_docs/`.
