import { FadeIn } from "@/components/fade-in";

const PRINCIPLES = [
  { title: "Principle one", body: "Placeholder description of the first leadership principle." },
  { title: "Principle two", body: "Placeholder description of the second leadership principle." },
  { title: "Principle three", body: "Placeholder description of the third leadership principle." },
  { title: "Principle four", body: "Placeholder description of the fourth leadership principle." },
];

export function LeadershipApproach() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Approach</p>
          <h2 id="approach-heading" className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How I lead
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift">
                <div className="font-display text-sm font-semibold uppercase tracking-wider text-primary">0{i + 1}</div>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
