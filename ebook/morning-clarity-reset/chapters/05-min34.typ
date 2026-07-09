#import "/styles/ebook-template.typ": *
// ---- PAGE 6: Minutes 3-4 ----
#mcr-eyebrow("Notice")
#v(4pt)
= Minutes 3–4: Name and Separate

#mcr-lead[Put a plain word to the feeling, then gently pull the thought into its parts.]

#mcr-group[Minute 3 — Name the feeling underneath the thought]
Thoughts usually travel with a feeling attached. Putting a plain word to it can
make it a little easier to hold. You do not need the perfect word — "uneasy,"
"tired," "hopeful," "not sure" are all good answers.

#mcr-field("The feeling I can name:", lines: 1)

#mcr-group[Minute 4 — Separate facts from assumptions]
A single thought often mixes several things together — a fact, a guess, and a
worry. Not every worry is mistaken; some point to something real. The goal is
not to argue with the thought, only to see its parts. Sort it into the two
columns below.

#v(6pt)
#grid(columns: (1fr, 1fr), column-gutter: 12pt,
  block(width: 100%, fill: c-sage.lighten(58%), stroke: 0.6pt + c-sage, radius: 4pt, inset: (x: 12pt, top: 9pt, bottom: 12pt), {
    text(font: ("Manrope",), size: 11pt, weight: 700, fill: c-deep)[What I know]
    mcr-lines(4)
  }),
  block(width: 100%, fill: c-aside, stroke: 0.6pt + c-sand, radius: 4pt, inset: (x: 12pt, top: 9pt, bottom: 12pt), {
    text(font: ("Manrope",), size: 11pt, weight: 700, fill: c-deep)[What I may be assuming]
    mcr-lines(4)
  }),
)

#mcr-panel[
  You are sorting, not judging. A rough split is plenty — a few words in each
  column will do.
]
#pagebreak(weak: true)
