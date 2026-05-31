"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { platform } from "@/content/site";
import { TickIcon } from "./icons";

/**
 * Signature "verify" micro-interaction. Selecting a citation lights its source
 * block, scrolls the source pane to it (no page scroll), and advances the
 * verified counter. Keyboard operable; honours prefers-reduced-motion.
 */
export function SplitVerify() {
  const { split } = platform;
  const sources = split.sources;
  const total = sources.length;

  const [activeId, setActiveId] = useState<string | null>(null);
  const [verified, setVerified] = useState<Set<string>>(new Set());
  const [docName, setDocName] = useState<string>(split.sourceDocDefault);

  const scrollRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const activate = useCallback((id: string, doc: string) => {
    setActiveId(id);
    setDocName(doc);
    setVerified((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });

    const block = blockRefs.current[id];
    const pane = scrollRef.current;
    if (block && pane) {
      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const top = block.offsetTop - pane.offsetTop - 14;
      pane.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    }
  }, []);

  const count = verified.size;
  const hint = useMemo(
    () =>
      count === total ? (
        <>
          All claims traced · <b>fully verified</b>
        </>
      ) : (
        <>
          {numberWord(total)} claims · <b>{numberWord(total)} sources</b> · select to confirm
        </>
      ),
    [count, total],
  );

  return (
    <div className="splitwrap reveal">
      <p className="label-mono" style={{ marginBottom: 18 }}>
        {split.intro} <span style={{ color: "var(--gold)" }}>{split.introAction}</span>
      </p>
      <div className="split">
        {/* Answer pane */}
        <div className="split__pane split__pane--answer">
          <div className="split__head">
            <span className="t">Drafted answer</span>
            <span className="doc">{split.answerDoc}</span>
          </div>
          <div className="split__scroll">
            <div className="split__qrow">{split.section}</div>
            <div className="split__q">{split.question}</div>
            <div className="split__a">
              <p>
                The Group recognises revenue when control of goods or services transfers to the
                customer, in accordance with HKFRS&nbsp;15{" "}
                <Cite src={sources[0]} active={activeId === sources[0].id} onSelect={activate} />.
                For long-term service contracts, revenue is recognised over time using an input
                method{" "}
                <Cite src={sources[1]} active={activeId === sources[1].id} onSelect={activate} />.
              </p>
              <p style={{ marginTop: 14 }}>
                The policy has been applied consistently across the FY2022–FY2024 track-record
                period, and the auditor identified no restatements or material adjustments{" "}
                <Cite src={sources[2]} active={activeId === sources[2].id} onSelect={activate} />.
              </p>
            </div>
          </div>
          <div className="split__verify">
            <span className="split__hint">{hint}</span>
            <span
              className="verified-pill"
              style={{ opacity: count === 0 ? 0.35 : 1, transition: "opacity .4s var(--ease)" }}
              aria-live="polite"
            >
              <TickIcon className="tick" /> {count} / {total} verified
            </span>
          </div>
        </div>

        {/* Source pane */}
        <div className="split__pane split__pane--source">
          <div className="split__head">
            <span className="t">Source document</span>
            <span className="doc">{docName}</span>
          </div>
          <div className="split__scroll" ref={scrollRef}>
            {sources.map((s) => (
              <div
                key={s.id}
                ref={(el) => {
                  blockRefs.current[s.id] = el;
                }}
                className={`src-block${activeId === s.id ? " lit" : ""}`}
              >
                <span className="src-ref">{s.ref}</span>
                <div className="src-text">{s.text}</div>
                <span className="src-flag verified-pill">
                  <TickIcon className="tick" /> Verified
                </span>
              </div>
            ))}
            <div
              style={{
                marginTop: 8,
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "var(--on-ink-dim)",
                letterSpacing: ".04em",
                lineHeight: 1.6,
              }}
            >
              {split.gateNote} <span style={{ color: "var(--gold)" }}>[confidence-gated]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cite({
  src,
  active,
  onSelect,
}: {
  src: { id: string; ref: string; doc: string };
  active: boolean;
  onSelect: (id: string, doc: string) => void;
}) {
  const label = `[${src.ref.split(" — ")[0]}]`;
  return (
    <button
      type="button"
      className={`cite${active ? " active" : ""}`}
      aria-label={`Verify citation ${src.ref}`}
      aria-pressed={active}
      onClick={() => onSelect(src.id, src.doc)}
    >
      {label}
    </button>
  );
}

function numberWord(n: number): string {
  return ["zero", "one", "two", "three", "four", "five"][n] ?? String(n);
}
