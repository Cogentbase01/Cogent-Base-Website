import Link from "next/link";
import { site } from "@/content/site";

/** Understated serif wordmark + citation-bracket "verified" mark. */
export function Wordmark({
  href,
  className,
}: {
  /** When set, renders as a link (next/link). Otherwise a plain span. */
  href?: string;
  className?: string;
}) {
  const inner = (
    <>
      <span className="mark">{site.name}</span>
      <span className="bracket" aria-hidden="true">
        {site.mark}
      </span>
    </>
  );
  const cls = `wordmark${className ? ` ${className}` : ""}`;

  if (href) {
    return (
      <Link className={cls} href={href} aria-label={`${site.name} home`}>
        {inner}
      </Link>
    );
  }
  return <span className={cls}>{inner}</span>;
}
