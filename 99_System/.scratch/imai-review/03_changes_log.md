# Changes Log — Nobuaki_Imai_Research_Program.md Rectification

**Date:** 2026-03-15
**Source evaluation:** `01_evaluation_b.md`
**Target file:** `D:/obsidian/OrbitOS/30_Research/Physics/Nobuaki_Imai_Research_Program.md`

---

## Priority Corrections

### 1. GT Operator Imprecision (Evaluation Finding #2)

**Location:** Section 4.1, line 124 (original)

**Before:**
```
$$\hat{O}_{GT} = g_A \sum_k \boldsymbol{\sigma}_k \boldsymbol{\tau}_k$$

where $\boldsymbol{\sigma}$ is the spin operator and $\boldsymbol{\tau}$ the isospin-lowering (or raising) operator.
```

**After:**
```
$$\hat{O}_{GT^\pm} = g_A \sum_k \boldsymbol{\sigma}_k \tau^\pm_k$$

where $\boldsymbol{\sigma}$ is the spin operator and $\tau^+$ ($\tau^-$) converts a neutron into a proton (proton into a neutron), corresponding to $\Delta T_z = -1$ ($+1$) respectively.
```

**Reason:** The full isospin vector **tau** is imprecise for a definite charge-change direction. Replaced with explicit tau-plus/minus and defined the physical meaning of each.

---

### 2. DGT Operator Sign/Direction Inconsistency (Evaluation Finding #1)

**Location:** Section 4.3, line 142 (original)

**Before:**
```
$$\hat{O}_{DGT} = \sum_{k,l} (\boldsymbol{\sigma}_k \tau^-_k)(\boldsymbol{\sigma}_l \tau^-_l)$$

where the sum runs over nucleon pairs $(k, l)$. This results in $\Delta Z = \pm 2$ (double charge change).
```

**After:**
```
$$\hat{O}_{DGT^\pm} = \sum_{k,l} (\boldsymbol{\sigma}_k \tau^\pm_k)(\boldsymbol{\sigma}_l \tau^\pm_l)$$

where the sum runs over nucleon pairs $(k, l)$. The $\tau^+$ form converts two neutrons into protons ($\Delta Z = +2$ on the target), while the $\tau^-$ form converts two protons into neutrons ($\Delta Z = -2$).
```

**Reason:** The original used only tau-minus but the example reaction (48Ca -> 48Ti) requires tau-plus (DeltaZ = +2 on target). Now both forms are defined with explicit physical meaning.

**Additional fix at Section 4.5 (reaction equation):**

**Before:**
```
$${}^{48}\text{Ca}({}^{12}\text{C}, {}^{12}\text{Be}(0^+_2))$$

at $250$ MeV/u using the RIBF facility at RIKEN.
```

**After:**
```
$${}^{48}\text{Ca}({}^{12}\text{C}, {}^{12}\text{Be}(0^+_2)) \, {}^{48}\text{Ti}$$

at $250$ MeV/u using the RIBF facility at RIKEN. In this reaction, the target undergoes $\Delta Z = +2$ (${}^{48}\text{Ca} \to {}^{48}\text{Ti}$), corresponding to the $\hat{O}_{DGT^+}$ operator (two neutrons converted to protons).
```

**Reason:** Added the final-state nucleus (48Ti) to the reaction equation and explicitly connected the reaction direction to the correct DGT operator form.

---

### 3. Resolving Power Notation Mismatch (Evaluation Finding #3)

**Location:** Section 3.4, line 104 (original)

**Before:**
```
...performs high-resolution missing-mass spectroscopy with a resolving power of:

$$\frac{\Delta p}{p} = \frac{1}{15000}$$
```

**After:**
```
...performs high-resolution missing-mass spectroscopy with a momentum resolution of:

$$\frac{\Delta p}{p} = \frac{1}{15000}$$

(equivalently, a resolving power $p/\Delta p = 15000$).
```

**Reason:** "Resolving power" is conventionally p/Deltap (the large number), while Deltap/p is "momentum resolution." The value was correct but the terminology was inverted. Now both conventions are stated for clarity.

---

## Additional Fixes

### 4. Jiatai Li Status (Evaluation Finding #7)

**Location:** Section 2, member table, line 59 (original)

**Before:**
```
| D2 | Jiatai Li | RIKEN JRA fellow |
```

**After:**
```
| D3 (thesis completed Jan 2026) | Jiatai Li | RIKEN JRA fellow |
```

**Reason:** Line 292 states Li completed his PhD thesis in January 2026, making "D2" stale and potentially misleading if referenced in a meeting with Imai.

---

### 5. Cross-Document Links (Evaluation Finding — Completeness Gaps #1 and #2)

**Location:** Section 1, after the opening paragraph (line 16 original)

**Before:** (no companion links)

**After:** Added line:
```
**See also:** [[Prof_Nobuaki_Imai|Professor Profile]] | [[Nobuaki_Imai_Research_Landscape.canvas|Research Landscape (canvas)]]
```

**Reason:** Both companion files exist in the vault but were not linked from the note. Verified targets:
- `D:/obsidian/OrbitOS/20_Project/Japan_Itinerary/Professors/Prof_Nobuaki_Imai.md` — exists
- `D:/obsidian/OrbitOS/30_Research/Physics/Nobuaki_Imai_Research_Landscape.canvas` — exists

---

## Items NOT Changed (per scope constraints)

- **9 broken wikilinks** (KEK, Superheavy Element, B(E2), Weak Interaction, Strong Interaction, Majorana Fermion, Lepton Number, Internal Pair Creation, CVD): Left as-is. These serve as intentional placeholders for future wiki notes; whether to create stubs is a user preference decision.
- **Auerbach 1989 citation:** The evaluation noted confidence should be "medium-high" rather than "high," but this is an evaluation metadata concern — the note text itself correctly attributes the prediction without overclaiming.
- **GRAPE, TiNA, PANDORA descriptions:** Evaluation suggested expanding these but flagged it as "actionable improvement," not a correction. Expanding would be scope expansion.
- **DONUTS vs NUSPEQ comparison:** Same — improvement suggestion, not error correction.
- **No "Research Fit" section added** — explicitly prohibited in task instructions as scope expansion.
- **No document restructuring performed.**

---

### 6. Jiatai Li Status — Section 8 Consistency Fix (Review 03 Finding)

**Location:** Section 8, line 296

**Before:**
```
Jiatai Li (D2 student, RIKEN JRA)
```

**After:**
```
Jiatai Li (D3 student, RIKEN JRA)
```

**Reason:** The member table (Section 2, line 61) was already updated to "D3" in change #4, but this second reference in Section 8 was missed. Updated to "D3" for consistency.
