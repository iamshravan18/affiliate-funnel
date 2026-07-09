import { NextResponse, type NextRequest } from "next/server";

/**
 * Funnel 1 (The Wealth Confidence Guide) opt-in → MailerLite.
 *
 * Funnel-1-specific endpoint, fully isolated from Funnel 2's
 * `/api/morning-clarity/subscribe` route so the two funnels never collide.
 *
 * Secure, server-only route handler. It reads the shared MailerLite secret
 * token and a Funnel-1-specific group id from environment variables that only
 * ever exist on the server (configured in Vercel):
 *   - MAILERLITE_API_TOKEN         (shared secret Bearer token — NEVER sent to the client)
 *   - MAILERLITE_FUNNEL1_GROUP_ID  (the group THIS funnel's subscribers join)
 *
 * Isolation guarantee: this route only ever references
 * MAILERLITE_FUNNEL1_GROUP_ID, so a Funnel 1 subscriber can never land in the
 * Funnel 2 group (MAILERLITE_GROUP_ID) — that variable is not read here.
 *
 * The client posts JSON `{ email, firstName }`; we validate + trim, then
 * create/update the subscriber in MailerLite and assign them to the group.
 * MailerLite's POST /subscribers is a non-destructive upsert: 201 = created,
 * 200 = already existed — both are treated as success so a returning visitor
 * never sees an error.
 *
 * We never log the token and never forward raw MailerLite response bodies to
 * the client (they can contain account detail); the client only receives a
 * friendly, generic message.
 */

// This handler talks to a third-party API with request data — always dynamic.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAILERLITE_SUBSCRIBERS_URL =
  "https://connect.mailerlite.com/api/subscribers";

// Pragmatic RFC 2821-ish email check (MailerLite does the authoritative check).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Abort the upstream call if MailerLite is slow, so the user isn't left hanging.
const REQUEST_TIMEOUT_MS = 10_000;

type SubscribePayload = {
  email?: unknown;
  firstName?: unknown;
};

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: NextRequest) {
  const token = process.env.MAILERLITE_API_TOKEN;
  const groupId = process.env.MAILERLITE_FUNNEL1_GROUP_ID;

  // Misconfiguration: fail closed with a generic message (no secret detail).
  if (!token || !groupId) {
    // Log the *fact* of misconfiguration, never the token value.
    console.error(
      "[wealth-confidence/subscribe] Missing MailerLite configuration (token or Funnel 1 group id).",
    );
    return jsonError(
      "We couldn't process your request right now. Please try again shortly.",
      500,
    );
  }

  let body: SubscribePayload;
  try {
    body = (await request.json()) as SubscribePayload;
  } catch {
    return jsonError("Please enter a valid email address.", 400);
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const firstName =
    typeof body.firstName === "string" ? body.firstName.trim() : "";

  // First name is required for this funnel.
  if (!firstName) {
    return jsonError("Please enter your first name.", 422);
  }

  if (!email || !EMAIL_RE.test(email) || email.length > 320) {
    return jsonError("Please enter a valid email address.", 422);
  }

  // Cap length defensively before sending upstream.
  const name = firstName.slice(0, 100);

  const timeout = AbortSignal.timeout(REQUEST_TIMEOUT_MS);

  try {
    const mlResponse = await fetch(MAILERLITE_SUBSCRIBERS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        fields: { name },
        groups: [groupId],
      }),
      // Never cache a subscription write.
      cache: "no-store",
      signal: timeout,
    });

    // 201 created, 200 already-existed → both success (non-destructive upsert).
    if (mlResponse.status === 200 || mlResponse.status === 201) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Validation error from MailerLite (e.g. malformed email that slipped past).
    if (mlResponse.status === 422) {
      return jsonError("Please enter a valid email address.", 422);
    }

    // Any other status: log status only (not body/token), return generic error.
    console.error(
      `[wealth-confidence/subscribe] MailerLite responded with status ${mlResponse.status}.`,
    );
    return jsonError(
      "We couldn't add you just now. Please try again in a moment.",
      502,
    );
  } catch (error) {
    // Network/timeout etc. Log a redacted message — no token, no response body.
    console.error(
      "[wealth-confidence/subscribe] Error contacting MailerLite:",
      error instanceof Error ? error.message : "unknown error",
    );
    return jsonError(
      "We couldn't add you just now. Please try again in a moment.",
      502,
    );
  }
}
