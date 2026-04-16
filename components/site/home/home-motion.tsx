"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

type SectionProfile = {
  sectionFromY: number
  sectionDuration: number
  sectionStart: string
  childFromY: number
  childDuration: number
  childStagger: number
  childStart: string
  childSelector: string
  delay: number
}

const DEFAULT_PROFILE: SectionProfile = {
  sectionFromY: 52,
  sectionDuration: 0.95,
  sectionStart: "top 86%",
  childFromY: 20,
  childDuration: 0.68,
  childStagger: 0.04,
  childStart: "top 84%",
  childSelector: "h2, h3, p, a, button, article, li",
  delay: 0,
}

const HOME_PROFILES: SectionProfile[] = [
  {
    sectionFromY: 40,
    sectionDuration: 1.05,
    sectionStart: "top 100%",
    childFromY: 20,
    childDuration: 0.7,
    childStagger: 0.055,
    childStart: "top 100%",
    childSelector: "h1, h2, p, a, button",
    delay: 0.14,
  },
  {
    sectionFromY: 18,
    sectionDuration: 0.7,
    sectionStart: "top 90%",
    childFromY: 0,
    childDuration: 0,
    childStagger: 0,
    childStart: "top 90%",
    childSelector: "",
    delay: 0,
  },
  {
    sectionFromY: 72,
    sectionDuration: 1.05,
    sectionStart: "top 84%",
    childFromY: 24,
    childDuration: 0.75,
    childStagger: 0.06,
    childStart: "top 82%",
    childSelector: "h2, h3, p, a, article, li",
    delay: 0,
  },
  {
    sectionFromY: 64,
    sectionDuration: 1,
    sectionStart: "top 85%",
    childFromY: 22,
    childDuration: 0.72,
    childStagger: 0.05,
    childStart: "top 83%",
    childSelector: "h2, h3, p, article, li",
    delay: 0,
  },
  {
    sectionFromY: 52,
    sectionDuration: 0.95,
    sectionStart: "top 86%",
    childFromY: 20,
    childDuration: 0.68,
    childStagger: 0.04,
    childStart: "top 84%",
    childSelector: "h2, h3, p, button, article",
    delay: 0,
  },
  {
    sectionFromY: 46,
    sectionDuration: 0.92,
    sectionStart: "top 88%",
    childFromY: 18,
    childDuration: 0.65,
    childStagger: 0.035,
    childStart: "top 86%",
    childSelector: "h2, p, a",
    delay: 0,
  },
]

const SERVICES_PROFILES: SectionProfile[] = [
  {
    sectionFromY: 42,
    sectionDuration: 1,
    sectionStart: "top 100%",
    childFromY: 20,
    childDuration: 0.7,
    childStagger: 0.05,
    childStart: "top 100%",
    childSelector: "h1, h2, h3, p, a, button",
    delay: 0.12,
  },
  {
    sectionFromY: 66,
    sectionDuration: 1,
    sectionStart: "top 86%",
    childFromY: 22,
    childDuration: 0.7,
    childStagger: 0.045,
    childStart: "top 84%",
    childSelector: "h2, h3, p, article, li",
    delay: 0,
  },
  {
    sectionFromY: 56,
    sectionDuration: 0.95,
    sectionStart: "top 87%",
    childFromY: 20,
    childDuration: 0.68,
    childStagger: 0.04,
    childStart: "top 85%",
    childSelector: "h2, h3, p, article, li, a",
    delay: 0,
  },
  {
    sectionFromY: 44,
    sectionDuration: 0.9,
    sectionStart: "top 88%",
    childFromY: 16,
    childDuration: 0.62,
    childStagger: 0.034,
    childStart: "top 86%",
    childSelector: "h2, p, a",
    delay: 0,
  },
]

const GALLERY_PROFILES: SectionProfile[] = [
  {
    sectionFromY: 42,
    sectionDuration: 1,
    sectionStart: "top 100%",
    childFromY: 20,
    childDuration: 0.7,
    childStagger: 0.05,
    childStart: "top 100%",
    childSelector: "h1, h2, h3, p, a, button",
    delay: 0.12,
  },
  {
    sectionFromY: 48,
    sectionDuration: 0.94,
    sectionStart: "top 88%",
    childFromY: 18,
    childDuration: 0.65,
    childStagger: 0.038,
    childStart: "top 86%",
    childSelector: "h2, h3, p, a, span",
    delay: 0,
  },
  {
    sectionFromY: 44,
    sectionDuration: 0.9,
    sectionStart: "top 88%",
    childFromY: 16,
    childDuration: 0.62,
    childStagger: 0.034,
    childStart: "top 86%",
    childSelector: "h2, p, a",
    delay: 0,
  },
]

