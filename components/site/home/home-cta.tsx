import Link from "next/link"

import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK, WHATSAPP_URL } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function HomeCta() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto w-[min(1240px,calc(100%-1.5rem))]">
        <div className="relative border border-slate-300/70 bg-[#f7f9fd] p-7 md:p-11">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-3 text-[#0f2038]">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Ready to restore your property?</p>
              <h2 className="font-heading text-3xl leading-tight font-bold md:text-5xl">
            Book your free assessment and get a practical cleaning plan.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                Tell us your surface type, location, and cleaning concerns. We will suggest the right service plan and
                provide clear pricing guidance.
              </p>
              <a href={PHONE_NUMBER_LINK} className="inline-flex text-lg font-bold tracking-wide text-primary">
                {PHONE_NUMBER_DISPLAY}
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={cn(
                  "flex items-center justify-center gap-2 py-2 font-semibold rounded-full border border-transparent bg-primary px-6 text-white hover:bg-transparent hover:border hover:border-primary hover:text-primary transition-all duration-300"
                )}
              >
                Request Free Quote
              </Link>
              <a
                href={WHATSAPP_URL}
                className={cn(
                  "flex items-center justify-center gap-2 py-2 font-semibold rounded-full border border-slate-300/85 bg-white/80 px-6 text-slate-700 hover:bg-secondary transition-all duration-300"
                )}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
