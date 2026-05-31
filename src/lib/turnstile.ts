/**
 * Cloudflare Turnstile server-side verification.
 * If TURNSTILE_SECRET_KEY is unset (e.g. local dev), verification is skipped so
 * the form remains testable — production must set the key (see .env.example).
 */
export async function verifyTurnstile(
  token: string | undefined,
  remoteIp: string,
): Promise<{ ok: boolean; skipped?: boolean }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: true, skipped: true };
  if (!token) return { ok: false };

  try {
    const body = new URLSearchParams({ secret, response: token, remoteip: remoteIp });
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body },
    );
    const data = (await res.json()) as { success: boolean };
    return { ok: data.success === true };
  } catch {
    // Fail closed on verification errors.
    return { ok: false };
  }
}
