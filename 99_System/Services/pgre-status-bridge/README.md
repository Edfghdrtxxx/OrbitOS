# Physics GRE status bridge

A dependency-free localhost bridge that persists the Physics GRE Studio's agent-facing status. It only accepts status snapshots from the studio and returns the latest snapshot; it cannot manipulate study state.

## Run and install

Run once: `python3 99_System/Services/pgre-status-bridge/bridge.py`

Install as a launch agent from the OrbitOS root: `mkdir -p "$HOME/Library/LaunchAgents" && cp 99_System/Services/pgre-status-bridge/com.orbitos.pgre-status-bridge.plist "$HOME/Library/LaunchAgents/" && launchctl bootstrap "gui/$(id -u)" "$HOME/Library/LaunchAgents/com.orbitos.pgre-status-bridge.plist"`

The service binds only to `127.0.0.1:4789`. `POST /pgre-status` atomically replaces `~/.orbitos/pgre-status.json`; `GET /pgre-status` returns that durable snapshot. An absent snapshot returns HTTP 404 with `{"error":"studio status unavailable"}`. All responses include `Access-Control-Allow-Origin: *` so the `file://` studio can publish.

Set `PGRE_STATUS_PORT` or `PGRE_STATUS_FILE` to override the defaults when running the script directly.

## Snapshot contract

The studio posts one JSON object with this shape:

```json
{
  "date": "2026-09-22",
  "streak": {
    "current": 5,
    "best": 12
  },
  "today": {
    "answered": 30,
    "correct": 24,
    "minutesStudied": 42,
    "dailyTargetMin": 60
  },
  "sessions": [
    {
      "id": "session-id",
      "mode": "timed-pack",
      "topicId": "mechanics",
      "startedAt": "2026-09-22T10:00:00.000Z",
      "endedAt": "2026-09-22T10:30:00.000Z",
      "answered": 20,
      "correct": 16
    }
  ],
  "exams": [
    {
      "id": "exam-id",
      "submittedAt": "2026-09-22T12:00:00.000Z",
      "format": "full",
      "source": "practice-test",
      "raw": 78,
      "total": 100,
      "scaledEst": 850
    }
  ],
  "formulaCards": {
    "reviewed": 18,
    "due": 7
  },
  "mistakesAdded": 4,
  "recentLog": [
    "Completed timed pack: 16/20",
    "Reviewed 18 formula cards"
  ]
}
```

- `date`: local studio date, `YYYY-MM-DD`.
- `streak.current`, `streak.best`: whole-day study streak counts.
- `today`: today's question totals and active study minutes against the configured target.
- `sessions`, `exams`: completed today only; preserve the listed fields when available and omit unavailable optional metadata.
- `formulaCards.reviewed`, `formulaCards.due`: reviews completed today and cards currently due.
- `mistakesAdded`: questions first added to the mistake book today.
- `recentLog`: newest-first human-readable activity lines; cap at 10.

Counts and minutes are non-negative numbers. Arrays may be empty. The bridge validates only that the payload is a JSON object; the studio owns this contract.
