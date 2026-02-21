import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-4xl px-6 py-16 md:px-8">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}
