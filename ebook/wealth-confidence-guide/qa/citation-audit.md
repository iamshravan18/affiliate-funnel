# Citation Audit — The Wealth Confidence Guide

**Tool:** `scripts/verify_citations.py` (run 2026-07-05)
**Result:** OK — no missing citations, no duplicate keys, no unused references.

## Summary
- `references.bib` entries: **18**
- Distinct keys cited in the manuscript: **18**
- Keys present in `research/evidence-matrix.csv`: **18**
- Cited but missing from `references.bib`: **none**
- In `references.bib` but never cited: **none**
- Duplicate bib keys: **none**
- Cited but missing an evidence-matrix row: **none**

Every research-based claim in the manuscript therefore (a) uses a `[@key]` that
resolves to a real, verified bibliography entry, and (b) traces back to a row in
the evidence matrix that records the source, exact supporting idea, limitation,
and verification date.

## Verification method (per source)
1. Discovered via OpenAlex (`scripts/openalex_research.py`, multiple focused
   queries per theme).
2. Metadata (title, authors, year, venue, volume/pages) confirmed **independently
   via Crossref** by DOI, or on the official government domain (CFPB, FTC).
3. Real canonical OpenAlex IDs fetched by DOI (no IDs invented).
4. Abstract/record read to confirm the *exact* idea being cited; correlation vs.
   causation, population, and limitation recorded in the evidence matrix.
5. Reader-friendly wording written with hedged language (RULE 5).

## Per-key usage map
| Key | Used in |
|-----|---------|
| bandura1977 | welcome, day7, close |
| beatty1998 | day2, day3, situations |
| breines2012 | day6, restart, ws-9 |
| cfpb2015 | welcome, resources |
| dellavigna2006 | situations (recurring/auto-renewals) |
| ftc2024 | situations (recurring/auto-renewals) |
| gollwitzer1999 | day4 |
| gollwitzer2006 | day4, day7, restart |
| harkin2016 | welcome, day1, reflection, ws-8 |
| johnson2003 | day5 |
| lally2010 | day6, restart, ws-6, ws-10 |
| mani2013 | day3 |
| neal2006 | welcome, day1, day3, day5, situations |
| rick2008 | day2, situations |
| shah2012 | day3, situations |
| sirois2014 | restart, ws-9 |
| verhagen2011 | situations (online) |
| wood2002 | welcome, day1, situations |

## Source inventory (18)
**Peer-reviewed (16):** lally2010, neal2006, wood2002, harkin2016,
gollwitzer1999, gollwitzer2006, dellavigna2006, johnson2003, mani2013, shah2012,
rick2008, breines2012, sirois2014, verhagen2011, beatty1998, bandura1977.
**US government (2):** cfpb2015 (Consumer Financial Protection Bureau —
Financial well-being), ftc2024 (Federal Trade Commission — auto-renewals guide).

## Notes / limitations recorded in the matrix
- `mani2013` ("Poverty Impedes Cognitive Function") carries a published
  re-analysis/critique (Wicherts & Zand Scholten, 2013). It is used only for the
  general point that money worry can occupy attention, worded cautiously, and is
  paired with `shah2012`. The reader is never characterised as poor or impaired.
- `johnson2003` (defaults) is an organ-donation study used as an illustrative
  principle about the power of defaults, not a spending-specific finding.
- No numerical claim appears in the manuscript without a citation (see
  claim-audit.md). The one specific figure used — the ~66-day median / 18–254-day
  range for habit formation and "missing one day did not stop it" — is cited to
  `lally2010`.
