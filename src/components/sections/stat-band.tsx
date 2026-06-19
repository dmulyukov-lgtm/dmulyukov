import { useRole } from "@/lib/role-context";
import { RoleFade } from "@/components/role-fade";
import { FadeIn } from "@/components/fade-in";

const STATS: Record<"qa" | "em", { value: string; label: string }[]> = {
  qa: [
    { value: "−60%", label: "regression effort & cycle time, with Playwright/TypeScript E2E built from scratch" },
    { value: "80+", label: "QA engineers led across 12 product streams ($6.47B e-commerce)" },
    { value: "20% → 35%", label: "integral UI performance; site moved 7th → 4th vs. local competitors" },
    { value: "3", label: "QA functions built from the ground up" },
    { value: "22", label: "automated E2E scenarios covering this site" },
  ],
  em: [
    { value: "2.5x", label: "lower QA-function cost, with no loss of quality" },
    { value: "5 → 52", label: "team grown from outsourced to in-house in 3 years" },
    { value: "3x", label: "budget cut absorbed with all QA functions preserved" },
    { value: "4", label: "government-funded (RFRIT) product milestones delivered on time" },
  ],
};

export function StatBand() {
  const { role } = useRole();
  const stats = STATS[role];

  return (
    <section aria-label="Key metrics" className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden bg-border/60 sm:grid-cols-4 lg:grid-cols-5">
        {stats.map((s, i) => (
          <FadeIn key={i} delay={i * 60} className="bg-background p-5 sm:p-8">
            <div className="font-display text-2xl font-semibold tracking-tight sm:text-4xl">
              <RoleFade>{s.value}</RoleFade>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <RoleFade>{s.label}</RoleFade>
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
