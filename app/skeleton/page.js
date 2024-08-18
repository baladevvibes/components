import React from 'react'
import SkeletonCard from './SkeletonCard'

export const metadata = {
  keywords:
    "Skeleton components tailwind css, Skeleton components tailwind,  Skeleton components",
  description:
    "Skeleton components tailwind css. Skeleton loading design and lots of design..",
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
    title: "Skeleton components tailwind css",
    description:
      "Skeleton components tailwind css. Skeleton loading design and lots of design.",
    url: "https://makecomponents.com/skeleton",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/skeleton`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/skeleton/skeleton002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        secure_url:"https://makecomponents.com/Image/skeleton/skeleton002.webp"
      },
      {
        url: "https://makecomponents.com/Image/skeleton/skeleton002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Skeleton components",
        secure_url:"https://makecomponents.com/Image/skeleton/skeleton002.webp"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/skeleton`),
  title: {
    default: `Skeleton components tailwind css`,
  },
  alternates: {
    canonical: "https://makecomponents.com/skeleton",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Skeleton Components",
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
        name: "Skeleton Components",
        item: "https://makecomponents.com/skeleton",
      },
    ],
  };
  return (
    <div>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SkeletonCard/>
    </div>
  )
}
