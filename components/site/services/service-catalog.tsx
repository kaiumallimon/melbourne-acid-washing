import {
  Factory,
  FlaskConical,
  GaugeCircle,
  Hammer,
  PaintbrushVertical,
  ShieldAlert,
} from "lucide-react"

import { BodyText, Eyebrow, SectionLead, SectionTitle } from "@/components/typography"
import { SERVICES } from "@/lib/site-data"

const serviceIcons = [
  GaugeCircle,
  FlaskConical,
  ShieldAlert,
  PaintbrushVertical,
  Hammer,
  Factory,
]

export function ServiceCatalog() {
  return (
    <section className="bg-[#06112a] py-24 sm:py-28">
      <div className="mx-auto w-[min(1240px,calc(100%-1.5rem))]">
        <div className="space-y-3">
          <Eyebrow className="text-[--brand-cyan]">Service Breakdown</Eyebrow>
          <SectionTitle className="mx-auto max-w-4xl text-center text-white">
            Full-scope cleaning services tailored to your surface and site
          </SectionTitle>
          <SectionLead className="mx-auto max-w-3xl text-center text-slate-300">
            We treat each service as a controlled process, not a quick spray-and-go. The right pressure, chemistry,
            and sequence are selected based on material condition and contamination profile.
          </SectionLead>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = serviceIcons[index]

            return (
              <article key={service.slug} className="group relative border border-white/12 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/8">
                <span className="absolute left-5 top-5 h-0.5 w-10 bg-[--brand-cyan]/80" />

                <div className="space-y-3 pt-3">
                  <span className="inline-flex size-11 items-center justify-center border border-white/15 bg-white/8 text-[--brand-cyan] transition-colors duration-300 group-hover:bg-white/12">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-heading text-2xl font-semibold tracking-tight text-white">{service.title}</h3>
                  <BodyText className="text-slate-300">{service.detailDescription}</BodyText>
                </div>

                <ul className="mt-5 grid gap-2 text-sm text-slate-200">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="inline-flex items-start gap-2 border border-white/10 bg-white/5 px-3 py-2 transition-colors duration-300 group-hover:bg-white/9">
                      <span className="mt-[0.45rem] inline-block size-1.5 shrink-0 bg-[--brand-cyan]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
