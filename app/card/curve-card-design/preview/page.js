import React from "react";
import CurveCardDesignPre from "./CurveCardDesignPre";

export const metadata = {
  keywords:
    "curve card tailwind css, Curve card tailwind css example, Tailwind card list, Tailwind card list html, Card Tailwind React",
  description:
    "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.This is Curve card design section preview",
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
    title: "Curve card design section preview",
    description:
      "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design. It is Curve card design section preview",
    url: "https://makecomponents.com/card/curve-card-design/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/curve-card-design/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/card/card006.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/card/card006.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "card components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/card/curve-card-design/preview`
  ),
  title: {
    default: `Curve card design section`,
  },
  alternates: {
    canonical: "https://makecomponents.com/card/curve-card-design/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Tailwind Card",
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
        name: "Curve card design",
        item: "https://makecomponents.com/card/curve-card-design",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Curve card design preview section",
        item: "https://makecomponents.com/card/curve-card-design/preview",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CurveCardDesignPre />
    </div>
  );
}
