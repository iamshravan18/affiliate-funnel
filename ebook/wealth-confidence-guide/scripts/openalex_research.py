#!/usr/bin/env python3
"""
OpenAlex research-discovery helper for The Wealth Confidence Guide.

Runs multiple FOCUSED queries (never one generic query) across the guide's
evidence themes, reconstructs abstracts, and writes concise candidate lists for
MANUAL review. Discovery only -- a hit here is NOT proof. Every candidate must
still be verified (Crossref/DOI) and hand-selected before entering the evidence
matrix.

Security:
  - The OpenAlex API key is read ONLY from the environment: OPENALEX_API_KEY.
  - The key is NEVER printed, logged, or written to any output file.
  - Public OpenAlex queries also work without a key; the key only joins the
    polite pool / raises rate limits.

Usage:
  export OPENALEX_API_KEY=...   # (or source a git-ignored .env)
  python3 scripts/openalex_research.py
Outputs:
  research/_candidates/<theme>.json   (sanitized public metadata only)
"""
import json
import os
import sys
import time
import urllib.parse
import urllib.request

API = "https://api.openalex.org/works"
KEY = os.environ.get("OPENALEX_API_KEY")  # read from env only; never printed
MAILTO = "research@microsavingdaily.com"  # polite-pool contact

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "research", "_candidates")

# theme -> list of focused search phrases
THEMES = {
    "habitual_purchasing": [
        "habitual consumer purchasing behavior",
        "automaticity everyday purchases habit",
    ],
    "self_monitoring": [
        "self-monitoring behavior change reactivity",
        "self-observation spending diary",
    ],
    "impulse_buying": [
        "impulse buying antecedents",
        "online impulse buying urge",
    ],
    "emotional_spending": [
        "negative affect emotional spending",
        "sadness spending willingness to pay",
    ],
    "financial_stress_decisions": [
        "scarcity cognition decision making",
        "financial stress cognitive function",
    ],
    "implementation_intentions": [
        "implementation intentions goal attainment meta-analysis",
        "if-then plans behavior",
    ],
    "choice_architecture_friction": [
        "choice architecture nudge defaults",
        "behavioral friction consumer choice",
    ],
    "subscription_inertia": [
        "subscription inattention automatic renewal",
        "consumer inertia default continuation",
    ],
    "habit_formation": [
        "how are habits formed modelling habit formation",
        "repetition automaticity habit",
    ],
    "self_compassion_lapse": [
        "self-compassion goal setback motivation",
        "lapse recovery behavior change",
    ],
    "financial_wellbeing_efficacy": [
        "financial well-being scale measurement",
        "financial self-efficacy financial behavior",
    ],
}

SELECT = ",".join([
    "id", "title", "publication_year", "doi", "type",
    "cited_by_count", "language",
    "authorships", "primary_location", "abstract_inverted_index",
])


def deinvert(inv):
    if not inv:
        return ""
    positions = []
    for word, idxs in inv.items():
        for i in idxs:
            positions.append((i, word))
    positions.sort()
    text = " ".join(w for _, w in positions)
    return text[:900]


def fetch(query, per_page=6):
    params = {
        "search": query,
        "select": SELECT,
        "per-page": str(per_page),
        "sort": "cited_by_count:desc",
        "mailto": MAILTO,
    }
    if KEY:
        params["api_key"] = KEY
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": "wcg-research/1.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def simplify(w):
    authors = [a.get("author", {}).get("display_name") for a in w.get("authorships", [])]
    loc = w.get("primary_location") or {}
    src = (loc.get("source") or {}).get("display_name")
    return {
        "openalex_id": w.get("id"),
        "title": w.get("title"),
        "year": w.get("publication_year"),
        "doi": w.get("doi"),
        "type": w.get("type"),
        "cited_by_count": w.get("cited_by_count"),
        "authors": authors[:8],
        "venue": src,
        "abstract": deinvert(w.get("abstract_inverted_index")),
    }


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    if not KEY:
        print("[note] OPENALEX_API_KEY not set in env; using public pool.", file=sys.stderr)
    grand = 0
    for theme, queries in THEMES.items():
        seen, rows = set(), []
        for q in queries:
            try:
                data = fetch(q)
            except Exception as e:
                print(f"[err] {theme} :: {q} :: {e}", file=sys.stderr)
                continue
            for w in data.get("results", []):
                oid = w.get("id")
                if oid in seen:
                    continue
                seen.add(oid)
                rows.append(simplify(w))
            time.sleep(0.2)
        path = os.path.join(OUT_DIR, f"{theme}.json")
        with open(path, "w") as f:
            json.dump(rows, f, indent=2, ensure_ascii=False)
        grand += len(rows)
        print(f"{theme:32s} {len(rows):3d} candidates -> {os.path.relpath(path)}")
    print(f"total candidates: {grand}")


if __name__ == "__main__":
    main()
