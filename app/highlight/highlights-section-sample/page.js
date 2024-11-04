import React from 'react'
import HighlightsSectionSample from './HighlightsSectionSample'

export const metadata = {
  keywords: "Highlight section sample ,Highlight section sample css,Highlight Tailwind React",
  description:
    "Highlight section sample and with clean design and proper color code. It is fully responsive.",
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
    title: "Highlight section sample",
    description:
      "Highlight section sample and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/highlight/highlights-section-sample",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/highlight/highlights-section-sample`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/highlight/highlight005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/highlight/highlight005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Highlight section sample",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/highlight/highlights-section-sample`),
  title: {
    default: "Highlight section sample ",
  },
  alternates: {
    canonical: "https://makecomponents.com/highlight/highlights-section-sample",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Highlight section sample",
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
        name: "Highlight section sample",
        item: "https://makecomponents.com/highlight/highlights-section-sample",
      },
    ],
  };
  return (
    <div>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <HighlightsSectionSample/>
    </div>
  )
}
