import type { Metadata } from "next";
import { DocPage, PlaceholderNote } from "@/components/DocPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms governing the use of the Cogent Base website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <DocPage title="Terms of use" updated="May 2026">
      <PlaceholderNote>
        These website terms are a structured placeholder for counsel to review and finalise before
        launch. They govern use of this marketing website only — not the {site.name} platform,
        which is subject to a separate services agreement.
      </PlaceholderNote>

      <h2>Use of this website</h2>
      <p>
        This website is provided for general information about {site.name}. Nothing on it
        constitutes an offer of securities, investment advice, or a solicitation in any
        jurisdiction.
      </p>

      <h2>No warranty</h2>
      <PlaceholderNote>
        Insert standard disclaimers of warranty and limitations of liability for website content.
      </PlaceholderNote>

      <h2>Intellectual property</h2>
      <p>
        The {site.name} name, wordmark, and website content are the property of {site.name} unless
        stated otherwise.
      </p>

      <h2>Governing law</h2>
      <PlaceholderNote>
        Confirm governing law and jurisdiction (expected: {site.jurisdiction}).
      </PlaceholderNote>
    </DocPage>
  );
}
