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
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Education
          </h2>
          <span className="h-px flex-1 bg-card-border" />
        </div>

        <div className="group rounded-xl border border-card-border bg-card/50 p-6 transition-all hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1.5">
              <h3 className="text-lg font-medium text-foreground">
                {education.school}
              </h3>
              <p className="text-muted">{education.degree}</p>
              <p className="text-sm text-muted">{education.location}</p>
            </div>
            <span className="inline-flex shrink-0 items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
              {education.period}
            </span>
          </div>

          <div className="mt-5 border-t border-card-border pt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {education.courses.map((course) => (
                <span
                  key={course}
                  className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:bg-accent/5"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
