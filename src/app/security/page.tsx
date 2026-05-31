import type { Metadata } from "next";
import { DocPage, PlaceholderNote } from "@/components/DocPage";
import { security, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Cogent Base security posture — zero-retention private cloud, citation on every answer, human-in-the-loop verification, and confidence-gated output.",
  alternates: { canonical: "/security" },
};

// Stub page (brief §3) — expands on the homepage Trust & security section.
export default function SecurityPage() {
  return (
    <DocPage title="Security" updated="May 2026">
      <p>
        {site.name} is built to the standard of a live filing. This page will hold the full detail
        of our controls, certifications, and sub-processor list. The summary below mirrors the
        commitments on our homepage.
      </p>

      <PlaceholderNote>
        Expand with certification status, architecture detail, sub-processor list, and a
        responsible-disclosure contact before launch. {security.compliancePending}
      </PlaceholderNote>

      {security.controls.map((c) => (
        <section key={c.num}>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
        </section>
      ))}
    </DocPage>
  );
}
