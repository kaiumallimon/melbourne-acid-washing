import Link from "next/link"
import { ArrowRight, CircleCheckBig } from "lucide-react"

import { DisplayTitle, Eyebrow, SectionLead } from "@/components/typography"
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function HomeHero() {
    return (
        <section className="relative isolate overflow-hidden pb-28 pt-35 md:pb-35 md:pt-50">
            {/* Video Background */}
            <video
                src="/hero-video/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 -z-20 h-full w-full object-cover [filter:brightness(0.9)] [animation:none] [playback-rate:0.75]"
                style={{ filter: "brightness(0.85)" }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 -z-10 bg-[#0a1f35]/80" />

            {/* Subtle vignette for depth */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,15,30,0.55)_100%)]" />

            <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] flex-col items-center text-center">
                <p className="inline-flex items-center gap-2.5 bg-primary/8 px-4 py-2.5 md:py-1.5  font-heading text-[11px] font-bold tracking-[0.2em] leading-relaxed md:leading-none text-primary uppercase md:text-xs backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-primary/60" />
                    Melbourne Surface Cleaning Specialists
                    <span className="size-1.5 rounded-full bg-primary/60" />
                </p>
                <DisplayTitle className="mt-4 max-w-4xl text-balance text-white md:text-6xl lg:text-7xl">
                    Acid washing and pressure cleaning that restores serious curb appeal.
                </DisplayTitle>
                <SectionLead className="mt-6 max-w-3xl text-white/70">
                    Residential and commercial exterior cleaning across Melbourne with detail-focused surface treatment for
                    concrete, brick, render, and stain-heavy problem areas.
                </SectionLead>

                <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                    <Link
                        href="/contact"
                        className={cn(
                            "flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-6 py-2 font-semibold text-white transition-all duration-300 hover:border hover:border-white hover:bg-transparent hover:text-white sm:w-auto",
                        )}
                    >
                        Get Free Quote
                        <ArrowRight className="size-4" />
                    </Link>
                    <a
                        href={PHONE_NUMBER_LINK}
                        className={cn(
                            "flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-2 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:w-auto",
                        )}
                    >
                        Call {PHONE_NUMBER_DISPLAY}
                    </a>
                </div>

                <p className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
                    <CircleCheckBig className="size-3.5 text-primary" />
                    20% intro offer for first-time bookings this month
                </p>
            </div>

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="animate-sweep absolute bottom-12 h-px w-56 bg-linear-to-r from-transparent via-white/30 to-transparent" />

                <div className="allow-rounded animate-bob absolute bottom-19 left-[26%] size-2 bg-white/20" />
                <div className="allow-rounded animate-bob absolute bottom-24 right-[24%] size-2 bg-white/20 [animation-delay:0.6s]" />
                <div className="allow-rounded animate-bob absolute bottom-30 left-[16%] size-2.5 bg-white/15 [animation-delay:0.2s]" />
                <div className="allow-rounded animate-bob absolute bottom-36 right-[14%] size-3 bg-white/15 [animation-delay:1s]" />
                <div className="allow-rounded animate-bob absolute bottom-44 left-[38%] size-1.5 bg-white/20 [animation-delay:0.45s]" />
                <div className="allow-rounded animate-bob absolute bottom-50 right-[36%] size-2 bg-white/20 [animation-delay:1.2s]" />
                <div className="allow-rounded animate-bob absolute top-28 left-[20%] size-2 bg-white/15 [animation-delay:0.35s]" />
                <div className="allow-rounded animate-bob absolute top-36 right-[18%] size-2.5 bg-white/15 [animation-delay:0.8s]" />
                <div className="allow-rounded animate-bob absolute top-20 right-[40%] size-1.5 bg-white/20 [animation-delay:1.4s]" />
            </div>
        </section>
    )
}