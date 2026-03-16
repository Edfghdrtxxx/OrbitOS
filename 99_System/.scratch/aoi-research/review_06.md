needs-revision

## Findings

### 1. Structural Parity with Imai File

**1a. Section count and depth — PASS (with notes)**
The Aoi file has 9 numbered sections + References, comparable to Imai's 8 sections + References. Both use `##` for top-level, `###` for sub, `####` for sub-sub. This is acceptable. The Aoi file is longer (~577 lines vs Imai's ~408 lines), but that reflects the broader research portfolio.

**1b. References section — PASS**
Both "Local Vault Links" and "Online Sources" sub-sections are present. The Aoi file has substantially more vault links (~60 vs Imai's ~40) and grouped online sources, which is fine.

**1c. Heading consistency — MINOR ISSUE**
The Imai file uses purely descriptive headings without numbering (e.g., `## 2. DONUTS Group`, `## 3. OEDO-SHARAQ System`). The Aoi file follows the same convention. No issue here.

---

### 2. Formatting Conventions

**2a. Frontmatter — PASS**
Line 1-11: `type: research`, `status: active`, `tags` (list), `created: 2026-03-16`. No empty line after closing `---` (line 11 immediately followed by `# Prof. Nori Aoi...` on line 12). Correct.

**2b. Feynman callouts — PASS**
Six Feynman callouts total (lines 18, 98, 153, 244, 320, 359). All use `> [!Feynman]-` syntax. All have Q&A dialog format. Content is genuinely explanatory, not just restating definitions. Well done.

**2c. LaTeX math — PASS**
Inline `$...$` and display `$$...$$` used correctly throughout. Isotope notation uses `${}^{A}\text{X}$` consistently.

**2d. Tables — PASS**
Properly formatted markdown tables throughout (DALI2 specs, leadership history, members, systematic deformation, halo results, publications, KAKEN grants).

**2e. Wikilinks — see Section 5 below**

**2f. Bold for first introduction — PASS**
Key terms are bolded on first introduction: **NUSPEQ**, **DALI2**, **HiCARI**, **GRAPE**, **CAT-M**, **SUNFLOWER**, etc.

---

### 3. Content Accuracy

**3a. POTENTIAL ISSUE — Publication stats mixing sources**
- **Draft line 36:** `His publication record spans **~284 publications** (INSPIRE-HEP) with **10,600+ citations** (ResearchGate)`
- The source `01_biography.md` (line 98-104) reports ResearchGate lists **~464 research works** with **~10,626 citations**. INSPIRE lists **284 papers** (from `05_publications.md` line 14).
- The draft combines the INSPIRE paper count (284) with the ResearchGate citation count (10,626). These metrics come from different databases with different paper counts. The 10,626 citations correspond to the 464 ResearchGate works, not the 284 INSPIRE papers. This is misleading. Either use all-INSPIRE or all-ResearchGate figures, or explicitly note the discrepancy.
- **Action:** Reconcile the numbers or clearly attribute each figure to its source database.

**3b. POTENTIAL ISSUE — Career trajectory: "Vice Director" of RCNP**
- **Draft line 33:** `**Professor** — [[RCNP|Osaka University RCNP]] (2011–2025); served as Vice Director`
- The "Vice Director" claim appears in `04_experiments.md` line 5 only, stated without a cited source. It does NOT appear in `01_biography.md` (the most detailed career source, which lists all positions from researchmap/KAKEN). None of the other source files corroborate this claim.
- **Action:** Flag as unverified or remove. The claim may be true, but it is not supported by the primary biographical source.

**3c. POTENTIAL ISSUE — N=16 discovery attribution**
- **Draft lines 230-234:** `N. Aoi et al., *Phys. Rev. Lett.* (2000)` — implies Aoi is first author.
- Source `04_experiments.md` (lines 178-184) describes this as a PRL 2000 paper but does **not** specify "N. Aoi et al." as the authorship. The description says "First observation of 31F; evidence for particle instability of 24,25N, 27,28O, 30F" — which closely matches the PLB 1999 paper (Sakurai et al., 171 citations, from `05_publications.md` line 37). Meanwhile, the 05_publications.md catalog — which comprehensively lists first-author papers — does NOT include any PRL 2000 paper by Aoi as first author. The PubMed ID 10990977 (from the source) does not appear in the publications catalog either.
- It is possible there is a separate PRL 2000 paper by Aoi on the N=16 topic, but **first authorship is not confirmed by any source file**. The draft's "N. Aoi et al." attribution is unsupported.
- **Action:** Either verify the PRL 2000 paper's authorship via the PubMed link, or change to a neutral attribution (e.g., "Aoi et al." without implying first authorship, or use the actual first author's name).

