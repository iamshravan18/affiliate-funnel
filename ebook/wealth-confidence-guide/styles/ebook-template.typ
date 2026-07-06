// ============================================================================
// The Wealth Confidence Guide — Typst brand engine (Quarto include-in-header)
// Injected AFTER Quarto's `#show: doc => article(...)` so these #set/#show
// rules and #let definitions win and are in scope for body raw-typst blocks.
//
// Palette: deep-green #0F3D2E, evergreen #0B241F, ivory #F7F3E9, gold #C9A15B,
// sage #A7BFA3, warm-sand #E6D8C3, taupe #D6CDB8.
//
// PHASE 3 (V5): a single central vertical-rhythm system (sp-*) drives all spacing
// so reading rhythm is consistent page to page. Body size is UNCHANGED (12.5pt);
// this phase refines spacing/balance, fixes superscript spacing, enlarges
// worksheet checkboxes, and unifies footer typography. It does not shrink type.
// ============================================================================

#let c-deep    = rgb("#0F3D2E")
#let c-ever    = rgb("#0B241F")
#let c-ivory   = rgb("#F7F3E9")
#let c-gold    = rgb("#C9A15B")
#let c-sage    = rgb("#A7BFA3")
#let c-sand    = rgb("#E6D8C3")
#let c-taupe   = rgb("#D6CDB8")
#let c-aside   = rgb("#EFEAD9")   // soft ivory/sand tint for callouts
#let c-body    = rgb("#1E2E28")   // strong-contrast body ink (never pale gray)
#let c-num     = rgb("#8C876F")   // subtle footer page-number ink

// ---------------------------------------------------------------------------
// VERTICAL RHYTHM SYSTEM (Phase 2B) — one place to tune the whole document.
// ---------------------------------------------------------------------------
#let mg-x        = 1.3in     // side margins -> narrower, calmer line length
#let mg-y        = 1.0in     // top / bottom margins

#let sp-lead     = 0.9em     // body line height (~1.5 visual)
#let sp-para     = 9pt       // space between paragraphs
#let sp-h1-below = 9pt       // page heading -> what follows
#let sp-sub      = 15pt      // opening statement / subtitle -> body
#let sp-h2-above = 18pt      // before a subsection heading
#let sp-h2-below = 7pt       // after a subsection heading
#let sp-callout  = 11pt      // generic callout (Notice / reminder) above & below
#let sp-act-abv  = 15pt      // before Today's Action panel
#let sp-act-blw  = 13pt      // after Today's Action panel
#let sp-visual   = 14pt      // around the future-image slot
#let sp-ws-line  = 0.27in    // height of one worksheet writing line (generous)
#let sp-ws-field = 10pt      // before each worksheet field label
#let sp-ws-foot  = 12pt      // before worksheet footer
#let sp-card     = 10pt      // gap between native cards

#set document(title: "The Wealth Confidence Guide", author: "Micro Saving Daily")

// ---------------------------------------------------------------------------
// PAGE: ivory ground, subtle Manrope footer number that only appears after the
// front matter (controlled by the wcg-nums state, flipped on at Day 1).
// ---------------------------------------------------------------------------
#let wcg-nums = state("wcg-nums", false)

#set page(
  paper: "us-letter",
  margin: (x: mg-x, y: mg-y),
  fill: c-ivory,
  footer: context {
    if wcg-nums.get() {
      let n = counter(page).get().first()
      v(2pt)
      align(center, text(font: ("Manrope",), size: 9pt, fill: c-num)[#n])
    }
  },
)

// ---------------------------------------------------------------------------
// TYPOGRAPHY — Manrope body (12.5pt, unchanged), Cormorant display; no
// auto-hyphenation to keep clean, readable line breaks.
// ---------------------------------------------------------------------------
#set text(font: ("Manrope",), fill: c-body, size: 12.5pt, hyphenate: false)
#set par(leading: sp-lead, spacing: sp-para, justify: false, linebreaks: "optimized")

#show strong: set text(fill: c-deep)

#show heading: set text(font: ("Cormorant Garamond",), fill: c-deep)
#show heading.where(level: 1): it => block(above: 0.6em, below: sp-h1-below, {
  set text(size: 29pt, weight: 700)
  block(spacing: 8pt, line(length: 8%, stroke: 1.4pt + c-gold))
  it.body
})
#show heading.where(level: 2): it => block(above: sp-h2-above, below: sp-h2-below, {
  set text(size: 16.5pt, weight: 600)
  it.body
})
#show heading.where(level: 3): set text(size: 14pt, weight: 600)

#show link: set text(fill: c-deep)

