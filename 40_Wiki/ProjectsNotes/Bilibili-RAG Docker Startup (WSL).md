---
last_reviewed:
next_review: 2026-03-03
review_interval: 0
tags: [no-review]
---

Quick steps to start the Dockerized stack for `Bilibili-RAG` on WSL.

## Start

```bash
cd /mnt/d/obsidian/OrbitOS/20_Project/Bilibili-RAG/bilibili-rag
./start.sh
```

## Verify

- Frontend: `http://localhost:3000`
- Backend docs: `http://localhost:8000/docs`

## Stop

```bash
cd /mnt/d/obsidian/OrbitOS/20_Project/Bilibili-RAG/bilibili-rag
docker compose down
```

If Docker socket permissions require it, use:

```bash
sudo docker compose down
```

## Notes

- If `.env` is missing, `./start.sh` copies `.env.example` and reminds you to edit API keys.
- If you changed `NEXT_PUBLIC_API_URL`, rebuild the frontend:

```bash
docker compose build frontend
docker compose up -d
```
