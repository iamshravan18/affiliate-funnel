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
