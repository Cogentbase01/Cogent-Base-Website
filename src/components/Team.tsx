import { team } from "@/content/site";
import { SectionHead } from "./SectionHead";

export function Team() {
  return (
    <section className="section section--ink" id="team" aria-labelledby="team-heading">
      <div className="wrap">
        <SectionHead
          idx={team.kicker.idx}
          label={team.kicker.label}
          heading={team.heading}
          lede={team.lede}
        />

        <div className="team-grid">
          {team.members.map((m, i) => (
            <div className="team-cell reveal" data-d={i || undefined} key={m.title}>
              <span className="pedigree">{m.pedigree}</span>
              <h3>{m.title}</h3>
              <div className="role">{m.role}</div>
              <p className="bio">{m.bio}</p>
            </div>
          ))}
        </div>
        <p className="label-mono reveal" style={{ marginTop: 26 }}>
          {team.note}
        </p>
      </div>
    </section>
  );
}
