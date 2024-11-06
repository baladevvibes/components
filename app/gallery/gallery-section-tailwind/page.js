import React from 'react'
import GallerySectionTailwind from './GallerySectionTailwind'

export const metadata = {
  keywords: "Gallery Section tailwind ,Gallery Section tailwind css,Tailwind responsive image gallery",
  description:
    "Gallery Section tailwind and with clean design and proper color code. It is fully responsive.",
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
    title: "Gallery Section tailwind",
    description:
      "Gallery Section tailwind and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/gallery/gallery-section-tailwind",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/gallery/gallery-section-tailwind`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/gallery/gallery001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/gallery/gallery001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Gallery Section tailwind",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/gallery/gallery-section-tailwind`),
  title: {
    default: "Gallery Section tailwind ",
  },
  alternates: {
    canonical: "https://makecomponents.com/gallery/gallery-section-tailwind",
  },
};




export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Gallery Section tailwind",
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
        name: "Gallery components",
        item: "https://makecomponents.com/gallery",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Gallery Section tailwind",
        item: "https://makecomponents.com/gallery/gallery-section-tailwind",
      },
    ],
  };
  return (
    <div>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <GallerySectionTailwind/>
    </div>
  )
}
