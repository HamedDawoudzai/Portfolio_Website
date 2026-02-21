"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section id="education" className="scroll-mt-24 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Education
        </h2>
        <span className="mt-3 block h-0.5 w-12 rounded-full bg-accent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
        className="mt-10 rounded-xl border border-card-border bg-card p-6 md:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg border border-card-border bg-white">
            <Image
              src={education.logo}
              alt="University of Toronto logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">
              {education.school}
            </h3>
            <p className="text-muted">{education.degree}</p>
            <p className="mt-1 text-sm text-accent">{education.period}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 pl-[4.5rem]">
          {education.courses.map((course) => (
            <span
              key={course}
              className="rounded-md border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {course}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
