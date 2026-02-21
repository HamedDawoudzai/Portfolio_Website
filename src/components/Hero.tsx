"use client";

import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:hamed.dawoudzai@mail.utoronto.ca",
    value: "hamed.dawoudzai@mail.utoronto.ca",
  },
  {
    label: "Phone",
    href: "tel:+16475106214",
    value: "647-510-6214",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hamed-dawoudzai/",
    value: "linkedin.com/in/hamed-dawoudzai",
  },
  {
    label: "GitHub",
    href: "https://github.com/hameddawoudzai",
    value: "github.com/hameddawoudzai",
  },
];

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Hamed Dawoudzai
        </h1>
        <p className="text-xl text-muted sm:text-2xl">
          Software Developer · Computer Science @ University of Toronto
        </p>
        <p className="max-w-xl text-base text-muted/90">
          Building scalable systems with Java, Spring Boot, and React. Currently
          interning at RBC on U.S. Cash Management.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-accent underline-offset-4 transition-colors hover:text-accent/80 hover:underline"
            >
              {link.value}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
