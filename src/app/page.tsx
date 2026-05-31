import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Platform } from "@/components/Platform";
import { Security } from "@/components/Security";
import { Audiences } from "@/components/Audiences";
import { Team } from "@/components/Team";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <Platform />
        <Security />
        <Audiences />
        <Team />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
