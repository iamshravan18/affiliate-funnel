// Simple numbering for non-book documents
#let equation-numbering = "(1)"
#let callout-numbering = "1"
#let subfloat-numbering(n-super, subfloat-idx) = {
  numbering("1a", n-super, subfloat-idx)
}

// Theorem configuration for theorion
// Simple numbering for non-book documents (no heading inheritance)
#let theorem-inherited-levels = 0

// Theorem numbering format (can be overridden by extensions for appendix support)
// This function returns the numbering pattern to use
#let theorem-numbering(loc) = "1.1"

// Default theorem render function
#let theorem-render(prefix: none, title: "", full-title: auto, body) = {
  if full-title != "" and full-title != auto and full-title != none {
    strong[#full-title.]
    h(0.5em)
  }
  body
}
// Some definitions presupposed by pandoc's typst output.
#let content-to-string(content) = {
  if content.has("text") {
    content.text
  } else if content.has("children") {
    content.children.map(content-to-string).join("")
  } else if content.has("body") {
    content-to-string(content.body)
  } else if content == [ ] {
    " "
  }
}

#let horizontalrule = line(start: (25%,0%), end: (75%,0%))

#let endnote(num, contents) = [
  #stack(dir: ltr, spacing: 3pt, super[#num], contents)
]

#show terms.item: it => block(breakable: false)[
  #text(weight: "bold")[#it.term]
  #block(inset: (left: 1.5em, top: -0.4em))[#it.description]
]

// Some quarto-specific definitions.

#show raw.where(block: true): set block(
    fill: luma(230),
    width: 100%,
    inset: 8pt,
    radius: 2pt
  )

#let block_with_new_content(old_block, new_content) = {
  let fields = old_block.fields()
  let _ = fields.remove("body")
  if fields.at("below", default: none) != none {
    // TODO: this is a hack because below is a "synthesized element"
    // according to the experts in the typst discord...
    fields.below = fields.below.abs
  }
  block.with(..fields)(new_content)
}

#let empty(v) = {
  if type(v) == str {
    // two dollar signs here because we're technically inside
    // a Pandoc template :grimace:
    v.matches(regex("^\\s*$")).at(0, default: none) != none
  } else if type(v) == content {
    if v.at("text", default: none) != none {
      return empty(v.text)
    }
    for child in v.at("children", default: ()) {
      if not empty(child) {
        return false
      }
    }
    return true
  }

}

// Subfloats
// This is a technique that we adapted from https://github.com/tingerrr/subpar/
#let quartosubfloatcounter = counter("quartosubfloatcounter")

#let quarto_super(
  kind: str,
  caption: none,
  label: none,
  supplement: str,
  position: none,
  subcapnumbering: "(a)",
  body,
) = {
  context {
    let figcounter = counter(figure.where(kind: kind))
    let n-super = figcounter.get().first() + 1
    set figure.caption(position: position)
    [#figure(
      kind: kind,
      supplement: supplement,
      caption: caption,
      {
        show figure.where(kind: kind): set figure(numbering: _ => {
          let subfloat-idx = quartosubfloatcounter.get().first() + 1
          subfloat-numbering(n-super, subfloat-idx)
        })
        show figure.where(kind: kind): set figure.caption(position: position)

        show figure: it => {
          let num = numbering(subcapnumbering, n-super, quartosubfloatcounter.get().first() + 1)
          show figure.caption: it => block({
            num.slice(2) // I don't understand why the numbering contains output that it really shouldn't, but this fixes it shrug?
            [ ]
            it.body
          })

          quartosubfloatcounter.step()
          it
          counter(figure.where(kind: it.kind)).update(n => n - 1)
        }

        quartosubfloatcounter.update(0)
        body
      }
    )#label]
  }
}

