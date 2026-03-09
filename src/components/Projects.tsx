"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      "Added interactive Recharts performance charts with configurable intervals (1m–1d), transaction history audit trail, and holdings breakdown with cost basis and P&L per asset.",
      "Optimized backend with Redis caching (5-min TTL) to reduce external API calls; PostgreSQL for transactional safety; Docker for PostgreSQL and Redis infrastructure.",
      "Delivered premium dark UI with gold accents across landing, dashboard, trade, portfolio, and transaction history views with responsive layouts.",
    ],
    github: "https://github.com/HamedDawoudzai/hybrid_exchange",
  },
  {
    name: "Rewardly",
    subtitle: "Loyalty Points Management System",
    logo: "/images/Rewardly_logo.png",
    description:
      "A full-stack loyalty platform with role-based access control, transaction processing, and promotional campaigns.",
    tech: ["JavaScript", "React", "Node.js", "SQLite", "Prisma", "JWT", "Express"],
    bullets: [
      "Built a full-stack loyalty points platform with role-based access control (4 roles), transaction processing, and promotional campaigns, capable of supporting 10,000+ concurrent users.",
    ],
    github: "https://github.com/hameddawoudzai/rewardly",
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
      "CLI tool that automatically adds concise inline comments to JavaScript/TypeScript files using a local LLM via Ollama — no API costs, works offline.",
    tech: ["Node.js", "Ollama", "CodeLlama", "glob", "dotenv"],
    bullets: [
      "Reduced manual comment-writing from ~12 hours to under 20 seconds across 64 source files, improving onboarding for new developers.",
      "Uses locally-served CodeLlama model with a commentsOnly safety filter that only adds comment lines — code logic, imports, and formatting never modified.",
      "Supports batch processing, glob patterns, and configurable model/URL; designed for use as a dev dependency across projects.",
    ],
    github: "https://github.com/HamedDawoudzai/AI-Inline-Code-Comment-generator",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
          Projects
        </h2>
        <span className="mt-5 block h-1 w-16 rounded-full bg-accent" />
      </motion.div>

      <div className="mt-12 grid grid-cols-1 grid-rows-4 gap-4 sm:gap-6 md:grid-cols-2 md:grid-rows-2 md:gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex min-h-0"
          >
          <div className="flex min-h-[280px] w-full flex-col overflow-hidden rounded-xl border border-card-border bg-card transition-all duration-200 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.25)] sm:min-h-[300px]">
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-6 lg:p-8">
              <div className="flex items-start gap-5">
                <div className="relative h-16 w-16 flex-shrink-0 lg:h-20 lg:w-20">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm lg:text-base">
                    {project.subtitle}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
                {project.description}
              </p>
              <ul className="mt-3 space-y-2 sm:space-y-3">
                {project.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-base leading-relaxed text-muted lg:text-lg"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-card-border px-3 py-1.5 text-sm text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-md border-2 border-accent bg-transparent px-5 py-2 text-sm font-bold uppercase tracking-[0.15em] text-accent transition-all hover:bg-accent hover:text-white sm:mt-5"
              >
                View Project
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
