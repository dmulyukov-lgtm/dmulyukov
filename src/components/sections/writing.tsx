import { FadeIn } from "@/components/fade-in";

type Article = {
  title: string;
  status: "upcoming";
};

const ARTICLES: Article[] = [
  {
    title: "Building an Ishikawa Diagram Builder with AI",
    status: "upcoming",
  },
];

export function Writing() {
  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="border-t border-border/60 bg-muted/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Writing</p>
          <h2 id="writing-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected essays
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Notes on quality, delivery, and building with AI.
          </p>
        </FadeIn>

        <ul className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
          {ARTICLES.map((a, i) => (
            <FadeIn key={i} as="li" delay={i * 60}>
              <div
                aria-disabled="true"
                className="flex items-center justify-between gap-4 p-5 sm:p-6"
              >
                <div>
                  <div className="font-display text-base font-medium sm:text-lg">{a.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">Essay in progress</div>
                </div>
                <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground ring-1 ring-border">
                  Coming soon
                </span>
              </div>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
