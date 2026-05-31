import type { NextConfig } from "next";

/**
 * Content-Security-Policy. Self-only by default. `unsafe-inline` on style-src
 * covers next/font + the design system's inline style attributes; script-src
 * allows Cloudflare Turnstile and the optional cookieless analytics host.
 * `frame-src` is for the Turnstile widget.
 */
const ANALYTICS_SRC = "https://plausible.io"; // configurable; see Analytics.tsx
const TURNSTILE_SRC = "https://challenges.cloudflare.com";

const csp = [
  `default-src 'self'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  `object-src 'none'`,
  `img-src 'self' data: blob:`,
  `font-src 'self'`,
  `style-src 'self' 'unsafe-inline'`,
  `script-src 'self' 'unsafe-inline' ${TURNSTILE_SRC} ${ANALYTICS_SRC}`,
  `frame-src ${TURNSTILE_SRC}`,
  `connect-src 'self' ${ANALYTICS_SRC} ${TURNSTILE_SRC}`,
  `upgrade-insecure-requests`,
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    // www -> apex. (Vercel also enforces this at the domain level; kept here so
    // the behaviour is explicit and portable.)
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cogentbase.ai" }],
        destination: "https://cogentbase.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