// ---------------------------------------------------------------------------
// CITATION SUPERSCRIPTS (Phase 3) — numbered source markers must never wrap
// onto their own line or float away from the word they annotate. We shadow the
// built-in `super` so this applies to BOTH native #super[N] markers and the
// pandoc-generated ^N^ markers. A word joiner (U+2060) placed *before* the
// marker removes the break opportunity between the preceding word/punctuation
// and the marker, so the marker stays glued to it and can never start a new
// line. We keep Typst's native super sizing (already smaller than body text)
// to avoid double-shrinking, and preserve the normal space that follows the
// marker in the source so the next word is never crowded.
// ---------------------------------------------------------------------------
#let __wcg-super-orig = super
#let super(body) = { sym.wj; __wcg-super-orig(body) }

// ---------------------------------------------------------------------------
// CALLOUTS — markdown blockquotes -> elegant editorial boxes with a gold rule.
// (Notice / Worked example / A gentle reminder / Important / The practice.)
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
// TABLES — lined, roomy (used only where markdown tables remain).
// ---------------------------------------------------------------------------
#set table(inset: (x: 8pt, y: 10pt), stroke: (y: 0.6pt + c-taupe), align: left + horizon)
#show table.cell.where(y: 0): set text(weight: "semibold", fill: c-deep)
#show line: set line(stroke: 0.6pt + c-taupe)

// ===========================================================================
// SHARED VECTOR ASSETS
// ===========================================================================

// Growth Circle mark — native recreation of the approved SVG.
#let wcg-logo(size: 1in, ink: c-deep, dot: c-gold) = {
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
#let wcg-fullbleed(color) = place(top + left, dx: -mg-x, dy: -mg-y,
  rect(width: 8.5in, height: 11in, fill: color))

// Faint centered watermark mark (for otherwise-quiet pages).
#let wcg-watermark(size: 3.2in, dy: 0in) = place(center + horizon, dy: dy,
  box(fill: none)[#set text(fill: c-sand); #wcg-logo(size: size, ink: c-taupe, dot: c-sand)])

// A dimensionally-correct branded visual slot (NOT final art, no "placeholder"
// wording). Reserves 1.2-1.6in for the future illustration as part of the
// composition, with a calm growth-circle motif and an italic descriptor.
#let wcg-visual(height: 1.35in, width: 100%, label: none, on-sand: false) = {
  let bg = if on-sand { c-sand } else { c-ivory }
  block(
    width: width, height: height, fill: bg,
    stroke: 0.75pt + c-gold, radius: 4pt, inset: (x: 18pt, y: 12pt),
    above: sp-visual, below: sp-visual,
    grid(columns: (auto, 1fr), column-gutter: 18pt, align: (left + horizon, left + horizon),
      wcg-logo(size: calc.min(height - 0.4in, 0.95in), ink: c-deep, dot: c-gold),
      if label != none {
        text(font: ("Cormorant Garamond",), style: "italic", size: 15pt, fill: c-deep)[#label]
      } else { [] },
    ),
  )
}

// ===========================================================================
// FAMILY A — COVER
// ===========================================================================
#let wcg-cover() = {
  set page(numbering: none)
  wcg-fullbleed(c-deep)
  place(top + left, dx: -(mg-x - 0.55in), dy: -(mg-y - 0.5in),
    rect(width: 7.4in, height: 10in, stroke: 0.75pt + c-gold, radius: 3pt))
  align(center, {
    v(0.16in)
    text(font: ("Manrope",), size: 12pt, weight: 600, tracking: 5pt, fill: c-gold)[MICRO SAVING DAILY]
    v(0.22in)
    wcg-logo(size: 0.9in, ink: c-ivory, dot: c-gold)
    v(0.32in)
    block(width: 5.0in, fill: c-ivory, radius: 4pt, inset: 3pt, {
      block(width: 100%, stroke: 0.9pt + c-gold, radius: 3pt,
        inset: (x: 0.5in, y: 0.42in), {
        text(font: ("Cormorant Garamond",), size: 12pt, weight: 600, tracking: 3pt, fill: c-gold)[THE]
        v(0.04in)
        text(font: ("Cormorant Garamond",), size: 40pt, weight: 700, fill: c-deep)[
          Wealth\ Confidence\ Guide
        ]
        v(0.22in)
        line(length: 26%, stroke: 0.75pt + c-gold)
        v(0.2in)
        text(font: ("Manrope",), size: 12pt, fill: c-ever)[
          Simple daily money-awareness shifts\ for calmer financial decisions.
        ]
      })
    })
    v(0.4in)
    text(font: ("Cormorant Garamond",), style: "italic", size: 18pt, fill: c-ivory)[
      Small habits. Stronger money confidence.
    ]
    v(0.34in)
    grid(columns: (auto, auto, auto, auto, auto), column-gutter: 0.22in, align: horizon,
      text(font: ("Manrope",), size: 11pt, weight: 600, tracking: 2pt, fill: c-gold)[NOTICE],
      text(size: 10pt, fill: c-sage)[•],
      text(font: ("Manrope",), size: 11pt, weight: 600, tracking: 2pt, fill: c-gold)[PAUSE],
      text(size: 10pt, fill: c-sage)[•],
      text(font: ("Manrope",), size: 11pt, weight: 600, tracking: 2pt, fill: c-gold)[REPEAT],
    )
  })
  pagebreak()
}

