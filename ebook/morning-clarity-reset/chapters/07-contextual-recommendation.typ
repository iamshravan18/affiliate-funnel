#import "/styles/ebook-template.typ": *
// ---- PAGE 8: Contextual Guided-Audio Recommendation ----
#let vsl = "https://hop.clickbank.net/?affiliate=microsave&vendor=attractbr&pid=vsl"

#mcr-eyebrow("After the Seven-Minute Reset")
#v(4pt)
= You've Just Experienced How Powerful 7 Quiet Minutes Can Be

#mcr-lead[If you've completed the exercise, you've already proven that a few intentional minutes can completely change the direction of your morning.]

#v(2pt)
#grid(columns: (0.92fr, 1.18fr), column-gutter: 22pt, align: (center + top, left + top),
  {
    block(width: 100%, fill: c-ivory, stroke: 0.9pt + c-sand, radius: 8pt, inset: 6pt,
      box(clip: true, radius: 5pt,
        image("/assets/images/img-bbw-portrait-opt.jpg", width: 100%)))
    v(6pt)
    align(center, text(font: ("Manrope",), size: 8.5pt, style: "italic", fill: c-num)[
      An optional guided resource for mornings when listening feels easier.
    ])
  },
  {
    let para(body) = block(width: 100%, below: 5pt,
      text(size: 11.2pt, fill: c-body, body))

    para[The challenge for most people isn't understanding the process.]
    para[It's remembering to slow down and actually practice it consistently.]
    para[That's one of the reasons I recommend exploring #emph[Billionaire Brain Wave].]
    para[Instead of reading or journaling, it provides a guided audio experience that some people find easier to follow on busy mornings.]
    para[It isn't part of this guide and you absolutely do not need it to benefit from what you've just learned.]
    para[But if you'd like a guided version of a similar morning practice, I think it's worth watching the free presentation and deciding for yourself whether it's a good fit.]

    v(3pt)
    link(vsl)[#block(width: 100%, fill: c-deep, radius: 5pt, inset: (x: 13pt, y: 10pt), align(center,
      text(font: ("Manrope",), size: 10.8pt, weight: 700, fill: c-ivory)[
        Watch the Free Billionaire Brain Wave Presentation  #text(fill: c-gold)[#sym.arrow.r]
      ]))]
  },
)

#v(8pt)
#block(width: 100%, fill: c-aside, stroke: (left: 3pt + c-gold), radius: (right: 4pt), inset: (x: 14pt, y: 9pt),
  text(font: ("Manrope",), size: 9pt, fill: c-body)[
    This is a recommended third-party resource. If you choose to purchase through
    this link, Micro Saving Daily may receive an affiliate commission at no
    additional cost to you.
  ])
#pagebreak(weak: true)
