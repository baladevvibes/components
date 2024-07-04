import React from "react";
import HeroCard from "./HeroCard";

export const metadata = {
  keywords:
    "tailwind css header example,header tailwind css,tailwind css header example",
    description:
    "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.",
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
    title: "2+ Hero section tailwind css",
    description:
      "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.",
    url: "https://makecomponents.com/hero",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/hero`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/hero/hero002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/hero/hero002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "hero components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/hero`
  ),
  title: {
    default: `2+ Hero section tailwind css`,
  },
  alternates: {
    canonical: "https://makecomponents.com/hero",
  },
};

export default function Hero() {
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
        name: "Hero Components",
        item: "https://makecomponents.com/hero",
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
      <HeroCard />
    </div>
  );
}
