import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const ARTICLES = [
  { title: "Article placeholder one", date: "2025" },
  { title: "Article placeholder two", date: "2024" },
  { title: "Article placeholder three", date: "2024" },
];

export function Writing() {
  return (
    <section id="writing" aria-labelledby="writing-heading" className="border-t border-border/60 bg-muted/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Writing</p>
          <h2 id="writing-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected essays
          </h2>
        </FadeIn>

        <ul className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
          {ARTICLES.map((a, i) => (
            <FadeIn key={i} as="li" delay={i * 60}>
              <a href="#" className="group flex items-center justify-between gap-4 p-5 transition-colors hover:bg-muted/50 sm:p-6">
                <div>
                  <div className="font-display text-base font-medium sm:text-lg">{a.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{a.date}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
