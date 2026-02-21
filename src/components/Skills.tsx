"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  label: string;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    label: "Languages",
    items: ["Java", "Python", "C/C++", "SQL", "JavaScript", "TypeScript"],
  },
  {
    label: "Backend & APIs",
    items: ["Spring Boot", "Node.js", "REST APIs", "JWT", "Redis", "PostgreSQL", "Kafka", "Distributed Systems", "MVC"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS"],
  },
  {
    label: "Cloud & Infrastructure",
    items: ["Docker", "AWS", "Microsoft Azure"],
  },
  {
    label: "Testing & Practices",
    items: ["Unit Testing", "JUnit", "Mockito", "Agile / Scrum", "Object-Oriented Design", "JIRA"],
  },
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
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Skills
        </h2>
        <span className="mt-3 block h-0.5 w-12 rounded-full bg-accent" />
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, i) => (
          <motion.div
            key={category.label}
            custom={i}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="rounded-xl border border-card-border bg-card p-5 transition-all hover:shadow-lg"
          >
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-accent">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-card-border bg-background px-2.5 py-1 text-sm text-foreground transition-colors hover:border-accent/40 hover:bg-accent/5"
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
