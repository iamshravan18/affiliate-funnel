import { NextResponse, type NextRequest } from "next/server";
import {
  subscribeWithResend,
  type LeadMagnetConfig,
} from "@/app/api/_lib/resendLeadMagnet";

/**
 * Funnel 1 (The Wealth Confidence Guide) opt-in → Resend.
 *
 * Funnel-1-specific endpoint, fully isolated from Funnel 2's
 * `/api/morning-clarity/subscribe` route so the two funnels never collide.
 *
 * Secure, server-only route handler. It reads Resend credentials from
 * environment variables that only ever exist on the server (configured in
 * Vercel):
 *   - RESEND_API_KEY       (secret Bearer token — NEVER sent to the client)
 *   - RESEND_FROM_EMAIL    (verified Resend sender, e.g. Micro Saving Daily <hello@...>)
 *   - RESEND_REPLY_TO_EMAIL (optional)
 *   - RESEND_FUNNEL1_SEGMENT_ID (Money-Funnel-1 segment id)
 *
 * Isolation guarantee: this route stores Funnel 1 metadata on the Resend
 * contact and sends only The Wealth Confidence Guide email.
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

const WEALTH_CONFIDENCE_CONFIG: LeadMagnetConfig = {
  routeLabel: "wealth-confidence/subscribe",
  funnel: "wealth-confidence",
  leadMagnet: "The Wealth Confidence Guide",
  subject: "Your Wealth Confidence Guide",
  guidePath: "/downloads/the-wealth-confidence-guide.pdf",
  guideLabel: "Open The Wealth Confidence Guide",
  thankYouPath: "/wealth-confidence-guide/thank-you",
  segmentIdEnvVar: "RESEND_FUNNEL1_SEGMENT_ID",
  segmentId: "84c70457-5924-4cbf-87b8-9048528a8838",
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
  const result = await subscribeWithResend(WEALTH_CONFIDENCE_CONFIG, {
    email,
    firstName: name,
  });

  if (result.ok) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  return jsonError(result.message, result.status);
}
