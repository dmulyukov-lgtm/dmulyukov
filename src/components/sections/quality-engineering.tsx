import { ShieldCheck, ExternalLink, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export function QualityEngineering() {
  return (
    <section aria-labelledby="quality-heading" id="quality" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Quality Engineering
            </div>
            <h2 id="quality-heading" className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              How this site is tested
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              This portfolio is covered by an end-to-end test suite that runs on every change, kept in its own repository so the tests and the site stay independent.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-muted/30 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <CheckCircle className="h-4 w-4 text-primary/70" aria-hidden="true" />
                  Isolated by design
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The tests live in a separate repo, so automated edits to the site cannot affect them.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/30 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <CheckCircle className="h-4 w-4 text-primary/70" aria-hidden="true" />
                  Self-contained CI
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  GitHub Actions builds the site and runs Playwright against it in a single runner, with no staging server.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-primary/10 bg-primary/5 p-4 sm:p-5">
              <p className="text-sm leading-relaxed text-foreground">
                <span className="font-semibold text-primary">22</span>{" "}
                Playwright scenarios across navigation, the role toggle and career timeline, the contact form, responsive layouts, and SEO and meta tags.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
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
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
