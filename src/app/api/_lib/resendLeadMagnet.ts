const RESEND_CONTACTS_URL = "https://api.resend.com/contacts";
const RESEND_EMAILS_URL = "https://api.resend.com/emails";

const BRAND_NAME = "Micro Saving Daily";
const SITE_URL = "https://www.microsavingdaily.com";
const REQUEST_TIMEOUT_MS = 10_000;
const DEFAULT_FROM_EMAIL = "Micro Saving Daily <Londyn@microsavingdaily.com>";

export type LeadMagnetConfig = {
  routeLabel: string;
  funnel: "wealth-confidence" | "morning-clarity";
  leadMagnet: string;
  subject: string;
  guidePath: string;
  guideLabel: string;
  thankYouPath: string;
  segmentIdEnvVar?: string;
  segmentId?: string;
};

type Lead = {
  email: string;
  firstName: string;
};

type ResendResult =
  | { ok: true }
  | { ok: false; status: 422 | 500 | 502; message: string };

function friendlyError(message: string, status: 422 | 500 | 502): ResendResult {
  return { ok: false, status, message };
}

function resendHeaders(apiKey: string) {
  return {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

function guideUrl(path: string) {
  return `${SITE_URL}${path}`;
}

function htmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml(config: LeadMagnetConfig, firstName: string) {
  const safeName = htmlEscape(firstName);
  const safeGuideLabel = htmlEscape(config.guideLabel);
  const safeLeadMagnet = htmlEscape(config.leadMagnet);
  const downloadUrl = guideUrl(config.guidePath);
  const thankYouUrl = guideUrl(config.thankYouPath);

  return `<!doctype html>
<html>
  <body style="margin:0;background:#f7f3e9;color:#0b241f;font-family:Arial,sans-serif;line-height:1.6;">
    <div style="max-width:620px;margin:0 auto;padding:32px 20px;">
      <p style="margin:0 0 18px;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#0f3d2e;">${BRAND_NAME}</p>
      <h1 style="margin:0 0 18px;font-size:30px;line-height:1.18;color:#0f3d2e;">Your guide is ready</h1>
      <p style="margin:0 0 16px;">Hi ${safeName},</p>
      <p style="margin:0 0 22px;">Thanks for requesting ${safeLeadMagnet}. You can open your free guide below.</p>
      <p style="margin:0 0 28px;">
        <a href="${downloadUrl}" style="display:inline-block;border-radius:999px;background:#0f3d2e;color:#f7f3e9;padding:14px 22px;text-decoration:none;font-weight:700;">${safeGuideLabel}</a>
      </p>
      <p style="margin:0 0 16px;">If the button does not work, copy and paste this link into your browser:</p>
      <p style="margin:0 0 24px;word-break:break-word;"><a href="${downloadUrl}" style="color:#0f3d2e;">${downloadUrl}</a></p>
      <p style="margin:0 0 24px;">You can also return to your confirmation page here: <a href="${thankYouUrl}" style="color:#0f3d2e;">${thankYouUrl}</a></p>
      <p style="margin:0;color:#516159;font-size:14px;">Small habits. Stronger money confidence.</p>
    </div>
  </body>
</html>`;
}

function buildContactBody(
  config: LeadMagnetConfig,
  lead: Lead,
  segmentId?: string,
) {
  return {
    email: lead.email,
    first_name: lead.firstName,
    unsubscribed: false,
    ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
  };
}

async function createOrUpdateContact(
  apiKey: string,
  config: LeadMagnetConfig,
  lead: Lead,
  segmentId: string | undefined,
  signal: AbortSignal,
): Promise<ResendResult> {
  const contactBody = buildContactBody(config, lead, segmentId);

  const createResponse = await fetch(RESEND_CONTACTS_URL, {
    method: "POST",
    headers: resendHeaders(apiKey),
    body: JSON.stringify(contactBody),
    cache: "no-store",
    signal,
  });

  if (createResponse.ok) {
    return { ok: true };
  }

  if (createResponse.status === 409) {
    const updateResponse = await fetch(
      `${RESEND_CONTACTS_URL}/${encodeURIComponent(lead.email)}`,
      {
        method: "PATCH",
        headers: resendHeaders(apiKey),
        body: JSON.stringify({
          first_name: lead.firstName,
          unsubscribed: false,
        }),
        cache: "no-store",
        signal,
      },
    );

    if (updateResponse.ok) {
      return { ok: true };
    }

    console.error(
      `[${config.routeLabel}] Resend contact update responded with status ${updateResponse.status}.`,
    );
    return friendlyError(
      "We couldn't add you just now. Please try again in a moment.",
      502,
    );
  }

  console.error(
    `[${config.routeLabel}] Resend contact create responded with status ${createResponse.status}.`,
  );
  return friendlyError(
    "We couldn't add you just now. Please try again in a moment.",
    502,
  );
}

async function addContactToSegment(
  apiKey: string,
  config: LeadMagnetConfig,
  lead: Lead,
  signal: AbortSignal,
): Promise<ResendResult> {
  if (!config.segmentIdEnvVar && !config.segmentId) {
    return { ok: true };
  }

  const segmentId = config.segmentIdEnvVar
    ? process.env[config.segmentIdEnvVar] || config.segmentId
    : config.segmentId;
  if (!segmentId) {
    console.error(
      `[${config.routeLabel}] Missing Resend segment configuration (${config.segmentIdEnvVar}).`,
    );
    return friendlyError(
      "We couldn't process your request right now. Please try again shortly.",
      500,
    );
  }

  const segmentResponse = await fetch(
    `${RESEND_CONTACTS_URL}/${encodeURIComponent(lead.email)}/segments/${encodeURIComponent(segmentId)}`,
    {
      method: "POST",
      headers: resendHeaders(apiKey),
      cache: "no-store",
      signal,
    },
  );

  if (segmentResponse.ok || segmentResponse.status === 409) {
    return { ok: true };
  }

  console.error(
    `[${config.routeLabel}] Resend segment add responded with status ${segmentResponse.status}.`,
  );
  return friendlyError(
    "We couldn't add you just now. Please try again in a moment.",
    502,
  );
}

async function sendGuideEmail(
  apiKey: string,
  fromEmail: string,
  replyToEmail: string | undefined,
  config: LeadMagnetConfig,
  lead: Lead,
  signal: AbortSignal,
): Promise<ResendResult> {
  const emailResponse = await fetch(RESEND_EMAILS_URL, {
    method: "POST",
    headers: resendHeaders(apiKey),
    body: JSON.stringify({
      from: fromEmail,
      to: [lead.email],
      ...(replyToEmail ? { reply_to: replyToEmail } : {}),
      subject: config.subject,
      html: buildEmailHtml(config, lead.firstName),
    }),
    cache: "no-store",
    signal,
  });

  if (emailResponse.ok) {
    return { ok: true };
  }

  console.error(
    `[${config.routeLabel}] Resend email send responded with status ${emailResponse.status}.`,
  );
  return friendlyError(
    "We couldn't send your guide just now. Please try again in a moment.",
    502,
  );
}

export async function subscribeWithResend(
  config: LeadMagnetConfig,
  lead: Lead,
): Promise<ResendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;
  const replyToEmail =
    process.env.RESEND_REPLY_TO_EMAIL || "Londyn@microsavingdaily.com";
  const segmentId = config.segmentIdEnvVar
    ? process.env[config.segmentIdEnvVar] || config.segmentId
    : config.segmentId;

  if (!apiKey) {
    console.error(
      `[${config.routeLabel}] Missing Resend configuration (API key).`,
    );
    return friendlyError(
      "We couldn't process your request right now. Please try again shortly.",
      500,
    );
  }

  if (config.segmentIdEnvVar && !segmentId) {
    console.error(
      `[${config.routeLabel}] Missing Resend segment configuration (${config.segmentIdEnvVar}).`,
    );
    return friendlyError(
      "We couldn't process your request right now. Please try again shortly.",
      500,
    );
  }

  try {
    const contactResult = await createOrUpdateContact(
      apiKey,
      config,
      lead,
      segmentId,
      AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    );
    if (!contactResult.ok) {
      return contactResult;
    }

    const segmentResult = await addContactToSegment(
      apiKey,
      config,
      lead,
      AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    );
    if (!segmentResult.ok) {
      return segmentResult;
    }

    return sendGuideEmail(
      apiKey,
      fromEmail,
      replyToEmail,
      config,
      lead,
      AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    );
  } catch (error) {
    console.error(
      `[${config.routeLabel}] Error contacting Resend:`,
      error instanceof Error ? error.message : "unknown error",
    );
    return friendlyError(
      "We couldn't add you just now. Please try again in a moment.",
      502,
    );
  }
}
