"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import { FORM } from "./morning-clarity-content";

/**
 * Lead-magnet opt-in form for The 7-Minute Morning Clarity Reset (Funnel 2).
 *
 * On submit it POSTs `{ email, firstName }` to the secure server route
 * `/api/morning-clarity/subscribe`, which adds/updates the subscriber in
 * Resend and sends the guide email (the Resend API key never touches the
 * client). On success the visitor is redirected to this guide's thank-you page.
 * On failure we keep the visitor here, preserve their entered values, show a
 * friendly inline error, and re-enable the button.
 *
 * The component renders more than once on the page (hero + final CTA), so input
 * ids are made unique via React's useId.
 */

const THANK_YOU_ROUTE = "/7-minute-morning-clarity-reset/thank-you";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "error";

export function MorningClarityOptInForm() {
  const reduced = useReducedMotion();
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Unique per-instance ids so multiple forms on one page never collide.
  const uid = useId();
  const firstNameId = `${uid}-first-name`;
  const emailId = `${uid}-email`;
  const microcopyId = `${uid}-microcopy`;
  const errorId = `${uid}-error`;

  const isSubmitting = status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Prevent duplicate submissions while a request is in flight.
    if (isSubmitting) return;

    const trimmedFirstName = firstName.trim();
    const trimmedEmail = email.trim();

    // Client-side validation (the form uses noValidate, so `required` alone
    // won't block submission). Mirror the server-side rules.
    if (!trimmedFirstName) {
      setStatus("error");
      setErrorMessage("Please enter your first name.");
      return;
    }

    if (!EMAIL_RE.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/morning-clarity/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          firstName: trimmedFirstName,
        }),
      });

      if (response.ok) {
        // Success (new or existing subscriber) → go to the thank-you page.
        router.push(THANK_YOU_ROUTE);
        return;
      }

      let message: string = FORM.errorMessage;
      try {
        const data = (await response.json()) as { error?: string };
        if (data && typeof data.error === "string" && data.error) {
          message = data.error;
        }
      } catch {
        // Ignore body parse errors; fall back to the generic message.
      }

      setStatus("error");
      setErrorMessage(message);
    } catch {
      // Network failure — keep values, show a friendly error, re-enable button.
      setStatus("error");
      setErrorMessage(FORM.errorMessage);
    }
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
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          disabled={isSubmitting}
          className="rounded-xl border border-taupe bg-ivory px-4 py-3 text-evergreen outline-none transition-colors placeholder:text-evergreen/40 focus:border-deep-green focus:ring-2 focus:ring-deep-green/40 disabled:opacity-60"
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
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={isSubmitting}
          aria-describedby={
            status === "error" && errorMessage
              ? `${errorId} ${microcopyId}`
              : microcopyId
          }
          aria-invalid={status === "error" ? true : undefined}
          className="rounded-xl border border-taupe bg-ivory px-4 py-3 text-evergreen outline-none transition-colors placeholder:text-evergreen/40 focus:border-deep-green focus:ring-2 focus:ring-deep-green/40 disabled:opacity-60"
        />
      </div>

      {status === "error" && errorMessage ? (
        <p
          id={errorId}
          role="alert"
          className="rounded-xl border border-gold/70 bg-warm-sand px-4 py-3 text-sm font-medium text-deep-green"
        >
          {errorMessage}
        </p>
      ) : null}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-deep-green px-8 py-4 text-base font-medium text-ivory shadow-md shadow-deep-green/15 transition-colors hover:bg-evergreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-70"
        {...(reduced || isSubmitting
          ? {}
          : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } })}
      >
        {isSubmitting ? FORM.loadingLabel : FORM.submitLabel}
      </motion.button>

      <p id={microcopyId} className="text-sm text-evergreen/70">
        {FORM.microcopy}
      </p>
    </form>
  );
}
