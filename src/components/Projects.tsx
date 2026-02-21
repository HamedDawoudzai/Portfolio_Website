"use client";

import { motion } from "framer-motion";

interface Project {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  bullets: string[];
  github: string;
}

const projects: Project[] = [
  {
    name: "Hybrid Stock & Crypto Exchange",
    subtitle: "Full-Stack Trading Platform",
    description:
      "A hybrid trading platform for stocks and cryptocurrencies with real-time market data, order execution, and portfolio management.",
    tech: ["Spring Boot", "Next.js", "React", "PostgreSQL", "Redis", "Polygon API", "Coinbase API"],
    bullets: [
      "Built a full-stack hybrid trading platform leveraging Polygon.io and Coinbase Exchange API, capable of supporting 1,000+ users.",
      "Optimized backend performance using Redis caching (TTL-based), reducing external API calls by 50% and ensuring transactional safety with PostgreSQL.",
    ],
    github: "https://github.com/hameddawoudzai/hybrid-exchange",
  },
  {
    name: "Rewardly",
    subtitle: "Loyalty Points Management System",
    description:
      "A full-stack loyalty platform with role-based access control, transaction processing, and promotional campaigns.",
    tech: ["JavaScript", "React", "Node.js", "SQLite", "Prisma", "JWT", "Express"],
    bullets: [
      "Built a full-stack loyalty points platform with role-based access control (4 roles), transaction processing, and promotional campaigns, capable of supporting 10,000+ concurrent users.",
    ],
    github: "https://github.com/hameddawoudzai/rewardly",
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
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <span className="mt-3 block h-0.5 w-12 rounded-full bg-accent" />
      </motion.div>

      <div className="mt-10 space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="rounded-xl border border-card-border bg-card p-6 transition-all hover:shadow-lg md:p-8"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {project.name}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {project.subtitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-4 space-y-2">
              {project.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-card-border px-2.5 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md border-2 border-accent bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-all hover:bg-accent hover:text-white"
            >
              View Project
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
