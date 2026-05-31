import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

/** Shared chrome for simple legal / content pages. */
export function DocPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="section--ink doc-page">
        <div className="wrap doc-body">
          <h1 className="display">{title}</h1>
          <p className="doc-meta">Last updated · {updated}</p>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

/** Visible placeholder block for copy awaiting counsel review. */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <div className="placeholder">
      <span className="label-mono">Placeholder — for counsel review</span>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  );
}
