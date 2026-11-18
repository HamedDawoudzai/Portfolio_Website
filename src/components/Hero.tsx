"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { socials } from "./icons";

const titles = ["Software Engineer", "Backend Engineer", "Passionate Builder", "Crypto/Stocks Enthusiast"];

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

    switch (phase) {
      case "typing":
        if (text.length < currentWord.length) {
          const id = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
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
          const id = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deleteSpeed);
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

/* ── Pin board collage ── */

type Tile =
  | { kind: "photo"; src: string; alt: string; height: string; caption?: string }
  | { kind: "logo"; src: string; alt: string; height: string; title: string; caption: string; highlight?: boolean };

const boardColumns: Tile[][] = [
  [
    { kind: "photo", src: "/images/pfp_logo.jpg", alt: "Hamed Dawoudzai", height: "h-64 sm:h-80 lg:h-[380px]" },
    {
      kind: "logo",
      src: "/images/pinterest_logo.png",
      alt: "Pinterest logo",
      height: "h-40 sm:h-44",
      title: "Pinterest",
      caption: "SWE Intern · Fall '26",
      highlight: true,
    },
  ],
  [
    { kind: "photo", src: "/images/city_view.png", alt: "Toronto skyline", height: "h-36 sm:h-44", caption: "Toronto, ON" },
    {
      kind: "logo",
      src: "/images/squarepoint_icon.png",
      alt: "Squarepoint Capital logo",
      height: "h-36 sm:h-40",
      title: "Squarepoint",
      caption: "Incoming · Winter '27",
    },
    {
      kind: "logo",
      src: "/images/RBC_logo.png",
      alt: "RBC logo",
      height: "h-36 sm:h-40",
      title: "RBC",
      caption: "SWE Intern · 2026",
    },
  ],
];

function PinTile({ tile, priority }: { tile: Tile; priority?: boolean }) {
  if (tile.kind === "photo") {
    return (
      <div className={`group relative ${tile.height} overflow-hidden rounded-[28px] bg-surface`}>
        <Image
          src={tile.src}
          alt={tile.alt}
          fill
          sizes="(min-width: 1024px) 260px, 45vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        {tile.caption && (
          <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#111] shadow-sm">
            {tile.caption}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`group relative flex ${tile.height} flex-col justify-between overflow-hidden rounded-[28px] p-4 ${
        tile.highlight ? "bg-accent text-white" : "bg-surface text-foreground"
      }`}
    >
      <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white p-1.5 shadow-sm sm:h-14 sm:w-14">
        <Image src={tile.src} alt={tile.alt} fill sizes="56px" className="object-contain p-1" />
      </div>
      <div>
        <p className="text-lg font-extrabold leading-tight tracking-tight sm:text-xl">{tile.title}</p>
        <p className={`text-xs font-semibold sm:text-sm ${tile.highlight ? "text-white/85" : "text-muted"}`}>
          {tile.caption}
        </p>
      </div>
      {tile.highlight && (
        <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#e60023]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e60023] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e60023]" />
          </span>
          Now
        </span>
      )}
    </div>
  );
}

function PinBoard() {
  const reduce = useReducedMotion();
  return (
    <div className="flex gap-3 sm:gap-4">
      {boardColumns.map((col, ci) => (
        <motion.div
          key={ci}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 + ci * 0.15, duration: 0.7, ease: "easeOut" }}
          className={`w-40 sm:w-52 lg:w-60 ${ci === 1 ? "mt-14 sm:mt-20" : ""}`}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, ci === 0 ? -10 : 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: ci * 1.2 }}
            className="space-y-3 sm:space-y-4"
          >
            {col.map((tile, ti) => (
              <PinTile key={ti} tile={tile} priority={ci === 0 && ti === 0} />
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Logo marquee ── */

const companyLogos = [
  { src: "/images/pinterest_logo.png", name: "Pinterest" },
  { src: "/images/squarepoint_icon.png", name: "Squarepoint Capital" },
  { src: "/images/RBC_logo.png", name: "RBC" },
  { src: "/images/Traveltical_logo.png", name: "Traveltical" },
  { src: "/images/appyo_logo.png", name: "Appy.yo" },
  { src: "/images/UofT_logo.png", name: "University of Toronto" },
];

function LogoMarquee() {
  const row = [...companyLogos, ...companyLogos];
  return (
    <div className="relative mt-16 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] lg:mt-20">
      <div className="animate-marquee flex w-max gap-3">
        {row.map((logo, i) => (
          <div
            key={i}
            aria-hidden={i >= companyLogos.length}
            className="flex items-center gap-3 rounded-full bg-surface py-2 pl-2 pr-5"
          >
            <span className="relative h-8 w-8 overflow-hidden rounded-full bg-white">
              <Image src={logo.src} alt="" fill sizes="32px" className="object-contain p-0.5" />
            </span>
            <span className="whitespace-nowrap text-sm font-semibold text-foreground/80">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypingEffect(titles);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (!resumeOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setResumeOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [resumeOpen]);

  return (
    <>
      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setResumeOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-label="Resume"
              className="relative mx-4 h-[90vh] w-full max-w-4xl overflow-hidden rounded-[28px] bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-card-border px-6 py-4">
                <h3 className="text-lg font-bold text-foreground">Resume</h3>
                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    download="Hamed_Dawoudzai_Resume.pdf"
                    className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
                  >
                    Download
                  </a>
                  <button
                    onClick={() => setResumeOpen(false)}
                    aria-label="Close resume"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-foreground transition-colors hover:bg-card-border"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <iframe src="/resume.pdf" className="h-[calc(90vh-69px)] w-full" title="Resume" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative flex min-h-[calc(100svh-64px)] flex-col justify-center pb-12 pt-10 lg:pt-6">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-2xl space-y-7 lg:flex-1"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2.5 rounded-full bg-accent-soft py-1.5 pl-1.5 pr-4 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
            >
              <span className="relative h-7 w-7 overflow-hidden rounded-full bg-white">
                <Image src="/images/pinterest_logo.png" alt="" fill sizes="28px" className="object-contain" />
              </span>
              Now building at Pinterest
              <span aria-hidden>→</span>
            </a>

            <h1 className="text-[3.25rem] font-extrabold leading-[0.95] tracking-[-0.045em] text-foreground sm:text-7xl lg:text-[5.5rem]">
              Hamed
              <br />
              Dawoudzai<span className="text-accent">.</span>
            </h1>

            <div className="h-10 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              <span className="font-serif font-medium italic text-accent">{typed}</span>
              <span className="ml-1 inline-block w-[3px] animate-pulse bg-accent">&nbsp;</span>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-muted">
              Software Engineer Intern at <strong className="font-semibold text-foreground">Pinterest</strong>,
              incoming at <strong className="font-semibold text-foreground">Squarepoint Capital</strong>, and
              Computer Science student at the University of Toronto. I build scalable backend systems and
              full-stack apps that make an impact.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="/resume.pdf"
                download="Hamed_Dawoudzai_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-accent-dark active:scale-[0.97]"
              >
                Download Resume
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-surface px-7 py-3.5 text-base font-bold text-foreground transition-all hover:bg-card-border active:scale-[0.97]"
              >
                View Resume
              </button>

              <div className="flex items-center gap-2 sm:ml-2">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-foreground transition-all hover:bg-accent hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: pin board */}
          <div className="flex-shrink-0">
            <PinBoard />
          </div>
        </div>

        <LogoMarquee />
      </section>
    </>
  );
}
