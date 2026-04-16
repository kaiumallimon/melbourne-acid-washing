import Link from "next/link"
import { Clock3, Mail, MapPin, PhoneCall } from "lucide-react"
import type { ReactNode } from "react"

import { BodyText, SectionTitle } from "@/components/typography"
import { buttonVariants } from "@/components/ui/button"
import {
  CONTACT_EMAIL,
  FACEBOOK_URL,
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_LINK,
  SERVICE_AREA,
  WHATSAPP_URL,
} from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function ContactDetails() {
  return (
    <div className="space-y-6">
      <SectionTitle>Get In Touch</SectionTitle>
      <BodyText>
        We are Melbourne specialists in acid washing and pressure cleaning. Call, WhatsApp, or send your request
        through the quote form and we will reply quickly with a practical recommendation.
      </BodyText>

      <div className="space-y-3">
        <InfoRow icon={<PhoneCall className="size-4" />} label="Phone / WhatsApp" value={PHONE_NUMBER_DISPLAY} />
        <InfoRow icon={<Mail className="size-4" />} label="Email" value={CONTACT_EMAIL} />
        <InfoRow icon={<MapPin className="size-4" />} label="Service Area" value={SERVICE_AREA} />
        <InfoRow icon={<Clock3 className="size-4" />} label="Hours" value="Mon-Sat: 7:00 AM - 6:00 PM | Sun: By appointment" />
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={WHATSAPP_URL}
          className={cn(
            buttonVariants({ size: "sm" }),
            "rounded-full border-0 bg-[--brand-navy] px-4 text-white hover:bg-[--brand-blue]"
          )}
        >
          WhatsApp Us
        </a>
        <a
          href={PHONE_NUMBER_LINK}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-full border-slate-200 bg-white px-4 text-slate-700 hover:border-sky-200 hover:bg-[--brand-ice]"
          )}
        >
          Call Now
        </a>
        <Link
          href={FACEBOOK_URL}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-full border-slate-200 bg-white px-4 text-slate-700 hover:border-sky-200 hover:bg-[--brand-ice]"
          )}
        >
          Facebook Page
        </Link>
      </div>
    </div>
  )
}

type InfoRowProps = {
  icon: ReactNode
  label: string
  value: string
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-3">
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-[--brand-ice] text-[--brand-blue]">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">{label}</p>
        <p className="mt-1 text-sm font-semibold text-[--brand-ink]">{value}</p>
      </div>
    </div>
  )
}
