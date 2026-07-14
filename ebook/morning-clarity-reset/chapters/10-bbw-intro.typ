#import "/styles/ebook-template.typ": *
// ---- PAGE 12: Editorial Guided-Audio Recommendation ----
#let vsl = "https://hop.clickbank.net/?affiliate=microsave&vendor=attractbr&pid=vsl"

#mcr-eyebrow("A Recommendation for the Road Ahead")
= Continue Your Morning Clarity Journey

#mcr-lead[The method is complete. The next step is simply finding the version you can return to.]

#grid(columns: (1.22fr, 0.92fr), column-gutter: s-5, align: (left + top, center + horizon),
  {
    let para(body) = block(width: 100%, below: sp-para,
      text(size: 11.2pt, fill: c-body, body))

    para[You have now completed the full seven-minute reset. You have a practical way to settle, notice what is present, and choose one clear next step. Nothing else is required for this practice to be useful.]
    para[The part that often makes the greatest difference is consistency. Some mornings, writing a few lines will feel grounding. On busier or more distracted mornings, opening a journal can feel like one more decision.]
    para[That is why I recommend exploring #emph[Billionaire Brain Wave]. Its guided audio format can offer support when you would rather listen than write, allowing someone else to hold the pace while you make space for a more intentional start.]
    para[It is a separate third-party resource, not a replacement for this guide. Your worksheet and tracker are complete tools you can continue using on their own. But if guided support would make it easier to maintain the habit, I think it is worth watching the free presentation and deciding whether it fits your mornings.]
  },
  {
    block(width: 100%, fill: c-ivory, stroke: 0.9pt + c-sand, radius: 8pt, inset: 6pt,
      box(clip: true, radius: 5pt,
        image("/assets/images/img-bbw-portrait-opt.jpg", width: 100%)))
    v(s-2)
    align(center, text(font: ("Manrope",), size: 8.5pt, style: "italic", fill: c-num)[
      An optional guided audio resource for quieter mornings.
    ])
  },
)

#v(s-4)
#link(vsl)[#block(width: 100%, fill: c-deep, radius: 5pt, inset: (x: 16pt, y: 11pt), align(center, {
  text(font: ("Manrope",), size: 11.5pt, weight: 700, fill: c-ivory)[Watch the Free Presentation  #text(fill: c-gold)[#sym.arrow.r]]
}))]
#v(s-1)
#align(center, text(font: ("Manrope",), size: 9pt, style: "italic", fill: c-num)[Opens the official presentation.])

#v(s-3)
#block(width: 100%, fill: c-aside, stroke: (left: 3pt + c-gold), radius: (right: 4pt), inset: (x: s-3, y: s-2),
  text(font: ("Manrope",), size: 9pt, fill: c-body)[
    #strong[Affiliate disclosure.] If you purchase through this link, Micro
    Saving Daily may receive a commission at no additional cost to you.
  ])
#pagebreak(weak: true)
