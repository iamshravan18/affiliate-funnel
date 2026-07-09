// ============================================================================
// The 7-Minute Morning Clarity Reset — Typst brand engine
// (Quarto include-in-header; injected AFTER `#show: doc => article(...)`)
//
// Reuses the Micro Saving Daily / Wealth Confidence Guide system verbatim:
// palette, Growth Circle mark, Cormorant + Manrope typography, worksheet chrome,
// cover + closing treatments. Only the framework changes — this guide uses
// SETTLE · NOTICE · CHOOSE (the Funnel-1 guide uses NOTICE · PAUSE · REPEAT).
//
// Palette: deep-green #0F3D2E, evergreen #0B241F, ivory #F7F3E9, gold #C9A15B,
// sage #A7BFA3, warm-sand #E6D8C3, taupe #D6CDB8.
// ============================================================================

#let c-deep    = rgb("#0F3D2E")
#let c-ever    = rgb("#0B241F")
#let c-ivory   = rgb("#F7F3E9")
#let c-gold    = rgb("#C9A15B")
#let c-sage    = rgb("#A7BFA3")
#let c-sand    = rgb("#E6D8C3")
#let c-taupe   = rgb("#D6CDB8")
#let c-aside   = rgb("#EFEAD9")   // soft ivory/sand tint for callouts
#let c-body    = rgb("#1E2E28")   // strong-contrast body ink
#let c-num     = rgb("#8C876F")   // subtle footer page-number ink

// ---------------------------------------------------------------------------
// VERTICAL RHYTHM — one place to tune the whole document.
// ---------------------------------------------------------------------------
#let mg-x        = 1.0in
#let mg-y        = 0.85in

#let sp-lead     = 0.88em
#let sp-para     = 8pt
#let sp-h1-below = 8pt
#let sp-sub      = 13pt
#let sp-h2-above = 15pt
#let sp-h2-below = 6pt
#let sp-callout  = 10pt
#let sp-act-abv  = 13pt
#let sp-act-blw  = 12pt
#let sp-visual   = 12pt
#let sp-ws-line  = 0.26in
#let sp-ws-field = 9pt
#let sp-ws-foot  = 11pt
#let sp-card     = 9pt

// ---------------------------------------------------------------------------
// PAGE: ivory ground; footer page number appears once mcr-nums is turned on.
// ---------------------------------------------------------------------------
#let mcr-nums = state("mcr-nums", false)

// ---------------------------------------------------------------------------
// mcr-init — document-level rules. Applied in main.typ via `#show: mcr-init`.
// (set/show rules are not carried across `#import`, so they live in a template
//  function that wraps the whole document body.)
// ---------------------------------------------------------------------------
#let mcr-init(doc) = {
  set document(title: "The 7-Minute Morning Clarity Reset", author: "Micro Saving Daily")

  set page(
    paper: "us-letter",
    margin: (x: mg-x, y: mg-y),
    fill: c-ivory,
    footer: context {
      if mcr-nums.get() {
        let n = counter(page).get().first()
        grid(columns: (1fr, auto, 1fr), align: (left + horizon, center + horizon, right + horizon),
          text(font: ("Manrope",), size: 8pt, weight: 600, tracking: 1.5pt, fill: c-num)[MICRO SAVING DAILY],
          text(font: ("Manrope",), size: 9pt, fill: c-num)[#n],
          text(font: ("Manrope",), size: 8pt, weight: 600, tracking: 1.5pt, fill: c-num)[SETTLE · NOTICE · CHOOSE],
        )
      }
    },
  )

  // TYPOGRAPHY — Manrope body, Cormorant display; no auto-hyphenation.
  set text(font: ("Manrope",), fill: c-body, size: 12pt, hyphenate: false)
  set par(leading: sp-lead, spacing: sp-para, justify: false, linebreaks: "optimized")

  show strong: set text(fill: c-deep)

  show heading: set text(font: ("Cormorant Garamond",), fill: c-deep)
  show heading.where(level: 1): it => block(above: 0.5em, below: sp-h1-below, {
    set text(size: 27pt, weight: 700)
    block(spacing: 7pt, line(length: 8%, stroke: 1.4pt + c-gold))
    it.body
  })
  show heading.where(level: 2): it => block(above: sp-h2-above, below: sp-h2-below, {
    set text(size: 16pt, weight: 600)
    it.body
  })
  show heading.where(level: 3): set text(size: 13.5pt, weight: 600)

  show link: set text(fill: c-deep)

  // CALLOUTS — blockquotes -> editorial boxes with a gold rule.
  show quote.where(block: true): it => block(
    width: 100%,
    fill: c-aside,
    stroke: (left: 3pt + c-gold),
    radius: (top-right: 4pt, bottom-right: 4pt),
    inset: (left: 16pt, top: 11pt, bottom: 11pt, right: 14pt),
    above: sp-callout, below: sp-callout,
    text(fill: c-body, it.body),
  )

  // TABLES — lined, roomy.
  set table(inset: (x: 8pt, y: 9pt), stroke: (y: 0.6pt + c-taupe), align: left + horizon)
  show table.cell.where(y: 0): set text(weight: "semibold", fill: c-deep)
  show line: set line(stroke: 0.6pt + c-taupe)

  doc
}

