import React from "react";
import ThreeGridCardTemplate from "./ThreeGridCardTemplate";

export const metadata = {
  keywords: "three grid template, three grid card, three grid template section",
  description:
    "Three grid card template, and it is fully responsive. It will give a separate and unique design, and it is also easy to understand the section.",
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
    title: "Three Grid card Template",
    description:
      "Three grid card template, and it is fully responsive. It will give a separate and unique design, and it is also easy to understand the section.",
    url: "https://makecomponents.com/card/three-grid-card-template",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/three-grid-card-template`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/card/card003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/card/card003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Card components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/card/three-grid-card-template`),
  title: {
    default: `Three Grid card Template`,
  },
  alternates: {
    canonical: "https://makecomponents.com/card/three-grid-card-template",
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
        name: "Gradient card css",
        item: "https://makecomponents.com/card/three-grid-card-template",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThreeGridCardTemplate />
    </div>
  );
}