// ===========================================================================
// FAMILY B — DIVIDER / SECTION OPENER
// ===========================================================================
#let wcg-divider(kicker: none, title: "", subtitle: none, tint: c-sand) = {
  set page(numbering: none)
  wcg-fullbleed(tint)
  v(2.4in)
  align(center, {
    wcg-logo(size: 0.8in, ink: c-deep, dot: c-gold)
    v(0.5in)
    if kicker != none {
      text(font: ("Manrope",), size: 12pt, weight: 600, tracking: 4pt, fill: c-deep)[#upper(kicker)]
      v(0.25in)
    }
    text(font: ("Cormorant Garamond",), size: 36pt, weight: 700, fill: c-deep)[#title]
    if subtitle != none {
      v(0.3in)
      line(length: 12%, stroke: 1pt + c-gold)
      v(0.3in)
      block(width: 4.4in, text(font: ("Manrope",), size: 12.5pt, fill: c-ever)[#subtitle])
    }
  })
  pagebreak()
}

// ===========================================================================
// FAMILY C — LESSON HELPERS
// ===========================================================================

// Opening statement (lesson subtitle) — larger, calmer lead line under the title.
#let wcg-lead(body) = block(above: 0pt, below: sp-sub,
  text(font: ("Cormorant Garamond",), style: "italic", size: 15pt, fill: c-deep)[#body])

// "Today's action" panel — the day's single small action.
#let wcg-action(body) = block(
  width: 100%, fill: c-deep, radius: 5pt, inset: (x: 16pt, y: 14pt),
  above: sp-act-abv, below: sp-act-blw, {
  text(font: ("Manrope",), size: 10pt, weight: 700, tracking: 3pt, fill: c-gold)[TODAY'S ACTION]
  v(6pt)
  text(fill: c-ivory, size: 12.5pt, body)
})

// ===========================================================================
// FAMILY D — WORKSHEET CHROME  (native vector fields + checkboxes)
// ===========================================================================
#let wcg-ws-open(day: none, num: 1, title: "", purpose: "", how: none) = {
  block(width: 100%, stroke: 0.9pt + c-deep, radius: 5pt, inset: 0pt, above: 0.4em, below: 12pt, {
    block(width: 100%, fill: c-deep, inset: (x: 15pt, y: 10pt), radius: (top: 4pt), {
      grid(columns: (1fr, auto), align: (left + horizon, right + horizon),
        {
          if day != none {
            text(font: ("Manrope",), size: 9pt, weight: 600, tracking: 3pt, fill: c-sage)[#upper(day)]
            linebreak()
          }
          text(font: ("Manrope",), size: 9pt, weight: 700, tracking: 3pt, fill: c-gold)[WORKSHEET #num]
        },
        wcg-logo(size: 0.4in, ink: c-ivory, dot: c-gold),
      )
    })
    // header -> purpose ~7pt; purpose -> instructions ~8pt
    block(width: 100%, inset: (x: 16pt, top: 9pt, bottom: 10pt), {
      text(font: ("Cormorant Garamond",), size: 20pt, weight: 700, fill: c-deep)[#title]
      v(5pt)
      text(font: ("Manrope",), style: "italic", size: 11.5pt, fill: c-ever)[#purpose]
      if how != none {
        v(6pt)
        text(font: ("Manrope",), size: 11.5pt, fill: c-body)[#how]
      }
    })
  })
}

// ruled writing lines for handwriting (generous, comfortable)
#let wcg-lines(count) = {
  for _ in range(count) {
    v(sp-ws-line)
    line(length: 100%, stroke: 0.6pt + c-taupe)
  }
  v(0.04in)
}

// labelled writing field
#let wcg-field(label, lines: 2) = block(width: 100%, above: sp-ws-field, below: 2pt, {
  text(font: ("Manrope",), size: 11.5pt, weight: 600, fill: c-deep)[#label]
  wcg-lines(lines)
})

// checkbox row — larger box, roomier line (Phase 3: enlarged 15pt -> 17pt)
#let wcg-check(label) = block(above: 9pt, below: 9pt,
  grid(columns: (auto, 1fr), column-gutter: 12pt, align: (left + top, left + top),
    box(baseline: 4pt, rect(width: 17pt, height: 17pt, stroke: 1pt + c-deep, radius: 2pt)),
    text(font: ("Manrope",), size: 11.5pt, fill: c-body)[#label],
  ))

// pale sage information / worked-example panel inside worksheets
#let wcg-panel(title: none, body) = block(
  width: 100%, fill: c-sage.lighten(58%), stroke: 0.6pt + c-sage, radius: 4pt,
  inset: (x: 13pt, y: 9pt), above: 10pt, below: 10pt, {
  if title != none {
    text(font: ("Manrope",), size: 10pt, weight: 700, tracking: 2pt, fill: c-deep)[#upper(title)]
    v(5pt)
  }
  text(fill: c-body, size: 11.5pt, body)
})

// grouped-prompt heading inside a worksheet
#let wcg-group(label) = block(above: 13pt, below: 4pt,
  text(font: ("Manrope",), size: 12pt, weight: 700, fill: c-deep)[#label])

// consistent worksheet footer: logo + Notice·Pause·Repeat indicator
#let wcg-ws-footer() = block(width: 100%, above: sp-ws-foot, {
  line(length: 100%, stroke: 0.6pt + c-taupe)
  v(4pt)
  grid(columns: (auto, 1fr), align: (left + horizon, right + horizon),
    grid(columns: (auto, auto), column-gutter: 7pt, align: horizon,
      wcg-logo(size: 0.24in, ink: c-deep, dot: c-gold),
      text(font: ("Manrope",), size: 8pt, weight: 600, tracking: 2pt, fill: c-num)[MICRO SAVING DAILY]),
    text(font: ("Manrope",), size: 8pt, weight: 600, tracking: 2pt, fill: c-num)[NOTICE · PAUSE · REPEAT],
  )
})

// ===========================================================================
// NATIVE CONTENT HELPERS (Phase 2B) — fill purposeful space, no filler text
// ===========================================================================

// A small deep-green dot/marker used as a lightweight card icon.
#let wcg-dot(size: 10pt) = box(baseline: 1pt,
  circle(radius: size/2, fill: c-deep, stroke: none))

// Small native "moment" icons (Phase 4, page 20). One consistent icon family:
// an ivory disc ringed in restrained gold, carrying a simple deep-green motif
// with a single gold accent. Drawn only from native primitives — no raster art,
// no clutter. Each icon occupies a fixed 20pt square so the five cards align.
#let wcg-moment-icon(kind) = box(width: 20pt, height: 20pt, {
  place(dx: 0.5pt, dy: 0.5pt, circle(radius: 9.5pt, fill: c-ivory, stroke: 0.9pt + c-gold))
  if kind == "moon" {            // Tiredness — a crescent moon (rest)
    place(dx: 5pt, dy: 5pt, circle(radius: 5pt, fill: c-deep))
    place(dx: 8pt, dy: 3.6pt, circle(radius: 5pt, fill: c-ivory))
    place(dx: 12.6pt, dy: 5.4pt, circle(radius: 1.1pt, fill: c-gold))
  } else if kind == "clock" {    // Boredom — a quiet clock (a free moment)
    place(dx: 4pt, dy: 4pt, circle(radius: 6pt, stroke: 1.3pt + c-deep))
    place(dx: 9.35pt, dy: 5.8pt, rect(width: 1.3pt, height: 4.2pt, fill: c-deep, radius: 0.6pt))
    place(dx: 10pt, dy: 9.35pt, rect(width: 3.8pt, height: 1.3pt, fill: c-deep, radius: 0.6pt))
    place(dx: 8.6pt, dy: 8.6pt, circle(radius: 1.4pt, fill: c-gold))
  } else if kind == "bolt" {     // Stress — a small lightning bolt (tension)
    place(dx: 7.5pt, dy: 5.25pt,
      polygon(fill: c-gold, stroke: 0.6pt + c-deep,
        (3pt, 0pt), (0pt, 5pt), (2.2pt, 5pt), (0.6pt, 9.5pt),
        (5pt, 3.7pt), (2.8pt, 3.7pt), (4.5pt, 0pt)))
  } else if kind == "star" {     // Celebration — a four-point sparkle
    place(dx: 4pt, dy: 4pt,
      polygon(fill: c-gold, stroke: 0.6pt + c-deep,
        (6pt, 0pt), (7.6pt, 4.4pt), (12pt, 6pt), (7.6pt, 7.6pt),
        (6pt, 12pt), (4.4pt, 7.6pt), (0pt, 6pt), (4.4pt, 4.4pt)))
  } else if kind == "loop" {     // Routine — a repeating cycle
    place(dx: 4pt, dy: 4pt, circle(radius: 6pt, stroke: 1.4pt + c-deep))
    place(dx: 11pt, dy: 2.6pt,
      polygon(fill: c-deep, (0pt, 0pt), (3.2pt, 1.6pt), (0pt, 3.2pt)))
    place(dx: 8.6pt, dy: 8.6pt, circle(radius: 1.4pt, fill: c-gold))
  } else {
    place(dx: 5pt, dy: 5pt, circle(radius: 5pt, fill: c-gold, stroke: 1pt + c-deep))
  }
})

// A row of native "moment" / info cards: items = ((title, desc), ...) or
// ((title, desc, icon-kind), ...) to attach a native moment icon per card.
#let wcg-cards(items, cols: 1) = {
  let cell(it) = block(width: 100%, fill: c-sage.lighten(60%), stroke: 0.6pt + c-sage,
    radius: 4pt, inset: (x: 14pt, y: 12pt), breakable: false,
    grid(columns: (auto, 1fr), column-gutter: 12pt, align: (left + horizon, left + top),
      if it.len() > 2 { wcg-moment-icon(it.at(2)) } else {
        box(circle(radius: 5pt, fill: c-gold, stroke: 1pt + c-deep)) },
      {
        text(font: ("Manrope",), size: 12pt, weight: 700, fill: c-deep)[#it.at(0)]
        linebreak()
        v(2pt)
        text(font: ("Manrope",), size: 11.5pt, fill: c-body)[#it.at(1)]
      }))
  grid(columns: (1fr,) * cols, column-gutter: sp-card, row-gutter: sp-card,
    ..items.map(cell))
}

// Three guiding principles (Before-you-begin page).
#let wcg-principles(items) = grid(columns: (1fr,), row-gutter: sp-card,
  ..items.map(it => block(width: 100%, fill: c-aside, stroke: (left: 3pt + c-gold),
    radius: (right: 4pt), inset: (x: 15pt, y: 13pt),
    {
      text(font: ("Cormorant Garamond",), size: 17pt, weight: 700, fill: c-deep)[#it.at(0)]
      linebreak(); v(3pt)
      text(font: ("Manrope",), size: 11.5pt, fill: c-body)[#it.at(1)]
    })))

// A horizontal step sequence: labels = ("Day 1", "Day 2", ...) with a rising dot motif.
#let wcg-steps(labels, note: none) = block(width: 100%, above: 14pt, below: 6pt, {
  let n = labels.len()
  grid(columns: (1fr,) * n, column-gutter: 6pt, align: center + horizon,
    ..labels.enumerate().map(p => {
      let (i, l) = p
      align(center, {
        circle(radius: 12pt, fill: if i == n - 1 { c-gold } else { c-sage },
          stroke: 1pt + c-deep)
        v(5pt)
        text(font: ("Manrope",), size: 9pt, weight: 600, fill: c-deep)[#l]
      })
    }))
  if note != none {
    v(8pt)
    align(center, text(font: ("Manrope",), style: "italic", size: 11pt, fill: c-ever)[#note])
  }
})

// A bordered checklist panel (native checkboxes), items = ("...", ...)
#let wcg-checklist(title: none, items) = block(width: 100%, fill: c-ivory,
  stroke: 0.9pt + c-deep, radius: 5pt, inset: (x: 16pt, y: 14pt), above: 14pt, below: 12pt, {
  if title != none {
    text(font: ("Manrope",), size: 10pt, weight: 700, tracking: 3pt, fill: c-gold)[#upper(title)]
    v(8pt)
  }
  for it in items { wcg-check(it) }
})

// A single reflection prompt card (large question).
#let wcg-reflection-card(question) = block(width: 100%, fill: c-sand,
  stroke: 0.6pt + c-taupe, radius: 5pt, inset: (x: 18pt, y: 16pt), above: 14pt, below: 12pt,
  align(center, {
    wcg-logo(size: 0.34in, ink: c-deep, dot: c-gold)
    v(8pt)
    text(font: ("Cormorant Garamond",), style: "italic", size: 18pt, fill: c-deep)[#question]
  }))

// Writing-note lines with an optional prompt label (Resources / notes area).
#let wcg-notes(label: none, count: 6) = block(width: 100%, above: 12pt, {
  if label != none {
    text(font: ("Manrope",), size: 11.5pt, weight: 600, fill: c-deep)[#label]
    v(2pt)
  }
  wcg-lines(count)
})

// ===========================================================================
// FAMILY E — FRAMEWORK / REFLECTION PAGE (Notice · Pause · Repeat)
// ===========================================================================
#let wcg-framework-motif(kind) = {
  box(width: 0.9in, height: 0.9in, {
    if kind == "notice" {
      place(center + horizon, circle(radius: 0.34in, stroke: 2pt + c-deep))
      place(center + horizon, circle(radius: 0.11in, fill: c-gold))
    } else if kind == "pause" {
      place(center + horizon, dx: -0.09in, rect(width: 0.1in, height: 0.42in, radius: 2pt, fill: c-deep))
      place(center + horizon, dx: 0.09in, rect(width: 0.1in, height: 0.42in, radius: 2pt, fill: c-deep))
      place(center + horizon, dy: 0.34in, circle(radius: 0.05in, fill: c-gold))
    } else {
      place(bottom + center, dx: -0.24in, rect(width: 0.11in, height: 0.24in, radius: 2pt, fill: c-deep))
      place(bottom + center, rect(width: 0.11in, height: 0.36in, radius: 2pt, fill: c-deep))
      place(bottom + center, dx: 0.24in, rect(width: 0.11in, height: 0.5in, radius: 2pt, fill: c-deep))
      place(top + center, dx: 0.28in, dy: 0.06in, circle(radius: 0.07in, fill: c-gold))
    }
  })
}

#let wcg-framework(tint: c-sage.lighten(45%)) = {
  wcg-fullbleed(tint)
  v(0.7in)
  align(center, {
    text(font: ("Cormorant Garamond",), size: 34pt, weight: 700, fill: c-deep)[Notice. Pause. Repeat.]
    v(0.18in)
    line(length: 14%, stroke: 1pt + c-gold)
    v(0.22in)
    block(width: 4.6in, text(font: ("Manrope",), size: 12.5pt, fill: c-ever)[
      Everything in this guide rests on three small words. Together they turn a
      passing observation into a calmer, repeatable habit.
    ])
  })
  v(0.5in)
  let step(motif, name, body) = align(center, {
    wcg-framework-motif(motif)
    v(0.12in)
    text(font: ("Cormorant Garamond",), size: 21pt, weight: 700, fill: c-deep)[#name]
    v(0.06in)
    block(width: 1.9in, text(font: ("Manrope",), size: 11pt, fill: c-ever)[#body])
  })
  grid(columns: (1fr, 1fr, 1fr), column-gutter: 0.3in,
    step("notice", "Notice", [See one everyday money choice clearly, without judging it.]),
    step("pause", "Pause", [Give yourself a short, quiet moment before one automatic choice.]),
    step("repeat", "Repeat", [Carry one small, useful habit into tomorrow.]),
  )
}

// A compact three-stage horizontal flow (for the "Why these three work" page).
#let wcg-flow() = block(width: 100%, above: 16pt, below: 14pt,
  grid(columns: (1fr, auto, 1fr, auto, 1fr), align: horizon + center, column-gutter: 8pt,
    align(center, { wcg-framework-motif("notice"); v(6pt)
      text(font: ("Cormorant Garamond",), size: 18pt, weight: 700, fill: c-deep)[Notice] }),
    text(size: 20pt, fill: c-gold)[#sym.arrow.r],
    align(center, { wcg-framework-motif("pause"); v(6pt)
      text(font: ("Cormorant Garamond",), size: 18pt, weight: 700, fill: c-deep)[Pause] }),
    text(size: 20pt, fill: c-gold)[#sym.arrow.r],
    align(center, { wcg-framework-motif("repeat"); v(6pt)
      text(font: ("Cormorant Garamond",), size: 18pt, weight: 700, fill: c-deep)[Repeat] }),
  ))

// ===========================================================================
// FAMILY F — CLOSING PAGE + REFERENCES DIVIDER
// ===========================================================================

// Consistent brand-domain footer typography (Phase 3). Gold on dark grounds,
// deep-green on light grounds; letter-spaced and non-breaking so the wordmark
// never wraps or renders in a low-contrast colour.
#let wcg-domain(dark: false, size: 10pt) = box(text(
  font: ("Manrope",), size: size, weight: 600, tracking: 1.2pt,
  fill: if dark { c-gold } else { c-deep })[microsavingdaily.com])

#let wcg-closing-brand() = align(center, block(above: 1.6em, {
  line(length: 22%, stroke: 0.75pt + c-gold)
  v(0.32in)
  wcg-logo(size: 0.9in, ink: c-deep, dot: c-gold)
  v(0.2in)
  text(font: ("Cormorant Garamond",), size: 26pt, weight: 700, fill: c-deep)[Micro Saving Daily]
  v(0.06in)
  text(font: ("Cormorant Garamond",), style: "italic", size: 15pt, fill: c-ever)[Small habits. Stronger money confidence.]
  v(0.14in)
  text(font: ("Manrope",), size: 11pt, fill: c-deep)[microsavingdaily.com]
}))


// ===========================================================================
// FAMILY G — FINAL NATIVE LESSON ART (V5.1)
// Seven distinct vector motifs that replace the earlier reserved visual slot.
// Native Typst only; deep-green / evergreen / sage / gold on ivory; thin line
// art in the Growth Circle language; grayscale-safe (shape + weight, not colour
// alone). Each fills the ~1.35in art slot; a short italic caption aids clarity.
// ===========================================================================

// low-level placement helpers (coordinates are inches within the motif box)
#let __art-dot(cx, cy, r, ..a) = place(top + left, dx: cx - r, dy: cy - r,
  circle(radius: r, ..a))
