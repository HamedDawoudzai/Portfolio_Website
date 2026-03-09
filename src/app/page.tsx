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
  wide,
  fullWidth,
}: {
  variant: "dark" | "light";
  children: React.ReactNode;
  wide?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`${variant === "dark" ? "section-dark" : "section-light"} bg-background text-foreground transition-colors`}
    >
      <div
        className={
          fullWidth
            ? "mx-auto w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12"
            : `mx-auto px-6 sm:px-10 md:px-12 lg:px-16 ${wide ? "max-w-[1400px]" : "max-w-6xl"}`
        }
      >
        {children}
      </div>
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
      <Band variant="dark">
        <Experience />
      </Band>
      <Band variant="light">
        <Education />
      </Band>
      <Band variant="dark" fullWidth>
        <Projects />
      </Band>
      <Band variant="light">
        <Skills />
      </Band>
      <Band variant="dark">
        <Contact />
      </Band>
      <ScrollToTop />
    </div>
  );
}
