#import "/styles/ebook-template.typ": *
// ---- PAGE 13: Final Decision Page ----
#let vsl = "https://hop.clickbank.net/?affiliate=microsave&vendor=attractbr&pid=vsl"

#mcr-eyebrow("Optional Next Step")
= Review It Calmly and Decide for Yourself

#mcr-lead[There is no rush. A thoughtful decision is always better than a hurried one.]

#grid(columns: (1fr, 1fr), column-gutter: s-3, align: (left + top, left + top),
  block(width: 100%, height: 218pt, fill: c-sage.lighten(58%), stroke: 0.6pt + c-sage, radius: 4pt, inset: (x: s-3, top: s-3, bottom: s-3), {
    text(font: ("Manrope",), size: 10pt, weight: 700, tracking: 1.5pt, fill: c-deep)[IT MAY BE WORTH EXPLORING IF]
    v(6pt)
    for it in (
      "you enjoy guided audio;",
      "you prefer listening over writing;",
      "you want more structure in your morning;",
      "you are interested in mindset and intentional living;",
      "you understand individual experiences vary.",
    ) {
      grid(columns: (auto, 1fr), column-gutter: 8pt, text(fill: c-gold, weight: 700)[•], text(size: 10.5pt, fill: c-body)[#it])
      v(4pt)
    }
  }),
  block(width: 100%, height: 218pt, fill: c-aside, stroke: 0.6pt + c-sand, radius: 4pt, inset: (x: s-3, top: s-3, bottom: s-3), {
    text(font: ("Manrope",), size: 10pt, weight: 700, tracking: 1.5pt, fill: c-deep)[IT MAY NOT BE FOR YOU IF]
    v(6pt)
    for it in (
      "you expect guaranteed financial outcomes;",
      "you expect audio alone to replace action;",
      "you prefer fully self-guided routines;",
      "the format or price does not feel appropriate.",
    ) {
      grid(columns: (auto, 1fr), column-gutter: 8pt, text(fill: c-num, weight: 700)[•], text(size: 10.5pt, fill: c-body)[#it])
      v(4pt)
    }
  }),
)

#v(s-4)
#link(vsl)[#block(width: 100%, fill: c-deep, radius: 5pt, inset: (x: 16pt, y: 12pt), align(center,
  text(font: ("Manrope",), size: 12.5pt, weight: 700, fill: c-ivory)[Explore the Billionaire Brain Wave Presentation  #text(fill: c-gold)[#sym.arrow.r]]))]
#v(s-1)
#link(<worksheet>)[#align(center, block(width: 100%, stroke: 1pt + c-sage, radius: 5pt, inset: (x: 16pt, y: 10pt),
  text(font: ("Manrope",), size: 11.5pt, weight: 600, fill: c-deep)[Continue With My Free 7-Minute Reset]))]

#v(s-4)
#quote(block: true)[
  A thoughtful decision is better than a rushed one. Review the official
  presentation, pricing, terms, creator information, and refund policy before
  purchasing.
]

#block(above: s-3, text(font: ("Manrope",), size: 9pt, style: "italic", fill: c-num)[
  This is an optional third-party affiliate offer. No financial outcome is
  guaranteed. This guide does not provide financial, investment, medical, or
  psychological advice.
])

#v(s-2)
#align(center, text(font: ("Manrope",), size: 8.5pt, weight: 600, tracking: 1pt, fill: c-num)[microsavingdaily.com])
#pagebreak(weak: true)
