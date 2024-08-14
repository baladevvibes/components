import React from 'react'
import IconSideAlignmentPre from './IconSideAlignmentPre'


export const metadata = {
  keywords:
  "services section,services section website design,our services section design, service section design,section design",
  description:
    "This component create on 28/June/2024 using CSS framework tailwindcss. It fully responsive component.",
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
    title: "Icon services section tailwind css preview",
    description:
      "This component create on 28/June/2024 using CSS framework tailwindcss. It fully responsive component.",
    url: "https://makecomponents.com/services/icon-side-alignment/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/services/icon-side-alignment/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/services/services002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/services/services002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Icon services section tailwind css preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/services/icon-side-alignment/preview`
  ),
  title: {
    default: "Icon services section tailwind css preview",
  },
  alternates: {
    canonical:
      "https://makecomponents.com/services/icon-side-alignment/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Icon services section tailwind css",
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
        name: "Services component tailwind css",
        item: "https://makecomponents.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Icon services section tailwind css",
        item: "https://makecomponents.com/services/icon-side-alignment",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Icon services section tailwind css preview",
        item: "https://makecomponents.com/services/icon-side-alignment/preview",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <IconSideAlignmentPre/>
    </div>
  )
}
