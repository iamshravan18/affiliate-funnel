#import "/styles/ebook-template.typ": *
// ---- PAGE 12: Final Decision Page ----
#let vsl = "https://hop.clickbank.net/?affiliate=microsave&vendor=attractbr&pid=vsl"

#mcr-eyebrow("Optional Next Step")
#v(4pt)
= Review It Calmly and Decide for Yourself

#mcr-lead[There is no rush. A thoughtful decision is always better than a hurried one.]

#v(4pt)
#grid(columns: (1fr, 1fr), column-gutter: 14pt, align: (left + top, left + top),
  block(width: 100%, fill: c-sage.lighten(58%), stroke: 0.6pt + c-sage, radius: 4pt, inset: (x: 14pt, top: 10pt, bottom: 12pt), {
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
  block(width: 100%, fill: c-aside, stroke: 0.6pt + c-sand, radius: 4pt, inset: (x: 14pt, top: 10pt, bottom: 12pt), {
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

#v(6pt)
#link(vsl)[#block(width: 100%, fill: c-deep, radius: 5pt, inset: (x: 16pt, y: 12pt), align(center,
  text(font: ("Manrope",), size: 12.5pt, weight: 700, fill: c-ivory)[Explore the Billionaire Brain Wave Presentation  #text(fill: c-gold)[#sym.arrow.r]]))]
#v(4pt)
#align(center, block(width: 100%, stroke: 1pt + c-sage, radius: 5pt, inset: (x: 16pt, y: 10pt),
  text(font: ("Manrope",), size: 11.5pt, weight: 600, fill: c-deep)[Continue With My Free 7-Minute Reset]))

#v(8pt)
#quote(block: true)[
  A thoughtful decision is better than a rushed one. Review the official
  presentation, pricing, terms, creator information, and refund policy before
  purchasing.
]

#block(above: 4pt, text(font: ("Manrope",), size: 9pt, style: "italic", fill: c-num)[
  This is an optional third-party affiliate offer. No financial outcome is
  guaranteed. This guide does not provide financial, investment, medical, or
  psychological advice.
])
#pagebreak(weak: true)
