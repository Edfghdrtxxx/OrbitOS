---
type: council-session
date: 2026-08-18
question: Given that the user is a master’s student with nearly zero research experience, and ozrwayne/rw-research-skill is accumulated research-method knowledge written by someone else, what should this repo do with that pack?
chairman: Grok-4.6
members: [Grok-4.6, Gemini, Claude]
status: complete
note: GPT seat was filled by Claude at the user's request.
---
# Novice vendor of research pack

## Question & Brief

**Question.** Given that the user is a master’s student with nearly zero research experience, and `ozrwayne/rw-research-skill` is accumulated research-method knowledge written by someone else, what should this repo do with that pack?

**Context.**
- Repo: MATE-Automation. Named pain: too many paper skills, not knowing which to invoke.
- User’s latest stated design: install the pack, improve it, expose only the four public entries, package the rest as `references/`. Integration of existing MATE skills is a later conversation.
- Prior `/align` lock: one door; thin `SKILL.md` router; canons in `references/`. Steal the shape. Do not install the pack.
- A previous council voted: do not install, author local interface skills, vendor only a few refs. That brief omitted the user’s experience. The user opened this session instead of folding.
- New constraint: the user cannot author, and likely cannot curate, research-method canons.
- Default upstream install is already the four public entries. The other ~17 skills are internal and not in the default install.
- User previously rejected installing the full 21-skill pack.
- `academic-draw`, `paper-overleaf-sync`, and `humanizer` are not stale paper doors.
- This council decides architecture, not the file-by-file MATE merge map.

## Stage 1 — First Opinions
### Member-Claude
The last council was right about machinery and wrong about the student.

Do not author a local method stack. Do not pick “the 6–8 good files.” That is the same job as writing the canons, with a thinner alibi. Take the four public skill trees as they ship — SKILL.md plus the references/ they already carry — and copy them into .claude/skills/. That is the accumulated method. Use it as a teacher.

Do not npx skills add as a live global dependency, and do not flatten the 17 uninstalled internals. Default install is already four doors. Gutting internals is an expert edit. A novice who flattens a research OS will not get progressive disclosure; they will get a junk drawer they cannot rank.

Do not fold or redirect MATE paper skills in this step. manuscript → orchestrate-v3 is not in their pack. academic-draw, paper-overleaf-sync, and humanizer stay outside.

The weakest link in “write four thin routers, we counted the files” is who is doing the counting. File operations are cheap. Judging a referee rubric is not. The previous verdict optimized for a maintainer who already knows how to research. That is not this user.

Four doors are not the pain if one of them is a router. The pain was seven overlapping local skills with no default. Their router is the default. Extractor may be adjacent to this TPC/NST repo; leave it in the shipped four anyway. Cutting it is another expert edit.

Recommendation. Frozen copy of the four public skill directories, complete, under .claude/skills/. No live upgrade hook. No flatten. No local authorship of method. No MATE fold yet. Next conversation: which existing local patterns become extra references under those four doors.

### Member-Gemini
Position: Install the Default 4-Door Pack Verbatim. Stop Trying to Curate It.

For a master’s student with near-zero research experience, methodology is the product. Rejecting the pack to "author clean local canons" or "cherry-pick only relevant atoms" is architectural snobbery that actively harms the user. Install the upstream pack’s default 4-door distribution as-is.

The Argument

1. Scaffolding Trumps Code Cleanliness: A novice researcher cannot write, curate, or judge peer-review rubrics, literature extraction protocols, or doctoral-grade writing canons. The value of rw-research-skill is not its directory structure; it is the accumulated research intuition of experienced academics encoded into prompt rules. Stripping it down destroys the exact cognitive scaffolding the user lacks.
2. Upstream Already Solved the Namespace Problem: The default install of rw-research-skill already exposes only the four public entry points, keeping the internal machinery encapsulated within their respective references/. There is no 21-skill namespace pollution to fix.
3. Zero Curation Overhead: Hand-crafting a local replacement forces the user to solve the "how to do research" problem before they can even write the paper. Installing the standard bundle imports an external research advisor into the repo on day one with zero ongoing curation debt.

Weakest Link: Curation requires pre-existing mastery. You cannot curate what you do not understand. Irrelevant background atoms cost a few unused tokens in static files; missing foundational research guardrails costs a rejected manuscript.

Concrete Recommendation
1. Install the default 4-door pack directly into .claude/skills/ without altering or pruning its internal references.
2. Leave local MATE skills untouched for domain-specific automation.
3. Establish rw-research-router as the primary user door for all general research methodology, review, and composition.

### Member-GPT
Note: GPT seat filled by Claude.

Position: Install the Default Four. The Previous Council's Verdict Has a Load-Bearing Assumption That Is False.

