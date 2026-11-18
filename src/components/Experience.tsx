"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

interface Job {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tag?: string;
}

/** Current role — gets the full-width spotlight card. */
const featured: Job = {
  company: "Pinterest",
  logo: "/images/pinterest_logo.png",
  role: "Software Engineer Intern, Cloud Architecture",
  period: "Sep 2026 – Present",
  location: "Toronto, ON",
  bullets: [
    "Engineered infrastructure supporting Pinterest's migration from Teletraan EC2 to PinCompute (Amazon EKS), addressing IPv4 address exhaustion through a large-scale transition to IPv6.",
    "Built static-analysis linting tooling to detect IPv4 literals and application-level incompatibilities across production services prior to IPv6 migration.",
    "Developed network connectivity validation tooling for Amazon EKS environments to verify cluster and service readiness for core IPv6 networking operations.",
    "Integrated validation and remediation workflows into CI/CD pipelines across 765+ repositories, combining static-analysis findings with LLM-generated code changes to automatically open developer-ready pull requests.",
  ],
};

const jobs: Job[] = [
  {
    company: "Squarepoint Capital",
    logo: "/images/squarepoint_icon.png",
    role: "Incoming Software Engineer Intern",
    period: "Jan 2027 – Apr 2027",
    location: "Montreal, QC",
    tag: "Up next",
    bullets: [
      "Incoming Software Engineer Intern for Winter 2027.",
    ],
  },
  {
    company: "Royal Bank of Canada",
    logo: "/images/RBC_logo.png",
    role: "Software Developer Intern, U.S. Cash Management",
    period: "Jan 2026 – Aug 2026",
    location: "Toronto, ON",
    bullets: [
      "Built and maintained Java Spring Boot microservices supporting high-volume U.S. corporate payment processing within RBC Global Payments.",
      "Reduced end-to-end payment preprocessing latency by ~40–60% by introducing API versioning (v2) and parallelized Camunda workflows.",
      "Improved service scalability and fault tolerance by aligning backend services with Azure deployment patterns and offloading non-critical workloads to Spot VM capacity.",
      "Increased service reliability by implementing comprehensive unit tests using JUnit and Mockito, achieving 80%+ code coverage in a regulated banking environment.",
    ],
  },
  {
    company: "Traveltical",
    logo: "/images/Traveltical_logo.png",
    role: "Software Engineer Intern",
    period: "Sep 2025 – Dec 2025",
    location: "Toronto, ON",
    bullets: [
      "Modernized backend services by introducing API versioning (v3), enabling backward-compatible evolution of endpoints without disrupting existing consumers.",
      "Designed and implemented layered RESTful services (controller, service, DAO) with an ORM-style data access layer, and authored Swagger/OpenAPI documentation to improve maintainability, testing, and developer onboarding.",
    ],
  },
  {
    company: "Appy.yo",
    logo: "/images/appyo_logo.png",
    role: "Software Engineer Intern",
    period: "May 2025 – Aug 2025",
    location: "Toronto, ON",
    bullets: [
      "Developed and tested full-stack features for an AI-powered physiotherapy platform using Java (Spring Boot), React (TypeScript), PostgreSQL, Docker, and Nginx.",
      "Implemented RESTful APIs for injury-aware workout recommendations, session logging, and an LLM-based physiotherapist chatbot; integrated DeepSeek AI and JWT authentication, cutting latency by ~80%.",
      "Optimized performance and implemented caching strategies to reduce REST call response time from over 10 seconds to below 300 milliseconds.",
    ],
  },
];

/* Decorative mini "pin grid" for the spotlight card */
const decoHeights = [
  ["h-16", "h-28", "h-12", "h-20"],
  ["h-24", "h-14", "h-28", "h-10"],
  ["h-12", "h-24", "h-16", "h-24"],
];

function PinterestSpotlight() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[36px] bg-[#e60023] p-8 text-white shadow-[0_30px_60px_-30px_rgba(230,0,35,0.6)] sm:p-10 lg:p-12"
    >
      {/* deco pins */}
      <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 hidden gap-3 opacity-25 md:flex">
        {decoHeights.map((col, i) => (
          <div key={i} className={`flex w-20 flex-col gap-3 ${i === 1 ? "mt-10" : ""}`}>
            {col.map((h, j) => (
              <div key={j} className={`${h} rounded-2xl bg-white/60`} />
            ))}
          </div>
        ))}
      </div>

      <div className="relative max-w-2xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60023]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e60023] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e60023]" />
            </span>
            Currently
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">{featured.period}</span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">{featured.location}</span>
        </div>

        <div className="mt-8 flex items-center gap-5">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-white shadow-lg sm:h-24 sm:w-24">
            <Image src={featured.logo} alt="Pinterest logo" fill sizes="96px" className="object-contain" />
          </div>
          <div>
            <h3 className="text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">{featured.company}</h3>
            <p className="mt-1 text-lg font-semibold text-white/85 sm:text-xl">{featured.role}</p>
          </div>
        </div>

        <ul className="mt-8 space-y-3">
          {featured.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-lg leading-relaxed text-white/90">
              <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 md:py-32">
      <SectionHeading eyebrow="02 — Experience" title="Where I've" highlight="worked" />

      <div className="mt-14">
        <PinterestSpotlight />
      </div>

      <ol className="relative mt-10 space-y-6 border-l-2 border-dashed border-card-border pl-6 sm:ml-4 sm:pl-10">
        {jobs.map((job, i) => (
          <motion.li
            key={job.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <span
              aria-hidden
              className="absolute -left-[33px] top-10 h-4 w-4 rounded-full border-4 border-surface bg-accent sm:-left-[49px]"
            />
            <article className="rounded-[28px] bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-card-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-card-border">
                  <Image src={job.logo} alt={`${job.company} logo`} fill sizes="64px" className="object-contain p-1.5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                          {job.company}
                        </h3>
                        {job.tag && (
                          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent">
                            {job.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-base font-medium text-muted">{job.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-foreground">
                        {job.period}
                      </span>
                      <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-foreground">
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 text-base leading-relaxed text-muted">
                        <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
