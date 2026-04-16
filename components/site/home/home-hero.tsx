import Link from "next/link"
import { ArrowRight, CircleCheckBig } from "lucide-react"

import { DisplayTitle, Eyebrow, SectionLead } from "@/components/typography"
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function HomeHero() {
    return (
        <section className="relative isolate overflow-hidden pb-28 pt-35 md:pb-35 md:pt-50">
            <div className="absolute inset-x-0 top-[-12%] -z-20 h-[66%] bg-[radial-gradient(58%_58%_at_50%_55%,rgba(99,102,241,0.2),transparent_72%)]" />
            <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] flex-col items-center text-center">
                <Eyebrow className="text-primary" showDash={false}>
                    Melbourne Surface Cleaning Specialists
                </Eyebrow>
                <DisplayTitle className="mt-4 max-w-4xl text-balance text-[#0f172f] md:text-6xl lg:text-7xl">
                    Acid washing and pressure cleaning that restores serious curb appeal.
                </DisplayTitle>
                <SectionLead className="mt-6 max-w-3xl text-slate-600">
                    Residential and commercial exterior cleaning across Melbourne with detail-focused surface treatment for
                    concrete, brick, render, and stain-heavy problem areas.
                </SectionLead>

                <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                    <Link
                        href="/contact"
                        className={cn(
                            "flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-6 py-2 font-semibold text-white transition-all duration-300 hover:border hover:border-primary hover:bg-transparent hover:text-primary sm:w-auto",
                        )}
                    >
                        Get Free Quote
                        <ArrowRight className="size-4" />
                    </Link>
                    <a
                        href={PHONE_NUMBER_LINK}
                        className={cn(
                            "flex w-full items-center justify-center gap-2 rounded-full border border-slate-300/85 bg-white/80 px-6 py-2 font-semibold text-slate-700 transition-all duration-300 hover:bg-secondary sm:w-auto",
                        )}
                    >
                        Call {PHONE_NUMBER_DISPLAY}
                    </a>
                </div>

                <p className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-primary">
                    <CircleCheckBig className="size-3.5 text-primary" />
                    20% intro offer for first-time bookings this month
                </p>

            </div>

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="animate-sweep absolute bottom-12 h-px w-56 bg-linear-to-r from-transparent via-indigo-300/70 to-transparent" />

                <div className="allow-rounded animate-bob absolute bottom-19 left-[26%] size-2 bg-indigo-300/80" />
                <div className="allow-rounded animate-bob absolute bottom-24 right-[24%] size-2 bg-sky-300/80 [animation-delay:0.6s]" />

                <div className="allow-rounded animate-bob absolute bottom-30 left-[16%] size-2.5 bg-indigo-200/75 [animation-delay:0.2s]" />
                <div className="allow-rounded animate-bob absolute bottom-36 right-[14%] size-3 bg-cyan-200/75 [animation-delay:1s]" />
                <div className="allow-rounded animate-bob absolute bottom-44 left-[38%] size-1.5 bg-indigo-300/85 [animation-delay:0.45s]" />
                <div className="allow-rounded animate-bob absolute bottom-50 right-[36%] size-2 bg-sky-300/75 [animation-delay:1.2s]" />
                <div className="allow-rounded animate-bob absolute top-28 left-[20%] size-2 bg-blue-200/65 [animation-delay:0.35s]" />
                <div className="allow-rounded animate-bob absolute top-36 right-[18%] size-2.5 bg-indigo-200/70 [animation-delay:0.8s]" />
                <div className="allow-rounded animate-bob absolute top-20 right-[40%] size-1.5 bg-sky-200/70 [animation-delay:1.4s]" />
            </div>
        </section>
    )
}
