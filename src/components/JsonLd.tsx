import { site } from "@/content/site";

/** Organization schema (JSON-LD). Server-rendered into the homepage. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description:
      "Autonomous due diligence infrastructure that compresses IPO due diligence from three months to three days, for HKEX and SGX issuers and their sponsors.",
    email: site.contactEmail,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Hong Kong SAR",
      addressCountry: "HK",
    },
    areaServed: ["HK", "SG"],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline here (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
