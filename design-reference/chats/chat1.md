# Branding System Decisions

_Started 2026-05-31 07:46 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Cogent Base"
Project currently has 1 file(s)
User is viewing file: scraps/sketch-2026-05-31T07-47-03-6g3rtn.napkin
Current date is now May 31, 2026
</system-info>

<default aesthetic_system_instructions>
The user has not attached a design system. If they have ALSO not attached references or art direction, and the project is empty, you must ASK the user what visual aesthetic they want. Use the questions_v2 tool to ask about preferred vibe, audience, colors, type, mood, etc. Do NOT just pick your own visual aesthetic without getting the user's aesthetic input -- this is how you get slop!

Once answered, use this guidance when creating designs:
- Choose a type pairing from web-safe set or Google Fonts. Helvetica is a good choice. Avoid hard-to-read or overly stylized fonts. Use 1-3 fonts only.
- Foreground and background: choose a color tone (warm, cool, neutral, something in-between). Use subtly-toned whites and blacks; avoid saturations above 0.02 for whites.
- Accents: choose 0-2 additional accent colors using oklch. All accents should share same chroma and lightness; vary hue.
- NEVER write out an SVG yourself that's more complicated than a square, circle, diamond, etc.
- For imagery, never hand-draw SVGs; use subtly-striped SVG placeholders instead with monospace explainers for what should be dropped there (e.g. “product shot”)

CRITICAL: ignore default aesthetic entirely if given other aesthetic instructions like reference images, design systems or guidance, or if there are files in the project already.
</default aesthetic_system_instructions>

<pasted_text name="Pasted text (30 lines)">
Project: Marketing website for Cogent Base (cogentbase.ai)
You are designing the homepage for an enterprise AI company serving Asian capital markets. I am the senior product designer on this; this brief is the direction. Produce a polished, production-grade, fully responsive homepage design.
The company. Cogent Base is autonomous due diligence infrastructure for capital markets issuers. It compresses the IPO due diligence process — categorising a virtual data room and answering an investment bank's 1,000+ item due diligence questionnaire — from three months of manual work to a few days. Every AI-drafted answer is linked to its source document, independently verified, and flagged for human review when confidence is low. The one-line positioning: "We compress IPO due diligence from three months to three days."
Who visits this site. This is high-stakes, institutional B2B. Three audiences: (1) investment bank sponsors at firms like CICC, BOCI, CITIC — conservative, regulated, risk-averse decision-makers; (2) CFOs and company secretaries at listed and pre-IPO companies; (3) sophisticated investors. None of these people are impressed by hype. They are persuaded by precision, credibility, security, and evidence. The design must earn the trust of someone whose professional licence is on the line.
Brand personality. Institutional credibility meets modern intelligence. The gravity and discipline of a Hong Kong prospectus or a Bloomberg terminal, elevated with the restraint and polish of a serious modern software company. Think the trust of a tier-one financial institution crossed with the craft of Stripe, Palantir, and Hebbia. Confident, precise, understated, serious. Never playful, never hyped.
The creative idea — "The Verified Source." Cogent Base's entire product is built on a single principle: nothing is asserted without proof, and every claim is traceable to a source. Make that principle the visual through-line of the site. Weave in a restrained design language of citations, source links, and a "verified" state — precise, evidentiary, traceable. This is the ownable idea that separates this from a generic AI landing page. The signature product moment is a split-screen view: an AI-drafted DDQ answer on one side, its hyperlinked source document on the other, verifiable in a single click. Treat that as the hero product visual.
Visual language.

