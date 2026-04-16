"use client"

import { useState } from "react"

import { Eyebrow } from "@/components/typography"

const faqItems = [
  {
    question: "Do you use acid washing on every job?",
    answer:
      "No. We choose method by surface type and contamination level. Acid treatment is only used where appropriate and always controlled.",
  },
  {
    question: "How quickly can I get a quote?",
    answer:
      "Most website enquiries receive a response within 2 hours during business times. Complex commercial jobs may require a site visit.",
  },
  {
    question: "Can you remove oil and rust stains from old concrete?",
    answer:
      "Yes, in most cases. We use staged treatment and pressure methods to lift deep stains while protecting the concrete finish.",
  },
  {
    question: "Do you service all Melbourne suburbs?",
    answer:
      "Yes. We provide residential, commercial, and industrial exterior cleaning across all Melbourne suburbs.",
  },
  {
    question: "Is the process safe for rendered and painted surfaces?",
    answer:
      "Yes, with the right approach. We adjust pressure and chemistry for sensitive finishes and perform controlled spot checks.",
  },
  {
    question: "Do you provide one-off and recurring maintenance cleans?",
    answer:
      "Absolutely. You can book a one-off restoration or discuss scheduled maintenance cleaning for homes and business sites.",
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
