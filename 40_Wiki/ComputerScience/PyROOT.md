---
area:
tags: [root-framework, python]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# PyROOT

## Definition

PyROOT is the Python–C++ bindings layer of the [[ROOT Framework]], allowing users to call any ROOT C++ class directly from Python. It is powered by [[Cling]] and cppyy, providing automatic, runtime-generated bindings without manual wrapper code.

## Key Points

- All ROOT classes ([[TObject (ROOT)|TObject]], `TH1`, `TTree`, `TCanvas`, [[TString (ROOT)|TString]]) are accessible as Python objects with natural syntax
- Supports NumPy interoperability — histograms and arrays can be converted back and forth efficiently
- Preferred for quick interactive analysis and prototyping; C++ macros remain faster for heavy batch processing
- Integrated into Jupyter notebooks via the `ROOT` kernel, enabling inline plots
- Available automatically with any standard ROOT installation (ROOT 6+)

## Examples

```python
import ROOT

f = ROOT.TFile("data.root")
tree = f.Get("events")
h = ROOT.TH1F("energy", "Energy;E [MeV];Counts", 100, 0, 1000)
tree.Draw("energy >> energy")
h.Draw()
```

## Related Concepts

- [[ROOT Framework]]
- [[Cling]]
- [[TObject (ROOT)]]
- [[Python Virtual Environments]]

## References

- ROOT docs: PyROOT manual
