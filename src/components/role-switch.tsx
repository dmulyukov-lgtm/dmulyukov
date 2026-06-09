import { useRole, type Role } from "@/lib/role-context";
import { cn } from "@/lib/utils";

const OPTIONS: { value: Role; label: string; short: string }[] = [
  { value: "qa", label: "QA Lead", short: "QA" },
  { value: "em", label: "Delivery / Engineering Manager", short: "EM" },
];

export function RoleSwitch({ size = "md" }: { size?: "sm" | "md" }) {
  const { role, setRole } = useRole();
  const isSm = size === "sm";

  return (
    <div
      role="radiogroup"
      aria-label="Select role view"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card p-1 shadow-soft",
        isSm ? "text-xs" : "text-sm",
      )}
    >
      {OPTIONS.map((opt) => {
        const active = role === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={`View as ${opt.label}`}
            onClick={() => setRole(opt.value)}
            className={cn(
              "rounded-full font-medium transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isSm ? "px-3 py-1.5" : "px-4 py-2",
              active
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <span aria-hidden="true">{isSm ? opt.short : opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
