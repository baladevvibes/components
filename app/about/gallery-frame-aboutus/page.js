import React from 'react'
import GalleryFrameAboutUs from './GalleryFrameAboutUs'

export const metadata = {
  keywords:
    "Gallery frame about us tailwind css example html,Gallery frame , tailwind css example",
  description:
    "This component create using CSS framework tailwindcss. It fully responsive component.",
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
    title: "Gallery frame about us tailwind css example html",
    description:
      "This component create using CSS framework tailwindcss. It fully responsive component.",
    url: "https://makecomponents.com/about/gallery-frame-aboutus",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/about/gallery-frame-aboutus`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/about/about001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/about/about001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "about components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/about/gallery-frame-aboutus`
  ),
  title: {
    default: "Gallery frame about us tailwind css example html",
  },
  alternates: {
    canonical:
      "https://makecomponents.com/about/gallery-frame-aboutus",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Gallery frame about us tailwind css example html",
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
        name: "About components",
        item: "https://makecomponents.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Gallery frame about us tailwind css example html section",
        item: "https://makecomponents.com/about/gallery-frame-aboutus",
      },
    ],
  };
  return (
    <div>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryFrameAboutUs/></div>
  )
}
