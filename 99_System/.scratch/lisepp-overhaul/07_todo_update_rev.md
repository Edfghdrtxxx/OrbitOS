## TODO.md revision (07) — applied fixes

Two corrections applied per review_07.md findings:

1. **charge_double description (line 35):** Changed "returns 0.0 for all charge states" to "returns extremely small nonzero values (~1e-50) that are effectively zero / numerical underflow for all charge states". Only `chargeSchiwietzGas()` returns literal 0.0.

2. **Encoding cascade (line 57):** Changed "cp1252 → latin-1" to "utf-8 → cp1252 → latin-1" to reflect the actual fallback order in `lpp_parser.py`.

No other changes made. File: `D:\Something\research\LISE++\lisepp-mcp\TODO.md`.
