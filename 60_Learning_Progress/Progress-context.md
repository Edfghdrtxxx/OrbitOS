---
type: learning-index
purpose: Terse cross-agent index of what the learner has solidly learned. Agents running /learn MUST read this first.
updated: 2026-09-03
---
# Learning Progress — Context Index

> Analogy of MEMORY.md: short durable pointers only. Full dialogue lives in session notes under `60_Learning_Progress/<topic>/`.
> Retention checks live in [[Retention-context]] (`/retention`). This file is the learning index only.
> **Update rule:** after a turn advances understanding, add/move one-line entries. Prefer moving **In progress → Known solid** when the learner states/uses it correctly.

## Known solid

Hierarchy: **domain** (`###`) → **thread** (`####`). One table per thread (`Item` | `Notes`).

### Physics

#### QM — Dirac / operators

| Item | Notes |
|------|--------|
| Dirac notation | Stated by learner (self-report) — **not** the same as position representation solid |
| Hermitian operators | Stated by learner (self-report) |

#### QM — position representation

Session: [[2026-07-27-1331 Position representation]]

| Item | Notes |
|------|--------|
| Position rep: $\Psi=\langle x\|\Psi\rangle$ as projection | Inner product / geometric projection; ket ≠ “original wavefunction” |
| Position rep: full $\Psi(x)$ = full state at $t$ | Drill re-locked: entire function of all $x$ (not one sample) |

#### QM — TISE

Session: [[2026-07-26-2126 Time-independent Schrödinger equation]]

| Item | Notes |
|------|--------|
| TISE: $E$ is a scalar eigenvalue | Learner stated correctly; $\hat{H}\|\psi\rangle=E\|\psi\rangle$ |
| Hermitian $\hat{H}$ $\Rightarrow$ $E$ real | Learner linked Hermitian to real (not complex) eigenvalues |
| Stationary state: $P(E)$ time-independent | Learner: measuring $E$ on eigenstate does not change with $t$ |
| TISE in position representation (1D) | Learner wrote $-\frac{\hbar^2}{2m}\psi''+V\psi=E\psi$ (structure correct) |

#### QM — superposition / measurement

| Item | Notes |
|------|--------|
| Superposition: $P(E_1)=\frac{1}{2}$ for equal weights | Learner correct for $\frac{1}{\sqrt{2}}(\|E_1\rangle+\|E_2\rangle)$ |
| $P(E)$ vs $\langle\hat{H}\rangle$ are different types | Learner: $\langle\hat{H}\rangle\neq P(E_1)$ as conclusion |
| Superposition: $\langle\hat{H}\rangle=\sum_i P(E_i)E_i$ | Learner: $P=\frac{1}{2},\frac{1}{2}$ and $\langle\hat{H}\rangle=2\hbar\omega$ for $E=\hbar\omega,3\hbar\omega$ |

#### QM — harmonic oscillator

Session: [[2026-07-26-2112 Harmonic oscillator]]

| Item | Notes |
|------|--------|
| HO: $E_0>0$ (zero-point) via uncertainty | Uncertainty reason + value $E_0=\frac{1}{2}\hbar\omega$ (drill re-locked) |
| HO: equal spacing $E_{n+1}-E_n=\hbar\omega$ | Learner derived from $E_n$; checked $E_2-E_1=E_1-E_0$ |
| HO: $n\ge 0$ (no $n=-1$) | Learner: $n=-1$ not a physical energy level; $E_{-1}<E_0$ |

#### QM — ladder operators

Session: [[2026-07-26-2113 Ladder operators]]

