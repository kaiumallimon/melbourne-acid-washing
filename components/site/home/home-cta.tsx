import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK, WHATSAPP_URL } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function HomeCta() {
  return (
    <section className="mx-auto mb-16 mt-4 w-[min(1240px,calc(100%-1.5rem))] overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(125deg,#060f22_0%,#102346_60%,#1c3a75_110%)] p-7 shadow-[0_30px_55px_-34px_rgba(0,0,0,0.95)] md:p-11">
      <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="space-y-3 text-white">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-100/85">Ready to restore your property?</p>
          <h2 className="font-heading text-3xl leading-tight font-bold md:text-5xl">
            Book your free assessment and get a practical cleaning plan.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
            Tell us your surface type, location, and cleaning concerns. We will suggest the right service plan and
            provide clear pricing guidance.
          </p>
          <a href={PHONE_NUMBER_LINK} className="inline-flex text-lg font-bold tracking-wide text-cyan-200">
            {PHONE_NUMBER_DISPLAY}
          </a>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full border border-transparent bg-[--brand-blue] px-6 text-white hover:bg-[#617dff]"
            )}
          >
            Request Free Quote
          </Link>
          <a
            href={WHATSAPP_URL}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-white/25 bg-white/5 px-6 text-white hover:bg-white/12"
            )}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
