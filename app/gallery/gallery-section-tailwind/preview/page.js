import React from 'react'
import GallerySectionTailwindPre from './GallerySectionTailwindPre'



export const metadata = {
  keywords: "Gallery Section tailwind preview ,Tailwind image gallery grid,Gallery Tailwind React",
  description:
    "Gallery Section tailwind preview and with clean design and proper color code. It is fully responsive.",
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
    title: "Gallery Section tailwind preview",
    description:
      "Gallery Section tailwind preview and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/gallery/gallery-section-tailwind/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/gallery/gallery-section-tailwind/preview`,
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
        alt: "Gallery Section tailwind preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/gallery/gallery-section-tailwind/preview`),
  title: {
    default: "Gallery Section tailwind preview ",
  },
  alternates: {
    canonical: "https://makecomponents.com/gallery/gallery-section-tailwind/preview",
  },
};


export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Gallery Section tailwind preview",
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
        item: "https://makecomponents.com/gallery/gallery-section-tailwind/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Gallery Section tailwind preview",
        item: "https://makecomponents.com/gallery/gallery-section-tailwind/preview",
      },
    ],
  };
  return (
    <div>
           <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GallerySectionTailwindPre/>
    </div>
  )
}
