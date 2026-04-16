import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, PhoneCall, ArrowRight } from "lucide-react"
import { FaFacebook } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { BodyText } from "@/components/typography"
import { Separator } from "@/components/ui/separator"
import {
  BUSINESS_NAME,
  CONTACT_EMAIL,
  NAV_LINKS,
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_LINK,
  SERVICE_AREA,
} from "@/lib/site-data"
import { cn } from "@/lib/utils"

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms" },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617] text-slate-400">
      {/* Subtle Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[0%] h-[30%] w-[30%] rounded-full bg-cyan-600/10 blur-[100px]" />
      </div>

      <div className="mx-auto w-[min(1240px,calc(100%-1.5rem))] pt-20 pb-10">
        <div className="grid gap-x-12 gap-y-16 lg:grid-cols-12">

          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <span className="inline-flex items-center justify-center transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt={BUSINESS_NAME}
                  width={100}
                  height={100}
                  className="allow-rounded border border-primary/20 size-15 object-cover md:size-20"
                />
              </span>
              <div className="min-w-0">
                <p className="truncate font-heading text-base leading-none font-bold text-white md:text-lg">
                  {BUSINESS_NAME}
                </p>
                <p className="mt-1 truncate text-[10px] tracking-[0.15em] text-slate-400 font-semibold uppercase md:text-[11px]">
                  Professional Exterior Cleaning
                </p>
              </div>
            </Link>

            <BodyText className="text-balance leading-relaxed text-slate-400">
              Restoring the brilliance of your masonry with professional acid washing and high-pressure cleaning. Melbourne’s choice for precision exterior maintenance.
            </BodyText>

            <div className="flex items-center gap-4">
              {/* Socials / Secondary CTAs */}
              <Link href="#" className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-blue-600/20 hover:text-blue-400">
                <FiInstagram className="size-5" />
              </Link>
              <Link href="#" className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-blue-600/20 hover:text-blue-400">
                <FaFacebook className="size-5" />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div className="space-y-6">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-white">Navigation</p>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="group flex items-center gap-2 text-[15px] transition hover:text-white">
                    <span className="h-px w-0 bg-blue-500 transition-all group-hover:w-3" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-white">Services</p>
              <nav className="flex flex-col gap-4 text-[15px]">
                <Link href="/services" className="hover:text-white">Acid Washing</Link>
                <Link href="/services" className="hover:text-white">Pressure Cleaning</Link>
                <Link href="/services" className="hover:text-white">Brick Restoration</Link>
                <Link href="/services" className="hover:text-white">Driveway Cleaning</Link>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="mb-6 text-xs font-bold tracking-[0.15em] text-white uppercase">Contact</p>
              <div className="space-y-3">
                <a href={PHONE_NUMBER_LINK} className="group grid grid-cols-[2.25rem_1fr] items-start gap-3 border border-white/10 bg-white/3 px-3 py-3 transition hover:border-blue-500/30 hover:bg-blue-500/8">
                  <span className="mt-0.5 flex size-9 items-center justify-center bg-white/5 text-blue-400 transition group-hover:bg-blue-500/10">
                    <PhoneCall className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase">Phone</span>
                    <span className="mt-0.5 block text-[15px] leading-6 text-slate-200 wrap-break-word group-hover:text-white">{PHONE_NUMBER_DISPLAY}</span>
                  </span>
                </a>

                <a href={`mailto:${CONTACT_EMAIL}`} className="group grid grid-cols-[2.25rem_1fr] items-start gap-3 border border-white/10 bg-white/3 px-3 py-3 transition hover:border-blue-500/30 hover:bg-blue-500/8">
                  <span className="mt-0.5 flex size-9 items-center justify-center bg-white/5 text-blue-400 transition group-hover:bg-blue-500/10">
                    <Mail className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase">Email</span>
                    <span className="mt-0.5 block break-all text-[14px] leading-6 text-slate-200 group-hover:text-white">{CONTACT_EMAIL}</span>
                  </span>
                </a>

                <div className="grid grid-cols-[2.25rem_1fr] items-start gap-3 border border-white/10 bg-white/3 px-3 py-3">
                  <span className="mt-0.5 flex size-9 items-center justify-center bg-white/5 text-blue-400">
                    <MapPin className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase">Service area</span>
                    <span className="mt-0.5 block text-[15px] leading-6 text-slate-200 wrap-break-word">{SERVICE_AREA}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-white/5 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[13px]">
              © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
            </p>

            <nav className="flex items-center gap-8">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-5 mx-auto max-w-2xl text-center">
            <p className="border border-muted-foreground px-3 py-2 inline-flex gap-1 mx-auto justify-center text-center text-sm text-slate-500 font-semibold">
              Designed and developed by{" "}
              <a
                href="https://www.neuroweb.com.au/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-primary underline-offset-4 hover:underline"
              >
                NEUROWEB
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}