// ===========================================================================
// GROWTH CIRCLE MARK — native recreation of the approved brand SVG.
// ===========================================================================
#let mcr-logo(size: 1in, ink: c-deep, dot: c-gold) = {
  let k = size / 512
  box(width: size, height: size, {
    place(top + left, dx: (256 - 178) * k, dy: (256 - 178) * k,
      circle(radius: 178 * k, stroke: (17 * k) + ink))
    place(top + left, dx: 147 * k, dy: 284 * k,
      rect(width: 37 * k, height: 82 * k, radius: 9 * k, fill: ink))
    place(top + left, dx: 202 * k, dy: 248 * k,
      rect(width: 37 * k, height: 118 * k, radius: 9 * k, fill: ink))
    place(top + left, dx: 257 * k, dy: 203 * k,
      rect(width: 37 * k, height: 163 * k, radius: 9 * k, fill: ink))
    place(top + left, dx: (332 - 30) * k, dy: (176 - 30) * k,
      circle(radius: 30 * k, fill: dot))
  })
}

// Full-bleed colored panel behind the current page's text area.
#let mcr-fullbleed(color) = place(top + left, dx: -mg-x, dy: -mg-y,
  rect(width: 8.5in, height: 11in, fill: color))

// Brand-domain wordmark (gold on dark grounds, deep-green on light).
#let mcr-domain(dark: false, size: 10pt) = box(text(
  font: ("Manrope",), size: size, weight: 600, tracking: 1.2pt,
  fill: if dark { c-gold } else { c-deep })[microsavingdaily.com])

// ===========================================================================
// FRAMED PHOTOGRAPH — brand image frame (warm-sand border, ivory mat, ring).
// Landscape images are given a landscape slot; never squeezed into portrait.
// ===========================================================================
#let mcr-figure(path, width: 100%, caption: none, radius-img: 6pt) = align(center, block(
  width: width, above: sp-visual, below: sp-visual, breakable: false, {
  block(width: 100%, fill: c-ivory, stroke: 0.9pt + c-sand, radius: 8pt,
    inset: 7pt, {
    box(clip: true, radius: radius-img, image(path, width: 100%))
  })
  if caption != none {
    v(5pt)
    align(center, text(font: ("Manrope",), size: 9.5pt, style: "italic", fill: c-num)[#caption])
  }
}))

