import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Designed share image (also used for Twitter card). 1200x630.
export const alt =
  "Cogent Base — We compress IPO due diligence from three months to three days.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A1521",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: "#ECEAE2", fontSize: 34, fontWeight: 600 }}>{site.name}</span>
          <span style={{ color: "#C7A85B", fontSize: 24 }}>[✓]</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#ECEAE2",
            fontSize: 64,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          <span>We compress IPO due diligence</span>
          <span>
            from three months to{" "}
            <span style={{ color: "#C7A85B", fontStyle: "italic" }}>three days</span>.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            color: "#6A7886",
            fontSize: 24,
            fontFamily: "monospace",
            letterSpacing: "0.06em",
          }}
        >
          AUTONOMOUS DUE DILIGENCE INFRASTRUCTURE · HKEX · SGX
        </div>
      </div>
    ),
    size,
  );
}
