/** Shared two-column section header (kicker + display heading | lede). */
export function SectionHead({
  idx,
  label,
  heading,
  lede,
}: {
  idx: string;
  label: string;
  heading: string;
  lede: string;
}) {
  return (
    <div className="shead">
      <div>
        <span className="kicker reveal">
          <span className="idx">{idx}</span> &nbsp;{label}
        </span>
        <h2 className="display reveal" data-d="1" style={{ marginTop: 22 }}>
          {heading}
        </h2>
      </div>
      <div className="shead__right reveal" data-d="2">
        <p className="lede">{lede}</p>
      </div>
    </div>
  );
}
