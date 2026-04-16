import Link from "next/link"
import { Clock3, Mail, MapPin, PhoneCall } from "lucide-react"
import { FaFacebookF, FaWhatsapp } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi"
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
    <div className="relative h-full overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(160deg,#f5f9ff_0%,#eff5fc_52%,#e8f0fa_100%)] p-5 sm:p-6 md:p-8 lg:border-b-0 lg:border-r">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(52,108,141,0.14),transparent_55%)]" />

      <div className="relative flex h-full flex-col">
        <div className="space-y-4">
          <SectionTitle className="text-[#0f2038]">Get in touch</SectionTitle>
          <BodyText className="max-w-xl text-slate-600">
            We are Melbourne specialists in acid washing and pressure cleaning. Share your job details and our team
            will provide clear guidance and a practical quote.
          </BodyText>
        </div>

        <div className="mt-8 space-y-3.5">
          <InfoRow icon={<MapPin className="size-4" />} label="Service Area" value={SERVICE_AREA} />
          <InfoRow icon={<PhoneCall className="size-4" />} label="Phone / WhatsApp" value={PHONE_NUMBER_DISPLAY} />
          <InfoRow icon={<Mail className="size-4" />} label="Email" value={CONTACT_EMAIL} />
          <InfoRow icon={<Clock3 className="size-4" />} label="Hours" value="Mon-Sat: 7:00 AM - 6:00 PM | Sun: By appointment" />
        </div>

        <div className="mt-auto flex w-full flex-col gap-3 border-t border-slate-200/70 pt-7">
          <a
            href={WHATSAPP_URL}
            className={cn(
              buttonVariants({ size: "sm" }),
              "h-11 w-full rounded-full border border-transparent bg-primary px-4 text-white hover:bg-primary/85"
            )}
          >
            <FaWhatsapp className="size-4" />
            WhatsApp Us
          </a>
          <a
            href={PHONE_NUMBER_LINK}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "h-11 w-full rounded-full border-slate-300 bg-white px-4 text-slate-700 hover:border-primary/30 hover:bg-[--brand-ice]"
            )}
          >
            <FiPhoneCall className="size-4" />
            Call Us
          </a>
          <Link
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "h-11 w-full rounded-full border-slate-300 bg-white px-4 text-slate-700 hover:border-primary/30 hover:bg-[--brand-ice]"
            )}
          >
            <FaFacebookF className="size-4" />
            Facebook Page
          </Link>
        </div>
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
    <div className="grid grid-cols-[2.25rem_1fr] items-start gap-3 border border-slate-200/75 bg-white/75 px-3 py-3 backdrop-blur-sm">
      <span className="inline-flex size-9 shrink-0 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">{label}</p>
        <p className="mt-1 wrap-break-word text-sm font-semibold leading-6 text-[--brand-ink]">{value}</p>
      </div>
    </div>
  )
}
