# Japan Immigration Pathway Decision Process (Comprehensive Record)

## Document Metadata
- Document date: **2026-02-13**
- Scope: Full mission record for choosing between exactly two options:
  1. **Work Track**
  2. **PhD Track**
- Purpose: Provide a full, readable decision trail (not only the latest Q&A)

## 1) Mission and Baseline

### Mission objective
Determine whether a primary/backup pathway can be finalized under the workflow rule, or must remain in `Revise`.

### Starting baseline (before rerun)
- Work score: **59.50**
- PhD score: **44.65**
- Gap: **14.85** (Work ahead)
- Average confidence: Work **0.79**, PhD **0.73**
- Initial status: **Revise** (because confidence/gaps unresolved)

## 2) Required Inputs Read First
The decision run began by reading these required notes:
1. `20_Project/Japan_Itinerary/Japan_Itinerary.md`
2. `20_Project/Japan_Itinerary/Work_vs_PhD_Decision_Workflow.md`
3. `20_Project/Japan_Itinerary/Work_vs_PhD_Scorecard.md`
4. `20_Project/Japan_Itinerary/Official_Source_Verification_2026-02-13.md`
5. `20_Project/Japan_Itinerary/Work_Methods/Checklist.md`
6. `20_Project/Japan_Itinerary/PhD_Methods/Checklist.md`

Also reviewed related evidence notes for track-level details:
- `20_Project/Japan_Itinerary/Work_Methods/Companies/IBM_Research_Tokyo/Overview.md`
- `20_Project/Japan_Itinerary/Work_Methods/Companies/Canon_Medical/Overview.md`
- `20_Project/Japan_Itinerary/PhD_Methods/Universities/UTokyo_RIKEN.md`
- `20_Project/Japan_Itinerary/PhD_Methods/Universities/Osaka_University.md`

## 3) Decision Method Used (Exact Workflow)
Used the workflow in `Work_vs_PhD_Decision_Workflow.md` exactly:
1. Re-validate policy-sensitive items with official sources.
2. Resolve or explicitly carry forward 3 blocking gaps:
   - ISA designated activities period/conditions
   - personal financial runway
   - anti-996 evidence at employer/lab level
3. Re-run hard gates (pass/fail).
4. Re-fill weighted table (rating + confidence + evidence per criterion).
5. Recompute confidence-adjusted totals.
6. Re-run best/base/worst stress test.
7. Apply rule:
   - if gap >= 8 and both avg confidence >= 0.75 -> finalize higher score
   - else -> Revise

## 4) Official Evidence Revalidation (2026-02-13)

### High-confidence official anchors used
- MOFA long-term visa index + visa category pages (with mixed per-page update dates confirmed)
- MHLW labor-law explanatory material on overtime limits and penalties
- UTokyo admissions/scholarship pages
- Osaka admissions/financial support/tuition pages
- Canon/IBM/RIKEN official pages for organization-level work condition signals
- Study in Japan official living-cost baseline

### Medium-confidence area (explicitly carried)
- MOJ designated-activities detailed pages were intermittently inaccessible in-session (403 observed), so details were triangulated with MOJ entry links and university operational guidance that cites these flows.

## 5) Blocking Gaps: Resolution Status

### A) ISA designated-activities period/conditions
- Status: **Partially resolved, carried forward**
- Resolved: official entry points identified and linked.
- Not fully resolved: direct MOJ page retrieval reliability in-session; must re-confirm at action time.

### B) Personal financial runway (both tracks)
- Status: **Partially resolved, carried forward**
- Resolved:
  - Official living-cost baseline added: national average **JPY 105,000/month**.
  - Official tuition/funding pages refreshed for UTokyo/Osaka.
- Not fully resolved: personal account-level cash proof (bank evidence) still missing.

### C) Employer/lab anti-996 evidence
- Status: **Partially resolved, carried forward**
- Resolved: legal framework + organization-level policy/work-condition evidence added.
- Not fully resolved: team/lab-level overtime reality still needs direct screening.

## 6) Hard Gates (Rerun Result)

### Work Track
- Legal feasibility: **Pass**
- Timeline feasibility: **Pass**
- Financial safety: **Pass (conditional on personal cash proof)**
- Lifestyle fit: **Pass (provisional at team-level)**

### PhD Track
- Legal feasibility: **Pass**
- Timeline feasibility: **Pass**
- Financial safety: **Fail** (no confirmed personal funding/self-funding proof)
- Lifestyle fit: **Pass (provisional at lab-level)**

