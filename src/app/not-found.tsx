import type { Metadata } from "next";
import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="nf section--ink">
      <div>
        <div style={{ marginBottom: 28 }}>
          <Wordmark />
        </div>
        <p className="nf__code">Error 404</p>
        <h1 className="display">This page could not be found.</h1>
        <p>
          The page you are looking for has moved or never existed. Return to the homepage to
          continue.
        </p>
        <Link className="btn btn--primary" href="/">
          Back to homepage <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
