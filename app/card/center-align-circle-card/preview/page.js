import React from "react";
import CenterAlignCircleCardPre from "./CenterAlignCircleCardPre";

export const metadata = {
  keywords:
    "tailwind css card design ,Center card in tailwind example, Center card in tailwind example css, Tailwind center horizontally, tailwind css center card",
  description:
    "Center align circle card section preview. Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.",
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
    title: "Center align circle card section preview",
    description:
      "Center align circle card section preview. Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design. It is card section",
    url: "https://makecomponents.com/card/center-align-circle-card/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/center-align-circle-card/preview`,
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
        alt: "Center align circle card section preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/card/center-align-circle-card/preview`),
  title: {
    default: `Center align circle card section preview`,
  },
  alternates: {
    canonical: "https://makecomponents.com/card/center-align-circle-card/preview",
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
        name: "Center align circle card",
        item: "https://makecomponents.com/card/center-align-circle-card/preview",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Center align circle card preview",
        item: "https://makecomponents.com/card/center-align-circle-card/preview",
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CenterAlignCircleCardPre />
    </div>
  );
}