## 7) Weighted Scoring Rerun (Confidence-Adjusted)

### Criteria model
- 8 criteria, total weight 100
- Formula: `weight * rating / 5 * confidence`

### Rerun totals
- Work: **56.44**
- PhD: **46.03**
- Gap: **10.41** (Work ahead)
- Avg confidence:
  - Work: **0.781**
  - PhD: **0.749**

## 8) Stress Test (Best / Base / Worst)
- Best case: Work **62.30**, PhD **53.75**, gap **8.55** (Work ahead)
- Base case: Work **56.44**, PhD **46.03**, gap **10.41** (Work ahead)
- Worst case: Work **44.70**, PhD **35.85**, gap **8.85** (Work ahead)

Winner stability: **Work stays ahead in all three scenarios**.
Stress-test assumption used in this audit revision: applied MOJ-access confidence-penalty deltas from base-case MOJ-dependent criteria to best/worst totals (`Work -1.00`, `PhD -1.05`) because criterion-level scenario tables were not logged.

## 9) Rule Application and Decision Outcome
Rule check:
- Gap >= 8? **Yes** (10.41)
- Both avg confidence >= 0.75? **No** (Work 0.781, PhD 0.749)

Therefore, by rule, the cycle outcome became:
- Current higher-score track: **Work Track** (not finalized)
- Backup: **PhD Track (funding-conditional)**
- Decision status in the workflow file: **Revise**

## 10) Follow-up Challenge from User and Re-check
User challenge:
- "I remember RIKEN pays PhD 200k yuan monthly"
- "I can accept overtime if work is constrained"

### Findings from official pages
- RIKEN evidence supports **JPY-based** programs (not CNY):
  - JRA: around JPY 200,000/month; FY2026 call mentions planned JPY 250,000/month.
  - RSR: JPY 1,800/hour up to 20h/week.
- This shows **available programs**, but not automatic personal confirmation.

### Overtime interpretation
- Overtime can exist in practice.
- But it is constrained by contract/program conditions and Japanese labor rules.
- Practical decision implication: evaluate team/lab-specific workload, not policy text alone.

## 11) Sensitivity Analysis (If PhD Funding Becomes Formally Confirmed)
A sensitivity rerun was calculated:
- Current PhD: **46.03**
- If PhD financial criterion improves to confirmed-funding levels: PhD could rise to about **51.79**
- Gap vs Work 56.44 would shrink to about **4.65**

Workflow consequence under your rule:
- Gap < 8 -> status should switch to **Revise** (not finalized), pending full rerun.

## 12) What Counts as "Funding Confirmed"
Required evidence to upgrade PhD financial gate from fail to pass:
- Scholarship/assistantship award notice addressed to you
- Explicit amount + duration + conditions
- If conditional, all required conditions and deadlines shown
- If lab-funded, written confirmation from lab/school office

## 13) Files Updated During This Mission
Updated Japan itinerary decision artifacts:
- `20_Project/Japan_Itinerary/Work_vs_PhD_Scorecard.md`
- `20_Project/Japan_Itinerary/Work_vs_PhD_Decision_Workflow.md`
- `20_Project/Japan_Itinerary/Official_Source_Verification_2026-02-13.md`

This root-level comprehensive record:
- `Japan_Pathway_Findings_2026-02-13.md`

## 14) Current Practical Conclusion (As of 2026-02-13)
- Without stronger official-source accessibility and/or confidence recovery: status remains **Revise** under the rule.
- Work remains the current higher-scoring track, but not finalized on 2026-02-13 because one average-confidence condition failed.
- If you provide formal PhD funding proof: decision remains **Revise** and must be fully re-scored.
- Your acceptance of overtime is compatible with either route, but selection still depends on real team/lab workload behavior.

## 15) Source Links Used in This Mission
- MOFA long-term visas:
  - https://www.mofa.go.jp/j_info/visit/visa/long/index.html
  - https://www.mofa.go.jp/j_info/visit/visa/long/visa1.html
  - https://www.mofa.go.jp/j_info/visit/visa/long/visa6.html
  - https://www.mofa.go.jp/j_info/visit/visa/long/visa16.html
