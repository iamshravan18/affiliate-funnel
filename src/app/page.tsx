import Image from "next/image";
import { CtaButton, Reveal, RevealMedia } from "@/components/motion";
import { OptInForm } from "@/components/OptInForm";

/* ---------------------------------------------------------------- */
/* Brand mark: a simple "Growth Circle" (rising bars inside a ring). */
/* ---------------------------------------------------------------- */
function GrowthCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="17.5" stroke="currentColor" strokeWidth="2.5" />
      <rect x="10.5" y="24" width="4.8" height="5" rx="0.9" fill="currentColor" />
      <rect x="17.6" y="20" width="4.8" height="9" rx="0.9" fill="currentColor" />
      <rect x="24.7" y="14.5" width="4.8" height="14.5" rx="0.9" fill="currentColor" />
      <circle cx="28.7" cy="10.8" r="2.6" fill="currentColor" opacity="0.72" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* Small uppercase label used above section headings. */
function Eyebrow({
  children,
  tone = "green",
}: {
  children: React.ReactNode;
  tone?: "green" | "light";
}) {
  return (
    <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
      <span
        aria-hidden="true"
        className={`h-px w-7 ${tone === "light" ? "bg-gold/70" : "bg-gold/60"}`}
      />
      {children}
    </span>
  );
}

/* ---------------------------------------------------------------- */
/* Content                                                          */
/* ---------------------------------------------------------------- */

const PROBLEM_POINTS = [
  "Most money advice starts with rules, spreadsheets, and pressure to be perfect.",
  "On a busy or stressful day, small spending happens on autopilot before you notice it.",
  "So the plan gets abandoned, and the guilt quietly grows instead of the confidence.",
];

const METHOD_STEPS = [
  {
    step: "01",
    title: "Notice",
    body: "Spot one spending pattern as it happens, without judgment.",
  },
  {
    step: "02",
    title: "Pause",
    body: "Take ten seconds before one automatic choice.",
  },
  {
    step: "03",
    title: "Repeat",
    body: "Choose one small habit you can carry into tomorrow.",
  },
];

const INSIDE_POINTS = [
  "Spending-awareness prompts for everyday moments",
  "The 10-second money pause you can use anywhere",
  "Daily micro habit check-ins",
  "Reflection pages for emotional spending",
  "The repeatable Notice, Pause, Repeat method",
];

const FORM_REASSURANCES = [
  "Delivered free to your inbox",
  "A few calm minutes a day",
  "No spam, ever",
  "Unsubscribe anytime",
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact", href: "/contact" },
];

/* Cream -> transparent wash sitting behind the hero text only (desktop). */
const HERO_TEXT_WASH =
  "linear-gradient(90deg, rgba(247,243,233,0.97) 0%, rgba(247,243,233,0.9) 30%, rgba(247,243,233,0.55) 50%, rgba(247,243,233,0.12) 68%, rgba(247,243,233,0) 82%)";

