import { audiences } from "@/content/site";
import { SectionHead } from "./SectionHead";

export function Audiences() {
  return (
    <section className="section section--paper" id="audiences" aria-labelledby="audiences-heading">
      <div className="wrap">
        <SectionHead
          idx={audiences.kicker.idx}
          label={audiences.kicker.label}
          heading={audiences.heading}
          lede={audiences.lede}
        />

        <div className="aud-grid">
          {audiences.cards.map((card, i) => (
            <div className="aud-card reveal" data-d={i || undefined} key={card.tag}>
              <span className="atag">{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <ul>
                {card.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a className="textlink" href="#demo">
                {card.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
