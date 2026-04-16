import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { DisplayTitle, Eyebrow, SectionLead } from "@/components/typography"
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden pb-22 pt-30 md:pb-28 md:pt-40">
      <div className="absolute inset-x-0 top-[-10%] -z-20 h-[70%] bg-[radial-gradient(58%_58%_at_50%_55%,rgba(99,102,241,0.18),transparent_72%)]" />

      <div className="mx-auto flex w-[min(1240px,calc(100%-1.5rem))] flex-col items-center text-center">
        <Eyebrow className="text-primary" showDash={false}>
          Services
        </Eyebrow>
        <DisplayTitle className="mt-4 max-w-5xl text-balance text-[#0f172f] md:text-6xl lg:text-7xl">
          Professional cleaning services for residential, commercial, and industrial surfaces.
        </DisplayTitle>
        <SectionLead className="mt-6 max-w-3xl text-slate-600">
          From deep driveway restoration to large-site industrial cleaning, each service is delivered with controlled
          technique and practical communication.
        </SectionLead>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <Link
            href="/contact"
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-6 py-2 font-semibold text-white transition-all duration-300 hover:border hover:border-primary hover:bg-transparent hover:text-primary sm:w-auto"
            )}
          >
            Get Free Quote
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={PHONE_NUMBER_LINK}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-full border border-slate-300/85 bg-white/80 px-6 py-2 font-semibold text-slate-700 transition-all duration-300 hover:bg-secondary sm:w-auto"
            )}
          >
            Call {PHONE_NUMBER_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
