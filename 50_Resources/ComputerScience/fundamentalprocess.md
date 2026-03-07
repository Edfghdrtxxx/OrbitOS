# Fundamental C++ and ROOT Concepts

## 1. Dynamic Memory Allocation (`new` / `delete`)

In C++, `new` dynamically allocates memory on the **heap** and returns a pointer to that memory. This allows objects to be created at runtime with a lifetime controlled by the programmer, rather than being bound by the scope of automatic (stack) variables.

```cpp
int* p = new int(42);       // allocate a single int on the heap
int* arr = new int[100];    // allocate an array of 100 ints
delete p;                   // free single object
delete[] arr;               // free array
```

### Stack vs Heap

| Aspect | Stack | Heap |
|---|---|---|
| Allocation | Automatic (compiler-managed) | Manual (`new` / `malloc`) |
| Deallocation | Automatic when scope exits | Manual (`delete` / `free`) |
| Speed | Fast (pointer bump) | Slower (allocator overhead) |
| Size | Limited (typically 1-8 MB) | Limited only by system memory |
| Fragmentation | None | Possible over time |
| Access | Local variables, function args | Via pointers |

### Why ROOT uses heap allocation

In the ROOT framework, graphical objects like `TCanvas` are typically created on the heap:

```cpp
TCanvas* c1 = new TCanvas("c1", "My Canvas", 800, 600);
```

This is because they need to persist beyond the scope where they are created -- for example, keeping a plot window open in an interactive ROOT session until the user explicitly closes it. ROOT's internal object ownership system (`gROOT`, `gDirectory`) also manages heap objects and can handle their cleanup.

In physics analysis, objects like `TH1D` (histograms for [[Energy Resolution]] or [[Particle Identification]]) and `TTree` (for storing [[DAQ]] event data) are almost always heap-allocated because they can grow to gigabytes in size and must outlive the function that creates them.

### Smart Pointers (Modern C++)

In modern C++ (C++11+), prefer smart pointers over raw `new`/`delete` to avoid memory leaks:

```cpp
#include <memory>
auto p = std::make_unique<int>(42);       // unique ownership, auto-deleted
auto sp = std::make_shared<int>(42);      // shared ownership, reference-counted
```

Note: ROOT objects with internal ownership (e.g., histograms owned by `gDirectory`) should generally **not** be wrapped in smart pointers, as double-deletion will occur.

## 2. TString (ROOT String Class)

`TString` is ROOT's string class, inheriting from `TObject`. It is defined in `$ROOTSYS/core/inc/TString.h`.

### TString vs std::string

| Feature | TString | std::string |
|---|---|---|
| ROOT I/O (serialization) | Native support via `TObject` | Requires wrapper |
| Regular expressions | Built-in (`TString::Contains`, `TRegexp`) | Requires `<regex>` (C++11) |
| Format construction | `TString::Form("x = %d", x)` | `std::to_string` or `<format>` (C++20) |
| ROOT interop | Direct use in `TTree::Branch`, `SetTitle`, etc. | Often needs `.c_str()` conversion |
| STL compatibility | Limited | Full STL integration |

### Common TString Operations

```cpp
TString s = "Hello";
s += " World";                          // concatenation
s.Contains("World");                    // true
s.ReplaceAll("World", "ROOT");          // "Hello ROOT"
TString fmt = TString::Format("E = %.2f GeV", 3.14);  // printf-style
s.Atoi();                               // convert to int
s.Atof();                               // convert to double
```

### When to Use Which

- Use `TString` when working within the ROOT ecosystem (histograms, trees, canvas titles, [[Track Reconstruction]] output labels).
- Use `std::string` for general C++ code, STL algorithms, and non-ROOT libraries.
- Convert between them: `std::string str = tstr.Data();` and `TString tstr(str.c_str());`

## 3. Standard Output (`std::cout`)

In C++, the standard output stream uses the `std::cout` object from `<iostream>`:

```cpp
#include <iostream>
std::cout << "Energy: " << 3.14 << " GeV" << std::endl;
```

### Output Formatting

```cpp
#include <iomanip>
std::cout << std::fixed << std::setprecision(3) << 3.14159;   // "3.142"
std::cout << std::scientific << 0.00123;                       // "1.230e-03"
std::cout << std::setw(10) << std::left << "Name";             // left-aligned, width 10
```

### std::cout vs printf vs ROOT Logging

| Method | Use Case |
|---|---|
| `std::cout` | General C++ output, type-safe |
| `printf` | C-style, concise formatting, widely used in ROOT macros |
| `std::format` (C++20) | Modern type-safe formatting with Python-like syntax |
| ROOT logging (`gLog`, `Info`, `Warning`, `Error`) | ROOT framework diagnostic messages |

### Common Pitfall: `std::endl` vs `"\n"`

`std::endl` flushes the buffer on every call, which is much slower in loops. Prefer `"\n"` unless you explicitly need a flush:

```cpp
// Slow in tight loops
for (int i = 0; i < 1000000; i++)
    std::cout << i << std::endl;

// Fast
for (int i = 0; i < 1000000; i++)
    std::cout << i << "\n";
```

## 4. Pointers and References

### Pointers

A pointer stores the memory address of another variable:

```cpp
int x = 10;
int* ptr = &x;    // ptr holds the address of x
*ptr = 20;        // dereference: x is now 20
```

### References

A reference is an alias for an existing variable -- it cannot be null or reseated:

```cpp
int x = 10;
int& ref = x;     // ref IS x
ref = 20;          // x is now 20
```

### When to Use Which

- **Pointer**: when you need nullable values, dynamic allocation, or pointer arithmetic.
- **Reference**: for function parameters (avoids copying), return values, and range-based for loops.

```cpp
void fill(TH1D& hist) { hist.Fill(3.14); }     // reference: cannot be null
void fill(TH1D* hist) { if(hist) hist->Fill(3.14); }  // pointer: must null-check
```

## 5. The `this` Pointer

Inside a member function, `this` is an implicit pointer to the current object:

```cpp
class Detector {
    double energy;
public:
    Detector& setEnergy(double energy) {
        this->energy = energy;   // disambiguate member from parameter
        return *this;            // enable method chaining
    }
};
```

## 6. Const Correctness

`const` prevents modification and communicates intent:

```cpp
const double PI = 3.14159265;           // compile-time constant
void analyze(const TH1D& hist);         // promise not to modify hist
double getEnergy() const;               // member function won't modify object state
const int* p = &x;                      // can't modify *p (data is const)
int* const q = &x;                      // can't modify q itself (pointer is const)
```

## Related

- [[DAQ]] - Data acquisition systems where ROOT is the primary analysis framework
- [[ADC]] / [[TDC]] - Digitizer hardware whose output is read into ROOT `TTree` branches
- [[FPGA]] / [[ASIC]] - Front-end electronics that feed data into ROOT-based pipelines
- [[Track Reconstruction]] - Analysis task heavily using ROOT histograms, trees, and `TString` labels
- [[Particle Identification]] - PID analysis built on ROOT `TH2D`, `TCutG`, and formatted output
- [[Energy Resolution]] - Detector performance metric computed and plotted in ROOT
- [[Scintillation Detector]] / [[GEM Detector]] / [[Silicon Photomultiplier]] - Detector types whose readout data is processed with these C++ fundamentals
- [[Kalman Filter]] / [[Hough Transform]] / [[RANSAC]] - Reconstruction algorithms implemented in C++ with ROOT integration
- [[Bethe-Bloch Formula]] - dE/dx calculations requiring careful memory management for large datasets
- [[LeetCode_Practice]] - Algorithm practice that reinforces these C++ fundamentals
