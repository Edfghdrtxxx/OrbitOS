---
type: project
status: active
area:
tags:
  - rag
  - bilibili
  - knowledge-base
gitignored: true
---
## Bilibili-RAG

Turn Bilibili favorites (interviews, lectures, courses) into a searchable, conversational knowledge base.

### Key Facts

- **What**: RAG pipeline — auto-fetch video → ASR transcription → vector search → chat QA
- **Stack**: Python, SQLite, ChromaDB, ASR engine
- **Features**: Bilibili QR login, audio-to-text, semantic retrieval, RAG-based dialogue
- **Local folder**: `20_Project/Bilibili-RAG/` (gitignored — contains venv, data, and logs)

### Why Gitignored

Contains a full Python virtualenv (`bilibili/`), runtime logs, and local data stores — too large for vault sync.
