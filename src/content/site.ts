/**
 * Site content — single source of truth for copy.
 * Non-developers can edit text here without touching components.
 *
 * CONTENT INTEGRITY: do not invent statistics, metrics, client logos, or
 * testimonials. Where a figure is not yet substantiated, use a clearly-marked
 * `[… pending]` placeholder token (see `METRIC_PENDING`) for counsel/founders
 * to replace with verified content before launch.
 */

/** Visible placeholder token for unverified metrics. */
export const METRIC_PENDING = "[metric pending]";

export const site = {
  name: "Cogent Base",
  domain: "cogentbase.ai",
  url: "https://cogentbase.ai",
  /** Verified citation-bracket mark that follows the wordmark. */
  mark: "[✓]",
  tagline:
    "Autonomous due diligence infrastructure for capital markets issuers and their sponsors.",
  contactEmail: "partnerships@cogentbase.ai",
  jurisdiction: "Hong Kong SAR",
} as const;

/** Primary anchor navigation. `id` matches the section's DOM id. */
export const nav = {
  links: [
    { id: "platform", label: "How it works" },
    { id: "security", label: "Security" },
    { id: "team", label: "Team" },
  ],
  cta: { label: "Request a demo", href: "#demo" },
} as const;

export const hero = {
  kicker: { idx: "01", label: "Autonomous due diligence infrastructure" },
  // The one-line positioning. `lift` renders in italic gold.
  headline: {
    lead: "We compress IPO due diligence from three months to ",
    lift: "three days",
    tail: ".",
  },
  sub: "Built for HKEX and SGX issuers and their sponsors. Cogent Base categorises the data room and drafts the bank's due-diligence questionnaire — every answer linked to its source, independently verified, and flagged for human review.",
  primaryCta: { label: "Request a demo", href: "#demo" },
  secondaryCta: { label: "See how it works", href: "#platform" },
  // Factual product descriptors, not performance claims.
  meta: [
    { num: "1,000+", lbl: "DDQ line items" },
    { num: "100%", lbl: "Source-cited answers" },
    { num: "3 days", lbl: "From three months" },
  ],
  // Restrained product glimpse (illustrative workspace, not real client data).
  glimpse: {
    workspace: "DDQ Workspace · Item 412 / 1,184",
    section: "Section 4 — Financial & Accounting",
    question:
      "Describe the issuer's revenue recognition policy and confirm consistency across the track-record period.",
    confidence: "CONF 98%",
  },
} as const;

export const problem = {
  kicker: { idx: "02", label: "The bottleneck" },
  heading: "The questionnaire is where the listing timetable goes to wait.",
  lede: "A sponsor's due-diligence questionnaire is the gate between a data room and a prospectus. Today it is answered by hand — line by line, document by document — under the pressure of a fixed audit window.",
  stats: [
    {
      stat: "800–1,400",
      unit: "line items per questionnaire",
      desc: "Each requires the right document, the right clause, and an answer a sponsor can sign.",
    },
    {
      stat: "2–4",
      unit: "months of a CFO's time",
      desc: "Senior finance and company-secretarial teams diverted from the business at the worst possible moment.",
    },
    {
      stat: "A missed",
      unit: "audit window",
      desc: "When the comfort period lapses, the cost is measured in millions — and a delayed listing.",
    },
  ],
  source: "Based on discovery interviews with HKEX issuers and sponsors.",
} as const;

export const platform = {
  kicker: { idx: "03", label: "The platform" },
  heading: "Four agents. One verifiable answer.",
  lede: "Every answer passes through a disciplined pipeline before a human ever sees it. Nothing is asserted without a source; nothing ships without review.",
  pipeline: [
    {
      step: "Stage 01",
      name: "Refiner",
      desc: "Categorises the virtual data room and maps every document to the questionnaire structure.",
    },
    {
      step: "Stage 02",
      name: "Drafting Agent",
      desc: "Produces a draft answer for each DDQ item with a direct hyperlink to the source document and page number.",
    },
    {
      step: "Stage 03",
      name: "Critic Agent",
      desc: "Challenges each draft against its sources, scores confidence, and flags anything unsupported.",
    },
    {
      step: "Stage 04",
      name: "Human Verification",
      desc: "Low-confidence items are gated for the sponsor or CFO to confirm before sign-off.",
      human: true,
    },
  ],
  split: {
    intro: "The signature view — answer and source, side by side.",
    introAction: "Select a citation to verify.",
    answerDoc: "Item 412 · Revenue recognition",
    section: "Section 4 — Financial & Accounting",
    question:
      "Describe the issuer's revenue recognition policy and confirm consistency across the track-record period.",
    sourceDocDefault: "DR-1042 · Accounting policies",
    sources: [
      {
        id: "s1",
        doc: "DR-1042 · Accounting policies",
        ref: "DR-1042 · §4.2 — Revenue recognition",
        text: '"Revenue from the sale of goods is recognised at the point in time when control of the asset is transferred to the customer, generally on delivery and acceptance, consistent with the requirements of HKFRS 15."',
      },
      {
        id: "s2",
        doc: "DR-1042 · Accounting policies",
        ref: "DR-1042 · §4.5 — Long-term contracts",
        text: '"For contracts where the customer simultaneously receives and consumes the benefits, revenue is recognised over time using an input method based on costs incurred relative to total expected costs."',
      },
      {
        id: "s3",
        doc: "AUD-07 · Auditor's report",
        ref: "AUD-07 · p.31 — Track-record period",
        text: '"In our opinion, the consolidated financial statements give a true and fair view for each of the three years ended 31 December 2024. No prior-period restatements were required."',
      },
    ],
    gateNote:
      "Confidence below threshold routes the item to human verification before the answer is admitted to the questionnaire.",
  },
} as const;

