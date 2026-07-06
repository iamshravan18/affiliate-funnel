# Research Plan — The Wealth Confidence Guide

**Project:** The Wealth Confidence Guide (Micro Saving Daily)
**Purpose of research:** To ground a practical, educational money-awareness
workbook in verifiable behavioral-science and consumer-finance evidence. The
guide teaches a *Notice · Pause · Repeat* awareness practice. Research is used
to support the *reasoning* behind the practice, not to promise any financial or
medical outcome.

**What research is NOT used for here:** proving that the guide "works," making
income or savings promises, or claiming brain/medical effects. Every claim is
worded as description of what research *suggests* or *is associated with*.

---

## 1. Research questions

The manuscript needs evidence for a small number of load-bearing ideas. Each
question maps to one or more planned chapters.

1. **Habitual / automatic purchasing** — Are many everyday purchases driven by
   habit and context rather than fresh deliberate decisions? (Days 1, 3, 6)
2. **Self-monitoring / self-observation** — Is simply *noticing* or recording a
   behavior associated with changes in that behavior? (Day 1, reflection)
3. **Impulse & online impulse buying** — What situational and emotional factors
   are associated with unplanned purchases, including online? (Days 2, 3; online
   chapter)
4. **Emotional / situational spending** — Is negative affect or emotional state
   associated with spending behavior? (Day 3; "common moments" chapter)
5. **Financial stress and decision-making** — Can financial strain or scarcity
   affect attention and decision quality? (Day 3; welcome framing)
6. **Implementation intentions ("if–then" plans)** — Are specific pre-commitment
   plans associated with higher rates of acting on an intention? (Days 4, 7)
7. **Choice architecture / friction / defaults** — Do small changes in ease,
   defaults, or friction influence choices? (Day 5)
8. **Subscription inertia / automatic renewals / inattention** — Do people keep
   paying for subscriptions they under-use because of inattention or default
   continuation? (Recurring-purchases chapter)
9. **Habit formation & repetition** — How do habits form through repetition and
   context, and how long/variable is the process? (Day 6; 30-day plan)
10. **Self-compassion & lapse recovery** — Is a self-compassionate response to a
    slip associated with getting back on track rather than giving up? (Restart
    chapter; Day 6 reminder)
11. **Financial self-efficacy / financial well-being** — Is confidence in
    managing money (self-efficacy) associated with financial well-being or
    healthier financial behavior? (Welcome; Day 7; framing of "confidence")

---

## 2. Search strategy

- **Primary discovery tool:** OpenAlex API (`api.openalex.org`). Multiple
  focused queries per theme — never a single generic query. Filters used where
  helpful: `type:article`/`review`, sort by `cited_by_count`, and language.
- **Verification tools:** Crossref (`api.crossref.org`) and DOI resolution to
  confirm title, authors, year, journal, and DOI independently of OpenAlex.
- **Institutional/government sources:** located directly on official domains
  (e.g. consumerfinance.gov / CFPB, federalreserve.gov). These are used for
  descriptive, well-established facts (e.g. financial well-being framing,
  subscription/auto-renewal consumer guidance) and cited to the stable report
  URL.
- **The OpenAlex API key** is read only from the environment
  (`OPENALEX_API_KEY`) and never printed, logged, or committed. Public queries
  also work without the key; the key is used only to join the polite pool /
  raise rate limits.

### Example search-term clusters (expanded per theme)
- "impulse buying", "online impulse buying", "unplanned purchase"
- "habit formation", "how are habits formed", "repetition automaticity"
- "self-monitoring behavior change", "self-observation reactivity"
- "implementation intentions", "if-then plans goal attainment"
- "choice architecture", "nudge defaults", "behavioral friction"
- "subscription inattention", "automatic renewal", "consumer inertia"
- "emotion negative affect spending", "situational impulse"
- "financial well-being scale", "financial self-efficacy behavior"
- "scarcity cognition", "financial stress decision making"
- "self-compassion goal setback", "lapse relapse behavior change"

---

## 3. Source hierarchy (priority order)

1. US government / regulatory (CFPB, Federal Reserve, NBER working papers).
2. Peer-reviewed **systematic reviews & meta-analyses**.
3. Peer-reviewed behavioral-science research (experiments, longitudinal).
4. Peer-reviewed consumer-psychology research.
5. Universities / recognized research institutions.
6. Recognized nonprofit financial-education organizations.
7. Foundational books/papers with traceable references (used sparingly).

Target: **~12–20 strong sources**. Quality over quantity. Prefer reviews and
high-citation foundational studies over one-off small studies.

---

## 4. Inclusion criteria

A source may be used only if ALL are true:
- Title, authors, year, publication, and a DOI or stable URL are independently
  verifiable (OpenAlex + Crossref/official domain).
- It genuinely addresses the specific idea being cited (not just a similar
  title).
- Its population and design are relevant to everyday adult consumer behavior or
  general behavior-change mechanisms.
- The result direction (correlation vs. causation) is understood and recorded.
- It is peer-reviewed OR published by a recognized government/institutional body.

## 5. Exclusion criteria

Reject a source if ANY are true:
- Cannot verify metadata or DOI/URL.
- Predatory / non–peer-reviewed venue with no institutional standing.
- Marketing content, vendor claims, or affiliate material.
- Neuroscience/"brainwave" studies used only to imply a marketing outcome.
- Result overstated relative to design (small pilot presented as proof).
- Off-topic (e.g., clinical populations only, unrelated domain) unless clearly
  transferable and labeled as such.
- Retracted or flagged papers.

---

## 6. Verification process (per claim)

1. Discover candidate via OpenAlex; record OpenAlex ID + DOI.
2. Confirm metadata via Crossref / DOI resolver (title, authors, year, venue).
3. Read the abstract / open-access record (and, where available, the passage)
   to confirm the *exact idea* supported.
4. Record: exact supporting idea, correlation vs. causation, population,
   limitation, and evidence strength (High / Moderate / Limited).
5. Write reader-friendly wording using hedged language (RULE 5).
6. Enter the row in `evidence-matrix.csv` and mark `Verified = yes` with a date.
7. Only claims present and verified in the matrix may enter the manuscript.
8. `verify_citations.py` cross-checks that every `[@key]` in the manuscript
   exists in `references.bib`, and flags unused/duplicate entries.

---

## 7. Evidence limitations (stated up front)

- Most consumer-behavior findings are **correlational** or from **specific
  samples**; they describe associations and tendencies, not guarantees for any
  individual.
- Effect sizes vary; "statistically significant" is not "large" or "universal."
- Popular figures (e.g., "it takes N days to form a habit") are often
  oversimplified; the guide reports the *range and variability* from the actual
  study rather than a single round number.
- Government financial-well-being framing is a **measurement/definition**
  contribution, not proof that any exercise raises well-being.
- The guide therefore uses hedged language throughout and repeats that
  "individual experiences vary."

---

## 8. Evidence matrix template

See `evidence-matrix.csv`. Columns:
`Claim ID, Topic, Proposed Claim, Reader-Friendly Wording, Source Title,
Authors, Year, Publication, Source Type, DOI, Stable URL, OpenAlex ID,
Exact Supporting Passage, Evidence Limitation, Evidence Strength,
Target Chapter, Verified, Verification Date, Notes`