#let __art-ln(x1, y1, x2, y2, s) = place(top + left,
  line(start: (x1, y1), end: (x2, y2), stroke: s))
#let __art-rect(x, y, w, h, ..a) = place(top + left, dx: x, dy: y,
  rect(width: w, height: h, ..a))


// DAY 1 — NOTICE: several repeated marks, one highlighted.
#let __art-notice = {
  let ys = 0.5in
  let xs = (0.25in, 0.5in, 0.75in, 1.0in, 1.25in)
  for x in xs { __art-dot(x, ys, 0.085in, stroke: 0.8pt + c-taupe) }
  // the noticed one
  __art-dot(0.75in, ys, 0.085in, fill: c-gold, stroke: 1.2pt + c-deep)
  __art-ln(0.64in, 0.72in, 0.86in, 0.72in, 1.2pt + c-deep)
}

// DAY 2 — PAUSE: soft circle, a quiet break, two pause bars.
#let __art-pause = {
  __art-dot(0.75in, 0.5in, 0.34in, stroke: 1pt + c-sage)   // soft ring
  __art-rect(0.75in - 0.02in - 0.08in, 0.34in, 0.08in, 0.32in,
    fill: c-deep, radius: 2pt)                              // left bar
  __art-rect(0.75in + 0.02in, 0.34in, 0.08in, 0.32in,
    fill: c-deep, radius: 2pt)                              // right bar
  __art-rect(0.68in, 0.11in, 0.14in, 0.12in, fill: c-ivory) // break in ring
  __art-dot(0.75in, 0.16in, 0.035in, fill: c-gold)          // pause marker
}

