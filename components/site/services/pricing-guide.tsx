import Link from "next/link"

import { Eyebrow, SectionLead, SectionTitle } from "@/components/typography"
import { PRICING_GUIDE } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function PricingGuide() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto w-[min(1240px,calc(100%-1.5rem))]">
        <div className="space-y-3">
          <Eyebrow>Pricing Guide</Eyebrow>
          <SectionTitle className="mx-auto max-w-4xl text-center">Transparent pricing guidance before work begins</SectionTitle>
          <SectionLead className="mx-auto max-w-3xl text-center">
            Every quote is free and tailored to size, access, and surface condition. The estimates below provide a
            practical baseline for common jobs.
          </SectionLead>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PRICING_GUIDE.map((item, index) => (
            <article
              key={item.label}
              className={cn(
                "border border-slate-300/70 bg-[#f8fafe] p-5",
                index === 1 ? "border-primary/35 bg-primary/5" : ""
              )}
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase">{item.label}</p>
                <p className="font-heading text-4xl leading-none font-bold text-[--brand-ink]">{item.value}</p>
                <p className="text-sm text-slate-600">{item.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className={cn(
              "flex items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-6 py-2 font-semibold text-white transition-all duration-300 hover:border hover:border-primary hover:bg-transparent hover:text-primary"
            )}
          >
            Request a Job-Specific Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
