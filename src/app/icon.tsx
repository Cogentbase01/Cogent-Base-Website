import { ImageResponse } from "next/og";

// Generated app icon — the citation-bracket "verified" mark on institutional ink.
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A1521",
          color: "#C7A85B",
          fontSize: 300,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
        }}
      >
        ✓
      </div>
    ),
    size,
  );
}
