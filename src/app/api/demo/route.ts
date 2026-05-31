import { validateDemoForm, isFreeMail } from "@/lib/validation";
import { rateLimit, clientIp } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Demo-request handler. Pipeline:
 *   rate-limit -> honeypot -> Turnstile -> validate -> deliver (Resend + webhook).
 * Delivery destinations are env-configured; nothing is hard-coded or committed.
 */
export async function POST(request: Request) {
  const ip = clientIp(request.headers);

  const limited = rateLimit(`demo:${ip}`, { limit: 5, windowMs: 60_000 });
  if (!limited.allowed) {
    return json(
      { ok: false, message: "Too many requests. Please try again shortly." },
      429,
      { "Retry-After": String(limited.retryAfterSeconds) },
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, message: "Invalid request." }, 400);
  }

  // Honeypot: real users never fill the hidden "company_url" field.
  if (typeof payload.company_url === "string" && payload.company_url.trim() !== "") {
    // Silently accept so bots can't distinguish success from rejection.
    return json({ ok: true, message: "Thank you." }, 200);
  }

  // Cloudflare Turnstile (skipped automatically when no secret is configured).
  const turnstile = await verifyTurnstile(
    typeof payload.turnstileToken === "string" ? payload.turnstileToken : undefined,
    ip,
  );
  if (!turnstile.ok) {
    return json({ ok: false, message: "Verification failed. Please retry." }, 400);
  }

  const fields = {
    name: String(payload.name ?? ""),
    firm: String(payload.firm ?? ""),
    email: String(payload.email ?? ""),
  };
  const { ok, errors } = validateDemoForm(fields);
  if (!ok) {
    return json({ ok: false, message: "Please check the form.", errors }, 422);
  }

  try {
    await deliver(fields);
  } catch (err) {
    console.error("[demo] delivery failed:", err);
    return json(
      { ok: false, message: "We could not submit your request. Please email us directly." },
      502,
    );
  }

  return json({
    ok: true,
    message: "Thank you. We will be in touch confidentially within two business days.",
  });
}

/** Email the founders via Resend and (optionally) POST to a CRM/webhook. */
async function deliver(fields: { name: string; firm: string; email: string }) {
  const tasks: Promise<unknown>[] = [];

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.DEMO_NOTIFY_TO;
  const from = process.env.DEMO_NOTIFY_FROM;
  if (resendKey && to && from) {
    tasks.push(sendResendEmail({ resendKey, to, from, fields }));
  } else {
    // No mail configured (e.g. local/dev) — log so the request is never lost.
    console.info("[demo] request (no mailer configured):", {
      ...fields,
      free_mail: isFreeMail(fields.email),
    });
  }

  const webhook = process.env.DEMO_WEBHOOK_URL;
  if (webhook) {
    tasks.push(
      fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...fields, source: "cogentbase.ai", ts: Date.now() }),
      }),
    );
  }

  if (tasks.length) await Promise.all(tasks);
}

async function sendResendEmail({
  resendKey,
  to,
  from,
  fields,
}: {
  resendKey: string;
  to: string;
  from: string;
  fields: { name: string; firm: string; email: string };
}) {
  const free = isFreeMail(fields.email);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${resendKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: fields.email,
      subject: `Demo request — ${fields.firm}`,
      text: [
        "New confidential demo request",
        "",
        `Name:  ${fields.name}`,
        `Firm:  ${fields.firm}`,
        `Email: ${fields.email}${free ? "  (personal/free-mail)" : ""}`,
        "",
        "— cogentbase.ai",
      ].join("\n"),
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  }
}

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });
}