| Item | Notes |
|------|--------|
| Ladder: $a\|n\rangle=\sqrt{n}\|n-1\rangle$, $a^\dagger\|n\rangle=\sqrt{n+1}\|n+1\rangle$ | Learner: $a\|2\rangle=\sqrt{2}\|1\rangle$, $a^\dagger\|0\rangle=\|1\rangle$ |
| Ladder: $a\|0\rangle=0$ (zero vector, not $\|0\rangle$) | Corrected “unchanged” → null ket; matches no $n=-1$ |
| Ladder: $\hat{N}=a^\dagger a$, $\hat{N}\|n\rangle=n\|n\rangle$ | Learner: $\hat{N}\|3\rangle$ both ways $\to 3\|3\rangle$; $\hat{H}=\hbar\omega(\hat{N}+\frac{1}{2})$ linked |
| Ladder: $[a,a^\dagger]=1$, $[a^\dagger,a]=-1$ | Learner: $[a^\dagger,a]=-1$ from antisymmetry; $aa^\dagger\|n\rangle=(n+1)\|n\rangle$ used |
| Ladder: $a$ not Hermitian; $\hat{N}^\dagger=\hat{N}$ | Learner: $(a^\dagger a)^\dagger=a^\dagger a$ after reverse-order fix |
| Ladder: $a,a^\dagger$ from $\hat{x},\hat{p}$; $i\to -i$ under $\dagger$ | Learner wrote $a^\dagger\propto(\hat{x}-i\hat{p}/m\omega)$ from $a^\dagger$ |
| Ladder: invert $\hat{x},\hat{p}$ in $a,a^\dagger$; zero vector $\neq$ vacuum | $\hat{p}=i\sqrt{\hbar m\omega/2}(a^\dagger-a)$; $a\|0\rangle=$ zero vector |

#### Exp. tech NP — radioactive beams

Session: [[2026-08-07-1538 Radioactive beams projectile fragmentation]] (thread still active)

| Item | Notes |
|------|--------|
| RIB: same fragment $v$ $\Rightarrow$ $B\rho\propto A/q$ | Fully stripped $A/Z$; $^{11}\mathrm{Be}$ vs $^{11}\mathrm{C}$ stiffer by $3:2$ |

### English

#### TOEFL Academic Discussion

Session: [[2026-07-26-2233 TOEFL Academic Discussion]]

| Item | Notes |
|------|--------|
| TOEFL AD: one-claim opening | Names a single impact that answers the professor (not a list) |
| TOEFL AD: why = stuck → tool → keep going | Can draft a mini-example chain for “learning momentum” (language polish next) |
| TOEFL AD: no-filler close | Verb-driven restatement of claim; cut stacked hedges and noun piles on second attempt |
| Kill inflation vs effective complexity | "I firmly align with the perspective that" → "I believe"; rule: if you delete the fancy phrase and meaning doesn't change, it's padding. Accepted after pushback. |
| "I share [Name]'s perspective that..." | Stance opening: `that + clause` (not `regarding + noun phrase`); noun `perspective` (not adverb) |
| Transitions: additive vs contrast | `First... Furthermore` for supporting reasons; avoid `On the other hand` unless contrasting two sides |
| Mechanism verbs vs noun piles | Concrete actions (*pinpoint logical gaps*, *narrow down a research question*) replace empty abstractions (*supply essential resources*, *study quality*) |
| "The reason… is because" → "is that" | Caught on first attempt; reason + because = double cause |
| Relative clause agreement | Check noun directly before `which/that` (singular `feedback/environment` $\to$ singular verb; plural $\to$ plural) |
| Uncountable "feedback" | Like information, advice, research — no plural form |
| Less vs fewer | Fewer for countable nouns; less for uncountable |

#### TOEFL listening paraphrase

Session: [[2026-08-27-2255 TOEFL distinct outcomes paraphrase]]

| Item | Notes |
|------|--------|
| Too broad = mixed category, not long survey | Learner: long survey + only depression → Park would not object |
| Noun overlap ≠ take the option | Learner: reject “well focused” + the four nouns because the judgment is wrong |
| Keep if judgment matches (no AND with word overlap) | Learner: would keep “distinct outcomes” now; first miss was decode, not AND |
| *outcome* = thing the study measures | Learner stated; dropped the *or* |
| *outcome* ≠ *objective* | Learner: depression = outcome; objective = the aim (test whether sleep affects it) |

#### TOEFL detail & EXCEPT traps (General vs. Specific)

Session: [[2026-09-02-1400 TOEFL general vs specific details]]

| Item | Notes |
|------|--------|
| One-Way Street: Specific (text) $\to$ General (option) | Valid paraphrase/generalization (e.g. *Buddhism* $\to$ *religious ideas*) |
| One-Way Street: General (text) $\to$ Specific (option) | Invalid trap / over-specification (e.g. *technology* $\to$ *transportation technology*) |
| Unsupported modifiers in detail options | Option adds unmentioned qualifiers (*new*, *mass-produced*, specific sub-types) to general passage nouns |

