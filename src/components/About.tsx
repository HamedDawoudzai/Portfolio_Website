"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const contactInfo = [
  { label: "Email", value: "hamed.dawoudzai@mail.utoronto.ca" },
  { label: "Phone", value: "647-510-6214" },
  { label: "Location", value: "Toronto, Ontario" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          About Me
        </h2>
        <span className="mt-3 block h-0.5 w-12 rounded-full bg-accent" />
      </motion.div>

      <div className="mt-12 flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="flex-1 space-y-5"
        >
          <p className="leading-relaxed text-muted">
            I&apos;m a Computer Science student at the University of Toronto on
            the co-op program. I&apos;m passionate about backend engineering and
            full-stack development — building software that scales and solves
            real problems.
          </p>
          <p className="leading-relaxed text-muted">
            Currently, I&apos;m working as a Software Developer Intern at RBC on
            the U.S. Cash Management team, building Java Spring Boot
            microservices for high-volume corporate payment processing. Previously,
            I interned at Traveltical and Appy.yo.
          </p>

          {/* Contact info grid */}
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
            {contactInfo.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-muted">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — city image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="relative h-72 w-full overflow-hidden rounded-xl border-2 border-card-border shadow-lg sm:h-80 md:h-96 md:w-80">
            <Image
              src="/images/city_view.png"
              alt="Toronto skyline"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
