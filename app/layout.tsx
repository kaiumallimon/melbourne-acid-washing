import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://melbourneacidwashing.com"),
  title: {
    default: "Melbourne Acid Washing | Professional Exterior Cleaning",
    template: "%s",
  },
  description:
    "Acid washing and pressure cleaning specialists for driveways, render, brick, patios, and commercial sites across Melbourne.",
  openGraph: {
    title: "Melbourne Acid Washing",
    description:
      "Professional exterior cleaning services across Melbourne with detail-focused surface restoration.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melbourne Acid Washing",
    description:
      "Acid washing and pressure cleaning specialists for Melbourne homes and businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pt-20 md:pt-22">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