#### Relative words

Session: [[2026-08-03-1059 that-which-where]]

| Item | Notes |
|------|--------|
| Relatives: identify vs extra → *that* / *which* + commas | Learner wrote both TPC forms correctly under two contexts |
| Relatives: no resumptive *it* (*that is*, not *that it is*) | Dropped *it* in TPC rewrite; keep watching in free writing |
| Relatives: *where* ≈ *in/at which* for places | Chose C on *universities where…*; reason *in which* paraphrase |
| Relatives: *that* as subject of relative verb (things) | Fixed *method that reduces…* (not *where reduces*) |
| Relatives: *who* for person + extra + subject | *Dr. Imai, who supervises…* correct package |
| Relatives: *that* object vs subject | Named *screens* as subject of *cannot replicate*; *that* = object (= skills) |
| Relatives: *whom* / *with whom* (formal object) | B2–B3 correct |
| Relatives: *who* + commas for unique/named person | B4–B5 correct |
| Relatives: *whose* for possession | C1–C2 correct |
| Relatives: relative *that* vs conjunction *that* | C3: *argue that…* = conjunction |

#### Adverbs

Session: [[2026-08-11-1646 adverb placement]]

| Item | Notes |
|------|--------|
| Adverbs: mid-position manner / *finally* | After modal (if any), before main verb; retention set mostly solid; watch tense/plural when rewriting |

#### Collocations and noun logic

Sessions: [[2026-08-11-1805 collocations and noun logic]] · [[2026-08-15-1050 TOEFL complete-word forms]] · [[2026-08-15-1435 gerunds]]

| Item | Notes |
|------|--------|
| Phrasal verbs: *take place* | "take place" functions as "happen"; event is the subject |
| Spatial logic: location vs building | Navigate *from* a "location" (abstract coordinate) *to* a "building" (physical structure) |
| Compound pairing: lock object first | Prompt names the object → build that chunk; leftovers fill the other job. Learner: *backup copies* then *cloud folder*; *lab manuals* then *chemistry course*. Trap is trading classifiers |
| Frozen compound ≠ 的-reshuffle | English two-word campus chunks are vocabulary. Chinese 实验/课程/手册 + 的 feels commutative; *course manuals* is the reshuffle. Learner named this as the cause |
| Question over decoy PP | Office/person/place in the question picks the noun; a location phrase can pull a vivid wrong noun. Learner: housing office → *roommate problem*, not hallway-*printer* |
| Compound: [container] + [activity/event] | Learner: *seminar discussion* (seminar is venue container, discussion is head event); matches *class/group/panel discussion* |
| Modifier typing: hierarchical vs source | Learner: *main claim* / *central thesis* takes hierarchical qualifiers; *textual evidence* / *empirical data* takes source/grounding qualifiers |
| Search results ≠ research results | Catalog hit-list the filters narrow; learner restated: items a list shows you, not a finding. Slip was *research* for *search* |
| Complete-word: job before stem | Name the slot’s job; reject letter-close academic first-arrivals (*respect*, *tangent*, *data*). Timed: a job-fail guess scores the same as blank |
| *remarkably* + adjective | Adverb neighbor → adj: *remarkably innovative*, not the noun. Learner stated |
| Plagiarism = unmarked use | Copying with *(Smith, 2020)* is valid; the crime is presenting others’ words/ideas as yours. Learner stated this |
| Plagiarism family / slot form | Dedicated noun *plagiarism*; verb *plagiarize*; *plagiaring* is not a word. *prevent accidental ___* → noun. Learner chose noun; gerund-after-adj rule tightened |
| -ing: name vs doing-word | Subject *killing* in *The accidental killing…* = name; *was accidentally killing* = doing. Learner classified the pair; slot-tell used |
| Gerund = name of a doing | Activity-feel ≠ sentence verb. *I enjoy swimming* swaps with *music* → object chair. Learner corrected after the trap |
| Gerund after preposition | *interested in learning* / *good at swimming* — object of the preposition, not *in learn*. Learner chose *learning* |
| -ing as describer | *The swimming child* — swap with *music* dies; not a name chair, not *be + -ing*. Learner classified |
| Verb hires *-ing* or *to* | *enjoy swimming* / *want to swim*. Learner filled both. Chair test does not pick the form |
| *stop* + *-ing* vs *to* | *stopped smoking* = quit; *stopped to smoke* = paused something else in order to smoke. Learner corrected “start smoking” |
| *remember* + *-ing* vs *to* | *-ing* = memory of a done event; *to* = duty then action. Learner: remembering first, then locking |
| Consent procedures | Ethics/fieldwork collocation; participant permission; *clear* as adjective modifier |
| *transform into* vs *transfer to* | $A \to B$ identity/nature change takes *into*; relocation/ownership takes *to* (2/2 transfer checked) |


