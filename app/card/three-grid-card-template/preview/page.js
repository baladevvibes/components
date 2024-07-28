import React from "react";
import "../../../style.css";
import ThreeGridCardTemplatePre from "./ThreeGridCardTemplatePre";

export const metadata = {
  keywords: "three grid design css, three grid design, three grid template",
  description:
    "Three grid card template, and it is fully responsive. It will give a separate and unique design, and it is also easy to understand the section.",
  icons: {
    icon: "../../favicon.ico",
    shortcut: "../../favicon.ico",
    apple: "../../favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "../../favicon.ico",
    },
  },
  openGraph: {
    title: "Three Grid card Template preview",
    description:
      "Three grid card template, and it is fully responsive. It will give a separate and unique design, and it is also easy to understand the section.",
    url: "https://makecomponents.com/card/three-grid-card-template/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/three-grid-card-template/preview`,
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
  metadataBase: new URL(
    `https://makecomponents.com/card/three-grid-card-template/preview`
  ),
  title: {
    default: `Three Grid card Template preview`,
  },
  alternates: {
    canonical:
      "https://makecomponents.com/card/three-grid-card-template/preview",
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
      {
        "@type": "ListItem",
        position: 4,
        name: "Gradient card css preview",
        item: "https://makecomponents.com/card/three-grid-card-template/preview",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThreeGridCardTemplatePre />
    </>
  );
}
