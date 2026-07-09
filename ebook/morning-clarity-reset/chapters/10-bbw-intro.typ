#import "/styles/ebook-template.typ": *
// ---- PAGE 11: Billionaire Brain Wave Introduction ----
#let vsl = "https://hop.clickbank.net/?affiliate=microsave&vendor=attractbr&pid=vsl"

#mcr-eyebrow("Optional Next Step")
#v(4pt)
= Prefer a Guided Audio Routine?

#v(2pt)
#grid(columns: (1.35fr, 1fr), column-gutter: 18pt, align: (left + top, center + top),
  {
    text(size: 12pt, fill: c-body)[
      #emph[Billionaire Brain Wave] is a guided audio-based program for people
      interested in exploring mindset, focus, and intentional daily routines in a
      listening format.

      It is a separate, third-party program — not part of this free guide, and
      not required to use it. It may simply suit readers who prefer to be guided
      by audio rather than by writing. As with anything you consider, it is worth
      reviewing the official presentation yourself before deciding.
    ]
    v(6pt)
    block(width: 100%, fill: c-sage.lighten(60%), stroke: 0.6pt + c-sage, radius: 4pt, inset: (x: 14pt, y: 11pt), {
      for b in (
        "Guided audio format",
        "Accessible from home",
        "Designed to fit into a quiet daily routine",
        "Official presentation explains the program, creator, pricing and guarantee",
      ) {
        grid(columns: (auto, 1fr), column-gutter: 9pt, align: (left + top, left + top),
          text(fill: c-gold, size: 12pt, weight: 700)[•],
          text(font: ("Manrope",), size: 11pt, fill: c-body)[#b])
        v(4pt)
      }
    })
  },
  {
    block(width: 100%, fill: c-ivory, stroke: 0.9pt + c-sand, radius: 8pt, inset: 6pt,
      box(clip: true, radius: 5pt, image("/assets/images/img-bbw-portrait-opt.jpg", width: 100%)))
    v(4pt)
    align(center, text(font: ("Manrope",), size: 8.5pt, style: "italic", fill: c-num)[Third-party product. Shown for reference.])
  },
)

#v(6pt)
#link(vsl)[#block(width: 100%, fill: c-deep, radius: 5pt, inset: (x: 16pt, y: 13pt), align(center, {
  text(font: ("Manrope",), size: 13pt, weight: 700, fill: c-ivory)[Watch the Free Presentation  #text(fill: c-gold)[#sym.arrow.r]]
}))]
#v(3pt)
#align(center, text(font: ("Manrope",), size: 9.5pt, style: "italic", fill: c-num)[Opens the official presentation in a new tab.])

#v(6pt)
#block(width: 100%, fill: c-aside, stroke: (left: 3pt + c-gold), radius: (right: 4pt), inset: (x: 14pt, y: 10pt),
  text(font: ("Manrope",), size: 9.5pt, fill: c-body)[
    #strong[Affiliate disclosure.] If you purchase through this link, Micro
    Saving Daily may receive a commission at no additional cost to you.
  ])
#pagebreak(weak: true)
