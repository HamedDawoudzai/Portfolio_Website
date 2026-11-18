"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, GitHubIcon, PinIcon } from "./icons";

interface Project {
  name: string;
  subtitle: string;
  logo: string;
  description: string;
  tech: string[];
  bullets: string[];
  github: string;
}

const projects: Project[] = [
  {
    name: "HD Investing Corporation",
    subtitle: "Premium Hybrid Stock & Cryptocurrency Trading Platform",
    logo: "/images/hd_logo.png",
    description:
      "A full-stack trading platform that unifies stock and cryptocurrency markets in one interface. Users manage portfolios, execute market/limit/stop-loss orders, track real-time prices, monitor performance with interactive charts, and maintain a personal watchlist in a premium dark UI with gold accents.",
    tech: ["Java", "Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "Redis", "TailwindCSS", "Docker", "JWT"],
    bullets: [
      "Built a production-grade monorepo with Spring Boot REST API and Next.js frontend, integrating Polygon.io (stocks) and Coinbase Exchange (crypto) for live market data and real-time prices.",
      "Implemented JWT auth, portfolio management with market/limit/stop-loss orders, server-side watchlist sync across sessions, and unified trade page with tab filters (All / Stocks / Crypto).",
      "Added interactive performance charts with configurable time ranges, transaction history, and holdings breakdown with profit/loss tracking per asset.",
      "Optimized backend with Redis caching to reduce API calls; PostgreSQL for data integrity; Docker for database and cache.",
      "Delivered premium dark UI with gold accents across landing, dashboard, trade, portfolio, and transaction history views with responsive layouts.",
    ],
    github: "https://github.com/HamedDawoudzai/hybrid_exchange",
  },
  {
    name: "Rewardly",
    subtitle: "Modern Loyalty Points Management System",
    logo: "/images/Rewardly_logo.png",
    description:
      "A full-stack loyalty platform for businesses to reward customer engagement. Role-based dashboards, transaction processing (purchases, redemptions, transfers), spending analytics with trend charts, event management with RSVP, and promotional campaigns, all with dark mode support.",
    tech: ["JavaScript", "Node.js", "React", "Express", "Prisma", "SQLite", "Redis", "Tailwind", "Vite", "Docker", "SendGrid", "JWT"],
    bullets: [
      "Built a full-stack platform with JWT auth, hierarchical RBAC (Superuser, Manager, Cashier, Regular User), role-based dashboards, email activation and password reset via SendGrid.",
      "Implemented transaction lifecycle: purchases, redemptions, adjustments, transfers, and event awards with full audit trails and fraud flagging.",
      "Added analytics dashboard with spending trend analysis (daily/weekly/monthly) and charts, Redis-cached for faster repeat queries.",
      "Built event management (RSVP, capacity limits, points distribution to attendees) and promotions engine (automatic multipliers, one-time promo codes).",
      "Optimized backend with Redis caching and rate limiting; SQLite + Prisma; React + Vite + Tailwind frontend; security via Helmet, bcrypt, and input validation.",
    ],
    github: "https://github.com/HamedDawoudzai/Rewardly",
  },
  {
    name: "Android CMS Informations App",
    subtitle: "Course Management System for Android",
    logo: "/images/project-placeholder.svg",
    description:
      "An Android app for a Course Management System (CMS) with separate flows for students and admins, built with Java and Firebase.",
    tech: ["Java", "Firebase", "Firebase Auth", "AndroidX", "View Binding", "JUnit", "Espresso", "Mockito"],
    bullets: [
      "Built an Android app with dual user flows: students (complaints, POSt eligibility checks, events, RSVP, announcements) and admins (event management, complaint viewing, announcements).",
      "Integrated Firebase Realtime Database, Firebase Auth, and Firebase Messaging for data storage, authentication, and push notifications.",
      "Implemented MVP architecture with View Binding, Material Design, and unit/integration tests using JUnit, Espresso, and Mockito.",
    ],
    github: "https://github.com/HamedDawoudzai/Android-CMS-Informations-App",
  },
  {
    name: "Inline Code Comment Generator",
    subtitle: "Developer Productivity CLI",
    logo: "/images/cute_ai_logo.png",
    description:
      "CLI tool that automatically adds concise inline comments to JavaScript/TypeScript files using a local LLM via Ollama. No API costs, works offline.",
    tech: ["Node.js", "Ollama", "CodeLlama", "glob", "dotenv"],
    bullets: [
      "Reduced manual comment-writing from ~12 hours to under 20 seconds across 64 source files, improving onboarding for new developers.",
      "Uses a local CodeLlama model with a safety filter that only adds comment lines; code logic and formatting are never changed.",
      "Supports batch processing, glob patterns, and configurable model/URL; designed for use as a dev dependency across projects.",
    ],
    github: "https://github.com/HamedDawoudzai/AI-Inline-Code-Comment-generator",
  },
];

/* Varying cover heights give the board its masonry rhythm */
const coverHeights = ["h-72", "h-56", "h-56", "h-72"];

function ProjectPin({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const cover = coverHeights[index % coverHeights.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 2) * 0.1, duration: 0.5, ease: "easeOut" }}
      className="mb-10 break-inside-avoid"
    >
      {/* Cover: the "pin" image */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} on GitHub`}
        className={`group relative flex ${cover} items-center justify-center overflow-hidden rounded-[28px] bg-surface pin-dots`}
      >
        <div className="relative h-28 w-28 overflow-hidden rounded-[28px] bg-white shadow-[0_12px_30px_-12px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-110 sm:h-32 sm:w-32">
          <Image
            src={project.logo}
            alt=""
            fill
            sizes="128px"
            className="object-contain p-3"
          />
        </div>

        {/* Hover overlay, Pinterest style */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35 group-focus-visible:bg-black/35" />
        <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-[#e60023] px-4 py-2.5 text-sm font-bold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <PinIcon className="h-3.5 w-3.5" />
          Open
        </span>
        <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-bold text-[#111] opacity-0 shadow transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <GitHubIcon className="h-3.5 w-3.5" />
          GitHub
          <ArrowUpRightIcon className="h-3 w-3" />
        </span>
      </a>

      {/* Pin body */}
      <div className="px-2 pt-4">
        <h3 className="text-xl font-extrabold leading-tight tracking-tight text-foreground sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-accent">{project.subtitle}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full px-1 text-sm font-bold text-foreground transition-colors hover:text-accent"
        >
          {open ? "Hide highlights" : `Show ${project.bullets.length} highlights`}
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-3 pt-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 md:py-32">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Pinned"
          highlight="projects"
          description="A board of things I've designed, built, and shipped end to end."
        />
        <a
          href="https://github.com/HamedDawoudzai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-shrink-0 items-center gap-2 self-start rounded-full bg-surface px-5 py-3 text-sm font-bold text-foreground transition-colors hover:bg-foreground hover:text-background sm:self-auto"
        >
          <GitHubIcon className="h-4 w-4" />
          All repositories
        </a>
      </div>

      <div className="mt-14 columns-1 gap-8 md:columns-2">
        {projects.map((project, i) => (
          <ProjectPin key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
