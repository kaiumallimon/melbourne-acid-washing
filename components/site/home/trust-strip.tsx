import { ShieldCheck } from "lucide-react"

import { TRUST_POINTS } from "@/lib/site-data"

export function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-[#07132b]">
      <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] flex-wrap justify-center gap-x-7 gap-y-3 py-5 md:justify-between">
        {TRUST_POINTS.map((point) => (
          <p key={point} className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-100">
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-cyan-100/14">
              <ShieldCheck className="size-3.5 text-[--brand-cyan]" />
            </span>
            {point}
          </p>
        ))}
      </div>
    </section>
  )
}
