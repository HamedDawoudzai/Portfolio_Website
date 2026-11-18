import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";

function Band({
  tinted,
  wide,
  children,
}: {
  tinted?: boolean;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`${tinted ? "bg-surface" : "bg-background"} text-foreground transition-colors`}>
      <div
        className={`mx-auto px-4 sm:px-8 md:px-12 lg:px-16 ${wide ? "max-w-[1400px]" : "max-w-6xl"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Band wide>
        <Hero />
      </Band>
      <Band>
        <About />
      </Band>
      <Band tinted>
        <Experience />
      </Band>
      <Band wide>
        <Projects />
      </Band>
      <Band tinted>
        <Education />
      </Band>
      <Band>
        <Skills />
      </Band>
      <Band tinted>
        <Contact />
      </Band>
      <ScrollToTop />
    </main>
  );
}
