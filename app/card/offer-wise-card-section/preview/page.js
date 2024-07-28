import React from "react";
import OfferWiseCardSectionPre from "./OfferWiseCardSectionPre";

export const metadata = {
  keywords:
    "Gradient card css, gradient card design, Gradient card design template",
  description:
    "This layout and hover mean gradient color will display. It has a different layout and grid design in this preview section.",
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
    title: "Gradient card css preview",
    description:
      "This layout and hover mean gradient color will display. It has a different layout and grid design in this preview section.",
    url: "https://makecomponents.com/card/offer-wise-card-section/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/offer-wise-card-section/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/card/card001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/card/card001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Card components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/card/offer-wise-card-section/preview`
  ),
  title: {
    default: `Gradient card css preview`,
  },
  alternates: {
    canonical:
      "https://makecomponents.com/card/offer-wise-card-section/preview",
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
        item: "https://makecomponents.com/card/offer-wise-card-section",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Gradient card css preview",
        item: "https://makecomponents.com/card/offer-wise-card-section/preview",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OfferWiseCardSectionPre />
    </div>
  );
}
