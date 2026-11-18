"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, ArrowUpRightIcon } from "./icons";

const contactLinks = [
  { label: "Email", value: "hamed.dawoudzai@mail.utoronto.ca", href: "mailto:hamed.dawoudzai@mail.utoronto.ca", Icon: MailIcon },
  { label: "LinkedIn", value: "linkedin.com/in/hamed-dawoudzai", href: "https://www.linkedin.com/in/hamed-dawoudzai-219742290/", Icon: LinkedInIcon },
  { label: "GitHub", value: "github.com/hameddawoudzai", href: "https://github.com/hameddawoudzai", Icon: GitHubIcon },
  { label: "Phone", value: "647-510-6214", href: "tel:+16475106214", Icon: PhoneIcon },
];

const FORMSPREE_ID = "xvzbwgrj";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <SectionHeading
        eyebrow="06 — Contact"
        title="Let's"
        highlight="connect"
        description="I'm always open to discussing new opportunities, projects, or collaborations. Feel free to reach out, I'd love to hear from you."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[400px_1fr] lg:gap-10">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
          className="space-y-3"
        >
          {contactLinks.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-[22px] bg-card p-3 pr-5 ring-1 ring-card-border transition-all hover:-translate-y-0.5 hover:ring-accent"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{label}</p>
                <p className="break-all text-sm font-semibold text-foreground">{value}</p>
              </div>
              <ArrowUpRightIcon className="h-4 w-4 flex-shrink-0 text-muted transition-colors group-hover:text-accent" />
            </a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-[32px] bg-card p-6 ring-1 ring-card-border sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block pl-1 text-sm font-bold text-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-2xl border-2 border-transparent bg-surface px-5 py-3.5 text-base text-foreground placeholder-muted outline-none transition-colors focus:border-accent focus:bg-card"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block pl-1 text-sm font-bold text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-2xl border-2 border-transparent bg-surface px-5 py-3.5 text-base text-foreground placeholder-muted outline-none transition-colors focus:border-accent focus:bg-card"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block pl-1 text-sm font-bold text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none rounded-2xl border-2 border-transparent bg-surface px-5 py-3.5 text-base text-foreground placeholder-muted outline-none transition-colors focus:border-accent focus:bg-card"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-white transition-all hover:bg-accent-dark active:scale-[0.98] disabled:opacity-60"
          >
            {status === "sent" ? (
              <>
                Sent!
                <svg aria-hidden="true" focusable="false" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </>
            ) : status === "error" ? (
              "Something went wrong, try again"
            ) : status === "sending" ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <svg aria-hidden="true" focusable="false" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
