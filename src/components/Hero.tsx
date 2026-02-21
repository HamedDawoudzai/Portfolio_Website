"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const titles = [
  "Software Developer",
  "Backend Engineer",
  "Full-Stack Builder",
  "CS Student @ UofT",
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
    <section className="relative flex min-h-[90vh] flex-col justify-center py-16 md:py-24">
      <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 space-y-5"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Hello, I&apos;m
          </p>

          <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Hamed Dawoudzai
          </h1>

          <div className="text-xl text-muted sm:text-2xl">
            {typed}
            <span className="ml-0.5 inline-block w-[2px] bg-accent animate-pulse">
              &nbsp;
            </span>
          </div>

          <p className="text-sm leading-relaxed text-muted sm:text-base">
            SWE Intern @ RBC | Prev @ Traveltical, Appy.yo | CS @ University of Toronto
          </p>

          <p className="max-w-md text-sm leading-relaxed text-muted">
            Passionate about building scalable backend systems and full-stack
            applications that make an impact.
          </p>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-3 pt-2"
          >
            <a
              href="https://github.com/hameddawoudzai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-card-border bg-card text-foreground transition-all hover:border-accent hover:text-accent hover:scale-110"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/hamed-dawoudzai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0077b5] text-white transition-all hover:scale-110 hover:brightness-110"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:hamed.dawoudzai@mail.utoronto.ca"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ea4335] text-white transition-all hover:scale-110 hover:brightness-110"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            href="/resume.pdf"
            target="_blank"
            className="mt-2 inline-flex items-center gap-2 rounded-md border-2 border-accent bg-transparent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent transition-all hover:bg-accent hover:text-white active:scale-[0.98]"
          >
            Download Resume
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full border-2 border-accent/30" />
            <div className="absolute inset-2 overflow-hidden rounded-full border-2 border-card-border bg-card">
              <Image
                src="/images/hd_logo.png"
                alt="Hamed Dawoudzai"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          Scroll
        </span>
        <span className="h-8 w-px animate-pulse bg-accent" />
      </motion.div>
    </section>
  );
}
