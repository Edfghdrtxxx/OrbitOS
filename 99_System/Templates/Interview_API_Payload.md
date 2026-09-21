# Interview: {{TOPIC}}

## Why this interview
{{WHY — irreducible decision; what parent cannot discover alone}}

## Grounded current state
{{FACTS — paths, existing patterns, constraints already checked}}

## Options
### Q1 — {{QUESTION}}
- **A.** …
- **B.** …
Stakes: …
Recommended (if any): … — mark, do not hard-sell.

<!-- For /reflect findings interviews, replace Options with Findings below (or keep both). -->

## Findings (reflect / triage)
Each row needs **Fix / Leave**. No batch cap.

| ID | Issue | Location | Consequence | Suggested default (optional) |
|----|-------|----------|-------------|------------------------------|
| F-01 | | | | fix / leave / — |

## Glossary
| Term | Plain meaning |
|------|----------------|
| | |

## Constraints
- Do not implement during interview unless payload says otherwise.
- Parent applies every **Fix** immediately after dispositions return.
- {{OTHER}}

## Desired decision shape

### Decision interview (default)
```yaml
verdict: …
decisions: {}
raw_feedback: …
next_actions: []
```

### Findings interview (reflect)
```yaml
dispositions:
  F-01: fix | leave
notes: {}
raw_feedback: …
status: ok | failed_lavish | abandoned
```

Parent may pass a stricter `outputSchema` on the task item; that wins. Prefer a real JSON Schema object — never a prose placeholder.
