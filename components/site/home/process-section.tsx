import { CheckCheck } from "lucide-react"

import { Eyebrow, SectionLead, SectionTitle } from "@/components/typography"
import { SectionShell } from "@/components/site/section-shell"
import { PROCESS_STEPS } from "@/lib/site-data"

export function ProcessSection() {
  return (
    <SectionShell className="space-y-9">
      <div className="space-y-3">
        <Eyebrow>Our Method</Eyebrow>
        <SectionTitle>How we deliver safe, consistent restoration results</SectionTitle>
        <SectionLead>
          Every project is completed through a structured process so quality and surface safety stay consistent from
          start to finish.
        </SectionLead>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {PROCESS_STEPS.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_34px_-30px_rgba(9,63,103,0.9)]">
            <p className="font-heading text-sm font-bold tracking-[0.2em] text-[--brand-blue] uppercase">
              Step {index + 1}
            </p>
            <h3 className="mt-2 font-heading text-2xl font-semibold text-[--brand-ink]">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[--brand-blue] uppercase">
              <CheckCheck className="size-3.5" />
              Quality checkpoint complete
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
