# Claim & Compliance Audit — The Wealth Confidence Guide

**Tool:** `scripts/audit_claims.py` (run 2026-07-05) + manual review.
**Result:** No compliance violations. All automated flags reviewed and cleared as
false positives (see below).

## What the scanner checks
- Prohibited financial promises (income, wealth, savings amounts, financial
  freedom, debt elimination, guaranteed returns, guaranteed behaviour change).
- Medical / neurological claims (rewire the brain, brain-wave, treats
  anxiety/stress, neurological, prevents cognitive decline).
- Manifestation / "attract money" / "activate wealth" language.
- Overstated evidence ("research proves", "scientifically proven", "proven to
  work", "eliminates financial stress", "transforms finances").
- Absolutes used as claims (always / never / everyone / guaranteed).
- "studies show / research shows" **without** a nearby citation.
- Numbers / percentages **without** a nearby citation.
- Affiliate product names anywhere in the core ebook.

## Affiliate content
`grep` scan for `billionaire | pyramid wealth | clickbank | hopid | brain wave`
across all chapters, worksheets and `index.qmd`: **none found**. The core ebook
stands alone with no affiliate product, link, or bridge content (RULE 8). The
closing page only invites readers to continue the guide, return to
microsavingdaily.com, and watch for future educational emails.

## Automated flags — all reviewed as false positives
- **ABSOLUTE (16):** every hit is either (a) compassionate/general phrasing
  ("Everyone has them", "you can always adjust it", "this happens to everyone"),
  or (b) the mandatory disclaimer using the words in a **negated** sense: "No
  specific financial result is promised or guaranteed", "not what is guaranteed
  for everyone", and the resources page warning "Be cautious with any resource
  that promises guaranteed results." None assert a guarantee.
- **PROHIBITED (10 before regex tightening):** all were the ordinary verb
  "return"/"returns" ("return to the guide", "return to Micro Saving Daily",
  "one page you can return to") caught by a loose `returns?` pattern, plus the
  negated "guaranteed" cases above. The pattern was tightened to
  `(?:investment|financial|guaranteed) returns?`; no real financial-promise
  language exists.
- **NUM_NO_CITE (6):** all were non-statistical: Typst cover styling values
  (`32%`, font weight `700`), the `ws-10-30-day-plan` include filename, and
  "next-30-days" referring to the plan's duration (the 30-day habit horizon is
  cited to `lally2010` where it is discussed).
- **OVERSTATE / STUDIES_NO_CITE / medical / neurological / manifestation:**
  **zero** hits.

## Evidence-language spot check
The manuscript consistently uses hedged phrasing: "research suggests", "is
associated with", "some research", "one study found", "may make it harder",
"individual experiences vary". No occurrence of "proves", "guarantees results",
"rewires", or similar.

## Numerical claims
The only concrete research figure in the text — habit formation taking about two
months on average with a wide range (≈18–254 days) and a missed day not stopping
formation — is attributed to `lally2010`. All other numbers are structural
(Day 1–7, ten seconds, 30-day plan) rather than statistical.
