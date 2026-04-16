import type { Metadata } from "next"

import { PageHero } from "@/components/site/page-hero"
import { SectionShell } from "@/components/site/section-shell"

export const metadata: Metadata = {
  title: "Privacy Policy | Melbourne Acid Washing",
  description: "How Melbourne Acid Washing collects, uses, and protects personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains how Melbourne Acid Washing handles personal information collected through our website and quote requests."
        badgeText="Last updated: April 16, 2026"
      />
      <SectionShell className="space-y-6 text-sm leading-7 text-slate-700">
        <PolicySection
          title="Information We Collect"
          paragraphs={[
            "When you submit a quote request, we may collect your name, phone number, email address, suburb, selected service, and any project details you provide.",
            "We may also receive standard technical information such as browser type and access timestamps for basic site operations and security monitoring.",
          ]}
        />
        <PolicySection
          title="How We Use Information"
          paragraphs={[
            "We use your information to respond to enquiries, prepare quotes, schedule work, and communicate about requested services.",
            "Your details may also be used to improve our customer service process and website experience.",
          ]}
        />
        <PolicySection
          title="Data Sharing"
          paragraphs={[
            "We do not sell your personal information.",
            "Information may be shared with trusted service providers only when necessary to deliver requested services or operate core business functions.",
          ]}
        />
        <PolicySection
          title="Data Security"
          paragraphs={[
            "Reasonable technical and administrative safeguards are used to protect submitted information.",
            "No method of online transmission is fully risk-free, but we take practical steps to minimize unauthorized access.",
          ]}
        />
        <PolicySection
          title="Your Rights"
          paragraphs={[
            "You may request access to, correction of, or deletion of your personal information by contacting us directly.",
            "For privacy-related enquiries, please email melbourne.acid.washing@gmail.com.",
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
