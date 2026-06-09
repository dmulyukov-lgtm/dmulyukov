import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { RoleSwitch } from "@/components/role-switch";
import { RoleFade } from "@/components/role-fade";
import { useRole, ROLE_LABELS } from "@/lib/role-context";

const PITCH: Record<"qa" | "em", string> = {
  qa: "QA leader who turns testing from an expensive afterthought into measurable, automated, risk-based delivery. I've founded three QA Centers of Excellence, built E2E automation practices from zero, cut regression cycles by 60%, and led an 80+ engineer quality contour across a $6.5B e-commerce platform.",
  em: "Engineering and delivery manager who ships predictably under constraint. I run R&D teams end to end — roadmap, scope, budget, and people — rebuilt a delivery function at 2.5x lower cost, grew teams from 5 to 50+, and delivered government-funded product milestones on time.",
};

export function Hero() {
  const { role } = useRole();

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-32">
        <div className="flex flex-col items-start gap-8">
          <RoleSwitch />

          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <RoleFade>{ROLE_LABELS[role]}</RoleFade> · 15+ years
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Danis Mulyukov
            </h1>
            <p className="max-w-2xl font-display text-2xl leading-snug text-foreground sm:text-3xl">
              I build teams and systems that ship quality software predictably.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              15+ years across QA leadership and engineering/delivery management. Three QA functions built from scratch. Now working AI-native.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              <RoleFade>{PITCH[role]}</RoleFade>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/danis-mulyukov/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
            <a
              href="mailto:d.mulyukov@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="CV coming soon"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground opacity-60"
            >
              <Download className="h-4 w-4" /> Download CV
            </button>
          </div>

          <a href="#career" className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
            See the career timeline
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
