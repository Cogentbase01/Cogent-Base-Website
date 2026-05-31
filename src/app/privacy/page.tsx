import type { Metadata } from "next";
import { DocPage, PlaceholderNote } from "@/components/DocPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Cogent Base handles personal data, written with PDPO, PDPA, and GDPR obligations in mind.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <DocPage title="Privacy notice" updated="May 2026">
      <PlaceholderNote>
        This privacy notice is provided as a structured placeholder. It must be reviewed and
        finalised by counsel before launch, with particular regard to the Hong Kong PDPO, the
        Singapore PDPA, and the EU GDPR given our cross-jurisdictional visitors.
      </PlaceholderNote>

      <p>
        This notice explains what personal data {site.name} collects through this website, why,
        and the choices available to you. It does not cover data processed within a client
        engagement, which is governed by the relevant services agreement and data-processing
        terms.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Demo requests.</strong> When you request a demo we collect your name, firm, and
          work email so we can respond. We do not ask for more.
        </li>
        <li>
          <strong>Cookieless analytics.</strong> We use privacy-first, cookieless analytics that
          record aggregate page views without tracking individuals across sites. No advertising or
          cross-site tracking cookies are set.
        </li>
      </ul>

      <h2>How we use it</h2>
      <p>
        We use demo-request details solely to contact you about an evaluation of {site.name}. We
        do not sell personal data, and we do not use it for advertising.
      </p>

      <h2>Legal bases and your rights</h2>
      <PlaceholderNote>
        Insert the lawful bases (e.g. legitimate interests / consent) and the data-subject rights
        and contact route for access, correction, and erasure requests under PDPO, PDPA, and GDPR.
      </PlaceholderNote>

      <h2>Retention</h2>
      <PlaceholderNote>Insert retention periods for demo-request data.</PlaceholderNote>

      <h2>Contact</h2>
      <p>
        Questions about this notice can be sent to{" "}
        <a className="inline" href={`mailto:${site.contactEmail}`}>
          {site.contactEmail}
        </a>
        . {site.name} is based in {site.jurisdiction}.
      </p>
    </DocPage>
  );
}
