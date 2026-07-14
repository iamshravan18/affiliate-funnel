#import "/styles/ebook-template.typ": *
// ---- PAGE 10: Seven-Day Tracker ----
#mcr-eyebrow("Seven Mornings")
= Repeat the Reset for Seven Mornings

#mcr-lead[One row a morning. There is no score to keep and nothing to measure.]

Tick the box when you finish, note the main thought you worked with, the
intention you chose, and one word for the direction of your day.

#v(8pt)
#table(
  columns: (auto, 2fr, 2fr, 1.2fr, auto),
  align: (center + horizon, left + horizon, left + horizon, left + horizon, center + horizon),
  table.header([Day], [Main thought], [Today's intention], [One-word direction], [Done]),
  ..range(1, 8).map(d => (
    [#text(weight: 600, fill: c-deep)[#d]], [], [], [],
    box(baseline: 3pt, rect(width: 15pt, height: 15pt, stroke: 1pt + c-deep, radius: 2pt)),
  )).flatten()
)

#v(s-3)
#mcr-panel(title: "A gentle reminder")[
  Missing one day does not mean restarting. Nothing is broken and there is no
  streak to protect — simply begin again on the next line.
]
#pagebreak(weak: true)
