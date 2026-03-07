---
area:
tags: [root-framework, hep, data-analysis]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# ROOT Framework

## Definition

ROOT is an open-source C++ framework developed by [[CERN]] for large-scale data processing, statistical analysis, visualization, and storage in high-energy physics (HEP). It provides a complete ecosystem including an interactive C++ interpreter ([[Cling]], successor to the legacy CINT), histogramming, fitting, I/O via `.root` files, and a GUI toolkit.

## Key Points

- All major classes inherit from [[TObject (ROOT)]], enabling reflection, serialization, and ownership management
- `.root` files use a columnar storage format optimized for TB-scale datasets; accessed via `TFile` and `TTree`
- Includes an interactive interpreter ([[Cling]]) that allows running C++ as a scripting language — macros are executed with `.x macro.C`
- Heap allocation with `new` is idiomatic in ROOT because objects often need to persist across interactive commands (see [[Stack vs Heap (C++)]])
- Integrates with Python via [[PyROOT]], allowing seamless mixing of C++ ROOT objects in Python scripts

## Examples

```cpp
// Open a file, read a tree, draw a histogram
TFile* f = new TFile("data.root");
TTree* tree = (TTree*)f->Get("events");
tree->Draw("energy >> h1(100, 0, 1000)");
```

## Related Concepts

- [[TObject (ROOT)]]
- [[TString (ROOT)]]
- [[Stack vs Heap (C++)]]
- [[DAQ]]
- [[Particle Identification]]

## References

- https://root.cern/
