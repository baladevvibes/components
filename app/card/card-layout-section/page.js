import React from "react";
import CardLayoutSection from "./CardLayoutSection";

export const metadata = {
  keywords:
    "Tailwind responsive card grid,Tailwind responsive card grid css,Tailwind card grid, Tailwind card grid template, Tailwind card grid template html",
  description:
    "Card layout section. Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.",
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
    title: "Card layout section",
    description:
      "Card layout section. Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design. It is card section",
    url: "https://makecomponents.com/card/card-layout-section",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/card-layout-section`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/card/card005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/hero/card005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "card components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/card/card-layout-section`),
  title: {
    default: `Card layout section`,
  },
  alternates: {
    canonical: "https://makecomponents.com/card/card-layout-section",
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
        name: "Card components",
        item: "https://makecomponents.com/card",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Card layout section",
        item: "https://makecomponents.com/card/card-layout-section",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CardLayoutSection />
    </div>
  );
}
