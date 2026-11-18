"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const education = {
  school: "University of Toronto",
  logo: "/images/UofT_logo.png",
  degree: "Bachelor of Science in Computer Science",
  period: "September 2022 – April 2027",
  courses: [
    "Data Structures and Algorithms",
    "System Design",
    "Databases",
    "Operating Systems",
  ],
};

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24 md:py-32">
      <SectionHeading eyebrow="04 — Education" title="Where I" highlight="study" />

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        className="mt-14 grid overflow-hidden rounded-[36px] bg-card ring-1 ring-card-border md:grid-cols-[300px_1fr]"
      >
        <div className="pin-dots flex items-center justify-center bg-surface p-10">
          <div className="relative h-28 w-full max-w-[220px] overflow-hidden rounded-[24px] bg-white p-4 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.25)]">
            <Image src={education.logo} alt="University of Toronto logo" fill sizes="220px" className="object-contain p-4" />
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
            {education.period}
          </span>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {education.school}
          </h3>
          <p className="mt-1 text-lg text-muted">{education.degree}</p>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-muted">Relevant coursework</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {education.courses.map((course) => (
              <span
                key={course}
                className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-foreground"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </section>
  );
}
