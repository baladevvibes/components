import React from "react";
import Card from "./Card";
export const metadata = {
  keywords:
    "card tailwind css components, free card section, tailwind card component, Tailwind card component react, Tailwind card component css",
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
    title: "7+ Card section tailwind css",
    description:
      "Card section tailwind css. Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.",
    url: "https://makecomponents.com/card",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card`,
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
        alt: "card components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/card`),
  title: {
    default: `7+ Card section tailwind css`,
  },
  alternates: {
    canonical: "https://makecomponents.com/card",
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
        name: "Card Components",
        item: "https://makecomponents.com/card",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Card />
    </div>
  );
}