// DAY 3 — CONTEXT: four connected elements (place, time, feeling, cue).
#let __art-context = {
  let R = 0.12in
  let n1 = (0.24in, 0.60in)
  let n2 = (0.58in, 0.40in)
  let n3 = (0.92in, 0.40in)
  let n4 = (1.26in, 0.60in)
  __art-ln(n1.at(0), n1.at(1), n2.at(0), n2.at(1), 0.8pt + c-taupe)
  __art-ln(n2.at(0), n2.at(1), n3.at(0), n3.at(1), 0.8pt + c-taupe)
  __art-ln(n3.at(0), n3.at(1), n4.at(0), n4.at(1), 0.8pt + c-taupe)
  for n in (n1, n2, n3, n4) {
    __art-dot(n.at(0), n.at(1), R, fill: c-ivory, stroke: 0.9pt + c-deep)
  }
  // place: pin
  __art-dot(n1.at(0), n1.at(1) - 0.02in, 0.025in, fill: c-deep)
  __art-ln(n1.at(0), n1.at(1), n1.at(0), n1.at(1) + 0.05in, 0.8pt + c-deep)
  // time: hands
  __art-ln(n2.at(0), n2.at(1), n2.at(0), n2.at(1) - 0.05in, 0.8pt + c-deep)
  __art-ln(n2.at(0), n2.at(1), n2.at(0) + 0.04in, n2.at(1), 0.8pt + c-deep)
  // feeling: dot
  __art-dot(n3.at(0), n3.at(1), 0.035in, fill: c-gold)
  // cue: spark
  __art-ln(n4.at(0) - 0.04in, n4.at(1), n4.at(0) + 0.04in, n4.at(1), 0.8pt + c-deep)
  __art-ln(n4.at(0), n4.at(1) - 0.04in, n4.at(0), n4.at(1) + 0.04in, 0.8pt + c-deep)
}


