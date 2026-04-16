import { Eyebrow } from "@/components/typography"
import { cn } from "@/lib/utils"

type Testimonial = {
  quote: string
  name: string
  handle: string
  featured?: boolean
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Our driveway and front path looked freshly installed after one job. The team explained each step and delivered exactly what was promised.",
    name: "Leslie Alexander",
    handle: "@lesliealexander",
  },
  {
    quote:
      "The acid wash removed years of staining that standard pressure cleaning could not touch. Professional, tidy, and fast response.",
    name: "Michael Foster",
    handle: "@michaelfoster",
  },
  {
    quote:
      "From initial call to final walkthrough, everything felt structured and reliable. Great communication and seriously strong results.",
    name: "Brenna Goyette",
    handle: "@brennagoyette",
    featured: true,
  },
  {
    quote:
      "Our rendered walls were cleaned safely with no damage. The finish consistency across the whole facade was impressive.",
    name: "Leonard Krasner",
    handle: "@leonardkrasner",
  },
  {
    quote:
      "Commercial site cleanup was handled around operating hours with minimal disruption. Exactly the level of planning we needed.",
    name: "Floyd Miles",
    handle: "@floydmiles",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-[#06112a] py-24 sm:py-28">
      <div className="mx-auto w-[min(1240px,calc(100%-1.5rem))]">
        <Eyebrow className="text-center text-primary mb-10">Testimonials</Eyebrow>
        <h2 className="mx-auto mt-2 max-w-4xl text-center font-heading text-4xl leading-tight font-semibold text-white sm:text-6xl">
          We have worked with thousands of amazing people
        </h2>

        <div className="mt-12 grid gap-5 lg:auto-rows-fr lg:grid-cols-4">
          <QuoteCard {...testimonials[0]} className="lg:col-start-1 lg:row-start-1" />

          <QuoteCard
            {...testimonials[2]}
            className="lg:col-span-2 lg:col-start-2 lg:row-start-1"
          />

          <QuoteCard
            quote="Excellent quality control. They tested and adjusted pressure around delicate edges before full cleaning."
            name="Cameron Williamson"
            handle="@cameronw"
            className="max-lg:hidden lg:col-start-4 lg:row-start-1"
          />

          <QuoteCard {...testimonials[1]} className="lg:col-start-1 lg:row-start-2" />
          <QuoteCard {...testimonials[3]} compact className="lg:col-start-2 lg:row-start-2" />
          <QuoteCard {...testimonials[4]} compact className="lg:col-start-3 lg:row-start-2" />

          <QuoteCard
            quote="Fast quote turnaround and no surprises on pricing. Highly recommended for tough stain jobs."
            name="Jenny Wilson"
            handle="@jennywilson"
            className="max-lg:hidden lg:col-start-4 lg:row-start-2"
          />
        </div>
      </div>
    </section>
  )
}

type QuoteCardProps = Testimonial & {
  compact?: boolean
  className?: string
}

function QuoteCard({ quote, name, handle, featured, compact, className }: QuoteCardProps) {
  const initials = `${name.split(" ")[0]?.[0] ?? ""}${name.split(" ")[1]?.[0] ?? ""}`

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100 backdrop-blur-sm",
        featured ? "md:p-8" : "",
        compact ? "p-5" : "",
        className
      )}
    >
      <p className={cn("leading-8 text-slate-100", featured ? "text-4xl font-bold leading-tight" : "text-3xl")}> 
        &quot;
      </p>
      <p className={cn("mt-2 flex-1 text-slate-200", featured ? "text-3xl leading-tight font-semibold" : "text-lg leading-8")}>
        {quote}
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary allow-rounded text-xs font-bold text-white">
          {initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-sm text-slate-400">{handle}</p>
        </div>
      </div>
    </article>
  )
}
