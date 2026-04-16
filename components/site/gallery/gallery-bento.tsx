import Link from "next/link"

import { Eyebrow, SectionLead, SectionTitle } from "@/components/typography"
import { cn } from "@/lib/utils"

export function GalleryBento() {
  return (
    <section className="mx-auto w-[min(1120px,calc(100%-1.5rem))] py-16 md:py-20">
      <div className="space-y-3 text-center">
        <Eyebrow>Project Gallery</Eyebrow>
        <SectionTitle>Before and after gallery is coming soon</SectionTitle>
        <SectionLead className="mx-auto max-w-3xl">
          We are curating high-quality project showcases from driveway, facade, patio, and commercial cleaning work
          across Melbourne. Check back shortly to view full results.
        </SectionLead>
      </div>

      <div className="relative mt-10 overflow-hidden rounded-3xl border border-[#c8d6e8] bg-[#f4f8fc] p-6 md:p-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(52,108,141,0.16),transparent_52%),radial-gradient(100%_70%_at_100%_100%,rgba(52,108,141,0.1),transparent_56%)]" />

        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Launching Soon
          </p>

          <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#0f2f4b] md:text-4xl">
            Real project results, organized by service type
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            This section will include category filters, before-and-after comparisons, and suburb-based examples so you
            can preview outcomes similar to your property.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {["Driveway", "Brick and Render", "Patio", "Commercial"].map((item) => (
              <span
                key={item}
                className={cn(
                  "rounded-full border border-[#bfd1e4] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#2f5378]"
                )}
              >
                {item}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-transparent bg-primary px-6 py-2 font-semibold text-white transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary"
          >
            Request A Quote Instead
          </Link>
        </div>
      </div>
    </section>
  )
}
