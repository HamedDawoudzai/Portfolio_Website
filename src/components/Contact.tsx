"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
          Get In Touch
        </h2>
        <span className="mt-5 block h-1 w-16 rounded-full bg-accent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
        className="mt-12 text-center"
      >
        <p className="mx-auto max-w-xl text-lg text-muted lg:text-xl">
          I&apos;m always open to discussing new opportunities, projects, or
          collaborations. Feel free to reach out, I&apos;d love to hear from you.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hamed.dawoudzai@mail.utoronto.ca"
            className="inline-flex items-center gap-2 rounded-md border-2 border-accent bg-accent px-8 py-3.5 text-base font-bold uppercase tracking-[0.12em] text-white transition-all hover:bg-transparent hover:text-accent active:scale-[0.98]"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/hamed-dawoudzai-219742290/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border-2 border-accent bg-transparent px-8 py-3.5 text-base font-bold uppercase tracking-[0.12em] text-accent transition-all hover:bg-accent hover:text-white active:scale-[0.98]"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
