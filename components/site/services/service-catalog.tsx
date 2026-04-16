import {
  Check,
  Factory,
  FlaskConical,
  GaugeCircle,
  Hammer,
  PaintbrushVertical,
  ShieldAlert,
} from "lucide-react"

import { Eyebrow, SectionLead, SectionTitle } from "@/components/typography"
import { SERVICES } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const serviceIcons = [
  GaugeCircle,
  FlaskConical,
  ShieldAlert,
  PaintbrushVertical,
  Hammer,
  Factory,
]

// Alternating wide / narrow bento rhythm across a 3-column grid
const BENTO_CONFIG = [
  { col: "lg:col-span-2", featured: true },   // 0 — wide
  { col: "lg:col-span-1", featured: false },  // 1 — narrow
  { col: "lg:col-span-1", featured: false },  // 2 — narrow
  { col: "lg:col-span-2", featured: true },   // 3 — wide
  { col: "lg:col-span-2", featured: true },   // 4 — wide
  { col: "lg:col-span-1", featured: false },  // 5 — narrow
] as const

// Decorative dot grid rendered as inline SVG background
function DotGrid() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 opacity-[0.07]"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 5 }, (_, row) =>
        Array.from({ length: 5 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 16 + 8}
            cy={row * 16 + 8}
            r="1.5"
            fill="currentColor"
            className="text-primary"
          />
        ))
      )}
    </svg>
  )
}

// Corner bracket accent (top-left)
function CornerBracket({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      className={cn("shrink-0", className)}
    >
      <path
        d="M4 14V4h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ServiceCatalog() {
  return (
    <section className="bg-[#06112a] py-24 sm:py-28">
      <div className="mx-auto w-[min(1240px,calc(100%-1.5rem))]">

        {/* Section header */}
        <div className="space-y-3 text-center">
          <Eyebrow className="text-[#7db7d7]">Service Breakdown</Eyebrow>
          <SectionTitle className="mx-auto max-w-4xl text-white">
            Full-scope cleaning services tailored to your surface and site
          </SectionTitle>
          <SectionLead className="mx-auto max-w-2xl text-slate-400">
            The right pressure, chemistry, and sequence — selected for material
            condition and contamination profile, every time.
          </SectionLead>
        </div>

        {/* Bento grid */}
        <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = serviceIcons[index]
            const bento = BENTO_CONFIG[index]

            return (
              <article
                key={service.slug}
                id={service.slug}
                className={cn(
                  "group relative flex scroll-mt-28 flex-col overflow-hidden border transition-all duration-300",
                  "rounded-2xl",
                  bento.featured
                    ? [
                        "border-white/10 bg-white/4",
                        "hover:border-primary/30 hover:bg-white/[0.07]",
                        "p-7",
                      ]
                    : [
                        "border-white/8 bg-white/2.5",
                        "hover:border-white/15 hover:bg-white/5",
                        "p-6",
                      ],
                  bento.col
                )}
              >
                {/* Cyan top edge accent */}
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-px transition-opacity duration-300",
                    bento.featured
                      ? "bg-linear-to-r from-transparent via-primary/60 to-transparent opacity-100"
                      : "bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  )}
                />

                {/* Dot grid decoration (featured only) */}
                {bento.featured && <DotGrid />}

                {bento.featured ? (
                  // ——— WIDE / FEATURED CARD ———
                  <div className="flex h-full flex-col">
                    {/* Icon + label row */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/8 transition-colors duration-300 group-hover:bg-primary/15">
                          <Icon className="size-5 text-[#7db7d7]" />
                          {/* Subtle inner glow ring */}
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/10" />
                        </div>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title + tagline */}
                    <div className="mt-5 space-y-1.5">
                      <h3 className="font-heading text-[1.45rem] font-semibold leading-snug tracking-tight text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-[#7db7d7]">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {service.detailDescription}
                    </p>

                    {/* Feature grid */}
                    <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                      {service.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[13px] text-slate-300"
                        >
                          <Check className="mt-0.5 size-3.5 shrink-0 text-[#7db7d7]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  // ——— NARROW CARD ———
                  <div className="flex h-full flex-col">
                    {/* Icon + index */}
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-primary/25 group-hover:bg-primary/8">
                        <Icon className="size-4 text-slate-300 transition-colors duration-300 group-hover:text-[#7db7d7]" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title + tagline */}
                    <div className="mt-4 space-y-1">
                      <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight text-white">
                        {service.title}
                      </h3>
                      <p className="text-[13px] font-medium text-[#7db7d7]">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mt-2.5 text-[13px] leading-relaxed text-slate-500">
                      {service.detailDescription}
                    </p>

                    {/* Top 2 features only */}
                    <ul className="mt-auto pt-5 space-y-1.5">
                      {service.features.slice(0, 2).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[13px] text-slate-400"
                        >
                          <Check className="mt-0.5 size-3 shrink-0 text-[#6aa7ca]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}