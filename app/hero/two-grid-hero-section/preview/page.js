import React from 'react'
import TwoGridHeroSectionPre from './TwoGridHeroSectionPre'

export const metadata = {
  keywords:
    "Hero section Tailwind React, Tailwind hero section free, Hero section tailwind react example",
  description:
    "This is a hero session. Two grid-based concepts and designs for a clothing products company. It is fully responsive.",
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
    title: "Two Grid Hero Section preview",
    description:
      "This is a hero session. Two grid-based concepts and designs for a clothing products company. It is fully responsive.",
    url: "https://makecomponents.com/hero/two-grid-hero-section/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/hero/two-grid-hero-section/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/hero/hero002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/hero/hero002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Hero components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/hero/two-grid-hero-section/preview`),
  title: {
    default: `Two Grid Hero Section preview`,
  },
  alternates: {
    canonical: "https://makecomponents.com/hero/two-grid-hero-section/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Hero Section",
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
        name: "Hero components",
        item: "https://makecomponents.com/hero",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Two Grid Hero Section",
        item: "https://makecomponents.com/hero/two-grid-hero-section",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Two Grid Hero Section Preview",
        item: "https://makecomponents.com/hero/two-grid-hero-section/preview",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <TwoGridHeroSectionPre/>
    </div>
  )
}
