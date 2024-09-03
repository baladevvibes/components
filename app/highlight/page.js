import React from 'react'
import HighlightCard from './HighlightCard'

export const metadata = {
  keywords:
    "Highlight components css in html, Highlight components css , highlight in css",
  description:
    "highlight section CSS example and with clean design and proper color code. It is fully responsive.",
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
    title: "Highlight components css ",
    description:
      "highlight section CSS example and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/highlight",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/highlight`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/highlight/highlight004.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/highlight/highlight004.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Highlight components css ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/highlight`),
  title: {
    default: "Highlight components css",
  },
  alternates: {
    canonical: "https://makecomponents.com/highlight",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Highlight components css",
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
        name: "highlight components",
        item: "https://makecomponents.com/highlight",
      },
    ],
  };
  return (
    <div>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HighlightCard/>
    </div>
  )
}
