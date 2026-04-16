import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type TypographyProps = {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "font-heading text-xs font-semibold tracking-[0.18em] text-[--brand-blue] uppercase",
        className
      )}
    >
      {children}
    </p>
  )
}

export function DisplayTitle({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-heading text-4xl leading-tight font-bold text-[--brand-ink] md:text-5xl lg:text-6xl",
        className
      )}
    >
      {children}
    </h1>
  )
}

export function SectionTitle({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-heading text-3xl leading-tight font-bold text-[--brand-ink] md:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function SectionLead({ children, className }: TypographyProps) {
  return (
    <p className={cn("max-w-3xl text-base leading-7 text-slate-600 md:text-lg", className)}>
      {children}
    </p>
  )
}

export function BodyText({ children, className }: TypographyProps) {
  return <p className={cn("text-sm leading-6 text-slate-600 md:text-base", className)}>{children}</p>
}