export const security = {
  kicker: { idx: "04", label: "Trust & security" },
  heading: "Built to the standard of a live filing.",
  lede: "The questionnaire is privileged, price-sensitive, and regulated. Our controls are designed for the firms whose licence depends on getting it right.",
  controls: [
    {
      num: "S/01",
      title: "Zero-retention private cloud",
      body: "Your data room is processed in an isolated, single-tenant environment. No content is retained for model training, and nothing leaves your jurisdiction's boundary.",
    },
    {
      num: "S/02",
      title: "A citation on every answer",
      body: "Every claim resolves to a specific document and clause in the data room. No source, no answer — traceability is enforced by the pipeline, not added afterwards.",
    },
    {
      num: "S/03",
      title: "Human-in-the-loop verification",
      body: "The sponsor remains the author of record. Cogent Base drafts and evidences; your team reviews, edits, and signs. Accountability never leaves the firm.",
    },
    {
      num: "S/04",
      title: "Confidence-gated output",
      body: "Each answer carries a calibrated confidence score. Anything below threshold is withheld from the questionnaire and routed for review — never silently asserted.",
    },
  ],
  compliance: "Aligned to the regulatory rigour expected of a HKEX filing.",
  compliancePending: "[SOC 2 / ISO 27001 status — to be inserted]",
} as const;

export const audiences = {
  kicker: { idx: "05", label: "Who it's for" },
  heading: "Two sides of the same deal.",
  lede: "Whether you are preparing to list or sponsoring the listing, the questionnaire sits on your critical path. We take it off.",
  cards: [
    {
      tag: "For issuers",
      title: "Protect your listing timetable.",
      body: "Compress the due-diligence response from a multi-month diversion into a focused review, and keep your finance team on the business through the most demanding stretch of the process.",
      points: [
        "Categorise your data room automatically against the sponsor's questionnaire",
        "Receive drafted, source-cited answers ready for your review",
        "Hold the audit window — and the filing date — with room to spare",
      ],
      cta: "Compress your DDQ →",
    },
    {
      tag: "For sponsors",
      title: "Accelerate deal velocity across the pipeline.",
      body: "Standardise the questionnaire workflow across every mandate. Your bankers move from drafting to reviewing evidence, with a complete audit trail behind each sign-off.",
      points: [
        "Run more concurrent mandates without expanding the team",
        "Review evidence, not blank pages — every answer arrives cited",
        "Maintain a defensible record of diligence on every item",
      ],
      cta: "Accelerate your pipeline →",
    },
  ],
} as const;

export const team = {
  kicker: { idx: "06", label: "The team" },
  heading: "Capital markets, on the inside.",
  lede: "Cogent Base is built by people who have sat on both sides of a due-diligence table — and who have shipped enterprise AI into regulated workflows.",
  members: [
    {
      pedigree: "Capital markets",
      title: "Equity Capital Markets",
      role: "Equity capital markets execution across Asian listings.",
      bio: "A decade structuring and executing IPOs end to end — the questionnaire seen from the bank's side of the deal.",
    },
    {
      pedigree: "Regulatory",
      title: "Licensed HKEX sponsor",
      role: "Sponsor-principal experience under the HKEX regime.",
      bio: "First-hand accountability for diligence standards on live filings, and the judgement of where a licence is genuinely at stake.",
    },
    {
      pedigree: "Enterprise AI",
      title: "Production AI systems",
      role: "Shipping verifiable AI into regulated environments.",
      bio: "Built the kind of evaluation, citation, and human-in-the-loop infrastructure that holds up under institutional scrutiny.",
    },
  ],
  note: "Full team profiles available on request.",
} as const;

export const closing = {
  kicker: { idx: "07", label: "Request a demo" },
  heading: "Request a confidential demo.",
  sub: "See the verified-source workflow on a representative data room.",
  note: "By invitation, in confidence. We reply within two business days.",
} as const;

export const footer = {
  cols: [
    {
      h: "Platform",
      links: [
        { label: "How it works", href: "#platform" },
        { label: "The bottleneck", href: "#problem" },
        { label: "Trust & security", href: "#security" },
      ],
    },
    {
      h: "Company",
      links: [
        { label: "Team", href: "#team" },
        { label: "Who it's for", href: "#audiences" },
        { label: "Request a demo", href: "#demo" },
      ],
    },
    {
      h: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/security" },
      ],
    },
  ],
  legal:
    "Confidential — shared under NDA. Not an offer of securities. Jurisdiction: Hong Kong SAR.",
  copyright: `© ${new Date().getFullYear()} Cogent Base. All rights reserved.`,
} as const;
