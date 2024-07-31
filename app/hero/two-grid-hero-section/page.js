import React from 'react'
import TwoGridHeroSection from './TwoGridHeroSection'

export const metadata = {
  keywords:
    "tailwind hero section, Tailwind hero section free, Tailwind hero section free css",
  description:
    "This is a hero session. Two grid-based concepts and designs for a clothing products company. It is fully responsive.",
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
    title: "Two Grid Hero Section",
    description:
      "This is a hero session. Two grid-based concepts and designs for a clothing products company. It is fully responsive.",
    url: "https://makecomponents.com/hero/two-grid-hero-section",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/hero/two-grid-hero-section`,
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
  metadataBase: new URL(`https://makecomponents.com/hero/two-grid-hero-section`),
  title: {
    default: `Two Grid Hero Section`,
  },
  alternates: {
    canonical: "https://makecomponents.com/hero/two-grid-hero-section",
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
    ],
  };
  return (
    <div>
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <TwoGridHeroSection/>
    </div>
  )
}
