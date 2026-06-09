import { FadeIn } from "@/components/fade-in";

const GROUPS = [
  { title: "Group one", tags: ["Tag", "Tag", "Tag", "Tag"] },
  { title: "Group two", tags: ["Tag", "Tag", "Tag", "Tag"] },
  { title: "Group three", tags: ["Tag", "Tag", "Tag"] },
  { title: "Group four", tags: ["Tag", "Tag", "Tag", "Tag"] },
  { title: "Group five", tags: ["Tag", "Tag", "Tag"] },
  { title: "Group six", tags: ["Tag", "Tag", "Tag", "Tag"] },
];

export function SkillsMap() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Skills</p>
          <h2 id="skills-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Skills map
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.tags.map((t, j) => (
                    <span key={j} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
