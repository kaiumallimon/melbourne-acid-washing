import type { Metadata } from "next"

import { ContactCta } from "@/components/site/contact/contact-cta"
import { ContactDetails } from "@/components/site/contact/contact-details"
import { ContactForm } from "@/components/site/contact/contact-form"
import { ContactHero } from "@/components/site/contact/contact-hero"

export const metadata: Metadata = {
  title: "Contact | Melbourne Acid Washing",
  description:
    "Request a free quote for acid washing, pressure cleaning, and exterior restoration services across Melbourne.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section id="contact-form" className="mx-auto w-[min(1240px,calc(100%-1.5rem))] py-14 md:py-18">
        <div className="overflow-hidden border border-slate-300/75 bg-white shadow-[0_22px_45px_-32px_rgba(9,63,103,0.5)] lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <ContactDetails />
          <ContactForm />
        </div>
      </section>
      <ContactCta />
    </>
  )
}
