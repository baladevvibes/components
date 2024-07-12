import React from "react";
import CardLayoutSectionPre from "./CardLayoutSectionPre";

export const metadata = {
  keywords:
    "tailwind card component,card tailwind css components, Card tailwind css components examples, Tailwind CSS card grid, Tailwind responsive card grid",
  description:
    "Card layout section preview.Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.It is card section preview",
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
    title: "Card layout section preview",
    description:
      "Card layout section. Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design. It is card section preview",
    url: "https://makecomponents.com/card/card-layout-section/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/card-layout-section/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/card/card005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/card/card005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "card components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/card/card-layout-section/preview`
  ),
  title: {
    default: `Card layout section preview`,
  },
  alternates: {
    canonical: "https://makecomponents.com/card/card-layout-section/preview",
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
        name: "card components",
        item: "https://makecomponents.com/card",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Card layout section",
        item: "https://makecomponents.com/card/card-layout-section",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Card layout section preview",
        item: "https://makecomponents.com/card/card-layout-section/preview",
      },
    ],
  };
  
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CardLayoutSectionPre />
    </div>
  );
}