Colour: Deep institutional ink/navy as the primary canvas. A warm off-white "paper" tone for light sections, evoking documents and prospectuses. One refined accent — muted gold — for gravitas, plus a single restrained "verification" green used surgically only for verified/cited states. No more than two accents. No gradients-as-decoration.
Typography: A high-contrast editorial serif for display headlines (financial gravitas). A precise neo-grotesque sans (Inter / Söhne-like) for body. A monospace face for data points, citations, statistics, and technical labels — the type system itself should signal "serious and exact." Generous type scale, tight tracking on display.
Layout: Strict grid, generous whitespace, the disciplined order of a well-structured data room. Editorial composition, not a templated SaaS landing page. Use asymmetry where it adds sophistication.
Graphics: Custom, precise diagrammatic illustration of the multi-agent pipeline (Refiner → Drafting Agent → Critic Agent → human verification). The split-screen answer-plus-citation UI as the centrepiece. Subtle document and citation motifs. Absolutely no stock photography of business people, no abstract 3D blobs, no "AI sparkle" iconography.
Motion: Minimal and purposeful. Quiet reveals on scroll. One signature micro-interaction on the "view source / verify" action.

Explicitly avoid: the generic AI-startup aesthetic (purple-to-blue gradients, glassmorphism, floating abstract UI cards); consumer-app friendliness that undercuts institutional trust; hype words like "revolutionary" or "game-changing"; stock imagery; over-animation; and any fabricated logos, testimonials, or statistics.
Homepage structure.

Navigation — minimal: wordmark, "How it works," "Security," "Team," and a single primary action, "Request a demo."
Hero — the one-line positioning as the headline, a one-sentence subhead naming the audience (HKEX and SGX issuers and their sponsors), the primary CTA, and a restrained glimpse of the product.
The problem — the DDQ bottleneck, quantified: 800–1,400 line items, two-to-four months of a CFO's time, the multimillion-dollar cost of a missed audit window. Cite "based on discovery interviews with HKEX issuers and sponsors."
The platform / how it works — the four-agent pipeline as a clean diagram, leading into the split-screen verify-with-a-click product visual. This is the heart of the page.
Trust & security — likely the most important section for this audience. Zero-retention private cloud, source-citation on every answer, human-in-the-loop verification, confidence-gated output, and alignment with the regulatory rigour of a live filing. Make this section feel as solid as a vault.
Who it's for — two clear paths: issuers (compress your DDQ, protect your listing timeline) and sponsors (accelerate deal velocity across your pipeline).
The team — institutional pedigree presented with restraint: ex-Citi capital markets, a licensed HKEX sponsor, enterprise AI. Credibility, not bios-as-decoration.
Closing CTA — "Request a confidential demo" / "Book a conversation." This is a by-invitation, pre-launch posture, not a consumer sign-up.
Footer — minimal and professional: contact, confidentiality note, jurisdiction.

Copy tone. Precise, confident, understated — the voice of an institution, not the excitement of a startup. Short declarative sentences. International/British English (HKEX context). No exclamation marks. Let the numbers and the rigour carry the weight. Where any performance metric would appear (accuracy, time saved), insert a clearly marked placeholder such as "[verified accuracy metric — to be inserted]" rather than inventing a figure. Do not fabricate statistics, client logos, or testimonials; use tasteful placeholders the team will replace with substantiated content.
Technical requirements. Fully responsive, desktop-first but flawless on mobile. Fast, lightweight, accessible to WCAG AA. Clean, production-quality markup. The "Request a demo" interaction should be low-friction and confidential — name, firm, work email, nothing more.
Deliverable. A polished, production-grade homepage design — desktop and responsive views — that a tier-one investment bank would trust and a sophisticated AI investor would respect. Lead with restraint, precision, and the "verified source" idea throughout.
</pasted_text>


<system-reminder>Auto-injected reminder (ignore if not relevant): do not recreate copyrighted or branded UI unless the user's email domain matches that company. Create original designs instead.</system-reminder>

## Assistant

_[tool: list_files]_

I'll start by reviewing what's in the project — including the sketch you're viewing.

_[tool: view_image]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: questions_v2]_

The napkin is empty, so I'll work from your brief — which is exceptionally thorough and gives me the direction on colour, type system, structure, and tone. Before I build, just a few high-leverage choices where the brief leaves genuine room. Everything has a "decide for me" so I won't slow you down.

## User

Questions answered:
- display_serif: Decide for me
- split_screen_interaction: Decide for me
- scope: Decide for me
- wordmark: Decide for me
- tweaks: Decide for me

