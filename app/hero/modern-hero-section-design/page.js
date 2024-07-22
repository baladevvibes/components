import React from 'react'
import ModernHeroSect from './ModernHeroSect'

export const metadata = {
  keywords:
    "hero section design template, Hero section design template word, Hero section design template free",
  description:
    "Many hero section in modern day. They are unique, give a separate template to read, and are attractive.",
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
    title: "Modern hero section design",
    description:
      "Many hero section in modern day. They are unique, give a separate template to read, and are attractive.",
    url: "https://makecomponents.com/hero/modern-hero-section-design",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/hero/modern-hero-section-design`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/hero/hero004.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/hero/hero004.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "hero components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/hero/modern-hero-section-design`
  ),
  title: {
    default:  "Modern hero section design",
  },
  alternates: {
    canonical:
      "https://makecomponents.com/hero/modern-hero-section-design",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "name": "Tailwind Hero section",
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
        name: "Modern hero section design",
        item: "https://makecomponents.com/hero/modern-hero-section-design",
      },
    ],
  };
  return (
    <div>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <ModernHeroSect/>
    </div>
  )
}
