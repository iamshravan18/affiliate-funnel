#!/usr/bin/env python3
"""
Claim & compliance audit for The Wealth Confidence Guide.

Scans the manuscript for:
  - prohibited financial / medical / neurological / manifestation claims
  - overstated-evidence phrases ("research proves", "scientifically proven", ...)
  - absolute words (guaranteed, always, never, everyone) used as claims
  - "studies show" / "research shows" without a nearby [@citation]
  - numbers / percentages without a nearby [@citation]
  - affiliate product names (must NOT appear anywhere in the core ebook)

Findings are printed for human review (this script flags; it does not rewrite).
"""
import os, re, glob, sys

ROOT = os.path.join(os.path.dirname(__file__), "..")
FILES = sorted(glob.glob(os.path.join(ROOT, "chapters", "*.qmd")) +
               glob.glob(os.path.join(ROOT, "assets", "worksheets", "*.qmd")))

PROHIBITED = [
    # financial promises
    r"\bguarantee(?:d|s)?\b", r"\bget rich\b", r"\bmake you rich\b",
    r"\bfinancial freedom\b", r"\beliminate(?:s)? debt\b", r"\bdebt[- ]free\b",
    r"\bguaranteed savings\b", r"\bincome\b", r"\b(?:investment|financial|guaranteed)\s+returns?\b",
    # medical / neurological
    r"\brewire(?:s)? (?:your )?brain\b", r"\bbrain[- ]?wave\b", r"\bcures?\b",
    r"\btreat(?:s|ment)? (?:anxiety|stress|depression)\b", r"\bneurological\b",
    r"\bmanifest(?:ation|ing|s)?\b", r"\bactivate(?:s)? wealth\b",
    r"\battract(?:s)? money\b", r"\bprevents? cognitive decline\b",
]
OVERSTATE = [
    r"\bresearch proves\b", r"\bscientifically proven\b", r"\bproven to work\b",
    r"\btransforms? (?:your )?finances\b", r"\beliminates? financial stress\b",
    r"\bstudies prove\b",
]
ABSOLUTES = [r"\balways\b", r"\bnever\b", r"\beveryone\b", r"\bguarantee",
             r"\ball people\b"]
AFFILIATE = [r"billionaire brain wave", r"pyramid wealth frequency", r"clickbank",
             r"hopid", r"thebillionairebrainwave"]

STUDIES = re.compile(r"\b(studies show|research shows|studies prove|scientists say)\b",
                     re.IGNORECASE)
# a number that looks like a stat: %, $, or 2+ digit figure, or "N days/percent"
NUMBER = re.compile(r"(\b\d{1,3}(?:,\d{3})*(?:\.\d+)?\s?%|\$\s?\d+|\b\d{2,}\b(?!\s*(?:a\.m\.|p\.m\.|days\b)))")
CITE = re.compile(r"\[@[^\]]+\]|@[A-Za-z][\w:-]+")

# words we allow near numbers without a cite (structural, not statistical)
ALLOW_NUM_CONTEXT = re.compile(r"(day\s?\d|worksheet\s?\d|step\s?0?\d|ten seconds|"
                               r"version|©|20\d\d|30 days|next 30|seven|one|two)", re.IGNORECASE)

def scan():
    findings = []
    for f in FILES:
        base = os.path.basename(f)
        for i, line in enumerate(open(f, encoding="utf-8"), 1):
            low = line.lower()
            for pat in AFFILIATE:
                if re.search(pat, low):
                    findings.append((base, i, "AFFILIATE", line.strip()))
            for pat in PROHIBITED:
                if re.search(pat, low):
                    findings.append((base, i, "PROHIBITED", line.strip()))
            for pat in OVERSTATE:
                if re.search(pat, low):
                    findings.append((base, i, "OVERSTATE", line.strip()))
            for pat in ABSOLUTES:
                if re.search(pat, low):
                    # allow inside compassionate phrases like "never miss" negated?
                    findings.append((base, i, "ABSOLUTE", line.strip()))
            if STUDIES.search(line) and not CITE.search(line):
                findings.append((base, i, "STUDIES_NO_CITE", line.strip()))
            for m in NUMBER.finditer(line):
                if not CITE.search(line) and not ALLOW_NUM_CONTEXT.search(line):
                    findings.append((base, i, f"NUM_NO_CITE:{m.group().strip()}", line.strip()))
    return findings

def main():
    findings = scan()
    print("== Claim & compliance audit ==")
    if not findings:
        print("No flags. (Manual review still recommended.)")
        return 0
    by_type = {}
    for base, i, typ, text in findings:
        by_type.setdefault(typ.split(":")[0], []).append((base, i, typ, text))
    for typ in sorted(by_type):
        print(f"\n--- {typ} ({len(by_type[typ])}) ---")
        for base, i, t, text in by_type[typ]:
            print(f"  {base}:{i}  [{t}]  {text[:110]}")
    print(f"\nTotal flags for review: {len(findings)}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
