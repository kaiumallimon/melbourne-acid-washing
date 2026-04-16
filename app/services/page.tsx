import type { Metadata } from "next"

import { HomeCta } from "@/components/site/home/home-cta"
import { PricingGuide } from "@/components/site/services/pricing-guide"
import { ServiceCatalog } from "@/components/site/services/service-catalog"
import { ServicesHero } from "@/components/site/services/services-hero"

export const metadata: Metadata = {
  title: "Services | Melbourne Acid Washing",
  description:
    "Pressure cleaning, acid washing, stain treatment, and commercial exterior cleaning services across Melbourne.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCatalog />
      <PricingGuide />
      <HomeCta />
    </>
  )
}