const CONTACT_PROFILES: SectionProfile[] = [
  {
    sectionFromY: 42,
    sectionDuration: 1,
    sectionStart: "top 100%",
    childFromY: 20,
    childDuration: 0.7,
    childStagger: 0.05,
    childStart: "top 100%",
    childSelector: "h1, h2, h3, p, a, button",
    delay: 0.12,
  },
  {
    sectionFromY: 54,
    sectionDuration: 0.95,
    sectionStart: "top 87%",
    childFromY: 20,
    childDuration: 0.68,
    childStagger: 0.036,
    childStart: "top 85%",
    childSelector: "h2, h3, p, a, button, input, textarea, article, label",
    delay: 0,
  },
  {
    sectionFromY: 44,
    sectionDuration: 0.9,
    sectionStart: "top 88%",
    childFromY: 16,
    childDuration: 0.62,
    childStagger: 0.034,
    childStart: "top 86%",
    childSelector: "h2, p, a",
    delay: 0,
  },
]

const LEGAL_PROFILES: SectionProfile[] = [
  {
    sectionFromY: 42,
    sectionDuration: 1,
    sectionStart: "top 100%",
    childFromY: 20,
    childDuration: 0.7,
    childStagger: 0.05,
    childStart: "top 100%",
    childSelector: "h1, h2, h3, p, a, button",
    delay: 0.12,
  },
  {
    sectionFromY: 52,
    sectionDuration: 0.94,
    sectionStart: "top 87%",
    childFromY: 18,
    childDuration: 0.66,
    childStagger: 0.032,
    childStart: "top 85%",
    childSelector: "h2, h3, p, a, article, li",
    delay: 0,
  },
  {
    sectionFromY: 44,
    sectionDuration: 0.9,
    sectionStart: "top 88%",
    childFromY: 16,
    childDuration: 0.62,
    childStagger: 0.034,
    childStart: "top 86%",
    childSelector: "h2, p, a",
    delay: 0,
  },
]

function getProfiles(pathname: string): SectionProfile[] | null {
  if (pathname === "/") return HOME_PROFILES
  if (pathname === "/services") return SERVICES_PROFILES
  if (pathname === "/gallery") return GALLERY_PROFILES
  if (pathname === "/contact") return CONTACT_PROFILES
  if (pathname === "/terms-and-conditions") return LEGAL_PROFILES
  if (pathname === "/privacy-policy") return LEGAL_PROFILES
  return null
}

export function HomeMotion() {
  const pathname = usePathname()

  useEffect(() => {
    const sectionProfiles = getProfiles(pathname)
    if (!sectionProfiles) return

    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = "smooth"

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      return () => {
        root.style.scrollBehavior = previousScrollBehavior
      }
    }

    let isUnmounted = false
    let revert = () => {}

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ])

      if (isUnmounted) return

      gsap.registerPlugin(ScrollTrigger)

      const ctx = gsap.context(() => {
        const header = document.querySelector("header")
        if (header) {
          gsap.fromTo(
            header,
            { autoAlpha: 0, y: -24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              clearProps: "transform",
            }
          )
        }

        const sections = gsap.utils.toArray<HTMLElement>("main.mobile-section-x > section")

        sections.forEach((section, index) => {
          const profile = sectionProfiles[index] ?? DEFAULT_PROFILE
          const items = profile.childSelector ? section.querySelectorAll(profile.childSelector) : []

          if (index === 0) {
            gsap.fromTo(
              section,
              { autoAlpha: 0, y: profile.sectionFromY },
              {
                autoAlpha: 1,
                y: 0,
                duration: profile.sectionDuration,
                ease: "power3.out",
                delay: profile.delay,
              }
            )

            if (items.length) {
              gsap.fromTo(
                items,
                { autoAlpha: 0, y: profile.childFromY },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: profile.childDuration,
                  ease: "power2.out",
                  stagger: profile.childStagger,
                  delay: 0.22,
                }
              )
            }

            return
          }

          gsap.fromTo(
            section,
            { autoAlpha: 0, y: profile.sectionFromY },
            {
              autoAlpha: 1,
              y: 0,
              duration: profile.sectionDuration,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: profile.sectionStart,
                toggleActions: "play none none reverse",
              },
            }
          )

          if (items.length) {
            gsap.fromTo(
              items,
              { autoAlpha: 0, y: profile.childFromY },
              {
                autoAlpha: 1,
                y: 0,
                duration: profile.childDuration,
                ease: "power2.out",
                stagger: profile.childStagger,
                scrollTrigger: {
                  trigger: section,
                  start: profile.childStart,
                  toggleActions: "play none none reverse",
                },
              }
            )
          }
        })

        const footer = document.querySelector("footer")
        if (footer) {
          const footerItems = footer.querySelectorAll("h2, p, a, nav, img, [class*='grid'], [class*='col-span']")

          gsap.fromTo(
            footer,
            { autoAlpha: 0, y: 52 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: footer,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          )

          if (footerItems.length) {
            gsap.fromTo(
              footerItems,
              { autoAlpha: 0, y: 16 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.55,
                ease: "power2.out",
                stagger: 0.022,
                scrollTrigger: {
                  trigger: footer,
                  start: "top 88%",
                  toggleActions: "play none none reverse",
                },
              }
            )
          }
        }
      }, document.body)

      ScrollTrigger.refresh()
      revert = () => ctx.revert()
    })()

    return () => {
      isUnmounted = true
      revert()
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [pathname])

  return null
}