// callout rendering
// this is a figure show rule because callouts are crossreferenceable
#show figure: it => {
  if type(it.kind) != str {
    return it
  }
  let kind_match = it.kind.matches(regex("^quarto-callout-(.*)")).at(0, default: none)
  if kind_match == none {
    return it
  }
  let kind = kind_match.captures.at(0, default: "other")
  kind = upper(kind.first()) + kind.slice(1)
  // now we pull apart the callout and reassemble it with the crossref name and counter

  // when we cleanup pandoc's emitted code to avoid spaces this will have to change
  let old_callout = it.body.children.at(1).body.children.at(1)
  let old_title_block = old_callout.body.children.at(0)
  let children = old_title_block.body.body.children
  let old_title = if children.len() == 1 {
    children.at(0)  // no icon: title at index 0
  } else {
    children.at(1)  // with icon: title at index 1
  }

  // TODO use custom separator if available
  // Use the figure's counter display which handles chapter-based numbering
  // (when numbering is a function that includes the heading counter)
  let callout_num = it.counter.display(it.numbering)
  let new_title = if empty(old_title) {
    [#kind #callout_num]
  } else {
    [#kind #callout_num: #old_title]
  }

  let new_title_block = block_with_new_content(
    old_title_block,
    block_with_new_content(
      old_title_block.body,
      if children.len() == 1 {
        new_title  // no icon: just the title
      } else {
        children.at(0) + new_title  // with icon: preserve icon block + new title
      }))

  align(left, block_with_new_content(old_callout,
    block(below: 0pt, new_title_block) +
    old_callout.body.children.at(1)))
}

// 2023-10-09: #fa-icon("fa-info") is not working, so we'll eval "#fa-info()" instead
#let callout(body: [], title: "Callout", background_color: rgb("#dddddd"), icon: none, icon_color: black, body_background_color: white) = {
  block(
    breakable: false, 
    fill: background_color, 
    stroke: (paint: icon_color, thickness: 0.5pt, cap: "round"), 
    width: 100%, 
    radius: 2pt,
    block(
      inset: 1pt,
      width: 100%, 
      below: 0pt, 
      block(
        fill: background_color,
        width: 100%,
        inset: 8pt)[#if icon != none [#text(icon_color, weight: 900)[#icon] ]#title]) +
      if(body != []){
        block(
          inset: 1pt, 
          width: 100%, 
          block(fill: body_background_color, width: 100%, inset: 8pt, body))
      }
    )
}




#let article(
  title: none,
  subtitle: none,
  authors: none,
  keywords: (),
  date: none,
  abstract-title: none,
  abstract: none,
  thanks: none,
  cols: 1,
  lang: "en",
  region: "US",
  font: none,
  fontsize: 11pt,
  title-size: 1.5em,
  subtitle-size: 1.25em,
  heading-family: none,
  heading-weight: "bold",
  heading-style: "normal",
  heading-color: black,
  heading-line-height: 0.65em,
  mathfont: none,
  codefont: none,
  linestretch: 1,
  sectionnumbering: none,
  linkcolor: none,
  citecolor: none,
  filecolor: none,
  toc: false,
  toc_title: none,
  toc_depth: none,
  toc_indent: 1.5em,
  doc,
) = {
  // Set document metadata for PDF accessibility
  set document(title: title, keywords: keywords)
  set document(
    author: authors.map(author => content-to-string(author.name)).join(", ", last: " & "),
  ) if authors != none and authors != ()
  set par(
    justify: true,
    leading: linestretch * 0.65em
  )
  set text(lang: lang,
           region: region,
           size: fontsize)
  set text(font: font) if font != none
  show math.equation: set text(font: mathfont) if mathfont != none
  show raw: set text(font: codefont) if codefont != none

  set heading(numbering: sectionnumbering)

  show link: set text(fill: rgb(content-to-string(linkcolor))) if linkcolor != none
  show ref: set text(fill: rgb(content-to-string(citecolor))) if citecolor != none
  show link: this => {
    if filecolor != none and type(this.dest) == label {
      text(this, fill: rgb(content-to-string(filecolor)))
    } else {
      text(this)
    }
   }

  let has-title-block = title != none or (authors != none and authors != ()) or date != none or abstract != none
  if has-title-block {
    place(
      top,
      float: true,
      scope: "parent",
      clearance: 4mm,
      block(below: 1em, width: 100%)[

        #if title != none {
          align(center, block(inset: 2em)[
            #set par(leading: heading-line-height) if heading-line-height != none
            #set text(font: heading-family) if heading-family != none
            #set text(weight: heading-weight)
            #set text(style: heading-style) if heading-style != "normal"
            #set text(fill: heading-color) if heading-color != black

            #text(size: title-size)[#title #if thanks != none {
              footnote(thanks, numbering: "*")
              counter(footnote).update(n => n - 1)
            }]
            #(if subtitle != none {
              parbreak()
              text(size: subtitle-size)[#subtitle]
            })
          ])
        }

        #if authors != none and authors != () {
          let count = authors.len()
          let ncols = calc.min(count, 3)
          grid(
            columns: (1fr,) * ncols,
            row-gutter: 1.5em,
            ..authors.map(author =>
                align(center)[
                  #author.name \
                  #author.affiliation \
                  #author.email
                ]
            )
          )
        }

        #if date != none {
          align(center)[#block(inset: 1em)[
            #date
          ]]
        }

        #if abstract != none {
          block(inset: 2em)[
          #text(weight: "semibold")[#abstract-title] #h(1em) #abstract
          ]
        }
      ]
    )
  }

  if toc {
    let title = if toc_title == none {
      auto
    } else {
      toc_title
    }
    block(above: 0em, below: 2em)[
    #outline(
      title: toc_title,
      depth: toc_depth,
      indent: toc_indent
    );
    ]
  }

  doc
}

