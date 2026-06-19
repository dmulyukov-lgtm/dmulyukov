import { ShieldCheck, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export function QualityEngineering() {
  return (
    <section aria-labelledby="quality-heading" id="quality" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Quality Engineering
            </div>
            <h2 id="quality-heading" className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              How this site is tested
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              This portfolio is covered by an end-to-end test suite that runs on every change, kept in its own repository so the tests and the site stay independent.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span>Isolated by design: the tests live in a separate repo, so automated edits to the site cannot affect them.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span>Self-contained CI: GitHub Actions builds the site and runs Playwright against it in a single runner, with no staging server.</span>
              </li>
            </ul>

            <p className="mt-4 text-sm text-muted-foreground">
              22 Playwright scenarios across navigation, the role toggle and career timeline, the contact form, responsive layouts, and SEO and meta tags.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Playwright", "TypeScript", "GitHub Actions", "Page Object Model"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View the test framework on GitHub
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