// ===========================================================================
// COVER
// ===========================================================================
#let mcr-cover(cover-img: none) = {
  set page(numbering: none)
  mcr-fullbleed(c-deep)
  place(top + left, dx: -(mg-x - 0.5in), dy: -(mg-y - 0.42in),
    rect(width: 7.5in, height: 10.16in, stroke: 0.75pt + c-gold, radius: 3pt))
  align(center, {
    v(0.12in)
    text(font: ("Manrope",), size: 12pt, weight: 600, tracking: 5pt, fill: c-gold)[MICRO SAVING DAILY]
    v(0.2in)
    mcr-logo(size: 0.82in, ink: c-ivory, dot: c-gold)
    v(0.26in)
    block(width: 5.4in, fill: c-ivory, radius: 4pt, inset: 3pt, {
      block(width: 100%, stroke: 0.9pt + c-gold, radius: 3pt,
        inset: (x: 0.42in, y: 0.36in), {
        text(font: ("Cormorant Garamond",), size: 12pt, weight: 600, tracking: 3pt, fill: c-gold)[THE]
        v(0.03in)
        text(font: ("Cormorant Garamond",), size: 33pt, weight: 700, fill: c-deep)[
          7-Minute\ Morning Clarity\ Reset
        ]
        v(0.18in)
        line(length: 26%, stroke: 0.75pt + c-gold)
        v(0.16in)
        text(font: ("Manrope",), size: 11.5pt, fill: c-ever)[
          A simple morning practice for creating mental\ space, clearer intentions, and a calmer start\ to your day.
        ]
      })
    })
    v(0.16in)
    if cover-img != none {
      block(width: 2.9in, fill: c-ivory, radius: 8pt, stroke: 0.75pt + c-gold, inset: 5pt,
        box(clip: true, radius: 4pt, image(cover-img, width: 100%)))
      v(0.14in)
    }
    text(font: ("Cormorant Garamond",), style: "italic", size: 16pt, fill: c-ivory)[
      Seven quiet minutes. One clearer morning.
    ]
    v(0.16in)
    grid(columns: (auto, auto, auto, auto, auto), column-gutter: 0.2in, align: horizon,
      text(font: ("Manrope",), size: 11pt, weight: 600, tracking: 2pt, fill: c-gold)[SETTLE],
      text(size: 10pt, fill: c-sage)[•],
      text(font: ("Manrope",), size: 11pt, weight: 600, tracking: 2pt, fill: c-gold)[NOTICE],
      text(size: 10pt, fill: c-sage)[•],
      text(font: ("Manrope",), size: 11pt, weight: 600, tracking: 2pt, fill: c-gold)[CHOOSE],
    )
    v(0.28in)
    text(font: ("Cormorant Garamond",), style: "italic", size: 13pt, fill: c-sand)[
      Small habits. Stronger money confidence.
    ]
  })
  pagebreak(weak: true)
}

// ===========================================================================
// LESSON HELPERS
// ===========================================================================

