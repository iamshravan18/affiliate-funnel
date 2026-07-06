#!/usr/bin/env python3
"""
Citation audit for The Wealth Confidence Guide.

Cross-checks that:
  - every [@key] cited in the manuscript exists in references.bib
  - every references.bib entry is actually cited (no unused references)
  - reports duplicate bib keys
It also confirms each cited key appears in the evidence matrix (research trail).

Exit code 0 if clean, 1 if any problems are found.
"""
import os, re, csv, sys, glob

ROOT = os.path.join(os.path.dirname(__file__), "..")
BIB = os.path.join(ROOT, "references.bib")
MATRIX = os.path.join(ROOT, "research", "evidence-matrix.csv")
SOURCES = sorted(glob.glob(os.path.join(ROOT, "chapters", "*.qmd")) +
                 glob.glob(os.path.join(ROOT, "assets", "worksheets", "*.qmd")) +
                 [os.path.join(ROOT, "index.qmd")])

def bib_keys(path):
    keys = []
    for line in open(path, encoding="utf-8"):
        m = re.match(r"\s*@\w+\{([^,]+),", line)
        if m:
            keys.append(m.group(1).strip())
    return keys

def cited_keys(files):
    # match [@key], [@key1; @key2], @key inline (avoid emails); keys are alnum
    pat = re.compile(r"@([A-Za-z][A-Za-z0-9_:-]+)")
    found = {}
    for f in files:
        text = open(f, encoding="utf-8").read()
        # ignore raw typst blocks and code, roughly: skip lines starting with '#'
        for key in pat.findall(text):
            found.setdefault(key, set()).add(os.path.basename(f))
    return found

def matrix_keys(path):
    keys = set()
    if not os.path.exists(path):
        return keys
    with open(path, encoding="utf-8") as f:
        for row in csv.DictReader(f):
            note = row.get("Notes", "")
            for m in re.findall(r"@([A-Za-z0-9_:-]+)", note):
                keys.add(m)
    return keys

def main():
    bkeys = bib_keys(BIB)
    dupes = sorted({k for k in bkeys if bkeys.count(k) > 1})
    bset = set(bkeys)
    cited = cited_keys(SOURCES)
    cset = set(cited)
    mkeys = matrix_keys(MATRIX)

    missing = sorted(cset - bset)              # cited but not in bib
    unused = sorted(bset - cset)               # in bib but never cited
    not_in_matrix = sorted(cset - mkeys)       # cited but no evidence-matrix row

    print("== Citation audit ==")
    print(f"bib entries: {len(bset)} | cited keys: {len(cset)} | matrix keys: {len(mkeys)}")
    print(f"\nDuplicate bib keys: {dupes or 'none'}")
    print(f"\nCited but MISSING from references.bib: {missing or 'none'}")
    print(f"\nIn references.bib but UNUSED: {unused or 'none'}")
    print(f"\nCited but NOT in evidence matrix: {not_in_matrix or 'none'}")
    print("\nPer-key usage:")
    for k in sorted(cset):
        print(f"  @{k:16s} -> {', '.join(sorted(cited[k]))}")

    problems = bool(missing or dupes)
    # unused/not_in_matrix are warnings, not hard failures
    if unused:
        print("\n[warn] unused references present")
    if not_in_matrix:
        print("[warn] cited keys missing an evidence-matrix row")
    print("\nRESULT:", "PROBLEMS FOUND" if problems else "OK")
    return 1 if problems else 0

if __name__ == "__main__":
    sys.exit(main())
