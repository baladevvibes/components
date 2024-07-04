import React from "react";
import BackgroundLayerSection from "./BackgroundLayerSection";

export const metadata = {
  keywords:
    "free header section,responsive header tailwind, background layer hero section",
    description:
    "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make chnage the design.",
  icons: {
    icon: "../favicon.ico",
    shortcut: "../favicon.ico",
    apple: "../favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "../favicon.ico",
    },
  },
  openGraph: {
    title: "Background layer hero section",
    description:
      "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make chnage the design. It is hero section",
    url: "https://makecomponents.com/hero/background-layer-hero-section",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/hero/background-layer-hero-section`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/hero/hero003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/hero/hero003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "hero components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/hero/background-layer-hero-section`
  ),
  title: {
    default: `Background layer hero section`,
  },
  alternates: {
    canonical: "https://makecomponents.com/hero/background-layer-hero-section",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://makecomponents.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hero components",
        item: "https://makecomponents.com/hero/background-layer-hero-section",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Background layer hero section",
        item: "https://makecomponents.com/hero/background-layer-hero-section/background-layer-hero-section",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="product-jsonld"
      />
      <BackgroundLayerSection />
    </div>
  );
}
