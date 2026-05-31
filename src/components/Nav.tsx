"use client";

import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Nav() {
  // Always route to the homepage anchor: works without JS, scrolls smoothly
  // in-page when already on the homepage (same-document fragment navigation),
  // and routes back from legal pages. Active-state highlighting (homepage only)
  // is handled by the IntersectionObserver below.
  const sectionHref = (id: string) => `/#${id}`;
  const ctaHref = `/${nav.cta.href}`;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Condensed background once scrolled past the hero's top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section state for nav links.
  useEffect(() => {
    const ids = nav.links.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav__inner">
          <Wordmark href="/" />
          <nav className="nav__links" aria-label="Primary">
            {nav.links.map((l) => (
              <a
                key={l.id}
                className="navitem"
                href={sectionHref(l.id)}
                aria-current={active === l.id ? "true" : undefined}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav__cta">
            <a className="btn btn--primary" href={ctaHref}>
              {nav.cta.label}
            </a>
            <button
              type="button"
              className="iconbtn nav__burger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!menuOpen}
      >
        <div className="mobile-menu__top">
          <Wordmark />
          <button
            type="button"
            className="iconbtn"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile">
          {nav.links.map((l) => (
            <a key={l.id} href={sectionHref(l.id)} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary" href={ctaHref} onClick={() => setMenuOpen(false)}>
          {nav.cta.label}
        </a>
      </div>
    </>
  );
}
