---
area:
tags: [cpp, memory-management]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# Object Lifetime (C++)

## Definition

Object lifetime in C++ is the span from construction (memory allocation + constructor call) to destruction (destructor call + memory deallocation). The lifetime rules differ by storage duration: automatic (stack), dynamic (heap), static, and thread-local.

## Key Points

- **Automatic** (stack): lifetime tied to enclosing scope `{}`; destructor called at scope exit in reverse construction order (see [[Stack vs Heap (C++)]])
- **Dynamic** (heap): begins at `new`, ends at `delete`; if neither `delete` nor a [[Smart Pointers (C++)]] is used, the object leaks
- **Static**: constructed before `main()` (or on first use for local statics), destroyed after `main()` returns — beware the "static initialization order fiasco"
- [[RAII]] (Resource Acquisition Is Initialization) ties resource management to object lifetime — acquiring in the constructor and releasing in the destructor
- In the [[ROOT Framework]], [[TObject (ROOT)|TObject]]-derived objects can register with `gROOT` or `gDirectory`, which may take ownership and call `delete` on your behalf

## Examples

```cpp
{
    TH1F h("h", "local", 10, 0, 1);  // automatic — destroyed at }
    TH1F* hp = new TH1F("hp", "dynamic", 10, 0, 1);  // dynamic — leaks without delete
    delete hp;  // explicit end of lifetime
}  // h destroyed here automatically
```

## Related Concepts

- [[Stack vs Heap (C++)]]
- [[Smart Pointers (C++)]]
- [[ROOT Framework]]
- [[TObject (ROOT)]]

## References

- C++ Standard [basic.life]
