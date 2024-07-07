import React from "react";
import SemiCardDesign from "./SemiCardDesign";

export const metadata = {
  keywords:
    "Tailwind css card grid example, Card Tailwind CSS, Tailwind CSS card grid, Card tailwind css example, Tailwind responsive card grid",
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
    title: "Semi circle design",
    description:
      "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design. It is hero section",
    url: "https://makecomponents.com/card/semi-card-design",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/semi-card-design`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/card/card004.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/card/card004.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Semi Circle Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/card/semi-card-design`),
  title: {
    default: `Semi circle design`,
  },
  alternates: {
    canonical: "https://makecomponents.com/card/semi-card-design",
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
        name: "Semi card design",
        item: "https://makecomponents.com/card/semi-card-design",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SemiCardDesign />
    </div>
  );
}