// DAY 4 — SMALL SHIFT: one line, one soft turn, one destination.
#let __art-shift = {
  __art-ln(0.2in, 0.7in, 0.42in, 0.7in, 0.6pt + c-sage)   // faint baseline start
  __art-ln(0.2in, 0.66in, 0.72in, 0.66in, 1.3pt + c-deep) // straight run
  __art-ln(0.72in, 0.66in, 1.18in, 0.42in, 1.3pt + c-deep) // the gentle turn
  __art-dot(1.2in, 0.4in, 0.06in, fill: c-gold, stroke: 1pt + c-deep) // destination
}

// DAY 5 — ENVIRONMENT: phone set slightly aside, a short list card made visible.
#let __art-environment = {
  // phone, tilted and receding (taupe)
  place(top + left, dx: 0.98in, dy: 0.24in,
    rotate(9deg, box(width: 0.34in, height: 0.58in,
      rect(width: 100%, height: 100%, radius: 4pt, stroke: 0.9pt + c-taupe,
        fill: c-ivory))))
  place(top + left, dx: 1.02in, dy: 0.3in,
    rotate(9deg, line(start: (0in, 0in), end: (0.26in, 0in), stroke: 0.7pt + c-taupe)))
  // list card, prominent (deep-green)
  __art-rect(0.18in, 0.2in, 0.5in, 0.62in, radius: 4pt, stroke: 1pt + c-deep,
    fill: c-ivory)
  __art-ln(0.27in, 0.36in, 0.6in, 0.36in, 0.8pt + c-deep)
  __art-ln(0.27in, 0.5in, 0.6in, 0.5in, 0.8pt + c-deep)
  __art-ln(0.27in, 0.64in, 0.52in, 0.64in, 0.8pt + c-deep)
  __art-dot(0.62in, 0.64in, 0.03in, fill: c-gold)
}


