import { ShieldCheck } from "lucide-react"

import { TRUST_POINTS } from "@/lib/site-data"

export function TrustStrip() {
  return (
    <section className="border-y border-slate-100 bg-[--brand-navy]">
      <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] flex-wrap justify-center gap-x-7 gap-y-3 py-4 md:justify-between">
        {TRUST_POINTS.map((point) => (
          <p key={point} className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-white/90">
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/15">
              <ShieldCheck className="size-3.5 text-[#9bd4ed]" />
            </span>
            {point}
          </p>
        ))}
      </div>
    </section>
  )
}
