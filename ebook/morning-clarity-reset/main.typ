// The 7-Minute Morning Clarity Reset — main Typst document
// Build: typst compile --root . --font-path assets/fonts main.typ output/the-7-minute-morning-clarity-reset.pdf
#import "styles/ebook-template.typ": *

#show: mcr-init

// ---- PAGE 1: Cover ----
#include "chapters/00-cover.typ"

// ---- PAGE 2: Welcome ----
#include "chapters/01-welcome.typ"

// ---- PAGE 3: Why Mornings Feel Mentally Crowded ----
#include "chapters/02-crowded.typ"

// ---- PAGE 4: The Three-Movement Framework ----
#include "chapters/03-framework.typ"

// ---- PAGE 5: Minutes 1-2 ----
#include "chapters/04-min12.typ"

// ---- PAGE 6: Minutes 3-4 ----
#include "chapters/05-min34.typ"

// ---- PAGE 7: Minutes 5-7 ----
#include "chapters/06-min567.typ"

// ---- PAGE 8: Contextual Guided-Audio Recommendation ----
#include "chapters/07-contextual-recommendation.typ"

// ---- PAGE 9: Full Printable Worksheet ----
#include "chapters/07-worksheet.typ"

// ---- PAGE 10: Seven-Day Tracker ----
#include "chapters/08-tracker.typ"

// ---- PAGE 11: Guided Audio Bridge ----
#include "chapters/09-audio-bridge.typ"

// ---- PAGE 12: Editorial Guided-Audio Recommendation ----
#include "chapters/10-bbw-intro.typ"

// ---- PAGE 13: Final Decision Page ----
#include "chapters/11-decision.typ"
