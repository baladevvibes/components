import React from 'react'
import SIdeHalfGridAboutPre from './SIdeHalfGridAboutPre'

export const metadata = {
  keywords: "about us page template,About us page template free, About us",
  description:
    "Side-half grid about section preview. It's a new design and professional for the building base website.",
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
    title: "Side half grid about section preview",
    description:
      "Side-half grid about section preview. It's a new design and professional for the building base website.",
    url: "https://makecomponents.com/about/side-half-grid-about-section/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/about/side-half-grid-about-section/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/about/about003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/about/about003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "about components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/about/side-half-grid-about-section/preview`
  ),
  title: {
    default: "Side half grid about section preview",
  },
  alternates: {
    canonical: "https://makecomponents.com/about/side-half-grid-about-section/preview",
  },
};
export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "About Section",
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
        name: "About component",
        item: "https://makecomponents.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Side half grid about section",
        item: "https://makecomponents.com/about/side-half-grid-about-section",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Side half grid about section preview",
        item: "https://makecomponents.com/about/side-half-grid-about-section/preview",
      },
    ],
  };
  return (
    <div>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <SIdeHalfGridAboutPre/>
    </div>
  )
}
