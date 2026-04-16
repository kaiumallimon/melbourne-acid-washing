import type { Metadata } from "next";

import { HomeCta } from "@/components/site/home/home-cta";
import { HomeHero } from "@/components/site/home/home-hero";
import { ProcessSection } from "@/components/site/home/process-section";
import { ServicesPreview } from "@/components/site/home/services-preview";
import { TrustStrip } from "@/components/site/home/trust-strip";
import { WhyChooseUs } from "@/components/site/home/why-choose-us";

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
      <ProcessSection />
      <WhyChooseUs />
      <HomeCta />
    </>
  );
}
