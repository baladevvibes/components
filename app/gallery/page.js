import React from 'react'
import GalleryCard from './GalleryCard'

export const metadata = {
  keywords: "Gallery section example tailwind css free , Tailwind About us page free, Free Tailwind templates",
  description:
    "There are many templates on this page. It will have different templates that are available, and it also has free code",
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
    title: "Gallery section example tailwind css",
    description:
      "Gallery section example tailwind css. zThere are many templates on this page. It will have different templates that are available, and it also has free code",
    url: "https://makecomponents.com/gallery",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/gallery`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/gallery/gallery001.webp", // Must be an absolute URL
      },
      {
        url: "https://makecomponents.com/Image/gallery/gallery001.webp", // Must be an absolute URL
        alt: "Gallery section example tailwind csss",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/gallery`
  ),
  title: {
    default: "Gallery section example tailwind css",
  },
  alternates: {
    canonical: "https://makecomponents.com/gallery",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Blog template ",
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
        name: "Gallery section example tailwind css",
        item: "https://makecomponents.com/gallery",
      },
    ],
  };
  return (
    <div>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryCard/>
    </div>
  )
}