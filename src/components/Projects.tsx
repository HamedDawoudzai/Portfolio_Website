"use client";

import { motion } from "framer-motion";

interface Project {
  name: string;
  tech: string[];
  bullets: string[];
  github: string;
}

const projects: Project[] = [
  {
    name: "Hybrid Stock & Crypto Exchange",
    tech: [
      "Spring Boot",
      "Next.js",
      "React",
      "PostgreSQL",
      "Redis",
      "Polygon API",
      "Coinbase API",
    ],
    bullets: [
      "Built a full-stack hybrid trading platform for stocks and cryptocurrencies, leveraging Polygon.io and Coinbase Exchange API to provide real-time market data, capable of supporting 1,000+ users.",
      "Optimized backend performance using Redis caching (TTL-based), reducing external API calls by 50%, and ensuring transactional safety with PostgreSQL under concurrent order execution.",
    ],
    github: "https://github.com/hameddawoudzai/hybrid-exchange",
  },
  {
    name: "Rewardly — Loyalty Points Platform",
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
    <section id="projects" className="scroll-mt-24 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8 flex items-center gap-3"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Projects
        </h2>
        <span className="h-px flex-1 bg-card-border" />
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="group flex flex-col rounded-xl border border-card-border bg-card/50 p-6 transition-all hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 md:p-8"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-medium text-foreground">
                {project.name}
              </h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.name}`}
                className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-card-border bg-background text-muted transition-all hover:border-accent/40 hover:text-accent hover:scale-110"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="mt-4 flex-1 space-y-2.5">
              {project.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                  {bullet}
                </li>
              ))}
            </ul>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-light"
            >
              View on GitHub
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
