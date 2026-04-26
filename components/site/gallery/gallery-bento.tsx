import Image from "next/image"
import Link from "next/link"

import { Eyebrow, SectionLead, SectionTitle } from "@/components/typography"

const galleryItems = [
  {
    id: 1,
    src: "/work-demo/image-1.png",
    alt: "Before and after acid washing – Project 1",
  },
  {
    id: 2,
    src: "/work-demo/image-2.png",
    alt: "Before and after acid washing – Project 2",
  },
  {
    id: 3,
    src: "/work-demo/image-3.png",
    alt: "Before and after acid washing – Project 3",
  },
  {
    id: 4,
    src: "/work-demo/image-4.png",
    alt: "Before and after acid washing – Project 4",
  },
  {
    id: 5,
    src: "/work-demo/image-5.png",
    alt: "Before and after acid washing – Project 5",
  },
]

export function GalleryBento() {
  return (
    <section className="mx-auto max-w-6xl py-16 md:py-24">
      {/* Header */}
      <div className="space-y-3 text-center">
        <Eyebrow>Project Gallery</Eyebrow>
        <SectionTitle>Real results from our clients</SectionTitle>
        <SectionLead className="mx-auto max-w-3xl">
          Every image shows a genuine before-and-after from our acid washing work across driveways, facades, patios,
          and commercial properties throughout Melbourne.
        </SectionLead>
      </div>

      {/* Gallery */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-3xl border border-[#c8d6e8]/80 bg-[#f4f8fc] shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#346c8d]/10"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                width={0}
                height={0}
                sizes="(max-width: 640px) 100vw, (max-width: 1120px) 50vw, 560px"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            {/* Hover overlay — subtle dark vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f2f4b]/40 via-[#0f2f4b]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Before · After badge */}
            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 backdrop-blur-md transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/25">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white drop-shadow-sm">
                Before · After
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary/90" />
            </div>

            {/* Index number — subtle corner detail */}
            <div className="absolute bottom-4 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-[10px] font-bold text-white">0{index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#c8d6e8]/80 bg-[#f4f8fc] px-8 py-8 shadow-sm md:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(52,108,141,0.14),transparent_52%),radial-gradient(100%_70%_at_100%_100%,rgba(52,108,141,0.09),transparent_56%)]" />

        {/* Decorative top line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div className="space-y-1">
            <p className="font-heading text-xl font-bold tracking-tight text-[#0f2f4b]">
              Want results like these for your property?
            </p>
            <p className="text-sm leading-relaxed text-slate-500">
              Get a free, no-obligation quote — we service all Melbourne suburbs.
            </p>
          </div>
          <Link
            href="/contact"
            className="group/btn inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-7 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary hover:shadow-none"
          >
            Request A Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}