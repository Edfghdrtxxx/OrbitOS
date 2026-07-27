# Memory

> A readable Markdown rendering of the exported memory. The body text below is retained verbatim; only headings, navigation, and labels have been added for continuous reading.

## Contents

- [Conversation memory](#conversation-memory)
- [Nuclear Physics Learning](#nuclear-physics-learning)
- [English Learning](#english-learning)
- [Customized Games](#customized-games)
- [AI learning](#ai-learning)
- [Quizzes](#quizzes)

---

## Conversation memory

**Work context**

Reid is a second-year Master's student in Particle and Nuclear Physics at the Institute of Modern Physics (IMP), Chinese Academy of Sciences (via UCAS), with expected graduation in June 2027. His research group's physics focus is new proton magic numbers and nuclear shell-structure evolution, with experimental participation at HIRFL-RIBLL (home base) and RIKEN RIBF in Japan (2025). His ML work includes ResNet-based PID and regression models (application level, personally built), with Vision Transformers and Domain Adaptation methods (DANN, MCD) at exploration level. Detector concepts including MWDC, TPC, and Bρ-ΔE-ToF PID principles are at learning level only—studied but not personally constructed or calibrated. His PhD target is the University of Tokyo Graduate School of Science (CNS), and he has already made contact with the Imai group there.

**Personal context**

Reid has a strong interest in vibe coding, newest technologies, and AI coding assistants (Claude Code, Codex). He appreciates empathetic, reflective quotes related to personal growth.

**Top of mind**

Reid has been actively working with Claude Code v2.1, including navigating the multi-session agents dashboard and troubleshooting background agent sessions. He is also refining technical English phrasing for anomaly inference work involving RANSAC and Hough algorithms, and has been deepening his understanding of prompt engineering structure, including a four-header template (Goal / Context / Examples / Output format) with a proposed Constraints split. TOEFL preparation—particularly listening/chunking strategies and the "Complete the Words" task—remains an active focus alongside his 100+ score target.

**Brief history**

*Recent months*

Reid has been building and refining a custom Claude skill ecosystem, including `concept-visualizer`, `feynman-technique`, `vocabulary-visualization`, `phrasing-refining`, `evolve-skills`, `orchestrate`, and `handoff-prompt` skills, with ongoing cross-skill consistency audits and architecture improvements (e.g., index-and-pointer refactor for the orchestrate skill to reduce context bloat). He set up a remote GPU training pipeline on AutoDL for a ResNet-18 model using Claude Code as orchestration. He explored open-source frameworks as alternatives or complements to Claude for Science workflows (multi-agent orchestration, provenance tracking via JSONL hooks), concluding Claude Code's native primitives largely suffice. He investigated Jin Lei's AI-assisted research pipeline (16 papers in 4 months) and the AI Agents for Nuclear Physics Workshop at Fudan. He built a TOEFL speaking collocation bank project for handoff to Cowork with spaced-repetition logic, developed TOEFL reading comprehension strategies (EXCEPT/detail question error analysis, summary and insertion question protocols), and built a "Complete the Words" practice skill. He also investigated the GRE Physics Subject Test, including preparation resources, topic weightings, and registration logistics, and attended the CNS Summer School at UTokyo in August 2025.

*Earlier context*

Reid investigated PhD pathways to UTokyo CNS, including GSGC admission, MEXT/CSC funding, RIKEN JRA eligibility, and dependent visa options for his girlfriend. He completed his IMP/CAS annual graduate evaluation form (考核表) with carefully tiered research descriptions. He explored open-source Claude skills for academic drawing, physics diagrams, and nuclear physics figures, noting gaps in ENSDF integration, GEANT4/ROOT, and Feynman diagram tools. He set up and debugged Warp terminal on Windows for Claude Code workflows, investigated Cowork's VPN/networking limitations (Hyper-V NAT conflicts), and worked through Claude Desktop tool-result submission errors. He built an Alipay/WeChat Pay expense tracking dashboard and investigated NotebookLM–Claude Code integration projects.

*Long-term background*

Reid has a sustained interest in precision English vocabulary and etymology—regularly exploring near-synonym clusters, collocations, and grammar patterns with visual/interactive tools. He has deep familiarity with nuclear physics theory including shell model physics, shell evolution, tensor forces, surrogate reaction methods, Fermi surface concepts, Hamiltonians, and ab initio methods (chiral EFT, NCSM, Coupled Cluster, IMSRG). He built interactive physics visualizations across topics including QCD, nuclear pasta, Euler-Lagrange equations, and Hamilton-Jacobi theory. He has a long-running TOEFL preparation arc targeting 100+ and has been preparing for the GRE Physics Subject Test. His Lenovo Legion Pro 5 laptop (Windows, Warp terminal) is his primary development machine.

---

## Nuclear Physics Learning

**Purpose & context**

Reid is a nuclear physics researcher based at HIRFL-RIBLL (Heavy Ion Research Facility in Lanzhou, Radioactive Ion Beam Line), working on radioactive ion beam experiments. Core research areas include intermediate-mass fragment identification, exotic nuclei (e.g., ¹²Be, shape coexistence), and nuclear reaction measurements. Reid is also studying classical mechanics at an advanced undergraduate/graduate level, likely in preparation for the GRE Physics exam, and has background in nuclear astrophysics (cross sections, reaction rates, detector physics).

Research and study goals include: understanding nuclear reaction mechanisms and cross-section extraction; particle identification via Bρ–ΔE–TOF; preparing research presentations on rare-isotope beam experiments; and developing fluency in Lagrangian/Hamiltonian mechanics for the GRE.

English is not Reid's first language; Reid consistently welcomes concurrent grammar and phrasing corrections alongside technical content.

---

**Current state**

- Actively studying classical mechanics (spherical pendulum, double pendulum, moment of inertia problems) at an advanced level, with GRE Physics preparation as a likely near-term milestone.
- Working through Lagrangian and Hamiltonian mechanics problems; demonstrates careful physical reasoning (sanity checks, sign verification) and seeks both rigorous derivations and physical intuition.
- Engaged in experimental nuclear physics at HIRFL-RIBLL: particle identification using Bρ–ΔE–TOF, fragment separation, and detector systems (plastic scintillators, MUSIC-type ionization chambers, GM detectors, MWDCs).
- Has prepared or is preparing research presentations on shell structure evolution, direct reactions (d,p)/(p,d), surrogate reactions, AT-TPCs, and r-process nucleosynthesis connections.
- Familiar with and actively uses binned likelihood fitting (Poisson statistics, deviance, Wilks' theorem) for spectral analysis (e.g., ¹⁴O excitation spectra).

---

**On the horizon**

- GRE Physics exam (classical mechanics fluency is a stated near-term priority).
- Continued presentation development on nuclear reaction mechanisms and astrophysical applications.
- Likely progression from spherical pendulum problems to general central-force Lagrangians (per textbook structure).
- Open questions around AT-TPC detector development and large-volume TPC capabilities (interest in DONUTS group and CNS CAT-TPC context).

---

**Key learnings & principles**

- **Cross section as universal interface**: Reid has internalized why cross section is the canonical output of nuclear experiments — it strips away apparatus-dependent factors, leaving an intrinsic quantity that interfaces directly with theory.
- **Convention hygiene**: A key lesson from reaction rate derivations — identical symbols across sources (e.g., Φ, N_t) do not guarantee identical definitions; dimensional checking before substitution is the reliable safeguard.
- **Lagrangian mechanics pattern**: Conservation laws are not separate principles but emerge directly from the Euler–Lagrange equations when a coordinate is cyclic; this connects naturally to Noether's theorem.
- **Physical sanity checks**: Reid consistently applies comparative reasoning (e.g., "more mass at larger radius → I should exceed 2/5 MR²") as a first-pass error detector — this habit is well-established and worth reinforcing.
- **Scleronomic shortcut**: The "H = T + U" shortcut for the Hamiltonian requires explicitly stating the scleronomic-constraint condition; Reid has been flagged on skipping this step.
- **Detector operating regimes**: Gas detectors have tunable voltage-dependent operating regimes; scintillators and silicon detectors do not — their response is fixed by material physics. This distinction matters for ΔE-stage choices in heavy-ion PID.
- **Legendre transform rigor**: Reid tends to use H = T + U shortcuts without writing out the Legendre transform explicitly; this is a recurring procedural gap to address.

---

**Approach & patterns**

- **Iterative refinement**: Reid works incrementally — each follow-up is a focused, targeted question rather than a broad restatement. Prefers to build understanding layer by layer.
- **Self-correction cycles**: Uses explicit reflection/adversarial audit steps (e.g., the "reflect skill") to pressure-test outputs before accepting them.
- **Conceptual depth over surface answers**: Consistently pushes past initial explanations toward underlying mechanisms (e.g., from Doppler broadening → compound nucleus model → nuclear level density via Fermi gas model).
- **Interactive visualizations**: Strong preference for interactive HTML/JS/SVG widgets to accompany technical explanations — used across mechanics, detector physics, reaction mechanisms, and statistics topics. Exception: explicitly requested no visualizations in at least one session (moment of inertia derivation).
- **Citation verification**: Expects references to be verified via web search before presentation, not cited from memory.
- **Language correction**: Welcomes concurrent English grammar and phrasing corrections naturally woven into responses.
- **Concise skill documentation**: When working with reusable skills or tools, prefers documentation kept tight and trimmed — flags verbosity explicitly.

---

**Tools & resources**

- **Visualization stack**: Interactive HTML/Canvas/SVG widgets; Chart.js; KaTeX (via cdnjs, component named `TeX` not `Math` to avoid shadowing the global JS `Math` object); JSX artifacts as fallback.
- **Concept-visualizer skill**: Maintained at `/mnt/skills/user/concept-visualizer/SKILL.md`; conventions include light theme with Anthropic palette, serif typography (Iowan Old Style / Palatino / Georgia), deep saturated accents, `foreignObject` for SVG math labels.
- **Physics codes referenced**: FRESCO, PTOLEMY (transfer reactions); EMPIRE, TALYS, GEMINI++ (statistical/pre-equilibrium); BUU/QMD/AMD (heavy-ion transport).
- **Key references**: Krane (1988), Iliadis (2015), Rolfs & Rodney (1988), Blatt & Weisskopf (1952), Lane & Thomas (1958), Knoll (2010), Loveland/Morrissey/Seaborg; Otsuka et al. PRL series (2001, 2005, 2010) verified.
- **Simulation methods**: RK4 and symplectic integrators for nonlinear ODEs (e.g., double pendulum).

---

## English Learning

**Purpose & context**

Reid is an English language learner with strong interest in precise, analytical vocabulary work and is actively preparing for the TOEFL exam with a target score of 100+ overall, with particular focus on the Listening and Speaking sections. Reid has a background that includes familiarity with physics-related content but relative unfamiliarity with other academic domains (biology, psychology, art history, etc.) that appear frequently in TOEFL listening passages.

Reid also works with AI skill files and workflows, including building and maintaining a library of custom skills (e.g., `/phrasing-refining`, vocabulary visualization, concept visualizer) for AI-assisted tasks.

**Current state**

- Actively preparing for TOEFL, with the Speaking section a primary focus; target is 5.0/6.0 on the Speaking band, with a deadline in late August 2026
- Has been practicing Speaking using a four-beat structure (choice → reason → specific detail → personal takeaway) and reusable sentence templates; speaking rate is below target range and needs improvement toward 120–150 wpm
- Listening section practice was previously anchored in YouTube and TED Talk content rather than TOEFL-format materials — a gap that has been identified and addressed with a structured 10-week study plan
- Regularly uses the `/phrasing-refining` skill for sentence-level English writing and grammar improvement
- Working on a computer vision project involving CNNs compared against classical algorithms (RANSAC, Hough transform, hierarchical clustering)
- Has built or is maintaining AI skill infrastructure including visualization and phrasing skills, with documented fixes to `concept-visualizer/SKILL.md` and related files

**On the horizon**

- Completing the 10-week TOEFL study plan through exam readiness phases, including full simulation practice with the ETS official free test reserved for final weeks
- Continued Speaking practice: building a small bank of 2–3 personal stories adaptable to different prompts; avoiding memorized-sounding responses to prevent scoring penalty
- Deepening domain vocabulary in non-physics academic areas to address cascading focus-loss during TOEFL listening

**Key learnings & principles**

- **TOEFL Speaking format awareness**: Reid has corrected Claude on outdated TOEFL format before; always verify current ETS Speaking specifications (currently: 11 scored items, 7 Listen and Repeat + 4-question Interview, no prep time, ~45-second spontaneous responses, 1.0–6.0 band scale) before generating practice material. Flag when specifications come from test-prep sources vs. official ETS documentation
- **Root cause of Listening difficulty**: The core issue is cascading — unfamiliar vocabulary triggers focus loss, compounded by unfamiliarity with the semi-spontaneous TOEFL lecture genre (self-corrections, rhetorical questions, planned digressions). Treating these as separate problems is less effective than addressing format familiarity first
- **Sentence template reuse**: Reusable syntactic frames are valuable, but only the frame should be reused — exact wording risks a "memorized" penalty on TOEFL Speaking
- **Vocabulary analysis framework**: Reid responds well to etymology-grounded analysis, axes-based semantic comparison (e.g., scatter plots of meaning), concrete scenario illustrations, and explicit identification of common usage traps
- **Skill documentation**: Reid values concise skill files; edits that add verbosity are unwelcome

**Approach & patterns**

- Uses terse, single-line prompts for vocabulary queries, signaling a preference for Claude to drive analytical depth without explicit instruction on format or scope
- Accepts and benefits from inline English corrections integrated naturally into responses (grammar, word choice, collocations, register) — Claude has consistently provided proactive language corrections at the outset of replies
- Prefers explicit sourcing: distinguishing factual claims from analytical reasoning, and flagging when information is from test-prep sources vs. authoritative documentation
- Engages actively with interactive learning prompts (e.g., pattern-extraction exercises before Claude reveals answers)
- Prefers plain text over heavy formatting in some contexts (e.g., etymology explanations) to conserve context window space
- Has a habit of pushing back when Claude makes incorrect claims, and expects Claude to investigate and correct rather than defend errors

**Tools & resources**

- Custom Claude skills: `/phrasing-refining`, vocabulary visualization (`concept-visualizer`), `feynman-technique`, `show_widget` (Anthropic tool, confirmed real but not available in all sessions)
- TOEFL resources: NoteFull TOEFL Mastery and TST Prep TOEFL (YouTube), ETS official free practice test, Quizlet community vocabulary decks, Crash Course (YouTube) for academic domain background
- Etymology references: Online Etymology Dictionary, Wiktionary
- Visualization: React JSX artifacts with Anthropic-aesthetic light theme (background `#FAFAF8`, card `#FFFFFF`, field `#F5F0EA`, borders `#E2DDD6`, text `#1A1717`, accents `#92400E` amber and `#1E3A5F` navy)

---

## Customized Games

**Purpose & context**

Reid is a Master's student in Particle/Nuclear Physics (expected graduation mid-2027) who engages Claude for recreational game development projects unrelated to academic work. His game projects are browser-based, delivered as standalone single HTML files — a consistent and deliberate constraint. Reid values direct honesty about limitations (e.g., copyright constraints) and prefers Claude ask clarifying questions before building rather than assuming scope.

**Current state**

Reid has two completed browser game projects:

- **Top-down zombie shooter roguelike** — A fully featured run-based game (5 floors × 4 rooms, permadeath, 15 stackable upgrades, 5 enemy archetypes + boss/elite system, dash with i-frames, full HUD). The most recent iteration includes a deliberate 1-second freeze before upgrade cards appear, a two-step select-then-confirm upgrade interaction, and tick-driven room transition logic that integrates cleanly with the upgrade freeze system.

- **"Arcane Rift" MOBA mini-game** — A single-lane MOBA with two original heroes, minion waves, towers, gold/XP economy, hero leveling, and a competent enemy AI with predictive casting and retreat behavior. All visuals are procedural canvas art with no external dependencies.

**Approach & patterns**

- Strongly prefers single-file HTML artifacts with no external dependencies
- Favors interactive, dynamic animations and visual feedback
- Iterates through targeted amendments rather than full rebuilds
- Appreciates upfront clarification on scope before Claude begins building
- Values being told constraints directly (e.g., copyright issues) rather than having them worked around silently

**Tools & resources**

- Browser-based canvas/JavaScript for all game development
- Claude.ai Projects as the primary development environment for game builds

---

## AI learning

**Purpose & context**

Reid is engaged in machine learning research and development, with demonstrated hands-on involvement in building and analyzing neural network architectures. Active work spans both computer vision (ResNet-based regression models) and NLP/sequence modeling (Transformer architectures). Reid has working familiarity with standard ML concepts including classification heads, attention mechanisms, KV-cache, causal masking, cross-attention, global average pooling, and autoregressive generation — but engages deeply with architectural nuances and edge cases rather than surface-level understanding.

**Current state**

Reid is actively developing or analyzing two model variants — **TRK5** and **TRK6** — built on a modified ResNet backbone with a 4-output regression head (Linear→ReLU→Dropout→Linear, no output activation). TRK5 feeds raw ResNet features into the head; TRK6 feeds cross-attention-fused features into the same head architecture. Key open questions from recent work include:
- Whether TRK5/TRK6 share head weights or train separately (shared weights create a harder optimization problem)
- Whether the unusually low dropout rate (flagged as worth investigating) is intentional
- Config reuse patterns (e.g., `num_classes` repurposed as output dimension slot count)

Reid also recently explored the historical and empirical basis for decoder-only Transformer dominance, with interest in grounding architectural claims in primary sources.

**Key learnings & principles**

- Regression heads differ meaningfully from classification heads: no output activation, regression losses (L1/L2/Smooth-L1), and per-output target normalization matters when output scales differ
- The GPT-1 paper does not argue decoder-only is architecturally *superior* — it uses causal decoding because next-token prediction is inherently autoregressive; systematic comparisons come from later work (e.g., Wang et al. 2022)
- Decoder-only advantages (KV-cache efficiency, unified architecture, scaling behavior) are a mix of established fact, empirical observation, and hypothesis — Reid appreciates claims being labeled by their epistemic status
- Shared heads across feature distributions with different origins (TRK5 vs. TRK6) represent a substantially harder optimization problem than separate heads

**Approach & patterns**

- Reid prefers interactive, visual explanations (SVG visualizations, JSX artifacts, toggle-based diagrams) when exploring architectural concepts
- Engages well with metaphor-based pedagogy, provided the breakdown points of the metaphor are explicitly flagged
- Appreciates when Claude proactively identifies ambiguities or inconsistencies (e.g., selection vs. config description mismatch) before proceeding
- Values source-grounded responses; Claude has used web search to anchor claims in primary papers during Reid's sessions
- Comfortable with domain-specific terminology; explanations don't need to over-define standard ML concepts

**Tools & resources**

- ResNet-based architectures with custom regression heads (TRK5/TRK6 variants)
- Transformer / attention-based architectures
- Interactive visualization artifacts (SVG, JSX) used to explore and communicate architectural concepts
- Primary ML literature (Vaswani et al. 2017, Radford et al. 2018, Wang et al. 2022) as reference points

---

## Quizzes

**Purpose & context**

Reid is a graduate student in nuclear physics, working with the HIRFL-RIBLL facility and studying Bρ–ΔE–TOF particle identification (PID) methods. Interactions with Claude are oriented toward deep, technically rigorous engagement at the graduate-qualifier level. Reid has established a preference for clarifying questions over assumptions, and expects assertions to be backed by verifiable primary sources (e.g., Lee's *Accelerator Physics*, 2004).

---

**Current state**

Reid is actively building study materials around Bρ–ΔE–TOF PID, with a focus on mastering three classic exam traps:
- Detector-regime conflation
- The Bρ–β–TOF constraint tangle
- The thin-detector ceiling

A self-contained HTML quiz artifact has been developed (*bro_de_tof_retention_check.html*) containing graduate-qualifier-style derivation problems and interactive flashcards. A key numerical issue in the master equation (conflation of two valid forms of the Bρ formula) was identified, reconciled against primary literature, and embedded as a pedagogical problem.

---

**Key learnings & principles**

- The two valid Bρ forms (unit-explicit vs. relativistic) must be carefully distinguished; conflating them is a known source of error and a good teaching moment.
- Self-reflection/audit passes are valued: Reid invoked a structured deliverable audit, and Claude is expected to acknowledge findings honestly, including when anticipated issues turn out to already be resolved.
- Mathematical unpacking across multiple equivalent formulations (trigonometric, complex exponential, matrix/group-theoretic) is a preferred mode of explanation for physics and math concepts.

---

**Approach & patterns**

- Reid prefers structured, iterative workflows: clarifying questions before building, followed by explicit review/audit phases.
- Pedagogical artifacts should include per-problem solution reveals with a reveal-all option; interactive visualizations and self-assessment extras are not preferred.
- Reid engages with both the physics content and the meta-level quality of reasoning—expecting Claude to distinguish genuine corrections from false credit.
- Conceptual clarifications are valued at a high level of mathematical rigor (e.g., connecting parametric circular motion to SO(2) group action and harmonic oscillator ODEs).

---

**Tools & resources**

- Primary reference: Lee, *Accelerator Physics* (2004)
- Artifact format: self-contained HTML for study tools
- Facility context: HIRFL-RIBLL