export default function Home() {
  return (
    <div id="top" className="bg-ivory text-evergreen">
      {/* 1. Minimal header — logo + single small CTA, no nav links --------- */}
      <header className="fixed inset-x-0 top-0 z-50 px-4">
        <div className="mx-auto mt-3 flex h-14 max-w-5xl items-center justify-between gap-4 rounded-full border border-taupe/50 bg-ivory/80 px-4 shadow-[0_1px_10px_rgba(11,36,31,0.05)] backdrop-blur-sm sm:px-5">
          <a
            href="#top"
            className="flex items-center gap-2 text-deep-green"
            aria-label="Micro Saving Daily home"
          >
            <GrowthCircle className="h-6 w-6 text-gold" />
            <span className="text-base font-semibold tracking-tight">
              Micro Saving Daily
            </span>
          </a>

          <CtaButton href="#start" className="px-4 py-2 text-sm">
            Get guide
          </CtaButton>
        </div>
      </header>

      <main>
        {/* 2. Hero — full-bleed image (desktop) / stacked (mobile) -------- */}
        <section
          aria-labelledby="hero-heading"
          className="relative isolate flex flex-col justify-center overflow-hidden bg-ivory md:min-h-[85vh]"
        >
          {/* Desktop/tablet: the image IS the section background (edge to edge). */}
          <div aria-hidden="true" className="absolute inset-0 hidden md:block">
            <Image
              src="/images/wealth-confidence/hero-bg.png"
              alt=""
              fill
              sizes="100vw"
              preload
              className="object-cover object-[100%_60%]"
            />
          </div>
          {/* Cream wash behind the text zone only — keeps copy legible. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden md:block"
            style={{ background: HERO_TEXT_WASH }}
          />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 pb-12 md:py-16">
            <div className="max-w-xl md:max-w-[540px]">
              <Reveal as="p" y={16}>
                <Eyebrow>Free Wealth Confidence Guide</Eyebrow>
              </Reveal>

              <Reveal
                as="h1"
                delay={0.08}
                className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-deep-green sm:text-5xl md:text-6xl"
              >
                <span id="hero-heading">
                  Build stronger money confidence one small choice at a time.
                </span>
              </Reveal>

              <Reveal
                as="p"
                delay={0.16}
                className="mt-6 max-w-md text-lg leading-relaxed text-evergreen/75"
              >
                Notice daily spending patterns, reduce money stress, and make
                calmer financial decisions.
              </Reveal>

              <Reveal delay={0.24} className="mt-9">
                <CtaButton href="#start">Get my free guide</CtaButton>
              </Reveal>

              {/* Honest, generic trust line — no fabricated numbers. */}
              <Reveal
                as="p"
                delay={0.32}
                className="mt-5 text-sm text-evergreen/60"
              >
                Free guide. No spam. Unsubscribe anytime.
              </Reveal>
            </div>
          </div>

          {/* Mobile: stack a shorter, cropped image below the copy so the
              ebook stays fully visible and never sits under the text. */}
          <div className="relative z-10 md:hidden">
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                src="/images/wealth-confidence/hero-bg.png"
                alt="The Wealth Confidence Guide resting in a calm, natural setting"
                fill
                sizes="100vw"
                loading="eager"
                className="object-cover object-[100%_60%]"
              />
            </div>
          </div>
        </section>

        {/* 3. Problem — short, one screen. Why typical advice overwhelms -- */}
        <section
          id="problem"
          aria-labelledby="problem-heading"
          className="py-20 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal as="p" y={14}>
                <Eyebrow>The real problem</Eyebrow>
              </Reveal>
              <Reveal
                as="h2"
                delay={0.06}
                className="mt-5 font-serif text-3xl font-semibold tracking-tight text-deep-green sm:text-4xl"
              >
                <span id="problem-heading">
                  Money advice can feel overwhelming.
                </span>
              </Reveal>
              <Reveal
                as="p"
                delay={0.12}
                className="mt-6 max-w-xl text-lg leading-relaxed text-evergreen/75"
              >
                You do not need a stricter budget to begin. You need a calmer way
                to notice the small spending patterns already shaping your day.
              </Reveal>

              <div className="mt-8 space-y-4">
                {PROBLEM_POINTS.map((point, i) => (
                  <Reveal key={point} delay={0.16 + i * 0.05}>
                    <div className="flex gap-4 border-t border-taupe/55 pt-4">
                      <span className="font-serif text-xl font-semibold text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="leading-relaxed text-evergreen/75">
                        {point}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <RevealMedia delay={0.1}>
              <Image
                src="/images/wealth-confidence/problem-money-pause.png"
                alt="A person writing Money Pause in a notebook beside everyday spending items"
                width={1122}
                height={1402}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="mx-auto h-auto w-full max-w-[26rem] rounded-[1.75rem] object-cover shadow-xl shadow-deep-green/10 ring-1 ring-taupe/40"
              />
            </RevealMedia>
          </div>
        </section>

        {/* 4. Method — dark green anchor band ---------------------------- */}
        <section
          id="method"
          aria-labelledby="method-heading"
          className="bg-deep-green py-20 text-ivory sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Reveal as="p" y={14}>
                <Eyebrow tone="light">The method</Eyebrow>
              </Reveal>
              <Reveal
                as="p"
                delay={0.06}
                className="mt-6 font-serif text-4xl font-medium tracking-tight text-ivory sm:text-5xl"
              >
                <span id="method-heading">Notice. Pause. Repeat.</span>
              </Reveal>
              <Reveal
                as="p"
                delay={0.12}
                className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/70"
              >
                One small pattern. One brief pause. One habit that helps money
                feel less reactive and more intentional.
              </Reveal>

              <ol className="mt-12 space-y-8">
                {METHOD_STEPS.map((s, i) => (
                  <Reveal
                    as="li"
                    key={s.title}
                    delay={0.1 + i * 0.08}
                    className="border-t border-ivory/15 pt-6"
                  >
                    <span className="font-serif text-3xl font-medium text-gold">
                      {s.step}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl font-semibold text-ivory">
                      {s.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ivory/70">
                      {s.body}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>

            <RevealMedia delay={0.12} className="mt-8 lg:mt-0">
              <Image
                src="/images/wealth-confidence/method.png"
                alt="The Notice, Pause, Repeat method shown as three simple daily money shifts"
                width={1672}
                height={941}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="h-auto w-full rounded-[1.75rem] object-cover shadow-2xl shadow-black/25 ring-1 ring-white/12"
              />
            </RevealMedia>
          </div>
        </section>

        {/* 5. Secondary CTA band — compact, single button ---------------- */}
        <section
          aria-label="Get the guide"
          className="bg-ivory py-14 text-center"
        >
          <Reveal>
            <CtaButton href="#start">Get my free guide</CtaButton>
          </Reveal>
        </section>

        {/* 6. Inside the guide — checklist + proof visual ---------------- */}
        <section
          id="inside"
          aria-labelledby="inside-heading"
          className="py-20 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
            <RevealMedia>
              <Image
                src="/images/wealth-confidence/guide-preview.png"
                alt="The three day-cards inside The Wealth Confidence Guide, reading Small steps. Real change."
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="h-auto w-full rounded-[1.75rem] object-contain shadow-xl shadow-deep-green/10 ring-1 ring-taupe/40"
              />
            </RevealMedia>

            <div>
              <Reveal as="p" y={14}>
                <Eyebrow>Inside</Eyebrow>
              </Reveal>
              <Reveal
                as="h2"
                delay={0.06}
                className="mt-5 font-serif text-3xl font-semibold tracking-tight text-deep-green sm:text-4xl"
              >
                <span id="inside-heading">Inside the free guide</span>
              </Reveal>
              <Reveal
                as="p"
                delay={0.12}
                className="mt-5 max-w-md text-lg leading-relaxed text-evergreen/75"
              >
                A calm, practical toolkit for everyday money awareness. Small
                shifts you can actually keep.
              </Reveal>

              <ul className="mt-8 divide-y divide-taupe/60 border-y border-taupe/60">
                {INSIDE_POINTS.map((point, i) => (
                  <Reveal as="li" key={point} delay={0.14 + i * 0.05}>
                    <div className="flex items-center gap-3.5 py-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/35 text-deep-green">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-evergreen">{point}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Opt-in form — the only form on the page -------------------- */}
        <section
          id="start"
          aria-labelledby="optin-heading"
          className="scroll-mt-24 bg-sage/15 py-20 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
            <div>
              <RevealMedia>
                <Image
                  src="/images/wealth-confidence/final-bundle.png"
                  alt="The complete Wealth Confidence Guide, ready to download for free"
                  width={1672}
                  height={941}
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="h-auto w-full rounded-[1.75rem] object-cover shadow-xl shadow-deep-green/10 ring-1 ring-taupe/40"
                />
              </RevealMedia>

              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {FORM_REASSURANCES.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm text-evergreen/75"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <Reveal delay={0.06}>
              <div className="rounded-[1.75rem] border border-taupe/60 bg-ivory p-7 shadow-lg shadow-deep-green/10 sm:p-9">
                <Eyebrow>Start today</Eyebrow>
                <h2
                  id="optin-heading"
                  className="mt-4 font-serif text-3xl font-semibold tracking-tight text-deep-green sm:text-4xl"
                >
                  Start with one small money shift today.
                </h2>
                <p className="mt-4 text-evergreen/70">
                  Get the free Wealth Confidence Guide and take the first calm
                  step toward money that feels less stressful.
                </p>
                <div className="mt-7">
                  <OptInForm />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* 8. Compliance footer ------------------------------------------- */}
      <footer className="bg-evergreen text-ivory/80">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col gap-6 border-b border-ivory/15 pb-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5 text-ivory">
              <GrowthCircle className="h-7 w-7 text-gold" />
              <div>
                <p className="text-lg font-semibold leading-none">
                  Micro Saving Daily
                </p>
                <p className="mt-1 text-sm text-ivory/60">
                  Small habits. Stronger money confidence.
                </p>
              </div>
            </div>

            <nav
              aria-label="Footer"
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
            >
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-ivory"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ivory/60">
            Micro Saving Daily provides educational content about money habits
            and financial awareness. We are not financial advisors, and this
            content is not financial advice. Some links may be affiliate links,
            which means we may earn a commission at no extra cost to you. Results
            vary and no specific financial outcome is guaranteed.
          </p>

          <p className="mt-6 text-xs text-ivory/40">
            © {new Date().getFullYear()} Micro Saving Daily. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
