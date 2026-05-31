import { platform } from "@/content/site";
import { SectionHead } from "./SectionHead";
import { SplitVerify } from "./SplitVerify";
import { pipelineGlyphs } from "./icons";

export function Platform() {
  return (
    <section className="section section--ink" id="platform" aria-labelledby="platform-heading">
      <div className="wrap">
        <SectionHead
          idx={platform.kicker.idx}
          label={platform.kicker.label}
          heading={platform.heading}
          lede={platform.lede}
        />

        <ol className="pipeline" aria-label="Four-agent pipeline">
          {platform.pipeline.map((node, i) => (
            <li
              className={`pnode reveal${"human" in node && node.human ? " pnode--human" : ""}`}
              data-d={i || undefined}
              key={node.name}
            >
              <div
                className="pstep"
                style={"human" in node && node.human ? { color: "var(--verify)" } : undefined}
              >
                {node.step}
              </div>
              <div className="pglyph">{pipelineGlyphs[i]}</div>
              <div className="pname">{node.name}</div>
              <p className="pdesc">{node.desc}</p>
            </li>
          ))}
        </ol>

        <SplitVerify />
      </div>
    </section>
  );
}
