/** Small inline diagrammatic glyphs (decorative; aria-hidden at call sites). */
import type { SVGProps } from "react";

export function TickIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.5 7.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const pipelineGlyphs = [
  // Refiner
  (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" key="refiner">
      <rect x="2" y="2" width="16" height="16" rx="1" stroke="var(--gold)" />
      <path d="M2 7h16M7 7v11" stroke="var(--gold)" strokeWidth="0.9" />
    </svg>
  ),
  // Drafting
  (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" key="drafting">
      <path d="M4 3h9l3 3v11H4z" stroke="var(--gold)" />
      <path d="M13 3v3h3M6.5 10h7M6.5 13h5" stroke="var(--gold)" strokeWidth="0.9" />
    </svg>
  ),
  // Critic
  (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" key="critic">
      <circle cx="8.5" cy="8.5" r="5.5" stroke="var(--gold)" />
      <path d="M12.5 12.5l4 4" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  // Human verification
  (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" key="human">
      <path
        d="M3.5 10.5l3.5 3.5 9-9.5"
        stroke="var(--verify)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
];

export const securityGlyphs = [
  // S/01 shield-check
  (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" key="s1">
      <path d="M9 1.5l6 2.5v4.5c0 3.5-2.5 6-6 7.5-3.5-1.5-6-4-6-7.5V4z" stroke="currentColor" />
      <path d="M6 9l2 2 4-4.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  ),
  // S/02 link
  (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" key="s2">
      <path
        d="M7 11l4-4M6 8a3 3 0 010-4l1-1a3 3 0 014 0M8 14a3 3 0 004 0l1-1a3 3 0 000-4"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  ),
  // S/03 person
  (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" key="s3">
      <circle cx="9" cy="6" r="3" stroke="currentColor" />
      <path d="M3.5 15c0-3 2.5-4.5 5.5-4.5s5.5 1.5 5.5 4.5" stroke="currentColor" />
    </svg>
  ),
  // S/04 gauge
  (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" key="s4">
      <path d="M9 2v14M3 9h12" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="9" cy="9" r="7" stroke="currentColor" />
    </svg>
  ),
];
