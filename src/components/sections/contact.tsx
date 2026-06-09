import { Download, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-14">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
            <h2
              id="contact-heading"
              className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Let's talk
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Open to QA leadership, delivery, and engineering management conversations — full-time
              roles, advisory, or a quick exchange of ideas.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/danis-mulyukov/"
                target="_top"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="mailto:d.mulyukov@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="CV PDF coming soon"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-muted-foreground opacity-60"
              >
                <Download className="h-4 w-4" /> Download CV
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
