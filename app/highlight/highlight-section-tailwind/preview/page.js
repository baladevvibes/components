import React from 'react'
import HighlightSectionTailwindPre from './HighlightSectionTailwindPre'


export const metadata = {
  keywords:
    "highlight section tailwind css, Highlight section tailwind css example, Highlight section tailwind",
  description:
    "Highlight section background is sticky, and scroll means content only moves. It's a fully icon- and content-based design for the highlight area.",
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
    title: "highlight section tailwind preview",
    description:
      "Highlight section background is sticky, and scroll means content only moves. It's a fully icon- and content-based design for the highlight area.",
    url: "https://makecomponents.com/highlight/highlight-section-tailwind/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/highlight/highlight-section-tailwind/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/highlight/highlight002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/highlight/highlight002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "highlight section tailwind preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/highlight/highlight-section-tailwind/preview`
  ),
  title: {
    default: `highlight section tailwind preview`,
  },
  alternates: {
    canonical:
      "https://makecomponents.com/highlight/highlight-section-tailwind/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "@name": "highlight section tailwind css",
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
        name: "highlight section tailwind",
        item: "https://makecomponents.com/highlight/highlight-section-tailwind",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "highlight section tailwind preview",
        item: "https://makecomponents.com/highlight/highlight-section-tailwind/preview",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <HighlightSectionTailwindPre/>
    </div>
  )
}