- MOJ / ISA references:
  - https://www.moj.go.jp/isa/applications/status/designatedactivities14.html
  - https://www.moj.go.jp/isa/applications/status/designatedactivities11.html
  - https://www.moj.go.jp/isa/applications/procedures/nyuukokukanri07_00131.html
  - https://www.moj.go.jp/isa/publications/materials/newimmiact_3_evaluate_index.html
- MHLW labor framework:
  - https://tecc.mhlw.go.jp/wp-content/uploads/labor_related_laws2024.pdf
  - https://jsite.mhlw.go.jp/tokyo-roudoukyoku/content/contents/001757665.pdf
- UTokyo / Osaka:
  - https://www.s.u-tokyo.ac.jp/en/admission/graduate.html
  - https://www.s.u-tokyo.ac.jp/en/admission/scholarship.html
  - https://www.sci.osaka-u.ac.jp/en/admissions/graduate-admissions/
  - https://www.sci.osaka-u.ac.jp/en/overseas-study/financial_support/
  - https://www.osaka-u.ac.jp/en/campus/life/tuition/tuition.html
- RIKEN funding/work-condition pages:
  - https://www.riken.jp/en/careers/programs/jra/
  - https://www.riken.jp/en/careers/programs/jra/application/2026/
  - https://www.riken.jp/en/careers/programs/rsr/
  - https://www.riken.jp/en/careers/newcomers/benefits/index.html
- Work organization context:
  - https://www.ibm.com/jp-ja/careers/blog/ise-recruitment
  - https://jp.newsroom.ibm.com/2021-12-23-new-way-of-working
  - https://global.canon/en/sustainability/society/employ/initiatives/
  - https://www.medical.canon/jp/recruit/newgradu/recruit/requirements.html
- Cost-of-living baseline:
  - https://www.studyinjapan.go.jp/en/life/cost-of-living/
- Additional university operational guidance used for designated-activities triangulation:
  - https://global.support.ritsumei.ac.jp/hc/ja/articles/4403634978451-%E5%8D%92%E6%A5%AD-%E4%BF%AE%E4%BA%86%E5%BE%8C%E3%82%82%E6%97%A5%E6%9C%AC%E3%81%A7%E5%B0%B1%E8%81%B7%E6%B4%BB%E5%8B%95%E3%82%92%E7%B6%99%E7%B6%9A%E3%81%97%E3%81%9F%E3%81%84%E3%81%A7%E3%81%99-%E5%9C%A8%E7%95%99%E8%B3%87%E6%A0%BC-%E7%95%99%E5%AD%A6-%E3%81%AE%E3%81%BE%E3%81%BE%E6%97%A5%E6%9C%AC%E3%81%AB%E6%BB%9E%E5%9C%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%A6%E3%82%82%E3%82%88%E3%81%84%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%81%8B-2026-2-12%E6%9B%B4%E6%96%B0
  - https://www.wakayama-u.ac.jp/en/center-for-international-education-and-exchange/frequently-asked-questions/visa/about-changing-residential-status-to-designated-activities-after-graduation.html

## 16) Conclusions and Recommendation

### Final conclusions (as of 2026-02-13)
- Based on the rerun with official-source revalidation plus audit confidence-penalty handling, **decision status is `Revise`**.
- This result is driven by:
  - score gap `10.41` (>= 8),
  - average confidence condition not fully met (`PhD 0.749 < 0.75`),
  - Work passing hard gates (with conditional financial proof),
  - PhD failing the Financial Safety Gate due missing personal funding confirmation.
- The statement \"PhD has no confirmed funding yet\" remains valid unless a formal award/offer letter is provided.
- Your overtime preference does not invalidate the decision model, but it changes the practical screening target from \"avoid overtime\" to \"ensure acceptable, sustainable workload limits at team/lab level\".

### Recommendation
1. Keep **Work Track as current leading option** and continue execution tasks that do not require irreversible commitment.
2. Keep **PhD Track as Backup**, and prioritize funding confirmation tasks as the key unlock.
3. Trigger a mandatory full rerun the moment one of these conditions is met:
   - You receive formal PhD funding confirmation (amount + duration + conditions),
   - New MOJ designated-activities wording materially changes timeline feasibility,
   - New evidence changes the Work vs PhD gap below 8.
4. For the next checkpoint window, use this decision policy:
   - If MOJ direct pages become accessible and confidence recovers to satisfy both-track `>= 0.75`, rerun and then decide finalization.
   - If funding is still unconfirmed by 2026-03-15, continue Work-first execution and maintain PhD as contingency only.
