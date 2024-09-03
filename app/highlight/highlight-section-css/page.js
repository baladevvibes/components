import React from 'react'
import HighLightSectionCss from './HighLightSectionCss'

export const metadata = {
  keywords:
    "highlight section css example in html, highlight section css example , highlight in css",
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
    title: "highlight section css example ",
    description:
      "highlight section CSS example and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/highlight/highlight-section-css",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/highlight/highlight-section-css`,
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
        alt: "highlight section css example ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/highlight/highlight-section-css`),
  title: {
    default: "highlight section css example",
  },
  alternates: {
    canonical: "https://makecomponents.com/highlight/highlight-section-css",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "highlight section css example",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "highlight section css example",
        item: "https://makecomponents.com/highlight/highlight-section-css",
      },
    ],
  };
  return (
    <div>
      
               <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <HighLightSectionCss/>
    </div>
  )
}
