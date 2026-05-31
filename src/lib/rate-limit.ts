/**
 * Minimal in-memory fixed-window rate limiter for the demo endpoint.
 *
 * NOTE: in-memory state is per-instance and resets on cold start — adequate as
 * a first line of defence alongside the honeypot + Turnstile. For strict
 * multi-instance limits, swap this for a shared store (e.g. Upstash Redis)
 * behind the same interface; the Route Handler does not need to change.
 */

type Stamp = { count: number; resetAt: number };
const buckets = new Map<string, Stamp>();

export type RateLimitResult = { allowed: boolean; retryAfterSeconds: number };

export function rateLimit(
  key: string,
  { limit = 5, windowMs = 60_000 }: { limit?: number; windowMs?: number } = {},
): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || now > existing.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

/** Best-effort client IP from proxy headers (Vercel sets x-forwarded-for). */
export function clientIp(headers: Headers): string {
  const fwd = headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return headers.get("x-real-ip") ?? "unknown";
}
