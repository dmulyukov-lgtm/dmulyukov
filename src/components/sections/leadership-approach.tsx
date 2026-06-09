import { FadeIn } from "@/components/fade-in";

const PRINCIPLES = [
  {
    title: "Quality is a management signal, not a test count.",
    body: "I build metrics loops — lead time, escaped defects, regression cost, automation coverage — so leadership can see release risk and systemic bottlenecks, not just pass/fail.",
  },
  {
    title: "Risk-based, shift-left by default.",
    body: "I turn production incidents into stronger validation gates, realistic regression scope, and earlier checks on the workflows that actually matter to customers.",
  },
  {
    title: "I grow people, not just process.",
    body: "I've built management benches from junior hires — QA leads, test managers, an automation tech lead — and handed functions over without losing manageability.",
  },
  {
    title: "AI is a working layer; accountability stays human.",
    body: "I use AI to compress analysis, RCA scaffolding and prototyping, and keep human QA judgment over every conclusion.",
  },
];

export function LeadershipApproach() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Approach</p>
          <h2 id="approach-heading" className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How I work
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift sm:p-7">
                <div className="font-display text-sm font-semibold uppercase tracking-wider text-primary">0{i + 1}</div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
