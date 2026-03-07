---
area:
tags: [root-framework, cpp]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# TString (ROOT)

## Definition

`TString` is the string class in the [[ROOT Framework]] (CERN's high-energy physics analysis framework), inheriting from `TObject`. Located at `$ROOTSYS/core/inc/TString.h`, it provides string handling optimized for physics experiment workflows compared to `std::string`.

## Key Points

- Inherits from `TObject`, so it integrates with ROOT's I/O, streaming, and reflection systems (e.g., can be written to `.root` files directly)
- Offers convenience methods tailored to HEP analysis patterns (file path manipulation, format strings, regex)
- Interoperable with `std::string` via `.Data()` (returns `const char*`) and constructors accepting `std::string`
- Prefer `std::string` in pure C++ code; use `TString` when interfacing with ROOT APIs that expect it

## Examples

```cpp
TString name = "histogram_energy";
name += "_v2";                  // concatenation
TString path = Form("output/%s.root", name.Data());  // printf-style formatting
```

## Related Concepts

- [[ROOT Framework]]
- [[TObject (ROOT)]]
- [[Stack vs Heap (C++)]]

## References

- Source: `50_Resources/ComputerScience/fundamentalprocess.docx`
- ROOT docs: `$ROOTSYS/core/inc/TString.h`