The prior council voted "author four local interface skills, vendor only the reference files you actually need." That recommendation contains a hidden premise: the user can author research-method content and curate which upstream references are relevant. A master's student with nearly zero research experience cannot do either. "Author locally" produces four empty routers that dispatch to nothing. "Vendor only what you need" requires judgment about what you need.

The upstream's default install is already the architecture the council asked for: four public entry points, each with its own references/. The 17 internal skills are not in the default install. The "25-skill fork maintenance" objection applies to a scenario nobody is proposing.

The pack's value here is not file-tree elegance. It is peer-review rubrics, extraction heuristics, writing axioms, and structural conventions. For a student who hasn't internalized these patterns yet, this material is both a tool and a teacher.

Weakest link: the four public skills are method-level, not domain-level. They do not touch TPC/NST physics claims, academic-draw, or Overleaf sync. Method and domain are orthogonal layers.

Concrete Recommendation: Install the default four-entry pack with their bundled references/. Do not install the 17 internals. Do not author local replacements. Do not touch existing MATE skills. Phase 2 integration is a later conversation after the user has working experience with both layers.

## Stage 2 — Anonymized Peer Review
**Mapping:** A=Grok-4.6 (host Member-Claude), B=Gemini, C=Claude (GPT seat)

### Member-Claude review
1. Accuracy. Member C over Member B, by a little. C correctly names the prior verdict’s false premise and the fact that the 17 internals are not in the default install. B is right that curation requires mastery, then overclaims that unused atoms cost only “a few unused tokens.”
2. Insight. Member C over Member B. “Four empty routers that dispatch to nothing” and “the 25-skill objection applies to a scenario nobody is proposing” are the actual corrections.
3. Strongest flaw across both. Neither faces the original pain. Installing four new doors and leaving seven local paper skills untouched makes the menu worse. B’s “router as primary door” is a wish, not a mechanism. C defers the collision to Phase 2.
4. Change my opinion? They lock “take the four as shipped; do not curate.” They do not move me to a live `npx` hook.

### Member-Gemini review
1. Accuracy: Member A > Member C. A is technically more precise by specifying a frozen copy into `.claude/skills/` without a live upgrade hook; C uses the ambiguous term "Install."
2. Insight: Member C > Member A. C demonstrates that research method and domain physics are orthogonal layers.
3. Strongest flaw: Ignoring immediate namespace inflation. Adding 4 skills expands the menu from 7 to 11. Neither protects a novice from invoking the wrong legacy tool on Day 1.
4. Impact: No, complete alignment. Both validate methodology as teaching tool, default 4-door already encapsulated, local curation is an expert trap.

### Member-GPT review
1. Accuracy: Member A > Member B. "Frozen copy" names the exact operation. B conflates install and copy.
2. Insight: Member A > Member B. "Who is doing the counting" and "a novice who flattens a research OS gets a junk drawer" challenge progressive disclosure as expertise-gated.
3. Strongest flaw: "Install four new doors, touch nothing existing" temporarily worsens the named pain. The router does not know manuscript, thesis-audit, or conclusion exist.
4. Impact: Core position unchanged. Adopt A's "frozen copy" language. Propose a one-line signpost in each existing MATE paper skill and a note in the router that domain-specific MATE tasks remain in dedicated skills. That is not a fold. It's a signpost.

## Stage 3 — Chairman Synthesis

Take the four public skill trees as they ship. Copy them, complete, into `.claude/skills/`. Do not author method. Do not curate their references. Do not flatten the 17 uninstalled internals. Do not put a live `npx` upgrade hook on the copy. Do not fold or redirect the existing MATE paper skills in this step.

That is where all three members already sat in Stage 1 once the student’s experience was in the brief. The previous council’s “write four thin routers and pick a few refs” is vacated: it assumed a curator this user is not. Methodology is the product. The default four-door distribution already is the architecture that earlier argument was trying to invent. Method and domain stay orthogonal: `thesis-audit`, `conclusion`, `manuscript`, `academic-draw`, `paper-overleaf-sync`, and `humanizer` remain the domain layer.

Peer ranking did not dock the frozen-copy mechanism (A). It did dock every member, including the host, for the same miss: four new doors plus seven untouched local paper skills is an eleven-item menu, which is the original pain made worse. Gemini named the inflation. Claude named the fix that is not a fold — a signpost on each local paper skill pointing general method to `rw-research-router`, and a signpost on the router that TPC/NST audit, Overleaf sync, conclusion contracts, and plotting stay in their dedicated skills. The chairman takes that patch. It is the only Day-1 protection the council produced.

## Unresolved Tension
Whether Day-1 signposts are enough, or whether the router must actually know the MATE jobs exist — that second option is already integration, which this session was not asked to draw.

## Recommendation
Write this verdict into `99_System/Handoff documents/paper-abd-2026-08-18/B_paper_skill.md`. Implement nothing until the user says go. Next conversation: how existing MATE paper patterns sit beside the four vendored doors.
