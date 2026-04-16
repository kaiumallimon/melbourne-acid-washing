import Link from "next/link"

import { SectionLead, SectionTitle } from "@/components/typography"
import { cn } from "@/lib/utils"

const PRICING_CARDS = [
  {
    label: "Driveway",
    pricePrefix: "From",
    price: "$150",
    priceSuffix: "/ single",
    description: "Standard single driveway pressure clean",
    features: [
      "Concrete, paver, or exposed aggregate clean",
      "Oil and rust pre-treatment where required",
      "Edges, joints, and full rinse-down finish",
    ],
    featured: false,
  },
  {
    label: "Home Exterior",
    pricePrefix: "From",
    price: "$350",
    priceSuffix: "/ home",
    description: "Full exterior wash including brick & render",
    features: [
      "Soft and medium-pressure facade wash",
      "Brick, render, and cladding safe process",
      "Mould, algae, and weather staining treatment",
    ],
    featured: true,
  },
  {
    label: "Commercial",
    pricePrefix: "",
    price: "POA",
    priceSuffix: "/ site",
    description: "Custom quotes for commercial sites",
    features: [
      "Warehouses, retail fronts, and service yards",
      "After-hours scheduling to reduce disruption",
      "Ongoing maintenance plans for large sites",
    ],
    featured: false,
  },
] as const

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <circle cx="8" cy="8" r="8" className="fill-current opacity-10" />
      <path
        d="M4.75 8.25L6.75 10.25L11.25 5.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PricingGuide() {
  return (
    <section className="bg-[#e8edf3] py-20 sm:py-28">
      <div className="mx-auto w-[min(1120px,calc(100%-1.5rem))]">

        {/* Header */}
        <div className="space-y-3 text-center">
          <SectionTitle className="text-[#0c3a6a] md:text-6xl">
            Transparent Pricing
          </SectionTitle>
          <SectionLead className="mx-auto max-w-2xl text-[#3d5f82]">
            All quotes are free — prices vary by job size and condition.
            Call or message for your personalised quote.
          </SectionLead>
        </div>

        {/* Cards */}
        <div className="mt-14 grid items-end gap-4 md:grid-cols-3">
          {PRICING_CARDS.map((card) => (
            <article
              key={card.label}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-white px-7 py-8 transition-shadow duration-300 hover:shadow-lg",
                card.featured
                  ? "border-[#1e5a9a] pb-10 pt-10 shadow-md md:-translate-y-3"
                  : "border-[#c8d6e8]"
              )}
            >
              {/* Popular badge */}
              {card.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-[#1e5a9a] px-4 py-1 text-xs font-semibold tracking-wide text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Label */}
              <p
                className={cn(
                  "text-xs font-semibold uppercase tracking-widest",
                  card.featured ? "text-[#1e5a9a]" : "text-[#5c7fa3]"
                )}
              >
                {card.label}
              </p>

              {/* Price */}
              <div className="mt-5 flex items-end gap-1.5">
                {card.pricePrefix && (
                  <span className="mb-1.5 text-sm font-medium text-[#7496b8]">
                    {card.pricePrefix}
                  </span>
                )}
                <span
                  className={cn(
                    "font-extrabold leading-none tracking-tight",
                    card.featured
                      ? "text-5xl text-[#0c3a6a]"
                      : "text-4xl text-[#1a4e82]"
                  )}
                >
                  {card.price}
                </span>
                <span className="mb-1 text-sm font-medium text-[#7496b8]">
                  {card.priceSuffix}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-[#3d5f82]">
                {card.description}
              </p>

              {/* Divider */}
              <div
                className={cn(
                  "my-6 h-px",
                  card.featured ? "bg-[#c8d6e8]" : "bg-[#e2eaf3]"
                )}
              />

              {/* Features */}
              <ul className="space-y-2.5">
                {card.features.map((feature) => (
                  <li
                    key={feature}
                    className={cn(
                      "flex items-start gap-2.5 text-sm",
                      card.featured
                        ? "text-[#1a4e82]"
                        : "text-[#3d5f82]"
                    )}
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Per-card CTA */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className={cn(
                    "flex w-full items-center justify-center rounded-full py-2.5 text-sm font-semibold transition-all duration-200",
                    card.featured
                      ? "bg-[#1e5a9a] text-white hover:bg-[#174d88]"
                      : "border border-[#b0c6df] text-[#1e5a9a] hover:border-[#1e5a9a] hover:bg-[#f0f5fb]"
                  )}
                >
                  Get a quote
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            "Free site assessment with every quote",
            "No hidden call-out fees",
            "Fully insured & licensed",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-[#3d5f82]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="text-[#1e5a9a]"
              >
                <path
                  d="M3.5 8.5L6.5 11.5L12.5 5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}