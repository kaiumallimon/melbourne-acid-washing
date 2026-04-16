import Link from "next/link"
import {
  Factory,
  FlaskConical,
  GaugeCircle,
  Hammer,
  PaintbrushVertical,
  ShieldAlert,
} from "lucide-react"

import { BodyText, Eyebrow, SectionLead, SectionTitle } from "@/components/typography"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionShell } from "@/components/site/section-shell"
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

export function ServicesPreview() {
  return (
    <SectionShell id="services-preview" className="space-y-10">
      <div className="space-y-3">
        <Eyebrow>Core Services</Eyebrow>
        <SectionTitle>Detail-oriented cleaning plans for every surface type</SectionTitle>
        <SectionLead>
          No one-size-fits-all approach. We assess each material, contamination level, and finish requirement to
          deliver reliable, long-lasting results.
        </SectionLead>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => {
          const Icon = serviceIcons[index]

          return (
            <Card key={service.slug} className="border-slate-100 bg-white/90 shadow-[0_14px_30px_-28px_rgba(9,63,103,0.9)]">
              <CardHeader className="space-y-2">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[--brand-ice] text-[--brand-blue]">
                  <Icon className="size-5" />
                </span>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <BodyText>{service.shortDescription}</BodyText>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  {service.features.slice(0, 2).map((feature) => (
                    <li key={feature} className="inline-flex items-start gap-2">
                      <span className="mt-2 inline-block size-1.5 rounded-full bg-[--brand-blue]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Link
        href="/services"
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-fit rounded-full border-0 bg-[--brand-navy] px-6 text-white hover:bg-[--brand-blue]"
        )}
      >
        Explore All Services
      </Link>
    </SectionShell>
  )
}
