import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const PROJECTS = [
  {
    title: "Project placeholder one",
    body: "Short description placeholder — what it does and why it matters.",
    stack: ["Tag", "Tag", "Tag"],
  },
  {
    title: "Project placeholder two",
    body: "Short description placeholder — what it does and why it matters.",
    stack: ["Tag", "Tag", "Tag"],
  },
  {
    title: "Project placeholder three",
    body: "Short description placeholder — what it does and why it matters.",
    stack: ["Tag", "Tag", "Tag"],
  },
];

export function SideProjects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Side projects</p>
          <h2 id="projects-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I build
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <FadeIn key={i} delay={i * 80}>
              <a
                href="#"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
