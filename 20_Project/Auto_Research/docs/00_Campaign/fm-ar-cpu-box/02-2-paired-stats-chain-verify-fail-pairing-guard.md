<!-- Verbatim source section; overview: [[../fm-ar-cpu-box]] -->
<!-- SOURCE-BODY-START -->
### 4. paired_stats — chain VERIFY-FAIL, then rerun OK
- First invocation (in chain) failed at `XA-HC:XA-Raw` pair: pairing_guard correctly refused — `data_split.file_paths` differ (`*_hc.h5` vs `*.h5`), same indices ≠ same events across families. `RN-HC:RN-Raw` refused for the same reason. **Cross-family pairing is structurally impossible** — the guard worked as designed.
<!-- SOURCE-BODY-END -->
