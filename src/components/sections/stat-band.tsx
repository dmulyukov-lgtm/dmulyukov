import { useRole } from "@/lib/role-context";
import { RoleFade } from "@/components/role-fade";
import { FadeIn } from "@/components/fade-in";

const STATS: Record<"qa" | "em", { value: string; label: string }[]> = {
  qa: [
    { value: "00", label: "Placeholder QA stat A" },
    { value: "00", label: "Placeholder QA stat B" },
    { value: "00", label: "Placeholder QA stat C" },
    { value: "00", label: "Placeholder QA stat D" },
  ],
  em: [
    { value: "00", label: "Placeholder EM stat A" },
    { value: "00", label: "Placeholder EM stat B" },
    { value: "00", label: "Placeholder EM stat C" },
    { value: "00", label: "Placeholder EM stat D" },
  ],
};

export function StatBand() {
  const { role } = useRole();
  const stats = STATS[role];

  return (
    <section aria-label="Key metrics" className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden bg-border/60 sm:grid-cols-4">
        {stats.map((s, i) => (
          <FadeIn key={i} delay={i * 60} className="bg-background p-6 sm:p-8">
            <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              <RoleFade>{s.value}</RoleFade>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              <RoleFade>{s.label}</RoleFade>
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
