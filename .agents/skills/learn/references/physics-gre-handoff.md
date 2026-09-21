# Physics GRE transfer handoff

Load this reference only when a Physics `/learn` session reaches its drilling stage. The learner's explicit request for drills remains the gate; this handoff does not trigger from ordinary explanation, formula recall, or a timed-pack request.

## Purpose

Replace the usual tutor-authored Physics drill batch with exactly **three real Prep Studio questions** targeted to the concepts established in the current session. Tutor-authored drills remain the fallback when the local Studio, its current rich origin, or a suitable bank match is unavailable.

This is a Learn transfer check, not a timed GRE pack. Do not invoke `/practice-physics-gre-set`, tick a daily timed child, bump a timed-pack parent, or write `Misses-Log.md` from this handoff.

## Parent → drill-trigger payload

The Learn agent dispatches a drill-trigger sub-agent with:

```yaml
session_note: 60_Learning_Progress/<topic>/<session-note>.md
learned:
  - concept: <what the learner can now explain or derive>
    topic_id: <PGRE topic code, e.g. em>
    subtopics: [<bank metadata terms when known>]
weak_spots: [<current-session misses and Trap-Log patterns>]
learning_status: <solid | in-progress, with terse evidence>
count: 3
```

Do not dispatch until the learning payload is grounded in the current session note and `Progress-context.md`; never infer a topic from the note title alone when the body gives a narrower concept.

### Parent Guard (anti-drift)
On a learner drill request in Physics:
- **Pre-dispatch opt-out:** If (and only if) the learner explicitly asks to stay in chat (e.g. "drill me here in chat"), honor that and use `references/drills.md` directly without dispatching.
- **Mandatory dispatch:** For every other Physics drill request, the parent Learn agent MUST dispatch the `drill-trigger` sub-agent first.
- **Strict prohibitions:** The parent Learn agent MUST NOT probe port 8000, self-launch, self-declare Studio unavailable, generate/paste conversational questions, invoke `/practice-physics-gre-set`, or navigate tabs until the sub-agent returns.
- **Post-dispatch rule:** Post-dispatch conversational fallback to `references/drills.md` is permitted ONLY on an exact structured `status: fallback` receipt from the sub-agent. Sub-agent timeout, crash, or absent receipt is NOT permission to improvise or fall back to chat drills (re-dispatch or report blocker).

## Drill-trigger sub-agent contract

1. **Find and connect to Prep Studio via CDP.** The sub-agent triggers `skill://web-access` to drive the user's Chrome through CDP (do not rely on AppleScript JavaScript execution). Reuse the richest live Prep Studio tab and its current origin. Never open a second origin merely to launch this handoff; `file://`, `localhost:8000`, and `127.0.0.1:8000` have separate progress stores.
2. **Use the default practice bank only.** Select from `PGRE.allQuestions()` / the existing practice pool. Never include intact released exam questions (`src: 'ets-exam'`) or book sample-exam questions (`src: 'cpg-exam'`). The approved `ets-drill` pool is allowed.
3. **Select exactly three unique qids.** Use the shipped selector with the grounded payload:

   ```js
   var cfg = PGRE.launchLearnDrill({
     topicIds: ['<topic_id>'],
     subtopics: ['<bank subtopic>', '...'],
     concepts: ['<learner-understands concept>', '...'],
     weakSpots: ['<current-session miss or trap>', '...'],
     difficulty: <session GRE level when known>,
     excludeIds: ['<qid already attempted this session>', '...'],
     label: 'Learn transfer · <short topic label>'
   })
   ```

   `PGRE.launchLearnDrill` selects from `PGRE.allQuestions()` only, rejects `ets-exam` and
   `cpg-exam`, prefers exact subtopic/text and weak-spot matches, prefers unseen items,
   and returns `null` unless it can launch exactly three unique questions. Do not use a
   fixed numbered pack as a substitute. If the selector is unavailable or returns `null`,
   return `status: fallback`.
4. **Launch the handoff via CDP.** In the connected Prep Studio tab, execute `PGRE.launchLearnDrill(...)` in the page to write `sessionStorage['pgre-quiz-config']` and route to `#/practice/custom`. Stop at the Learn-specific Start/Resume gate; never click Start, Resume, or Start over for the learner. Never route to a timed pack (`#/practice/pack/NN`) or invoke `/practice-physics-gre-set`.
5. **Return a launch receipt to Learn.** Include `status: launched`, the three qids from
   `cfg.ids`, their topic/subtopic labels, the launched URL/origin, and the exact learned
   concepts used for matching. If any prerequisite fails, return `status: fallback` with
   the reason; do not invent qids or open a blank custom quiz.


## Learn-session recording

Before launch, append a short handoff block to the current session note containing the trigger, learned concepts, qids, and the instruction that the learner should answer in Prep Studio. Do not paste answers or solutions before the learner attempts the set.

After the learner returns a valid `kind: pgre-learn-drill-receipt` from `pgre-learn-drill-receipt` storage (or a pasted JSON receipt with that kind), append the score, `missQids`, and the `questions` payload containing the three prompts/options to the session note. Reweight the next Learn turn toward misses and immediately add any conceptual or calculation trap to `Trap-Log.md`. A perfect receipt closes the transfer check without inventing additional drills.

The dedicated Learn receipt key is intentionally separate from `pgre-agent-receipt`; the timed-pack skill must never consume this receipt.

## Fallback

Use the existing `references/drills.md` loop ONLY when:
- the learner explicitly requested in-chat drills before dispatch (pre-dispatch opt-out); or
- the `drill-trigger` sub-agent settled with an exact structured `status: fallback` receipt (e.g. no live Prep Studio tab found via CDP, bank cannot produce three unique targeted questions, launch helper unavailable).

Post-dispatch conversational fallback is strictly receipt-driven; parent agents must never infer or self-declare fallback prior to sub-agent settlement.
Fallback drills still require Physics-GRE difficulty, mixed judgment, no hints before attempts, full prompts in the session note, weak-spot reweighting, and a close naming 2–3 error-prone patterns.
