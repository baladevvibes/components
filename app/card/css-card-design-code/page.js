import React from 'react'
import CssCardDesignCode from './CssCardDesignCode'

export const metadata = {
  keywords:
    "css card design code, card section design, Card UI design web",
  description:
    "css card design codeand with clean design proper color code. It fully responsive.",
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
    title: "css card design code",
    description:
      "css card design codeand with clean design proper color code. It fully responsive.",
    url: "https://makecomponents.com/card/css-card-design-code",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/css-card-design-code`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/card/card008.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/card/card008.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "css card design code",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/card/css-card-design-code`),
  title: {
    default: "css card design code",
  },
  alternates: {
    canonical: "https://makecomponents.com/card/css-card-design-code",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "css card design code",
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
        name: "css card design code",
        item: "https://makecomponents.com/card/css-card-design-code",
      },
    ],
  };
  return (
    <div>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <CssCardDesignCode/>
    </div>
  )
}
