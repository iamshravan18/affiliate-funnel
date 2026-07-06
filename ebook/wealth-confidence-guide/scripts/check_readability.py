#!/usr/bin/env python3
"""
Readability check for The Wealth Confidence Guide (no external deps).

Strips markdown/qmd markup, then reports per-chapter and overall:
  - word / sentence counts
  - average sentence length (target: < ~22 words)
  - Flesch Reading Ease
  - Flesch-Kincaid Grade Level (target: ~7-9)

Syllable counting is heuristic, so treat grade level as approximate.
"""
import os, re, glob, sys

ROOT = os.path.join(os.path.dirname(__file__), "..")
FILES = sorted(glob.glob(os.path.join(ROOT, "chapters", "*.qmd")))

def strip_markup(text):
    text = re.sub(r"```\{=?[^}]*\}.*?```", " ", text, flags=re.DOTALL)  # raw/code blocks
    text = re.sub(r"```.*?```", " ", text, flags=re.DOTALL)
    text = re.sub(r"\{\{<.*?>\}\}", " ", text)         # shortcodes/includes
    text = re.sub(r"^\s*[#>|].*$", " ", text, flags=re.MULTILINE)  # headings, quotes, tables
    text = re.sub(r"\[@[^\]]+\]", " ", text)           # citations
    text = re.sub(r"@[A-Za-z][\w:-]+", " ", text)
    text = re.sub(r"[*_`\[\]|]", " ", text)            # emphasis / table pipes
    text = re.sub(r":::.*", " ", text)                 # fenced div markers
    text = re.sub(r"\(https?://[^)]+\)|https?://\S+", " ", text)
    text = re.sub(r"[·—–]", " ", text)
    return text

def count_syllables(word):
    word = word.lower()
    word = re.sub(r"[^a-z]", "", word)
    if not word:
        return 0
    vowels = "aeiouy"
    count, prev = 0, False
    for ch in word:
        is_v = ch in vowels
        if is_v and not prev:
            count += 1
        prev = is_v
    if word.endswith("e") and count > 1:
        count -= 1
    return max(1, count)

def analyze(text):
    text = strip_markup(text)
    sentences = [s for s in re.split(r"[.!?]+", text) if s.strip()]
    words = re.findall(r"[A-Za-z']+", text)
    n_sent = max(1, len(sentences))
    n_words = max(1, len(words))
    n_syll = sum(count_syllables(w) for w in words)
    asl = n_words / n_sent
    asw = n_syll / n_words
    flesch = 206.835 - 1.015 * asl - 84.6 * asw
    fk = 0.39 * asl + 11.8 * asw - 15.59
    return dict(words=len(words), sentences=len(sentences),
                asl=asl, flesch=flesch, fk=fk)

def main():
    total_words = 0
    total_sent = 0
    total_syll = 0
    print("== Readability ==")
    print(f"{'file':32s}{'words':>7}{'sent':>6}{'ASL':>7}{'Flesch':>9}{'FKgrade':>9}")
    all_text = []
    for f in FILES:
        text = open(f, encoding="utf-8").read()
        all_text.append(text)
        a = analyze(text)
        total_words += a["words"]
        print(f"{os.path.basename(f):32s}{a['words']:7d}{a['sentences']:6d}"
              f"{a['asl']:7.1f}{a['flesch']:9.1f}{a['fk']:9.1f}")
    overall = analyze("\n".join(all_text))
    print("-" * 70)
    print(f"{'OVERALL':32s}{overall['words']:7d}{overall['sentences']:6d}"
          f"{overall['asl']:7.1f}{overall['flesch']:9.1f}{overall['fk']:9.1f}")
    print(f"\nApprox total manuscript words (chapters): {total_words}")
    print("Targets: ASL < ~22 words; FK grade ~7-9.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
