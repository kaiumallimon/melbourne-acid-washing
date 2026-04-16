import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { DisplayTitle, Eyebrow, SectionLead } from "@/components/typography"
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function GalleryHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-300/60 bg-white pb-16 pt-28 md:pb-30 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(52,108,141,0.12),transparent_50%)]" />

      <div className="mx-auto flex w-[min(1240px,calc(100%-1.5rem))] flex-col items-start">
        <DisplayTitle className="mt-3 max-w-5xl text-balance text-[#0f172f] md:text-5xl lg:text-6xl">
          Before and after outcomes from real Melbourne cleaning projects.
        </DisplayTitle>
        <SectionLead className="mt-5 max-w-4xl text-slate-600">
          Browse restoration examples across driveways, brick and render facades, patios, and commercial surfaces to
          see the finish quality and consistency we deliver on-site.
        </SectionLead>

        <div className="mt-8 flex w-full flex-col items-start gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <Link
            href="/contact"
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-6 py-2 font-semibold text-white transition-all duration-300 hover:border hover:border-primary hover:bg-transparent hover:text-primary sm:w-auto"
            )}
          >
            Request Free Quote
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