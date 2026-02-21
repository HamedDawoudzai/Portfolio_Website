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
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
          About Me
        </h2>
        <span className="mt-5 block h-1 w-16 rounded-full bg-accent" />
      </motion.div>

      <div className="mt-16 flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="flex-1 space-y-6"
        >
          <p className="text-lg leading-relaxed text-muted lg:text-xl">
            I&apos;m a fourth-year Computer Science student at the University of
            Toronto. I&apos;m passionate about backend engineering and full-stack
            development, building software that scales and solves real problems.
          </p>
          <p className="text-lg leading-relaxed text-muted lg:text-xl">
            Currently, I&apos;m working as a Software Developer Intern at RBC on
            the U.S. Cash Management team, building Java Spring Boot
            microservices for high-volume corporate payment processing. Previously,
            I interned at Traveltical and Appy.yo. I&apos;m always looking to
            gain more experience as a software engineer and take on new challenges.
          </p>

          <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-3">
            {contactInfo.map((item) => (
              <div key={item.label} className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-widest text-foreground">
                  {item.label}
                </p>
                <p className="mt-2 whitespace-nowrap text-base text-muted">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="relative h-80 w-full overflow-hidden rounded-xl border-2 border-card-border shadow-lg sm:h-96 lg:h-[480px] lg:w-96">
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
