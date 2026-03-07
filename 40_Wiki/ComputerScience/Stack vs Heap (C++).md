---
area:
tags: [cpp, memory-management]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# Stack vs Heap (C++)

## Definition

In C++, the **stack** and **heap** are two distinct memory regions. Stack memory is automatically managed — objects are destroyed when they leave scope. Heap memory is manually managed via `new` and `delete`, giving the programmer explicit control over object lifetime.

## Key Points

- **Stack**: fast allocation, automatic cleanup on scope exit, limited size — best for short-lived local variables
- **Heap**: allocated with `new`, returns a pointer, persists until explicitly freed with `delete` — required for objects that outlive their creating scope
- Memory leaks occur when heap-allocated objects are never `delete`d; modern C++ mitigates this with smart pointers (`std::unique_ptr`, `std::shared_ptr`)
- In the [[ROOT Framework]], objects like `TCanvas` are typically heap-allocated because they must persist in interactive sessions (e.g., keeping a plot window open until the user closes it)

## Examples

```cpp
// Stack allocation — destroyed automatically at end of scope
int x = 42;

// Heap allocation — persists until delete
TCanvas* c1 = new TCanvas("c1", "My Canvas", 800, 600);
// ... use c1 ...
delete c1;  // manual cleanup required
```

## Related Concepts

- [[Smart Pointers (C++)]]
- [[ROOT Framework]]
- [[Object Lifetime (C++)]]

## References

- Source: `50_Resources/ComputerScience/fundamentalprocess.docx`