// DAY 6 — REPEAT: an imperfect circular sequence with one gap that still continues.
#let __art-repeat = {
  let cx = 0.75in
  let cy = 0.5in
  let r = 0.34in
  let n = 12
  for i in range(n) {
    if i != 8 {                       // one missing segment (the skipped day)
      let ang = (360deg / n) * i
      let x = cx + r * calc.cos(ang)
      let y = cy + r * calc.sin(ang)
      if i == 9 {                     // the practice picks up again
        __art-dot(x, y, 0.045in, fill: c-gold, stroke: 0.9pt + c-deep)
      } else {
        __art-dot(x, y, 0.04in, fill: c-deep)
      }
    }
  }
}

// DAY 7 — PERSONAL PLAN: seven small marks combining into one steady Growth Circle.
#let __art-plan = {
  let xs = (0.16in, 0.16in, 0.16in, 0.30in, 0.30in, 0.44in, 0.44in)
  let ysx = (0.30in, 0.5in, 0.7in, 0.4in, 0.6in, 0.5in, 0.34in)
  for i in range(7) {
    __art-dot(xs.at(i), ysx.at(i), 0.045in, fill: c-sage, stroke: 0.7pt + c-deep)
    __art-ln(xs.at(i) + 0.05in, ysx.at(i), 0.72in, 0.5in, 0.5pt + c-taupe)
  }
  place(top + left, dx: 0.78in, dy: 0.06in, wcg-logo(size: 0.82in, ink: c-deep, dot: c-gold))
}

// dispatcher + framed slot
#let wcg-lesson-art(kind, caption: none, height: 1.35in) = {
  let mw = 1.55in
  let motif = box(width: mw, height: 1.0in, {
    if kind == "notice" { __art-notice }
    else if kind == "pause" { __art-pause }
    else if kind == "context" { __art-context }
    else if kind == "shift" { __art-shift }
    else if kind == "environment" { __art-environment }
    else if kind == "repeat" { __art-repeat }
    else if kind == "plan" { __art-plan }
  })
  block(width: 100%, height: height, fill: c-ivory, stroke: 0.75pt + c-gold,
    radius: 4pt, inset: (x: 16pt, y: 10pt), above: sp-visual, below: sp-visual,
    grid(columns: (mw, 1fr), column-gutter: 16pt,
      align: (center + horizon, left + horizon),
      motif,
      if caption != none {
        text(font: ("Cormorant Garamond",), style: "italic", size: 14pt, fill: c-deep)[#caption]
      } else { [] },
    ))
}
