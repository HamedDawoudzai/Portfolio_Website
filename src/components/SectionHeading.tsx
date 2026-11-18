"use client";

import { motion } from "framer-motion";

/**
 * Bold sans headline with one italic serif word in red, e.g.
 * <SectionHeading eyebrow="02 — Experience" title="Where I've" highlight="worked" />
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-accent sm:text-sm">
        <span className="h-2 w-2 rounded-full bg-accent" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
        {title}{" "}
        <span className="font-serif font-medium italic tracking-tight text-accent">
          {highlight}
        </span>
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </motion.div>
  );
}
