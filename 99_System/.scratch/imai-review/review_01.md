# Audit of 01_evaluation.md

**Verdict:** needs-revision

**Scope covered:** All four evaluation dimensions (factual accuracy, completeness, formatting/wikilinks, strategic usefulness), plus cross-file consistency claims. Verified all wikilink existence claims, cross-checked Prof profile and daily note references, and audited physics content assertions.

---

## Findings

### 1. False Positive — 2023 PTEP Paper "Factual Error" in Prof Profile (Evaluation lines 40, 179, 207)

The evaluator's most prominent finding — that `Prof_Nobuaki_Imai.md` line 29 contains a "factual error" attributing a 2023 paper to the ALICE TPC — is built on flawed reasoning. The evaluator states: "Checking the DOI (10.1093/ptep/ptad038), the actual 2023 PTEP paper by Iwamoto, Ota, Imai is about the DG-M-THGEM."

**Problem:** The evaluator checked the DOI from the *research program note* (`ptad038`) and applied it to the *Prof profile*, but the Prof profile links to a **completely different paper**: `https://academic.oup.com/ptep/article/2023/8/083H01/7211926`. These are two separate 2023 PTEP publications:

- `ptad038` = Iwamoto, Ota, Imai et al. — DG-M-THGEM for active-target TPC at CNS
- `083H01` = "Performance of prototype dual gain large effective gain gas electron multiplier for the ALICE TPC upgrade" (the same paper listed under Prof. Taku Gunji at `D:/obsidian/OrbitOS/20_Project/Japan_Itinerary/Professors/Prof_Taku_Gunji.md` line 27, and also in archived `Information of Hidetoshi Yamaguchi.md` line 50)

The `083H01` footnote appears in three professor profiles verbatim — strong evidence of a copy-paste error during initial profile creation. The Prof profile may indeed contain an error (wrong paper attributed to Imai), but the evaluator's *reasoning* is wrong: they never checked the Prof profile's own link. Whether Imai co-authored the ALICE paper (plausible, given large-collaboration authorship) is unverifiable from vault data alone. The evaluator should have stated this uncertainty rather than confidently asserting "the research program note is correct; the Prof profile has an error."

**Impact:** This undermines Actionable Improvement #2 (evaluation line 207) — the recommended fix may be wrong if Imai is genuinely a co-author on both papers.

---

### 2. Missed Issue — DGT Operator / Reaction Direction Inconsistency (Note lines 142–156)

The note defines the DGT operator at line 142 with $\tau^-$ (proton-to-neutron, $\Delta Z = -2$ on the target):

$$\hat{O}_{DGT} = \sum_{k,l} (\boldsymbol{\sigma}_k \tau^-_k)(\boldsymbol{\sigma}_l \tau^-_l)$$

But then states (line 144) that DGT produces "$\Delta Z = \pm 2$ (double charge change)" — using $\pm$ despite writing only the $\tau^-$ form. More critically, the specific reaction at line 156:

$${}^{48}\text{Ca}({}^{12}\text{C}, {}^{12}\text{Be}(0^+_2))$$

has ${}^{48}\text{Ca}$ gaining two protons to become ${}^{48}\text{Ti}$ ($\Delta Z = +2$ on the target), which requires the $\tau^+$ operator, contradicting the $\tau^-$ form written on line 142. The evaluator marked the DCX reaction details as "High confidence" and "Correct" without catching this sign inconsistency between the operator definition and the example reaction.

**Impact:** A physics-literate reader (e.g., Imai himself) would notice this. For a note intended as preparation material for professor meetings, this is a meaningful error.

---

### 3. Missed Issue — Imprecise GT Operator Definition (Note line 124)

The GT operator is written as:

$$\hat{O}_{GT} = g_A \sum_k \boldsymbol{\sigma}_k \boldsymbol{\tau}_k$$

Using the full isospin vector $\boldsymbol{\tau}_k$ is imprecise. The standard GT operator for a definite charge-change direction uses $\tau^+$ or $\tau^-$, not the full isospin vector. The note partially corrects itself at line 130 with "$\Delta T_z = \pm 1$" and at line 142 by using $\tau^-$, but the formal operator definition is sloppy. The evaluator accepted this as "standard textbook physics" and "Correct" without noting the imprecision.

**Impact:** Minor for a review note, but relevant given the note's goal of demonstrating understanding to a nuclear physicist.

---

### 4. False Positive — `[[Quadrupole Magnet]]` Listed as Existing Wikilink (Evaluation line 111)

The evaluator lists `[[Quadrupole Magnet]]` under "Existing (working) wikilinks" for the note and states it "exists (referenced indirectly from OEDO note)." However, `[[Quadrupole Magnet]]` does not appear anywhere in `Nobuaki_Imai_Research_Program.md`. The evaluator inflated the wikilink count by including a link that exists in a *different* note (the OEDO wiki page), not in the document under review.

