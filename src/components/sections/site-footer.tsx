import { Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} Danis Mulyukov</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/danis-mulyukov/"
            target="_top"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="mailto:d.mulyukov@gmail.com"
            aria-label="Email"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
