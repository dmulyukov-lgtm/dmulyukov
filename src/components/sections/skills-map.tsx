import { FadeIn } from "@/components/fade-in";
import { useRole } from "@/lib/role-context";

type Group = {
  id: "quality" | "automation" | "delivery" | "leadership" | "domains" | "ai";
  title: string;
  tags: string[];
};

const GROUPS: Group[] = [
  {
    id: "quality",
    title: "Quality & Testing",
    tags: [
      "Test strategy & governance",
      "Quality gates",
      "Risk-based testing",
      "Release QA / go-no-go",
      "E2E & regression management",
      "Test design & analysis",
      "Requirements quality gates",
    ],
  },
  {
    id: "automation",
    title: "Automation & Tooling",
    tags: [
      "Playwright (TypeScript)",
      "Selenium/Java",
      "CI/CD (GitLab, Jenkins)",
      "Postman/Swagger",
      "Grafana/Prometheus",
      "Kafka/RedPanda",
      "Wireshark/CDP/HAR",
      "Python",
      "Bash",
      "Docker/Kubernetes",
    ],
  },
  {
    id: "delivery",
    title: "Delivery & Engineering Management",
    tags: [
      "R&D team leadership",
      "Roadmap & scope",
      "Backlog intake & prioritization",
      "Budget & margin discipline",
      "Grading & rate-card design",
      "Capacity planning",
      "Stakeholder/CEO alignment",
    ],
  },
  {
    id: "leadership",
    title: "Leadership & People",
    tags: [
      "Matrix & remote leadership",
      "Mentoring & succession",
      "Building management benches",
      "Crisis stabilization",
      "Cross-functional coordination",
    ],
  },
  {
    id: "domains",
    title: "Domains",
    tags: [
      "Broadcast/media delivery",
      "E-commerce & payments",
      "Embedded imaging/cameras",
      "ECM",
      "Banking applications",
    ],
  },
  {
    id: "ai",
    title: "AI-Native",
    tags: [
      "AI-assisted analysis & RCA",
      "Requirements validation",
      "Prompt/context engineering",
      "Playwright MCP",
      "Vibe coding & rapid prototyping",
      "Human-in-the-loop QA",
    ],
  },
];

const EMPHASIS: Record<"qa" | "em", Group["id"][]> = {
  qa: ["quality", "automation"],
  em: ["delivery", "leadership"],
};

export function SkillsMap() {
  const { role } = useRole();
  const emphasized = new Set(EMPHASIS[role]);

  const ordered = [...GROUPS].sort((a, b) => {
    const ae = emphasized.has(a.id) ? 0 : 1;
    const be = emphasized.has(b.id) ? 0 : 1;
    return ae - be;
  });

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
          {ordered.map((g, i) => {
            const isEmph = emphasized.has(g.id);
            return (
              <FadeIn key={g.id} delay={i * 60}>
                <div
                  className={`relative h-full rounded-2xl border p-6 transition-all ${
                    isEmph
                      ? "border-primary/40 bg-card shadow-lift ring-1 ring-primary/20"
                      : "border-border bg-card shadow-soft"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3
                      className={`font-display text-sm font-semibold uppercase tracking-wider ${
                        isEmph ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {g.title}
                    </h3>
                    {isEmph && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        Focus
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {g.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full border px-2.5 py-1 text-xs ${
                          isEmph
                            ? "border-primary/30 bg-primary/5 text-foreground"
                            : "border-border bg-background text-muted-foreground"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
