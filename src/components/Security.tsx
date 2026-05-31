import { security } from "@/content/site";
import { SectionHead } from "./SectionHead";
import { securityGlyphs } from "./icons";

export function Security() {
  return (
    <section className="section section--vault" id="security" aria-labelledby="security-heading">
      <div className="wrap">
        <SectionHead
          idx={security.kicker.idx}
          label={security.kicker.label}
          heading={security.heading}
          lede={security.lede}
        />

        <div className="trust-grid">
          {security.controls.map((c, i) => (
            <div className="trust-cell reveal" data-d={i || undefined} key={c.num}>
              <span className="tnum">{c.num}</span>
              <div className="tglyph">{securityGlyphs[i]}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        <div className="compliance-note reveal">
          <span className="label-mono" style={{ color: "var(--gold)" }}>
            Compliance
          </span>
          <span className="body">
            {security.compliance}{" "}
            {/* TODO(compliance): replace with verified certification status */}
            <span className="pending">{security.compliancePending}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
