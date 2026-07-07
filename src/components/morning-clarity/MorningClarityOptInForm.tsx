"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId, useState, type FormEvent } from "react";
import { FORM } from "./morning-clarity-content";

/**
 * Lead-magnet opt-in form for The 7-Minute Morning Clarity Reset (Funnel 2).
 *
 * This mirrors the shared `OptInForm` pattern (same fields, styling, focus
 * states, optimistic success state, reduced-motion handling) but is
 * product-scoped so that:
 *   1. it can render more than once on the page with unique input ids
 *      (via React's useId), and
 *   2. it carries this guide's success copy — without modifying the shared
 *      Funnel-1 component.
 *
 * NOTE: This form does NOT submit anywhere yet, by design — identical to the
 * shared component's honest, UI-only behavior.
 *
 * TODO(MailerLite): Wire this to MailerLite via a server route
 *   (e.g. `src/app/api/subscribe/route.ts`) that POSTs using a secret read from
 *   `process.env.MAILERLITE_API_KEY` and a group/segment id from env dedicated
 *   to this lead magnet (so Funnel 2 leads stay distinguishable). Never expose
 *   the API key to the client. On success, redirect to this guide's thank-you
 *   page. Do not add any affiliate content here.
 */
export function MorningClarityOptInForm() {
  const reduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  // Unique per-instance ids so multiple forms on one page never collide.
  const uid = useId();
  const firstNameId = `${uid}-first-name`;
  const emailId = `${uid}-email`;
  const microcopyId = `${uid}-microcopy`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO(MailerLite): replace this optimistic UI with a real call to the
    // subscribe server route described above.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl bg-sage/25 px-6 py-6 text-deep-green"
      >
        <p className="font-serif text-xl font-semibold">
          {FORM.successHeading}
        </p>
        <p className="mt-2 text-evergreen/80">{FORM.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-2">
        <label
          htmlFor={firstNameId}
          className="text-sm font-medium text-deep-green"
        >
          {FORM.firstNameLabel}
        </label>
        <input
          id={firstNameId}
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          className="rounded-xl border border-taupe bg-ivory px-4 py-3 text-evergreen outline-none transition-colors placeholder:text-evergreen/40 focus:border-deep-green focus:ring-2 focus:ring-deep-green/40"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={emailId} className="text-sm font-medium text-deep-green">
          {FORM.emailLabel}
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-describedby={microcopyId}
          className="rounded-xl border border-taupe bg-ivory px-4 py-3 text-evergreen outline-none transition-colors placeholder:text-evergreen/40 focus:border-deep-green focus:ring-2 focus:ring-deep-green/40"
        />
      </div>

      <motion.button
        type="submit"
        className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-deep-green px-8 py-4 text-base font-medium text-ivory shadow-md shadow-deep-green/15 transition-colors hover:bg-evergreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        {...(reduced
          ? {}
          : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } })}
      >
        {FORM.submitLabel}
      </motion.button>

      <p id={microcopyId} className="text-sm text-evergreen/70">
        {FORM.microcopy}
      </p>
    </form>
  );
}