**3d. POTENTIAL ISSUE — ${}^{11}\text{Be}$ halo table: spectroscopic factor claim**
- **Draft line 330 (halo table):** `$S = 0.72 \pm 0.04$` for the 11Be Coulomb dissociation at 72 MeV/u.
- Source `03_physics_topics.md` line 338 confirms: "extracting spectroscopic factor for halo configuration: S = 0.72 +/- 0.04."
- This is sourced. PASS.

**3e. POTENTIAL ISSUE — ${}^{32}\text{Ne}$ citation count**
- **Draft line 183:** `96 citations`
- Source `05_publications.md` line 44: `96` citations for 32Ne PRL paper.
- Consistent. PASS.

**3f. MINOR ISSUE — ${}^{16}\text{C}$ B(E2) values: two different values presented**
- **Draft line 297:** `$B(E2; 2^+ \to 0^+) = 0.63 \, e^2\text{fm}^4 = 0.26$ W.u.` — attributed to Imai et al. PRL 2004.
- **Draft line 303:** `$B(E2; 2^+ \to 0^+) = 0.28 \pm 0.06$ W.u.` — attributed to Ong et al. PRC 2006.
- These are from two different papers and represent different measurements (lifetime method vs. proton scattering). The values are indeed different (0.26 W.u. vs 0.28 W.u.), which is physically consistent within uncertainties. However, a reader might be confused about why two different B(E2) values are given for the same transition. A brief note explaining they come from different methods would help.
- **Action:** Add a parenthetical clarifying the two measurements use different techniques, or note consistency within uncertainties.

**3g. PASS — Key quantitative values verified against sources**
Spot-checked and confirmed against source files:
- 34Mg: 660(10) keV, 1460(20) keV, E(4+)/E(2+) ~ 3.2 — matches `03_physics_topics.md` lines 40-41
- 32Ne: 722(9) keV — matches `03_physics_topics.md` line 34
- 34,36,38Mg: 3.14(5), 3.07(5), 3.07(5) — matches `03_physics_topics.md` line 81
- 42Si: 742(8), 2173(14), E(4+)/E(2+) = 2.93(5) — matches `03_physics_topics.md` lines 104-106
- 54Ca: 347 citations, Nature 502 207 2013 — matches `05_publications.md` line 30
- 16C Mn/Mp = 7.6 +/- 1.7 — matches `03_physics_topics.md` line 156
- 40Ca rho^2 values — matches `03_physics_topics.md` lines 224-226
- 24Mg rho^2 = 380(70) — matches `03_physics_topics.md` line 233
- 11Li B(E1) = 1.42(18) — matches `03_physics_topics.md` line 340
- DALI2 specs (186 detectors, ~6 deg, ~10%, ~20%) — matches `04_experiments.md` lines 59-61
- CAT-M specs (280x310 mm^2, 1.2 mm thick GEM, >10^5 Hz) — matches `02_nuspeq_group.md` lines 67-70

---

### 4. Content Completeness

**4a. SIGNIFICANT OMISSION — Topic 10: Neutron-rich nuclei beyond 132Sn (136Sn, 132Cd)**
- Source `03_physics_topics.md` (lines 298-313) has a full section on spectroscopy of 136Sn and 132Cd — nuclei beyond the doubly-magic 132Sn. Aoi is listed as 2nd author. The seniority scheme result for 136Sn is a notable finding.
- This topic does not appear anywhere in the draft.
- **Action:** Consider adding a sub-section or at minimum a mention in the shell evolution section or publications tables. This is distinct from the N=20/28/34 work.

