import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Mail, Linkedin } from "lucide-react";
import { RoleSwitch } from "@/components/role-switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#career", label: "Career" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="font-display text-base font-semibold tracking-tight">
          Danis Mulyukov
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <RoleSwitch size="sm" />
          <ThemeToggle />
          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 lg:hidden",
          open ? "max-h-96" : "max-h-0",
          "transition-[max-height] duration-300 ease-in-out",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
