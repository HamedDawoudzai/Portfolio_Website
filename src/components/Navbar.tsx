"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-foreground transition-colors hover:bg-card-border"
    >
      {theme === "dark" ? (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 200) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/85 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_var(--card-border),0_8px_24px_-12px_rgba(0,0,0,0.15)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-8 md:px-12 lg:px-16">
        <a href="#" className="group flex items-center gap-2.5" aria-label="Back to top">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-black tracking-tight text-white transition-transform group-hover:scale-105">
            HD
          </span>
          <span className="hidden text-base font-bold tracking-tight text-foreground sm:inline">
            Hamed Dawoudzai
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-surface p-1 lg:flex">
          {navLinks.map((link) => {
            const active = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active ? "text-background" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-dark sm:inline-flex"
          >
            Resume
          </a>
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-surface lg:hidden"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block h-0.5 w-4 bg-foreground transition-transform duration-200 ${mobileOpen ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`block h-0.5 w-4 bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-4 bg-foreground transition-transform duration-200 ${mobileOpen ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-card-border lg:hidden"
          >
            <ul className="flex flex-wrap gap-2 px-4 py-4 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      activeSection === link.href.slice(1)
                        ? "bg-foreground text-background"
                        : "bg-surface text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="sm:hidden">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-accent px-4 py-2 text-sm font-bold text-white"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