**4b. SIGNIFICANT OMISSION — Topic 11: Spin-orbit potential modification in neutron-rich nuclei**
- Source `03_physics_topics.md` (lines 316-328) describes a PRC 2013 paper (Sakaguchi, Uesaka, Aoi co-author) on shallow/diffuse spin-orbit potential in 6He and 8He scattering. This is a conceptually important result connecting the extended neutron distribution to spin-orbit force modification — directly relevant to shell evolution.
- This topic does not appear in the draft.
- **Action:** Consider adding to Section 4 (Shell Evolution) or Section 6 (Halo Nuclei) as a related result.

**4c. OMISSION — First spectroscopy of 40Mg (PRL 2019)**
- Source `04_experiments.md` (lines 225-232) describes a PRL 2019 paper on first spectroscopy of 40Mg (N=28, near the neutron drip line). This is a notable result in the N=28 island of inversion context.
- Not mentioned in the draft.
- **Action:** Include at minimum in the publications tables (Section 8.3 Recent Highlights covers 2020-2025 only; 2019 falls just outside). Could also be mentioned in Section 4.4 (N=28 shell quenching).

**4d. OMISSION — Spectroscopy of 33Mg via knockout reactions (PRC 2021)**
- Source `04_experiments.md` (lines 234-239) and `05_publications.md` (line 101) describe a PRC 2021 paper resolving the ground-state parity of 33Mg. 12 citations.
- Not mentioned in the draft.
- **Action:** Minor omission, but this is a notable island-of-inversion result. Consider adding to Section 4.2 or publications tables.

**4e. OMISSION — Proton inelastic scattering as a systematic technique**
- Source `03_physics_topics.md` (Topic 6, lines 168-199) has a dedicated section on proton inelastic scattering as a nuclear structure probe, including a systematic table of nuclei studied. The draft discusses individual results using proton scattering but does not present it as a coherent methodology pillar.
- **Action:** The technique is discussed in Section 3 (experimental technique step 3 mentions inelastic scattering) but a more explicit acknowledgment that proton inelastic scattering constitutes a major systematic program would strengthen the draft. Low priority.

**4f. MINOR OMISSION — 10He observation (PLB 1994, 69 citations)**
- Source `05_publications.md` (line 119): Observation of 10He, PLB 1994, 69 citations. Not in the draft. This is in the "other notable papers" category and could be mentioned.

**4g. OMISSION — Master's degree (1992-1994)**
- Source `01_biography.md` (line 20) states Master's program at UTokyo from 1992-1994.
- **Draft line 29** starts career trajectory at "PhD — University of Tokyo... (1994-1998)" — omitting the Master's entirely.
- The Imai file (line 36) also just says "PhD — University of Tokyo" without years. So this matches the reference file's level of detail. PASS for structural parity, but note the Master's is available in the source and omitted.

**4h. Publications tables — MOSTLY COMPLETE**
- Section 8.1 (Most-Cited): 10 entries. Source `05_publications.md` has 15 in the top list. Papers #10-15 (127, 110, 104, 97, 96 citations) are omitted. The 32Ne paper (96 cit.) does appear elsewhere in the draft (Section 4.2) but the interaction cross section paper (127 cit., Takechi 2012), 24O N=16 closure (110 cit., Tshoo 2012), 104Sn Coulomb excitation (67 cit.), and 12Be isomeric state (97 cit.) are entirely absent from the draft.
- Section 8.2 (First-Author): 5 entries matching the source's 5 first-author papers. Complete.
- Section 8.3 (Recent Highlights): 5 entries covering 2020-2025. Source `05_publications.md` lists 19 papers from 2020-2025; the draft selects 5 key ones. Reasonable editorial choice.

---

### 5. Wikilink Quality

**5a. GOOD — Most entities wikilinked**
Institutions, detectors, physics concepts, people, and reactions are extensively wikilinked. The draft has over 60 vault links in the References section.

**5b. MISSING WIKILINKS — Bare names that should be wikilinked**

