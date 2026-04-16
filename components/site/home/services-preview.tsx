import Link from "next/link"
import { FlaskConical, GaugeCircle, ShieldAlert } from "lucide-react"

import { Eyebrow } from "@/components/typography"
import { buttonVariants } from "@/components/ui/button"
import { SERVICES } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function ServicesPreview() {
  const pressureService = SERVICES[0]
  const acidService = SERVICES[1]
  const stainService = SERVICES[2]
  const commercialService = SERVICES[5]

  return (
    <section id="services-preview" className="surface-grid-dark bg-[#040b1b] py-24 sm:py-28">
      <div className="mx-auto w-[min(1240px,calc(100%-1.5rem))]">
        <Eyebrow className="text-center text-[--brand-cyan]">Core Capabilities</Eyebrow>
        <p className="mx-auto mt-2 max-w-3xl text-center font-heading text-4xl leading-tight font-semibold text-white sm:text-5xl">
          A modern workflow for deep exterior surface restoration
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-slate-300">
          We use tuned pressure, controlled chemistry, and staged quality checks to deliver consistent before-and-after
          outcomes across residential and commercial properties.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <article className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-2xl bg-[#111c33] lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-semibold tracking-tight text-white max-lg:text-center">
                  {pressureService.title}
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300 max-lg:text-center">
                  {pressureService.shortDescription}
                </p>
              </div>
              <div className="relative min-h-[360px] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[4.2rem] border-8 border-[#2a3753] bg-[#0a1328] outline outline-white/20">
                  <div className="grid h-full grid-cols-2">
                    <div className="flex flex-col justify-between bg-[linear-gradient(145deg,#26344f_0%,#182238_100%)] p-4 text-white">
                      <p className="text-[10px] tracking-[0.2em] text-slate-300 uppercase">Before</p>
                      <p className="text-xs text-slate-200">Oil, grime, algae, and embedded dust</p>
                    </div>
                    <div className="flex flex-col justify-between bg-[linear-gradient(145deg,#3550a8_0%,#47b4ef_100%)] p-4 text-white">
                      <p className="text-[10px] tracking-[0.2em] text-cyan-100 uppercase">After</p>
                      <p className="text-xs">Restored texture and brighter surface finish</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
          </article>

          <article className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-2xl bg-[#111c33] max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white max-lg:justify-center">
                  <GaugeCircle className="size-5 text-[--brand-cyan]" />
                  {acidService.title}
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300 max-lg:text-center">
                  {acidService.shortDescription}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 pb-8 pt-10 sm:px-10 lg:pb-2">
                <div className="w-full max-w-xs space-y-2">
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[88%] rounded-full bg-[--brand-cyan]" />
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[74%] rounded-full bg-[#6885ff]" />
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[93%] rounded-full bg-[#87d7ff]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </article>

          <article className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-2xl bg-[#111c33]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white max-lg:justify-center">
                  <ShieldAlert className="size-5 text-[--brand-cyan]" />
                  Surface safety
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300 max-lg:text-center">
                  Controlled method selection keeps delicate materials protected while removing heavy contamination.
                </p>
              </div>
              <div className="flex flex-1 items-center px-8 py-6 lg:pb-2">
                <ul className="space-y-2 text-sm text-slate-200">
                  {stainService.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="inline-flex items-center gap-2">
                      <span className="inline-block size-1.5 rounded-full bg-[--brand-cyan]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm outline outline-white/15" />
          </article>

          <article className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-2xl bg-[#111c33] max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white max-lg:justify-center">
                  <FlaskConical className="size-5 text-[--brand-cyan]" />
                  {commercialService.title}
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300 max-lg:text-center">
                  {commercialService.shortDescription}
                </p>
              </div>
              <div className="relative min-h-[360px] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-[#0b152b] outline outline-white/10">
                  <div className="flex border-b border-white/10 bg-[#0c1933] px-3 py-2 text-xs font-semibold text-slate-300">
                    <span className="rounded-md bg-white/10 px-2 py-1 text-white">cleaningPlan.ts</span>
                    <span className="px-2 py-1 text-slate-400">siteChecklist.ts</span>
                  </div>
                  <div className="space-y-2 px-4 py-4 font-mono text-xs text-slate-200">
                    <p>const plan = inspectSurface(site)</p>
                    <p>applyTreatment(plan)</p>
                    <p>pressureClean(plan)</p>
                    <p>verifyFinishConsistency()</p>
                    <p>handoverReport()</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </article>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/services"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full border border-white/20 bg-white/8 px-6 text-white hover:bg-white/14"
            )}
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
