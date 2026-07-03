import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://microsavingdaily.com"),
  title: "The Wealth Confidence Guide | Micro Saving Daily",
  description:
    "Build stronger money confidence one small choice at a time with a free guide from Micro Saving Daily.",
  applicationName: "Micro Saving Daily",
  icons: {
    icon: [
      { url: "/images/wealth-confidence/icons/favicon.ico", sizes: "any" },
      {
        url: "/images/wealth-confidence/icons/favicon-growth-circle.svg",
        type: "image/svg+xml",
      },
      {
        url: "/images/wealth-confidence/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/wealth-confidence/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "/images/wealth-confidence/icons/apple-touch-icon-180x180.png",
      sizes: "180x180",
    },
  },
  openGraph: {
    title: "The Wealth Confidence Guide | Micro Saving Daily",
    description:
      "Simple daily money-awareness shifts for calmer financial decisions. Small habits. Stronger money confidence.",
    url: "/",
    siteName: "Micro Saving Daily",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-full bg-ivory text-evergreen">{children}</body>
    </html>
  );
}
