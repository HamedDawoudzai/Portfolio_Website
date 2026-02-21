"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-card-border bg-card/50 p-8 text-center md:p-14"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          I&apos;m always open to discussing new opportunities, projects, or
          collaborations. Feel free to reach out!
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hamed.dawoudzai@mail.utoronto.ca"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hamed.dawoudzai@mail.utoronto.ca
          </a>
          <a
            href="https://linkedin.com/in/hamed-dawoudzai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-accent/5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
