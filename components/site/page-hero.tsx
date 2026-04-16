import { Badge } from "@/components/ui/badge"
import { Eyebrow, SectionLead, SectionTitle } from "@/components/typography"
import { cn } from "@/lib/utils"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  className?: string
  badgeText?: string
}

export function PageHero({ eyebrow, title, description, className, badgeText }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-white/60 bg-white/70", className)}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(140%_80%_at_0%_0%,rgba(143,199,229,0.38),transparent_50%),radial-gradient(100%_60%_at_90%_10%,rgba(31,111,168,0.18),transparent_55%)]" />
      <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] flex-col gap-5 py-14 md:py-18">
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle className="max-w-3xl">{title}</SectionTitle>
        <SectionLead>{description}</SectionLead>
        {badgeText ? (
          <div>
            <Badge className="rounded-full bg-[--brand-ice] px-3 py-1 text-[--brand-blue]">{badgeText}</Badge>
          </div>
        ) : null}
      </div>
    </section>
  )
}
