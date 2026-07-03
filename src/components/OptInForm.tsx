"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";

/**
 * Lead-magnet opt-in form.
 *
 * NOTE: This form does NOT submit anywhere yet by design.
 *
 * TODO(MailerLite): Wire this up to MailerLite.
 *   - Create a server route (e.g. `src/app/api/subscribe/route.ts`) that POSTs
 *     to the MailerLite API using a secret read from `process.env.MAILERLITE_API_KEY`
 *     (and a group/segment id from env). Never expose the API key to the client.
 *   - On success, redirect to the thank-you page. Affiliate resources may
 *     appear later, but NOT on this homepage.
 *   Do not hardcode API keys.
 */
export function OptInForm() {
  const reduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

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
          Thank you — your request is in.
        </p>
        <p className="mt-2 text-evergreen/80">
          We&apos;ll email your copy of The Wealth Confidence Guide to the
          address you shared.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="firstName"
          className="text-sm font-medium text-deep-green"
        >
          First name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          className="rounded-xl border border-taupe bg-ivory px-4 py-3 text-evergreen outline-none transition-colors placeholder:text-evergreen/40 focus:border-deep-green focus:ring-2 focus:ring-deep-green/40"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-deep-green">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
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
        Send Me the Guide
      </motion.button>

      <p className="text-sm text-evergreen/70">
        Free guide • No spam • Unsubscribe anytime
      </p>
    </form>
  );
}
