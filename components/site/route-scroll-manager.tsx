"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useRef } from "react"

function scrollStorageKey(routeKey: string) {
  return `scroll:${routeKey}`
}

export function RouteScrollManager() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const routeKey = useMemo(() => {
    const search = searchParams.toString()
    return search ? `${pathname}?${search}` : pathname
  }, [pathname, searchParams])

  const previousRouteRef = useRef<string | null>(null)
  const isHistoryNavigationRef = useRef(false)

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = "manual"

    return () => {
      window.history.scrollRestoration = previousRestoration
    }
  }, [])

  useEffect(() => {
    const markHistoryNavigation = () => {
      isHistoryNavigationRef.current = true
    }

    window.addEventListener("popstate", markHistoryNavigation)
    return () => window.removeEventListener("popstate", markHistoryNavigation)
  }, [])

  useEffect(() => {
    if (previousRouteRef.current) {
      sessionStorage.setItem(scrollStorageKey(previousRouteRef.current), String(window.scrollY))
    }

    const savedY = sessionStorage.getItem(scrollStorageKey(routeKey))

    if (isHistoryNavigationRef.current && savedY !== null) {
      window.scrollTo({ top: Number(savedY), left: 0, behavior: "auto" })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    }

    isHistoryNavigationRef.current = false
    previousRouteRef.current = routeKey
  }, [routeKey])

  useEffect(() => {
    const persistCurrentRouteScroll = () => {
      if (!previousRouteRef.current) return
      sessionStorage.setItem(scrollStorageKey(previousRouteRef.current), String(window.scrollY))
    }

    window.addEventListener("beforeunload", persistCurrentRouteScroll)
    document.addEventListener("visibilitychange", persistCurrentRouteScroll)

    return () => {
      window.removeEventListener("beforeunload", persistCurrentRouteScroll)
      document.removeEventListener("visibilitychange", persistCurrentRouteScroll)
    }
  }, [])

  return null
}