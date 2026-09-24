# Auto_Research document rules

- All auto-research campaign records, experimental reports, and supporting documents live strictly in `20_Project/Auto_Research/docs/` (relative [`docs/`](docs/)). Do not place experimental recordings in firstmate internal data/ or the vault project root.
- Use progressive disclosure: keep overview pages small and scannable, linking detailed findings into focused chapter files.
- Keep [`README.md`](README.md) and [`docs/README.md`](docs/README.md) indexes current whenever a document is added, moved, or updated.
- Mandatory sync: any change to an auto-research feature, campaign record, or analysis result must update its related document in `docs/`.
- Periodic audit: run [`docs/check_docs.py`](docs/check_docs.py) periodically to catch unindexed files and broken wikilinks inside `docs/`, because drift occurs even with mandatory update rules.
- Do not edit the lead's existing root files as part of a record migration unless a task explicitly names them.
