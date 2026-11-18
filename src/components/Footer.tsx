import { socials } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-black text-white">
            HD
          </span>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Hamed Dawoudzai · Made in Toronto
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-foreground transition-colors hover:bg-accent hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
