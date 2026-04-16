import type { Metadata } from "next"

import { GalleryBento } from "@/components/site/gallery/gallery-bento"
import { HomeCta } from "@/components/site/home/home-cta"
import { PageHero } from "@/components/site/page-hero"

export const metadata: Metadata = {
  title: "Gallery | Melbourne Acid Washing",
  description:
    "Explore before-and-after project results from driveway, facade, patio, and commercial cleaning jobs across Melbourne.",
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Before and after outcomes from real Melbourne cleaning projects"
        description="Browse the bento gallery to view restoration examples across key surface categories and property types."
        badgeText="Driveway, brick, patio, and commercial work"
      />
      <GalleryBento />
      <HomeCta />
    </>
  )
}
