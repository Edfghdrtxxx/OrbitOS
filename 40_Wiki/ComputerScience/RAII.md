---
area:
tags: [cpp, memory-management]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# RAII

## Definition

Resource Acquisition Is Initialization (RAII) is a C++ idiom where resource management (memory, file handles, locks) is tied to [[Object Lifetime (C++)|object lifetime]] — the resource is acquired in the constructor and released in the destructor, guaranteeing cleanup even when exceptions occur.

## Key Points

- Eliminates manual resource management: no explicit `delete`, `close()`, or `unlock()` calls needed
- [[Smart Pointers (C++)]] (`std::unique_ptr`, `std::shared_ptr`) are the canonical RAII wrappers for [[Stack vs Heap (C++)|heap-allocated]] memory
- Also applies to mutexes (`std::lock_guard`), files (`std::fstream`), and any resource with acquire/release semantics
- Works because C++ guarantees destructors run for stack objects at scope exit, even during stack unwinding from exceptions
- In the [[ROOT Framework]], RAII is less prevalent due to ROOT's pre-C++11 design; ownership is often managed by `gDirectory` or `gROOT` instead

## Examples

```cpp
{
    std::lock_guard<std::mutex> lock(mtx);  // acquired here
    // critical section...
}  // lock released automatically — destructor called

auto ptr = std::make_unique<TH1F>("h", "hist", 100, 0, 1);
// no delete needed — unique_ptr destructor handles it
```

## Related Concepts

- [[Object Lifetime (C++)]]
- [[Smart Pointers (C++)]]
- [[Stack vs Heap (C++)]]

## References

- C++ Core Guidelines: R.1 "Manage resources automatically using resource handles and RAII"
