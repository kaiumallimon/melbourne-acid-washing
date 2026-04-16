import {
  Factory,
  FlaskConical,
  GaugeCircle,
  Hammer,
  PaintbrushVertical,
  ShieldAlert,
} from "lucide-react"

import { BodyText, Eyebrow, SectionLead, SectionTitle } from "@/components/typography"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionShell } from "@/components/site/section-shell"
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
    <SectionShell className="space-y-10">
      <div className="space-y-3">
        <Eyebrow>Service Breakdown</Eyebrow>
        <SectionTitle>Full-scope cleaning services tailored to your surface and site</SectionTitle>
        <SectionLead>
          We treat each service as a controlled process, not a quick spray-and-go. The right pressure, chemistry,
          and sequence are selected based on material condition and contamination profile.
        </SectionLead>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((service, index) => {
          const Icon = serviceIcons[index]

          return (
            <Card key={service.slug} className="border-slate-100 bg-white/92 py-0 shadow-[0_18px_35px_-32px_rgba(9,63,103,0.95)]">
              <CardHeader className="rounded-t-xl border-b border-slate-100 bg-[linear-gradient(120deg,#0b3f67_0%,#1f6fa8_100%)] py-4 text-white">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white/15">
                  <Icon className="size-5" />
                </span>
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-5">
                <BodyText>{service.detailDescription}</BodyText>
                <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="inline-flex items-start gap-2 rounded-xl bg-[--brand-ice] px-3 py-2">
                      <span className="mt-[0.45rem] inline-block size-1.5 rounded-full bg-[--brand-blue]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </SectionShell>
  )
}