#set table(
  inset: 6pt,
  stroke: none
)
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

#set document(title: "The 7-Minute Morning Clarity Reset", author: "Micro Saving Daily")

// ---------------------------------------------------------------------------
// PAGE: ivory ground; footer page number appears once mcr-nums is turned on.
// ---------------------------------------------------------------------------
#let mcr-nums = state("mcr-nums", false)

#set page(
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

// ---------------------------------------------------------------------------
// TYPOGRAPHY — Manrope body, Cormorant display; no auto-hyphenation.
// ---------------------------------------------------------------------------
#set text(font: ("Manrope",), fill: c-body, size: 12pt, hyphenate: false)
#set par(leading: sp-lead, spacing: sp-para, justify: false, linebreaks: "optimized")

#show strong: set text(fill: c-deep)

#show heading: set text(font: ("Cormorant Garamond",), fill: c-deep)
#show heading.where(level: 1): it => block(above: 0.5em, below: sp-h1-below, {
  set text(size: 27pt, weight: 700)
  block(spacing: 7pt, line(length: 8%, stroke: 1.4pt + c-gold))
  it.body
})
#show heading.where(level: 2): it => block(above: sp-h2-above, below: sp-h2-below, {
  set text(size: 16pt, weight: 600)
  it.body
})
#show heading.where(level: 3): set text(size: 13.5pt, weight: 600)

#show link: set text(fill: c-deep)

// ---------------------------------------------------------------------------
// CALLOUTS — markdown blockquotes -> elegant editorial boxes with a gold rule.
// ---------------------------------------------------------------------------
#show quote.where(block: true): it => block(
  width: 100%,
  fill: c-aside,
  stroke: (left: 3pt + c-gold),
  radius: (top-right: 4pt, bottom-right: 4pt),
  inset: (left: 16pt, top: 11pt, bottom: 11pt, right: 14pt),
  above: sp-callout, below: sp-callout,
  text(fill: c-body, it.body),
)

