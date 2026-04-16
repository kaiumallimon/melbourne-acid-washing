import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK, WHATSAPP_URL } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function HomeCta() {
  return (
    <section className="mx-auto mb-10 mt-4 w-[min(1120px,calc(100%-1.5rem))] overflow-hidden rounded-3xl border border-sky-200 bg-[linear-gradient(120deg,#0b3f67_0%,#1f6fa8_55%,#80c4e6_120%)] p-6 shadow-[0_25px_45px_-32px_rgba(15,47,74,0.95)] md:p-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="space-y-3 text-white">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/80">Ready to restore your property?</p>
          <h2 className="font-heading text-3xl leading-tight font-bold md:text-4xl">
            Get a no-obligation quote and expert recommendation today.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-white/85 md:text-base">
            Tell us your surface type, location, and cleaning concerns. We will suggest the right service plan and
            provide clear pricing guidance.
          </p>
          <a href={PHONE_NUMBER_LINK} className="inline-flex text-lg font-bold tracking-wide text-[#d7f1ff]">
            {PHONE_NUMBER_DISPLAY}
          </a>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full border-0 bg-white px-5 text-[--brand-ink] hover:bg-slate-100"
            )}
          >
            Request Free Quote
          </Link>
          <a
            href={WHATSAPP_URL}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-white/70 bg-transparent px-5 text-white hover:bg-white/10"
            )}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
