import { ArrowUpRight, ImageIcon } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

type Status = "Live" | "Private" | "Prototype";

type Project = {
  title: string;
  status: Status;
  body: string;
  stack: string[];
  href?: string;
  cta?: string;
  mediaPlaceholder?: string;
  footnote?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Ishikawa / Fishbone Diagram Builder",
    status: "Live",
    body: "A tool that turns indented Markdown into an interactive Ishikawa (fishbone) SVG for root-cause analysis and postmortems. Includes search, export, layout handling, and save/load. Built in Lovable as an AI-assisted product, refined against real RCA workflows.",
    stack: ["Lovable", "TypeScript", "React", "SVG", "Markdown"],
    href: "https://ishikawa-builder.lovable.app/",
    cta: "Open live demo",
  },
  {
    title: "Personal Finance Tracker",
    status: "Private",
    body: "A custom personal-finance tracking tool built in Codex, tailored to my own budgeting model. Private by design; shown here as screenshots.",
    stack: ["Codex"],
    mediaPlaceholder: "Screenshots coming soon",
  },
  {
    title: "Unity Bullet-Hell Prototype",
    status: "Prototype",
    body: "A playable bullet-hell prototype brought to life through an agentic AI coding workflow: multiple enemy types, enemy waves, a boss encounter, level-up choices, and coefficient-based balancing. An experiment in how far agentic AI can take a game prototype toward a playable state.",
    stack: ["Unity", "Agentic AI"],
    mediaPlaceholder: "Gameplay capture coming soon",
    footnote: "Code coming soon — GitLab link pending",
  },
];

const STATUS_STYLES: Record<Status, string> = {
  Live: "bg-primary/10 text-primary ring-1 ring-primary/20",
  Private: "bg-muted text-muted-foreground ring-1 ring-border",
  Prototype: "bg-accent/10 text-accent-foreground ring-1 ring-border",
};

export function SideProjects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Side projects</p>
          <h2 id="projects-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I build
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Proof I build with AI, not just talk about it.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROJECTS.map((p, i) => {
            const Wrapper: React.ElementType = p.href ? "a" : "div";
            const wrapperProps = p.href
              ? {
                  href: p.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <FadeIn key={i} delay={i * 80}>
                <Wrapper
                  {...wrapperProps}
                  className={`group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all ${
                    p.href ? "hover:-translate-y-1 hover:shadow-lift" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[p.status]}`}
                    >
                      {p.status}
                    </span>
                    {p.href && (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>

                  {p.mediaPlaceholder && (
                    <div className="mt-4 flex aspect-video items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted/40 text-xs text-muted-foreground">
                      <ImageIcon className="h-4 w-4" aria-hidden />
                      <span>{p.mediaPlaceholder}</span>
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  {(p.cta || p.footnote) && (
                    <div className="mt-5 border-t border-border/60 pt-4 text-xs">
                      {p.cta && p.href && (
                        <span className="font-medium text-primary">{p.cta} →</span>
                      )}
                      {p.footnote && <span className="text-muted-foreground">{p.footnote}</span>}
                    </div>
                  )}
                </Wrapper>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
