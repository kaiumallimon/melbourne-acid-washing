import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, PhoneCall, ThumbsUp } from "lucide-react"

import { BodyText } from "@/components/typography"
import { Separator } from "@/components/ui/separator"
import {
  BUSINESS_NAME,
  CONTACT_EMAIL,
  FACEBOOK_URL,
  NAV_LINKS,
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_LINK,
  SERVICE_AREA,
  WHATSAPP_URL,
} from "@/lib/site-data"

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-slate-200/80 bg-white/95">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_10%_100%,rgba(143,199,229,0.2),transparent_60%)]" />
      <div className="mx-auto w-[min(1120px,calc(100%-1.5rem))] py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Melbourne Acid Washing logo"
                width={56}
                height={56}
                className="size-14 rounded-full border border-sky-100 object-cover"
              />
              <div>
                <p className="font-heading text-2xl leading-none font-bold text-[--brand-ink]">
                  {BUSINESS_NAME}
                </p>
                <p className="text-xs tracking-widest text-[--brand-blue] uppercase">Melbourne Wide Service</p>
              </div>
            </div>
            <BodyText className="max-w-md">
              Trusted acid washing and pressure cleaning for homes, businesses, and industrial sites across Melbourne.
              Every job is quoted clearly and completed with care.
            </BodyText>
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_NUMBER_LINK}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50"
              >
                <PhoneCall className="size-4 text-[--brand-blue]" />
                {PHONE_NUMBER_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50"
              >
                WhatsApp
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50"
              >
                <ThumbsUp className="size-4 text-[--brand-blue]" />
                Facebook
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-heading text-lg font-semibold text-[--brand-ink]">Site</p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-[--brand-blue]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Separator className="my-3" />
            <p className="font-heading text-lg font-semibold text-[--brand-ink]">Legal</p>
            <nav className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-[--brand-blue]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <p className="font-heading text-lg font-semibold text-[--brand-ink]">Contact</p>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-[--brand-blue]" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[--brand-blue]">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[--brand-blue]" />
                {SERVICE_AREA}
              </p>
              <p>Mon-Sat: 7:00 AM - 6:00 PM</p>
              <p>Sun: By appointment</p>
            </div>
          </div>
        </div>

        <Separator className="my-7" />

        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
