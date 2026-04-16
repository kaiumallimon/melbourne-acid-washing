import { Sparkles } from "lucide-react"

import { BodyText, Eyebrow, SectionLead, SectionTitle } from "@/components/typography"
import { SectionShell } from "@/components/site/section-shell"

export function WhyChooseUs() {
  return (
    <SectionShell className="space-y-9">
      <div className="space-y-3">
        <Eyebrow>Why Choose Us</Eyebrow>
        <SectionTitle>Built for trust: communication, safety, and accountable results</SectionTitle>
        <SectionLead>
          Homeowners and business operators rely on us because we prioritize clear expectations and professional,
          respectful service from first call to final inspection.
        </SectionLead>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Surface-safe methods",
              text: "Pressure levels, dwell time, and chemistry are calibrated for your exact surface material.",
            },
            {
              title: "Reliable project communication",
              text: "You get practical updates, realistic timing, and transparent advice on expected outcomes.",
            },
            {
              title: "Commercial-ready workflow",
              text: "Risk-aware planning for business sites with access requirements and scheduling windows.",
            },
            {
              title: "Clean finish consistency",
              text: "We avoid patchy results by cleaning in controlled stages and checking finish balance live.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_30px_-26px_rgba(9,63,103,0.8)]"
            >
              <h3 className="font-heading text-xl font-semibold text-[--brand-ink]">{item.title}</h3>
              <BodyText className="mt-2">{item.text}</BodyText>
            </article>
          ))}
        </div>

        <aside className="rounded-2xl border border-sky-100 bg-[--brand-ice] p-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[--brand-blue] uppercase">
            <Sparkles className="size-3.5" />
            Client feedback
          </p>
          <blockquote className="mt-4 font-heading text-2xl leading-tight font-semibold text-[--brand-ink]">
            Our driveway and frontage looked years newer in one visit. The team was quick, careful, and honest about
            every step.
          </blockquote>
          <p className="mt-3 text-sm font-semibold text-slate-600">- Residential client, South Yarra</p>
        </aside>
      </div>
    </SectionShell>
  )
}
