import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { WhyParents } from "@/components/site/WhyParents";
import { Programs } from "@/components/site/Programs";
import { Journey } from "@/components/site/Journey";
import { Development } from "@/components/site/Development";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Admissions } from "@/components/site/Admissions";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiny Tech — Where curiosity becomes confidence" },
      { name: "description", content: "A premium international preschool for ages 2 to 6. Play-based learning, small classes, beautifully designed campus." },
      { property: "og:title", content: "Tiny Tech — Where curiosity becomes confidence" },
      { property: "og:description", content: "A premium international preschool for ages 2 to 6. Play-based learning, small classes, beautifully designed campus." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <WhyParents />
      <Programs />
      <Journey />
      <Development />
      <Testimonials />
      <Gallery />
      <Admissions />
      <Contact />
      <Footer />
    </main>
  );
}
