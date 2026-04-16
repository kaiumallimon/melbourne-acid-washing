"use client"

import { useState } from "react"

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
    <section className="bg-[#eceff4] py-24 sm:py-28">
      <div className="mx-auto w-[min(1120px,calc(100%-1.5rem))]">
        <h2 className="font-heading text-5xl leading-tight font-semibold text-[#0f2038] sm:text-6xl">
          Frequently asked questions
        </h2>

        <div className="mt-8 divide-y divide-slate-300/70 rounded-2xl border border-slate-300/70 bg-white px-5 md:px-8">
          {faqItems.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <article key={item.question} className="py-5">
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <h3 className="text-2xl font-semibold text-[#0f2038]">{item.question}</h3>
                  <span className="text-3xl font-light text-slate-600">{isActive ? "-" : "+"}</span>
                </button>
                {isActive ? (
                  <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-600">{item.answer}</p>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
