import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { RoleSwitch } from "@/components/role-switch";
import { RoleFade } from "@/components/role-fade";
import { useRole, ROLE_LABELS } from "@/lib/role-context";

const PITCH: Record<"qa" | "em", string> = {
  qa: "Placeholder pitch — QA angle. Building quality programs that ship faster.",
  em: "Placeholder pitch — Delivery angle. Leading teams that turn roadmaps into outcomes.",
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
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              <RoleFade>{PITCH[role]}</RoleFade>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
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
