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
    <section id="education" className="scroll-mt-24 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
          Education
        </h2>
        <span className="mt-5 block h-1 w-16 rounded-full bg-accent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
        className="mt-12 rounded-xl border border-card-border bg-card p-8 lg:p-10"
      >
        <div className="flex items-start gap-5">
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl lg:h-28 lg:w-28">
            <Image
              src={education.logo}
              alt="University of Toronto logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-foreground lg:text-3xl">
              {education.school}
            </h3>
            <p className="text-lg text-muted lg:text-xl">{education.degree}</p>
            <p className="mt-1 text-base text-accent lg:text-lg">{education.period}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 pl-[6.25rem] lg:pl-[7.25rem]">
          {education.courses.map((course) => (
            <span
              key={course}
              className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent lg:text-base"
            >
              {course}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
