---
area:
tags: [cpp]
created: 2026-03-07
last_reviewed:
next_review: 2026-03-07
review_interval: 0
---
# std::cout (C++)

## Definition

`std::cout` is the standard character output stream in C++, defined in `<iostream>`. It writes formatted text to the standard output (typically the terminal) using the insertion operator `<<`.

## Key Points

- Part of the C++ IOStream library; buffered by default for performance
- Chaining: multiple `<<` operators can be chained in a single statement (`std::cout << "x = " << x << std::endl;`)
- `std::endl` flushes the buffer and inserts a newline; `'\n'` inserts a newline without flushing (faster in loops)
- In the [[ROOT Framework]], `std::cout` is available but ROOT also provides the global `Printf()` function and `Form()` for formatted output
- For file output, the equivalent is `std::ofstream`; for string building, `std::ostringstream`

## Examples

```cpp
#include <iostream>

int energy = 150;
std::cout << "Measured energy: " << energy << " MeV" << std::endl;

// Avoid endl in tight loops — use '\n' instead
for (int i = 0; i < 1000; ++i)
    std::cout << i << '\n';
```

## Related Concepts

- [[ROOT Framework]]
- [[TString (ROOT)]]

## References

- Source: `50_Resources/ComputerScience/fundamentalprocess.docx`
- C++ Standard Library `<iostream>`