#### Articles (TOEFL options)

Session: [[2026-08-12-1615 articles in TOEFL responses]]

| Item | Notes |
|------|--------|
| Articles: bare count noun after prep | Learner: *at bookstore* → *at the bookstore*; parallel fill; prefer *reception desk* in AmE |
| Agreement: plural subject → base verb | Learner: *people* plural → *post* (not *posts*); TOEFL option trap with articles |

#### Causal conjunctions (since / as / because)

Session: [[2026-08-14-1618 since-as-because]]

| Item | Notes |
|------|--------|
| Overlap, not nesting | Learner rejected *as 2020*; *since* ⊄ *as* |
| *since*-time leftover | From a past point until now (*since 2020*) |
| *as* + noun = role | Learner: *As a physicist…*; *since a student* dead |
| Why-test: *because* = news | Learner: *because…* answers Why?; fronted *since* = given reason |
| Why-core: given vs new | Learner: *since* iff reason already on the table; news → *because* (not free emphasis) |
| *as* + clause: while vs cause | Learner sorted pair; *while* = same time (not persistence) |
| *as* trap: pick the door | Learner: news-cause → *because*; same time → *while*. Don’t default *as* → *while* |

#### Prepositions (*at* / *on* / *in* time)

Session: [[2026-08-19-1555 prepositions]]

| Item | Notes |
|------|--------|
| Time scope: *at* = point, *in* = room | Learner: 3 p.m. small → stand *at*; 2020 large → go *in*. December same family as year |
| Time scope: *on* = day as surface | Learner: day not big enough to be a container; stand *on* it like a playground |
| Time: month *in* / date *on* | Filled *in December* / *on December 25*; month-word does not keep *in* when a day is named |
| Size test is when-only | Learner: size test ran out on 5–6; abstractness is not the picker |
| Verb hires the prep | Filled *thank for* / *congratulate on*; same abstractness, different bosses |
| *research on* topic vs *in* field | Filled *on climate change* / *in nuclear physics* |
| Mixed set 11/11 | Time + hired unlabeled; extra job tags + topic/field split unprompted |
| Parts of day: *in the morning* / *at night* | Filled *in the* / *at*; *the* with morning, no *the* with night. Afternoon/evening copy morning |
| Named day + part → *on*, drop *the* | After *at* then *in the*, learner landed *on Friday morning*. Transfer: *on Monday evening* |
| *at night* vs *on Monday night* | Filled *at* / *on*; named day steals even the *at night* chunk |

#### along / alongside

Session: [[2026-08-25-1451 along-alongside]]

| Item | Notes |
|------|--------|
| *along with* = extra in the bag | Form/passport: copy tags along, not a parallel partner |
| *alongside* = parallel neighbor | Mentor hall: beside, even while walking. Motion does not pick *along* |
| *along* = length of a line | Learner: *sensors … along the beamline* (static placement; not the bag) |
| Abstract *alongside* = neighbor, not extra | Detector upgrade commissioned *alongside* the old system |
| *alongside* ≠ simultaneous | Textbook sits *alongside* the account — neighbor on the shelf. *along with* can also be at the same time |
| Mixed unlabeled 6/6 | Length / neighbor / bag all named; static *along* and moving *alongside* both held |

#### Academic email requests and collocations

Session: [[2026-08-26-1505 academic email requests]]

