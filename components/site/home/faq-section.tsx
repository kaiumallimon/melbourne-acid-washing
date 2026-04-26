"use client"

import { useState } from "react"

import { Eyebrow } from "@/components/typography"

const faqItems = [
  {
    question: "How much does a full acid wash cost?",
    answer:
      "Single driveway starts from $200. Standard double driveway is a maximum of $250. Quotes start at $200 and vary depending on the size of the area — for jobs over 100 sqm, the quote will be discounted further and are determined either through photos or in person. For house exterior washing, a standard single-storey 3-bedroom is minimum $250 and maximum $500. For double-storey homes, quotes are determined in person or via photos.",
  },
  {
    question: "Are your acid washing chemicals safe to use?",
    answer:
      "Absolutely. We use the highest percentage of concentrated chemicals that are legally available for domestic and public use cases, which comply with Victorian bio-chem regulations. We only invest in the best quality Australian-sourced materials that are completely biodegradable.",
  },
  {
    question: "Do you resurface?",
    answer:
      "We sure do. We provide professional resurfacing using our best Australian-made coloured sealer with the widest colour range in Australia to choose from.",
  },
]

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto w-[min(1240px,calc(100%-1.5rem))]">
        <Eyebrow className="mb-10">FAQ</Eyebrow>
        <h2 className="mx-auto mt-3 max-w-4xl text-center font-heading text-5xl leading-tight font-semibold text-[#0f2038] sm:text-6xl">
          Frequently asked questions
        </h2>

        <div className="mx-auto mt-10 max-w-5xl border-y border-slate-300/70">
          {faqItems.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <article key={item.question} className="border-b border-slate-300/70 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="flex w-full items-start justify-between gap-5 py-6 text-left md:py-7"
                  aria-expanded={isActive}
                >
                  <h3 className="text-lg leading-tight font-bold text-[#0f2038] md:text-xl">{item.question}</h3>
                  <span className="mt-1 text-xl font-semibold text-slate-500">{isActive ? "-" : "+"}</span>
                </button>

                <div
                  className={
                    isActive
                      ? "grid grid-rows-[1fr] transition-all duration-400 ease-out"
                      : "grid grid-rows-[0fr] transition-all duration-300 ease-in"
                  }
                >
                  <div className="overflow-hidden">
                    <p
                      className={
                        isActive
                          ? "max-w-4xl pb-6 text-lg leading-8 text-slate-600 opacity-100 transition-opacity duration-300 md:pb-7"
                          : "max-w-4xl pb-6 text-lg leading-8 text-slate-600 opacity-0 transition-opacity duration-200 md:pb-7"
                      }
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}