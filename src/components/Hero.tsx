"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const titles = ["Software Developer", "Backend Engineer", "Passionate Builder", "Crypto/Stocks Enthusiast"];

type Phase = "typing" | "paused" | "deleting" | "next";

function useTypingEffect(
  words: string[],
  typingSpeed = 80,
  deleteSpeed = 50,
  pauseAfterType = 2000,
  pauseAfterDelete = 400
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const currentWord = words[wordIndex];

    let delay: number;

    switch (phase) {
      case "typing":
        if (text.length < currentWord.length) {
          delay = typingSpeed;
          const id = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), delay);
          return () => clearTimeout(id);
        }
        setPhase("paused");
        return;

      case "paused": {
        const id = setTimeout(() => setPhase("deleting"), pauseAfterType);
        return () => clearTimeout(id);
      }

      case "deleting":
        if (text.length > 0) {
          delay = deleteSpeed;
          const id = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), delay);
          return () => clearTimeout(id);
        }
        setPhase("next");
        return;

      case "next": {
        const id = setTimeout(() => {
          setWordIndex((i) => (i + 1) % words.length);
          setPhase("typing");
        }, pauseAfterDelete);
        return () => clearTimeout(id);
      }
    }
  }, [text, phase, wordIndex, words, typingSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(titles);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setResumeOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative mx-4 h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl border border-card-border bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-card-border px-6 py-4">
                <h3 className="text-lg font-semibold text-foreground">Resume</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="/resume.pdf"
                    download="Hamed_Dawoudzai_Resume.pdf"
                    className="text-sm font-medium text-accent transition-colors hover:text-accent-light"
                  >
                    Download
                  </a>
                  <button
                    onClick={() => setResumeOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:text-foreground"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <iframe
                src="/resume.pdf"
                className="h-[calc(90vh-60px)] w-full"
                title="Resume"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative flex min-h-screen flex-col justify-center py-20">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl space-y-6 lg:max-w-none lg:flex-1 lg:pr-12"
          >
            <p className="text-lg font-medium uppercase tracking-[0.3em] text-accent sm:text-xl">
              Hello, I&apos;m
            </p>

            <h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Hamed
              <br />
              Dawoudzai
            </h1>

            <div className="h-10 text-2xl font-medium text-foreground sm:text-3xl lg:text-4xl">
              {typed}
              <span className="ml-1 inline-block w-[3px] animate-pulse bg-accent">
                &nbsp;
              </span>
            </div>

            <p className="text-sm leading-relaxed text-muted sm:whitespace-nowrap sm:text-base lg:text-lg">
              SWE Intern @ RBC | Prev @ Traveltical, Appy.yo | CS @ University of Toronto
            </p>

            <p className="max-w-lg text-base leading-relaxed text-muted lg:text-lg">
              Passionate about building scalable backend systems and full-stack
              applications that make an impact.
            </p>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-5 pt-2"
            >
              {[
                { href: "https://github.com/hameddawoudzai", label: "GitHub", icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg> },
                { href: "https://www.linkedin.com/in/hamed-dawoudzai-219742290/", label: "LinkedIn", icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
                { href: "mailto:hamed.dawoudzai@mail.utoronto.ca", label: "Email", icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-card-border text-muted transition-all hover:border-accent hover:text-accent hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="/resume.pdf"
                download="Hamed_Dawoudzai_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border-2 border-accent bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all hover:bg-transparent hover:text-accent active:scale-[0.97]"
              >
                Download Resume
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border-2 border-accent bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent transition-all hover:bg-accent hover:text-white active:scale-[0.97]"
              >
                View Resume
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[24rem] lg:w-[24rem]">
              <div className="absolute inset-0 rounded-full shadow-[0_0_80px_rgba(59,130,246,0.25)]" />
              <div className="absolute inset-2 overflow-hidden rounded-full ring-2 ring-accent/20">
                <Image
                  src="/images/pfp_logo.jpg"
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
          <span className="text-xs uppercase tracking-[0.25em] text-muted">
            Scroll
          </span>
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-5 w-5 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.div>
      </section>
    </>
  );
}
