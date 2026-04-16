import Link from "next/link"
import { ArrowRight, CircleCheckBig } from "lucide-react"

import { DisplayTitle, Eyebrow, SectionLead } from "@/components/typography"
import { buttonVariants } from "@/components/ui/button"
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function HomeHero() {
  return (
    <section className="surface-grid-dark relative isolate overflow-hidden bg-[--brand-dark] pb-28 pt-14 md:pb-32 md:pt-18">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(85%_70%_at_30%_20%,rgba(75,107,255,0.2),transparent_62%),radial-gradient(70%_55%_at_78%_14%,rgba(86,199,255,0.16),transparent_68%)]" />
      <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] flex-col items-center text-center">
        <Eyebrow className="text-[--brand-cyan]">Melbourne Surface Cleaning Specialists</Eyebrow>
        <DisplayTitle className="mt-4 max-w-4xl text-balance text-white md:text-6xl lg:text-7xl">
          Acid washing and pressure cleaning that restores serious curb appeal.
        </DisplayTitle>
        <SectionLead className="mt-6 max-w-3xl text-slate-300">
          Residential and commercial exterior cleaning across Melbourne with detail-focused surface treatment for
          concrete, brick, render, and stain-heavy problem areas.
        </SectionLead>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full border border-transparent bg-[--brand-blue] px-6 text-white hover:bg-[#5d79ff]"
            )}
          >
            Get Free Quote
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={PHONE_NUMBER_LINK}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-white/25 bg-white/8 px-6 text-white hover:bg-white/14"
            )}
          >
            Call {PHONE_NUMBER_DISPLAY}
          </a>
        </div>

        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-100/10 px-3 py-1 text-xs font-semibold text-cyan-100">
          <CircleCheckBig className="size-3.5 text-[--brand-cyan]" />
          20% intro offer for first-time bookings this month
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-2 text-xs font-medium text-slate-300">
          <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1">Licensed and insured</span>
          <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1">Melbourne-wide service</span>
          <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1">Fast quote response</span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 overflow-hidden">
        <div className="animate-ring absolute left-1/2 top-10 h-44 w-44 -translate-x-1/2 rounded-full border border-cyan-200/35" />
        <div className="animate-ring absolute left-1/2 top-16 h-58 w-58 -translate-x-1/2 rounded-full border border-blue-300/30 [animation-delay:0.35s]" />
        <div className="animate-sweep absolute bottom-14 h-0.5 w-44 bg-linear-to-r from-transparent via-cyan-200/70 to-transparent" />
        <div className="animate-bob absolute bottom-20 left-[24%] size-2 rounded-full bg-cyan-200/80" />
        <div className="animate-bob absolute bottom-26 right-[23%] size-2 rounded-full bg-blue-200/80 [animation-delay:0.6s]" />
      </div>
    </section>
  )
}
