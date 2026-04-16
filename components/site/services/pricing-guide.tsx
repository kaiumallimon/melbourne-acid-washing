import Link from "next/link"

import { SectionShell } from "@/components/site/section-shell"
import { SectionLead, SectionTitle } from "@/components/typography"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PRICING_GUIDE } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function PricingGuide() {
  return (
    <section className="border-y border-slate-100 bg-white/65">
      <SectionShell className="space-y-8">
        <div className="space-y-3">
          <SectionTitle>Transparent pricing guidance before work begins</SectionTitle>
          <SectionLead>
            Every quote is free and tailored to size, access, and surface condition. The estimates below provide a
            practical baseline for common jobs.
          </SectionLead>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {PRICING_GUIDE.map((item, index) => (
            <Card
              key={item.label}
              className={cn(
                "border-slate-100 bg-white py-0",
                index === 1 ? "border-[--brand-blue]/35 shadow-[0_20px_40px_-35px_rgba(9,63,103,0.9)]" : ""
              )}
            >
              <CardContent className="space-y-2 p-5">
                <p className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase">{item.label}</p>
                <p className="font-heading text-4xl leading-none font-bold text-[--brand-ink]">{item.value}</p>
                <p className="text-sm text-slate-600">{item.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-fit rounded-full border-0 bg-[--brand-navy] px-5 text-white hover:bg-[--brand-blue]"
          )}
        >
          Request a Job-Specific Quote
        </Link>
      </SectionShell>
    </section>
  )
}