// Opening statement (lesson subtitle) — calmer lead line under the title.
#let mcr-lead(body) = block(above: 0pt, below: sp-sub,
  text(font: ("Cormorant Garamond",), style: "italic", size: 15pt, fill: c-deep)[#body])

// Dark "Do this" / action panel.
#let mcr-action(label: "DO THIS", body) = block(
  width: 100%, fill: c-deep, radius: 5pt, inset: (x: 16pt, y: 13pt),
  above: sp-act-abv, below: sp-act-blw, {
  text(font: ("Manrope",), size: 10pt, weight: 700, tracking: 3pt, fill: c-gold)[#label]
  v(6pt)
  text(fill: c-ivory, size: 12pt, body)
})

// Eyebrow / kicker line.
#let mcr-eyebrow(body) = text(font: ("Manrope",), size: 10pt, weight: 700,
  tracking: 3pt, fill: c-gold)[#upper(body)]

// ===========================================================================
// WORKSHEET CHROME (native vector fields + checkboxes)
// ===========================================================================
#let mcr-ws-open(kicker: none, num: none, title: "", purpose: "", how: none) = {
  block(width: 100%, stroke: 0.9pt + c-deep, radius: 5pt, inset: 0pt, above: 0.4em, below: 11pt, {
    block(width: 100%, fill: c-deep, inset: (x: 15pt, y: 9pt), radius: (top: 4pt), {
      grid(columns: (1fr, auto), align: (left + horizon, right + horizon),
        {
          if kicker != none {
            text(font: ("Manrope",), size: 9pt, weight: 600, tracking: 3pt, fill: c-sage)[#upper(kicker)]
            linebreak()
          }
          text(font: ("Manrope",), size: 9pt, weight: 700, tracking: 3pt, fill: c-gold)[#if num != none { [WORKSHEET #num] } else { [WORKSHEET] }]
        },
        mcr-logo(size: 0.38in, ink: c-ivory, dot: c-gold),
      )
    })
    block(width: 100%, inset: (x: 16pt, top: 8pt, bottom: 9pt), {
      text(font: ("Cormorant Garamond",), size: 19pt, weight: 700, fill: c-deep)[#title]
      if purpose != "" {
        v(4pt)
        text(font: ("Manrope",), style: "italic", size: 11pt, fill: c-ever)[#purpose]
      }
      if how != none {
        v(5pt)
        text(font: ("Manrope",), size: 11pt, fill: c-body)[#how]
      }
    })
  })
}

// ruled writing lines for handwriting
#let mcr-lines(count) = {
  for _ in range(count) {
    v(sp-ws-line)
    line(length: 100%, stroke: 0.6pt + c-taupe)
  }
  v(0.03in)
}

// labelled writing field
#let mcr-field(label, lines: 2) = block(width: 100%, above: sp-ws-field, below: 2pt, {
  text(font: ("Manrope",), size: 11pt, weight: 600, fill: c-deep)[#label]
  mcr-lines(lines)
})

// checkbox row
#let mcr-check(label) = block(above: 8pt, below: 8pt,
  grid(columns: (auto, 1fr), column-gutter: 12pt, align: (left + top, left + top),
    box(baseline: 4pt, rect(width: 16pt, height: 16pt, stroke: 1pt + c-deep, radius: 2pt)),
    text(font: ("Manrope",), size: 11pt, fill: c-body)[#label],
  ))

// pale sage worked-example / info panel
#let mcr-panel(title: none, body) = block(
  width: 100%, fill: c-sage.lighten(58%), stroke: 0.6pt + c-sage, radius: 4pt,
  inset: (x: 13pt, y: 9pt), above: 9pt, below: 9pt, {
  if title != none {
    text(font: ("Manrope",), size: 10pt, weight: 700, tracking: 2pt, fill: c-deep)[#upper(title)]
    v(5pt)
  }
  text(fill: c-body, size: 11pt, body)
})

// grouped-prompt heading
#let mcr-group(label) = block(above: 12pt, below: 3pt,
  text(font: ("Manrope",), size: 12pt, weight: 700, fill: c-deep)[#label])

// worksheet footer: logo + framework indicator
#let mcr-ws-footer() = block(width: 100%, above: sp-ws-foot, {
  line(length: 100%, stroke: 0.6pt + c-taupe)
  v(4pt)
  grid(columns: (auto, 1fr), align: (left + horizon, right + horizon),
    grid(columns: (auto, auto), column-gutter: 7pt, align: horizon,
      mcr-logo(size: 0.22in, ink: c-deep, dot: c-gold),
      text(font: ("Manrope",), size: 8pt, weight: 600, tracking: 2pt, fill: c-num)[MICRO SAVING DAILY]),
    text(font: ("Manrope",), size: 8pt, weight: 600, tracking: 2pt, fill: c-num)[SETTLE · NOTICE · CHOOSE],
  )
})

// ===========================================================================
// CARDS / PRINCIPLES
// ===========================================================================
#let mcr-cards(items, cols: 1) = {
  let cell(it) = block(width: 100%, fill: c-sage.lighten(60%), stroke: 0.6pt + c-sage,
    radius: 4pt, inset: (x: 14pt, y: 11pt), breakable: false,
    {
      text(font: ("Manrope",), size: 12pt, weight: 700, fill: c-deep)[#it.at(0)]
      linebreak()
      v(2pt)
      text(font: ("Manrope",), size: 11pt, fill: c-body)[#it.at(1)]
    })
  grid(columns: (1fr,) * cols, column-gutter: sp-card, row-gutter: sp-card,
    ..items.map(cell))
}

// Guiding-principle rows (gold left rule).
#let mcr-principles(items) = grid(columns: (1fr,), row-gutter: sp-card,
  ..items.map(it => block(width: 100%, fill: c-aside, stroke: (left: 3pt + c-gold),
    radius: (right: 4pt), inset: (x: 15pt, y: 12pt),
    {
      text(font: ("Cormorant Garamond",), size: 16pt, weight: 700, fill: c-deep)[#it.at(0)]
      linebreak(); v(2pt)
      text(font: ("Manrope",), size: 11pt, fill: c-body)[#it.at(1)]
    })))

// ===========================================================================
// FRAMEWORK MOTIFS — Settle / Notice / Choose
// ===========================================================================
#let mcr-motif(kind) = {
  box(width: 0.9in, height: 0.9in, {
    if kind == "settle" {           // a soft horizon + a settling sun dot
      place(center + horizon, dy: 0.06in, line(start: (-0.32in, 0in), end: (0.32in, 0in), stroke: 1.6pt + c-deep))
      place(center + horizon, dy: -0.08in, circle(radius: 0.14in, fill: c-gold))
    } else if kind == "notice" {    // a ring with a centered gold dot
      place(center + horizon, circle(radius: 0.3in, stroke: 2pt + c-deep))
      place(center + horizon, circle(radius: 0.1in, fill: c-gold))
    } else {                         // choose — three rising step marks + gold dot
      place(bottom + center, dx: -0.22in, rect(width: 0.1in, height: 0.22in, radius: 2pt, fill: c-deep))
      place(bottom + center, rect(width: 0.1in, height: 0.34in, radius: 2pt, fill: c-deep))
      place(bottom + center, dx: 0.22in, rect(width: 0.1in, height: 0.46in, radius: 2pt, fill: c-deep))
      place(top + center, dx: 0.26in, dy: 0.05in, circle(radius: 0.06in, fill: c-gold))
    }
  })
}

// Full framework page block (sage tint). movements = ((name, body), ...)
#let mcr-framework-flow() = block(width: 100%, above: 14pt, below: 12pt,
  grid(columns: (1fr, auto, 1fr, auto, 1fr), align: horizon + center, column-gutter: 8pt,
    align(center, { mcr-motif("settle"); v(6pt)
      text(font: ("Cormorant Garamond",), size: 19pt, weight: 700, fill: c-deep)[Settle] }),
    text(size: 20pt, fill: c-gold)[#sym.arrow.r],
    align(center, { mcr-motif("notice"); v(6pt)
      text(font: ("Cormorant Garamond",), size: 19pt, weight: 700, fill: c-deep)[Notice] }),
    text(size: 20pt, fill: c-gold)[#sym.arrow.r],
    align(center, { mcr-motif("choose"); v(6pt)
      text(font: ("Cormorant Garamond",), size: 19pt, weight: 700, fill: c-deep)[Choose] }),
  ))

// A small native audio-wave motif (for the guided-audio bridge page).
#let mcr-audiowave(width: 100%, height: 0.7in) = block(width: width, above: 10pt, below: 10pt,
  align(center, box(width: 4.2in, height: height, {
    let n = 27
    let cx = 4.2in / 2
    for i in range(n) {
      let x = (4.2in / (n + 1)) * (i + 1)
      // symmetric bell-ish amplitude, gold center bar
      let d = calc.abs(i - (n - 1) / 2)
      let amp = height * (0.22 + 0.72 * calc.max(0, 1 - d / 8) * (0.5 + 0.5 * calc.sin(i * 1.1)))
      let col = if calc.abs(i - (n - 1) / 2) < 0.6 { c-gold } else { c-deep }
      place(bottom + left, dx: x - 1.4pt, rect(width: 2.8pt, height: amp, radius: 1.4pt, fill: col))
    }
    place(bottom + left, dx: 0pt, line(start: (0pt, 0pt), end: (4.2in, 0pt), stroke: 0.6pt + c-taupe))
  })))

// ===========================================================================
// CLOSING BRAND BLOCK
// ===========================================================================
#let mcr-closing-brand(dark: false) = align(center, {
  let ink = if dark { c-ivory } else { c-deep }
  let sub = if dark { c-sand } else { c-ever }
  line(length: 20%, stroke: 0.75pt + c-gold)
  v(0.2in)
  mcr-logo(size: 0.82in, ink: ink, dot: c-gold)
  v(0.16in)
  text(font: ("Cormorant Garamond",), size: 24pt, weight: 700, fill: ink)[Micro Saving Daily]
  v(0.05in)
  text(font: ("Cormorant Garamond",), style: "italic", size: 14pt, fill: sub)[Small habits. Stronger money confidence.]
  v(0.12in)
  link("https://microsavingdaily.com")[#mcr-domain(dark: dark, size: 11pt)]
})
