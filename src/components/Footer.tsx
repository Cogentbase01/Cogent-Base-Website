import Link from "next/link";
import { footer, site } from "@/content/site";
import { Wordmark } from "./Wordmark";

/** Hash anchors stay as <a> (same-page scroll); real routes use next/link. */
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  if (href.startsWith("#")) return <a href={href}>{children}</a>;
  return <Link href={href}>{children}</Link>;
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__col footer__brand">
            <Wordmark />
            <p>{site.tagline}</p>
          </div>
          {footer.cols.map((col) => (
            <div className="footer__col" key={col.h}>
              <h4>{col.h}</h4>
              {col.links.map((l) => (
                <FooterLink key={l.label} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <span>{footer.copyright}</span>
          <span>{footer.legal}</span>
        </div>
      </div>
    </footer>
  );
}
