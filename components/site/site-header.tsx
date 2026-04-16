"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, PhoneCall, X } from "lucide-react"
import { useState } from "react"

import { buttonVariants } from "@/components/ui/button"
import {
  BUSINESS_NAME,
  NAV_LINKS,
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_LINK,
} from "@/lib/site-data"
import { cn } from "@/lib/utils"

function linkIsActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/"
  }

  return pathname.startsWith(href)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 w-[min(1120px,calc(100%-1.25rem))] rounded-2xl border border-white/70 bg-white/72 shadow-[0_18px_40px_-28px_rgba(16,47,74,0.8)] backdrop-blur-xl">
        <div className="flex items-center gap-3 p-3 md:px-4 md:py-3.5">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Melbourne Acid Washing logo"
              width={52}
              height={52}
              className="size-11 rounded-full border border-sky-100 object-cover md:size-13"
              priority
            />
            <div className="min-w-0">
              <p className="truncate font-heading text-base leading-none font-bold text-[--brand-ink] md:text-lg">
                {BUSINESS_NAME}
              </p>
              <p className="truncate text-[11px] tracking-widest text-[--brand-blue] uppercase md:text-xs">
                Professional Exterior Cleaning
              </p>
            </div>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const active = linkIsActive(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-semibold transition",
                    active
                      ? "bg-[--brand-blue] text-white"
                      : "text-slate-600 hover:bg-[--brand-ice] hover:text-[--brand-ink]"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <a
            href={PHONE_NUMBER_LINK}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden rounded-full border-0 bg-[--brand-navy] px-3 text-white hover:bg-[--brand-blue] md:inline-flex"
            )}
          >
            <PhoneCall className="size-4" />
            {PHONE_NUMBER_DISPLAY}
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="ml-auto inline-flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-slate-100 px-3 pb-3 md:hidden">
            <nav className="flex flex-col gap-1 pt-2">
              {NAV_LINKS.map((link) => {
                const active = linkIsActive(pathname, link.href)

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-semibold",
                      active
                        ? "bg-[--brand-blue] text-white"
                        : "text-slate-700 hover:bg-[--brand-ice]"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a
                href={PHONE_NUMBER_LINK}
                onClick={() => setIsOpen(false)}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "mt-2 rounded-xl border-0 bg-[--brand-navy] text-white hover:bg-[--brand-blue]"
                )}
              >
                <PhoneCall className="size-4" />
                {PHONE_NUMBER_DISPLAY}
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}
