import type { Metadata } from "next";

import { FaqSection } from "@/components/site/home/faq-section";
import { HomeCta } from "@/components/site/home/home-cta";
import { HomeHero } from "@/components/site/home/home-hero";
import { ServicesPreview } from "@/components/site/home/services-preview";
import { TestimonialsSection } from "@/components/site/home/testimonials-section";
import { TrustStrip } from "@/components/site/home/trust-strip";

export const metadata: Metadata = {
  title: "Melbourne Acid Washing | Professional Exterior Cleaning",
  description:
    "Acid washing and pressure cleaning specialists for homes, driveways, render, and commercial sites across Melbourne.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <ServicesPreview />
      <TestimonialsSection />
      <FaqSection />
      <HomeCta />
    </>
  );
}
