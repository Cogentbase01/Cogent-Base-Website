import Script from "next/script";

/**
 * Loads the Cloudflare Turnstile widget script only when a public site key is
 * configured. The widget container + success callback live in DemoForm.
 */
export function TurnstileScript() {
  if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) return null;
  return (
    <Script
      src="https://challenges.cloudflare.com/turnstile/v0/api.js"
      strategy="afterInteractive"
      defer
    />
  );
}