| Item | Notes |
|------|--------|
| Request collocations: *approve* / *grant* / *accommodate* | Transitive with *a request*; rejected *consent a request* |
| Polite conditional: *appreciate it* vs *be grateful* | Verb *appreciate* takes dummy *it*; adjective *grateful* needs *be*, drops *it* |
| Schedule clash: *a scheduling conflict has arisen* | Present perfect for situational conflicts; *arisen* / *come up* collocations |
| Prerequisite vs indispensable | *prerequisite* / *required for* for institutional conditions; *indispensable* for vital persons/tools |
| Proposal elaboration | Substantive justification (*fits all members' schedules and ensures full team participation*) |

#### beyond

Session: [[2026-08-27-1012 beyond]]

| Item | Notes |
|------|--------|
| Perspective: *past* vs *beyond* | Learner: *past* = moving/traveler viewpoint along a path; *beyond* = domain/boundary viewpoint looking into the outer space |
| Abstract limits: *beyond* + [Noun] | Learner: *beyond repair* = outside the domain of fixability |
| *Besides* vs *Beyond* | Learner: *Besides* = flat addition ($A+B$ list item); *Beyond* = surpassing baseline / stepping to a higher tier |
| Mixed drill 5/5 | Physics, spatial checkpoint (*past*), theoretical framework (*beyond SM*), capability (*beyond grasp*), threshold (*beyond 50 µA*) |

#### appeal / appeal to

Session: [[2026-08-27-1641 appeal]]

| Item | Notes |
|------|--------|
| Subject picks verb job | Person-subject → request; thing-subject → attract. Neighbor nouns (*request*) do not pick |
| *to* person / *for* goal | *appeal to the committee*; *appeal for extra beam time*. Packed: *appeal to X for Y* |
| Noun petition vs pull | *file a formal appeal* / *her appeal was rejected* vs *lost its appeal* / *the appeal of X* |
| *appeals to* not *attracts to* | *The idea appeals to me* |
| Intransitive *appeal* | *decided to appeal* = formal challenge, not attract |

#### TOEFL best campus reply

Session: [[2026-08-29-2046 TOEFL best campus reply]]

| Item | Notes |
|------|--------|
| Rank replies; possible still loses | Not "would a friend say this?" |
| Stuck / required → pack channels | Q3: one door (another section) loses to stack (sections + second waitlist + department appeal) |
| Comprehensive ≠ type-wide rule | Learner stated Q3 extras; rejected promoting pack-more onto Q4 |
| Opportunity + nerves → good news + named office | Q4: *That is exciting* + writing center; hedge *before deciding whether you are ready* = empathy with doubt |
| *coaches* as verb | *The writing center coaches symposium talks* = that office trains you for those presentations |


#### TOEFL listening best response

Session: [[2026-09-01-1030 TOEFL listening choose best response]]

| Item | Notes |
|------|--------|
| Alternative question ($A \text{ or } B$) | Rejects bare *I would* / *Yes*; requires choice or indifference (*Whatever's more convenient*) |
| Presupposition defeat vs subject shift | Response attacks hidden premise (*He usually takes the bus* / *She doesn't teach that section*) rather than irrelevant subject shift (*I don't have a car* / *I didn't take the exam*) |
| Single event vs frequency/routine | Specific-event prompt (*tomorrow / tonight*) rejects frequency/habit answer (*two times a week / every evening*); takes indirect conflict excuse (*I have a project to finish*) |
| Counter-question as response | Inquiry into speaker's intention (*Did you want to go for a swim?* for *Isn't the pool open today?*) stands alone without mental *Yes/No* completion |
| Speaker role / register | Institutional service transactions (*take reservations*) cannot be spoken between friends/colleagues |

#### would rather ... than

Session: [[2026-09-03-0819 would rather than]]

| Item | Notes |
|------|--------|
| Parallel bare verbs: would rather [do A] than [do B] | Strips -ing and to on both sides of than; modal would governs both |
| Ellipsis: omit shared verb across than | eat Italian food than Japanese food (drops second eat) |
| prefer ... to vs. would rather ... than | prefer hires to + gerunds/nouns; would rather hires than + bare verbs |
| prefer to [do A] rather than [(do) B] | Infinitives with prefer hire rather than (not to or bare than) |
| Preposition retention for disambiguation | talk to Alex than to Maria (keeps to to mark Maria as object, avoiding subject confusion) |
| Negation syntax: would rather not [verb] | not placed after rather (never wouldn't rather); preferred action goes into Slot A |
| Quasi-negation in than: implicit "not" | Learner formulation: than marks discarded option; Slot A = desired, Slot B = rejected |
## In progress

Only threads with unfinished core work (verified against session notes). Solid-enough items live under **Known solid** only.

| Topic                                                      | Status                  | Notes                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| QM: displacement operator $D(\alpha)$                      | **next** — unblocked    | Parent note only has Turns 1–2 (fork to HO/ladder); **no derivation yet**. Resume [[2026-07-26-2030 Displacement operator]] → $D(\alpha)=e^{\alpha a^\dagger-\alpha^* a}$                                                                                                                           |
| Exp. tech NP: radioactive beams / projectile fragmentation | **active** — choose dig | Say-back locked: fragment $v$ ≈ beam; same $v$ $\Rightarrow B\rho\propto A/q$ ($^{11}\mathrm{Be}$/$^{11}\mathrm{C}$ = $3:2$); Goldhaber named as cloud-width driver. Open menu: dig Goldhaber / target / methods, or GRE mini-drill. [[2026-08-07-1538 Radioactive beams projectile fragmentation]] |
| TOEFL: main purpose (campus message) | **active** — method | Strip-out locked (sticker can drop; remainder still a mail). Package = one job; option may name stickers as *and its conditions*. Confirm-bundle vs isolated *your* next. [[2026-08-29-1018 TOEFL main purpose]] |

## Session notes

### Known solid

| Thread | Path |
|--------|------|
| Position representation | [[2026-07-27-1331 Position representation]] · `60_Learning_Progress/Quantum Mechanics/2026-07-27-1331 Position representation.md` |
| TISE | [[2026-07-26-2126 Time-independent Schrödinger equation]] · `60_Learning_Progress/Quantum Mechanics/2026-07-26-2126 Time-independent Schrödinger equation.md` |
| Harmonic oscillator | [[2026-07-26-2112 Harmonic oscillator]] · `60_Learning_Progress/Quantum Mechanics/2026-07-26-2112 Harmonic oscillator.md` |
| Ladder operators | [[2026-07-26-2113 Ladder operators]] · `60_Learning_Progress/Quantum Mechanics/2026-07-26-2113 Ladder operators.md` |
| TOEFL: Academic Discussion writing | [[2026-07-26-2233 TOEFL Academic Discussion]] · `60_Learning_Progress/English Learning/2026-07-26-2233 TOEFL Academic Discussion.md` |
| that / which / where | [[2026-08-03-1059 that-which-where]] · `60_Learning_Progress/English Learning/2026-08-03-1059 that-which-where.md` |
| Adverb placement mid-position | [[2026-08-11-1646 adverb placement]] · `60_Learning_Progress/English Learning/2026-08-11-1646 adverb placement.md` |
| Collocations and noun logic | [[2026-08-11-1805 collocations and noun logic]] · `60_Learning_Progress/English Learning/2026-08-11-1805 collocations and noun logic.md` |
| Articles in TOEFL responses | [[2026-08-12-1615 articles in TOEFL responses]] · `60_Learning_Progress/English Learning/2026-08-12-1615 articles in TOEFL responses.md` |
| since / as / because | [[2026-08-14-1618 since-as-because]] · `60_Learning_Progress/English Learning/2026-08-14-1618 since-as-because.md` |
| TOEFL complete-word / form-in-slot | [[2026-08-15-1050 TOEFL complete-word forms]] · `60_Learning_Progress/English Learning/2026-08-15-1050 TOEFL complete-word forms.md` |
| Gerunds / -ing jobs | [[2026-08-15-1435 gerunds]] · `60_Learning_Progress/English Learning/2026-08-15-1435 gerunds.md` |
| Prepositions *at* / *on* / *in* | [[2026-08-19-1555 prepositions]] · `60_Learning_Progress/English Learning/2026-08-19-1555 prepositions.md` |
| along / alongside | [[2026-08-25-1451 along-alongside]] · `60_Learning_Progress/English Learning/2026-08-25-1451 along-alongside.md` |
| Academic email requests / collocations | [[2026-08-26-1505 academic email requests]] · `60_Learning_Progress/English Learning/2026-08-26-1505 academic email requests.md` |
| beyond | [[2026-08-27-1012 beyond]] · `60_Learning_Progress/English Learning/2026-08-27-1012 beyond.md` |
| appeal / appeal to | [[2026-08-27-1641 appeal]] · `60_Learning_Progress/English Learning/2026-08-27-1641 appeal.md` |
| TOEFL: distinct outcomes paraphrase | [[2026-08-27-2255 TOEFL distinct outcomes paraphrase]] · `60_Learning_Progress/English Learning/2026-08-27-2255 TOEFL distinct outcomes paraphrase.md` |
| TOEFL: best campus reply | [[2026-08-29-2046 TOEFL best campus reply]] · `60_Learning_Progress/English Learning/2026-08-29-2046 TOEFL best campus reply.md` |
| TOEFL: listening best response | [[2026-09-01-1030 TOEFL listening choose best response]] · `60_Learning_Progress/English Learning/2026-09-01-1030 TOEFL listening choose best response.md` |
| TOEFL: general vs specific traps | [[2026-09-02-1400 TOEFL general vs specific details]] · `60_Learning_Progress/English Learning/2026-09-02-1400 TOEFL general vs specific details.md` |
| would rather ... than | [[2026-09-03-0819 would rather than]] · `60_Learning_Progress/English Learning/2026-09-03-0819 would rather than.md` |

### Active / next

| Thread | Path |
|--------|------|
| Displacement operator (next) | [[2026-07-26-2030 Displacement operator]] · `60_Learning_Progress/Quantum Mechanics/2026-07-26-2030 Displacement operator.md` |
| Radioactive beams / projectile fragmentation (active) | [[2026-08-07-1538 Radioactive beams projectile fragmentation]] · `60_Learning_Progress/Nuclear Physics/2026-08-07-1538 Radioactive beams projectile fragmentation.md` |
| TOEFL: main purpose (campus message) | [[2026-08-29-1018 TOEFL main purpose]] · `60_Learning_Progress/English Learning/2026-08-29-1018 TOEFL main purpose.md` |

## Gaps / next

1. Displacement operator $D(\alpha)$ — ladder ops drill-complete; resume [[2026-07-26-2030 Displacement operator]]
2. (Optional) complete-word transfer: *assign*/*dates*, *food* — [[2026-08-15-1050 TOEFL complete-word forms]]
3. (Optional) gerunds: *forget*/*try*; hire-set drill — [[2026-08-15-1435 gerunds]]
4. (Optional) TOEFL options: 3-item mixed articles+agreement drill if rusty
5. (Optional) adverb end-OK contrast: place/time at end vs manner mid-position
6. (Optional) GRE-style HO/ladder mixed set later if rusty before applications
7. (Optional) *since* + clause time-vs-cause trap (sibling of the *as* both-doors trap) — [[2026-08-14-1618 since-as-because]]
8. (Optional) prepositions: reopen only if rusty — [[2026-08-19-1555 prepositions]]
9. (Optional) compound-pairing mixed drill if rusty — [[2026-08-11-1805 collocations and noun logic]]
10. (Optional) *along* / *alongside* mixed unlabeled if rusty — [[2026-08-25-1451 along-alongside]]
11. (Optional) TOEFL paraphrase: reopen *outcome* / *too broad* only if decode fails under the clock — [[2026-08-27-2255 TOEFL distinct outcomes paraphrase]]
12. (Optional) *appeal*: *for* + goal-noun (*help*); verb *appeals to* vs noun *the appeal of* — [[2026-08-27-1641 appeal]]
13. (Optional) TOEFL AD: 60s proofread pass / BaS micro-drill if needed later — [[2026-07-26-2233 TOEFL Academic Discussion]]
14. (Optional) TOEFL best campus reply: 2-item unlabeled check if rusty — [[2026-08-29-2046 TOEFL best campus reply]]
15. (Optional) TOEFL detail & EXCEPT: over-specification vs valid generalization check if rusty — [[2026-09-02-1400 TOEFL general vs specific details]]
