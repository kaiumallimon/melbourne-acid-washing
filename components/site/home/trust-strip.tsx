'use client';

import { ShieldCheck } from "lucide-react"
import { TRUST_POINTS } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function TrustStrip() {
  // We double the points to ensure enough content to fill the width
  const marqueePoints = TRUST_POINTS

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#07132b]">
      {/* Edge Fades for a premium look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#07132b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#07132b] to-transparent" />

      <div className="flex py-5">
        {/* Continuous animation container */}
        <div className="flex animate-marquee whitespace-nowrap">
          <MarqueeTrack points={marqueePoints} />
          <MarqueeTrack points={marqueePoints} />
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

function MarqueeTrack({ points, className }: { points: string[]; className?: string }) {
  return (
    <div className={cn("flex items-center gap-12 px-6", className)}>
      {points.map((point, index) => (
        <div 
          key={`${point}-${index}`} 
          className="flex shrink-0 items-center gap-3"
        >
          <div className="flex size-6 items-center justify-center rounded-full bg-cyan-500/10 ring-1 ring-cyan-500/20">
            <ShieldCheck className="size-3.5 text-cyan-400" />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase text-slate-200">
            {point}
          </span>
        </div>
      ))}
    </div>
  )
}