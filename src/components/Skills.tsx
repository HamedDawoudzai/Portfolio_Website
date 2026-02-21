"use client";

import { motion } from "framer-motion";

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

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
          Skills
        </h2>
        <span className="mt-5 block h-1 w-16 rounded-full bg-accent" />
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, i) => (
          <motion.div
            key={category.label}
            custom={i}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="rounded-xl border border-card-border bg-card p-6 transition-all hover:shadow-lg lg:p-8"
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-accent lg:text-base">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:bg-accent/5 lg:text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
