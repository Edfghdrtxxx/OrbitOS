# Evolution — /dispatch

## 2026-04-18
### Lessons
- Once `/dispatch` is invoked in a session, keep applying the dispatch workflow (delegate via sub-agents rather than handling work directly in the main context) for subsequent related requests in the same session, until the user explicitly instructs to stop using it.

## 2026-05-27
### Lessons
- Keep dispatch skill invocation parent-side: do not pass "use the dispatch skill" or equivalent routing instructions into worker prompts unless nested dispatch is explicitly requested.
