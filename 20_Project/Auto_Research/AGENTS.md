# Auto_Research document rules

- All auto-research campaign records and supporting documents live in [`docs/`](docs/).
- Use progressive disclosure: keep overview pages small, and link detailed findings into focused chapter files.
- Keep [`README.md`](README.md) and [`docs/README.md`](docs/README.md) indexes current whenever a document is added or moved.
- Any change to an auto-research feature, campaign record, or analysis result must update its related document in `docs/`.
- Run [`docs/check_docs.py`](docs/check_docs.py) periodically to find files missing from the docs index and broken wikilinks inside `docs/`.
- Do not edit the lead's existing root files as part of a record migration unless a task explicitly names them.
