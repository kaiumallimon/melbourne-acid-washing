import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionShellProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function SectionShell({ children, className, id }: SectionShellProps) {
  return (
    <section id={id} className={cn("mx-auto w-[min(1120px,calc(100%-1.5rem))] py-16 md:py-20", className)}>
      {children}
    </section>
  )
}
