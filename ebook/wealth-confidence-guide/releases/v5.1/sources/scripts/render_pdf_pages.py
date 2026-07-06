#!/usr/bin/env python3
"""Render each PDF page to a PNG for visual QA. Uses PyMuPDF (in .qa-venv)."""
import sys, os
import fitz  # PyMuPDF

pdf = sys.argv[1] if len(sys.argv) > 1 else "output/the-wealth-confidence-guide.pdf"
outdir = sys.argv[2] if len(sys.argv) > 2 else "qa/page-renders"
os.makedirs(outdir, exist_ok=True)
doc = fitz.open(pdf)
zoom = 1.4
mat = fitz.Matrix(zoom, zoom)
for i, page in enumerate(doc, 1):
    pix = page.get_pixmap(matrix=mat)
    pix.save(os.path.join(outdir, f"page-{i:02d}.png"))
print(f"rendered {doc.page_count} pages -> {outdir}")
