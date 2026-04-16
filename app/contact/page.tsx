import type { Metadata } from "next"

import { ContactDetails } from "@/components/site/contact/contact-details"
import { ContactForm } from "@/components/site/contact/contact-form"
import { ContactMap } from "@/components/site/contact/contact-map"
import { PageHero } from "@/components/site/page-hero"

export const metadata: Metadata = {
  title: "Contact | Melbourne Acid Washing",
  description:
    "Request a free quote for acid washing, pressure cleaning, and exterior restoration services across Melbourne.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a fast, no-obligation quote for your cleaning project"
        description="Share your property details and service needs. We will respond quickly with practical recommendations and clear pricing guidance."
        badgeText="Average quote reply in under 2 hours"
      />
      <section className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-6 py-14 lg:grid-cols-[0.95fr_1.05fr]">
        <ContactDetails />
        <ContactForm />
      </section>
      <ContactMap />
    </>
  )
}
