"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  BUSINESS_NAME,
  NAV_LINKS,
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
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll state for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const hasSurface = isOpen || isScrolled

  const navigateToContact = () => {
    setIsOpen(false)
    router.push("/contact")
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Dynamic Background Layer */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-300",
          hasSurface
            ? "border-b border-white/10 bg-[linear-gradient(120deg,rgba(4,11,27,0.96),rgba(10,23,51,0.94))] opacity-100 shadow-[0_20px_40px_-34px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "opacity-0"
        )}
      />

      <div className="relative mx-auto w-[min(1240px,calc(100%-1.5rem))]">
        <div className="flex h-20 items-center gap-3">
          {/* Logo Section */}
          <Link href="/" onClick={() => setIsOpen(false)} className="flex min-w-0 items-center gap-3 group">
            <Image
              src="/logo.png"
              alt={`${BUSINESS_NAME} logo`}
              width={52}
              height={52}
              className={cn(
                "size-11 rounded-full object-cover transition-all duration-300 md:size-12",
                hasSurface ? "border border-white/20" : "border border-slate-300/85"
              )}
              priority
            />
            <div className="min-w-0 hidden lg:block">
              <p
                className={cn(
                  "truncate font-heading text-base leading-none font-bold transition-colors duration-300 md:text-lg",
                  hasSurface ? "text-white" : "text-slate-900"
                )}
              >
                {BUSINESS_NAME}
              </p>
              <p
                className={cn(
                  "mt-1 truncate text-[10px] tracking-[0.15em] uppercase transition-colors duration-300 md:text-[11px]",
                  hasSurface ? "text-slate-400" : "text-slate-500"
                )}
              >
                Professional Exterior Cleaning
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 md:flex">
            {NAV_LINKS.map((link) => {
              const active = linkIsActive(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    active
                      ? hasSurface ? "text-white" : "text-slate-900"
                      : hasSurface ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  {link.label}
                  {active && (
                    <span
                      className={cn(
                        "absolute inset-x-4 bottom-1 h-0.5 rounded-full",
                        hasSurface ? "bg-[--brand-cyan]" : "bg-[--brand-blue]"
                      )}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <Button
            size={"default"}
            variant={'default'}
            onClick={navigateToContact}
            className={`ml-auto hidden px-5 hover:bg-[#5d79ff] md:inline-flex ${isScrolled ? "bg-transparent border border-muted-foreground text-white" : "bg-primary text-white shadow-sm"}`}
          >
            Get a Quote
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className={cn(
              "ml-auto inline-flex size-10 items-center justify-center rounded-full transition-all duration-300 active:scale-90 md:hidden",
              hasSurface
                ? "border border-white/20 bg-white/5 text-white"
                : "border border-slate-300/85 bg-white text-slate-700 shadow-sm"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-500 md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Enhanced Mobile Sheet */}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[min(85vw,380px)] bg-slate-950/95 backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden",
          "border-l border-white/10 shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-full flex-col p-6">
          {/* Sheet Header */}
          <div className="flex items-center justify-between pb-8">
            <div className="space-y-1">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">Navigation</p>
              <div className="h-0.5 w-6 rounded-full bg-[--brand-blue]" />
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-transform active:scale-95"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Navigation Links with Staggered Slide Effect */}
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link, i) => {
              const active = linkIsActive(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
                  className={cn(
                    "group flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-medium transition-all duration-500",
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0",
                    active
                      ? "bg-white/10 text-white ring-1 ring-white/20"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {link.label}
                  <div className={cn(
                    "size-1.5 rounded-full transition-all duration-500",
                    active ? "bg-[--brand-cyan] shadow-[0_0_12px_rgba(34,211,238,0.8)]" : "bg-transparent"
                  )} />
                </Link>
              )
            })}
          </nav>

          {/* Mobile CTA Section */}
          <div className={cn(
            "mt-auto pt-10 transition-all duration-700 delay-300",
            isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Button
              type="button"
              size="lg"
              onClick={navigateToContact}
              className={cn(
                "relative w-full overflow-hidden rounded-2xl bg-[--brand-blue] py-7 text-base font-bold text-white transition-all duration-300",
                "hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_40px_-12px_rgba(59,130,246,0.3)]",
                // Shimmer shine effect
                "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-150%] hover:before:translate-x-[150%] before:transition-transform before:duration-1000"
              )}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get a Free Quote
                <ArrowRight className="size-4" />
              </span>
            </Button>
            <p className="mt-4 text-center text-[11px] font-medium tracking-wide text-slate-500">
              Quick response • 7 Days a week
            </p>
          </div>
        </div>
      </aside>
    </header>
  )
}