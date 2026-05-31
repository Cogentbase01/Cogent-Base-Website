import type { Metadata } from "next";
import { Bodoni_Moda, IBM_Plex_Mono } from "next/font/google";
import type { Viewport } from "next";
import { site } from "@/content/site";
import { ScrollReveals } from "@/components/ScrollReveals";
import { Analytics } from "@/components/Analytics";
import { TurnstileScript } from "@/components/Turnstile";
import "./globals.css";

/* Self-hosted via next/font (no render-blocking external font requests). Body
   text uses a Söhne-like neo-grotesque system stack (see globals.css). */
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Autonomous due diligence infrastructure for capital markets`,
    template: `%s — ${site.name}`,
  },
  description:
    "Cogent Base compresses IPO due diligence from three months to three days. Every answer linked to its source, independently verified, and flagged for human review.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — We compress IPO due diligence from three months to three days`,
    description:
      "Autonomous due diligence infrastructure for HKEX and SGX issuers and their sponsors.",
    // TODO(share-image): add designed OG image at /opengraph-image.
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Autonomous due diligence infrastructure`,
    description:
      "We compress IPO due diligence from three months to three days. Every answer linked to its source.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon", apple: "/icon" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0A1521",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${bodoni.variable} ${plexMono.variable}`}>
      <body>
        {children}
        <ScrollReveals />
        <TurnstileScript />
        <Analytics />
      </body>
    </html>
  );
}
