import Link from "next/link"
import { Check } from "lucide-react"

import { Eyebrow, SectionLead, SectionTitle } from "@/components/typography"
import { PRICING_GUIDE } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const planFeatures = [
  [
    "Driveway, path, or patio refresh",
    "General stain and grime removal",
    "Surface-safe pressure settings",
    "Standard quality walkthrough",
  ],
  [
    "Larger area or heavier contamination",
    "Targeted pre-treatment included",
    "Detailed edge and joint cleaning",
    "Priority scheduling availability",
  ],
  [
    "Commercial-grade site treatment",
    "Advanced stain remediation",
    "High-access and large-zone coverage",
    "Dedicated scope and completion report",
  ],
] as const

export function PricingGuide() {
  return (
    <section className="bg-[#06112a] py-24 sm:py-28">
      <div className="mx-auto w-[min(1240px,calc(100%-1.5rem))]">
        <div className="space-y-3">
          <Eyebrow className="text-[--brand-cyan]">Pricing</Eyebrow>
          <SectionTitle className="mx-auto max-w-4xl text-center text-white">Transparent pricing guidance before work begins</SectionTitle>
          <SectionLead className="mx-auto max-w-3xl text-center text-slate-300">
            Every quote is free and tailored to size, access, and surface condition. The estimates below provide a
            practical baseline for common jobs.
          </SectionLead>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PRICING_GUIDE.map((item, index) => (
            <article
              key={item.label}
              className={cn(
                "flex flex-col border border-white/12 bg-white/5 p-6 backdrop-blur-sm",
                index === 1 ? "border-primary/45 bg-white/8 lg:-translate-y-5" : ""
              )}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xl font-bold text-white">{item.label}</p>
                  {index === 1 ? (
                    <span className="border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                      Most popular
                    </span>
                  ) : null}
                </div>

                <p className="text-sm leading-7 text-slate-300">{item.note}</p>

                <p className="font-heading text-5xl leading-none font-bold text-white">{item.value}</p>

                <ul className="space-y-2 pt-2 text-sm text-slate-200">
                  {planFeatures[index].map((feature) => (
                    <li key={feature} className="inline-flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={cn(
                  "mt-6 inline-flex w-full items-center justify-center border px-4 py-2 font-semibold transition-all duration-300",
                  index === 1
                    ? "border-transparent bg-primary text-white hover:bg-primary/85"
                    : "border-white/12 bg-white/8 text-white hover:bg-white/14"
                )}
              >
                Get quote
              </Link>
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