- **Line 80, 464:** `Akane Sakaue` — mentioned without a wikilink. If a professor profile page exists for NUSPEQ members, this should be linked.
- **Line 81:** `Bae Sunghan` — bare name, no wikilink.
- **Line 82:** `Noritaka Kitamura` — bare name, no wikilink.
- **Line 177:** `N. Aoi` — name in citation format, acceptable without wikilink.
- **Line 258:** `E. Ideguchi` — first mention of this researcher, no wikilink. Similarly `T. Kibedi`, `J.T.H. Dowie` on same line.
- **Line 267:** `J.T.H. Dowie` — bare name.
- **Line 295:** `N. Imai` — linked via `[[Nobuaki_Imai_Research_Program|Imai]]` on the same line. PASS.
- **Line 301:** `H.J. Ong` — bare name, no wikilink.
- **Line 440:** `Sakurai` — bare name (multiple mentions without wikilink; presumably Hiroyoshi Sakurai).
- **Line 464:** `N. Imai` is already linked elsewhere. PASS for general references.

Most of these are co-authors in citation contexts, so wikilinks are not strictly required. However, `Sakurai` on line 440 (KAKEN Co-Investigator table) appears without context and without a wikilink. Since this is Hiroyoshi Sakurai (a major figure in the RIBF program), a wikilink would be helpful.

**5c. MISSING WIKILINKS — Physics concepts**

- **Line 157:** `tensor force` in running text — already wikilinked as `[[Tensor Force|tensor force]]` on first mention (line 157). PASS.
- **Line 169:** `$sd$-shell`, `$fp$-shell` — these shell-model terms could benefit from wikilinks to a Shell Model page if one exists.
- **Line 282:** "proton inelastic scattering" — not wikilinked. The References section lists `[[Inelastic Scattering]]`, but the inline text uses the phrase without a link on several occasions.
- **Line 367:** `[[ALICE]]` — wikilinked. PASS.

---

### 6. Cross-Reference Accuracy

**6a. PASS — DONUTS-NUSPEQ connection**
Draft line 86 accurately describes the relationship between the two groups, mentions shared OEDO-SHARAQ infrastructure, and references the 16C B(E2) measurement and SUNFLOWER program. Consistent with Imai file line 80.

**6b. PASS — OEDO-SHARAQ cross-reference**
Draft line 455: "See [[Nobuaki_Imai_Research_Program|Imai Research Program, Section 3]] for technical details of the OEDO-SHARAQ beamline." This is accurate — Imai file Section 3 covers OEDO-SHARAQ in detail.

**6c. NOTE — NUSPEQ acronym discrepancy with Imai file**
Draft line 47 uses the correct expansion: "Nuclear Spectroscopy for Extreme Quantum system."
Imai file line 80 uses an incorrect expansion: "Nuclear Structure and Production of Exotic Quanta."
The draft does NOT flag this discrepancy inline. The draft report (06_draft_report.md line 44) notes it was identified but not corrected in the Imai file. This is acceptable (out of scope), but a cross-reference note in the Aoi file would be helpful for future readers.

---

### Summary of Required Changes

**Must fix (accuracy/completeness):**
1. Publication stats (line 36): Reconcile INSPIRE paper count with ResearchGate citation count, or attribute each clearly
2. N=16 PRL 2000 (line 231): Verify first-authorship claim; unsupported by source files
3. Vice Director of RCNP (line 33): Unverified in primary sources; flag or remove

**Should fix (significant omissions):**
4. Add coverage of nuclei beyond 132Sn (Topic 10 from sources: 136Sn, 132Cd)
5. Add coverage of spin-orbit potential modification (Topic 11 from sources: 6He/8He)
6. Add 40Mg first spectroscopy (PRL 2019) — notable drip-line result

**Nice to fix (minor):**
7. 16C B(E2) values: Add clarifying note that two values come from different techniques
8. Add wikilink for `Sakurai` in KAKEN table
9. Consider adding 33Mg, 10He, and papers #10-15 from most-cited list to publications tables
10. Master's degree (1992-1994) could be added to career trajectory for completeness

---

*Review completed: 2026-03-16*
*Reviewer: Claude Opus 4.6 (1M context), skeptical review mode*
