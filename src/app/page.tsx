import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";

function Band({
  variant,
  children,
}: {
  variant: "dark" | "light";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${variant === "dark" ? "section-dark" : "section-light"} bg-background text-foreground transition-colors`}
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Band variant="dark">
        <Hero />
      </Band>
      <Band variant="light">
        <About />
      </Band>
      <Band variant="light">
        <Experience />
      </Band>
      <Band variant="dark">
        <Education />
      </Band>
      <Band variant="light">
        <Projects />
      </Band>
      <Band variant="dark">
        <Skills />
      </Band>
      <Band variant="light">
        <Contact />
      </Band>
      <ScrollToTop />
    </div>
  );
}
