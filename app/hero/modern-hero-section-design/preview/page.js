import React from 'react'
import ModernHeroSectPre from './ModernHeroSectPre'

export const metadata = {
  keywords:
    "modern hero section design, modern hero section, hero section ui design,",
  description:
    "Many hero section in modern day. They are unique, give a separate template to read, and are attractive.",
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
    title: "Modern hero section design",
    description:
      "Many hero section in modern day. They are unique, give a separate template to read, and are attractive.",
    url: "https://makecomponents.com/hero/modern-hero-section-design/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/hero/modern-hero-section-design/preview`,
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
    `https://makecomponents.com/hero/modern-hero-section-design/preview`
  ),
  title: {
    default:  "Modern hero section design preview",
  },
  alternates: {
    canonical:
      "https://makecomponents.com/hero/modern-hero-section-design/preview",
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
      {
        "@type": "ListItem",
        position: 4,
        name: "Modern hero section design preview",
        item: "https://makecomponents.com/hero/modern-hero-section-design/preview",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <ModernHeroSectPre/>
    </div>
  )
}
