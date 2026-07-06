#!/usr/bin/env python3
"""
V4 citation audit (Phase 2C).

In V4, pandoc citeproc is OFF. Citations are hand-numbered superscript markers:
  - pandoc syntax   `^N^`      in normal Markdown prose
  - Typst syntax    `#super[N]` inside `{=typst}` raw blocks (merged native pages)

They point to a native "Sources & references" page built from `#ref-entry(N, ...)`
calls in chapters/13-references.qmd. This script cross-checks marker/entry parity:

  - every marker N used in the text has a matching ref-entry(N)
  - every ref-entry(N) is pointed to by at least one marker (no orphan sources)
  - the entries form a contiguous run 1..max with no gaps or duplicates

Exit 0 if clean, 1 otherwise. (The old @key-based verify_citations.py is obsolete
for V4 because there are no [@key] citations left once citeproc is disabled.)
"""
import glob
import os
import re
import sys

ROOT = os.path.join(os.path.dirname(__file__), "..")
REFS = os.path.join(ROOT, "chapters", "13-references.qmd")
SOURCES = sorted(
    glob.glob(os.path.join(ROOT, "chapters", "*.qmd"))
    + glob.glob(os.path.join(ROOT, "assets", "worksheets", "*.qmd"))
)

MARKER_PATTERNS = [re.compile(r"\^(\d+)\^"), re.compile(r"#super\[(\d+)\]")]
ENTRY_PATTERN = re.compile(r"#ref-entry\((\d+)\s*,")


def markers_used(files):
    used = {}
    for f in files:
        if os.path.abspath(f) == os.path.abspath(REFS):
            continue  # the sources page defines entries, not citations
        text = open(f, encoding="utf-8").read()
        for pat in MARKER_PATTERNS:
            for n in pat.findall(text):
                used.setdefault(int(n), set()).add(os.path.basename(f))
    return used


def entries_defined(path):
    text = open(path, encoding="utf-8").read()
    nums = [int(n) for n in ENTRY_PATTERN.findall(text)]
    return nums


def main():
    used = markers_used(SOURCES)
    uset = set(used)
    entries = entries_defined(REFS)
    eset = set(entries)

    dup_entries = sorted({n for n in entries if entries.count(n) > 1})
    missing = sorted(uset - eset)      # marker with no source entry
    orphan = sorted(eset - uset)       # source entry never cited
    gaps = [n for n in range(1, (max(eset) if eset else 0) + 1) if n not in eset]

    print("== V4 citation audit ==")
    print(f"distinct markers used: {len(uset)} | source entries: {len(eset)}")
    print(f"\nDuplicate ref-entry numbers: {dup_entries or 'none'}")
    print(f"Markers with NO source entry: {missing or 'none'}")
    print(f"Source entries never cited (orphans): {orphan or 'none'}")
    print(f"Gaps in 1..{max(eset) if eset else 0}: {gaps or 'none'}")
    print("\nPer-marker usage:")
    for n in sorted(uset):
        print(f"  ^{n:<2d} -> {', '.join(sorted(used[n]))}")

    problems = bool(dup_entries or missing or orphan or gaps)
    print("\nRESULT:", "PROBLEMS FOUND" if problems else "OK")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
