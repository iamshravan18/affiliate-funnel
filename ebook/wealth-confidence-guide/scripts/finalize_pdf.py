#!/usr/bin/env python3
"""Finalize the built PDF for release (V5.1).

Sets document metadata, document language (/Lang = en-US), a left-to-right
reading-direction hint, and a clean two-level bookmark outline. Uses PyMuPDF
(fitz), available in .qa-venv.

Usage:
    python3 scripts/finalize_pdf.py [INPUT_PDF] [OUTPUT_PDF]

Defaults:
    INPUT_PDF  = output/the-wealth-confidence-guide-v5.pdf
    OUTPUT_PDF = output/the-wealth-confidence-guide-v5.1.pdf

The finalizer is non-destructive to page content: it only rewrites /Info,
the catalog /Lang and /ViewerPreferences, and the outline. Existing link
annotations (clickable domains, "View source" links) are preserved.
"""
import os
import sys
import tempfile

import fitz  # PyMuPDF

METADATA = {
    "title": "The Wealth Confidence Guide",
    "author": "Micro Saving Daily",
    "subject": (
        "A seven-day money-awareness workbook for calmer everyday "
        "financial decisions"
    ),
    "keywords": (
        "money awareness, spending habits, financial wellness, "
        "mindful spending, worksheets, Micro Saving Daily"
    ),
}

# Two-level outline. Entries are [level, title, 1-based page].
BOOKMARKS = [
    [1, "The Wealth Confidence Guide", 1],
    [2, "Before You Begin", 3],
    [2, "Notice. Pause. Repeat.", 4],
    [2, "Day 1", 5],
    [2, "Day 2", 7],
    [2, "Day 3", 9],
    [2, "Day 4", 11],
    [2, "Day 5", 13],
    [2, "Day 6", 15],
    [2, "Day 7", 17],
    [2, "Seven-Day Reflection", 19],
    [2, "Common Spending Moments", 20],
    [2, "Automatic Spending Audit", 21],
    [2, "Compassionate Restart", 22],
    [2, "Your Next 30 Days", 23],
    [2, "Recommended Next Step", 24],
    [2, "Sources & References", 25],
    [2, "One Last Thing", 26],
]

LANG = "en-US"


def finalize(input_pdf: str, output_pdf: str) -> None:
    doc = fitz.open(input_pdf)

    # Guard: bookmark pages must exist in the document.
    max_page = max(page for _, _, page in BOOKMARKS)
    if max_page > doc.page_count:
        raise SystemExit(
            f"Bookmark references page {max_page} but the PDF has only "
            f"{doc.page_count} pages. Aborting."
        )

    # 1) Document information dictionary (/Info).
    meta = doc.metadata or {}
    meta.update(METADATA)
    # Keep a meaningful creator; leave the Typst producer string intact.
    meta["creator"] = "Micro Saving Daily"
    doc.set_metadata(meta)

    # 2) Catalog-level language + reading direction (where supported).
    cat = doc.pdf_catalog()
    doc.xref_set_key(cat, "Lang", f"({LANG})")
    doc.xref_set_key(cat, "ViewerPreferences", "<</Direction/L2R>>")

    # 3) Clean bookmark outline.
    doc.set_toc(BOOKMARKS)

    # 4) Save. If overwriting the input, go via a temp file.
    same = os.path.abspath(input_pdf) == os.path.abspath(output_pdf)
    if same:
        fd, tmp = tempfile.mkstemp(suffix=".pdf", dir=os.path.dirname(output_pdf) or ".")
        os.close(fd)
        doc.save(tmp, garbage=3, deflate=True)
        doc.close()
        os.replace(tmp, output_pdf)
    else:
        doc.save(output_pdf, garbage=3, deflate=True)
        doc.close()


def verify(output_pdf: str) -> None:
    doc = fitz.open(output_pdf)
    meta = doc.metadata or {}
    print(f"--- finalized: {output_pdf} ---")
    print(f"pages: {doc.page_count}")
    for key in ("title", "author", "subject", "keywords"):
        val = meta.get(key, "")
        status = "OK" if val else "MISSING"
        print(f"  {key}: {status} -> {val!r}")

    cat = doc.pdf_catalog()
    lang = doc.xref_get_key(cat, "Lang")
    vp = doc.xref_get_key(cat, "ViewerPreferences")
    print(f"  /Lang: {lang}")
    print(f"  /ViewerPreferences: {vp}")

    toc = doc.get_toc()
    print(f"  bookmarks: {len(toc)}")
    ok = True
    for level, title, page in toc:
        # Confirm each destination resolves to an existing page.
        if not (1 <= page <= doc.page_count):
            ok = False
            print(f"    !! {title!r} -> page {page} out of range")
        print(f"    {'  ' * (level - 1)}L{level} {title} -> p{page}")
    print(f"  all bookmark destinations valid: {ok}")
    doc.close()


def main() -> None:
    input_pdf = sys.argv[1] if len(sys.argv) > 1 else "output/the-wealth-confidence-guide-v5.pdf"
    output_pdf = sys.argv[2] if len(sys.argv) > 2 else "output/the-wealth-confidence-guide-v5.1.pdf"
    if not os.path.exists(input_pdf):
        raise SystemExit(f"Input PDF not found: {input_pdf}")
    finalize(input_pdf, output_pdf)
    verify(output_pdf)


if __name__ == "__main__":
    main()
