# Live UI/UX interaction survey — 2026-09-18

**Methodology**: I conducted a live manual walkthrough of the SPA on a local `http.server` (port 8123) driving a headless Chrome instance via CDP (viewport 1440x900 desktop and 390x844 mobile). I simulated both a first-time and returning user traversing the Home `#/`, Practice, Formulas, Mistakes, Plan, and Exam routes. I verified keyboard navigation, measured above-the-fold calls-to-action (CTAs), counted clicks-to-start, and tested mid-session browser behaviors.

## Findings

**F1. Plan tasks lack launchers (Blocker)**
**Claim**: The Study Plan calendar displays scheduled tasks as plain text with checkboxes, forcing users to manually construct the required sets elsewhere.
**Evidence**: On `#/plan`, tasks appear as `Set 02 · Work, Energy & Momentum Conservation (n=13) — timed (~100 min)` (verified via `10-plan.png`), but contain no clickable `<button>` or `<a>` elements to launch the set directly. 
**Impact on daily study before Nov 1**: Severe. Users must read the plan, navigate to Custom Quiz, and manually recreate the exact parameters for their daily timed set, adding significant friction to the most important daily action.
**Severity**: Blocker
**Fix sketch**: `content/plan-renderer.js` or `plan.js`. Add a `<button>` next to each task row that dispatches a routing action (e.g., `#/practice/custom?set=02`) with the pre-filled parameters.
**Effort**: M

**F2. Browser 'Back' button destroys practice sessions (Blocker)**
**Claim**: Hitting the browser's Back button during a practice session exits the app flow and loses all progress without warning.
**Evidence**: While on `#/practice/all` mid-session, triggering `history.back()` immediately popped the route to `#/` (Home). The SPA does not push state for individual questions or intercept navigation away from an active session.
**Impact on daily study before Nov 1**: High risk of data loss. A slip of the mouse or a swipe gesture on a trackpad can destroy a 100-minute timed set instantly.
**Severity**: Blocker
**Fix sketch**: `router.js` and `practice/all.js`. Implement a `beforeunload` listener and push a dummy history state when starting a session, so popping it intercepts the back action and triggers a "Leave session?" confirm modal.
**Effort**: S

**F3. Formula study CTA fails to initiate study session (Should-fix)**
**Claim**: Clicking "Study 10 today" populates the formula picker but strands the user without a clear way to actually start the flashcards.
**Evidence**: Triggering "Study 10 today" filled the batch, but the UI only presented tabs (`Study`, `Match`, `Type`...) and buttons like `Save picks` or `Cancel` (`08-formulas-picker.png`). The user must manually save and find the study trigger. Additionally, the expected "Browse" tab is missing entirely.
**Impact on daily study before Nov 1**: Users will repeatedly struggle to complete their daily spaced repetition batch if starting it feels like configuring a database query.
**Severity**: Should-fix
**Fix sketch**: `formulas/picker.js`. When "Study 10 today" is clicked, automatically save the picks and immediately transition the view into the active flashcard `Study` tab.
**Effort**: S

**F4. Overwhelming above-the-fold CTA density on desktop (Should-fix)**
**Claim**: The desktop homepage presents 32 actionable buttons/links above the fold, largely driven by a dense, uncollapsible sidebar.
**Evidence**: Measured 32 CTAs on `#/` (1440x900 viewport, `01-home.png`), with 25 of those residing in the sidebar. The sidebar names are also occasionally opaque (e.g., "Library", "Custom quiz" instead of just "Practice"). Mobile hides this well (~10 CTAs).
**Impact on daily study before Nov 1**: Dilutes focus. The excellent "Today" agenda card is forced to compete with 25 peripheral navigation links.
**Severity**: Should-fix
**Fix sketch**: `sidebar.js` and CSS. Group secondary links (Achievements, History, Analytics, Notes) into a collapsible "More" accordion or a profile dropdown, reducing the persistent sidebar to 5-7 core destinations.
**Effort**: S

**F5. Lack of visual completion states on mock exams (Nit)**
**Claim**: Released mock exams in the lobby do not display whether the user has already sat them.
**Evidence**: On `#/exam`, while the "next real exam" (2024) is highlighted, older forms (GR1777, GR0877) render as plain buttons (`11-exam.png`). No checkmarks, "Sat", or score badges appear on the buttons.
**Impact on daily study before Nov 1**: Minor. Users might forget which intact forms they've burned, though the "Past simulations" section helps.
**Severity**: Nit
**Fix sketch**: `exam/lobby.js`. Cross-reference the forms against the user's `History` store and append a visual completed badge to the corresponding buttons.
**Effort**: S

## Top 3 in this aspect
1. **F1. Plan tasks lack launchers**: A Study Plan must be actionable; forcing manual Custom Quiz construction for daily sets defeats the purpose of the agenda.
2. **F2. Browser 'Back' button destroys practice sessions**: Essential safeguard; without it, users will inevitably lose hard-earned progress during long timed sets due to accidental trackpad swipes.
3. **F3. Formula study CTA fails to initiate study session**: The formula review flow should be a frictionless daily habit, not a multi-step configuration puzzle.

## Not nominated
- **N4 formula picker wall**: Fixed. The 334-row dump has been replaced with a clean, collapsed "Chapters" accordion (`08-formulas-picker.png`).
- **Copy honesty (1135 vs 666)**: The math is perfectly honest and transparent in the UI (666 drawable + 469 intact = 1135).
- **Responsive layout / Mobile support**: The mobile viewport cleanly collapses the sidebar and prioritizes the "Today" agenda, retaining excellent usability.
- **Accessibility basics**: `prefers-reduced-motion` is respected, and `:focus-visible` focus rings are properly defined in the global CSS.
- **Console Errors**: No JavaScript console errors were detected across any of the core routes tested.

## Uncertainties
- It is unclear if KaTeX rendering glitching occurs on highly complex equations, as the 5 practice questions I encountered rendered flawlessly, but the pool is large.
- The sidebar link text contains heavy CSS-driven `letter-swap` duplication in the DOM (e.g., `<span class="letter-swap-sr">...`), which caused initial concern but appears to be intentional visual design rather than a layout glitch. It is unknown if this severely impacts screen readers.
- I was unable to verify if the "weighted draw" for practice sets perfectly matches ETS topic distributions statistically, as that requires backend code analysis rather than UI interaction.

---
### Metrics Summary
| Metric | Desktop (1440x900) | Mobile (390x844) |
|--------|--------------------|------------------|
| **CTAs Above Fold** | 32 | ~10 (sidebar hidden) |
| **Console Errors** | 0 | 0 |
| **Clicks: Mixed Practice** | 2 | 2 |
| **Clicks: Formula Study** | 3+ (Confusing) | 3+ (Confusing) |
| **Clicks: Mistake Drill** | 2 | 2 |
| **Clicks: Mock Exam** | 2 | 2 |
| **Formula Picker Height** | ~900px (Collapsed) | - |