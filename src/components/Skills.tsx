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
    items: [
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "JWT",
      "Redis",
      "PostgreSQL",
      "Kafka",
      "Distributed Systems",
      "MVC",
    ],
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
    items: [
      "Unit Testing",
      "JUnit",
      "Mockito",
      "Agile / Scrum",
      "Object-Oriented Design",
      "JIRA",
    ],
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8 flex items-center gap-3"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Technical Skills
        </h2>
        <span className="h-px flex-1 bg-card-border" />
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, i) => (
          <motion.div
            key={category.label}
            custom={i}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="rounded-xl border border-card-border bg-card/50 p-5 transition-all hover:border-accent/30 hover:shadow-md hover:shadow-accent/5"
          >
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
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
