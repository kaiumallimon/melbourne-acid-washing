import Link from "next/link"
import { ArrowRight, CircleCheckBig } from "lucide-react"

import { DisplayTitle, Eyebrow, SectionLead } from "@/components/typography"
import { buttonVariants } from "@/components/ui/button"
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function HomeHero() {
    return (
        <section className="relative isolate overflow-hidden pb-28 pt-24 md:pb-32 md:py-45">
            <div className="absolute inset-x-0 top-[-12%] -z-20 h-[66%] bg-[radial-gradient(58%_58%_at_50%_55%,rgba(99,102,241,0.2),transparent_72%)]" />
            <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] flex-col items-center text-center">
                <Eyebrow className="text-[#5459e8]">Melbourne Surface Cleaning Specialists</Eyebrow>
                <DisplayTitle className="mt-4 max-w-4xl text-balance text-[#0f172f] md:text-6xl lg:text-7xl">
                    Acid washing and pressure cleaning that restores serious curb appeal.
                </DisplayTitle>
                <SectionLead className="mt-6 max-w-3xl text-slate-600">
                    Residential and commercial exterior cleaning across Melbourne with detail-focused surface treatment for
                    concrete, brick, render, and stain-heavy problem areas.
                </SectionLead>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/contact"
                        className={cn(
                            "flex items-center justify-center gap-2 py-2 font-semibold rounded-full border border-transparent bg-[#5459e8] px-6 text-white hover:bg-[#4b50d7]"
                        )}
                    >
                        Get Free Quote
                        <ArrowRight className="size-4" />
                    </Link>
                    <a
                        href={PHONE_NUMBER_LINK}
                        className={cn(
                            "flex items-center justify-center gap-2 py-2 font-semibold rounded-full border border-slate-300/85 bg-white/80 px-6 text-slate-700 hover:bg-white"
                        )}
                    >
                        Call {PHONE_NUMBER_DISPLAY}
                    </a>
                </div>

                <p className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-indigo-700">
                    <CircleCheckBig className="size-3.5 text-[#5459e8]" />
                    20% intro offer for first-time bookings this month
                </p>

            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 overflow-hidden">
                <div className="animate-sweep absolute bottom-12 h-px w-56 bg-linear-to-r from-transparent via-indigo-300/70 to-transparent" />
                <div className="animate-bob absolute bottom-19 left-[26%] size-2 rounded-full bg-indigo-300/80" />
                <div className="animate-bob absolute bottom-24 right-[24%] size-2 rounded-full bg-sky-300/80 [animation-delay:0.6s]" />
            </div>
        </section>
    )
}
