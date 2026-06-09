import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

type Entry = {
  title: string;
  company: string;
  period: string;
  context: string;
  bullets: string[];
  defaultOpen?: boolean;
};

const ENTRIES: Entry[] = [
  {
    title: "Delivery / Engineering Manager & QA Lead",
    company: "Qligent Corp.",
    period: "Oct 2023 – Present · Podgorica, Montenegro",
    context:
      "Broadcast / media delivery monitoring — QoS/QoE, compliance, recording & analytics.",
    bullets: [
      "Built a Playwright/TypeScript E2E automation practice from scratch; cut regression effort and cycle time ~60% and moved the team from manual-only toward full-stack QA.",
      "Ran a lean R&D team end to end (3 devs across BE/FE/Probe, 2 QA, DevOps, tech writer), covering analyst/PO work and consolidating fragmented expectations into one delivery plan.",
      "Led deep production RCA: traced a North American customer's video-wall crashes through HAR → CDP → Wireshark/PCAP → raw recordings to a manifest codec-change root cause; escalation closed with strong customer feedback.",
    ],
    defaultOpen: true,
  },
  {
    title: "QA Lead",
    company: "Suretter Software",
    period: "Feb 2023 – Oct 2023 · Almaty, Kazakhstan",
    context: "Full-cycle camera design house — embedded imaging, computer vision.",
    bullets: [
      "Restored local QA manageability after the company's relocation, keeping lab- and physical-device-dependent testing inside the delivery contour.",
      "Led QA across embedded software, camera firmware/hardware, image quality, and iOS/Android camera-control apps under CMMI Level 4.",
    ],
  },
  {
    title: "Head of Test Organization / Test Manager",
    company: "M.Video",
    period: "Sep 2021 – Jan 2023 · Full remote",
    context:
      "Russia's largest consumer-electronics marketplace — $6.47B revenue, ~71M monthly visitors.",
    bullets: [
      "Led an 80+ QA contour across 12 product streams and 12 QA leads (functional, regression, automation, performance) in a matrix model.",
      "Built a QA metrics system in Grafana (lead time, delivery frequency, escaped defects, regression cost, rollback rate, automation coverage), making quality a shared management language.",
      "Grew integral UI performance 20% → 35%, moving the site 7th → 4th among local competitors.",
      "Preserved all QA functions through a 3x budget cut and replaced the performance vendor in 3 months.",
    ],
  },
  {
    title: "Head of QA",
    company: "Business Logic / Logika Biznesa (Aplana group)",
    period: "Sep 2014 – Sep 2021",
    context: "Leading Russian ECM vendor & integrator.",
    bullets: [
      "Built the Testing Center / QA CoE from an outsourced model to 52 in-house specialists in 3 years; cut QA-function cost 2.5x with no quality loss.",
      "Designed a grading system and rate-card from scratch; owned department budget, staffing pyramid, and project margin.",
      "Grew the entire management layer internally — 4 test managers / QA leads + an automation tech lead — from a junior base.",
      "Delivered as PM / Scrum Master: Rosneft ECM and an RFRIT-funded product (4 milestones on time).",
    ],
  },
  {
    title: "QA Lead / QA Manager",
    company: "Aplana Development Center",
    period: "Dec 2011 – Sep 2014",
    context: "Software development & integration, 500+ engineers.",
    bullets: [
      "Stood up a documented company-wide testing procedure and the Testing Center as an internal QA CoE; grew the team 5 → 20 and added full in-house automation and load-testing capability.",
    ],
  },
  {
    title: "Technical Writer → Project Administrator",
    company: "DataTech (I.T. Co. group)",
    period: "Nov 2008 – Dec 2011",
    context: "Multi-profile IT holding.",
    bullets: [
      "Career foundation: moved from technical writing into delivery coordination — managing analysts, testers and implementation specialists, and bringing systems through formal customer acceptance.",
    ],
  },
];

export function CareerTimeline() {
  return (
    <section id="career" aria-labelledby="career-heading" className="border-t border-border/60 bg-muted/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Career</p>
          <h2 id="career-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            15+ years, two angles
          </h2>
        </FadeIn>

        <ol className="relative mt-12 space-y-4 border-l border-border pl-6 sm:pl-8">
          {ENTRIES.map((e, i) => (
            <FadeIn key={i} as="li" delay={i * 50} className="relative">
              <span className="absolute -left-[33px] top-6 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[37px]" />
              <details
                open={e.defaultOpen}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow open:shadow-lift"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {e.period}
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold">{e.title}</div>
                    <div className="text-sm text-muted-foreground">{e.company}</div>
                  </div>
                  <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-4 border-t border-border/60 pt-4">
                  <p className="text-sm italic text-muted-foreground">{e.context}</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
