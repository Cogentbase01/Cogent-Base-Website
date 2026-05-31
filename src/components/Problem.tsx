import { problem } from "@/content/site";
import { SectionHead } from "./SectionHead";

export function Problem() {
  return (
    <section className="section section--paper" id="problem" aria-labelledby="problem-heading">
      <div className="wrap">
        <SectionHead
          idx={problem.kicker.idx}
          label={problem.kicker.label}
          heading={problem.heading}
          lede={problem.lede}
        />
        <div className="prob-grid">
          {problem.stats.map((s, i) => (
            <div className="prob-cell reveal" data-d={i || undefined} key={s.unit}>
              <div className="stat">
                {s.stat}
                <span className="unit">{s.unit}</span>
              </div>
              <p className="desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="prob-source reveal">{problem.source}</p>
      </div>
    </section>
  );
}
