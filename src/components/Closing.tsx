import { closing } from "@/content/site";
import { DemoForm } from "./DemoForm";

export function Closing() {
  return (
    <section className="section--ink closing" id="demo" aria-labelledby="demo-heading">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="wrap closing__inner">
        <span className="kicker reveal">
          <span className="idx">{closing.kicker.idx}</span> &nbsp;{closing.kicker.label}
        </span>
        <h2 id="demo-heading" className="display reveal" data-d="1">
          {closing.heading}
        </h2>
        <p className="sub reveal" data-d="2">
          {closing.sub}
        </p>
        <DemoForm />
      </div>
    </section>
  );
}
