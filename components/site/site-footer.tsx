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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040b1b] text-slate-200">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_14%_0%,rgba(75,107,255,0.22),transparent_55%)]" />
      <div className="mx-auto w-[min(1240px,calc(100%-1.5rem))] py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-5 lg:pr-8">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Melbourne Acid Washing logo"
                width={56}
                height={56}
                className="size-14 rounded-full border border-white/20 object-cover"
              />
              <div>
                <p className="font-heading text-2xl leading-none font-bold text-white">
                  {BUSINESS_NAME}
                </p>
                <p className="text-xs tracking-widest text-slate-300 uppercase">Melbourne Wide Service</p>
              </div>
            </div>
            <BodyText className="max-w-md text-slate-300">
              Trusted acid washing and pressure cleaning for homes, businesses, and industrial sites across Melbourne.
              Every job is quoted clearly and completed with care.
            </BodyText>
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_NUMBER_LINK}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                <PhoneCall className="size-4 text-cyan-300" />
                {PHONE_NUMBER_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                WhatsApp
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                <ThumbsUp className="size-4 text-cyan-300" />
                Facebook
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-heading text-lg font-semibold text-white">Solutions</p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <p className="font-heading text-lg font-semibold text-white">Support</p>
            <nav className="flex flex-col gap-2 text-sm font-medium text-slate-300">
              <a href={PHONE_NUMBER_LINK} className="transition hover:text-white">Call support</a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-white">Email support</a>
              <Link href="/contact" className="transition hover:text-white">Submit enquiry</Link>
              <a href={WHATSAPP_URL} className="transition hover:text-white">WhatsApp</a>
            </nav>
          </div>

          <div className="space-y-3">
            <p className="font-heading text-lg font-semibold text-white">Company</p>
            <nav className="flex flex-col gap-2 text-sm font-medium text-slate-300">
              <Link href="/" className="transition hover:text-white">About us</Link>
              <Link href="/services" className="transition hover:text-white">Our services</Link>
              <Link href="/gallery" className="transition hover:text-white">Project gallery</Link>
              <Link href="/contact" className="transition hover:text-white">Get a quote</Link>
            </nav>
          </div>

          <div className="space-y-3">
            <p className="font-heading text-lg font-semibold text-white">Legal</p>
            <nav className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="space-y-2 pt-3 text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-cyan-300" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-cyan-300" />
                {SERVICE_AREA}
              </p>
              <p className="flex items-start gap-2">
                <PhoneCall className="mt-0.5 size-4 shrink-0 text-cyan-300" />
                Mon-Sat: 7:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/12" />

        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
