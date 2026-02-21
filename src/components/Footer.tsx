const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hamed-dawoudzai/",
  },
  {
    label: "GitHub",
    href: "https://github.com/hameddawoudzai",
  },
  {
    label: "Email",
    href: "mailto:hamed.dawoudzai@mail.utoronto.ca",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 dark:border-stone-800/60">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between md:px-8">
        <p>&copy; {new Date().getFullYear()} Hamed Dawoudzai</p>
        <ul className="flex gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
