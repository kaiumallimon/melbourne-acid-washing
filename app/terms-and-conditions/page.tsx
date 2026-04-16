import type { Metadata } from "next"

import { PageHero } from "@/components/site/page-hero"
import { SectionShell } from "@/components/site/section-shell"

export const metadata: Metadata = {
  title: "Terms and Conditions | Melbourne Acid Washing",
  description: "Terms governing the use of Melbourne Acid Washing website and services.",
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        description="By using this website or requesting services, you agree to the following terms and conditions."
        badgeText="Last updated: April 16, 2026"
      />
      <SectionShell className="space-y-6 text-sm leading-7 text-slate-700">
        <PolicySection
          title="General Use"
          paragraphs={[
            "This website is provided for general information and service enquiry purposes.",
            "Content may be updated without notice to reflect operational or service changes.",
          ]}
        />
        <PolicySection
          title="Quotes and Pricing"
          paragraphs={[
            "All quotes are estimates based on details available at the time of assessment.",
            "Final pricing may vary if actual site conditions or scope differs from original information provided.",
          ]}
        />
        <PolicySection
          title="Service Delivery"
          paragraphs={[
            "Service timing is subject to weather, access, site readiness, and safety requirements.",
            "We reserve the right to reschedule or adjust service plans when required for safety or quality outcomes.",
          ]}
        />
        <PolicySection
          title="Liability"
          paragraphs={[
            "Reasonable care is taken during all services. Liability is limited to the extent permitted by applicable law.",
            "Customers are responsible for disclosing known surface sensitivities, previous treatments, or access limitations before work begins.",
          ]}
        />
        <PolicySection
          title="Intellectual Property"
          paragraphs={[
            "All website content, branding, and service descriptions are owned by Melbourne Acid Washing unless otherwise stated.",
            "Content may not be copied or reused for commercial purposes without written permission.",
          ]}
        />
      </SectionShell>
    </>
  )
}

type PolicySectionProps = {
  title: string
  paragraphs: string[]
}

function PolicySection({ title, paragraphs }: PolicySectionProps) {
  return (
    <section className="space-y-2 rounded-2xl border border-slate-100 bg-white p-5">
      <h2 className="font-heading text-2xl font-semibold text-[--brand-ink]">{title}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  )
}
