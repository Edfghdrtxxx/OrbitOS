---
area:
tags: [root-framework, cpp]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# TObject (ROOT)

## Definition

`TObject` is the base class of nearly all classes in the [[ROOT Framework]]. It provides a common interface for I/O serialization, introspection (RTTI), drawing, and ownership registration, making ROOT's object ecosystem uniform and interoperable.

## Key Points

- Provides `Write()` / `Read()` for transparent serialization to `.root` files via `TFile`
- `Draw()` and `Paint()` enable any `TObject`-derived class to render itself on a `TCanvas`
- `GetName()` / `GetTitle()` give every object a human-readable identity used in directory lookups (`gDirectory->Get("name")`)
- Classes like `TH1`, `TTree`, `TCanvas`, and `TGraph` all inherit from `TObject`; note that [[TString (ROOT)]] does **not** — use `TObjString` when a `TObject*` wrapper is needed
- Ownership: objects can register themselves with `gROOT` or `gDirectory`, which affects [[Object Lifetime (C++)]] — ROOT may `delete` them on file close or session end

## Examples

```cpp
TH1F* h = new TH1F("energy", "Energy Distribution", 100, 0, 500);
h->GetName();   // "energy"  — inherited from TObject
h->Write();     // serialize to current TFile — inherited from TObject

// Retrieve later
TH1F* h2 = (TH1F*)gDirectory->Get("energy");
```

## Related Concepts

- [[ROOT Framework]]
- [[TString (ROOT)]]
- [[Object Lifetime (C++)]]
- [[Stack vs Heap (C++)]]

## References

- ROOT docs: `$ROOTSYS/core/base/inc/TObject.h`
