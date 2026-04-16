import type { Metadata } from "next"

import { GalleryBento } from "@/components/site/gallery/gallery-bento"
import { GalleryHero } from "@/components/site/gallery/gallery-hero"
import { HomeCta } from "@/components/site/home/home-cta"

export const metadata: Metadata = {
  title: "Gallery | Melbourne Acid Washing",
  description:
    "Explore before-and-after project results from driveway, facade, patio, and commercial cleaning jobs across Melbourne.",
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryBento />
      <HomeCta />
    </>
  )
}
