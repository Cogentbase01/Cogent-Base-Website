import Script from "next/script";

/**
 * Privacy-first, cookieless analytics (Plausible / Fathom-compatible).
 * Renders nothing unless NEXT_PUBLIC_ANALYTICS_DOMAIN is set, so dev and
 * preview stay clean. No Google Analytics, no Meta pixel, no cookies — so no
 * cookie banner is required.
 *
 * Env:
 *   NEXT_PUBLIC_ANALYTICS_DOMAIN  e.g. cogentbase.ai
 *   NEXT_PUBLIC_ANALYTICS_SRC     defaults to Plausible's script
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
  if (!domain) return null;

  const src = process.env.NEXT_PUBLIC_ANALYTICS_SRC ?? "https://plausible.io/js/script.js";

  return <Script src={src} data-domain={domain} strategy="afterInteractive" defer />;
}
