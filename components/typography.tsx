import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type TypographyProps = {
    children: ReactNode
    className?: string
}


interface EyebrowProps {
  children: React.ReactNode
  className?: string
  showDash?: boolean // Added for extra styling flexibility
}

export function Eyebrow({ children, className, showDash = true }: EyebrowProps) {
  return (
    <div className={cn("mb-3 flex w-full items-center justify-center gap-3", className)}>
      {showDash && (
        <span className="h-px w-8 bg-primary shrink-0" aria-hidden="true" />
      )}
      
      <p
        className={cn(
          "text-center font-heading text-[11px] font-bold tracking-[0.2em] text-primary leading-none uppercase md:text-xs"
        )}
      >
        {children}
      </p>
    </div>
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
