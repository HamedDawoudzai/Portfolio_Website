"use client";

import { motion } from "framer-motion";

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    company: "Royal Bank of Canada (RBC)",
    role: "Software Developer Intern — U.S. Cash Management",
    period: "Jan 2026 – Present",
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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8 flex items-center gap-3"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Experience
        </h2>
        <span className="h-px flex-1 bg-card-border" />
      </motion.div>

      <div className="relative space-y-6 pl-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-accent before:via-accent/40 before:to-transparent">
        {jobs.map((job, i) => (
          <motion.div
            key={job.company}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="group relative rounded-xl border border-card-border bg-card/50 p-6 transition-all hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 md:p-8"
          >
            <span className="absolute -left-[27px] top-7 h-3 w-3 rounded-full border-2 border-accent bg-background transition-colors group-hover:bg-accent" />

            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {job.company}
                </h3>
                <p className="text-muted">{job.role}</p>
              </div>
              <div className="flex flex-col items-start gap-1 sm:items-end">
                <span className="inline-flex shrink-0 items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {job.period}
                </span>
                <span className="text-sm text-muted">{job.location}</span>
              </div>
            </div>

            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
