import { ShieldCheck } from "lucide-react"

import { TRUST_POINTS } from "@/lib/site-data"

export function TrustStrip() {
  const marqueePoints = [...TRUST_POINTS, ...TRUST_POINTS]

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#07132b]">
      <div className="flex w-max items-center gap-8 py-5 pr-8 animate-[marquee_20s_linear_infinite] will-change-transform">
        {marqueePoints.map((point, index) => (
          <p key={`${point}-${index}`} className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold tracking-wide text-slate-100">
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
