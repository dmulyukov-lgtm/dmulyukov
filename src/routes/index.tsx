import { createFileRoute } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";

import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { StatBand } from "@/components/sections/stat-band";
import { LeadershipApproach } from "@/components/sections/leadership-approach";
import { CareerTimeline } from "@/components/sections/career-timeline";
import { SideProjects } from "@/components/sections/side-projects";
import { AINativePractice } from "@/components/sections/ai-native-practice";
import { SkillsMap } from "@/components/sections/skills-map";
import { Writing } from "@/components/sections/writing";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/sections/site-footer";

const searchSchema = z.object({
  role: fallback(z.enum(["qa", "em"]), "qa").default("qa"),
});

export const Route = createFileRoute("/")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Danis Mulyukov — QA Lead & Delivery / Engineering Manager" },
      {
        name: "description",
        content:
          "Senior tech leader with 15+ years across QA leadership and engineering delivery management.",
      },
      { property: "og:title", content: "Danis Mulyukov — QA Lead & Delivery / Engineering Manager" },
      {
        property: "og:description",
        content:
          "Senior tech leader with 15+ years across QA leadership and engineering delivery management.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <StatBand />
        <LeadershipApproach />
        <CareerTimeline />
        <SideProjects />
        <AINativePractice />
        <SkillsMap />
        <Writing />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
