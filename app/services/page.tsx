import type { Metadata } from "next"

import { HomeCta } from "@/components/site/home/home-cta"
import { PageHero } from "@/components/site/page-hero"
import { PricingGuide } from "@/components/site/services/pricing-guide"
import { ServiceCatalog } from "@/components/site/services/service-catalog"

export const metadata: Metadata = {
  title: "Services | Melbourne Acid Washing",
  description:
    "Pressure cleaning, acid washing, stain treatment, and commercial exterior cleaning services across Melbourne.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Professional cleaning services for residential, commercial, and industrial surfaces"
        description="From deep driveway restoration to large-site industrial cleaning, each service is delivered with controlled technique and practical communication."
        badgeText="Free quotes across Melbourne"
      />
      <ServiceCatalog />
      <PricingGuide />
      <HomeCta />
    </>
  )
}
