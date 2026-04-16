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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[linear-gradient(120deg,rgba(4,11,27,0.96),rgba(10,23,51,0.94))] shadow-[0_20px_40px_-34px_rgba(0,0,0,0.9)] backdrop-blur-xl">
      <div className="mx-auto w-[min(1240px,calc(100%-1.5rem))]">
        <div className="flex h-19 items-center gap-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Melbourne Acid Washing logo"
              width={52}
              height={52}
              className="size-11 rounded-full border border-white/20 object-cover md:size-12"
              priority
            />
            <div className="min-w-0">
              <p className="truncate font-heading text-base leading-none font-bold text-white md:text-lg">
                {BUSINESS_NAME}
              </p>
              <p className="truncate text-[11px] tracking-widest text-slate-300 uppercase md:text-xs">
                Professional Exterior Cleaning
              </p>
            </div>
          </Link>

          <nav className="ml-auto hidden items-center gap-2 md:flex">
            {NAV_LINKS.map((link) => {
              const active = linkIsActive(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  )}
                >
                  {link.label}
                  {active ? <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-[--brand-cyan]" /> : null}
                </Link>
              )
            })}
          </nav>

          <a
            href={PHONE_NUMBER_LINK}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden rounded-full border border-transparent bg-[--brand-blue] px-3 text-white hover:bg-[#5d79ff] md:inline-flex"
            )}
          >
            <PhoneCall className="size-4" />
            {PHONE_NUMBER_DISPLAY}
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="ml-auto inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-white/10 pb-4 md:hidden">
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
                        : "text-slate-200 hover:bg-white/10"
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
                  "mt-2 rounded-xl border border-transparent bg-[--brand-blue] text-white hover:bg-[#5d79ff]"
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
