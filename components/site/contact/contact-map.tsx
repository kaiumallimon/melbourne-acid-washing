import { MapPin } from "lucide-react"

export function ContactMap() {
  return (
    <section className="mx-auto mt-8 w-[min(1120px,calc(100%-1.5rem))] pb-14">
      <div className="rounded-2xl border border-slate-100 bg-white p-6">
        <div className="flex min-h-56 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200 bg-[linear-gradient(140deg,rgba(143,199,229,0.2),rgba(255,255,255,0.85))] text-center">
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-[--brand-blue] shadow-sm">
            <MapPin className="size-5" />
          </span>
          <p className="font-heading text-lg font-semibold text-[--brand-ink]">Melbourne-wide on-site service</p>
          <p className="max-w-xl text-sm text-slate-600">
            We travel across all Melbourne suburbs for residential, commercial, and industrial exterior cleaning work.
          </p>
        </div>
      </div>
    </section>
  )
}
