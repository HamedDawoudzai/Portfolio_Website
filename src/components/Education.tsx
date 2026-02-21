"use client";

import { motion } from "framer-motion";

const education = {
  school: "University of Toronto",
  degree: "Bachelor of Science in Computer Science",
  location: "Toronto, Ontario",
  period: "Sep 2022 – Apr 2027",
  courses: [
    "Data Structures and Algorithms",
    "System Design",
    "Databases",
    "Operating Systems",
  ],
};

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Education
        </h2>
        <div className="rounded-lg border border-stone-200 bg-stone-50/50 p-6 dark:border-stone-800 dark:bg-stone-900/30 md:p-8">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-foreground">
              {education.school}
            </h3>
            <p className="text-muted">{education.degree}</p>
            <p className="text-sm text-muted">{education.location}</p>
            <p className="text-sm font-medium text-accent">{education.period}</p>
          </div>
          <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted">
            {education.courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