**Impact:** Minor — affects the reported wikilink statistics but not the broken-link findings.

---

### 5. Missed Issue — Canvas File Not Linked from the Note (Note + Evaluation line 63)

The evaluator at line 63 praises "companion materials" including `Nobuaki_Imai_Research_Landscape.canvas` but does not flag that the research program note itself contains **no link or reference** to the canvas file. A grep of the note for "canvas" and "Landscape" returns no matches. The canvas exists at `D:/obsidian/OrbitOS/30_Research/Physics/Nobuaki_Imai_Research_Landscape.canvas`, but the note doesn't reference it — making the "companion" relationship invisible to a reader navigating from the note.

**Impact:** The evaluator should have flagged this under formatting/completeness as a missing link.

---

### 6. Factual Confidence Issue — Auerbach, Zamick & Zheng 1989 (Evaluation line 20)

The evaluator marks the attribution of the DGT prediction to "Auerbach, Zamick & Zheng (1989)" as "Correct attribution. High confidence." The note at line 361 provides a DOI: `10.1016/0003-4916(89)90095-3`, which points to *Annals of Physics* 192, 77 (1989). While the evaluator says "High confidence," the actual verification was presumably based on checking the DOI link. The evaluator should have disclosed whether they actually verified the DOI resolves to a paper by those authors on DGT prediction, or whether they are asserting confidence based on the plausibility of the citation. Given that this is an audit of an evaluation, the distinction matters: the evaluator's role is to flag what is and isn't independently verifiable from vault data.

**Impact:** Low — the citation is likely correct, but the evaluation should distinguish between "verified" and "consistent with known physics."

---

### 7. Missed Issue — Resolving Power Notation (Note line 104–106)

The note expresses SHARAQ resolving power as:

$$\frac{\Delta p}{p} = \frac{1}{15000}$$

Resolving power is conventionally expressed as $p/\Delta p$ (the large number), not $\Delta p/p$ (the small number). The note writes the momentum *resolution* ($\Delta p/p$), not the resolving *power* ($p/\Delta p$), but labels it as "resolving power" in the text (line 104). The evaluator confirmed this as "Consistent with CNS published specifications. High confidence" without noting the notation inconsistency. The *value* is correct but the terminology/notation pairing is inverted.

**Impact:** Minor, but a physicist reading this would notice the conventional mismatch.

---

### 8. Completeness of Recommendations — Scope Issues

The evaluator's recommendations are mostly actionable, but several have scope problems:

- **Recommendation #8** (evaluation line 81, "comparison with competing facilities"): Asking a student preparing for a meeting with Imai to write a comparison of OEDO-SHARAQ with ISOLDE, ReA, HIE-ISOLDE, and ISAC is disproportionate in scope. These facilities serve different physics programs (ISOL vs. in-flight), and a meaningful comparison would require significant effort with limited strategic return for the immediate goal (professor meeting prep).

- **Recommendation #9** (evaluation line 83, "funding landscape"): Asking a prospective student to research JSPS Kakenhi grant structures is out of scope for a research program comprehension note. Funding details are better explored after joining the group.

- **Recommendation #1** (evaluation line 206, "fix 9 broken wikilinks"): The recommendation to "create the wiki notes or remove the links" presents a false binary. Leaving broken wikilinks is standard Obsidian practice for notes the user intends to create later — they serve as visible to-do markers. The evaluator should have asked whether the user treats broken wikilinks as intentional placeholders before recommending removal.

---

### 9. Missed Issue — Jiatai Li Inconsistency is Worse Than Stated (Evaluation line 34)

The evaluator correctly flags the D2/thesis-completion inconsistency but undercharacterizes it as "minor." If Jiatai Li completed his PhD thesis in January 2026 (line 292), calling him "D2" in the member table (line 59) labeled "as of early 2026" is not just a "minor internal inconsistency" — it means the member table is outdated and potentially misleading for a student trying to understand the current group composition. The user might reference this in a meeting and demonstrate stale information to Imai.

**Impact:** Medium — directly relevant to the note's strategic purpose (professor meeting prep).

---

### 10. Missed Issue — Note Does Not Link to Prof_Nobuaki_Imai.md

The research program note at `30_Research/Physics/` has no wikilink or reference to the professor profile at `20_Project/Japan_Itinerary/Professors/Prof_Nobuaki_Imai.md`. These are clearly companion documents about the same person, and bidirectional linking is a vault convention. The evaluator checked cross-file consistency (Section 5) but did not flag this missing link.

**Impact:** Low but easy to fix — a `[[Prof_Nobuaki_Imai|Professor Profile]]` link in the overview section would connect the two notes.
