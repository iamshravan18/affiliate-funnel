#!/usr/bin/env bash
# Build The Wealth Confidence Guide in all three formats and place the outputs
# at the required paths. Requires quarto (bundles pandoc + typst) on PATH.
set -euo pipefail

# Tools are installed to ~/.local in this environment; adjust as needed.
export PATH="$HOME/.local/bin:$HOME/.local/quarto/bin:$PATH"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo ">> Building placeholders (branded, dimensionally correct)"
python3 scripts/make_placeholders.py

echo ">> Rendering PDF (Typst)"
quarto render index.qmd --to typst

echo ">> Rendering EPUB"
quarto render index.qmd --to epub

echo ">> Rendering HTML"
quarto render index.qmd --to html

echo ">> Placing HTML preview under output/html/"
mkdir -p output/html
cp -f output/the-wealth-confidence-guide.html output/html/index.html

echo ">> Done. Outputs:"
echo "   PDF : output/the-wealth-confidence-guide.pdf"
echo "   EPUB: output/the-wealth-confidence-guide.epub"
echo "   HTML: output/html/index.html"
