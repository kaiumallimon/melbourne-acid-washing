"use client"

import { useMemo, useState } from "react"

import { Eyebrow, SectionLead, SectionTitle } from "@/components/typography"
import { Badge } from "@/components/ui/badge"
import { GALLERY_ITEMS } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const categories = ["All", "Driveway", "Brick and Render", "Patio", "Commercial"] as const

type CategoryFilter = (typeof categories)[number]

const layoutClassMap = {
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  square: "",
} as const

export function GalleryBento() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All")

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return GALLERY_ITEMS
    }

    return GALLERY_ITEMS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="mx-auto w-[min(1120px,calc(100%-1.5rem))] py-16 md:py-20">
      <div className="space-y-3">
        <Eyebrow>Project Gallery</Eyebrow>
        <SectionTitle>Bento-style before and after snapshots from Melbourne projects</SectionTitle>
        <SectionLead>
          Filter by category to preview the type of outcomes we deliver on driveways, facades, patios, and
          commercial surfaces.
        </SectionLead>
      </div>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {categories.map((category) => {
          const isActive = category === activeCategory

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide transition uppercase",
                isActive
                  ? "border-[--brand-blue] bg-[--brand-blue] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:bg-[--brand-ice]"
              )}
            >
              {category}
            </button>
          )
        })}
      </div>

      <div className="mt-7 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {filteredItems.map((item) => (
          <article
            key={`${item.title}-${item.suburb}`}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_15px_30px_-28px_rgba(9,63,103,0.95)]",
              layoutClassMap[item.layout]
            )}
          >
            <div className="grid h-full grid-cols-2 text-white">
              <div className="flex flex-col justify-between bg-[linear-gradient(140deg,#193c5d_0%,#0f2f4b_100%)] p-3">
                <p className="text-[10px] font-bold tracking-[0.18em] text-white/70 uppercase">Before</p>
                <p className="text-xs leading-5 text-white/90">{item.before}</p>
              </div>
              <div className="flex flex-col justify-between bg-[linear-gradient(135deg,#1f6fa8_0%,#83c8e6_100%)] p-3">
                <p className="text-[10px] font-bold tracking-[0.18em] text-white/70 uppercase">After</p>
                <p className="text-xs leading-5 text-white">{item.after}</p>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-linear-to-t from-black/55 to-transparent p-3 text-white">
              <div>
                <p className="font-heading text-sm leading-none font-semibold">{item.title}</p>
                <p className="mt-1 text-xs text-white/85">{item.suburb}</p>
              </div>
              <Badge className="rounded-full border-0 bg-white/18 text-[10px] uppercase">{item.category}</Badge>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
