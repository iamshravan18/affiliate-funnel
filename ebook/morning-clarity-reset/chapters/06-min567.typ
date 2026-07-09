#import "/styles/ebook-template.typ": *
// ---- PAGE 7: Minutes 5-7 ----
#mcr-eyebrow("Choose")
#v(4pt)
= Minutes 5–7: Choose, Picture and Continue

#mcr-lead[Turn everything you noticed into one small, honest step — and one word to keep.]

#mcr-group[Minute 5 — Choose one realistic intention]
Pick a single intention that is realistic and within your control today — not
the whole problem solved, just one honest step in a direction you like.

#mcr-field("One intention I can choose for today:", lines: 1)

#mcr-group[Minute 6 — Picture the first practical action]
An intention is easier to keep when you can see the first step. Make it
specific: the action, the place, and a rough time.

#mcr-field("What the first small action looks like:", lines: 1)

#mcr-group[Minute 7 — Choose one word to carry forward]
Choose one word to return to when the morning gets loud again. Then let the page
go — one word is enough.

#v(4pt)
#grid(columns: (auto, auto, auto, auto, auto), column-gutter: 10pt, row-gutter: 8pt, align: horizon,
  ..("steady", "clear", "patient", "focused", "intentional").map(w =>
    box(fill: c-sage.lighten(55%), stroke: 0.6pt + c-sage, radius: 20pt, inset: (x: 14pt, y: 7pt),
      text(font: ("Manrope",), size: 11pt, weight: 600, fill: c-deep)[#w])))

#mcr-field("The word I will carry forward:", lines: 1)
#pagebreak(weak: true)
