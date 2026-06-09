import { Sparkles } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export function AINativePractice() {
  return (
    <section aria-labelledby="ai-heading" className="border-y border-border/60 bg-muted/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> AI-native practice
            </div>
            <h2 id="ai-heading" className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Placeholder headline for AI-native practice
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Placeholder paragraph describing how AI tooling is woven into day-to-day delivery and quality work.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
