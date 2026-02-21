"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const titles = [
  "Software Developer",
  "Backend Engineer",
  "Full-Stack Builder",
  "CS Student @ UofT",
];

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hamed-dawoudzai/",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/hameddawoudzai",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hamed.dawoudzai@mail.utoronto.ca",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function useTypingEffect(words: string[], typingSpeed = 80, deleteSpeed = 50, pauseMs = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseMs);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deleteSpeed, pauseMs]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(titles);

  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center py-20 md:py-28">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-6"
      >
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-widest text-accent"
        >
          Welcome to my portfolio
        </motion.p>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Hamed Dawoudzai
        </h1>

        <div className="flex items-center gap-2 text-xl text-muted sm:text-2xl">
          <span className="inline-block min-w-0">
            {typed}
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-accent">
              &nbsp;
            </span>
          </span>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-muted">
          Building scalable systems with Java, Spring Boot, and React. Currently
          interning at{" "}
          <span className="font-medium text-foreground">
            Royal Bank of Canada
          </span>{" "}
          on U.S. Cash Management — processing high-volume corporate payments.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]"
          >
            Get in Touch
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-accent/5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center gap-3 pt-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-card text-muted transition-all hover:border-accent/40 hover:text-accent hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
