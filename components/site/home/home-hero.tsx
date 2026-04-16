import Link from "next/link"
import { ArrowRight, CircleCheckBig } from "lucide-react"

import { DisplayTitle, Eyebrow, SectionLead } from "@/components/typography"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HOME_STATS, PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-6 md:pb-16 md:pt-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(95%_90%_at_0%_0%,rgba(143,199,229,0.45),transparent_55%),radial-gradient(80%_60%_at_90%_10%,rgba(31,111,168,0.2),transparent_62%)]" />
      <div className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-6 py-4 md:py-8">
          <Eyebrow>Melbourne Surface Cleaning Specialists</Eyebrow>
          <DisplayTitle>
            Acid washing and pressure cleaning that makes your property look newly finished.
          </DisplayTitle>
          <SectionLead>
            Reliable residential and commercial exterior cleaning across Melbourne. We specialize in concrete,
            brick, render, and stain-heavy surfaces that need expert treatment, not guesswork.
          </SectionLead>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full border-0 bg-[--brand-navy] px-5 text-white hover:bg-[--brand-blue]"
              )}
            >
              Get Free Quote
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={PHONE_NUMBER_LINK}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-slate-200 bg-white/85 px-5 text-slate-700 hover:border-sky-200 hover:bg-sky-50"
              )}
            >
              Call {PHONE_NUMBER_DISPLAY}
            </a>
          </div>
          <p className="inline-flex items-center gap-2 rounded-full bg-[--brand-ice] px-3 py-1 text-xs font-semibold text-[--brand-ink]">
            <CircleCheckBig className="size-3.5 text-[--brand-blue]" />
            20% intro offer for first-time bookings this month
          </p>
        </div>

        <Card className="border-white/65 bg-white/85 py-0 shadow-[0_24px_44px_-36px_rgba(9,63,103,0.95)]">
          <CardContent className="space-y-5 p-6 md:p-7">
            <div>
              <p className="font-heading text-2xl leading-none font-bold text-[--brand-ink]">Why clients trust us</p>
              <p className="mt-1 text-sm text-slate-600">
                Experienced operators, site-safe methods, and transparent communication from quote to finish.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {HOME_STATS.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-100 bg-white p-4">
                  <p className="font-heading text-3xl leading-none font-bold text-[--brand-blue]">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-sky-100 bg-[--brand-ice] p-4 text-sm leading-6 text-slate-700">
              We service every Melbourne suburb and schedule around your availability. Most quote requests are
              answered in under 2 hours.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
