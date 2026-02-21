"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-background/80 backdrop-blur-md dark:border-stone-800/60">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          HD
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-8 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 sm:hidden"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${mobileOpen ? "translate-y-[4px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${mobileOpen ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-stone-200/60 bg-background/95 backdrop-blur-md sm:hidden dark:border-stone-800/60"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-stone-100 hover:text-foreground dark:hover:bg-stone-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
