---
area:
tags: [cpp, memory-management]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# Smart Pointers (C++)

## Definition

Smart pointers are C++ standard library types (`<memory>`) that wrap raw pointers and automatically manage heap-allocated object lifetimes using [[RAII]], eliminating the need for manual `delete` and preventing memory leaks.

## Key Points

- `std::unique_ptr<T>` — sole ownership, zero overhead, non-copyable, movable; the default choice for [[Stack vs Heap (C++)]] managed allocation
- `std::shared_ptr<T>` — reference-counted shared ownership; the last owner triggers destruction. Slightly heavier due to the control block
- `std::weak_ptr<T>` — non-owning observer of a `shared_ptr`; breaks circular references
- Prefer `std::make_unique` / `std::make_shared` over raw `new` for exception safety and clarity
- In the [[ROOT Framework]], smart pointers are less common because ROOT's ownership model predates C++11; raw `new` + ROOT's internal garbage collection is still idiomatic

## Examples

```cpp
// unique_ptr — automatic cleanup, no delete needed
auto hist = std::make_unique<TH1F>("h1", "Energy", 100, 0, 1000);

// shared_ptr — multiple owners
auto config = std::make_shared<Config>();
auto worker1 = Worker(config);  // shares ownership
auto worker2 = Worker(config);  // shares ownership
// config freed when both workers are destroyed
```

## Related Concepts

- [[Stack vs Heap (C++)]]
- [[Object Lifetime (C++)]]
- [[ROOT Framework]]

## References

- C++ Standard Library `<memory>` header (C++11+)
