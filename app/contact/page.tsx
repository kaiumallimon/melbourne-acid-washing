import type { Metadata } from "next"

import { ContactDetails } from "@/components/site/contact/contact-details"
import { ContactForm } from "@/components/site/contact/contact-form"
import { ContactHero } from "@/components/site/contact/contact-hero"
import { ContactMap } from "@/components/site/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact | Melbourne Acid Washing",
  description:
    "Request a free quote for acid washing, pressure cleaning, and exterior restoration services across Melbourne.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section id="contact-form" className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-6 py-14 lg:grid-cols-[0.95fr_1.05fr]">
        <ContactDetails />
        <ContactForm />
      </section>
      <ContactMap />
    </>
  )
}
