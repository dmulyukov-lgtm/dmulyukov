import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const ENTRIES = [
  { period: "2022 — Present", role: "Placeholder Role", company: "Placeholder Company" },
  { period: "2019 — 2022", role: "Placeholder Role", company: "Placeholder Company" },
  { period: "2016 — 2019", role: "Placeholder Role", company: "Placeholder Company" },
  { period: "2013 — 2016", role: "Placeholder Role", company: "Placeholder Company" },
  { period: "2011 — 2013", role: "Placeholder Role", company: "Placeholder Company" },
  { period: "2009 — 2011", role: "Placeholder Role", company: "Placeholder Company" },
];

export function CareerTimeline() {
  return (
    <section id="career" aria-labelledby="career-heading" className="border-t border-border/60 bg-muted/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Career</p>
          <h2 id="career-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            15+ years, two angles
          </h2>
        </FadeIn>

        <ol className="relative mt-12 space-y-4 border-l border-border pl-6 sm:pl-8">
          {ENTRIES.map((e, i) => (
            <FadeIn key={i} as="li" delay={i * 50} className="relative">
              <span className="absolute -left-[33px] top-6 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[37px]" />
              <details className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow open:shadow-lift">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{e.period}</div>
                    <div className="mt-1 font-display text-lg font-semibold">{e.role}</div>
                    <div className="text-sm text-muted-foreground">{e.company}</div>
                  </div>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <ul className="mt-4 space-y-2 border-t border-border/60 pt-4 text-sm text-muted-foreground">
                  <li>· Placeholder bullet point about responsibilities.</li>
                  <li>· Placeholder bullet point about an outcome.</li>
                  <li>· Placeholder bullet point about an initiative.</li>
                </ul>
              </details>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
