"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface SkillCategory {
  label: string;
  items: string[];
}

const skills: SkillCategory[] = [
  { label: "Languages", items: ["Java", "Python", "C/C++", "SQL", "JavaScript", "TypeScript"] },
  { label: "Backend & APIs", items: ["Spring Boot", "Node.js", "REST APIs", "JWT", "Redis", "PostgreSQL", "Kafka", "Distributed Systems", "MVC"] },
  { label: "Frontend", items: ["React", "Next.js", "HTML", "CSS"] },
  { label: "Cloud & Infrastructure", items: ["Docker", "AWS", "Microsoft Azure"] },
  { label: "Testing & Practices", items: ["Unit Testing", "JUnit", "Mockito", "Agile / Scrum", "Object-Oriented Design", "JIRA"] },
];

const ALL = "All";
const filters = [ALL, ...skills.map((s) => s.label)];

export default function Skills() {
  const [active, setActive] = useState(ALL);

  const shown = skills
    .filter((c) => active === ALL || c.label === active)
    .flatMap((c) => c.items);

  return (
    <section id="skills" className="scroll-mt-24 py-24 md:py-32">
      <SectionHeading
        eyebrow="05 — Skills"
        title="My"
        highlight="toolkit"
        description="Pick a topic to filter, the same way you'd browse ideas on a board."
      />

      <LayoutGroup>
        {/* Topic chips */}
        <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
          {filters.map((f) => {
            const selected = active === f;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(f)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                  selected ? "text-background" : "bg-surface text-foreground hover:bg-card-border"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="skill-chip"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            );
          })}
        </div>

        {/* Skill tiles */}
        <motion.div layout className="mt-8 flex min-h-[180px] flex-wrap content-start gap-3">
          <AnimatePresence mode="popLayout">
            {shown.map((item) => (
              <motion.span
                key={item}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
                className="group flex items-center gap-2 rounded-2xl bg-card px-5 py-3.5 text-base font-semibold text-foreground ring-1 ring-card-border transition-shadow hover:shadow-[0_10px_24px_-12px_rgba(230,0,35,0.45)] hover:ring-accent"
              >
                <span className="h-2 w-2 rounded-full bg-accent transition-transform group-hover:scale-150" />
                {item}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </section>
  );
}
