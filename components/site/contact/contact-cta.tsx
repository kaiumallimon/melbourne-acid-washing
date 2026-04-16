import Link from "next/link"

import { CONTACT_EMAIL, PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK, WHATSAPP_URL } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function ContactCta() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-[min(1240px,calc(100%-1.5rem))]">
        <div className="relative border border-slate-300/70 bg-[#f7f9fd] p-7 md:p-11">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-3 text-[#0f2038]">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Need a faster response?</p>
              <h2 className="font-heading text-3xl leading-tight font-bold md:text-5xl">
                Talk to our team directly for urgent quote requests.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                For urgent cleans or time-sensitive site access, call or WhatsApp us and we will help you lock in the
                right service plan quickly.
              </p>
              <div className="space-y-1 text-sm text-slate-600 md:text-base">
                <p>
                  Call: <a href={PHONE_NUMBER_LINK} className="font-bold text-primary">{PHONE_NUMBER_DISPLAY}</a>
                </p>
                <p>
                  Email: <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-primary">{CONTACT_EMAIL}</a>
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <a
                href={PHONE_NUMBER_LINK}
                className={cn(
                  "flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-6 py-2 font-semibold text-white transition-all duration-300 hover:border hover:border-primary hover:bg-transparent hover:text-primary sm:w-auto"
                )}
              >
                Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                className={cn(
                  "flex w-full items-center justify-center gap-2 rounded-full border border-slate-300/85 bg-white/80 px-6 py-2 font-semibold text-slate-700 transition-all duration-300 hover:bg-secondary sm:w-auto"
                )}
              >
                WhatsApp Us
              </a>
              <Link
                href="/services"
                className={cn(
                  "flex w-full items-center justify-center gap-2 rounded-full border border-slate-300/85 bg-white/80 px-6 py-2 font-semibold text-slate-700 transition-all duration-300 hover:bg-secondary sm:w-auto"
                )}
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}