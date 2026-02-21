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
    name: "Hybrid Stock & Crypto Exchange",
    subtitle: "Full-Stack Trading Platform",
    logo: "/images/hd_logo.png",
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
    logo: "/images/Rewardly_logo.png",
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

      <div className="mt-12 space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
          <div className="flex flex-col overflow-hidden rounded-xl border border-card-border bg-card transition-all duration-200 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.25)] lg:flex-row">
            <div className="flex items-center justify-center bg-card-border/20 p-10 lg:w-80 lg:flex-shrink-0">
              <div className="relative h-40 w-40 lg:h-52 lg:w-52">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex-1 p-8 lg:p-10">
              <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
                {project.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent lg:text-base">
                {project.subtitle}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">
                {project.description}
              </p>

              <ul className="mt-5 space-y-3">
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

              <div className="mt-6 flex flex-wrap gap-2">
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
                className="mt-6 inline-flex items-center gap-2 rounded-md border-2 border-accent bg-transparent px-6 py-2.5 text-sm font-bold uppercase tracking-[0.15em] text-accent transition-all hover:bg-accent hover:text-white"
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