// ---------------------------------------------------------------------------
// TABLES — lined, roomy.
// ---------------------------------------------------------------------------
#set table(inset: (x: 8pt, y: 9pt), stroke: (y: 0.6pt + c-taupe), align: left + horizon)
#show table.cell.where(y: 0): set text(weight: "semibold", fill: c-deep)
#show line: set line(stroke: 0.6pt + c-taupe)

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
#let mcr-figure(path, width: 100%, caption: none, radius-img: 6pt) = block(
  width: width, above: sp-visual, below: sp-visual, breakable: false, {
  block(width: 100%, fill: c-ivory, stroke: 0.9pt + c-sand, radius: 8pt,
    inset: 7pt, {
    box(clip: true, radius: radius-img, image(path, width: 100%))
  })
  if caption != none {
    v(5pt)
    align(center, text(font: ("Manrope",), size: 9.5pt, style: "italic", fill: c-num)[#caption])
  }
})

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
    v(0.24in)
    if cover-img != none {
      block(width: 3.9in, fill: c-ivory, radius: 8pt, stroke: 0.75pt + c-gold, inset: 6pt,
        box(clip: true, radius: 4pt, image(cover-img, width: 100%)))
      v(0.2in)
    }
    text(font: ("Cormorant Garamond",), style: "italic", size: 17pt, fill: c-ivory)[
      Seven quiet minutes. One clearer morning.
    ]
    v(0.22in)
    grid(columns: (auto, auto, auto, auto, auto), column-gutter: 0.2in, align: horizon,
      text(font: ("Manrope",), size: 11pt, weight: 600, tracking: 2pt, fill: c-gold)[SETTLE],
      text(size: 10pt, fill: c-sage)[•],
      text(font: ("Manrope",), size: 11pt, weight: 600, tracking: 2pt, fill: c-gold)[NOTICE],
      text(size: 10pt, fill: c-sage)[•],
      text(font: ("Manrope",), size: 11pt, weight: 600, tracking: 2pt, fill: c-gold)[CHOOSE],
    )
    v(0.28in)
    text(font: ("Cormorant Garamond",), style: "italic", size: 14pt, fill: c-sand)[
      Small habits. Stronger money confidence.
    ]
  })
  pagebreak()
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
#let brand-color = (:)
#let brand-color-background = (:)
#let brand-logo = (:)

#set page(
  paper: "us-letter",
  margin: (x: 1.0in,y: 0.85in,),
  numbering: "1",
  columns: 1,
)

// Quarto Typst SHOW partial — title block disabled (title: none) so we lay out a
// clean, premium typographic cover ourselves via raw Typst in the body. Uses the
// stock `article` function from Quarto's default template partial for page setup,
// fonts and callout handling.
#show: doc => article(
  title: none,
  lang: "en",
  region: "US",
  font: ("Manrope",),
  fontsize: 12pt,
  heading-family: ("Cormorant Garamond",),
  heading-weight: "semibold",
  heading-color: rgb("#0F3D2E"),
  linestretch: 1.3,
  toc: false,
  doc,
)

// ---- PAGE 1: Cover ----
#mcr-cover(cover-img: "assets/images/img-morning-flatlay.jpg")
// ---- PAGE 2: Welcome ----
#mcr-nums.update(true)
#mcr-eyebrow("From Micro Saving Daily")
= You Don't Need a Perfect Morning to Begin Clearly
<welcome>
#mcr-lead[Most mornings begin already full — before you have decided how you want to enter them.]
Before your feet are properly on the floor, the day is often already talking. A list of things to do. A couple of half-formed worries. The money-related thoughts that seem to start on their own. It is easy to react to all of it at once instead of choosing where to begin.

This guide is not here to solve your whole life. It offers a small, steady structure for the first few minutes of the day: seven quiet minutes, seven short steps. You read a little and write a little, and you begin the day having actually heard yourself think.

#quote(block: true)[
You are not trying to solve your entire life in seven minutes. You are simply
deciding what deserves your attention first.
]
You do not need to do it perfectly. Some mornings you may fill the page; other mornings a single line is plenty. Both count. Keep what helps you, and leave the rest.

#block(above: 6pt, below: 2pt, text(font: ("Manrope",), size: 9.5pt, fill: c-num, style: "italic")[
  A note on how to use this guide: it is for educational and reflective purposes
  only. It does not provide financial, investment, medical, or psychological
  advice. The steps support personal awareness and reflection, and individual
  circumstances and results vary.
])



