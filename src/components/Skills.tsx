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
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        Technical Skills
      </motion.h2>

      <div className="space-y-6">
        {skills.map((category, i) => (
          <motion.div
            key={category.label}
            custom={i}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
          >
            <h3 className="mb-2.5 text-sm font-semibold uppercase tracking-wider text-muted">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-stone-200 bg-stone-50/80 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:bg-accent/5 dark:border-stone-800 dark:bg-stone-900/40 dark:hover:border-accent/40 dark:hover:bg-accent/5"
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
