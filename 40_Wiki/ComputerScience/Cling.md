---
area:
tags: [root-framework, cpp]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# Cling

## Definition

Cling is an interactive C++ interpreter built on top of LLVM and Clang, developed at [[CERN]] as part of the [[ROOT Framework]]. It allows C++ code to be executed line-by-line or as macros (`.C` files) without a separate compile-link cycle.

## Key Points

- Successor to CINT (ROOT's original C++ interpreter); fully supports C++17
- Powers ROOT's interactive prompt — typing C++ at the `root [0]` prompt is executed by Cling
- Also underlies [[PyROOT]]'s runtime bindings via cppyy, generating Python wrappers on the fly
- Supports `.x macro.C` for running ROOT macros and `.L library.C+` for JIT-compiling and loading
- Used beyond ROOT in projects like Jupyter's C++ kernel (xeus-cling)

## Examples

```
$ root
root [0] TH1F h("h", "test", 100, 0, 1);
root [1] h.FillRandom("gaus", 10000);
root [2] h.Draw();
// All interpreted live by Cling — no compilation needed
```

## Related Concepts

- [[ROOT Framework]]
- [[PyROOT]]
- [[CERN]]

## References

- https://root.cern/cling/
