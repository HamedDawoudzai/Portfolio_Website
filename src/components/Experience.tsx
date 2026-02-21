"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Job {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    company: "Royal Bank of Canada",
    logo: "/images/RBC_logo.png",
    role: "Software Developer Intern, U.S. Cash Management",
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
    <section id="experience" className="scroll-mt-24 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
          Experience
        </h2>
        <span className="mt-5 block h-1 w-16 rounded-full bg-accent" />
      </motion.div>

      <div className="mt-12 space-y-8">
        {jobs.map((job, i) => (
          <motion.div
            key={job.company}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
          <div className="rounded-xl border border-card-border border-l-4 border-l-accent bg-card p-8 transition-all duration-200 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.25)] lg:p-10">
            <div className="flex items-start gap-5">
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl lg:h-24 lg:w-24">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
                      {job.role}
                    </h3>
                    <p className="text-base font-medium text-foreground/80 lg:text-lg">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent ring-1 ring-accent/25">
                      {job.period}
                    </span>
                    <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-400 ring-1 ring-blue-400/25">
                      {job.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-3 space-y-3 pl-[6.25rem] lg:pl-[7.25rem]">
              {job.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-base leading-relaxed text-muted lg:text-lg"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