## Assistant

_[tool: update_todos]_

The napkin's empty and you've left the calls to me — so here are the decisions I'm locking in, then I'll build one definitive, production-grade homepage:

- **Display serif:** Bodoni Moda — sharp, high-contrast, prospectus/FT-masthead gravitas (swappable via Tweaks)
- **Body:** a Söhne-like neo-grotesque (Helvetica Neue stack, no Inter slop) · **Mono:** IBM Plex Mono for citations, stats, labels
- **Palette:** deep ink-navy canvas, warm paper for light sections, one muted gold accent, one surgical verification green
- **Signature moment:** live split-screen — click a citation, its source highlights and "verifies" on the right
- **Wordmark:** understated serif + a tiny citation-bracket verified mark
- **Tweaks:** gold hue, serif swap, motion on/off

_[tool: copy_starter_component]_

_[tool: write_file]_

Now the design system. I'll write the CSS foundation first.

_[tool: write_file]_

Now the homepage structure.

_[tool: write_file]_

Now the interactions.

_[tool: write_file]_

Now the Tweaks panel.

_[tool: grep]_

Let me verify the TweakSelect API matches my usage.

_[tool: read_file]_

_[tool: done]_

TweakSelect handles object options. Let me verify the page loads cleanly.

_[tool: fork_verifier_agent]_

Clean load. Let me have the verifier check the signature interaction and overall composition.The Cogent Base homepage is built and live. Here's what I delivered against your brief:

**The "Verified Source" idea, made literal** — the signature moment is the split-screen under *How it works*: a drafted DDQ answer on the left with inline citation chips, the source data room on the right. Click any citation and its exact clause lights up in verification green, the source pane scrolls to it, and a "n / 3 verified" counter ticks up — proof, traceable in one click.

**System**
- **Type:** Bodoni Moda display (high-contrast, prospectus gravitas) · Helvetica Neue body (Söhne-like, no Inter) · IBM Plex Mono for citations, stats, and labels
- **Colour:** deep ink-navy canvas, warm paper for the problem/audience sections, one muted gold accent, verification green used *only* on cited/verified states
- **Sections:** nav → hero (one-line positioning + restrained product glimpse) → quantified DDQ bottleneck → four-agent pipeline → split-screen verify → vault-like trust & security → issuers/sponsors paths → team pedigree → confidential demo (name/firm/work email only) → minimal footer with confidentiality + jurisdiction note

**Honoured your guardrails** — British English, no exclamation marks, no fabricated stats or logos. Performance/compliance figures are tasteful placeholders (e.g. `[SOC 2 / ISO 27001 status — to be inserted]`, full team bios). No gradients-as-decoration, no AI-sparkle iconography. Fully responsive with a mobile menu, scroll reveals, and reduced-motion support.

**Tweaks panel** (toolbar toggle): gold hue, display serif swap (Bodoni / Libre Caslon / Spectral), and motion on/off.

A verifier is doing a final sweep in the background. Two things worth your call: the metric placeholders need real substantiated figures before launch, and the demo form is front-end only — it'll need wiring to your CRM/inbox.

## User

Verifier agent check completed

## Assistant

_[tool: grep]_

The verifier caught a real bug. First let me see what you edited in index.html.

_[tool: read_file]_

_[tool: str_replace_edit]_

The only edit you made was setting the hero headline to Segoe UI — I'll leave that as-is (it's your call; just note it drops the Bodoni serif on the main headline). Now fixing the real bug: the hamburger showing at desktop. It's a CSS specificity collision in styles.css.

_[tool: done]_

Fixed. The desktop nav now shows only the wordmark, three links, and the gold CTA — the hamburger appears only below 860px. 

One note on your edit: the hero headline is currently set to Segoe UI, which drops the Bodoni Moda serif on the page's most important line. If that was exploratory, say the word and I'll restore the editorial serif (or wire it into the Tweaks panel so you can compare serif vs. grotesque headlines live).

