import { hero } from "@/content/site";

export function Hero() {
  return (
    <section className="hero section--ink" aria-labelledby="hero-heading">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <span className="kicker reveal">
            <span className="idx">{hero.kicker.idx}</span> &nbsp;{hero.kicker.label}
          </span>
          <h1 id="hero-heading" className="display reveal" data-d="1">
            {hero.headline.lead}
            <span className="lift">{hero.headline.lift}</span>
            {hero.headline.tail}
          </h1>
          <p className="hero__sub reveal" data-d="2">
            {hero.sub}
          </p>
          <div className="hero__cta reveal" data-d="3">
            <a className="btn btn--primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label} <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <dl className="hero__meta reveal" data-d="4">
            {hero.meta.map((m) => (
              <div className="item" key={m.lbl}>
                <dt className="num">{m.num}</dt>
                <dd className="lbl">{m.lbl}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Restrained product glimpse — illustrative workspace, not client data. */}
        <div className="hero__visual reveal" data-d="2">
          <div className="glimpse" aria-hidden="true">
            <div className="glimpse__bar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="title">{hero.glimpse.workspace}</span>
            </div>
            <div className="glimpse__body">
              <div className="ddq-q">{hero.glimpse.section}</div>
              <div className="ddq-qtext">{hero.glimpse.question}</div>
              <div className="ddq-a">
                Revenue is recognised when control of goods transfers to the
                customer, in line with HKFRS&nbsp;15. The policy has been applied
                consistently across FY2022–FY2024{" "}
                <span className="cite">[DR-1042 §4.2]</span>, with no restatements
                noted in the audited accounts{" "}
                <span className="cite">[AUD-07 p.31]</span>.
              </div>
            </div>
            <div className="glimpse__foot">
              <span className="verified-pill">
                <svg className="tick" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7.5l3 3 6-7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                Verified · linked to source
              </span>
              <span className="confidence">{hero.glimpse.confidence}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
