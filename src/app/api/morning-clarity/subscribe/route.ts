import { NextResponse, type NextRequest } from "next/server";
import {
  subscribeWithResend,
  type LeadMagnetConfig,
} from "@/app/api/_lib/resendLeadMagnet";

/**
 * Funnel 2 (The 7-Minute Morning Clarity Reset) opt-in → Resend.
 *
 * Funnel-2-specific endpoint (kept separate from Funnel 1's earmarked generic
 * `/api/subscribe` route so the two funnels never collide).
 *
 * Secure, server-only route handler. It reads Resend credentials from
 * environment variables that only ever exist on the server (configured in
 * Vercel):
 *   - RESEND_API_KEY       (secret Bearer token — NEVER sent to the client)
 *   - RESEND_FROM_EMAIL    (verified Resend sender, e.g. Micro Saving Daily <hello@...>)
 *   - RESEND_REPLY_TO_EMAIL (optional)
 *
 * The client posts JSON `{ email, firstName }`; we validate + trim, then
 * create/update the contact in Resend and send the guide email.
 *
 * We never log the token and never forward raw Resend response bodies to
 * the client (they can contain account detail); the client only receives a
 * friendly, generic message.
 */

// This handler talks to a third-party API with request data — always dynamic.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Pragmatic RFC 2821-ish email check (Resend does the authoritative check).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubscribePayload = {
  email?: unknown;
  firstName?: unknown;
};

const MORNING_CLARITY_CONFIG: LeadMagnetConfig = {
  routeLabel: "morning-clarity/subscribe",
  funnel: "morning-clarity",
  leadMagnet: "The 7-Minute Morning Clarity Reset",
  subject: "Your 7-Minute Morning Clarity Reset",
  guidePath: "/downloads/the-7-minute-morning-clarity-reset.pdf",
  guideLabel: "Open The 7-Minute Morning Clarity Reset",
  thankYouPath: "/7-minute-morning-clarity-reset/thank-you",
};

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: NextRequest) {
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
  const result = await subscribeWithResend(MORNING_CLARITY_CONFIG, {
    email,
    firstName: name,
  });

  if (result.ok) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  return jsonError(result.message, result.status);
}
