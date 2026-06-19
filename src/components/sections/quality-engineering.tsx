import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const ARCHITECTURE = [
  {
    title: "Dual-repo isolation",
    description:
      "The test framework lives in its own repository, fully decoupled from the site's frontend. The frontend stays pristine, and AI code generators (like Lovable) cannot touch the test configuration.",
  },
  {
    title: "Multi-repo CI/CD",
    description:
      "A GitHub Actions pipeline checks out both repositories into one secure runner on every trigger.",
  },
  {
    title: "Zero-dependency staging",
    description:
      "Instead of a live staging server, the pipeline builds and boots a local SSR server (Vite plus TanStack Start node-server preset) inside the runner, then runs the Playwright suite against it.",
  },
];

const COVERAGE = [
  "Core navigation and structural integrity: header routing and anchor links across pages.",
  "Interactive components: the dynamic role toggle and the interactive career timeline.",
  "Forms and edge cases: contact-form input validation and submission states.",
  "Responsive design: layout verified across desktop, tablet, and mobile viewports.",
  "SEO and performance: meta tags, Open Graph data, and basic rendering metrics.",
];

const STACK = ["Playwright", "TypeScript", "GitHub Actions", "Page Object Model (POM)"];

export function QualityEngineering() {
  return (
    <section
      id="quality-engineering"
      aria-labelledby="quality-engineering-heading"
      className="border-y border-border/60 bg-muted/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Quality Engineering
            </div>
            <h2
              id="quality-engineering-heading"
              className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              This site tests itself
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              An enterprise-grade end-to-end automation framework that validates this very portfolio.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ARCHITECTURE.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-background p-5 sm:p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                  22
                </span>
                <span className="text-sm font-medium text-foreground sm:text-base">
                  UI scenarios across five layers
                </span>
              </div>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {COVERAGE.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary" aria-hidden="true">
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {STACK.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>

            <p className="mt-8 max-w-3xl text-sm italic text-muted-foreground sm:text-base">
              The tests live in their own repo on purpose, so they run on every change without touching the site's code.
            </p>

            <a
              href="https://github.com/dmulyukov-lgtm/portfoilio-E2E"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View the test framework on GitHub
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
