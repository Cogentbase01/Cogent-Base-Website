import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description:
      "Autonomous due diligence infrastructure for capital markets issuers and their sponsors.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1521",
    theme_color: "#0A1521",
    icons: [{ src: "/icon", sizes: "512x512", type: "image/png" }],
  };
}
