#!/usr/bin/env python3
"""Finalize the built PDF for release.

Sets document metadata, document language (/Lang = en-US), a left-to-right
reading-direction hint, and a clean bookmark outline. Uses PyMuPDF (fitz),
available in the sibling wealth-confidence-guide/.qa-venv.

Usage:
    python3 scripts/finalize_pdf.py [INPUT_PDF] [OUTPUT_PDF]

Defaults:
    INPUT_PDF  = output/the-7-minute-morning-clarity-reset.pdf
    OUTPUT_PDF = output/the-7-minute-morning-clarity-reset.pdf  (in place)

Non-destructive to page content: rewrites /Info, catalog /Lang and
/ViewerPreferences, and the outline. Existing link annotations (clickable
affiliate CTAs) are preserved.
"""
import os
import sys
import tempfile

import fitz  # PyMuPDF

METADATA = {
    "title": "The 7-Minute Morning Clarity Reset",
    "author": "Micro Saving Daily",
    "subject": (
        "A simple seven-minute morning practice for mental space, clearer "
        "intentions, and a calmer start to your day"
    ),
    "keywords": (
        "morning routine, clarity, mindfulness, intention setting, worksheet, "
        "seven-day tracker, Micro Saving Daily"
    ),
}

# One-level outline. Entries are [level, title, 1-based page].
BOOKMARKS = [
    [1, "Cover", 1],
    [1, "Welcome", 2],
    [1, "Why Mornings Feel Mentally Crowded", 3],
    [1, "The Three-Movement Framework", 4],
    [1, "Minutes 1-2: Arrive and Notice", 5],
    [1, "Minutes 3-4: Name and Separate", 6],
    [1, "Minutes 5-7: Choose, Picture and Continue", 7],
    [1, "Your 7-Minute Morning Reset (Worksheet)", 8],
    [1, "Seven-Day Tracker", 9],
    [1, "Guided Audio Bridge", 10],
    [1, "Optional Next Step: Guided Audio", 11],
    [1, "Review It Calmly and Decide for Yourself", 12],
]

LANG = "en-US"


def finalize(input_pdf: str, output_pdf: str) -> None:
    doc = fitz.open(input_pdf)

    max_page = max(page for _, _, page in BOOKMARKS)
    if max_page > doc.page_count:
        raise SystemExit(
            f"Bookmark references page {max_page} but the PDF has only "
            f"{doc.page_count} pages. Aborting."
        )

    meta = doc.metadata or {}
    meta.update(METADATA)
    meta["creator"] = "Micro Saving Daily"
    doc.set_metadata(meta)

    cat = doc.pdf_catalog()
    doc.xref_set_key(cat, "Lang", f"({LANG})")
    doc.xref_set_key(cat, "ViewerPreferences", "<</Direction/L2R>>")

    doc.set_toc(BOOKMARKS)

    same = os.path.abspath(input_pdf) == os.path.abspath(output_pdf)
    if same:
        fd, tmp = tempfile.mkstemp(suffix=".pdf", dir=os.path.dirname(output_pdf) or ".")
        os.close(fd)
        doc.save(tmp, garbage=4, deflate=True, clean=True)
        doc.close()
        os.replace(tmp, output_pdf)
    else:
        doc.save(output_pdf, garbage=4, deflate=True, clean=True)
        doc.close()


def verify(output_pdf: str) -> None:
    doc = fitz.open(output_pdf)
    meta = doc.metadata or {}
    size = os.path.getsize(output_pdf)
    print(f"--- finalized: {output_pdf} ---")
    print(f"pages: {doc.page_count}")
    print(f"size: {size} bytes ({size/1024:.1f} KB)")
    for key in ("title", "author", "subject", "keywords"):
        val = meta.get(key, "")
        status = "OK" if val else "MISSING"
        print(f"  {key}: {status} -> {val!r}")

    cat = doc.pdf_catalog()
    print(f"  /Lang: {doc.xref_get_key(cat, 'Lang')}")
    print(f"  /ViewerPreferences: {doc.xref_get_key(cat, 'ViewerPreferences')}")

    toc = doc.get_toc()
    print(f"  bookmarks: {len(toc)}")
    ok = True
    # Count link annotations across the document (affiliate CTAs must survive).
    total_links = 0
    for page in doc:
        for lnk in page.get_links():
            if lnk.get("uri"):
                total_links += 1
    print(f"  URI link annotations: {total_links}")
    for level, title, page in toc:
        if not (1 <= page <= doc.page_count):
            ok = False
            print(f"    !! {title!r} -> page {page} out of range")
    print(f"  all bookmark destinations valid: {ok}")
    doc.close()


def main() -> None:
    input_pdf = sys.argv[1] if len(sys.argv) > 1 else "output/the-7-minute-morning-clarity-reset.pdf"
    output_pdf = sys.argv[2] if len(sys.argv) > 2 else input_pdf
    if not os.path.exists(input_pdf):
        raise SystemExit(f"Input PDF not found: {input_pdf}")
    finalize(input_pdf, output_pdf)
    verify(output_pdf)


if __name__ == "__main__":
    main()
